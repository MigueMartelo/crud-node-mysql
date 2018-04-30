const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if (err) {
                res.json(err);
            }
            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.save = (req, res) => {
    let body = req.body;

    req.getConnection((err, conn) => {
        conn.query(`INSERT INTO customer set ?`, [body], (err, customer) => {
            if (err) {
                res.json(err);
            }
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    let { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query(`SELECT * FROM customer WHERE id = ?`, [id], (err, customer) => {
            if (err) {
                res.json(err);
            }
            res.render('customer_edit', {
                data: customer[0]
            });
        });
    });
};

controller.update = (req, res) => {
    let data = req.body;
    let { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query(`UPDATE customer SET ? WHERE id = ?`, [data, id], (err, customer) => {
            if (err) {
                res.json(err);
            }
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    let { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query(`DELETE FROM customer WHERE id = ?`, [id], (err, customerDeleted) => {
            if (err) {
                res.json(err);
            }
            res.redirect('/');
        });
    });
};

module.exports = controller;
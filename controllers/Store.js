import db from '../db';


const Store = {

    async saveRideDetails(req, res) {

        const q = `INSERT INTO store(id, user_id, vehicle_model_id, package_id, 
            travel_type_id, from_area_id, to_area_id, from_city_id, to_city_id, 
            from_date, to_date, online_booking, mobile_site_booking, booking_created, from_lat, from_long, 
            to_lat, to_long, car_cancellation) 
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) returning *`

        const values = [
            req.body.id,
            req.body.user_id,
            req.body.vehicle_model_id,
            req.body.package_id,
            req.body.travel_type_id,
            req.body.from_area_id,
            req.body.to_area_id,
            req.body.from_city_id,
            req.body.to_city_id,
            req.body.from_date,
            req.body.to_date,
            req.body.online_booking,
            req.body.mobile_site_booking,
            req.body.booking_created,
            req.body.from_lat,
            req.body.from_long,
            req.body.to_lat,
            req.body.to_long,
            req.body.Car_Cancellation
        ];

        try {
            const { rows } = await db.query(q, values);
            return res.status(200).send({ 'message': "Data registered successfully" });
        }
        catch (error) {
            return res.status(400).send(error);
        }
    },

}

export default Store;
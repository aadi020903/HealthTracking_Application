const {
    exercises_all,
    exercises_bodyPart,
    exercises_equipment,
    exercises_target_muscle,
    all_body_parts,
    all_equipments,
    all_target_muscles,
    exercises_name,
    exercises_bodyPart_target,
    all_workout_plans,
    workout_plans_muscles
 } = require('../services/workout_planner_service.js');

exports.exercises_all = async (req, res) => {
    try {
      const data = await exercises_all(req,res);
      if (data.success) {
        res.status(200).json(data.data);
      }
    } catch (error) {
      res.status(500).json(data);
    }
  };

exports.exercises_bodyPart = async (req, res) => {
    try {
      const data = await exercises_bodyPart(req,res);
      if (data.success) {
        res.status(200).json(data.data);
      }
    } catch (error) {
        res.status(500).json(data);
    }
  };

exports.exercises_equipment = async (req, res) => {
    try {
      const data = await exercises_equipment(req,res);
      if (data.success) {
        res.status(200).json(data.data);
      }
    } catch (error) {
        res.status(500).json(data);
    }
  };

exports.exercises_target_muscle = async (req, res) => {
    try {
      const data = await exercises_target_muscle(req,res);
      if (data.success) {
        res.status(200).json(data.data);
      }
    } catch (error) {
        res.status(500).json(data);
    }
  };

exports.all_body_parts = async (req, res) => {
    try {
      const data = await all_body_parts(req,res);
      if (data.success) {
        res.status(200).json(data.data);
      }
    } catch (error) {
        res.status(500).json(data);
    }
  };

exports.all_equipments = async (req, res) => {
    try {
      const data = await all_equipments(req,res);
      if (data.success) {
        res.status(200).json(data.data);
      }
    } catch (error) {
        res.status(500).json(data);
    }
  };
  
exports.all_target_muscles = async (req, res) => {
    try {
      const data = await all_target_muscles(req,res);
      if (data.success) {
        res.status(200).json(data.data);
      }
    } catch (error) {
        res.status(500).json(data);
    }
  };

  exports.exercises_name = async (req, res) => {
    try {
      const data = await exercises_name(req,res);
      if (data.success) {
        res.status(200).json(data.data);
      }
    } catch (error) {
        res.status(500).json(data);
    }
  };

  exports.exercises_bodyPart_target = async (req, res) => {
    try {
      const data = await exercises_bodyPart_target(req,res);
      if (data.success) {
        res.status(200).json(data.data);
      }
    } catch (error) {
        res.status(500).json(data);
    }
  };

  exports.all_workout_plans = async (req, res) => {
    try {
      const data = await all_workout_plans(req,res);
      if (data.success) {
        res.status(200).json(data.data);
      }
    } catch (error) {
        res.status(500).json(data);
    }
  };

  exports.workout_plans_muscles = async (req, res) => {
    try {
      const data = await workout_plans_muscles(req,res);
      if (data.success) {
        res.status(200).json(data.data);
      }
    } catch (error) {
        res.status(500).json(data);
    }
  };
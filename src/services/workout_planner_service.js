const user_model = require("../models/user_model");
const axios = require("axios");
const host = "https://exercisedb.p.rapidapi.com";

exports.exercises_all = async (req, res) => {
  const options = {
    method: "GET",
    url: `${host}/exercises`,
    params: {
      limit: "10",
      offset: "0",
    },
    headers: {
      "x-rapidapi-key": process.env.x_rapidapi_key,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

exports.exercises_bodyPart = async (req, res) => {
  const bodyPart = req.body.bodyPart;
  const options = {
    method: "GET",
    url: `${host}/exercises/bodyPart/${bodyPart}`,
    params: {
      limit: "10",
      offset: "0",
    },
    headers: {
      "x-rapidapi-key": process.env.x_rapidapi_key,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

exports.exercises_equipment = async (req, res) => {
  const equipment = req.body.equipment;
  const options = {
    method: "GET",
    url: `${host}/exercises/equipment/${equipment}`,
    params: {
      limit: "10",
      offset: "0",
    },
    headers: {
      "x-rapidapi-key": process.env.x_rapidapi_key,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

exports.exercises_target_muscle = async (req, res) => {
  const target_muscle = req.body.target_muscle;
  const options = {
    method: "GET",
    url: `${host}/exercises/target/${target_muscle}`,
    params: {
      limit: "10",
      offset: "0",
    },
    headers: {
      "x-rapidapi-key": process.env.x_rapidapi_key,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

exports.exercises_target_muscle = async (req, res) => {
  const target_muscle = req.body.target_muscle;
  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/target/${target_muscle}`,
    params: {
      limit: "10",
      offset: "0",
    },
    headers: {
      "x-rapidapi-key": process.env.x_rapidapi_key,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

exports.all_body_parts = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    headers: {
      "x-rapidapi-key": process.env.x_rapidapi_key,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

exports.all_equipments = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/equipmentList",
    headers: {
      "x-rapidapi-key": process.env.x_rapidapi_key,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

exports.all_target_muscles = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/targetList",
    headers: {
      "x-rapidapi-key": process.env.x_rapidapi_key,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

exports.exercises_name = async (req, res) => {
  const excercise_name = req.body.excercise_name;
  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/name/${excercise_name}`,
    headers: {
      "x-rapidapi-key": process.env.x_rapidapi_key,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

exports.exercises_bodyPart_target = async (req, res) => {
  const bodyPart = req.body.bodyPart;
  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
    headers: {
      "x-rapidapi-key": process.env.x_rapidapi_key,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

exports.all_workout_plans = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://work-out-api1.p.rapidapi.com/search",
    headers: {
      "x-rapidapi-key": process.env.x_rapidapi_key,
      "x-rapidapi-host": "work-out-api1.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

exports.workout_plans_muscles = async (req, res) => {
  const muscles = req.body.muscles;
  const options = {
    method: "GET",
    params: { Muscles: `${muscles}` },
    url: "https://work-out-api1.p.rapidapi.com/search",
    headers: {
      "x-rapidapi-key": process.env.x_rapidapi_key,
      "x-rapidapi-host": "work-out-api1.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: Mar 2024
// This file contains the JS functions for index.html

const lengthAString = document.getElementById("size-one").innerHTML
const lengthBString = document.getElementById("size-two").innerHTML
const lengthCString = document.getElementById("size-three").innerHTML

const lengthA = parseFloat(lengthAString)
const lengthB = parseFloat(lengthBString)
const lengthC = parseFloat(lengthCString)

// using the cosine law
const angleA = Math.acos((lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)) * (180 / Math.PI)
const angleB = Math.acos((lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)) * (180 / Math.PI)
const angleC = Math.acos((lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)) * (180 / Math.PI)

const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

if (angleA == angleB && angleA == angleC) {
  document.getElementById("final-answer").innerHTML = "That matches the description of an equilateral triangle"

} else if (angleA != angleB && angleA != angleC && angleB != angleC) {
  document.getElementById("final-answer").innerHTML = "That matches the description of a scalene triangle"

} else if ((angleA != angleB && angleA == angleC) || (angleA == angleB && angleA != angleC)) {
  document.getElementById("final-answer").innerHTML = "That matches the description of an isosceles triangle"

} else {
  document.getElementById("final-answer").innerHTML = "That description does not fit in a triangle"

}

console.log(angleA)
console.log(angleB)
console.log(angleC)
console.log(sumOfAngles)
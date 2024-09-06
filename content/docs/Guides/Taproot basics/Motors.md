---
sys:
  pageId: "ae1a55fd-da77-4bb3-a3b8-4bd2b21b5269"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-09-03T23:13:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Motors.md"
title: "Motors"
date: "2024-09-03T23:13:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 127
toc: false
icon: ""
---

imports taproot [PID](https://www.youtube.com/watch?v=wkfEZmsQqiA) libraries

```cpp
#include "tap/algorithms/smooth_pid.hpp"
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
```

define constants for the motor to use

```cpp
static constexpr tap::motor::MotorId MOTOR_ID = tap::motor::MOTOR1;
static constexpr tap::can::CanBus CAN_BUS = tap::can::CanBus::CAN_BUS1;
static constexpr int DESIRED_RPM = 3000;
```

create a timer object and pid controller object

```cpp
// timer object
tap::arch::PeriodicMilliTimer sendMotorTimeout(2);

// PID algorithm
// PID explained: <https://www.youtube.com/watch?v=wkfEZmsQqiA>
static tap::algorithms::SmoothPidConfig pid_config_dt = {20, 0, 0, 0, 8000, 1, 0, 1, 0};
tap::algorithms::SmoothPid pidController(pid_config_dt);
```

Get drivers and pass it into the motor object

```cpp
tap::Drivers *drivers = src::DoNotUse_getDrivers();

// motor object
tap::motor::DjiMotor motor(drivers, MOTOR_ID, CAN_BUS, false, "cool motor");
```

since we are using motors we also have to initialize `CANBUS` which is the primary way the type-c talks to the motors.

```cpp
    Board::initialize();

    drivers->can.initialize();          // init CanBus to talk to motor
    motor.initialize();                 // init motor
```

Then whenever the `sendMotorTimeout` expires we want to send a command to the the motors.

This takes three steps:

- calculating the error with the PID algorithm using `runControllerDerivationError`
- set the motor object to go at the calculated output
- send the message with `encodeAndSendCanData`

```cpp
        if (sendMotorTimeout.execute())
        {
            // do the pid algorithm
            pidController.runControllerDerivateError(DESIRED_RPM - motor.getShaftRPM(), 1); 
            // set up msg so its ready to be sent
            motor.setDesiredOutput(static_cast<int32_t>(pidController.getOutput()));
            // send all msg to the motors
            drivers->djiMotorTxHandler.encodeAndSendCanData();                                            
        }
```

finally, outside of the timer, we have to read the position data coming from the motors continuously.

we do this with `pollCanData`

```cpp
        drivers->canRxHandler.pollCanData();                                                            // checks to see if a msg is waiting
        modm::delay_us(10);
```

### Code

```cpp
#include "tap/algorithms/smooth_pid.hpp"
#include "tap/board/board.hpp"

#include "drivers_singleton.hpp"

static constexpr tap::motor::MotorId MOTOR_ID = tap::motor::MOTOR1;
static constexpr tap::can::CanBus CAN_BUS = tap::can::CanBus::CAN_BUS1;
static constexpr int DESIRED_RPM = 3000;

// timer object
tap::arch::PeriodicMilliTimer sendMotorTimeout(2);

// PID algorithm
// PID explained: <https://www.youtube.com/watch?v=wkfEZmsQqiA>
static tap::algorithms::SmoothPidConfig pid_config_dt = {20, 0, 0, 0, 8000, 1, 0, 1, 0};
tap::algorithms::SmoothPid pidController(pid_config_dt);

int main()
{
    tap::Drivers *drivers = src::DoNotUse_getDrivers();

    // motor object
    tap::motor::DjiMotor motor(drivers, MOTOR_ID, CAN_BUS, false, "cool motor");

    Board::initialize();

    drivers->can.initialize();          // init CanBus to talk to motor
    motor.initialize();                 // init motor

    while (1)
    {
        if (sendMotorTimeout.execute())
        {
            // do the pid algorithm
            pidController.runControllerDerivateError(DESIRED_RPM - motor.getShaftRPM(), 1);  
            // set up msg so its ready to be sent
            motor.setDesiredOutput(static_cast<int32_t>(pidController.getOutput()));
            // send all msg to the motors
            drivers->djiMotorTxHandler.encodeAndSendCanData();
        }

        drivers->canRxHandler.pollCanData();   // checks to see if a msg is waiting
        modm::delay_us(10);
    }

}
```

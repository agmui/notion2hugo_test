---
sys:
  pageId: "ae1a55fd-da77-4bb3-a3b8-4bd2b21b5269"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-09-03T23:01:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Motors.md"
title: "Motors"
date: "2024-09-03T23:01:00.000Z"
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

Get drivers object (controls basically everything)

```cpp
pico::Drivers *drivers = new pico::Drivers();

```

# TODO: explain canbus

creates motor object

```cpp
pico::motor::DjiMotor motor_one = pico::motor::DjiMotor(drivers, pico::motor::MotorId::MOTOR1, pico::can::PioNum::CAN_BUS0, true, "ID1", 0, 0);

```

initialize [PID](https://www.youtube.com/watch?v=wkfEZmsQqiA) algorithm

```cpp
static pico::algorithms::SmoothPidConfig pid_conf_dt = {20, 0, 0, 0, 8000, 1, 0, 1, 0, 0, 0};
pico::algorithms::SmoothPid pidController = pico::algorithms::SmoothPid(pid_conf_dt);

```

initialize CanBus to send motor information

```cpp
drivers->can.initialize();

```

adds motor_one to `motorHandler` class

```cpp
motor_one.initialize();


```

checks to see if a message is waiting

```cpp
drivers->motorHandler.pollCanData();

```

do the pid algorithm

```cpp
pidController.runControllerDerivateError(0 - motor_one.getShaftRPM(), 1);

```

set up msg so its ready to be sent

```cpp
motor_one.setDesiredOutput(static_cast<int32_t>(pidController.getOutput()));

```

send all msg to the motors

```cpp
drivers->motorHandler.encodeAndSendCanData();

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
            pidController.runControllerDerivateError(DESIRED_RPM - motor.getShaftRPM(), 1);             // do the pid algorithm
            motor.setDesiredOutput(static_cast<int32_t>(pidController.getOutput()));                    // set up msg so its ready to be sent
            drivers->djiMotorTxHandler.encodeAndSendCanData();                                            // send all msg to the motors
        }

        drivers->canRxHandler.pollCanData();                                                            // checks to see if a msg is waiting
        modm::delay_us(10);
    }
    return 0;
}






```

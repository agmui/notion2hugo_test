---
sys:
  pageId: "f485c39a-f7b5-43c4-a19d-05cda62f3947"
  createdTime: "2024-04-16T17:21:00.000Z"
  lastEditedTime: "2024-04-17T06:52:00.000Z"
  propFilepath: "docs/Guides/pico_basics/Motors.md"
title: "Motors"
date: "2024-04-17T00:00:00Z"
description: ""
tags:
  - "Onboarding"
categories:
  - "test"
author: "Overridden author"
draft: false
section: "asdf"
weight: 116
toc: false
icon: ""
---

needed for [PID](https://www.youtube.com/watch?v=wkfEZmsQqiA)

```c++
#include "rm_pico_dev/src/algorithms/smooth_pid.hpp"

```

Get drivers object (controls basically everything)

```c++
pico::Drivers *drivers = new pico::Drivers();

```

creates motor object

```c++
pico::motor::DjiMotor motor_one = pico::motor::DjiMotor(drivers, pico::motor::MotorId::MOTOR1, pico::can::PioNum::CAN_BUS0, true, "ID1", 0, 0);

```

initialize [PID](https://www.youtube.com/watch?v=wkfEZmsQqiA) algorithm

```c++
static pico::algorithms::SmoothPidConfig pid_conf_dt = {20, 0, 0, 0, 8000, 1, 0, 1, 0, 0, 0};
pico::algorithms::SmoothPid pidController = pico::algorithms::SmoothPid(pid_conf_dt);

```

initialize CanBus to send motor information

```c++
drivers->can.initialize();

```

adds motor_one to `motorHandler` class

```c++
motor_one.initialize();


```

checks to see if a message is waiting

```c++
drivers->motorHandler.pollCanData();

```

do the pid algorithm

```c++
pidController.runControllerDerivateError(0 - motor_one.getShaftRPM(), 1);

```

set up msg so its ready to be sent

```c++
motor_one.setDesiredOutput(static_cast<int32_t>(pidController.getOutput()));

```

send all msg to the motors

```c++
drivers->motorHandler.encodeAndSendCanData();

```

### Code

```c++
#include <iostream>
#include <drivers.h>
#include "pico/stdlib.h"
#include "rm_pico_dev/src/algorithms/smooth_pid.hpp"

int main(int argc, char const *argv[])
{
    pico::Drivers *drivers = new pico::Drivers();

    stdio_init_all();

    //init motor object
    pico::motor::DjiMotor motor_one = pico::motor::DjiMotor(drivers, pico::motor::MotorId::MOTOR1, pico::can::PioNum::CAN_BUS0, true, "ID1", 0, 0);

    // init PID algorithm
    // PID explained: <https://www.youtube.com/watch?v=wkfEZmsQqiA>
    static pico::algorithms::SmoothPidConfig pid_conf_dt = {20, 0, 0, 0, 8000, 1, 0, 1, 0, 0, 0};
    pico::algorithms::SmoothPid pidController = pico::algorithms::SmoothPid(pid_conf_dt);

    // init CanBus to send motor information
    drivers->can.initialize();

    //init motor
    motor_one.initialize();

    while (1)
    {
        std::cout << "=============" << std::endl;
        sleep_ms(1050);

        std::cout << "poll" << std::endl;
        // checks to see if a msg is waiting
        drivers->motorHandler.pollCanData();

        std::cout << "pid" << std::endl;
        // do the pid algorithm
        // PID explained: <https://www.youtube.com/watch?v=wkfEZmsQqiA>
        pidController.runControllerDerivateError(0 - motor_one.getShaftRPM(), 1);

        std::cout << "set output" << std::endl;
        // set up msg so its ready to be sent
        motor_one.setDesiredOutput(static_cast<int32_t>(pidController.getOutput()));

        std::cout << "send data" << std::endl;
        // send all msg to the motors
        drivers->motorHandler.encodeAndSendCanData();
    }
}

```

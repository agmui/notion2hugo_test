---
sys:
  pageId: "ad068df3-c446-40f8-abaa-5fa1b09195ee"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-09-03T18:27:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/IMU_demo.md"
title: "IMU_demo"
date: "2024-09-03T18:27:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 126
toc: false
icon: ""
---

import libraries

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"
```

use the `tap::communicatin::serial` namespace for convenience

```cpp
using namespace tap::communication::serial;
```

initialize the board, a timer, and the IOStream.

```cpp

src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
Board::initialize();     // initialize the whole board

tap::arch::PeriodicMicroTimer RunTimer(100000);  

UartTerminalDevice ter(drivers);
ter.initialize();
modm::IOStream s(ter);
```

initialize the imu

```cpp
    drivers->bmi088.initialize(20,0,0);
```

every 100000 micro seconds read update the imu with `drivers->bmi088.periodicIMUUpdate()` and print the roll, pitch, and yaw.

```cpp
        if(RunTimer.execute()){
            drivers->bmi088.periodicIMUUpdate();

            double roll = drivers->bmi088.getRoll();
            double pitch = drivers->bmi088.getPitch();
            double yaw = drivers->bmi088.getYaw();
            // double ax = drivers->bmi088.getAx();
            // double ay = drivers->bmi088.getAy();
            // double az = drivers->bmi088.getAz();
            // double gx = drivers->bmi088.getGx();
            // double gy = drivers->bmi088.getGy();
            // double gz = drivers->bmi088.getGz();

            s.printf("roll %f | pitch %f | yaw %f\n", roll, pitch, yaw);
        }
```

## Code

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"


using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
    Board::initialize();     // initialize the whole board

    tap::arch::PeriodicMicroTimer RunTimer(100000);  

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    drivers->bmi088.initialize(20,0,0);

    while(true){
        if(RunTimer.execute()){
            drivers->bmi088.periodicIMUUpdate();

            double roll = drivers->bmi088.getRoll();
            double pitch = drivers->bmi088.getPitch();
            double yaw = drivers->bmi088.getYaw();
            // double ax = drivers->bmi088.getAx();
            // double ay = drivers->bmi088.getAy();
            // double az = drivers->bmi088.getAz();
            // double gx = drivers->bmi088.getGx();
            // double gy = drivers->bmi088.getGy();
            // double gz = drivers->bmi088.getGz();

            s.printf("roll %f | pitch %f | yaw %f\n", roll, pitch, yaw);
        }
    }
}
```

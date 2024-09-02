---
sys:
  pageId: "ad068df3-c446-40f8-abaa-5fa1b09195ee"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-09-02T12:56:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/IMU_demo.md"
title: "IMU_demo"
date: "2024-09-02T12:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 126
toc: false
icon: ""
---

```cpp

#include "tap/architecture/periodic_timer.hpp"
#include "tap/board/board.hpp"

#include "drivers_singleton.hpp"

tap::arch::PeriodicMilliTimer updateImuTimeout(2);

float yaw;

int main()
{
    Drivers *drivers = DoNotUse_getDrivers();

    Board::initialize();

    while (1)
    {
        if (updateImuTimeout.execute())
        {
            // TODO:
        }

        modm::delay_us(10);
    }
    return 0;
}

```

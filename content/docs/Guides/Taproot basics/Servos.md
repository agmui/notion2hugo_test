---
sys:
  pageId: "11fdd27f-2ae6-4e1f-90d7-c92585bed951"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-09-02T10:37:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Servos.md"
title: "Servos"
date: "2024-09-02T10:37:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 115
toc: false
icon: ""
---

```cpp
#include "tap/board/board.hpp"

#include "drivers_singleton.hpp"

static constexpr uint32_t SERVO_UPDATE_TIME = 100;
static constexpr float MIN_SERVO_PWM = 0.1f;
static constexpr float MAX_SERVO_PWM = 0.2f;

int main()
{
    Drivers *drivers = ::DoNotUse_getDrivers();

    Board::initialize();
    drivers->pwm.init();
    drivers->digital.init();

    while (1)
    {
        drivers->pwm.write(
            drivers->digital.read(tap::gpio::Digital::Button) ? MAX_SERVO_PWM : MIN_SERVO_PWM,
            tap::gpio::Pwm::C1);

        modm::delay_ms(SERVO_UPDATE_TIME);
    }
    return 0;
}

```

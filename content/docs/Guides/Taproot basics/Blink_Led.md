---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665444SDUE%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBTbRWMcG7TUF2t2gtUHxSqN1n5NoTRw15wuWuylU8OAiEAvgOEMn3DDMXRoB5ZzXIGrYm%2FnTl5G%2BgXNjpH82mr92QqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnX9ejSJhyAtAg%2BWCrcA%2Fxkmd0PMp%2BBipdGl3NbiQS0tzI6pl9%2BVufAo%2FA08mPq1XAoPJ76YT6EaV46mnnY9%2Fw%2BeHfdsKtPwwRbVEYd2VO7HU%2FG%2BuNgv6%2BTCCiBOGofPhopM3TxUyHobqYyH2KeJ%2FICXucC3c%2FDr7UhFAmmr02iE5VXEX2IanVeP4wvogsmIIn3%2Fx7sIJ1vCV%2FKVX6HL5E7KyEr03xYhrmbMhJm9Kp%2BtjfnIh4yk0m3gzi2krrPTw7E%2FHDgf1zxGFP9TUD0ImqngCoL%2BCossBNSYQXzfa1nO7pTXCs7QX4RubGUjijyT3YxJuaRTWgyT%2BdzeWG6uwTk9Op7OGshKUzMr5RPm4e4b0B7pZpkhR2F7hd%2BbRt%2FWy0qxDG0YQPzOM1RsK6fXU3JzCY7lv3ELSLl9anoTB93JwxVE7d3kuEdMH31btJji4cVRH8EKA%2Bj2JawylDzQ6hwC7TtauS63dp6BYuHTPBQ8wxmkMB3zbwscpwNo%2Fog3ju4B2yN695RGZKcv9%2BXx31TZJ8UfG8nQ%2Fgc6vTAHS6aHhji9WQc7Q9vquxxrr2%2BXjMj4UXMOEdBqSBr8BPZwmxt4Hwt7ifm7ArkDVTgUJY6x%2B4Oel1mvwwe6q3eojXc48m9GTC6XUqW8ywkMPmf%2B8MGOqUByMybSLrAZlnoF0f57d6OGxxPnqLrvjlhsk0b9rsocr%2Bgdz0G1ORS6XLPliOTLAKbFdNVZx9ZiIDc1Z%2FL60xj%2Fsss1%2FO%2FE5j0Li2%2BZnEKGyCi0FFO3rxMS1ewlnvOnbbFEhAeUVKV4BHeVfO0OdWOR6VL8i13dMLS1lUMm2WeDjxu0D%2FyCBn%2B4hgRmF6d527iyf9CmTt65wHHh2kodzpOqBvrzGiv&X-Amz-Signature=f75c8c0a9e7ac99729db393dbd180dab45b8717f063980c953f864b015845660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNX7MFAL%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDX5Bhbie0LwwlXzSBFBQzrpA8%2BoBsvtoiJ8YdUHQ2HaAiEAzf7PZdUgba70XJmMV7HWxynvROfUro7MT2RbRkwZT4IqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSU9XbyKhCmvsbv%2BircA9iZSQUTX9AYUACOUMP90Aagincjnzid5kuu7cfoxpFd9cJljVZ9ENrYbRLVx3JDcM7Xj%2Fp52DQjg94tUGEkWED24n5Zr35A%2F2F87pZ8voNcgwm1sQGzqHG8ngyql0BlMaCGa3zopxAtlS13c7oS%2ByDH2L8u3SvlMR%2FVqcSTwxgeOO1rD3vdi5aUCiHgYOv1EqQqzOnHpataFFsQuQWH9c15zj3Pnk5hKOV06uiEuMSwNA395GgpW2az5WZdFnA3cOS750kiAh4z3SEFMnjWoGvYerJkkwU5FiuG7f3yAe5LwO%2FL0IrMKdGJ3VaBgngQQeSsLnkZNrj3RZaNMYm8uacKuUVe%2FK7iQ7wgO95fDb6CgiBeGcdz%2F3ReHu3NXq3encEAcokYiatLwgJfe9FfPiro5hUO8Op46RxFIV%2F72FjwbXCa%2BKn6oBuD6w%2F1q2ctsSPge6YXY1XKtfnBo%2Bj1XXyerJPGE%2BV1PIp4yXnoMeN4IV1tP4Lizb9bb4bgpjJzZn5CfexGnCEs%2FwLsHfxiIAckY%2Ff6LvYVayhBlBCZ3RTBaBeyzRhj0kG7xscNoqYWP25829%2F3wh2WyP0oltVOlwjtO2lnubyCNHUPbwZJFsiM8Bwgg5%2FrJNZAaObNMJaf%2B8MGOqUB61F8Vq8BpeTnUQF6fl6VuPNlgBTFo9ddn9V9FCIstIyIIIUMZEr6kvQUbR31DaZky64VR%2FPXULVbjhygxlXGcFtRVzABTPNo9xzeRvW%2BLy849Zpw2xwnRCAgVC0GUzpbZGxhnxMHyfsTucYT7IueY%2Brv4XtyPrtP%2BwOED06%2FXofWw%2BGey%2FET5LvNs1oFngAhmc%2BnDscg7pds28FoXOjKQkNdOvIw&X-Amz-Signature=8f83bb2b2086d65b2678e1b67f3fc9944d98efcc9b4933002a1ba2f5fccdae02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

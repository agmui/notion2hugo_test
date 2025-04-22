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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYW6GYCW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T003958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIANNORbTFia0DOSl5uOmEzXtQ87GFjgHJTWtLnMvUVwhAiAN94OcvEYN75ejTe1hIgepMFyFegapW%2BwVBzer8yXOIiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Fkpw9nHP%2BRdbUVQKtwDr3nT%2BvoapcR%2FMv6Qszg0fIBaUaFFak3LYkopacVFqCKpVrqVpBA7ng06jfyoGmhD30RV0RIDz0VwdZeEri3Ycm10X%2B54HTDQN43t%2FZQoW1EMTzjY5TGFgpN24fHgdX%2FoyHVWUk2xjuYgIikCaCYJOwp6MsVy4BqgAMbXPj2XqxuF%2BKmnA3nSvsfGwxijUmmtvS6k3PsOJA%2B3GARPwpzHOYdPGEdxe5dO%2FzUFB6W%2BaJYD1FabQ5FI2PMecVFgt75GI2aGYOqb3BCFAuq4M6fqc%2BVA7s0LFHNBt%2BgMsfx3xyzzIjLgUyWGT7P7IGVQZo9G4tjCZuBZLxNgVFT9n0Ej53pOUzTcFgK3lApZNm2KMpTFFcrJyNQ0mElck2IClU1RYDEt3ggzjZrTgFbfDIelZZD9w8xJlyMQjMe5LaAfkfOTQUehbAKVxaVO0Fw1BQVkQ9PJiTuLbmit1ZKo8MWozBtL9fgG17afmEAN1qjo7Uzwgr%2F35IeYYJWUPV5WaeSBlwDkKaVTA53YGqb9yQE3FDfIh8bB0YFIn0p2gzH0Qu9rmZAGHAACWzI%2FmqMwUGJiXiW6decAeVEfCYq2l%2F2sNg246%2F84%2FpZ777dPurGXiFAoi445iIp2kwDn%2Bdswi7ubwAY6pgHVxDYXd55Wnq9X8R4RmtGZ9BxhKWSxcZJ2xVOPAjjXUPvVqKB084DV8jPTNllu2tFTDay%2B8s%2F%2FJlUtquKyoqvmlu8CAp7Gg9lflvWKXi5MWJCcnGiJ2Eh60P2N3ExetRxa7V%2BhaPmVgjT7KVM1%2BWmAiqS%2BSvPsJ3HqUeCwhHnRT7q32IZ%2B%2F0%2FjDydvFTE1qPTRa6l4cAIvU4ZqHMMl52BxV1mT3RDM&X-Amz-Signature=0eedf4242e2a14df2c8bcfbadafef56bcd2a9d5a7c5a293ede75b4d67733c620&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJW6XPRH%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T003958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD6gnRKGiSvq1LySWacxxd8stfFpMKodunvScI%2Foz0zBwIgdokZW1ChMgp1OFyeZFCxQjBouo7be8RCe1LV3r8pYuQqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj0xPinynhDSqLOkircA0nwG5RUKkXS%2BjR0cRr0O2zvl7J7xdnOW3OK9EHB18VgKxWkNhduQ4Zt1VudAMR2jmSkaRrvGr87qFC4ajEoWvethfMhXBQvOdDGNOf7cNagTclHiACJWvgrUFktUF99cxpKuoXtTHxF%2BtjifLtTeUpWfdlEXbC4LQPUFSIvwqXtF5n9yoCU%2BLbmD1sET5konuvtV9H5ExqmB2KFR3UipRazVxmeorEtXjXdZ1BlZNJVIbFWTNlzHupRAsoQNn7bhKbzoONfsf7vcwfB5l%2FsB9V6pHMsj3wKnKMpKiNpV7FSSN2pJGwRTjf4F377JtNDunQh0zqbDuJBayr06zyxtPneiGpnS7IvnOGeBNRH96BIqiI32aCFRIuOyjCDSa6%2BAoB7qANFy%2BGv7HGq%2F%2Bj%2FA4Jp%2B84eRMPQrpzla6CtpaM5JhLUKS9mgjQGqh2b1833bLKpYR9TNZDbUSTKR3wKG%2Fg5NaDlHDWfVSzmTiS7nhiRr6bhZplpouNrldcda3%2Behip9eoSgYeqHlUkl1iCV87gQsBkx4kZR%2Fnl2eqMeBYW30D4MOvZ51PRyp7%2BOIv7NpW%2BCHgPm%2FsbnTxREzi4EPPStkqRMY7jGSsUIG%2FjlDo7cabnGfjGvjhpwvcbiMNG6m8AGOqUBwArAnFNaPQ67jj5i%2FG%2FJEo5IOwTvpRL5i4UdZt5s7b2otqcd2cUBqYNwsGDUGlm88KaNLAvdKYseXqgFRaTf4F6zkMXWE6%2F3cK4q1tWnJEAV4YWKm9QcMuHwifK3KEv4eTEyTrDNA%2Fxk0%2FexTwnROsqqzzCErA7oKyiSgWYsGaaElw8YBmzArXLw0wz1oCr01qU8tNlwAtUKdDgpM%2By7yvQDGlGh&X-Amz-Signature=58511e549f43bb2935e6c35f705c28888be4711f83d87607b008ecb6f2956f58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

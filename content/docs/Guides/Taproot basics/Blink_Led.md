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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWNO2INI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRraq4joRTqO4z2nxJfoOVXIctAVZ4lxudceC63QP2DgIgJOtukLMfeHHPACmlex20O4V9WShQMjuhvHjTMyd%2B%2Fbwq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKuX%2BpUrHdetP98W5SrcAxv8B0wpJdYJQRsUvPt9uCM8kwfMlyvUTNXCdhauKPo5%2FfvmsLIMecVq7LnpnVRlWcWElmwakcbEgduG9ibyU51wgYDEEP8Y5M%2B6zIqiO%2BpL%2BNA6l24ii5bcaaYtdHqzeIWHEeFHdzv0I9mG3eF9VMfP9GUnGpFX%2BqAz%2BX3AAURtFhmyYhLZ86d7ci00kMUmHw8aOdohEwCGd0FR2Y2JyNJm7MxIEvjeiLmKdjgWXqNs3JooBPxxO0bNgg3S6T0oNV1cIAPbjYVGimScZZ8Kz%2BprA7yZg4YDnoIiVCsvqAyCQ9x1Z9WRoYKp%2BJwlWOyQ6oibPqx9eUWMrYoNmj4Bp609yo2ikFm8DsEpPrMdiMqFq%2F0jaBocdbYgZG9QCfXAZRvnCvoubfOCuoF962ddrNCFca8c9E%2Bpg%2FPQ1Kt9lM4FZNsKKdHu%2FhAjQ15gmLH3S1EMByAVC%2FjZp9VFjPGUQtR%2FM3C9shFAzIq9dIOGsntI%2Bb46PQ2%2B%2BW709BiUXbVv6H%2FarSYVi7LsPTUXW%2F4IXc%2BGmwEwqAEq28JCXR7BDjOq8XsG273qUIvV%2F9PFb%2BrzugYEs%2B6PsrQ4yRF%2FwVMjwuB429K%2FRC43jd%2FOkLvlmbLylNKUf7uS1yg9T2rxMOuiu8AGOqUBNvIynZ93%2BH2aZ7NO1Y5cGTTl9egCb%2FlXD9h5181RFRpbZDQGvyz5BTAvRAX9wFqqjFKKOmcax9Nuslt5ZYFiM2wHWBQKcXj6Rdt3zxrm7KN7StuvCOsR3sKme5KvYYxANsMEKk%2BHAAWR0nmb72Is7oQ%2F6T%2FTKgFJKB7W3j95bj%2BMso%2BHbavH4ZQsCII9ravZNI0G0cKWJ6ftBJ1hsmjtYjBV0Dz6&X-Amz-Signature=22c647818d141d382ab767592b55f96cdb1c6526cb042d4dc0be93a4e0b63153&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2S6JN3S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDziO0wX3wd4h4lLBLGDxWRiuI1EQsT4KGVtUoTeLJ1OQIgOHuMcb%2BggnAQHbzQVnJMKvdeFqsakcrLZMPY43XwVEYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDhBwNrwEqUKlK9mYCrcA%2Fu5Jmg9%2BrefoE1bhgUznyiofBURlNhrkuxGX2ah0U%2B%2BWH82TM6C%2BXoNA2CBXBCzlYPLlyAPoZIbLEHLQbZZQKvQzJT8KLOq0Zri2563NjpwPb1TUHajDfK5bHz4EId44ExopSrFQkVMBRiC9i0kxtJNHiQMVQGHFgBbmJoUFEDZSswG%2FCF%2Fb9bpmEP608x9mBt31cl%2FEutlGSRnkLtd1r4jFYrt8QUQbGDbwjhy%2FT4SRT2zzDUqseMwh1JNcy4PLvWFTWpNxS%2B6xLK%2BGCqyR9NBMbjIA6rjhFSc9uddKtBH8h4qkXZJCFsjoKhkSvBgnoPlHP2GagbjRp3Kj5OHa7fwt0JybNAnNawcUqB9Z%2B77CIjAmjGGrQyyBwouyO2%2BOuxplVm63FM28cuJgIDUgyWqzTdAB3BFQ3CAnp9Q1VacbjFMumFO3JmYD32eYKMCozcp5wFtIO8KzQcLkwANUFLnla5wZG6nKY1FQyJJQ3vwpH9RjsiPwb08erdwMyP6ROFUM%2FHm14GbK6b59BXwrtD11AQ3%2FPT4y4%2F0%2B5rA8csydOIJRF46QD5Iql9wNvmrRMubyrgJmNCt%2FXZGD6fkdPuPLsxX9dWEtnk8qu9Gf%2BfNS%2B0sJBA3LoLljPY9MLy3u8AGOqUBvGJGQWHtRhmEJuQ5m1OfVDCM5wB%2FkI3LPs6X8mdTeXjnkPmfg6JTCgsQlFsz54vAhsNljOyoEj67u9llD8k1gAjiTGIdJY%2FIMz8mh2%2B%2FYXSlw4VoFzcyswhTH9oX3SOkwdphwXY7GCTSz336sLELD7j2ZKuc0tQfMjYMA76irJi%2FPt4zk1IkHhd5vntosZk80GK0uj%2FbE52BRoa5CqrwLFYZXhno&X-Amz-Signature=c231f315bed3d64eacbf1816b01e381a86219871a383b66c2623a91efbce27d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

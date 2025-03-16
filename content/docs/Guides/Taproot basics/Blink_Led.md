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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPKW5RQN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgfZdFmR4cHA3ceVTVXzySDrtxyPjp40nTT5xDP5YpRAIgdYQ5%2BZ65SMsN4CVmrLF1KAOjH3OouUxx0b%2B1ZDyPHp4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGDg3rWp6g4tY4krZCrcAwO9HvpGMuoLjk3AgkBxSNkOhhnz6dxkCYACjJRLQ57aWssFuDhEvjMzlxhxrF20cEvz%2Bm8HuilrewikY4oh1hmka85liBmMUQ4HEVI4w3eQyo%2FFvCzFwLhReSeCeI3E0tlEWQMReNZ%2FVAHz5a2%2BG2vd3UD3ClGAPGNlPT1bpRcyRB1tg9uBxIHFrxUx1UW5QJvOBUanBVpvHM8JW1%2B5GusQJ9vchz28MGmsEstbHmwB3taToNwVnXx4nghA8vNHkQMG9Dv6YP2N5lCyea%2F810XS1YmWu1gENAlreEaLrZ9EEd4cKEldBCuPrrwszzpspLNPV8ltfyoX3bISZjs0vptFy7Ux%2B9MeySDipd25h0T1MC84qj0oadTQSR92DWR43oawlkHhsIwnDu5XgsevNvvGOXwwzoDnwYWz90qrPzdPYvD9yOAs%2BPeZaRj2KGncAen%2BpgJDuRPkkXMNCXh7jUY0bl%2FYEWKbo%2FNOsz0UY0rZHovM3U6Q6a8l7RpsdGjDv%2B4iU9rq8OJ1mwcxSTGXIF4IE0bnNXo8tFPiZU68k8gpsqJPy8MVSaKy22DlEzDdhXgpBtQtbZnCHYh0xguDDZ2gYFH3Z%2FzlPfoXdvxi3It0nKqoStDaPA86AI58MPq93L4GOqUBHdD1IY9qMk40x2%2FPMX49I5ZsU12ksrhs2tMRMt3kMLurE3TszfIRGocp7WeU4FDv5TCZ8t6%2Fzz2%2BUEClb8fO5TYi1THL10EJGE5MAqGwsqVZr%2Ff8%2B9BXFWFciwhZuTHTze%2BVnm8rJz9aB8GQAEGlhF%2BjR51q%2B%2FEIacCBuW3F0ppSuWBJqq2TygyPNApFaqOySiAz%2BX23Yq3Vg%2BsLr2i8tBBOvTWt&X-Amz-Signature=0690984bb601bc20fcfaca3d9b1e923b2cd61fa0eeba31c880f64cde0a7c00a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5TSEE3O%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBhO6bpjvuakkD5CZyuYkAAo4isfvztLKZuPRd%2B6pEuAiAT1tTXc6%2BkUBumM7c9iv9Kr06Gr48xUwOZoWneGx8ETSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMKTglnznUxa%2FWYa4eKtwDZYA6CKim3o%2FuTvGJc5Zlm6lYs5DwNF55ieOH%2BQQ4sjL30mJVckwz%2BLCftpK8dZG9ujmT2tw0g3ivbQ2I0FyAPIWl01sLHdt9isUpo%2B%2BhMnnke0%2FCX5MaNERhloHz9JnlxRooTyPsesGH9Ss5OnUDUpuvQdvKCtaq6nuhlDLyUvFrxyiwUyMvvPN0j8wPwVo57TzgzGBtJrJLakcB3bHiUuXdnU4sS7eg1PGLiI%2F3U26johSwq4jvFnOA%2BRVdJOkEjYmdw69fRKDtMbKvK7z4P4oN9OprQTCqySY18T3My1UlaneFo8HnzkoJ%2BBaZPVVElNzBNWRZvEJi3NPvUbrA7628C42x%2Bc74F4DXoYOPeWWXdsfm1erMxtlJ8i%2BcCANh%2BfsxgsaXm7hhgXbeSnVctxfNqc7ALhosfzoLZB7%2BOUSZcaKYw%2FPzKRsJz3vjBh8uoHfDjlh%2BmonZzpDEd3uL1K3oPa6hB7VwNZggnkDsFPIZJei4ig4yi9I9LNQhBAtpIoL3uI1CkrS%2BpcCsbNNAhEs8RPTGDx8MN3aOC2ATqnNEb3iWehzo1qKJQOJRalqklizw%2Fv7JdjKq1j5clcZ6rMxVhkGVz7B35g9ebWx8nA2i9B9WM7X4RReXWx0w5r3cvgY6pgEuxor71V5%2FYAkhgiUCI50Ev5PGdtzeFmbIMDv0ht7rIeuYB41tqLHK0A84yaZET%2FOqUzqBb6SGcs0DHhmvHg75nXL0%2BRfZYPlUDuBrE7KO3w02TsU49GgkJ7f8q1U8rAS9jYGMHykMu2qmrNULGE7F8RkdJxuOhX3j3igkZO1nxve8Xb9HgAKFE2PEj2z1%2Bo4HOhFAL2P1fVzmV%2BvetBYVLXg1SjvO&X-Amz-Signature=b5bf0e36374639952c3bd06dc760c759389215b0aaa0226e3df6c35cecf53b86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

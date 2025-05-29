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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAVNBWZO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZQE4fSIZMSS4aGl7yA1qbamDD4df8iy1zLXTafgMxlwIgeoxK0fYp3FOxeIaHJGeIe3AI2%2FInmPhjTCyJ7MIw5fMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC6vZ%2BKfAtDv0eWHSrcA1wJwmkldD54iLzDg7l8uzhcnyz%2BbzgvfrhkHJJ047y3Gx19bQJtLubLmybaTqQ8SN86a%2B3kXYWEemmwCk0iixNwLgzGbh4B30vVMyAJPnbK7MwOdgwygwPnIM5nbMeA1KNcLndiQZr3Akhy8aCWzOEIOSB2kqrXEKU5MJCbTgDSSWUlTirpJVeyAdIbwXTr5H%2BuGlTojHWMM0uImYPoABODm07h16EYOoXRU67kNl%2BaMM9uRvDyY3ndHVM%2BpM623miv3BK%2FklZG0afXBXmcqB2b490D%2B1Nz7%2Bhkk7sTi9yQiVY8cGqAuf1o%2BqawRvg5emeH76u3w38VyUgedzWvoxrs9m7FU7WojwSPuT9ZSfODpjeNjAR97NsI2Rzpu0Y6JPwp5Mj3ZlAoxMP8g5F3y4Kl%2FIUmwNUoRez%2FazIp4%2FYylWWXJmSsHeduV62gQvltluW21NgWHaBDrNPKgUOIVDmXj9cnyFljLzjIoRv%2F0LD794mQ4GsAsypeFrPBiMtQx66cIr1Gld9MOHn2SKqDIcuBa91kfQYnzl7H9fezV73uZTp0je4l7hfYxkSmnfv9eVOV7Laxoij1JbMoC9i4oqFviCP9q7G80zr4HvVEt8e5S9TtC5USTO28kruyMLPb4MEGOqUBQaEAnJl8%2FNJhETJgVFEEpcSY28V0obYs7CiIkB5A00jxc%2BtciCINpV6Mz%2F%2BIyXRswYFYk5M3b06qQET7nd%2BMSDUeIKgyGNO5OHEEeC2CC2CpSDNG6034dnc%2FzghJPUg25DvUC%2FqT5g5%2BBspUtqNHIlX%2Fe40ElBsqTLE3PKLZEVexF5BRePT9iPRWtpJdKFm8F6%2BLdAr4BoGFYS62z9%2ByNd3wLRCF&X-Amz-Signature=72c530f5ecdb6f6d809058a3d53ad5620238c24cf6c677d1f865e5f533843e05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S6ICMMQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwXm3OVwja0ITiyfY%2F%2Fxy1YLStuN3xQO8prRZok636EAiEApXLpZrqkN%2FEHh2TgipVxwP7oTVNN5aVBIlYjg8p%2BmNoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4E%2BtsRY6qrzmIuTSrcA42q16m%2FD2vugzJD6NMND2SH8z%2FwvEhZ1OtZD7%2FAFa2K0a0LlCSxCk4nBvykv12jZM%2BfY3nr3rySF9uBgyatiMUsmvJD9dMTa%2B0ZHVRlFIOqMxwvYda4NxQ4QcTi15JawBArqeyz1MN9gPEK7FaWBy9yPytMwZJKB8F6%2FhZ4c48rNhATunB1opWxBBQ0PNoTlLahNcvTJw9E7qEpiSLNnj6ZvdvjH%2BZDE4fqXVhaWk98w10Kp10WUc82dxW1jdt3Ck3%2BZFlVamONqwVFbKJpdo2rcsy18vV1fqk0EgXX140fWrQzJHx0%2BbPeVQ5uEd9aULUtMIievDj%2FoY3aFvIPdCTyj2IReNjp9u9wdU1%2FkYbEzl4WhksZLWaAS9ZzAFmVNKpgKHa%2FEQ9pitVnj33N7jiv0Rm7x1Fl6ZxJPhCBjbiTjVzUZzwtVqPT%2B1bxxv6P4j0xHI2Uj64ofOfuVDeYevvwr88AJ2G2gODefVeQEFPmzJSj8MwFwnz1Zk4Tst98JEJh84I4yIpppDpWrJork%2Fg8JnBFNvet6l%2FqWvj8AOjIqQpYcJUr2ATw7cWDxSuzMJL0NObAwCrkNrUjNXXh5YAXFJNQltiu9PSuiX7lsKD4Mx06AHJohsMi3ib7MLzb4MEGOqUB5EHqZQBO6KsGkn34tp%2B1DMUoF%2FW6Kb5Dn6tsinyNeL2YP3mw7QImLqd6ekd3iYuiRJ4lztWT10e5ul8jLptlCeVufDETlTUC%2BU3xfnKH6yzYMj0VDr6jxP%2Fb9o%2FxbuQwDRwZ4DauaBBLGJKoukRouFjpiXFH7ytiu0blZVVAN6NDFjbhxWfoF7BRjJ6GJqAOaHPKn99W7DY6d38DRMF2xfwpIExe&X-Amz-Signature=669c8e5f46ee5099294aefc2ec5241b5b20a1f9b5b67c528e84a87a11b9bf122&X-Amz-SignedHeaders=host&x-id=GetObject)

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

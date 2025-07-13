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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LVK2Z62%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmdCx%2FQv70PndfCUZPEuwH0T01lnngvuTBKc6mVda0PwIgeXpxm8%2Fyd47VSa98tAkohPyaOTt8SfYRqAfr7NRL7%2FIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPX4QYg%2BQVblfDUzASrcAzcMoXNrRJKuah3kT0Z9wnYomjQwtBtkpOoQ4DeVLityvkfP3%2FIndiZy7tWMBbuQI3j1VMUa20Es2Aa3XqP8%2BwtXK8hNP6oPCiO4Ibb0DPOYgdm2%2Blr%2BKM%2BLs%2Fjk04S8%2BwwgUVnYi3rMFqASmNb8hLV%2BONLNGNHOEI9CYi5UlUf7kEFWuZmAsfTv8bOsSTyp7qTkIW75hKogNIMw%2BkYaEIRLycUEmmPB9Avl17PvjGe4dQc%2BtvWXvYBtHzehxiOvj8D0rYYRxFnS7CwTjWmQIF5NeS2bL0SjNUuj4l0OISE4uFjZXiggq1gY%2BxWEgdvo3A7qKWsFdvPgPs84t4GbvU9e5kEzglOIUE78sn26bQjYP8iLxV6kvCO3q6mvWjFaSqRa7OdEQgRTi1tVIsiRDcld04yIknDbaXbRIjl0WWLCkYvgi6lw7iWra7pyY4Yd9YP2S6z6BZzeRIIJVZ%2FRIuD3BmnETY6q56xUjEPGU8BxCOxknvd4G2qInGYa8SjFZrZ55N681f8SkX5icofobW%2BPgcX3rInMSWQaY8l7PhTUu9vVv9c2d%2BN7ZuE35inHKb%2BeFQktCeJy05OaJK7WBRgv9T4sQFzipWRpRzNZHXAGC%2FkS1TLxC%2Fbh4El%2FMLDZzMMGOqUBKixQLO7JZZ1IehFIaOX1geLLcsGdQmrZrOMEBDRL8G0B%2Blf2HS3G9fuFeVi0G6ZqQY1ugMCNby458NE3W%2FqK0elF3bjJep4hf%2B5gxuWaXdeXcAPNhNjS8MD600oR8bECdcFTqGZ2a75c9kHajHI%2FTM7jClXSogEi4%2FQdL487Hcu%2BuUJrulWrBukb5y%2Br9Dy7nCJy7M6LcXtDrqt50LtaMVBhTnAt&X-Amz-Signature=6fc65ffdc5002b1703bf9c9ea73db970c40493cea29ec38d35a8954cfa98f519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWR3HC6K%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiq24iUD7uOA30R%2BTdJr69wSgbdrgMi3ZAaNNecs0xkAiEAx2FJe%2BMMxHfRqa5tb1GwbZ0Vnr9BDRbYs1wLANhNMbYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD2MhhbjMpzYLJu3CrcAz75mhuVf9iVr3nnJ9LEADThsf0pQ67S%2BNSE1klnCuWX03%2B%2BYhvOEj0EdntVEucdTtIEoLt5tE5UjCfa%2FZ51h8d6MOGX2hz2nuV%2FkpnUkkHnRmPAM4zd0alNL85Xf63hOGGM0KaP%2BW%2FMO7GjggIx5Ifm0wMiWgdkH3wWKd%2BffFxSerQcZrU81JIgCyx%2BpqKqKJL4eqJQ%2BOqzNpDM43Hr6srta%2BJ%2F%2Bq8w1HZg11kNZVTeDz1Dz4pyW2NwT5HsDUEqbgc9WX2ilBVSWDWSEU969jZqYHgXBb7azdl%2Fhwdg1zxB6%2BAR8aOstw3pDTwr8E11%2FqyeNyEMYmXAcWI8I%2FhXFQmnhhBk%2FaJ16g%2Fz6Kgp17kJwutbUeabaCZ6yE3SIRZRMUeTyZ7f9uNQnjjA%2BsMiiBu9dDj%2FVup6t75mJLQm8iHso15EzfFYNLFlCHqrrBFfTL5IRS6PxeR4x83pKELisrwT%2BGSOBo0zv4hXWulautVybjXLh%2FqP%2B6jiumyF90%2FwDnQ2t7fDhxX%2B96CNBCCbDcA7GEMEY%2F5Hvgaj9Q%2BjJKFZ8%2BSUeVSpJbLQ2kE5OCrQpTsXRWUxmrA4KdS6TEZ2ZyDPmKB3a%2FaedBpUx3P%2FK8PJ%2BWyiTfYi1899bJnpMKbYzMMGOqUBR8ouavjPeyXKatmXPHQQSkDj6by8i0dCDZpwHEbyHwYb8ktuhtLFGvbKl%2FuVoORXDqWxwtMsHhXTbovgri2vKHBCaH0gK%2Fhtgzv8VZznW03Mkeg%2FFkFCdQGGNbEiWGgOySKDlfGxSrbE4ZWfvHSympD9SU0zFOM3fNPYPoKPYZcs%2F%2F%2Fboavot6uhdJy0aT373TJ0MYLtYgdH98ocqHAhUA4kozVb&X-Amz-Signature=ecbe8f50963d35c263c97f5bad6698c61c3d09f3cc2f0457423a562412415f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

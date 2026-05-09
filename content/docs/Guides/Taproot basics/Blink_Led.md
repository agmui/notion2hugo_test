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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KJYI7FS%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIG98IMXC0pnjn9zvfANBuUpKyMGYdxX8g5XANC83JE9YAiBCcc69MecrS%2B66x1f7ILI%2Br62J3Bu%2BTrdZ9rj0SvgGRSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMca68Gk6%2B9cz3Kh7XKtwDRHi2%2BSYc%2FuvWF5DZ6pO9xufypX%2B4fuqFPp9rnmUeVan8Jm6GvglMYgbM5Xr6fFyV0IzJK%2F0pAQdprXqxY1aqXZpobm4SA0eQM6aBLqKVYpckNSBmUbQa0ATAB9rhtPY4%2BvmxC0jXKi5WdYMV7uVgt6vQWk%2BCmMFV13F5VQwUNqwDGtNdNxehOYT7n9DwKpx3ZjPCMBaYGDuw69%2FaqLhCDb7vIjU%2FaWAHydlGxFQIDEtQw3S0hzgpJflIXI40R9jDDUGIcSy7Ovvtu338auSvEoYw8QVDws257Ajza4%2FDrNdhFZVVt45qjhz90ZSnAgKkKWPm35ET3ZeX%2BdZZWNEHzeb71q1w7ctm%2BwJHSkV2ddvXjDZoAcAYU4Ud9QjrVe%2B0lX2dGKJr0n14obJl23kb3riKnUlN7JBsKJAcT9NlobTzlQA%2FaEKF8Sk9pnxxu8oIoSmngyJbat%2Fym3bskJJP4d%2FtvlfMhQ0dVjNbB0S%2BR33yDpjTp2sOvSgIWX%2B9ypyDUo1RkJ4mgt0WB37iTd47lDwbBkJLpZd2jNeDzpsPfsd%2BdPNhtPmDQ%2Fe1rfquDkl2f%2FDRo5t%2FEvdp4gOD2kwGYaPXuSEkXzIgiiYVno1NVbkMbA4gR2pfY2TLV%2B8w2bH6zwY6pgGSXeZF3m0fcpTlrV8XI0E0bmR%2FxHDok0Ro59WnsPfPhcBmDDbYYmcx1rnYccT6o8YWuLQWezVA4kI1crvPvlG0sMBkiSstBGxkw%2F7QXLtluBdthZ8KCUkO%2Bo2edowL6ifWWu3VGEnR0s2ut9VoO%2BPwqDv%2Bh2Psbg1I5LT8mq4UEiXyBRQ1evBn%2FbUrCLr4wmBrgnBsT1lQmOaS3yhiD%2B5XchXgi429&X-Amz-Signature=c4736ed5f8531594031dfaf9a9adda1266ecb649ca0e63baa0232fe9137579b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYNXZXBT%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDJpp5Rovs5ip6hME41WiahTng360RFPYXs7xxZSSjFWAIgdt758kMQT79MTSsFd%2FDkFw1caai8%2F00sd4qnBT2UxwcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCD427UiAoUGaEDiuSrcA9q2%2FBHqnAiEdK8u5b%2FFHZmRXuK20rq8rd%2FcnvBTyxjWIRt8xaS9l4XClk0Zp0GBc%2BfLkyWty5qSZRYC9QvshPs8Pq2%2B24WvS1YdSIM1AoZGAoDMpZj4CiUu39zB0w1DgpYwUZ8aaOhq%2BYnQkKx9OnGupA0KROPVum44dn5BtRNyZYztDR6JxkbNCqdWjG0kitVWI15gYurvGplptuJqJKF0zZizqWbAxLYOscsMA4KkzrfHSA3KOoJIBfDJLI6EbCnltRt0WTZ6QMU5L6hz6%2BzMqFjUR9nOrrLJBBRXsqneBWN%2BTppQw18rgX%2F9kZ11H2stDQVhWj673selmtqYmWWdDbDU81DZZlN8KibYtLBVmHW2uIGoVUmxtqJaM3lbZHp9Sh%2FD8OZAF%2FdN12ikCJYOwiBw2Otfu7RH%2FP%2BRhnT0mp9rBYyjJ%2Bseath%2Fo4Zeq2q93%2BNDxYAjT50odABpmJHGl9TWreCJgA7b7ZTWbszvxJgix2EWUiKBin5XMHVCqH1BgoGYRNXZRv68cvD0tQoaqTYVWV11LjAEdj7%2F3sdFSFoel%2FH2zZUm0syry3tlrmr1Q59Q01WxXXr8Nm9oLHlUE%2Fk8XpVCb9BCnoGd%2Bs%2FmoCgsGMg4kur7arbDMIK0%2Bs8GOqUB7vE4PItIFo5rkEqQRi8rd5BJeNuPvvicCREmv0dqjbuIO7rPtZzN4VumntvH8nNGFoutnj%2BZDbSKF5gOJ05OdbOPN9mJNp1YfztVbTKgbKXzFgjak4w5GsJT9nm%2B%2BNzfOApl7WloSeHJKnKQHY5r5AXNe8OGiZsoG1v6mPllGPhuQ%2FwMsGvW%2F7szAxz3d6S4IivprhGGxU4xTEr5S4WDqnekLSWV&X-Amz-Signature=37a5b3fcc2cacccc2a63db5c8bcde0fa136ffba75334e551d8fd2d3c949108ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

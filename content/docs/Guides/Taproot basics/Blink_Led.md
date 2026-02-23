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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKXJLDP%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBLHDOH4G6CJah3cWzd6sUBKMKTV0eksxqnL1jV2UzzBAiEAuC4xYDUyT013UKOcnLDChJeL7lv4mW3v8VLOg5WlKAsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYxIDAHn6rYTrG3qircA4jrQmhJM%2F1HiOS52KkefVYbV2DMsdykqcwHGhC%2F5jd1VOLl9JvbAucwiCADognZfHVKSVM%2Fz2IDbvWkbzAyrtSZUxuaYXCJZAxi3Y0heKfvMag%2F%2FLZS3k6tF4h5phHROhs%2FaYCEwDrXUdN%2FzQ%2ByLIsllw6iJhTSUyKjRUfCamxgpeyq3T9ADW9nGe6mAiantLTGyn2IqiXsDHK%2FmMVB3PE5SUgPQVnMCNLFrIShWJQGcj5WaWYzh4z2njyDQma4An0g1dltyeX3jR3UDgr5Pd7ZiZULoJostPbg3gvNDwt48%2Fp9jRHtNAUZUzNMzIXkiEtl%2FtGYqGS2y2EPUGetRB%2Begt9SwvZj6BUAYHfTq3WQExTL%2BAaT37p3t1rnUjZQT1B7tnZH6AC1U6MFpTpr5%2FSzzO3o7hpAHUT4ksCc8yBrG9XrIBhk9dkJGfV5OLCiprOCfoZg0NIfXxv8gWAFS%2FP%2FdHC8a4YyhnVKdUQY9mXMVdTEb142M91VkkEra1L3FA4XjNU%2FsynEqOnkq2dkb992Offs19iUZId5MuRNwaujAT81zCrsrTvMpFpuv%2BuKRXO40ER%2FNxCLRlIsENMkM23cGFW16O7nwMBHAu1vaudiYRbSzzf9jn32D8FLMJLs7swGOqUBz%2BVyextO6FqSROZH0thomfVTcaDseygv7CQaWzTsRqh56S%2BVNnzacw%2FOQ1uVoKKX0TWXmH9AJMlgljV4WEEZEstBWno%2FOtI%2Fvo4jqQAGp3y%2BBuIGsHcJLIfeYf1IeJ3a6uwnh9rhr7YMNuSUaVoFKzRFGGdG8kMELLU9Ia86khaCaaahrKwp%2BL86hi%2BtoVB4QSiZL1QAy1A1DsPugCM4Nb5MpadW&X-Amz-Signature=558adfb0e14b0910902b206de227e5cd815db7e2fb08a846e1351f0869b05fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YII7LOKO%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC2kQNxKTnDvF6BFpl3mj7Paq9P0yof3iJY3zHmApCIvgIhALGo1aqfa9cP0Ki4a%2FqqJlfGmx4WuZZzMHdmW0Da9q78KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy06O7XraRMudLqQ2cq3APXUiFSuX82HdvMGVSarxxaGIhuLQnwdTr2JLjEnXG3zB%2FN5J%2BbTW%2Bb55A4GuiEvdUDNGuZWXthY7qxHLohsf6e7C71GhFZ3kRZ6WEpmAnrrUqeQXpXScyIMzMd6DnMHJPjNtCqmwacfRiB5Euit45TqftAtC%2FqFgK4NA9U8DD4WJ9EAlxeZHqhbv10%2Ba9cjuohMA350ETa3rtUwvdd4Jf%2BbMlJ%2F4KDdWG14IjO2nfzT5nTQsu6h%2BS%2FGfTERe%2BCU04ScnN1nhkrmxl4El%2BKZT5iAT%2By%2Bs4eeY4zXIXNfQ1Q73xQzMYB%2Bpn9DfjL9wcCr8%2BDLWRkaWxX2L154bHLjKi10lFVRgWl9Ms%2BNq4y8dTKUph6mr9b5jrYawKKH7SvGqAY%2FwOpML0YGsJ0KPiFeE0ZGTuQdOBPkgxKLQmBeru4Bo5WSPGpSATYYd8hjwqPvSzyJ%2BRH4nL8xOWrzAHQi4hSI3n8Rc2z009DUPlk3%2B0%2BLEtZekL6v1lPeyEb8%2FSXW42xFwHofPmR4C0mpNd6CBjfF4PAQzmmlbrAKDUXvapLwVEQSJ4dxciejFmMtBiuifTmRtnDuHx7t75t4MVY2zxNmnrZAwsn5dIooT5IayKhO2xAbLwKNyAgMm9GFTD17O7MBjqkAX00c1FUSAFWzktxn1300BwaxAxDRPj0dhSZcFI1MqNVQ5RsY7rFnr5jJ%2Bj4oY5o50NFDtsu1PNd2sAzHHDxMZfEfXx2iId1SY0043cJpRnEhFxX%2BGj2pMOvqDw2o%2Bwc80B9qoLl%2FiTIyyk2JPIktNrktvd8GHa8ZtpiPyU7%2BRgqCFlcnEfR54pFsUuy0ZoX%2FPr1zZ2gbQ6d34knSijjzTTStq8z&X-Amz-Signature=5db109994e277f66568e167364d9c73b3a62770f7c2a69de097e9b09e9a4f571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYPMRINL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCICQNd6o%2BKDblt3ekayLHi0EZkTcxrJSaTLf984R4dAH2AiBnMEf%2BjbZYL6gk7k4zK0CtMYs%2FrV9PvO4QhHYaqjGnYyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqzWFASYkwLqGUCtVKtwDum2JhYw%2FtleVaiQ0sU6cVztoIo6Bnp1jrTb%2BA0FubTQA9yIjWw6Z4Bo%2BLhW77IIpYUEOn%2B2em%2BHHHqamSFQ3aNFHWk6YYr2%2FW2KBQYkBlUKcYaWRu6KRQUALL8FsUUlf3JK1ovarM%2FIVHRVrkR4RQB24NL8%2FT2AkRno88hnh4jjAkMmSMMCRFEve%2Fnls4j46DWhE%2FHlv8yKig5ifusl3BWqcWPutpXpP8mlyzdCOiljfLDpUwTmNDSHLvNIk5I1LFdAnvbelHzii5Zi1sHZZKhtOOQUBqAjkgZIwWJj2Hqz8XukgzpOwkr1wWKS758RSVME7KBtfVtaHzQgCDLla9IzFBZZeP3VzddhAf0GzW%2F20aSD9EG5phNk9JsbUgp0PUFhIMWFtJCEqg2O%2F6R7KsVN2rO2VeeZLHSQr6awI3rDCnCMfFRlFwNAuP93wyK6nrO1AgpQHnTcC42%2FHLUe2pzVNCqYcxrvu014KcOLiXLbL98UArwrq1Bgh1KxxoAUKjDRl%2BYkXcwhj4B2MB2UJUo6r8b9%2Fu%2FtY4IG4aKvBFDKA4MAHOvmDCg8%2Fh4pNd0UBPnhAC62VAaN6NWxWpi8UFehYkMAPhLsKwpyp0kA%2FySiO36nJeCTmDWdVe60w%2BvaFvgY6pgEUcHmedY4ziJC7e4ANAXLE2IQB%2BNNyiC3tmkuFQWAfdVgshTZ4nHMTto%2Fe9ZYEbIGfgtCNCLDqPW%2FIVUV0quxp0XvUcRIZCKP5j8OHQXJaABrZbCmxpJqhBP3WM4GsA7MTu64zK8vAozeuggIcuhwp2N115eMl0uODGXdWj69qbE5THddfmtQKGQueW%2BK2rrWxGccNFK07B%2Bel5%2B19uQHExcfPz%2BZk&X-Amz-Signature=0a900993a49f9a0a0c8971b9717df9d91362f6c2540a051a582a04b7fe05296d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFVTNVLW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC4xESO513nSxfWeMW7cssGfVBnVJ3VlYblshxIYE%2Fg0AIgYGFdY%2B%2Fqh8ezPkZimvBLB1QmiJIiI9OAFoszBPp8AR4qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgfmnvWb5M%2FV5doUCrcAydwRoyvUxzF8BOeLD%2FzFrLT7xtNQOJw2Cntkgnnbr74mNreddFpgRkh6KdThbTv6ovwGEARQra6tCs9VXkLjAwmq5%2B69QmsKHT%2BAoIOtvcR0EIOIM5aqb2b1x4RZ9MunCGH4lE5ZZzcaQLsZLnrFQCGHqiW67u65h2%2Fg2yFGHaZ0ZiF0wpJi7u1nIphqxXRnP7Lx9%2B%2FbOGJ25%2BOGFzmTa9Pl%2BeflLNyxjPM5f2jLNmFM3J0RzIhcwcoJtEDbhQx3WMFMfldWZHlTuW48EM1LAK7C9ybgn4IEMo6mhCoK9%2BaCHtdQxJ5U0AgZWrjGjug9U1CWVHoI1eJG3XHpSAsLfBygrYgx5PDtwnv0%2FyaTm8ZSTBhFMxNoOG7wwWh0dL7r4vLa79Mpgmz5pnGeRd0aA4aq2QEF0%2B1A1AkMWEPzB0aL%2FC0iSCoyrC0aM4j5vI5EHazC9D2NbP62m4NU%2B7Cn5cIslMSJ4zruOmFDvaU4Kh2JqXtFAgUivfJvxj0OZ2dBjMwszXnrLmVVs%2F9bush7vrwZwqY%2FkJ81DtxDVHizhOlnWU8%2Bmgh5QaXloztjGVcMxyPYiKibSQ7LPcybBWMQcV7begb3d8UYmw1hK%2FPjSBkmKbYt31V88iPnodbMPz1hb4GOqUBspA7kSn8H5fd9N5b4236cbezyoUp%2BODOWWC2mlKk1gJf72NqRK05gyZRA2bWP%2Bx4QUcoKqt7DLie9J0HWRJU8j8b%2Br8nZukFKAbm%2FwnhDVtajq1cPH5lcIyobaanEI%2B4Y1U8koEx37fbHTJRkS7dJnaOYU5ZQBw8ZDlbS9fz9F%2FlHEXxwbXL%2FxRBcLbN%2BNI9wDaRUURu2cBlCsW7ltprYI2H4IeG&X-Amz-Signature=a2648f49e9f11bb3ce8eb44f810dc64dc0f20a8bf8cb4c1e9d87076a37884248&X-Amz-SignedHeaders=host&x-id=GetObject)

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

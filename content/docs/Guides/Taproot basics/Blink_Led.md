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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPD4EVDN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXCqkYodvKvo3ySYe%2BM2mydkH9KtUO4NsI%2BJG4%2FhZMbgIgbvk7zdMB8EeLzI67akqIcsh9LlXREo%2BPjRHoOSSXkIAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPBcmsmNB3aoj94zcircA9mvSP1oIq1XUl0jxbU8D%2BM1NLj6tfQXmPsd5E8k07FMVUj6iWXB6K2via1yS86AwzUavLAmJGpNrB4VZ0khTvEG0Tu75AFPIsyxYwJ6i%2BCPfAdnIoqqvTvvFQck0I6g99QJzgw%2BzdVrROC%2BL0wuZ26chAoZ84kvXxeSuFZV90kw5abqYR9VM%2B8YkVYN9WSy6nRCuyBC7gvGw%2F6qibVY%2FdE9Ia3wxgbjyAoAR55B9P3KxP9ITxb1D05Fk65H5hjr%2B35L6KpdHpAk96tWjkDSrKSScAyRk5R4ymriuLy6ljZk4cBIyQt8mXL35zmcwFk6KXJL4pYqoL42TkBnLzFelCrt2pv6bU9ULgQAvO%2B1IEk6OkhwqNCiw5rXGjbsuIqtuuEj74ju%2BDQUvEAblPeGC4g0efREiWbPoggAejUvmAYCrHWyY6nm4JbqyuEyqnL6u7FLd%2BKpkr8fkiJRRIW28Ort1DZ%2FZ1th%2FFDR%2BllPr5Q44fOS%2FfOcbqSnopgGIh4lGmFiY6fhi7HFey4pOzP8ewJXsYQPqCGqrN7KCxbNI6ZLoyEl3Ov8%2Fy%2Fu8yyshm%2FK0adpALKwM9GX0pgwyf38GyQVzRxB4ojSbcHnvEe0cXAjnk5RCoZ%2FDi7D1Dy5MJHrur0GOqUBpqNOZ3GUYjznrCYMUi2AaJ814Z691JmamMRA9IAocqvgCcjihk10y4QoFbhwrYmmun1jg8lcJZn9AY616zMhh9%2BgFnN12d5ITr6pmnkq2U0%2BE6cvU1NoMDSFVnXuEpVifNTDiZOC00HgYACsf5INC3Xh0qt2Uhykqh%2Fbp7Xk%2BFmhnnYrCYWH1x9ruwitdStmeJvKNtnE0SsnkmFL3NtAujLVWs4s&X-Amz-Signature=a664e2a6275b7d6fd4c3e0c620d96527bed9076545e2f20adaf296a1b503f435&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R52UOFP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICluaRO8ywm%2BepJfrJF8aQdT2vYvBR5exkaDGzY0327gAiB83gZwz2195jBIkUnkTkSTkMHGUhz%2B9dZtpbeH7FoOkCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMPT8ydWnDGG2OJscVKtwDYLdsI6zl21UF1%2Bhyk6kIOGQKWnn5wSFHNPB4TsEE9xylq27qA8l2NDvl9YHwrOU0efIMQ4j4%2FzNVgngEM%2Fb5q49WDUKTJne6%2BXLCiAVEb50wWflwXmFS14et7H56m%2Bw3Ne4aMErZQ12wpiruf%2Btf2XJra0m3eq8LmgZyX0UCQaP2um9ZwDIAPg4ZF7cUV%2FvMZ58jUeD38CU%2Fs5yyb9kKc0v88LultH13XczBNTPD0Km%2B7aImui6tQbHhArUlCcKp3uNY0A%2BfZryGg0V2pNo8v8L9OdCNkJEQLST64VWdVdDjd0B3WKMlDP1mrAQrQ5biv599xw7CWvtZ89JxV52XLN30dsiLdu5L%2BIO6FmjR2Z6KE6ZuvmxHPmTeBwVoBlkHuHiiXTabX%2FHN%2F%2FT7ARtejptMkE8j3lJzKJFcAvAMGqP9h6rZoItWJfZRYnISnaGy%2FwVR%2BQ%2FzWiKhbFXlJx%2FKXWhp%2FIgHJAzxLeP9oapVdcnXZJKdHUUCrlE4ik%2Fm1P6bwdPCNGlycWNyod%2BBRfFML%2F%2FdMDy00ySX%2BWLk6jb1gH%2B4hDxx9Mpcdtj0a7kJtJOePJyWg9Zz03K981KjSz1iVc6NJPYNd9gsH%2B2sN%2FD8clHSRgPWPoTrzmOej9Ywweq6vQY6pgF9wRPen67BoN49xxBK9wsLJ7oapaPBl9ehe9kZKxRUsCLcufU%2BAt2u2YAX7JGpdLrk84nOmGgBAzUg0bZSzf9P8XrUDNtI%2FfsbiEJyXjqDaWchjNY4mJPsNTxpkuHWWKOiyjG8FrreqKCHwgDYqv23q8dyf1iGURt9O8u5sV3aIHjxjijBXQAYfgN5dwhNo3LgtWGlzaNnLEPOM8G4yAdzfGDqfYYX&X-Amz-Signature=8aca1b834318e80ba8ccf51f2d4e2456d11978b71a6bf1be505f9dca0f1e2715&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTBRTNCH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC8yD9VeqWY3KJtBJMi31uLrlB%2FDvKAX4KNR6FMg1eVmwIhAJ3VjB8WoklIRac3oPRMu6mkJBTmNIdrWwPou8ZWRwe%2FKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0RB%2F%2FHguhnuPDZNkq3ANBSY1QrbLWED9aAk19VDGP4IKzijVwMXI52qrZfIy5TYSW2Xp1TLmFf0DvQh27wozjLTT97GDSF27OB6hA1b%2BDzHdIp4D%2BlXVyQEaLAzJIOTPCFTcNFS8udzU%2BCy0XC6OaWRhqtVST0pq8tBnIHYRrJ9b7UYoRG%2BUk4kmMAI09P1OPftvKahEe9P98UyPrActjAh0mO%2BH9MdQffGIjApEVzUPjnIdqfvsz025T%2Bpr1yE0cUnYPdaOBEjiIp5Puoth1Ns5q5%2ButYCn6aBS5TWJ69e1Oy%2F5zdZK8WTYq%2BPCbMK3LMgkOLfK5YVsZmSsUjvTZXbLn4ALcdUM6laG61tcOf9YylZQexKtIdSLCt5TB0FLFv%2BswYeIxxsv8fMxSeIZRrHOxoCMa0NsfcbZgi6LYGn9R%2FecVUlba617toP4N%2B5jO4O7jFy%2BTg%2BXsDmr8oOgKq61Km%2BMUKmA45W53%2FPAa3Hcc4Bna05WNikiGsZJSy%2FcEK%2B1YeDAI0%2FApMsjhUleY36h1JRTp0S2%2B1o4dEZuCB2UdqSv5vnAOtPUT52cNozoJZd%2FK1GbPpPjN6NxAvG31Don5eNcW69AXwVm%2FMbfiqoYb7A%2F38f8l9%2BV2oVTUBBsGh7NArWReUhm4QzCN2%2Fa%2BBjqkAdhcs1Ha4cijNwwlVUnTN32uCdoYLyKHeszQzCVEXxSSgb%2FjoQlBcxrNIAonlCJT6gjsicBFStYFyBIOJTfGp9PbtpLkHxI4apa5q%2B%2B5aPLtl5O8GvROem71repRGkI6vVp8OMcsS9HPOmeySFfCCfrpnKm3AV%2BZ0bjT4ht%2FSO6kKDHrylDrLfHONHTEkn%2FW9xAiTzYO%2FTHqX9r5NX12TFoMUONl&X-Amz-Signature=26b38bb7ee06ed4477088151abbe5ba543d82b5c673313e8038bf3cc959fc4b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7V76FB4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIH5U%2FfGL%2FtgkaEHh84cXPhoAhOuUnntuVDgAOfcBo58MAiEAhLh3arxLurv%2Fs5EXTpjLr43D2xG9FZiw5ulq0YJUGxQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEA3AOmjd69ZyTWnNCrcA8Wkay%2FRtqf3dSYFxiW27VTZBkhLfrka%2FnT0eNhJHKPrS6qT642m5oKMol8AJTN%2BflXgqnbMkRJ46aulFzCG54Xa7pwNC831kKyhGslYUhYCa1PuHV2XZVgwYUy6X6bcl4AQpZ90PYunyr5nKBpHe72CIQQksWt4Eyhtxb6liVhImsdHOO9XsxZJt5UhyH2l2vzmplmeeP6zVtbo4r4ftISsQxaPZfoKCFGZvLC5FXGVqcDTybBK1VjfwkUOPmRJ2E1QQX%2FNXFH2aZ6sFc7z5hDFtnazpKJLrN%2FF%2Fflb5RbCOb996U1YTO8jRl3tccVEGAU4j2kakkLHsKK1mt24vDt%2BMIdNeKUkjM%2FYESKg%2BH0G1mXOU%2BQAje9aK2U%2FIxCM1wt%2BqPXm7%2BgyOSb8kSUAQ2hXyvOKvGH%2FAfQwbsW%2Bx3uVovd3u%2BQeMy%2Fj6HK3dOaJ%2BC97OGwtkvC0YZI9DCXVvcxaqQ2C5AnY6KbtXcSCLVndIWg3m6Pnl%2FLaFwH83eXpF%2Ft2Q0DIn4JUh1Qb6Ba%2FSYkab6Cem9gO9K5uHzRUZFUH2RSRVVx1vus0GMsShCX8TTK%2FS35xsamM9D%2F88DbxQr5L5c8T1IY8vl9CtzcV1ipfvkrHbDURd0lo3nGoMJHc9r4GOqUBHjHuGpVPRz%2BfCgMcbR4xEIE90BU7kfqbmZD3m%2FIATgvRulRcTPMwdUgcwlCRrl8lrh7JIwqnE6%2Frh5bdW7vnBKcPbmXaznwCvKB1T1tOjujH8je5OmtA%2FNRC2tG1HNlNooD4cWBpeZJVCdbe0YYz8WTNzMHQi8r5Zd0SH7A4AhgBu8gnEwnVUb6a%2Bqpn4CsBqVoFsB8PQp7E6zG3wtHP6N9gVSvO&X-Amz-Signature=b32a342f94f740072b6fb5f96624e2f227d1fafe8161d7d75d4307b4748d1dfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

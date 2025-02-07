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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPCZ3IO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFTWFQQYmZpb0tdV3WFy%2BzLNZNvmfSl9aahiHXYnhJaPAiEA7z5356glPkBCYfbevTBzYEKutnmAifhG8JcCxt6NwpAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCefmgIorC3I5PMAsyrcA7FfTxieOBPJBnYaWRoxobw63lNEzgkqAQSalNlPkaUwW%2B4l2%2FYTNLyaoE5Dw7LSo1YG8DBtzSeWngeuKseD3PoMM%2BRwEOFeeXlxAkH6BuRshQQF8PyTSjU8r9GC612iFFkhgb0zi%2BXhYdEN7V4BALfB7SUkMsq1NtoGtj78tNKxLlwLc%2FH8hbZz7XUHZwPhH79NHirdzaATzokTm8lISIpAgbDAgG96BucxMt1TnqEqasVpg4Yn0%2BGB34K6pn5PvVgypZbgtaJEBuXU27SnWBh2ZbaPfefYTVagUSDcPnw1GlEGOpfTJcWsOyi68vbshQpo1PLO%2BYnZt3p1jfofBD3AJRZhh8pwBS%2BnM281X1uCjdfd5loodY1mlNWMbt%2Bv%2FiUWUeWgwDxCrqrvnlDrFIb5T8uIiuHH%2BxBELhMlHTVM6zIJO7SQay9A4zuP6maU3a7VdJ3vTsee1yYgA00QXO2ffyFn%2BybMm%2FzGYRK9diCgKX0wox%2F%2F5It6XXBNnHfcQ0c8f3OK8KAJ9MH7RczcKE3nHlQI2DW%2Fr2vbvdh5sZIQNkBURTujcnWjNAeywfGFnJSgfFwiu%2BBiDyR%2BioR7Xe%2F4h9ydPmhx1TKaIuR99%2BeZzPVe9ixiftU%2FvMG8MN%2F%2Fmb0GOqUBKHnqxngxfFF2NweXCNC1ZA50xKvT9pun98zj56eZBWzy7U%2F3V6zcptEdFKWhGOpBc76ypN18E0nlP5MezoDwLlpooyLXnLQOSNE41Yz1D8T1NgF8RBQhhPqoeXx0EAyHK8ZjwKgz97dSoVMLeSVaJ9OkwR78jBH5Cb0p6Exrc0AkbYvTg5zOlcBxYBtPx6Wxibb5KTqmOx6W51jxYNZngsxkyDyO&X-Amz-Signature=dd164763d1938695e20cfe3ca9ed85d91c0ab98f5267de66ce909426ef228488&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V2QXZ2L%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDNxpBtlUInFPY8hV1wOYX7kAz%2FE0W11tanS3wgOEvSvQIhANr4L7d0jDNzrjnCnJINghbXMv17ZsJmOrsqZL%2BuFbn1Kv8DCH8QABoMNjM3NDIzMTgzODA1IgzVRDdy%2FySDAVb0n9Mq3AM6FtggDwBe6yTA9gh0iCzBQjLMS5V24dpJcxEWoWdy49Nr71lml8Vdk43YpUQT3WdcreTez6R2fkeyhUf2RJI0MWKt%2BukbkdXsvyDjzxSYJKACvjNvkNNx0Wj5j5qfXSyQNRu2mus6ZaQeAuQCtnNLbjvmUf8WqC22iJ0yyS5OXt4zavZSttfiFggutHciGzzU7O3wIOnkAC7BO%2FumS0acQf2CSDkfvVVxHnKArnHRfDl01dbztVGdbozE5E0ZUPDlxHclkTWzlQIQzQjvvnDqyLnCIY%2Br4p86jFE6iYn6tyaUoeFrfubFH%2FY8cgQBVBy7onxZZ18M17901yevHTl7q1P8qe14qn5o%2BgD6B7vU1vCTa0qhMIzxSvofyXYitw9Z90qs0Fm%2Bj8EKfx50cFhM2beGoAZGvm89Hn2c0Az3CNBjxdg%2BIOJLudgaZbGU6WersFD8apBx0jf6U4C7LsRJOlrZxStf0GB%2BL3EZMEikYyg4amgKfUljy%2BXYxY9%2BrWqcse%2FHo0wFUM19OKH2O9SKMF%2BcuQev5fKVjbY7ucd5078kWu%2FD3UWVxyHl%2BbqD4SB1KoG881dr7EjTdHciGCe%2FClFDw0CErdKmfTX6VS6tiC6P1PHMZn2zOoOMWTCOgJq9BjqkAd4m%2Fr4DPyPLwoc5krfiwfv3a5BBaJhdU0vzZA1N09OyAE%2BmdK1sAHtJCIJ29%2BlKKdsNVcx7w6jFCFWmWO%2BufpMp0f8lSj9uy93FDxcY1yeNfJi5uh8ahEI6%2Bfzko3lrRNc5VMqruUNVdhXBL5EIDTQx39ukjGiWII0r%2F2%2BuZplQ3B5Y%2BGDylIRmRV03qCxGhV9sU%2FDEBZXGuS%2FQveJuqRuWWRth&X-Amz-Signature=9297a5d634cfba2e90bbc300ef3b3c6cbd4f199cd6e9e2925a8c3f834e0fa283&X-Amz-SignedHeaders=host&x-id=GetObject)

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

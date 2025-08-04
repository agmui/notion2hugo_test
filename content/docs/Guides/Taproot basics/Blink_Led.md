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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY54OVGU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFoq8Iw887kWI6c1i2%2F7gknv4GPsf3s6nEMTdhIFTPscAiEAz38Q7q%2BgdSYmr3Aoh1eqw3yiOta5vfdl24krt4772lIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBuJvyX7ZAEpKvFO0ircA4VJcUjeTqJQCFOnA%2BH9WUFo%2FgZx4izRaggz532JYW4t7TROvMNxvYZCOtm73PBYCcrkvORxClOX6%2FXvBnwcTUvN2LlydUCTfrUxfo1p5w3iMqNc4BjEvxNtzo6NjVXqzn7K0h6usoZv%2BS2mIyEFKwuOWL%2Bz7Mcm0aNHugUMqPxSYlauzbyT%2BfwQfihPWIAnz7h%2BKx7Ad3rJnxywMHLsM2cU%2BrRdYCKRSAEHodY0rhNum%2BWRvnhQp6l3K76Mr%2FPQxyqOzXGOLDBCrTX0X1twB%2B8xX0XxRQwmLrCvmjgfcsqXD%2BFSFKSnimZyyAdY%2BAni5p67Exzr8hPtvTFDqU98MW6C%2Fe%2BD6B0ygepfg2Us9OtnBTJm4kY%2B6tJ6Cf4qUqd8nCshjN5MMCZmYekAWm6JIjCCnG0B6Jj73rRpKhjtd60epZsBRKan0nthYEkaCwwQvWqiXGhxcrnG0TmV0Cuu7rWORwR93y3Am53X46mK1oFq2NPBc8iEwf%2B%2F18YdWi31qDpSqLIR3P7k0XC%2B9n6I22Xkrkeo2LUEF8QeFCIspic7KBhIZJUHCbkrU%2Ba0hI06fpdp0FkwAedqY9tiD0c8neIJ0kvyWaCO2ePPL9kYjDs8pYxaKRs3t4mLiIHsMI7Pw8QGOqUBh7rW%2Fr%2FujKJHyPKTe094HCZvzqT1i9R8dZgHaBx53h1yu2jOt1PwT1j4hVhNKymvZyoJXANhxYVA81JNHMuTPkcSePDYdhh6%2B2yJjitdkioFonsLx1K8JgFn%2BYtarKBHW9Shnx5dd7KjFPOnYgLGikab%2BWCblR3ol9xZ%2B7A0qQVTs9MwQDcT0%2FQ92siUFxLBTFUp5Zek4gq8Ei20INlc8%2Fh3AfGa&X-Amz-Signature=360dd195b6c9249249f98576213e6dffdc48450aaa9c95c49616726176b9102f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBI2KLMS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDZj2XGpKEdP96nCnd%2FlWAeRaGGpX75%2FbNakcUkHvor%2FAiBLlZJpBBGVK6ttWjf%2FYY7qit4Ji9XlLFBxDD8r6wGRFCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMNxhyusdNF7p1ASbKKtwDSd%2BQzLisZSGS9Y1dX0Z7IpjSrLVl%2FH4bRrmv04GF%2BwXHd8detqbtsxjrLeS4brlDIz4r6y2QfV22YMlxqf8XdveJiCMDTAHrbGVmHp7kejd5DUSWr46UGsSyZihhAqMbeQ7yVL3gkl%2B%2BKfskjL1Y5rdNVVqJtBeHtbW4oAnjTbir%2FNaDlYADaUyJmHECXIpQIjiQLKTn8Lc8%2BSXdRMMCvwyQdO%2FVbaG98JUU2Z4ND6Dwjkg178qPcRK1vPT5Ks51g9%2FNOGBdVvg6dlaCbkCM0SW6USzvDQBn4RSllneazDGhtHU%2BPSDlNR5LD1t5q8UtukrowJ9%2Bb4IgHDYA3RSlQzOs9Dt5WrKvPrTHnfRQ8qLIiJ9B9b7%2BU5YnOSWafX4sbwjfqGPL1hSwzegkczVMi0T554FB79Vn4CwD1ukvxwme%2B2cBgHMGmLmamIup7FFyYjfC%2Fazle9eqghvwNADJhkumlmyH2v61XZLANgpf1n1pER7UGODUsvIQJAKTdNkYhCAK69DbXufC2hgj2cUuVKNZjYkjG6uzKOa0WIQ3j2IrhKyx9Dvya5j7CUvpwGkIGlrVa1c35hGHgHNez5m03d6yMov8hUIkTA5x0gaLkjGPnhWXlcWaKILN47owkM%2FDxAY6pgGZG7xyFti3ws41s524sOUclSew0G3mEolXWoH8ovfL05BcQyrA%2F648pC%2BvkrX4ly8ET6SMiUj%2FiepjfmdBHyUsSVuqS5mhDLH3kOx4xLAJ5jaJQXoGbjtmjghCkxAq%2Fn96aWJqhhjoJxB430Kao%2Bkjyf5lT0TpTFFquIFkyHsuxp8fmoMcekZNIEqceWZ%2F00HsqISKXLwm5FGtUzmApPWjIdIvhrby&X-Amz-Signature=4367d0e61185ef8a706d959c388f903cc48ab9952a6c9a8ac1058d4087376bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IG3LSY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeylkk%2BJIiii73tuVysgnOtvkzEu6l%2F78xy2KR0StiowIgHcMm3EyoFoPfjTU%2B6fYcoYGwcZAzeJE%2BAVz10ms%2FqY0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIebMBLX6uB%2BzsTqjCrcA2NzQGQiWfArqGSnH3Ze5dL2Hg1z2rjLEeFbeNz1O9CaTflOQQ1Hk0I9k%2FSewG5GIEfmPMhqggTTFXb3%2BTO994ivhBJg017ept53tX0d%2BmuDwBUB2IV4th3dJs7LEN74G%2FkuzU3NFPxkE8VbtRRF6U8Gs8AR5BeKNkB9OfI%2F0d51JkZ5M4d4QFcBgARn3%2Bv7idZGCFVBXclX3kTM2ffP%2BDe9AqiHSS%2FE3YdrSBSGnpBKhSEDBqobIcz39Zt%2FjQJqsoVCitQ3PS5I77JTPGW6XjedVUpR3njK%2FbRIEeNlMfn9HDUQDBvCz%2Fv4mWECeT65PS6WC7k445h4N%2FcyTDh85NT5wxNEUeFdMyiTZk%2FzlWxwlR%2BldTeIWqaISZuQSGAH3HTZR73FFkX9GVOR6Vfkk9LwpAZV1hhVKHZ%2FEqyFmwFtX14oWoJ65CLb8tBL75GITpDRp48flvILSzh1NRW6PmWxnB5WnUpgzqHGlX0ZvK%2FHnnbjVIFahEl3fvuP%2FYIdJmALvVS3%2Fezew9o47Esmrj7JGylXUUPMvXq97Ml%2F8DhOGB6ojgEv8Z0Lc1ZNYtinspTxbsXdq4HARyiaqdXPI83PyRVGO6H3VRsCZCgeKf8mSw3LVo2bq1H3LVTxMMfK2cIGOqUBXe4IG5iz86qJRAiIg1WD%2FDyKpqVqst3sMqSPmAGhZeXRBNrWZDAqNzM3%2FY4%2BdwhPKz0WSHJvutInVI%2Bc3EwDWf8ZK2%2FqkhHqOO0d7BYfZClXc5o%2FnDVY14r5tJWOcvzyfRbZGXyR1JMTYGbA13MRf46Y6zyy5Uwe1wxczSmHhI6aniqeofXbVbwht0VChIFZvf1m8dNZVSJunfBqb5uC0IcJSN81&X-Amz-Signature=173c6a3a921a3501e207c8ee5f77262ca8b3e5bf2965e91c90d5f1d3f752675a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORVROKX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFobV1uWT2PYrya6Hiy5K4DbFkCHiejunsZ5LtqKsxhXAiEA2tssTCiJY1TidXyZBPW8VYqsAO%2BLfP7VQ7vL0AV2wb0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6VckmnIjaLWw7aiCrcAzE1FAokzu249EepjwtHl4QaftDNp9lV%2FpB4QjN9olVcaZ8tsfcm6ho1HKRfI9J63hDzL32YvAcQ5AO1VmCItuS1Q4EHzsC0DHYUCbpLi8lLCFjrVw658yBq%2FiLVD7gEA39qdO2D752rgx%2BxedYKx46veWMoWUf5sZp8nFNELT2Kd%2F0XE%2FDhdG4hxP5ktyht0kL9Uzcji2XLXNDo4dJnsVcUgnxX0aFJsw4teOyICJ82UplWelnEdLoMy4VjhkOiP3%2FyLh2OlDslS6QTAfVk23LjiLTWIGcYsb3mCLXx0MudXUCDH%2FJ8jN6kjbiDTh2bo%2BqyUikzVOnaWp0EbZV07sgBtfkWTAM3Cuw1Utw990hZ0AbKy782LHJcHYt91YqrxghlS9pcytlIr7y4U0zQle%2F8dQFh%2FXKzPq5ql6tKZihViazTU6a0eRN2%2BNZ1X%2FzV61znkPQesRWXCC2lK7PPsnwyNGZNyNKhJRMD%2BDhxN6fIofba2FVwH%2Bwxhf6a0kqclBnPXW8WovoEVt1t2jPD5kL5Il9AqWex1rtkAHI9RjntV%2BvoaoEPPsG1Uf4RyQt%2Fy3qw8PrCSQzsK42RptZwzQGmc63ltPuk0KOmexvHJg9QDubqpU6GS2Jm7JNgMJfQ2cIGOqUB8QsgwbVGqYw8GPG8cfFYsegtyuBMYcJFmvTCBmphhWHKEt2aas8W5Qt9m6hSsjWAJhWW8EvhbAnq0XXDMPB49UAvXmXN%2FCjM7t4JKMslgVot7jsyghgaUN7GsqGTq9E%2B1XzESbJkWTvSocJ831FyaxWjzIMqKu0x7pkIlt6Sa0FEm7Jjv5FRWdSjz6N0SDCSFNF2%2F07tNvz%2Fa5si4IPaBnoj1QHb&X-Amz-Signature=b3674363bfbc292edc46ad58b4d1bd1ebbb8c58e439524fada62c0959be75d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

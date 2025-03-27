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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643GNNEQN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD232hg8%2FYphB017DEYFU7fAhdG%2BbMV3xZQE%2BJdsp%2B7GAIgazxTKxmn0W2bn9EZ%2FJG6gQs2DysKXTSrZE73CWryyCkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGkzsTRqpQFmp2NMrCrcA%2Bmw3UtgBNosN2kppT4c4NQ1svYeMGAh3Hcqy6dHeXc7JtaRAalGoo2pf9TZqMFjEZN1tC291JkWpPsjyOyqRDbZsVX4TOS7dpNNVixFvcdriA7Tvidx5N1ygRUKfu7ymDvsaFuUL%2BYZ3rkbSkwDdD3jTNRMyLw0NPZKDT%2Btr5j4j6Rz9hHdXZ%2F1GrYEZD0K2G30IV4zfBmSr%2F0PL%2BCaGqqQnJD7b4wSVgGWi%2BXUy9gVGNQPRJPIPfy5xxufzQ7nZzoXla8%2Fmw6i4iNN0ZQRjzE6aozfQcAIrkEEQQnTbF%2BNW%2Bq1IveRHnMHqPFk1WuBl1StieivePdm1UjRvTIZ2%2Fb9C7hbUOXHuVZ6NMXSgeAoqghjCbwOx1NRhhpV1ZjXpjDEx64CpNs1ZViyx7DcJso3KucC9gFApesuWtYsZ2AyOjDWnb8SarU5zwLFe13At5DH1n1ZuFIJqkflFSr%2FSfchrqF06sUakw6QSHHNJSl3S9QODijODfjFCrh5WgttMg1nq4InA8udaEoKEbyvstY3kjGRMRkO6Xkcxp%2FFB0VfXLQSzhFub88PEbreyTGo%2FGHovSkdhf8fLSUTa68tg%2FG0oehoNnSEJujfdZWmRh0CHmd1M3KlgAsyKRW6MKCGlr8GOqUBWlT27OdDkyS0KHQfPusePLzGS7mI4ZmYnGoOXfTfygL91u1Ccd5Y5beUjF159Pg%2Bxo1Dw4iq99THf7EtA%2FIt6NFjPxkrs3rl91jxEHM6oje7ahFf%2BMjKrYbwUhENgkzoKL2vagdByEpoRKkPbS%2BZGNprTfl9fz%2F0CbGoX5WbREF0ItPWQSuEZcEwjM7n3MpzqC9DVpUvs%2BOS94%2FE%2Fjmo6scLTMVu&X-Amz-Signature=23c88d0c443d9932f97d139f596449f1d85eb5c01f39d7192389d9bc0cd515ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSD2YPM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjsJqRkvscWPwprUXX%2BJb6DC3DRjXQIH6j3shjBQ7lxwIgRrHbqrzH9VfmX0zId4oztPsPSEz1vaKcDzHz1f3JxaAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFmtcu%2FGLdKRZxYeyircAybl4%2B0C5KmJv1%2FoaYkcA8Mc98umI%2F53dsn64Uf8lBiCWFJNCnI7yedOmi%2FLEf1WDgFGEcVs3gXaq7rf3UOmqudVmQhuwb8Rky64eCeWmBY4vTeapU5l%2FHswWpgU2F3Xi87vBKBFP92b6yqnpdtF8oWM5JFtQK0OeEs8fYkytzAR1JvkOS2kJahSkI7vnD76rWhPbT9w1kgTATE6oExhXgFCZqCWRrrC3XW2pZuT6szAlD5mtrMZlOqjeeSPMoqNOOJr6pJUvRjOG8ZnePaTD0FqilJm%2BAXJqoGXznsG517RIxUeBb4qMdmyo9Th5THZs04%2Bf%2BgzyVetlHSuUQbVNWvV%2B7ZoN15TYN9v%2Bo2cwWZIq1sdP0h6XD7KsskeTjG1VPpczZFG7Pn65vg8WrZv88P%2BSG1qCv%2B62eJOuBLZjiP1keu6PLma62a5Q8PPLwnZ0K6Qyf%2FEi%2FiSBgP5%2BbvxB1LA8o4FbhwgdfxAxJb77ou7J3PpKO0FB3l%2FZ0bZGTWXXIrYA90QnRNLI7yi2gLRRPGdy7O%2FFbxMipR5hisirTlVrhgndcDgwH%2BgwkjsCiXn270lHFUaaHLLD6i7K1B%2BB90PewekIK2AC%2Fi6%2FpEHFP24k5iWVkXiwiroR960MKGGlr8GOqUBkFN1bQqDVrxw%2BEx7RzBVQ0oYJuJyoLcnrtGnF0QHYh04FEjqrPAndXl0flYKZ7%2BbovPzhO1%2Bq23P2d5THIkf%2FcOJParEmbbc7I9huyqKH5i7SGyh9TUIUs7ItS44rMy8BDEEd9%2FsFQYyNzFENZavqUVPzEK5kCjRycR2ZPk2wzOHUb4wRp3sZoYVQO1Q%2FaYuUPbwgWYNNAA2CbyYzkDXAeTyb%2FJV&X-Amz-Signature=f1dd9291195429058155d425ea7ca857d163a80643cb76208cc9e0f025a9fedc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

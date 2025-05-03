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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQMZEQBX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEZ2yHsnEu7ePvcgAwmHuG8d5HqxVPH%2FS%2FauJClz4VdJAiEA7p7np7C3ZTETbVsL671iYPB1Eq9z%2Br%2FnQaVcBr1I7IQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi919ow4byCaTOtOSrcA8WiA9iYqNrz6h%2BwLo2bZ1x2AlDHFZN3f9fXqhnSidHa5tRJIBA1Df6NJTyAO4odf6XZFi43mHacSXuirfIa1LoF0aDX9CAXTDrEFi8FZ9K6RZnmamAmHVYAy3hIkaffdfKV3EWKfeoafZRR4L1BawISMzvAR0SOAmIxuQGmr0gPnr3qNk17S6padkTLRCI0WvScLiHU1BijdrrMrPGOoYXRuudgxBXinGYa%2Bcm56a%2Fdm2Rm2mgIaBzZqViT%2BK4nOE2pw%2FfrGxpEZ0Du4WhblVQlIS3wavQ43DyCKXsOSJLHcLh3FdjD07cclpW%2FznCdexIPZ1l1vOlm9CSrq1vuSEi6towXSEsKIdKBCpajs2d%2BVT8PHKxIn2Z9WTl6odXEq%2FkYTXOc%2FnCTYnrfOvGctEmLSaUK%2BkzdX8CkN9T87VU9%2BQUGmyI0yV%2F%2FrcVr8yRN%2BGve4NKZ8dCu4%2BhyBkrwu6h13%2BiGbOadrNcpdAImPQSYek%2FrR8SQl1q91y1KSel5CvuSfOpMeEIHJ5NEL1DUjwmfV2Ajw%2B8dU8beOoh9in1Im5wSROV0qQG1k9N%2BZ7Nd1a89brVLwLjrMTcFHRUlX9r8D%2B952FfNjxGcqiPv2%2BIsOuNIA6hcMzjZap3EMMOG1sAGOqUB7yJ61cWsI6Ks%2FKap8CY14MEABcFi8zNBEeH4FaEcHChpHbMKQzLjkqtfcJKgFDwVIhn3c0S%2BXN1483edmKXsFBZOm8hVuXZ1bN5DnRi9GUaDiOIb3Kdz1K2Mkz3J7T%2F490wEjREGUhBmQMryDopcFX5GuuP9MIujoIbQxd0d7q0d5jsMTN%2FIj%2F%2FMJ9Fz6B%2BmeS4DlsBs%2Bh66snixzl1yzl6rLZQp&X-Amz-Signature=0d1830971105aaaeaa51ffda10193f1c88815ed603790e99b2557d33b28079e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VODQSIHF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFEbp1Eikl%2FzTFcfKI32Di3O0dcIRv7%2BrULLKUS6rAbrAiEAwJ42p5uf81zDKGZei6MINxetQdJNH3%2FaACG6Q3lp%2FvUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdy7mZ9IBwCZAHI0yrcAxF4lAwGzyy1sLRyIta8hzk6yNh5PyPO76dF%2FxjzkYNiQyEIArzRHyFJCSBN%2FUWcc6xyp7QYD%2BPnLLrqHT7kbbrvj0ub5yjnStBzwip79OxrbCe5XCic5n3KX56lAsnhXW0884%2BiEJvJNyF5kfnn1nELyumQihUzKezJncTfZONqOu3u3Y8ZF2lnWrmitnHNclHNMcO8IcqOPu2Ti9GmzUKDL7l9VMy3eeT8Ypx52exfxrG5FCjbs9NXVatzXlg8BFxbjFvKIRbIPVipQxgdE%2BAvTkbnMTvAe1%2FQi5HFP5Fo0vkE68UoTzv%2FmP6pUjmBZEMs%2BW0U%2F39hOwIsxkOtnsQa8%2FrSKW%2FxQYTad1ZpPQB1EP7Is%2BQqLBjSNyXooj9GonL%2FoPnFs7oe5y%2FEbPFfImq2LQebgsCUrNY5g%2BTPwVODxgjMC0TH%2FQ0PI6Z05la8WCs1Mq5kBnyYqAraT6j0MAJx5RlMr%2Ba5mh7ZrMN3PXe4xWITW9RckP6e9xMNZpaFBydib27uOT0i90tjFxq2tbvFOZPfhK%2FExiexAxBgeSndWOH%2F8d6jRqnGVxI3XQNiI%2F1n9XMJquAJIPk7NA197NkqsyjxRi6Y96TiA%2FlKXEHROBy9JGlYFv9gw59XMNiG1sAGOqUBXDLszoUptUWYpUUtkMNwcn1EMlYZiImMX9bAtzaSwXyvHMOMwMst%2BVevMBG4GEBfRKdeUqkTbapHMMh%2F%2BZ4T6Z2fuCNugbZZg8aM3qehpnuyVaycd7SXA2CISmJAijDzILr9Q4I6odf51I8mfEdGdRsn5NIcxwJlyIWQVvNxhKjGNoJZq2n%2Bz7wh3TAdP%2BQOZzlkztfnEp9LpxDYpEfFv7D2Iymb&X-Amz-Signature=f97277f6d133b8979b9d3c4afc0ff865e20c87be7f59c19bd55e3847c6ea6dbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

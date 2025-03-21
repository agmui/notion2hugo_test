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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466347BWDKC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCID1MtNtQcMV0YvH2k1EBO%2FpU8esTktSdYhZHlIb%2BkxvkAiAf%2F56O8vZkzdrhZTEuRxJiJ5cKBZEFEbA9IAURMuMy6CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62qcLCYYdXCRe45aKtwDIL%2FWH1E4xXBr5VdjdxBqxlLYGIZBGd%2BLxhBJo2sbcb%2B2csortZmNpBDRwH5jlP5duTUurfAnBSdYqByb2%2F0ddMG8cf2rjAVEPyZ5m1IIjGi8q1Rc%2BwuNcVOQJP5Zsbaab5K6HoiNgHdrAK35xFr1y4FdAtwEtiOCSOatSvfQBtg7ppxP2skXCuwrb7Rz%2Bewuj3L9Q%2Fo7wyabZdxk8%2BmPR9ABuQUMS0iTfnoTHj975LGoPLrSWNp68ryVzQYGoXgVaOaZWCcOyCxhbnXEFsYgXHq88K8B0p6KyLUkIWVLGBtiBKSdxRnnLGYFGW22BXJUwpNU7SP0B0AkKL%2BMFUd9SJ%2Fusltm4pTkbVUT2j%2FXNcx3NWzv0%2BMRszOhcr991RGay4SKBrUIL5Ns1WvDpRFAIxlP8pzjL9ccrbLYVTbvrcmoA4B8E94Bb5n2f9mus0sJepG0%2BjhQwve1QkIUAzwQEa6NeZGG0bCAj0Sll6UJYHWbVxqs2RnEdrzfwoWWOcbc%2FPpQj3OcX6HBWhj3GGyQiqoDYY1DhCUXUF3S6pqoYWhPVWdewvxoQuTAWoX1oOCf8dcoTe1H1vY9kKzLYlQQ9XQJAGN2id7YM9lFtsUtpq1gnaLJ3hEqtJnQzKYwhdjzvgY6pgGbl8bvIki9q51vo95kDQvT%2FZSRCfgoXy0My321Zkmd%2F%2BZgdOKzsjqVXp5ypzIUKvlmx0bvGCEH2wHs9H2VRN4lflwg%2By3ZC%2FdGSHLJ2ybyGl0SNiHuf%2FpumDBXGJ5Th624oP9AIKra7damDr5sK1wa2D4Z9pIHFqio%2BFFcs9nMaSwlqr9vv3IAedFR39eGTCERIzzsPywZfZXm%2F4WGEXLSo9lhUNOi&X-Amz-Signature=d4645ad72dc701b961fa5c79961fbde68f642d5b08e9631ae974e29de8814d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O4I4WYM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICyc%2Fe3duxjYoDkIDn%2ByZpcaLUYa1PHmo2zke1piVDa1AiAcKprgIG7uv0H2OtnGZjBcNn2D%2FJItloh1niJveGz9PiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw4yLhJjg0gQf21z2KtwDaHqU1Ln%2FvwiXIOvykpVYxsEUTvLYnr%2Bbk22SgQQozE5rpLrrc1tSNrKKrLhg8jgvZ2chgxOu5JI2AsEH5HwE%2FEFEPPCGybo2XMr30yCYB%2FeNZLQccH40KsRw2iEfT3mJPI8gd0%2B1CTuMnZHkDWKMcKYBb%2FSXnKZPrFPEy5AsuqmrQB5KfI16axEZOaLDuz1tad1rZ5JBuo%2FDHBfDSzEyRn9%2BJqEfTgvqy49FhjsQ9FqwMzaEDXd6hfOAbcZ%2FKKtncnf%2FV%2FCcGIvrmWXHi9lWixm9Ttvh%2F4M0z%2Bp3jXQ%2BSjJ48mKKykUz80SwuURW4mN3lkLoxk6IgGjphQg1liQG7Vf33MSDaeofc2kOdCcUspK2ZG4%2BGZOb7oBzyTtm7Ab2XVqfDI707eSBL24zMa4jYoRmk0Y7Uq3mrbqZP0qCFATlExozhoe0PS5W1HunfDKFxVfIST%2F2ZNnS6NcjE5SkEQgToNgqAS3D%2B06FxcqwaKXsJ1R%2F9hRm0C7Aw7T1hRXEAjjyNouVGyykViqg1UDL%2BYSNnSu8gaLk%2B%2FK%2FKjB5ZfC4AC4HJS01iewrth9yR18fS1OeKBCN87hM4WpcQTFHtNxzM1EVTkcAOU5jSp9urDvblodbRA9RiBVFax4wgNjzvgY6pgGCynSy7ePAwqrPN79mO5%2Fg1n6oZu3vg4Xdl2yIPtyMeow%2FEknBL4mzjmyMV6rc6o%2FT0whKFTgtvqs82WDJ2muuPHF1VsO%2F2QBF4eZNz61a7SVu8iBwJ4ZQn5%2FADDlGnii6bMc2nClBV161UvcUZ8v3XWf7VQdAuocamJH2g%2BYBC35gi5CIqfacl%2Farp6zfrz7P6B7ZOB5Wpsv3M90eIsWjpCZYOaBN&X-Amz-Signature=01dfb8f673ed6b4cfc171e3a86c9cf11a2f89b89a1a032213412081a06894ae9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

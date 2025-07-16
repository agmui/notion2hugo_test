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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BF33IOV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDZen7gjF2OPdVBZU2D1mQA5w5Csf5c%2BWUSWiPyB4KdnQIhANTJMVdb8YH1z7FypEeEE4AGLcB0dwFL2vVkQ%2FFv97wlKv8DCFQQABoMNjM3NDIzMTgzODA1Igzpj%2FOpMfHF7CU2vCQq3ANlcTnKgLY6ut6XaKKHcsvQ1QLCUQ5bgmM3DyiwdF4vAn4FVE6%2BV7w%2F8%2Bv1U9YSOMjrxwSQG%2FTdX9qFFPZUSPCmhWa7BaTmX%2BeyX1d9SSCSqKcHesJICkZmzKstdtkYoqd3ZMZmDyzLEnQLOKsm4qYV2QAntmiY90Hp3WdfQJmXsZ2oZQW%2BK2pNpS3f8GzLocF3BQ1yZw6hCUx2XamiZJDFglppO7Ro%2Fbn3yrUh97%2BU6BNmg3NZa6mLMBt9wWf%2FMfaCX9FwmrbHCuw5UlDGEw8NYPC43%2Fii0F5DK%2B%2F3oGan8UFuWnEHYiuBcB6dpV2zXdfg6bb7wev04TvW76OdwBQE2iy0iwLZxCn4vOjSzmOnO9nDJhmj7dEzWpPLwbiH3AjsuZmUvXtd4FygAJo%2BwhtbrzJzccA%2BIsgQsPT%2FbQSueNXrwDRx44Mb5Ds0vG9ScMtOB1INN%2BVQZLTtX9LNgR32H2HjeaX%2FPZSlPElY2YTOZn%2Bs6H86%2FdHtT%2B6f50S0e5U%2BZ5%2FLDQ5DcWcFfl1PpAs%2BqjZmo5qw4hr5inx8Vvr3CtOldjrrWSpZ%2BEZWeBbrOdrl7mptbvtkHG8Z5XyVnnX76Ek2XqNvlun38X0StVpaDWd%2F7%2Feh4GnifGDEezD2rtzDBjqkAUXLgu3aGX4OgaZZBEwQwRdn26cT8yKd5lsw%2FaV8FtUh5qbz%2B%2BCed8Ax7svSzVYoRNQ%2FZk0RR%2Bqd9hI51QnHVn7WPgHc2r9z6YivETnInU7wezfGevGZ8XtTd1dQu9O%2FAn7oKawD6DedGxYGajS5OQJapeEAVrCSnf3pKGB7rT3B3NzhIyhfaW223XCZTpn9qhRSdC1Ms8J3ccIotJFIs3rELnbD&X-Amz-Signature=2d3ba013f14c2316eb436f3b74488c6fa0a229026e4bb51d6124402fcc20a3c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7EUEDP7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIC%2F%2BXTI3fEVqninUDESF2zMe8uFonFL0kRV9mJMf7cZbAiEAk1p55tYPTx81neujrwUDvbN1QhLbZJYFqbLTIaJSn7Aq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDL%2FEHl%2BHgSq3MHcj4SrcA58OisBfYp6UAC0W1oGdFAz0rSV7yZjkrZsvbEjTHwDbjfL%2BANsHqbStO3KVaMyE%2FZBMXrI0c1kTBa0uqlz7L1ScM%2FCJMoXd3xHiHfCDMZfRg8yBjXaW0fCT7ltIZgG8LM5T3l2C2vkffH7%2BfjLlitgPGdBvlvlZI9xN%2F3Ij%2F0L7qXyZpAuMMtultmO7crGHdysWfZBeAcQE0EQXGZZQffv5dF7U%2F4zQAPWn%2Fr2tzgNd8fYEZux7R6EXpaSjsLzsQRKGVE8pQRS1j8DotsDVK32KAfz6iFBGnb8ZPu8geeC2c2wXtnmpxlVvn93UA4D4BPZ969erXERMzVexlL1eF%2BnvzrBRMWxv96woIxyGt40yrpIJ4yDNbTEqOBHnutgSZ01isM918XbKlg%2F5tg05aItCU1kVNhpHsJHFrvuOlyiGZ%2F5MBY2Ns%2FkB8l7L2NzNDC45zQEgnA6adwpidAaC2%2F3tuk9IlsrdEj59cxsY%2BKToFTt2q9R35MKcOm5YheOHCVxaWw2rVYQopqI3jkUfgDRb7L6Uzo9IA%2BHGVASmfl%2BXp7XDTt3O6%2BF4NgVYcFYq1JthH%2Bd1zKC%2BVDFEj7dKdH5VYdJ%2FJ272ClSZnZ0T2iSmQawiamaiKUWId2n7MMiu3MMGOqUBPk5BO5kgsKe%2BfY261ewdeIOxrkSVJwaTKPuxoUA3nyz%2F%2BNXOjOE%2Bgt%2Frau%2BjKkICO5ZnUwcSfAcaVHp5POy05CRy6GXQ%2BFgf0y9nG%2BnjAJuC1fUYGQfLbv2llxNAH2Oib5yJBAIrNW7tE6tQaZnKtzOeOD4jI9OYXGJlWl9%2FdI50N6o6wg6H9hzsv4Pqk1dn2HDao2lWtu0AgC0GzWxpzMTfpeH%2B&X-Amz-Signature=0257acff9ea7f578d463e044e49b1248bfb644db8b49d73352a483a3e118790c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

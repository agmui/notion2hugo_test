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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQIJ6TK%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3ukBM128FX5mN1e6ZLGTM64I8VzYpbKqD27uU%2FBbv6QIhAKh9tOdgEL7rT1xQ%2FfDb68HE5EUAm1%2BTPyWr0eKW5hw6KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy42ZTu5los8mS0igIq3AMduPnLH47x2YKfTYGltNg6STSdRm8kzT%2BDmoy%2BpBqt2Yl8gm%2BLBVUqQWTqIshIpybL8Ei2nK8TjCwbe7ipFTXtEVl5NNlgbat3kfgMiG18SjAMCxtLrwnG44XWDyRBOKodJpxM9%2Bo3jRk%2BeHRjcMJpWjH%2BHBsLgEZIbVB1tUDQRZddDq24bJpG58hnZDEBJCXOucBxbDnbi7qKM7fgOAEzPTowHs2jnJjusq1Em42euAi9Ns7pL9IM4FOXjVtNSpdEWwSP6b8jz%2FxCaitrfEEdVgGQO4mLzv1HXnVVwxB66AklraG3rqU3IgMxDbIpND0IACCauy687T8n0Klkck%2BHXlCwEmiwThtu35l1Quq5E5fJpJS6AA9wpLp6VvnfV2cf6q7eh81shsgjMkGl3boXeP9ltQ5mHlfm8oEAHR2SXI6X7uR0xjd1Y71Nx2HuGICcCw2wa1vtKghNeGM4hFacDKsD%2FdL71Rg%2FsaM025sgbYL4SM6CpJ0zzfIhXae2aWgdBhn91IH165LYg9PKazkr%2FUtrqPw9n0p5udA0Qmlp5r68ooSMexOkzfMAn3DA2jwiXlrpQBv3BckAW95ZpQ%2Fj5xkS5HwxY3US%2FRGELdbRoRpSibOTwpd2gRiZ9zC7wMPABjqkAZVsvjaaYWBO6JIRGfyfs5CoiUe9SF%2BVwi70ycDrIe%2Bs19RsP2%2FtmvXJTwYVVXLE%2FFfnlJG%2BEyp5%2F9j%2BJnSvMizOhJR2q%2BNEbrPIjMIeJ3vMyJEg0toODZ15ebxOAMxGugOx9ek09hekvfowt64CWyB8Ixzcwx9tuIxneAoSgwclPURrlYQR8fwSL7GrptlpPJHNnE%2BX%2ByhG0vzf86rzxTzs20B5&X-Amz-Signature=2ddce409133d1bf516e5c6d08b764b972582c6b01f46e91fced5b62c74bed32c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACJBTMU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQckSt5PJYrGb4nZy1%2BuwC8PFo%2FX4hl9VBgHU97rzq4AiA3sDKKt1kRmYlmxeNN7amHGg9LObzKEfwcLONpQYKERyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpTfzNXSNBmHjU3kXKtwD24GsUKEbVe0J7yPqkUgKm7BRN%2B1ypbXvu8Z4vXrp2hitMyeu6j3UNiUcEimRxNoLW4NJ54ZEC8Pg1OvRQibg4dN6HOX2mPmHtgAHwW7NwYyKsOxB%2FU3KcfGhu0CyraOy7Pxlyron3Juk6KCtoGmLeF828%2BYw2o5%2FztGmPzS9b4VTsUg93BO8z6p0OPq1%2FFgHiwZACnqrjRnDHocNYu8PixP5JpsSrGidG6av3knyHyf8ddb40QtrnNK1MsUehvs3IWcAwSlFKoviQu2Qh6fv0tCX832%2B8nKtFooIk4LkqWD3X5D9rNZsxh3DrjyPidPetaUcn4rHqkUMw9OY%2FHd%2BgyW0fl9pl3nciFjwdR2cCQtVgtQi1vBsGq4grv6HJwx5wQGcs%2BOfDnoOvqZJ4xp05A6m235vcRLDxxMxJXdR1pb3gji2CFSJ7MBEYOsR9pJ9smdQTsNA0P7gfQdOnJxsqZCuhY9HrMkkjrG1l4ol8uY85tmsZUhBDEspXhBmHUwcFi6d3nBV%2FQxLOo0swMiQ2pX5q2F8RTV%2FwtZolNXm99mbcTRwjOz%2FIxOfolf83KoyRS9x97wH2tyFRyxhluBWRQV8QqeilI7aAEXtdeTrXKd1jBUqvJTQ87%2FeaDcwgsDDwAY6pgHmucoIOguJaJ3Sz%2Blxoe3E%2F%2Fs2Fa3R%2Fm7bJDQ3vFz4hkbcI6Pwx66Lc4a3ckOwE%2FtT5ZNXY1XO51qckiQsV6jFJxaoWQLoLHtQDFAQ3F4lUy5CRnKa8IkBpKTTj5sc99F2hxG2ibesZvPaWcpcjsOdCNIctuuCaOIEbM%2BRj4vJ8fmv%2FJKHrUj9iVSSn0emj%2FtiNvYqqbMthCpV9p1qM%2FTjYuL5rmPW&X-Amz-Signature=d8d0cf0ab4aa8ae0d86b1ec8af17044e2f48e5b38131650f296b8d3bce0ff582&X-Amz-SignedHeaders=host&x-id=GetObject)

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

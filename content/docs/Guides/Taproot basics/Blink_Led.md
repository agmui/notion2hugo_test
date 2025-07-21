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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDWXK3TE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh%2B7IKrPcDmEsUCyztMl33QNI916YEoacaaSCUvOWXigIhAMP6r8PUsaxcbr7ew%2FK7xQg6HnnDKiu%2FQbPUre67m95KKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B4vTF%2Bpiv9TqJ64Iq3AMAitw4anaHw%2Bj93gLIUcWkl%2F1dMuSZsUiBPM1dRIsbHp08bvDzAIdfwOMm6x4ieOj3Kzy4TxWUAZhGIfzLYtk3rnmZpups0qTV6oK8J8PanEHvIorfQlosIKdnWN17aalTeTbfqEjSQb9eUsJNNXMnHtphF7ODZVPaM2ieCTLz7pwpSggelVKLO1N2eR6DJWXd1WfD39ddzrRl%2BsIHcfN%2BOa6n7OIqYoNDBTgh1Mw4JJon%2BFBaCxAQaO6HBkp2Lpeg%2FqbB12L67CXbmrZnzowl%2FSS91ZX1Ykj80EL6wFtVE40CbBVuyg5mE9jk6DoQAj75FAw4VzltcRt4qFi4T%2FlkTNmmm7%2Fx7naticPyCoygVU9F277Cm2gfunkBprlsNf7DUziq2FDEhFRpMIbtjpnv1723g%2FiYohA43SNDagaLRlhLfpG3N41tfzetKJLy6XgtWNwDzdj4pwt8LHdSaukBBaafL70CFPrSxGbI%2ByKlBIhbSYuSnh9lC7NUUnYr8%2BcFSC0OsTmzh1pmDlNzRrK9imCVRk2SXB8YPr%2B1hakrDzfaVYaEXZOZHWpNIqoWuRl8i3neGBFy989AxtonMbmU2g6lLwppglCWz8OOjZz2uh4qoxnt0jOw7ryzLTDjkvbDBjqkAcZb4cqxUicPSzmm4uivALvbH8W8vLFWxdLZK%2FjREnZBoxPYx%2F%2F3bmpepSpAsBEbAc2y4ptgbtTJt9XBSKH%2Bf2%2F%2BEQgEa4wCZuHMk2BjeAQiIqpjoBm0GukdT%2BMgwxg%2F%2B4%2FrhhmEs05lCYn8Z%2BFzmA0btwpiDHF13yV%2FrTRVxkA17ghgWcv8BPuju7vQX%2FVYZM6iMCoR3FNR0fiqc6zslKRBTplQ&X-Amz-Signature=d6f764c84a0cce3da4a1eb13226d1477281e58df4d950bb73bc217d32e9f24d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAZS7QSF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqGO4mZwVS7BKovDYfxN%2FKIGbJyKDRzdxe7OjC%2FZpgiAiBUFzmwU7Qzy6Ws9LVZBesARlLNj2zUqkjcK9qwKNdx6CqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkMxl33Rw5qN3RJsxKtwDjqnzr%2FjHGVH4UJsSiPZvvuxgfu%2FGEHMMrBW5wZAtCqwVRJRv0ESzrhNsb4jGzWbUjwIbS9aA8%2BhkvrV2Hc1MiqQ0qlcy1bo97y6mzNOxao65W8%2FRGuJNrNh704SP6voO9jd2aE0sj0ApuPOmQg%2BV01ZjyjRaWFoIbg4jAcLKaBzakJjZv6yGqonPmTpt16gqrhcUsO8KXMMrz5jvTkTAbta2P4mNSu%2BPYBxJgpgriqVZEME2HjGh%2BcmGgDAYFJlJJEXr32j0vFC7c0zHfiLl4II5M842Nqs8KTuqmiSGfWIcb5nWOqFeJLPoEUBlXu4dm2SZA9SoUNBZ%2BfaHSzk%2BIEWNo0CtFLU5l4T66Uiwos%2BI44N9oOkPV3UVqa4US7U66pZlTzCRf1nuYu7WeCxdcKEyR9jQ0VF1F8In2yTorxs%2BLaJB%2FW57NTx%2BNA7REJIdlZtyl%2FRLzcdYUc%2BXySISq5jg9M5HgQWLVJFYEezEp80bMS7EO3L7K%2BeZ9zKptrJo810EsQk%2FEnWCabykLREKjZhSPO8FD6pRL1j%2FBgt4bBn5fObWkHsOq%2FjV98ygLbDg1eP5apVEhp3EjwyXhkRnwZiAP548%2FzSl78F0g1M3tcPHr9Cjaf9AYeZQ3P4wroT1wwY6pgFL8oyt6fWeiJgcpHu7W4GFFRCal74yWjcvxYU1tgjzj01u6sv%2Fpt3tSJVuC9LON5T5LVUX9mxzqlt1t4yF9S8Zlepy81v%2Fmzxbn%2BFXD3q%2BidnU5Mn7UigjLOfxCvEqpTxZc4Baz6DhCf%2BayxE82TYoqTJtZb2hKkhpj7XhNTfg8VA%2BI99fe4YoRYXYmAKCYb0prmwSbv6yqgClXAmWcOpICDnDPIJk&X-Amz-Signature=b5ceac94233a5cf586ce540cc0ff8096896d6d5a24cc3210bec16e97a6e69c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

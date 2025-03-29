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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXCOFKWC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIEF3xCSEKavtZVBPJwllqUYM%2BRVVTmeX%2F8K3HCwdwe3YAiANQ1Pu5DML5owE1OjyKaWbgVeV7xrW1C5HJ26BdK66hCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMCD0BtWW7DU99QR0tKtwDBDC2Dnl2m0XmlwP9chnwPkrp%2FyR4XUsK8N%2FSxodEQ4p6gG5VNhbep%2FIfJFaaTuSFj6Eu%2Bh2YOaQTwPyLBDgcAPoG3%2F9rKuZna1cSmwr1dzMOqTTJsx9KGdoua9mxpQINmKnN0GBqh4vVR2wUKQ2OgN%2FtgAGzu0bdCXAetlBz8wqSjbl1wiid6YBztanQv5UFhrjqmWXKBqgtMc5bCun2A7bYBG93HUMYPdz02jDMR9S6VaMlvo08KU34BgzAsRul1PnCVptNLdrNApo8e2kVwHYa7lKUxrsQCOl%2FWvINkL4QteELENTUtMrwiM8EsWvROAYSUjvvE0AuWzRWTVua4BQPz6VLKcNfttRNyNWl4d8ZcXNxGoWiZ2BD8%2BqZgh8JuwKXVabzWU%2FWb17vnviw6Q8vuqpYCsi30KNvqG1uMiPta1Lc3Ik6WjmmM1545drjc9ATBtuw1DpuwrpmbZ93rx1libnPM%2BrxSCrru%2F9nV1aEjhEF8gKy6JrQNrrk6%2BGN5uAAX3Mi53GdHTpTkeQaKfyxap2cdnFh1L%2BDF4rKc5SEOoCNtsY4I%2BZsZWiraYow3rB3KrVTmd32ERSnXXvb3Wubkh%2Flhfb8O%2FJYRvA7uStQXjNnewzgo4yoAHcw8LSfvwY6pgHz3mlgMnTUxgKXMqJcWLTlpbL3KFJdes2FKbkq5%2FRoadXlYaJIrltbgAQFxKGYa3Ku5UhcmPDy88AFv3M%2BaQSQRuX3pNwJPjfvw0ktr9qOseN8H8kzvkUS4MxySrgc6cME7xnEh3sgaIPgP3bZ3q7mwz6%2BwW9QJhX1CQaJGVA%2B6ZhgxKIrdFuvb2MINk9%2FQTSKoNWsGMO0p7VcjhvwrG%2FUrW%2FQ4T13&X-Amz-Signature=214f6a66303e1ba0643dee0e59aaae3e82b84b8402c2a3cf4b53bc7a2d1cc76b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFIVFXMJ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIG8gu01OM7FSLLMg7r%2Bd30kLPiOQ3sxc2BaogjX92WGpAiEAl%2FMGMJzX4FKRuaUWR5%2FGmkHt2gCUoPyYbPbKZ20GTTcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIt0ojwKYxmUxj1t%2BSrcA3C77%2BxOr%2FrrjmHhvIOSvwMmYQ%2BlaWd%2BcVi3RE9yas9m4elL3rcxTsm%2FwtKr2lnALhsM3iViMg21SkTPhNj0hOXD1PzXKfk0Ewd0XFqDaD8E6ljN9RytzA6yxdX0uGh1FwCBKpKhCbp2nxGr7l7%2ForkvkUZIGNGqQu2wKrF2cSbPiRMMvrIkdENm9st7YY1dbGf4iZVvSANruAkOoEgw7tcjClXITpKkkYtt%2F%2BDGpcnHUz64Ige0GdycgQ185a0tTWSCAFnC9nHHnBMISYc6olzi3TYG6ZqULlvvRKLl%2Fjb4gvaRzNrbkhwimOvT0uLJ29eOqlBIlnebjrW6x1yqXGO4BwDFt0yW3fglqr8mMAo6k5dxPzRxKAzw28P%2F1MHfrGpUczLd5k2zqfHFeUYzcQYRq1IdgbqNYF4dyj%2F2Xv8u7ApdQyM1olmbNssti49C4PG7fpVBN7w7sCZGVvFjsaK%2B%2Bp3t%2Bgtf8zb3zSK2JyI0lb9kxcz0P%2F%2B%2BgF5LFSHID199eE1HObY%2Bb7QPXZBtuDARH5UiU1LM%2BXILpR4s7BdiqaXCyb90rxA8twu84%2Fit9PjrAkP%2FHIq0jPxWeiH6pQGm8efram9RjCOz6rGrGYniZDH8%2Brohg7zaG4AHML61n78GOqUBftsyh6XWa2W8q%2B7jkCQg21qCYpD2HcEqblqam3iCZm4j%2B0Ihfq%2Fo9W7g%2BtPA0po5%2FhOR3lO6XcidwIJ84Sr7lnMUvpmsK%2B3TPmtaKHd%2BTaQYx9rwVkIhAUmCUnmF7JOHGf7bt9Yxzih32DGZLm2ovMIYdUDd4A0Q%2F5CBpriX7%2F6xuroRaF%2BQyOSPgzvpUBGnRQ1sF%2FkRDQMj3l3ydoCvr0DBaAFD&X-Amz-Signature=3fb34bf9312a513807215b392c99db6604235c210e23ff3a840d56517aae2a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

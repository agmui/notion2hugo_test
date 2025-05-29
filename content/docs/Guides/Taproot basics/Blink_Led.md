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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DJEIKTV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFLa77cmVu5%2FRK5g1r7ThPLBw8hAAL47mrVLh67Au%2BqAiAMQ3Gn7lfa7HZuyRataA3kScEITehKNQLwCfyiNnE8HSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzJib%2BNUjcX0zMYTQKtwD2JhhmqN6LmYp7ns4mQWT8XsFAAdgMh1ee4RbicYFy1GzqkomCFv7YD3mKV7UxirzEY7Ek%2FeUYU83WLXPPRv3Bi8cdUD1fGXC%2B%2BybGrpK5d98B3E3qeaSVWoGWXhtBKkvhZMe%2BsrSldAztzHAbWMWxs6ru3F4H8fUjc29n5i2%2Fn%2FvoWnw7hBfdQtqzkms3QE55m03IuF6B%2FuJyZCHTTa2B8RukOxXQO8Vq9IuAu8zsPmpDCx4Y3ZsE%2FuHnyQjxGOQWWQmKfOd8layyVRGQzbKo7eCwGni%2Fq9LkcDo5AMeo51SWr8plJvcEFHwlfk75%2BOpvELPbZXms%2FK8e8GPBhLDoRB7tDc4EsS9pDHKjLGFPOlGdWVO0dK103QLD26TGa%2BdQLEYuWoNOEQPIHH%2FChUobZcXEl96kpB7FC6DpjBIzj2c%2FQ6PimMbSgesJhUrR73TDGHb%2BFgPJSo3He4q1ylfyISg%2F8D3tsh%2FFZgRnVwxvtWH2WAudlNbDye9FpOtFoqOhJW%2FG8xgrMagO8LhOvYKBWrsZ%2FALKtB2pQLntBzPnNXQmUpaATP7WvEVRcSoDY9ZPtExIHVuUFJLD9MNEUbVIiY0oLxfk50fFxl410L13bzpXNPeB4jSSQVhe0Ywz7LhwQY6pgFL40fpczDmHovpOpVdENlAJmTfCwhhkFu2GnVlWQzys90GnX%2BnnTD3DnS2sfqWvypKsA%2Fm2gLI4iJ4iuF8TZ2Pyf4zla88wj5cVpRPHatRTLqSIBD507rmPw%2FwhVxqnmpdN7xYPvkfSFzud3p%2BrKJFGktixCRvN5xrP0UVHvp7qRWY6ISUsMeYPhtmyLDs0Cy5VGFi5nOekeJe4QxvgmOxfEGAViJM&X-Amz-Signature=86409f4e029e854d5813ff051ce047e852a8e9846d53b471af70b2b0153b3444&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOD4OCDY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXbY6f3Wz3DZdJVMwhxoPxCK24N2E5d7Dt3u%2F%2FA5RULgIhAJrzFr7Q8pHRGi5HTHobr3vLxY3njeH6uB7HEVTHRx%2BqKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYZ3GfNbb0NVamggEq3ANgy8a2TH1cp9pInS7uoTeIaeeXpZEEP5Kdvst%2FtpRuXeI35FBaDbuEt9FeEz32HsMjkRy1UVeskGkdPxOo8FE1rgYxq2MA6W9HSamyI8WNIac%2BUNjMeK%2B0ej0g8g9H%2Ft5I%2BDN%2BzWHBebei1KYWs%2BoKxwsQOVdMF9RNH2glsqMXnl5cbQVwswZfn0qwcSilr%2Byx7M6yA69Lmz%2BtZ34jz%2FFlNQmj9PA%2F82weLmZBNbLipsEWRgGhdV2t4RwbJSW%2Fe586ZoSCz3GNS%2Bwv%2Boaf6vjUFpMf38ViD4vdwcbk8bbc%2BQuh43t6tBCboRrHQ4HRcMkh%2BbVgGbKIUSSY7PyUYKtcE7n3qKVn0QdrmqsmIhF7cukC95%2FM2dcsCSXXAfhyrkVgbx%2FwSBfw%2F4fMhDXop3lHWSGoRCJ3vnZZUwth3xSS5HdJcy1U%2BlsgQdcFPKCrdCWNttrBEN9JszTqOKr49MN81sVTHrvWAj1WHfvvS%2BdzM18LGmDHyZqHJEbB7O77x5JBR2as8dftcICRea3hHyPfenhUxYecRAAgjr9CQ%2BjM5vzy1SBsC1drFoExXUuyWDGdxhqcSALltz31pXNrDV3kUAunyvk6dIlAoMASZn9hSoaIs4QbWCeiaOWm%2BDCLsuHBBjqkAVMdINKDKwLbOgq2371ZkUL3ADaVWzXNl%2B9SvHD%2FakoNI96QcpxnYdjS%2BYIF3woEcZTZ2gNalFNYKYOhwJUF45arc7i38KoFwJcjZxINognVhRdfFvkB1p6lNBkj1xotyByRYLDpOVJkivZR1IF4Y6BkZ%2F61XdP6Sqt0vqWkFFtB2d4GwY9eTMwLG%2FdSnQpgvHmwLNmRg7hq4rxZSI2PpgDRhvdw&X-Amz-Signature=15b8670a89f4afe609cb03376de39d3055bcd3069ef37d79b02f25c7fe074358&X-Amz-SignedHeaders=host&x-id=GetObject)

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

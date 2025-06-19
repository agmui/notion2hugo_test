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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LL4WJ57%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5BvgpdsBZ8fs%2FkqmLwjDJqbmMSLYHWcHsN1gsIxVonAiBQi8HiE%2FYHGDn8mZiIVFKR830lSPQuSS6CQK2OrOqRqSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSkjuxDxst7BarCevKtwD3z5iH33ilcdEC%2BSG2deTug7Ycgpo1x53Auy7FyzughMhKTFV%2BVMAk1ed3PNUnsmW3wvpaT4Y%2FeUazs5rtZd76xAif3iqrijEBiLBVmehPldrJDRYXT9njq0u0AL0WtBJu5Y%2Fi2TphClr3A4PmleOHC3cU%2BgvECthCDH1YkNtu9umwDfZtCUbO4u4nyVPuZNzym7BxZjutHhxeXcd0oAUoPINOr%2F7yEGtIdMvc24dgxyGWNo3eLz%2FKNj72Cp7DfFc%2BuQRie8%2BhYryya5rUs5AkR%2BP0Y3lOKJ2JFAHmkfmuMZguJ2OfFx4jxtn8UU3COxsGXG3Iz5z0qMSL4TiceQpChG%2FqeLYvdePsp3KeIlXmPnBNYPmtcFOG7A%2Fg00dnzvKQtB9aW0bwFeLsHeGPKCpYK4njo1xH3NXlvF9RD2%2BsdbbCCacM6gew6a7ZH771J24HkWkRDRkYy3RaYDKagPiwYH%2Bt3CbsAbM9FJp%2BiOvgT04pFlG%2BUnA%2F0BR33XY5ifYyoetDsQA18R8JSHDZ2BQIwOCD89U4tu3nfUACwBP29c9hg0z%2BxOUaLdzVWM5BnDz7kyZfHdmCS%2B8G2Pakos5oR28kcM9U6%2FvGiOVQmJtxNWmYhtVuhJXMiOcAoUw27XRwgY6pgErjVvBZyp0M2WtB3DOGfiGxJI5d4z%2FwEcPOkC0jwIOHuMyWAillwAkaED2ugqckVZ1VLXEZFoD%2BaEhJxJVrkv5m7a8P9conTJdyhstpeL7p8nVlyyslSr1JLgeDlC2fxUj6SCrQneuy70%2Boilh1bNejIwmqYfHnXwKUiv8gqhm6SNdGS%2F6KK3AscDnFxoOGaHc8v%2FUvlKanneJ7ATFf%2FVTMsCmM%2Bgf&X-Amz-Signature=7abb9b4dc0d413b36442c4ad5c71a45bf54c0a08fb5c710cc830307840d850a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQBRYKLC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcU3bhvyk68TNNEQMfwxPTn4WT6F9gdrzYuGk88p%2Bh0QIhAIWTeoCSX45998r%2FW%2BcASNZBJQl7PSn2%2Fed6pTQYNtGdKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOsVSEe9YsadI08rkq3AOdtbrld7Y1CsL9hretcSKG3vCIqip4bONsbVptyBqjxxu%2BrJ%2Fqmty0VzWBJ71HfPIm6jOB5mn8fQ2knJHYRXfIkK6uyhtAmxNhAbhTWfTcMFUF9fu7BtMZbnfw6s972bFcM3gvdvqzPeojWIM8%2FE%2FCN3XkPrldX2%2BKI96dqIUxwu0Mf%2Bu4wMuoxOA9znGI3gg3HBLKa17oii4YGIU7hGQe0V%2FkZ53F8dVT1lCkKDjk2YEcahfLmIpOiF2Y9yBwzMxwaoMnYVRgushwJn1e%2BfCM7RFYuglK0RxR7%2FY%2BWM795izjBGWkUyOrxTfET9zU0BG4RpWtpeopJr%2Bli1NAd1RMN5BHbuU4yy4TxV9KxR44DbnMXme%2FG2Rw8ejIOjQL4SgBTNPTIigOifZyAoAjEM5hODEe2%2BAipx%2FGAoVqU1nvhTPC1p86%2BwYmyw0nODPW2hG8NvypjcdhmF1fHESPjOUb9my1yGA6mWM2%2BVl7WdtqAkeThK3cU6TnsU38qFr6bpPiE1pJUMzlE5UiVoCmWtSSs2Acr9FrOONE7CKQMZlIkUZ7Wabwu9hB1dbAClRJblMrmySfdieILHGUujUNskWtRVgMNzIUT3cmjkKpY%2FALyNAvt0NXu2hQC97ukTDTtdHCBjqkAYmtu4jldshJz9IOYx4kShdfkLePwMLPZz%2FDPd9H%2BwZu%2B61mQPVqJb6FgYAmw9bXMqa9glJrKF2XsHmfr3Ju%2BHYqe9eBw14K0SAM2lO%2FQlvbfYlZKA%2FwJR3ohTuqESGLBjt94%2Fiv5jFbRiIDfSxiqnKV7sm1989UG%2Fq5yYj1TmC%2BWmHG%2B%2Fuz4hY7Dkzpx0ZyXqCQeFQ2r%2FWXC25NnpeOx0UE%2BPfW&X-Amz-Signature=a73498971b9e1452927d4e2c23d847048ae4b51fa53b392574263700b665ff8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

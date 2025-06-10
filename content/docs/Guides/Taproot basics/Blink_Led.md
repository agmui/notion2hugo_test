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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJFCYF4K%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlCPus1n6IBg19ctxaL4emt23wRHQClnXJmByDLaAViAiAEjYNy89pd81qyJ6s5lp5rtN%2BzcJffPk79ZpJ1kKKOIyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtN6x4fgtGjZQhkacKtwDdjMYV8q0zHsNYIJOs5u5P8Q6eiAnyvlRu6JAGZQtAY8qRow0uJ10V2Ft7aBP8ysAqe3VU0CZyg0sNa5TxnJExZ%2FKJ2kzULZh6l2A6jVTgWfRRlSFly6NwQ4koxU6yADDwjlk20Dk%2B0tdOs8d35LC%2BD8RQuisp5qhtkT%2B0Z54n%2FtRUDvMIQVKGMOySyjvbrxXWAJ%2FvQ3htrDBJ0Z0GLiMSl%2BOXsC7FWn5GD4yjA2%2BUFidK1dJpqcu5Vx5CfMBhVTHDt2LTq6nFM3WOaQeOtzoSNXgRWU6AwIncyFjO2uZLba%2FuavPwWyRUeXkZR6o3WXXRg2%2FiVUgR3rDGRWN0P1EpITRue0UVMPzZJUGpdAT6QoxhazeX8KCVQo9g6yEbmTQjz8wN0k4NHwSB0pydMKGdVKBTiTKSdXbauC6wj4FoP2T9oD6SGX6fTrcsUdX%2Fa24hruGuGydhURk8J4MUs2C8phyA9sSnt8CGi6NH0JH7Ffvv2ZEr6rI4gxLiWOeB1jS2%2F8bGimL5L6TsYgt82f%2B7dfpkPl3cc9rYTIwxJmt%2FKIxMoexMDRJoaZuMQvhpzA4fE45ufa4ygLpVhmdbHqetJSiYtjvWR6khp96yG69Qh7L2ilh%2Bs76McymUGswovCdwgY6pgHhpYDxtwcJBChrMxPk5mFYgpEoSBOz%2FtScv7pKVqJoud3ljHb2ehOyNpzdyzywQ6Z%2BxvsPwtocuji%2FuezoEv2ywAPpxNZxWae4tk2z1d1TPFQABMLSIfZXHstKB6xNX3eRMoNWCzZPQ37pT00PpRisk1vqxIjEgIjPqR0iSH4ysuSkRMLpI%2FCMMQBodpVskmokjIej8cs4LKerGCUALFk7NKEyase8&X-Amz-Signature=c2147efff0ab20f4efebe5033d614ae182876313d9af6a479f3855b932616a44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEE5PT5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwaPrY4yjwFFGxenrMxVWq2mNzdoEQu4AizIS4J0kXBAiAEuENUC97wYjbJ3CGAiAasC18fxBWZfOcKfcoKIla30CqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfB1VqUWhweGUxZoZKtwD55L47y9TIRLo%2Bebmkt2dhxGwm3nIjwz3BMgukgjeTeeBU4KtRsINLjRVL092ubeZ4t7XrypMIeakNW3Z%2B8Ul5Wsu4T7Vfa2%2Bl8BeIfOb2thgaMxcthvFpVd0THXOxqxnLJylsniLdqLcngQ%2BvSquh%2BT4No2ckv74L661FSMQPEui%2FEAdW2JVGAqFAyK9%2B1cnbKH5RkW1Nuj9oWRPXq6wSarlyiyYDPhnNkKQdXVXErV0xwYsW%2F0Zbqm7B7Juz%2BcPWOIrcgNtt5NGNNjiDmZ%2FXaaxshjdlvCTDt7EFrp7f6WdHLKlZtD%2BFdurUdOK3fFTuaUoGrROC6gCuv%2FXtAPMKPGbHezLgWmuRXjOyPdRx9VnaGwQU5kRNUyvUteioNU2DE2nj%2F36aYKFoNgxrLb0OLkYdiUduDJNd4k4VBYRfvAwarGeIHH4HvFDIEsS7ME1msOg8ek3oautdC54VcOJVG4BY04UbjDYlZKpVspPcfwuScxUBKM3JP2Q7jft72s0ksKYnQ1%2BpGxIA7OjysORJgbZoUMRE6Bnep6mJEXz47Np87gaVClI06ig9C8JfboCW7XPMhJewJ3oU5kaZdqvuhFmQxpUSyG26rYPfOtqtc8REd4fVPYAQaNKO5Uw7vCdwgY6pgFSjkiNUL52tII2b%2B6e2fkkYY8076Yy2ZN%2BamtdZZWc5Fu9NPL68SDSfg06Wfya9JSAHyUUgo9JzjZyZsJR2c9bFvie5Wrq8MrbJPOqPeCZQPgjOPzOJDpOZ68FU4qehtmDVmcHHD7SMKflctyB2bZ4vx61oAMyNvYiJd0ZHlf4IJSClTRq3m%2BZCVjq6bL6lKa%2F7R4g4SRdcAtMOvCLuc9nw9u6rvTi&X-Amz-Signature=5ab6581a6256c6b38aec23934b1c2d8664ea5ef241617ac64779333365014bce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ORS6AR%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWvEOIpMB9KHZz1e4DVBduK87ta5YmB9DV%2FnlWCq%2F%2F6AiEA2QjUTn72yHpobY%2FRm4QKvcvhqYKc50IC3K3EYodt1X0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwi55wtOojWrXZMBircAyIx3jILP9Z8lFm4xa%2B02NMm1RbCujvOS6vHUYQsjNFXmuD5aHMqrIBoeUo2l7GTdsE%2BavaYY0hVmpzuvMJFDDa%2FjM4L9NAP%2FHCd%2BZ9ux1tJQ4ugrt93jt0knpgywTBSQdwt4plLXbpl6EdsUAxZHeo%2B17LNNzyQzOiRkZQA1UYNE%2B4vTZraEuCxhG%2FyKxCu6O1n%2Fvfmxdj8Yqiniq%2FEdsvlfwUfR6yC2bjxScH8AWNJ5EzI%2FJoa3z4Y7Nu5cbZ%2FP2rlQTrcyy4KjH%2Fpsje3UnF2fSHtHiUMQ7N8%2FPrQzRZ19wKvcuHhZj6hImQCesdXIl4M5kcKpkVrzfh%2FA%2Bfg0QyAgcP1rMXOmX1sg5jDi00NRWAv6neCzYPbPQt5SkFjBmK61qpqeS0VMcdBgsoMBTZEIwsOtuiu%2B6wAQLlom6LkbA3fpA2pi6DjD%2FIvW2GMD36ywa7MiqUpdxMMTQhURl9nHNKSKKmpdctsMh7GGh90wTVq7H5NV0hFsN8p17LtcrM7PrlKVaAopMTFX9wHxgZ9gza0Jf1yBo3B9Kc3LvLQsHONJnWzBCCSoPvcNjyh6CpvQIa2kGkzB5ynywM6ymxTp7G82wJbF7gTZuhGJE8PfKhZqyRxiqJ5vy7UMNed%2FLwGOqUBNCuaoo0kFv4VHeGcGtMJMyT4JwB05a1ljSrOfD0ILypDZ8dQvViz6nsDl6Y9LvCUx9TppUAnfybxtHIZkwAsiPhaOLDHNzlRF2EZXd1glQZ2fWs825F1jiOgAktmgnujENTkzQXRBs4Mt8ABhDtW2RkvIgbjGx2omVPutiWOaqdX4IVFZ%2FaTbwpU0u0CjvBXI0jhZvGBl5U%2BUhdp2n6TrS77dFrq&X-Amz-Signature=378f91706c927c9eab0e03ead82b50450cc1f4eb14146d4a6298955e7f50238c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FRTC57D%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYwiwiHYUKgj0bBdLPmOU41SlIAUCWjFvlOKUCJtd9GQIgDEJBRkXgKpUFceKKrVhrfoUORyS7U%2FxoGv2oZorVKucqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDatB1FRAJza4THkaSrcA9xlrE5NxaRSGNvTFHnywCujvCl7loNVR8e7KlL4i2YfPjw86Taq6xZ7pI1EPTp9sgV9F5dSjr1bRnjkvlBCzn0JGC7cDVT3cPh65kDLMtXvfk831jeLN2%2F0LwL%2FoxG0CfiqpQOrt0Ds7vrEN4CnmC2ZFwla6lYJAQvNDSWx1iO1eu9S3JaNcSB8s6he4i02uJsovmaz3rV%2BGOORMyZqjPR9DNJWeT8a6OBYVxhH23IFC%2B7Pj%2FRenAxUbzNWBvdIqpAVH1VMF%2BIiiGC5rC7T0fzK83QmRXVIe8r1qCRGjeVwt4EtzYsSf00NWFwlwgrlHNXOgynHyJGCovkpXwGRD9GZYKf4cSWDykp7Oigbcen4iptazPI8ZdcBgjxfvFsm4HKZJzAGO5ezUXFHRUog5Luz1Id2cPqenM8Mp8g7BzJl%2FItCBin%2FucRgI0BkC3Rm%2Fhi3mEa2HF8yjlKgMLOatkD8N7JEa9Ib8ibeVrk6JacrgCC0E6ZZE4WPRLPNblpR01M%2BKUVHZZ6ESJxDmcnj79oTx6d1mIYBkBI3QVPwx18pRk2gLhQLp5zzrINdopvNx9TpaiWN3zyAYBHaWof2%2Ba1YgpSlMSIW2ccym8vALxTzpcH3Y6fJRghE24WrMLOd%2FLwGOqUBW8JLFAgchbNROzOn3sveH%2BAO9OXJgk6fLTD2HDoa%2BYoQ3cSuzxTsSNtJmgQHba6eTSyZliSg737%2B6cjLeww%2BDTkaW6cClhNeu9BPN3aUKOYmyo0L0SoMnTak2TZwrLWkCFpP5qpDaKi0donfFZ%2BFIIQ%2F37XnSpEEdNg8f4gx30YsytRqfe5PoQ%2Fw09s6rDt%2FAoIeBbpPns1OhE51UiLtZ198ZLfc&X-Amz-Signature=469b87c06fccde9624ad0b269429498599f937258d23b5b1c76b684d48f79a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

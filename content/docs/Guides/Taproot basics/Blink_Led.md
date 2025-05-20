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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVPCIP7J%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDga5Lg59KBJrIUwLjevcMdoZI2ahW71TpPLQpg9fYSBgIgNmfnYuFXEFXgExnHS%2FB5l%2FLQKy5bKA%2F2FWqCZNH9LlYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMI%2FGXLHY6BdLJq6SrcA3GHkopqXcW5c7QNi5KwsDftoDVTP%2BIIgc5dBvAAVg75oav0HMMb3LcG3h2qFHTd4RFU372TFfph6q9TvMrg7OwuoICF%2Bvb1xxr6mLD%2BXqPuvMXCPRtc5qwI90asrwzgZSCwFh6hKsV9jzofKqYyxsd69J87HYf8N1Vk2wjtSRsclM5XlGu4%2BvXbJMAfBfaxkUntMaCVURcAPwdAqLKFilrUeT2lu57SM%2BBWFEQQ%2FspNbcdsZgwiMl7cZKjrdR8lAzSOQSebZhC9xy1k8%2FKA1Bx9WWcKylFAohfmls50WMaPd57ECdFi6vMDmBbDL%2F0KRTVBCnAk8mqhpqjLVOKeCEiKB%2B%2Fs4cqTBK30Zo8KrQNA2bUlRwmCGzmO4e3sjsnmGJxk9dpNOLr93TNzQUFOqMFbdg193nVAgIwq2vquCx9453pn%2FV8p7yUDu1TrchnSwcayIdH21pFDYJ2Mriv4i1NqiVl%2Bc5Ks8IuUm8tFJ4mbetMcPtbY0ZFLgD6Xv7MAvZq4Okt%2B00CYuGCMgmMTSGPoMJgc32rRJR1iuhElvfbEw%2FD0zl%2BSKs6NXeLj0enyJvNl6om9AiRV2QEqZb0aA8n%2Fz6MExnmYimMGv4%2B2TzHN02Le5%2FlHQRbXuTDXMMuVsMEGOqUBsaeeMD%2BUvXSYGONvAJN3PtrdO1UWtSQhE4K4TC3TJ8DhEIrB6%2BudY53GXN0WGOTFHUiQgyd4RkEfAGnx3S%2BZtbjukY%2B6Zjrl4ZGvqVNZBps6avsyV%2BKOEzquSrZg%2BSFzPbFPmDoUraGY0piJjZTuuO2XmCk0JOGkeN74C6YAiRALWyS1YxDsZSYHH1plSl86Z46RBt7ygW9xV6tvB0qh9nhe8JPU&X-Amz-Signature=167a44438d2bf5dfc44786bfc289ffc2c77654033095ac5262d12b59a396b374&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF6QWD45%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaCx1qtAYpuVr3PU%2F%2BVxdVq1T1yiQNge7hb9Vf23OiBAiEAnfmQrQZ8R2g1iYpuaWp7WpTuh6Ei%2FiEz4TFFhaK79YYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOcXIcDdqm3puEWZSrcAxBWD2epuPqqBBfpcu%2F8nraqx8XjRqU9pfG3H%2BzieyWnLIroitQW1eSyikOt6K6LV7gvfVmuaTvcb6e3MIBM6SlhBECOMwUkpioLi5bNZf%2BOSHizEKPCEkE4IKFZJmXGBlCUmx7N2snJXaorppjiBl2ve1xiqCFGsOtKSixVaKX%2Fw6PExRIIkEpW%2BKWyebgn0AiV238agusPnq8C5FIFCkPdoHIbAomIqpCr4yTLmdynTOODmxreV0XmoP6nyxf%2BPk01YjsmpQMLm%2BzN3Hb3Obv%2BMxBW0527ykeNKCC7N1Jr%2F1XZTyCQyZOBsAwAACQ81nf81ba1GyqHi1q2WhoP4exviN2DCE7MCZwu8Z6pSkgwl5JNwlwhekTGpeYwOdgB2kYKd%2F7Vs%2FuN7NurVGnbuou1TbLwa5Jhkh6%2BsiPIvR70NapANzHCG8xxOEiqy5WAVqfGDhNWNPIKh0SkT03UAj5fSHIZW8ZIX%2B8R2I%2FaC5ZRaLAtmd%2ByWh1Wsh%2BROGPX43RjoWnfuzNhKFpUtpqq3493kakBeAY5NASBtiWxkxhfwOtbl3CTOrk7W6NgP0IYUU%2Fsr9AqqaTC9W6jf0lDnhNm%2FO7kRZqs3bmr783oUNAhC9JvFw8HG2JkgUetMJuVsMEGOqUBnw9BooYQvhAkRGAXQZmPy2fC%2F1TIElKpsqpIznPamymcliFI%2BAeFLG9lQSDKtbrRIwp7T7ihw7r%2F8ew3Nvog1ImP87w3Qx67Ef8cvvsV%2BGWzyA2tu6Bn%2FO6taAjYAA3PJDAnoKAEWsA9gi0bk7%2BqxWIVlFr%2BT25qdI%2BdUxilxF7txXK0e9gKpBME8TqIeESui2BLWhS4V6ER%2Fv1DPrmF%2Fj3AFWzH&X-Amz-Signature=6789f2dc04870b1c7dfd4ae5fb349cc622e5c34e6b9499386f726d81a559df04&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEEF2CL%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrLOWQWzRRIRcXDBexI67fhud9Uo0CUPdWcTnLgZWaEwIhAME3utZyuGeJtAGfUJ0iQRL1zI%2BN1SMo9yDsly1qaHDxKv8DCGAQABoMNjM3NDIzMTgzODA1Igxi3fsG8QMRIsbiKs8q3ANwF3zFgKd46JZlTP%2F4VschsXLHGQicfWpenLUoAxxBG2ehRqhklrwfgZhF7HQgWvnOeK2FrQcF2JSMzLoJNdDo7HDhZNG8aYHA%2F114j4njCByMF7ydmXRG3mCz9DFEwEGfZ9sW9IUVMyY1anqDyX6DA8IKBK74YgsvajFZVWaM90Y8RcKIMh%2FreefH08ZR4h868tS81TaXFxUAHyjA6tmF43eqY8%2Fo%2BtnD%2FWIyBh2QKD%2BdbBCi4DPgB2i6PqAGL9FxxMIg%2B9fT9zN%2BhItNl2LC83dTCauL%2BnsEAJ57uHnDfCUEKC%2Fe7QME1m9qKjCvUKcs1v3qhQlzX2xPRbqa9GaWj78pqKRwmuQGYIuxhZR0IjheMGJ2hPuPntfN4qqrUN1mMYqEyDqgr7RZr829yEaiVoTY6RSQUkDirZvDYrrSo99KbIAT7FSK8WbOGu%2FFrS1Km4c1Mq%2FHddZlvMFlnj81UlEr94F9wCoKHn7vl1gDIu14MZM8k6UiiP%2BGICCeX%2Bl71WhF%2FwuAlCUhSrCmuViImOmrSD6GRMsY80BUAvYWGIbwasUZu132g%2BsUlgIAGMtd82GC%2BClqG6kci%2F2tHIsXuZwfwQmjr1nE4xDJsbK11o1wv%2Bp4g2ixg6avuDDIypPJBjqkAXYX78tghCoXGeK8SQc7ejkUgnRL8iX33ufKVFti0PcUniWgcB2kKorIxCzwSaS52pBheO97I5fyIbIfTDNKWJzF11GdnxfEaotGXf4yNziRIoMthpEMm7phdiIvewKAnxVHGtipmJO8qOf9RwyyriQZuohHffa0cRgX3u5%2BFYUbezoshy8AI%2F6DAMoInA1qplPTMWCqNt55R%2BzLk308TdXvt2%2Bx&X-Amz-Signature=88d240cb0b1c90bfc0863ef41590db38b5a4903aed184e02ef9bd3a9c5acc582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAQX5EKJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOHzZS24tOLtO0c9fheCkQdvHMPpLh1OK5z89boRpEzAiB%2BNYwrUTpQEcRM2%2BGAU%2BeY5Mn3m6xCnpCH4%2Bhw5KwSlyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMsdLDd8CEJMR5l0XiKtwDd9LA6NVL1A8DlT0SkMX%2FuJpZCuls8VyuPPWPJFjE21LF%2FsvJ59NhVkjJn2waKfq1vaRDWkF0voR8sxiVj9X7fuYAfQX%2Blg3it0GwukLW8pcRWdA54W%2BTGc6tL1rgbl0trdEUwpgeh%2FhI0f63iR0Uv8Jty5cM04nKYNYL13jeJFG2cru8tUcmoSqzg3L28r1LpqKiGjvjtzsNPFfeBZklb88AQQEk3yVX8mfdeAzVB2y56wCc1LlPMOtEIJZ7oapiEZGJGcp2F0thhcNewJasZiPtDi%2BSX5654bOhhIhKdpildFywZZvj9Qbu1LBuu7nI%2Bu5igcQwZJRpVDHbTcOSpfCpgN5urPwxZnAm6Uo2yYzrKfhfO%2Bl52kdojl5gbYY1mSF7SEIQ3YtPp0qsPkQNBeE2Er4BiTjXmSRQXli%2BueRG%2FtJhtejRxivHDLgtiJ%2Fi0N3vY3kI6Ad7d31yK%2FXmT7Av3PaTc6VytLgHz3Ruk7PQP2h%2FxjPtVgZspLXDwdwbbJlQgtNxqiKSFV5ECUG5MnWkQ4%2FE7ehygJotqFd5PKTqExL5RHwKqfS6jO7JRR29zvPiiNg4oB5EpBmdxb%2Fne34g27qF2Qa66idarf5Fb64c%2Fju6FVaOYr543wMwjcuTyQY6pgEg8oux71AfSlVUEAp1GBocYruQRUCF6CHOD2tdzp0EBWc%2BNDG6ROFcv22hyTE%2BrD3j%2BxMdLim%2Fs60BGbdOtXbDBdH%2FkDSMuGFRaYXNsB72dNKZBMhaBpdi8sJbMJO%2FWRBKi%2Bo9lzVvMYA4PvN6nY4mFST7JZ0dAe%2FmqGArwHP3qKQxaiEf%2BkrWim491E95yeVBrsfWGEIZwORQZtwQLiLTHnl%2FXf9i&X-Amz-Signature=dd1f4315fcff28529686ba727cd84f6ab2b6257ae7d11f0bf6613485e9f4426e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

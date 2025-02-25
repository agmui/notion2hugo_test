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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVZYMXKQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICq2qJ4sqDEfRrXwlW3jKceQyhds7mmwR2oKWV3X%2FwjkAiEA6ZLtW6Vv4bfGP2cIE3izwzs2TfvNJ%2FpoUBnUEVx5D9wq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDAjhB78mmf8Cd8MusircA1izyk5t914SkcUunCrunvynSaYIURTCJyTo5TudIV3X9qjSWQ7HjZa8uDbJV%2FZhInrcUJz3i%2BregLLli5tzVj79JNIFBLJO7NCADHJshHAMPQ%2BN1A3Sa3E%2BFjWvZAR%2F%2BL4n5iCutXLBzrg%2FygCJvVCFkjadLPowJyaeBF123mtl4KwgacnDyfZAacJqNOoPVE4yP79X2FqFoBQ6lhqv3SRaYG3M0FRaL8kbY%2F4aEOXIQrQuzMPJ8EHX9REpfw%2BnX95DCyXaMHZK3ueSuBmAx4ZUlSM0mb7IkCWOhnUuBK0zzsVKx54kPcfpooPuMg%2Fqc2t3Zl%2B2ZnfBZ%2BY9%2B34VSSnerfYBK5ZSOHMqzOydd683f8NIMJYL9guHMpki4wfDaSGaRXPSzmPlWNgs5tnIj4V1D6xGlMysNtpTDIDbWsbiXEg9i%2FP%2F85HzEx6A8Jd8kzQNJ7Tl8alQUD8fH4qlNait1Wff%2BO7JCT%2FVDbiwfDFNhC5ir1Rdk5ZbA4DbvTc%2FbdO9e3ziJeUIzkNplU00NeRKJa4bqPS188wwNG3ltvTni30feKyieDNGEElbeqpseABLJsM2SBqJCoSZLr9%2FlJKHoQl93HcrWLegXaFknRohbffm7hOAnywqaAe9MJzH%2BL0GOqUBCIptoPNRzzfMeltbRSGUzenLWBxxJ8wCP3aAcTDnFeicaoXCWP05mER9C9FJEIXzVmoPoJ4ID%2BHd6upRckLBukfY7WYo3Jo%2B%2FYPXSq8QmkaNjGTvOZOFGzfLnM%2FmYF7ayyudcIWm9VMYb5woh8BAe%2FlcZyrxvMrI3pdtsw72zVV7Z555drnmy4g4Gjeu56SdoPwFNVr7NoaMpeknMz6avm%2FswC2T&X-Amz-Signature=a6050acc747f89ea57f4eaa8ce0794f6b7bbe5dc062c1bcbe91d68030ed5a981&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXHEGY43%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDo1qcu6As%2BxDFey5oQ4V4bRbqYkyA4ADP1SCUnrVCB8gIhAO%2Fyu3k6PkR2wJRz3R0ur17ldnG%2F7RyU7T%2Fo0ll9EJScKv8DCE0QABoMNjM3NDIzMTgzODA1Igx5gpNJcOW6mW6f%2B0Eq3AME6KeYkZrZALmfNBdig6ANveadZwU2bJQPl6HTr3kI%2BjNeMuiuOtIZxiAx4thWqmHeiuUg0kahgd22Mlyvev0lgPVFmGDtxLVJMkpPZnIYoO7MNkfGYh57wQYSvuKxZuCYzSUY9YlAamp1PdGfSspHwT%2Bo8JZjp3jXwvEwbOXLRSyFC3a1nF2JdQrThxFj2BbZI5sjWQmTc5jqW7Lxe2hrWD3ZkHCXbBd%2BzOd36yoA6DvFjx%2Fshu%2FUYE%2FviPEVhM9pI7HUm2%2FfjK5PHFqUXeSk9odd327rBMH%2FaRpLfGhAg8%2Fx5oBsWfoQ4Eaofsbg2XpF9XMKYAWp1CvPa%2Fc%2FUyh32arEf%2ByvjY10Q9TZWnDhO1pUZIeOitAPJmr83ru7JhCcOcOIZa3mNb%2BWXBpc0rBhEWvFVGF%2BmpUMyX3CiXpEUR%2BIlUampKm3%2Bo4oSz840RJxK1DTmW8L8lxjHJbwhQ5nn1I78BYdlZu32ZnGf66BRxNg8wIJd5Rncvx4jK42iLHOIplDvKIBJ7sYu6C820oaD3op6zoglpJ1zIepwM3uX6LiwkiJZuqJ9rYqoMNQamtTPJ9qhD4Opqasubx3IFOL%2FXaDTvnr8KxVwj7pRIhu8307seDmXSV1%2Fxl67jC%2Fx%2Fi9BjqkAWWWoGkFjil4eE7V9bYoGMH0iz%2BNOCfpnPS62blcO88aNR8n%2FyPhqAg1VZFukk8RRbeBUp9fYxPS74mL2jl1mwvh1AtJdaNiv2PcL1sed4p0AVyQaZoD54S2LSl3RsXLKMi%2FMQ%2BScjHX6BQ0CuB5E%2FIw1yYwJZhHIhyt5KUuGPyhEWhnbDeK5e8Bztan9VbNSTakF%2Fzpl5ibzbFyoYi%2FyQgFeUVB&X-Amz-Signature=7263e996c63fe6a104531d87396a1a2efe6003073078274dfcf49f4e4ad88fd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

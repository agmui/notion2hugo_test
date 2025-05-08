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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664J5MLGF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZNEWl8AjZ4NbknurjWx9wsdabymxZukR2%2BL0VCQozhAIgTwPgJrYFcbXeOXoWxMo9Pd84WVZAtuZe0lcyYzmD7osq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMoBXW3tN%2FwBv9%2FnTircA0%2FNn7krVKPkos8MskzHS4e2YPGSoboOLFMHkQVL4BdVGAVShnVdj0YtJa1P92qEdaqFFer%2F0ZMyR2Ys84hk7ZpysZ5Szx%2FJ6F9fod0%2F4%2FK3REDfSW2HuQ%2BMxwICqu%2BT3T2O6EqQYc620EYffiIO%2BdqcwcOAZ5eEZmYnX1uxd1Z8SjbYj%2BZs%2BRVvikNaJKKucBYfVlqbDtE3C59eCcMB9IidaImDnLU0ujnw4WUCl37qt%2BP3Wn8SidmTno41Y9ge2aX23pXE5j8slkGXzQIStauTd3l1szNCwR61PD2L1mEHLYHRjgCMO2PyIJp5jamCXSLlofyDt0WsqX4piaZEQkv3g1aC6P7YViIYFjl7D3HX92mpKXzy9guXN2x5pGWRStP8yeGY1VcPB10VebVENus1xfjT3Md6%2Faq8ipwdBazI8TLXZpMRvEL%2Fn5bHCj378hO%2BN1HMnATnthIVN5Sq644ks0sFMWtwc%2Fpbe7vH3rlWdLFx5ZISAeVTXxYwCDmqXVWslY6536bOVe%2FtP0depoIx7s2qIZ7jYnL8suCAqAOuUi1cF1fM8TZjweaADUmTUnPrG8JBALwOZTNfR4Cs2F1pV9K%2BY0NJEgFQw6TLgSzSELpuYxIvbDq5u5jPMJjl8sAGOqUBdgjV4CNWNjRcveGGBMxprpfAkuGaI5KXN0kYuyoGw50Oi9Bijpxb4m3m8%2BN%2FYXt6kCZpvLCzqkQRAxEuo6M%2B4lZpqPaxs%2BUCdkC1LXsScPTBQGI%2BBcwkJOwuu%2BHKd9eIbS4UYbioNZJvPsL0I8O%2FrFDpdeO44YLE%2FDf2X8gNrPEk0l%2FtO2NBxeVbR3vaTIM%2FsTi8Q5peuPjOaWoC2hQ3GnO5MvX6&X-Amz-Signature=841a98ee4b41a63d3458cb610653561404abbd9987980eea99e318cf57f33aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFWQWJW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFsNqzUHsqtTByU2v0r%2BJvyWNN%2FXrl2nLZHnuAUI2iMAiEA3iLvLqlRuEz0cuALtlfkWVT7VOJOaC%2BRw2uxyX8Yil4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHenaNVvOqI3KLsEEircA1kwcPHaXSEH99kD%2BBX%2BP%2BHH7kZka%2BOscJSxDrMuVC8BjkPrDXZ0%2BTL0lvxwuT%2FYh0umfFAbwiKokP7QrR9e6v7MAgU9KneB3Mhp8aUAdMJFhyvVs%2BXZCBX45jmEgUTSUYCR5iiGjdZJ3rF3f0LniLBFwXVZ%2FhASyvhvytDOq2JDgwD0utXSC6EwcI5x11ZxKCm3podXI1NUX3cyJgZ2dTtcZEhjgjHPvIKSBkAzquXLTw67jcAvtvGPJXsffIIM912rJZVWvYRQSromX%2FQl0XsEmOgEIgfH6sPrM9gK2RebDHllSF36SVI0cN7jY3jUBPIyTyLGbh0eaLTMz8dS4J37gPcz8Y%2BpH3CJSKdcCzoKSHNdXxgbRg1kin4aqNhSOVt5DAmGK0GZ67ejGtKOV5ArARxfq31QzodDyHr7N%2BjdQFGbxppDXYFuEakz38nJGgyFiKoQd0BSHwwraBb6npNQGp7oyLaSQ3yLDaKvyHIhMRMGO3oC3pgji2na8YC5iuSV8V7Qj43bhHIYpYv3d8EznqBhNKKJjpfjqPmT9w%2Bg7nc%2FNT13AjX4PkuBarhBcV%2FqVM0U9DE3q7929UVBmRa3RQ7cnwqJXUyG6fRXgg1lC4UMS2dGb%2B8sb7UoMNrl8sAGOqUBx8HCYajZfYo72xJJ3n0djR3HF6o0lsNJjTCbWFROfKnFnqiY2afhy9N2R607tMCIHNFc7Z2fzSeWAU%2FN21N3rJ99YtcYGlgDT6bvfSUPTOdeOOasRdaoGHzh%2Bee0ZjmAPT3mXBNIyQ4tUJmsZAGSHJKk0l%2FrrxLLuZue6LWwwFoAGwi59cOcLvH014S%2BSQxgcuoYJsItrw%2FYES4onsfvQmJUOozT&X-Amz-Signature=20e464c4506db748e32e196c6985b869ee5931459bcbf820de278970efc52a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

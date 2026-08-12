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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGZ4BFQR%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTYuwnJliCbhgOvcmk0EJW7%2BdYqfWD5zd6l37QPYU%2FYAIgaf7czMRSpbT1DpDrQ4iNc3grY1HokhuK1FOCzq%2FHAkMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuU1RVTPO5kcilCnCrcA1nunqJ%2FdhUsK9lm8Hvt1NdeBrIzkW98tQt5PRD%2BC6PECUjdRh%2FvGsan2mCx2bovTyTFhETNsBEmJwpbWC3kU4XgEgRA92uxhRBfUoAdLqbFdjeeT1NCN9srUu%2F1T%2FJ%2BvDHvX438fgjcZipKIbcqMP2JyL6cYAtLH48RQjttE4CEQWvj%2Fqojbn8Tq6FrZMWrKOFSo8tJXzVFil4rES7IXIj1ZlETL%2BRNQ%2BIgOIydlc79SpJTH9lSDzdWI2tGoqja1ISRGwfT4tOB90fKYHIpNiLFz6Cif909gmHkrfa5ldoupLhsCkfnDvmVf4AhNdQpW8ndyWUbasJn4rC8WZnnSxHdKlcc2fHF4LVI7t%2BZ4M6714nImgZq9yxDmgvLe%2BjilaO6Q%2F7U1m2hXdT0HK539sPZO1v4slgy5SuvBNk9GY07jYSrP%2BL%2FW%2BVk4DNP%2BXG8rE%2FOZRucnRHJh9kf4iBGIzjkfzQ9PiYfHzbUOzJ38%2B8WkbycO6pP3S27naW6vYm3zP5p2yTdXwk%2FaFPch2aTAuy2l6GSWhBPsQGd%2FwkUGbylJfgYPPOJhnOAjAZhLWY18dEbNyP%2BNr6qdKK4tHFImLp8qo2kdH3PjaZWX%2B3MSS%2BPhL28fAGbB3QOdY4EMLLo7tMGOqUBXc5vi5YgOk2dECjtKj9yOKtue26hyCpHATlaCSa5jFn6C%2FmpsfN1mIt2odPjzQ7hVLuYYDRHNpSD9UpIWRKKkR3mtBtjm%2BfWKlgg53y9Vz2CgsdEvFEjheCIxRBuPcvSzmVsALCWF987gKATOwYR6R3GnGT3OUWS7SPLlQbn5RbfatAN6s%2Fr%2FGEd28ta49GK6whfassLqaLzXDDSl3SYxgNyURAA&X-Amz-Signature=5ca25deba5672cdb88046d98ab4f054a97dc466f5c190e43efa3c32636c6528a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFGVBEE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnSh4ncW2ZRZMVdFHq954J%2BemTbrfBdRyfVP3a%2FMTogAiEAosVBEfyNjSa29ooiN2uZKKYtT7ugGBu1n1JkEPEiMnIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbYKMHfA5c9sGeSfircA9xV7p1Y4ikGwMGZ3N3gyNC8kUVjZHiIF4rCaf5JHyBu84B3TlJqrn6vSqAzJRKFOPkZYIgWEMStzkA67exQYY7QXP9SP88tnxnIsW1skhjyFczmP8CZmUPdmaplZM%2B1sirlG8y75VIjV8oD7ngSGSU8ALPCmyZMA4YVaV75fiT%2Fx9hz%2BiNLRYIc4tcGtgbVcQC9dSW%2B9zeoC6MQ2Aty2IgC3hNKpEXB2KY7PPOQMTXUR4Gjm0Z%2Bf%2FZ5xH%2FOLTEYGdVw5WM%2FQNtqMaSTUUXuiHHG5FrsAItQRpkmVnA9oRKH2oZFvMx8REmS0Ie%2Fs5oQtUpCNzIHl4v8pWtLUWYY466TwN4EZpasX%2FMb5qi13xGPCDnvEj55vvIntloYudj3bwN6ZBN3h2bYqphgkc1hE24exe7tr89Tnhrk7yBvF3e78vcF7WJg%2BvxFMXMbpJXmA0KFIjsfGti5lJhG%2FeEBX177sWe9SyRnBnI9zHD4EpYjxY9Vcb3rbHEX9AEA5Ckm9w6c%2FRBAgm4OtHuXn9Nm%2BIuWjRSboJEa3SboT6RAhuyrlIPY%2B9XHLhVJBAdsMPYa2gUAL6Nu1pWJbuIkqmbvgeiD%2F7j0MLdjUOmsSxONwiCY3ePi%2Fg5hPghqhWbaMKLq7tMGOqUBOeLI1o9WpUAyVY%2B%2FOyEmeZq0TKxxfkcozDvtoie6WB0IGrMOtGDImuPl%2B9g%2BV%2FIAN%2FwF4Sc6wHuJ5gYJH03jwbZYJn0YHEZB3cpueLl4%2BycP5586F2CJK15i3znvFwQDt9HXpNCYeiFYigum6YgAihWY8NXoJtOM7MUmf30ygzFQn4lyHOEEYmTXncCufUJhLxAcMmL3jHJUIB6t1TdeA2oyI366&X-Amz-Signature=55ce589da6e4a2c61c0e4298820d60e14118a588e1e0ed87efe4ef79dada6a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

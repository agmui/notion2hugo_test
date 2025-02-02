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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAWKTZE2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJb%2FytzFgSXF4gprhbtk1hZ%2FuueZin7Awl9UsyldNIVAiAlrrIQ5YOHLpHFGhz58G3%2BWfG7dhuUDTwEC5am5koNcSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkXbU9%2FpBlf3R2RgqKtwDV4UfZEnawZUPpQtND%2F3cI790EELvYc2gzCvi6HFT9y28OuTTfkOBbu%2B0xXT%2F9jgVSyyNR1Fa4BU05udTypYYayd9LoQtvQqXKrZGTN5EEZtiNwq1ITpEz4LWjF3hq%2FBJwHIXnMV%2FOUJVUaugL7PVI1Y4hdyMjrtlLXZny7%2BE8mBFwmJPceAq9N8hTvAOmg1pI8T0cHc%2BC91ONZHOeHFw9wSjNxnzP66gyxjoWMwG6fQ4QCzx9brvwtY%2FthryMPs930yq%2Fq%2Bnnkcpw86CrpgXjdDiym4PuOioB1AwzAsHd7wi1rB6FfUeYDt1RdgKIBv%2B%2BqfWqNAiU6AOGcuuQGuA%2FBC2JNuspf7PTut2POwGqFplMUOJxSGrs%2Bh6Lj3DRQNoxr6jmY4nuooUmF%2B7W5Y%2F1WXRNTpzLbp2%2FZH%2BTQD0y7ZcJWeBSGbGTcfC4y5di189w3sNsYsDpo59CGEKC9vQbx348RoUKosreP1tPA2wv04Pp%2B3Jb1vJlcR23KVRum8jv0Cgz3YF9gwT8vNWCVX0ZJOv7gTSqEWWff048MVp4evFjheocA0zubMWLxSBhFaIsZHOoBrFCXATrmBIW5x9S1vyIpnj%2FLUkrccuJ2DikR1vC8InFjSah9wHGWsw%2FuL7vAY6pgFEoBnuDYZ6H%2Fk3KzF%2FU5t3gm%2FeLrN4PQ9zUkdEszDUaOFdzAurUsUf3xSemz07Cl2U%2BJhED2xV8dQX8arAEP0JNwHhgmMpT2x38CslDm6xpvWeVviMS5ywgnsiijlkZyXdX0tHzxrgVB0YVy9ymXVig2gp8NQCGeHWW%2BP70%2FjnaNIUkIM%2Bx1bQ2VLdClZHjofX5wTxW18m2yNvEFi0bAZ8t9ur3tQ4&X-Amz-Signature=5b043e13ff91ec874b96c17cb4f87ebd9450ad8610c4e11ffa04399ef3d59cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU2I5LAA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKZGWd8Y%2FGxZciW63OSYGDd9kLzgwCJkdr6Wq0NnUhKAIgfKLmRj%2FqSo%2F55UJxuKf0ibbSVYIhneNgzvPi7LXBhQsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCma%2Bj75lDxl%2FTdk6ircAxXK2yFg14kB%2Bt0V505dItUAJMU9At5o3e4k9lJ5tnumCmgOSdXiw1sYnE%2F8wFQhx0rcxGBMIM5YBYjEFQsc8L1xHseB2vs%2B%2Fmct6Z3D0nIG8WmbpTEAWCAoS%2FZHIH1rx9sEaD8RIwFumIo%2FO0tVCjwpvpMN8zViWHAbQ628nXW%2FWs8QifBRPabBxcydoSh2oh8Zt720qYHp1MU8SlphS87IwqsSSfvrKd8LWvKaotU1X4PUoKiyJsOlgBQJyvXalFQubZDSyPpO3LT9gTbXuHycBkdtK2%2BsmiLGso%2FfqGfjreK64v91u3%2BdgkUDEY8Vuaji6WnNOn6JqvqPUFJ8ddoUSkg7NbmDjr2O47OkAnCOSz%2FC9%2FrMGoSJ6CGWqWNh0mxmM96fPZDioQNMGKD0Bi6hIuDGpYrSRY5icOfqZStN1Emqry89kvnp9TdD5ILKwkfOU0lnuAA9JyzDdGOOw%2FCWA%2Fpjgwb76wVDQDKDKJaqW3qkAXHrGWgTJdh4PANeb1grUT20xicj8EX%2Fi%2FMd1HcJSlB%2B1uZWtzKGOb7sLAqhIMlNSMnwjhnViAFZD%2FVTQejoUJnbZS07hBT8uFVKjCycMtNCkBZ1ftupi5nrmHPdCXDMOZd%2FTTbzVEt3MKHj%2B7wGOqUBbGkiZ3qSfYQ7ALJTRCeKROPWyQ6mIeyw6PGI2%2Fvos%2By4dcqXcMrP5ju64qmeVWXFuQNNeAa4GZ%2B7TIp1VrrsuUvVC0VMmv8bSIiu511dhYzxQp%2Fyj0J8YjxVFJu%2FtD9z0%2Bq%2BK24sQfl%2Ft3GJ5GLMkDXSP3PfVj%2B3f1HuDxEsjYENNMugBtqqAepROmJ6gp95D0VPh7I%2BMPvgCqkCZTA%2F5ckVXixl&X-Amz-Signature=1c14a852b2937a47ba589821f9dcf2cc2b89ea2fcce690d2a0ac5f3e1663d932&X-Amz-SignedHeaders=host&x-id=GetObject)

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

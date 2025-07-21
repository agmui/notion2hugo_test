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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR2SMOOD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQM%2FKOuOOhaWXyhfWMGAEH0XaQG19aNRpYcPfo5Xml%2FwIhANGz%2BWlw0kbACDINfI5wISbsFcfVTmgjKDRfWkfc7CpwKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn8ni%2FC%2FiFQ9S6oFAq3APrbdu4BWcWdVn5BXjFwlwDuV2iz7glzdJm80hlqXo5glI%2F84HRXgCgh5brHVzErAs6RvZrfrVqmBoA%2BNaY6cFcrJfRLuJ%2FIntaKTaQxzbaEVw9kLULHN7kLBHU9Q1xKpQdjbHv2hpkXSAzjX%2FFUlFZ%2BLAFzMOpGUh7rfzzfl3zeId7ARS7whiEc872fGNAQhgfgKt3PCyTn5FsnzTO25gXQHsq%2FJoeS8gRpDpO0ZPwngZV1IFe3dcYA0ghwA%2BpE2%2B1yMVdFba2NONc0YMJ8igUpDdTKt4XOrt%2BLzIXGBRCghgeDEs7snQaH%2Bn7H2fywthS0W5i0spj0vsFwybHNzFEps3DJfILwlS%2BOqhlc%2Bk86YS5SJiLtTDdUxJIl7Qvq3ayaoR5AHEXLmWjEZ0uLwqtQpDrLusmc02lrNM70fo44M9zHU3tdsc5aiwhtZsdfG1Odlrktw8GRM3KfRRAEGgNBe%2F1D3IxusZeoak85SiRnSP0mEsf9ajLphKLL7R%2Fj1j%2FrhJKO85W%2BBkf02cs29WKSmlFn4OrYpghRBPiGdLn1hPzCOAlI1c%2BCwwPOH49b799TQn1LloNchTbe1wRxlhN73hNaR2Vu3WamP9j3v%2BP2qhGxNRwTDl8hpNR%2BTCH6PnDBjqkAX4pBr8zrptJIQUhVHFmpMESiyVjCi6mydCUND1xhIqEBO9g%2FjZILI1dJMB0DQI64ooeTYPo9AiOX4K3U%2BrX79x80eHysn4pXaWk8%2BGlsCaefkIKW2%2Fabc6gox%2F8pEqeSz4wAekQHKbMJe4HtDQ%2BRQoRdpR6V2lzj0Oxx%2Fm4PshfxhRiZh5OykTC2y4reEUyoe1b%2FEPwh6ILb7zUCjBVlb2nlahl&X-Amz-Signature=0c7a9756308a4659e33207e8f0cc211179b3a6d223fa185319565249d1069951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLYVUIB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8z35kh8YZEG%2BWBYWEGPw7o%2FT1KvJKqg%2BOSyzWQdj%2BjAiAGW1xMmb7HaU5SgfI8NbpgZCeRv9szXV7bO3yPupQsxSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4kQzulvIlQAojdjVKtwDoM38hZnpd56k26iyjj1xzeTxS9dfJdAh9xNQ4KB3YJPWFcjUSi1yMYSMnGqLmOVYlSfwzeQYf8mn2tPN%2FvV%2BN0of1CMh3U3Hgsy6g4bKIsC0QXKtVi%2FZDqYpKN1%2BGNjsViM5AGR7rqQHs1Nz39dDydMHd%2Bw7sascgWZb3X2SUl13z6mF2o2eP%2FPrxIs0ZD5%2F91G9lJG1tQflfT9cqWNdinmXZ7yNMAt5u5UA0x9p6WKg5uHN3X80Rk5n2kwFrH9STbGzJfX7by5B6kbRghdXUCAcdaBMXqlbqsN%2F4R3YZZzzN6yPBleJm6rvW1VcUM3QHsTKHsWFN2S1HBQsHWPU1iqUZMEdBagMTAMJzqF7eD1CDz1v8pcLFNMtGyT3MLLQ6psXI%2BaIa8FSYv7f3OornPQJ83IbSFuyx7ECnZclNo8i8cDkACFu6bBiBPQ30piXoaZkCW55ielpAh6ZzAIBtUOXKKUQQ2SHdbnfxDduZH3UVLN%2BSXSVQPlp2Vsw09RdfgOjqWnWdmGyz8opvHcKDLmVNYuXTnVqhJTUPTepEjusZ%2FnXMSDObomTkl3aRHgqCQ%2ByFo%2FZm7tXSe4E6mu99aNkvsj17P58oXo4wIyMD3KdtlZMij2fiDSfpJYww%2Bf5wwY6pgE%2FT%2Br7qsGD%2Bh4KV0jyLvgdiFXlDOjo81Dj5MTtVXYYB8eY69Jzt1fUMeKf5QOCPBz4cdelRXD5tM8Qw7VLmgcg%2BuAQdr5xiwxYhEWf%2FWvzvr3INuxbTY%2B5QQzMev6yGQ9kGkQTEyY9VWB88Znape2tvO3Yjd%2FvqWJRQLcCI%2BBrw46fB8DdghH4D6qbPRIC2O32oKFHHP90ROQWauB6NGDqqT1kRFIM&X-Amz-Signature=4af6bc3c65577d523f21a80dc512b87db89ac2d7b7b7d2b7d19bc9b245054e37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

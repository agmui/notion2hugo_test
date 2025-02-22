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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKCHGNUB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuAxSj94CV1j7R2bZxXxiECrGgruL1E4fYl7TP1SdgUAIhAM4UOxHVRUvQO%2FbbOjMczxkwzWZwBSfVNeR9q2FgWyutKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzf40Xvs%2BOwJwfRgsUq3AOtsX8lJ1dis96mPUar6e4YavbKQ2EXQzlLZ2EBR3E6Y1kINqUqu1eTkKK5OcWvR6upR%2FuaYu3ee6ADBklKKJVT%2BsdJhr9gf5eZtihCyjfY1zlNRvQCGXj%2B8GoY0UWedLqyC1%2BAmBWTQuBnVaYyVq1ujK4BHHZ0sYedJTheeXb7FYOK1hX9EigQzjQprdATatxAetxLluhswW2E4LbHuGobj38pePgeRYearp%2B%2FDuouTtjSRI%2BL7szfvnJMoJS5c9skyp5T6T%2FyrJySc45tTrBYwUGynXN6L%2FjML9C%2BzeH5HYl9aV5AeVhVeYynmuMtlHeicBEIYT%2FMIrwdYtSMZ9sJtGGbbHc%2BjVQXwIuvgJro0xZfYqPHLV4KuASn0kNiXpA2w8f6e9MeJf5mWrtstG31Dyqs46betsBrNjJY5ZjEZ3qwndtsrabE1ohrvAnX1lO%2FbRKhcSduuHrD4a4bUvPGPmWP0esWD3sHWrLGMFME6e%2BiGSLIm1Cp7mIKk4pFxtfy9Vtu4gIfYFZWOSLpehZJjBr3x%2F262ZP8jUBgO5UZTRqQaMy90HV55zJEna1%2BJNqM22zUAMY%2FhJjWLce7JNdYkWcqctF%2FDfUIz%2BUVjzh4JIPqbhCDjRUX7df4WTDM6ea9BjqkAQwDo0AIcZeWxJOFfB4hUwN0NfX72xNmDR%2BGqNGS6rQqPplQl%2FQrH4G9occktaTNLbEO7i8%2FBLW24axw5ARKlKuefmlEAi%2F7Y2NVr6ulF%2FvGSgUP6ftAQTQu2nVH%2BScS%2BlJClmmvNJVfyy9NBJPVauqazSlkdMnC3k6hKQkv01LYEZsEv43AEAuFSaKqgGGCkAPyvGfJh720sXGbhLICpZKiVBwl&X-Amz-Signature=6fcf14bab627105093178c0d9392ce21612e77edea60bdcf28a0e7a6a36e2b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NAZJ7LF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyt3mIljKJLmrmmNFyRVc8JFCmve2Wwoxw9gO3HCQoxAiEA%2FptoXmsgl6ucC1QM7ZZEe3Uw660dFO5UzaT3nTsLSykqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5bFqcVwVokVazZPircA0qbrEY4%2BtbAzUdM4%2BYLq92gFfyYER6NfxOPeZfUSAsgngQhSoI6RcLgyF6I9KAiRAy7crEvQY8Js8L%2FElKkJ17X9kh8iy2wHIyGUSDNH33UogqClZjJfNAhVUxl67rZimKUc9hvMEYS2tD%2F8ligwIEQeMRpAUuJSQ1pKRnHdt83Rm%2BMR0zfB6RsRjUWmC6QI2xkK%2FpSKj2HrCEAJ7b4ZwU0yKlljgsIFwj4%2BPPhBH2FGVl%2FycZOTW%2Fmex9Rpv4t%2BBMgHnOx2rNbXpkwOjtp7%2FOP8aTBUFpUjDBdjmFQQU8Dkdx54zckuH34x94zAiYEPcWPmFCkC%2BbnlQETA6UFyXlX68D9o8eCiyIdexBANIc6zmQadXreosmZdHrEfd0bnj4G0VvNR4deHaMI0AeNmch%2FLI66q4Ax3c1BQhJgYJjmd8yIs1vf04PEpS6bTTGRXAinpzcD8PqlLTqs64311QPwMNm%2FvyGp3BLOQ7KWr9p4MOROU2pYqSDxyWJDS8Mqk%2BejPyxXC3apbQVAdiAPj0Sj3A1Ybs23t8dPr68e4jHrOTYVLu4ZsiLOSuv3eeLXX2YXgflDpehsZQbct4WnkBlGnwefbqQ%2BtUzgJKYMy03sFgoZ6AIpMlOgntHwMJzn5r0GOqUBSnjsXOXYIYj5kOArojW4pTQtdBZM5SVJyXLcUB6dnD7qhJvYeHM2IV36CzJme%2BGeaJi%2BGynLvSfdX%2Bh3pk2VTKTvrWmZYUI%2FFl6i%2FWivT7n46%2BcUTlul7MUrFTcO9fdMlO0XRGB7WFSMXweSM2YAVCbMyusYfv4QJX5PB95lcQl1tYd97o0nv24I2bPz9xGIyvX40UmkQFQGA50bO9MWYsG7mDxK&X-Amz-Signature=8bfdfac3c4f9e0ad5fece69f640244c610d660acc7298408554b6f4b37b1abbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXIDDIX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDchtlRp00dWNXsH%2FIu%2BAuPPvstKj8NBfcCFaGCRRHOcwIhAKpilmXp4e0Lj0JEKD6HXkvbqyL30fSbzL%2B6iyvGpN1TKv8DCEEQABoMNjM3NDIzMTgzODA1Igzo2khfc7Ku7O0gRQoq3ANw4jCDKbRjtY3ZoFwnBzSZHplknUK9h8wiUyo7ZW15reEgZi3jyzCu7SV1XxZn1s9%2BZbzWqN3VXhWgSZbofU%2BUk1OegNSiXQO%2BLgC1P4%2B88f9aEQKZakAUut2r%2FY5ipyYk4iJgk3xmraUtdwtNvb6mCiIylLssSNLBcZAzBjBaap4aqXJeOZDGBNP%2B3VNiB8lIK709LwJpwD45xCFku%2FEwGybQsNLBgNNyxf1sk%2BwVqEeJEJA0sFO6iQ3WGPeNjJJzP1q81DR9%2BOBd%2BIibTLFtgWRC6uwFoOO79JaS7Gjf7o%2BXsnyjodBEm3Mu722j9eGUxCbHMnsv9wGyLrxkPPyL22%2FVoH6YOeL8%2Fx0RnNF3uKJ3POq0bQf1i0nk2iSE1357%2F68rsx4eY2M1J3ghFizNvZl%2F6K8Zju4QF4ifqlaq%2BIA56WvviVKsed%2FU6gOk%2FxHUrrod1Aa9F6tyHu75u%2F3mGYPlGMiJzuqi%2FBe0VaRhlunDbjJyOexof5rX1UkEDQrnfosB0%2FEX9iTG6yaLeKA4GfLxSmkUjpPUCU0YalBv6cZkPwnahTL4B4XdRcq%2BVfqW0IoN9HO2QOUVmApQQk%2BdgAuA282PsdU%2Bv8cy5PCISafESEToUBGX0K0ZiTC%2B8ubABjqkAQSuFs9M%2FT1xJcgGHE1QSrnX72wF%2F8bFf%2FWlF6gdV8Wgd7ui9xfBl1A4c4qno5jYx6HzAyS%2B8n4pIfPk%2FslRdD6TChfOj5KQ32%2BxD6XzIzYqPRjk67YKtPfe%2FrYTW6QsEqU%2BZrwQd%2FCo1b%2BIMOl8REnrQLSgyW9OHx0QRn7ED0nWm3q5hfHSxhsG%2F%2FfW6jujiiS71dlvSvctCCf90b7b5wIghkGx&X-Amz-Signature=2ec45ed5e131f35d3bd248b8a2003172579237c5cb8a1330b5606f7f53eb0e70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623IM7Z6R%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjHLIhnhTZJ7d36NKESbbvbq2ykBHjmnecGoy36GwoUAiEAr6xgJm1WH5fnRM0wxXS0phCJJNAM0SqVm3KhXgMoaOYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDajQ2CWf1HL0z2pwircA4%2FFD2uyoKh8gvSeLq1uua1LiujCbJvziQFO2LsDIbAhIx8fbxWI1I9IB%2BLmRL596LfO4ooxDlWB8NeH0LHqjRMFLqx8uhaUHLYS5hyvZnhlXXf2x53Nd79jbz4UzPflr%2B0ZBsOf6uhckO%2FAengA0EkZn64VCAsyTXWiDGVPyIDz1dgdIp7Q3jdNMhOVTMGWWrFJpWxa79aZIn%2BcQDTCDLm9G%2FTWZI3j5DM5Nf7f0lU%2BQWC%2FFvhadxG7v9oehfH8bj0yz%2F0YA5JGYePnTTAKB3MGjH8vMokaA5MLp8H6%2F5rGo1MMvu0gfCjEYqSb0wylz9JbqLza7pd3fb7KpiKX2rsA7GAny7h5kRmHLlSw%2FlNztBPdHJnca01hpTvH2LySVMoUnUiPMZTAKSeDGciiXZva%2BPZYpnpyXT0%2B32hBNb559qiNqcXdAX4IlHl8zcw2Gs0NX7OHJneo63Tp5vOG667%2F2LrrCTkCN6vybzzysV8PX9YfQuuR4F2qXe%2BRqThk1to9aThz04YG3jn202ePA6FxeMwQAhILTg%2BvWyyb1wvleq7eoi7MsdTzK2dOOcO8QPv%2FvUUuHYz8VajcdoxhxGNeMEyMkPSyyOmuLbZaJ7UaXREVcWJDGhcBOm3kML7y5sAGOqUBicP08EYdoSGoyxUKv4QS5XDoq%2B%2FOdSW16Vnk6IqSH4B7VRoysfYzjehPMQ%2BS8UyT%2BZBhBCsOL6rsnX%2FbqnyWRPbrwKDsEsyplVEHdcdyt9gXPe3X6ixRRjotct%2FN87aI%2FQkUjEyGUMR5e6zaW1KteJ%2Bch3cFkNiBQG%2FaXYu7ErHsSsmV3RGujSMzbnbXXCKnjOIqS75TAWynQCc5BOT71N1o1wqo&X-Amz-Signature=bd425ba279b74e6064a8ecac88e3a20c3d4a71c0799ffbd62f55a04b5b9b4df0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

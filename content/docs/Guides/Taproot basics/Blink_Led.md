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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VEKLFQF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCsY7hU4IcQytmTKfzCEkp5AN%2FMlOG%2FKQwKQJ7eTZDTZAIhANsHZJX4Nu%2B4PpqygECKGRODirx5j3vo9ZEhDxwim7z9Kv8DCDQQABoMNjM3NDIzMTgzODA1IgwxRfdvNgRi8P7z9OMq3AOOGsxavRHIFXpblwzUS9jVAut%2BsiwODXwH50OlTjjf2fyM4LpMrkWy%2Fr0SVLVpjPxwVdnjI3pyidf2rCDEzOCrkg2zwYKVUisxYry%2BQYPj2Mp04%2B93Z6a%2BkBrnLi%2FqhLJpvYazfV8%2BprnjUNM%2BtNcYNeQ%2Fl7s49zKVtj%2F6sT2pENgz51etsptgwctXcvqS2F1Pdl0FU0%2BXFdfcj%2BUphmNYSJNqzmIrqC5f5Er6pkafjSGMXjqkYtErc4EPDQQ9WK39X5STyfhqkTHfYVqhKviPYRbGbhMGg%2BqUDkXvXUoXsWA2m2%2FXZdlXVLejV%2FnEzeoJBFiul%2FGRDE7F9EjAcyD99zqZ3laiaX8djAKAaga%2BMLEqHmL5LDSQ4%2BnDqfSodz4Lj10aKyh1AxPBSlK%2FYQ9gyQSucpPqiZ5IJpdlSrnVEAYfibvnNpaysGlvVoXrVhtiMwIAq25Z0kQC4QspiMYUCla7PE7SWw6twodW7CYynVASiF7OgQ3Dmnf9M9wqSYyd3EoXfkNoNKZiYyYyvjVroFvOuOWxr9dxHpjim%2FvJgY62iYSMrNH7vtiYg5dIvokZTazCGof6aacxRxuW2So9Ld5nOKfmYj8TYuFqHl9oA998wMGjWFsDIgO4DzCF%2FJjBBjqkASiGAZ9Ti6iqV%2B45k2ntoTbzxFzqiTD%2FD7kVrfuJ9RPP5mWT%2BO8%2FZQxwymh7aZMLS1ru6PbfADSpjAr63r7ct%2BUGUFBTZQzVUrqpuZRj7j1AwlOPsJFU7Gudul3fD%2FyYjN0KXJWSLWrBQkPZoRdFoLcl45RPm4qMbRX4p%2FnR9BVqjwqyUMEMPnNyK7EdDJjEfQUjLlWGpGZPkojEXuTUeVhBydt1&X-Amz-Signature=35da80b28eec55b5c28dd6e14b0ecaccaf72d1c18544b4156d222c91e33f4eba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUGDRKC7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCd7clZe9U36n%2BG2pASRgiLODCKOU31hIU5YcVNk50joAIgCxhpCE4UUP%2B0G7jPXMvcCpWUh1R2rIy%2FceqnCCAXr7Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHOSCY0W0IqfS%2BgLNircAyCGT4LGnSiKft3nYWbUAkBT4%2BoFuu73QAA0cP8Vi0CrAQYA5y09ySg8eIUpbx9%2BDeoCop2RviRAsufc2cITVzPgjuxps5gGPSomLVb8oLWNH3htV%2Bzbqetr6C38T4BCP4m5dchBJ6wj1TaY2vHRylKqmmN89JI0dI%2Fur6scpuPcDBaGS2Ibi2RxfJe9C0uG70Yh5Qpb5fuDkR0pu7llvIsLLx2uo8fKb9GuY2lf3zjJquaoUVqFyWUlUwKIcEV2KTb34hUw%2FJYpdotVoYmvpNMcFQ7AEy%2BOZVBoLhrxMTXJ5oxjAd6CSBSsxhCYj8tN1huECXWyrlVCvHFBLFl9KjeUNLTWAm%2B1c9o15tIkCavuh3UFNs%2FYR6pk%2FP%2FnNWBmt7sZubhbKVjetMy6%2FZGNjcI0rPc2UUt%2BKWozAB%2B2mfKNbval6FwAuJl69djZ%2BV3Myn8k1gv6SIcnicZvnwHTAGBONVrcLziGAqw2864XG61jbhayh4nfCt%2FyFRJ0OQ%2FNibbZvLZFRSpkJcWWCgjkV4GSV7CYbjfpO1QswE7ZWz3utHFC92r5z29YkTIGb0teQw%2FeOaNBvvJm2kguvpFqFaZkXYJmXdcMevmvZNjWnUS%2Bsp2D%2FtS5rR4uJJwbMOv7mMEGOqUBx7Vwv7Chrzen8gsmNuD4iX6jD7jCFULNyNe48fKFrK37Ay7IxhEypjplaIIOmWyMLOztfn5kp%2BYVpqNVofeyLvgP%2B4ThmKn7Dyq4Y180MUwhe1VnAA%2FG%2Fm%2FQaSwkLVRCdMoAB3hFphioTWYAIydsQz1JBjVKNLwzXOENz49O9lsnPa7qHsDyNhqbPIOQ9RivH3yrjUVq3hgevxBl6XpabZnZtWgk&X-Amz-Signature=02df2bdcfac309f28e0336247a324ce37a6a5bf4ed60cd902e4119b21971c80c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

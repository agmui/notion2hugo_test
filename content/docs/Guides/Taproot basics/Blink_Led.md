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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDW6YAXC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVjjRwWouI86rP9shxvTeix5sDCacde%2FDc57Nk6VSG6wIhAPPhWjC2BXLEeNa8iP9ui5oV2QPl79U%2F6Klk%2BKBptoKsKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcJ4NdhgkMbGrsz1Uq3AP2Yu%2Fo96rqLO5oKRpSSYJuHIGr%2FPetFR6JuXr%2BUVYlnMoD%2FwJ6ZqJ4E5f%2Bz7RF0GeTsntMy%2FPlxnxsA1hV8NmXcFoIjudx4el5ueUVPE2aJVLa7Um2nrAKmrKKfM6D7yROpukzYeKtDzxOBwYOFBlAPyI6yVE%2FJd6wh1uiRq3U3lNoHbVg1y9NjSoaAAo3gc%2FKEJd%2F0tyURGHOttRMo6miBQWX3cOymxIuMOnhmzxHHrRsh343C%2B47j%2FT5Qv%2FpvoWr1T27uGv%2F8Wse%2FgiGJ45CWSJqcRJXk4MjBkmSlopjWCUIPuaVwHLzKh%2BaoHBrJPtzhRZsDY31IuO8NMSDsH2olw9AmmkxljNa2BKb1mTrhapVpopShp3xYGNZmEG1bQmPIPPDhruPvAU679%2FRBaKzrvt4rTHsJ6LA%2BNcfTkTooS%2FVmsbOR1G637olXFNwjxaJTwt3JRjQ8ZM4DExFTlUqMLwCNj%2Fh9bF9w1O7Dlvp64V3Z5WH5fOX4cmgXtH2UgT8WT8T8%2BL%2FZohW7KuZ69HI8jRdUpt4V5MvZ8LgeyiBnNArl5BM0iG0SkIMtOBK%2FMeZg%2FGnV8ZyqptrxAzPyU%2FFr4rCEnXIIZ7f1fhsaCGdcdgeoSaarlpBqj5DnzDL1cXDBjqkAfxOBOrB%2FDk0FfnRXd4zy4E0%2FN8aM%2F1Ra3x4qZrtiks%2BjHd2TlAf7sxKSs6rI1GHHKIHc6uvCg2HqceZgD%2FC4VawE10H5J8iRwXyp%2BM3WYckWZ4qdd8nh7CHIezWghXei5DJIvjKDAo%2FfP8AgZuk30OrFSX3yPWUzJEt0pSKgsJo54eparcgP%2FbUn4UOIDQ5ojxvh5BRKz3Me%2BhEbVODPFrxs9hN&X-Amz-Signature=60e27bb8ad0e3a6a3b69aea4ed4f829993e73cd5413978ccf65118e38ef4dc0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCZWAR4U%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9chIUvpiCLspFDxxrjF8oDIZa7u243%2BmJQ3JozimSDQIgJBEAQ3WyRULhAVl2nw4FIIPfH1hjlbOJiSBHUhyuxnQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCD6la0q31rIkUxBHSrcAzr0Ja%2FaO9v6TIAyHey%2BcoeJLCBBe5FiYSeFiVE8RR7ela5wJhZZurg1vNQ%2FZK6A0nVXpSsvQtyGlRAUIyw%2B54LGWNuIh3B4XEHHbosSZF3ZqRVlpyDo96X9Ho2Y6qRHurhgeiMtYU9RDbkZsC85wjMFxFTdHrM5dmGdqUpiHWwNOI9O1z9BczstE357eysdMmduJ5B9fzCt%2FMlVNJ8ZdF1BMlW5Cqgbt3louuBMzYZhk0s1ZhI3Fw7X8Th37t0GXDUnge%2Bu86pAQj3imjpZc4afGqWRQORVOOzswdPXiWvc1EaSrjAcrYqDHhp7bLc0dHydXHWfz0eBSJPPe6mzKUllFgDq7QQ%2Bbs7kLgdvKPhA8k9CQoPjCzPegCmYnySYTDTmcDZ7tzOKsN9tTgaehaS%2Bwvf4lB64WfGLl2FRG9hpXWKvsMb%2FbFBRvRz2sXh2SnLTWrndKB%2F6T%2BKNma0VtOQ34AblwFoiYZwuboWDpUPwzrp%2FO0%2FmMmxpvoh5oBL3PotYhZnF0Tt9MW%2FMs0EMVCVvkRG53AqEXXUIpUXZKuLklYa3Wa8106oN5aGtXrWBU8bAJxzYaY9PkcFppVFjB2P1yFSJog8w4w8RjzszFm%2FOcNnxFDUnikFi2JxWMMDWxcMGOqUBycAYNbupBhFQ1RlMz1lTOZOxPycfp%2BpQrgq17av6zAVxD1%2B3QscxiGxE02qBF6TF9NCNL%2FQ%2BnxunU9vXwNUSZ%2FmdDDkHyNJg4Axgikm8JqJojHJ1OfbB%2FaB7zn8pQJznMP%2BkqyN7%2BdQocrARkm8MK2nNgiGQuuqjXdPPCa53RBXorFvmVclx9DayaFPt0qJT2hCKhYYkOu1SNrUV3TN5DkfU6c%2Bs&X-Amz-Signature=7f25418e05c968371a0834283453183ddf8297734e403ebf16f2dc03603f724f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

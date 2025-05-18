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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMIWXWF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ5y683HZmFQ0Xco2AtgAnshzxui5TYy%2BLjShte0c4IQIhAMP7xxFvfG1DmChjI8ROP96Tf4rD8I8dATir11g3QV%2BxKv8DCH0QABoMNjM3NDIzMTgzODA1IgxtvwVphfecdn1PYJUq3AO0Sy66tS76fweeYHlY4uejnip57F7REFGpIBe8yVIySpFGKvJHa7P1KrxjGegyh91Ftt4MdfpvWX8tHPXMtuR8QbvD%2FvOAHVY3oMSu4xi0etk3tmNq9mOS2vJwXbj2VhJFnxrwyfRoZGkesccy%2Fil0%2BfHG7hguiW9BvD2sOdKkCkE34o5BTYW5UMeanVSkgwmxZC8xd4Il3J4be7cCBMLIIKg1mNqL5aMGkrnyZSRNYv1n4UQU3quJrYOUSo1LbscR1SyjoXLuJ6GeVuUNOwziWBR9OcUFKpRiLrfVOUkRZzWp0Dhjc3fG9XWWzFq7Xw4sHY1KsCX4brnv%2BJfOtmIiuPWm8pMfUXQkWDzo1pcQfephC5tYupcZljH%2FnhlLX1bIFxGLzQH6k4VwSU%2F8KpQYgr9%2BRJWSiEalbVHgnT4veHKGSx4IOrjNMi1QsZwg%2BeWTagCWz5NDyv%2B4z6jKi3M8dOeXKUxAxH%2BBnmBVI75VbN7yXWICdjrbfUMk0AM%2FSG01znSnTXEIEHkReQsjjGktOwhF1H4BWMP1FaXZ9qh4iS2SFncRis8objGrqHAQEc%2FAjNBwhse44XsE3VjfEVXjdZ7mDQl6WV37n1qnmtQQsjWEZIV6nPgM1Js6%2BjC256jBBjqkAS1%2Btrsw27Fc%2BJ3h3Emy%2FeWy5dQy8XvpHljuJRF5vMOKKtuWKUpP%2BFYCBRC3PxmxmRavDbjIer2pSwApxOyIhO3Rf2JROk2gtJ50ZWmNUzJxs24mYn9oXvV1c935BtS1UB0Ck%2FStQOxf4dOHW%2FbjJCBQjYPDqMTncU0TsujEIydO7lGQ8v1cSfTbbd1vhRB0qTblDpEQP2zDTh6FLRLm8uGQ263E&X-Amz-Signature=d2a6c24ad0945fcdfd686cf71c7bb108a9a2f00b1c52d5141027ad46e84683a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3LRNJO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYw1GZ9o3iqrtz5gdd88sp0A92e2g7ELshL%2Fqgvr0W1gIgWmNCVzKJ5SQo7pxCX1uzSFanLIrcj4qVDtg6DSOpYx0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIwN%2BRsbC5pWmOdIvSrcA0WYyxFGZ8yfMeMbt43FkDcSHITM53ra0LAofFxqzpfmcKyM2qQNNU%2BJu38Y9uyF1JeHFNmDdzXp%2BP5PuA6vB0msK4Nb9Ti8PfKKSjWmOuEcrLyEHRqQf27hTeL9DXD3eS5wvk5j3XtyXfjfpG2jD2lCArYumU4%2BMEmLa75Ivgn8YiP83fhBNAwlp4v3QABPgrCLxZwuIg65nG5xNQsa7NSf73fnBMBFbtRCLM7KYT1JcUz5zZDlXsp%2F3%2FbsarDCDaFhb5O2pmisel9O3%2F0ifePqqMX3YuA34MQhIugbbQ96%2FGVK5MNI8TV4hQ1fFGZgpF2Ba3xaUVU2i698J2uzY8OzcJQd2NdZmgGPjMuqyHs3Bv3SWEVzIhyaCf0ix8RkAhW9g4%2BbnALCt3hbIXNd6hHXFLY8dyYN%2FXB1JgpphpaDvnVJEBABMswvagN4NWN9dFCu566bHMHrqo1WBQx%2BvpO0Ndm9ADzYv4bBUjOagNKpr%2B3phUwvFxh5fx%2FJJ5sT1ZwLLmNJRfPIAZQ59cWX%2FgcPK5lcQE7EqTOrMsMpTMCQZDcYGcYKF8Oz%2B0hQkw%2FNWQTpCWG9G7wmmtufnR94lyvGDcvd8Sc0ADLvxjg72Q5eb3FWSxHacqEqgz35MInxqMEGOqUBcclDV5409aPHC9XmSuVb3q1J3uHASBr69B9ABYiS7fkpgQKYAEpCh9NKy81KjkC%2BES24ZqUEg3UxmiKdEPtSCxGbMcISGbIo6UMVIAlr3r6ZaKMF2kk%2FO6u%2B7nPo5dN83RcJXxLjeQanZXlxpqNFo9D414nBcNaq5fokmZftCGfxPDrFEDFDPfHqIPd7l64%2B2c%2BlMVesnPxihdUM%2BLXtVP4SCMmD&X-Amz-Signature=a8883f8d4e5d7a2ff79f0ec81324c94e30214a76945f62f1e00397d2ef78864e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

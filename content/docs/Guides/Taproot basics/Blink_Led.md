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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNIGLK4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCo%2FngYMBwu9WitBLLf82e%2BAR9Tozm2iRUKIaS7sqtVIgIgSE3xhH9y1%2F6IgNQ8xxjTcLL9xKo3sLYeLuB0ot2Z%2B2Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMuUN6N2LESeRgZXQCrcA06APWHm0XOKB0Zi8Vi9vGnIwUBbG%2B%2FYGgsif%2Fl765jYyikjLZUCp6ZkiQnSoU5LHVy8Z39TD9LsgPe%2FLSJEU2z%2BSScbKVuHd1rsk%2F%2BriXpTm2LvSgq8B8yDnGi4ADmwHFGguk65fSJltrGg%2BKnh9ctQihV2dyQnqD512q6Z%2F0MTxg01QeUAE%2Bnwhy741RV6gnx31YN1xI%2Fj7qmaki8Pqo93cy0jouK5W7VXSSAcYavjUYbAnxw5sFoDJ9mbaq1tLAmHOGiesM2IQiitCidPF32eSlAY6j5I2ynECZuhTlqivoajByFalTqee7VzR5yNisW1vvtSe3Ybt8t%2BbcLiGs%2Bipjuhr7azJif4S1n70jLv0anC0nlQjhR4LCU4hw3gmA%2BCE3xD8j0L5Q1fPLIQjnunQs2UxJ19s7GMUWGGWj%2FGcqY4lx68pggUsPd5anNPIkJrbC0w%2FWjzAl%2BPR2LSuI%2FEuCJAveuul2prAOIctkLvJy5BSq6BHClAtK25vdGttvvn54x9HZifG0YAi1x436udnL6PZVOl3112sHOU27dub4rXF8jWDmTLMZOABSP33bWkW6yYOzdWFXXXY%2By6rONEITHzDhIB%2F8Ld6xE1LBgm0mz8My70e%2B%2FY%2FPwnMK2k%2BcIGOqUBuJE0KLEy2i9tjRHx0eeQydQfFtGn4vPOC9AXpxFYGzjYQX0vMV4nFeG2vIQwx8hGOem9aeYJzG0nXGeMmbYrKN6fjEfX5l3%2BJ7fX%2Fy4stqQr1UdaA8qm0wtQLASfKwEMN0wmwGvTUMg0xULISqb4%2FMG1CjlF40oNgo07y5FgHRrEgvxg%2BqoRV22cl10T0Rh4hX1gZrpz796cmY1wlCEIYruFDrxy&X-Amz-Signature=1eb008098e5121eedf9709ab0a71cd65f522cda2d1a857ee94ddf9b202fb7a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MWWSEDQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBDbQiOyEIy4oHINhz%2BXUbX301eGYXHxPK1qxFy3VqqSAiA2HD%2BDPPWGbHzBztUMAlGPs6fRiNO3AskU2zcNUlkhGyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM4ectjYhVqvH75kMCKtwDAzUeLj4YelPe5QFXSTqGPxSgg7rLOfUUoOrEbC2VuCW1ldYM7BBYf5BeHx96saHD2xPtbYKIMuQrQl2yhTUOj7UseWooYO2gAWAvE9AZMmz3h72dXYb8TsXDvBBmFmMlYadloPmOxx4CvzVQGeRAeLodKglzqbH6GXbP2MTzLpS%2FEoiRjBhPUxGcZ8ZqgHzudrYza2NJRB%2BF4%2BsDv7TFcudAEkQ2B9aRGCKfUXe2zxcKjkiACoNHTBIZiZohgao2Dnf1uSBOt0IYRPgTHs9otmiuhlqb70sjhSRymgh3D%2FyiolQkKH3MBgY%2FfqyaPnTuSmU0j%2BOea2kJXpSJ6FT36ykFNM9MU2jlFVjM1uBPs1cfHpZZMl6KOHviHTw9qCFYNXcYI9j8UGnRw8F8SfkbyXB5mLAIEEI%2Bb4D36xzia%2BhP%2BvBLQ60ngLEZ6X0VhYwviKMFQlwu8IP7MHeiK%2F66655S8LyzQx5YbFA7WH3XfDR7NA8%2BNOMh9Wq4YNWW0N6GeQuY5GBTEzGBgZOL9WFhbwwfVdb1YOlj%2BKQYjsQgqhvjgEwIIWYRpzioO0lwIn4RtMMUBJBK3nbvVCgt7uBUNHvZ%2FGkCk%2F77E2fV1ic8pDqgpbgTYlx%2FAqSsX28w8%2Ff4wgY6pgExd65rOzV91OBw%2Bco%2FCFH61yenfSc43nsb4p5oiZx5kU78fKy2xiATzkP%2FbwilWGE0jS%2BAErGhTTb2FIiJILsFCRMJMUKcKalrSFpj7ru%2FxNn7Lj3ItGaxba1KChk0vmrJzDk18UVaeGGACR6mB8BVS5FeXIYohkfaTU9U%2Bo%2B9H64TFW%2BmJYDePgIPfcL1JA9D4ji%2Bqa%2FNwZzjTgzq78rN2d%2Fq71aY&X-Amz-Signature=76f5780847a8f70f17cfcf0713113df2c6d603a0c2979577f3fb6053995d07ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4SF6RT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICJYUDjJbsHL8JVD4vIhY%2Bee1aNwskdHfpefGj9BeSW7AiADy3RWTsO7JN9DyLYMQD3q8kdZWYJbTOsGixhYgWiVryr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdi13g6itiwO%2F2m2MKtwDL5x%2FDLzzEZnQ1HdBHaq%2BiBWKkv5d8n3L%2F0%2Be98OxE60GF70N2Svy0YrqI68%2Fr%2FXUBRpkQCSw8BP0gZ7I5SkqXL5veiRvyCCOwS1JwUMDrddVkAtw6T0EuO0NfcvcQFCXjyWC%2FPjRf%2FotbmZ5eySlnKLmNjOrTjQYJ3XHaGyQxTHf7MZw8Hg7RMaHuDgXw%2FKSjWVTW1ZrS74VPFjUQ6yGhDziVyuA5J3hC7p8LSjobOg44DCbLaajWkh7Y4%2F5PHR3vPeF9nPp9NgjpcCNjdhQBSQk2F%2BGuz9%2F%2Fzrj2YWcWZIJ7sUxlxjCNvTLoR7NxsaefKPKbqk9saEFN2m%2BrzbcuFXsfsoleJJsjVRh%2F%2F3kdI02hE7FSBSThaYt%2BGrLz%2FCn%2FO%2B2K5oC7fyvt%2BIv60%2FdrhQ3g3PI5Axo0y3pMdjJO59x8%2FJW2xuVko5I2DjJSZd6kwHC6QUdVcrK7%2BMwsmnUzwGFBhiPu5B0U8bY3oHenY8WC%2FF%2FxC6Pyv3XCgAM3NSJeLeJwVGBr5%2FJk%2F8tNi9LaO%2FpyMKfqdeT%2BMlR2%2BmjfPOC41nFTSsm4nLDb%2BkgNgvkYr5c8WZ0DRns9QePfaCfVk3kcooYW3QzhL%2BvKfwsBHW0aeFfXCmP4U4q6rUwnYXUwwY6pgH32hy7XIY3d2u3aKp75GF3iqpBp84akX4zr6oUQ9qpfUGDgz4IS4Uzl8B7gM%2F6uknsEHNd2GfT82cFV6xB99MSiH39udziJZmQHU3fLOTm0EuWRnMlMa8vMaaBcC9LAiCrYTdhWbmmkYdWYSLlErZRqL1rvf%2F0UFB%2BSSoc%2BCjTCmO0JwABNE7RMWuJL2fDZAyJVJgnmpkhr2QG6Vx606UL91hSODGP&X-Amz-Signature=4811b8d26598572f987b386e811959df59bf76a0da378e9403ecb8c66fd83da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDITL3KN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDg3S%2BpAAfY%2FuqrnPDZ8YMyZS4bIgmnAAV9jElmKOazWgIhAOjrtwqyDXKf6zm8BSYMwzyl6cE4vr5uDAuvxlazbTj3Kv8DCC4QABoMNjM3NDIzMTgzODA1Igzueg53qeS%2FwRZQbkcq3AM3aUBexQ6Qn6rUbjKgDlQh%2FvQRrn%2FMFArZPamYEHKzcPFSQO13w5V4xHHwYwVlpsI1%2F472SI4irFcNqvZ6wmXls2nfAailsqE2%2FoxdzFUrgwD7eqR85SlTOq%2BB8HzeM%2B%2FCQ2wMq7xHukGrB0Q9%2Fu4PQXETi4OLIChF1TcDdApIIw%2B25tKZ8ReDhFXhX5zlx5Wr7jHkCibtDUr8H2mwwhP2ZliFa9f2%2FBk4R8C7bEH0GYu4HnbMl%2F%2Fu148j7T7ZsE%2B%2BgkhGmisf2O52a%2BXy%2FSM2%2Bnhwsq5mCkUnqo9ptp19joYpCtsKjkwDnxjUpBjDOkoQsHEJ4nR81PwaWHJ9FgF7RO7SP4ciRdR4LTBqDqkmeeCzVK6hLSy32pd9wQY%2FwHDdDSnPvDhGMdb3XrPQrs0rvKtsSWWbSrR1poXq3qqxvRmZMs9%2Bi8ByoejDPBgCHiEmRM%2Ff8XCZUyto1JxsVIcs2aFuUIbl3XCeMoVgjptzbB96sxToJmUEDsVh9pr2pZaYT6y%2BEZTznIL8glafgwQ4euBRZl5VaBtPCRTo754orhHlNqYsUcGx1gWnEKPx%2B9hxyS5dz6YvbKV0gc3PBxyWpT7Pep88u1nXaHdgEdo%2B5HgkL%2BF6%2F%2BfgrfQWNzCahNTDBjqkATKvMK0DrKc0KN%2Be%2Bm3Xo5Tq67WzNKXtZAg%2F4kYyynea06f7jsLUUi9ZM%2B3l%2FYn3fz8CcDg7FMyIO7n0ZaD9BXxBBL5ZJk%2BIDN75ZPUr%2F45GqjoqobxQzYPn8RBG6d7gIS4YGd%2B2wLSasDk8b896lJ6o9s5m%2FXXIqvIiYAKm3GHiYwM3G4XlOVhVII8utTn7gxgVqsqBP9o1wxSyLXncgAME%2BELa&X-Amz-Signature=373f5f3f077dd7a15628e638c6f937656c190534a1bc20b3910cffc472a3d58e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXYQXYQO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjDINpJhRRtvqjbGgRNjh68zUm6mUnWsEGyZgx9AT9CgIgIJdLsluRaGdxHT3m5iLhAAzwBD2EoJkAkffrnJw0a3Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDI5OE8O8l54tK%2F5kOyrcA0WiQDcxV6ynZ3%2BJ5w15JLEAD13BygKIRq0RMCbx6hKKliuR3qWTHzhEuh1lEEZ1vHfESGUBAwCWjOUMlkpIpt3LIdNB%2BuV6bxobEj5swfE9snqcreoAjSeS7wKJkPdDmbWVVDmA83nvUdUHkY1QvHmGyF650Vxx2RygxdlPdnjWisxG9%2FBAvD2%2FYdqH1JDv7CSK3pqOKrerEAbAy0rNsinkGo9%2F5Hj2gWzuYJxmfaLuIfklryriiGsmUu0snwn9tOl%2FuRKR7shaBq1aYWOFJ00AbH%2BAyHlmHN%2ByN8t99qs0S3%2BU7EXax5%2FcehueZXbawJyhnGXE%2FTKrjfZPB29x7FM5QjWjW0JLcAuNuLST%2F1XNO4SMMmqin%2FPql2qwqZ8Z6sbDlF5jGZ8YzH7skCSAOeT1vvHoWub3sjOgL8byNlOi%2B%2FDZ8ybr0E8oJ2I6PBfPLU6qdt5MIHZTlfuGTURu8KQC1dHNv7T%2F7H7NJdH5FSg3a5ltUMtoMqb2AEMmD38OOj3I67tQOcc1UsffFMrWM6soZYOKHe4dsiMjv4swqzEKAtmqKoYZLhPdZz0Vrejkz6Lp0Q7CSizNnZWLIQvHXQuddKSjwX9r94l%2F%2FUzSvasiIqmaofLChEZxBeh6MNHK%2B8IGOqUBdV8BtxrKZZtkTb%2BEx9VxAAATIKMubV2rEizLCukbViqt49eghKR%2FA9D4TBdAYgNkehun026ddd7sc9f9aTdLdYcpgqkvdF5bD%2Fofyq5oGwbu95iD41B%2FefMezHe88hzCp7DS1ldGwvi7IPUhC7RagX6aLvP4dE4iDK79fr64YwZKUC%2B6ELKKU39SAv5RvzC%2BqFNjE5ncRuDq3iPmpac%2FhESmXaWI&X-Amz-Signature=434075fd439953f95522e5b7196887ddc65a796d258f6e9dad7518e1892ebe40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMEEODY4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrX8XcnGNspOObOlChagxw4QHhLVQpgaUP5rz63lyyrQIhAI6vtGmYUML0YSgKVyxD8QcKOufAitLls3tBrsq3UxkqKv8DCHwQABoMNjM3NDIzMTgzODA1IgwZvDMRELdsk75XSIQq3AN4y65%2F5X8GnmfLGmXtiLID9gLdkNobBC9TE%2FfBNcTG%2BgWBwc3nCizYgS9jf%2BSE5fk%2B4lXu%2B9T1kqtChb%2FOUkRG1PyFzyhHH12SbWz%2F%2BUQa6vmfhqdwInP4IwtmWs3Ysj4c87Nqmn%2FlH46h1efJvGtmt8osTX1I8RuwvUeXdUp7QIvi9POx%2FIsYMxm%2BLjBdRFoj2x4WkBG0QpvxMAVQl9GBBXa4FK0WX7jgP6aMlYoVmr%2BaYnM4EHBVxLTGaoGDm3xayZNVait4T4rlPR4u%2Fx%2FC4WxWY%2FxQ6Z8L3K9NIdUA102mQGfTUj9cV%2Bij6e0IYVneT4KmLyHVgb4UvHy0Qi%2BxfkkGuiXp1YCoAuhLHPK%2F%2FgFDesuo489G7HQsg3BjFdaaYHjXcCG1m4kYdQX3FogGH9dLEuXdu5j3Qjo1y4giK8m1lyv035tAJXioL%2F1ZM5Wi7lHL2M5Bl4LNHiJPrM2uPrGYPFAaY5y%2B%2BOkSbcLNF%2FWN1F%2BGkBr4MTaWW7fJJ6iyv5kXVUJL6E04Wqr0gRJJ0DxRpLbHp0R1EecjfkU1Ru2cnXi8JvgNy2Ot2yfb4WRwTM00wwonmUQ%2Fu5XXNyAR5nSnV5795Y7dFeKZYHkN03pYvcU9bOG1WF76VDCcyvvCBjqkAZQ8p3OJH5eM%2BlO6oC1ZXXdCYoF4w8JoHCHk30whLKC6xisKVrFHnRIZB8D5%2BZl9QArhm5fggEdT5vVKWII5KmI2JLi%2FUOCnmSVyl6QJQTzgZfoXFt8z5zCaGDTW6p%2FLbrg%2FxwPQY6d5r09WSYsZRNvTAIi2xwZp0FBgA8V0sESV5yeFA7ggwAo7Vb%2FEpJp5ALd64putrxpAUn1NqLBfd9upPoaJ&X-Amz-Signature=82569e0846667d26396f963bc84b880c05e37ccd6db97e06ba7303562fc995e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

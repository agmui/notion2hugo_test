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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QIJALVT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHNBpJEbAZvliX%2FyoTYR%2BL8xZyLPohjXXiQz1BhhqZgyAiEAwmjSnI4Wq79KNYSp9xgPrj80DK65gsPl2ltQR%2FQhaLIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBDDSDMcil2AfcSQpSrcA1KAe6UDSRzafA9iT8%2FaZ1TlDDlGGKMEHg6WViGBrFVdOSuATB7R6LKd%2FADY20utTFIV94zD1n6cLgCNxzYrA1TrOpgupi0sZEe5JlOGPWXRpktTRnO6RLD0zlSldzNvn6hvO%2FkoFvG44i3IA474n1H5oY6dyELOZgH07pd5pkf7pnKyJIlfG%2BebVuYzUwglOTcabHBtVSlR2ox%2FYbJQ124gqSI1C3zRRTzPz5pAPAnZBPCfK8fSfsRHfboUWN6BcjPuavVTCwOeZTfYxoa3xyzZgBIoSVdYIFdIT2dsD5Ht3RnOCb8jjt1%2BgjamvOTJArdsetKI%2FWnD2dAWg2z1OfOpNEaeaJjDAe3BMiuRJpq4RAMfwpoTIkQ7EJ%2BVRCDE%2F56S2yWBNvXEloMUDL8%2BI5gFf1TZccUYRCH5IZsaWJzOGd8X9F5lqUnjxBjKoeX8XQQsTgPXnn6o3hYw%2FN7QlMWb%2FbOcucIhw%2FRKW36%2F0cxa7Rsd23004tt8JTdIG5ULzGd8HCPr8wGI%2Fs%2BE0xZTYx3H5q71DxChUpF20LlCckdhUKSgfTBF0nADrYfVnDg3H3irVW7gjyiv5ShCX4bVMBQiliYzqHORp5UPF4V2DzPvlp30sJZwKbh7%2FiyfMO6FvsIGOqUBuodKxl7mE9ltN6CpU3T2FEONdlinRKJAtYyCC9oF8hKv3TL48LGQ2yzxqxOSKlSl%2F20sb7WwkLq%2BcSLCJ2SVgmZ2q43PFfxTDaukXC96umsFARI5BUx5l5dnVeMoL5EdE810YvQcA3en9DZ6Hs3f1Uuqzsx948kYXeSdIm6PZqG%2F7jLL8YZgSaa0BPrvf%2FPZqFGdA5eayBjbk6jpMfv%2F6nmP9y%2BW&X-Amz-Signature=44d69b80e4129c72b097391800b8d5c2e01d8be73c150ebd71b81557affc329f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDT7JZ4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCQsjfNObv5UaGwIMfVHQVv93Ap%2Bu%2BfG2KrkiUT4EbPlQIhAIaxOdqWR9TBo9sc59u0Z1yPzd5p2UrNo1I%2FcxmV6%2FooKv8DCFMQABoMNjM3NDIzMTgzODA1Igy72yD3gvX3HSvqTSEq3AO%2B4v6BV5J81N2cuJegNtivliR92iQD8eqYgD4R9rNT9G94bPy2nyaIzZS12AYXOSdII6QFIUr5GO6jVugKqV4xGqPf%2BPBdk6WpB2tQLgxfQA2BgPpOR71czqG6qNxlDMWiNNe9kv%2BI7%2BSbOCnReKlIdhv6sQ6k4AsVYNxjI4Hdt70t94V2XebxTtMid3nNKNyb07e26DJt%2BdXRl3wNzMKTE1I9FPVvPO4DNrBhGAscLNwukQeihNbzHYN93nC7UBOsQaCQRyoyhCGFxzmFZRrOmxaCVqCuPtkHZ0qIZFmrY98Luk1cZ5pSXdFT%2F1jzHLIAzQXHNkGTX5Dr94Yol%2FJjT%2FkW78H0R29gR%2BlenXpFSnYlLz0qkj4NHbg9%2FqTemMuxU%2B5zHv8g2Sm7X15k7od8mfUoEO105Ou8nvvXilV9AVYLaEkUt91ScfDdir3Qv42MNpfXivta4WhfOCJpATdzhfXJF9Tm4SA8Qk8Utcunft6XDf0sKZ4uLW%2FODvywTceayHk9AbpoAwv8os%2FlfyqguGI4j3vW806uOOYt4Wsl%2Fa0hXclsnvavrdQiYxdZFoJnfQWNDES6A3ZXkCjVAs86EgCZEmH9pg2ig6Yb3f7wsJ8%2FaL8gbQba8nPbBTCl%2Fr3CBjqkARvgPOBakmCNTcy8%2Fbxo6rrhO8sLUsxtoPcfGpofZX55kBGgCCSw4ugHne91blfQf6gpzWbJTj41ZN7l9%2BHfBkyclTuAZbBi6t243cMX8N73%2Bk5%2FsjARFO%2BR5QQSoJy8BFNUKWvnu03UR0yU5hoTa5lojDup7JmRjJu3FtAd3yvc6MgON4TVljFo2nYZ1CEtOmBW1O2ViGNruLyV0y1ZVzKwP%2BPw&X-Amz-Signature=8be8aeb7acb9d21950b3bd153bf3b230c65b01620caffc29392b0a6631bfba84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

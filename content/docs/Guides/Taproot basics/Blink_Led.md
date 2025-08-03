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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMM6N24A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIvY7XvFuv%2FH1QCLkNjQd4xIloz5XWnOdoq13p9p5y%2FAiBxlzK2eOlsE8KOOHrs4rHMNnABBj9MeAy2c%2B77qNNlRir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMH30739uSf06gCzf3KtwD%2B%2B7L816ATypVHFJTOfx39UcK1G6RTzSVKmJENNf2oT9ZoS52Twnci2mK5kdfcLywNBGLboosJSOxs4B2CcIV79S1mtOP5rfg%2B7dgZw88sUQQQ6XU6r6rmH5AYguMCLVHq9Ktm99PMPJGmmT4W8HhEV32ipqPH885rwlvOZzsUQiewaLUB8VM0bl0H9S58xfyTgNzeBWUq8k9qqfc4kfeyBoS39yt0MHeCUNY%2By8ZfgPkWddWINLUQ5y4xPkNa13ErLVwhk0VdGVqyzQC9agW4xWJefIWSBaSP5J7h9juJhVk2qsHjKfFoaXth9a0ko5yf3B9h6s6ALxEWtzowLNIo6I58IgNZtpfGau%2FA6T1wkAtjIuZsps49TDrDRSe77m7CzcE6Qr3oR3hrU%2BPcAzLq9PgzkLNuL9UGhVTzXK8nppjIhzBERDS01KCFHzswxsyECbHyYyLI%2B%2BCzbHKYsYyvhLh57uN5Y%2BpU%2BcJgiD0P3wg1vbM0ZggpJ3ZZKOvsrdkj7zvIMOnh4t7qfSrAsyw4YXMemNuAPvWhv71GSdpIU79g%2BJKbe087iGhiSL8hG80Nql26I3ojcZqqcQpDXdvaDZZUPGJnR4XVGFG98lBcGRDXGk%2FV%2BT2NDgPCZAwr6S7xAY6pgFdecQNMoqMxlZaZH%2BHsW%2Fvy7zKybb84n4P7ebwFUL3aq0bj5%2FClMHFkEmGhcp5h%2FI4G5kx1ezqvLoUHsfz1gKccTWA8KHqTmMt7BTknQt5feeWtPJ0C%2BWY7YNytAMc7ZxjM%2BENDzKpRz%2BEyA2hSVj7hMBaB7K%2FmaYplM53HTZLOd7RKJ4SLVgLgvG3wO1mcL5AGsIScwgELv2NP1EwK4r%2BkmO9J7Si&X-Amz-Signature=febf3fd1a8f34ab06be8d9b8c77eb432014772d1bc964be0424dcff56c40cc45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SDQXUQ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHksuJt6Lnt2fMp%2FUY1hPMRF40FoQjfqN%2Br%2FoJdt7fUAiEA%2FBz4S57eGvjxkBwtaKZSFYu206bH2FFWrmGmbLoOJjYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJ7pX7zDnhUYZHGe%2FyrcAzctAk685k8c05gysVn8sxp%2FeU2DViUrHCFvTZTERAV6aD%2FpHgSvf1zsMKaAFKNxPKA4E0cU7LYEjJH8PJIKKKuwdxu6LiKWk2BfyNlJ9rD6u65B33aN9MUpUzfPpTVTekH5V9tiUfcDd%2F%2FieHuKklqZ9bKwW7vAY1t%2Fuxo01KFNAddwAubghvB18Ax34r%2Bymhyhb2bTpshqeJjbW4NjycvW4xXmDLnHV5nFA75Ozx6PWOVstz4g4TW0qDUONiXzABl6nUwAfhL66KIdmddwtETyMhC3b5dBQOsr0vTNy1CzOAjF1mIhZy%2BsyVEuafyAONzcpz%2F8wOXMNsvw8aKeJOrMwTd0pJYlGjjuYOzJF85XeZJ9hZXlhBgfZ4YZryBLMCvdwsxXI7SsO7MyAOAakXMNdSqdi5ZRfBO%2FD64Zotl9YVOMnOmLkOvQGFhdn3iv8dw0Cj2tDQO7yk1YteELZqx5cIeNcgqP7zj1REG6KcwHh0l56Cl%2B5EZWZqZ91z3QcsFdlcnZxruD1XftNwzKmfoZNZ49%2BzG0ACFJH2fH76kKxuZ8ppOHw4mAeAPmTVKBhbF0UJsLFpcegPBmHXcpSvF8XUbep3LqpYairZkWuGktA5LdLzkVDawN5YdKMJmmu8QGOqUB%2B2UPkFI9RCy1GWjv5ttZrzQvD8t5x0rKoOLHfi0cae0KGmihm%2FkNWTLH7dYaeaUV2QdXrgNpCv%2BWBDqqgjiQ443C4%2FqttmJRFhjms3VFHjmGz7x5Cpw6biLvB%2FxUp8ebl4Cn3PeTdRe9raiEnRbO6mYZNRzuViymOpcLaD%2FIX8Bp5wIZmis%2Bi6RY199Yijom5CY16ZsH3Z2M%2FcXEHcHhsTC054hK&X-Amz-Signature=f3affca23b472b3ab9ae8ec387fd621975114576c2af5df9723bf26039e4c8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

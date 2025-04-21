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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667BL7W3C%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCqfAy3R18rJEdNEG5dblLFSPKT0epKBvzODHoox%2FXh4QIhAIKYi8%2BAT7zksKHNYBbDNeG4%2BE%2FTlXilOUXYfWJqTlIGKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLs8t4Z2OEv5%2FQMGEq3APZ%2B9rcVLwjP2djwYYcmeb921CrT1gQ6bNXM2%2BUaTx1JhsLRBWlin4a4ajmwvD3ebwoAkHAphHXUCZ%2F0jhtozfDoGaaq%2FkkK6jtIuox4B6I%2B6qiGp2ye7o66l0MYqI58M6bVzuUrT4mdH0lurHqBJotKpcVbyfGsV5T2reV8OycP820NmztxMCKuzbG6yXCHVbACjqoP2uMBUvRSMOa61pYuEKUFr1IEjwyXpR1IPKz5%2FRVM%2FDVlGHfwr0vdBKcWne5c1TKqPqbbSbBNzMmPZ7k71aDp9tlf%2B7E7R5YX39zdBF%2F6K%2BvRCsjwqPV979%2FpyEt%2Fgpslw7Vc3t65FlNacPHPg4e3HntTVzQRGU30XxQsxwVXO0TAgdh3Eya7R%2B%2ByyG4DRmrdZtXjFA4FI5qMQBk%2FmwKEYPIjaLpDaVyatTvMNNMbbQPwO9ynGw1XMQJSOLe1d4hHgf6zixzcYQYiiZ%2FKdevMk%2B0WR5Mw%2FGF2QfG%2B2u4WZvhoLPYZxDebtF%2Beh3up2gXl2C8fAXMwXUUXmHDZNZIUC3lTjgTP3liMgkNSFe55Kgk81UdXfdkIjiE%2BZwFq3DRBVHLlg9dtDOFFQuBJDVpowJ9hnc2UJbGnQSs3VnCghluryL5LJmcozDBupnABjqkAe09ZfL%2Bl93GifppC64lFYWX2yHpdUu%2B9s7DOTz%2BiCcSsyDBMIO8Oxa%2BWKEeFt14wei6nVNwQiJwqugZvgqQ9QqQfMlPupnI%2FIsxVk3MmgyBZORhfjmug9ZwsRkRg63YUZQc3UFPwP4lASo2ZYmrkF9MMXxzK7g91%2FQdG5Kd2iCrbWImMi8mn8YATqSdo0YnC6SmelSMyYZDhCsxVUd%2BwmKL16Oh&X-Amz-Signature=e3ab80ea24322166d7fc0510cfc84001c29908d0cb20a308bc1ffaedd5e6c700&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD4AKAC6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQC12PM1gNkmadhIvUveBtqetLrwj%2BAoXWGHXBt5U2BN9gIhAPuY5w6%2BazQic4iXil11LD6JObG0KBjh%2BDWdGJCk1yGkKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoYgtQaj9H6EpYiUq3APjSTDZsbz%2B1B%2B5OOOhO8GrJcWyxGEDcS53vHd4CbawW4rYDuX%2B5zuha1RWTVYW9g7Kz5H75AJt6AQt06IUs%2B%2FG28PkVO7pVHPGG1WE9%2FmxvRElFXlRBANFkv%2FXB%2BxD%2BwSZgYEwgxJ0lU1nZPKAYzoEornlkdu7jQjr9auSG0whacGTz44MtguE%2BovQ7%2F6M3ZtvjU1hh2gyB55rQE9hBDpiYsSsnJ7Aj4BWN2JkZzaw%2F7NKA8AKcUGvFih8KL9Ocm8xOSEaRVVtpNUC%2BkvcVyZCAUrVVdUuywwgEjwNK5LHbbS8pBrcySFYMD8iLtasC98PhMnCP5ZgW0nlLEMgQ%2FInu3uemSDIp1XjC9YXdeMlRwqxK9A5rjD8rE0rJJO8pa4VXdoc2D%2BG5ErNrduUy2NMqhEfJcVeYihFioTWp%2Brt3f06XD85xFJKtyfUmqce0bBmH3Sw4sDCui6s0mwSYjq0TVa0CuUgDRhmp3Vvof%2FK67l%2BOz8Jel2X1w4Q2Q%2BIEGL9a9KVZwCK6CCmBWqEpFbKdckHDS%2BcXFP5uLfWpBQ%2B7S%2FceCZFV7kpN7fk1%2B3eejK8xMjV8YKR9iGdxwc65htJrMXsvo7%2FEPMUzNxv7RbtLZX68A4m5XlSzOVVGjCIupnABjqkAb9ja8ogyBT5Y%2FglAsFBc9Zpc5lPq%2FTs1c9J4q6JRCMfsuDA98oGOZ5vKfgV38EIj%2BHKixgBCfZqfuebNG6Xziq5af9pPHvpkRnSqkzWV%2BYVgwf9UsTTNpc0GfJQv2y6f1tSJbSCHs8YQf45DsuE7B2TTTj9%2FoUU6OvTWDjvw5zpHjDdIVyEd6BaImguubsgXqH12ibi1fqDRSddFKwBzC2wkpa%2F&X-Amz-Signature=8a5a4688c8a164202ef6c3fcadbaff3e38b3aa970e490a88e5dcf224386d2a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

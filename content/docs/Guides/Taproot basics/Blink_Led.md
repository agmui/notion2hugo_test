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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LMBIDRN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCID97FCcaoGOOCszTt1gmR0OK2s1%2BV0%2B4bXKKie6bx1WZAiEA4OrugZkSY78WzHm1vbml%2FOoIg5%2FSGjwLAZS5G6kDmAEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPKQsime19hyi8xQCCrcAxw7fOdNLfJI5TzcF3tUslY7nDna3cNurEoNm4iT55y70rghL6y52V%2FZb78cxGIDo5VG9Q7PMO5qnO00nT%2BuKpJxozJ6VFyARX%2BjZUqfIEFhhXloMW%2FryZaCKO%2BXkDuuATooKiG7that7plM9C63C4Bq2b3hibdSBPzrnsAGL%2BkmnognQYtAtEQT7EXly2sG%2FBCXNDx5jRAuHuxQzcbLCZJK2jU%2FBiFg26DdOYDepmY5fqQLNLPE3FwCVhmUW%2Fv0MpuCPVHy4fnSKnuUDeitUWS%2FwwIzijMVolIWPQJN15gLO1GyhU78DwGYKRCaSPgfieY3oyHfaMtORyLqpULLwBLZF3c1Z7%2BQm0flkpD5R403ahoDcFI1p%2BlLsty9hF25NL8C8Zfh37dPWp0cMp6anfYG%2FyX6cvMFP8sqGjyWtuRNk5NE8%2FnMX9w5ZG3UCUWU%2BBj4sH0v89stl%2Fx4BS%2FORnb%2F3yYYQT67W1hF9Hw3kqEw6stqFglJ6dCDqmWOlSll7CxY8XM6dO%2BHNe1IuVJ6iQDgHUfPzNBqH9BVlTePpnfVQcNk8xmA02vyeDNCKFTONddr3XXRdT%2FZC%2FETNyB4%2BCFdTw7TRIYqsJDKAKRc6OGuATZZ3Hk4%2BVvCipp5MK6cjMQGOqUB%2FbNfo2fB7UkCxEYZN%2FEhPb7spZkuQP%2BKOnShhiMhCZbm6fVrmt10IwCyI0X9K4%2Fm%2BUxCyYIfRf4BwMzEwI%2BNsnfP0xBHfcP1fS%2BHcyuwU0Ra%2BipSYokCjfoh%2FLDXI9hWqIXu56RlX6qhoHXiHuQlg8UNZ%2Bt6je6hj2tpDaGNXFL4Am%2FLLD3%2Ba58zAtPgrt3OWVwjnBRQ6hrNHoa9X3KZ%2BCxm7CEa&X-Amz-Signature=fa5f238dd212765b224af6555b48dc273555ac5bff2f3a2ee936a72d2a61b030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RK4VMU4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIB9zKZGeMISue2%2BExrIiQASUjbHJO5wnUxQtB4AVzyKHAiAUhHXeQDC76xMe8Yd2dJKpl4sCNuZb5Ui4YzYwJISUZSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMEvpRw8c7a3xLFZhAKtwDkTOpN1KhEEPW2ao3xi5JGZCR85d3W63CJ16DWkaF9Rxy1KMWmXMU4yQM60ScHO%2FUWS4%2B6aT3ro8F5MwfITqkuDOX8VTWtKNrRB6IA03PTXZZrHRj09rFa%2BTiPjTV5z%2Bf9tt%2FeUqyle7oxc9xvthlaAhf%2FLKIk4Flu0qp9XNw4Q2CFKM67zmalg9r%2F5Mqn6fFabpPV1xHypFTgZ8iH0P1Esbma1SDLqSq1ZfTWXZj6Xv%2B4fMEE5qwkawUOnuSa4Wx77TWqZrVvKrmtnNIOW5LnI2IjodE7ciusNy36k3GkzQG7BJ2fEEUz%2FIq5SQnNLNczW6OLgSN4jLfVD08DUu2lcVVbVtMDphE%2FbNtj%2FBLk3mGR1pSqzmTZNYv59VCbM%2BuJm2lQpQt7pg4MyZBWdVqqiscgohBDpnOuf77OtdWekgT84oRhq68cWZ0zoT30Vt%2FsvlLmpwed4kIvYnyFdbPQTokoqrSnB4mK6imU9cMGCmlZWu%2FXFlrFGCMZGDZPNE6diUxtNJE3hK2zDqV8oXIHc%2B%2FvyrNYA6lBBWigSbePgjDCrKRcyuiomZycaDHuhW6nJl0lADGnW3gQRY7wH%2F8PUFNp3C3Gb5F4cwI868KQZWq6sxXu4GwKPVIdr0wzcCMxAY6pgEkLe%2ByvT2POkWZgkWUpXuMLmqfkJrEua66MEMAeNvzI7CURCMQl%2Bb%2B1Ca0bsD6wdbj%2FwEgLWC3E98BWlnL72qs6kgkBPDPOF%2FvhFYTlUgliorwLb3Be9jdfcb8xNctA47%2FOiG9EsvuiyyX3s5AMzdQcxnKh3FUqGhhhpQHz%2FQC9HVHh5iNGvcreO0dARID6SO0YHnk21faR67%2FnmHKGwZWldyPIoMu&X-Amz-Signature=decbc9f1763179341b4cae100724392423f54ef33f28e8007653ef5e912c1240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

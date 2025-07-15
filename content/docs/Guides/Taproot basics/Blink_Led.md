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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YBNRWJE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDpfqwLiQNyRAJ%2BmdeDLnGlKzVvSUXgmn%2FwGVLuhWIRnAiB3%2BzpFWcomhdngFpbWv4UOb6Q43EuXdKVSyX%2BrV5n2iir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMgxNOOYIBoDg%2FeI3aKtwDv16aUxGZlWZ8shlqL%2BXJst5mtosNmQqkvVH2BfAJMWlcpNGn1RilxxupW3%2FFE5sNdencNwIhIg1e%2BdnCYsPsATTsJFlw6JJ8fD3CjRahw%2Fp1qCuQZ%2BDNW87dtPNrOgDHUqVpl6qfjb8%2FdhRxjIh5LUNL8gnNPDVwXFWo%2BST3UYkicO8DXYIebP4iiDaMXxD0HUlxc3Am0ShIW3d4avq0GFD2Dv5vZPnP5T1kkj%2FqkZGCSHZv1DLCSO%2Fi5QkcdMwIcY1T38a652qoz53QD43IMcFdY2TWMVR0KPn6wDp9uWrtuTHkvezFXpISByUF2%2F7w3UvlXnSv2cC7lxScdmEMAOgiyRgxU80v%2BedcoU%2BfHJgkzQHnaEiVlE5HVVLaa46rg8ixNOBOLbKkfvKkjYQW52MTs1QfBMfifd98hMgW7zbn%2B8ZSPkZ84XW8vN0qHCkv7A4HQqk3RLyOUxie9pShgUW20bzgXr6NhfYDBxYQ3wVNr19%2Biq%2B4FviFD3I5d1gCvXEqQZFO69CeDShW9%2BfdZgiWnckGqh6you0FPZ7h8TfNHkssaY3X4NI%2Fm%2Bc1BvGgKJtcQMYH64H5KhecnoVhCGiNj1%2BcuOfuLg4clih82HRWqgdjZdCslQKmaegwyK%2FZwwY6pgG%2FKaFU5wzdYu%2BguqSglk6QyjiXMKwXdGVnAcAUxaja1rJKz0zO0CziHMcyfjcXTtpsD8bJaaGPWir2Xv0IB59jdvjcbwqA7qhAZ08AB%2BHZZCs%2BYhHYN0PFRZJynk44XP5nre%2F4elPXglHOE6sMDLsUGiXNznq%2F1LGfe9zq1eI0TDzHgknj9xMmU945HJqlSyDTwB43BdzVZgtImOyOLhnciklk3sOj&X-Amz-Signature=c25b788055499a694e71d3fe75437a351ac418a2a487ef1a4ac6bb29158f29ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U6IT443%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGWev%2BHFasxef3zYX%2BI146Tu0rMw3RHRo6ACub6t2c5XAiA5%2BzmXFzG9mEXaEGjjfAiS2Z5ktlNX4r4A7b%2F7cU7Gtir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM9JQTZFE8QTN4iBHQKtwDtagFdoYa3n4uxr%2FgNhncXEoOrj1kqRHGWqu1rcGcLQtWutWAmB28GLj2U6MSj5yhTHkqg5D2JkhL%2FioP%2BvoAzMhbn1TFlKh%2BFW3T0TDSlcgkNrOx2iuWj2PHxZapLtz3c5PhzD9lCsY7Pz9MpZEHCk0beDE6uNa1bbePJscZxok%2B%2B%2FiPa57umrQqKXJl%2BD0K1B6mIg%2Blh%2BqnybPtxbt%2FD%2B73a4keT0uxyfa0DGZ3Io9%2FeaVqwjlgT2qJ7lRf4FnSNci1XDGyscfWyriwNq7FLL8rgPxjmHV%2BtLkVw2V07E95jdSrgoghdwY7Moc0DzFcb5mRjFBqXnx3M8Ci2yPQnDI0YxJPYDT2AHhS%2B%2F9Gkh8bu%2BZqSpOoJKemenTrPZxugGRvn7rsBdiXC0aVjM3pN7Hb%2BiZ9upJUPo2MwojDIYArg3vAB2iPcHKh7PLKuBzYYsp8IsAW28wNqyNhNQCtWciseuP8HdVjz2xmr%2Fc%2FPzFM8P9E4cOhChkWbR3ayq7AN2e1CLLrZVK%2B%2BKA1JA3r7wEvvDM9xGJWJauEQKLHee7rqfvWFpSTlEKs5rYFXXtSZQBJeKWsDiZJwrUBmIrYdwT0Yc5boR6G8U90r2METuPLEA51%2BL4UipqvHyQwm67ZwwY6pgELETnTSklGo7dRw3sp9N%2BOWo358TLdKn8BSZAG4C%2F1LZoUkouL13iaJ5xNkccDOqCNclF5Y4BqTY3VvVINc0qWlQ0SRwDu6awRwBuGlg64g%2FjWOBybt8WxrDojABjacqoZMa2E6gnGVwNHHO8RB%2Fzf2dxlZgpV4MesK9ya1qgMxll7PK87z71XahBbyLJwDrT0DD7j%2FSVYalRB1rvSqaIVTKuMzVjL&X-Amz-Signature=682cad7520a6e3684aaa3619e25d0c25c21eee95ddbe8cacccf20433b0671fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52WBREB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk8SJRXiXujYIuUwqUTOv1uwaMlNOdC4UaNe%2F9SWyKeQIhAIEoYl9ApZDvq4ds7JmABtohIIM5VDS0qmagQq9RnONIKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5nZjfw6BoFCN5osEq3AOBwemOhoCTnzzLB8Bu1ZmlVrjj%2FCOqJ7VexMJL6gD3ZQgiOGhCKztK8hTA4agDw%2BkjQYg0aDDMz716HQm%2FvmTRnPaFn1FGZa0%2FYOvRwZwNF5ADSv31mC9lGuHXBXko0KUfQuy7lNnhMMWRhNeZmyRsWUgTukKWagMLQ%2BXgUXdzrKLnOfWNyD0LxTnAJgbyBGGiYPL9ejPucOm4RhbADaC7mxC8MUwLzAIKSH8vvtaGkRMPv9Do7bUCrsWJ4J6EBkzAyan8DmQlVPWI8fAsLwysroOpkKaY5l8BtZ5RbpqwS18%2FxwaptfW02saync7%2Bcg45hKnamOyOwxi0rWtY9H%2Furv4m8GXDMDjr7XwaJnv2jSoZpPmbvJGZ2bwxmmLqoP%2Bt4OysD%2B66b2nHV9NPukv5%2FKG8hHJ%2Bj4DQGeA6Pvu38n%2Fc6kZFRht9d0baIr9NqaHz26QxmFY8txuEMbGf9HVhnIuu9eDslT5%2BSB1V6IW6s92wDcoWVEkHNDS%2FCLmwUcUctzgVJhJEJZM%2BRz1KJDQkSQJSJ6AFOBEYf4napOM%2BBjZEOZz84f5WpoorcN2FA23q8IXSvcNEc9qkj4PfGWK3d3rHmzjqOTQOMQIs78A%2F1QfroAkr%2FNHafvT4cDCqnLbEBjqkATc2HUe%2F6Hs2IcAkzsqSKmPW5pUA7bm9XxL6JtZPLCFVA%2BsgNNjt%2FDpkYx1cBXf5ebQmyHaDraY1nL90LhQhLYkJTOGkHy19BLdzFm24hG49U2KdfE%2Fl0zaJZFoTRFzZJyJdsjV9zsDD2rVS%2F9IO0ar5wWES0Mi8T%2BJXB3p4EGAqvHgBfO1OZ3mi6VdS4Jo10utj0zzBU%2FYjaUQi7wfkRv9cfVQF&X-Amz-Signature=b10a870b6f4024ccd25a18b222ca1db82215720a2b935adca522afa37e0809e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPKAWCT5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZQYyoAx5vJ4Dzjrjpmvf8wQiGjCZOOKwXokpF%2F9GW6AIhANwiU%2FD%2Bok04Z0ywuarPP2ERBAABEMAYxLinLEWcFcu4KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7LDTSxRjCpi3s1%2F8q3AOupeniBc5YEiIE5Mkkr5J7CHHPTppoNmp3c5dX1yu47gBNj2V6Qd%2FSDTWPIrKGjaOtg2njE5pk%2B6jKCOXYvMM%2B0ECDz6PvroNUoW8Lst8cfPo9ce1iOWB6aZqc4IlJqUQS8f%2BHrFfQ%2BuHDZAMGxqY8%2F7ZibOFb6Pab8oVt7mju5QJUPLlvah0tvBL84SNfpFnKihELfi1%2BoHUt9l8a4YoxCW75wcc%2FsWRp7nIEYEUBk2rQUgZr8jXLPbajUdr4fMhH3SApcbx7KN5KcnfRKZnO58sjM5ERVT4X6Z8%2F%2BHF3ZD%2FTfial%2FkZOWHOcX24R8OatRjxkEN4Q1bPYCA%2FAvsPR3NAc2hA7TgHCN397jQsRwg2u2sdzriQLJkmAAqOnI4iaSsnFJ9MRZNbVF9%2F%2FN2bHSvM%2F3Gh4LRCKPVVtwwpIwnu%2BpnpYoDgeA%2FZCOQVDmtdE0TjKILI%2BqQtqvv%2BJgUuVhApVaVzuxNsDobNZ%2FTvJyYAGK%2FZH5Hi6sLF1tiB8UxhLM4HVp7OCCWUDkdBJJIbtOJFVa%2FUezhbuMSn%2FONdxIcq1X4QpkwvAxdl8jmsAI8K3njRr43ZHusO0wDKCKwYhkim2Xqlt1k4b4hI1hQ7BMiPfW1RRGLgJqQCehzCtnbbEBjqkASi4ziXR%2Fl7JhVnHhA8V6CwuoTeBh1PpestbS94o5zbYLXHVVWfabuCY2uBf5uGImHfRL%2Bhnh0SUBJKNFKfStnlYOt8KIwo%2F8%2BwX4hMiyG3TVhuekWalUe%2FLXx5kD%2BvRxcRlMYxdPxjhVvR%2BRn9Kw1eeJ4HknKrxBlMs9%2Ff12%2BcZmDgUjR4D%2BH17jTZIpZNtjOERdm31hQbWW%2BwHHs1G0EhFv%2FqZ&X-Amz-Signature=f31d5ee311045618338065cb4d493d838ab1d756182373973fcd9ae38f5948e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

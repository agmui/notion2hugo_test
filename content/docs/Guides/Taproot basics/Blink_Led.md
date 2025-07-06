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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF2Z3IJS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCm681fwqUT8OYOnqWX3%2Fy1anKKoZDC21Icjbamtu6ZSQIhAMp%2FFFDXhNFRfCa0Bis711N9CF7diV4R7T36YNwKZsJpKv8DCFEQABoMNjM3NDIzMTgzODA1Igze8%2B%2B20E17t8zIt1Uq3AMjOJj5iPhDw6BFWVJLn4hDwSr5LxrjYzKg3jmGwhsU2nNMnJF2c1Iw6DGgfpN2jqmIKO5foh6QyQtHwa3aZw1mUgbjchVGZqwsf4Edse86tDo5YKCP2Fu4VS%2B6LpCYZNCD16c3GyryXk9%2By5u6T0sVXRPNbqccfDDK16g65DmMMcRw5B%2B%2Bp8NldvLjOorKiFN%2BIFHA5Iz4tPssIheGnqt%2FSPyQeANFeNzPLG5U4utj7vjQnXhYaiAzs21d1fFDlkkfDptioIp43HUkn5E7Q17FrrfdsTIADwJansf8UeEUeU0CSEpRDBH74ZeNris8heCy6ikB7dhJT8h6veMaCxLCp0MLmlk0%2FFHTCJ4NmXam%2BEl7smlVefxtEaQ8lDNDKe79dX9NrWluBG6lLRBHoOTLsyZ%2BXMRLbB4gJgYXG4OgwwsiQfdICstZXaIGfquh4NFcuHhsgKAgP%2FL8lvikUePLSQwzaX8RFSzpjzAQKPw4HgnTG7iASsFHsFD1286XbxBqPiHV9I6WGaTbQq1owcSJGY8uWDnoPUSnjlBs5XOcN7pxR2C33YoYQ8v9%2FuxBjoM1xNZ32s9e8BRzS829VRgczK19JGzu%2B9SpQlxAcm6CP6de%2FUy%2B5qiWHZqSxDCVgKfDBjqkAd4gX3TWXXXv3oGfbI4AQi7kN02am7cAuOw%2BSIgLmXKW7xjRti944ZDpecrX1XkqsM3wGuFEcSJAvxt3lIyD3SxPRRzIQc13e8n%2FPgyw4ZLuGcWUlRkIhPWhvFMtEJ2bkKCQxVRQg%2BpL0ZL28ZW6R6XIdA1l8JvWLQYKGP6XCf2Ue6g4Fv2ToyC%2FlDuyaqlEE9Omv5a5em5Z7DN8gitJkvgQrKIB&X-Amz-Signature=43ca958095ac87a184e991a780e5b5797b8607022f040060cfa4d736ceb3910a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636ZO3NRW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCID0g9QkVk1dcxAlBVvLq0COUUp4e0C66%2F5cZ8pCwRIPeAiBQBqzXtocjqWDOeuc2WuNEtJNpp1rA23Rw0IaOnKkEvSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMdz5dMxdVb9p2EWwlKtwDF8DKz1lXBkATJ2yNQvsCrcpVcSZlxxLvs8mPOdlAgPadDa1YcilBpCyByPdhMNZw4oUV5ZWPRP4ql2KQZ0eb%2Bl2VSifGobYGGl70poidsCd1gSXoiLqxq1bxDSPvxkO%2B8Bj%2BNYnpmlK5%2Fb9VEZZgi6kfISgmvcNtB9wmOrXBRP9kkf6Ya2Nib2DEQYAIQED7h4kF6ru4C6GLh2FfcghuiRIu7pLt9dTNR%2FZ8oLvmI4U5f2EwEP7FEaFG7QU7xCjNOdy%2Fo%2F3mHZsm%2BQpt4SIQiYcGoqJZFsxfmQwa3w%2BzAe7nfEyyaut3lBsrOuXTf%2BuWKarbla8wcqvfK2MykOW2kL7fsNxVb3FQEFLCXkP95No6P%2BONiNRtnF%2FItkGOmlQoOneb%2Fq2fXeu9YCNknR6cmvE0Lc%2BxiUrQV6rpjVkZIjArdu%2BP290913py7e0blnKb8wutWceXE4Wc58wf3o7vnCV0slWrr7NqfekHfoMJXgYL7e0P3ewlAz8pEsUL3QuSbSi9tryfT877nECLgU%2FY25FkV%2Bs8rtG%2F5jD%2Ftixx4Vbak64Ke8Zxrcv2%2BbZQMWFkEiv4GwgfTb%2BWs%2BYrUZTy%2FuB8JviAlTD1%2BQv%2BfBidV%2By7%2FMVYZnhqfmsA9UIwp5CnwwY6pgG30aE2%2BUZLP247L06IWOnlBAg1X30s6bGnkCEspEKn1Kcj72bkJjdiMBghdgwVVHDqeIrxNyYp9M%2FTtgmZTU%2BydwbsRM5r0oyxS1i1ajGJnPJJna8BBWmqTrDDpx97verEDql8DYtX9UOU%2BgBXyMChpO5abhHKjImZ8UFj%2BnZK6MK9Z%2BL8ET4Hrx2kpLkvQrH8RS0nb9l%2FDkxVC4kUe35H0N41ru%2B2&X-Amz-Signature=c0eed5cca6af5979192ef8ba0590ffe69b176c37d8ab1a19793545e4768ddb63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

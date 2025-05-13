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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S3I7GCD%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCyjIHAKQVTtmepY%2B9YD5IrqTexMmTYZEEBG6UCYFyS6gIhAMdqZNj8qFJ23167NFPXPixNyq4rRl9Ge3rJJ0fPCKUnKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNbOzJHiWVRpHqHKIq3AND84FUnH32EETukwzriGbGFBmlu2RGoQaI5Wyx3iRrPPMj5cp7dw6PG7iraxpp4P7eQWeOLwxvqx8%2FH5ECPTyv6eRqLHZ8jekGrHTHTSXRKRzw6uvgzH4WTG8qxnZIHbd%2F9Oh2XulFwIVmbHTzqH3I6QnbhtQMsq5V0naYZ2GYHfXw0AdvVLecbhm4tkm8KhPffLcTcg25q2SVmi2cBzmpHChw6bw42c2gH7L18jYkTJokBegk%2FIhXjEBAAh%2B4cYFZwAxUgX4UjKaZk%2FWpNeKlTIUz7mKHc3H29JpWoHLCMXDXNhg6DQtdiRYL60AFJXGPPTra02keRQ3Wo%2B0mOl8PJ0Z2XI2nSZajQ2fcmKPRJBOMKm4%2B%2BQDd1oOlMa%2BZatTCNB9zAER4KTGXskuM1emjuMeS1ZSxU3ywfl7Wq%2FrPl4Qq14QlVgyaoZw4BLXwd8tozIBEZ0MVsQTIVrv8QX8DcJwj2tJsxEz6xghKEwRGTe%2BQvWLZdyE21rhR6VO8kjvh0unmI7IS9bb9TgtGy%2FeWZLrFnIE1yNd2aQSHoRfoThKymv4ywdibQxLrY7aK0iToLS7MytVKayXlsPoEK1sVs5FUaWspmxuKUU8vBJ4R94Fxvz25RCDcfuyd%2FDDJqIvBBjqkAVKossSFPCI8un8XtaJJgtijIp%2F0gry20%2BGj3pP7a%2FRhbh3qjxO4rXYXVRF%2BNsZkfXIo3IsFjL73ZRyHXh%2FoV1SqcLIa82SCZQ1%2B7OK6GQG1YE1D23%2Bnpnt56wP1dP87S%2BNxX5HyX1Qe7X9Bid%2B80FXIvmFUBERgrS%2Bv85BbI0qQ0dZ%2Fry9svymxhXU1n2u%2FAilt5bdvBYll9avZEz2O88qzZrto&X-Amz-Signature=ef4940c98579dd7f0e86be1f1242ba146173ac5ea470df9649d040a8c1e0de9f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWADQDX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC1rNgv1dR%2BJ9XC%2BCrhwTRHIl7lmZTmh5wDPYmf3To04QIhAOMiQvv%2F6Yu6%2FwT7BBME7tJyseFANIvK4kJZT32DYQVQKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIK7n17ws5nB2x%2FO4q3AMSw9NPpaVRwWqzb4EvYXnQqK3eDwQWyqrhGupufU5xm2YKnLAE8cwZK3pov6nAaJdk%2F3tzTXVWQKdDu5QT47BReacF8qI2yTwiiiMCr52YuqU%2B%2FhHSnUGbT%2B5mb09Rxs2D7FuFTyulWx4j9%2FNirgfYcm7IsaIzhSQfpS9O4XFSC4euZWrW%2FCHdiB2EN0ctgG3qcQmJxso3NLgEK3%2By1opFDf5Do5TCDYk2tGbp%2F5VqxW8j1OmJNlQF623wPtzGPH95pFEx7askxaztFDxMFZ1Q5ZBONG%2FsmFMTV%2BP1WrdkAl3RECEJpYKybwtc1Q4XUx8Qv1YWFTBgWS2fw0o1hjpjOQzzuazVrlpJj%2FOsVwUg%2ByG7D5hz%2FIdjsus6dJJTBvqBzh75prAA6%2BOG%2BWmWaLoaHNeJnuM%2FXJ5JugXV%2B6FvJY9IxXwsumEXdgOGhJy3w1J%2BRleJvXk%2BwpN115u7aw74ckrDeXzB9nNEhubCS21wkBuFatncGkYDP4ZbTreDSS5tZwh17ymK2VewRDpoY2NEFK54vj8K0CaYBK9WwPIBrEBCXSlVnjU9qlFZCZKxy2HOttCUPDaI3hyL0qWubC%2BT9qn0cD88om8qa5FEebsHvopDj7fHqsK46xA3ajCKqIvBBjqkAbd23scwcOSfWIILWlxt%2BqwKDTEPnWFrYaG1GW5%2FHhtQsMrcUFk6obHQhO6qhjfNF%2F1MAtCP5SJ6tt8kWIiAKWZm%2F%2F3myqRdrTja3U8xme9GZH3TUZj8LOw2HyDUGNsQ%2Bsm5N%2FnL8%2BH%2B%2BbTh7Y6z3isKcfeVHax724uBZ662gVhHctLHesCgFTAsOKwcr4%2F41h2UsYtD%2FtMiKA03nVYBfz0C3Vd6&X-Amz-Signature=3f72244bb609520f113456d34a5e4e7a5dcc0559de72e1a31d2c6b6b304c4c52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

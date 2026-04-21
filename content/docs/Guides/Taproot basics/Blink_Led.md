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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ6UGUZT%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEv96wq5xQ4KYtJLDQpVsqdITRW7BNPEdxj3XSrX9FbEAiBj9Bny8rQoPHcUh9TqJ3aw4QxvgK30LSznV0eZo6cyYSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMEtxGhHqSj2xS5hTfKtwD%2BzY1ZzkS8xHNDl1TEDWQkPWNMckRlqiG2dZoawaUf1Q9SIS4%2BjA1FgDrBRJM%2BfctWYG%2BbYGAI2Qe7FNfGGjmFij%2FNAXLicKzfrvGDY%2BcG21k9wUAepoS3ea5sM5P45q60s%2B6UgtXrKiBYmirNwwyU2T5z3uUF3GK8CGAD%2BmEBw6%2ByzuTVJFoFs0J3AkbOLWuPMkp9AsEbAkjVRX%2FJmUw8sMIvDTG8j7csfjlewkorX55U7RVdeb4hkvQh8an1YzJFlt7wy3kVXYcPe6sQd5NSfR%2FhBSjFrKnOTivzxb893m%2Fk%2BYmVx8l0nUd6j4mfA26qjx8PDbf%2FKF0E9hzVBRwss6G1bZA2d8Rmsm9JMwX6USyBWzAbuABceAbAY8R1Bi6J76kViRQaQPt20TDgbh8gX%2FkPvzk%2BpKhPSdNr0qu1XNjtOnJ4er%2BQ%2B7%2BcOGMu8%2FIPJqXOySCzkuRK8iwwgD%2BiKEu171yM8zgzNzW6%2BUZ9mlr7ixJuqW%2Fw4OVIfVmqCukLlFoSeYiWdXravGZdneFCdZE62TXPuo%2BtodGD8lZycmEfZ38HAgx%2BtWMVjhz58Ug64xtfZNqFpazzQYjKxySuLEOYHzP4Tk66Cilc%2Faie0oWPmzNtxgqHTrw3XUwnKqbzwY6pgFyhMgxtUPlImDngRIjGAHHxKzm4pgu4uFoA%2F2LK3vRrjZQuhAxTAa9BzvLkBqxyGizups%2Bzr7Z265eDweNVOZkTun3r3U%2BlrVwIB8VcM9A9ir7XJlv9JhWbgv7GhTG7ioaziNB8P5GucTmm0qNlX8dSI253mOXfJOO%2FmJTN9mjbPg02EfE%2Bv4DbKFNwutBKo0J7ZjWDqya4SRRneD1yEGXqYofZCus&X-Amz-Signature=22978033bb3ad9b876d35aba75d2da7baf52c0cea30dd4c4723d94715cf9e4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3NQTCUV%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCsHom8Bv3nJZQz%2FSW4x11UK3qsJb81w0ktmi7EtpX2pAIhAOjrGffCJswMmBe0vfrocVojERxm4%2FHdxg6HKlimybCoKv8DCCsQABoMNjM3NDIzMTgzODA1Igz24q3avWreDfNq%2BKkq3APWlZDtRrxFrarZDTEsJAwHqJNQ%2FOhGKnmQB17ETiFVOy2LMtSCoasPR7WnJcxb%2FwYcIJ%2BHDECMLmt8j%2BT3JE%2FxWarw3Y6BVxva9WSfzes7BDt86FrNFuB1nBLc9KtgNPmpDa9qTwVAELNGOw5GwIgcqS6WO5DImVDJ4U4YMF2fUXvZGX%2BB1%2F0fRwSELyVkuhdERJ8JKjho5rynBezocOzSWcN8M6Aaw3ZQpTHLHNnbtnYgtLx9rxeS%2BxpAh82bJz3jAO37P5oT4t2VmnfiZT0Z%2Fi4eVvpOGV4iwPefAxljNIDfm53D8VAJeTlACe8UQNZJq7nx3wnG9aROWekgOGcVBNjPolJkUsO%2F0cBxkmVCv4IrEnjoulC5PLigMmUS6WDJIlRgoj2MV1VsomGK35ZJsZcFSZALkbUyZy5u9Dh1NpLxNWQA2Ki%2BR9d0BiyHRSWcW2%2BJPGug%2BBzA3BrhoLRBFjSwYJEOfqjlphi37rsHVEQn6d47e50St4Ht75NidRhCADrhQ4QgIG2cfEzfdoS1ZVXjJ%2F276LvffPZbgxNpLpJmRhM%2BkFYztDgUpe17AcRVOTXozcYchbI4hy3gih458dojjhg2NjztGgOepVHqW2lJ3yciSoZQf%2BG%2BCDCoqpvPBjqkAUoJuY%2BBefSAI2ulgf0sOJ2%2BReblcWyE3brddSeVyKgewLJUbGUxhZYERxj4NUDrFqtDqqZ4aEBcA4nN4Bb%2BfiLN3tfoPE7zNw7LEa5e%2Bjtkq3%2BXsjYR%2BiyBmfH9PSDmc9pGEB4w%2F1KuVKIIRtpAJgBfeleTe9wy67sXrIo39DeBHK%2FW1dt%2FXmf6B8taBqjUr77rr1IN%2B5vYUUbv2IXcU7HkexUI&X-Amz-Signature=db946420e8a4255ac8cead71fc9d22466ed2aafabfed10b006a8bcd5c9318c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

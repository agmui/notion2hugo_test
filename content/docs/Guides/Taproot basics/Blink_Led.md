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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD2MHBSW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtNWIS4VpUR7oZJaOnqyxQvMXyu1LUMM3glXSIrYk9VAiAuD9JTozk%2BBG1YJgrdKarQojp3KrByF37sbScb6RZncCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMiYknc4gLJvUgSY0jKtwDXm3ARqGfMp3PK1s8ZVav1lJKJcbHYYyFn6QZ45GNOWoe6zwRY60%2FURduPI4%2F3MYt8dw5S3uB%2Ff%2FnzhjAUZKUfvnzfq41uoB4CyKnG2GDdf%2BtsYE4vfdvb5j8SqyuriKRybDlsm2%2FJU5bnR2V4Dogf2PZAcgNgdRLz%2FMr2gh13WbSvdbheG%2BAtf%2FhhB04%2F4nbuwa4Iz8pW9V1Em%2BnUHBSOc4hiV1MNSENwGsChOzzgf%2BkrPbqKCryjMFn5%2FiXBAdjlvK%2FWU7jrI%2B2vp9%2BG48Y6zcWp8nhwd5GgGIox5G3zLrlS6AlUGpf%2F6noGxjZOB1c5InjV6yCOTxfZXa63P6w1hl7d5mP8M7sB7pEJeXDuG0%2Bic7fl%2B6a3lEGbG5Vp98g4dGC3KO2hvcTKsSgeyYrawB1j%2Bim2LBuxC9e3HIFtbmgLMeczbof7vcwxONiMnAU1xwS77VyaIsS%2Bxko1Mw37LWVAFpUB8Tplbui%2FnAu7sXPvXMrF8aPZy7NdzFYb3FCbIw7w7avcOIdCKTaqy8vD%2BuhwDbiCgctanQAXI9c08Geq%2BH80v0WHBQAUAXsJfaqvcPl9KrBFCqG7GqjpI3MNKQzGXeL6iCrg8OWWgQLWt26a4pZW%2ByIgMNpjNwwk8iCwAY6pgFgcew%2BIu%2BEAouTvNTWj%2FYDmau6DB78vHnu%2FvRvmAxsYDR6iFTFZoVokrr7ytsfc2pzBflkBjirA4WAkRig2opSYKX19oKKHZ2tG1JFKXl9IMULj0osiTYVAUqOlwDySkAxKCIbmibxgbv048tMV8LEizfSaOc52Xy%2Bpbyrwqj72PSTF7wL4Q0aSu3PTRAT0r6jngnejpPq%2FASeCz1W4R%2FHISgsKLMk&X-Amz-Signature=5eab897a1c6739d5829a848b43cb75cab09ff1ce203e9e688fcb552add00247a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFKAOMI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG23DkvMvSBLjPNsgORUfPhLKMiMDivGjV5tTkqkPC3gAiEA0Faotktrf%2BYtbhfema17WTXCjVeJNFN6aZl%2Bb03l4oMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDazRlFmOMQnN405lircAxYRIMTfWpglhMj5SffhyFS2tkRl72Co7ndMEXr9E2nBqxclq8xEP73bwVBkiQrMxFtelqBxgwMArDkX4j5QzzBzcb1goufUWBN1ET0AA0F8IpDq0GNlSJK0TWiLCmNTJlULawxEN8hY5ZOM0OjiZ3qDeQDsOh%2FQwixBm8GuQ%2B3zWGYyqoHwxWN0qTI9Y8ZjXb36YdaU5i0zUZl6LlreVWc%2BQXvW6%2B6ebxYFZKr%2FGPRK01X3Im7j7fWcNApJboobz3O%2FdYr3Ta17B2Nj2%2BCrKn6iOIIzk7yNgrkeBTM2szeYEd4qghTFhG85RgOxXZ5H1DqKg87D%2BfCa49%2FjLVCHROCgkR3izJ4vSNLbM8u7St4GO9EIjmpU5FL%2BUfg2hV5mU7%2F8bINdqVUNgEPu%2BM24fSA6kjShnUzMM4rcf6ROzmwvYA7cZC2rFGuxTpYmtVwuyScbu%2BGoifRzvDeWyTkfeSNpR%2BNlJwyLJf7hQ7QvYsoz3PHpwMOjdZqhX8T8WnZkwxqZnCr3wLXM9d5IhQXCQckCIYiY%2BBt%2BFeL%2FCH725YduAchK%2FdfxqjDorpy4Qh5cLC%2BDE2VD424M2ftoi0ubheNxu%2FZoiHQHf4rsk0404a%2BxksjKckHxEmfjwfD3MM3IgsAGOqUBAtyB5r%2FifsWAJaFyGUuIn350JXlwlBd5UU96Gz%2Fqjl%2B3yp9Noa4oBaEA2rJ3620wrRANWJtHV27m4rMzQHNQwZ4GXv42CBN%2B0R3Lbosc1j185MlNxmyq5r9PvO02rJx%2BmwEEq0S%2FlkzReRONHXkUxZS%2FaxOFTcXQXeWYARCNEWUKKTwdGwL08Ics%2Bu3AWs9i61TFEHsv%2BNxZOqZQb0%2BBT6nk%2BS33&X-Amz-Signature=e6431f07788a7cdd61af6a09c53a6290825de27f0a3aa64ac0df662d71f41f98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

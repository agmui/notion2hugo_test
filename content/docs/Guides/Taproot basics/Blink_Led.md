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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD5QFT7K%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJvKfgWk9igM72QVW4xgDJ1xzw2H8%2FRuG2bTDG7HrYggIhANJHdGwTDJ9bkfCuxFTAi2eO3AXYKZ84E5yUihSTAly1KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtbJrVydB8gIzzPrEq3AN8IxLYGrL6DbQh4jATR1x3WwDqLcK7ESP3qzVyacqPCfnU3CVY5RZlzeemYNN4fwPx7ZyqrMwn6tjV%2Fqn0youRJeJMGe2opQk7SBFnFuPqN9VGbKawo22trEtjaoRITBHFmMc3NT4tHRoMmA5oteSx3%2FlZbAuFPecqv4hXdU1bRzhs9EdvBkiilFsd9l7PCxDUA2LjYovSFXS6kr3HuplrSOBiDJg7vKtLygY%2Fcayva9me0JWTTOYtMsOml7C9vA4RJB1bw2KtU3mnMGHxeNmc2Ldv%2BMpNI0bXAVqDUHj%2FghDqrgqskNQNjPaydFXGlhQaIMmEAKWHjAyjisQKBa0og%2B0Eo3%2FUcEwOCCkrj4fpFOslSCy8L5sOB%2F1XWxxpjUGZA%2Fr2n6d4hOs8XE64QlAkvgYBJ%2Fq63R5Bhg3vFRMPYkUNXZbQ2cnjMVWBlb0IT4t7ICZVt17oJTOLyvPb2zo0Z14YzYNFBmSrDbDAqwUNFL0rIYVYsuywZxmgBvmowY5NTT5FVEpYf8ZwUqUvX%2BgWgAzKi4AqgliGVKkwxwMgCdgmIbK6z8xNcz58xTFEJanuKiSWdIpl12vvfh4AfX0Gn8Tkt%2Fu6Cl5aH75V5SbBdKuVaV66wVD9V5%2FvLTDgmLW9BjqkAS0gqbZ0YYqrcPA0fQTn5M6vrFVXdiQ5zW9K3LkzEvZ1hUbu8Lr4pBfE8chQxV4PwvqSN7fMPDc%2FrIlolCw66qiqC%2FxRAlarO1%2FS9Np%2FTnew2i5P9ogLcX1WXMZvYtF%2Fhy%2F0C132uvRGiCKHwgI5wBkPvdJibtcBYXf4AbetEcmKQR14l3Ey%2BPr6HLHYWFJZzjaOolA8eg%2B8bL53gkAucp2spvfR&X-Amz-Signature=8e04b9b365bb6cf05d4cf79471ecfb66c0b393386753bc8a3108112e26b2f352&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYAZK3P%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD15R0nMKG23HeAiQS%2FSifJFC%2B8pGNqYgiRbClKZ0MaagIhAM2uNIdjgTvbh5lO5qiNTLGwQ8ezrXpK3ZizRmioxe7cKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkFpbM%2FZXwkgc%2Bc3cq3ANrMD0W8fhWFvdT%2FP%2BWc%2FX8I13Epyaii0cR9zM0lwNKlqvGs3S3nlHE4NG7Ua4oE7p2Xv3oaa9OXFB%2Fj%2F4Az8MdqeUfywuSIDsdEfqz8mGvvXqW19ixZYj25L8Qs7%2Fcuj%2BsMvcLLV8P39ul84ybKXl2JUfxX3jRd%2FP41YG5z1zQcp%2B2U3g3Uzh%2FIkC1eg%2FDc%2BUGGTu2NIJBZPne%2BYBRMYhlBrpMt%2BMg%2FTWhubNZT40JER3BkPC2CZgBOiSSqDCZVC%2FxbscJGQN88wTXFRqRqcl0IObxPzikOul9Rs1uXlhJWxQnX7iboYRjuCt1SssAhO706docfqx8EGu%2FEEmMjsN%2FyEw1H6VvIDUSVBvKF7AgPdXLyO9mADfstLBOoQtG%2BKeEVjIxWM09iWJpyyVjrIV0QxFWKvQmgLe9lRkuF7hf7TxQUa1%2BJKpXkbBfLrv2F%2B%2BlKYxrG7wRGqLg3iJMh8DFZjgtwyZv%2Bft5YiyhoIiYk41H6ZRNW%2BMMiDPrvgYryA8%2BDNl7MqMbTL%2FsF5c9GwkgYwCNOQhMbBcNjl156jgeAvA7QxUuBIOqA8VhVrscP9veCp6nX5tooC9ZxndoDi38B3fOxEKiyYcB2KcKuRYgbJsqGDKroEIg1pm5TTD1mLW9BjqkAfMOC4p8O6ueZTlIaqzQRncdndMrcHM8RA4VQlNl3y894v%2F%2FPzTMowdv44pf%2BL3rzTIhU0D%2B7a37cBUfxirxMLjdCTqlfMasWUwQ71%2F2DuQvcK5TeRccSLwW%2FKma55WsXv5UUaY7GqkZxiHyMtYNhAGgKvDzj9qQhqfgOolZjinWHhOcsx4lPO7e%2FzCNxpSGfrg1jWPNkQ6GXmBG9dh0v86iMOZv&X-Amz-Signature=b835be12f065d92947d7f39bc289c1881ccb2b1e6875a5f9b0a42b6526471a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

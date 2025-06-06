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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYVTSUK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCICDzY6FMCCAoLv%2BJ9ZCo3%2BqA66nkaDxYnjESu0wPunfnAiEAp%2FRucPUpSJw3s5BrTeVjF%2B%2FrCnzmHiv34w42pFnDGJgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHdnUkPM3CyFUGTqHCrcA0criP2A%2Bp9OrhJMLYwOBEVQMB7CH0wFDkM%2FZT4yBqx5%2B36vJrYshkRp4t94uZH9VtfobN2vYSrv%2FuyMr2MX0FnZyyg0f2JG%2FZhcpnPy0CyfFmg74YYt2Ol70VKrsg%2F%2FFAql8bFYwh3S%2Fa0CD6O90lkCaTE1NqoMpMEV%2Bk1agw%2FA%2FcPgug8K8oOO%2BsJ6D4bhH4a%2FGbqQHuKLT02edGk0d2ZmuUSe8%2B2l0ATxCMMJ39A3%2F%2B1vpnw9hmkJWPyXLnHJK4JDNYi4PBgqQChU0T65RyF8Wkh3IN7j2M%2Bjw5XRIIq4dkoxYymltgprMiDjhFYUTYRGPtQfearVSlqBv5ikIgH5LGE6J1w9L%2BT%2BgmvlPSse%2BlAw3URhL%2FEhUUXISS7%2B%2FctsMLBakhqtupQvhJbaO%2B8bH2hm8%2Fq8j%2BNI4Y5Al0F08H%2B5ICk%2B41XoNaQgq9Nh0HvEQDeiT4QVH1ivP%2FuTDjJNKjy2P%2FGebu5%2BP8x7LWqHbksHdV%2Fz5xMoK2cvAcKGBV%2FZG7YMUot%2FVV9WRuERwWCr%2FzF6KMe7KsragNzKCe4f7uCAd3SztueKtxE0B51KYag3PNhHZQrPEfNocPq5mirxmuhRx7AHCGL4UnBCrjJmC5EIMepXlRKFrB%2FIMI6YisIGOqUBewpLYkBcXpPe4qP%2FSEPWwMLtubLSs9m40rUhhX60DMn2UW6SYrOoh4%2FwPeFqrgmilt4LWjqwKxsOJjjYulEkZRZlIvGXVRhLQIQTX5gitGepRCo1cjoeeJT3gnvNRQ9xTSv0nej0ar2kUVc%2ByL%2FRdqBh3Y6IASul0%2BnUYPwbAIX8fy2CA9okdSHnAhAxbtZ7foYQpvDwcYye0stFc7SlucPJ1LJo&X-Amz-Signature=80d4f804d80829dd499eb12304f298404ba9a5d1ef9d3c173707ba6140eb3064&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJZAFBA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC8IH1QjYPNRWg5NDsUo6US%2BAJn8xoO%2Btkxkqxvty1DcwIhAJ9I9VRj5zusd5ekzSIZnOREVanSyl4Vlvha%2FSVvY7h%2FKv8DCFYQABoMNjM3NDIzMTgzODA1IgwIUhGJksH7lmJyjBsq3AO40gDCfb%2FMrHNf88G%2BK1idlPQ67HYFOwnPbBymO2RQA5lBaTtsY2J08WJGgsNqSSKqQ4GTvNxUNfOsUQjfAeESrPj3sSYnp5v8EMCjS2BgHGNJCqyJ5LhZltWb37HiaMwk%2B9r638JXGwGVIgyplzeFUJDzqaqrZKODGUoMqTSgxAC2RJRiRU5bs85Wwe9hhwJUTmu%2BqHtPPnsI3fToZF%2FsnqdCbi1xf%2Fsq0rqr1bkSjzHf%2Bq6wwBKIL%2FsAMHEBlQNal8SG51g%2FWm4pLsu2nGyOefKN8huJyvK8s5bFUpBRQCylbncIXcWXfixQPpcJdY3cdAUOgh6dA%2FG%2F1dFBa92A1K5KgRNDs8xY4zgh9gWc6l%2BirM7mvyVXXYNBXiuqe6XJ%2BeNdp62njaqdEEtM%2FYe%2FUP2aJkwNeIVGcLksL522zCFFSypUsIrZlj7GLiD5FlfsmqzabQ7fxaxY2%2BrXf9mLmfp32jE%2B5MpIaroh%2B4HUnfmMGtLqz%2Bs4IPUGGlOz4Sra63pvXF7VnS2HZHggmpK%2BFztTCu3iVuZluOoDvev4zmxPPqh4YQ2xLbgMZ9cR2CEO4ieQuF7f1rBBftu6GMW13OKrCunprH%2BJYlnmF0nzHa4%2FixJBaOBhqfwCcDCK3InCBjqkAe9o9n%2FIo%2FbjNCapB%2BSxKacMhHPmUzdJ2L8t1Mx1MO7JKY%2BJzVvk%2BFSClA0pc0N%2FeSOKa4TD2BmiWZqi4nHeiM7tGGbzKFEbFdqF7LL9CoWjO7f5%2BEJ%2Bln5z6fMlnuI7aebePPot5FG31WEjWvjU6eC8HyxnZ7iq9huwZXBedJcLUyK%2BbmJaj1TMsSr75bB2jcU9eriiiPkwvgsZvEprno%2BIeDuO&X-Amz-Signature=8ba0fdec11ba9cff6af7d625ae019a69d3824b729b3cde9a3b58f6b61e8b0b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

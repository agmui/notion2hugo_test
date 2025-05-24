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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4KDPDY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFewWJs7T80QFJF6y7wMJlVA9firoyOtUZVrOm5LGOCcAiEAotxF5DAS047AWiouKTdxI7Ixjx6SySSQVRKdxiPoxq4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNYUG5mQJ1HoiNz%2BgCrcA%2F8sr9TZr7EOcrj6Bt%2Fkg6nmyB3xKb1RDBwvxBp9HdSQh6zeztshxAyMAHPopLyaYLLUPQhhhgXKec0LBo35OmDB4LEWSa0Gvd2L0WetIwylCYKatLxMhmhK%2FVPUxW0bs%2FXyXQeFzXTIy7zMIr2GyHCk%2BH9nQ4FEiCetM4tEvLm8qKGNFlu0tQnX3ykewwrE15rGa7eOMlgzFFp2ZDTjo3Dp5RGYH7JqRkag3cCitpyolKWeD80ZfhBG8lKLTCRc23dFpnw1QODbxu0i8%2FjT3WJUO508TEymV%2BuVbkTx08ixNUtwWoTBq7MhR0VwZf54OgyZ1GgDtBeuGvKTuMcg1Lie0AziJ3viw8I%2BDWExRICt3lzF9VNMHgECJ7lIYt3f25mqA5OEApCiKJQMUgp88m%2FvptBRNmKzF7J%2B4kcnulAlxr%2FUIplJyiCaNXi3b8z9GLnS71oWy0XDUPZbF6HMB8YisZu0nI%2Bb6LaLA4FApOqbhhhILtu1%2B40%2FC8lTFoCB%2BPvPvnw3D3T3U66uwsXILzg6Kc5cWKOveXT4Zp%2FrNyRf2LjggVQ0PXUf8bjgQVpC5RPADIqv1kmjRTmIZ9BzTggXpgEeM3ZDuzTnBxU71BX0M%2FkmdVPi0bt6YoGyMITgxcEGOqUB7h5RVEDHVuL49E%2B%2BAluNztU3fw%2FOMSuWBcX069FUHt1bdBBz3S7IfVg0vOctvFks2hwjmzNaxXfNQUwtcbFF%2Fu7anTDxwADACaGPGEhdPzN%2BYwGM%2BrTnzJFv6TNlcIPxRrM%2BbhnAeP8Nk5aXoG8piNrsBepjS3VsV5wdkUpMvFSyZCNfInsEWggsyVY9hqBSDw%2BZm4EdFvzVd01CNBHp55N1IeEq&X-Amz-Signature=05ed890f40cbdae77534db81161ccdfb2dee0db5ef3c6d0ca9bd26e8ae4d3456&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37RQVOW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDbyRPItlrTpQ%2FwvS192nAd%2B9PZMmQvn924OcMOOXl38gIhALJIStu%2FNu7i7G0p2FngXFPDPsqoXnpseHaIWFGn2Oc%2BKv8DCBAQABoMNjM3NDIzMTgzODA1IgzA6pq%2BJdbTQZyzY6sq3AMqbauQnFCtckpJugnL7juCwyeWrVSNp7HUITD9DTw9SPs%2BuvKY1xap8cHodYfFcj8Gdpa9Pt9VsmiA7JW3VwGIChnaU66AFEDKDZc%2FieoAyLBdlNtkqs%2F4aCioTjuclEa3l6AI1lKwKtv9QWcy0nPkRoaLqXy0DsYBYmzkBOEt19wiy8%2FaJ9F3a9D9COudgj0by8ueihOWRTxEF3t647V%2BHhv%2B%2BZbrTvvrqLsJ%2FyQNf9smAIQcuwB%2Brj2I3CX%2F0d98qIwkz8kyj0leZ1zA%2Bc7ygI6QRmgV9hSMJMCDkL7zcOpCHZx8fA5kmai96eE7wnEU5B5NXsYeyFHbfDYH%2FsO1MfG%2FOKYXvSm1HMLQ0WXVE7Lg5FyEpJ7dz4MZbLK4SFUzpeYwYPulSV4ZpbJlovob6nY6%2F1GU4JI91Tn5beGEyqMjG4BeiZ%2FwmzggPCSktpzPTt819Fs%2FJurWB0zdIfoDOIHxElJWXwzp%2FvSt5jNKtCwvsppBIBKqRxeWQsGA0%2Bpwfzkz5%2B%2F3w6nO0QGOw3%2FasYEQMVCBWGVC%2FSDsiQcSglAcWYDMuGsWlv93yCJkikrw94mqU4XDxX0VKjLa%2BApZrN%2FYbA5SJSUo5tsvb7s0uU483L78K3564%2BKBnTDX38XBBjqkAQBNzWy8Bk7GHd%2BYz441i%2BRkkCHYhh3kf6APx5o2qeSBgYX2vNvu1yXh%2FhVW%2F58uGrfrzJLQwYmJAIk4aBKYOY%2FY6HoO%2F4NavlfKo4sqib6eV7U8KlpbNtDSwakYYJemV8ltpotIM%2FVT%2FK79Kj8ADenYETEt8HSYQAjPntnq2rVSyHhaxTcOAAduEDPIXYEGOMeHmDy5R08P7BHIz27C3U9ME6Mr&X-Amz-Signature=0da7114e67278b5beb24381e08415f1c38d126c0c98f92c38f3a0ee66a9d2c2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

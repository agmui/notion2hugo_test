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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QI7AK54%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiRvqu4Yn37iSAv0SRcrbqOIZ8HvyBAomoGJU0bRnMCAiEAtlMplhhxPESsX1mYWVT6EGgHPJsT0saRsIjKj9jQB9MqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGL4%2FcPJA%2Be%2F1dIhRCrcA8RRbh92YsjYyshRp%2B0KXo79WOeppCKAM8x5W%2FHzNHZGD05MygZIYUPa66JewztRsRMs2yHrGISFaVUcoKRys%2FANglISV71OsNG0qhg9hyrgUZ%2Fu%2FwYI4Gs7mW6GZ7JKUAi6uVE1vv5dv%2FZh9uwY3Ol55VbDt%2BDf%2B3Ne02w%2BLa20Ffz68y%2FpzPBnZKntuibqrnn%2B64X94D%2FCyPGARi6Rl6H1HPbcPYQQstlmrc1WC5AflrL9FZgrfRl8RjoPkTNVGPLBXxn9Pdyzo5K26fy8uQRJuc5t78Ou6FAGL%2F%2FV2zQE8SoBzl%2ByiMew%2FCZpwWpm0cu%2F17k7jCnzNsGOhfU7ENBHNaMlS0%2FOkaOueV5T%2B%2BlD4g14pruFQS3RaIuGz8se98zzYk0DXMsNIfJjvcyH48dwW7Zv23dBvHkhSgOA8yV4ZwJR5wR%2FSSiO4uEHNYmx4O1%2FFQvhOfjTCSzlcv7zsmPNBWeHeiXs4fM3BZNW1H8NmfZl99lJ71NTy5dMzvEdt2f247VGW0xeNLBSI2jpkel9h0d8jCLXw%2FCHth68PGC%2FD73ABhMAXtFR%2Fu3I%2BsDARhDpA5WBsvNmKw1LEvZedotJuBn%2BZP04Hu2vEMTpdSom2HgA9Kf0Uz8mlzNSMMTW%2B8AGOqUB6zzcH9Jl7IP8DXbpp9ZMxVIsHAQABQ4w5biYCcEmSTGnWJTTpknE%2F3HUriJo1RoWcKy%2F5CKr6U0gzkY6PI5Jzb49h1nK6VlyNAjjLWbVW4iOtqRkkoeTsVBNJZ32b0o%2BdmqRZ8ZI6vzCV0YQsG5WZLhSibxKRIu9IAjIOQNjqVkSJAuWl14Y9FH0oG1u5ZbhLxOVgwU%2FACPbengVokVvzlC%2BaEWz&X-Amz-Signature=7056668d574029933ec15236fbb498f4b8fdb15d673ecc116513a0f380b53059&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHHR2NFH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkr5Vg3O7UZwnqQz9jW%2F6kQSAm%2Bl7kbl7%2FrGS92v%2BemAiBPOFcwNo3ZqUPnj0uNOLLnFvAnUaER3KDepxh85mBJASqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAuhiyWCdL%2FqfSI9lKtwDszDmS96pbbILvPyCl8W1ShtbDI0FzvLrW5dUwXfhXdbMtKveIrn%2FAsM1p2E50xV9F1z6ohY6gkrfq1uBg6YS2ytZo%2Bayc1jxnezz0TRsrjq1Qgb9RqNVE9s%2FZxoPi1MI36zX5Ckwg9LAW09%2BR1lvT6I9WUDdzeSCmg1X0ZRSEWbz3oMTXWvOFgbCpW%2BPplVt1BQh7xYCvajhQ0zd7XqMZ7MAwDaBHUPp1GDO8tgJo4s%2BlAgYeivn7wEf9IWm0PwF2McoLQ07SSdoxM1RZsb%2ByM7svVuMpLLXrSa%2BDJgWA4uZu8ZxDbeARKo0vX%2BY7A0HmzC9K6ODPHDWlhF3iXhnQNoukjsOf43kSNDeJKBUzWpUpqwcj66V2L7KR2G%2FAnTnTMaaDluThuRSpeLGXwTZC6%2FrLrN5ltsrudfGCN510u%2FW1TwYVax%2FieNuUW9%2B23%2FbxMzmd0MRjumbL3JBzm%2B6MANTK4velVYNbfIWSwYD5o58fRv8g95W8KO3x9XYjNJWtgg6AeRe9Wja%2FrILHWztn%2BonXwu%2FM1riSqYqOYpjmqjMqD9iqINZsCNNN87zl7SgQpRBypKrlnh0SEJKXc6VkoUHMbcngLCjK71Ls151oIGOtZdLDTW879C69a4wxNb7wAY6pgEo%2FYtZ%2Bj7BTrGoWPY2n3t3O0jQS1fZ9BmbuHWCIY3cacxlUqOnXRrxhCb6ZSFrHa%2F4GyQiBl%2FEGfY6itpsXjGwknlzE0z%2FIpj1XcVeD29zV17NuN0zMVw38ZhaWNbocbxT5oQ0uN6tO26YVcPFkkrvrLhwMEH5ENVDQ8mmxk3foeLtqrqjfg795LJVcc5JuCAMe2IUOEWodEL1e1Lmsxfdykc3DGyF&X-Amz-Signature=ee98ae6b6c872f6845f898cb7db7e946f78f26d763423f227128e63ea2934844&X-Amz-SignedHeaders=host&x-id=GetObject)

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

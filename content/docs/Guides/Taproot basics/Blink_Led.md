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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UE5LAXU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC40VwFKQimFoCC0vIW6ztFA9gxuDhq%2FuTS53ENZVqxuAIgXhSQzCcszvXLngMYGdW00shnYC4a17ouCiWnk3Qjtagq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEu7427WlYKITn2EWCrcA9fgAemG%2FAhP4vJ%2BIn69st8f4KoQ99wQ%2FAPZ3Oj1lr6C0xfuOlrpqMlretnnJ2OhiVsIh5zQzlm0AxGRqLuFSIDu4F1AdkZCUdY8R6r2A2mlO7f5xtDQKLxEl49QK3ZSp6KCtujyVPouq5QggKLiS3BmYbtbXgYF%2BEiCHgWWz3J0zXW2tLXizDRng4lXeKedmOu4Cy8cnf4QFXl1A0XxemAPCgENaBflcZSYY%2FIBRFy%2BzSkIf%2FmvV%2BaR4RtUf9ysHLTAqrX38FjWXMplwhOPoGvT%2B3Jo5cw6Iqk%2BCvYFXgllmAmtgUWJqf6Gmt9db91lJdRh83DduvSaoCcaOlcJ802bmC449djUZb99eZ6mPp%2B58jZSqspd3QIPnHHdVFZat9m2THWbCLiJCgAAsfLKCoxU3ADNZ1M%2FQjveAHdzTz2scCEdhL0GHsZAFe4OuncXwYS956LG4tLaZb8WXHnOWr2Km%2BcwN7GuJpiGMMy9sR8YVpTRe%2FFOmvYjKxkSIMSDo38MEIkHH%2B%2BggMoznWKoZcNKoyMJtgo0Xx2NyoY9Z2qQqcYZ9aAVN23DcIWSuBIH%2F8P8LktQaYy90OwNIRQD%2B8YdoqVUb8z9rbX1I1jEqxKecjs4WnDV08Uyg2%2FlMMyI3sAGOqUBf7TN6Gdp2aeFODmLqeh7jR5TcZF5WbmxaITAlRoPqpfPGv25%2FnLsAkHjFfWF5MuubUjBxVlkLEx990NGuX6pAe9HYfF0pFHsREF273hk%2FtXKERachLzPWBGi6UefCYS4kdLEZhqJS1a9lj6AlCVEunx05zY%2FOrtfkEse%2BneurPB1%2BXoQ3HmfB8UljcUj6QyuYMbwYEMW64itJNR%2Fmz8%2B2onccUeZ&X-Amz-Signature=1c25467a8f78cb516bdc53bded0ecaf7902f7af829cd802a2616995ddc3d73e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HY6D2KA%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDZuxBs6Xtqjj%2FYsp%2FCf%2B4rzFxMCrOdsL92Zc0e3O9NNgIhAM1IcpE%2BUUn33%2B1C6i3osnwjIoZMj8ybXmPJ7Tq4a9gWKv8DCBgQABoMNjM3NDIzMTgzODA1Igzc7gvfW6rNeFcpm8oq3AODHcvx8pzplQlje4a%2B5YbD%2BUOGmn7sLM0rPt%2FvAkJXOt82KqyyEnH3DsWbl%2B79FI5pFLHDhnkGu9ZlB3AH3qtXCvwj3hDCJU%2F2b02rRLd6ygADh1tTcKSeFq8bpW%2BFFrnK3g5j%2BUYiruvdE8NTUQsaq8RUPtQgdDIxUVo0J9UTgRZw5jGfdPRU%2FPVzS0Jg93QMru%2FuUtvtP%2BTNbC28VKt%2BMptjqI8SVwL8aHJwC2CpHU8GW9Xnw4OOxKRyRboZbGWZvqIKpjUCS0PdkJ4Mm%2Btiw0fy7UV2HyV03vXNCWSU43VLiHlHcxU9jLJh%2BCJO%2FtyfB3jwL1INj%2Fw0zmC238iW0uKRB6S%2Flub5d7BLt%2B9DQhsM3vpfjWHFMn9MYWPIHL1sbtDvxj0Nt0IVhPZGzhv2qfKHPfcR9JY%2F5Jgy%2BUCeTiiufK72H170YyWSMM3Ixk3ZzfxTO9yX%2FyWwZ9EOU1aTcgFCe3KRT2A8xOWyk9KKEC2sPpMF3xH9KXhveKfWy86vKNR42P5qk%2BeXSQcGg1Y5MqPQ6rXcCGrZJiqms975InxW8XIfm6guAAommBBkxbu7oSS%2BzQJKx9C3JH9CSQDmP8yt5v8Bo2rM%2BVK7QPi4KQaj%2BqUSIb7mABCfVjCUiN7ABjqkARgs77w%2BoUgPR3RLQacSgHBuyuGd3xxEAq3WKCe0SGAAb%2Fm1sb%2F3UhwCujB9k8YHIRu5C7P99tV4YZxnYOoFNNDWEpnKO1FvFsz3rf14IcrEPS78Ktw7k%2F8va6erzBP5iJgveW0lF4X3qtWLpxCSmybNZBrZErttZ7A3sGTXuATvF9yB0lD785WmhfY5HCneuL1%2BY8O77bdvg2bDv6v4pP1pHQwU&X-Amz-Signature=f64f5b70303da3f2d17bec17875a6a96563f0822fb18bbb319cc95974d963bd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

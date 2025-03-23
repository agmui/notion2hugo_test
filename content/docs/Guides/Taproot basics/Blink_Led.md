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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CLCSUX%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2I1RNKwnyJczh%2FAFwLE2RT47dZs%2FwGTaHZkttotyWWAiEAkE7mPVaL%2B6SVW1IOr1O0wbqlDDL3Jvcpvzljv5nas6YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJktt9XPCCgrCAFZUCrcAynlejq59%2FHZXaZvRxkqQwbnP2Au8VN6RDA136f9Dmp7%2B%2F0VqfpuNTTFHOphjg7KKwFW0GE6phOOwlICrr41P3PeQNxHkVJeAIN2zNRDIEnoZdQLR0d34HiD6am%2BlKTkELoHfP%2FfEOgONQhh7EuhFrCwmn0Yb%2FOS5MfCTDeU%2FkUf9slj%2BsDb85tPCshMmF2Cmo4%2B2k4aT2sUun5AxtFaPr31Idajqh2km%2FTvB71cTlRv2n6d8WEnwQz9W0emD0DwQITF%2FsjRLn4vRO1zggd4EFJFzDZCgwPpxJeMmrl0ZnLJxYpgyjvyUcJHEJu%2FwZP%2F%2BVfbNk1xHqOFz29HV6SvhE4vHDcRwoneBBXD36b9HgEtydEeL4nSjDKxhT5Tyr0OuF0m3dfGPHycEcFCrQF%2By4FwC7gTN3HWShsfaSV57uQennhwB6eyjLSldorkMUy%2FOVxsh8RvsIyvItzaVtyuzXRvbIDy6gHNXrycrFKACVJyQqHWqeyDTzX8e6xrjkVk2IUTpLSH%2B1NGW1mFxDss6BuAKT%2BmF8gpBVR0Rmn6kd8rGscXY7HV9xNvnuzPe8D6KqGMjrNo5xkXyaLi36%2FhphfA8FDoKODdpZNsL%2BrS29SJefJeILsaTHk8pXrdMJjrgL8GOqUBY%2Bq4ZCaN9X5WfvC7H6ZLiQey%2F1%2BrvjWqSgSrINTEsaVukK%2B55KFXj%2F20QDSw%2BvTq%2B3og%2BUwiIAD%2FMuDvXKe7yyacu3fqfnBS4Twot1CVKJp6jpq6Oi5ZghbU0HJgvY0UTU%2F5PbrwkxMeFZgBn46e2dSXpdqpFAJwcvowNl6%2FLASxjz%2BWkaF8ui15jjw6BJi8gh0M3pQmo5afXbwKDCeicZ20cMKX&X-Amz-Signature=6a777fe623390002c13e51aaa854089b1b3e2e121d7e89ae3ef3d119947f5dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXYCKOU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDO3rv1YCTYQgjlLH1B6%2FdrgrE5JSH%2FvcX%2BvN1qoyrVQIhAN2lruUu6CwNDStTWSFgKPeyBzJSJPSov1Mb3Y771X%2BeKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFQt%2FgidWqVKPLsl8q3APnPRkAKyf9eLcC1%2Bem89xp6aHZoTFiIQkOhGB2zDltbgdcrJO3bLM7cLhRbhsZ4jwxZ9LSJCqbMNu5JGX1V0O36uPUzm%2BTr9w8gg4ugVZf6EhztWk2JmDmPDqzTmHDaqpU7NICvRMlhkhVGpV6zVc2i6EbzP2amQo%2BlJihC8ZEQISBvvn%2BRDAUxtMVGZ4gr%2Bp8ZZ88Evv6Oa46TManqhdyhzA4R%2Brb192%2FawLtkvh1y39ohQ5HSWjZ0yGC%2FLZQ9E1YoBFUuvIFFBgTz6n071f58UTLu5ELqC0GHZDAr41q9%2FtxDOoK1L71rH7mWnLFa26Uzm0vz7Bz9wj%2BK%2FDtHz3fmidmWpAxL2jAEMktrX6toYUEcAp4RbFAzytrHab9KKnaJMl3w71wmHmGDyJXqet%2BQqBUQ%2F3bRzI5TdnPFpbRMx895TwgYT64EZML%2FSd5sIGLGi6qztgokqLGScCuTcr8bpRaxbvvXeMRvZ9uaacKxrCAx9OYNvB6kwSaeeuHBDRVSJcOALok1mHBUAJNISqPq9ng%2FBxZZ8XoS3Ri%2FPJ3zH8SImkSIu4W5EOBxAM%2BF99zI5vwIyJM6H2byyXWgHlydB1wGm0kJu42Ce%2FjrD%2Bnzj6%2BPKj44EnBXLSCcTDl8IC%2FBjqkAboY3tsDiJzLXQQeXKOQati54aZx8aWzIz0fedlnTIGkQJOEigipxGOnM%2FO04JC5Ksvc%2FWbTchGCZQTj7%2B7TArTa2QzMB1nHpRz1o0KMP13PQ60uauEygIJf8NFYzKK6pZ6Vo2403bMD5od7IXBPgWmHtFbI9pgIR%2BOfYRYfFOzL3hfC%2FQf%2FzFVJE3ltS5gqIpQcubIce%2FENzIsZJSLyxu9zWRe7&X-Amz-Signature=4628005e2465fb18fbede9d89fffc5dff7afb43ba655290f3619fb0af6e29d07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

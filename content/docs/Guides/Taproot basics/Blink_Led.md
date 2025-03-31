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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECUZE2P%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDP8SDQIJ1JkWtndGSglk6joYD9NBGEGV%2BQTIzw3Ro7OQIhAKz1pLy5U7rYzOSBFxLVlj9t6P%2BulF%2FOsmWNJJfGSLzWKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl8b7Mzhe%2BxUsQgo8q3AOBVrxLLjsYT4jR%2BxSwervVN7WGTme47XczoqXYCIcF6R5qi1fpexsU4RjiteLsb5t9iX6z72w9jwLjL%2FFLMphvC7MjTrdbd%2FXC8%2BJ2Skzd4pSllY8JS0mkOeV3sAqPD5ih%2FvfTaiAI1sFifsAjgNEdmSDVmRzz1KvLZxa2aGoNSz16k1%2FnsaQV8%2BtEKXUp2XtyMp8uNtwrMeGsdI2KoXyD1cfEnWVmgZevpaqIc2KIArQzxnp3vdtpVBGKdtRuUusi9YTJIR1N0zFwvao4Yax%2BcwyJOlEtzzA%2BEh%2BGNezvEI4Jn0DGSDnDey0QxoB9bn0dWdV0Y9CILs3WWUb8bKR1eD%2Bf0qER9cmQ8wSaka0ohNKz4JUvJXwae47NQoieKJSuZnRnWlQ0MGQWCmi4iitGKUcI7UqGPb%2FVzSQ7GKUxG2PcWp8BssxaykxsHsjJ%2BiV2PDVSeJwi%2BHEpIpN2DZknmmAfY20t2pAj7fVTgoDI%2Fs%2FQH7ivC8wtFOZDWyGar%2F%2F3AW4QwbvNsz16xQ9ML4xvlHXfn5K0ryNubtu4QoxrE%2FjQA5CJS9Qgw3AqFYBSM66a6E%2BpS9HIT%2BTtfzsD276V%2B6UQZWSMMcvGi8ianphsfGCJxfiqJ9e3bANzljDC5qm%2FBjqkAQcroVuuatvjwempWBG1Hwt%2BFqFm0BFTShPHG6MKGVC7VOzIQVsGQyMcchNZ2b5qPuPYF3%2Fuyx6MVfnDv3iTm1HFcN9gGtFa5L2ee9HPxeNKnNy650pp10u6Fmm2kmK8qvn36idcDLMTmbf%2FmP1pU6UDqEjLBl%2Ff4wnr%2BvvggywDwo3ZMoAhg%2FttC2s4W9bJVnekFaV04CbQJ65eEAsEP0F95wbs&X-Amz-Signature=a6f5b0c2e062421ed2703f3b0898b616f57cddad506de4d8713708658a245bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7OOJSG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCd0IgRZacBCqF31w%2BaB7ylfd0oDf1rIZN3Z5cNETUWSwIgCIqAg0Vme5y%2FmdJa9yBFlQIKbad4WDw7W%2BWEQu3XfJAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLd6B8IbO%2FX2oJH0xCrcA7tZmrsHBY1VmPUtpYYKIloJ2gv4uya%2B2bZvh49kHwWwJORGtRRUGS0i2gSbw8fDHRBEgkyuWXk7b8V3vPgu96u7nHwVsyf9F6q92mA%2BthW5XzyoTs9Tp7TIE%2FL6iU%2Fh1%2Bw8Vo%2BS7VZAD9FIesukNaUc4MpRbZWxPdQkzNVCK1DNh%2Fc6oEZ2grMo5EZZ5Fj1WZI247NlemSi5DSim7Na74CQbEdjXV9Gn17V%2FMcgM9Zj2xqd1f9NtbZdvR6gY75T5bb4vnmPjRSqw77xjKivyvKLaGTxDjEXkDuHJPZodruqS7DdVJh0IqtX2igiVoOxuAqnMkqjynxcSDm4gtpsY3fU1XFwMfPLfMgkhhGmepKlgEP9dM9icNdoMX3%2BTmklZrLfsXwq%2FKnl2Ol%2BkaV7ix0u0xOE62bi3%2BgLGw%2FChxnsGZL%2B5qIKabbXBCARjNAiXmTYmQHNV%2BUepocoToqlE9telzy86tZuxeitxy1EK7NOwWxJxO8hyW%2FbC2DnY3l8Qk7uehbZIU8bU5j8BrP%2FD1wStk7t44Fd%2FCT6QuwDLLrSpAchECB3taCil1G20EmYIOEK1dLfDguYVjs6y9Bt9jnzaVjQXHf44el%2BRFzjF1VvVjUDulCIg41QnE8yMI7mqb8GOqUBpYXX5fwccUMt1IcGvvyHSKjX%2FjqbBzfReKmXAlG2cQDB2LDRrzspPgNvzTjtDCYOYLbM9LVaI5SGr42PlRPekFR0HXswqjbSvmxPkFgCjql0XSFEg76wGcxDp9tZEiz8HWdc2iR8KtCasHReeO%2Fx056%2FamTjY7pPXNJAlmNk8ZM%2F0nElB%2BLOdrerlpCLeV6rOInTRv6w8aMlay9i%2B8UbMNFkcaxz&X-Amz-Signature=8305f467459b98c1d3b1e0b0dbbaf4d955c2f567c8e2d504a5960efd828ecdea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

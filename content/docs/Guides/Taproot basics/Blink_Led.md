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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPRWJWCP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFAh3H0GPADlUFTR2cSAE%2BJaxRKfg%2FFYLBsGjfq%2F6RjAiAwtwaQSXvV%2FtXNGDusISO5uyq1tQf4Wdj8Jz2PXUEzBSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6KjrAKvDiyEHPBmVKtwDc4GZ9QF5JUCCDNV8Z820jO6599S9zO8LVH9816Joqw5r8cC%2Fzd7%2BEwgK8S%2BcuvvsEPWqqcOfqny8%2FTE7q1EPxS7Lil8diZW6f0rvmnAAmaQIUTHmTR0Xzyy%2Fmzp%2FvHC2qDt%2FC2bTjqIk2fT26Mq5A1jQg50G5wdTFeYGdVkst%2Ftexs%2BYAfdHYH%2FoP6rObYLg3AKw65YkxdZDdCCotfy8%2F%2FdkrSs6WVt2sh1lSNwI5akN%2BsvSfYDCwdaPKF6EfntuG3%2FrjuOFOu7OjAlL7PzlWFP5kQVYDAd8lkdZspUrIZ5b1oBaFqdz34K6ox%2BJKGRLwXq25KgEnyt6WdEsClKMlBNoIDCgudKsF5ffOhzde0Sel9qhucMXhFTMdFTF4KizuxKtuOVJzTyXUbLE4fPRVB6NEF3d%2BGYSdCnzJ4lbXw1LnNwqii7pC%2BiO6Tdv%2FJyZDzyds8krt4GOqKOMnvtLikXj0x4wKtV7kTEStnmc1xqOstPE3zHjFLZ5oQGiuOGMSD%2FX3WTTO7yD2xnujcw5%2FGXcmh70dO9fd%2F3OZKWauO%2FsBLp4iW3NOAljklA3%2F6h4v0mNBLZADa%2FZvIThnDcUA4ns%2FENO5V0Ngc0le%2BglXRYhDL7ulaiYirCh8g4wlK7LwwY6pgFQh11nnIzB2oDQhVBHUKX3zL59tGuSR1u1ZjonQ%2F5Jjbfvy5UgODCbYGZXTiC9oLItEcH1UgQJ%2FIBbUMyF3VXcHFnCm4ca3EE%2FJ%2FfudaBOiD0MDPLCI9XSd2fncuLssE9JnE6gbByCeaVcH97MF0NfJYsDUwWaTyNcnbgCY%2Fo4Nl54lQRy%2BvekvN%2FUtFXmVR1I8vt66PeleQ%2B6ldZ7fL%2BgRYYviLNX&X-Amz-Signature=18fdf2297bc558f91ad401a598d42bf5d6972347a2f2625e9a632441de8a2974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRAILQHM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxC6XvQZWJsCmgi4IffFEgUN%2Fq%2FN7FPG4SdAH2TNTMbAIhAL1tTI3rNf7ZJwyQWlFiEcwJvXjCboH2Dr%2B3D7rhM99nKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igztsk%2F%2Bs5amsGY%2FbbAq3AOVFSlWvnOhqB0y7o%2F8aOLl1wqusRPuNKGQvgRyhX3Ec4t4QAcjJtyb2cvJxiB%2FnYkrmy8M92jQduhpEOecWYLAioULX3XI%2FVwLBk4D2kFGSQP%2BomlSKkpoBteM1Dx1eBPNBtBTyjN%2BpS%2FPjLkurwVlJzWTtdAhMvbJuBI%2BOp21C6vufR5UvncF1zqCR6V9eYdTSI%2BSZ8qohv6uQyqELfo4ANMdkypANYgED47Vvetde%2FnvBrPw4uDbkko%2BOp71sbFxpZXN9%2BXUjzcNVfhdlyKbYndnYAfOTl%2BX4e3RrUTHOF0nWWUPvyhqxDuzaNzF0B6wi77ctw0g0WBjg69oWSI3NOhyBqcNggFJ54%2B%2F8w8AokxD981MXOgtsehXJwNApqSRXauPN2PKo%2BBwkQQQhYzdqzAVoq%2FOLmKwqb%2BMslg8FiIhmddvrLcJn%2FClU%2B7uhOoW9VFxE0ZYjzTMCWBOnw%2BYWkxuUXb0cpAQ63FlIVKR%2BI8J2A%2FaVLvQ2G%2F2LxQ%2Fzh%2FPH5aOCdEr2F20gOlWWl8NNpgwqrTvtTRr%2BDUpMapSeHuBYzZF52M99EUINDcUoy8djcvs7pi%2FUCSJzH4Lv6H0gvVbZc3ldll4wpKTU3uVAq0dplvtDb0NhOa12DCTrsvDBjqkAQ9OXwGlmjRM36Gs8gg7lBK7o7ntvVULpOMJACoqQtDqez5t7jmnBCNB4kmIQpCNrqtAqkyMJ%2Bt8GTMRBr9PtYEGtSKz3AwMeqq2oXU%2FlYK%2FghAhsG9LroNhbUe2u0C%2BH5380Ffmk%2Bs7VhTghE8KKFofNo3SkKrn7%2BXciUH%2BLEGO970EGuv9sWeo1VKN9efr0ATXq8WpzqkKMVoegGjkwIeumR95&X-Amz-Signature=e03f0eb6738dc0665f91af418b27af17fdaf05b8980216474c7722fc7997755c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

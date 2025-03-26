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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SA2SUIC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoAQpALRr8kz2WBZHTPob%2FEcofYW905S9%2F%2Bydh3eJvFAiEA6LY9jQhzj3yAxvMfA%2BBuWJ3OyjBn7fsSqueMvFs9bhMq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPvdHqKbuQ%2BeGQm6LircAzJfEyPhP7eFmHCDzRlb143TootHwaEDParAG3ifE7L4Jkb%2FgI6lIEVkb%2FDLy0JWKl6q9nckvppE7R9JNF9qJmAtAdQDEtApLGRf6GUa8BCjI%2BPVTDk19iKzpvS%2BfWNqsz7lezYuFoClxJgCSMztCUJYqvoGE1Em9cvKr4djvqyCxuVXlKEl%2BbFQrzeAnZGlB%2BxQgpULQkYi1mueUtIhF6Ym6jOzJq4dIqEZmqbBcISdWnzt4DlWc3HRz1k9Aac3pt%2FKTN0SPeZDE0q1EYLfGurZsKSS1dqLOn6oSTayGq1GUQp07ysurwMo8nuqNavFGNERIVcJtdcSusYlrPDTrxCe%2BL1WAwmJo%2B2IPVwV93auQU9%2Bfr3Nm%2BpSlgsG6ANDkjiGOicFdGP6cpBt7ztv6juEXpALEwU1PmY1VLMXNJ14hK7Ygo8kSQvBdiEawfPakoVXMe%2FYD0c0uW7dcPSED2BYlvb6Im2oRjCr4T96MaoVg0EKRmS2LP3vyin3NOiuGSsHq4IOdl9XxnzvFuJiqmn%2FZeMA2dWpn6C%2FfInVAsbDRW039%2Fura4s6j2qwkE8YHNlwSmdDN0AcIKmH2128FOsBKzIprynWSM7p01yEjTNrURBZZnQMhWmY%2BEEwMMTTkb8GOqUBuA%2FyIML3q3BWU3HOgwQlQDceVHqHDl3lXBd6GPzdfZql1LzHSIvhJX1AU7PvdVZUhNXvgikUXN2aCbjl0CIo%2BJjoID0xljeQFL3ZD81CeYiPFnFPiNvLxfP2xdSJ33jZ%2BElMk%2FkFIMGVG6tEAO9NBN0GwPNxeuvizreF0MIoEJRN7obnSNWiXRISykA7LI2dDea0deW6HPcDlvpRRfB6hBHZG7zl&X-Amz-Signature=f0d9aeed27e246cf861d0a2aa26ba917f413fdd638bdc13ec1cd67946b1eb05b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIRHBYNL%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkV2ODsXgbrbfBSILd81N8cO%2FlShpXTVyCWIpNKEGVLAiBR%2Bu55p60CCjtpqXa2jGFZg2HePzZBtBPSqYMojEBEEir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM%2FnPvTuLb01dLMm3HKtwD%2BcyRNn8sIex9i7x0fwh8jprhglSsAxBS1nd%2FC0D70%2FQkGvkQ2bjYamR7xNO6waxSz3k1znRAFW%2Bvmp%2FGLrI3lOWGZMpjBgIck2mM1%2F5ynCwzZSskBHkASUSmlOTNrJlfVB8XBGnsuJGgKkSKFEjZkhBD%2FcZK3O2RFqF9ygcxKRAWVVwvKe%2BFOkpjp9z76JGqWHj%2FAk1ULC4A0b3YyLqK8wY8Pxxls9iRYUHlPVmWaD119TY3U07NZOFAWusTJpFfqHU3ntVHMVYk2R9xrZNBLUjh3%2FyvuPzi6nRb2ZMxGkzLWJwwpK498uqfIN%2BILCnv5GOY%2BxXO1tCJjdI2sVjwab8pKlwzD9LQP%2BSo%2FaJj5OGATZzsmdcOb%2BhTsoJF%2Bs9CC3lJr4R9KAVxQ04a%2Fi0fLcsFodphJpZ5tDrRaD61%2BNpqOdFqiPD1RVeBkx44VTK2PVArmJoMQk2j7hZWdp5mycHi95VxhKGPHEfX96gh0EONb34wFJOmfrvrasigrlYEYSuPD2%2BZWuR39IB%2FxpcgF%2FkDVkdVayEzKLAPIDo%2B9t7DpTuWu9yN5DWSij2AokI2rTOgCOSUqQgK2Eu8YEuPBusm4UquipJRRa4miRWxnfW%2FtgkJ9MOrR51023Ew49ORvwY6pgGUl2IaANWnVKfJV%2FYiaGpw8hZ1uZqV98RkTGRhTzHfmVf8UpRPUZ134UiY%2B2l8Ltn2kDzmE96k2UnN9ZsW2IuMxS1VL5OZ8Qxb2nA3j2%2B7%2BMEwQJtBOFQPTk17SS%2FykjcC2vcgBaLYdUjgZRiFUZRpzWG2gVEzNltoQwzc%2FOfyUX3FoLoOzeMUBykDfBYipMvU95LNnJ%2BQlOJA%2F7d42xWsfgOVtM3J&X-Amz-Signature=daa2318d49816c032b41697bcf2a1dc6683918907dcf86d45e79a938ca4e1491&X-Amz-SignedHeaders=host&x-id=GetObject)

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

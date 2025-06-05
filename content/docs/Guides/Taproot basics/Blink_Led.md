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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXMMCBWS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCsuOb3k%2FlCnYCj3wthPopuP%2BWtVJEE4wyXIDzT6S0QEwIgKjQ1pCyA%2Bzz%2Brgbh3sbQS2lOMlI2xTGASFC4WYm8DNAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPtGpFqCYDSCrJmeySrcAwHLMuhF1dAuMuzeEXRk7%2FLMb6I7MI7hVGoCIeba9ao1aXYP%2F76fMKOq0DpM7zdxN7gezgGeVAfcxRK5L0h3BWmI3BXd1y8FrMNroeI9KSc3Pn%2FGJ4fsDQKD5ENk5D1Vqgg5W6UX2vTeW3ra71WgNuq6rX7gu17DmQ5DbMlXkCDiOwCAVE%2B6iOr1KIpT6fkYZp5%2B6zK5wyTGvPYPJuUezfypbQfzhAzQZFGuFLc813jymw0WNUF8OGkMmyK71ohvF%2Bv1wqq%2FHOrVDWqQNwN1OT2uLuJwfg2ooea0cNhTdX1jrGpnrY1BMJ3a5LN%2FYp1b2XpTPXgONTn2pySRSF2fn32Ybt7oEQveH84%2BKoHLyIKbpne%2FHJOcJSeaTqaRMuvCA3EzpjwHYf47MABzCauRBRgQ5yob3%2FSA%2FLoEbNQ8gzRY4OrtnrFoAVrzFucRgRCsxv93WAllR45s8tlET0CarnYwvti65zocEtqCozwxJMDmqDc0C34xyv%2B73HNQysoFGJpxGnoILVkVqWL9EgmFw8clFGkYAfOPVasUPNsnLKs0iIheyep8ywy6eHfnoZ8T4iEu6ISv%2FG1IbqgrVmOX6fvBTmBUxNW1%2BdXCOq0HzOmweY12hMZGkiGqwShXMIuuhcIGOqUB4pgNlz39zQhp4Y0zTGlodBe34xByUp3hW2SmW8kSOeJAKID%2FkelDnCz4jgcP5YGOJqngp8wpbaM5iwZP0zV9xGEUyxNXU%2B7LtmzARzzNye6NVCxMRVpuprl2iM3QgmK1HCRhA8FigEncxnLFPDQnRbmogNZdOO1DIR4DKPGl2UppbTTWv9mnMUSf8NlQ2BHIJrW%2F1cv43Y3fBJvhRLmf6S7kXozR&X-Amz-Signature=32546bd94edc596360799abba0bf6cdba45e92a5fb19c9dab857a600b27e74d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEH5H4FX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBap%2FEofFHQlfT%2BHlDEiDTLnakFDNimM%2FsJIrffqF2GPAiB9LN6AIVAA5KAzO9BSPRCDgIKWBT6rQ8jJL0UOI%2BE8wSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMdf15VSmOKBICZ%2BHdKtwDvisnnR%2FfooRHLeCTagMlxo%2B819%2BBDa7e7OV0wPDxC9%2FdKNytI2Bl6Xct%2BX7K6EQgmzI9MTeomtGQa4IylYLHMR%2FbRwEfbnlSEUMZixNGs3G%2FV3Bo29IZGpZOBiGYZQ7bajfOh3MGX3xTF%2Fz4aSyt1h3bdCApZfruPXBd5A2CUsnRIRkIUIBsIDu19ejYoX%2B0HY6cGn44BNor%2FKTwHpZJafmHhlV8pHBPxB2iCn9BwGttWlDZFglAlHw6c5oL41M87M82%2BtIZmcdW31wXYO8zND5HqzKOmdvbO07mDfhKQQfLNXfV0kH7Durc4dWZpMvVOBEsBjMZAL1R3VsAVOsPqLiT1oGZA%2FxiDJfwFpInKAjWZRlLmSZPs82TF1zDJ4m3Pbcyu7wQWYhk5uKPpm2yPqFbLnoO7mlh%2Bo25hyVIPWOBEGC4l%2BIX5JNKh5USscRebL1Zd%2FT02LSEw5HCGBh1f%2FpkwAq8mnXhDbYCN38ZTfWq9NSMUIszDorCGv9PGuNEkZDfNdProwp%2FQ99i9EjmhmXueh9GYYCTFxy%2BDRkpFgDeKkoWMP87hiCwlt0Bv8O3zGQsjYmaNaJhmfioKqpuqDyPMCX%2FALNqbZk1W2J3kE7nW9D5nL09wQQPgjAw966FwgY6pgGeEYM4WzHVL6B0GAKQsueD0AnFhFqSAYFgutPJP3T7Dc143myUs%2Fjy3o0RiJbvmDwFNSVVuAJh5QTonFsZQ2FFhqeWTwiqHB1jNJFd33tKK2%2B5Lnp8rn6Gc9ZHHYJf%2BECx7TsgJSG%2BQOxwsI8RU5cvCEkgMGa7pWz25XduqqA2qeE6Xf7jJRf5tUI2dbuLntGXLxLKF%2BSF6I9G0bNCTeBrf4doaDRV&X-Amz-Signature=1c25457a2a1c2c7679d6b97bbfbcf3e4ac0e8739f88da90cfa0d1f22f6a3c024&X-Amz-SignedHeaders=host&x-id=GetObject)

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

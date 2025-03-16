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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5RN6OM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpkSr4UkelFOwQYcfZxV%2BoSxPJrWlIiXBFDxdaxL4jbAiBy%2FQvZjx8hvcCvwuzwc7dv1G4uZP4lWTHuJ5PmizsM%2BSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMrBBX2ENwxWWdikXcKtwDqnb8IBQ2AgvOS4fXLFAqbwM4KrZEcXwxSGsg%2FiyGajPhkO9jMPiZ6yDnvJIhQTEgNFu%2BZpccN6ax4W7PJThGtDU50EHAusfPgUwG7jSGpDNF7Fu7Inc5yODlndMxGSW2%2FlZRxIA5SGK0EtLjEmvdYA3zB2LAqzBOXROV%2BIlHV0Fr9fMfA5kawrUWHofUgq8vYZPG7lUXnrVwJP5D2QyoKC%2BM%2Fd4LxQBDQ8ga%2FPLUOdUQ4kLVlmeLA6G3V%2F4JD%2FJZwLuOUA5pPaxnrhn90rPidcZy5Wrg56vkq7cOyyGTL8YQZCi%2FcBSZ6IRUg1XHAzFZOCf%2FolkM0sKtd1inpHzadnV%2Bhp9Kfwl4MhhTwS0u3ArNixXWgYkszVCLwb%2BkGrqo2V7j%2F16nQ9tToN9Xrr7IBm%2FQH2pR0jzMIYwHige4XhQrFjqb8hQ%2F3aIz6npB4nS7%2FQ436CTkhtMUvx8S%2FpAjVP73vzlq%2B6GnhZ2Tq%2BF5zYIMaSEDW2JlIEyO5Ex%2FzeK%2BMksn9x%2Fa%2FXZNtUnyv7LgBkzyiOneDt6%2Fpi2ngS%2F31Ap4Tvd9rEo58WqIiZgNXc7EPM%2BDSgF5GzglGAKfjWkU5IAnikFGqhZkv4xQM%2B9OVbJTvpWCpzRxvuCiMjEwjqbZvgY6pgHhfxiAESJFB8Mor%2FhvbWNlGmSU1BIrr8lk3xl1k9ZbSZlBJa3cf2OCNoKihAEdZsDEjmE0ZvZ42YxICOJFI4a3nCTtgk9%2B6ggzYHXVawAQWHWA4PXp0SkKJAfRkgO5mX4KAcDqi%2BMNlkkGhp69UMxQgZ0NjwacRb4ZbP9jAXWfge64ImosIJcKWGzD%2F7q%2BJ3hQf6Za%2Fd1t%2F1gVO7wnlQ5grPKgLOig&X-Amz-Signature=4eeb06e98a73c71449531fe4116d0502dcfe2c94f0b8de219dee285b1fe96585&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4PVEFZ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSoj18y%2Bu1UCaiCx8FrjNNSHDpi4R87ZTZl3x3KRjq6AIgGuu0rMrEo9Il0nmXv16BJk2jXx7tWanqGCCxUCawm6kq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLWey40e4ZcBTqtkWyrcAyviZsc1GU0aYvaJlq3AxkCob7y0QUBPOCpkw3%2FZIX%2B4jzFqb%2BI24cAka5pHWiIXoR4FyXm9OUFMPAHwn5Jnv6CpwVAji0gG%2BNp02YydDp0BpCgZGo8tKm1KtBUWH2Ev69%2BTslaTCOm0sdaQa35jFDZpMSAyAh5gYs7BQa7P5NzCVcR7AHSLfSzYeUiBBuVJp83V5CTise%2FpY0hLBB5T0OgT%2FeSpYZISsoVG7h%2F%2FfmhUnmpheC7q98iwxHBPQUIrnFXypr4RfGtz%2Fb6uj5sypgB0mINor9FgzV0QnntK2XmoCkRaxgb78e82tB6s1w6%2BRSYLVEQj8cuiytG3K3xIZX7uLG3y3mwg2BhRHX0cpI%2F95z0O87JowJDIIODGpevd5KsKFvReNGxdAk3%2BbSVNJ4GY0qHYGTecr8ugmXOdJLunifc6Ogc3%2BwQforva6vx69mPrDZ470s9YdLsG46he5lkBWxF7CJqttgX985PC%2B7wKUPejuChABWfFfck6Xobbo9dakMUV%2BOWVBGr5AT3colAtfBTe2bif66k6igwg2OlNqVp%2BH8tdYm70ON6bAflZxG4PCTcEGPAjdEIt%2BXOUqu%2FY%2FH2MrlwAL0m1JFDeJ2oF99Zu0PKS4KI5KCooMOmg2b4GOqUBBXSvCv9luGH3gpUK0T4tEUBNQgCVxSx%2FBtcfDXCySA2TwieUXPgGu2nnumuJJ7OJNEdSiiKCoAvLl43UVgZhZFazubqc7bR64KH8aR4r6Xfje2kC9y2rNxGA01ge%2Fj%2B0fgWIt4EppXP6Lc3sVvJpMghOOZ1iHI7t8iaS0YIxDkNSrLrdzL4aiHv5aE5FR80MPxkBQ9reslhL8yCV4SbJbqFBNReo&X-Amz-Signature=9a556422cfed621ab33c17629be78ed4dd631e718f2bb00591b578328088711d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

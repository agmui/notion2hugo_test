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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JMEY224%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIBHoo0GY8LZJ1UVAUdMSrInYRBSyPy0DCPU3JL0yL7rsAiEAtW1fhrBCE9kyw%2FBu18Ycp7QNdenD7g%2BX8FSU36En6TAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAftNMNl6V%2BJt%2BlEJSrcA%2BztMNRRauCZ%2F7acp%2BgO66g8LP1p4RuoyvM6JCY8PPOxlTxQhyRlRwCDZr0TqukxI1mOYkmA74WEDu5exBhTK3mNxlxvIIwkgw3YZXARJHnTYGabfj569ZXa5fq%2FX5YEKVyxXgJuxHn8xENsz%2BGaZjuUsKtHKWQlSK5qmPESfNTAsKu0vR1KN5rLWwj0HW6zBF5rX8FNxlOgDtMAbZ2h0AwV8Fk7VXEeroZdsrhNKHVCqmThlIKG99BOkU4H641ozOSZlKjwKduq7s6p9mS0lDL9FvJESBmjXgSMgnO82UvOGNlH710Ppl34uLGb6o0MzW6914BvNXxX1kiT7sBd4OTKLjKgyJr02A1DbA8LXLmXENBKd2%2FOSnqFnVuFxn9ETFOxvhz3Pvu34mJDf%2Fir0yumlSwfkNCPWkogjgLLxC%2B%2B6NPZs2hL3oyp6FBU7g%2FWtA%2FOg4JyjIxxcBNpR7EpFy66l5oPI0EjwsTvR3iBPeF6Tzd207pvlR67APSIF9bqSw%2BShrccWD2FdWNoOWnpzrVftbiXHur6QRNwfkOjP8NJdIO9oajFVD%2B4s98819Je2buALMdDGC6MCrdw3Qm%2BEr6i0TUsRV1KV%2Fa8pREgwEgSNoOIgUoTTk1TwqVqMIDzhL4GOqUBj%2BbUH9urjPoKOPZEXWmsLZdlWiy30oK6oeqwFSv25JdjszeWpAouNsgQLa8zzxmyZ7ZmkQbK7LOqxe4Dts%2FM2s9rx0c5Ezq2ON5lIO5xIPJYViExg2QqN4RA%2FDRO6hWdjv1FKhhhj0vacsHMzhQgJyGFx09clFJY81qnMUEzTttpZZd10KeUpJew2bMQaAv3UoN3nL2OZbth1aC%2B5vkc0ekuyLKe&X-Amz-Signature=8ac202d1f19d5564a50b632f222387f7efd81e8a5086413435dd8528a04256c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULJCM5CG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFwfb6Tr8BS2XaQJiQR2qkJsTzsuT1FSj70pNXVSBg20AiAUWYKFjM%2FGSDByyEkFmGfmjElXvf9A8fKuTKKX%2BxMtsiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEADmOWV2hMXcd1AvKtwD2%2BerEXWuiU9hRTyz%2FH6TYeFo1DrXNPialERHsoaENrVJiD2%2Frzmz5LMU85bn%2FpBoaNKQeGla30SeRJ9InpHTZ64VKTrJCErW2%2BYox09s18qE%2B6zjchJW5xR6UomVLtVaWc2W2e3%2FQKczr4YyhuXLk9vC%2B7rkWwuiFc86GYf5%2FixVuwz1AO%2FSvr32nsxHI6jzoN6bdeoxOiZpxZLVfD4y2DcOPkWbY7GjLlLgwRnfOIh5qgOOHj3%2BjZ0HfWIMxhYShx2EpB%2FVQuPGMPezZ2hzSDF1DDdm%2B0sDt98I6pnqBajV8%2FPn5li%2BGXsaFUqfhyAOCydSrCv8LUxu1cvnIgFHFkUQ7s%2FgWOTi%2F7scG22GxDcgo86erJYj7936A4VO%2B50BcG3XPWpAoVcpLp2WOaa81YTQxaDdVs0AZxInCGIvYoUQtprR%2BzgHxtZfwupqMo0HVxtNeg4iYQ%2F0YSp3Ge%2BPbvlsLu%2BPMsC5B7XpnDz4tUl1UqazXSM%2BPt0mma%2FDsCJxTV%2BLG4IlAzgFWR%2FaVf25vLUCPDTTE5Ne9Q2qkSgr2I5u0A%2B7n5dy6KiQW9znUHub8lEzfMa9T99ObiH3T%2BmbCM%2FMA8Z6ulLlFhJ3GX4rVM6E15Hhuv2Zy%2BOFXAQwm%2FOEvgY6pgHI5gUds1DpSFmfRIQnUzbP3QhfoVG6lPrp8%2BrcOhUXVxsV58%2F7xr%2BndKNQIxiRP4PzLvaRIO%2FX%2FRBF40lvLfNGepRmpbJ5%2Be3x%2BD6Qez87f7JAfCfMUjKSxUN%2B%2FruZj4uPQazTrbNZ81xBWJnLI%2FDThbIrXf4WHpMDOtMAlnvIeqizzIJdMBX3svPFeyVz%2FlxmoBt135wP%2F88%2Bf2G2%2FL1lWWgDlWMP&X-Amz-Signature=910ab721ab7a15dcea165ddaa583ec94bcabf49a1a894f2efe170c0399d59456&X-Amz-SignedHeaders=host&x-id=GetObject)

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

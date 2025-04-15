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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOOYJ743%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9Lq1NwtYk5P5Knjg8XQAcwaDE9mg3VTxrqEsjoZ9uxAiAl1p9XscjrokdJmhG0mFWbVeAe7QiZwUxmClCnPPLv2yr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMS%2Bjrvev3IIMvkqD1KtwDo4dUtSvgtyH%2BNXkh6%2BFt1Uk4uLfJCkd14uMUQ4Mm0P5Ewa8dl5ygp%2Bf4rHtHc5tEQSu3jbKF0c7fwCqB2Ta7%2FwALYQqCnzAT6tekaXloyl3HN2QYcSGL1wXyeR5kWJc2naCkXwqjLsuiKO%2Fydlz2qSMb6NKF%2FJC522nJTvQQk3n7GxOvxQYmcTUetUd4%2BfkZOr5kQ%2FkWSNMOsEd02rB6oyOPY59vf6nWOg7tjuB3evXIpHeokSLBdKHPcDPDlhNrqbMX2Ts4Lge6gdY8NxtWYbYz9P7F2rucdqdhdG9xPObxhm55XyAoYRb9DSYJvCQMwxXiOglLyHy8Ft0G5%2Fbi9HC95F2NPT90t9vmvNTdvhiou%2FELw0%2B6Q%2Fei%2BtnEPrOVZgmBL6GF0q8wEpkQRvu1RqeTKGpH%2F75noMYinDDRaZ9k8TFk70hOqSjKQt6YufXQiGPyC9n%2BVcANnLTmDY%2BtGRhdMlchBF2ASwBPbuxOk0UmVF2VR6XvxNuxHdSyoC7acJGdQItugKaiG8luwqr2SowUO1VbcTH%2BEncwzCzJaJ9LHQcIewU8yuKm4vrDphuPTVxZhYaH1ehAMEG7SnaxkmXVXd%2BmePI5H2Z0QfVIf2G2OdVv95J3yWQ8k98wgML5vwY6pgGzsmKWxEQNm9C%2B%2FFeF%2BclueEFypoQdPH69SVEmKny%2FZRn0SJ1bqpCyQGrvS%2BV%2BOkmklVu%2FbR4rTHLwSaUGgiVAxy%2FfKyJUIobXrIyZElZBfxHWRi0VQG1mxjMelKeJcI6CR8yB0HEN8uCFEPjcxXDTJYCy1AZpNvO0hlJVjIJW77Db4%2F5W1xb8G2Es7CC4sO2H%2F4%2BqnhHOJ4sq8O7n%2F0p8Qo7SHOLG&X-Amz-Signature=b8446dee66462cc9e1558cc1970bfae36e2753b56840884788d3b86cb4d4157e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUUCL25U%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJX8%2Bh5m5rUgdRcHRBxpIk%2F%2FeOpw7%2B2X2TI4vVJCileAiEAnqc16DCKW4iRoc6rzyto0fqpLBdLYhwmZLrSjzNHwmkq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOwoi784nNzUgStgoSrcA2jehpvvbD028UAA2jMf%2B5cBr0vO1W81fivLFWS0UzWCmTeMirwQe8ZSLdRQu%2BI%2Fb40k%2FHV6IEB%2Ba4lV86lDHJHGJQKpsn4ozxqlSaMVfbE%2Feh43W85tMYYs2p560Rx%2FtumId9JLVm5AjittC%2FfELmNGhvKdfiMljPH6aZUfVlPWltlR6zcv112if7uQXcaJEJ2W1htE3YaOusN%2FTFlSf0pxXJLgRAB06m0hTyyKli3%2BqZC2JSJQgu%2FDkl2liqDgI%2FD7oJHO1uUbsbfX9RcXg8xB8%2FZr1mNUkBYl4MklOhGPh707pSoF7O%2BuvY9DHuJvZ5vlace4lAIzTbVehHK9mJrK07fjjRZF5SP9jW3WOUUNDhQNcdU8LdEdGHBx5tHyVFzpeSREujWI1%2F9nDnr9jKNNW7IgBRYsQfk9AgW8P%2BOOh47OLemQXv%2B5ZWkitp4nZFTrkocxyul5dPIMT52QpBaTkPt6GdB%2Fr1AVwq7pm%2FO1NbJnfaAZsQv4Q2%2F8buzjlulsWgitxydzYewN5oRoCIZlQyTIzSOB6sDpCF%2F72aMgGB4N4lAJFEQP9U%2FKfdC8XWDYoqBBZz6LjEMVjh4wBs5LNPrpySTokq3T5nclEGZV825oFuKNii8YTV0mMKjC%2Bb8GOqUBBmLea5vOpiVFQ4l%2FjbLjTF7%2BdjGeTKUm0NtMioJby7ZtP%2F8hfUIspf6q8hLsDnOGlCMTreZwWilN8EzvU0uhtwqy%2B3aT7cXdQv22nRFghUc%2BXXo1aZlaiiS3mkhD68f8cTqmoHNWTQSEHyzZ6Sp4UOgBQHd%2F%2BUD0LAwJnMquFclVy205nryLkq%2FvLkxfBGVjA3MZf7HuE0PdfxjjxVKjtFuOVCl0&X-Amz-Signature=1ad5a292bb53933cf63e7c77f9bc51463f8dae7e029edf86ec9f913d683dba45&X-Amz-SignedHeaders=host&x-id=GetObject)

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

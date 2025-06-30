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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TM5GIN%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICy9WSACnDAkoS%2B%2FGiOPuvjuEBCcGW5Lgjk7YjXI6mr2AiEAvD1dsqsxSUaGzMqbMRBLqQfNI0d9qKf4h8vKfR22c20qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8RVZmlampphlj0kyrcAwQv7193L%2FRSNWK3yJRDlP6acaXJIHbb9lY%2BeydtJR%2FB9sTqCf5OHF7WHNZ%2B9HoYy64%2FZk4ZaNt6AtXSEwL0vtL%2FWG4vWt9ZYojRGcHsyBc%2BqVTOwRMyYVKpAZq2B07kMt%2BP8rqhxdhUI2IUwFQ%2BgNyGWO9c0wPsxkmaweLwDtJJF6aOx7Rv%2B85xveEi0oWd7ClxPu7av9lHmMAxTlNMOMoJryefFQaeJA0M80gwFkGjS1JXPm5N3ArMXiXDLcPwiLTyUWCHdNcuqwYHSi8UiNrkuUxIGeN8Pg4tenyOnlXZG5cwRpoHSntRgG0vIOdEDpmSOCh6UtL%2B%2Fbw1Rs43iKWaMHVCGK3ysnFluC8mSxWD6GP53FwnviOO7XFZWm4sr7yUozm8FhwhZqSq7UtkteGIvUJ2HZYZZ47qwvJgDt18z6NL4mN6wNi8KORLddlIFMEij%2FqVXb952GkpzKKg5jBu4pJF%2BkwBETZkAn8nkyOdCVDzll9esplZdhgka9X0%2FgDQRmZuhDxrCSgsHLUbC9smW1U09gbIBOnQMik%2B7mM9HXGg6E%2FE58Iq4kiS3jExXolxzOuwPf8NlxZLJ53DR%2Fh1%2Bq8wYUIlCvFJy8C6H1lXCCa3zO%2FPWX5rEFLnMOCjicMGOqUBnxfzlVIYmKDklUuZw%2B3m3Mo8HmgFTVFxOUjMlXueX5kgesICvJ%2FvKnwwTEBQMl0ug5ZQqaL4i2nUKsz4Vd20PUMeonHkAVI7hgoPnRN2noethCVserhp7kNq1ZXQL1%2BOkmmNVNmtoxBQLWjSL9zesnQ%2B4C0PZNDwizluZpUUOwkwQ6HODf6Ww1yyvwCqgbIbQUvNMOVWGxFqrWSjucA6mnA6WHgn&X-Amz-Signature=d68fe85be9a55bdd045c84b873c5d8f1d9b4a0feb5e3d3929dc75a5748affbff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666K2FWO4%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6bFOGh96o0hP9qJbXi7rGX%2FWFg5IaIreuyMn2BuCWUgIgHIcweSJbFpSZlh2EfhMcpGl8c7z9aN7BRm1DHqDQB5sqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdbzP1Uud0UW9U0LCrcA9VAhkkygtQ0gKMXqb%2B5vwV54OQbJL5MQMRD9Jzjt0RWlUEQQaoWrgnXpUIerD8Uo9inA6NUaxEB10BAdY02N31Xb0oZAdwZ8Mg0uBGXDVOiS18hEK0dSpNJd9cLlTdcQCN1Le4vEVt6%2BHv%2F3Y4AXuPvRRBT0jZCicpUwtQnMqNFb7eS3ELGCB5o%2B9sLrJlmqE8RW01fldd%2FmsbpAk8TtD6WfSIvIpowE2GMlhWvaLwPmTKELMkif%2FDCAeH%2FYUyy8osRWX0%2FMm3IGehjYYo2ZUwVgQLHNkRl8e3SjnrpO2quWkwPRBOU6xXGVfSps7kFjS9wFmAZhkpHmt7qhEFI85DXoWbliJNoR5L%2F7jbzc5h9js8uUKMSROaQtZmRA54mi%2F3j7T01f6jP8VSd2%2FzeUkn3FsCZlN5EPooXD4GoFnhEudioE0yzDzEb6gQpIIL0BUUKiIaQ8O%2BkPH22KxHJYMt9nwz3iMYaA%2BlhUp8ZBImI2DKAbzeeS%2F9Eza6%2FSfI1m%2BgQMCTCYac9OwmzYTbDr1Tf45mMGX0ltzS63lNcg%2Bl2XOW68JS9HJntrnzKtkMMZLCvJd96Txriljh5QmCwFcg8NUWJv2K6YCF2i42djgprGQ3D1Ed4bD8etJM8MP2iicMGOqUB1WwqL0%2FDAgtBJDA7hgcC5wf5cJ2JYIVVXG%2BrdxDdF7SKTbeibulcRC2JbqcpteCeaKvBfVfe68eDcAVsYjG%2FYXSKKq66%2FXFdXCBaLqsMphCxz5xGPFKz%2BKCP6jDISL37wEO2%2BmisPu51gE842FMYP4QfsY2AqACawIxIXZJCeEe0RATwkNWUJWKIrn7NXXfa8AJ9jbQgpy9h78JXeCm2GHlBBQ6X&X-Amz-Signature=79c30e4cff348ee8af143dd35d8fcdb2e6c0eb6f92a994e7fa546a61231d5384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636JHJVNM%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3QsjNVoIjh1v%2BBJavYdDdeXsDsP%2B9lfmO%2FSZejLWzIwIgBwkGmbx1lzJd%2BCbsiki3a%2FCPHyTDhY5M6NvhxJbbHWMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDOlqjd77tO50HMfWCircA3EmyqthQk2DHoydz0f1qhY4%2BjJNlB92IiJTdIsjMoxDzvJ2oYibwRg3N%2Bf40uhrYiEBLiHvqVPISc6f1x%2B%2FmPq3lzmo1FQPBySB7ls66HCRvRVwuChhUQEhXEqLMa77TwtcUD2oWyJx1mz1SQNBCEk7fO4iEm9z3hHWnzzf5%2FMG2YKRZYqToT36pckSIOmd42S4HAniyYICktcSFMeWuvoEs5lJQn20y2%2BvAO7lco9Et0ElDdp8y5ueqkEOgdNSdo8x7im1E6ZtXnGuaUlK%2FEvxafdAdo0MW%2FKIU9tm5%2BXdieZn9JaVZ6zHvxaUfpJd2Z2%2FYvYFB%2FhG2aEfVphAXzgeij99wOpI1oJCW1dcXIYcfqIgqFdjojmsk4fWE%2F%2FJk1OEOKZCIZCN4miNpvm7LpP8MbzBHDC83hpOnaF0tZ%2Ft5052zxwYlBRYFoXm8dOYcbRK3ldrHbszYoNb8rd03tdbhEYjwxFJfyo%2FgSwyL09HOVYmrF8uvt7d9joXwXt%2Fy3J%2BmkAjPRQ%2F8F8g1h9kR1We45rbLjiy7JvLIIIMjYROdt6tEaIp5q93RBZpMPH61yA0pnWJ38N1E1tm8PwFVSc8QNjsCQRu1EqH087GPiHZemNECF%2FAJeIhEE5DMJT1hscGOqUBGfH%2BMDCr3hInGZgXvlZQB45i%2BPvfw2YjxguNchbZ5Y9eOdD9aE%2BlIwQPeYiLVgjq08XXb1HFhOXzro9obZUFI%2BzP4wcm7w7VZaPt0G3IO8ewRBo5msOJzjIYHc%2Fo5NqoCe92B2dgCyWSTZHv1T8qlxxPPmzPN9r%2F9If4GxiQKFeBoq4%2FcBOXUlR8PJpo3RFyh2bPexmMmLqbogB5A37hQ4hydN5r&X-Amz-Signature=696c49a7d59888783d7d30b4350621e786e9909c6bb87a8b9b7a6e6534af33fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUR7BIE%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm7%2FFCbLDwjCnZMzxROy7C49kHjwlexYWf2estP9uc6AIhANkOX7uLNVOu%2FODRSSxwatXPRpjYW8rFX5Pz4cFRhahXKv8DCGoQABoMNjM3NDIzMTgzODA1Igxl9i9YeHuMKtew7AUq3AMXXvJYiPl924iBzXoWT%2FmEwGiPX4LlbEoFLb4hOJ6CKkbw5OThcPM1dVDM5brh2zKZgZValYmmDW%2BkLwCNgS6ElZtRoghFP%2B2Tsetqtp0dGVkK4O43w5vLezxH5Tr78kSzUdUH7BmSYYnuI6uv8IV1K9imcR7oU8fo4Btjlq8lyN3URNbsFhIJbyxq84%2FCYaRbRkImEBkANe%2BEhEAkx8b%2BWW5e5lCJWheeLcAaVdpWtFL37mWZzDFX4%2BBzokTobQ2cK9EcEjbj5v8gzhmidNLAkyqGWBGiIBq9BIZxppOqln00OKOMh83GrzUcysB%2B3z3J9Tzau7aheliiepijDsMG%2BNLnD99vmrWunf1XZMd%2FItD7xmdjR71n005tEibD4FrCHj0v90J9jRrKrLSbcLbEDnHjLNlsoPJpNUWw7po4ymFqGeBed6sX8ZJl2pk1AWVulN5JG7iWSuVbIWCMPbCn0hG4k78f6nN3sP48yalCrl9dnGHzp%2BVkWBqt6cVHsVGPv2dMvu7nC3vxOVc82pX4RdoXri2r8CgnFU5SpiZztoSl%2F%2F19TkvcFPvrz8s1gwnTqB7pNp7tngRBWrtgmHvnekkyRlJeeAca8De11Y89uA9VuV20anjH5BANAjCW9YbHBjqkAX%2FIgSEZ7tChVZik%2BgR%2BR0IIimcaWMJlvLoj1DVv43NvVbJSfGGJRrjpNjMYOK2yDxRZ4OlhqeuTqC2k06pqw31%2Baf1jdiQW5InkC%2B22QzZ7d%2F5TnXZwdYfg5SPWb0wLj1c0IzrbzzalPUtoOPzqeRJ9KhHS6doxkh434PsbRFGfT%2F2%2FeUFVqpqLrZFfsaeODactzVx7TueD9a9hpuEuvz3VkcCu&X-Amz-Signature=765a15ef1837c1527b4b0a7061815b4ca25e39ad0e10a3d18ecb68d2e983af98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

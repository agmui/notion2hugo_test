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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OI3G7W%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQD6YQ00oAFS5SOq04q1vqoQxkzN3FBDUSHhFWcZHN6zdwIhAIByZeRe9xa9F71Ud5phVDEUzk2FL4MgxnSexSo2CXudKv8DCGoQABoMNjM3NDIzMTgzODA1IgzFH8FHwB30nj6V%2BQcq3ANVUSEEw3%2BE%2F6EfinaE8EPby5FsaFEKtzUEJQe2qrKZCY6WA0Qn5K3ht3qNQaYUuyTnr8jG4mISoDHrjdS97LvEt82DFSVXqNCQ7mJyPWMbQlQUhHENVM9tT9CFFvZVyBglReOxT%2BkIzG%2BRQ6kgGgCaHoJz%2F0LnA5YvRcpkGRlSqOtM%2B5TaGQaL%2BqBoBOYk1K5t5kKQjeTIa9nF3vunyRVzgyRTqfwsxL9uey8vPa96TklUKLBalxGqyidoWE909DJsNzVmrPfx4LsDCX4YQqPAuXCzy9kYWPzVWXSskTpJ5bMUaXEzo5fk5vUasCu3QyU4tNgefKN290CBbZV3U3OnjyQ%2FoUSiy1JBvyK1ooamZxIE6hbzIGTgAyvRKZCZQ2WWeKeSARm2Xh271u9tsLbdeCHhVNtHoq7YDcDvK5Rdxnz6tCfSwLS%2F%2B8lNvezR1WIuxD7zv0h6P4YBKml8kSKmYX5HIXqt%2B0pESLqtaZQsP37QuLFdgEgaXeso2vmT3tbQjiNLlBxWvYZ8GNUrRibyh7iB99HhdjXSHpeXvYwLOwuObx6%2FWxxXfMaOkBl0uJeOsnAX7YdZO7S1LSFEgOJcp5xjWxQedKPhy2RIOuAnIG2fOifyv8khFhcRnTD9n%2BHDBjqkAQEzPqBA98ni3UNbRdmhztt%2FcnbpVcalID%2BYeQ0RIBYVEHCfmgEdbpv6Y2tLKCEEYLjYKBKq9IzBEp0hgcVGqTHGNerqiaY7fp5GRyFBQHLYnpAll5hwES6NViMxRWvfpKpHq1Yb8yaMhJ0vGCRgAL2E8yjz0JpBAzagofg%2BOIhTCnaBvxAc7drVRfNntVSBSISyX%2B0%2BXONk8gnOb0l%2BATHcxZE3&X-Amz-Signature=421076b9cdea34a4e3fc981d09d287eff2ab21993f837cb169e76316eb57001a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZW6ACI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDu5DcW%2FXL9m%2BhutvcA9c8gscxYt0fpv8V9MOaCxuem5QIgAt1deI0HtsV%2Fm987yDRerr50zD31taL8Yy3RLXg30ngq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDOlcvJdJjsC4itk32yrcAxNEcv5BFzzGYVyPtRym7QOwoFYb61pobM2nv4ytlGyb355JMCfboT7nSHtPWNAbMDhHUhxjpJCHJZtXoFwar4a7wFrVF4r6aIBv%2B9w9P%2F0fqqg%2BR91jpP8hdSJZ4MddmlQxxJ4cKGef2ImL9TUOOdTkpDZZ5XAU7%2Byt%2B2q1EKYnzHrCKr2GoH5mG4%2BkFphACUltHxhnxul1IYge3MGr%2BnhAgy1RLKkf5Xx3Ma1RZo1%2BpEy0IGvoexc3S3kgie%2Fg%2B%2BHk4iLuJr%2Fw1zq3UXIJ04GGJ%2FaqLwz1aDyDKaKT8%2Bj7%2BBe4JfY%2FugZo4WguzNLhjaWDH3AnEEEkZXbG%2BOm9T98IiGFpeWBHhy6%2FYmQC5AQbKXyb5IWQ2s3rK0iSmNsODKOROWhd6%2FmkmOEEnzxrAmg%2F26emrIskk6J%2FVJinMC%2BDY8ze21qqzs4ywbe8QyH%2BD7kEE%2B1dc5lxIQu%2BYlbdLJH6yX06ORKXO8X8DEbKq6%2FgnUVNO%2BB9fs3BpEi1kePrYjp7Zd0UukL23GyUPh4exnpAwT7%2FM7ExhNGThCNjWiZtPeKDYEYBeVgTRki4j8cKHmKb%2FhiV5MkDcWG6cHpllMWh5rM784yVO6Qerl5VNvHicYxXyVq0Mtx82xp2MLug4cMGOqUBAb%2Fqkg5HkBGpzxWCyIqNc6Ooigv1jF2WWE%2BxgbppKN8mBzFoIX43iEyqruArE9Wx7wqacCCsLedBVa%2BpbNixLviWD%2FvjyxHkcUF7YrCeOSpuSSactZVZvUQyusSHy%2BxMGu71nA39LS98fE15ha1j9tNqDCQ6sMtwcFl6deMoYwmkSjPgPQyEAe7kS6TZlSwWEjB%2BiDBwl%2BUzLm90YPrPMQjg%2Fdzi&X-Amz-Signature=341ded3c77064966f45f3acae7dc151781d4d6f8bb7606044103044fdc483658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

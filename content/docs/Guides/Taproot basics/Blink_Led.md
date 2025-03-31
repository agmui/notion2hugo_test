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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVI6CLOV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICAAcWa6bd%2Fa%2BiN70V8AQGtMkbPCALaFw6VVwzj8GGfWAiB%2BTiwDsSDe2hdDJy8ASpJsmjsapaTzun4lqHtZKWA4qCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZiw%2FIYiIxE1JDG9iKtwDVOfGwpbB3ybeJsqK7xv0GSGg0FBd54bEngubRR%2FRFyEk6g%2B9qLp9jj%2BocJE9BEqZrmRfRY3T8%2FbQTtKDVk8TLqPaGMK55bFW55PSx0yDhIOsyrsNI2sUK1F%2BSWkmrh6wVfHnBGcTUyL2YUhlbK9PSPmRdZ4Met6SUJSww9dYMKVhKpSTnIVYAEu7eWbmDv1vXFVy6FWW87Adp%2FDXTpb94arqiDbhtwrBLbrD2WKxIf8N1BGAgsZD3HF8tfG3qPW5FWrqleHISlJ7NtIWuHNWJawlnMTLhpWNsPTN6h3jIa5GD0VrCSZnhoiBycPl%2FgWZvX8fb4LLKVWyway1YTpwIGG5Q9qegnNpO8r1RfDLp%2F9nx8z2nJt2EC2iVMzq3X7z8OYjOX3uUP%2Fk3vfMjqraBUliptP%2BilWF9NjDiUi1pGn2UpbJgWIVSy0khS9e0zXFQQdYtmkj%2Bl1H7b8mbiJcK4gKTeJDIB7wuW%2F1hsJ55owTqpMyCeLPMDvmcN6kinnU4%2B759ECLRR3X4EbA761RrOcsB3Yy4w5JKTHooEWzffUeTpwzTYFLfH2dMf6V4fbnhtnh8n%2FAlWaueFCEUdFrhzOeoOYtIuWzzCQbb7OS9JNEqFBAvUBeVO1Nk1cwkqOqvwY6pgE57gF8jrF%2FZswXmpfAdSzkOKxhm1cpJSjlkl26RMnbZW2dAZJCxKr2Nt2bf%2BPXxoxDG8WU1y3pfEtDXVZ6MhLfnruyzXUM2n1S8XCP9TYAlEvg3O3Cu5MP9FHRPLLmpgU1ASRVrw2ydn9OeeqbNKh3Nki%2FZhEu30AcCl5N5%2FQjzj2XJANjagJmzRGFRLi%2FrVP2EIi2kwP%2F7VD2Q12vxQYbo9zo438N&X-Amz-Signature=fd4888e86b8e0982e7c9053d98e9beb3c3d32bba8719bbf51f5e1632352134a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WWWWKCH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD1iFGYAIrKZeM%2B7oR%2BmmbgA68HDREB7LgWa%2FMoNiNNWQIgbDmEYrvNXkn1gEsCi9Ja4RrKH2HrnOXTlMxj2FgAyA0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEPL2A%2FHJmkOt6byCrcAxxV0G6ZSJeb9qBkrP6b8Zl9a%2Bh219OwkR%2BGtsFTd0%2FagvP8LTZ6RZ%2FU4ItkW3zTid2nyo9tLQ6ZBqOL%2FNT8G4r16JexEWXzccVefVLbCxNLm6mAaT2bqvi%2B3tzK89ZhusgUZY7cMtvs4u0x6E22N0Xj9Vx5J%2BsiSSA4ueVnD0yMSmoS%2B%2BFL%2FjYa8oizjJhE%2FyLsdUso1argfHY4L2Fn6K95zkC4OaKEO1iXesh00N3MDUzhM5zsMD6kO5a3MEH40uh8WsM5DAQBShCCn8G%2FgHuqG9Ah0plbdrE1To6mWIFlyUW16uwIW3gB5rS7QqT7YtWv4ll1m8BlvvOGBs993xRlS%2FhcP%2BTb%2BrNMibBLGCTKH39%2BKYTLWu0pFZuz47RX6rmWsEsaqiAcfr08ij1EdW49ph17tc3x6E9YIh15gHW8Qg0b00B2EkWiWOhupdno%2B%2FPjp73VJPW1eYk7jcafuyhs%2BcBqymNHDLXQF1MuyMgSuu4AWQNQgkvmXdvvbSz9IwC5KGaTbUG97SS5QisSnnQe%2BhTvZbJB4Tpt5XiZLEV2nPuAU4hR1ibI%2Ffz2FP0QxXpBbQQp6bGVujLrHiUdu8RqgGbwVdQiZAmKsoM%2Bc3vYLoymDS0V8eF4DHGoMJyjqr8GOqUB3J1JP1XnHJrfT6ddcQ0n7%2BEmrzXh96oA6ZXvoBsNg5vTS6Qs5dmArSIzRaelIji%2B2b1IMYv1maAP4X0GQQAwresWX0rxo8pxtoAgEfiR8GijcnB2PJaQUVGgXXO3A5mteopKBSAM9HrBRZcLXbeZo4wdH%2BXBZuhf9unGp0zRFNPa2ggGFtVxkvKLLks4S2zY6%2BtfafhuTBf20yjETvvUhMre2ywf&X-Amz-Signature=aaaacbc4eb3f2dc145301d0a74124facef6a82f8cc399cc952661a8cb53cf839&X-Amz-SignedHeaders=host&x-id=GetObject)

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

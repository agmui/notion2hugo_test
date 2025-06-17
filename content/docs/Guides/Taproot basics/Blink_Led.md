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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ5OLUEW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGb8xsQ6p6ziwgGgdnQUPVboE4xSH22Hm2DCSyt0%2Bn7ZAiBylSqc%2Fd%2BjsYSOXZSAUC7ujexs1q%2FhkXIXGYSjl%2FwbBCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMckl6tJy96RruhojEKtwDzzbR7Hy5trTE9v18PF5%2Fw8WPm1WYaQAtrRqiceWAfCRrDtmKITN70dW8%2BADZuiNm8IftSSKLuR1fvLGe1ebURI5CmDYbxbXdpyRPkF8e7TWno9xwgOUKmEXGvUeX6%2FA894THP3LCVjrdg9wQb%2FEcgmSOLQt0jgSU9pv5YAhGh5%2FkEltyzkUuPVvwoILGZPzwfO3Sd4gUpZLOcVBe2olM3boyyCHDrxNjniM74nsbpa2lHE81HA9Ehverha5y%2BO8GOWAuzfARXE6pLlA%2FoXUZW0Dg4QsGHQE%2FkoLiASk8%2BF7lHyjrRJimTAoBwopfUegXi8u7OHeYA0FX9IkMoDJnnz3qWkz4XUGd572yQqdcxvtYHht%2Fm%2BG5PVWBS2%2FSgm5IDfaJ%2BEhGH738JfIMcckYQUrinzVwWsww3KuyXk3mEec2FDgRustO0VYEC7WlKgsTmyR7OYKbn1W%2B5JpolO2Lpru0vYbPpdZhGaeqiHk17NYtfeSVnDPydLtNI7B8%2FJXGOygac7WgFJFfgO%2BoKTVsZPm3FP0hflKs5HBjhpY673Ix7roA7V7Suf0HaPsU8vOU7DxqPt3WLEIWECFEqsJHkPmvPou0aiaKW53B7OtIUtRrHhod0MOVA7NG784wjInHwgY6pgFBG7IjCQ17sQM%2Bz3FRY3%2B%2BhWYxFWCsTqR3hVhFBmOxYi4WociM0Ig3inG9sYcxfQBX66tRrl9OTtbCaghZ6htPhLWiNKBFfJ67KoXwWGmgbXD%2FEt76QY2T5%2FGUVjmzE7iSo4RyzL4p6sGxmfRUGIfSLLxBPtzrYv%2Bgk%2BI5PJrskf%2FbK7dEGTFBOPpORIn5hBREP0Q2gkKipp6hqbKutd3%2FwrrHczv4&X-Amz-Signature=33c53e8aba885b07c3fd50b48b33891bc29312f47df8c10b18270bb28b99005f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXPEODM%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD65jLxA69O9pimAzDN9OpBCTg2F5Fa3UQT3CP2JPpO4wIhAJmA2J7BIcIPEj9iuJh7kbza6SsPuW89TNwsFQBP%2F1xnKv8DCH0QABoMNjM3NDIzMTgzODA1IgwHQO4uowRre9XDrgMq3AMxi9yQgvpmSlws2nfR%2BXjDjP1jDtY0rF7jNd18ioNOZRQlauM6%2Fd%2Fik7JGcWELK1yN6wrV3frQ8FPDzdHXPt9Du4UQaE%2Fayf4T78hRcLYElK8oLI5Ed41LVWErCaBocna%2FaZw0wgXXkAlqlZGB3Sk%2BvSwsoAopGrD%2Bfzm053BJH2DIRl3l5YiAOY0PQlaYp4vQjzVW2%2FBbLa8A3HW7ZXQifRT6i1kk%2FJX9zdJIf7woO7jShJYB9XbZ2RCyOMrj1REoAE1gFXFO32AEJlTctQ6m7iNd6pllDyqwWwol%2BdGZtY657qYgWnxZliGqbu%2BPEWnHcVL0d1B6JoiAhL1scpLLpqTlI6MQZu727pwtQTQgbk5N85L7qOvm7Mt1yC7sER1GuRL1pItkwPywX5votdfkZfA2qfoBIG89jGZReUfknN8PZVWrM1sp%2BTnz%2F37c4KntMiWKzIeJNw0OHvttb80l0GNVKk%2FzTWyLkxacVdtG1qqukTZH3T8tfDoLEgsjWn5240qnVx6mDJISTugxD42ewolvIwPtn1D3iw48mylSxV%2F5x1vdTB1oxls7Hu%2FpTYtBuSBCS3C1C0G8dqte45Vd7EdJjvG7xJVGkRJDynaxeh4qSD1DdiVA1RMqvDCmicfCBjqkAeDnslGrYUgWO7yRiLEnne7cPv1k24tijRhC6gyGS%2FiMLyk5Z2KTxPsIB2caAPBWDTsL%2FvjljBpB1PfuDaW2ZZ9tCydQ8wbXPImzRVLKUKlQS%2BUIVvTu6ZN3pjTDE%2F9pewolTUUZz%2FBjEvBKDTAV0jHkYUUEEWpPW7c3doQ6Jou6der%2BIaFKgIm3qExjxPThSCOJtktAmxGl2zQueNPhT8woFbaM&X-Amz-Signature=2e0fd0557d30b37202ec10f6801912e814b989e520b5e25513f3864ddf5f72d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NXYGM4K%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC83VsbWtBqYVvTTnvgsPCqbAEB%2BLjsV57pJC12hMHU5AIhAIQDlzky%2BwJ56NxdtO8ZSXwt2RNjBxRfLsJfclsm0faXKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfA7lUuTrm9ojC84Qq3AO1tD9BJCsfcvAAXiCLT4qgMNgclgVpPMzDXpKNObWBRLGpdsGKXhUf1QoFoMsNrtV8fmuv9RDOe1kpPjLdIyDPbrw3ZwGTF2OsZalSRb%2ByKSf8RoBdHXJn%2FAYJkQlYzdKrI0uco2OmLGlo8hZIyY01OCfdMaD3kWZE%2FXrfL%2B5dywt9yMzxiqepdKfcSGtrUvYoIH%2B%2Fmu0yeZ7YkwY6tvFfCqtRZnjHoOKrv%2FvFvG%2BKfUS%2FRDwUZauSKXcB9Kv1HTrNoiivQiiTMk0edoUR5avfJngP6K6VMDQ0Qn1HSDHvDqH%2FKG4PKqv3r06Zqsn4TYqxUP9CvwcMS5dyKBvbRjYgvAiHwQvE%2BfrKLMsS0R%2BZrRh5YrXXkvbHQEBPnKlkVNvXKqi4EQD0GznqDg5yDarNvEMoGDCcoD%2BpG97ppAH3EuqHlMADxZupXKr3f8PuZPjSNWfkd4iOh7EqLs2LjL%2FTdKLNvlMXHzSZlWE4xFK5%2F1AgBZp5myfz5xhS47tPFkeIF2ouSxuGIKKaZ5cGxpG23%2BFv3cFMO7cpY3U0nEhs427VfaO20P4QT04gv2YBhWcgyNhfbeoJbliu3Wmb7FnAyeexGamXi7G8LIAtbh2ar7zQ%2BaX9NF2E7564kjC18NrCBjqkAbQxjUe8aoI%2BkZ4KMAo2%2F0LseISA28FzXOL5xIlqLZ0spvVxkJJwDmLeLj%2FJkjG%2BTqHl9g8mYb1i5FbXohfR%2BmsJpmih5UpQq%2FJLuzmKJUX3frpNjrI3ZbzM05VkUC323eplOMokMuNmbLITS4kSMgoqbgL8Lfu6UDoMIaQ4NAshfqerrbTmn03ZHc5mJgWhMhx7b1bL7lznrRPaUah5AsgTFNHk&X-Amz-Signature=5a116e8979b48b4c3acb843436385ae0cad1d28355ad54721167d2d902ab84da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CY6W4FT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BYgMgLTrTN3OdEFX61WJp6xLLEL34DjwDp6DHjZ8xgQIhAMGit5gKUqORIggfO26XYQo%2Bc4V4FKz04gkSw4XD8C1JKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2l98%2FpM1wcLqm7Ygq3ANAGY0hHQXvbz4myM2o%2FqgdTSF6HEl%2BuuskOYO%2FS05t8yZpoTKAucJspNIk0TYHtURRlZejUXgHVDSkroCbYaD38F%2BwxrjiMa3TMfEkmvIMpgyYLEW7NyIw%2FZ40xMmYf5QhWHoelMG%2B%2BRT1k%2BbdPHH%2Flt4VxVSGII9oc5dJlbh1vhBW3CRQynH4yVbGmIHe75tH4l9n3xWdwF5yeJa8w58Sq5uHLp8qkqGA1RraTrdvqLs2eJBYSyT8HsHCXfYcS4F15VHmEeKsOtwzqdOALDYuMQ7nwQxYRIJbje8oF5IdWceGo1Wb1vEGduUHYoVfJR2nlfg696nkqXyVFth7eNCl%2FNj%2F%2B2VvnXZHvIQnnlbs7jRAiCxvmDqjhlxi4ZOrAIw92PES4pU1Bo3Duc%2Beg%2B2XZ72%2BBLy7ZmM6JtdYAsLqq49Lbn3afSINnDeeIb051O5GKJ%2Fdl7MXoirKJncRmL0STIEqvIrUcavQQgmFoxNSm3AHQjVei3i2j0%2B1f5CiQTOcKfA4RKSIDzRQf0IYREWhG0v6nzJ7CgZpOAWLCzHzYHTDcbej%2FZ%2FXbQFpe3BdhzTANiHmRXJvIpXQ5I35D4ftUtuCidTWkKQHzLSIdm5HBGJo77aEduYFy6gSVTC769rCBjqkAfiz5MG1misBjVAQQ2f8RiI6eF4TAPyx2GURpAFRKCzUOlBM8LAF2OPeOl64p%2BclniaCE13bKjXYbvF7VO%2Bi1hgIuLo3mjXiRuc9xseBSF4POkcpPrcxa03wcUW%2BxMTEgLv%2FpLmwV9pjd2g48cZQFjHSTHjJXHD9EG7yTONo%2FmfZz518hA9xYXIe3nqlgvkOHFV6JFAtk95%2B5EkYTmoXfUXVQHfX&X-Amz-Signature=af6e4ecda62dd5aec2ec3e19523547bb986050927d0fe9dfb57a8b4e8a1303c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

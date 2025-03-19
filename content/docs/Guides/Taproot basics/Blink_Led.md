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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOW6NBNV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDpGDO%2Fpcr3jgjG7pecfFUxB6kHqvS8M5SbRIezhRJS8AiEA5ohPtV577%2BsR0VaFyvpFSmN8DmM8n04GYStzJzQYUGAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDP%2Bieds0aiQDeuBJjCrcAwDpjJCVL0tH3aCWYWIN91I2kFQKR4ugbYf4nq2gTHnpKwXlB%2Beh4Tqkeg4W%2BHXucvAR1tZzF%2FRpVEoVAQaox5yEW41SjdTa4Tcy5qrWcjaYHBOVHcG0dUf47IrTHzyYBvoyvG80OHWenO9E5vQsRu2gEuzVQcd%2FCPp1gAH0uapL9hVjvZaCtGjJEyTGXmkOjniazgBZSvu%2FwrY0Q45ky4ITTzJpB6LqzlkTZ0LD2DL5%2BWCrTB6aGewtrSH44G8%2FK2PmhJc3yYhmxIGhmtizN9CiuuyRiVfmiljhXyADMYh%2BHfuOpJHX2lIBm12Zp%2FPHUfQbzA4ZRhJbsIzg8qKgw0976lnRmT6CQOnzOKApPqNfBOyo78FZE5PYsNLcCwtr2fne5MtGUViwe2G%2BvOH6P%2FNkvj%2BauwXkDh%2BBnD%2FzcsP8wcPPdO24UWzZchygm6HohNbSA6768YZTnSTs7Vd%2FrOX04dRkNAX6Szp%2Fn0lVxe7DQtNIXmLpEOdCZwX5i%2BXU5hBtW7j01fZi8knGCFtPvCMUrPLBiBPMwtT8h1SB9SptRUyISXUxTRilAeUqHYZIbn8R9S%2BxVoQfDc09bBiuMPoeOKoUH3bE2Wtwlihp9AnBP1LHYVwy0xkcqS0KMIie674GOqUB5AzPcepSiYWL6uG3N3l8WEJ63mfcS1dIMRT94w8LBF%2BU%2FX3iqU%2BEPIOfLAsFGmumGcK208cfq1k2anMXWUITbiwwq%2FVyEm4qWmsT4POjRqoPL2RvWTg9wnHR%2BxxGcm1R4MkbHlLxRqGYzwhZ0K6iQ%2BzyiszlOwEs3pKV6nmGcwvlrV8fG4oCE%2BeXrpAdjDzRCA028EJjk8MtvKgbv4jCm8UQ40Nr&X-Amz-Signature=219026b188c386e146d107a9415e7af7a541d8621cf394f02de01c5d4aa0bfa1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYRGBAF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDH6QKwMx2574LTvH8Tg6QTcCiUxNxPg0E8PtDDXmf1uQIhANQuBNC6ceIEl2l%2FzHHyy7r%2FFVZWjUgZZpf57P3lRzFSKv8DCHcQABoMNjM3NDIzMTgzODA1Igw4MJjiX1Zi9Ot89xcq3AMh4jdkYoOI9i3tW%2Bbe5pnaEn9sW%2B1%2FLQg51POV%2BBdt%2FEhFyW4trHHr07JKFzR98BFFwNn5%2BNdGqS3uPyBw5vt1iJtSXI5PgLnqvBnsZEbCJy%2B880P1Uz8xp0tQy%2Bih6C7vdorUnggVsdskTbPy6mtyRaQHTkLKfHk3iM2NcsHRWCmpoaHzfMS5hHy8wHgbVu9lIQeedB3Ome1maE0bEfXiTAYv9nVO%2BMQBhGOSyrA60AdHFaHkt5RugHB1TcDQDRkOa0%2Fzraxt8SxfxfUIMX8qMKsFwtKDJGeWsYaZIB%2FMB3BLx7EbUE58ypdPNY%2FhfzpyLYgHgd36rDe3TRObevMbqW2UsXFpj7unL99TthuImX0W5p9EjJpqjKIeQJZMY8e8CjrtLPH4ViTfyoDIQ61JHCKxmbwBTzvjJmGlhqSdw0Fcpo5z8M9a8ncZjC7jVq8Azh7oM%2B0U6DXlCdfxLZ02TFNKrTKb%2FUnyzpxax2%2FM6DAPA6X12Z4vG2dILNU%2BPq%2B4msvEm7n6ZBnuQpFTAzRf2G7uWp3qDQ0yKrMf9TXGUjgwi9mXXcYqhfZy5Bng4tepAsWMtlNRxbx98ob4Gm94u6%2BvDAe%2FMr8DJGmL3CR%2BWsUenB0wzDCu4ZWZZTDdneu%2BBjqkAaslVBfesfKKx0ZuwwDeej0rszQ6lYUG%2FwJpQ%2BD8k9dlh9D6L%2F%2B3N6zlPeaF%2BVlA30gbVrAnqfvxUj%2FPjaIpjCSw%2BE70Flag%2FzhwzArxgYIyLrgBLZdwEdZLosyPrwRe7FRdWPQv%2B7GOZ6KvypT%2F%2BiNNBbB%2BFsGlKUJxxbp9lfeKmBwTtC4TjIJShG0obGihRlzw3sYuLfJJM2RCWJajNMI1aYnU&X-Amz-Signature=cfa17e7df988d5509372658d8b8bfb121e83d6e655ddf29c5c45f39de43d03bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

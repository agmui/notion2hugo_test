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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QILWTANO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS0iUzUMZ2TwRS5AiOIQierFn0nZ7X8bP6MS0SJ6u4AgIgEMaHlcVDSf7%2Fro6WknOWXJy5PFdsYF17sAz7UOzHTD8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIrvwf3LJxx0ajqMCrcA0fxDKq7mfuqa%2BvgszQH%2BQs%2BLjKiQBaN9ECWdjOYWlglB0gy1VT18eczq90vwoqIRKjFjaLdc14gdxrb3chp0TawH251ODC3hgosn9JY13qpl%2BFDobLAs3fIi8ttWoQKixo3WKtmeyfZD3uLHs2KPZqO%2BqUj3HkHDxOyUJAwqyejwgWAb9bZzMcNKqlePA2dAisZAkSagoOSpRphmM0Kb%2FOaWt50mavKEboW%2FXVZb8BQW6zjyBULIJIqeTEYRGaZn01nS%2FStFWLrkMUly84pkw%2BWq6ewnAt4ZsmVhMwlcuENJ%2B6BKWXHKoaN3m%2FV2tqWrJ4hDkiXi32jgtSawvtStrAEqfjyDocfIixYJJZmHNffyIMnMbJuekEajSOh4ZS1650AJItTh6LJImo7YUEQjPAAn1BwBR4DL73ChiSIsuumpBybP8O1z6uVI4LYdu5TpO5d4n1SixZH7iKJrLHiZvrEPGo7FXoO%2FM8YtmvD6JTvSd7ap3mdCIL3%2B2nmjQd6fJiBIRWwagBmkI%2FcXWlWYFU6ZaDPHyW%2BGodvh5ct2N2izb0e%2FRmMhMNC5ZdmJk8mnbC3y2gheRD3bmDuzFPiMeAzITaeXu%2Fb96OGy190T0kMz8JC%2BRiMK1ccP4%2BVML3X%2BMAGOqUBXOId6BEDO3PS6vKM4ep9OpRATO3EZnBKvd%2BxC0wE9tnhJ9XVelZZjC357Rhq%2F%2Bb6jBsM8HwV1hPu9d7No3DlRbWQ1dMMFA9W8SP6jrO3ed23g%2FuglKV3MJL30tG9fy743vYaI1DIQPQHi8diAx5hUmN36bCtjqRfJaqPgG7hVA1qekT1aC86MIL6j8bEj4uLxEDwoq6UQscTdIuPUJ8kxeKr6oKd&X-Amz-Signature=a991bcf204ccf77253d2918563f1fae9d52522f92bf819ee38d9933107c4d325&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFMHWHAC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtepwNe4VLJR178oC18xKkIOBH6UWhv9ZhLcK6JQnQ1AiEAwNRe8x5heyl4jEJG%2FxPmXfvN56y3tcBBCtHooi%2Br2PMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp8nDFU6VZBeohX4yrcAxW4HOnWzKYANV1%2FwrQZMl626y8AF5T7FlqnySVhxh%2FV36JOO4PRXr%2Bss71xDFBeRyKPMRlT0xh1ntEw5Rg6drKLvRIEGQlIimB8hVgNxSH1c%2BcuW7TpOteHmHfJiv7OWedKlNKdkxEzHnsCHfflfgoPdgbeHeV3lgz5r3oguus2Vt2%2F6zoHXuAdV8iPJbAw2Uw5IFJU78Rrfs6%2Fyk3NLarqJ9RC%2Fpg%2BD3SJWugTPbc9WmTNGCDxspJ27tNp5o9WTdEAsvKAdeSbgR0g3SoRreQTN8xQKsS3sOYpLRhtb3mII79mAwWQ4kZ6Au%2FQtm7RxrlAfwILp8RkxFtF9RHnPyQg17DRisp0wYLXTsk2SQys2rGTZTlySIbvEsDAX7ZtO3zhWR4bKm0qtV4Gsz%2BSCsnfVimbnON1k9v%2BOJHygpV4eZJ1HrmgA%2BiYHc9Y0rVHYC%2F%2F4YanL7R6uP9XdB8srCurZyAknHO4rvfZifNSKP3KREacxH93ECYSZ2fV9vzjnMp3LmhCT2jpeVIa6JqSHGohrZLWTf%2BeDBaYA6kCptJVEfSVYn8Bn7E8VHXx5sxep7gPSvaxx7uUzwpdJ4Iv0Ntq8V0P0SOi5mnUqT%2B%2B0pmOWjW%2BIVsjCzYiz0T5MO3X%2BMAGOqUB34R9yR1LvmqK3om%2BdprQPFS%2FfAsabhFAzJyuipuf3V73JC8vZ%2FR8Ug%2BlzwU5vyKVCPHFEWSyDw5%2F7VRJKQscMJnFwyXmjPcZoKKUBeIBrkG7rSLltF6MVzK81dZ6R7V4KYULwmMuOLX7RALKr%2BzNOJwumGIuK8jRALlLYynadeVdzvqRU4ZSOI1e3Zh%2F8y%2BLVRbq7a7dXNENz5VyOBeAkkvN%2BR1g&X-Amz-Signature=095ae9c9b526f29beb1012884a1f563b7f34a45ca2f56497789d09006ead7197&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5HGGAS%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCv1X1hXpjtKfA9HlnEaigTFNp7QH8lJGhdFQ9C4u6DhAIhAIqQuiP9NDfMpV3cjAsAAt2jwmcUAtTd35O1DBsaIZm9KogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytrfOiVUOG2%2FdmsXYq3AP7onJ%2Byn3dJKK4nnGwkuud9JwCAzuEiZlK6JmlrgxWNsjN6ywtPn3RoYqo5V%2F8j3FcwDXk2vDLr7FcaE0dbYKZxC8Ku%2BeIe5%2Fz%2BZOK2cH6ZfwS%2FD5ld42ggOMgKB%2FNNkLUS%2BBsAT6voCRy9N1qYVhUOQQlPwM357iuL%2BCyRc8WHcKVfrE%2B1Fqciy9%2FwDgkW3jvweV0JgYfEI8S5GgFdswVIJxOJ4to2amHgEtg%2FK2u%2FFX30raTa%2FmO3Kl0oXM3YK8ZFcoP8yCspR36fXvpRhxZGvmI3ByqBJ9vquNZUEIJDcLZWGv89weRpFl%2F3cPvI1McIdkMoZAFfKfIUG1WPr1Wv7DDcmDwXLOEqXCnQ92Zon3WCizCtOcytZWSQsm4%2BV5VnLJA%2BO%2BgASakOdWTGf1IBlaTPNJB7C2rQDxtQjT%2F1gJslCHS2%2FA4%2FflcntElcBxYxF2aHHfBlUo7aac4pwjPfA8xo8qntM1n79ruC8HjKBfA9y0jhFnQZxexXgucuXTXpZsal6CDhSK9LAYeVh0KHfVZKAQQGtML6UKgMrE6hr%2BC15r07ltLA8UfhRUazfJhGw6MUpZHg0FsErZE8WmJS5VxHsIeuRYf%2BoijSuM5Fhitgf922p5g8iVeDjDixqXABjqkAbqnQq573N5BGb5knwe0KsP1pS3KSzaOOR6KUdcEX3A%2FbONXltF%2Fh6L%2BpBi92o3eFRy1URgDzCXvmFybBwPbmBkbTveItV6Cw8KuwnLg5VNcHW1ECRyWC9Y3CURGWlBWPuNHnVMU1LNn%2FekXTXVeoHYxwKul3G1dqhqXUGRejXziLiI2Z4RDixy7%2BmwgBzYgG5%2FyGWjvJfSIQZKncGteT8KSmvjh&X-Amz-Signature=bc67cb61a77752e8aeccba3cb25a99b1112b0f5438ac600079966574b024de59&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6S7OYPT%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCMqMJXjIoUAcPnSX4rstnnRTcJS3noikDOF1O4NuC5cgIhAL7PZHJB5pgxfBcqy6PR9cysg%2FCslsTO%2BQ7usVHV0bzxKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxGaeh5ED5Qeitdikq3AOgL69t5tWCb%2BS0gOcnGnjTYIJlTpEx9olQajPvjzQpSsKBNGKzNhr3jMG0t0r9R1qcqJuveh%2Bm4CoIydm6GxlQWV1Tj2ssOPYDDrVlxyFggV3Il%2Bht12p02Zkc2WZk0ENj508Vsu3GYhpiMYSw6cIZW2mkUQXf3ErZPxBE5v0gJ8My2HXFBFKYAs%2F5yiACTW2QTZ19UQ4FDUlgLvcWvNzsTXxidFo99G3m7v%2FAjlvc%2BywzlhLM6ZmxobdvHXMgAH%2FBPLm4eLGi9edlZefuXn7AzPjzf4qrt%2BjeDXdtCEcDdUP5attDuib4NoASLswgL34vvsk0WdxZ5u9ww%2B%2FohhKwtPoEflDsOdf6OhJxCFE7b86tkNQzMz%2FZq0mP5%2FfjQZ5Or60cmp9ruQ1G0EQVR9Ve7Nc7xYc%2F6LMzXILKLenqA0ViackxW%2Bf%2BKsbAxwDayeX8hNeSQK0phlHkD%2BYcO4iKzscm4xcyJjyYjAp7SDO43NO4RzEUJVmY%2FNQSB%2BO%2FOkRciE48BbCTt8MoEUOXOT1fjNXdLkpj00iBQWyvqggZbHGw8RnwfKXRgPoetpcFkDQOrwkiAaIgJUmJo%2FZ0IbCYYVKcVomJHOLwOJSM3lwhmoH2PCNFKcECBEaZyDDgxqXABjqkAVCAbdkOZBwzaBiiqWVX%2FxxS6xkZVw0UsXMyLQNMt6L729CoorHyG7%2BxDX0am57L5QScsvghW67SdPi7BOKNxprbgT9gxdXvHaUGYMfpUAA%2BCQ4Pv3U8%2Fv80Nj9EUK5LMNI4cYl0HBhW011xBWd71ILIYPUJ0roUrXkDGyUhp3bdXgGSvLnXXSbfQdJgi%2BgzOsIxlK%2BwQqbJQpwGNAx3HzDDkG2N&X-Amz-Signature=753c04135082b9e29ac843917097cbca2140b1825fc4116007a3086f9e46c03c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

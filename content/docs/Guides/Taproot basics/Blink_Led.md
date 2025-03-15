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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y332RQTV%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbAirWh%2FEH88WvyiBesQo%2Fr6lEaGzHj3wPks37ZkITZAIhAKyb6XHvNv59KHTlS6PJE%2FVNCVrnX0H7%2FUjTq7O8q6TSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya5GYJwnwGEtOcqXUq3APHIDu6E96Lo4i9y0MTZcIjSlNWb073XR7ShNPthFKXvsAkRHdF6yp6QY3bz6N%2BrqxRRiisMiZet3WO1LF1jaC1SkQ8wghcnv0G2LU1fjanXlpmWQbSkiGcp88utMmNYqFtlVGllHYsD%2BFnzg0V1%2Fwo1OOUA6k6kHcLLdGESfnMeNaZXErE2OB%2FKCVT2%2B3Oyj%2BAjG8HeyTAIGXSXVrUyR%2BCVY8Xj6OGd1FQjFbaBI809BeEVWo6QLrvnqAqTDT6zB3hJEwA7xRgEb60iM6PxsUlM0P4lZDosDikRfdlzBJFKEMPh9p74wNArdHnWVry0nyyJyVJzPaXeHTxWAqqnZT4uGMo9AelnIfIBHeXn34DWqoVuSvK3HihMNTJIpb83UJ%2BNn2Ait0bCSJ7%2FOjRT5OWVp7qMWsaSICaOuH%2Fa9t70sVzJ6ro2xwVilgdl5dGr8PXnaU5mcLpgvkfBG1qQkiqcdBz1Cp%2ByRIzYuoUvWC4QrQHMoVWfAE5chvMHt0JpBrEa38o2qri9W0AGLdoqEwBQv%2BKwrWYEilrGvUspgLdyeNI%2FJkt9NpVLxS4Y0yMOMXUEK2J5l8SIzN9IAeQJ03GIFSTMFJwcohFyR%2BszzUOlCDzNHp7HhkmAs8XSTCnh9S%2BBjqkAQPhpj4JQO1WnC1RVwyfrjW9hAolSdGnEJQcoXAHJoc51qCUo51lCBDBe8%2F6RWUqilMvcK8wc%2FC1mkVbusKMV0UoOkk0zHoCWFlmL5gNzNXqMhkZ3Z8hbw2PQmP9yPx0xhO%2F9Ojhrb6HlSU%2F9S6LX7%2B5YrTQyrEMzYA6jV%2Bh4GOt6Lufafil1lAOgGfTwxOBx1S%2BZuzoKUU1DyBJJFDNB6W26vZJ&X-Amz-Signature=564dbdaeb0d541c24bf89332cb0a194eb6037708f00b15ccb0f95ef4348ea05d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZA4T5NL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeXeq72ReOv8%2B0YOW9L3lnNdK7ujQYt23WukzvmdetdAiBDKW76V%2FelTaGITf3SHmgcMCFmFbVzQ%2BA4crEZl%2BNaHyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr9BoUUQtRV2AYvJRKtwDtNU%2B3wdK0rDCPTMLBJ099j6rFVHOHEjH3FXlxhFJVYMiR9yQKGmuIGCtEp7BBOAkYr5sbnJYRdENLXiQdHY9stoQu1YyajmfBrSE%2BOV%2Fs5yDVehh2Ik%2BBmYAvBh9FSXrcNcRbaFF6YwfnF8YvoZh%2FA8pB70wSXmlSyj4xFiPKZP%2FvynqYA1EUEoH6krpLhzPTsuil5JfYcrG3riwfWFKtWbsp7tQh1fm5TAqNCyYo8FnVuUlbBmppOVpEYZ6%2Fqcd7vOiCdrVE0O3AiNvztqV5I%2Ftjr2l1CVJX1wVBP6udH0vb8M9W0zZL%2FBBA2YKui7xvFqgRUxFFJoM%2FobryqCMJnio3Qb4kL8NenUOuNC8vZMIgPKj0tTaPahxkUlyigfTvIC4i3DmzCyy7H%2BlJWq11GBE%2FEofxjmi1hps8XJPbHFexedUZNd6acf1Co3izHR6oZWU9M%2FYUEY%2F%2F0bNPjC%2Fht5ivDMS8jHhCqoRsZn3kLV37k4hz9KqHq6e7t6fAhPIiK2n4ZukDfrEGtYEOw2j6XKT23udDPI%2Fz3Fl9kmP5kqO9w3OgQASyhp8Dp8%2Baw7qB9lDMucLMYCD7Ea%2FGb%2BqQp2bZchiZ1Gd%2B7mcj6Oce%2FMdMlxzPQFl3wP5Y%2FcwoIfUvgY6pgHKRJzA8DYbvA5QtcL%2Bp%2Bg%2F7fHwYaRZGVAZDtc5dI1nmEw4N6I2ZJYi6sWoJ%2Bc42NFJTY3kvSUaZaBHN%2BrCEP2y6DzjDREpFkwH7VcX%2FNPwx6QvZAh%2BE8KfGo70BeO1iECKxRcQD9AUaO3g3dqP71IAKYgCO9SP%2FjR8hlSNR4%2FxYw%2BAw2LafLSkwjoM5NjizsTEwhwxg7EAUmYoWOPcORgY%2FVGQFYBN&X-Amz-Signature=ff2a7eaf59fe7fac32970ce0bcc5465a2e203b2815a5de6477bed59754b737da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIX3EVXY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGG5UDAQXaJ%2Fvior2%2FTKtKM2Xg9GJgDJDshywD7epCdBAiEAwQ8K9JQVAT11gWSg1TWG%2BXu4nQCSUAwVNGg56Br%2BoGgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEEKHqBnD1Bj2A9iircA6tCAtY0sgfN%2FFKk5hVvyqJbINvTvhx%2FzNdhFHN3FXmWtnXuYYJV8Cwp%2B5u%2FXqXV9R%2BumLC2B3vyxyTVXts6H5G8N5fcsLl9CCFX96%2FesbSVLXopgqqRj%2FWjhhDlYRydXn3PaucUTbNEDje%2B639eRQ8naPaHL%2B4pwx3iE0sIJBVYo1%2BYwUMNsQEpG%2BV1%2B%2FSLhGNMw3feCMLh8seo81BGfcxBMOmBGxV%2BcAb7HqT5N8SWCnDYvUwdxs1ZZ5E9QFNYNkq0b0cPfwo9utzQqDDlUUAkXzjpPMlv2hu9eHVwyUhE9oo1T%2FTJPAPfof4ZvHLdGN7dYh2dZR30gOCuqWpX6IiYTK5JFmmdm73JTw8%2FjV2YaPmU2npLRwC5XPHR2fWfv9Ktf0Tfai0gIh9%2BxefZn1um5eRiiZCD4vvN5e5O3hYaGDfbvVXHvB4q2aVR1QdTd9WCc8Acp4xORY0orwwMIaDNMS7i3xxroo%2BPuSqzYz9h4v1v2N9i746VqcXtlZszKEBdYmImxwob4BZiXB1nTiZtKbU4FWIChKdKvWYHyPGLX3VDDls1kzoB1QZFkH6Eyn5aHp4zS0eXnt6IlfisuAWF6HbytvtIilppYhvGR4cmROmC1KAmEzodFp%2FgMNi12L0GOqUBBnk9KHleIFLYX9bIgEjcbDakowRGU8i5qhXxmgFEipuWPAlpMCmVIcvO7v6RQISopp%2FjG9ghgPtVelKHVLCsiIJc6WwefH5YJzSR0NJ1jaVsnjC%2FaS5SyaAfrHVO6wEOpAK3TSnYcl3qIrO%2BuwD3ONvcdyYOxjBN5KrAsNFcQ4F1Zb98ysS%2BqUzQpqyeyqEnh2fL8vR1CujLI2IUdRG8u6UH7zyj&X-Amz-Signature=7acb43ce226bf50c714d51a0f8e1b916c58714fa7f4dedb5322cb6863d4e2666&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674DGL4MF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7G6OrGxjczm6YT0LlctsTnqd5JZ3VR1TFHu5S92H2EAiAdwcoV3gNIo3IFggx55Oi8%2F7ImSmAvqJF0iYBRqMuBwiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYyF0f%2BrzbpJnErZNKtwD8AqpHcy3SoMCLvftgQUXsaFwjmmuF4MQmN6Qr5K%2FFjhCZoCe86HI627nCfentzbWvWANTkr3uVqOdydrxliMTCa3ZyNOYmkNIhBSr6N4wVF7vw7ztVNoy4ywwOEYVeNX471G6K%2FJD%2FJdaLZWx8453eYLqFvhIG0edONdOD0B6gg6Pc%2B9kWHXxxA4hpXxgic2%2B5FDX27wi3v1qVQuagbB7rZm%2B0QOEkjaCmgC2YTeAqmImu2T821SzlnQReP%2Fw0eK5fT7DZJyJXakqj%2BlOypkgg9zqjPdkCGpa%2F9ft5FidZ7kh17tKGwd0xJjwhoIdp3QtAK9VDHO4lD5UawT242ki%2FKlZ%2FIE%2BUchQWdmlBv1Ay9LC6SkxBI9uRXGlA7rVmZxDy7zTFbBwmaF23Y%2B7z3mf2quETZc9amuhwjL31o1WnVqlnBsl%2FgUk0gdXlUBDTyM%2FtJtWnUMxN5bBul7rtLHH8XhokXK4cyQV6gZhnDeNmxOYnv7RUIG2hwsCD9E8nfrrOrF8Xl5cuYluyRjPgLp02LuNLwXVAWfIx8lB9KGp%2Bdzt3sAJ4aIJYiso9K438%2F3PvUIzQxvbypFljO6WI1Sn32OcB6mtSNvjNJSMYEYkYrkQferx8VWXhRnENEw2rXYvQY6pgF%2BEzhda4KVRd3JOrJnljPRSKQj%2BZGuSmAKWEs7I3jHUJGjKYsCYsQs%2Bs0hCa5YJD2jb7rlgk4k9M8wfRPT%2BWD1IxgFkjoV%2B%2FD7%2FiuYAWyY06LpzgWp5jPIa8M5%2F4G19di8nSodTg%2BCwAGpFePromy%2F9cpoYWjptOZ5S6orCnuOLrXsOAStm1tm2%2BZXvyov6%2BqGTFkwdTbvC%2FSruHcRzhadPabsGV0f&X-Amz-Signature=7d40041d92880a9322cedfc72a50be1acfe6d3265d7293d73d8e961d54727b96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

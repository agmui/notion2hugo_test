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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULY3YHHR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAdPoDd4zVJa5bJ1CHX510pmoiu3zIC3Ap8%2FKGlyaYlpAiEAtFC9EyMQAnAvfW8tJ8VloeEhyxm%2B3Ejm57ZehoCfzIEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4cdWuRoBrZqFOs8ircA1yKs2X7Dym4lymnv3CDhErV%2Bw7bz4AsEnTJB5m4Ur2%2BqxqCYQAU7viodGcJZ5752sChRBdDw87UuowC27LNHvS83NMDgGm1nRp96YTmeLa9MTnMfV%2F%2BmlaQISDs5zYgG%2FWLVnj2XFVga5UUWbIorfqZ0MG%2FoA9i6zDu8pQFMbecvmEBEZrqjrfKyZTvB2Gx9KsM59HoRcYh1ZUyQKzTXy0%2FWs5eLfPeB010W%2BqFdlOTWZ2%2BQsJg6fhkksnalsIqvvWeb4MkY3rNI4rYeOVctNhOPj0Ma4bm7QPgSTEVR2mmTVzVhcNwYjetaiu5BBEjUYaTGwr6kRPG09qQlYzCdZkb8y9gxYBco7%2B%2Fx6mt7V4DU2hGz87AaT5KWK8QZu9A9ic4AqyrjeJCksjuAKwfJwoQTJTIFDoslDMzx7JnFUX1JPad2o9UnjrPz0WqkfKcOvuoxKsBQdUAmRs6qOYhnTldHYRt8DCMlfP%2B6biKQYRMIDY8nNjVFq1rpEDa1eDOS%2F5ZQWn7%2BHkuwCRtIgrPzieHBlO5b6P2CRbREXJaYQOSiHLGcXKqc%2Fd4nWTiE2eiyrXqJk9yAHglOUdaYle83pSCIVNSXHbYMPmXfqPb21DYWFpqipeuADo%2FJ%2FZAMOTMub4GOqUBraZ44j56H%2FfpAw%2FC3OL4AS8Gx22gbbg9C0%2Bt3PPWH0bEgl9u7dTppHT99nvP%2BwqWDyOqdFkAQUliZPrcjuhuS9rig1uo6O32LC6cjtigrexdr3gbMN0N8Xz9v70igzwgtj%2Bo8Xe8TnkFRgfC2klQeSonNpnLGZjaej4yriLqwhInQPANXc9Qc8t1o3v9fUNoUPyPTH8YvGidq%2FfxODeyCgl15dXT&X-Amz-Signature=02dc32ea62b20c1e3c0e85444cc1754711e41e052bc754fb4a76600c190839ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FCA62IR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCyxCUP5jFLdLjwhXrkbmHbbI9x0YQGmLQg25WeaZVRuwIhAKdpwVq9vL5sDXP9XjiZZWTPTHCtqJ7Hazqv5h%2FVsgIHKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsHN4lZhN3X6VrSE4q3AMBecbIb6HW0vlKKz50CEYcLcFstfEP8MNP0lPuyk%2B8wJkFcRGEopX%2BcGqVmfrbAQRnbJfiFjEyN%2B1qFOC8dFoAY8I0rcfkaCJvd9r%2B3dXNaFyT7uW5h97IpqkGZ0BMxFki0wLS3l6wK7h2dKxrWCKcK9ihqM0KzyFzva3rxUB4cErl%2BXBEYw6p4XlmiL6RxJ0J8%2FFsxFVOv3B%2B5RQBLNOrnW1eL9GwaHnWS7884Vdn0XcVeUsZif%2FtxZF9YflERSC0Q5hNoc%2FaXQ7YAgP%2BJvuKgOLY0%2BKB%2Bm%2FgkiVfNZJeRGMoJGjfkbKaEJW%2FSz6Oq0x3Ir8xJnKk6CWWB2gxpW5TNkKoneRGdOMIl0gqR%2F%2BOW92E9zPaJ4X%2BdrYiRHkNhbypzr4A4W2g%2BcM1SrkzOO%2BJvrfk6yLu2SNtErAObiBR7r39Rsbq%2FfpI7dpuuhDbbjKcu0gBOr3xqcWedyHDgAnFEJcAGCDF7Rvr3%2FtWJ%2F4WSe9jFmDuLxxaP%2FgQ4%2BnTwZAN%2FCRRUqydNK9G3e9xWv2Sj0Vrsp8tMemKoBvGe5T7x6dTuK7AtaBihWxSf92QKB1PCaknkJmqJSKhv%2BYwz4stQS%2B3BDSZJym%2FcIJTMjp7cskZ4AWGI5BNpELS4jD6zLm%2BBjqkAYYAiacDqTx3sC17LuZ8gM5GCt3wDfJAoLglzgHX0oItNVSgKSez0y27smS6m5POo1cQux%2FoQnPVHHB3WwtrXk0OxeMWL0JU5kK7vKjT%2BMTyVfNSwQHGr1dzlfaQo6SmydOAadb4YyvLzh6L6vQCqKz36SLoIsG5A4t4D%2BjPhZYFZ7ihIvV6VKqkUvp36rxRePHlYlY1PBVLDv49RHtDpGH8GjoN&X-Amz-Signature=117979e037a7ba3908609eccbd520f9d0e48090a0f371afac32d2dda97b56568&X-Amz-SignedHeaders=host&x-id=GetObject)

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

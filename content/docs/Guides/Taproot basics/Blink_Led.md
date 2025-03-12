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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXY3AQ3K%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDdDlHIgG7JWBpuH3dBZE64VGMD3VYyO1FUlJXQsTaNnwIgMAf1o0dD2LQcgkg%2FM7KUwPHSX77mvofhNjkoFUKqMs4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARcPtIc4ed2FXZBhCrcA56van3saA8Hvn78axemkEMtwI0C0QkaDKDjktyj%2F6PeReG7y8%2F%2BCpGGN6XbnWNpvbP4ZbnYIss84EA7iI%2FHGtQHkTjOyKSEN7gX04ADNv72FHM0XzNLkHHgcAeo%2F%2BarbShsW7XADeClWDFnaJzFXhN0YEai%2BOxZMa5hOadQ6o2kfgQKdZ5Sqbx2HcVXcLiDzQYmvKnSp8ZHDab%2FZJwAwk%2BRiN%2FMQtwa2ef7QQFUvbjCERRhAjJagTZHN07PwGKQrav%2F%2By0ldjrMsvdo5NeYTVZn7N8Y04Xjy1hzZHatgprq8MSLQrK0iqm7GXcbrRhSKacChWVKTamzGPJjMGZHO4X5Dxlcgsos5j3gv%2FzAAS%2F1BrXOsfKdd3VVUdT%2FATblH2Q7DdaqzR%2B1mLyMevUGG3rEcMPOQ9aXHq8TRyXpOCT5FIPql0fsZ1LAitwGVAtvOjLE9EcyRwLF9fxZpBIHOF%2FE%2BVSTKtzBj1eaZup8YbZewSAG13c8qNvmufIxQP2dQAt9JbbygFVaOqx9cvLqV3IAlOiOT0DSYAJW2xIj7eQK2ZNLPaUQJI2DDuE5WDu2ziXO12Dss4YQZRY3vOezyuvwdMlYhVao9Rp6qgz8pVYc%2B99tmn8dkvEqEAURMKPdxb4GOqUBh5RbXQg%2FB4uaYAGNMZVsHcFLiec6lJYh3%2FJNewbSzIebhNckwKnatxhmU9C8OjdqxVYWwUs1GlV5WPHSQTRNpc%2BLoEv3daieV49vZDTM1aYwQoVN%2Fw2qwJV0EGzMnXLTy9vpgwm4ld6iliPelcsdzZxS%2B6%2Fr6W4MRpedVqBQmUzPq3132%2FJpRSVtg6XKJTSCFG8THW2anWm7Luw1p9fwbCaNBZTZ&X-Amz-Signature=48da11bae51d8975a5467c897ce143b64c1c4873df61fee96d485ae3860cfb07&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647UKBWYC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCWaHV1z%2B6jBgkYyrr%2BR3jNIdJNu5SvJITiy%2B2xsm%2Fi9AIgYWw4ia5yY9SyxHzVPsPYcz0FI2mQb%2BdYr1TiGdvlpdEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpfMtrntKb20KYYQSrcA1tF9d%2Bkbq2ASREsXx4ykWrWDCHOqbdq9ibLwOFXSNd4ODd3HOrowa8le%2FwykWtUDxGP%2FsdyeYQ%2Fi3jebWeueFM5tDPVAD8QNg7vyT298ryvqxwIyK3ZDYirOju8IC0q6YZxtlvMu%2FxRnhtqGAPysnnf4GSFs2ZpzCaFGkP7IB1qv%2Bd3S1nYcAkrs5suwapm44cfj%2BuHUbP4xnQA4tEKj1V9PGYmPBAJUtAGC9I3qSyfqLUbneUgKi06GODBDkCN9L7yQf9uoDdB6LVYbEogpZMR3vRWqapqd9cun%2Fl%2BKo5jqaa7D74%2F5EUKfGkOZa3iP9GgdTGOUGso5tmveoHUvldWZDl9%2Bk9VBlCl%2BP0sPOpy9lDkTts%2FmzDzsabKmQ1aA7b6YNkv5fxRLBB5y6Pn0t17GOw6MTXi2XamVw2e0je4qFbFeLCBebeKipJuwdqVg66Gjg0ddiEoKK4WpRQmU41TbrZUrKrdUB2jT5HZuZBvBrcFHZ9%2F0cMPpk%2FFjxdNDLtiC0hK9E4ZqhT1ZL9uPwPrqH8WlhLBHPF9B%2FGD3dXGBlHGAYq4JpFmWht11qJq4fCDspNw1wVN962BB8LVY7DJ7el%2FzCaEs%2Bpq8u6UQd8AvAynYzmoMyycYg3NMMjdxb4GOqUB4ZJD78rsiUKU5D9AE0tlIV%2B%2F8PCWWr4ZaE9vhooYv4gpgbL%2Fk59qc0%2FrJ6zPGemsJJNegA2bgo%2Fw2tuB5nOLe3r9EPCNraR1JqoAUAUp9f6SBXtJNb8mhF19OQP3%2F1%2ByXv4NKjOgIfZ8LrCanvs9DUxb5f89hl6cdJiLI%2BwXUOXNRaRcZ2vMS9ovlgsF3K79Lk2jdm9Y9k0kxWv%2Bn%2Frsvpl448aS&X-Amz-Signature=a249469e73cde9317fc090a9356f7cb1e0d92ccd013218344281236fbbb959a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

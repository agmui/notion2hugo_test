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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQRURZPR%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICO2ssFQWKPy1XP4WFzupSw6czHtWcV6Nq87Frb1I6pRAiASfUJFpUvO0dOmS5QZnA%2BOMtKnDQDBWTW8fD1HBeeTpyr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMpPf3Vz0AclkTGQWSKtwDWYbZWBbihshWQuL%2Fjmf2%2BXcotpTe1awhZSULhHiZ3YCUMTUQRjOjL5LVrVs2fLfZpaJrimKWmJrZKG6EoZPixhbwRdbCRlQZ%2Fbt1h5Yz6E3tX%2FPmtCgPJwxYd1ydu5Mr8jvP4FK3wJ9tLfNii6uHuBhjkigmKfQz%2FFXKahd3NHqu51ScY%2FUR%2FrmdPQqiDwv7OoAj1PLPdkE%2FqzlSCq%2FM2m%2F1g%2BHO%2B6Wbdg2KPNSFlMDB9aSOx1JLIbI93S7MJdrUVsVmDAPZ9Is8QsbAXKcHBsDDql9qc9HDu7ynA50oUWgZFyTuyMzjinUftg2Qgq95vAMhRFYqodAhobFpged7f1atq9tBTOqWclEMjGvgOWMsvLRd4MFY6%2Bw19o2iQzLvaHSX8cRm%2FNZEUxQPhnMeCya2DB76p5ecKBw0N%2FSPjjD6wJqIfg45vqEny9p0JgaRtU%2BjZ6HRY%2BWKfzCKH3YPqaeklPFZGBkLbr1WpifYhteO%2BGdZN4nIVJzOiYDhL%2BwB6ewo7z90KHjqcIytib87QPdYx7TWufsoRoZ1i2IBxymXJXaGaTIT3YRY7fUyKJ%2FnPUjRNTOHU8JCEnu6ZMlkAyKRoGpFbj6oTdvlBaTXIgZqyFR5wNx%2Bbu6hZ1UwzIH%2FyAY6pgGc83WKhubomADnFEtdP8w9lH1C0Nwf9eHg8A2GGb%2FqwcLWr1vNIjS3uFP9YPLSHYG0U7JnoT%2FC04sArQmOVDjQg3W6c1Y1GTfcFebvakmm4mb1ndtBztCKRu6QGDx2alAP6XUrUGH9HW8P0m5GAyL5CA2p3jkW%2BNwJzIqYpaoQ7z3x1Qg9EYUEV%2BV9%2FNkR0dzUd4HqC9Tul5PGxWw922E8viDJC3Nc&X-Amz-Signature=63e8abf53e42ce92275f0d5c981058919e1b447c5ce6621e1808649ad88c497e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB7MW6BM%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIA%2BthhFQ%2Bb6qKzB36VdZFEOB6McbEsOu9CmnEu7GP3V8AiEAgDi%2Bi7is3ohEyyQ3Eb0u1cnpVmvNEhzOjwZGtBe0UOYq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDG64fi0Pb7T0Yzq9KyrcAw2si51SUT%2FOGfz9iAutUK5CVJzgpy3MEtXEuukzSD2lWJj4AmHkFAdO%2FWx1OdiNNC3zQqqEKUkwJYjR0Pgp4JQTWv9vSYsUy0lzN3MG2sm1Y4ahCLf7loYLivhqiG3KJQtYZ8VmOGTDZPdQVXWd%2BJ6HyMuW8naABVFX6IitD36pOuMLOl1uQf2mSkR%2Bp20Sv%2BSuL0vPIL0x1UQo6XYOJRJ7watEXOfYiWwqTTnhFsi9PoRBzrEmJlQXBi%2FUt0%2FBqXnqtz6rFtnuYRPYypdOL53licgD%2BFkfyZkVLiu2Ffy%2FLUzdPuzSX4NRewcqpQcjxsHgD%2FMwebVfubLv9K701hP6kQNrpE5RnPBtnyr%2BbwK%2B%2BHszMU3EcFydLFVCJYakVa%2FfmgmGXM3KfkhxSOh%2BXEO58cBLTp2pmea%2BArvnsmUbJEqkPjQv9kFU5FlAFUUutJHR91TKdkS1c0iSlI4EULq0HYxjgRrH7iscbuPAcxyLbi4RaJdx2YqqPmjmmrtW9LoRRn1ZoRgIZR1rgsAQpdrU8pLdR1SYiuoZ1xgUVeHd4ip3P3KXJ2qoROqzmdjU7CT6VFLX8z5%2FJoPb%2BzJJqMRW23ZNDDMCRNq6pA%2Bke2BKMDs7rnQKXZ8tdT%2FoMOD%2F%2FsgGOqUBqnPiUNByL0TSXh8vGAPz9YKVqlM%2BfGweYTkfizQhfjkoOYy1YnfljHgW0W2h%2BLIaHzyguRc9jnmN5C2SjceRpRLSJjUZay83gOhnjOCItFjVTAK2CN00NlSaSk5mhZIpVXbrPFQj6lGvoHGIuoh4HWcbe2lxKYKZVnr6rSEmTESWitglC8A0%2FmoBFjXXgW6QN7GV1Y4%2B5Ya1FtrPrcl8kzevVGol&X-Amz-Signature=5720af7e5c4788d3a669691b4e17761e462679d8f5027a5e8938931188570291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

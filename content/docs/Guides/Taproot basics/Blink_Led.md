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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQVW3SW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeDBcXfeD1i%2FJL%2Fs%2FiOWpI2AHvn%2Bq308iizCfvr%2F65mAiBt%2FGBYNDmDZin1rubRp5JSQseDBEAz4DIw7ytKW5jbUir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMNLye3fsfIVvdnpqDKtwDz4toLpTLUM3HJV8esykqd6dIeLnPSQ8RTLkqIS5MIrlaJF9Tkq01oyIFI7KajAHt%2FMlkFqLZNLU%2BQ3Lt54gpruSYQl6dLfPasGk3Vz9slckqY1V1DN3Om9n%2BYtzL75h4Hrn8Xle%2FWC6xYJV87SUhipwzpZDgBuaXJd%2Bhzykg5de8y1F4k5d27yQLTPtFFO42l%2BZoVjEiTLUWG5TsF2kp1wHUATLPVRoedE4LnSq6czXMhwSnPZS0bJ4e8ymeU78Z0VQ8Dwke3oiyEa1KkVZ1PAAwDMBLfOmacfKgCwStRwJKKpCO8Hq%2FkcRSYgqpqWY2t98NA9I6hwDxBcJbtnX1Eq8jCw7fsCWYeg4d%2BBYzVnZqKIHkhgY5OQVFfhDowWvIZ8h8iTSyTP%2Bz48e8Y%2F54Tiudsj6TPXFe5ysK8eLyTL%2Ba%2F%2BXC%2BHK2xT8Vkg226nc1ePAQ9O%2FZeT%2BezD7%2B9Y7H%2B7lPt9HnmSYoHkPS65M%2Ftir3EaWj7siAp%2FdJBOj%2BnemoolpJ9rva2mBkdj0UPFa7tv2RhWkorOKbzaqyFlD9Js4zntZTl%2FEgTK21Gf8bGEaRCpYhGHKvBB%2F7jAokX7AUQadcqL%2BmLQ2DAjCevVuQ5uvUNkBltHClHyoEPGYw5%2FzyvQY6pgFponyAXMmc8Fizfg1%2B8FQeaIxC8GagG0aFqBmwJicYEAZ%2Fu77iDcJECRewR8ZVUAQ2gAJc%2FYcDFpGI2pzjwx6YnineiPkx25fGiIQ5239wEJMAgxwxWV1qMAHjKM2XF6fO%2B4u%2F2Z9SkmfHpEzgTWcwaR8zLy6XoBywfqK5FCynf2ijoFgL7SjSwT6IO4daDpUG4jg5SUeqCdgxYtXkc5zBE8wgpOPx&X-Amz-Signature=d502d7634eac1a5a2b20bb052a553051e4ff89b1ae7e0eaf80cd065fef321f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY2VLU7U%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmDpyVjOp8PNL68N4LcBgOiycvI%2BM6cPaX%2FHKE8XHDjAiB%2BhwTFcg6BALpQ1OBVF2Ewhgx%2F33selIIon3SyUQXV%2Bir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMpn9nModLMPw915V5KtwD5yXuWWfzzjQGfXtCTtILGgFCUXTT%2Fg2i37ODPWNjtUHFsiW2QSaCROT6L1lWP6lTo37XDwgaoQH1PAX02iS4dYlJepVadRmYdjbw3GSezD8%2B1yd9SWI%2Fg1HIXP5E8e0%2FGgZP%2Ffz8BaxWwYqcPpifjycIvMWqmVR72VgqAbUSOUxzF%2BY4mtSEQJJycT9Y9vfsoS7nayRW9le%2BzJc145%2BRFb0af%2FxpaLvEnUQyzImqEku5KC%2FdsMjq9h%2F%2Bml%2FcevYj9O3r69Zm%2B2Vj89VFmOJl14dhf9qWEr7gpKRD2RuEdYGSJ%2BE5J7Rw1BrL91MH7cnftbuGkrt9%2BuqjX7ObevkfKwwMZeq1cAywDN5EuDVzhmwMIVJ1yfjQ9KWEFeN37H1AtedT3HvfwuK%2FJBZSyva%2Fh7VhM88I%2F76or9LEFZQBX5RHztOdfEXPgbHSo2NpyPZgpOZnmo27VGSGVDAE%2BXLLAYsstb09duwqovBIJj2Q73AT4pDZaymqCFuJMPmTDVBkgBxtJvVbvWAliw9mc6y6K5IHTor3AUDNadvTiFYdbOCHtUyg%2B%2FW7qSjjmJLmOqONktQZUVxXSa%2B7PoczEu96pDeOwsahksSPREcFVoVOFNdzK3E0LWtAyx%2BtvIgwof3yvQY6pgHrAgi0njItzmRHAohRXIubmdteQmjQg%2F3yIJy6rP%2FCBnaYri4XVDGC4Ek0TX3OWnF%2B6oTzcQKGVliQ4B35DHawTC%2FwuIY3HkOsoljwiB4eIpxrR3uJaI8Zsu54QLyoppMWYWndg1LWOoe85pTVm6Nh67uqBUtAM62wL8xAPxInOt2xKbbOjeYI%2F%2Fpohn%2FhO8S3uIaw%2FF8EeqtP%2BzgmofpG%2F4mKjyJI&X-Amz-Signature=6c12f5df97c28c55c6c00746bcadaffd30116d4b862ddc468e19c90d09228d32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

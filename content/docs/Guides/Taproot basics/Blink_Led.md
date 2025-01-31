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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NEHF2JI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqBUPUY%2BFAZwQd1Hb76LypKATKYwnyqcPQSJNWxgbPoAiEAmgqevayhRYwU7yNdZ5MoBq4krHed79euvlBKeEHHjhAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSGOnj8%2F12zQzZuESrcA%2FnIMNaKLA90jzuaNhS8fUoADJ32%2BoDCw8DYvjACdKYp3zI6dyYy9tyrZW6kPMZoU0HxBAP2iBQu5iFyW8AEPkvJQV%2ByXJwwHE%2BpJQHziwb%2FedgaXUh0Euuixsx2uxTzvx4dl%2Ba5nlxb%2B9z%2BzWM9SrDnqEgarRfi9fnvvUDNdMMkUM4Q1YvcFiS%2FUEWHmgWFPcuAk1lzHEFEaXTeAJD2WC3%2BrBM%2FjVS3HL97z8AivJw17CCum6yvD86q7jAbyAHJ2xNGk9fCR2%2F1NFW1uEtNQPBjTWTg7%2FKrb3YWnDbRoZKdiNj0RTsCjfXPEZum1j8jPdHVXaBH%2B4hTwKDlXULPrMSw4BKIjjvZELBjtWKUqm4d5JjBFjgfEeE4uhxSyF4V6%2BremeqfAZCcSzTFZtoootfoS0KWyFIBaO7wAgNn6fC3g%2Ft%2FgFzU0OM1zbD8CodPF%2F%2FZCYmSWL6fpoD3F81IvkyBCt34mQ5I4RhEdytsEAOi2gQaoaqV6p5hDm5qkTC2ajJukTSYxZN4uvF4lLBfbZ7ZQYqzh3NS%2BI4OVYVTIIzWOq1Z3bpZQKPaJnasHFNEaW4cJQ0KeRqJH2YbqklKBloe4jYboAo0gvFMpnmwYyZLF2d7V9FeLuIpoSSjMITY8rwGOqUBg3nPn%2B%2BD%2FiOzKgG%2BhH12msAA7t010Ysg%2FpC5t5P5XJMn7r2Au8Z6OWy3a%2FX%2FSMqgcjAcnuDHStZuWx6JY6wi6faNmSpYa3YqRKGywSq1Ay5%2FqkEnI4R08E48knpBDn%2BoSRkYOYB2zfRMPvi6lMVQchleISa2gja7bdhXuBUlOfgUcF1es7JNtXiwp0FXKC2SdDC4Tnos63EFK%2BbW8lDBNsKgZZGQ&X-Amz-Signature=f6f04b74bb89388eae2575b64cd649c23f382e91131a37d2ba5348bb602b0101&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V463KENO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1pQ1HemZzzIOzYuD218oN47%2FJRo2MNVXZhsZWxZfjOAiEAxviq2EquJrx8x2RdR%2BfxDrccSZ2cWtcl999RuChAA6gqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2nnZYw5lpJEBCKYyrcA9G3cMXE9aqdVg%2Fl3I684DHWjsKjAB%2FPZNomXkO1kOOX5nuQcHe6y9bdKjXvVScZFRl3abyRQaEaSyn5hyaDzkU8vWIM0%2FSMtYsEPC%2BckNiHo3%2BxAuaZLZWe3WLIaVkbAOgdqoaQf3xi6aT1BP%2FqP17epG42O6q6byBzdLW0lmi2zUpZJFBQ%2BGZFUHzqDxqxQB3znQhZW42MmAqbcM3XWB2%2BDSnZ9I9PNuvxSNH4E8UznoFz0qvhuZmyx8Njwho%2ByOKfixzn0QbmTUIwTgOB85rIDF4qnspMjwiH1uVSedmEntXc19Gjxe4dnMAjb0eXfyMwHHldMNnTTdGCy3rCKC6LV35LIg6qrS%2BwwngIvJteDwBK%2FNTlWwqJ2wZoMggScNzUQ3h7%2B%2FlZxVVlncxf6vc91tLJN3QWui7oFQp4Np%2BMwpcaFQzkRr0eip0I1P855%2BEGjHnpcrAl8XtF%2FTFHtNwW9icDhsNaKb45pLy545yUM6jRfi70%2Fsx7Fzenw4irgreYgFs%2BVvY1hLqJvwrohD%2BB659ouHqYrFxihzHMKIF3mODCNMirM7gyaGC%2FMY1zKX3JT%2Be45T9GWKF7DGn87OB6oe6TKq92XVHge20%2BKnMe%2BbFA4rv9ScLu6VxLMODY8rwGOqUBPFNrX9gDlCInTXZRWJ8TeG2BG2m73Us10SLwMGp9Ut%2B3H69aE0TYERVaktwbi9fzPa4uYMShE1d8%2FseHLic7xD8zHzI54rk0PdwMiJHK%2FxWm%2FXxx6R1CgvBE6N4tLBodFEpuVQl8ZswfGwKgjwJvYvSToCSfw2pMMt%2Fyck8JPEcrBe5K22gNbF%2FpP7rCrIOBoP1RGMyvP5oUTxvxQmbYtfjfy1kM&X-Amz-Signature=88b49cd4d99e2b22b64dcc56d40b318d43875586f0e85396c9b9829cd6651e34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

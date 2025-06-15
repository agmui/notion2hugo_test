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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DDO7PVA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAk7Bbh%2BLuPknFoigopJUdSmFHyVpf7shQERnd1VvorKAiEAo7czgJrrhS1w6A4NntKa9cdTJYMKTwXvbCBXO%2FfWCukq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCPVX9Pib1xm4YU2BircA1lUMwnw%2BP%2FrvYHAmzj6YZqPHlIh6%2F%2Fw7j3JnobgAKDspSC6YO%2B7t%2F%2FCVGfbZmySy%2B5T1CA4Xr2w215HJhpJp5f9kI8YKmkXz8xDDFAV8k4dTsQJqme%2B0bC4L5%2F7vxx4%2F3eGVMq6ff1cwAbep30Y%2BPe%2BOxkLLVFU53gGaIC8aJ2b75so3vHfruADtnSRrAXSDZLMTINVwWtR0JmerVjAr5bteOlm0hemnlJtmody77s%2BrZE1oB89flAD3S8fdJ3kfWx0pMLwcwvE%2FTQ5y2Dhw9hYTWD4miZ5S0eINP023ah8iyutoxIiVxAHlSJUE%2BxEhmhfrIIwMAVZqWvDYvjCFCRVpkJNfA1d%2FdvRnmB8T0ppHLLf%2FwftcDOGQu82fVIlnXb2u69dfVeaFCA%2BVFYbJyQ2QzXhE9zJ%2BX8SHMMhE0mqtF3v%2Ft0yd1TqJFX2XW%2FUGuiKkV0z5HjC%2BWh5gIiw5JnXNHwWnrlT%2BRNzNY4fUU0tS2xbXC9jCdFyJqeg%2BfUTDCTnsZauc3sSuhJNaTlJswc3gX8E3lS2KG5u46AHAMX6vxa1A3niU3NJPMr4kS2oNykoC0%2F8NIvFkCiD5t8cL6r7R2oYE1TzNqPoymThDEh%2B1ovftdnXHkS%2B4Dc7MPOou8IGOqUB8T%2FXAwcJLNq2auub4Me2VaBZl4UAg%2FBo4MoBGwBr5zoZQoyBpAoWOAj3RSrZWzLbFxJHYFZ9GBiZbHzXzV%2FJMkZ2AxHLpJ%2FC4AYub0%2FD2J5S%2BiZMOeh5UQF1PBbh%2B81qEavikHDl8tkifw7SO1vwO48%2FJdXffUJReh4wgyyd1FZMq4FWhUo3FU9Z7wNi8OVIKTTUmRhWCnB4n92YCsdOAbY4GIoR&X-Amz-Signature=cebab72cd6179024061c275153580bd7d2459c60684e6092093b9d3c8f326986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5NRFO5I%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIBRzWSTY%2BtXgA%2BcNPkpjV0e6DGhT%2FoWgRQci0eeJ80QWAiEAk1NHijlgxFMGyJZkpT2GR1AfSAicjdwWYMhqeMRIUG8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEDLxuJvgyAnXaVBVCrcA6S7Qgts0lQJd91YF9pUpCDOn%2BxTP2%2FjrG7pJ9x8IBCKo89AMEE6pHSkY72ARLrRqcoR4%2BIHiB1Wo8%2FTqfMlE9AQdlD7IpsAl1ibhse1anBhgd%2FsoB%2BLuqtwwm7oZl61e37Mmr9uA%2Bw%2FJQ%2FpM0AzUrzMLQINRzmeICec58xuPkPbM27GdfhoEWeRpXDs6vfB0mXmwG4w6yOLopyb%2BQmR0AXT5XPxCPN6oCPvlM4ftiSomM2lRjSFKyvyb2Ce8XMfQbbC0e1MVwm3pF6lFblcigdNfndJozk%2BYHHJGNJmwKlT9asRhj7v%2FHAxRWzxjM%2FDY17YYyBLqzXJAevC9OLHaRZHeRjLg9Y1%2FEfbed55vu4L24Y47vZ93RzWHI6reL26n5rGQIAt7CNXLrK2fINtLt09gPoK5INlJ32CRTzdLRw9tGtW%2FRuL6amqrX3LAWy55dSDv%2Br8fYnOi%2FkIAaLGM8qPUwmM6mV7C01G8D0iss4Y4wvJ8BIke0h%2BV7%2BCaQz5ptLA6HP4oXYJd7f7G6AszvB1K%2FfqRBUliygDyctSDNWNkvSrd2%2B%2BcH5hoUAMJ5g5wt9Mq6CpdAf8k7%2Fnj%2BOPAge7UmFeW%2FsXFaVo%2BhzZ9tQGXkt1O5q%2BhJ%2F%2By02xMLuku8IGOqUB%2FQS5kY3oanmVu9uNC%2BD9K2upiC%2FsDde2gieHjrE%2FidxiMbFijh0ika77cYXqHU6a1PH9pL5ykqQcjXYMMBbP8n%2FtQrjWwSu1vyXuXlpbM4fzoQSC%2BQvxj4Z1NPUHO0teOSw1U03SC8D%2BMMOedWoYS89ja0zT%2Fsw1%2Bcy%2F5kn35lO9dFFR9qe6x75Pbdzck%2F7BtcXQvj5vWGFj1Lp%2BU1eHJq%2Fhxd5O&X-Amz-Signature=cc0041bd43478bee4c213fabbf449c6396a2be8a1a5b4ce43fe9dad2de811942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

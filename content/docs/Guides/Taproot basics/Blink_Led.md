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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YH3Q5B%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBl1IHIiG5SI0SuvmQTS1nWkKkqzfHtSg62NrlimXGovAiA31giBskZJlT%2F5HbjqTKIlfPv3p%2FohRFWYWXUl7BDDSyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo74%2By71XPOyBctC%2BKtwDlTUBkclhgJRRLa4se1oTipJhc4sEC8JO13fWKgJQvvwiqq2RMmq8aq42iraDwrS2RxBX8z15rJVJOPYcbukw8jUT2U%2BzOzbdCI7qs7CoZJjoddjtvRz%2BAsJ%2B2CCAOEWCXP4BENJX1aBXX6kO35vBcfDE3h%2B8GXfjZEPKQMFykI494hK01wrZxjcmcrDxZMq2%2B0YiI6w4bpz0eNlb8tClkH3xCaNokpSPj%2FQH%2FFk69lWFF1ZVQYOSVUfcNU4y0tn6pwAJcboRLF6vLlCgyrGoU287kp3XIiyeIcNUi8S%2BTefJ38VrVtwCu0oNEdOhnQnWrIUS0zNjZJZRcopT%2BcKxT3XPFnU%2FlCsuzCsGPabpXAAKT5DhYuLWCE6lUGpsMPxMKl6%2BFOSLbj9X%2Bc0zkbf7MbNwZr1Pu%2BGcvWAVD0MzZHlk59PFMBxWdw4LMrhbpD5g1dmeqa8UhL2GwL8mmfvU%2FCvWfurRWnJJt8UXD7r8yFVfRIGjwkfVST9CFgcjgi04L4ALlH1cSTS00V4%2BmWxaPoHCajd5E%2FGX%2BjHIzM8%2BkvqWDIBnpD1lkmmkPQ7Eymvh2oPIJlg%2B2Ms%2FdKT0M3F0TAVAQ%2BHKmW3IFeY4eRZD33hQPduRQH25lcDX1EowyaGewgY6pgGWpE7HZxHR0rDkW9avO6Hgc9kYJjQNg3pgKYmX%2FP9qQuYPP%2FYQ2J6iX331nSKE7bix6CQLeT3HhgOgD4RrNZa3jApGxaSabIhBMpYc67pWjFoOxOIUiFoE1bvnOxmTaaEWPe22HgEIbJsBsY13EO0MfHbSkQR7fyP4DcFErWJLk05aKq8kgJHhu4G6MLjXaNRl%2FH6CBDdHv47Po6e0DfaTFW8KSgaK&X-Amz-Signature=c970025a34a3eb8b1f146d475356367d06f2da0bed75b5b35d55e09c885bf8c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6UK3J34%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsBAUka8XbnHdmHc%2BWlcNeAkO0Bp%2FTOpJftdeYNEjVoQIhAOsLopFcwkUAuIyJT%2F4KNDZVT%2B12scZBXWlxohpWO91hKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnFvdqJcsPOGZ6OjMq3AM79Jeg%2B0xW6tTgIMYV3vwS4NhGGlaNrVxYiIT4PUt4pEm4gUzyvTR9q1nop3LkvgR2hrp35zQFpLSTBmPQ9qSwea6j%2BCkUBeSYaS4YkElpmiPuYQ%2BFxkFiidor6f%2FG7NwQsERXfjAMCY6u7WvPDKXAHVVZOnNKbycafcUH1Y7La3rK%2FpC%2B%2Bjd4THKCQm2YLF3gBCshH8yk1%2Fd72mPNGPDRbSFoHZ7vhKX52UfuuQlOisX0dsuz7aekPZQ5Az08wE1wfQj3%2BJRQpaEdJ4ugBgmMrrs3Z2DmM2nElxQnH5ypnWRzyHay8fgf5nMZ7ZGiLn7iDmXEIDHCgXm5vqnguf%2BRcnl2S7fKmOfC33vu1HMlPTO8Ohg1716%2FAhO0v5W0Q%2FlEZUgGks1sc%2BHJ8mMNHbNlvKqXO99IdQjUEqEzAVZCuzG82AJ56VFiiKfIS3pQASbpo7IjuDJGYxro0dM631EaqYwmGA%2Fe79XBj5mMU7HZ6usykvqrihM%2FCSAlJoidPj5V6m6OM82oh0QdVAwQHHWWOwBJsVsEXIkMRMOAq7zEVDRiA9GFgWcJd71wQ65xJliRQ7TbRdA4hLpPaaUimT6Yc5u8O2csAJ2AAtTOP%2FKawPWPoobZR%2BVKuxAIezChoZ7CBjqkAbsKhtCDi%2FDWTCFVMgXqpQZo4z7OQ2%2Bw1ReSn7u1UGL07d6uwmEUSi92hjPGvjLVhHNaf8ubu44koaCiUAbnyGUw79ShyPi0iJKl6cv4k3fRPvqBR7syb65yn62r07yl32S1FcGCiufy0yuVo71I1dtwza%2FeAgXNeV2dRP%2BMMiSBOIpQRnecUu1tBd3oDyCL%2FCmuxLyZqGUqjyFunf%2B%2F2hlEiAeJ&X-Amz-Signature=04573261d76e122787c68c1c9fbcc07253ef32fe48a4930ea8bb7559c5052799&X-Amz-SignedHeaders=host&x-id=GetObject)

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

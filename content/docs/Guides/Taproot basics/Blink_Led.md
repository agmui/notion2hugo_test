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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFA2TQC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8TEQIY%2BBxmtNYmNG25nOD91PL0Tg5RxcbGgZagsk9WAiBavVozmmRW3ElK053Pp%2BvX2GdjguOJ%2F%2BXScdojLMgODiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcupBKf%2BYk%2FN%2FXKVtKtwD6p%2BIBZoCmPBYfOIipZjd9M689zYYdQksSOMF%2FQ7Eve5t9RBeYBzpqN%2FK9qchiCw4h5IuRK8JV7TkF27Tleh7muBlmbIK7DAqZiG7aSMOAnFF%2FCVii6ELYdAg29qn20gyAwh24O58aAHvT8NlPDUOz%2BJldR9pY2h%2BiYHnoxEl1xQZux9v8UDZoJ2qVysLFagY5GiJ3W0%2BRS9dAjX8hBjsldQ3UtR%2F2dreUxNuXnzcs3IcKM%2FEotP4ko5Jv7D9Eqb9p8WSHeALmwkAIcArBz19zhkLkEPcZzch%2BOfSea4iEDMor65DnFGdzgps4I%2FoxSpLq3Io9UWjoMLcVmhME99sOHE7DFB1su6HCk5%2FNNogcOugbfLJbDp20%2Fv51Zddk4nXGKtXsAQEDI3IGxf4eTqJyhTJPitbWE6AAc%2BRuXQK3xMuKhZEH5WzyHXrj6mlW%2BHhoG2yP3Z%2B9Vx85nIwuy%2BTd7bKZCBR2bQYLz7Wle%2F09ogf869Suvjo6klzg9DuiMgvcVPL6eAbdmqou8UOY2ZTg5oTzy9qVjIcz%2Fa0UVSQ44slmf%2FXXSBtjXI0AxYal6SbXUGvTvhEcK027%2BuAneCqkLwSeiDLYeRgA1ZTijo5%2BUuFBOB8qUj1Gl1CifIwvrvLvgY6pgGY5snzR3TlI%2BEP5ZHUZbPflsitPlrcE%2FDF26AZQ5EYL0vGE41P2be%2B3jy8%2FZ1RWwhtuSG9gV%2F5G5IlAAPm1fb%2F2lY4zFDSmFXnXfVg7H%2BeuLRd2AVz1YtPmiS7bI0O11nuUZ%2B7w68WcqN1YQpxwx3eEOTMEzG9WeoCwpeMzAXe0vcVx9lBuMbYhBqqKYrOJI422e%2FrIhGo8sRy8BskP2ITLV8%2FHSQJ&X-Amz-Signature=af8b90c16c33f47d9305ef74bb4d6d03a4d18ce71d8bb87c33d7d1cf020854ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663245AF7V%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPcK98oY3Suj%2FcUPNv7CMESBxWL99WqnjoIUfWGwgfRwIhAMoouLC5bFbs5DNwkXzRXgR9jNlq0%2FHv7cGvMNpKGhGyKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweP1ELWqImnUzeqIsq3APle%2BExUW82az1DOnOMO%2BmGMttKjXqBQ98toRWZ%2BGYIUDzMQJ6IIrjxgg9YEcGB6y9JURGn8rPvs4M%2Bz%2Bl6eSEfnGW8diz2IjKjiXJnorEAqjTSQCG2U8kMExA0As2sFomGMpv8pYyzeo5URpMvrdR3%2FiIr%2BdfkBLUcZ8oZCIQ411AqZmkeY9SPG7qcIOsPQE6RRn7lvxj9WCSgYTKLpuOpgqD%2BQRvGcBhgy1iS96A5YawjRi%2FRMxcdUhXOEwTq240bGQGbpHq%2BFq4DRDupxGI9OBFU63%2FSOIMQ8ezab6KYX40qOKNqu20HnvMf1gY%2BOR3iM6gl1Y9xy82ojkB%2FImQuTln2%2BC0QMZ7R%2FRPuBZYxGkNZU3Kyk0jKJ%2Bqdxsq09D4AzS8rpCfKVjZtXzufVGxx0%2BfyL8z4nRdJ5lmX2gZJG9DYskbMkK088mE6SwM%2BPKqEbGmCayVUyK6p6oFI80qVdTSdCN%2BZqdLx5HWgpVqEesd3Sbk8inxkX1Q9%2BAayDTU9qwMISgcf3wuhze8%2FyfylWD83NxzcnMR%2BAiTA7m%2BQ78nxP4z3ukOoaJtK2eJ5hoNs0yAZYVzdarAcSKcn4Fp5CZaaQH6995yPxZmfONDiB%2FvhABJdPp%2Bm7DtJZTD9u8u%2BBjqkAfIPh%2F1mgFY6urnwPxrEE%2FWxmMtHrE%2F0O%2Fk2P%2Fp84sYuhfnDBcYwyqxfF6fWP3tVFIHAJANvLa2R9X4f4QvJeZvxJPx7RF3XOYAPSGLqnpH2dIQbj2WaBotCGneplSOIHAl%2BMwJCCkdeCpBvy1M0d5cH0A7eN8x%2FUvkaKrMcL6FM%2Byxo3kOapG9YGJKuSYp1M9xmL2STIU9ZjsHkQH6Dn4r%2BNfdM&X-Amz-Signature=f0d1c4245c49b96bdfb5ac6ab43e19e67725741c914aeaec04d8ba130684aa2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

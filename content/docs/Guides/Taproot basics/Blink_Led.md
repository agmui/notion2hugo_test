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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA5IZVMT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCtf%2FMQVAeOf9qKAB4CVHUPbIyB33qEZZN8ibpuXjFrUQIhAOev1Q8x1j9ENzJmAAcVTb71YNrk4pkQDaDznn4Zu90MKv8DCGQQABoMNjM3NDIzMTgzODA1IgzXQvPEoQ395HFw5yUq3APOSKorR78HUcjKgWcjLN1AyMpB15lZG94JTejbOpDgwDQIfns1DTGV196xHbxJvp9%2FewZtvQpoFCQzuBi3Xlc%2FFaa0f%2FDzlNMLB%2Fd%2BR2dN2vHuerMw7DgIQaPIDjTbUCnEZPCv1LKb%2BBQhkHJl3g3eq7ZJjWUHMRTlrGeMIPmHgw%2FABpb%2B6W%2B%2BAThR4fe3YeTEM0luf9%2FTFdk3qYah%2FHfZJrSU3eL43rr0QUiR78MWeD0cendFt40WKB1FZGIDnn5Mi3H6BhPOCazIIsZjkO47cHyR6d6EoRITknGed3zr10yfRVHtszX3gKiiwoTbAqfL%2B0ERHwi09ifSIRD5ukKZmr8iud28WUQkNjXz6SXR3UQymilw6%2Fxs0eOCF2oHArqXKIRoUaZ501i28td3dr5SpMLP4wWjBdCWQou2XbkBxdKC%2BImFmEZl1SizpeSAR5ADr4Av5ff54mMtdEowTECSGHQOKiv3JduecvS9%2ByZZhM2OsrZscqs0LHPtWr4FCHc9LwWFtsOoMFLDNRlvdl71RZ0Rs1gTUM6LJEQ0%2FT7tdFRn0uWDavZ1KkP9hYQmpp0slpFewUCD3NobnRkQtf5iQM5tyW2AKMnXknjvYrQfW0VDR4yqEWu%2FCmcWRjCHkee%2BBjqkAWxM1buuqhefi3I0cLBw29OrsrqKsGeoDT379eEID%2BDQhhvdoJ06hjAy1jtTqLoj77pqYw1p6bbwoJbHrmLIq0Kw8TfTZTyZWf9JC7Ui8bB17CghIQKwsWoY97beZiYz1Tc7XVufIF4HhGvtxen08lGgFBPJ1jw9bu412bp25gEjdMg48E5pW%2BzGoGH7bV2A87x9Tw%2BNHfY9VOnWbqK70j3hxPdD&X-Amz-Signature=43ed82a6eacc345c202543525dd6f7aad78fd5df095bbbaf9b17e2055e340ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXD4FUZK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCxRy%2BF7fNIX2Faepu%2Be9t1975j54C7gg2rSKwcg%2BEBHgIhALXUCy1vQK8SVcZOpvdbgL%2BX3vySt7uEG0DteANwpwxaKv8DCGUQABoMNjM3NDIzMTgzODA1IgxQnyH887OisinGy54q3AO9bANFJHyJVWGD7%2Bo%2BCPG6HsrhmY0J%2FYV6i07RtdsT6EwJRm%2B2E%2B17sZXDmvQ%2Bun4BxWh5g%2BFdKKPmEZtEhPuARH%2FILkYGY%2BnEdqHwUP3wYSgHmf9l98JWdjQiUNYPdK8JnoQpUO8LIW%2BwNtap8sL79cFkK5V8G%2FsjPe2laJ4PVo2R9A5b0avXxmuqzZx%2FCAd80hoJBrhnEkPivosCLBsmqjSF4YQQMMru8fAYDnq1TNg8bHxfajoni4sYGXM8rAqSKZih%2BZ6a52SlUmRLtTsUwOx0ahQPg3luuK%2FRSlW9wb22fXlVnNodgGfANaJ02Hv5M7l8GwsN6D%2BgLZ8ZrCOl9rimYuq%2BoLHlIZMWqv8BnLIJdr%2FUPhLu9x%2BMifITG1428ue1Yz1Ts4HExtpHfIv67vP7RuG6Mn2ZkzMYaIAtM61Xusly%2F%2BuZYS%2F1irjK7%2BnB6TFDM96k9S1Vypp5ZU%2Brth0RaWr64esBEQe49t0lxmhr8M6X5TmxxXFiUfhXJ5F2gXmlhDo3vi2744JeYODW%2B71Ln6QC249Tgke9QL5Q%2FgXr761BEOcGHa5SMOvXnyPfywEl%2FAhXwg3zuCe5sAdwfEps19qxSSvEtwEilntN9vl7skQDqogYYwCf1DDCkee%2BBjqkARQY8oFreo4%2FgMwRsbhxbYuYZncdirXyI1X5UOkizYlLo056gIjZ56olHUi6OeixSZao%2FTgVRzNQPozPg1%2FitjyRbEn7ZfxKg5wZI3RqIR32w0VR0bkiEE4Y7erDVu3L5wQpD8FGT3%2B4sCzUIh7%2FTlMApLllXBCQNnQaRLMLcQ82Lkg99lmv5eM4XPCDe4JtX6UaeS6yBU3QcvtEjk47ZwLKFHfk&X-Amz-Signature=3db24c27e06cf1d2d2f4e57fa4cda551503af7bd16159eddfc3f65f422dface8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

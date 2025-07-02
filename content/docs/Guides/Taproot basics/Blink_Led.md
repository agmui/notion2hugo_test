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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4K3CRVN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8PXs8fj757%2FymWet1sxx0RLY2eniJnurWEmZXUO2HaQIgeNQdEdmoNOIlKtz5Xnp90uuPhgWvshCXynrBb8rnzTYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJaBzcnrPTIAiCruyrcA45g%2F2mpUSTNJeFaLPxkPM2y%2BbzJIV740Xe4HTYanYVUwc5MQmcImQeJpkqCQEY8OCvkQyqvVs0thR5JzRntX4pWpP20tJzn8fXZ2PxmcvKLZjNQdqfO0V9CYC3VCkQOvxXCPR5j10AhNMau9RRcI3PQLa%2F%2FlcRPu1jmtlZSuyb%2F%2FyIDTtEoo1L52tPAlHhzuF%2BPpaqkzPxU4S%2Bvw4feiZArVPPJ28MEGbuhnlyYFcCjslVl2Nhoh78lbPPNP2nvP9Z7MJYud6Txgg4Zw1T267v%2FFKaEzo7ObHmD6LvAXxNGoIDsbVhYdeK6YcgQfd39%2BvGnvMp%2BnAKwNQhw%2Fz%2BHsaWhba8ttzjrKYlYshVKR%2F8wyGY2BJys3itL2Q0diJpUFaw%2FvUyjJsY6wSkp2D0F08p0%2BtDf2GVx%2BL7e1KGNvDQF04ify47Wrw7KHOML6U2Ut7cgAykZnnKOgp8CYLj83sCpqDV%2F%2B%2FdpbuwBXkPHhKxSO2NQ5s5zrp%2BvnTJY9NRpZGOzYSsuvuL4dLvZ88%2FwVgLohLW9sJw6iid2uXr4XmUaRFxwDl48CIxtI0eF61S62onJy%2FmglnqKJ%2BtZTmUsaZ1r1enORbNrpupkeNU4leNWfvv2lPZHBEKm%2FmGNMPaTlcMGOqUB6bsXIFw1bvCxBIUNQ8AW%2BwXicJsDyruoWmerb6PMn1gXai2ZaJtcEQMVLLUVuEI%2FU%2BoshFhWh8Ce6FDAw0P9MXqDTna6TyDyvV%2BymiqClAu4%2ByFbrNRCIMoXGr27XrCMMxZikEGnav8rPAqJwJ00c5YJVgSOD38avdsWiCq3miXX5ctZrGB1rB%2B05rdUaB4%2FeP4OMTcBrdE1PHHzLBuNB2t5w3cO&X-Amz-Signature=065cd815b79b1a239ce85c9f1274eb895e7e79a93b8c9038313e8ae63c2f72e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVBKOV6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2mlgNlmWwN82Cbkc7SWldzsAQceMFiCaqGEAzy9T38gIhAPxJqixrB4j0uMlvZU72db8YhxjntEr%2BICLO2jZ%2B7hWFKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqyWl%2FpMLHsF5wWLAq3APX4qaDsocnDLmYjDaMyMo8Pua3hLdCiFJahPqW0xuNxIP24u88HD5fDzxas6%2BMnnnftW1%2BZ4oUdgusrxc28UH4Vl0b%2BSqoE%2F0FVapxlKWIcElHJG9JfX5zvbwRFh8CYK4JwH8YBVqKeP0qDEaOt6U1vXTUE8grbJsOzIMJm48dZd5gCQtOamG5x1LthvLcoUq6wl%2FAQTlSSlJ1Z7SGfwkw%2BtwYHu9rfCD5RnmlJj7JUS5y4j%2BcG%2FufeO7aZCQ8Qs54%2B1LAbZ7SDx52tYkQL%2FM9IEtdzVMLZ4kubifL5a4XatPmSHcebDyBtXbQ8XHccxauMbuF7meiImBSTkqWOqdRv3%2FoWqrhnkpVH29HaMirAY%2FucI3k%2B5God3mG0sGWD7NnTM%2B4vl9OcAF2M%2BolyU%2BRUkhkDiY41ZijiY2qndXPEKYpnk5IuVo9hwJCqoyinKEQsLUmKtGFrfbRR9CPyIHpyxRJ0CFCMUyL1wHgQG2sgt9%2B%2FIBiqdWz5rdzX8ms2BJ2DrFyxqTOeOnJoLFzO1MizFmVJ45b%2FiseWgxfi9T%2FWwE9lcBcFDlpDW5cRsgxz8JqaMAAQHVnoY%2BIe0to2HCye%2BJQ3gDU7bjUAjs81p97liFnUXmizwSurpoEdDCulJXDBjqkAYmehdL%2BtBe0cg%2BFTnuRfPku3JuYnqiGgx43r7JtWFoJDsq2BlOuQUgltGtukq9RHlxucM%2BHQRpX2lbKQlCI3965ZYM7MluwV5Y2lKmMGAu%2Bt7I86NHuw17UydS5q4Lz%2FaAX3zK6wTg2r3V79ggk7iR9SyhcK665wOMoso29feK2GiJToJErU5Xa%2FeLMwoLwvzMz3fT6olBAnW6jq3at%2FJd5Xaa2&X-Amz-Signature=58e365adba8e3eb482e210414110bac8d7d5ba83a0dc1bad0e9aaf81b6660761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

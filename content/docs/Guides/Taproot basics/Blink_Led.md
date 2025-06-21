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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBX4J2ZV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSYCs%2Fc46ellyF8KEnDaewOtrWSYz7253Vwfu81UhFogIgAh8nscr0t0JRato7LhUCTKWXGEQczULFFOt8K3s88NwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH87kMpCcnrhQDHRAircA%2BrGIuEv8pXZ%2F3FiYJ04ucqzaNSaiIFbVWAeL5z%2FcAak19bfxrzqyIfyKglW8UT%2FtMsEGxFOLPpootUxByb8iUGmfRZnFKCO%2FfJJyiJCKp5eRHcxdwAhdDo1wv5gsvj0HsTW3874RxdLU34qU2YDeoWvtLxLgPC4s2NmUaACvkozLz8s1iq3v2GQSDHe6WpB%2BKDUvLHTXOiZ7l8NZyQbZxQIAXd0OuQ8NI9D9R%2FOq9LldllOKKjdcl5XEtHgFuu2L7Z5tvYJ4AxZAlsxkiu1ZBnGi2CJNX82lq7pvKNueUlLR5zei6%2Bf3Tp%2BUuFTf790Lt1yNjdOw4YjCndeuqXmraKhO2q7mfSTgXmN7%2FiauQsF1nQ5UGc8HJ%2B48gr2UlQ8rIjL2xhJyXf6H5uEWqr628wixljG0T%2BlQ3qasTDBQkClNGlJls9H%2FX%2FUFib5TITua07xm%2B%2F9Ag1lncd0Xu8iWNE38NaGXrPtq7hrGy4HshiZKjdUoUwxBiFavFB%2FYcjiSA%2B4soVUNFIbfWgEjJTURnqroW8%2Bsa9RxL%2BTFSUVzrBgI7ElLfzoos96WgTB1FuVQ6TwKnTHwnnEIhxm5AgmnmCl8ACZy7FoNM%2BKiWCay4mYqtnO01sM6%2B9tY54%2FMMaP28IGOqUB2euspyRhap4Bj3OzfwQTW0vUo%2F4VgilmG9Kuj4ffbo4b%2BuzzWiol0v6LWCYk6qx%2Fg%2FoIY9flykwmNgZN9qy7xOzjR3iXUApC93b1WSR8h60UkduaROv7eJQkcSU3EIhSKHNmIzvCmU%2BJsKz%2FLyva598UaFPi8x0wB0BjbrF5RPmWP4eYaNERD6ErTxMKGA63XtubvdZZCbMhjZXP1r1MSOpGdu%2Fq&X-Amz-Signature=359b7d9c0e444378c7e2a1ca4f627342ee43e0d339366d502fbc6827667171b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2WNC35%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpnqM674lHQ8XSXgqjNrJoUaW%2BxSAUHDlhQulDBiw3XAiEA5eqVbqRq4TkIaJ1bjgoKjOWx0PBp%2F7K6rq%2Femm%2FcMPkqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0yeDpzHLwQ38e%2B4SrcAzYdjSHvXqpyNVB61MAjSc5QCAuG4CiHkbo0W02IcPwrh3npZqOlmmUYT%2B23r4JX2XinajoB4vunYxUvlano8X5J5Ya2c7lghW8knevb9q9%2FTPvbRGttGE%2B%2B8HAPEYbU0s%2BEQOF1Nz%2Bwdddhtn2G6ThRGYwGPFCl7mBeq866MICQpGbDG2JNFt0rDarVYuuvApDDoE8eZXkE4aE5kIsh6Ea0pQ47L2C8TWu8lN3h2QoJzAKZVECjaix4mlaonqyC7rirAjCFgleanvhJlvznVC%2BqzWYa3s97Nt0oHqU1U6G6aCP0duwQj76Q8ddMg4O3c%2FFwKYXRN4844NQwQXbGxrIRD9cRNUg3PN%2FloAtUVQTkSpCWUsXwiqZVcYwUDp5PkxJKBRevmrCAKsBUWx3tbJmmstE3aTCw7dVsX7vVV7d35%2FQFBj2PFzgtXmeL6eZ028zcRf8mF%2F7dFhwe83GmcSC2aIZCCZGV1GoyQRGGXt%2BR9w0zSDRPLKjhZuzCRxRNfuzn%2Bs8nrL5JGLXAHrXd3%2FxLsiD0B2HmPrazO1OsjfrLgkxaFDiFtJWqx17jZhiAKQ%2FqxSNQ27lLOxAdRPWFVnoMLxBGnGZA6Mcc1CByA5gfRW0LXxl%2FF2OrrfOxMJS428IGOqUB5Wlz46PevHnoyQsMNnzDl1tohjVTNY5q7mn5DXLXzRDIFU8E0KliMS6TzoK1aaxf9uhgpvltmXYPqRd%2BaZQ2wruelLZAf8ZDUey3XqQBluU0t1xtZVt2VEqvz6%2BQqW0mnb4A%2FWSLqNNL3bejotcimTBcgkI4RLD9cSN%2FRpwhzTglXoDPXGmc7uD4cJ0gRDDqbxCh4oH7mVH2Phk36mY%2BnbKWaSr5&X-Amz-Signature=ffe05d57a8fdea28b236b462d1837fa1cfec97267faa71243d630dfa381287fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

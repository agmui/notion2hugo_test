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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZN5Z6G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bn39jYq9UU1K0M2joRtj%2BvKAADp4TPDdgoM%2B2GR%2FVwIhAJHSJ8jzHPJd9ycOma0CPrKZYuVXMAmLHIJhki6sT8UhKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvHcADf%2BU1RmVjeoq3APLpo3nKHPxsL%2BW5gUBezQ3GThtHtH4CEe%2BWCMMKtVO%2BEm%2F7RBl66oGEUPbMwX%2BQj%2BIs5mWE0Vn3%2BEPVzi%2B8bETfNBNEC4T7KMec15rRn%2BvrBwFo0jHxPQEHpUKO2l0khQ%2BvBxYwwixwCRulxdY4WKjn1G81r1puFz59X3bp43qQulg1GZ1pNJLNbh1ICB4pE7RACMQVhfVkI9asprB6pcWOxMmn8zQgs%2BWwK4onlHOB1wrsQumvzhltmvPofnrHGpPLaNOe%2FsDc98nk8PApsXUABlwwohSaQJdx1o9trhsxuoNOYCu6%2FhhNM%2BI6cOHLcL5F9%2B0E3uN5ybl%2BS8LBtTfmj4gFgTFA2viqMRljl7hM2caNws9%2F0HV3ss01rhGiw0qWzihcvbk1BCxipg2WkrI3WpBgVUciAZT%2BsBFcTPe5ginXlGVCPhU0SpUQPamBVY2wkuoU5LDXNAdx7O4exn6jYwruJmxgJPUZCqe09mxAfmqrSEMfJZpBZYmh2%2FofiAtSt4u5ldD5E1a14UHjRik2X6a48sGeTjtUF9rfzHLRhnDHshVpEY9DVphUShAD4jR5a46qC9QoJ5fbdYu7cnn%2B%2FE%2BhtgJP%2BFcrfZcgm6zbdT8NSM7zSGKu5fGyTC4pfe8BjqkAZnOXT4OT4hZ%2Fszd6qNgCzbdH6jMsy1LE28ReSod3jwmVNtalrSHc%2B6IPl6Cpi45Vv5FpEv3xdjHuSBm5eleg2VlJOe0TZXWm4FRCHGM8oHaDzAPeR2mkfojgeuXBst6qMYzforMh1eudCU2uuh6R6SJKE70kf6iu8XfWmRyBz4lC6IYTtjTHHLx676xcGF%2FEPJR9xpcE7nSRPSLS8pdATG77Gs%2B&X-Amz-Signature=739e755d6e7e64798fe3cf68b884c3fc7653fbf87d20dd20722e8a3c21d6ee86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNEEDL5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAzdgojKe1JyYz8jBhW1%2Fk7Ni50G1Kgx8LP1s8lKg7wgIhAM4Mo7VS2MqJcozpv78I3kLXUDv%2F6Kt3YmvkCIEGyPvuKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwL1mbMg%2F9330ljWkcq3AMb18azjFahoWShyU9KTKixowAaab%2Fvs%2BkI5m5wOKz3ELL9tOHkD4otKsUAVucYsW9w3yQE2WyMW6h3gtBLVbqzZlgQ19Qtx%2BAYkHGWU8XYM8ao3ZQImxLSjFxFA%2FkY57qG5Xs9vIlbTLKur0N5ee0yMwTXbg4cly2929H953TFITl%2Bd0B3JvOnFhwsW42qCGjekFSwaTWUU2Em%2BVd85J%2FeYJIC%2BHjV8uCNljqgFL9Cum32%2FbINFWB9JaBiVHO9Efrf%2FMN6g6nZjFXrd9eHRWWzZyggi1vq5w0PFi6WzcGzvqCTHA9DBX%2BlhqkhtvHWEir3ZSHGGohEY8fr50a0bv840tqa5YrDFipZHzjbD%2BL8%2FYSqVClaH1CCZCdhd5DlWQTcvUy0iRsu%2BjWHqVmbH9Ri1B19QNxooLTG2INiel8woE5pkAMytnCwMOVuCaLILlcbrt4TjwApUziD3fHMs%2F8hd5y%2F6%2Bcfl5HyE50R23m8KiqvoHKLycFPAWZA8s4bK2OHmozAbJXfekuWLDezxgGX7o2783A8lRMBU2UDU7jWOT15OTMCZ0%2BhYmnKe1LFwy%2FvzSXKg0WYkY4IHVQra%2FCqsndrURPNYEoYn3sl2gHM%2BS0YkLbtrdljN7tHPzDwpfe8BjqkAfqmQ9S2oqjMgMOzFabpnUNgv7TA1f5BKJMCP6nAx2dQVguUvvnkYi1ty7bPA0JmNlZxuDGBY6dTKaL%2FGhE49YN8gKx7XWgaQjSg6X02obxAER%2ByoeZtul%2F2oaFPOiv%2BU7YS5vyK8%2BsAcZbLASVWc1NsWkYWrM2Sq6JIFuvEN%2B%2F1iVzX%2BVKmKAhtAjgWWf2fXhPWS7k3okU%2BR9yel66tknK1%2FYSE&X-Amz-Signature=333404b5ccd8c5eb552dab9d7f5a4e523f2056da439a9e4ecc210f4ab1d13cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

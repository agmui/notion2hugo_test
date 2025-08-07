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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K6TAPG2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCYjHGYv5G%2FBCXlFZyerEjwtN3%2FjcsuvTFpSYxZcoOqrQIhAODl%2F1oJIPwPEiDK3C8XNxcKEf4sGhTwWjp%2BB6k0167wKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjmPKsW4BwrwUAMMYq3ANHaz5YZO1JOnXaCm09Zn0HRc1naHydMF4vGoD1NpiuDbT%2BLErsEXzE%2FHiyjLxOSj4JiXf4uCE2JS%2BAsAZ9m8fNLw%2BeHATRGL6ZREH01Uo1O5vE9UdbyM5Xuuv5oUKT3r8XfcPr0gI4jOQDGCq%2BytzsgcaPoMLJ1wUbeMLqypl8HnfHcbLSJGZpEabIHq%2FI9lMEm9zf24Txdpqww1L7rD6Lyujqa%2Fl%2FXE1AXIR7ZSwDU7UW65AL0ZA%2FvoYx5uOp8CqrxtXERDz7MBiIEJw%2FLccsJLDN8PX36zZDNh4Ys5eFtwZxfgJK6yCe%2BYOkTXOgmTe%2B%2BwVPnGHOgR7Ghig4teFu7Y%2F0x%2BVFGwckvjORzMlNqWGDhW3SuE7JZN5rj%2BjvxfLcjDGY5l0BAOxz958HeOE2BouPPL1YKGpBHuvDjiQAReRC6A5lNCsiPXWFqKoJftmUmVkTgBi0dxDCjhIZ3AfuK6UagoFRjvCYz9L2RxLqiIJJrKA0sQTvZbYzJOp3RXt4%2Flfby%2F96M9DV1467OJCuF4EbQkagxwxWPlgKjsn5t5qzYAjEUIdDvRkJ3zIrIipPlkWAoDRzUSc4UhOcQ6BdZmE%2FhETVVVh%2BvSxgBSN6TIF35AFTj6vln2OzfzCdtdHEBjqkAekUf726fLheusIVE56pp0I53oQeOItgu%2FI4UCXkgaMI%2F69fQZtUc5iMCkobDFeNkkB0mcWQnS97SYCeBQRWbL4UclkA1xmSdd0AEydnReh7KfEZhNGnWEDe3yWr15AspwJdaAmQSXQpLLTllQCNJJluqx2DPGq8h7h0uXxirY8gj%2F8Tppm1leORT%2BVyr6yGzG6FiF1T2WvvND4tLnFeQdhUbtWr&X-Amz-Signature=443384ac082d21b6f2dbde596b2a5c605138bfbc0647c2aba5acb4019c9fc138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMTJ57FP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIEynwsJZ%2FRZMx0EFz47BlYIlNFMk8X%2BRcwZ0XMhp06r4AiA2sUdhOpgL8lenRi3BWuDbraCFGc34xs22QxPomq%2BToiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMger4c9xp5OtsBgDXKtwDVr63HGgiryvHI5ub0bHBgeYKqx7BFQJXWy6sfVB%2BHytqbDHTonqitIwSAb8cxMISyJ4W5aiew5xzFIQUl2j5B6bcb%2B8XlGpIDqOnS1CrCaI7OUJCttEWYSvXVqERTkEbHf00vjy3oJYdS9Pkt%2Ff9yJYqqI%2BrL1tW0F%2FAt91e45WaomDd41Oj4JcxfyNc%2BcTqHUilq6Rd13OKsRj9G0VlESZ8OhsNS9MD4pg9dGSl80DdlFHpUP44p30FbUyv3HBJZokWo4KGPqVO93O4HdjBJd3vUK0814GKXkl0i58SVCFg3AFnRefuwtPTeQAXgcmroVguIo9oMdB6BAe5z8koaBPg7mYBb4waHKU0wrIdamg2oPLenydI8mrfAg0wN8Jb4%2BKNbehaH2vgHwJzLHeztzQymvjvuhLNqqJ1MtIrS0ngakl%2F%2FpxFAV2R8dgRLurz19tz8ymrJo5ob3g6Dha9JbzQ8KMd7avSLU3GCzNbekdQhEqG9fTnmi3KxyZ6Rlj7cgVqsnqLSKiKTc8dcEFxodQXSOBQQI%2FfEQn%2B6H%2BbVpkqjHqb3iqMSnvf7Lmdq4zHEgfyx07xvEz5KoHs9bpHMOyO5VHDI7bmMl0g9jDK5F8h7hKjY6S5s%2BOTCT8w7bTRxAY6pgGBXwfH4ASaBIWtykUXDw7x7aOking1Bm4SkX2wY%2FpsTCIEXVPbK%2BKsLn9gjf1DUXgx3TCZv53ABsVkXFNt%2Fawtk6GTIs9v%2BH%2BWJflUliKqTpomCtYkm%2FSok1ZEhFwA8i9qEUHdvhbXQr8Mami2x88gTAP0sGBFQ37ys05U2MwZs%2F0XTmTSEmx6AOdQ%2BLXfSatbqzGuMUehLatA7z7WkIyuyoTNsclJ&X-Amz-Signature=48984cdc3cd86e8f66ca7de0764eed002fc4dd10efc01a2c0c03973849d17350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

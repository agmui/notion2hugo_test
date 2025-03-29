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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUAHBJ4I%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCN32GadU1WCynCwq5wk54U6k7jwifPakSHADutWUgLNAIhANkkiWzJsMzdLs327ZvV7sJTFbPqjqazCpIsiE39y90tKv8DCHIQABoMNjM3NDIzMTgzODA1Igw%2B3EGLASNNAQGulSkq3AOAbXKBoAseQ%2FXEtIfVaJOZQ7lue5z8rwZ7IxIwq54KI6YepOUqqj1aVlVSKC32AqHk0nyBvBzSw6hu2BjnLFudYKAaXgis8YLlqwpvXjHyUce%2FixTBDVFAbqirOoV2Yk2UbmJ2pvEr39D4OgAocL%2BFuqJMhPRV9YF7N6cJQ00858Yj7s6ADCF2yQ%2BeUnEc4gFTqJEbyqvIU8kVRkWPq2BRmKRfclJZQhAp2i1RG73XfGYWhi2gKvTnzBSlMhT3ujXnhnLag9w5YcaDRk7UJx1RVEHzuUYUn2OXDc31xO81yZvtNQ1KQlGC03g%2BxELT0iP4nBQ7BvOfi8dswJzQaN0xYxzTmQoA2N8tqHpgTf6NxBZn8ztmmLdZHrLMxwJ9gb1J8qBjeWNE0aRg0J8uFVYtOznxAHjEALhmU%2BOHjGD6Tj02jCFXE%2Fn%2B6x0aEwfagrNuxKmIhYwgvL%2FG0wEqb1tKNKBMoOcooZrgFzY75dosYtnR%2BMrE0BQN4Ab6X1y%2B0yf%2B%2Byq0VJ0sQEg5xA4VTK9Hs8tgjziedNNGciqI%2Fk1pxY%2FxMhF5UNC3dTz26IMxMhkX9fsulAuqynlCJYrlXP37pWvK5wcIyG5nTnwjGxoqbI5VQYbXwvqpk8uYHTCw4p6%2FBjqkAUPGudQAFtwOVDd1j5zsE%2FEz0taKkenUT7xM1OAvmeWrQTBVSzEZTyQYTNPvm2wUuEya2S5otsT5AgoFNxaS3iN%2BFk%2BpukuK%2FqdnNYSWtg81rnLLYyLjHS5XymAsivxZs9xphWb74X9Mgb2CIAlONyWAsd9e6U3uSt5z2mTftryR28PTzaFEdfzjlo4ebBQ3ATIVev8bo9%2FcXJtecq4NnJ%2FlRyZB&X-Amz-Signature=5f85239cdd78e7566d26b4d4fe28e41abdab54d9a84e32b8234bfbbb86b1563b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSQZ72R%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIB%2BjvcgsFN0GAj9gYyPsCNOPjyIVDmOaaGsUhY7eFVTtAiEAsyepHus8aH8U%2B8mq9h1MylD3YN4qwyaFdh%2F67Kj9yZcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOulAZbCL764RZooByrcA451QzxZ%2FM%2B2zHW7svi7ScZ8VP4jBRCdsUOdb4NBI1eRwwd%2FLZtM%2FIOnOEOzQKaIdNiFCijYboCgAmwwzqEXUs3ReqA9Z3uCvO7gA%2BJjuCR5tMLy4jIZsDIOczV2Oe3hbtm8Ufz44rUMm16Urp6rheFiWTth1NB0eRoNOlbKNNghCessYPygd%2BOw3aYnXwXRlqLCTTZuK4wE5jTV74%2FbVmZ9dKJ6ugG2y2a2JxMzP2gnYb3hzE%2FxeZx28O0OyUlC5y%2F8pG69W2yUlWi4dGGdF4VYq%2F%2BHVkntlLgjbjgd9TYJlUMkjhxPhAdb9IhZP0boTfWEHDwzJ7GnuMHq%2Bwuc63x9CefOaBsHV6R9sL0lA0ziPVugV7VqBECuOpMFHThSEGL3WQARv2sRIWR%2FvGdjIM8ySPr9H7GsMvN1JmjvAehS20Ugeo9zrXVwr18oHqKjDdb2cM4%2Fe0NHKCvPY54bBlU0H5fSQCvK%2BVVHH2oLCW0fEGmfHgT2nE%2Bp2oxd7ZOojI694KlrdkGgwMfNd2JWIpJs1IPckpx8xI1kxBMo6uL6dhAA0ZIU4YZfmCzDt%2Fz1zzToXzhmhf7D41ObV4LBiL7HkHc2uy8pe19MnkjxQIXHYS7%2FN8zgE%2F4%2FLaIRMMbinr8GOqUBZD5a9FArIbhoiFy5%2Faa5dgLXqTewe%2FksBMQO%2FdYv%2F666My55uRvLqCsuDNcDyB8mPPFb8leNi2G7ttypc3sd2m8eWHDCi2Rd%2BlQ0OKaifAA3yWApHONF4%2B3dspF%2Bx%2FRZBjkbTpjG%2Fb%2BA170lCMF049c0AprwO9iUWsjODbFRNncu%2FJU3Ehd%2FYBDKihhIEBLFbvyLF%2BKgfME8yM8ijTfNr8hLj0ta&X-Amz-Signature=2ea947e79baeaed65b041b7d53664f067109240a0d2fa6addefc24af7319850b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

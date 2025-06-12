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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M52BVJM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCGwlRRSqilKLNU%2FHmw3YppC1gfrHxGl9zxN%2BPS4%2F0H9wIhAOc6IJJ7S%2BwuR%2BYUDLOAimYMD6uf1weEgWHNrZpueaxDKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrpXYIMW5WvBOgI9Yq3AMcmfZkQMXmA59%2BK%2F37b9sNB0Bus1%2BLAASslyzC%2Bo17h1WVPBtdlQNp2wU0AixpBoCde40%2Br64hHDmnEQdJ2oXr9%2FzBkymfQIrZcc%2BxEnUCuj9o5D%2F68XbIDbv6ynoLcw0WAeBoeKTK1tOBOv9%2BTXKnZKZsj2zVVZBHBMXqNZmbyN771dREDajSkBuX5G66%2Bbj%2F1M6WY86HX54RXQLMoVKGK6lZ4CM4VcCTsGamfszo0lLQQ1DgfrfsWWJVr8axbd6RhdDV7uvu2m2XTNlyL6BIK4CucoGcaRkKXH6P24ZiGDmZiJmTDrZclDq4sJeLRz7525eq6tcYxRYXbnaee8VHOLkQmFERnrottPRzsRoBoVrJniwT6Un%2BFuxgJuX9Ghf%2FxRJlPY%2F%2Babhx6Fuc9G4Sx3nvew9BMLUM0XFTcXcOku3kogXY%2FSh6l3LDCjhPCo46UP9KMzAaQH7mVyKIp6f%2BNOBaQWrrSEp7z2gZ1ffiB1Mv%2BMSHoJ9tOEfXGVfonmZIaJuMEeaXw%2BCvhMYqQCE7%2F8MVjZlqA1IC%2Fi5%2FB%2FEE2v3MI5WKb6JUH5sgkTzN6E5HBWMmaSoQA%2BsB5sEDAC7AIwN4DcYf0JYC89s6XHOmk62B5r16TJlIlRBEzzCHkKzCBjqkAYezBdxaHDwzXvcq1ay1AEX6O7HnV45h66pQjWgd7TV29flL%2F1ZNHvM4RBlwJMRJTYvSTvBgIBy8zDPUEdhn%2FyN%2BbpREvflv1sHLFyzWrFXxtVVVKNPlauWANfY3vwKTF5%2BlEjBFXeDmJd5JRHDfp86HWBOA3UokHKLmRAZ2G%2FDm1oL2yL4PTV8xNbRu7VWdY8EE5Q5jFQtoHgTvmnXbBX4jVwhJ&X-Amz-Signature=a7c2b17bf22b4d2e89702e8683e9a16f765331c4a47eaab63ab32648f001270e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXO6QDQD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDrO2DRz1pcSy2P4gv5gXnc2wAnADZOzSJhCFFzhBNvfAIhAMn%2BoLIeluxaQluDz3Fj7SbWCwi%2FsUUK6YwTOUySaugYKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw44SuZOWDEdQIVAJwq3ANc%2BJhuwaGCkyh9ekO8w%2BlVOEJ4%2F3QxF65aCbin%2FhLW3estgox38VIt5GQLApl4wz7VpRO3dyMloX4wjUCCpTJ0QVLSc%2B8RYC0tlS8sx0J5q6D7XW48monSf2qRQmm%2BQnyyKnrFjMR5vuLPClvNR4ug3bkfb7hsFOp3z%2BU1hEAxXMPxl5kNWV6tsY1U9o1obl5YHO8UeextMUducmcEVGZnrJ28UTFJEBowrMMCUkICSSyLB3b6MyCsvEqc80xIHwyyz%2BtNmo8XSK7J2BMEssw06ztuo5lGtgJOpa2ZIZvSZw6KEms746W2kap2XCoPEyXTK74HCEED2f054qzUjF9Mf9mKvmyBCZHTxGEMC86ju2MbsIGoxYatBIMcovjUTQ%2FhgYKvdAaxYxJVOVcgKQ8HgTMpMAKjh6dgFHXVD1cOn085nQ6AKz7G9OJ8SaYmGuXJy40JJ0Qyzm7M7XRqJpmpsKrN9XKOkdBHHgv3Y0tn5QVWnTVVINmABYL1pV9w2k8USBj6KSzjWoX6LQXFIF0dhCgWUZedVxKJna1xELCtcoGXwsQ2yQc8YPAxHj7dY2URJ4EhrCaHdKQujf4%2BcyX054yI64DiSBu2JeH%2BVuIvPlyAI8h98N3BhL%2FjlDCqkKzCBjqkAQ%2Fck35Z5eBc0V9PI1cl5l8yRIJlMsqIYugdfFdvuzoKmvtY6R9S17c4Ya5Hm6ZWoIsWwxuwEyKP29BLzj24AG70%2FC5pYY%2BiCYWTn80dfM0rpB49YW3MNYNLYB0oRcieCidB3M3CmeVecjPM2dMLrPp47E%2FNSlUzw5V%2Bx8TLMH%2FSBFJJ4V0EOZ4cXhAbFzaWYZD6UG2BGNQUYkf%2FEhONGZDaAZCb&X-Amz-Signature=61dedd2917a3ec74308b3beb24157662e120787256dbd23a03f30adc42caf3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

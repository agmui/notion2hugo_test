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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIQCM7OM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQChK%2BLMrL3doLNbTsrSWgvCZrBn6BbnkPg5hoFdv9MN3gIhAOh7dKVEtqjwf2xEeJHjWnrkymrKJeuULNWUhG%2FCUb2EKv8DCCMQABoMNjM3NDIzMTgzODA1Igx4eMbned232BsIhuUq3AOJTiXfT6l4KzBnXWMaSTpYSAbgi2TXULyqgR5SnJrIFHZUNa6UgBYYU0A4LOfhKTI5%2BU7dTxpXujDaPELiabuKUh%2BrRqMUDUDsYLJzkOZpzg4ObhmaUwav8Y8vSQXomqDrXB7z5CI%2FnLNu5NDLTJS4AYWorCchxlGcdQoSKfIrfk2TNoaVZNtmO6wfGmoHlLMYfAgY5mtChOpz7q5HGrOQFcUG6GkbhDZpfcQbbwzEQA7JVlU%2Ftyj5HoXvmzKEHn4wirX5sy8H3zo74FU6IMMWmhXZrCC5aJcFVBa56uqoMbQxFHVnlztLA6DzV0%2BzOySqzY%2BlyevxKNvcY0hmFZEWJLVCTh7H8qWc49BR6%2FGMi1ZbQYsNeSYXokrtDUeFJrjWt9njBEW%2FCGd%2BY7WpKBIqtsAy9b2oMW96SYxUdOk7nY%2BWm4iK90oKPIjwlDZk65A%2FV942%2BnrIkzydoYJSFlHMtj%2BxKQ2lYGSplTd4k910KlntWwV1WvTX0DGne9H4vh6wxV1jp9iuHsfJTSudsJCTXVvKzUnlf0z7CTR4lkoEXyLY3ME3YsCmaUIIKBjdfyBI7rxJkoQ1caC6u7%2BKXUiG8aj12cRxZn16yejmhfw4DeNGzwSVNJLrXFp%2FWDCb6oW9BjqkATczFlvghea3w1AQbdaNAHEYFcIaecnBDMqXMlyRIeXLYl2qjBaOg%2FKt4wVRZyz2wtz1cUzPInd5keJ2otnbFrW83wLHjZ7KXIjBwPRC%2FoduStMHG%2Bk6Dt4bqVessOsPV8O9CtNS54orNPGG24JYO9iJmvJj3bGYy1FgPaY%2FMVLVKHFFj7k%2Bi2QtGK0QxGUmthjqZxOFHfaRJ4YhkVpJf540IOjp&X-Amz-Signature=580022af30c8a1b9c78fbe9c3101c3ce5d2c994be8018fcee08222cba8e5f288&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQ32LB6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDZxmBf%2F7rYzxQshV7dIGk6mGnDNxXZPgwKkFzOtiS%2B9AIhAP9c%2BqhfbZyU3g90PejOiHGTPH0svdpEj0vh%2BC1HovfPKv8DCCMQABoMNjM3NDIzMTgzODA1IgyY2kwiVNCdgFkaPJoq3APdBsuadPctnS9cAG3ML743FKMvz%2BC5O4AkwsiNL357IVrYtHkdYc4%2Bv8y6MAXla1StkbTJ%2FLwhB1n83O98IMj0Hdt%2B%2FAfYLvrFlAdUHOA1%2BXQr05pNxQ%2By7v0HddEev5%2FX8eD2T8xiK2NZ00AWiFkqssfXTgNWYIaQWhAjKtqlnrwyf24HLxdJiK9fbfwhHRM41HTiH27DJZ%2BQ7YhOJghJbInNxKqAwhNo84nrnO5u0dJtCiYSHX28CalINbU4NaT4eME9I58Z6AtuCCLo5P5fJuXOMebL20BOFr9532ZmbyjSmFuK6kHaHqnPU8N9hspSG1F7hiPtepO0Gz13cPFiY7TkpqWZf8jBh24GbkAc%2FOLi9dyVvmGwb%2BjFxHkqv7d0cE5xab1jmX1KAqSGaWPnXaNZNxgQfvbZmigPkORxNYBzQc1YfxbwDp9ot%2Bp1uVd6oiuJjnGbshpuY2BiW%2FWy%2FmOr7r21zyMis6vMZ6S85ERxuAoeIf6YJiGa3Yht1qopOkSqxMDhLBw8xF8nBMTeolB3HEKWRAe3ebD0o0ZqwQpFlvYYK4p%2FzgX6K1HBQ1OoGGIUW7flchOj2t2PIBFfgKLaMEylA66YIoxEvbHtrqNWpHgAF5rLU0fkQTCJ6oW9BjqkAZwA%2BXeVNI%2BNd7fIsJ0L8hwTFfdOlvrclF7IUjQqZaMyhwXwPMGzUxYZkYhkva%2BVS6XWyXlQ8IGAOrWvO65ltWAL%2Fp8B111LR3%2BAyjUcUcWNO3bbvW78YogrZ%2FYsYGKrUtWdSpnkXK5sUdZ4V4%2FU3dvfc4ptkNoCuN9Jsmidhf6q%2B302RnkcZnnrv%2FKZDUy5p8cLfAv%2F2vSbkHPwSRM7of%2Fa5TUp&X-Amz-Signature=5d466269eac955d01c70197d0f88d714c41d7e6156c81eb61e0ba855c7012ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

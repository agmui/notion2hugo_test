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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KO73TK%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCPgOnJ5xMghB38u4xCW5aeRFTBZDZe7lEZ3s%2BBEDqMOAIgXS93leryGJKaariX2phksOHYbIDIhKqSeFwt6fqQLuQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDAw7%2BuSBIO3vLIJWkyrcAwEtDYgmi7n9DjZOgSH4oeBPVqBCMo53CmGHahm7ficoLBBLAT1oET3jYA8mE14uNMc5DxzI9kZEcPKKbycqbxyzA88kt3sYDC1HX6E5FgyALf4n%2BpSUAj3z5jFFzJjL%2FJ4EyVIouHoQ99faE0SPuYekBIWYzHm5r3RtG2Y5jAMnhGGKWzA7GGfHDFn%2BcvhVUJX%2BPqBzQ8BXJSerROBH8nXd%2BRnKO06GM8GCief8FXp1Ls7RXBsaYq5o10GlKlZ9MGlP3GN4OoDNnGmTMiOcqivajkkTEICqXlF%2B%2BRnZNCZtGLymDu%2FcaK8kKsANuBozX7PqJWyifaou6KihHRKGVa0fbqNO1VdezZuYCLw2L22nb0GAPc%2FLHBN7%2BkB9%2BuLYZDnSaqDBzw8mp1KYlxNEIJ%2BMCYpyavkYGJ7sg1SFjzRg%2BiVA8sVIiR3JMWM63U71Jz5l0Ow6Z9fQQBLSkDZNEN5svue5b3v2aSnitW9JyENXoQtGuctWhxNpAQAnKNO9EyUW9T9WIGALjx0uVQLiJ8GVxJZHT5AWM%2BJaMttxz%2FhEa4UAyGxSRarQG466nhO%2FXBLuo0ZGcTzaMBjM5TmQYWkcwCgJvLahO4QlrS%2F0mQ7Sryw5EG%2B42uDuEwbQMOea%2B70GOqUBtGQiqKZnWUL6hrOgwyTZju7W9uMAYLdZ2J5kgtvUmrTAdMSTHehNT0I1H2dHq8iF2o%2FrpwbdRbz0w1fj3LTPwi%2FLRx1jVBdTZru%2BN2vSG8WsfknqJPTuJ8rEwHrcAyS4MHtwHL3p8HNU7NM431NebHywoAIAZklqHCVLKRPMTatpderkYQB2CoUyXwd5imrhe%2Bp7Jk2opNKvat%2Fvdb6IOLoJ%2BfyT&X-Amz-Signature=a80a96b83c1d7b730a029acaeae7d09281918f00f999ec45967d1c80e4e5dd06&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L6NDNZF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFCXocIDczotcOX4qj1w0Nhw2YsoLoce6qZ9vKEDHhU5AiEAyfLlnB7vDpo9hk6d7P6LmAyik9lmfLECleJh2M8KrZIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKMRoVUd2EzR4pqY4yrcAzMtHAo%2F2dwJRLXN7oEv3cDyTC%2F72Dq3uPw0awn%2BS3d6VixcuXiUVQG6mlvJdpAtwFM9yrJmh2SDwIdGN6ynLK7ptnCqZcXc63dUvMQibyRuq7Q1fM8DERchk4UETmwxwlgY1yx%2Bmegq9Qx73wHcGCqT%2BKM40jrdILyx%2BHwOYoH66XOV2BSM%2FTbekQYOyNcSSFyp55Z9d6h68ednnCmk3i13Yi3WHgGvvAFZTfeMjAIl8Lzg7jUWvOsJ%2F6mky7iHO6JEI3f%2FFn8eXEfNvMQA%2BVrn%2FQV8%2Fq5UlO4HqTaRigRKnkIZLc92qoSekM28sRXEyLgkn7MUKjodNTGYrxOVP00hjJa3z%2FoqrPBeFVHNSfJNGbi8l0TkTweAUCZPjspxQ5mYSIjwC1jH%2BWfU1fBlaxxw8POmC60K%2Fe6uO80I4LOEMotXP629ABJbhLR8z%2BtHI6SoM%2FuxtivJdfyJ3pFW5KufBwMIbZvAHd09MsOgJSrIibslbFAGHKlKgNpxzh%2B44PcaGBhUnXIhGch5XxHtRkg2MKA0P%2FK0Pq7H2KolbH%2F4wOrD4YzvlHqpw3EcIhkI3EsK%2FCX2QP57m6hTIW%2BbpBYH8c%2FJbZLux3EpeoGp2jK9d0OnduqxVO%2B3VGBAMPqA%2B70GOqUBirt7M8FuenM7OWK9VpaaZVLuQDw8aww8Tqd3CSEv3KYpAu6ZcPLAyqSU7AboSyrueHwESOPcyo2NtAqSAH%2F7Tn1X7VkdFJVp4SMDKErXYiIA3%2FRMXpHAm96XHRhxsTHuTwW00hrtghZa573ZZXz6naZl3aHlkmDToSGN8jwZ2w78pb0GyVmnEBM0wDK59quLEV4TQAcXYLpt1vl0D%2BFwgobS5w8t&X-Amz-Signature=98db8be748dd1fc3929fa521abab3928adf48e19956b4cacfed9aa73958106fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

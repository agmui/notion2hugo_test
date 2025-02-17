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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUYUJPS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQD%2Fi1QBj7J%2BeHjYZN%2Be4C4FoRRlxBpqFsz0Z5aPw21FtwIhAOr%2F9l3H9cIA6X2Ifs9vxqv%2FOR7E9L4FZWnpT0qkF7RdKv8DCHIQABoMNjM3NDIzMTgzODA1IgyKpphiRF8kO%2BjjB%2FEq3AMMiMG%2BnrS920744BmwqyHiW%2Fjh5NX0%2FPbt9%2Bi1iThbKwgkv9pNPUILG1SimIaWSCflV7UFiGIMv7ZtrFzb0QjM7gc8i2YNNHK4nddvJkdFV3LqpI3d8xtO9V8zWeiFUGVcivCiJsnwPUxL4WHkEzIITj5v2VipCC%2BW8rdQh9ol6qie6olPQ0UzGjyM2vzLDYwjniXuQogJ%2FzhLoO1Ad3Ie7f9ubqNA07AdXRChQ3%2BQBExpvYaDZUDInGgPt6hoCWxrym5XZeeFyvwhvqZkYbSLJmVMLThG5ZJfF%2FUqv9S0BaMBxgdkfvpHlCJ%2BnRlm9KNj4tI1R%2Fw0R9y8O2pOiQDin%2FXljvO%2BzhsfGGf0b%2F1hrv9RNAUerXKNfjHZHJL6BXsx6hLVcExtxFTHpHl%2FQHWD9ff2sr4g5oE1xGg5yWcXB7e5SlxD3xmz4sb415VET%2BW%2BNDCn2m99lIKcEfYFj5WpKVt3t3Sm8L%2BRwQT%2B9UbNa2k7rgJMVRcspwuomI9RO5XzC0wtZMaeM8o65gqGzxYBq5HwHKB3X1QBdglLcslEWUCVb1wJjAkJb0x4Fnh%2BEsHvKbHevGehAKjwvG8kiyLCRV6CV6RLxSjC49D3Arjil%2Fc4Vr9LlIofU%2Ffc7jDR6cu9BjqkAWLZi1y7s5kCTAZPjLbQvnV50CrOkXNSyVdDEQqooheCBFTPfkJ%2BtuNJBr0mNNSKFrdCCIHIab42jnVYlNXzsSsk2W%2Fo5E%2Ft6Q8i5EEMXh6gBrJEY%2F12AI7gpBq8ARhxrhLuRay3DlgxY1ZvG4QvzrKWCQ7%2BuyxIqU8NAo3dMVhSXjvlj6JLPssWd6egk65NNevkj%2FhorPUYBQFbw3tF8120zh2X&X-Amz-Signature=0cd43474ff269ab232a05afa8ff009dcbc6d892ffd66cec412b1bdb804b91e23&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XROWF2UR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDQPJvzDcvo76I6Khzwun3IfQhyOFXnYmYPVX1n2FD09wIgF4%2Bt1T3tqIINu24SA7Uxj0MEtkBlKZ6U85cTbCrrnUkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGl7QyRqxTPRxKZNpircA%2BunIB6tLkEHDWACrw%2BR%2Brev4YIJBpszGkRARDjJ3xYPuhNebnrIrLV5SEogDItsI9XK0tgGs4KEeJNIjYMLZ%2F9QeiIOz2lpgO4uF5vsmXS61bs%2BHOsNoOPojW7EiFTe1ypQGc1pUQfWTPk4ldDWdQkug96qcMDiwrwETr197ZPUIgbURTmfwkiiIfe2QquJsffPf9AKniGb8n53eTYsXJbVBrLys061RupaTiRCpVqg3YBJ0zSvGcBLIp6eSc3g9Jge3ES7hwR%2FY7zIesiROjUJCHJUTCSaZr8GKzfNpaN0XTPJnXo%2BDBhadofWBU2%2FiIk9j5t5qHkemH5ypzJbgyD6pX2L6ArnN0BA4zCl3COanK2ZATYycBFYFAR1VtJ%2B5Im36SCcf6WafAgcs8LtZGXQp6SC8VuaqfAGsiwcrjEzJolVLBXk1MLlNj8a7fW%2F2yQcUPWvgik%2Fj8P5UUw0A%2BQR7MBDAuLhn%2FLoTkxwS5ELY4mN5enBbT09zzqVasbMQq4iBIBQKEGMI9Vq%2F2XQ2VIJMuXbhXmpKEhK2slNI21dPClsElj497AQrVhKdz846b2VKsWX3pv8QNH2dmjVnxHAj%2Bzclt5K8ZQ3nB8oqjA%2FFayhL165fVElUtHSMPXpy70GOqUB5ToaIw%2FADuhfr60uF2E0XdkPsE8nglDL0ls2b51Bldxk98QF8T6xpEPcNagQPxHzFWlaFobBnFfarmNIby%2BsEL%2B3hH33QKPdwef87i2RoqnMCyWndfhNgZde9WZS8ekDIyjOzmkL4JmO0Fc0yEqypTdntL5%2BuAAMvIXwNy%2BoRpvJumMMgqB7YS5HyqxrCyvH%2FA%2BghfLNCPpOCN5eDBz8L3xzyyed&X-Amz-Signature=d791c63a68dff8b17562b30faf86626b3af5ed6cb5372e044f8d414c5ed343c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

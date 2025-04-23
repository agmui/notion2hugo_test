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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUPANN2Y%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHSMi9WtcMVuLF27uBZO%2BnwOGQDZzRkyAwo3rluYa1ZFAiAlRg9fEdB2n3EChYki51dnTDAAMor%2BFilTPwXNcp6CvyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpRMZ%2BMB8Fnd1OdIRKtwD6GrKgIU8xQfbQllAWM41CWnChltxKOUO81pjt%2FB0fI2PrxEyTIo3B%2F9qFvShiTc01RgZd38jnxYHwfuyoZ6CE4vn87dH6uO36IpaqWHyDiDlsnOBjSabAPAo3JEn73R%2B%2BPkBd35yjdSIJV4%2FJ95UieG6nf7aO0dBJxu8%2BeYhWBoFb5tpzsK8kMWCSzs%2F%2B90Ci5pz4iVBvUgZGtuDa6zMLIdrs617HIdHFfoGftjwXc5EKOKFGn42m4qYNoUS9JYvvUNUYfZ3fhHHn8hJDd7eJe8rajJ1jUy38Kmqnxhdk1aAWSzGWG1W7LizN%2FNbrthTZV%2F58PcAeh%2FYiIMTOZY6T7g%2FmYRF6cB%2BnVRkdwkpbbqxZ3FkdqyIea5rNbDa4rovJUZHQxE%2BlBLBhhW69kBMcYczg6kBuEyIbnEx2V1zNGgjt00smQfE6EdEpXAmELqqF4HDUylg0yJMs99LBXEY8WBwyKGJK9G%2BOlWMVworwEhs21Dy6RR5hDNmm%2BDPwL%2F%2Fo23%2BwiPDTg%2BI8xmN6zl410x5C6HqwlrmeuKKJmf%2Fkbg5gWUnYE%2F%2B0RBja4xqlUZgd9YciqR%2FOIH1blWVRdptFQ%2F1yT4iKF0v7riKk9SQexWuRUB4pOD25o%2BtU48wmoSjwAY6pgEByKlob3Uy7VOcJfbpH8RxBCONNU8D7X52dZQJg7MJG3s1nEIiN5aeL83nMiSbpzJkCAwvic3wjD3h4fubnBQvwFH00g0ZrQTlVqSz0waQznGVLDCGUI5vYVCY1HmMDSFO%2F%2F9dvWJeGQYaNZlLKS%2Ffksl%2B3flh2lg60NNjrGFABamxrWsItNPYUgCC1sqEoRjUtR3LWOCOmN0GggiLVan3h7VL8FLd&X-Amz-Signature=7d007e74954227833c334d8ea70a503ef6804d6d0d7a3b3dcecdafdf1b385e01&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPTEQGBR%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHetIZqwGVC%2FDyUzGNo95qsBbzvpaydKrDYXDGqyAPPXAiAHPbrLOAQTTannVv1o1vEz0C%2BSYCHA%2Bb8IWgKxzBNeJiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4VDYeK8pxCeeL%2FHMKtwDc4cku7%2BDOJKU8n72WCexNTqphbSDhVdLgVGoEbOkfsk%2FWrnUjq%2Fs357MlIj%2B9feogDPVGzsHhs2uNStxOMixnLoYgfk5sXoMRAekSXheu8lHMjxqCup2qskW6mdng0JkOaUTyV2LOsmQksU7j8T42EpTAgl%2BtNenb8MvJuduKD%2FrhlZTTSjWNfNSG8T3Ndpnx7iVYFLzeh4g1QkzuQ7Y1pIg7jMK%2FhF3n17DUYt7AjhLDnUbu0rlfJl8tvLJqXPpDbAgBMFQhhLaKE6XKqpSq9GlPxsTc4KIZFAoLlC3b86dYsHfwbhOte8JyXvAFi04duYQRVtx5pgG09puIcf8ay8Wk9D1VPBJQ9Rsr1F1Uq3kP5tl%2Bzg6nfXWVzc50Uq5ULzff362T%2BGFkZaNYESt%2BHIRSWkemOdjaFQeUZP8I%2BefkVKa6%2F5HwLX7UA5m8uH0GQ35DZ68TBsX9BLk9aIhU2MkymsGPO9MzBBDJZnztsZiQnkFJpdC0HDkKAFOsvRCXOYDyZMF1hjT%2BfU6ZQQzNLeGCklNDUCMbQmowl0l0FvSPsu5BnKgbRA7d%2BkH17pXFgQPNcIYfJ%2BM3Ite7Swg%2FR%2Bl88rIQSIzafSgjbhQcvA4iMc0foTwfn0kJaQw%2FIOjwAY6pgHmBkzs2ijh%2FtZqwVgIEPaDREP4iI5g3%2F%2BUByV0TWDqkEqqP5O1safflZAldmYdp5ER8wHXl5oiJuZtan9ZbOEepuLo5SirXtpDw6NSQ2K%2BnOkJi%2BV8nZjyj6%2BKaOu46nS16G4lXG2iF%2FxhTuN9PZmaqiP%2Bksr54doUY9yDGJ%2FVf%2B0%2Bo1%2BoJ3y072fDgWWxMVy21hBr%2F36FHIEmRjtf3oKL7CFP2%2Be6&X-Amz-Signature=5f8b67a2874cdae52a9a27c569b69c6801eafcd74f3353d6bc8da9e3b51ae259&X-Amz-SignedHeaders=host&x-id=GetObject)

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

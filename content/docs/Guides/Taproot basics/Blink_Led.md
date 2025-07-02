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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXRKFU6F%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXukPzXMZ0dqMQEu0dH93EC7E1SoQF9eckczSIVXrfBAiEA%2FPLmWKuCfGk0vK%2FyPGHXy7zyOVD6vTynjewOiBYjlngqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9ksEP5sw9Dv5%2Fp%2BircAyPUui5yEVsfAD46pq%2Bv8wlZnpkQlLBgFCRdEm0n0fwKMaN7Vv1%2Bx8BX8TLMo2XMhEofxi7shUTmTN1QnBCHRjhDELXwRP%2F3j%2B4xVqbvjCyKAbr4YUODuU78cVxIw%2BkDRiSnLY2r0CN6bS1593JC4VxBDq9PacXF0os4lThOQ96jUWI9M9cW8cAT4DDuO7hm2TM7f9Yb%2BCfzY7Mm3UdbJ7nE%2BIZ6dNVrWpj8k2UBbjIa9o6sc65bB8a0jnNu2wlIseutt9FU4V1EJPPyYevu41fxzewxelc2CX7k5uoT%2FjpJ9NZekKxKN848wLK8PXhzC1hvRiX3w3SZuEhVrc%2BXzia14vdK%2F%2B7yV8X1h0iN16E62Yl9dHhwZl12lzCWXP%2FCeFMR1U0ihqoqWMBfwTSzNN2LOKi0PP82skfxu3QAWEXjiYfHxIkOAKoI%2FHkFPaMTrpQzobLLMc8h0%2FempLfuUgC%2Bj7cDPhSrx3mR5%2FreYozyDbmSS9zNC%2BmfsO1LZjSMqFgvUVsMiAninRC%2BAOvoylftwUyGnEMEk4h9dgJfuv2CVUdR5vmNrrSZfwu%2FEyH9tSGLSGmHpCTYW2OnPXAIRdR87hTzSFuhPlYnPju2BxMRQI%2B9%2BEQbVgZ01UoRMLK0k8MGOqUBtqH4oS5M2t0Qe%2FSAEphiGIq2J5oRgKF9%2FuydRXe8Za%2BBIDhvy3SGrYzS0hT0dQTfHPeRkNfRW6vWLHaJxvbkA0eOmxUaxkizQLbxiJpE7wJ5tsHtGY4T6VsU5EiDYJ4TrWqhriCKL4RwlhTIMW9cdVRUri7OuLOg077PnNQm%2BrzYmMSUI19Vr9Z%2BoctcyS6LYbvSUD9XSS6M3fmDug6PA6Qlo6LU&X-Amz-Signature=5f4e37c946d1dda6aaaaa7343bce8159c2a01b116b9cd98f791c2a689ba77246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R44BWSY6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrYpmPqxLCyI7w9qiB7lZqDTrwiTeIpcAhtjSl3actiAiAmIgScmBA%2BcLldkzB61SY99luXUrBn%2BqlPnxZWqhCy%2FiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUmyw2rPuHG%2Fu33yiKtwDTYxZI0xgsSzsMUogd2T8qVo%2B%2FnmjPJDi8SWvAPhQsUKvLzSh3pLESG1woaCOb5FdXycHJ2Sv9fCPzl%2FYwUeAjQ%2FQw9j5gRh3cE8oucJ8uuHTcD2C0WRQ2cseHycSJWk3X8OW5qLM8L4HXY%2FCOSSFAQSwkpLJk5IS25V3HTcuc%2FP588A0De7nmgY8%2B54UI30sbf9vwNrBEb9Qr34PAYs2%2FKzVnc%2Fyuirz%2FwVFX6xNft1gG5%2Bx2cbYMjmEJ7VCu%2F0XNSseMIXKdme3FLcNur572i3Vr8LwsonsDcqPuS6jMr8pJpP4SMNTBT5TPyqJsL1FczNlj8mSWjbDjc0zVc0Ib5J8Sn89qL4KO9EfyTloBkigXFDavPL8RhHt1iXWJD4uVM%2FElXYhj%2BG2hJwVW8dd3gfMrJVn3PPC7TtSjZ7qMlv%2BmgsZC6zjbPH1FDRkeWdJ%2BkT3BCLT%2Bmph%2Fo%2FeY8lHCuT3n6634kjQLHZ4KQKaNr%2FnKFwI%2B6Q6xJVh0VFVDPVVXxM2v6kDz6snetZbjxlhizJLDg2aLcg9Txs0iPe4kDKsZqs0KbHWejMhdeOVGdJpHAMZ%2Fof%2Be4rXCUo4m88Fj832qEsnhyGSliFZGY2vbdalP49bJp5AePY0aPEwsbSTwwY6pgEI65avAn1MVjmev6C%2FWix6%2BeB5sKbMiF%2Fwolu5l6Nai0jfVqaohTmKwS3M20Hu3xhwxlUdaF4VzcyvX561j8omBtO%2Bdwfe3BpTr1hiG8ULbrMxlm3Wcwu1IEhVAsO7RRW8rZ8JznPqE6FzbYwroTke6WpKYDvzrIUI6%2BLYjGzapaFj6vwBFQwozKIw0l3jdKP2%2Fy47sLFz8JCWDou0SSYkxyiAksZn&X-Amz-Signature=6a5885d1214b9442f1a721994b1ebaabb0983b4e3abfb814cb410488738ef1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

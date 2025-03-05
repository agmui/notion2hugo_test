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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKER3YTP%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWraN3WhFMv9VRD0eoGufBkiHM8sgeJkR4c8tdI57UtwIhAPoklBO5c5sPz%2FJENaphGi22w9uiitJYW5%2FhLHVxJMIvKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDZQPQNHXVs3K3598q3APePz9VgrPE3eDxRXXdUPMKXkStLyuIp%2BD%2BYgrhDa9Y%2BANEm3NGv1Oart%2Fd1f5uG9B9HwFWFK4%2FW%2FOO0jTQjzRYLCFVya8eTCgnMH6wutHl36SJvhv46NiDshOMm2pzkwxv1PF6%2F61sHQwNp41ruHdEhlTYWplxva9weDXjBBQ9yajdctbC1FX4AOl4IRRPFRcb6NELFcXY3LaaKb3KhgLOVZhRWFTMdL0K9MPZPKRfAXZm0SXqyw8t5DU71v7mDklN11wp9tQbUKTzaxEXXhdv%2FAj6n5RVgtzoW7ugB0WIMccXDaYWAC%2FJUfW5suNcbnWznIZfNniZLac0fxsydVKQV7Nml1hnQDuSdh3Idxzck3yzXSmfc6s2tQiBLCpMoT23zRTOdQXDL1JNNgGgIYOzJxj0fRR1%2BicDqdYr%2BczDUDK78PU7ukWxn2XlQIYrYEE4q5kTLPsIurtL6xO3z%2FChgS4AsI0KC2%2B91nozyyfyo8h20ITq1MplxvnnXu2NDRfDFfTdY71cpFCfw5ja%2BRZ%2FenSvIi0M1mq3faaqpzn9LEdMo2zP6AjXMMrrt6Hck%2FaxvK%2BDyifRz1Vc5MJdU7pUSwFdO48%2FgwODTrL8CVvMOW3w0sxpSsrnZXJ5KzDk5p6%2BBjqkAXXpzeyDXVrtJoOsMbAgz%2F9pjd9v7Aj5FJpJu4mRrcXOjFmxA8R7YsNHR1mF6dA3IsdkJA%2FzzW%2BOpJTuVtpR1%2F7%2B6igFHm80BumvbEbIjJWZ7WFQjMKd7nHeGXNMGpuo6WMte%2Ba2MYUrqMCNa9%2BG8114SAg6bibL%2F0IkEBIvGCnkGfV3BWCoETVs0Jp4Bns78%2FpEbKjt%2Fqwe3DNKQR1AlYFSSSu%2B&X-Amz-Signature=74ce1cf312909f4991ef917dd0b61e10104d9819cd3679606e9f06aa1924d3f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662L6AEDT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYAVpaS4%2BuN%2BdUeTMi5tKhffq%2FhsEVJERuJG1TgPk6oQIhAJ6F92CuZrjU5XzjD1qlRTmU05GLg6m%2BJ4MdwkRSH3v0KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDICZlOCKe%2B9jfXh8q3AMR6QQAFwdZG5wOk3CVAvYEdD7ZQehjfE4QM%2F7vZh%2FK5ywgOQjRkPuP3ECk7eLI8rWKE1uAx1PEVxt37G5kjbH8uH3AsnQcGKC6bwhS%2FKkoTniA5WG9dk9YPjnlIwV9kGoH4pjWv2pcrujPCiUu7O2xEplkdcecALa69j0SbcJpPPX12jONCgSfjELdtuc4GbBzPAzFxKB9RsxyRvv54w%2B6osNneXKgSKB3LWdPSfEP7VTWgOjM%2BU2IXOqDzb%2BFGeJ1dCwIHGnYrx0Bjj6DPVqs5MpXOPt2GSst13VPesT35oYsazg2mb7b35WY%2FcYN7BapLXyr5ph%2BKlBGGAOKLNLkHO0DAUi1xunJkho655ZHZwKGtZeeuON14LCeyMyaYv%2FKngCKmP8D4WYFA1Lf83Q2gEoSeszSE0fyiL7FRTtUP6qQxrJcTh4quTvCS%2BWv9kXNr3nplF6safyzOfY4Nw91DS8U2WNLKZoHG6k9CL%2F6Rrnn6wS5h9iio6lCq52U3vHzWIxJJ%2FjVICrawbr2MSPK%2FfJOCVUO7x666jEtWlfg1Nx8TGsWdlH6ANIQG0eqCS6RFTUSx%2FwbOGxxgaxpnVAzZVYe7SbiU4gJ1ne%2Bf1HsTBeGpJ1hr2Gaxaqe5zCX556%2BBjqkAYXrqQcbX7vbJ%2BYNgfysGVN%2FJOMeDDs0ZindHJkozYWVrsGAdUv1X0FiMA7ue6T4BiPdzdxh%2F4b8u9MX3R0HZddRYKZ8QTkHO%2Fgv%2FQTOlylBp85d5wg5ITiHEKQaybplAFeun%2BwSDtHqri0dLPyjoeegf2eEGmrB3OUl8cAF%2FcNtlpScYY6m5vZn1aa2krgwbJInwvyGnEu59WxpFXPqHxdlRV2l&X-Amz-Signature=31ad9b6fbfba60497fbc826dae75f211ee5c550d06e4b860409bdb5d065cf6ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

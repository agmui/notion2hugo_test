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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAWYQ6C%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDewEvuqfXwciCNMC%2FqWPHWjpqgQ6l1FwDe%2FmkRCBxErgIgdIki%2Bqyq75A37svKeuK60xmkqBpy308gh%2Fw3JhuXmVIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHBL%2FD%2BIePpfJaOjCrcA%2F%2BMXYG4efVdYyJTKCVeCJ0nZ%2Bu%2BsIxWF24oHHITvWLFu27Dz%2Fn1diWcVMZhnQ4U8tQVxXWTx7HFElh646ALNgaxC10ZNfdhE5hKPJOM42UAlk8SltM58wBEj%2FiN5Yn9fEZ8VWN2tVLQqRc6l6s21vSrfVFV1RpwrkugRQ1EiKsUWayozwKtT5uqV9KHJrDPZpT7mYDBFPZnFVy9JcEaNm6LTzqUH1pZ8Xgdj6MG6j%2BAmSolyLosBvKdb5crD7ZuIxatAQHdkL2FGTDtzD%2B2HF3gKpCMt7sE2VJ1UxlNoSFnMtl%2FmxeVOITz%2F5PguBrN6ggYg6w5EMrdxYDUfh%2B8F4n2vCL9q7Ihs9uYLu9DqdslnAVMlOXiq2FKe15ueZ9wjhlAouEKKOSrzMSR4ebS%2BnElitM4CQ74%2B76DenGoBgCf3URlMkl3VgUNFzLcdnlq1AMmfTqNSfEArkPFty87%2Fv%2FOjPAJu8EFaEn0qnw5o%2BTWuYXJ5QItXKkhjL2sBn5jfHeprbGbh5yrBr24O%2BkWivBbUKgq6QxL5t7JNaP7l1IfVY5t5%2Bhg5rBHJ23Zckrjw3qKTDS74qEloQXu2HGqNx45JiWxByT636OeqHQpY%2FflNBmCj%2FTkgRUUwf8zMJH7m8cGOqUBsr7Q6aBOEke5xPxpcN4x1jcUMApX6vldO%2Fzv5NTY2w1bHCaJxafAj%2BZ4J40pGqpr87Dm0%2BxgnTTcSZP9OxnrrJKd5dfN%2F0gz8hsFYuGNdwMjMaCeynoBAx11QjIayCInddmwAMpKePbG7PD81jme66BaK236wFRKAkP4bdFBOOINdVtGN4MAedIKOC%2Bu7lCuEg5Ye%2BoCKQoExLnC5HS4yor0Slfx&X-Amz-Signature=244ffa1c76257e07f506e76a5e0977cda7abcdadc742b193e856c6c5705b455b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNVBZR4H%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCVFlxw6bktpULzTogjLJumT5EazBTu%2BOIu2WyiYwqOqQIgKH9Okzq8D56VSXWR8ykTR0VhyjnsN3mq0s34MqjGNMkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOloDWUhxrrBI2k8xyrcA%2Fm6D1akPO%2Bvje5QS1VMo6M1Qfv0PO%2F6Yvp0fRbugGKiB4fd1GbjyJTB%2FSPamh%2BHy12julVL3hSEVMgsA%2Fpnvibm%2BAjxlOZuI4g21ntjFGZViEYdnpvA2NyG9UK2Ov20K1Y6o%2F32AvYNMPs8DNj0ALvdj98aUYKQGr4obTqOuzpzcCAuyPn4WU42AB7Pj695qjfO5R%2BL4viXWihO5v6z1tHScwpQvz9Lsr3IunKfPKSTyIDwQ5LMqwHH4Jp1OgCQPagh3Y1Zpt1jhn%2B%2BCqYqG%2BpPMqoJlyBQ9vmvU2%2FhsQsJ8%2B61z0UqclyGeU%2FbcLNUKPzbT264CgAQPdv8LNGr%2FbVyVX%2BQ%2F5L2aOEt710I5Xa69QnNJTYDtpoK8vj%2FQIviPBbeaXSaRiaCFZ616g8f2jBjv7WDT0B6%2B6SoNW3OPNuw6T7dRT16HHAc9zFJYQCA3pW3FHAh7%2BGEQpn1xG4bAG9%2FY%2FK6R6j%2BAYSz7%2FCktcnDLJPMWAUGbTDQ8TxmE8qVQSNETQ1cDnj8LAUBoy59rD0CcSrT%2BBWSMYsOvrxwOq4mKtbVY%2B7Cja5JO4V87q4XbW9IfQABxidnUzTw2eoIf52y34rvWhv88YsZUU5rPKBXzAAyiDpf4%2FVQhYaZMOH6m8cGOqUB%2BD1wFtDalZeGIyM1VRU0d51Tx60uVHCeJENTaN1aDn%2BHFxaxye%2B1kqNiXoltpgxjiAbMiv2uwrPwWpujm4c7VeVCN7%2BmeBTZbAWpAEvm6GHXcZoaYqPAucIM0WsNokbKfKxpP2aPEff7GSpIJY9DNQKw8yLOVOrBXd5I4hB7auZU9HMUtVnJjf0wjMkqlu8E7NiV5wb%2FV58O4mRNdAHGgVw%2FCUKl&X-Amz-Signature=65a15414ef8b654b07994ce78b56a627d9af0d4d66cb6aa96367493b2963a6f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662744SZHF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD8Xs%2Fs2AEPsp0XGJ3NGXSdCXh%2Byv5RMmJxZ6PjgJct%2BwIgbLz6fuwV1qTpleYfFnEOLZWIg95ClwoqmzVnevy4Dpsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDC7bDjCE4FXSsoXpySrcA30WwZNRRLQB3YZbbjG7aOKGN%2F1NoU2SToJMXvenlwB5bPDOPNAXwN0OMlRtfqEXAmw8o9RycCBgt2Oz3x3RiuZGIZmJGp%2FwycoL7M0fmb1qKU58yQYVqWCnHXQXPdnTb1JLxqhxzN0A8rH4ID5Lv7wz%2F3KWE4CXPsfuWJKCxwkR57eSzJsE%2FVraUj%2FrD1c8vzPNAm%2FB4ZBlkugxhxXtieq8SwOtuZr3IlwJUu4Lb4mE9ScKPFAzMsLWIJ5dQYwTtUTGInM1wxRjIt3CXzPFnVd%2FBV%2BB8jFn4BJyuTWDc86SAzvsMRPpexljxX2%2FU4oXDK%2Bp2aTyeXOZYoDzfOMJ%2F%2FwZfh8mL%2BmxRNIycyQQCffB7s1pKXbjLO6jRBujB%2FWwXhSYHs04YBzWvJqMEot9UVwFu2l%2FDrkw7htz56pTWvjM6FEyesWkS7AApKH7mF0qCFNglDTeAQtAscpvc7l2GUoJBmcy6vzP5amAwJFzwbodt780t2UIEm12Qi7Iu0JGoUMfFAw4ePJQT5FPWsGPhDZVObWjHApQbDcxx83Iw5bMzo0bZkRJLVvS0h%2FImHASOqeR9UtCjbdtAV132Lll8gFBMqQTASJWkDSG2hMwgkMCzWcCN69VciHMw3TyMLjZw70GOqUBTHqRxDBXQSmJsyziE2Oe2CVPBeQcJIdSs8V883IEOpLVN%2FNfyy1JIff4C45ijnyncLLJ5uT%2FgeLFu0cCL6R1%2BZa8QWnr0RjXusbLrgt0wUrOnxhEPsY69jOGWG%2F%2Byw3wS3GpwrEbydwZxkC%2FXjB7IoI%2Fwzqt0fbAzjsMGBKW8meuDs9e1pW2uxBE8GqOTPTTbBbU7c%2F%2FM1dKDDmSsvHZjViS%2B3Qv&X-Amz-Signature=d578c8e7b24e6c9a5d0afb472b62e9aa9345a91b27a1142b46c8f74cb595a158&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMV3GGI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIDXKo7R7Q2zoA6QyQTnU5vm4hN1lCp0SNgnJvAbRDDyIAiEAoKBTcqQ%2BsSXiFiuvBjKzn%2B6KMsxjgUK9TqshJCpU9%2Bkq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDKQa3WIsJlK16FD7myrcAxBZNW3qOpdZ9a0C7rx7ic947l0bKV7wLXXlL26XZtm4TatQGEOOKdJjBoleW4TsTgwEruQBqXasaFZkNfJk3BLCT%2BVmQQWraC0Qf8YX1CGbCgdcfuWpGEtq1KgATx99ZBN9Tq0tfp9Bef5kgFSMfdNzgyvFBfMC3%2FCaujHViq8%2BtiHszon8lhbr0Gr%2BJ6ta7WtWWSW6NdNGACfOomr2x48Fr%2BhqemyECz0WZOGsCNG5Bfr751lmAxTnr%2Fk%2B6uiFb4R%2BHpEgQPsWWEopoAGGd2ZEaolX%2FxOv%2BcLQFwp25pF7JiyUfCWRSqvp7K5%2FMnkSTjDQPHsaGE9yB2GN5w7r8P%2FflvxmJUS83kz1%2BMqeYphfgCVIiRCEbfXUaJly%2Bw9zaFusad4QPQQCJEWBA7m3YGg%2FNPaXWC4bUcYwIA3KAoaf7xBikIma0XAUdRiGq9Y5ZlFRZpRGTNJULKgqn1ULT014TzGbZW%2BYtE2MbcY38oGPRXeDgf0v4g%2B%2B3jgZnL%2BAQScXC9rZV95wfUssu%2FmkRephT%2FyE2cmHV%2F09i3mAx0n%2FhB4Cw2AkHV%2B7beEks5%2BsbTz44WAQB0Snj9LK1NS8wrd41e2181OZdym5j5Ni3tcqvMZ%2FztnnIWGNFbrjMI3Zw70GOqUBktdeyziaUP5SiEx68c70%2FGl1EvcG1WuF0P8wP6pa9HGh%2FtpcaihptH6bHfZnpsEFA32YX1yjJV%2BAM%2BvaubK%2Fs726bcaC%2FxCfA0t%2FmznnEMunN46PTYdTZaefh8H4I8hzTzPMXlFFShMQ9EhxBKaIgwf6CuUUjJmXU9VK4Z%2BxDHYKAFinshSL14buJ3P05o5CN1U8vv4LSdoCXWMlZo9gGl36n4Ze&X-Amz-Signature=33535c2934ce5b77742192f4f59433479856c80db759633467f2a161a93e699b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

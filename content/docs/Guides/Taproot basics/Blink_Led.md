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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S57EIRLF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBK2gjJzSHeSbxMQ6UUhJICSVNs1Pa5cUouRTZ13kV3PAiA7V8nfdv%2FaQ%2Fet9FNCClL1cREeY6qD4RdwV1UJB%2FBxbSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMBxCH%2BYmyOzusuV94KtwDZ8WXXuk3NRmEvJmggg5vvGeIPiE3I8htwI4%2Fnkyd5TS3Fge2AOWHySaRdNlbuEbpC%2Fm6LlzqrVGFI3q84TWo8L9CRItOe%2BHo71QPCe%2BaXzSHTv5BzehMselmcccADbM5l0BPtyAX%2FsJXVC35mRdyHVDEf0Kjys3%2F7AywCLR%2Bb46EpA1VOCDWzYkEg%2BGr%2BTtszvdvdLcrnFQY%2FvJmvDBqDS7LaQKK7WbrKS557SvSboLRRyo8lS7UVSgYeOxFPiQ%2BmV%2BRQbGhbQQMNAnTNwvOcl%2BXRlbZATESStewzYfqvVGooUgosZ017igCUBldUwHE0%2FDZPwTDaETtRXfCywRnHKMPfqMOqHVehnYTqmqFqk8Nz6w%2BJgHWpm7%2Bve5%2B3cosTjntUoVGr1xNaRyF%2FY5guceYImx2IPPIE9p5R7ZMT9M5Gx0alCDXZDdPNagcsfm9dBsrygn4%2BYvjTl7BWnoc3Md5l8YFDE8ux9JIj7u9ApnnQS01tiDfeX1ySJ1P03NurDO%2FoeClcD21YmUYHAv1gKwVtaKP2eJz%2FeZV9Ca1F8TQs1niXFmUtiUFgI5EAoRJ4DWgRCDPlnwh5zvRQxufyKvuZubZvr4JHIkW0mzYxSqUBm4wLpfpawuwoPwwquDqvgY6pgGrLkHmU651IsUkuNveiBBQjZLK3AznXVYn7g0lV1XPay7SwsRyD62jCNbIXUYJRSVkt0%2FTf3AXf3Mi9RenYxz5Y0nwZs7%2BlRqmJbbmxfeN48aC2%2FApF0FEAHyriY72JL0yFMe2UOSJ11cijC65qc5rZeycs6ObP666UxGtdjWvi9cW2RNmgESzm1AA6N7jQbeJQQM3VbTwW%2FAPYBCRtqTF1GHc2xKn&X-Amz-Signature=1d41f2ddcc57fb22a180eb702db43dac0082e02a6198fbab32c8f1470a9047b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWALAAHM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCmisTnXbIb38imkYF%2FaQWWMlD%2BNtS0tEpBxZsDYD%2BjJwIhAJdzJw6hzmn%2BXjK1x64qZxjkMnjaVVklmM5vHR4Z2AhKKv8DCHUQABoMNjM3NDIzMTgzODA1IgxnHcYjearcgKjZRLgq3AML17D3rIuJPy%2FlFa%2FE7q2o8R90FGxLa0pFyS7LcTmzvHOifP2YxdwQdCFUQJidMXRG9RONirXFEJg4U6Y9VaE0DO8AAMp0oQo8jczzxGjNv5%2Bp3VZXriqxZ5WQzzuQd2DpJDa0fnAXYQcTq8rhIpNau9H7taaiwCaaJZHN4OFvBIUv6Qqtz7BfvansJh23fjr2cxfZT3mQXfwCWBEY7I%2B1Iev1NnhtTxFMFbjTqsm12Q1B276uZs%2B7FkMfmYvK%2BXaxNHllymwzD9ZMu7UaeXgASEKM7%2BJ603ZETbqjz6GIGuhFXzyEFcXViqGp1C5T9UNKz835hDjjIjwZyauTz6CFKDAv8LT%2F6RGoFy0R5Jbq%2B76M6pKmxygc8AFA3lFvQL6%2Bp%2BxN7sJtxpj53YpReorbbM7xnvqx%2B5DolKiVzYiFNuIK3J4%2BUQIBfW2EYi320pL%2FAvSweJujhXqRR7VCbiboLiH9n9ZW97C8YggtZqptj7GiCSxpwkYENKrvkaUz%2B9fUlOQFlyXFA2ZjZvaqA5HMac4apW02L718tAupI8TcZTzOBKqkgRB1L2%2B8qcp1C8y2zN5Hxkv3Dk1ASTvCjRL1HZOMLCdNMvdf%2B2i7dOYONpRyT9%2BRooXsjfB0rDDf4Oq%2BBjqkAczGYizAYO3iyoB6P4lWUx%2BKJRa0VCaAhh4ABxpYqNwi%2FFqWcd9Pg6i9Adrspj3FgTvfpkUCX%2BpouFZkQ6FQNtGGaW5I%2FAGfSW%2Ff0y08klsxzr6svjNh8uLIcITKQxSMZ3JDwHuRSLSm6FB%2BlC5rlxEJj%2BNpcXLt%2BWwoxO6aE9xs4%2BdKuM4ZzlbXvykZmkBUHFUN0cAta%2FIr%2FEAsvShqksVkmO0c&X-Amz-Signature=020538a44f711c29574a01848d3d85b9eadb39a982662f0c13146722d5efa070&X-Amz-SignedHeaders=host&x-id=GetObject)

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

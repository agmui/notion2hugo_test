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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYQOHZW7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAXym3fRc0t7pcqIG5OVbRvftFRnc5SsYS8bb%2Fv7b%2BuAiEAiUpUKQmxA56SrmjGn9oWoLxbTUGq4yhVB%2Bkscvr2R%2BQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC55k67Y3Bw636ElyrcA5L9iUMzJu3ylnUXQE29iQhEH7e5NF25HzSKFyJtelkF0%2BaxTAt1Ahrj2J85R4BQDe9ugGs%2BrLtHskIQuCErxl6b9m%2B%2BbOQazz%2BW9Bu7p8T%2BrTjYRr5wcWBVDRLFTk5tzBSx8bI05wD02pfanZ6Wx8FmlbnqbgspKXKDDqY6c%2FCtD77BCOiPnrSXZy61%2Bx2tzyvBgE8Tt7EVmIPLyC4cd%2F%2FK1ia0v6OU2LsdbEbYcZyYBkcCkOjsdXRjMqHlNuFt9Ds119m19Ti4J3KADtHxVVE7tJExfiyXxuUSlpofChfPh7%2FU3RBqNe4SJV3JhwqyUpC8BuapeqzQy1AaYHnozvBLarWi%2FiyYSLjBq7%2FrxIsmvAFK3wNI70aD5iGD0fo%2BTnKRcdOIOIa0NrAxGIG6MQQZKcEjkRHH6TyltmdHIt0ctzNKiREsnwjAEur2PF52sNL7cZ%2BYLhb7SAVV98m0l12s2o6sDbnHU9RuVicDvvWxpedWCEP1S3jZgPgAeGbH%2BRp%2FMDfH8tLUMf1t%2FSIlqSLGSo3msweBLZ7XFj%2B3yqorxbu%2FyetlBcb5%2BevsTFrqFM4oiTpWLFuLW%2BimTIgCXxeTyZJUOF%2BHDOToUamitKzoqiUx3FIzhV2cQF0yMIL%2Bo8QGOqUB4gYzpN1vXQhiHY7jZGQu5f1FZGp%2BDxwUcapiZ%2BZE7LiIkjH35rT6967AAWlhKm%2Bvva5ufkC0ljrm3XbYckR%2FJIAdLfBKNf16djMYAI79fYqBadszUAe3rxX%2B4JiMekuDxpT48Kte7qvx1%2F3WCNykGYsl6Utypg079LNTDTv4Hj55jWFbZW0%2BOu6u1Eal%2BKShfSa1xmILn6kThy6ZnLQpcDUQgowB&X-Amz-Signature=d1710f4af3c70ab84ef84d64a3eb0755e30fbcd60084fd8134c2ae4670a4ecb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3CUATXX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl6hhnFPfPG1HL1lDMvInapUuhmQhUT8urq3kcNGuNdgIgL1cDjjfmkbECBHjc7NDpY2nVxq9u7XPcZypjCyQPtkUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIap0ichu7knwGRrDSrcA5n%2B9jvdPH6gKpbVCOukQIG5P%2BFbpft8k8eJIbszi%2FRH2Ie10SolGxPw9Rd7WC76PGyom3YMX%2B3fXdrD%2BXcJY31kafAjT0vFDQg%2FYGcpYZrXNWs1mceXE9ZZVH0g%2BdVbUOztouIG2crqHCmbjPlRTLkfiwtp9JTlHj3uZyb2OjmVOuStF8ShhWJ7RrkCiP%2Bc0RULV8ViNWydD3Mjm8ClyRvlD1ZnhOa8ohh3p6GrCStrzyfxp%2FDKPsN0eK5ENTCvytrY0uT3XU7ARyh0Og4llZr4lBUgk%2FyCLuYJ5dd3fg0Ufcxc5POgPBk67Q8Zheu2WDbU1z%2Bst8ZisgDBYaasGudonMkp%2BP%2BAj7AqoSdDBnKjJDGLR65fAN6mv%2Fe1P3IGVKcrwtZEpAt3ayy6GVwHID8s4vjPj%2BfIRaE288fWBNXSrPBnCcWDhKHVXk6AUYvQLADgdDExt1i%2BjxObcJSh4f%2B1NQxI3%2FEd%2ByFSW4LKsfUgjjW%2FasKk9Npr5fCpxAKff2k19hSc8T8SMV0%2FIsV2knABaJ2Wj%2B5nn%2BlThlU7qv4MEm3%2Bl%2F2We3BUuaLa1C42D7TZuKZ5EQCz6xmRfz5xYxoDgDfAe8BfCqGEX1RIt6S0%2BKUNJ5bOtbZ9eZVnMJX%2Bo8QGOqUBACRQhEQuYJHkS%2FdcTB2ZjtlWJ4ybqviZPjB1%2B%2F1EFP0y0URv5IBhGc8gbXujsSRpq2JhXhOMmVeCQootieYJYVi3%2F1GCs2mt%2BtH3qhM%2FgTJZNOrujKC%2BVbaNGjNxnyb6G5HmfgVzdp4PtS1qJWfM63uK%2BfLtFZXzni%2Bck6EZ6myRPxidRuXRiltfPBK2AybYBZLkAbqJ72D36%2Fj0kJtyjvEZ0yrG&X-Amz-Signature=2f631cd7dfb01a51e69053a7c7bacd19b3261444c17abb51b9b608cf3837cc07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

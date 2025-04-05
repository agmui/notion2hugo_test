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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKQODKC%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4KXJl50Exisk71eGvclnD61m%2FBPO77uQ7GmRu9LdunwIhANh70Fe37YqC8vqIG0bfGNgf6Buv%2BFfdMylWSbiIri%2BeKv8DCCUQABoMNjM3NDIzMTgzODA1IgyIFZIVE7wh1Z%2BBK%2Fgq3ANQmcamzyZNxNADfCoVywcDtAOHvnIrEwKn8a4uXMzV68QCftbp1KJJV9Qy668mOmTn%2Fk4xEytOB1WqfgborccRI9QnyIXVGbcqcBNPXWOCHjA%2B71kYM1fiRM%2BfW4FJ5whpES4cLabbG52mzQ%2BFYdsmJV19lb16J1j6O6g1CstaDOQ%2FQTbUBCkxgSg5txZGzccLU%2FcShdZGm2LM2hpGunguZDXEGw7CiQbRf9tJt%2FyzpYz2tawOOrty4uo3RHFEhj4qf0gIgfI5yN1pti3iXgYSGzF031TEacqDK94mD4tEppW1Rcky6h71pL1l9UZH2ntAeSXgMZs6qpKYRP06ZZYwuPthIiHp86%2B%2BdbqAHlokjNQ1u8QeaXfnPMuUxVm%2FL3V49FMFryic9QL9btcx%2BxXH1ANjQhSm%2BAW5ugLIxgY4BaL983MFgu8HnHrCyDsHECfTcjdNYYoCi3pNRzMSFltsc5pfSGyYFOjxUsCdKyx4m%2B6bBSg1eKh%2FV5ggX8ut6x1puQWd0jZwE%2FHASWtnRPkaFQHJAlT7mFVnmU%2FqEjqTjifcS9PDFj7wUp7IzzJvo1t%2B0oS%2FhrlMWZtgOM3b9bnaRFRvM2gGcsmU9olmas9CdZIUXRjTvRqQA90k5TDp18K%2FBjqkAZ7q6v1gG61YXmwtStcO77nDzfUzQwAlQYBrgWmvAQViN7Tym5Qiu875i1BbG%2FLNDDcB4lz4W8ULtLeHdYGUnlemwHCtL98zNe3m38Kg3NdvcNAGwVf%2FdiElajs%2BboWZK83C8H%2BDPFAb5f23F5Rxw7lKEPisJczTckUV3LYKXRwdo%2BJUDP5psfy3T8OZas%2B0%2BOlHCCQhlA00Kb%2FQUOp0Nx1Y%2FAh8&X-Amz-Signature=f8494cd416649d73b6cef5466eb240115c6f7ad63ac1c454b78dc891d46e2477&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LEDECJZ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPYiyDpdSXqb5znj1QPKLaLLU%2Bptpc0J%2Fl6GHUPe%2BdCAiEAhLj5fUslcjZJXiyvQIKgh0BEH9XKTMRW52QFLi%2BTVp0q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDPdNhUHwAxpxmnuKuyrcAwsxrEptp6Cp%2BYRLm1PjqZ1Lpdcu2aLNb8klhxLg7hKA7e8JFGRlX2vprz%2FDfAiG%2FX1MYaMvN3YCnp%2Bw%2F2EqiY%2F%2BSft0v4oxo6v9c%2Fagob79vPsXC3n9BL152gSRY47VoOG844cxweaiUS9oDaMHVL29du5wOOu2I5I5%2BuH4jgI6vzyCWSCXnsTmJ52PvyoJNnE5xak5r56PbUiBjhYLZFhZ45VLJSw%2FFGyTJdk%2BOFNTAcLiYgnuUFMP0VszZ6HPOLldILQ6pBoeaWo6sPzirAlLYfMaf8vSjVxW%2BgtX%2BT%2FtvtZM3CinS5INZijFKqnczUiku4e5NF99B%2Fy2K3yzbYOjwYMxltj2B2SYA2rsQOzhc2RwHJNkLBQwz8Q%2BnpNN5VH5qsU4decM6hlaat2VNCwyd1GoNcrXWZDiyIUZy6izY6WTWB%2FEQ7gz18y%2BgWp%2BhcwCy%2B1m7BCDOxgKn4%2BumSnr4IQypubKy6tOuUrvYzj7wgfUyPfDtKVOqk2GZJtH%2BMAdvfDRtCywQ2oYNdp2khrddkBkHm9jJTAo%2BlgJ2J48F74QhTgohXfoNoqxgAx2HEEJgJGgcjh4iKtl6ly%2BeKk%2BVPbUIBmchlsPOCofC9Oxk4SUbi5inZR9SORZMIrYwr8GOqUB2ZimnJm4ThYBz3QyDFo%2BW%2BBn34lBqiZySx3S1hvLhyxUf5DQpGEILrhOzJ1Uxp9fIVRkmVzzdnbLNQeI4F85fhMrWdwCIjs8Dalr%2Baj9J9i8iHTFDEWPru9WHO1HaP1f61S1gi8qVJLB6NtcXe6G2rgA71vVt%2BhKFnOdBr0kCOop4JWKXoez3uy8sJGW4nihCIpD3x3fgSSGg1bBSl%2FU8qiafB0f&X-Amz-Signature=d3c11a2457b81df80a3095d90142b2ea217960c6d74331dafa9f0e0421231743&X-Amz-SignedHeaders=host&x-id=GetObject)

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

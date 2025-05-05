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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SM7FWWW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCE6en5aBhtFx6uKyaiVV4yNfCeoSnPpMAsb%2F%2BmMNIk%2BgIgZ58p6DBh3W%2FlW%2Fg2pWrObVu9WVFn%2FD%2Bjqy4PH5qpFZcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPeJkcuKjSUCUZvZWCrcA%2BXNMue7Fy8%2Fo1Up3QfSLcUw0tjFT%2F2h9ba7tTffbbmHOmIsu1Kx1TaKdTc6HOc1sJx1g3FS8%2FDpT2fSFpcPS0YYHxLqzeRhkmBcw6hGEGzGDDvgvXhgKKMUE68VeEGzRA7UvLPgPuMxITIcHadURy9VNLutv972C1T9WW7XQ9q1LSQCY0Sip3PnqGDJXVkgTLTPBhvA6SrYEzwx0yjsbdrUMjpsJfE54k39eQUwZK8c%2FwefugVz90LhukEtT46N5I30OJMewNTTziwvqV2xRoi%2BZMVMQLpob0Di4uvLtOMb%2BxHpfeCrt0yHJ59sRpyEvhYfoZ9JAjKuP9QvYi7xkoF%2Ftl5VNo5x%2FakvfZn61K4zl%2BGxikEd%2BUAEVgCfWdSCnRv6PfhMbNnBJUXEbVOwuxDiuF7KQlBhYgvGZf9iELVPTMEePlrautZU%2F7irs97l5a43hjYC8z%2BbDFVRvVSKRsm%2BmNj7WmNlAOOuGDZXcG%2F4LPRF9A78bcN8cHtMTysUJptkZnFhsaAGAfmDlNEVcQoagoetG2YBFXQS53GqDeWpExVGHP%2BAj5MngG74kaRprOKUza0A3L7KiGOH7c%2FwFkO5esOYZWwOEGGTb%2BfD%2FZBvpoXUkVnIFuB0RyK%2BMM%2Ba4cAGOqUBGgK1tYRz1o1nfeTXWwpeC%2B3PHqdiv%2F47uc4kTMaB%2FhPI6CflUZkc6bfUDCtZqFPGn86XQKfPmOR47MGVw9SF22SKsVJkPZLFWeaK%2BsF0zr9d0wCIJr2%2FHL3uak7MfcXGW8iiMp4R65td3D%2FR0BsMYEx%2BYUjY7QdF0YZjjtQo9Qpw6eyEIaxiOrISrNpLSMMbTwg5lqAZsFTUF7IbP7QFpNrEuEe2&X-Amz-Signature=3a0042b6e3379c221895bd4d16fb60cdcdd9218857ff3b7894018850d5ac3960&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3Q2JKVS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICZSuIB47zgO%2BLOolJX7tO4qCxGroPNDoh1GJcJuhLDXAiBMdH6QqKBarqV%2BnRns3aoaNoXWiSy5F6kcPUCdQAcVgyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMQMjUg5yvhJR0BPMxKtwDzjCHXA0EHs4PuUxfrH9qNqMoDXVz8kg59tfHBX%2FcO%2B8wqLMM8d%2BA5oP4reFINaTXBXMi1ZvH1ViEQtgwEotmUVA5vpXhQZK8bZyFbC9wbJarM7PGaf57rx8OpQiqdlYmXIHW7TuRjLyDKkfSICzJb%2BLcUZlbbofdwh8rTvzIojWMTxadC5eZEgJyzIJFpMKTiXl%2Fg0pXEA7OosXeE4y5%2FU59zZaJHcAsVoO3tI9XOLT98ut9kqvzzIiAZzB3eSzqR7CSoE0wZdfukawaxEdv4vczV8GLNljvP7MEnUaRQYl9Brg%2BxjAN6rfX6R0QQ6V8PJasgx5FH%2FkccfCC0KpJLmzRKCcStQ6VrRoNf41cYMuQvSmuj4Rly0lyB8VtzWJmaSNRWb2xEa4cD0S9gNl8cqmR9tyX%2BOWjy5pM0y4DhpoOjU470%2F3yTLpEQLsY3fZF852O6dXvwYXbTWITGEh67Unz5aPacN8I7w5Gk5u0DKQeO63B89sIhepcRA5iXh283UT9Dg3fph0%2BWa9bHLFNBDfiwg%2FGxcLADXP%2Fvq%2B3JQbHraN1zMrKLrvft6pJ4UyYknv2jSamd1N%2FKE%2FbpCLcUF%2BwMBOkvnd29tW3zPkKb4WZRQM5vwKLDI7%2BKsswuZrhwAY6pgFilz3%2FBj9y0Bb00658jVVl8GxE4d9IBNLhDfKFjE8eYhLWxhT9MYGv41nTtw7k5eZPAVOSfym%2FnnHzkVty5utdeNd6PaNG9Iyd7%2BqyqsqmnMmua7BypjRuppcPNcjerflPx5Jk%2BraqhppprIwZWvxEfCsdp9bmT3Ac932mXFf3neMqS19zYIz1STR0M1g0A9XyL0q6g1noeRSECMdLzhiAGZASWEFA&X-Amz-Signature=aaf138904bd0a2d77ff47a06f716bbf8e165d9dc34c66c2ce756bcb83cd1cd7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

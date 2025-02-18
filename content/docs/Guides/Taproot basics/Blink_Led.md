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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD66NO5R%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCO%2FSZXx0OiPTe8Ys48A6ICkzgXXJELyMN9WUwohJGBxwIhAOT%2BS72dk8sowHkRyrgBAYKatw%2BLc7t6S6NYT0OtigKRKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqqF8Fhi6EQ8XCDkYq3AOwrmYYfq9nYFg2bXW%2FOsPB6ivoM5YYgdqGZYNO9A7jhf59bYCX582UDwptU%2FbqZM9SMuFkHE9MOr%2BI55r4PXQIjp9grAfTFlwq%2B27OADOZbQfbBXDh1c%2FXAhmgZP3laWW9XDK6Ooi4zg%2FsPMNCBs%2BtaLaf6CrPqlKsVWSU4MdvXf6EbbLI5%2FwUxsDSlF6ZhQnELB6jZgc6tcDX9LSLOpZ0mJBgVsXfmWlnW5ffBF7%2F9Ws%2BhUvew%2FJY7F4zGX9DteAEytWkpQKeWtQ%2FSSLrx8N4NLiH1p%2B3CTB8v6tVCGf5ESJngkbJ615ikzQJeNpKp4mTs%2FvZwWU%2BUHkf7MYVHmtxfQkknSxIJ7w%2B2zsUMrtbedr00L4%2B3eDgjaWYpVjlfSszCdX1M18P3NQeteJ5m2%2BkNgjdu9%2FXPX1VPXQMRpJdtkk6gvfc2W%2F9Hp9ArTkZGB0ya3LI00EaeUpGhd7k1gVhYsY%2F68Re%2BGhXk1G7EAoCoSPPg4z7ZPQ5tBzIeqcO9GH7n3sEs1XrUG9MRNcIIrapNa4Nek%2F%2F094j8kMHRaVeB1ml2MzhJ6ggBrz7SP%2BHSnoJpGaOEk4CrotJ5zcjZt9h%2B91pHvSiDbgGxfX79aJwLhYfqmcyEJ0aLFLc0zCNktS9BjqkAf9Te4i%2FpxTxAvDYGW988yddj%2BGLfOCMyoi7s0GkcLWjFp6ltU%2FsSStuxwCs%2Br6ur1IIgKojcG1ifisWistLkv8hpI5L0j3iFD8DEsn4RfnjyjBIlrIYnlG%2FEfeaODxhkyuoWRd4q7FyI47lzpymjnlmtk59HpfFCE1SQCOAFtWjElhndB6hbQYLYEHwKw%2FFmc7tf%2BXs9con2SEJ3jHEqPKWSlJu&X-Amz-Signature=f367c5fc13e723db32abc470abd56c24e5cef8dad67f1647432b9ed3925f0e73&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZTMDGC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIA2Jet6GSAwTQOpUj%2BWdAar7dQfCgoVubqCkVr2LAxNEAiBH%2FmgDGte8qGXfibwNVuihQHPBXX0MyDQzPLG5iKQuLCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmsZAp915OYpAAGC7KtwD4o%2FozLIeguTxWZBvwfEe5uBhYy7Z30md1kXq6MhPkmD2PDbkAAjyKEQHYBif42tZKFM3UJ9CfR8qXj5zuMoiSVYk%2FDT5rYd0I%2FsboVbNsnFbf1g6suIprVwHmiHI3%2BX2xivno9V5NM7htmIAhPVmDwd11hnvuGBblmDy84UXymWUZNL1AOYEyDW3gshNCo7AjEVd0CPx7EsmkiLsBI9h4HhR9XHwBD7YfkXK1sgRcOx5M982MckNI4KzkKPznH0qrryehtW3b%2BscUeJZ3kvOPdbPC02R5cl3CZFR9k3AFftV8HalbKydL7q7r8yLhTcJjsxAv3LkSL5FIM2kxhd5tGMOtnDQNCVbnCYTCirFJHn6%2BdrYNyk%2BFokVcH2TvqSHagFJRpeDRPED3yBARzXDB%2FHaIb5GIIHyKHafX%2BflyyuYqXzb32OuPMuBCJXvaG9%2F9illUj9l10Ydcr09JIEQcKbpTNoUje4rCaUZm3PwRwV%2F%2BaoOWpoRkFfRT%2BCvxk%2FTtdvkkaWSwZIHZLl%2Bhwe7V0PyFwxuV%2BdQWxN1Dx1l896zIHnFG8WIZeMU6eueZRz4jl4SkJTVOyg%2Bv67gXQRg3kAFUVd%2BUqQEpPq2LC6Ehrc3rPkPzOunKsHzJ3Awi5LUvQY6pgEVqMVDtR0jsr0M2%2Fwd1TFf%2F07batEYsY3PE4%2FTTVEY2pckTolsPiwZSeY%2Fp0C4V%2FVMTriyw5Aoq1FGB6B42da%2FdiOI%2B0brcG3zlrCDj1U2chod4EmrSeHZxzzWryn4EvgIKlVQ6BbgAAJRzbjV6d54Se%2BC%2BEKQQEjdafXA0pJzC05uSRY4AgktUF88c7I8gp%2F%2F6TGFpRcxQiwrShMOonEh6Hjz4YdT&X-Amz-Signature=f58d88bb0b304942720ce33dfbcc4c74bb0ff5da150d623d0e1c861ffe9d45ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

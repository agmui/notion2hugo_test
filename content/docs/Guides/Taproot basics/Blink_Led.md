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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575EMCYB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEz2HP3QLL8%2F8c2ZHxcrmCjrd0C9g6nTlMESddgLrPmTAiEAze%2BtNDBJrgJOwT3G%2F9pXFMX5D5gZo221iJRALev0tOkq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDM8EmgCuxVL7Z10mkyrcA1MuFLlrdxYI3ugS1yTWWvkCwP8ObO68dc7dZzxFblbGA41%2FT7osCQ%2F9vsOxAdmb3mCjWZHBdmEGuJ03%2BQARNdMhB89UTa5uKLKwtVGFqVsvVmkXReA3tzNPw%2Fhv%2Fyvxerd6bQopnuyz21Ftz7Vb0BbDMwwyu3%2FGX6QOHY6mruvzX%2B%2FbqxLI6Xs%2BMHW7ahK4tAx8kC2B80zubg5FFJ0zlqg1jQCNOq5x19USImZqE%2BokQ%2BWoosiOaeajClBO%2Fzlnz5xMLk0lZBfCtr9SIj%2FXaz9q%2BkamlWxxGR%2FXUqBHXsotHfilJHjhMyGtiOmhW3G19rl7NK1XtDzWBn78StEjVHmfumdt2pvLqCb1OWshJyxb9fYnctMpmIfsGOhwKxljPkwFL16q%2Bptg7JDdSj9f1l%2FoGl9RfvhBaremPxlVxoXoiI5alxAoGxErv5Hl5z%2FwMXLGPAlCOWQdSKQW%2FnH5t8oLUuqB7Xx7MvR4zAfUrCXMEbxydQcjquUA5CPKJwyuhuRFTSdyZTQ%2BvVjPoLSzUIL6LmxDyOb7trRILISUQ14GJQIjZBlFRM1G8GSLRHGtr1CUcAP30jwfq%2BhWNnlnsNTFim1KpsI85eCxksOg7R1yO1NpMLnsDHHjXk3VMPiIjsIGOqUB43n9GExMaJDgXZjEOgo6nSjraAwsCbP4tcBc8zdDKeQKFujCPMPb3dtoeyUZ8%2F5M8oeHQzrXtI%2FKKtSiR3U%2BY3PMk5KgqQpB3o3bsaM6HiwBC0moZjvk61RTht64odK%2BhLTwEVNOpu6Bc%2FFnaKf3za7XOeNN0uBygtjvYB3SwUq3PWxEsIy8yfR12prRyzfX0wX8RE2oBAB0GVkAvL1bVfO2naPX&X-Amz-Signature=f919757c91464ed17b03b3abe4914c191085b4cf38389cd23f1eea29634e8520&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3F5PMQJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCttTdrS7gPYcBVj9%2BSQCZ6fyYYThqI8h2unGORJq%2BH%2BAIgZBwbwOFZvzBzlBBFcbGKXBU9CtopapRZKRD2Zvxg4mcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDISGMpE6lCwSeuXvgSrcA0oRG7z9u6W%2FgrM0LzYXSuWdmow6moJmf%2BlKGC0Xpd6G8ULAsc4Dw%2BSWrsonkVucJQcAiyw%2BfvZpk8VEsSfD90iZ%2BArBl4WP5wm%2FoN%2BQ2QPsjRrMHw%2FS7ZU041AnFbzKKiu2O%2F08E4%2BBmT8iYCrpKaV%2FyFqVrmkrCgWhi%2F8niFDxXG%2FJ7qOMJ8IHNkHNeKSHqJlSPZdd6m%2FJoasXmCUSmyryPACxoTyHkadqQjmMh0RSWsv4llQXXVixmfsYfO1pnCBnjXpKbU2XXEpPi3KuRr9Cjmpv4ZaJuCQpldk0A%2FxkGus2DJFechzrY51dzaTbmycbK8lnnKDpJKvtVTZXwnQPvkBpXODEpfOi%2F81xQAJ7DybTIzQB8jOB%2B5q4pAgKZmv1nOkU%2F4aTowbJEh1%2FFCv%2BhTBP91K87RFJ%2BGJoqjgHTi1G7kBfPCqOaxlGRZi3xn%2FWBg3GUOUPLbRMRlU3YXaKlathp0CkJhTCX4T2tk72hmjamwc2xO%2BfNdI7icSMVtlsO9cyxto%2FPUmV0gCu1ES9IseJiHzvkuThFyq5YlCIIYry9AaXAKcPVWAGzFEn%2Bjemy2UZJoxgEbgaEAh8Sx6yQeZW1K0nsixH2M%2F3jUZ5F%2FreALg%2BdfAm4D26MISJjsIGOqUB%2BtAbf8d2jbNNDtoe5E5vMjH%2BQv%2BjdUHrJqJOtwjPhFP2f9XuiDFwqWtJqVZxDl3RrLdlRwamemtaZFKOYJi636Q34Xoko3xYyI3nR9oX3sneezy6OZnvDwtgOapPuFHltkvVv%2BAyvbHUDc3DkwhjMCq5znZ26%2BIp2fnBuKF8T8WGelf%2FtaPl0%2FyeE7qw26%2BfW5ZY%2FEqbaHLDf%2FG%2FOR8eZhLwHUwP&X-Amz-Signature=55dae1be62d5aad1fc1feda981c0a3ade8c66fcf4aad9884c0e45bd4a915f3cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5S6OIDV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyb52%2FRE1My5gbduSKWHUm%2BpX77t%2BERozELH%2F8yUjb3gIhAJAhLgRzWpoBludHnEwn6gUXm20Lw3h%2F3HRuOM%2FB1SuqKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6%2BR92mlrHq2nCWhoq3AMxbWLpHwSXRCD%2B8wsUVHf3HLlb8Ot7Ri6gmAkbEjSAXTkpZAzqEK2mvbFCDIShuFDcLU%2BA4l85fpRCI0DYSVFBXETt%2Br6HHd9NmPxjTo83CLgswBvnCtpZfLKQ3INY56yxw5x%2BFEEBa%2FCSC3GZ8fmJAM1MAGTjdBSd16Y19kSPoHdySvMzU4Gb%2Fhm9yTb7ZeRYDNsNmJP1e2%2B94BQcL9KE7RhNI56fJRqPkQDMUf9DZTxHCOJJXsVNUnoEp0CXBgRj1o6nMLEmzIvIpy7XWR6rFL2hdzadvP91nGQ5GScZl5IBnVJpyrVmL2bq6SlwFjBHAX94aJQCWVszoztWV2LzVJTYqVFgCWwKbT%2BItH9tjwNDyTESvaizzSSbXZxAcUmRN9NxdqCx0IERvsi4mqPYYu9%2B32dTcn%2FYtXHK28w2Fo5z2kevzodVynKlKFd1h7qzwBVKBuFTINicMtJWC5tYo%2Fe6FFEhABJDyfBRLnNB8WIx2zvJqfVsfoLSWRgkk%2F7FupX6gVKWKE7gG%2B9ryp2ax8PS6TlVx82giOMADLK8kjhvydUruDFL5R8sdhyFaa4mU5GTqhX8BlwsAKU5WXLczahGrrGFPFSHpQiEPQwzeemDfXPYnVMx%2B6I3WjDvxPnABjqkAe3VD2rehUlz9v%2BDo4of6JasnMXNalK1aIMNv6%2FQds3MJwkywg7ReYayMM3DWA2D8EEV3eA6tvBjwYmH%2FK8qb4RVzwmH3VPRLLJCduICVHwOXtIJE5lgrGOsxmlVPpp%2BI6n7%2BTXZLGFWA%2BRMg12C7SVaH078rgtwmZu%2FiPPDRg3W4K385TakWLUA%2FU0b6G1qJuHAeEFxwkId%2Bpie0ez7cuKxFLDA&X-Amz-Signature=5d8d53e214de7f6cc41d56347850e34157545a5d4b57d72de8418ef9dd8b6f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYO7BMJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOQalUS1qM7gZIcIonvyEZ64kBWuC%2FdWNTlbO22%2FFXUAiAt06GyGuyTq9jD2thE0y182Wb8GjWBaa4Kzbn9LHVpryqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbClNKmV2CN%2FZNjRKtwDlT6ZuD22ysQPHmCj0xpnwWh1pYdImjwfifyy8v8YQScndQGwj87yNhtyFNYzllBL4%2F27DOVOuakj73nEjnu7Pn%2B04zxMJRDv5mezyEWrr4NTLVT2hBQxwbb6IekeIHk5Nyxeb5ZX8aA31VoPrObIMVVZcz3ptAMWxjAxX8L9C9VFBTbv3QYItSm7%2FosKUSUsVBU%2B2oabmums82V7wEgLwErXHxzLfcbT2MrkABqvc1c81sSOEXCcnELCZ8MG%2BevAMwfOGYvUqWNdc1k30XVn0vRggc%2BnfE6VPj0yTBL1y4FhRm55iZag5WtF%2FvaJQYKwtQ0b1srwktIbbZ0zkBfI9MGDxU2e40ctJUyD29DbLQpK9UoS0CUVa6fIjRXWnRVtKf8QakiRFeeSqPudWw7XRsIxIpgOMkQDbmWNDAz5SlBd36tsLk9obk%2FOiFEted9ZJb2oMsihCg6M%2BkZ1IPvzMa8HzqPpDZhG2Tt3zgVPXPYfpmnJtBeLZXy0B4EfFYnTa8ETgd%2BY4gdEqK560mW51WCBiWAW5%2BGf1C3w4g7Yfo%2B2pCR94JAfwK7SdKlBrpzsK6MR33Tzq8DdRySYD5jy0Ijc9UX7dC%2FXcSyMImnYZeaNsLabhSfzTAR9BXAw28T5wAY6pgFzXJ9aHi9sU7%2BdKFcvu%2FxcZSZQZiFsqu1fTkELVE5du6mV1mXA7NRVVN%2BQEckRYe6okCk7ixn3IHyExSyECDMFLtl9pRTOPaE1SKDJ9wvNjSlclLd3Uupk3W9e%2B%2BhWMu4yiR5mQSV7RJmSJ72IEM6%2BfTAUBmJ6DmX3cvvl0vhtv%2BZQeMCAARlW1PIbj1SykAMMYItw4S4cwmQ4Y%2B9GpW5jaLeXSfhZ&X-Amz-Signature=8cbf6e0dbb7438702e76be3ca221f31477744256553f2c38270c5e334b78b917&X-Amz-SignedHeaders=host&x-id=GetObject)

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

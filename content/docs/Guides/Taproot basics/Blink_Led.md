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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAIVFWB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD37s%2F22pi3x8i%2FJsqHnKj1xahm%2BCg2DXeai1vXEOQClAIgVPRMi0FOKKD0tgS%2BHbRcLvytK4%2BEQyORhp26%2Bwd398cq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGSXeOmi90zPeBytzCrcA6Nirvp3h0Z2DQ88tprRxNMhXKfbzxK9v6nCn2qK13Qq7rXj8F6846RCfIKelIvtES4YTimTWqRyOG1jLT%2B5Ijq2l%2FF%2FHmJRys2R9rrJxmSWODoc7XGKSczWLkM4r94nrGV5zbs8cODxPL2BfaXKF%2BEVj68R4HBgggurqVqyx%2BlWNwT21P4Vdi2jvzsUpYvoyYSL7hYyRHaFkQ6zReDaXxzudJnBW3fcENGuDXYlh1QviIY9ASnk8OkDHENqcQ6aCIJWNNVTg8HhWrq9TDLMyLkumJDa1cnSZwdBD4ezp%2FF%2B9NThPbgayoolaJcGxmjoHn2rw8fsmoRrc0qm53pjhud7%2BnsSFF%2FMvKtvMrE2Vj13sQp9uZnN28%2B92GNylgdLhCVo%2FksunRu501oJdGw3r7w8lgcRjz58il3ru29l6ncweYB2qnpGkq6xgPx%2FEN7bpD0hO9iOqLoeUfPpp6kyLcvLhOhJyck6iPfkYki4CjBSdlziYaSS8phnnSRrlYjpg401E6EY6YWQgGxzIp8ps76twmg0Kx7Z0w4NLfJ%2F6Mnltx4WKVyyeALppGgfR3DPHhVdbD66IocY9Y%2BI%2F1QxH0A1dZGHJ7BItTuqKNtQ9oQe%2F159X9jqT0dz0ru0MN7t5sIGOqUB8lBuDscNGQa3gs68NIwFzcBTBUe0pFy%2FPE21s7zIZxT%2FERLwrPiLzD9GRh4UC%2Bk2Twpf%2FX%2B9qd64onLmt%2BjHpN86AJq4B7UWM%2F0Xppd1qVYHbF4CAGqsS%2F0Kh0YmPNg4d42IcCMAeZ4Ck%2F2%2BXDSeiVDX8N7CX2vPUNxgZju2PTugemDQQCReoDwuBxllzXtUesSKJ%2FJW4e9mhPnIS%2B0kQmH1VS%2Bu&X-Amz-Signature=d6cd8f0e22fe7d76aefcb437dfd261496ea9bfbceae23276d44ff89bf316635f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QZ3EPGR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDYc8foK1WAcqLVeitz7oWFfu3VXx8kAJQ4eU%2BZGeTFDgIgR2fRBdjutA32PijrjZV7Fd7qhH9b1oNqmjSuq%2FBriAwq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJXbnfFUI4EANwWjhSrcA42ORRU2Ka%2FKi9xQGAWY8GEQzAPwn%2BlqZPgyq192miEUfBCvfeMHWNMdrPIvINCcGLKAgLO99sgPmjAllb0DQNKRmSMf1RwvIhT%2BX%2BarGO4fgk%2BU9e0yaCAeYXHPiMl42clnJhRUsTUJ0tWFYVh9nzMOI3mdsGomMD57SV4f3W0PORp7G9bS90qVgqZoVsula7P81wJCex8Cus8Fm9ZWBC2FNxPaTHLn6XawJV7Ri3YFWC8GZEt%2B9p90z7G0q4npept1RIo0giR0PFnWGvTAdDRjaLvCSLZzGR%2FEP1s9M4Lq9kcqsbRouv44lw9y0CyS1oWBT2KGRLBN4A74QYgNUlo4diUq4827LD%2Byk6%2Fj3VCrap4Ac5SN28R8IuQVDnZEEcbfzHG9R7%2F%2BcGe33UMKCl2LxPKXtH4dObPiLye9fkuHF4aKACOKeSy6Mqa8kc5w0QS2qR9j1cgT6271epz8CnSoIs%2Bw2QIUHISIW5%2Bm7u2dB%2Fyoa12pqGuxb%2Bsf%2FlxsyZBf8n3sW1mzJFAAxzJWui7YwtJi0F9fp2qtstz13yz1CNzY0OmF1GIpA4BftluGXrQC334Uoczn8Odlb1BGzra9dw8hYXaX%2F3D8UDde0VO%2Fof4wS63bkjad8Z%2F3MKLt5sIGOqUBIZqhqsCwbOTtLE9lWFzY8qDBumujHhUHnEqCLdN%2FM54FncLCN6AOImMuv52SZT1pPwuDYAaDhTME7vBFAeeeFGVU0SJyIvo1s7WV6LOFU4YelUCRhQz3%2BAq7OClnUasqqH00k8SgAdec7ZQE9HKHDjXzOqO245TwCzCFBFnTaj5y7j2IWHnrRLyAoBK8OOjbfyl2fu9oetC2md5iP%2B4NslU7JB6y&X-Amz-Signature=589abcbb9ed0f37215409341913d498156631a136c648b8f6329280bf96bd9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

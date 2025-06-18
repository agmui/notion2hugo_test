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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LV4ADGA%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDge4KzLJ8CU7JMxPHUNJJqu37dx5Ph5Sy2KTnwpRO8bgIhAMLIiq5Xlt3%2BOxWis%2FA%2FVqkQo7BlUKTtTLTFLnmHnW%2FiKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySMWujePnOA7sZe14q3APyoRFEB0SxPEhtddLdPSbcLiPgZaFgST0eWuU%2FzfMCErEK4Omtju8TTgRNm9IJhCXc2xZqES%2BLlfGdweXenun0LyRfi1MPDwIFMVaRy3RSz1fOR9z9n1Xhy2K%2FSUaixdy3fUiJi4RKPoUSRD3YosC%2FZzXigKwtz%2BIqmvmV%2BRdEFqGDM2WdvaQSWcPIttnsOORFHYl2x2GAOGauj4a93RYk4Pw%2F7Yua51Ix7hJjkoF8dlHvVuMvP1ClfB70C5Yv7oQ9jNa%2FfF8%2BVEnDH1%2Fv7MyaFjsF1hN4Qp44iF9hBFi6Oz7hubXm24R3%2BbpbVVn4yKcEC1BkBcQZG39A53cGncGj0%2F1tXumU2FMxMNEga8s%2FvXhc84N%2BIzabb3RyJqi8hxt6r3%2Bu5or%2Bf%2FaLfdjr28pqKaIankXxeFLsDzMl%2FHXLpVzkLBznQdIrbcD8yiAcgWmCcl%2BqZEk%2BCHtySSt3F8oOf055rPZ%2Fv3s599G3j16UlBEOVaXBW9tYozy2ezh8hUiVU52SoZSh%2Fj5yFRQ%2BzOz8NlR1sv0cj6qlWIWlhBld%2Bn2SVYo62oUueWhBasd13wtSjFvw68EcGh%2BbjdnoCAr4lyig4dO90hEQmHWnH17yocZml0S2%2F4z1BtlNaTCE5sjCBjqkAaIPs7vrLAU85bs0HXmBE6pT8xbqUAZwxfLRMO7k1zC8NixFTSn1Y2PpVZdO7dWTsbskwy9U8Ae3HDzORdwQbBofJgFNPtBSUU0nMXq2nN74vn8cUMWo3ky77WHH1KTxUlihidlewgkKGfADNd4XF3zjK0m2AXVIuw4pBnnz8Pi4k2EqrRadLUg7D9deGvcIut5uIwx%2F%2FYrbTZNldBkewYMWUgVW&X-Amz-Signature=a14f59e5a232d33ba89c62e0d92eb5132d8ecd828a78f911828fc2d1f11c45a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU67R6YJ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtwJpH%2F23Nqsl0jcueSkZlNYMhsoQ3PylNrrQ23hBjswIhAIcAh%2BWnRpLqrUChCanA2aUDhVJsL775jwVgl0E7MhP%2FKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYlwAL5oMFEc%2B9Smwq3AMzE%2BxjNzRHQ33Mum2d3W1qRSd%2F7msUBOjItAM%2FVOLMkq%2BVpuy3yPB61IDVx%2Bl%2FhOSRDxTSrcRNzXxlRNkClavYIMF%2FQB65UO3g04WlMihDvxHB5JX1D67aPBOTC1hG0MDEs8TvHB66ILIilkhKYplsWX1gccOWMqnWDT8UxG8JjvB6VU7a4f18OuSbREic9M0HYEYt8yJRNh%2BprOxxKESG%2B7vknFYHysxXEwmNI9KXpUs8Hub6OHybGq1dqCNkxAUKM1T7maxBDF3vVO5a4q4tusIQOrpuE%2FNSX1nhcD%2FsAtQk5130A4FF6wSuXHxIg58rBk6Fr%2F331qNMXjCUdfZPBakG10UIXQpg%2F8IvxN6JnDx5CU9lgbPJ1HRV%2BPrONDbQSu136l8oxgVfhkNta3hYDjUyPMktBg%2BONSSH%2BmjJRsG6wKVniBY6yoZFCAVWajVRmLFwx%2BMiQylbjvpKJCmibQBlecBZ%2FsnUcqoA3wm7bhgVGUsq5XbiEWMy%2BbedO1Ov722zzBjR0KWtTwpFw3IPKl4Ha0YEEVSQvhV%2B0Ux6MW8DDoD4cP6FRVuy1UOZxPcU5WMkkdhK%2BetFZaEexZXWDZcKHGLQFkclfy2VRnX7cmHaEoDGcdndbmH%2BNDDhocjCBjqkAYg5zWkww1rayBfho2xdsjEND%2BH9tfCZo8o2DPY9M0JEztiQek5O0ce5FnU8UAwSHWizdytbpaAbjmcz65%2Fo7mQ4OzhbMtSYwhqMhS39G54rUy67Da7mgAxkO8cRNrMJBYBRM6Z9PtsEltZnsrRYsd8Uc7zJkK5AnZuIGKV%2BEFShhJXnCDzXy6JATWuUO5ZWTcN3xNHBWT6nfZfJ6nCPHBQrXhr9&X-Amz-Signature=4166bd5072b4a5784ece1fd57d569730eda692d7d03f74fc276d1219aa56e8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

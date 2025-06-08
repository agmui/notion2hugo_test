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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPOBUAXC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByOYghZpXr5KhxyrW%2B5YPZbo3laYLAS2Xv1FufHUr3LAiASUfrUJloL4r2K51VpRo%2FkoNyVQ1mmRCBPW49oZ418zSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKadM2yAKFViFRCZlKtwDTYjaYkCqsR0vQMOk0LFHEq38Jet%2BFwN7QkvY%2BjyySmXjcC1iFJ9t8Rl3igYcRgg5mVnMdihVMSwnqX46HZTxCvZqPd35CZ1je0q8wa7THAxg5QQLKz40v78tkkIe3b6XvBgLyyel624nE2KusuIP8eGpF1aXkx7CK0HrRaKr0er9C%2BMBZawC0FI%2BbWk%2BAlksT3GHCzkv9wjDlQwLpbAimE9niX3XeiJlK5TxxtuN0ut9Es9DZ0luDLsqRuxRd3y%2FZIRJZtOTQiMbw1t8uxgtf95bf2TeJltFuS4QxGOIOQ1oDQRmiedVzB4tfw%2BR0hUUirNBYfzS9847%2BFfqQCtvtjWEOINC5SBMUdWngbpQYTS3tlzg5qyq2ViSagAZk7GlSKXRN773RdohXgOzAw7ciLTZRP0x88FDeK0CZtFc%2Bx3h9YN%2BJ0dQFbSeEGEXfflXFksfq5y7Tq%2BQieYq%2BZUUJKuz0UVT0x9gUrsfiyI3aQ5krLsTp96KTv9dzGB9rv366DPQAntPfqseHcUXo0LV5lkx5So5H4dGHhAse4fT7caQu91x09E1hKR1ymBW0EOd9pxTUwUhowhDGVPapcSB%2Fm6dQCvBDXr%2Fds5ny%2BcINe7iZT3%2B%2BaLx9Ad2SIAw6rCUwgY6pgHSmNJ84Wvl0wGaanImao6VhVI7H7dToVm5Gcg5mgfBQLUtruhaCU9bDF0pCuoXF4LjSoLm2MVbjMyjegtZeCZRUiqRM7l0eE5q1hOH%2BEXhrL%2B%2B2DsT1F2%2FqQIruUEoIoI%2FNzHdE74LYKy3xJyAvrrhgszR5VE8MPSp4RsPy5gO75KR7U80CM8T6VhhlGqmMLEhcXRAHbg7fGF%2FpsLdpPe0gLVCCSsc&X-Amz-Signature=5070cf7e1a5a0ab741d9f2c6a6b95422429ea7454727391a3f1576f5a42340ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDWGEQWE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxymlYA87HQBAPpNWF68Lf5cUVHSQCmVizJ3Vgevu8rAiEA5hVOiH4%2BhBw%2FkGVskk%2FI5%2FS6ThOZYdM2moz90zBk%2FOcqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjP2anzHIGfWuSGcCrcA%2BJJMu737KV9dxYTo5XFLIL9eEommA3HYYzlvRQ3z0J8ATnRBemezQk69f0IhFQGRNPohsJH6xzuBl3k%2B1E8z6I8OFQMLutpzC4ECCeCKcvR14kdfWbk8QrR6jjppbQM%2FHykkIZEC8HC7TmNDQkJPl2Ey%2F%2FlY5LTMYo94e%2FjqAfmq%2FXC8hNG6IAC9ip8e7xV21u1aXa5MG9J33EeIcQsv6iyq1miAMxKX8wbFrYaMtLutPj8ADoZagLg3W5f8k6F03%2FIqIcSe%2FEo%2B9BimcichDndaQHUpFaIuhBn1qW0OXO4kUIgphbRpA47r3J8eLRqamnu4%2BJb3c6sDJRtpeueAfTYLBHb%2FxmlOoOsyVG67skymLrsKkz97eJG2hMk2qetkkn7z5TFKus6eAB4OdNfI%2FNPdWXjzloTIjwPmbiu0B4aW%2FLk5FoFC1PuKIM2bc9BCW13t4w1eO7l0PMEZXS7thsV9hcPN2AR%2Bn804ou%2B2WOoS3DF6eoFosYnUI3Pczr9fqTPuSEnlwpnMcfWAOk1MSc%2F886%2BMAlPQCekbUWYbNNJqUTYKkW6Dhd99j5AmgSnIzMzl4aa%2F0MnqGXSHZEJzH4mvs7oZRo4B7kbwdxHG91WSDcV9PZHlUSNyYJSMJTmlMIGOqUBBHoYxFFooHF4KF9jUcfXSt%2BrAD%2B4Bu8FYl3hsYiCBKBc2zZy9Ye9N%2BYUSTz6pR1dJ9H4J%2B40E6IalDBU3zq3UQWd9ONos2Ee5Gzc%2Be9lcPlVEOwToAr4Xr13C%2FnPv23iNVho9IgnuzmzVTlBSGcW%2F1ppt7OyI2872Gu2DX6pctDLwSUDidPtEoT560PtyPLc0%2FKauaxy9i0iFOJFQBuqORGqfDYH&X-Amz-Signature=619fa461f585fc591200b65d9dd18770aff9abd547997c232780ae6d322bf228&X-Amz-SignedHeaders=host&x-id=GetObject)

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

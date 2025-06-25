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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662JTOWV7%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDBA6cYoZkZEXECO%2BofQekV0UbH%2Fr7lcaLkVkYr1Amj6AiAsZ4KDRpRMwxySffIBKEHCm4%2F%2Fi62NojhiT%2B5qIgs5wCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMzQq3lq24%2BosmXYEyKtwD5W2NCbDMqSzlI%2FgLRD4kFOY1Xw%2BvG53i1iMrK2v4jxvHdl0DDC7Ebxl8DZXKh1JMbXMy5Fc9JkVkdWa8Lagu3m0MasnKM3LD7F0RF4Z35BwV6glfrF8OunK7dDeLmW2ZKoA%2Fe2DBBFyLoFoLH8CPODiSieeFJNaSxzJ%2BPWPVtKjz3WWOSvexoxT%2FQhtC07GZ8KwbRwpAg1azspUPmZy3YPkbsBo1XeTvdu%2FvG5rCchui%2F2CNfxdvotEjGeeZsXOI%2BHC2a8nbHIBs2D52UIGG3f33GinpkdSj9XjvBKfA0W2seDUvRQQHhCbYyF7CUvxiMQRkslxb5fOLG2b6KtkTnNqrXRfaiGtyQcbxetXNsxh%2B4gPYm3eQPhsl8SlK%2FN1lKDRtVpOKi2KgyTdRCcXpOy1voMJ%2Bb6V296ZFEpYmMyUxAGA36FY0FiILTfpkMJQue36FTVkwi6zpH22jbcXPO9l1J68HN9ZzTPFgXsGt7OhaHR%2BogYJTKNmD2fBH12Zq5Ca2hBKEeFNbTB%2BtO%2Byeo%2FTLZKR5dhRKhDTq3j%2FOAW1PtRG8C2jnrQWdcUEk8pFFFApmxcU6m5%2BbJJInaeEdHs7zpMnwVsUXRcHNb0HqZKMxVW0LOZ4iPgJbwdMwhbrxwgY6pgHEsZc8p20GXcTxe%2BQFhVGsPFFwQDymXvTSBKyOscTXEt9wn5hFPL5SQFPab%2FLRbhrBkzZyMGx%2Bc%2Bu5v1ms8wWeuDb2hf9IboASsV1oh2pIyn09vBrWF5N2iy4ojkCClKAQMRigGCtOn4u3qpLRUCuHZFLAgBd8i82Dj4y3USODwCC4itYYQnvZnOTtfjAe83Rl2rhVpHf2a9GTS5c9SLC6GqX77O8x&X-Amz-Signature=d9fbf85dcb0e87244b0204c1bde982130c500ebfd3b5ccd373e6244df3c5fb1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOR3UYV%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD7ibyweYQOZ4wFdy6u%2BBPqp6qAZCEnM3Afze%2B2xHf%2FoAIgfEURCKT9XzHHln20E0CpteGSTbOEv9G4rgGoPMX9lkYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDML3s8R6EHcAXTiljircA63J9yNhpdtXb98U9ql88GK6%2BawiVisJpqiyT%2F16Yy8YKHdp%2F%2FGlEKtHq2fm8fuROHqDVXUBiykHx%2FluBbl9L5EDw0i3oUrEwLGIuj6t5qWl6o5eaf8cT5jnU1ILM2NUeiTxdNPOQobYPyaH6Aez0eJdoQZ5ni3HWsoV2BF1oIAcaZsmNBd3cksX3IR7VykE8HD1eR9Yxdcc24YD0Md%2BxFcLz3d4RjsQqGLKRi%2FSIewpa4D5p6RlGF%2BF%2Fs7wC0F%2BFL2vCOp%2Bjbl%2FArhRd73HrfhiY30dJnGvk7Rz3MPrps8fUqNI3%2FexcvdE2Lqh6WD2%2FEVZUGj0MgIZ5hxRme%2BMwp7j2qFRsHr5ZYmsRLU%2FgGFMZJ3%2ByTNNlFD7pLkAauMORMl8gGgVN9gYkQ8UQWHgS1HTLPnGRZAAYnQGOAQLh2yEHynndc%2FkilGnhQ4HGQkj%2FfReS3iTB327NrXRAF4sfOZViEv%2BtEvrb80Mg6PKPA8n0oEMim74kqRM5hTF9bOraFUdfr40WrYzz5cBm6CDLqFrJZ59PEMxE%2BRaykp3XS9sQWTB813myX7uYbk7GVUVvXhbngRV%2BBz2uiOcireo16loU7%2B7XJ8dr%2FGDLoX0tNSrw5hgJZkIVCoAEw68MIS68cIGOqUBciPzcQmMU0KZSV82rgWY4rLyOgex7DA07mVszZTOoBp7WX4UOlphBTPIoysdwlu5WHLuX%2BFsiEdySOcb9ZCqzMYg72XDmMvCffMCXFySdq5mJN2nQ4yO5Uq7fg4Ke7ipXoN8fy59AulA4huBzqF0irMU%2BNfp%2FLOM00CmxTScscR5cUbrl8iaxjlIN1FnHg2dW1twEBsGjSf5P00rsf87PBGnwLRM&X-Amz-Signature=555e702b109d3a7d40ee215041714ffd92469988dd935495457dea222d38c5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

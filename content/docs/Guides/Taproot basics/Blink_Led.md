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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMKNY3D7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwlW18fOy98R4LQOp0tgXfn2aL8o84t%2FYhq4NPpQiefwIgMe17ZSHK%2BJdX7lsUCu2ixbHg7ZozE8k9ElMs6T%2BUHtAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUWXoTIUbGlhUDe3yrcA9YW2M72CFClBrhp2BC3agYcpRIrwDHy%2BCMMQeIiZ%2BHTyYhk1zE29R%2F87GH5kv6Z8Gt0JIWL9XMOhCV0TrcZb9ev1JOVJepq9AIs2r%2F%2B7QN7ay56rINq8zLIHrsX7PSZUezsM6PdOoPPKfDG53WMkeXainESeDuGWk6mHJV2nCh4c0SmXxt%2FySvu3fHhtzTW7pp25fgWA9HjNnbIe9gY1s61TjJmuuF8L3uXHMLFy8vjRsZNKWPG5d5jAOtrUNVTjiuL8lONUfBXPZNwEZ%2By9B7K4KlAJaXyhO7unC69YT4A2hTJpK%2BXDhsSUjgC6eRdr4iUWzReKwZf2F3jGY0R1F3guqAlsi%2FkXbrK2Ma4JUdV1vVsNEhenglTo3we0YMkfwM9dyzhWCyw8Yz7O4VV%2BvwinA%2BlqNCdZqlUaS%2Bb5qT1KGypxgl%2FpwjX6oyLluCgaO3uDUIbCMovg0kOzvPjhDvHYALBkuERIlrmDO39ZcK0cfUaca%2FDYjynjYOEVhcLwKiLSo3p1pI4iLODyppqV1SbRfiUj%2Flfb0FGD541B0QcBJ%2FkE3oxn9jKH91MN4vq9ehXME0WkK5TAYD5wcXLcQAojHNS5vxrR37kl%2FzujhqXtvyWHy6ecGxwtcICMM2d%2FLwGOqUBl7hylHfRIjDtBHgB45IVUPQZ5SIlze2un5rS2SM2Yt63ILJEUb9XnG3BEorm3f1AYyuG6SlQ9O56hK6K0%2BU%2FvYw4AVcanSmqclJ7spcXMke5i%2FO12yDQiiZfEIfsYFyznKjmlC4s7DtyICKZ6rAFEUmfxs%2BQngeK1bXlsy3TngjvwvlfwU9HOqQKDSRsvPyGfRML90JPcXJz4G%2F3ICMNM4gPAvAx&X-Amz-Signature=fc62f702615f3c2cfe9745993d97f98ed8deabafbce33ae7bea32156277139e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXXAGIWT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRBeEwMxIPscLMi0yeeHR2O%2BZnp9xrVYCiUvgxBPXNYAIhAPSff0ugnNfBNPp9g65hav%2B0pb4Af4qZ6DpbsvvQJub%2FKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGtuLx98Ou4%2FHSguwq3AODydUKs7Sna8AOOFd6eVdruylvg4ANxNl6J2VkSoOMocSg16R5qiZG0w534cfeCF1KdOWA0W6ln38OLHIrCwNkA4w2r%2BoDXpk5kjN24bYp4Sm3sBW0eSi8n%2FhvH%2FZP2phXa7L5wagiW%2BZtPPK6Ysif3paZmkL3TnLI%2B21pH%2B1%2FJDst%2Biz6D9bT44rSpgPKVvi6X8FYeFcgqDrT2GNeoD0TURCgA8DtO5Qn8Wpl%2F4Wv6biMWz9aKMhQu2UPogXSNTor%2BykWNn0F07Zkyr88TZEv2z5rVdxG66S69D6wfuc6W9n7muj%2BH8d73GH9BXz1t3ynZ3RjnKjIb%2FE1SkMeFsLSeFhBTa5rHz%2BVJM%2F9RZKq83Vj9mmYJU5jUTMO6rvQaiMhGhxNj%2FUtMfEPb0BOe9M5c7MswwtCj157TjeGFdgOoGW6%2Fo57smExpyMirlqeiV%2B525uhhei5EAuNjTOQq8%2FQJMfXYgMs9ZAH6k16Drh6ZgIxhWFXryDvtsQCMeJJXjfhltAVuYmUqic%2BgIfQoS8QfxEp4Zpfc8fOJSNwcVCwNiEmy02cIsvIokwwUrMUunYjfDpIY6bkxyd0QrC%2FCItJXmRVfa6ZJhggxTJCi5Luax%2Bx%2FzpaGahlwodPVDChnfy8BjqkAb6cpjxm3ym%2FL98GoGBdvXmKGfY5S9xVXimsjaX6PSa%2F7ExD0jJLQjWmE0lfD9jBZyJykPxBrcu8ilFPkXsABOKIX5ea%2FNlXzwbUv3RNW%2F1U9uBC54THK0URof7%2FcRNwigPzgj3y4%2Bp2YQYYtnho4kVOss9LmY%2FRtSYl5BhZgPl7hN8QfQfjK08Ax8WC18H6ixjSajjxhDSlCUAIZ%2BWGP1aB88L6&X-Amz-Signature=6f901921620de56ae61dc75c3dedb630bc4627d0a21fa9676e0b31c08c95c243&X-Amz-SignedHeaders=host&x-id=GetObject)

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

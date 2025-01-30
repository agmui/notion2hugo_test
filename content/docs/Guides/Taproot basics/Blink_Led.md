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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPYHZXS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9S0jbbzqFRx%2F1WHDXjN%2FWDaKS1kWoavAZfhd1X2R%2FJAiBbO3T%2Bi9Lt015cgychEpSvL0jiizzlW7XzTZ7zElB7YSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLOQcmahzA38CKdBYKtwDkZGbmByclE7%2BkDxBZcreG4TN%2FTmxS5boYtEEAYj%2FIZyX4mwQgsMDJ1aRM5bz12h36DxGnd60AcRmunKuFDXhZytcVLTyCIuBTScQJdb3swQQmY%2BcAquUkTV89W5JBmdRA5h8LZyoaV%2Ftc25ZG%2FIhmCX2WkUrM28WZe9XkkFp0IoYElPytKmCf6z5Psp03cOVrvqP5X7h5I6wooc6DRIJB2ct0WPnSoDoM3x0OmKXH8jiT0WVl5Zlwgxusqovv5s8nlPW8bcuXvtv74anc3TX4IdTfJa3YvPvPdH7jqA7WLFnTyPW4eiY8TaYAgSBmjBnQm9keSeFK4VxKZx9Gr9i5nhAcYxq8FBWSg1hh7v7rP1bTVw7fsyI08%2FEztDASepqYYXWS9ezl70cv8Wl50hzkjTMv8hsjx2bJqirTpvE19%2Frqkxl%2Bt%2Bxt2NUewtu4UonTTEZlxkPQUm8p3oDoVdbHwYDcZ5JW0voe61rRwOZnKr7sLmye%2Ffs3DkYgV9VVCpYgBzq%2BqIPe0RUcAeJ4TJI%2FC7g4hcPox31QDARbX1GmkjcDNjFdBKfGf%2FKac7q%2BLxqsjLEoRStHGl0G5BwqMGMgVFj%2BDVTPTAOWEFsdDK41s12hxi1g82RpcQ8Az4wpMbvvAY6pgGhtuZhba%2FhQvFA3SoWQXTZA1dRb%2F4abP%2FO4y6%2BhRguhc9QdGLMDBV9X0VBcnPPKKml32VOk7A9eOAFUphDztCInDBYQrcWxRIQWiCH1qgadUHATdjwMw6swmuElrTllIxiCUs2ZEUmVmstLq44KqV9mPWQoSxYYvGgkGh8uoqKDRDwRAkuzJ12Gwg8kw090S47kvdU9zRsXR2uyctkOiD01JZ3Y5u7&X-Amz-Signature=fec2f573b4e02164eb9113def85f7c40727593b7a1b648713d93af86774a73d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMETZHI7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsn1e8zGNniF9%2B6LrglK6VaYx2Sf0K%2BlYf9a%2FRIAsmjgIhANVWzHMOkrYOi25FA6egoWS7L7YJ9p9XIJ%2B2O1ilCA0BKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNPvtOGGshq%2FHvbosq3AMYMmAFZbw7eJSDVPKwjfBdPlnLFOJimNVq3Zv4CBwMtaRuEqslikGj4%2BAAtPVACXcHRNFp6tZSn94%2Bx5Lhgnc52bqKnNGMtYjIa4N0%2FcYZ2YVrw2M5snrF09t8hW1bbU%2BHaftDDhb0DaOhdYXlHQSsX9%2BzvH5Z4xMo3AIavO0uJ62A%2B0h9Dc%2Fat9fgfWSdOxYuyTTe32KBRONhbWx%2FYCaHfJAKeS%2FpyuUlzPxSmHHYMB8gxntyjLD23s6%2FXs3c%2BwRYvTtsC9cZd34AMqzOBS0CZIxFbmiv1AXcn%2F%2BxHOEqgrUbsYFb1pI7N8LOf2Vg%2BqjLXWiiXcmbfUvQRKw2hgFTqX20qv1GF86KUf%2FKqM%2FWbcOr0kkGbrycb9lKAVAAGtknfu4RgUaicUDIgzgA4cvr3jdVjPYEbmtapIQeIb3X9njAWloaHBjzciZsWdPLW0apKy6GWkqsThUAqGzt6sRKLbJhKRanBsbycPxWFlRTl4xMOmIfHno6sTuYQITOyHmi8eE8GyY16HmiREJGjHYeN9%2BQggGXXHDTUp8ArIQwnGlknP2rew9oqDn%2FSeP3Va5HV6TOg1Acp6VWBYcn%2FAVDuDm8rccCg9yeQddf71bH97bZozQOAXGZlmL%2BkDDCxu%2B8BjqkAZghf60zi8kvwJqWkGORm6AJ%2FPOXq9g0tlisLJ7%2FKhK3UF2pbVeugJ7hVy0CCjfuEuBRWJCoh69yhR6AgH%2FV0j%2FiQaFLS1pVo0d3xrCKCqckPVATLpxu66JVbEUI6T47Mi9ds%2BtyxM8VugiM299%2FMUjlrsBz3eYCaYkSNxSO81Sxg%2BWtBw4x0t9dPvalEPJq7iGJN%2FXhrzvoCim2Nt5NbWZQKJo7&X-Amz-Signature=162ee83202cf91a4096471d73c8c40815a5a514ad765974c9636fb4abaccb725&X-Amz-SignedHeaders=host&x-id=GetObject)

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

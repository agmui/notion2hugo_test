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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BBWJ2XV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIExkhjaA1qw9LX6r2fwqemv2ofHRydVGUdYrA%2FcAdzsYAiEA%2BIirZd4GPdbycUAtz2GWWIUrW%2F%2BQYKvoj4BoD1u4XTUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLktagaCzZ%2FUoeslMyrcA09Iq5dMDQ%2FEbduZPqJ%2F3Q1zGVagiC2AB%2BJHfKV2kmopsma%2FFISeas%2B%2FF8oD2FvmxWcNFnUhHyU2v9O1i40lNAn8m1OizdfKqK2obieMznNzeKTycX4NsM81qiSrg%2F1vOfyaYhIADJN3AMddogp1dJXXl0CuYrwLCOtm2tdkm7JZNeICBF2r8yvwtx4LwA6%2FOM8OtsA9Cxoh%2Fwa6prwl3GfX092OQB421lvAoNDRDLjfQ16sHI26syGcMfyldpuyiTVSqc3XR093UhBFy5KO4XoxxybTMkPRR6p5rlpVSqsgaGR8WHwHkER8%2FmJzzywIyI%2FCIkU6Va2oDeMGqkN2qwNynAUTp2Mfy81hzC10AX1On07j62mnSwlQOM%2FjPunv%2BH%2FUPAt%2BYIyU0qm3I84PBRV9NbCGcxjdGXD7nXlHg3skIIZ1kxqTECHHGG2j%2B6usAHOGZwc2qH2aq%2FpjdtdTyiV6AuMBVG6aRWY41aRs%2F2YW6UYgJKiIisF36giPxJl7IVFyhgoYzN0X8XcPTEKL40Epa%2BTl1%2B%2FNihrKaSSFlDu%2F46xsJprwwSOzCgIhMdmpmVqLwvWH4agH91WBxdpgNFq1C4k3VKsusod99ilzGooQk5k1Yng7DC%2FyHHIkMMLNx8EGOqUBViaTYgNHIG8isKqwq1Tb%2FDQeaWL9sZ9ae7bRfAbCwF9%2FRUOXdZoZmr6N1NAjRkFjvu7KvFqoM3YslMlAna8VfyI%2BUxy7iI9IfX%2BhHXW4g8sHkE7trG5zlcTjsaAvRZhC4nsTh0hSmRQ0xqYjJP7Kqs3eXlp2jOV0EyXlXDa04XEiTgt6LYhwxS0gQ4VEeISH62vYPX5PoRl7YE5jHRpDp8R63V3O&X-Amz-Signature=8a7f92ea8a8dd3832398ae667f8f70651a3af1b03334f4b8bc0ee2043b72c3c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LE7IXHD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDOVnXCzhBZSrvChsuMI8Yiei%2FS3RF3i%2BmBAgpvFdDgOgIgSyFYLV1qbdYqLxxYfi55LgYWTr1kUUxxEtX6XzL3ypMq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHMoRZ09S3y7AxguNSrcAyJkLHOwTAKlqa03YUgirJiD5VdrKIsoD1X7KdiP3BghrHIPmlvht5WvjQgJuqS9h5kjSymmUsRU%2BvLVBhJfpqHVsZ2eQ06N2eqwhQyVZ27IoAcefzuRTdd55NZt5rCwpvo12AFLhMFrjOQP9b5BxPKXjvLYsx6DVoCazLXfpIrIi610gv0m9jYTa5i05sB84f9Ds95RJUMKceb0MYK2Qo0xfYsQCxlPapNkmbAdMGLCKBmlNJtL9wE0Nz%2Fm528pc9BdrZ5FXTBkpFA46MJldlXJsVCy%2FWjIrgraMLceMe0gRaVExW4CG7M5EKNVBaRUBXF2JuhbiYmMTW77Ujv5ooKCjekUEN4fmAFLDs7oqTSBiegVPxC5jxe66p4rvEGpZQwHHsmDAlEVM58mFXI8zzjqJFf%2FG6zeDVL2ivj8NAowp8loXW5euPngSQuT%2BLTLeEjT4FT9ICyPM1VAIZ%2F9ncofUi68jqLoA4OMooPQYdjLfQwQPbqEPTbovL4DWM9gIpe13%2FmASv4ydpjQdzP7mgp6Pi212KQDokS1sYEJ4XkrnbL3GnatkP4xioLgn047WXaxmfhxbYDZG5V3rZII9Nf%2FUvU7RKCZLGZ9P7vmWKgHOAU%2BMx2xAV91l27LMJzNx8EGOqUB%2ByRmuIvqE2JARopYsFHwckW%2BfdG9E%2B8eK%2FNI7IwelYNObEmIaGB2BHWI8zKiB5LfsZo%2B8dGJSGqcyicC%2FhKzPKsbSI2zxZpclrYYYzmsubeyZFPvHoohQTk9g4W17ZgF5naDa3sinfE8%2BZ2walZJdWXN%2BuiSFWBMIyFnPx1wVThTNdj3M0FvVxDC3JrFtQixkwwYUKkU8CRUv4RviqL4vxI4ct1C&X-Amz-Signature=b01f15ef29ccef5530aeef37c2964a7c1cf10609e6e079e2d003f1717fbb90d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

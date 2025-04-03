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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643G4J3A3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPxqwLfNbLJnUl4PiK%2BjwICBPo4irQT9W9YQ5I4EavyQIgMCieaCZBeVFQHQrgLraBrlFfTdum07iqWFTapSwHJjcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2u5HH%2BhbOd43jrkSrcAxBzbOotWPPHM23PSd8%2BZNYWhgRWLBK3IWuRj73AEonwu0F4cVgpSkVzXJMunkZvhfkPG1Zwnr40C2Q6crE5KYe9Sy70DCsKwXboU3dvEjgUto45u5oCZg7RxitOjvvtdGuPI9tAw6SHpl7rSqtFZq%2FYvNuI1zWKoKvQdnu4rSppgp1tOJIzKssE3teKhH1S6CfQNCDtEHxNzGaffhI5bhwndGRya4%2BajLdVWgBjpHUwpL7g5x2QtZbxVI82Og2L17LZq2%2BMLJ1NKdzpoNiZxxxLXSynPOVif5ZLGUVSiYTuD4K6RRbBfN8%2BGL%2BucOlO%2B3WPA5OZ3vKevhPN0OSGtgmEiUUHSxVFfnBVmEs3XvaWrTmznMV3wjQCdD2fCcCyjptaoQpvtNYB3vd%2Finyz%2FqYy05ZJ%2F%2FKK%2Bbvr%2FKuT8TATD2L1yHfQSn%2FmueCX6HNd%2Bn%2FCnmGuKgmsbgw0esS12q9FqJ85ldXmwNkQJlwF5mhtb%2BjQ2i%2FRon6zgPqjhTf3L7Sn86AYs2KcPueOIa5SFRhk0Te9jCGDjjNjkuqaQObA%2BsUu6FJ1YYV6dHw8LeHbiAdv2n2jVuV%2Bt1gbYSZVJGPhvMPZeMCZka0FNh%2FtaQi3du8yDszPB61UKIVXMPSWur8GOqUBimP0UVCGxxP9vza4D3aSwDNFHfhlX4Ndg5gxkYLXSILMlynlWCC8m2Q1wsvkkKovK7a89HO3K1ViDiLLygXfwnVRXRbIqvQRS6Q1K6V%2FUO%2Bjti5g%2BsclgHQlmnC%2F9L72Iy73g0gsAu3SY84ajKDOASnXiRAGMr%2Blsag8IydRP07AFWuILUrR%2B9HKTI9JkveumEl1Yw%2BLQNsnZ3G8hsji9Xql99qG&X-Amz-Signature=84e457b1556bfec2b01ca6c2d2169927b913b7931e4371ecd42434415a8857bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664COKJKMH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh8C7xmuJSsGuLGJaGZlgZfewWILMy5l%2Freu0JuEtwGAiEA%2FCatGbX8SnOFSYYO9R6h6q%2BsJmOp340c7M8yamGDzQIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfJ6eRjg4mfyNtl9SrcA3s8o4%2FapEdh87%2F96kEO8D1CEuxDpxZ23DJeqM%2FGB7wRDp3qh6PPn%2BJl%2BsoQLd5qjtqe5KsE2nneXoGeBLiQu4Yf4xjcmbfy%2BIj0y88n3iClar9w0P61SIDrCw%2FoQV6ucLvM2ReWIID5p%2FqX6M5OveZVaX86dw83fn5evvNQ168O%2Fx3lRAijBXm7bblSQ2BmpuCKr1foxxjldkKXRus4qfWcpJhkwepMHJGVSs5XsAgxaGplLI218e1J7FUw%2Fz7EEvZsabO13fjVSIAMToBIfqE1wvbC6Yuwl%2BNwyaoU0G4qGTTv3yh2DJLxFn5fCAgzFNHGwBoE5cRomeiFxaQn%2F3l%2FSbGiiNwVDfC4%2BUGcU2BMJM%2FmqPnxUk%2BfphSmwG8kWWWmsPu8F75DgxSko88LX3zU4dYmttd62908bw%2B59W1KFyWq3SKeH2dEB2XheOeJSpT99CcDfQCgE%2Bdoky3fEUiR5KJ5qdNHwqlBgnU4QCqbLFVomDaM3UxU56KDGZXPSRzTAwbduj2kWHwKN5WthcygdqVDf2dScBz82N9FfWn6TcTLzvxvZty%2BpiwAHil2S3D0AZkvEkzxmVrcWMJufNkszvSxZMnUU6JQAHVk2FyZUoXyvCnjQYalaIU3MKKXur8GOqUBL9HaJFf0Z0bpFmeAiCBgpA8tGzANmwCcizCMubve8YkzUpqgDdVTYZWqd5mfJ5bCvr6TOIA7jAiuvTz61pj7xknTLEdeb4nD9ldvUfIVxB7jmfXD9Z0oDaPz%2FjqrmyMMYQZlBvNW%2FspoH4G5nbc%2BDvUxSjc42GV%2B%2BmFqd4VYezQ4qkLsZHXBfpYGh97jpCCmgH2rX3SjkNKShWrHZbhu%2BVHVBPxn&X-Amz-Signature=3d5bd9b15da017f7b29cd960571c3d739267973b5b3cb081e5a5c8aff9c916ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

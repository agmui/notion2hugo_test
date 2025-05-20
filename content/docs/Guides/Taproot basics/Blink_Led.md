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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOXZB44G%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrrA72euL%2B13Da%2BG38gyEHY8PRNC4WZ7bpCGrCwszwGAiEApYw8nnFd%2FscTERzRyfQwU2s6oiKTyHSnzO2hQ5DSXQgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJm1BFFM9SisDHWy1yrcA4scFgD9g2LMJPOL%2FSkwH%2BcpJDnZSAhYF%2Fbjd8HXSgJw94x9qwyMLK6MhmfNhe3SjUHhTRHvk0u5xSFvTZKE2Dr0ByRym91ErTje13tvL63I88Qm7MUN%2BsIv2ynFH50uODGhR3cx2HiqHS3UbGJDiSuSLFSkFzAOUILpDrei9EsYuZaCyDvDjz54T10CK%2FuWPHMGLWGw7jbONsw9yL0nVDNQ9IWuhGhg9N1v148kCLC4BD5VenOMGo8zngYIDTCFK0GsXbTpX8hX5g0bf6hmPH%2BEt81HkR%2F6rBl6O%2BkeSdixCIccGekrqGnN2GuQJec4yXIvcFsKXQVlUivb6i2GeYn%2BvAdEwtYJ%2BHbK6DIozl7zF2NDki5hCv%2FhKufQL84Q0VZWNMoaYQ%2FYw7cXZyg9YtRfTzTEUnVCJeTvuogVj1j1XeNxQzKnZ2myZVOC6oSEIUfZznpjbTAQGZ6qH8YCeqzMME%2Bs79NY5XTUZ5ubdcMUhbchPMlNqo6josMN8v04kAWFlptGtxDZIAGENRc7GwsFAr4GWGexAOKSnBZzXkgzoljXLyh2dpcDvoWAOMt%2BMqKF%2BqG0QnCrpANt9jMI0ukNFvt1iaCDg%2B4MciueAWVXALCOrlVD7gJvDhS7MPT9ssEGOqUB2LRPmaDNCMdNtOSVUpy5fLEaEf%2B0971PdVqrXoCVgkAM98qYW48cJGv0XQpjkU2uc9gom1OrVsvtPJjtU9NEHiVFhvldjWZDdepsP4dkvJpznKGF2DvbaWAwNv4Qj3jYk26eTmGrp5QYYmB4fiBaWTaUnuvCbYU8cTpCw05zmQT8D9EiFUkPYDhg3DR%2B%2BmjDYFbqor%2Bx4l2RuHx0O9BuFEhpFiYZ&X-Amz-Signature=89358dce328ed9dfbdf9e5502de6cdc545174fdae1077ccc09eb18789a718edd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKNQRKAR%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVkiMRU6wBJaQ36pKJtSWsRSbMo4SbfbtDvzMdqV54YwIgeT4sgF68qCzwdB0jes%2BJAsfBgKbPdFZafigmCtw21ukqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxe1KoSGRYknLdxCSrcA2bymu1E55zdlzDZAC2u94cMq6ECsUQt1uDOdNKaUtlFRc1k06SsxlV%2B507DW%2B2hmiyBlFVJfgs%2BRYPLl4Qi9lSLJecM2UJL3ZrAndw40VeRMG0%2FdBSYU5q3z3IDBc8%2B33Zi2YzMNIW0XNe8UCI9csUtnb7%2FmK1Tgx%2B7jcaDEOvy382w%2B18elay1wCXgraYXZ9O806sBFtDH%2FO5Ymo8%2FF1F2YoS%2BGPUd7U8HapgWAMw2YT7OuU8Mg9KlFBN3%2FyWEc5wLk2U%2F8qW7SD1TfIgo%2FxCqA5J1egoVmsT9tcGc2sKmAC6%2FkjPBqGh%2Bf8uot3VdXk2Mq9oM9zL8DXV03V1dUCVs2FKUvo7yie8yO6AP7MBs6PfXtj8LZw0lRDxG4oxuYUDE7W4J2pdOgzMCDwqrqmBjlgslJwjSEG7IkL6qdRdR9LJCUBSD3Q0A3CS7CyU8JYpVcKzRHTGGGCFED%2BRvbQzoEhfY%2BD%2FPQVzL5vrRVO5HatebX63HZDFJhrE9jsKRPWK64OIfXAfrPAY%2B0giKOoY709RcAomkVLErdp9wuv5uvmY2yHISJX8voFsTl3hwHHPJsOCEUA4KXRJE67lGZF4Qh63CyP2xpYLjPUA%2BiKzYEtDP2ybec6XvQQshMPL9ssEGOqUBXhLNLvEbW48XXdL3VdoRoduSx2lNGlRwXujpLSaLWiUD5kpbmueEcqRM4s8YjJc5qa2MW7KEMWqvepTYVkvbJwZBZMoaHqeDvjHGJNLAb%2B1ebirlmebHrFoVtJKppF0X5gIlGcBfToBjQQYlYzz6tlzv0l2eQ10AR%2FmthSwMRQo7AU%2Bju4tPXScQl5%2Fszy9URugJISshkohV%2FuXiD3M41zhaGPaG&X-Amz-Signature=27894851a524a0e4155a79bcb82058c284f6ee6d0c490854cefb11f1255a577e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

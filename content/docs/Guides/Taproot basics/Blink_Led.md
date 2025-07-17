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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNZEVICP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCZzbZpXjrBjIdn1I1SywHRoeYuPwb4rdkmQU5d6IV%2FMAIgE8i3FuABqHmprrIJDk34WYALpLUhGyf4I4sDyGpSMZUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDC5zle%2FRb5f15m0pfircAwVMWAdrLFn8aT4RIVs1YX8A2W%2FTSawWQuv3WmgecuzIpy5G%2BE3jMplGhD3L%2BzlMp6Rd9hxSNcjt6qhKlyzV0nGIfb7CNO6KVFd8mKlPm0dO1RWERyOUVG7utcmqPCMd2ovCV%2BsI7qMWppJWMox%2FTbHw%2FieFEgXrPxC%2FxXII1e%2B2yzP%2FOe7TSQcaQJtVx2yOy%2FIra3kjKEJMyIc9j9Pv4ojR9zNYxHNeznqm60hYw06MV0xYUlp3BkhEhf%2FlXTb8R9u5sNj2iv%2Bk3HB7RZbvYDpHUSJS8ZyLKrlIBNoON7wzK4o5COTIKGQehqJspRN26ZgxMbvQ1QUZM6%2B7FL%2Fm7jpQwPTlkAICL8awek6Y8os2UQKxKdYZw%2FIOBg3ZbSBGqF%2F0WsmONqaVTBda3P30LYDjOykec5iQR5jTKt8VbR3tE2TQiyr9UE95atZT3e5UarxURCNl9%2FZAqEHvv2NSV%2BGdJ7WSF6geaCGdYhER0Io4ljtwXqJSdsYy4BZ3wvcuJuTaOwUa3humVasuqN9JM34tiAzAOgqC%2BKzOTeVYmxFzrZfOL8Yv5KwMyQ%2Fis0ergRpijDkv17ASBmRCXAGPBHSY9s1Jr9v0JOsX%2FSuYNVEfdW86E6qOmLqaVQR0MPS%2F4sMGOqUBTDoes69M7BSyp2m6opPbLRPlLrkD2lGNd8i82%2FyYsv%2FvKTU4XrRA61D7vsV0KhdMlPz4wty8BesBnqndlmBgRmGVNXVyJb4IRd9Jifn6vSEXLidavvWQ%2Byhmasl8jAkTM0Gi3dMN2HayRcRGVGbFPSGHLY91vqPt1FC4dRVjNPAZnbXd4R5Od%2FuW%2F6SuVUDekdvnPpu8BFCo659ujYIB5v2RwQFv&X-Amz-Signature=c0c564fdcdb57f65186283e088197e237e65dac151a9d4b94b74295e5adb05cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJDBWIE%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDCXRJlDt6j150I0UlUBTaFGDg2sgZ1j84dt3G1DQuVSgIhAO3ttZmW6XJURsaXdkXNdXTSvYEbpJbOi7w5Pahbdy%2BuKv8DCHAQABoMNjM3NDIzMTgzODA1IgwR0c4m8B0jQXp6TO0q3APSdla6UrIbFZbqGkjccrlz5ujNSecQekemYww2vzuEPgkKf27qGUzsb8caBaVG5f20ivufYYUb2Ul5%2BFaC6yib4q3pqdnBHJ4W4Ucg6kqQ%2FY96u6YFeTTa4ABOXhXNjaZcDyygNfTRLkCaR3ic%2FsF79p%2Fd%2FNxr0FtOksNyypSLjljeguZfg4F0o9dljrtyJNfQ%2B7V%2BkDy5NJc4aud9RBa2hgGfMSOueDyvrittcJcX19K1pQUbjBJnqw%2B9hdlms%2BVWXcL6WeJyfl3uzwddoqeD4JJy18FuUZ9fNjNfWkEaOy4OgpleZYZwI9Fhp%2FN9V7NfR27qwL%2BWl%2BRC%2B7Cwu1oV%2F9K9nbjJeUecEjlg5RWGCSUBJFx1ZG8NVikJS7APo3vY1qgytNoXx3HD%2BWTjMYDimdHUd9%2F25HWjifWaZFGlSYqRg57LFWPbsZcV5lbUlulTnYJOUCfb6Hsc4RkwEtwJ1SmR93u8zRxygxD7ilXg3imRklyUVkx2lyjQNChUOwO1wvqZwM8Zpx4wqyMuJoAAsZg71SWunk7ikzpZkcmFXDrY5j%2FfApCwmwTZlstJV6s3ajvrXbJu%2FFDzSf0qju1f%2BT0u3MX3GDf7yhSi7SiB2b4bk8Tt49Po84WeuTDTv%2BLDBjqkAXZcAhKgaEeSEUR47z%2FQRZ9Pa74h6g4pEvtACLC%2FMWX%2BSZ7smCXkw%2FsOhMGiLs%2F6Uv3yg4nGBA1cCzqZgoa%2BOKFPHltbo%2FBxSph1h1ontocnDIlmhLHNclKxP8fSnMdFr3IHFZN51%2B%2BytY1Zc4J%2BXbPmHfalbWxpjCKWYywdYkLLEiZvZdfAxqcf8gnsMRnki6o5HcKsh3BV%2FyOQtQNZEYHJj0Sq&X-Amz-Signature=11011b064e2d556810b6db33e7b6a437cb2ae5dad74ed40853caa1689e24c525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

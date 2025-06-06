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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDY4CPN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCxvrgsAzqnf4WJgVUv%2F6Edn7bBjW9tujP99nHpfwn6HgIgMiv8PweeiswVODo6Aaw44O3kAsln7i8LasNYAzWPE8Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIeHiZrbhqz1fS1jGCrcA3KgBUUM6mQyLG2F0s2I98%2FAYZlGORr6yG5nlm5CpsfqjDbN1onZ3IjgpZ4hP2YzfxA%2Bv7gH8DYnm%2Ft0odLywk4TufdNzoRe23LI2hF6c1z%2F1AaVZ1GeQqX%2FJWBshOH5sREgRql2s8FVQg2pbb9uZ2m5ctrlbAbQMF7o7weHiVIsNvxGCifV8VEhfoWflohfb%2FiLeIVg2A1Oj0ilmliACqsVt3Z%2FVk5%2BQlscqqKs0d6xTRqLttIt723bbjWohOdG8H9m5wQDIq51SYXBJ6kZYHKb7RF2JPyDNTlqF%2B5H3L2GnYRLoxdv7fEj03dOyAFihpsMwhYieZrvkjJoV59cxGbgBsRDxpMwxEV1LXZLQi30bIC8ClHBOV5ZbTVBfa4xBQPhS4t5cvdelKSJg5HoM74BvtrE2dzx3Fasl%2BxvhO9I7uHR%2F%2FFzH6rT6WqMiLCkvCgaTaWBeSj%2Fxw5LbH1EI5L2%2BlLxPCV4wjlNFNRPVpWd7tRd4ljUu06X4UyCXw344XVvUV6LoHn2CbFSOG6NJ1sRbDEKmmvCloMpjXRYme9D8ajjYj0e8Vd1F0b%2BK5eTJia9K7lI0cXGJiDq9JaDJx0r8CSdDTHMOcWMX4W9Z2oYYxYnQPxOVYQvORb4MIKMisIGOqUBaFuvFZJGCmcSPcYIKVGbuK6Z5shBtJ4f5cFXoxUPUdNIGr%2FE%2FS2rI3Ukwo7YygzbQV7vr3GCDo78nscIB%2BGpxlGLotpvNxJU%2BFkZucO7S2Q8OcbK6QfF2YQ4WrIF9i8irDXkF7jPxBn7VLzyrgmzPqVPRHWeb2xzjJM8cqjJgSPNmk56KGbgc4XdZMx8sW5%2BzQtwbAnM2cVpYED96For58OiiNod&X-Amz-Signature=0a152321987fc8ad20227edcc8e4618399344fd6a0243ea5e098b163dc1a6115&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3GXERLF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHslkymAjmuj8Wrf8ypeirbt0%2B5BTlfZ41n3HhTnBCEQAiEAvtA5blxirHEfOwH7tJzQCfr8pMNk2kGPIrcpS1SaNboq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLGI0pq70oenNIypmCrcA3LRPybZnqDvU4QwJ%2FCtmQ%2FykqVvW7AE5A%2BEyoAcW75O5VJdE50gRNj1S%2FQgkM2Kaa1d69%2FSyOh07Lx6G8Cs9bZ1PHCfFwUZQ%2BzO1AZIzII%2BPdoZzf9X5AkZoeQoNq5DZREiT%2BVqxh7%2BFChZ1J4AwK%2BlU5EehtvWiy7F%2BcEgFK3FBMtgh%2F%2FMKRHTK4aC7NkG2RBIQh5b0xMnqfdhXvv50FvNH5A0zjWQqLVXfnAwnq5zVtg6jd3DP%2FtxRLYnup2ejFIVT4cCR180qOzfCC5O8DcyC7T6IsmNrZW2clZb6dmZqFNzcGmYo0Invi1VVDcifomWmcRMmbIIC4%2F2TKq%2FoLvruDCiS23Y4cbJrhAM8k9vUm8iaSul0dUqFdSb0bl73qAxA%2FUk%2FGvVd%2BUmszMG3Vc4Q9UiqcoWMmkqhehdLMDs7GGhqPig%2F%2BCxw2vIKvyAlZ0BClnhpf%2BgX%2FSIjsQTtfFHRGvaUjz9mhYAXYXoE0FctF%2FEPWP5JlmOC9dp3qnCKrwX5LYYFn%2BmJoPqGfYgGvDiVSQExmMMhFU0LRAGpq2gB37FeNZRu6bG4L4Sgc8Gx%2BVLpMZtvesEUQ1mvXmM9krzIoO%2FQLf47Oj3eeExuhcEalwNQGS0vGbarbUGMKWgisIGOqUBo6%2FoB028s3j%2Bvdtey7IBMimvTkWBzZVwGwMi2%2FEeyjSSjUyMm7jkXm3D7FBO3NFSPmVyrN1iB0uAYkwMBCoHLOm%2BSfuOrl7tc3eFrm2X6%2Fn8RRve%2Bn1F8hgI81iqQDzCUNIuGDLJlExobiQ8SKWc%2FqIrJ4BFwJ1mZG7C1atE7rPC9bK7NH2MNWTy99g0iPaGk43VphxwWFPE5PtMsM7ubv9CDI36&X-Amz-Signature=2c1e5427727b41cdac0054046abf98950d0609c81c20e687d6ad74d135c139e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

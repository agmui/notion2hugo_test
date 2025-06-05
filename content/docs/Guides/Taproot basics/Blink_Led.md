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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMI4BXAH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD%2B1x2wX7khMpEyZYvhaXYj7YW1C1IouGSpgXLSSt2AiAIhAP6vXgGISe0m0VanToD3%2BfdAU2un2kdKnCTepxoXFEDBKv8DCDsQABoMNjM3NDIzMTgzODA1IgwIK6SCrjiace48ohgq3ANrCvyYzdo6n2CCpTdBUMr2ha2PCAOZ0b9Ti26w5BRHMdWXoaBegcI1hx1rnlssISFNsudnA7ScY%2F49LDP25N9JFZo%2BFqIGS5Uepf%2BTSxz7rlPRbXMbMsK1mPQOK%2FK0x1QKJEZnQ1LsVuBGjDdrAmI2Rq2LdvCNQpb9qunXfiP6GVR4NyFmnrenZJHOMERKPEKDEAF9c%2FXtYmQox6BdDTAFRDRSMHGo2vME9j%2B1KdKsszgbAbVb3c0aHCIPhlicxjfcUWUOn%2BY5WbylumVMfxgdVMfnfiJkCKANGRpwndHgYEKD4UOigi67yHj%2FfM3YspzcCiO81mBXFq%2FEKtHNXu1%2FGU5Od1xs2d9gfP2HGyUOZQRR%2BWsN9sM1cU7n0pzNvv6JAcwEXzMXT0lnsozgXezZqqZXiY9boIrk21q9H7aUMz80feUfkr9Z%2Bks03HR94%2BaXToFyZV7SM6t0i0P4D0ZJqJDC%2Fh7byqihgNYt8OmpOhCctz0ewl4Xjv7Gsb9QsVtODbt6tF3xHMSaxg6wQHkP22uJtfPCDEtf5LfKdb9ci%2B8hxtC0PWQltOUrBg%2F%2F2uSDmDLx%2F55zz3h5uRiNtaAYXr7tfP1czii7ibMEGoOqfmny49ZRMQIJgLen3DCE6oPCBjqkAU8j7bxY%2FL8NFANDMUNS2waMVWlrf0y5oiuS6AA62ArEyMP8ld8ubwEA9E6QLWi7s2D7KEY6q6SuJko9WAwjLBKsZDuFWb9tuUXEspfsYUrZjimohV9lhLXvdEbxP9YJlMVabWkbK37PAyq5p4JJrU%2B2MAzF9fUATHFr0puMOKo3%2B9zureWRNNmVZi4Sd6uJIKjg0vcBIAVyL10RdMrYH3f8KJ9j&X-Amz-Signature=f818f57fa9e1c77de8aeab3d3a5b76134117dac37072729a16ed4c37daeaee8a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD3GSEKQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDsN%2FNUZB%2FwQy9LCMuXR78I%2FS1XIAy3OwRSEHmR7ZV%2BbQIhANsRaJPd%2BxsCSG5SMXwaK9d313c%2FySbWpaeTmulkq0QaKv8DCDsQABoMNjM3NDIzMTgzODA1IgxUV%2Fmhhtd8vhGhc18q3AOE506fV%2FGhtjIOzlVlPEV46EYNyKk6eWdc70qqDugQ%2FLSNGdFAfqvc%2FydiX%2FiNAiM7xqyvL2n4E7YQiy92EcNsxgWxYwWaXMrxyshpxYSj6X90VYDr859hXS3erVMX0Sj6E%2FJ8oCoNnsTaVXKhA%2FhvXChJpOyGp9IbimJrcIgoRVTO1fwyPvliFlJSrP3PvQ5Ea7ZD0s6DSeE2Yh212qF%2FtA0vyp4qQNX8tDR11tbpjosiZUrVwfpkf4WKUEDBHn%2BmZleOjPAluPNH6MC5I7AxqG8Ez9DIOP%2FFO3BMtqb2BESn3WvagP46sYb4TR8NkYENjFUcE%2Fz2Guu7tXQE3OUtpR9ubBFfZ7SrC9zeQFNUuMg2fnJRhI6wNV4bB46OEguEIQPXofsHMam6iqfiKKTJWS7ka0IZjl%2F781BjgGNUOhcZtJ3aJvevi6jYUouafQMmIrIH5k%2BgHoC8SswX1Ab8iYLA4fxtEsJc0orbXRFGwcOzHf6Zek96ijDCMyi1j7dZfaThU2v9cUb%2FN%2B1F8XNxmGhNMGp1AoBJIf%2BqK4go27ghOLBwzVNW0r1h4N2OF0wLsLLUeVvKS6iarmN07uRIXxT8M1S9E78ckY2KnscAGeK0uuZ4WnX2t4W7uDCS6oPCBjqkAWHLUmf0qyeiiZeiZN6JzObyurQ5TmNuLJjA4L5dKwDCsmsrEJbo%2BOLKcfYfJv%2FzScuy6wC6k1PEdccC6OYLaRwtkAOxeIGDmPmdwg4zEJ%2B%2FchgMZKiqzyHRw%2FnbH53Ea%2B3e7HIu99MDXBarMQmfSB25XSWrOer37IXWwVXMxbRNMfagt7GnbyawzzSvWobqd01oKV2Lpv3gby3X07zHfVdMHxVP&X-Amz-Signature=8d1027e2f39b09cd1d2d7436f391a937433288711a731c3a593a4f3c6e657cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

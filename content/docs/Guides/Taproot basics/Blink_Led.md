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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HWDZ3DY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVyc8dcHhpTkbRMLx6aG1W86NJfCHACqXKKhsLF5xY6AiEAuQ1au2%2F%2FSWy6hjGUyR3B7UtLNZRX2zpFRDGyDpmenjgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcT5Hwwp87GhT%2BvPSrcA2b9TzanZcqAt1wyzpINY4%2F5FmSutDBmEdLNOniTe3sPMjEWkItAQwIFbpP9BrfDbOuBI1fufGLFLyP41HzL5X9Lm%2F2iJ7%2B4za2JnlFsmzEN1dbeiUdyf7rmUm5c1k1mm%2BpHoQcrAd%2BTNHok9d4VvT8x%2BkDooGn4cd6SorWaAUE626%2Fp5AauC38BcK3D5%2BNyrOWUd5YzfU94PZmtSY%2FkvwREmV44YfpsDkMebpEfJBvok%2FeJTE7PazuS%2FMukC1OazCT7qjn%2Bqb2Swn8zORuQiyIEGgV62AB11s5J5%2F8ckoCMxsOwiprguag7WzKHLprq7Elq7UTolp97u%2FJ4YFrzk%2BkvbAN1BaAK0N6OOq%2B3MwJGcNz%2BL2ixLswHhdYooS0tDWF50sRNxx74pr0H%2Fz5ssOXKc3IWlioY8FBlUqNLMu61V4JhROGfmA8lNPVSLWOqM45eUPimC73cf6YsV5S1PMmKXkWJumRv92zzB8xXN3OXlbYQZaUTLJFI53czDOWEay1vWrOcLe9U7y%2F0thqcbrb%2BjHTGLLzQfiawITtTDZt6LQIeyJx8A1ySBXDvLc9zQG1fw87KZYgAJ0IWdfWKfguWN3gtwIs5evsidEVEmYpBMPLwbNty6ubZT5qLMPyV9sAGOqUBsCIFj2HPDe624ruk4h6gQXrxD6iLKD44kkWLAB5ZZ3zEF3qs9p6yjnKkBiTe%2B0p3XE7hNFE%2B4p%2FM1%2FW6harym%2BLZxf4SyWhYNHWg1b0qrRCmi2X1OJsG%2B%2BT831ucdjI7UMpfaSEZaRDgxOy0nb2O6vYh6Y0oCw7D%2FBd7mSO50FToFuXfYnJ9lFPMXF%2Fgr3n3%2BBywOrcAP4UKi4IBhMkF5gJ%2BM42n&X-Amz-Signature=8ac5dc457dc17ca830bdda8c8b885237749019c1db7faec8c6131d899be0f57a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL23VB2Q%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxx8gYUa1FWMnjBjgU3Hs9e%2BIFf0oXTB4QJm7JdH3TjwIgL5C%2FXLcGU3vrS5YacLBzVrTpwDw%2FJpF4pNpB5SmuY6wqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdxk54%2FiX1W4ci1oCrcA1grMR3giWCBce07Z6zyY15r82pBCSVoHWYKGo2mV%2BSvZO%2BBB9VzH%2BLsl14nrpEGgLXgmDlBJF1%2Fu76jHB9PUnnmuUBjOqhdenMvb4ocqA5r7Nn6suZFPvxiG8xscudzeCCeQklaTE9o9BxVzFZyRHC2jVpaWs4OmlH7gmAIAHUli02DcZIHKXKEMaHloyME0wVBkZ3DuvPqb0a82utDq0VAF9WuADVMHgXg3zsi9ya%2B%2FTYZwWUDv0PkwX%2BndgPHh3O3ZGC%2BB9j5cd9vV%2Be4lElrVdT%2B6G9qnbzn4J%2BYHdDpf%2BmKTZqk9HSTLGztjW%2Fqu494ZEEO6fWNvGXYWpr%2FEEsoEvlhed60y8eaCiwciXPwPTh4pFA%2Fgfn3lAjxpGWBjozbKLXNKdyH%2F5tT0OwBl1Fy3IN2ZBIo%2B4RvHYKD82kRLbZWsputS%2B5DJG%2BTMWWA9vAVwfxYNigZqAYh1QX%2Fwz%2FOIfEBS59BaWGR%2FuUEm0xSvjGG1%2FYPPv1qI1yevFI8QFFw%2BpxQ1vA2ZjhULRYh0XhyWR3Ykk3BOGR6y1r1fMxnudPu4EK1AvFtBYOi2bB4lO8bpNOptTYkk4ecbgzEHW821pCrl79iva679lRLKLZzcZ1UqeObL4G2LihpMI%2BW9sAGOqUBpNzTSraSP6P2UsZOhB%2B10xnzaAAqFwjsojLkfeMo2FbuGu241UgrCRKWZN6z66zUrP5JYVoph2fuS9x3izSBsygRT5HIC3msWfg0%2BxFBwr8Ts6qswIywQdfjOU79QU1Zq6TKjQ2mBlcPa54lCUywI3lv7VmJb1Trcr3YkvHlLNdLI8OMRc4CkmLQokxjDFQb6NpQEaZ1Z1amFsXO%2BuEJkYOvnQRN&X-Amz-Signature=c82b0f29dc07985e2de34a88f36193401c7da30bddffcc6e686ced954b47a70f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

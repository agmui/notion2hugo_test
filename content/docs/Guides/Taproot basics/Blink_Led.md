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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2QCMIH%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDFkwGqzr40X3ihlPJx5y5pkJ7PNFV75BOE2F4DEBuONQIgYYuauKokphwYcBGSWTXF%2BBdnyJscODxqZKMfl6Q4NFkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBo1nrmBQOJhHaFWtyrcA0UoVgIQ2Gc1ZuPqfUPZS%2FMpBv6ymeJzIDM6JkolgVHKNTKRpGsxI89yT3SMrdvrDjMa8epLxLImUr9ZBSQSM%2F16iFDCYvACUdTVdnkMYrJFJB6y8PZL%2B7srth%2FWDVdQWqx30qkDFUeQ7xNCv9QvyigMcxK52NEsavdPyA9KWm%2BwZSauyGThBLKZPBkcZ%2FgNsVR3qLJMft6Kn9gPr2azO3G%2BHtMaoce7D6pY01IAHhZSqpvaDnkpLilH3EksFy7zyk3Ys4WJRdOLOD3ZepH3W3H%2B5sUoIQQUyyJIk8TmboxPqE0U7lVxmbPSL9NMDUjt6KG3HTMC%2F%2FSK9%2FPsDZhHV9aa6KX4n21AHVlJsvF5XCRX2GKYBw4MNDuDEgMoDilpCFIpEZIZ%2Fe36eJ6Td7WmIrBXbF6DMb3dO4Af4g0DI4XTsy92F3ILP6hp%2BQgPFvisTRdpE2w1FlkMJJNkP6MAvsmHAaKKKUQMHigU4OaFv6g9zfaUn%2BGJJY5uMwDMrQz0GOgSiBU%2FUlelBpymAnbxetuAPRZrHuiDa2mgCHbIp%2BYvKASStXCUrezaqV5EP3D%2FwP32o%2FFarhQ38y7Wnp%2F4X6%2B5Z2w8ttMt0J6OAVr2NMEv%2FNkNj6U1C2An4pS%2BMIHCv8EGOqUBhel6bi%2FxWuVu2oX6rlA7xR23kOHen4uXFRBWNkXHJpilhzscr9OU0graAhh5oqOt39NhD9mrbvMfQnT7ZO2kDlFZt09h7gIPNxK%2B8qvHpLB5l1FDBmWnxsAtCravS2Q58JtCaU7g9QZk0a3VsZO1Eh2U5tQ9uGOVNgJrsqjMTOjnB9YXyfJY8I6hSWDjJfZQEQwy6gZ2dCb0qToYRN7TNEia8LYw&X-Amz-Signature=d6aed5e769689db314a1cfd1fc639eca8c865a97d4497eb271a94a494b71cf29&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBCYRFNV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCID9mRGSm%2Bmiv8g7QEVPo9Un9eU0jj4gCp2cpbINd2NJUAiAx%2Fxk3aaHWqrQw6i5mQSrB%2BZ8zl2rjYMqK8hpppFYdgSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGFpsNh4jE7OjDJMKtwDzTq8jLppK9xKSqeDR8BVq2S03wPMPzZESrw4SfBvXOn3FB2nr%2F3WUocdCTRfG%2B8z9BeRnpDRAkabdPN1URjcyw1t%2FxTyxIPjZygsegJw%2F6prw3PqqHNGVyBumVoCaDaIyD%2FNlX%2BWRnGrOcdA7l1vTBvrTEX75o08qINv4yD%2FDQa9eWfK0A43ePvmSPGJe2kRs5ftr%2BriixYb64BPjyEMDsLEQC588qcXUQHjHLhVfB0C1kX1psyip7As%2F5ULwDRqbg3PM%2F96XVoq3FAZ16pKdJjXJ4aKyTa%2B79qI6XNu4UdW%2FGqTpD8hJTP2UpaLIPRd6qkdDVtscxxUpL%2BVqerqigh%2BQW2hpxrxf3ngKswq4oUOibmyb03ek6%2B8GOoW9xgQ5OOimYbPzf97dEaP3xLUGBjJLzQWgoSfL4k9Cmd7HffOBT4u2CsjlwCcpYgdgKRp6I%2Bg2sxpp2z%2BpgqZ32iq1n1SLpkXTadOWagrcf7IzVF1czIF6jmiHYztgLq3xg3qU77C3%2F%2Flz1yjFcBI5PopOn3EIapStS1UI72rreSj8xSzEZZF5pDqJJ%2BZNDsrQHJVt7lgdvcEQMFJDSAC1FAVI7uFuY%2F%2ByUzgTcma9ZWiC%2Fdl5%2FVbCSPm0LqGGAkwu8K%2FwQY6pgGdJVDFBve5DXPvc7ZIwfggyECv1Ao5OFUSxUZY0zki%2FWYzogGHfQc0knIVoG0o2Gajstl3JxOb5xLhL2T9c4I6GkN7y6W%2BX3TSgojv9Z7ldOFtL91gG2TBZqRcfiM7EfpInD%2B0%2Fip4wqQHtkrATwqNTrv9m8Adx2d%2F1dEP%2FVlYmbhfOzxiilWnYXuAcIgiRyxewmgt2C%2Fhfe3MtXP9HMiNTzuN8%2Fr9&X-Amz-Signature=3cf67b203a33f16d098a756f0ed6feabedb03ad8890b6c0380534e42a981f758&X-Amz-SignedHeaders=host&x-id=GetObject)

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

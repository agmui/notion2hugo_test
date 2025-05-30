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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNPUFJK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDq0f80nf%2BNENtc6Xmlb2WTUsnroN6V5DjrN1%2FF%2Buuo%2FAiEAhtYKFvzG%2F6f5iv%2Bh6orhQFQ5Nwh0MimLeaFwQXCK4UQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpom8RcWt0H6O6%2FDCrcA6VtBfAL5pNhCg63HUWFCdl%2FkqBQUC5ZtWWXRdv6v23NbGdlviYxw0PXNyjxyyUmuoZDB8kZMmvo6qi9YfAynHiwWBwkUQ8ALqILJR7a8LDkuW%2BV4vcXP%2BtdL9gvvb%2FqjoiDR9liuRuW5uAezKUIDtvhG%2FTKF6xWY1cdcJN1um0wN7pRIgKdPIT4R8YeapG6r9BSp0%2BljDGgMBq7L6WwM47ExBHTvPrm70YkRvz8%2B%2FTOqYBM7TpeHNBlPbUmwq2eH80R8gEb0fJR5C4OudvyD6xJ%2FDyytMXha38kgOdIFhx8wsr3DZKp8O%2F%2FiGL4tg1VAik5PJY4avFUryrr5Yk928NNbf5noKclBUTTixCGOFgEkKhxLH5BaT0X3oRcotCeCZ%2BA4rwe1KseYyKSS3KX%2B03S9r57zR%2FNj1oEaiz3e2Nhy0AzSqFS0L%2ByZlGONQOSJmAzy9LgJTvBhvkEGvVry4w7eYE2voOxm4vAZpO%2BnyhBCClGfnE2k%2FVaQlQJnZ9fzz4gH%2B9w59yHMBrrP0ep5%2FhFLFp8W5KqMvs0LfU0aoGTviddHmvNKE9Rg5SoDTdLI73ZtDvI6AUDk%2BZtW5uCv33Vdrs0kEapanxeF%2BetdXZ6713fS8w3s6gwFeTRMMTd5MEGOqUBEBKqWsIJ0n%2B5bT%2FD47Vi2PKuww3Ssn7vglrtrPAIPDCSplqfZ3I5A8%2BrHvJ6fvAFdcFhFCFnk1GWzouOC%2F3J2g%2FgzCNZDFwJdcftsi0%2B6Dy5ewk1owVodbJQef%2FXMuzBND8Jii7gLXE9FtU7hcMaHvKOh1ixFhng6dyy29DqXZV7yNfSvoSZ4jeD%2BEjN4JFwUvDDsmLGo5S82q5Y5zzGZUFaIANo&X-Amz-Signature=97dcb7a2a309f90d12ff201d2cfdd5b02cbc431fad154e1972cea311a8ac390a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVQSU5W%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe1APNh4HoJJgytJpNcBVVWwneE8ZN%2BPHeQAPoVwLiQQIgMLroSKrSlvphbdoCAlpR1jNKioTRrNQ9SAWb62z8bbUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYCDEWqntNYZdQ1AyrcA96aN49YLRAacfpZ30xBPnietIsZtPWviDiBnVG4anGue8n8evpJHVPTQcu%2FnWm21h5nF%2BD1M8dmu5t%2FgODVX%2BFfmHUrhBTu0PYfyGrAHb063YwGAesqukSlVK0kIuBSkd3Waxz9FlwTVhGTKr6XCNxFtegW1CMffDn1HDV9IvK7O%2Be3NIRDgTriWuUmozYmffIu4id5GexjZjqn%2BTMSSu5x4p2dh2KJ%2B2Y1U1BhcA3RXgYY4VZbfnS%2Fj1qDoP5q1sVrZ5kl3tMi%2FLOafhJGWyc6UULXTxDkohe6a7LRE0ShPjSpd%2Fj10%2F%2FVHO4WMEEyhdREFYXmO%2B6fuCxohmwWFRaLoLDXx8eTNe%2F3MRKy8DebsYG12tNGb%2Fzq9qoR8DU69LPDjsT0sUKDiHDijUfqfk9Ddz97%2F1gq0YCE%2F%2BKJ1IZuzmAA0GRUuR4o07C4ZEVhQ6Upn8TdguiJwrTUvU%2BIomnCC6vREulBpaqyDf0j6z3r1Eow8efZ4JCzRM6sIx9UH7LxUtySv16kn%2FxZotDPyWLMJJXTL5%2B1El9NhBnGWu%2BmQIRdF1ICPH2tdJHs6OZqvXj%2FwMpD8gMzlIaIj9zHhE9MTESB9lLDQGAbrPCp2evxGEjQ6EiWox4gnyX7MLTe5MEGOqUBBohvgw%2BxzSFJl1JAJaVp%2Ba9Z2JX21CKPt4sa3YSJrWFFCpuWEcz442i6cvGKWvBapGZ%2FmYQ1aZceRjBlLG4YuMYX0fj82skHX%2Bu9WxHh%2BX5bZmAUS7JqgCL309PJicXJIUgedvUdqXgFrwpr1526NilfLFX%2FNay4oryFgdGko9tpV%2FgiHJWCXHbRRZSheV7CJu8YdOC19NSbdcKSjMHT5j3FlE3o&X-Amz-Signature=1412ccfd224f31fc0938ce7eace73ea4a4cc94f9d4366ab3e48117da052e22ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

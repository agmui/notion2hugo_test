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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDD2BZQU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMf3AFS6gu2ldC5ZHRbpVcTk6Cthzry5BdvPAVfTimwwIgDjIbngFD4hLR9at%2Biin%2BhWaILIAMuxnNwvIqcJCjT7kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPAYb6hTpZ2U728%2BoSrcA%2BANJ53%2BGVzghuRom8XJirgxdozrQ%2FeJ01RvWp%2FZwcYAabWAFXkOxMduI6l3yerjClTcRrG3qYElPCn3DhxqjvUbmw4oSjOyAnErqWzWLhY2%2BjYtITEYxMgQAjFEHH%2FCLy7Q7KRPZNJiXvmihl0XTTSdohybeur749Vx4dB0Z0UX2cHv9w3yAdOdbtABUsskekuSfNaSIBMgpbkZCXBfPExhjCsyWGv0ZvOx0JOyl8laYXoXoBEfit7bHFNxr02%2FZXRd69uHAgYQujQ6d4VcZ9pwdeFueJ8BOcbx75WokRrPDokzj6CJwcwyt%2BbHIzlxjX4VJzVkmF4bSPKkLsJCEEEACR%2F2w9B6A4GKQ2AITAjxz0SBWLQzR5OaBw3PO5lzjvfh%2F%2FQ%2FWQ9BsknCYHPAwE6JXgYw2RQdBPVL4zvb0cum13bLqRsNZmPpcASRrl6oCoZro6RhJXg%2BlVabyT9AnpiorqGDV%2FmO73wfhCNWNR1dnIx6naGMalGR6kk2ZEfbLZCcfFErMmAdOEABpINwWIeY4qG97hntPIDgZF4nMeWy3562al6ksxV1sMHZj05xlqBrV0yeOr4xE4VPSvZsgYykXZG5VLN6BzoyvPy6KqcLvKPEaW3k8Cg9dMJnMMa8ocEGOqUBvsdLnn7ZThpk1nYa5MRGhkjSU2N6gTAzitDfEOPpJB5Ix%2BmnWdKwNyAjNNJXX2q7CUNk4DcxjPPfPw3hFTR33qWIXOtgUntFF1fDq4gWduRk%2FuDXb3MfMg0XS1XxJI7XXNmCrD0%2Fm9bgzzxRKXkDWtT1Cle8IVWJhFeJPmAE9sc%2Bsd6ssMtXeUOmbOnwc8gM8NXUGmASdoWnTEte%2Fi5m7HgLTezP&X-Amz-Signature=222133e484a18de151f576e8e032399a0ddf56cad4490de6090cb2d0997b11d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJS5MG6V%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwJL6f52K1hoqNahuLNz54yEMCfr1EWTcQ3SRHuNHipwIhAIaPwuh7EI1EUU2snWSPtKQw9AkLULJfeUhgL7UWn0Y1Kv8DCFsQABoMNjM3NDIzMTgzODA1IgzTrF%2BhayyPzeXfGngq3AOSp0WXUXN17x7lanlAUeY4xCPQPqMGx1BVY3snvmntL1%2FoF61w3UK94zDMU41xAvps0UBNKJ%2FKk8avFMZPZ%2FpzlAyviMezhGspRxxFJxeE5jFqL7CGRPT25fh6vg%2BznJYlCsg5QHGdyTJ5TVOwxk4IBQ63SslxCh7msAnerxu75ixHeQf17KI17eJibBUNUKQqNAR5VGBImL9iyWZT%2FphqvDjCmqBIAE1Kns7N2acA8fFz%2FaMPFx8qDyWFiSRK1qqERMLd1slrlkB%2FbSxs8JotuO0xuePjvdZTh8lNcP9N9UujrSw83%2FT%2BfIoQuZCxEU4%2FpiUN6GsQcVNSOkrgYwpvLU4Q3HqlqXr7%2BI2BqjjEj8IC4M0exjaIgaMealhqP6aGmutZAAAu9HgAo%2BzbuEwdlIZPytWbhv1Z%2BFhdH0apmSBR%2BVBLIPlGihPiQlQwtAqXcDqtjFCxmpY0ZuAvkoHb7pfLrJIQPO4a7nzne%2BrEFrn9cVq%2FZaXeqBZ0DGYH7Y6fgworE6kmzek0sVG9koriQX5k3ZQZFgFwXk5wYQ254hNo7QJPUpa%2F15sXfEqTf0W8CPW1eXOjYUz97iLSq7WZ3RBYqBoW%2FhJTIh1u5aaCVFt7R7e5%2BWJTKR3SUDC4vKHBBjqkAYj1mMsDC4kYC0asiqc5fwAj9Hpyw%2F6WBoEgjlGiec8kS4oUYV4UF0pUmJMKYfJ0JVmQL%2FVGsm9Q%2BE%2F2RbY4F%2BC38%2F4sdRzEam7PIjVUN2oAP8eAyJcHcSSrpxhVv4QmHoxZShvVVj%2FqPT9PPFrb7v%2BmAvmoZWRuCXuMGwEUYGhMu9YPKGVlg5mOWsI8xB6METn1C4l5O16fAs7Hu9%2FCnDThzXK0&X-Amz-Signature=72ce44161edc74aecd854353674a4e2505b97edf1b9ce91bba8a4269fd885c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

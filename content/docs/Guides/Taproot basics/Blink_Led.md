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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HWJ3QUH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEETZNYUgbrpD1KXpUqJHWmAUYjP0W4OqhZsbzSbzaiAiAiNAvQ%2Fd%2Bm%2BroxoEsSm1JNhW1BuVQ%2FhoiEaOCjhC%2FGkyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMDyd3QSzeBu5xZi3aKtwDI2ekhwIoMP4X4mIjbIGPU71b6avSydz6BOIXmyN9NXtq3wpmdzSVthBCG%2Fcig9zbN19H5v3DmMKe6B7XsDTDTNJvquk5RhJM9miq0J6nKeyA%2BeRpti8e7ciIcyYorugo55kqPsG25zrif8P1QICoPe9jfYUnDJUadJyELxEZNggGIDs2RbCg5BkPv2xmVdSTAf%2F2r%2BnJX4BhGWRxKzMmbeG%2BGC9P%2FBy8gK1a%2F8PLt1vj0Bk5KhSypgTOGbDvwS2AEpk88%2Ff2ZhyRjHtSdIUQrhuwRiGxkmju7g%2BpbFTEqkxcjItLlmNJkPU7BuS6tPqRI03makip0WaABuUngWY2ygL7aObVwPG19iOd%2BgQLEgH7v9vKPl0QAow5EhK%2FVyN7zIe%2FQE0bl4%2FoAtYyB5Wyqd16PJrkibfgWHybVbs0BG2foph1R29szt3C3ySR%2F9aPN3F9yrLfcngE4H3nCmPrE6keGcIcx1yV377hhopZIsHYdQxvw1G31K44s%2F6RBmgfM1rjn4GGRQgaQnC2HbcTolZye6DsIf42ls0S1LUnZ3qOYaSlCWirdWm%2FWOpRk%2Fdku55djQvVHS7gsy0i1jNBNcwBCCZTysgoHezvsobGCZJwh1L9PoogxsdYgrkw7O2SvwY6pgGVTZr8WPZJqIo9d3nK3aP9bSJBdlQERyBH9f8ohYXL4wOGrE5pPAMXFYOihUo5BIpP%2B7ZoAjhcsYtlUSAZqFgVfDJIYvt%2FSBVLovfOqavT%2BBFJ5ch8nBM70dY5RIu9TiUCOBrk%2Bqp%2Bo4tqU5CBon7zjxNJQAHrn445tOk0PbYDnwure8VueD56c2ihaS8UtNP4hWZnUC7wSxWGySFlaVbDn1teVLkq&X-Amz-Signature=93d79540bb0b2baf891656e7d482c9f961812507ee5268c54431ae0a7f8b8924&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZG7LPZX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFW3%2FgFkN8OFD%2FPK4jtP3D%2BXfFEb0EuzAFKfAjXbqb0mAiBzXJNONM%2BtmJUFPebzGYZDspp3UTRKiKXLBlODVPSS5ir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMK5DUQPICiJa45KDoKtwDkxdVDWnb8138QR8p6vPr1sOOqZjVIeM%2Fs0rbXgNHtuqFPOeVKsGGVypx%2F7OC3kpexbtK4mX0SW1m3Y2yJP57Kxh60c5fJfZnYxz5r3D0jloxRVHek7EGGEjAuLKGFk%2Fob6gWSvsceVAufOFCrq7HpaYbtBz564avxtJICmO4c5QvcSv7rX0zvJNwaVtJ2BdedZvr0Xq%2FOzIoOdWn%2BBeXCYWGfMun4isomVV0wZ4Rj6OriepaghqCgKe9Si3e%2FNJREJqDNdkv%2B9sVYPoF4lr%2F0BvAhVX9%2F3I%2Frux8hIYap7CQ43je9XhIOaDH0W6RXY0WhqtCt9x3TkxMZ9kNT5pMPcYvIZmFvF4Sw1drngzedkB31oAHXtsVbliw9ZLADTKpfKFq9EV0N2MNe1b4GRNti%2FypQo8KkKmPtw40tDTh3eqY0voETDcqMlv1Nwb2GUrDCNmznqqvOfFG5BRF4efRdnRko6F0KZnLlhbWwrPuuZAL9iHXWFxkhAfl%2BpStmqSomzPI%2FzfDYmL%2FsLxsL8vnDVC2Q3%2FcM3lCD0YTnqBW0FpTZs0QBUkiaifuZosLd0Tx2ExzK6BRh0lfEJSDTXDHEhW9Eb%2B3meBXQoB%2FSZjV9%2FOdfGdA0DpleLm2EoowoOySvwY6pgHYWSu%2FZ7M%2F8F98o7FfCvnZbiDyb%2Bfacs1Tp1mpvQBEhxai6aPsABCo4f3GJLDRFBGvVGjckWFCRIxoq1JfWzqptz3MXiUI3f2klPZCWnms%2BxBAnY0X%2BJmt8Mf5FlI51J6VTJkff0cUyeLqGxxJaO1sRbxMK%2BDQx4BFxVEh1wUKOUoM7Tq43PeRJ976gSHBkJGTp%2FGAtPj6SBsK6mLo1xY9ZDi9NFCz&X-Amz-Signature=73d5f519906125d9537df4c1136e301415d55ac9af0d5e3944f0215e47e01eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

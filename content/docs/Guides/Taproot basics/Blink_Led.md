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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UJEEWX5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEUIZNrX0qcwFBwHUW7xQyHWBYmAZv11wF3t5R%2BDGKIoAiEAxTKWqQBJrEVmIJClgg3OdthVESp70JiTow1wXyCKGswq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJxFvXgABB0TvOKpQCrcAycCnxK4PMPYQHKJWnhWb0X7prYbzU9xxe1vdRrRPWhD9Nwwq%2FOTv3pBALbj7UJ%2F03eIUrWGNli%2Fqk7il1RI%2FMVfKsKjRwUD0oFDQIIP4EEImy2OUycJMoyHbt893L%2Bwo2sniqiQfnMmaumxbB9dHxV9MHh5UyFla9onWCq4P6H%2F4c7%2BY7yoyN3TPVgYqXXDRn2voaJxA4fWFFQ1K41i8in7qyG4RUIkGv5snVwbXrJ7L%2BAJfwgOsdqzG7QNUTuHSGO17hGrmzayIEtw8hdfBhapCQ8Jza3ItucT7aK%2FjFL7pVRaHeCKhNAaqB093UuZkfpOiuGha8URxll6Jrn92yi5MDj5njsTI7g79UX%2BiW6ThpdfQVKFfKDHw4XMCNH4Tk5qjMblvDQxauolTVtyLGYTMr6zhbzdi2%2BU22qTgBe8MTe6rzpjBRhsv0tT18L3chiMtZU65HK%2BEYmszjxpiDydZTCWaVRKlo4FRDckCx9c0yELWuUpsCVG55pF%2FEiTbsJZvMBX50BypVj7h8cqXt8iPKys3%2B5UvMvFfGAkv%2BKsacPceGfurM61JljBaQl7rHdIVx1UfVq8N%2Br9Lj4h%2Baf6zTeXGQbvc8ZocHqgm1UYL2WbyCfZHgnsCLeqMKXf3MAGOqUBve4vaML5TfFQObYxAmfE3UTDS0d5i%2BEIpsCtQhnZwTrFc8eDlZ4gQDQ6lt0JMPfk4c501TZe7D8zthaPm%2F4PH%2FkEzUBEyfBkjgfLp6VDstIV0XhJohaiE2y6vZT0esXq7W7%2FNAx1xzt9iwMXHSi2LYNbtEEqnYbAHYvrCIGJOIlKtV3LCe3JrSyOSeu%2BeyE06K3PMEwsgVk0yAoUYoS8%2FEdLlmOH&X-Amz-Signature=d6e02df6560c74c4f61b696de2e950a83ca9cfb1a1237bb7306aa91f639062b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVORN4H%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICn823gS%2BLlSTbymE2mV72Jiy43LmuLQ6jmfr6BUsI9RAiEAsY61zGk4%2FTkfMJEFVDmNq9rTnZXsuoNdasWlomnzIOYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDPtjz8sj0tz3AU3QgCrcAxZ494ElaqvR8xzoLKLnwx%2Fmr5yXfVf0SyliNJKw90dTtnUW8psYyNspdGBgfXTXzjopk8nY0l%2F83GnDt1bc7Za9D1o8Z5ka4QsQ1ku4Syc3xEf0rLb6E0tp6lc4mEOyi3Ehyb3rYu%2FoD95hwudcu8Qbgd5gMQ%2BXHAtzCNuRRr%2FR4wxJHPxkvNVXeFvK7NDwqkWzVlc5CgDFnaumFgRiKBHNOQ5Fb3w9r0P1FOCko3y489mvt2mI5RoLRwpNYRj9RsemyAwNmCbqVsGtsUvsZmaKAoVoBryV0M8uwsext%2BUgVbEIiMg0g1Qr74qTGhdW8oW8LYpjssrC4A583hTd07VMdKNjcsDFedcXW8dOwL4OMPJ2DVTri38je%2BgPi7IndzaEUJRSJ4o9oAi%2FEEBKkkO%2FmN7LyBk8KX361yM5TVq%2F7A8n0UskIFrpDVc8C7xincUAiu39D9AvOFWXmpglyvxkMSUzGoDTZR7fd1MYH4IZNgmfsCMiLN4y0weMc1ZnznjaQWdHxEFUj5QxuZYVg%2FidlD5ign7w8efWJCpFgba5qVdRqXeWSpwbJijwTFAc35nYhHPOw5QNqlV2Xo39XcoIbNnjZ7TZlSbXJpXKi%2Bn%2BjGkdAOzmoA5fGSrUMMaO3cAGOqUBkhRleKMAe5l%2Fj1u4PDJOYL%2FiN5JUht36jd9G7A9uy%2FkBMcZgP5DRrcVY0x8ww8dztTJvsvfOwzC1HWEcg3ohhqGeh8mTpdqwofHjlo%2BILAgKcWi1Ga6wcvNILpqfCfdg%2FXGfEOWeJQIuxZ%2FBBgyOvp2IU72Oupa0KfPk9a4Fh3RQMnGyR%2FOOv2oIeQdxjL4C53mNXoms0pDQ65pcYikDxfvMfZX1&X-Amz-Signature=03fd1d094c2e5d2409918dd80b6fd7df38a9788b23718f81711b9d620a3e056e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QDW5UA5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeoMNXEU7JXjMXgxBVPtik4fRY3C%2Bw0QK24gDA%2Bfpn5AiBdC0UVWb7lHXq2bDoa6gbcu1PyugvW%2BxpkK2owGr6PqCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnd6%2BGRjNhtCCBFfZKtwD%2BbHaOdGwPPkfaUkuXrJ5ccM7BDkeMQLakwsUXp2JGXoiRnSnQcpNhtxRMx0g8BOX01zXOQ3ZgJAdG6IuyvOnK03VNiyi9WiA8KV5OPL5yywWspbdGQzQ4IvyAEaB9SOcpZAkTQOxr24X96wJUeMG3wmx9P8wL9UElvlCN1FJezC8HXjcBYh2zcpxFWIeEm8NcIvSGL%2FkR4vUXmXeHcpODPsc2OgX%2BxSaHdFvcEXy%2BOfS9ncBZXKuLv2PRN%2Bspsz0QRrZksqBq2cQuDag%2Bqkhmv3KeqYKnHVva6dPJbxcKDYkrHBPqVJap%2BO1M2b0CjsroZarkS1eraIv6AxnWe7TdBVBT2%2B04PLrWYgRCQN5Tsm7z9ASGmYo5zOasogXSPZIouQCo14%2Fu7IENGWSwfTVYj%2Fo5xwcIRsBdK44kjMK7PMXsF1fj0g780fSl%2Bvnsgu%2BTJzCV3DCzTxlXL3Kqb9jswxRLG0tQk5urxH6uLluIdul00LJgUHD2TQJq5fFW6waFv7HrQ%2FgNZUfYftalOfvHZSNfcxZrTgPLl1vRJV1A25GJzOvlrrdiHyh%2BIh2KkEq%2BIoHtxGiOBw7ckDRxivLRU9aw53R72Bd4dPY0Y6eosgfgQ6hO2FcO5LH5sgw%2Fq3ewgY6pgH1%2BpkBR%2Fp6RgqdFsqxEYrMDjSoi5jdLG4JZJYTwfk25oK6huQ%2FzjCj9LyiEwddSLR6Ee0iolQ7U7%2BxhlLuZUVmhYhJE2UUvA3as%2FtMCuURIoRdHECky1mr8Lyo20%2BoDP7SRAQfD7U121WXOPMcQOsrlqtKnSyRvcgv5C2smQe1ciJGlNTjO33Y1Mxysvg0Tqr7Cx%2B7WxVATk5dpivpCKTpjDCHNDfQ&X-Amz-Signature=0d1b686a14d737637a2e7512119273e00a01e2edf48c00b2b8710153d2f6ce68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4D537X2%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvDqnQJtoMxOPS6WEYo59xDaen1jH1NOh7oWwx5bVE9QIgICv9B1kr75EwoptaExl1Z8danBhiJfvd0%2FC%2F0wZZv%2FcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSZohwvo%2BiWuxs%2BNSrcAyaLQ9bjdtUFEIzWjS30jbakUkrhxmQtps9GhvBDrGj9cr%2Fxt8ZJ21EZRPAHSuFpcPnsXMQhk7ssVIOShfX6ppN6PULB2S%2B39qK5dempF7TGMlcqCsralq8ddLQZX0kdjvfwKiBqNZoIjR3dl8zQGlrq%2FOG9c%2B2bzFL0VwkHKRt17fNhGLIDSpt6QDvoNaJ2TmfMyMmMbEo%2B1%2BOZ6R%2B%2BiqSAkuxgPrbdnIQjPW8uItzH92AQ9460%2BKw13iVTLNDgZbgmwO3Sk5kX%2F3IZCcPHcDNrYsqiYKliP%2BlHatFzaGlFU9%2BYN0c21%2Ba4C2PBX7s7ozXxJX8FYmrWrGgkgRc9Plfy2ldzwd12Nq6mG3El0H289DzH6PLAGv87Sn1%2B92yRUveDMKVpmibVlnGyKgqUn1LspfUtt612qDBa%2BNG3XjWQ%2B%2FSQfIyuJIXgQFIjo2nFoqDpz84fpDyReADvVQcP3RhyClE8X9lEIZVbSGl3Ku1X4OwH%2FNmmRzoXWaETcQCBUN2MxPhzhItBPrZpNPzVWBaYJpqm0oIvqRHmLO1cZNszJVj8DE9MJEFoJ6YzZMIbRFLLBvt6DzEwq%2BzSS%2ButD8SslGEhuq3Sse1ZCe9vBimmSGSy3%2BJtSrCEZsLwMNeN3sIGOqUBbRj3jEYcCEwLAbqwZ12gQnG0ln3%2BCagM57STiwt0cpZp0rAMd6g5w9Q06y%2B%2BynzNP5fjl37MnR0IROfFtKK0GlILDzHa3ULgcornL6n5SEWxP2qBTfsLAkeh%2F7mqw7WmOVpogeK0oWGgqMW7G0plv3dglPe9GzjfEZ6zz0G5R5PyBK03Z76En%2BXpP4X0kTuRQ6kY6A7sqU0sZF58h4jS4qHijAgd&X-Amz-Signature=e763913c982db2d9fe5325d509e3e23af92ed1135ecb7205b6ea65e3842f962f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

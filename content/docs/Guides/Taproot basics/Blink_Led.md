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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F5365K2%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxlHxdg2I%2FXhM1oR3aH3A6AcuWLUqmbKe6WQHYY4cilAiEAjyhTMlVE8ao5LM2W9BM648sBzFDT8HZIwZj8DImkavgqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxNlubru6V1M9YhkCrcA%2FYO9gfUfOMvNqvS%2F3YcfcknzgEKzJlu%2Fk0%2B7uEI%2BA5G4XxR%2BhgnsvO3W0lQzDbjEhY7G%2BzmK9FOzOXzuvL28ZfvNBT5pSU9HZ2eEvnRgJedMT61%2Bkg5fZ340iJxCAU%2BXTvYyLWHu0EVezMdU69XFoLb4x7GM7G%2BBitYiz0MnEhJyzJO0AJMzxWFhJHlyDU6srSp3mtoPa8JvefqkY6qd2iKKojIL2PMUaiaWSVIC%2FDowXUU25lk5n%2BR2TJGqWdB%2FDEe43KpYw6cwIhWwQONRYFbmk06iRSjBtUnqiDNdz6dJ%2FK3lfyZeMfxhfrfuh5DRLpyBqy%2FBP0Vx4jO42XqDEsM9VdoQ1%2FTByVNrZNAAsp0AhGhzChH9SUH6i4QcfKI7x4hn0hgzpbKfeix%2BT5BxPf8UyapdgtLBJq75ep9OA4b7WQFLFr6QgfdG%2Fi0Uf%2FulpPWah0sjWwKu45mIzN25rii%2FMWg89bFgG1nfZlC2EvW0WUIqZzo4ixXdUPLzBkt2LyyImOsdmD2PcsQyiOBNk%2FeZthfvpgX65YbGck591a1guSj0OpSHBy9zSFxUGHU42AvOc6LZhbQ6cGzBRiOu4Tc%2B9NyWxGEGx6MICE7HJPR%2F4ohzxwEJrlUZmXQMJLs87wGOqUBqZBDwcR20ElLfODtdOyDJD066KDbwwtKbq9BUaaOvC94cHL8dWCUjv36HV9bcjZefzmhQODy1AcOHXprnjR1CaNEPegFzF4tCm%2FmbOk6wE5zO7SpR9shKp0WApieYChFsIB45hCygIxjbuSSN34B5ot2C3YPKdZNG9RXfFYKOd5rXzrIO3m79YUjLW2s4MjWMjaHqCONrHkN6eN8U4LlVOSkVQYS&X-Amz-Signature=436d45c6028cdcaec1c377fbc55c148f7ecd66c007a4996cc6f345003067bdbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDA4HMEC%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCPnGuNI1NzRbeoqYMdUlElGXIP314NAYSQN0HVAN7EAiALyMBjOdovWHLa0LT%2BbdhTJ6hxo1ITqHRwWjkj4Jt6iiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAczfNJdj7kqFMy%2B5KtwDfCiUk%2BamSwedJSY2nDRV9M%2BGCsj3GB7%2FhLWTyA5CdyJrl%2FEhTDjhkbNr1lcwPTVtzbF9f7YE6RTpQGapN2%2FPUlsAR%2BvenV4kpqBmq7zun%2FV2Zq%2BFeXI01U2H430xAlilakzB6jnQ5n3vOrQf2niPOd%2B%2BJTd%2BV5I2RUi3DOfyh3Qyf%2BEkzqDI17uLpfrFm4gjr%2BCOr9U%2BqTMnTs%2B19u5Fw2PTNypsnYtTC49qxxVbbzHMXEMxsmwXtSJGIp57ZijaxnVPcRk%2B7jWDrbD%2FdDhrF7cEr3SCsOqI2lP%2F9nEAN6sfna0JMarBbnWo%2BQPC8eyacOXtDaZj4jzC0Yxlu7gr36OPj%2FilvuST65s05pd83EZgshH2UYaCqKMb4%2BIh9PWc9jTxwC8VPcgkchw2cvmFljVw8uVX%2FTVK5WdFi3elvLbOSyKdOFkVfLn%2B%2Bg0Yb1ndt4b%2FIwp9ZxWUnnb1dn1sNLPu%2FpS9pMm%2Bmjdj6c3TvtvSmwiYWVD6kEILfrVTFG7isI0KhO1Jciu7fTOx9svaE3%2BFn0jFOHut1nY1ymErnM%2Bsm87XZEVtDmCp%2BgJoItQwaNPmaMkkFwLR7A56OfrUwTPgHvV2o3SrjFNKpJtlpMhbI3n7cxqdRT1YaEgwnuzzvAY6pgHwOqNc4vpv3xDWf2wthL7WkELBGO2KX%2BGzAp0clkC8E%2BvVr9%2BSpladwuluD0B78Zcr65romHCn01lMkc0vv4B92CSruDFX5h4dmyZBxPOEGyL27d3p1yr0BgbvdWdLVqs5bAPH1nndhNuekRFG96iBi%2BP4lS44Si26ek6y9xDYx6oUV3hljj%2BIYmaOMu3PSbN8AEMiWT2W90WAVKUDDG7ME13kY00P&X-Amz-Signature=a7c2b83b9112643ea88cb3294d14399ea438a21c743198fd2ddb197a5d3f230c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

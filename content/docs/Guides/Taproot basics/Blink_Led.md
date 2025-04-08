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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCBBRWV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEPgWIEhNGdBSl%2FmewwM%2B5%2FIREYHOP70h3eNgifd0HVAiEA61ALfsQPXxycIQWvBu%2BkCfuXOqu9SejC9AhLdmhUmhwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDL1hAWMNw2xg5qDlFircAypGlflJVSP4sQHwSgat2oRZo3zsGIls9idylcQs%2FVuNchpHBoNd09kC3UYwt7If8uOxNoWvDJmNZnbkw4hu4eROAYcv3BrYAIzVFqUhC4tFGUv3bS0BPyDnKr%2FOQS7RK%2BShJAOAsC7jTH7CWTlD6UlVcxiKN%2F5IGge48W8Cqrh93ykmfJ6jzP%2BP5Cm1wPLGRYTNDU5mpkA7dL5MQo289%2BSXbgLECB5YZtsIQILlvPu4ph1KXJ4k%2BJIKOipU1%2F4VTkI8yMdHRrvRvcU7npHFlKvVkdraD8EMZnSUsk9pCMl%2FQu1ZCZkFoPwlFppA9kLNg2xYeegiDC2CZ8iNQQUHVljzQK5T8o0CxbudAYkQz71HS8VEz9Al58YO0v8eD%2F5PK%2F7hAYbOIZU6nSE31cOC9ZYKCcQrWjCo2jtv%2FQtN01RBlb3v908ZW%2B88xo7EZXBk%2FAkLS0MFe8R3tha3mDymjLOkVS5uIphlfqM1zUvRb7cYmu7mA%2B4TS9JMxl9upP2CzA0s%2Bcxwlflb4UDMISCzq5VQnKEVhIGFgMC45LGw%2B5YC3a8ZJpJ%2FcgwizVWadK0TO07AAdG67eODA6pD3AggC9Dtdd%2BUvfCShs6kofw7aqVHx%2Bz1oF5U%2B4ogAlu6MNLX1L8GOqUBMbB3V5Kzl8DU2m2%2FGQ1pspomgRRRtDdt4qjCsiWKhP35zEth2N%2FhmZc%2FzyFxKIHSDqZ9jnFicPcK%2BxhQQ7OWPRcpNBGiXhiBBFWojlpB6WzPQnXoSu0fPigDWwQW%2BWxFoGmTSriLI7wjc1V6qbpP4N9RToTU1xVgFLm4kEhuYPNxL%2BdZsq6vse1GkhZOFjlmyrhfDtigb9CFlt%2FqA%2BA7pcGxbE7Z&X-Amz-Signature=8609e59f4a8badb04fa9eb6e9c0c9e6dd7aecee608ad8921323d4a79dd7a0a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDD426SE%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC11PgZU1hf%2FqrXf9jG0gngR11NuZvRzZncrmAIheGA%2FQIhANMUwwmq5jWI8SsdTcDn%2BOHYkijjfRFo48%2BeBd1ts08%2BKv8DCHcQABoMNjM3NDIzMTgzODA1Igx7nQDsZkQxWp92Jf8q3AOa4HdhisZcUlBY396GOXkKTXIUVWTSOHYgxigOmE879JGPUtX7lnd0U2H2N19gz9c4zZRsBxS%2FsWGKwqfI0pLv3tsdhEBxjoL42pV3aT5h2Jnz4tUvreS%2BHgmeYi%2F28Cf3zxQRqvljaLsYW62pFvZwOpyJOn2uQ1i6bBeV3N2uUjUwUWXaVAN1QmhJxA%2FWUK1HxyaF5Hv5e1wxPwhcz2iR0u8De9mmM4ekHrfEUN7xA3%2Bup1WwfTCFZSrCPqdkx%2BVUSTeM7zNWPaD%2FBdQzbbbNcNEN%2B8LgQr%2FpkJ5Ii3C9e7lSOIDYiFJolF%2BofYb7SBaXB9A21io8WYguLsTnUWnO6G4ogIzeEruOEvA%2FQTFwxq%2F%2FsRtf4FI3XFd9m%2Bop07f%2BuUyAfytLquBWkZgYMXR8pCUDtGQdRHZO5JG2JJuSxxrN2vDpPQzua%2FgyH6O52FfI9gHJlo72SJ4CQBbisjFry%2Bf4YVNSRIwSQua1JPCnD3WIJ1M%2F1LZP5hda14dPcpKV72cLqbGf%2BNqS%2BTyFSzsD5IC7N7fb%2B2SFlkPT9YEPoibvyJm8S%2Br1rFpBF9h28ifc1uHQWf2KnExrZJWHpOnpHpTShTK%2F%2FZmYdUJ4Psm031ZDY91LdN3vShNhtjDh19S%2FBjqkAQHVXmC5ZgPDEGGx3%2FHLux3gIhWglotbEi65glJxt%2F1qNyojaCR6T57RsBnSrIdjP%2BnCwesXN2yfNZd6HGY7iiFHyktdYV%2F%2BBRD4PW1ua6We6GDznpYuL%2FYLVos3%2FgYgGckt1J3qcIWGxESwQb%2BO9lsHslj4QiQuFFJSa5ua8AD%2FNH3yYMoKVJWYUPGBqdx9B6HUbVUkHlipYh5rPKR%2F8EUG5AV5&X-Amz-Signature=7fd27c14d7b024b18cfaa32e6ea5ef6fc865841168b85ed0b3da702ce9818db0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB3MJQJQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzF1JGy%2B%2FfpaHGrm5n4iYfPYaTPp3UL0zUCYsPukSudAiBgLpvbRjN9oAsKzSbohDAe%2Fc2NQGzJxUK30Q0Bmrz3oir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMFl1qj%2Fsks8WcscZWKtwD9bsUlGHVBmVPuJ%2Bcl0VzDQ50txRQlrVCTjDJYgTcmb5kIcm03XQYwAo%2Bq31RnRlpbVE7Ran%2FbClT89X4T9xxT%2Fd5XhRtg%2B1x9bXe4NbNQvMGW6Ty0M9Rk4m8jh8MCi9BuoQfSbQoE0LzNRpWfjGEhFYDvCn%2F4sKrfEVWWKz%2FPB3B6SuX4Ffc8ISVIuP5R7YJYm%2BMmWQ4eltBJMnEBbZTeqUTMvYv1LDpi3S6JCwJAzLDMwFVaqWtgbaeQB%2BJA0yYhhi7zOAFI6mJJcLrMFf%2FHXdDGgVAeaeoPzgB5Nv8dmIe4UM%2Fbf%2BKGt2bP8gJr7cp7NWf1EvflTBmICXqUYASt8MrP8I%2BQzl%2BbRmiwIZEWWRcgyB%2F5zm0SNzKgG82Smdb54gV%2FaciDnh1cmewou7AMsl6GhgSPzRrTpvh3kykT5QYEx54PSXPWZ4zQsv53HkNkaIaqpiSWCB4KvxbeN3J9cwoYQEmYcigHVN7byKyCITjYjhKgrnkszY%2B%2BH%2Boj%2B%2FE66Jgpnp5wlsb4pUud3rHQHnhmHlHUlkrpD5RzunHJXCmCxj9D8tEC0CE1Cr5aDlYlKUyrccaUL6E5Y%2FtQcPrWZNLYjU5sCdUqbErZVDZYMMdOrHlv1iGvK0mG1Ywvoy4wAY6pgE8qebNORUPJI4V4hDmiaLpOD%2BTzCSIsKRuPNZVewE9poMnN0HhNIC8cFv7dQSDtP9fhLRObKB%2FPtxAcH6vIfNlQmQ2RDeMSGV5Z74O5Ua2u%2B3mYPbOjMVxmTg6Eq%2Fs%2BtwapHvPpMXtr9gnXNXXwqxfpOXCwiEG5eEm0GhQh%2Blf2VUEkc7CH8Pol%2FHrUlU32Ut8k%2BQJD3aardi%2B%2FahbgndX5avcZPlJ&X-Amz-Signature=8524fe5f878e4bd1e3d473839bc5bf1154c5f5405587031fdf8057c0141dce12&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYA6H7M%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJAUIXnN6PIZkHozEQbWPXSxXnDSanCOQrwrBYrMJrkAiEA1ydkeb7dP8%2B3x5EyWmhankMJUDqtfolEooxfK3LFJlYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLUW0dFbIkNDO6SvhircAwJk00STIZH4T7vHH6GQXOS4X2%2FUObM%2FLDts0H61mgMWXTwlqfrpT1FoR71PU89E7zXd1uG84Jsv7YytR8sv3hOj3j%2FUjFPGKqrNZt09eWAuDtxbA3V9lHpShyjxwCpHrz3HDO8ZpDs8siIqHulH7kfIapphAm3GuIJ2AlKajTXQ%2F%2FgaLT3ruV0hzbyXKny20NMmhh5h1OMeLmqRgnuQDWfMzVuo47ORZgEfNZjuK6%2BKiIYOgZbFLqlAaDmA9lHANTHiHgcL3T1jzC%2BcB0bLdHJV5sZJ7kpi%2B%2B2G%2F3FqkqxuNZTN2B3J1TCD5g170WKIk5mll9TuW0%2BPOb6VgRgciWpn5Ou3D4rj60LGo7BqE%2BjptdhyNMi3l6FZasW8JE2s7XzfvNxkr5R9llsJl%2BvcfkVM9WAsXuLy6cc0P9y9GxjeGe9tec60tRnre5cBWWb%2BdhwtVGJ%2B%2F90tdKDvcGVH6ysyMZw9579pC8yIr6FzH7gC%2BDCraqUyE%2BhSl%2FdhJI%2Fd2vQkoNC2N9bqZiMf7sfadVIm2QMtbhu%2BRp76AAkIgITV%2FtCWtsfwxDsFKn%2FhCyV68WWEhIMeBL0bS81alpKVgivSdcH93S2oKd7KGwAXWRfICHI5zsuTY5FT1Nf5MIaMuMAGOqUBxEMjLluz%2FXHqjOoBSX0y0g3E3i%2FcqOLs9b1TGIwJ95mE1yZqt2ULOG6V9AV7CM4nOvuba30hZWsAetFYu5zNCpi5nNhwPZaHWmYUWWMGEIrDgzcqvCOKOewPawxSL1kzkyNudaGCB4OUqsJw7VPai58gqEViKFY8NrF7Dmd285ImhIgIU6VKoD1x5hbwtcBDZX8xCInqD6fxqmq%2BuTA3vMxQj9cr&X-Amz-Signature=5e0495b71a335c20b2dd8da9b4387af4d210d06ce51907ac544889b54115db64&X-Amz-SignedHeaders=host&x-id=GetObject)

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

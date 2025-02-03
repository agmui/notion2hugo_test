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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3JHF5OL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjteM5gV8s4s3WVIqSgqseylI4Hp45IThhiqSWMjQ1iQIgXZ1e6owd4hA67OJcrtkdunY5MmT5HfH5f5TZiuPbHr4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHK7wn%2FR90KHqTYo9ircA%2FyGH%2FN6%2BIt4q1iJEYXlE5dJc9En1GDMYd1DzzuiS8w3ZYtPBFz5R%2Bpji%2F5zdFFWv2ERzEuiEq%2BPznFbqNDUg5uXmqAqVnGpzQOAYua6s%2BddwnvNRHQnK9NJgQNVqyEaB%2BJcRgJ6mfJRYHs4254ZwL9z9CKOBYndWvbku4SEbvrggdhR%2FUKi16qrortzIU7HCCNWbar%2BBob6KVRzLuTVvoN4p8wyIpdxyPoJPxeS2e1G08KQI8wzaYnVmbK4vrnOsA9IoQfkVolq10gtHNBPNuLY49VmK7ug1s4an2klPYR68mCyVC0giYiDBq4uFzxSFCitzQW6ZV0KSPvViWxcFRcKYQKi6g8OP%2Bh7V9fQGynItp42nn1jjmIg5ubWjFWbWC7hxex3%2F2GrjZ%2FGTveyP7ipwwFU2FSLU%2BSjwVXdJRmiQwwaJXNr0jr0bGQnDW7mGMKxRpUNmmbbgi4P1fg3os7vUK1LtB9Ce6t3QL2B2iBoaYRjTmoreWbaihp5aE5iT5KqHGqqWxeAgNPMn%2F4YkROGMVrYEF8tvpFxc6UHn%2FgR7UYOLVVTq67LFpj49VtCJrCfBFWL1O2NQ0y38FDOjiUUY%2FaQIpXdvMij4DOcFJOS6vB%2FAzpd8lur2z2oMOu2gr0GOqUB7Cnw5qbDjxDzsXByN9Kd4h3w2DmjBlj6BXVTKdTlTIvt04f8pJ0QpqP3dw7fKseGa2rll225DQ%2FzObPa%2FfdLUomP9v1gOuty1wV5akR3qHlPybihqLVg5HXTTOEDX%2B0QejRXixCCUJdf5GqRhtcOW1k7N7hRGnGMcdyhchNNONrGwVuRTQJmSEs7d78%2BdJfFAswKALmdmbH%2FBcSth5Yr0Fkyo5qV&X-Amz-Signature=6a9fa799208c984f57cf6f916fde7ecb7acbdf1e056b58a91a80c9eba4d4a93b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6WBRXTR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9bxj2LYGqOiY2xp8WrSzQqRlxdrosoDgKiCt9aq3wSAiAWF5NYN3AspjBxUDBOJr7W8%2BGA2HzI0KffCzjKH01azir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMsquAMBq7kMibraz9KtwD6p3t%2BmLFVz5EkEBM73FpGvK%2FRSQGQHAYh%2FtyC3bKP4CCSs%2FYnTbARNPg3ChphI5iq4aeBxqkedD33O6FfX%2BbURIY7I3qRD0Osmv0S0hfZO3JyG1zDl52ftjXF7rGgfTVFIPHPGsuZfHbdhRocjXJF7mCSo%2B3VNM1XpGjlVz6n8M0Z0bkTDDsrHorvSIR3RDbgCp2a8xD6n9fv35oA1HregWd82NH36fnptWvPAWuF37Ppu6qHGXpg%2FfmZR9DaG6Ie3X1fD4xTtNbpJfnMWKgHRxULlBNtoYoOU0NOidiKnB%2BZGUaPqE%2FGyI%2F7n%2FqDKBOT2brd2RE%2BfDeh8qbSYexJ%2BKsYz%2BqvIUHJcmAY%2BrOxXo3J6CBsKAt%2B2NeFV6UmznDzijCDp3ig3C1FxjToW5LcT6FWoKuWiwhXCP7jVw%2FJkq5Uag%2FJE3feFI3eYqCQs83XuXiLF%2BRUNMeaLYtPOHy3fJnLTub8iksB67GiF%2BWbgOWCHYtI3l%2BRrvNWc0y8OSSzuHsESY9jZMBh4PZA502S0TKCbq749jD%2FV8rWE7VeiJY8YPcQ%2BWiuZQOj7KrHxqDFGZPq205LZR3Uq%2BZYoH%2BOY%2FQEeyNeH6yH8Uu32vthZ7hTxa5jvSuOOTwTUQw2LWCvQY6pgEzstMDLh7X83%2B3ek8fDpl1e%2B5p4XYRiGA%2Btvqa4IopXrSPyP7fpTkkxcQEsc84PUqEqF6Pdu6D7G%2B0BmQXgt8usfFfVDVnCAKZLAsGDFzPzFkihLGR9fdPSaM3Hjc7DG22BjIZHmGoirPkKhflhTeg4lqyC2tAevpoJXJaxvUAEdQyV%2FI5x0F6tSwuVw8%2FSAnqdWf4gmqK3bXIC91IcfYYvRy5%2BXUq&X-Amz-Signature=863aeef644428361def7e876cec300a56d8e37eda7b12cd4e5cab40269534371&X-Amz-SignedHeaders=host&x-id=GetObject)

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

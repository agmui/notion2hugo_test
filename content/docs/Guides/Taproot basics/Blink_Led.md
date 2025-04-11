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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKQSL2T%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIEFZNqFuBHWY5vq6%2BVo1juLLXvFiGfr5FdFUCAGwlJLTAiA6wJkKCy8QOiewaIdn9SE5o1wV0c%2FcUYhn4EQkQUP7ISqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbxyWLrMpQj3QRUTFKtwDVobnA77jVg%2FfPXCVhb37ljMujYDuIRPecZr2iwT%2FYSdmP5n0RuI3ju%2FdIa3lNRaZi%2BrIJ%2FlVNjZJwMXa69xM3WPoIyfUZuKUe2rAWOq%2BTJqBURmB%2B1h1gUkKMpXeVk83HmyFHkt2mAD9lOrZZkbuJLU55xVviaYDAAdI4MuKMfhvfR0REGZPIpBEGJ1wRNCpdfh09HRg5I6RuwaXHqUFEtmjy4RNgcGiMPzprNCW7KD6whlL2q2%2FQBRBy%2F1gjZZicGelMINggtJShxmsSl1RFvPfeZuM4DJHNDDvujI5t4unfW8wwBr3SBqYaezqhRr40jvZvCvomtCKpE99V07rhJREasqYUE4XWGw5z7QP%2Fh7xrkXL4wq1CkJGjZLK%2FazTl1EEB9WB8yhn9v9aB9sbfSZEdUSB1Cv%2BdVd5R9cWKTxwywKNglDamaARd%2FD8G9KvXXQ5Jk0QtTg2u7%2Bcq8AEkXHFtJgNv6iJnjlZSJ%2FSRJj8n2Ro3YlsfkKEFXK0hlryO7mYsrZPXCjVw9%2B5vHsR2jCyiRtxArFD0%2FzrOA%2FRkf0LCo1n7LkS9EdH3bQOcWmEgAryjh2lGq%2B2c245VVI3s29j3xIuV8kuijZoRFk7amCNzIo6iR0wp8%2FpALgw3LvlvwY6pgEQ7UFxARaHpsYGvaavQV9niK%2BxK%2FRpoMkrG3FNeXg%2BioBuXgmI3625IQBF11v9kTLC5bmFAZjGAEjFU0y8VR6xeue4AAr5O%2B7rqm0nIzoe7DNnWgTWhe3RDlF45b%2F29E88xDE1sXlBnrs5dMA4F8gJTnV9ICGjcW2%2FV8UcwQ%2FzeNxTLYgEAQXJn7uEpohjYdY4zBqsmjLZY%2FHcwOkCSt7t2cdHOJdA&X-Amz-Signature=41d33822de61daaf644f4ddb09aae78d6b9a3f9836dbc636047bb00f4dfc8166&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCA6GE7Z%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHgU0NXKKM2itdghTzGc7DlUwx16Dyd5hjTCVeSSjZPgAiEA6pDbm4hQ88wOI%2BQg4k1vSdCqe1kSsUcxm4QvFMmTUiQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTZMQe0tpX%2FuqGd4SrcA1PEruk0iqA6vsky7gX7Lhn9N1zSMrxfef%2BCqp7dcrUvxn4FjH3es3GS3dbYUtrX7dSa%2F3Jk%2F%2Bju3WDmjmfeCQ1tDeHICOdhSVON9ngMKfNCQecKjTEWGtp%2Fk5IW1arYvBNqRpwBswCkxeUKuvRT%2BJ5WLYDQSKa8xfOC5lhh6rN79sSi9eLdgG%2F8Ak8dyt0zbtX%2Bzoi%2F9NklcaDuSQGYvVZGqdgFpTs0Gq6WU%2BtRfbWKfDHlpD6on2rFVNB%2BGzZ1wv01uH7ZgI10P5SfD6fMBGBYeiHyznxaMJq7lmzb2Npq6b5IX5bBbR%2BwWMKbjOxw%2FNHsN1mU2UtbnyQ%2FVXKBfPruaNuAMmSX5VcGpEcoDVFnRz4xerrZQx87l5M9PhTSXdPlbdE67F%2FIDSEW3mnOJY%2FFZBqGjb8MBEePvgZNJlYRSoDGdMhYWYJpQiOoB7kIcNVsr0K8NOjCPUM7JuiftHDzJydIfYFC1McjzH2TZLZNJAIWXEWv2oMUZv1d26ZPO3dl%2BBGuKAjQgEK8vZGOZS5BnicnzGIiaSDAvW0pQFe%2Bs9jAVBa6Y%2BYLJvzkp96lvxoOsSPF1WCDfXDjBtZ0dTkBB5Fe1zMx1JnsGQBEQSdQ23sipZkA6Ga00GeoMP275b8GOqUBEISqU80g9vmf9qSajL7n20wrFW8IPdaZ4uqWoBxp6I%2Fg8nlIFP59gStwDmYEQDh5cVkbgZH2zBk3rC0FnWEkc8ch9qbkjOZhUPA3jAEc4Vy1TfH6eUAhIMrhG97exfT%2Btq1w5JOnooPZNfsNb4HD0uyq2KYYdXAx9iQStdnoNoj4c4MDehDRnoRKboKTTNKYr0X%2FXsVjpQdoYuHR5XkzSYOAj7oH&X-Amz-Signature=030679c31208c572615e4126d95e48cd36ba9c9ec1fde9cd6e95595e32bc7337&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZP66AR%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDVPpN6Dn7sRmjisO9eREa3G8pWALidPCzVyLr3WGZ4WwIhANBRS4qBNyV0qgrTTSrsJXlkjPIpYb1hCsBOvPdMU86mKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT%2BFZKa%2BxlTB1O6hAq3AMQDOivccdvZ3%2FwKU%2Bl67SkhQ3GafFG3ldk9de6Uv373rbjBmYXt6FKRri3gLE%2BXDqVFX9LJ3QXcpRivSqmBKq3uO3CQPjFq565K2e5VtkA%2FfaNvW8ltjoz8lUCou19fWDttDsqYj%2FjFdBRQlhCmqD6NnQn9wF2uNnFN6fubhJDK3KC4xuhnPVY5IvDXIfuxhjc2GtyOXIt8N1KNZbOU0Gc21c8zQvQ6Fo3xuJUvt3A%2BjmXBKZwzxyii%2F8SfrCJPYBzKAJbgq6D0lvXkIM7qECNdCDFtJdrf9e9ulVH3wVkdNhpTN3RU0aa0om4AVCnkU7cRK3ntkEANEJtkVSyyuiJpt2R0vDGDMcOqGWQzHDu8FF4yoUfwI%2Flvaw0QFCfmnVhN6rx%2BXqRd%2FIMlQGdj7HB3VBqs2V%2B5dgPhgm5O3OzOUwugjdrv%2F%2FQ6CJV5IA%2BH109IYd9na1OHzsZF%2BfBe1TV7QC3wE0b810UbRN6DITDx8Ys%2Fba5epVoaHBHhwCWzcPPqf70SV5tSsS1T56gxd1Muna5nI7p8PWArj9harO7cA1XbGj5ZLF52%2FEe5fxt8HLFjxo6ClNjMVuTN8IxyzJo6T3lfJCIFbei5fUXAFeCu4Pro0v0uAw%2Fph1MKDCe2MXLBjqkAX0pmKOCrC7xtNX9VpqJVp3g2EuL%2BAMUFsJ2FVp29kb7BUct0YCMUjRK%2F9ozHSdjEduESryBm9LaYNPgdFpqpddYEiDC%2BQsht3mkI1h4WnqHI%2B0UNFvKGcSKyaEOvXUPKoFnG8f22yBfWiDP5V0KPh8LG5C23RgrYpLomyJXCiodnmtRaB%2BUntq57qQWWMpO38%2BkddidCEmMIKJrpKNJnp49unqu&X-Amz-Signature=3181deb92041f08ae4be10c58ac4aead165ce83b7eab0af1d58af1f9efcb66aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5EGAAN%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIB7WjDQEQ9YNRffo3FLeRUrfk40vtnU3wBDy%2FfkoUU%2F5AiANp8Nu%2FuiXu1QoWynpT7g9WhivX46oOt1kGuMBN%2BZejyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGIpQTT%2BP%2BzWbBeW7KtwD4R1d6DjFhT9dBxHxKDbWUgQxwQYP%2BCHRwCW1Dgydew2QaATUqmxuB2VYf%2FgwK1LhLyUOay7TCPwjySFJ%2BHDA9IhZDGMZbf7skYH7UehcuBH%2B1i8DuN6JhKJpSKpv5m%2FELl%2BaI4WD0zEk3xvOz%2FqTma82U1tnK3nNUnNtdoXFwBmZQq1taTgWK9kHtesItbTuB3AEnaKGupGBuQd0W3cp%2FrOmLdnbiYemVm%2B%2Frs9lwvnrlOypG%2FCjOMHtXQ6BFJjPhX861VYWanflOWdDZk85iNYXar9SHcyjttIC7Ia74SyIXT0Xa%2BeTnBnlyc4a3NgF%2BARbToxwrBdm2Y%2FS3mi1M%2FBDMx6b31glrm7SkttU7qFCcq94dqo60uvdUoD6l%2F4bDdrf6ZBLYFnZMSqcD0Op1guo7zxll%2BCjoIYAxRZvKUVog70mnTd1ffYUJoF7K5rRe8TVTosKV6ksZuLRcuq5wyVmd5dkR8BZPPoE1ky4EXo3P%2BER2zoSZDnUxBn2N00yceI8oygs2hBOlNATDrV9sP698Mi%2FBcYztUc4mzh2v0REvuy%2FP7emLYqWrQWcm6ao1mKrlbvQf0M34vq5IQDZ1xgsbHAvleJv%2FnF2a1ofYLGqckqjLg3XF2eY3fgwvtfFywY6pgHuDEBKboMpL7%2Bc9uyVqeBYtVSFMcOeceUG%2FUTKeEt%2FdmJnxBXt8E3%2BsHHqM2E1t4KYcUG3FuzAhTwSnuiNgTzDkeL1tWJBNku9wLsAFiCZbG4AoIUzHgGPYN3VjcOibXH4gStIoDgCmA59i4U%2FjRA0DJW1H%2BwoMh01CfWtfc80aO1lUKInWfyTODm5YJKZkePWXiUpQ05m3byhSBOkSUx3JRFCpm8P&X-Amz-Signature=75526642ac5f8c4bd1f2209ed0ecc51ab8b2e9d2240b698ae50f3e533b5c732b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

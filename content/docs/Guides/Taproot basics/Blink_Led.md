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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EKVD6WC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDNpTDDGi3Zyk2EnK9cWuM7r%2FqNnHhENrS2dhTrDkmAcgIhAM1e7X9p5Gpm25ORKxqqYGeWlv2ii4j7EVE4%2BZt1Sx28Kv8DCEIQABoMNjM3NDIzMTgzODA1IgzvtIyqg8QWIwaCPZYq3AOD85j14bWKrwGJGOzuI6rKRggiqVJem2lpFaDZUthCVq77uP5314Y4EHzAt4Yo1PMhC%2FlZHANEpa8WVdStZoNF6tMUVvfusrZFBp0VcbuJ1GtYSso3t7ubXUwb2HYSxT20PHCnwa8L8ukKhORFM%2FYxhx00kr4VkxhuoZTgDkVtnFnXX6z%2FDsZGTUqten%2FGzxCeKNJfU%2Fp%2FIJ8HggvqHEbxBocLaCKJYaeH7%2F33wi6V25XRRqjqZh3ZDUQZ0X2ZMFwioDyltAzdV6KBzMERMm1t60yt1HzhEtmFAV7soUbLoBKdv2%2F5AGHc4IN0orVt1VY1GZEH8znfVWyD9wX0kmMYdkjV8lxBb0%2Fa9LXIfsTNjujNFOw4esWE4Vk%2BRiLK%2F2tbm0Vgrr7j4C0rA6t7sw90kqn%2BBf5Rk7escZYZYq1NxUERhXSKec2Q%2BYFqBVqCA23CGrNG0d87nnRqDnWgpTeMC5DS%2BT0zYZOqOoekTmaHB8lz%2FX2WwLQljShuSye4UIk%2Fp8yM6gsrRWBAJuI7%2Fu1HxpMEKNLDTAIS%2FX6gOxuux0oSLS4xSUCRmdexZWT5cdqbu3xUDLob9CT0t%2FM%2B0OVuFReaJn5GcKs9su069YMhZjThK5Gd%2BZJxjF7x%2BzC5hbrCBjqkAR0uamGOEoUO9wMpPPz12ti9Bp6CSQIbAhcGlicSN0Vi9wbB4quf7volPrWxDzsJINywwdd4LHLOfJKGoeaemIzKuZ54k5Jx%2FWyt0zHCkW6kyMu2%2BFuj56l02XU3HjAVzNyKdDqB1Zf1MGOJAw3X64ghut6Y7JQd%2Bd%2FHoq%2B%2FxkTjtKI4QP%2BvogZ5T8GrMtLZzZjEXnlg0urvEhcf9e6fnbS%2BFJzX&X-Amz-Signature=13bec034444cbfba00bf66d22d8c01299d920d0309fc08e2fa69dd9c9e6038d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AQWHYDY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHRSl7Qq%2F8F5SndalD5eOMruAlw676Zm9JEovpUSunV1AiEAh%2F35CskJRR5QEDxAfYOWUcoPl8DxJqLZTluT49iayuoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAE9SMULe5Hs6LF7NyrcA6JwC3Uy9qRgFFiy89%2FVSyq9%2BwFOTU1hEWZ9PJgShcV7rLNU%2FeJKKubhR4jVx5Q%2BwLjQCJgKql4VnqXpngef0TQ4S9WsFkqif6XrK%2FSND7lvffFfYX%2FXhueJ%2FUROsKaT35%2FIQV43cXJBNMfSRnq61ZvVps4FF2dhrAo2WGgoN30dJn4pqeyegh6ehJAFxVisebSIN317YA53p7oAmuJY6C7zK%2B2aM7sz4qPS4Iw33HuvW8g6%2FmqSdWfgyPbRHShoEdOeOQqiF6A%2Be0jv%2BXqoT%2FB1oRN7SznqUWKzz%2B0K91NScIydXpGjiLFCYgcGJhd9CzxhTc%2FpLV0wUOt4n26Am5zYo3iZbPuJAiWlXc%2BAQzHtxrxuvgw5nKairc%2Ful5MXWljWVFRXpJw5gIY1rDRgRlJ72jnl01AB8QBqDX1wK4uybjr%2FucQLX4jWmes5lSYKhbKsvvo068gAeZTX%2F6VJBvfIo6wLso8yy5xa1ioJS3IyqZ4%2F5Wy5hOBKH8%2BopXnE69XYqkAtFaCDEACZ9EpxuZT2Po3HsIrspJNqBwIZH3f1aZXp6hRxQkXrHWl3ETz6%2BPn%2BzAoH8Ra%2Bzn87Eq6GcGb1wm2QnsuxqgG5%2BhGyDQMVDG2kOp8Rc8QgrM9SMNGEusIGOqUBF0oyQIQ64rd9X9xaWWUXjTs%2BYrmq3QeDEAzqoEpBR%2FlLlimu3lwcKAS%2FoU%2FfdcisIraNiZVy%2F1GIjAQDIAhsRmvHGY4W1jsMOi%2FhIl%2BU%2FgxmPqnXQpIPzRKYS3fPwRlaMVbS33R0Wyfv6E1JBzYQyXBaD6%2B7PEG9190StdwyduEfjkLgY64N%2BqsBCk0lZzIEEWsYoD7ZdgqpmDqwTeK%2FLRWoD1t6&X-Amz-Signature=f85c377d9d0403036857206e9d7880955bc65f0115ed29e5985f6b69d834e180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

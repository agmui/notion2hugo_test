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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4DASR5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKO8Grilb0qLQRbVHu%2By50omvh3NMealbhLWWdKQT1kAiAGtUmthfMluuO7hDKRrbmifxakoE5Fq6BntKrcf%2F6vSiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz0knVRNyAnFFdNzcKtwDX99n%2FWZYXxazj1yFOyDtzHxJ17622WVB8RqehJ4EbS6aiTBks6Zm1p9mX%2Bjz1kjFZRJQs5uVSKyxwXWlsqRuWECt2NYzM0nlViq48Is5sAJtgPTDSy8NlxP%2FyxEr%2BD1sIvXD7jS6gHLl4zT%2Bqfg0eGJw3G66q5d2Qj%2BranbZEEDrhgGNM9zBBvMaudZDToRlu%2BtqTDruVvvSBh23UuA9VvJYOkFYc03tUddX%2FttY7kPOiFzx2m19EwVIuSAr8ghFW6xX29vaz5aJLMTaVHl60pSojXrSCjEpDGHTe40MAxT9IFoYLCruYtQISfq%2ByuWW7ex9uRvgeIzWEFZ3lD%2BOe4r2zLuh8j9XeYII%2FhTESLQSFsrBUb2w96X9nzQyuEoVnPOmR3dJZtmRqUZ%2FfKq%2FoH8vgkRE2zPnf2eXdzydaJPgNJV51g24Hjp%2BCuEaiKajw40kHthiUtBoZqtBSwtchRXpKnQYlMVDHUnqx92tcp4ui83%2BNPMGF9ZH%2Bollz39QuRWZ2l48ZMsvBlKIA1xXXurU0vaAzNFTJKKXuDN52cKBl66snCBNNA26Jq0RX3pb1J6tnxoYnAwbhlgdX4qlIe7W9AAPMtpBsnScbS9vvUCEt0JVZo1iCl2FcwUw96fCwAY6pgHU%2FpmU5kje5rMKiR9Q4rOFB6UCxZiXPY9dCSbhAUiYELtT%2FWFJjJC6lbV4ZYmCc7%2FPp4cuWFCXVL8cDEsnzOwPHdYq36O7kCznUp4tJkVXRn407RmozQfIlXcQ54JWBrOWBC1wV5UtvWxAREUwWP18vaAFJh7f9aAyg8JuVZm3nyFSqZ%2F5iyD6sK7d3FAiLVRIUtOufL9gjhR5ZUnASFygoA5sOQMS&X-Amz-Signature=4207703127a7c10b10addb37f7d911064b8e6f3c8dca34744841a2b8b39ff77f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KG72JFL%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHnRcq4VszEo36%2B9%2Bs7iK7e%2B0O2Wr2vDKWlk11ZEs5uAiEAwdmG%2FwOpnkyU2d0CPxQAp%2BlTFgrmsgpP9CwrPKnLccYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzWuJZSdklDRNOVwircAzcZc3%2FtkvF6GVtDJjEcAZqOI69JsPIpCh0dxbMqKNXEJ8TuFT9xgXT2C09r%2BgbyU4eHnORlskopSk2G7%2Bl4RymeDpzIUlhGI934kZ4aspgn5Y1mwPl5aS5XkqqoWYb6b%2B3BSQEE4XNgQ522sw1SiVpDvjVXd5Ie73IsMD7YkXuj6s6Ox1dK0miAUK7uVJfmVKjewd3QQEb0ztLgxKHtnz3O3pJ%2Byaaz1HCnaoS%2F2EhbP1PBHmFU5occRPEw94%2BGxplDa6Mkg%2FGDrWzxosyxIRj1ZqVojN%2BBf00%2BHBoi7Z71e11mhiy1w1mdMczo8i8OZMhUVyF%2B19uFxnbADM9Jg%2BsuIThXoyvR8%2Fysykh9tWYzzjjw%2BQIOoECmxYkyMmSpnqoSLVUIWJfcQHOWFbglWL%2Bhn3IrFIzNU%2Fy4KQzosfxM5W2mBKxUIzfAcIPhSZJYWNGRQcNIVWBO%2BbE%2FWStDuDVGNKflVpopFaaaT973JhvNddeJbhjGSZ6YvoM56Pe4kupwzKbs98NvGSVxZtI5UBDNbYqKbTtBH%2BWC3QihOMLC0os3KlKnFwDJs2j4I3yIaa%2B41hBozN74JNE0ufvZ8qAbr1qUgnqg%2B4qEsMiWWolGhe3r79RVeY7RhRRsMN6nwsAGOqUBc91z9hOdYBTNRqsYpanrdmyLWLHmkTcSgsxANdlvfTLBjFKpWriNFzOBbuqriPmRaCbNzEGGnracPAmsqqjahV8HOgVkaIzHSHwKMm3TU67jIKKiEJvRedB3G3UxgaeJhxBXxj6qvJsnGKpvP%2BU3PGP%2FedP%2BuACg%2Fy9ALhMF9ZVkIMomrZrB1HHsu3Og%2FNE8Mq1%2FlnQh2jEXfsJ3df3URIaPZcq6&X-Amz-Signature=a3c67b066bedc04c1c0bb6678e525368d7e527f54f7533ff5c2680aa25ee8d52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

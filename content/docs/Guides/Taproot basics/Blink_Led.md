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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666EZLXQG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGR6gz%2FDGV%2BqYyq6PLfkI2rT%2FFzfOWYa56qIbH8wZRwYAiBcUbBmDxYwV%2FZDRzoVYPDwNCyiN8DU3i0B0QqIgDk8Gyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQ59dyl5%2BXDS6RDW8KtwDG2HMFHXieIRVn7m35lspwu8bGW1OyWbaDx3TbaZQL6OLKtGV0aEWQDbYw95moxPlovpNg60c1zwwO6Zx%2FkyqBOBcpQ%2Ffex%2FtlcY5eKhI409Ya%2FD2TaUEWPF3gF08qr%2FiMtKCKn2oAKkpYi3RxqXb%2BKW482tm2HvaHZSmITj5NgE91PnFzBdE2EajprMccBnZ7txJ6LKgpiE4vqY1hBbCBQKE0Jdk7Q%2F4UIQoHbC11e6gp3ei1iUVFaYz7SVRT4tcQeLjSBUkR7PMe3yFMLsHThjHtevCLnOywvVwo1vbRniKqaXGb1XNTZguVoTcEypaM3cO6KCV%2BvqUcfwMqxa1z4yVKtBxn9KIUcEsRINPYxi3MNAk7%2BpDwc1PkYsBJNNWvSeRT5bTe0wEqxLEC2tsx5yAhESRD%2FJga0cbvg9qezvCHfj692C9H9zinOt%2BD7bih79J0HG5S8fT8UbiWDg%2F5F3RxEvMKTSsfbX%2B%2FukqdO%2B44JZHKC%2F55B%2BsSHJgNvobLZoumrD%2B%2BR6SSAgc7mV5Xy5DbKcJvsO306qgag70%2FZsSJhFGxQECAkt8gOXZPQXTURbcuRcGy44Is50DsS97nYOOGVPGnCRERGXXApKnp45Bk0pvOtt9CuI3J3ww8pyMxAY6pgFqrCpnmk0rU4%2BjtEcqQ74x2ZrGu6lmM1p6ePoFL%2FHGakDQh5wXo2701vgeV74dgnEIAFQluYeAppX%2B1xvSkdJ9bDIvVO%2BLDi1lmb1pO%2FdQFX4e3eg4wiuKKAQpTV3hIBbjsI6pjA4U1JLmA9LatngXS9QRITLUnn0bjAWqKPnYsPpmg1htLjPLjDrlq0zNV3orMLl68ZSE5XkmK1WMkoGI2q4bTZcf&X-Amz-Signature=58d5dcfb64d1f5ab61dcc8fd001d16dad6111d86c7d7cd4fc7f83ad1ec6a7c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF2XJHU7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIB2SYNZ6qsDQuleGWSUw%2FXhSY0w3bforA2qKVES2NuOJAiBJbBJjJdeEmbYEBPQRIm64dvrYFh6CiV3QCtK6YFs%2BHyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMmciphV6mYGxRVAZMKtwDq46P4raiXd0wfJm5lT9OV%2BQPIDqKGSTR3L3w8OHogndN8iqmYV%2FiZTRY8YXFbY01PzfF5jGqKd9D5ttxdaX7r6PDz4l5K8nvMJv%2Fsq6e%2BQz00XgUlhpDKb%2B65hGch9ChTQQpKbOSY4RjVQt%2FD1DDuTLUvpKmLOflbQ9yjW6wHSpuB4bn8w%2Fncznv1vblVZq36dVjwHZL0BO1qhymJkQw%2FroZYj4Fj%2FHn4Nv6XDtRVoj0oaWMyPFiFwrIkALhh5Kx%2BLHiRpkGMthG9je7s0TZ9jbWzJtJ%2FJLMr7IDLDTJnTdxoG23wDoDW5ReP%2FQv5cZsuR194ZWviT98LZTPfHoRERyZ%2Bg6t2VrTjzgcyksBTIAPbf6OIK9zyYpxhbH2ygoYi8iidM%2BMnSwi3WQ2SBK6Rx7c%2Fp%2FFgQSfNNSHj8FDVEpwsyIO6zZGR4%2FpdkQZqgrGg7J2Ic2JX3DiO2HmraBoq2Y%2FDyIH1vJSjpiKXGDpt3RBI0Pss9Sn6tc%2FV6xTMciTupPlvfrdFi%2FWnAFBKpH9SlWG3BfkKY91xj0IV4njU4QX2S6DWChQg9vDepc2HgtJMQDCOjd5%2FLWC2Nh%2BfH3hxEK8Luer9b%2FmIA6zwdn%2BTOMVrbf%2F6y7ItEX3lv4w5ZyMxAY6pgE8DpORB1YmhAbuNt78aMDpM4cgrI0njY%2FOCgQjmJub%2Bb33RHlJcXUg%2Bw6QFilk8HW7k7iU8VBfOURJKx4r9%2FmYmMisBUsYkfGo4EsNxoMP7D3NXaYw%2FCk4qkR74t2hyJwP%2BN0y3JWuZyJQlIya34ZcywCnY4wE4lRnsNDPAAEeZrZx%2BBVCo1KJz8gwznQ%2FBSv8F88%2FzedqGUZcPSoAJEiX%2FBRr9REy&X-Amz-Signature=b4e4c8d0388caedb33cc9181207916362823162949287a8cda0d1d8dd58928b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

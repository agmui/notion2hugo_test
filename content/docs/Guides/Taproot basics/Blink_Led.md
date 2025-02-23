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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26M2EKB%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BrYPHTdjFWwZHkzhLj6XRfl3TLroXMMtdhkio3NDwtAiEA%2F%2B9QP5wpGGkm5VhJCsKoJZFplBn8fNKB8DD8mifY%2B3sq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPT3WjqO%2BL5h5nBwNyrcA7F9AlYUTREJ7UJMyhc8dLFQFBIbm6h5T3RnG%2BaTQ034%2B0L9wddXZxVj%2BenPWHvdbKOPNLAE8nBciKxlD5p9bd0viWSbNIQ34KIJoXbfsA9tr1dkmuZp3hqc0eLiTyUVmw8yuJ46Ttn0KtHZZKWDAFn6Rr%2F%2BOyzcK8M%2FDGissnjBcEwte%2BOnDhd3T4VguCntsDrUmX6MwZdqrVDG0euoGu0CSJjK%2BWx81Fmm167G1mkRCLL5vVwRDgo7recXNo%2FsKOOYdcAhFK00QqbLcaW%2Fnie%2BC4%2Bp0Ls8NEIDUVHl%2FEckVnlp7P5NrbzGIfJPpqtWexu1arY8b3apfGlqDlCK%2BE6zh0aEo3EYJ8z9tlh6WHDYCNN227KlSMBTvR8JGVzJoc5pgyJDHWc6ZcPpxxNUrMs64x8UnYrvR18Q4JqCHDPQjQJVLbUxnAoTCOLahAFDYFcKlXVwEHPjP8fxnma1IST0iy7gcRg8J2M8sP8FhiwAaFQRK642eThsLquXOthw7OgjjlW%2BCaRtiYlQ2kj8UnDwLDsqC8wK4ZzoG4CFX2vi4WW%2BpCKwJPRyvD87EKcfzuhKMQE9Ldt6StsfzLm9g6FMAH%2FDE6uVLSW4rPsRlnDVPArpdctR3hy2ITTFMLj96r0GOqUB0s3j6s48o2AJ%2FSNni0YgOozr3KxBb7wzVjl3eH5ojjKIMOFiQ%2B2VwAZielpSNQYWQNaFV4s7DRReFXuzwqQL0Z4VWFM7SWjMFp95satHKZpyLgdHM7GJukwqea28zIu3pqyQyePKJpkWO8uoI%2F6%2Bo257D5EUu3iD9OZeTP5TLk6813nsDzhYFToUGhmU4n2njoy9QgsgQ%2BdBKMV1IhW4b6wlswYn&X-Amz-Signature=b04cee9bbefd8e88a2908402f94f4a0589a7726b3017bca4693ae340cce47740&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNG5TCAX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlkgHGVW10LzK5qxtpIm6FHnebEGHIRX2eIzJTe%2FSL9QIhANzEONMHcrfX5FKudsWO%2F1yN6zVrc2Q%2F8aogxTu78Z7tKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsi0T%2BRyrEv6ztCFIq3AP3sZyHo6awhID%2BGv0JSkrpN3bMAy0pCZejoZ4BbpTUIttYLeO%2Bdb5BgB81fU6KZU%2Fyji7N5bVaKtEeb4fdRZijYpDLY6jDaZxiO%2BOqPV0CFincNrkpWgqJcvyIuZrR6LMi1z4VJJZvF55uu2bpFLAIny7N3YcovUgx1JuaOyj3a8xO79BY6Nliz5Kl%2B6MHv494DTkh4u9zmyR6UngqebdTROeyjUms2hbOyT8ce6SGpYsOjcgObSt6L10BVnDUMqgFoKKm7k3Qq0WVknH0Lg0feQATlv7gcOsQLBFEWf9U78fMLavyRnYJ%2FkgrPGoicVMYtastSwexjkoaRS03PzPf4x8i%2F2MA2Cw9HkspWlBPXmKhq80EjTOhroaDzkck%2BoY5jcvkDr5ZJ9llC5PYQARj8WHgjObuoEoMiprnOlx1p4ocqltKaMDLZXYdQtbeux0Or8n9CI9ysoeahc3gOu9kdbRFlpuAi4h1rXk0kz2kMOrlnKkpA5N4LKKbWKOJ4o8twXBdTFFLv2m%2BKxEOKlJSLdd1k6kx%2BUGHoexZJrkGlctcDOyTiSYWq38nPnXvZxw8KB89wVyQThy61jqzMaGcr8gRdpeC8VsUzy1eikvWwuOnU0Ighj2xu9VrmjDhyOq9BjqkATzuViPFOXh%2FkSNeK%2FUjSzLJBNRf3957DsP9n29etQa7ZZSXgRuQRvBkBCbCKAmhx5VLemWWSrJ5gbHVHPBWkOj3o7iyHC6ArOVlN3ZYmmi4nrTKBQR4Me5Jv8TSYqfkPZM9%2FX0bpGmXZWtXAQIhBHBfzTdQgchZ%2FI7vIbnGLwlqda0noDTzfXuzFfrXiLxZBmm7HdkEVDy5NA3SS6H7Piw0MBlV&X-Amz-Signature=a5d5acb94e2ecf2b5b543874c9039729b879747b4867410231d79ed67222fce2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

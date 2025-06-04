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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZHSTXCT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T033947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIBOxfaSnroZiOqzZYyb6SM19BTShRfn28OyBmaiV7h0zAiEAplZkjwrfT7HqjYUF9%2FCBGo7kdVPiGyzLrPxdu9PaE44q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCmSkqN1XyPp4Q4nrircA7WkloR9WJSOvdrmWvXaWRqbpPoM8bCNkrDcenH1MnZRv0K9goQn3Qh%2B0iQS5aLXSxv51K2w35nrq0FgLun3%2FzqTNnpqjUsPissgojzq0qQafHONf%2FIJs1c8mtrIplsVH0Ikdzmwe0zLv%2F73Ru8rZ2o4HJTv01IwAmcPN%2FBWwfQcI2hT1g51EiUKTFBEn8I%2FaUT%2FTbsxsYY4%2BrwJYU%2FqqIY0rVnvDakqulE%2FSXA4zrZGyt0%2BImRsmKv2XieBbh9xOcn6Lq9S2VLOgMN7T3%2B%2BFG8geTkpd4pPlZQKfq5qd1PQGFNLkUNAJqAmktO3IpJh6GbzECJtYk6jj2aTg3JcXRn4phvDljr8Xsjp%2B0mhARNUu8oKamF1iXNGZDMb6nt8EnIbdR%2Fsh%2Fy%2BIfi4pipgz8bcGr%2FfltAKQowNUVMxEs3C8faW9YpDcj4sHGjj1KZTfP2%2FF5UNS%2F7att5ATPUUGMRnamBeM4eApk6PiEZvz2qgPrVSn8fHjiv5z3zhwnDKXkptIrZMvHfYZIOX6Cn3KBCfdxPhkvFV488i7wEcywoYiizpl8YOw0tjtWFlCejGOatYNqvF8EuwtaSrlTnyeZ1SXyAPpK025MQ1J4PFb1M9odeDG2G3c9DrL90nMKTi%2FsEGOqUBJJ58FGOPeVrCTdAZpirJLqLXB9Pel95WcRMcv4HbOhN1v3KBZzriKIZsVWG%2FcC2U%2B9YxDXcgps%2F%2B81s8NVj3TRXKXlLX21%2BP5V9oIzzTxu4pVjNbR%2FBjoSIzZkbo7ukc7ailwjx0uPOwuLryFsUPswNa7k8%2FOovA8oUHecKEHZGaZV37NTPJiq%2FouClVvn%2FE3yvZBEK7jfSnph%2F7zww5zf7Le61o&X-Amz-Signature=f8ee4ef151d1d25451a861e4e904d0871e3358477a35c25ea9f705446c447ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYMDSV5%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T033947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIF%2FXoG7uvkXqd5oXB5UOfjuZvMq8X26I37JjyKT7sW4CAiB0jWzl3iuMoXpKknrMAmbx%2B4HsqVgoLsgFVe833HITvCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMWEW6ywP%2BBmYH%2B8yZKtwDhgTpqHYRxXdhnKwlu4pdwvV4CxY4ixm3U2jbk9GAxmeqEeVDx0JaOBqXUa9t3xKsF5ErpwAlXbOPj16F%2B3iyVf8lo1wZBYUgxMSuRGf6lLH%2FtwkMInPNU36ZqTvQ9my9kdtnBJckGsTGO48mL0ZUdrqyKu8rVAwD0nbkZvWSfqSLjxV5tCzkaQqUOelSVR%2Fbv7jyH%2BznBqR%2BIsJKh6zBSJnHCsxm%2BU%2BKl7qbZj41EZLsPOp8c0LqF0zEC4HFYE99l1TRcXrMyPsQwtCKqEPqkyR02ApABW1iFbEXsQ4rqBeyfScm4h46UinWaF21q5d8RjbZFKTIZEITo7CYPxcXXD09r%2B3aMe%2BRcq%2FtVi5QFDIuH3nO2Mb1gVATz0laPgp7r6SoyPO1Z2QTmaXjKGd2oc1QuiMo3aGcaEggxwO82a7HxX9DE8qoRdP5h4v%2FPu1ctP64k1y9OIA17nnv7v2SxIwQCRwLXD5HRuW1oCgOl9eE3a6auH47imxMtXnWrQPRiOe4esnv9ygE%2BGPvComSJAQ9XhvaMNMhzOtraGijEY6FLpekZgY2AJP5ZYBAiwI4SuQFxklbNkS36pEw3ISGfYyKIUSet3Yd3zgOGQ5HDHRHgzkT94H%2BRHokYiww9uD%2BwQY6pgGBxJzD5gxR%2F5RhvcPFXc4ParggSbHJ7CpP%2FmCySHCPGvVjI9WQ%2FMFlCys6PpJK4U55MElsX7qhxxO3YX1b4LpXu%2BRv0Fiox2rU4tbe8nrNvbN2ZkW5GKt76LElaORwfHWuplyAZHnojlauXW%2BmwYNejf%2B1yU7RIoBT9sM6ldczs3wGr4nd9QIFjGlw0EbBTNcz7jQGKBMUCUUiFB9na5uueFShr5ZI&X-Amz-Signature=9931f9e28301df34771481b641e05f0b8ec3b6da0e0649ac1fe58606bb91de85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

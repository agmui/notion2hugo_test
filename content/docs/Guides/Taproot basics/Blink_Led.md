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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO6GDHQY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIAN6Bqq6IST8VzXyoEJzCduOY3TH9%2BIq15b4EiRPYzyuAiBkefad4dwj%2FYFOUrnAxA472AfB5hPQIWrT8e%2FqwJbEcSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMqEAfEyao25JOy3DAKtwDPxDhNh069ylB34z8IlUPMjAuLsjHjvayA2rofKFv0VJVLltqAR7v7NEiI0m5YNyoiQm%2BCqIYDfd4NdljOFqK%2BFocy4x5mZcLvLhKG6yqOA6BZRrqueqT8wyoiaKvL42TmWGQijeFBGf6u%2BHh53Hxlchl%2Bymj1S3FcIZHjXK3vZJ2Hy38TlTK7KZl6ZNsX7NyCHsDqfYtGV7JtG8QBOW8Y2GbZsjmoocw4yEM4jK70hLsfapzbc7fHeGzAEof%2FCrxhbY2Ejjj4cavScOA3Onsf2ynzTZ%2F5uFJKP5k5L4w9qGUHJjbV6oUUlRpDV1e1INmuVf7cUGoEhztEzXoDEbIe2HNi5AUjRc3HI52lfDyO8sq9K%2BLF%2BtN5zaxqVqI4RvvDfdofUg%2FnV66uYoAqDqP9TUSbb31wSQPi2v2SnlGLhtNiRIpc5XDRMEdJq%2B0I554vVBnyCY9TB6q4M6DELtuB3WZifC9MNV2Lo5n5JtIDrVcB1z66lWgFHZiLDfm4StnR0I06tCo9bP2o%2BY9X53iae4PUVNK8mUxwGcdhw1cGAMkLf2pLitrqyoT9w7upyuHWac1Ku478gUpSfw5s8sAJDBUd%2FpwdzxexZ2K6c9BG5rj9JwHgm4HgMpecekw2t6JvQY6pgEKPf7xMc%2FQxj2%2Fvt0Aieh2WLfVMLkkRJ%2BWraTnwbyVPin80hunwTC85TWaA8acU7hXiLthq2KJH2xgC%2BgGF%2FWbisJM8WRCtGmthmHT18A4tU5IKfzaPqG9CnRiD0%2BxvuLkDTl9KT1TG%2Bz46O0NBTT4NNdhpmpt5%2BEcOE2xYXpGxojL3N6ywai1%2F94spc4qls17KbAX2NgigSuacb%2Fko8wWIWiKT%2B%2Fx&X-Amz-Signature=2df80599b1ab5476dcd61c012d2f13c86e2f250eb2e11fb6da5ada9468cb62ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNESTYD6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDo98GzXEfFd8J5uf5065ec7PHGorVvx8Mcrc8uPa4u8AiAvHjTvg%2BNXtlANY0EtcO9SsYwm42zI9BnhBe5nJh9z5yr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMEvokJaKNpE8KbcDlKtwD06Tjw374VErlCjYYxLqCqoDK1M5qswzUdXhVkzOmCxj%2Fp0EPgsUOhdmnHm82PAnEzsrAnzL1bcSYjZngmcjsqWmseRMWSibn4Saa4RnefWZV4NRi%2FV1r49eivCGEzoq4hg%2Fwie9Cfz2lcL%2BlzxbzjKOpJqwSDSEbkYTlfBy8bMnhTdl1zpnvl1PvM9rcDXm55pr0O0%2Bdz8RFT%2B93TYFpjPPY%2BJZ1iCt541P1jx5cH62sBEWdzklouXRLTOR91DisrIeNjDN7W0BwanM5cpQ2Fv7NGwc7g7anzk1%2FEsaRMgIcU00bAdMiuKTrdho0jn8g9JwJXtHcSfpk3LgYB82nQaKsPqbdOmZw1Fvuf9gkQYspbE%2F3liLCVOs5XaP5HXGGHtRaGvZ%2BfGtWKdghX9v3U6ippvoztJlkaH3bJPDRNPKuCZy7KrACJd93ympyi5QpdaM5A6pjckFeIIRXwdh6oeXJ40tpdkwMkky9EWKgGnE1zpYJzM68rilljm%2Fkt7YKpRQ5YY4%2B1OIVEvB9OsuGIINhh4coJErBHhveuCdRjiUDRyptNsAQgebMQeeMPjfgHvYlcXMouOEdLnrjvP9LuuHTNZQAxWjRr1lsoNfX8j9dYWE6yJX7gAeCwggw2d6JvQY6pgG9K4CLR2%2FXfjPIukjrdbIPnWxqZXPk%2BLomInx6rqzOhVNZvHeqwUmqfQEr0S6KmrNZvaGYfzLAxiz6viIgXXPiuqBKVYnCTp4sk1dWRNoQh3WKj39Y8TiMkIo4op6xREg3IgzalhupAX0L%2F%2BH73%2FR%2FVMvg0OK14%2BJ5Bqzf4kF2BDNas0%2FziOS1MF9DgUitZZjcGvKZ2IDTcSBsTh7TgOCY81SsaGpx&X-Amz-Signature=50fdbb829fa0f92ce7d5558c25a8007dfd9a94429aae7b6d5604e235df81d0dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

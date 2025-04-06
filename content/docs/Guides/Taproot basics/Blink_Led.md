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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6N652X%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtJShwIBJdWLqfY4l%2BJkXMM8JpShizM2ILRVmPoIPO0AiBFKNQ%2Fd49g1pqnPDeZc456zBkStmu63TZcVYEJbbeOLyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMdICz0LMJE3H%2FTDbTKtwDUDaB5WwWhS0zvNpPnWM7lGF0BFO3H3DjQ2WJu7pAffIPT2RzX8GYPg9%2FYVgo%2BOYWXhMeh9u57gw7Lmzb6l0Mp2JBHdwLmkQshO3TCkrPQuecSzSf1TbV4KquY7Evgtn6Jy%2BsylZDJoiaTIwDOSh8L%2FuZJspF0ISPnzULTW4pB%2BF1zJPtvsTiCeHbFF%2FMswm0P29hdzirODrKdC6LvPnzX3nIC%2BRskKk9Zcmolinmlyk75eQUGLB2ecoBASdXk9ysWFKLqksAMNSZEfyvXyZC93QoZbdj4HQnA3gWhHtdN09bMaokGTcxdCOm7vrJjH%2FekvQQDKspwbyX5RlnGqPxb6ZBlZQC%2B4UUCH7%2BreOqNSCii2DfyxLl3MszaS2O%2BumX17yz7zC7z4JKtI%2FwYomLQ6TOUkOU%2BV3WFzqgcK7fe%2BVWQw%2FZqUrhrr6HOjF6DPbNMw5I6Du78KR%2FeXZXldTXrDk07ACASw39IEAEZVjjypJNpd1XY6jKkY5Ly8W1g5CLdpayJvI%2BBFTFEyY6gl6KpmKK0iGiNl71WV8BGjR6q3ZmSncGUpLzsuPUC1zXeA%2BTL2zAIYua2kHArhiL1Yk2lnycP9AkCzmmsHGWXiShy4I72%2FcNAPyMb8UpChIww5nKvwY6pgHiWKLcr579pjhAF3YvnkqdMD1SfayklMnbA6gVgLH1Gin1pQ2qEouIuKgO81f%2FexuGeK0rX88Yy50OQJfD8dI%2FrgSMprA89ym6DI%2F8%2FRB9TYm9UFDqQ5jJWn%2BV5lTqNuE3u9Tvzq7v9CTJdXrj8nx%2FwrhAwn81XZ65FgsiTLi%2FuW2%2BpV%2BEFimbpX7hCsOu2XX9CDjuBf42eFCGkyUu%2BwbzIxbwMW1v&X-Amz-Signature=2dea576a10256b753b5fb7788612d0e6604da157d0cf28ccba9f8498a3aec686&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPFWMG2F%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8XuIiJYV2r7Yd2X%2F%2FoC6FG9XoNcTTSkb36cG6qG1pjAiEAuFxJFEx6tOHflKibAYSnrL9SNSQOwzcKq%2FH%2F7S03nGUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBhjF0BmZ1W37WWptSrcA%2BtzBEQSPWJQQlWufxg39ddkJSQuH1v2mmZ6xP4zu07wc2hn3IexdMt9N8KUT8euMwNvXwIdH5kCzMKRxPH5IvxlVGwCINhj17hDNUXeYG5boMC7zzLP%2B%2B9b6T%2BenEWVAIUV1qQ4RDyGbmSBA%2BToDylqTjDVfth1IE7nNbGokF6pyQ6kv%2BzZac1IB5BFJMwuT%2Bk3NqhZFXRzKnlQjTe6QyEuDjG5XFf45eb0PqM%2BwdeAtEeohSJ6Con%2BKZko8kNXIS528UcmofZnL3HDbKw%2BcDihH8Y8JqxNG4Be6Ozyr%2B8HhftPOiQPELB65RrQgEosxfOEHZHO2DSEDgmLnEo72pEkx0BgyrnT83tIcOt41Oo91XxDB0U596SQ%2FqwfWcP1rs8SQLLPOUm3m3ZvkGK6nYbi0yB%2F0ACpu6HMpxY9SXhhKP72DFtV5Ou8Kc4UUzFCA37XhxleKPn0hgpN3vLNTx%2BsWbKmsVCV3uULeJt06tv3n5ILjqq%2F%2BTRoBa1zsRMQlEnlgDginiB6LR8BhvopggrhIkGXpnPZbzAad414lKLSp%2BA7qWK68ryQVyVFrBLKKTtH4414Eo0OPYp3qL1RF4UwpoxFeN27onzDWCF4SzxqMBE9sp3d5in%2BarbJMOGHyr8GOqUBYh%2B1IoMJoILHF69CAdnBrpdksRS6Gtzn6FE%2B%2BRrEVNOaZ8rD32G4s82xqrAYAV%2BsqisRgNwaPnxYf3hl9ekJ03aCpr9FCUBgHHghIzORLbwD9VGXA4u7HSJPhX885f%2BQohf%2FGt1WASQAV%2B4joLHng%2FcyszqyUcro5otPMnKSuBrv5NducdmeF9ISaAAjENRaeYzGmnEFkm2vA15rNY9XEjBayZHI&X-Amz-Signature=ab8e756b28f64931f8e4a5fa4f6a28152322ff7773ca9f0efbd3fe4072b92042&X-Amz-SignedHeaders=host&x-id=GetObject)

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

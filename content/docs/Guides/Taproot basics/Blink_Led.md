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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFHZXX3P%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH60BBCoaAo6TjgFsjiRs59fuIqV0kSU9zosLYc0gzg2AiEAicyT9gAnchq8bi6g9pWpPgM5Y8F04Kg5UG1ZxIVbYnkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEWd16MOY%2F%2FXDg8UcCrcA8kgNETfiBTgRlN7pmcU6I%2FLMr9F8s5%2FDsEbmcNGPYy9W52piQyTwfNYRtL0O1ngmL%2FDk8UPLzgDepE9WxHL4FfAEzausyG8CNLaoAK1KrsHLne1Bx4MvCPoBJ3OXuwdS5XPp2eCsSJoW8CwrE%2FE1tJ6PZcOTxUZBpvT1Cae6KEYvajuGhYRc32BpluZ35urAaXjPNZBFgp66%2BQFMNlSxYuGTLCuaS471R4eKXZXqCWDPQmWtduVpACcYBojcn%2Fe37PD4VTZojc%2B6DbkjHqKG7%2B4tNVcix0o3%2F3fpX0YjNPWAQD8dqJQufkiqklnbhtuF8eRVWV4adUJ%2F0PEW7xtMWLQyiILv99nDlOGiWBJsTo65eVfS9Lq9q%2B3XU4zL5ANqN3EykvNN9dIFejHzmlFoTBDqpbjchQZN7Y8KNTED1ReEVeVEqJmJP%2FLMJpX6MiuWTw85n47y%2Bd7ucnEpn2pCh0RJxOD9R%2B%2BYnXIWihSIfay%2BTB1YhdoNdrcBMbl7k9PGcpPT0%2BYyJGRlRyl0QAxSvAI%2FX5FZriTTGEH34wbBhPol3t9E3llLVgsY8y37pikypTmmqf2Sl8vvZF1wiATea748WYd8P%2BnhUNZoFxoIqYvJ%2B6uMFffooG7Ck4LMITttsAGOqUBTxazKkvvJhH9kCK3YWVr14JCfAI5V1BIifya5bcUcGiKihkAcgnc69f7y0%2B3ZbXYFTcxsa%2BHp%2BQdZrdRWpoGLJd2fdgU0yiW%2BTu7M35u5V7a7RFWYy5eysuK2dOK0i8GC%2Bt%2B3t9RsNss3amEmOmKMeqw6WEc8ef%2BxQpX9vitIwLJ0UuD%2FuBt9iwoQ2dPXHylyxSNGoAD4tGNLF3hq60RAr2bEa13&X-Amz-Signature=8db80f15f389476198ea01a0f7e9608877581b2e7ecd04256adead4c79e7bd19&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH5LLBCM%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsqOhASTjCnFYpmdqeFNwC8G8kgloBBgY%2FrG4eRcy7swIhAJYvLPe4lpDJS0GMmZ3eak%2BTAHsYiTzK9ZeHLzRk4Dm7Kv8DCFYQABoMNjM3NDIzMTgzODA1Igwbi8%2Bu6ecSzjlEvsYq3AMUQBSfR0K7rSJJ7bctCdL%2BhBzwRLBpRSUUTvvPT0jsDFsYV4TpaTqABfvzABgWbvyDEZyeJ2PvtU6hqoNB1GuURpMPq57NcpFv23%2B2V6fPGeCuQm2DmJHP5gubnYYtaukV441wGDRW%2FsE18WSWHOPaziD%2BZVjbjnS%2BViFfI67gSJxMuQxSFr7W%2FEmbYIDalA0hTqSfO5RTMTAdbMyulN26aeslpDjoyxGGnGZIuA%2FQ8NDfqh3V0gzVdoF2YuJJp%2B5CuKgKgiDHrhKGdfG1L2IH%2Be%2FJLJaX10NXLhoMFboBbc0DjyWfg0MmceO1cveiV8VzkUxtn6%2FfyUvGHUvdjbiD1LLjcJNSyOybU2mOzXaWIfql8IY%2FFv9oipKP%2BmllMxIk5s9q7aljQO5nfZ644%2B8TZ1R2TjqK%2FTEEu8SE5VOY7UVP1rFs5PFyDKzpYIEdDeHkhq6LPdyI%2F8xwKihfVUoZLMh%2F3a9LQNEs89GW5JggypDMF%2FuOlgK7mRsDNkEKL2dCKtAnhIOZFlLe1YLZWAMPgHa1tNqx9XbHjN29BGCEtbvrjqSM8Us06WYMOoUbj5ALKhipwgo0t9EW4nVKReSq4qpvfVoy%2FlC3eSi7hBI809sMd5Z8jwvRgc6rdzD47LbABjqkAawUkXqE9tshRtD5Ui85v2%2FXMz8rUAf%2BTMLUDoeWwRgOi%2FqJVd4gzw%2BJdMWBORdAzuDMtS5qTLSeqNf2qE2uouJuZ4NbN4v4qsJbx4w91f%2BTO2tZTINzAjdOhbaEj2wjss1uzxLaoGOnzCdL59Ye3ALy5YIkPMlwoZ9NRJl8nw72yFnBAKN2%2B8wNuM5FyZ08UCgffkme5W2k%2Bwy%2FHQ4wAA0itigy&X-Amz-Signature=157cd1786c690da1ae1b5190ab158757d57743b207217cac161e937d116edc01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

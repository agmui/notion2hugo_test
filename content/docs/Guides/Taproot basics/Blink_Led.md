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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZD6LXRS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHG9rMBW2DtRwjUoVqxT6x3X4fsK6FoPViQmtumwXhY%2BAiBwuLgdpsuH%2BW5LJ9OYsJPHyhT5StalSiUKxPyObljw4yr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMZ52ZS3ibXEMBeuHAKtwDYEdBgO0%2FSGF%2FjexzO%2Bfu%2FZk5QmuPyqSW7Uh8L8jcT2LYbS8HjCmXYVEyGI59PyvU2mufqhDdRlavF6fH3iL1LT%2BjlQVwH8oU9e7zBqOymHp0SwnVNS9aP49QbjOyUZGNWHlOdqNyE6f1zqBjP5lM9dgVMZl8Noc%2FyvEmLfVYDfRRIXF%2BtY%2Fo%2FJIfoabuF4Noe3nSLsOWjbjGJijF20xxQEBxdNoRVikG36g6ejKpIigQFiXSlmFQ1c0Y81Xa%2FK91orSQz0l%2FeJcvUzkPdcHji3Uv4z3SA2YGRFMew9vgzMQl2XkHs07foWwtf%2BdQzx57tqPjOS%2BGKExE%2BfSr94z7cHRMr5RxA80cBiGR5gINuUn4lCP6J0vHB33%2BDQE%2B%2FovtwfMOOhO6JCkAq6mk1l8DiXh1DcrrSJCm%2FJPuDVFlfDyOVaotOK5LZAMwEpJ8mfxncIgvF4C%2BdNNBd3jS67Yxdhs3qdt0MTRkiNTZnEaq2Dw6FZKOfvgiiEpcHgUnhnVpIMfOZqS%2FE1a1VD2TCtSfc24yMKieSEeFihEagOa1Gi4QZqVhRXvUKRNK%2BopemHMMAwfbOBqpZZhY4glo9yW8EYiaXj%2BHD5CAClkUzej2gp3cTXk9muTmRwQ3WAMwy%2BC3vgY6pgGui8ONQGLMCzcptBOjMJ2MfhxlFAJzILPjEcgjhj9HunbvrQC1CfShXPvr122ihcuzsDdgUJByuQ8tkeFrai%2FcYCmrNWSnOGLLdxfGn4VGe6CPa8tfTNMvkM%2BkS9os%2BDS%2BfUlsB0kl%2Bdu%2FO6POA7uH4xk4%2B8Ys75pDQsb4k5n8V%2Fwl417SW6KPcJ2Y8QTxMrKaI7hFwIpmbDArPDEzvyGX7dovoWf1&X-Amz-Signature=ccbe86395c5f9610c151ad4fcce3b5dd572bc4915d0b129101b1a294aa1d4254&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS5E3EEW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCIz57Kzy5H8DbBCoIimJWTvxrHtjKICVdOVa2WnmtQOAIhAIZcYC6JZoLcP%2Baoki9AOo2jV4Es9jhgg6ez22bFsT2FKv8DCH0QABoMNjM3NDIzMTgzODA1Igx7W8HCfDJNsqy0c5Mq3AMH49xAhNTua7EnWMguRJ%2BkFHJxsCYhpTByM%2FmUZIJuPdOTakFQrxe3v1TLMAXJWWstG2mQN9Kn41hFrbIKPMETJjRoEMOPnqpsTygfelRJZ9PP00iUTAzcIcf2ot4mnym%2BXyuRbdKkt%2F0R7RR0JHLpSmcqD6G1WEV%2FBLaolQDKfZamDn9EkQlclSJo%2BaCfDSrZrtq5lyp1n5J1IM1xkFbhkLqqEEgA4k9vgiuJI0A%2FPy5rH7s1lResDjKxCe8FPhvr5uUmB7DT6810%2BGf14UxRAHmNtSTsvUQh9BYALq%2F%2Bt2p5Vov4CyW7AbgwF9gbSchsQMpuEfMh7QZQAJhtB5KrEHTbc150KeP%2FOhEynauuaG9b5TAJdI%2BqgfOJCxIaEXfCPBTXQ8nBPVYh63HHWKGnkGh4lZvnQqjCbBdLEtIpEVYJTI5UwBVNHi%2B%2B%2BfEIO4u0WLgxzzMdd830ai65xcYR7r6UljY390jEQUVg0ITxosp2vq%2FjY54VzZrgbwSIhz1LEuzcTeyFDa%2Bpmy1e8D3y7cSdIcxWa587UXVxp4AxkDikNC7Cp4CL6pMFpPhxPgumyeobljAvDGNeWTRc%2BMqBbQkdFJm5qh9IAQaIGNfaTmy2ccc%2BW%2BV0cILWXTCx4be%2BBjqkAWRWELQHtTRTSC9u4%2B0rqY6Vg1o74l7KsgKDuSCrPL2hLKfpSmNbtFfYN3mXO%2Fhf49qtDecz5NWlCjdYJlXHes9p2fiQgG%2BZ3tmBX9AmvcZmFFesRxqCDEDh4a56gQHYKs28Qbj%2BRBVPAFAkib9BMtIAatAALbmL7FJSKnMjNzc4bHxa5qlLloYS5%2FdoD3fli6p57yr%2FFoxK4iFSQXSVHb8DDSeC&X-Amz-Signature=660f32099e21006d119b3a22aba48bf6eff12a9fe1f487c0b7b8807cebdde4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

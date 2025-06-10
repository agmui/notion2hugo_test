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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGZOGTE%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVQCO7663pZRrfPBfk0QyiQs2QVItAxfDgwfdcBYTzBAiEApw%2F36C9dqFeqyEMQUfIAGANodBXNAG7N0i5C3y04WQYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLe%2FpG0DvltxB5MB0yrcA%2FyXgoIC18uALHAusiAyjUrbgixjqyskXnOogavJL2pjvs8MrrQYvhE%2BtoXYy4nKgvQVMcPdiOzduHpCBYoQvl8MHJ7T2k3E9fsT9oO1o2VMyhVAe3%2Bh123EjKDhy%2FtEwy5JEKIgA4RbhR1k%2B1zS2uRm%2FXnilTVuFYJBogurP92Wj%2BhlYiMZ9bewUiwtrOLD9wxVa%2Fz7WzvsWsBVHJZSvfyGrHqKqAZP7Vb8ANm%2BoQcWmIZyWdFKDypzxTtI27mmEPmt6IPWPxRE3tHH5ySlx8%2FiHH%2Bt6O9LMS307T4ig%2B6WIPe99pnLRfZ4npxjUIkkskgaTO5DT33h%2Fs7msa2EE6RuNQjavWzUOKuVrcib1igmwsmX1vTwYGdwFV1C%2FXK09CTIHi38BjkTCXE3RCTdrnOGhOZ%2FP1RXO5PW6ziWpkHtEKTwICrsIT1JxePChtIG0MiEhFk9CvNcdf1faPJO9LeZinaFeJw8OmuI3alxHpgq%2B1k11vu41%2BmOzZoMqdVRCgLFuSK154In%2FaPaqmbqKDFe0CSP1D%2BsS%2Fxh2Cyma4iM1BiSae%2BzUyKhf1EKJrgkE6Vyi92N097J1QEQrYTBFxDtFm3A1eoV7mWkodcaw%2Bk7FvcZOuK7VX41auqpMJmvnsIGOqUBAIFpH0NH7Kph0viwrpC9YQIyoUCiPj47a8y%2B%2Bmmof4Rs%2BAc88FFWF2M3WXEx%2F8JMq8xIzmwAXW3vqs2VGJ2GMGzLXq3wuscfBGeVUjlUqjXrl5EFY0sauLp9OWy0H8RjIC0ZCxi0SllkGqmQtiXnge9JPf4e%2FTgYUruXH3ujxgyjZbESrCZFYHUQnWropWR5p4fMPKWN0GBl1xf9DGboZ5UN1XwX&X-Amz-Signature=5cfaaeb8100dd65ea357fd8ac8535635ee45dc3e289f723c13f371d258fad57a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KGVCDD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdvdj8DVImI97JN9aC2qdw%2B%2FFchnLDFuHAct9EzOqtYAiBoBuRnb6LGuWxwtiFN6gBZZbj%2BmRuZBLrvvEtgLUjoniqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU1PUNigybPLwck4qKtwDsfpS840CKGQ1FX26iheC5s7o4EqIXmqlSW8UhV%2BxABERy6ZPz00gPT%2BZHcTi4poPgMGKXPWTC6n8YNuLxsAQDOe1rqA9PckBoc0cfRyNLAyN81uORVTY1kBf%2BdJz0vMnQDr%2FED1YFhjiHDkoOrEhcvl4ILTvwXqLw6Y2Fblia20I%2FmWoSoOw4I5j8paiR%2FVNPQqhhUvWDIPwTgvJtyWkg5bKpjpLR30bUsTvzKXFB8b88H2DPEVhge8ww9nFO7tRR9Tf7A0T1Ax2ddv4RpxTV7l0uKt%2BeQxsydteyBk5UtNk60uh0aT3Ja%2F4sXAIWijfW4qVjbKflTxds7HE0FasyFbtndARlO3YZmEYrN52l%2B2DbliGPb%2FIM9MDknFQTDrrur%2BbmzgFBtMbwKLs8nLDTWihCXY%2Fp6OigZk3mA62%2Fvakonm2KAsCbZT9jGuVoK6TQKM0Id7CKvoXPSR8sBDtwVIwNo6cSGw38LvDlAAWHj5ee%2FEWp7qZGn7utZGsVyD5Mh1WzlFfZyjMk5RFx9dneMCKcaGwoH%2F0RCf%2BQgdwnkPU8tRV4ScCJEJCNd9spiK4RGUCMJmlnOuBEG%2FWwF2Czr362tXZxAixZbJGe%2B8XglzRAjC0408cW1e6x2wwuaCewgY6pgGUqH%2FOa00qBOuAchUNWHdnEao1oCDV1TjB7DIButiYOMSCaaTPv4Q9CTrsKdDMUsfhwG1yGCSaApAy89N%2BskUk7z7nxwObDVqzzj0xk8Kmu3Mffam4kJmyz5RF8esJ7FJNYD%2B6YKRZKfBz7D7c4g6OIzPsseTiERWLSBC7kaPmPy%2Fmzift363mCCLnQl0OTsbbtsX5Y1BF%2BAzAy2MLiyzNTwG1fIZI&X-Amz-Signature=e211f1b22523b46580eb652c9c8943ddeea7b51c35c372c8645acfd41ac35801&X-Amz-SignedHeaders=host&x-id=GetObject)

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

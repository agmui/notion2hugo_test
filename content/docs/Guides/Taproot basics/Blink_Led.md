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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDBGHCHI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHfeACg6YnOsmGKBMgR9EKtaR2LFTdu4D%2B9%2B2BLApbFeAiBRlFu%2BwmMgonAb%2BCvLciR0%2BZqQDORxwCAAM5z7U8QIVyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfPMLmKDVBLI%2FUU24KtwDnGrbrkDowk8S61ViWRHgwQvbCyPiIfJv3ktHqM%2BHJuaqZ4w%2BGcUnbFFBWk7KiGAnDijM9d%2BrDIkgJK8GoV8mrI1vznnaqzkHTOQk8904UJWPQYOQqJAv%2BMi6Kz7%2B2e1OgkO%2FkDe8WXYV5RHO%2BQFA%2BAodQD7VU0Pcq42eyqUgNqFoPXqpQXfXzMeoHL6Ncs0vqjMOvUTfYaO4wZ9op9IGP2aSt0xHVECP88FGkAVwNW%2FUAo5ZYfTwXcrHE5u3tR80r%2FEfFFoCltqV9ibIoNyPK%2FDP6hgIuUkZT8RORKLb3%2B%2Bhdpq6sEINjqIwzJgDKtp9nvZAqbdrQmh2VR2Ygo06Bgj%2BUvheii89Rj8R2vDYyCSSTc20o0au8k%2Bx%2FneSHATjLffM7njj2Yat0AGsfV%2BkSU%2BFN%2B2vDH6yJk7W8007RZVBUmF1J%2FBTrN6eCT4c7A%2BIRRWWVJocN%2BuGHfoVkdkytb7empAVpotvbWO4LOVvXtHvmFnN%2FHJVVdUXXReq8HNWCHrx72wDQYtn4IGffjIias%2F5NUKNk1WARoilWi5RMeBD3GBzbY%2Fh0gZEYiN6zmupbpXtmYt6DkQKMpAlEKyyRbJzVi0msBjOEz5EanfMHUi9FIDPAfs4Ej9SEEsw8PWOvgY6pgF0%2BggafY5y9jWgc2drLkGHEVip5NIWd%2Fa9sMfWY%2F4sybHyvZWplqKV26aK1mg%2FVbjc5TYypIrqmDztY%2F%2F8ELghycXqkUKsiQm6syj48%2Biip%2FEJAL1valHm%2FTvZaa84jTl9hoSiZkDXN8693dJn6GxeyOoxTs%2Bq3%2BzJFSwS9ozbSvP6iMaCoBc6d5qd6SpR29VRGBZzVOe6j5XWfv6%2BpnPi54%2FSQbRD&X-Amz-Signature=6b1679eadd3e93589c9e5d0e041c4b350d939b166759f5a7a2bfbcacaa39e1e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU7GDG6Z%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCAQgYAw5WgA95o%2BZt03msx0viROlD6puIawCJm1VTnBAIgSZ82UU%2F1DTMtKRmv4M2BDiZW%2BA8Av7%2BB2psc0dWQAxAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BSR5t1yOls2B15%2FyrcA5E98taq%2BJgWsPZ1keWfV8sdwEJSbvHNiNPMAh33zdlh%2B5bt8LSK3udY5ZPZBmR%2FuUTgXYYcTlxSDvvSWRIbn%2BFbYc%2FvwWCCGS8rnl37LhyfdW%2F7m2vvnVE02FKd02Z343G57IwIOfKh%2FCjLH7QHI3ZwrM8xWVRxWM7jmq5kWsP0ciYhquXwKbkDpLU5W8m%2BlRD%2FZRYX6RQ8IEEN86fxps4Uuv4Ly2W%2FUI4mvWH75MuG1yjNN37Sv1tmJUzDJYI9oyzIhGGaHvtWWD0MkFeMek%2BZRAiNQQYTQq%2BmJxni1WniwZYBHappvVZZ5H2XOfLf8ZVSdHYvmE7PESxoS7b8kdh1qTVokVkQB1THeh6ESkL7W4CfrG9qDV8F1QveL2UY%2ByszSsUICDyRWeZk3lK%2Bq9cNQcfCHzXDcaQsqVgHHmQe1u1UZ9FCZBiC96JJUVyQfjrHWmGGAkY4%2BwH0dhIuA7L2THVh7F7GeOwq%2F8%2F6R5RvCkDWwLdEXlXSVkOgyA5HDbJCPAP39mHEKjDIJjFp6LcQjq%2FdyU%2FlPNKPZhzJdphj9TB73atyOos3ogRrmosv5Q4i7CcBj5B2iABUWtQWRsjEtzREwyhHXeEhBbai5jD%2BNVl2xfnIHi7mta77MI%2F2jr4GOqUBZXjZDcfT9AZLPENMD3%2BGCRNKsr9DWOecfIXj3Y4t145rE0L8ZqyBRpx%2FWFQI9Wv4KIQRkhkREUaoNmrdtPeKFXjydLFBaAlXAdvU62ZGOvoAwEsQfNtl%2BykVwCiTwkneRFbRdzcXSeSi8wqgO%2B1ZSxiI%2FrErpvKTModzQX8dFnUhwHBEgEzpoVconvvzb1yh0OqA%2B7jB%2BsfRyglEbx1Is6dmO9TA&X-Amz-Signature=61acbca200ef65882bfcc64606fea2c47601cdc71a291d187fe52dcc523a823a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

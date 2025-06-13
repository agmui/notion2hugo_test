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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WXAJL7D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDhO0sVRxLpETiNAElRIl2bvq7HEuUfb33sTuRJQ40qOgIgHYhHWFnps2Bgp8GtD4MjgziWXc%2F4lKww7vQ70lUP6t4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDBJChrs9er4MDR9tKyrcA53dGPyxrmyKKngQwGvf61dzZ1mlT0%2Brn%2FeKhSBzZvKCctj%2BpDNRHuPCUkSV5rTZ2Kv%2FhgH%2FPxvVo8XArdcLMWTGx68nlTQK7GdGC%2BGlzKsDMETwMiIwfGhNp%2Brkc8o0UJt0FvW4gA%2F2EwIElCv0DBxjPzf%2FBOccugyrEta7lDVDtJ49uR0YAK0VY9g8G85AxSXkVt8EtgLqVc%2B5mBIYak4o%2BQJpIH0Ph1m8JtBbAMnS8qL%2Fwy27eYGpQFQHbx%2FLdq3IgVDeqT%2B5Kd7kKWgWIjBJ0zlqMIlBfdv1MqXFUWx0k75utA8Kh7VZXsCoAE%2BIHbrfthic4zfRDWdvsrs1q0FCvbqKHIjnrO9PFxOjN0hdc3G5Zmy9c5gG9ShGu5IYMvrggCRuJVV6%2FC1CzsgZKEOOZb1LCfcIRNjpMFdcNkaDmcxNQrB%2BqrsMhQx84GkwWxsHe6eMXA7AyaADEOpQzTWOlzmJyFiwVbOjUxuNX1M8NKuDMk82Bg7x9AXFunqNsVfadlig2HayA06YRFLv2IXhFlcbxIIWu%2Bf69tw18rbGa9h6UzevW08oL%2FvLiDh9UWP6IeQsPTra8CPQ6DbCtnVO2aSAccrBm4Syp9tgdgb7mP0FVjHML7gioJyUMLGSssIGOqUBoJX6HOnJm%2FiiuKXwthz0SpKpLE%2F9fwx%2Fkmugi7IaC2WDp8YyTntrP4qOYL48NKFBytIhbdMWmXx3zfmOK8Yr6%2BOLw09WknMI%2FxPocWDqAArQiAs9hHLxokAFUxKGgb54AWVF5t%2F59D6LDUUaFLibcZq%2BXG0qK3OOfcxc9UMoQdlIo%2Fo%2FCHY1QBCTkgPCqiUn1oiwjGIBF9aE89DaBZ3jIFs4KAoU&X-Amz-Signature=598c5e655b2050036e9d0ea62fddeaeeae5a40da15adac6d2410f044967d6776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBVTLNZ5%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIEGpeVuyJS7dXr5V2YwvPvT%2FNTyAcmWlx7FmvsihLzkLAiBSHxrlsuq2gMztiqBhYJgZXruj726qOTmdAvCvV01xASr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMP%2BO7FXZFNZ5Tl02jKtwDM3CK0GCxZFO2luYiKlhEBHGD9sTnB%2BbtMmjLm%2Bw5HkjeaQ%2BBQpcxzyT2ju7wlHXUEKMaLgJ010jBbwL%2FE7YhLB442wgxva%2FYGBas7GvTYkvXrrXPlGZJg8tzz4mxg2ZvWhyqPEeAPBinKcCQpfmzpq8ZXSk4TkzyUcz871PV1XBy8IplcQA%2FSkB5G87hh8VvTLjgpBCZEsZHAdtP4JKVTBYnhM2F3EnwoN3irLyRk8GEr2zvNag4RLr2izQvaVwd%2B9sprMAtFl5L09KodezOC%2FbOXdyrdzowVq6PGyMtiZsmSwUJ8piCpm6ywS%2BVvyAjdrJO5QcliHuim2ongsXAIT78ZqbQyKlEXgmmmcSCnRO4gm9CHq8LjzN9zCmuHkel%2FeYPwOZrUL55xZgeYuyeOXwRcLUv2eEbnVPmAo7CMGp6p01KfP%2FyL9fVry9M3V2MXpUJAFe5XJN4t9MXK07va56Jz5ApScd3Bon4XHlHTQbIbvUosuOFNPZxguY1cdFOcN7vCO3b5pH7iEQFOV%2FnettR7dT57S%2Fj1peIUFVx1nZo9yUvJVIndaE5k4aDYf4uqjeZoE7AQrpagEtHrUCR4jv8IY57mZ%2FOxdtgg9ArbpfHcEH9FAgicyAEv2kwt5KywgY6pgEoUTgTa5ujHJbkbcruJDY9Bv9LHD%2FAknVbN93HY1Z6nnvxhDNOK4STc3KuAZVJvQxxdjOfAKwOF7PgtxKmzU5tcLXv8RP%2Bi3Fqb16ZEguHstUwU628TbXGJHcxZyPqULZDn34ByCIZqDZ5NFPatra5v79lBdTSuIiMlmzU7ouSxDmnjoc0dvARb39kg2lfyyadRFwkG3kLboUu3L93XcYT0%2Fh4qnlN&X-Amz-Signature=54838f1a86ed27307a68bf3b16f2cf3618d9ed294eee60872e839777d46637e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

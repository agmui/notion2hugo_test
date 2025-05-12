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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RWK3NF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T050952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDK8y9aYVl8yvnYc9IHmUiVdZulIuBbYEPV4iJPDT%2FceAIhAPEsL0J8HjNlpL0IzKz7OxNktUdqOhDzx2JylZIVj7kUKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxRFGbhi59dmFUyUEq3APUdjr2OqGhGI9vW8kx7adrZJKC4QrQHqnGfIDH%2BDruKYzVsWdtFRNG3wEHknbx1RDxjH%2BHwD%2FnbVGo8%2FE%2Bb9fFJlEmnkGjY%2FZF%2BSatvOIdpBvd9e3TQg%2Bp6l%2Fg6jD7gnF26%2FoEUDmLGN%2Fek6K8vfZ4LhnKXlk05B49GGauerzrCKhL2mYCQ5Eo%2BPopMaJKSvxOFsuO9froi%2B2f58xXuqpS4IRkV33EmJD7YWAdlc71QGwUB9rNLj1oEGz1OuVNxDSUxP6QfXE4rr9G7Q9wWoK142%2FwF4NRp0EW8Y0qb7M97Xu%2F49WN3Y1ZRVvDBYYZQyNiptkWIMR4NrDShAeql8xV1xSi5E1XjwgulagCU2wEnGr4jPvK9bv9FfLSwPwKEDAHCYS7DHIMHKxstrVFE%2FtkKZKmbUq839xJa19BiCgL%2FL6LdEFfxPs81aNK3PRiNifFttNxdR3lK78p5a2CF30YN%2F9xtLz%2BqJTAQlRLLknydwAljxz11O%2F5iQec0e5vaTE6qSKDaQ7gZDKI7xaDd9quZLFrz3tUxMuBldpUZJEl68hL7P0cUcUlyGjvXl1D%2FmFAqjcL23e1x4pfy8UcK0hqux6QVJ4QgLxRTv4uFtrZzaSBRa7tHzdam4V0PzCG64XBBjqkAT69T2m%2FVrLAx8RaspKxb3FEPdHLgIm9wdiwOg5SdSOLoCd7paj16CWQd1q2iejNQuaDrXBD7z52YoTj05MBtSQWLNwlxvdwW9L7jJztk073MkSyXJ02XDxv6%2FQp8Kw6GKhxYu3pL0Vngodf2Y%2FZAVd0%2BbHmuj2x90REa2rNtJhk1laQzdy6qT95b5pHELrzLzH9DfB9%2FNXIiZELrmT0IM%2Bs5WaH&X-Amz-Signature=c9edb3bd0b045caf957b39a46798a0491ca28a5130f08199e0214ba087120453&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VDHYWDJ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T050952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDuZF%2ByS%2FloamnVmfPVsTsdg2JXspyFHXjo%2Fn3pMpRNeAiB8Un%2FmkpdhArcvmP%2FzXhRtFVdUxc8vETd4%2FffU7%2BElcCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFpfSVc%2FI4KOIuG9AKtwDIu6aKjGf9EXfJ%2BHbxuY5KgFB2rHcFGozCroaSLeV34Gf2CxC8TQdvLQQ4nHScWkM9pjDXGVzd8Vqfn8rdmv%2Fsk%2Fsl8nzkh2S5njc56YjaO7sGjfjwxA1xhXM0fv8BCNx4E%2F4wTuHD98iqzOn2hyiQ8FeWzrkQBdKB%2Fwsv%2BKfW3ypEPJpPShu9hutEaJyl21cdkxn1PDu2JObKcerSjuzIdA94UpBayaEF%2BWah5VFEknjfLC5ElkrinmY3XSGgrqOeSXZlXgC9qcjdb5raOSxqo2RZ3kNGcwlQx4ZYdP8cq4bw6tuuLC%2F0m3gY%2BuNdXej1B%2BWjmZQbcY9s%2B8pw82tsVzhacvciVvFZBMypUhK0aBul8Wo0K6pmcY4Cu%2BsedTfwlMO5t4d0cYMJdGsLGdgsKCq%2BgMgEcdeC%2BeoHZExyg6wDzyp%2FwrHRLpK6FV69%2FoBxIAnDONEpM9qZQQ9hZ4dZkCo0DanHoKCpeFoELhzrUgmHZ5RbGHvUIv3bJdvTWssXSz6300F0Ox2ebf%2BwlNcPTNUyJSWXQOuJyAtHEs89GGFKogNiRKdcZsNXlbmVat7KYQN3tCWQzoyplxvzZVIFUEb%2FIo0KHEk1GIaTA5HS3eH4I8o6AvxN2mPrgYwj4SGwQY6pgEsxBKom%2F1fds5zBqXPhynuei173avcZKyfIAaosNMh4pexXOCP7Pa42L%2FSfDrAJ3RIxA9crZqgrKAbSNNJfOGPEwAGm9nqhuAupj%2FaQ39frWa1IKbzpp%2BGpvjElADlURFC0FpRIDDf4lEevqXI9kkfRLdp2a9Vs8vqsXJ9ruU2NzLEMaoqDhTeZfM7tjWw6vmJvmByJNYgi%2F5QKAzpbEV6zFCUy9Vc&X-Amz-Signature=b5c53cd215b5a6b592b445b9abf6873a6c69836fbddf4dae19cc8bccb2097628&X-Amz-SignedHeaders=host&x-id=GetObject)

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

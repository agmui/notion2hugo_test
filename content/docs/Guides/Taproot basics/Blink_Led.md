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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DVZMR25%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFppfiZEKKUUAgz0U7eN4Ldy9JGk1UzPhTlUvQ1OKbuAiALaLA0jt1nidDoNjVJASj6qZpZzAQi%2BcImovV7MdMzRyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXed%2BmGUtxBY0JZofKtwDPbo2nap5lDHz9X5e7pxsh49rzPHJiNCNQgOkawhMFlb%2Ba2sZyTa1LlSdm%2F4C7VCGsbkrHU0GxI4PCmDQ%2F%2BR6MsPBt6ihlh6oZfcW3APwtGplKXCGvt2Hhc5SDZ%2BHsNLrdJ79gNQjRa3xn4iQDJiLQ2vySrkGplEWg8SiA0WxUvArcU3tnRmcax2AVesozZFW2b2CGA37Y8ThZC6SKari5QMiqRVLyIBEcSndgL2uV5dyyl%2BVe4qZTOtyZhoZl7zMwg7PAPvoTDO4GAYz8C0GJMTIOz3%2F7pF4ARgDrMN5sHYlvjKuWzT%2BfCaMqunONEkLsortDYP3qRgAfG%2Bwxh0ZAsqHgpKlmf98aeJUR%2FtyK4vyhwfOrz9qEB52ghIODeF1HGw%2FmWzFVmrxTGHBzSNkTNoy24ywYMA69BnZ%2FVQ6XwK6E%2FWBLGT5KXJmnvDFrO6NHcF4jsYN8XKLwloXntvgC3wvdb6hLfLNnynE5j5%2BHCK%2BsUwR%2BnRYRmevwzNJI69SyuwZTU%2Bz0I7LWBBhA0c94BQPNhtTfVDwftK9VE57XaGJ2xD5rjh6vs9m1j8Bz%2FazjMjyebIBlIKFubunF2Idt4TBvdQMsgjeUblTxzgyfecsUoixtQYla9SJLzEwksTiyQY6pgGg5AE2TMvB2xjrSWIx6nSt1o56fCwVKHb3DmM4dPIU7ZZSyzzsIWX0vLFw5p7Mc0P37u%2BidRiMvxPV5aWhzImTGPO53oblWugTrQyjAUX66DQxNV%2FFEwaX1EKrgdW3FMzBF25mMFCxvxTYhDGtmkuY18RILerDSZRs12GpOsOQH6yCI6cYJiZ%2F1dIDBrkoQ0MCG%2FNFpZW8QVW8%2FN8cdu0XZnUhzVvn&X-Amz-Signature=cb7fcd0e503c9bf2c7374fc6170f7e654bc8ed513bd2fa79ed1caacd69f01c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNMWEWR%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhXRrJGzYvsQI1kZ7kP2G%2FUs1R88H0IBLkRDnHvSUsPAiAhnzYa9vMUA29XFQ0Z8mX5TWcYztgZr6qKanugyz0zKiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJfoAsJJRbm0LtgT9KtwDsfSSJd%2BSzD1WlLSIjWyYlotm8CkEUcJufBHvgbF%2FR2tGM1QTux%2FFEoz%2FVyAMJzkOSCF7VBhfVO0U713Rdrvrmw2Qo5hl5oqdRFJSxZTbJl4mFe4As6jto%2FKqISereD4KvCB9u6mzlsHFZ1oqzd81C36fnr2G%2BgC9qN43%2BgoC0SGM1h7Ak9E6fVvvjuU6zZFWbYmOqWldUFEuIpWW5G%2Fxlp7zsSjYVduib66lTvwqcGgzTo5m92hUNAfwP9sT%2FOVef6aPhy8JTz2qvKI%2FjP3%2B2ArzaKblZnEy1UrYA8aOe8Wl%2FElims%2BYOzZieYjRVMy1e09Aps8RVnKWyCs0Q0wttdeWIKIVNk4ITO%2BymzKMWgbmBm0gkPIk2ggHIAEBy88OG%2BfWFHSlCvPsXNtMwfbkIByyhfFxDDjL4xpDppNXQuHofL2LH0ytejSM8WGzf3GAcy8MaMoFfKgX2UFXESIp2UN9ywQcpKUGGKzSyIX54XXb158WPAs1lx32GqCZz8BtNsg%2FW8sj6uEF5lr6wfP9%2FxLAeIgktNMyZ5wFn%2F%2BHi%2FlB7IOJ8SVz2Fns%2BleQ6kCbzvWg8dvfc9mJdRmaiQVfyQz1D21L8vRgoJs%2Bzw%2BjqfReA4avbYFVQEfdu%2FgwgsPiyQY6pgFgengftlvM12dyWq3woAZFPj4lkTeBjVb1ZTnimBPSkp0kKAzmj0toUC0mKxbjnbpYe6s5hjW%2FNtFsRbiuUpXxas%2FmOoogQHZ88vJuL9urm19SoVzVN5rXtaOKBH5EKsZCZxseSg1tQshiABpMPS2VDjSRyoFuVvWbqbABX8UNOLqjTAeKX1hI7or4j3ZLsktbeSZA9kIt6CV5gyyEvo%2Foj%2BaN78aA&X-Amz-Signature=6a462b8f8f0efa73bf28038d282c21598263392a17f9bb2a296e9513bba5d805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

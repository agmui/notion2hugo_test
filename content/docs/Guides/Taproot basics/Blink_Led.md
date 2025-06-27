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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5TOLWI5%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCKc9w9fgEZtUlNl%2FcDjvN4NNHKHr9yc%2BM3KueN5lfw0wIhANjHYn8hFyG8iiBrElc6r5WEDC0E7okrtcBDJ5JpcqjNKv8DCG4QABoMNjM3NDIzMTgzODA1IgxA7jAWgEijl9PG2EYq3APxfCgPZwR8szPL0T1ohRusXNXI16oAtl%2BUyLO5xk4HewoKM2obhYxcjOhZTMnCub9OnlMZpOrjrBUzAD9Os5%2BYvqwU9VVolZDwhDw7ygJLCKZPlk1tsuopTnxK2RtLdDKxPt9%2BMKwwP2qriI%2BRK4A9L3Y5QWLZ8ACa%2F2wq1tQjOJU%2FQaq5c4%2FZpPuJUBzdwyei4IKPn%2B8aXrC5zfoe68y8OV2Ao0RpO48PVeLvulNOlk%2BTN1aV4fEETOse7wloaPrJzB1G%2B%2Bn%2Fjb209Lbg0rxixAEabPene7UEjZMFztJ9VnpJM44f3kwDsQTVVW8NNi9ejvxhY2VlUCQl%2Fx9dw6k3v0E78woULT1viJRy7JTquw9D7b%2Fv7%2BwfQ2hzwjVA%2F1H7d6FmIQXqcWv4bGz%2BeQYNJzW5E23oJjOe7wzOwaVYcxfP5%2BHnVK5nSSSgUoAK4EBFKT4PLOT6A4HvedeD4R2eKyJF7DT4b6I6K3uYnnvIzP3Px0mmP%2FODo9mqKwV%2FZVS9aVFBgDD5P2GSI0z6JcgVHnsvfW5wu%2B3peTLcm%2FUGgNMmrP9%2BUng398mDPCbfuT5baDC6VLbusy1xA3Oi9DDBbNvfsLeuin%2BfyssD1uZknKDzbUYBVSMjo0VZ1zDByvjCBjqkAdS1moYySBhEKTs6uZLIJdVUQHYkali9MvoviefugErN9ayAQPOP9fobj799K1wGRw%2FttemdbPuVKzWLoQ2YUWbTnXgZ4GPrjmYnPszHgLhmQsJf3omA%2FjjLBghwiICnWa2q5U7cUeBZkZdte706JyIqu%2Ftu9KvLF%2FEPxG7ND%2FbMnqB58FX6xXnIFgvilUn8SttzE%2FOyIMh8onxoSQMgkRH3IK0b&X-Amz-Signature=b9af2f544e636d71c110dfde5b1e7e765fa97bc79dcf36c41b89859b9b1989e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ62HWF4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCID9S3%2BRjgyr%2B6vLyVHStwIbeWScmoEjgY2u%2BAhY3mTA1AiEAxiNIiPMZG4IZFSOVtiLxA8MCTmUsEsA6MMfpWGyM2FAq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDG8uAYvNAiNp3J%2FisSrcAxQgrkR%2FXPi7KFmjDUCrCLkJzCr245BEssiJ31fOUOFN6aZyNWGGxJucIgWEBbFAT86uaev95ne2zVVP2YPNzNGGfKuQymhM2tmZhYiSaibvAXMsLLSDQhei2sQFEPbvzwpsWbYdTchk0pGfCNre4KBxi4IDGpMRBNM0%2BPQjU%2FVSu%2BJ%2BIBG0uQNRML28v5xE7%2FDZnLdHxkSd7Ls5T8vc5ILaupcQbYdi9BlTUPv7wGcsspMSBLKu6y0c%2BAcjd4YPO6M7bYmcZK%2FrG0K66vzQdzZFqemDQUOTQNW%2FMhi9LTtuCd9ff21TSfgNLhNvSvnE5heX7wuKg77Gn6guqGsRtNMtmY%2BBtXtm%2BtCVOcN9zHF9pNa0IWnWFNtgFIjt9nD39M6nL1WUI2DFbSSxVatbtlhh83EUSzeV3AzH%2BIyTCQML3tJUCdyMEpQ7en4PXKYw43KQyRe4ufpq2AwCABmNcNSJnxtgHhUHqAeGbNIOfU9Mw1waSCILL2Jw7jhDZ5LI5VLJjJt7YGV8hKCMsm6ENmjp3jzjH2gmn1PI6jmITbpjTNYeyjFah4%2BPPmwbUXFFYAtDpGuOnBaHy%2B2Co0j1AFZ9rumkLBI2c%2BwWTeIE3fBrFWWXDjVQxE7w%2BX6zMLDK%2BMIGOqUBW%2FllspT%2BJObTNtGgS3wUX7UXI%2FvTApQ9ivinTgFc8u7RmIo1zRwXnBD2Qzt8AQ%2BGvkiuO11X6EZaIYboMv0JtWaLTqFv%2Bbf9aVeWucEKqd3uCNI%2Bd3noXFijwMy1gJ8YIHog7%2B%2Bw8mpl%2Fep1NcF17tvIV2Qf7wXUC32puEVwfHekzrHLsqT2IjE7V%2FHQyxxPp9IZ%2FzPnI95Vyy6RNWYxkhGoK9O%2B&X-Amz-Signature=22651fb0378fdbc4249e41ed4dc0eb2c418af3bef395f44d73491e7f7f263297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EUQNAZH%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDZ9vVfXXpq68ol%2FUToWBWtyTo7alPMCEPpsQ%2BNVgac5AIhAPnHUR4KoD6ygjiroix7aP31Rh9TvsPZkhJ041fOmpwDKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMGl23OfUkf26ZcvQq3AOeoNKE0mqMDpzeSrLpY%2Fj6Iq%2FQ8J9hqD95vEbD%2B15qBUSbu44YB%2FcR5pFjjkdim5z30er5Kn1EqXTjjW9fTOa5rC5kr4%2FLpXfyZktA94Dxk%2FE0vSE7vW1uVGhwigO6qEqLQryYcvtLI6MwkdprZxOAnWEDHYfbzbXpee0gZc91ouzA19s3selgF4z2hhzlirz2az6t4BQgkB8ZkUaDCz4tQjMhkEcnJsUQ5fbsenOvGBWxtaAzXp%2BW62tx%2FPgExqXDQOO%2F2Az7JU6k%2B7VG9rPUec%2Fe0RjBRc8VK47MCbGcpxsdGbjJ1qw3eT2lSL9mB1s%2BUkP9Mvw4m6cWOeMLIRNusiFOgQbXTT8%2Fhph%2Bft23Zqz2SueaB0cBJoCS4bW%2BzaZsfMgwl3fRC4YRoKLGyw5YtFymQguoYBBgLbVHBNERLsiQZa3Q3We34xZyFJAIe%2FEFcun%2FnehG%2FnSWbQzS51pCIqyKsTiMa3gW%2F5lJK64lyajeymPndmNWp5jgB50bU5N1TbmgovNGZoXL6fPmXmVIG10VfyVEbtiP60cKQPd3AlNL5u0NcmspDvNFl%2F9AWZkEfcbJz8k8kB%2FS3QU0MggnkRzDfV1n23hizqXcwY7mJXWc%2Ftdjc6tbxzymrzCPzYTFBjqkAehW7lSerhkGKt3KM850dunofKfZ8KXGT7e41PppwIIYRy4zqsjqQg280lK7fJQhF6FABM8uSeFSmaKh%2B5BqwA834%2BTtdOfOQfRKvHiRm8sK2mQRqFZpOpp1n0S93LywzK%2FiWQutzEJ8VVw6EUAV%2Bx39%2FN5jA1gziCFtqSpxKqe6WRFPeElvT8HhAndP5svHy55bO5m5YLkLny%2BepQWXxeH6QHQE&X-Amz-Signature=bcba23430e2f7ffb66e7baa168405aedf1151b5d03b09daf2c9a35c73b600b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDEQNIH%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDw1xas6jEe97TwvfeQKfLXY7DPjOpruqhUwLTVAY%2B9CAiEA75onIEzTXnztuPhpOvb4FY9dZTOvebfrgmVfLvqJbGEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHsE9TLEWPBJ9bkCSrcA2fR9c1wfURWZcLNOCRLz2LbI9lVqg7Dl0j%2FFH%2BlisajEqkOdLtybl%2BEz1L6WttCs%2BANAdN2I5cYfXAh033eq%2F4FIZWo5TpxVYYMjPK5pZjPmHYMSk1droScHhaJXQNW0QaHyXEmtUUnGxpY0PFjQlBibsWPj58zp0n%2FRNxFuEedBvE7jmD1eQ39g2vETGI9i7Tiet97ggTxBpEnkvNhF%2BNbH4Gg9Oz9dopc9IchUkcPUyyRvMGDAjnAc9zEZZXNfoS1tph0om19EPb%2BD9PeUebpPGLmoqxhtOzeL%2FNUe9t9o4QUey0Gj6KhtYXInccGhjf3JW4aX%2FkSfOUcnmBr55wpPtqAkBOCKjkUhCe3RbhSkvNNHUNTIQKIluYFrsXmrM1RRLG8WmnTFsP6ZUJXApn%2Fe1JGKCbKOIOLDlYqQfA7Hk9QjSUm2CdU9aa7CG9Ob7R%2F1v7G2WP8pOhSZBSsr3X0do%2FgulP%2Btqtes6wlHGRskN1goQH5UDlh2%2FPaB1h%2BCIMDgeUzo6ZacvEosLg51zBmXCb9HSMw2osdKXY9cvy1x4CnEWGdMYF2hAp3%2BXavhj6jRBucEjv55wCtw%2BduxfMstraGib2iki3uLAapHS14EVaXZExvrAzml%2FC4MK7NhMUGOqUBxmhDweVNXQ0upoLrt3r%2BokM9UZpfQdNvpid7ZoWmIfymNkSn9hvVDHNz5Gt0R9KMXnqbZVpmOM%2Flva0viPLj%2BJ8q3wpzxzFVBbd4cGMfIa35Lf7wOJVSS8K4x5uG377knh5dZ0X%2FxIqx9Cj2%2Bme6B5ZZYQmbzsNL46AsM%2F0htsoH74A8qR5fTgamulGmcIu10Tw%2Fdc9AeaSsnhzgSoGXlLKTHHLg&X-Amz-Signature=b4f4888b3177394f09ef11fe0075db51c44b0ea1acdeec6c2853ac8f330ca4e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

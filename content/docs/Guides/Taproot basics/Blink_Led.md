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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIMULT2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC440bCuoBNQsbL3UZ8gL3S4JvXAoybBiKSfcU8Y2pDZQIhAJbHDUWJE2sRIgq0LfjKhR6y1upY6qlj%2FHLO9J55uqRmKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyapI8Vqlg%2BJnpg8%2BUq3AOePB1FV3vl3fXLXcGEVksgNUeVj8Mo8xTlH13QyiH%2BYdPE4mwzafoUZpZJ5dVYNjkBDUfjMYQfdpwm1bmIy%2FM98x0KSs9%2Bgpb9gCJ19vryC9TIC6e9SzaCJ6AhqCkp81qG4QVKJlz8v1JFOlJKxwn%2BNhGPaSzzyj8%2FJnR4uVO7QGVRprgfLO51g327aI88ilbOsEzQETg9vFpSff6tyN6Lv6%2BvJWCaxmYzTY%2Bw4Aw8iHUExUUnzj%2F8uK7tNFF5Fbup6WZ%2FSf0oJZ1N1p2s4uA3Xcmj93uEJGJDRT65EUhi62zk7iAXnHZxreLVBpnVRThnrpUJDMbRm0NcWFevYS1jgBO99YXZrD7hQuwOI%2FyDkB7JSgSatysZZWBh4sSA3HLTHlYCI0ZwSXkU36Pr%2BQRvAYIo3AxWqVU749JgRWUC1kTo7AVQK8W2W3wSKXVtB%2FwbmW8Giq9S6izMGoQ%2BZjgp6yW0kLY8YQvq82D0t8X%2FYlfjmKmTesKI8ZrYfD33yD77D1C6hWhQzPuuJwjtPri87KHZtvuid4JE8A8M2tDUrEvvl4fDS3vbd0hwR49qr7w5lSfV9OvTnBrROrPrwC4FEqSqrtatChFbIQ2cj7B9cCtqhOXHFv5v6GLZ7TCItu7BBjqkAU0DzlSnCC0WQYgbfIb2t0zwe7rvudQKmTZHy7RY%2BQCUdoBasC7JSEjNT4KcvJMtv8jEVYhFLnFP7C0n7EMifzqokqJVKDCbfgcFEPlUddHXDUDTiNc0EI9kbVGL4c8FferIIFNmhfovjo8ePf1oCgMMfJBEQyYBA621Eqcx6vR232kPXk%2FNVb6simaR0YANWF7SD2gmHwxYXVKbhHtO%2BejWG6V2&X-Amz-Signature=0242f906911cfda1adf960ff11be7c58f37cf98271095aae9e4312c1b82cdb27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQDWWQV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDHGnMYIG50%2BIQ%2BDR3rgNwdC6g7u41qRN7pHBt6HwngxQIhANrmzWGMJR37zXZp2lk0owKZM0cwpVfCtWjKsf9Ke1AYKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVKDVb%2BQxHeuufEKYq3AOsixF1OxiSZ85to2SMEyfJ7erL1rfdKuI2jswCzV1JZGo1pAqBrPWWr%2Bsw6it0kbUA33NNXfrtZZqZeytcxTue%2BU%2BCqEW9P1l0q63yk9AwMZe6oMzONYIYnbOlnbalxJOuquzO45jkYQNNOuW0J0l9d90v497e8hc8rYpO9YeRebRfWCh0z%2FXZZ2eyLmEjjpvNIFinwl6PG%2Bu3RZVtbVg30oi01gR75359MgPIBT3BsLpWgaM5QOf%2BCsnJqNpniOi0dduvSxyfvYTi%2BZXegmv4WJV6NC4v2JBdTaprST8ps3YBVa2kM75aNWs7RnuL9XPKLJZiT22PozHQcxOd0FMeJfH8XuvzhmeqfiEpysX8%2B7rPASPGpMUUXAA%2BfGB5oBjdeqynOSaa7UCoWbau%2FlR1iF37m%2BbMGexxjddMlffv7H%2FSVNpsricaRa3cM0iKsfBC80lNEu0HjuGu9KUgYtSr%2FJQlCJi5cbZj0ZgLiKvb1AW3qLVUMCptvnkbbMpQORLm7u3ClwFK8Lm0gYayl4jN96z709DP5szWCkNdRBPRNm9laDtEJnIL%2BmVDB3lOIja%2BXvG%2BjwmoHTWaGWWPSFDTPJq3ZyLUT7Z2Z3e2GHyXqiuil2v%2BhAfpvYzLSDC76u7BBjqkAbxx1MzPEGI8g7hVF3OndryxOXvRCCYNDfi%2FRAFLboIE9vD%2F9rKQNQJqOZE3iDRvnTBqkj6bl2BZ4%2BtTnInOXmZt1I%2FIcllTi9Gud81Q6T4TjmPqmi0Ha5kWfrpowQQ%2BEnPu4YIMm337RbH9NMRqR5H0yGQE%2B9vkoOSZ7tKbpf03B1JfqDD%2B1%2F5UMhQlRs7zOu2%2FUVwkMuHJ3L%2B9xJBXWzlEL66O&X-Amz-Signature=f33419f4f0c6be54f76f838294ef78725fa26b6e1f5e8d0fdebd9601fc558b99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

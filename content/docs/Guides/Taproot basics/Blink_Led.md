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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZAQ3V5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFI%2F%2BxK5DsavB5S5wQigJqcMWxRw6eMyUmnRMYqL4%2FPwIgE%2FEObZphjODu4%2B8QyUukLcPrJJqOYyBNL0AyXiBfqNIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0o%2Fr%2BwYL9zqOD1ECrcA1%2FjGerVjwxMWWtMqHSdj7cNIQ9IboOUP27%2BlfgMkI1e7DtHjo6VWpiUAnHfHii1n9xXbbw%2BXI%2BZj14QmaxVp2G%2FDoBN7rgl8lymXjQ5eA3QEvsQok9FP3jGGBvBaUioivvckHL0c18n0GInmBSVgTyDMZrkU4%2BingMAg9Oiy6egWhHKbTBZoa02wqmIT%2B7G4zDMXuIwLEty1ppyL%2BRrG5wkLEoejGos2ghpH2ge88yK30Jp%2Bo5oXKeg36Lqy9836ZGDL9TKPjFEIZqtJvd0pzKRCuP%2F7mwXnVV2AVM3F%2FInuTdfBEYaxZ2z1gy9xlu7VYfwj7oMf6Jx5Ga%2F5rd6ynCRwwcHa1VpBSLXtrFvg%2BN4VkZ5UHeCw6KSPcSKnWCYC5q6l7Tj%2Fj6sUkoG6Ai9J2nJIMKX%2FoDFlc5%2BmMyURdjVWwXz7Y1pXDAbTTBmWd4yqxg4I59UYnDy1tYE2rbf3z5hAt2D5GNDQvWgDjzNS%2FORCYateRpfH8EFXyOriaz3zd3htlrRYEJE66lS%2Bq4KGRAjMbsceQ8iAPRlrBj7%2BkZ8huwuVQ0mudCf5Z2R50PjA8zHQk1RIG2cBSTDP2RG4jGR8K7CkvQx6x7vX%2BmYVj81RTNmKCijLVgw9nECMJK20cIGOqUBh1o91B%2Fw25Fc0MnC1Ct3sWGvg%2BOEUmKkX0uwOPgQioWOdbnj14530r6VgprfgEU98XI5C9wsKBikc%2B5Ex6KNhtBkS2vp%2BtquNVxKPuKltgxqXseRmpC2cHJi%2B7%2FBGPttEQM6mG5KWGuTkgov5U%2FgnUwpBM%2F1g0InCBRzvGAZqROJPq47heMaL6bpN9tZe3RfenSsKwVZFAgPe0PYkQtSi0t60uah&X-Amz-Signature=b4f929f69da56ee4074e6aea4e306dc05e101276acbc7cc028675d18c6b919a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQRFAVLY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC09h74j23PbcG9ZDPr27pnRiERGnp0rEu0GhMk3oLrPAiEA7eOS44iz42B%2F5dDggtMiJCnErVTLWr9KjZ9nRzwXQcgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDI%2BruoO%2FtwGjuCvCrcA3pWvCgbTmLAp4h4mHtMelZI9KNt%2FMT1dKpB7FXI%2BBpZM2JK%2FMfqLZ5IFTiuhKVcRiAQf%2BPGH%2B%2BCUj1Um7VVRvBRgZ0jDHM%2BzO%2FSaFBj6lok3WJN6n1UrunvoiqwKyffAix0kLOBdlfsZD4IhgR8Vnj93kNlUYxB5vnukeuoWd7A%2BeSoreS5FHeX1%2B9cehaoJj%2FNl27XR5TsYpybQNVVoR%2BF4B3Bi2uAncMqXra3JBHhrae7sJ5L%2Fb8X8dltkVLnIyIQEm8WlB%2F7pctkumhmrzG7tIiejxUPgwvJgnexKhwav0CYFytrQlRcSwLgZCjo9Wp6%2Fc1D8jdaLAfYX%2FQnfc5PY9pem%2FCFS8CvD3Qu8MOMfQmlCNMvbzzmyH7EeBlLZftL%2Fs230aYjdVTbjkCORymF0o0YRHJFHFv8kZ9RvFaW932OX%2BsMfTyQNZYhehC87iPqb6Y3rzUZ1zhRASKDzqizNZXaBhPrY2qYtuhrz3H54pXmUwCK4uoJcliq0XpmLKU6R%2Bqxj9rk1Dc%2Fpsfin3hvqx61dqf2XSNlWMH9lHoIhg%2B7QL41nmjnf2gTJHsMzHmi7zbAn8sSdnBus%2BSTdjBpPy0c%2BZC5dzXrT6YhTG8mIbkRHPns6e16oXKSMLW20cIGOqUB%2F5OH9Y8HUrjMDhIJVy2WE03ElSUIpMj5D07wgrhDxcJYO6ySAkKlzooaIKEj5dklZxbD1d%2FIelE8pzVLh6a35SuJzsh0j%2BNjo96kh5%2Fw1pIADHw4wX69qkZliRGLaXh6TFh8it97fzSJO5c5dWF3WxDC5emgOul2a6xXLpyXltGCeIO3JE7%2F6P92BUti3vetZYDzvDDY8kc%2FCCjh10UuTJCchTHP&X-Amz-Signature=fa21a6da70655121a94229e59a6999d6adaeeae9eb4c2f8af18a41020725371a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

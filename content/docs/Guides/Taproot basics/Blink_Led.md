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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PAK3XX2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCwTB9IQJ7HdxwfpHfjwotYocEHI6Y1ubh7qiTHlaTXQwIhAPExxU6xt0asNG9QIqXuHo0rm%2FQKd%2FckF9kT%2BDBmu8%2B0Kv8DCCUQABoMNjM3NDIzMTgzODA1Igw%2BTNZ7qdU1fTqgrmYq3AN1j5Ysy0VFmw9VnSRXHy6gyQ4oPJ3S1mALijDhub67TvWmVTq7hyMOdC7GwkTLuhLl3Z81UQSX8EExS5CNaSsK0%2Bhsrih90xjzN8Ax6xfdGNBCtqJHiCcos8Qn7gLdKTX5rom6OjiKbI7bjJ8hA6H8%2BDjIvpou6RHXCzQzEzUNZ%2FDk%2FvyBZv4bNGQgv3KDiy630oqpRUopB9xVdMO309SRcXmu7LjlSY60j6w7%2FeB3To14jexAa37mXRmsIeBaqB53qcBbHFsJJLVlziAQTxRdqy4mg1ugWYgPLGZ9QIHNFj2Vr9Ga1nC8AQ%2F2D1sQPZnSjdrrv5f%2FkF7ojwShexCJi2XdQIrdOdTLuOhgrl%2FDrFok%2FHD5NKZs%2F8VbE6dGShKPoFX920lr6Tr5TEvN%2FKMrcXWtEXmiTLz9hqgkKntQ3NYueiVASr1W%2BTN96XP1k2UCy0TpikoLA5G7h7ub6gT9Stb56VAw2gb4ajqRTz1s6pMcgxXzgQkKnt4ZiMLNTm2nrZh6b4VX0ZansKlPSIpDypugBeSDRidtAx9bftZ5SVjnNC1q5G7rOu2RnvJfOkWJ%2FbWsaXBlQfv74dkHJdeZQ8DEvh7tafoCMVA5UXfx5ks%2BIY%2FrPuxS5TwKIzDuooa9BjqkAfL6p42ph1UK4Hl9U5DywjWNGL4Ifc75cgImFzNX6ddX5z%2BqidKXcYqHU4bby2%2FxzoBmSp%2FHEv%2BF1VVyprQh7VGXUyL%2FXSMF5ydAbh5i9OlBJAUBSPs3xTpXrre55Rb9k4ijT3qzJGrZewetNqEkgtEAktDdfzNAWoNjnByb0Moda%2BOUDU4Uzhk5kg%2BFWK9l4VJl2h3EfCOdEYc0D%2F4RE%2B5uqB4I&X-Amz-Signature=6ce271c0a1723fd66e44e8fe5b5f3d31fceaf62794eaeda8a79042cd425f6a38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKMF4U5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDRji4RRSjKk0BCO%2F1Ykxle2sqxVwDUQkRkYiFR0hRCnQIgbLbINwAVni03GIBYMvrAUGCaIwJqRf6s8l7rO41H0BMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMuadxX2Z5ccqnRdoircA%2FluTWGw8YKzaF3EonV8EU5GavK5eFomsP%2BS43no29940%2BNfrhYtpnrSAuqjtPYZ6FqmeCkwRgE9C%2FHGJA5lkky2Fb7rNUS5kBU0vJXru2zWEg4mPA1gLzQM0YCZoFdQylxTdgKDb%2BS6yWg1rSC%2FOkWMTEUiYU%2Fw1zifeUQ6erHVVYPq6ahmEO8oMZ97U4iskrIiXVsZaWaxv%2BvmKHfQq9P3HknhMYq2woCG%2BFD3MQd8MG6EyubTAGSsUYEwllzNGXWsYjnliw%2B7BABeP%2FdpuSOuSs9oF9dmgVLKP1dBgaLwMl9Via3JxVHm%2BK78MrjRuPeL6ZjEtLV9i0zhx6dgdh6Bx%2FdiM9p%2Bd4NmbSN2aXDReaoeNJQWj0fogTKJeV93JiYDqziyiPZt8bgr2L7Hu8b%2FQvqZU4L%2FHP9yML%2BBdz5QzWtyVKVUz%2FdX%2BpX3FHsfzXB3e3SXaTMN2o2yVTx9dz8jtIGtPivs9OnE4%2Fpi1pZb2xguku8x20uEvT1vfJOfw1hipCY3utIIoxtmAQAilkJFH4WJ96PcH8pYnpYHzF%2FDeQxNdQeOAqzwhbqxnkdIZp8zpGRtyhp7SJ%2Fmi2eMfCUIej3giHUoqebcO47jPuUIvmRKUFHnWQI95hrQMPW%2Fhr0GOqUB%2Bw47%2FX2QiIl%2FiGCOx7%2BHSUUzBerPXOYH4sHnshWrqHPSRfY59hWhFT606N7jjqZ8%2B%2BuzP%2BGqVpT4A%2ByqIzGEUA8uD8PG52NXqRZzW36%2Bg0LE0N%2FHLrfaTeYVDOJOssTigVzn6i4J7GyHJcL%2FIdsMLldKOM0hq9HPMAnGdxKyswfuzTvubr9VJ8VjRCBwG1AnKsYBKXbJuLkmgSW2sZaTSH6y2RcC&X-Amz-Signature=c01a5759b6fc8d93243e3f736390c3af5953d0d4b8537102b8422554b5fd43bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

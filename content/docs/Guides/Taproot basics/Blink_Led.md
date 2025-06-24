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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3IPJ7F%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDQNnM27Fu68FMy0kn0SalCRKITbEcNPNG1rWl7SjNOPAiEAujSLFEE433HxMuenld7vs8%2BsC4UirEZMhJYVqyaPsxYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLTaSp53Vy0X4CvXLircA2D8VbEXmL6VYjwlQOG9MNHIqqKGSnZwxW92%2BFl5gP2rloQ5y%2FqPfqMf1SGYWCIofTYKRQNE%2BQarro%2B7d4jzb3UBlNiuBfHFbVgtzSUM0UuioSQ0c%2BiCRcHgwOiu2kdAj%2Fv38ENdrFuqvUTTlbgGookOl0GIBIUSIieRl23zZY4hxFZdJ4EskM5rapItsSVit8a6cgtv1NjQZuEHHlfbliR5QqnEdL6I%2Fm6sTinIPjuXqRiVmOvPX7nljIPt%2BBV4HevgQyPj8VG1C2cUc9TtnrQx5CQ%2BDbRcuj7uK3tQxQYUMEef%2FSL2l4SbSkwcI0HXFzwLrzcS2uCMRkB9lEYTqaRret9LX2Cgkx1duGaoCR0dTv%2FB12YHXZZotz08He61jku7H8xuL5VdLfRTSLoq5MELDLxusUChGHCTlKwK2H8Yj1nVSMIg2M5epb1uKixpCFSjnQZ9OTxAZFwTlQsc1T5p4I77tsfDbB13qRGJ7B6y%2BONTEf6eo%2BtIS6d99574h1QToy7gtBumWF68KB2g2V66qGhojjvLKUnObwbynpKJUJ%2FuUn93pzc%2Bd7nJ2zz0VhMaTyNIjTgW%2BulcrnK8CKgfX9KsU1Jb0omvqEu1VbY2AUvEFzYirEmvsRwvMLzc6sIGOqUBMnimrdbcLHDo9FE2yOfAfXct1tFuug6rMAi3SMCVdwgKYMssn4GWv6gaSAED5NLny6Dx1L1NP97YS9VO2B4aNC0M%2Bbdm896TwughdV2K%2BL5awEQWj%2FX9Zhdoh5hyksntw9T%2BkMJNbnu3ymaKk52b69ML%2F7fUeer7%2F18SOF%2BZYdwL21V9FEoru6j2KIKFV3ihptQbcUEGGhCZ2U0YC7ynfRbBjBFJ&X-Amz-Signature=caf7c5a6636b0cac20b3cd5f53262e53af05595b3db0ee1d6479f6791bc12682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSRW22BK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGt1Ll7C44j15ZbtAL716mtTrKCGyVmvf0cJ%2BLa%2FJhSTAiA6lyL95YAOxf1Q5BW49C6zXt%2Fl1k6pAJ%2F1ovV7DlojXCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM1n9s3cChRsfmdudbKtwDU%2BIzYnhV2yd3Pvrgl0kt6O6PtzJSnhTryFBw93axqlufh4Jm92SdXWH%2FVVjDRrrXMzP6jP1FJTEJikNwfEgbc551k%2BbiaOJQ53nhc1xZn4k0jd5n3KKVHnsJ3fCKHjzx6ziiOMKgeoXw3dFN7XGT4g4Y22msmybCCpYxAF98PcNqLlMaFRmGVUCqaf%2FLd%2FHje30sMOmaY90j9ncFahkV5m5p1mQC2rP5EG%2BObeiOCH8z4mDTBfh41fzNplKf%2F454dOxPOxKEbq5DtHPbzLCaWmSPAT8i1tMerntl94k50AyupmiWshCeDSWhOD1OOsIZA2i2aVOqHj9ShzshiFfN%2BQrOsj5Wxsh5ZYfozIsseyS2sAJOa32RLaP5KnkaYrxffyYZGkmsoNQbLY%2BwZS%2B4GxVrdigenTCcc8kwFN5iqylGNzU6d%2BdNSYyl1kWhom2bGM%2BHmO%2Bhc4diQkqBb%2FQub9VQ6YuJ4XG7esVrwjG8xndHXx2HUREObZcmIJFxYWhunMNgrx%2FbL4siB1ItczHR%2FdcwKlHbXjkVLMiuNoR%2FmpXASpU37piAFiIkkgiorwLhMVYRTLj%2FTCm5EUG2MpjAWjb3TExqGEld%2F4HH4dJ7XTF%2FAO93XF6lfvxs6VYwudzqwgY6pgEUqHvI98s5cM7qcmmBKG9zHTfhI0gvLb4yvV8cc631dqILLoHOqrZ2jphAwoQyGejVpQC5SEQLjMazKrRb5sQqJy%2BbUeRPKvhnbdPKDVQlzF4QcmvkJGchuJIgKoQh%2FMpM8lTqvnJPNZKkednvbJTuWhZD9%2F2G7hE6wSYZeJdDcE1iyiWYfXp7RsBfXsoAJqG9LM7YGrzJ8GIxOhqSx6EjvGr3PQg0&X-Amz-Signature=89a192bb286a38d5a2e976b74d34debc93716c0882c785b2d51ec4a6dc13faf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

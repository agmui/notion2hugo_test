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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VUC7M3T%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFAuMRmJTgjDKa5R80mdo91dmY0LH71r1alejiQoAgHEAiA7rwbeyWQOPI4nzRXIW0%2FoTyU6ybhbgKJUSJRxvon%2F%2FiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVMdJPTcbLGHBTNLDKtwDyOiwJ1Jssglde5FYfVZp7cY6cEPIUgYChHIMFlDSY4gdKrDh4hJEepJtZMoNb1nuhizSxr9PqtKsSTkNKZppNtqIGaFPIHIAJWrzBr4jHWx1E2wEXxPGtDtyVCNP7ya2OFL5sh0xFcggxktcEX2klaxKE0P2v6Pdt65d7apncZLT1eRivfXhRPqtsgv9S8nJ15SCCUaXB%2FPa%2BDa%2BZC9b%2FFns8SuWfAhDp%2FxdZgv4Isnv8Jh3aD3L6WAIEvnHnC6e13HN6BZ5CLDbbOHAu2qzaTzg%2By0wjoWOeSY4UwkCzJMNAwhwo4Oz44IU7Gjtq4n6aGwGR9tOeQ45nqvAPnSTpV6LnxktsbxkYwkVqn%2BWYbPvtg5Nsf5EDTPo%2FQ36cgqzoyhqCJaLAiwZY5%2BZ9thp%2FlcTk2ETKhzCwXiEu3qLark%2Bffe4UwizalkQ%2F5QT4xl6pFRBIwgYF4mBzrtMxXHlbWHvUM3nxEPgmu9jRKAgA6Zn62F5UuuAY%2BMiv6c9EceI2eiVZ%2BFiuCkhqp0ikTW66UWHejYWAU0LvV0%2FuccTPaNCJ6JlbXgeKBFgQUsL%2FR22%2BmDUgbm%2FwhQBbDlPJ36jIvZlKWekiKcZERNtGkswGgfBRI4KRsjH4TkrX6owlIzevwY6pgH90gMaizblggpQIxL%2BXKZFU3TD313jCcybDI%2BM5EKdzJlVzrVBkeeM0okuFODdsaawktndqRli%2BTqQnMQIOOTQSRmNwovFbfH3rUO8fBzs1UZ3U6ZVihNCfaed8nvAkCM2t99aOgJvjrZiQQCble3f1b%2BlAOFeElSV5Y4IvIhPBLPFHreLl28FffEqWqByPcQtW866wOO8duAH2reT5FxzA1HPWFnd&X-Amz-Signature=23ebc8154fd88ad1ff91e2136e8a4d15e9c3484fe09d83ae841571d6a349dbb7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7PN3TT%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIF3E6X2M3icL9Jkxb%2FJcuFZ5j3VLBSHsncNatKiUggGFAiEAtyCQkOzecx2pE4QZW8MSy%2B95XveXuMpfHPR1j72f5WYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQMHTWkCw7GF5SVBircAzMDlfgY84jpsHLXqxSnkJajBwHGlbIPNCGWaRUGKUBP8KcRUZIm0EljbD6S6IHFePnctUS4t6UW6dCQRNb%2Frh2iu66G4MKLtqvz7DsEtG6iKnaMYBTlgP2sz8OmizgA0XWgULwpyCvONl3dL71epLepwbzwvE9hSwLXCIbPdGOqUwKQjlUBduxi7qiAmYJ2o5PSwMF50YtmJRoyuCXlFST67PTcbmpFyEndKAit5bUbm91ou6rkyf%2B3PhdalKRxEP7TDC8dx0PnVU5j4WOv8Vj%2B%2Bx5zCHhGQG17SIMUCSWquW1Hs0fT8hOnjLkUTa4i4nR7s6uxYTjQuzKe%2FNQLi%2BpIhzq5th5u3YxPBE2dgv1KdRFQQuDKWo3dU51U0f%2BMX9Yw8qqCwLJab3FSkgYI1SB7teZWYZw0utaavxWYlT2kX7JBtc%2Bd26k0tnoaVYpEysneBxEVESCBCd4IteDglRiyKFel7Kr7K5a4rThnXNKlh4I%2BGZ2MRf4ROQV%2FfptlDCGnhJPfbZAkKsvjm9e4treRkmO5%2FTifoMhww2yDggYTuINBON0eeb64tqe1AAzFgJKffIdZh%2BkCCwTJihCcctCP4VvhshOTA4Ceo486N4783l2z0NKBYL3meAedMOCL3r8GOqUBEREV0POGDTiSyucd3oNvDkshORwzPZMy7GC4bHsUJWQrW6rGt72x4NNIR7iaj3CpP2jfoGg6gKj085eVLKREmN0dcimO%2FeBmgOqS7iuNHcN9fYLm%2FHb0jR%2FD%2FMjUufY9MB0PwCXxXzsaRpkWKkRA%2BmuuudvYIP347T%2BVM0fywGSfnTFgZk6sMh%2FB1TqSyGI%2B0j8EDJ6xOScfPRyAWE65TLY%2BGbWj&X-Amz-Signature=1d5fb5d2ce1386b4b8bef9c77f5c13b7686beb227e8d2baeabea21ef78eb7f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

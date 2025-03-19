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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKIPH4KP%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDHMoIAVxbkqY5DsLrvVgXRYhuoWuMtVn48elti0U0F1QIhAL8u3HgKm6Xfhusv16flnjbQ6JyHPA%2Bekzazxdrl4BsPKv8DCHQQABoMNjM3NDIzMTgzODA1Igz%2BPChtOu1hcj46HWQq3APCtQTHuq5sTB0rVglXYf9wNa8BCKjDW%2BXaML4XVdEB9HYBoWbu4R1XdKht5WWco0Rv8PVsIfFny9lFqpH8rDzpAdUWckVukTqSTuNjkxp4BX8riT2QDgYmMgOHgUBrZC47bQoUbruX%2BBIme2Yz5NdLYDpxMB6kTb6OAWCrfIfcPACbPam7ljy1db9US%2Ffme94OAEPunyQ7FcKSJiAHEqnLHmSnatLaR8iucBkpdFViHOV7IcH0ejvg7vBwd6q2TfEPI%2F6miErHpbGCBsNV58Q35tnCU%2BKT6z4kmjyjVQsQDTC%2BwsZue9GuzKd36lB%2B4TGU7XNkUMGIG1hQ1JCso7i4A8SL07JDvVPNxglhqGcLvuzVw1CIS6qBqiT7EDCrNRVPiS5e%2Fiou1q4hYlWtXXJG4Pm1QJcstb%2BvlLcHbiE3pbA8xwS4GpQjvmHOgdUKQo1ihc9zYzaQcmwMSh99QHK8AhJ0R0GSuLT5x3VmT2UjkH%2Bgmh0qd0NqXrrj1qFzaSZchm2sBg6q5S%2BxNfA%2B6rJRGCpQs6bq9DQo%2BWSito8r1ocj5%2B8U4%2B2FwZIJoAEDbGJVNyZg2HIMvENmKVba4Bz89obn%2FLVVPjQrgjJR%2BsWphPqY0zSYVZuj%2FHORazCUwOq%2BBjqkASQWhkK3DMNpKnqrh9R0ciIfQxEpwvNJF2u9esBkQQvgTfh3hmuRdje%2B8GggCl8W3duPk1k%2FGFi%2BCuYBcSAcfAbP36XNag%2BXaO%2BpPwpwOm13gjQjmR28zD15Rsve%2FCqguU1vamuk1P2GpvAkNyO%2F6jSvYJwGjt5H3e%2FqXAJVnfqGkpdXbkkmhvM0qqCuf3wlNK6Bw%2BMF3YtDrR%2BGsv3nUDKh8WjG&X-Amz-Signature=b576bc14cf099953d5605b6f4de7a041152c43f6555dada4a6b2d0131c70e68c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466233AHKBG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIAUgvh%2BcBomKrFHY9u%2FWj3ZBt5L3mGu%2FuQDIgu0XCHJJAiBTQFwjUsbOlWoZhwgGr5tqOZ28AxGSFQIAZx2ab6zsnSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM%2FgvcCaE6nzsXW9G2KtwDGOntwc9RDVdDBPNWFfRBpUVCrEKpPnT5SDs2bKDpUgi6sj8jEOfXlxdpwmOAhzEUEAXfMvCgJYq0KmLDJLM1ji8OEBlIWf7DLIK824zgdyDygNSy%2BqwVWjWMdmwzQX4XMWPiAy0bPuNWo7R4anOLi5TzBJt4dPzUbNOkpRZyKaLORzUGyvyLugRXwy8G6CMEpxXC9tY1Pv0uwR6uWaLPivyszASoDDudmmw33z%2FXLUQZ6Cji9rm9tmFc3pmIiAG0XQgaxJa4gmAqWMhI9iRVsOtLYJGdHxcm249ogl5oK%2BYaDHI%2Fv%2BuN8rloVgb7Bsely2TGD%2Fk3NlaR05vfdfjWdJ8zPf8%2FYBF8nXiulp5TUyUyCu%2B0xavJtWYBOZs%2BEeJt%2FHI11ygo9Yy6FUiSYHHrS8RE54fX17rLt6VUvMaE9Cekw6E2Npq7%2F4BaOiSDzr9dgJhw6O0nn6yxQwJVtRxZt7aHXZX6A%2BuJLuCwLFknIcwzn30rRD71wZJKNoJR9VVm86IF3TBe94pDX2eaxaCiCgSKgDX5o2TvDFA1tTFHjU7at8sZ0T9d7dmg5uZwB2lPpry3BfBcZYUmEVJP%2BLzF5F3acL%2FrDuK4%2F2TwTTxATSQ3LVuJER99MgXa1uEwhMDqvgY6pgFho6cUCsF%2FYMpr6crl2Icrd86xe%2BJc4u0CheRfNp9rCmd4pk0W8fH7U22nWdrRIdU7cUPD4njJMFbDC7ebvE2dm1PXJhQuKHx1POqYbstHj0xvQWIwG1bHdEvmmi7mb0ZxyVhI%2FOtM6reJ7%2BHP465LmFTnANEtjHRcfuuCRuWF2qczKtK4aGEtp7WAo40pGkB1aLzvlRnBrj34ByyguJVl%2FVL%2BEy4I&X-Amz-Signature=60b675a7d82a5d6edc2d3c69898d6483fef5368fd18c0aae4f88fc62e2b4670b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NKZ7WYW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjgkxl5uie%2Fg3HWTavnjzLaJ5glNaU66%2FePbQjKgDtkAiEAw1KSuYnA1a2G%2BqCmhdXAbWDIEVu0DXZXvRrkiLOXK%2BMqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaVJgbpx3bISHb2mircA86tR8XQabBfxTF7bFv2JjdHLtKCIFodbODa9yOFXAdLNFBvPdrT2ZvVxfis9s0Kc8Dcry88%2BQgyr9VVDqDU8dWWQLCBc%2BcGiXcRzthBhzZ48shmpAW7dJncux1vByXHBusCqCsUpy6SeuVzrYIv5QloWJC3j08ijkgC1NRGbSaZnl98PnCfPAaOEgZb%2F4iEEJ4M3HUp0RiQhNMqUscvv7jfn0CMK%2Fy5aD63Tn%2BF%2FZZ8mxxMIh5R%2B4CI6D%2F%2BvP2rBx%2FwOKf340hSQh5g1jVS4R9n0xsg9OQjslmK9DPpzUhpbXHEuo2oE2j3h5K9aMSwlmFmNGTQZWnxl7jwVlKPZx6AZQOnkEDCdKbLAKuh9fWriMjnn4KgW4hxHFpr1A2PTM%2BOeAzRd0XVOocyR2D4F9p%2BWe2Hxn3iS2fsDESBBSj7WyLjowpy%2Bh2aQfPcIKeDcUdW1ZBSa8hnFSRhCt5qxmxS6ljjFs5nizz9YqqRtLigb3KSe2%2B%2FD7qdNAfhsXoLYDdq%2BAF93x7o6N0ugYYHZpgVg%2B3rWU%2FkmZm9jdYmOVxOxmwL5m2DSY3jUivnYDJXOGYEQq7XqviyNZd9dWgUoluCrsAk3UtMe4wONen4oyYDF6QrigqszB39ZIhmMPm2ysIGOqUBBo%2BgFSFm%2BGGE1fUEr0uVa5wmt9R%2BFM38fDb7nlEgHLGNpUUal4ATqSJzFpS3ygq4UygEHrb%2FDLGkdAqTQg3kepwV4G5N6bBUKDXZu92bz%2BWSlYgy5xIu0Ld7%2FLZyMIcalOTDPxDFIMi1LyGqxs6q66rAXTE%2Fj%2Fiz4EDyuurelkw6xTGMjwiAWuD3aTuoEOuuNtiXmyEbMPySjP5fEWe%2FlA0qTxwn&X-Amz-Signature=95e2d046824a37897872035bb3bddb22557b8f2c60a82c4a6b604dc36da5e5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIS7RARS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjzfgyyap2D6nP5GZ0yeoTQk30nsIg6dMJ6ujNqda2oAiEAkIbe1rqLjxHhc7OlO8EMPJV2CMiUZvg30Pxc1tyZOysqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJKxDyFC3jTCXq5iSrcA3NBI4Mf%2BBFTSk%2Bj31WrmZ%2BkJ21F9e%2FvHUTsGqADBNnLbRU7G9pZde2e3EYzfHGHj6WOM0BVyNla%2F9StcsJ2xAXYREwT3zb74Qm%2BCrWwgS1PdUD5LXQrWjZRZAXs1EIfQ7bvYgcUlPXPBGliHQvj3f9KhMLWmVwlGAjqOf9qak3yQLdbMkQlTxK%2Bf1Ikc00g%2FbVzqUHse1P8xwzMkgDXc92%2B63HnvxuOExs8uoGO8QamznCZvfLy%2FZrsIB7QdVFz5vns0HcYbbMHUobfoXJgkNtl5CMB3yiesiGYk2VkzwlyAwfsICCce6pREds8xUe7MvN8EfV97SO3WziJlC8LEWPJtJWNnUMUBl9JFZ4XBBKC5UkO88JYbI31hGjtNFkR%2Bs8BKdiQIyCVpecnB4MNElsUzZr6%2Br4spZqUf5TyLJ%2F3fAFzyEpflt6YgRN8gfJU5sbnXm2tb5oL9KSY8pRkBVtGCxWHzdrjq0XUB5mnI6rkqy5RnwICrx7AQ0xhxaNIk7UYAiUjwyRpbQdMhnsM3TY0NIlyakKNjlPDoGg6gWJaaQrbHriPMJ08WjS2uYL0ZhO142%2FPFvtWCDPzrHr1rO1%2Bvm4zIXQj2GYQjPW1LPZT%2FmtTGhdSwogAUS%2FNMJ%2FDysIGOqUBXH1h0CohCZ%2FDc%2BdSNBDQI0asnNuxkokwk2KhUuhHTGC%2F01IAIaCwVEvoOR7JHV3OIaM24EumQRAPGafCP7Osunb9shws4vYzRIf2LoBbGJaL%2BRbDGJtS2pNW767ylraK4hIgykTXze416SVro1ZtulYgEt5kep7G1fKqeFPNEhMRQ866cbORB0CVtji4CbhH3xNfCrrYSH4arVH%2B9w2J4YUslkCK&X-Amz-Signature=775fb637d8a3a38ba8feaafcadf0d72c027a9057f88c4b0ecc26b17c5f29024f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

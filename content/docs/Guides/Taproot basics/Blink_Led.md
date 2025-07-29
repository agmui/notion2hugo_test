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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CSGEMZB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCJRn4NLkgRGp%2Fd4g8MXdWVZ%2B48GG5nrUknaUINCZ1YPgIhAPOUbl1PGOczEBrZBHp3vV%2B8KCGFU92D%2BRyHl9jRb3uIKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwBbn%2BOmtuBgF1Z5wq3AP4EPIxXv1VDnvaX4ktGt8ydJIvOdvaJYfOJMOIsEud6HJt4r2TTHNyZXX6LwsvMqRcvLHAJ6RiT1DKlAtup7nus2v%2BF6JPKE6fdUGm%2Bz5UThZqraOBk9tC9QqkWLZsaYi2NIV%2B0KfI0HgkI67J%2Bik4l9%2FBNStPcriNEZJom5jW4y%2BGAtWgAOI7iy6oDwXE1uIPYe3OJZsuzpggS8rtAFZZvJNbJSQ5DvhnIoCrN4M48y%2F3xIh3EC9nnneGN4Imr15oclmju%2BDL2z6M209CGT02h9kvCPrMU1hMCUjFrgTOvLq09%2BfFcpButwxg%2BoC%2FBgUczcwPPIj3vq9fJTGYAMypvT%2FUsOlkFCIcM%2FnH%2FHHdNFPXAEhVNvxBUUHqK07xgOuTV4EbqbCktN8Lz2h3r3rKiJLFzD7mGw%2F%2Bi1JaPMEme3dTTR21UK5SzEjs2sgr9fq92NB0npO67euEVvLhE9BPjtQTUc9i%2BYj7Ga9XjmgI0rO5c%2BOFOEWdP%2F5JpnQOqBMxwky%2Fxo34KdilrzGuDtPI00h6yC%2FA5pdUgAWKRQEsp8kBaiGA5JVzkZfI3ZM2leLfpgA7eXoZJ%2F1GylF0oyc0GceBJPF55VLHHyF%2B%2FtCLRer38aKegOYQzsfLGTDWhKLEBjqkAUAm6koU2f4ClqrOAlnzBnTd5Itst5Xnycy5bcyumsZPyjw%2BUCehGeOEs9wwf3p%2B7rtX7MBBBHG9RTy2CAzHxj4MCKnDqfKg5u%2FgrvIGQkwKRihvGPMiqOg7ZDqOwteUPHxgFhjK64qrkUmTpMj840ltf7TByY%2B4wkBw%2FwV1pW858cKZPBwfsPN244OIf%2BUjsEcohDcP38PFKfDQGhuM5MJmpDMK&X-Amz-Signature=aaf3f69a447e8bf7d84b9856f19d6f513afd424b167f8f21102bdea8e26c3135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK5NKCFW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCJezvQwd3K7dD%2FPTwo4gUNA%2Ff0txb8jsH4mzqq71WlbQIgZ%2FVEixrubkNCQx9lbvEtvw2%2FPq618ivVEj6jIWBNb10qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbhRZlGQ%2Bcyp3C6oCrcA3NongmgwVg1WdnNz612qKiJgsF8pkOrxge2IyUPbyjTG3%2BHSl6hJSshJj3GCQD3eWqWKqNbRYAehqxipHU8m474IuOBz5JsmPbTR1CZDKqOt30ENXGyakqT6WAj%2Fwb1l7lZzRsYE0LL%2BWz9GUQARS1vyevtLpPvQg21hBtDNN80zUt2za1gke2N%2BdXrHzl2MY6UrUofNhdFinzNUGtLW%2BWSPInBfdNbCR3yyyQd1KAw8mM1bJog7VTtKqoWboX9C%2Bz0a7csK3p3RufFzjvKFQ74sMZNcuMZhczsPb2pXkxuIuNeyA9LrjJX9mE10hYOWt0P1I3BVnxPXGxDTqNku2XTx%2BwxSaRl%2BLSwnHIxBhaFLep2QrUsF1%2BzZd2gh1zx0NKjUT7%2BqU59d%2BOzndRcgDMzZ1%2FKrw6NinNELd%2B6R6IsZEkn4Gg9wRelb6rjrB4okjq%2FBrB2RCRHDh4YB2Olq6Co9PZY0srcV0Op%2FQc8kVOEJMI3jrqKp5zlUZBw%2BDNMst90W027gx5PFrE%2BRlLe2WLyIsHGjqCZY0LfXRT63COj3LFD7QIHKwzImrxRqwlx5iinwhWfcAxSZkmAs%2FrDJQ2G97IiP6ZcyPNorzKcL0nOPLNWB8WRlclfYLMmMJ%2BDosQGOqUBXV42UtA68G3KVAOO7OIPMB8OcNSQOGH%2BW3FC%2BtqdhQcB4liPGAyv9qbgqoJbw7IHOrH06Tfh%2FWzUOOXyjm2qF75dpxLeZ4G40lkyFEzRCI1Zt4Gf7RwSDf27gDcrPh0P6oF5eT9IR2H3bk9RgT%2F6iI6hNwpdgwpDLYZ%2Fgft2PJTfqWHtZUdsPfNZbDq6cXzkho%2B9DU3I6gN0Teuk4BbyFeNxWBaw&X-Amz-Signature=7f9688142644629d67d7cae35ead63bb278d3f92a10eb5c376072d85d31d7b60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTPJ6PE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUlKRwkM9CWuHviwA%2BqLXaYnOPgUYdpXsKEshN7cA7KAIgfmvljhOM8NaU8h9XmGa%2Fk2BmnLy%2Bch6hxODNuPdSU6Mq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMvfYm40JHAVRKoSXCrcA%2FxHcE%2BhHCNrZ9kX80%2FgnEEkCCINMIG15CSUe9EsDCj6dBd6L%2B%2Bv39U6UF7ou54jb4JnVfD1A%2BRvEWhxpOyT%2FWsaTEQmY9FoDI7UUQMlP2lQKv3aiazIZWCZmC%2Bz6kMpjBHX3cvdO2YM10ZEqHgesc7glibS4O7ohuWCoVCADV0z0Vorc6Ln2gW7H3594WQ%2BiGNp2f6q9F0Slr0Ca66afKmHEUXhpWGkF4yoy9R%2BWfiKESbXOn1LjjSn5BThGcQz3kVzEzB52MxASfYgdkOUtdgYb7bWH4PUM7PrKKBlIVw3g5TZdJ8zTXqbfAb%2FEbTF3%2BGI2EfF2fesfKh60rR9TPPpXDP60dXjxLkVQFj3pk8wDuNS6PRiXDhwAd0RBaBrE%2FURNUiL%2BnzfelG56lmnOTZoLR%2Bilr2GWDRoXrUqzk73KLnk2zJ53jgkJ6vK9z0jG%2FG8f%2B7SzxLjpBzNypqDhhdwX%2BSUfoDdzjJ2v%2FHBObRbeQ2xO0RSPJ2D7Qq5xT%2FavGc%2BhqBSv94zR51wDJYRGd2w2CqxRu9QswX3fTRAfw4rA3xy%2FsZ1yx0yH%2BqsMXjfbITGU97NBiz1xvCFyJ0m2wJFl3F%2FRyW9XO5x3XyJFnWmHIpFx1SO5PbBur0SMJXNlb8GOqUBKSkBmdvj1MfyUCwFhL2loODezn4X9fyj6WV5u6bejAg4BfrVfXYpk2pvJqMJzhDHY7J3Pnd1ZkCA0kPgFgKHVZTPxb7Z0XP8sJvjqNHU2bZLzZ18SCjM5GGsGZLDhZgi9Jpaiblx8KfRMmt2FeXHxWq0YVtHjV80w1uyzVL443hI3PR05iH%2Fr2k2SHvHMbkfvFzd8NPrrSlaf%2FNYhofJNzjzjXhu&X-Amz-Signature=ea804d864f31d4954250fac52109be0b031b5a149682ebb276c2c701cad0963d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5HRGFJ7%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrK%2BUtcn4C6h%2BpvLuCqzVwF%2Fu1BPWcoE74TyfraxZ4bAiEAuQAoZg%2Fq33WW0KCEc7iG6%2BLix6wdLiouBeyC7rv2ME4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDITrPInJGKxFuFTU3CrcA4Iq93rz5qOf9akL00%2FtxDiVathBq4m8KzleNMKPsCGBO8B10fEWiAanKR6cyuyJykPc3XQ7IrvwG8Wyl5TQQpiF3v2yRXW3seE5WUZvbC96YFLsj2R0PT1b0wRZtbQMbo5t7z47qQsBDH4QwIX1%2Fs99mMSX6L3aVSv%2BvUS%2FAvomoGgYL9FUQ%2FRRoJ7uQRXz1AtkDLz4wVMTFuQZ%2BCHP7B760s9XqEObtLzHndD9w4xAfV%2BGnHz9pKiUus%2BLtbdBckAPvZqmMZTTrbZCsHK9lRdnyoSrMcwLC4%2Bz%2FFm1V5eqwHsRQvE7kp9A5GyBKK01ag0SL1bhWa6lcd1YOd9hLrWkR4I7Q2WNBEdXNvBsB4ZOyYVPaiPPbHi%2FGCb3izqz154TeDJ870tR9HKkFADRs9iLG%2F%2BayiissYAZb5zzO2oPj104uvnLzju7mhCoMd6xWw%2BewYkzh7hJ6EP%2BcWMpnqcN9OZIzCE1q9bgRXs7MALwK4gDhaK%2F0g6QWBgFu%2BlHB0JGyDJxF%2BWxoBJ5VwofhzFg1WQUs5o9KLfrevyKw2KDmDOpJsMNRDa2dhc9bMhE4GcNYzfVPsfx6I2oYi7r%2B5Paf%2BrV3hc5Tz2hzoUEZyV9Tq0Ub667FQk9gRtjMPLMlb8GOqUBspqUo%2BltMjqJSlD5QuNq5UN8FCPqhf9UOWedfBga01IFHDnEiIMdSZaNSkSpJ7HAiZ57kZ58JH%2FM3ul6jrpsr84h6PWSvLgfn04VhdUqhXzZAyVT4gitiuuMTmBgWzJpeDBKB5C4tuEdYu%2F75IglmwTc4Jsi3OJzLRoEk%2Brsg8Yms3JgfAjDU%2Fe41h1tnzQM8dtGAZ8d53Oj4byb1MiTu6HGvW3G&X-Amz-Signature=fe9cc68c525da76d4a14f334d9c5fd209020c1adebd2c61ac9c2efdc8445b19d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

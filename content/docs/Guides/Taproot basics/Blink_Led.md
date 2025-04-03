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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLZMHJ6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FweOi1myUrMZKBxzK5vacQ7OgCxicY5VuvlKuhE8L9gIgTFqy6YR%2BrSgRdF3Nd4WRmKUqrOLL3G6RPtJin9mltZMqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BFAoNQuJBwrDc2UCrcA6XYbks4T6D9CMz3b0C0FGdoVmvD1C%2B9NrJ4IAJcObst1sRVOMFmrY8gkeuNYXS%2BuoiAE%2FMeuJsN72G3VK733h%2BmDAgRjrk03gdhbJZcOh98LpWMjyn%2FQEPTbiINSs3uT7bA3rot3dS7XSha%2B67QesfNosEy0K0jXD1v%2BSIHgVpUGiL5Q3tHmw6nYV%2FgpG9T2Pa6Mim18v6VBPtBGhmCuAkYRuEk12XAtSOT9tRhUQKhrI9HvkjjdQckakCQQmdp%2BWPtkVg6wcCyBudQULhoxVz9nQwOc7YLs3OfxhNe%2BAR635k00JZC3LuhE%2BsMfibUiUrmwNqmlYOi9qb4mV%2B7H2Tp%2BBL2i%2BtFycwfDad3Z2brHMiSVbnOYxV%2F70fyyt4X4f5%2Ffa%2BihAkz9tyEV2yRzTaufp1ukrH%2F4URdZLZbOMj%2FQmR8gTN%2BdrGkykMdTi%2FV4ZdmBxL5e67EFVmRSPpCXAGBxcaQi%2FdC1uOAaBMV678Y%2Bcxrt9TiANv9xN49FqIdIitN%2FtFaD4JtiNqxwBVQHyUY57NM71OyDO1goe4CHcVaHr64TNzJF8CPbLnQP23Iiv%2FYt3c2fdsEtw8eaPd6vhKaZhtkNQJeaUYBnJ3lh0ENodyMPkqlj9s6XODmMNn7uL8GOqUB7p0jCJta5kJaa50W%2BzL4baNBy2POVFKRGH8y3joW6BKpNhJ6SME80w7fkWucHV%2FVvHB4sUm12R7jYzDgrmxc73yOfEg9z3ZvYDbp0%2FE7b6AgA1VT1DqthoAMMuyIGWV82suG2Qa7UscNNl2%2BSUHUT1TJE92b9kcYqCUxVnI3Kyqed1D5LBGn45rAciR6Mar4cYmuI8sXWBDmGIeL5NYNIzckrPTJ&X-Amz-Signature=7606b8cd68b9b193a2d60698d82275e720ea5638937d053e70b10f15c1ed2ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJX2HFW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR2ZBrYkpegNkTAxRW7DFzHIM%2FFZAcKjoiJuJDX7NtLgIgP2e0z63Wa9Jh7iygj%2B73KD%2B45ARJvoDwmf%2FE94Bc5f4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZV%2FGqIVEx9MSltXSrcA4Km8hwcFoRJaN3kd0E%2FSPj0S1U4yp9tXdKUcqRmTEmQGzkKDZysD%2FyuRIvR%2FcFZr7nlKBTWAcIrG7GadHToc4ElGznl66FA1FoUgcIxsCa7zq6XiN95%2BaWK627NpKOEhlj0XOA5X2TifughClSuiwrFP0KcK7EPZOYpfGWTGrXdXdIO48Ja%2FUvW4Udxmm1RPoXsIPMKyu7AatqHHV3eTdY9jd98GdIQhKUo8VN%2BmRrx%2BgRchm6NVVAhdveQZHKdwJuqLxoFtD5NHsR4eYLzpRQXE4ZSUjPde8G6bq4tOsNRva4ppPK9sfhG7SfngT%2BBbM1VApMFUqHRBZ0nUYB9pjne5XBg3jZIlMmefmLY1%2F00jI2aDzI8GBdmD4WGdMf4l1u9NvMd6lVUO7VbDPq4g5elfoz%2FNj7XhOqkiyhWgFXnDjRPtlvHGbqP%2Fa79smWMpeL0npdCIvjcdxBbAn10w4XQwkoC3rm9OVtO5TdgYIocxjn2zSdi79lvOfqsjniH7GF8WqTXAxThl3xpe7TApkDcbR48Dvi3NMGf5ORAf%2Fl0Ze9nJfSot7e7oU7VG8nFNcizyq%2FZ9NoUMpJuxnNDiOLd7NMrfurGBYjCAWf%2BmrpLHeFaEbSnfMy4VdMLMPj7uL8GOqUBWz4tISc748E7H%2FrOuOHU4XDhbNjecXwfc2yE6EpDs%2BBRrYRf24g504OVwS%2FJJ6sOIhUmHiOQJPj2Gp6hQ%2BQ8KUHFdi6IrPmhn1fRULY31aS1gF1YsgqpbUoaj8v5QOUH2JkUsWVytKEosvvvUBMT5fLfmH3R30sj96nm%2FV2v0eLtEANEfwe8FxiwX8RkARSlktoQt45h28BwkLIgNr%2BAaSPmglVI&X-Amz-Signature=f4e0becfecfeff46654550b05cadabe66bf429babb8bbce0105a3ea7a9ecde1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

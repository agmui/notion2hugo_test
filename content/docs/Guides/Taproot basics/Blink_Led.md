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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZW6P5Z%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB62DMcZdRgW56bq7eMd5iqydElCCr3b45191mcDGTNwIgZyFCmMlx%2BubtyZXPufWUlQfKK99XxJimrPGEkR%2FJ5Xgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBXVXq2Gwhnc2ul4jSrcA1WIVg8t%2BfV4nSOSfToVjeqZW8yLYbHOGJTJId68mOnX8IPi5IkbVO05SOiLNkblyGHm0TGmy4IZOE47NEmx4jpZrDvfnuA4qwOL6NYA3%2B04p9dhxLoJSC3R0xr8rfFHwAEkd1J5VR9YZcm9vZ5MGhh7tq3UWVR7ny7fy%2FzUQckW%2F%2BHIEVKw2CPM%2FfV8AE69l1kz9c5vLsT4684B2ghPyed1IWAXBPTpQ0w4swomh1dLDYV0twSGIqa5ut6Fizbv2wfm%2BjgrDLahTXVPzpgaYjD08yTE2R62KdqeBx3kDWYia%2FLMSbuu4lJ2PWWXhJk%2BNq1CPeQWkb9MD5ojUZF52JKKyxBtZuHbY1W9hl6nZyIzH3ggMncieRWHzqdR9Mgb%2BlZMzpmdNMG2jqcczelwTzp%2FPfOtEF1rJtNeXGoO%2FK1P%2BNpRZnd2GXmfMnnJ8Z%2FwZ2shG%2FqS%2BaGB9fkhM%2FsJ1DQlEozmR1%2FiIhcxZGCLfFfoHVX4xPrLf3OM5vtYRbL7HDJzVxmJQimdspRFxHc1pGARzE2zV5yrPQx%2Bzm0cbS8uvwe%2FbuizqQ7To2tHUuTuLkxkpRlrf2liB5XWyZLadtQ%2FRwWE3dKiU10e8eO9ouln8gwWYyMsJeeTj6mIMNGvmL8GOqUB5f6HRBaz0obapFoFN9A1BRaBn9Djxw8zjJpyeViM2PvCZRWyB%2F7QAzJgVWWRA3obm%2FWSlyqPGktHFEXJJX8FWtDAN5%2BS0wfAuGCTC4nntLKgu0Wp%2BHCnb5cOtWPt4OD3gbRyoeRARj2WgQxiLiOubmiPfTGbNAaC5%2Fa1fbMfxK1T88YZ9Do8tDUXGdoVI81mF9xXTeXOrznIUth1tnATpazv4YC8&X-Amz-Signature=3ffc4ac87823fd0fcbdbad64b78063d09883d4475997ee262c1698ca633add95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRBIRMA%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJ2cPP%2B0J%2FVQStRJ6d2RKPdhc%2B3%2FyHu4zu9PhtoiyaVAiEA1ZXLWiAn8To5rLq2zSfPiUejET2iNCUNoYxZfoVOJhkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK1KwqvtAmirdd6auircA7QFBAKJqWpbk2L0TtXoaWKiHd6ZG5UhMwuW1SPq1lCrnZpHWKkIc0J3rsFzQNSAZP8%2F7oe7IdlpUw2vHqjKXDdJGoVZ7tdZK9CdxcTxf%2FhLedsoqLZdH9lAMg6pkxhukCr0VhCbzQ391kSrOn49rNqAPJpzse5EaiM7BPZjW%2BZ6xjCmGMXrtQs181HQYM4NQVp8StldYIOTB%2FEziwSoug3D9mz99FvbNXSFuZXi1bLmIGH7olxiMfQ7uI45YKheFvyEyUJxm7rVhvFSVQTnUia0i81QNyqB6vhM7IgxKARJ1Z1JdasrAfCvCr%2BNzxqbxJCDs8QdoNqoR2KHAooyAHFJA27cXMjuHkfTvlLwSWbrKhSoKr%2F0ehwzhGe3vlddVP9XWg4S9iKboDrfKqAM8%2BHJz50HPnexHL4vGk42B%2F9viO%2BV0t5lmXpCcGEyw%2BkuLvZJif8G5%2F%2F4qYLz2nTQjp%2B%2FNPKLOh5ey%2Bz4XVBPZo3OzbFHdtD5lQmuQQoWvTwnpVWFo2ijjT24RsWMG%2FuDN18PShahCqUzVJ5%2F0uMdqJ6Puo61CKiOTHtfid5QReTNjgkVXz7thflkK7mEDiva4T2e9ItdeLPUwKmKfN7OHhdmySNni8eUHfUOfjLfMIKwmL8GOqUBzqvsktoaWNQVWp6QJeomFSMItAGkJ2SOVkg6vz%2Bph8Vcvcn4heXA5hXPs0xbcuRLzM3UpbMCQp50wKXD4oxh5cQQ89HkdS0NYc34FkBfOrxG2ZUu9%2FC9Sdtzs0H4Q8ZGnyqpNQP8yu294sTrg8VfyM83doNGR5Hg7uYRYKBPylW313yB1WFINpApmtnPQcwa2fQYEeEtMoolS40UNeH8C22zlThx&X-Amz-Signature=9a76d9fc72ebcd8f90754ca5dad168fc24ed9e52ac3d60baa6ee52935361fd02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

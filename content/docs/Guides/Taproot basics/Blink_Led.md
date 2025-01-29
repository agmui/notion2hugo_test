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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UFNGHNZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyNCvMBuw%2BHTmbxzkmjhVnYzLtSwJP38WGOr6xixU8LwIhAMnPXQuodgUFM%2BlgOI6%2FG7lZoX91pC4mMDLe13oKxDS4KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCkCpRVDnG7PUGxU4q3AOLgvH3voAUZp8asNCOthozpFY1ulzEgHDtdbVWr9gfdZFwPFVsM82LuLD8UZs80meXkfe0m00VJnq8F5LPx2mdga5uidXe%2BcSPQxIwb%2FqxTyPrldJmdOZ%2B7OyYHnt7bRhKPQV0nquCorFz68DGSPqPGx%2B5MFFBBUbLPtC1ZDJWIDDyyu3ou2oPxo7xaUQUdx7eIUN05r%2B5L9OVP0MejCiBGtPN2sMREx9xqQM3Hs6sNKSd7NJsZpsmlt8Zj3zVG2qQ6QZebWZGPZzUH%2FNYzPYrZxujP%2BZ6dZ5WWNhKPA1VgbinD72IpbT9Sblr2nu838qf9TfSW%2B0K1JUQS7cag%2B26kipGwzPjZYvVyofHsg4Z6slmC6xfbRtI5P3zUb7ZMCfQXbqZbCo0IB8lKp6uSo03tvbsNtCgm66VZGekIrkqG58smJaaz7zh4VCLOiyI6QiO8q6jG5XLcydC98G%2FTU8u6j30SSQmN40%2BaqGzTSretotRR023k5PWBIhTFf%2BelaTjdppyH7un5SR83l2iZxqStkQXxSBsga8ykdOP3cwEOYHgQ%2B98drmMbGqkvq%2F0zRX0vIqY3kc%2Fq%2B2Xp5P%2B1O9rcs30DSSs%2FdjTLonCYDjs7rAXsdR4RS0DMT96ZDCzr%2Be8BjqkAUEuwq1BFC7GDh1iUXPUt5IVyfSvq32xq5hcPgwKZaPiL3kKHjnJq7FGSRZ2GMNNhODk7P7jXjOFHj5P8iR1uxJLlbQc4LdHeZidch0XjIEgYo79dXUo54iEtXH1eeET7NzDEznyGSnxiyNOmSvrNGDqHLiFv%2F71BSCeh3ZW6CW849fUy7bhykcBDPEX%2FVe9TtepZcUsX5l%2BGeLrUqpbPgOVB8C4&X-Amz-Signature=75da326b0bb6fb018c88e48fd92ed29e499311fc33332917c1a9fe6573e60323&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOV3XRK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCqLsZutDogryn39LAOFwL8Kw5fIVOrK12WEcZWoHqjwIgOHBVQ2e9SgD2IU7vtxBud05XJVa5fTZlIy%2BBkv0MFC4qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAO4JmpVCVNpiGyzeircA%2BdpiCsS7cdHVvvtFDBWp%2BhwXkUNXpMV4uGLpDkWT%2Fl5wa2omx0NPabRSJ9rftBqSXpwjJaBBFhgDOkfEHagnUA2O181vkLxaeNG36z8ZYz5GkqgohGjDzaIBwOGGx7%2B2BBDt9d7JmUr7U89P01h4VxHplJlAIbfbiOLO90Om3iDAvTZVeq9fsqxmer68jacIOxWXCqeIzdD1599BIFrg4mOGxySCBeOijHrirEGxjt2%2FvNTsbbKvFYtFZEKqRperczevUIV%2F1iQE67rPAFFb1L7lCO9YgPOM8EH0el901IlvdaO1XZ5shEhmbOevmgDXadFSiyfQUS%2FErfPMirjJevIVkQU6l1uGRy4wiZV3EaPYkyrAFFfqixMviY6%2FWzLnPuaaZZJF3HywjOOBSvassPDO7RE4ZnUvR%2BgIDCfMrMAwu7HIocTyGJuJNot3philhkV%2B0%2BPpvJpgT00l9hnxEw2hDAeVsV%2FMuDV0xKFEGdVapbBgTySr0fAbltL9qguorXUG%2BGfRyCMhVURa0yd12etzpQiQv7WH1HQbR4mswTnLvfwggYCkWa17tT%2F2NSpisuwtMAFmwIXdGYRfGqPzvGV5KQM%2F3qNIs3OJ6MY5Jrczf44G6fajMUgzDU0MLqv57wGOqUBZOxXk4bJLBUsFj5YmhBbm2gLLecy4B493paXs0NyOPIH%2FEtxDfriCwlOdb%2FXg%2F42WFxL06VcyiK6Pkrq6dS7YJ2pRazxcTw68nWwjrl7PbETgXwixYkvlzS0BHOudsS2ZeQtaAV0Nnrjy%2BBn8ZfU5jaEr1%2BWVQ82T1KA7c4Rs5YtSVjzyX0ohRwo804JlvATOBT0EfJ2rnEs92yC%2F5bR1wZD%2BMp%2B&X-Amz-Signature=4d1a157f9e563d5dadc8ff3fb857f34d331312d5d6077069752acd03726fec76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

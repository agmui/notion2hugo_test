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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GOEYQPT%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCFSEN11HiWWON09RfQJ0HezJ8uOoIJ7%2BZG8vw2M3UaewIhAJSg0O%2FokwqvP7ScQF0RtVhE%2FleVorTIEqQYQxU%2FiSycKv8DCDcQABoMNjM3NDIzMTgzODA1IgzK54NsEAdV%2Fc%2FyDXEq3AMDMT8soSSjVzKJ4PJL1qOL1DM8vRkzltpsxYUUD1DeZb7mBETEKkmduKqLjvXq%2BgKGPJIeuDcAta06jJ1KxC3KcFu3sp1DSQImmu3%2Fe0wGa1xZkkDwhmNFu0NjIC5O2noMN%2BAMDF4ETrKmjnfWBIyavJ8UQKh0zMtahYd8YSWpGK7Kq%2BCJZzS0D4%2F8LuPWyD9UlgiL%2FXGhG8Ffx6dkfSOgCX12t6gAbUxspYbYfUbivee1PVNhClViyvAnL5F5UXB%2Fvo5lvl6klpmMOyl%2FSpps5OwoTxQtXsW3nm7dN748FimIBwqfBrZCEF5zt8vy4G59VIOoVLymAnADRDi4TW%2BEfpyX%2FDBYe2RzyTYFbi7OngJabhZfaBo1iVNXTFHUc%2FsIDvt%2BpLz6bMXf2w4y1Yaa3cyJuGdlotoCMrw2oQia73QSgGMzqVOt%2Bb47IVHomzGXs91Z2o1JQTAYAiPxeWmfuSNMc0NBYAVls%2FvR1kQGoeemrI1JdtdrEn193IWWC9Eq7In36g0EETP7AHbX4ti41LwCm3rlbtiTNOgnDyFLAk1UBiVKwKR58sODaFoY56n2Ht3tfrLs5AGp9i5iEm%2FDP8xn5lAtClKEwRHPRUb1dXlbmWwLmT16MmZKVDD8qs7BBjqkAc3tO1%2FNBoIXGlcFLVbb3MaIpn4ok%2FZTMu78jRETFo8czjKHofdzdptik4Pdx%2BSvhaSdtobVg0ydE4o%2BmoWlGnLbFP8sCZHy54svOabKwnETfMCvPmbbT0YLrRZSNqAXNzheo3pSdzSnHkeem37JoCLZfqeOIvQi84SwjrAvjpC0CcDjvebFEq%2BQQRFUesPXoDqE4JS04Leuv8zUJ7WIQtSJ5Cab&X-Amz-Signature=537b90031668ff38540aaea107996a2499377342f3156e1cf2e289414124240b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUN44S2Y%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHvt0hnEAcrEzDnkxcSkyrfGYG0IjOEAaS96sib%2BwbhJAiEAiDarA6heCZbyHrReUTTEJ7pkg3e5mpfD8czTrWkJZX0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDXmFRzzlH84JibT3yrcA2xaTKn4ZtoNQSr5wIS8f%2B4365I5KIkde2g85SFz%2Flw9fMY2v%2F4IgILHnR%2F6UO1u%2Bqx1i8pr69VgvWy8tDtYiSNcQvtnVSdTmXcjKv1dvN7JNPsS0EMjdN3JqBEIQtqNs9qHYUUTFDwKLsCqcd087cN%2FqO%2Ba55UgoFjpyvMuhimj1AlJ1D1hnvwXh2VmpJaanxG0hJGioOXPEvwngXcgPgrIc192QAcOT5SXGXCv5s6nujPSEbIc93zC5UAedJS6QTCeITggeW5xmH7RmhjKB1tT8NaIVJ%2F0LlkbyajIEPFg79aP8m0yL93mbSpWf1O5HJbyNj4tJewV9Q4sr%2B%2Bk%2FXm8uPuEesWk%2Bh5JHVZPfQrPk%2FfX%2BFlPE2UpXjoZOM%2Bq5UcP7LvOnxzRRSm841NWMbsEV7fLPo7wuOt1G4%2B3HrVZ%2FIJ8sWoEgzvYZ7bN16NI0chkSi%2FqKt%2Fg5SDRYMJeOPpPFeOW72JwQlc0SDPR3OaVH7my66r5nXahHvSlAxcDRS5o5BKKNvtWf2MTvFeZyys6PABPG%2FuVFCtyMaHH4I7l%2BWoezNdNQSB6CYsjKYOSI%2FaHblThmnZnLdq%2BzUPgE4%2ByIQJ8QjNEyrqi%2BvkvGXyuYVoFJngzITqYuc8PMKCrzsEGOqUBx7WxYHMHGGqUb0SiAtdli990mTXimnh0RQdqkxJqpc2qTcXiSekorCtsQ3M7rrwN5MgOE2ckiwxd3nWtp4rYcfZXC%2BUCpgVyz6%2B0cFaWWskdzeuTIySoqRmUkfJnWxEfs%2BvIyfL%2FfRq4cMg8m3A8tDZwWz51RtUxK%2B86zUsavV0JoLBVm0y%2BgpTtIscXaF9YRafjuBbuzed7oYRbT845yzZl9MtK&X-Amz-Signature=5972ab3f71b81e513eb5ed85948893ff729e27177d6b5750fd424b57dd358672&X-Amz-SignedHeaders=host&x-id=GetObject)

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

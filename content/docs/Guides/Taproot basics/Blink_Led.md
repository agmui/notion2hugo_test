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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGKZDCD7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCjoajPtiMj8BxXn1BEk%2FxXGhFo9zS2VxDNIpZUB9Ma5AIhAPa2%2Bbu6Y26GknmQt%2FtFrlliCiBEOZtSb422puRAJZ5rKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIIrZEIsOuPenOlNQq3APlj17FBJOliMUjV6ru7wv5972rXcLs2Zw%2FcNbRl%2FDikkUKklT1zPF6y2lf6Wd1iqnFS88pXMi6E5fovykDWVPToZND%2B3x3whLhlU4GoLqNJd9H2%2FaphiWgUkiFWIlXl8n4vqvrR2GsYGP1PHyoWlg%2F9xs7vjgRYSZPMQ3vPsxL9aDuVpaVCHHmdHxzW1T%2FXvnvRLSwR2BCcAjP8jh5A2cMepnVH1Ttdske25GpFcjbM0HBfhF2yy%2BcJe4IGSvBRKBktI%2Fa63WAuGFVHpFAa1L7UJzbQr0NWFWyxqfN%2BTyKlwxWxDK%2BMsceUkJWWgu53BVvxriC1ft2dfFY6fe%2FljQJYfMt8ViMBl6eTpZQxd%2BKTM8%2B3lhE%2BuYW%2FCUMEKD5fr7ouUaqg9nzWRvqdRP7CLhp0Wl5w4MzbKDZIopIOBF922vevfypaJJJkCGfePCCzeWfkK2l%2BmXrazKx79bX89WwaIhgJxxmjBsEkGIRXReBMWdom%2FzaOG1gudLC%2BvxlI0VfHpeK%2B2vrjVjZURU1baBmNIS5kHC33lAOhlcPW%2BQc9AtUY0iHBIoOJ%2BRR1RokAf2DFnmude0dUQ2W95ZKK%2FNpUpKJo5d1sTtMDmIe%2BH%2BN0%2FZ8SSwa6SITPrLq3TD486DABjqkAcXIqEsyvWxCePpt8y1AubPSAMuF7oqVNEaETRdchKJwD3tAH%2FrmwZCckkbci%2Fk56sm%2BpxycmCFBWGPwgxdrulNE%2Ff3igSEHT39MYC8MPROMwzK6mgCjAELUUVpYTpnCjgD%2F6Z564k%2Fg4U%2B76mgoG7yIE%2FF5JpKMFqEzM%2FSMzEKFc1TewOc%2B%2FdB05fKEbpr2xA1%2Fksj9OpNpumMO2CFnxbpJrmKN&X-Amz-Signature=b445331c0bd8d10c487506e24243386294f87b0582e7c0a548142842699aea7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHIR7I4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEerNrva2sVT93Z4nl2r8WSdOPoB1B%2FMbei2wnipn2LkAiBOazTXKWCY%2F%2BzOEtav37O7aeZPBOsJZsIcB28dlhLs%2FyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRxrMZofWcQVwIK%2B2KtwDuKqzm10RGQdaPV4sNFyVfGWsZRJWiEXuC%2BqMq9RriYkp8ssc8MTfwiUJcR73CIqT%2FQTIiPTjDjgeC7rNR3ggmEkO4T%2FAMK3PfkpqIYMRhmiSRv5Qn10MVxVMzsgjnnLQgDPn95400Q0SLtrnS1Na4UJH4ihlhxT3AJZa%2FGbDR9Tsdq7FmPzwz6hNfU31XMxr7GCVeHsZPV%2F3ZfYyU4Vgb%2BAK0EyAueIunwvMsWaswwwQJ5pY6%2BrUPTcgZoxIVSE1O8IE0Z5yvuHc7ktSXIdbT1FiMLtb2UpsymPt%2BG%2BFlPZcyZwfTi2DDiI90uSZA88aGsHDufPfOYHfv5LXCPxkLVWJBHKVSt1AKd0k760v7Ttg55BPCY%2F5%2FIMfEbcUMhR%2FkkUR13ho5D4J%2FXQr0w%2Ba8Z4eEk2dZMo6anu1nGTSziLVP25ccC608k3CFQR2RdhpJ%2FFrISkLqF1L2m7ZAxL5rnAoaBQ5nv0o25vcPO9b4I6PzKdEf3VBsMLmD1z80XXxIOQWAivzKksiEm%2BIg5p6usHiImThBYdSYHKP8uqpdOpt5TM8NLWAy%2BxWmSrRiNEuFwUkTS5aJu2fI9hPXIH2mrOLtsAY6aae40aPA7UnFaqQH4CCH994vtofDLsw%2BvKgwAY6pgG2QTosdMJHcGhoLdNzPXTkNFliyfrYHGL4GrrBWEONJb9s6wvys8IX1SWwJPlAtQX1ex6CUbzKLpEgp%2BIrUwl%2FijxLwGS%2FSXMJxfSOdJZeZ3j0ISzR%2FRSUqswMd9thi78Y7W%2FVXI02FlyWM3lmPN48hd4F4AQd%2Bt5UUaYqSQ9TYLrsXSHX5ecQylMmMMiL0%2BvVRJO%2FJk5DMa%2F6Kl8Y%2B34jeifXgnr8&X-Amz-Signature=12c6eef759a3b39a85180f9712f7d789ca9065f5c2cd7315bacc1cf3ddb83b39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

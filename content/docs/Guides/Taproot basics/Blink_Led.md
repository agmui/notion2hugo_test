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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FXQLWSX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjrtolmRLO15Fwhc%2Fzkk7QITj6FA8p6aQ4sbGmrVHhnAiABio%2FeaV7GKJemsqk9x5l%2BYbIErBEeudRvIGv8PNLMaSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMelVoM%2BvQL2hehP1xKtwDLvlz6l5dNpB2pcc%2BVVNR32nQs%2Bh2krzCC%2By7k1q8X5S3yf8mY%2B64qz39LPgjJ%2BDIKhh9TLfXy47OHW4scECdUxHoOQ6A8Jm5FzcAY7T%2FwSKr8xAa19S5ZpvnRQk7phyPLljwU0FYPTP6J1fbZNo6VB%2Fuf1YTGsUf9sh4uo7K%2BKDXUW5FxNcveXYVfzFtdr6I6ESdfOTUHPo8DEXdgTBS9zQcOfOLsMzKSVJDVrrKP3Dek2U0xY1IbYR6d2gNV%2BhKOYkpthwfKyeU5a0vTLr2V4nJN3G5WJKy%2Fhe3fcPyTKhlFQP0DE5RD0mCod1VbkTWQBsfEnJEPQIEu7%2B5jE3AeV9VpS9TXglDdoyfOWdB5QWbsGH3lJBAzeS5y%2Blvu7rDhWS%2BQ08Sa99OC4DhOMGWfD8vs5WuUrkRdXcY5zmyZ8MkZELvydwp17mhjPz3MpLLxnsg%2BU8zNW2lBd9SzYsOVp1d6ofNImmfbLSqxCc8SD5h%2B%2FmNnw2t9rPGLwpSXE6CHIeckMfaWl1bBKXZ6t94JvnekFZbmDnBBI3VePI5q2MjHaaSTecCEGb%2BtUeMFgdxqxEAM4MzmO23arEyap08OeTHQjvjKOGGtRdNE6jgcfUHYRxLBdOUryn0VYwwx5C1wQY6pgHeN%2F8%2BCQtBS3s74s6WIl6rv%2B4iiqqBYY8RoMvsZwanq8aVV7VJ6YMInGdOidBzz6ABFNTUeqR6yADPQHHaCa0i2WnecbOswyhiw2Nk%2BIeXMDqdLEiBUUIS%2B%2Fda8xC2fuJdGO1YE3Lfj2QRvhCFFbHjfgHShNjcI4i%2Bwa7Gy69rkQQ2r0gUD4yyxeFF2EkGqaOyWZEEQcENj69qkmRcxPDy%2FW9oRQXs&X-Amz-Signature=48d8da24ca12606c45aeb034ce752405f556d0e2f5cd695d25b9026074640271&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNFLE3ZI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMSJgPRzBs6pWFVZmFIeVjmy0QuPMmZvICi0BrUWv1ZQIgckbYRBvIIqAdBpUyhE9AHV9o2GQ9kW4nxav4NUQXIbIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNs8Xb%2BnhV28cHJsfircA8nlNqTo3v0wD3kkl25O1HoTlb2Z5b3Rhw7%2BPwdsHOhIWf%2BjH4RFrMPBSUYDlxRBNfKHkpTi2sH2FGG7FSLOhDNF5SvVM9AJPXrOIzBVhyp1LWjF6Y2MsIWo7eXU79xWVHR25RN5jtMvDwc3VM9PDd6fTnGn26hJwvDAtu1rdvMhctOmR%2FP7Sg1WDeCjVNwwTVl2OFFb3%2Fxuw%2BRbycO9IEhcCNaFjI5dm3qFteouNHPa64Bmx8bNpgHH7ThxJ4q2fNKfS%2F75RmWUt%2BKffmJD5xntjNZTAaXmkrkOq%2FqhMRfMlJUJZswomR4VvAxORGVDswTwMxSUgbhsBlHlA3bfuvnLdQqmitvr0Gh%2B9RqT4KfW5k57Dfai7Fer1%2BIjId6j5Qh460PFmYlKmCoGx49%2F8phQRUtJYTSKLxKkUcl1HEpcskpmV9WZyWHpjJk%2FyQg46D6vFukZ1LN2qKSPNUh%2F3nIn9xiIPDFQusmwNcqLo4apB2ROfDTgNTI6hTzsz1RGeOhAHAkFkCdait7OkteTZgXdQk3l98aVq5a14Fa4drBp0OrLtWhl2IjutOaPGayP8HONehp%2Bg4U53sUv6nlFM%2FRsTvzXHuDsNOsxtISVxVAJJPjMg3sy6h0b1lNJMMmQtcEGOqUBR9aSDuQ%2BTGZKAikXDEbFOJeonOVrRTbEC3MnntaH6o2%2Bup71mAlHACiaLtsaZ%2BcKx5j2G6JuvRuYMw4dtz6kpJWcOELS019YlBJb7Gl8ZoWiTz2VG0cYhp%2FnBhinNnWjCdTlMYy20TU9KdP%2BcuNyjKvWzzZuynxmPJjG1tztfp0FCSlZsulQGs6jzmr0fCcjCDJdNUxXnOBkNTIkTxLvtXWmvmhu&X-Amz-Signature=fd3d9ef8666ef15d4cc4e107417b9a2b68b1da29258881de43ad6e4b3211d9ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

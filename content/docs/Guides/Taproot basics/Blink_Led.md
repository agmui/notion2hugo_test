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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUPJSLK%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBnASzzRaIYfOgZkGiYHoTD3m13A%2FqZNtXVeQa0i3RT4AiEAgMV4OzgoEACVLZzAHA0cat8ektH%2FP%2FnIIixGhKPBRggqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIl%2Fi8kMW%2BR8wyleSyrcA5SFX4bM9Xyw89Ez2nsLFBBzalbReJz7SIAyZGt7%2BccRiBW4Bmru5UOMFvet8Z6P%2F%2BmxaNneekp5wP0eTnnHs%2FErSjwMu4JCLjA4g08QmJQEXDAi8z3x%2F4AvgFSe4crt0Roql0BzmwC5sUKQWNE6MPQ%2FfsHVc9BIu94nt0d%2FeWRsR53AQFJ%2FqQhbK3mupjWAPY2V9TFgD4ccyCMTpwzG%2FMRTuayqWusrzXYkM2kV6rw%2F2EMKcpQsXtxt%2FoIf%2BIP6Ouz%2F5Y9Btt5L3eA%2Bb1tVQ%2BNhMP6VeRPGujCy1PNT3BArd3YBn%2BJ%2Bi5gBLIdCT91XUTgn6lys5pwjkhQWKTJUVLQJ6BgWZ33aqMb%2FTeBnxDMhwIAvr4taLPMak4atmcT%2FsnJ%2Bmp3j3Gv84PNLdGMmPBaqHdw3uzFxGYoOs7JXy0eWZhT2R1fUQ0WGXND42ka9%2FV4yMaZt4bFdnDLUyTp4VMhtZ4jThEri3fVIAU8oOr%2FjAKHWAFBFHG%2Bpa3UXWG9nWS8Tkq6R7Duju%2B8kdv55Cm8Sj%2Fyiu3jqjH3r37dU6MZg9b6OyZfnfOWM8T8XxXwALDBQg1Xll00Lgkeb%2F0U%2FlRPvScM%2BAtcBJaCLkJJObGg6UHkHMr0Tf8csipZFML%2Fn3sIGOqUB1O5u8Tn5iqFjl%2FQjswu2PluBm8COx%2FZs4s1k3C2QrKuHR0b7XuIXYjybmjzMxwwFGl7IJhQ1tuU%2BIkfG5trZlpfZPyUFemX2nEIX1shV8pLI60RzBAAbxxFf7tf%2FXDr2LUgFtynqFIxFRwicgNsOKmIAVxOvWbBDB0aNA5kl5KCYxbytbfgysB7EL2nriq6MS7sCodNTOL8y1jJkRYvzVlVeeZf7&X-Amz-Signature=3dc6f5d90e1ead5832c852fb260edaeaa85cde4d42d93ca021b51636c5ed1405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XZV6Q3M%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTJgt19jY6%2BEFisznjBCpMm52bZxTZNZhKizPZySa92AiA1bfFL%2Bk%2BSXwI%2F%2FakAeki%2F4drVJ%2FobbpItQr5GNcTZ1yqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkktKCR65O85tvSH%2BKtwDiDtjUEtofQn2D6d5aFe4JnjwGL8M1KQ959czT34fw9H4yk70HMnvKcHNB1OQd8pKhyOhPb3KFQWnVlQYs1DixuZEpD%2BbkVDCWZY9wvSm5GoN9qzsTI6RkNwiqWB6xUndpavYFJhLB8qFp%2FMjF1MAxXDRv7GmQNK3G98%2F9ppKTCKUkJpT%2FUPuHSAg%2B%2B%2Bghy097idc2Wd2uMEzDCTgSdldgeBCXIOnV9SsTtNc6DFzDqA4tdOd8VVAy3TUqGO%2Bzc%2B1CYlVyz3TxR8x8%2Fq0oUvWClK9hNHNEalcd7XASAinlp%2FT3UUd1baib70By5SP0nD15YXpar4Wc%2FJp6hY12cy3pjrIm95Qy0S5RtHVRHKEPYksRdXifHvIabX5MVKGpM2V%2BaviE3ccuBbfA73YOUaJN0TgOQLf9OS8jTGHGfc2ypeVz2nHudPThQI6s99vYWt%2Bma7LdduXNpI2N4B1Eru0OV2vCMgAHXK52FDX9ED1EGZLuouC%2Fo21gmtus4tLGIXN5QV58dA9x9xxUwlqlfHR0QzmPWBkBVaZKFSh8oSKNYxMUQLE7U4V6uPCHjhA9ZNDmKwN8DRi7tFnXbYDVEOgGToEY%2Bmw9VJI1lI62AMrSjbdEtZWIWX8I1%2BWhY8wmKnewgY6pgFCjGPCyiNWPuZgWROb%2BEBA2oAULldXAhLTMJcjeoqmiaQmEJ4Gi39JCmG8gqFrNXqXb0UYohHefwcj%2BKw1kBLHqtvs%2FEIbVAG40%2Be4VMkZLQKii9sbyk1f%2B%2FA3PIr8AFPpPHZmAB0LOzGzs82RnUuooYPDwTxTa5YiRHRQevWGlwvST2hHAbs5%2F%2F1ihelCgB8GlQbJno%2BEuqdmRgr9dZYrad5OvlQb&X-Amz-Signature=22b638196400929de79f266b25b726edd1cca0c2a36b2abce8ea48affe63c10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

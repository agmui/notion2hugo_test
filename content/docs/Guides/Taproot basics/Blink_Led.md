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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3J75RWQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRcy%2BgLC4g1s7g9s5nOmuQZYy99AFAeQMKpHsC1eiP4AiEAriKnJhSY8OTlU72TBHHv4QGSBahcmnbrPlRE138Ds%2BsqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZdto1NXCX%2BaymmcSrcA4we1gtzTCGP6TvKvajJ5y08xmJ8jHt80H8KxiiMuZZhoVtQJw3qNjmCya6hlkbOXxq58JAB9%2F5%2B2ONOawnDRjnbrUZ3y48QIYljgfSMiUOGSGXMHItmhNjA%2BllFe566SXjvviG1%2FIsiKhioo4Z5rGsp56wvNgfAfcGXehT2y9Y4oq288Zzg1SioaXC2d0AzA0awuE%2Bu1DM5o%2FoqPK3lL02GwlRFqtHmzq2Z7sTKUi01C%2BsYZw6vCEnY6UArTdwY2tg3%2FdyIKvAUEchcg2Emn7TvQ60wRCZrSIAoQ2crgwS%2BmsbI8jllidJUdBsRfJX%2FZJMz27I%2BJ4zOpErkTA%2FdJLcX732uNqdw%2FDM4obHLtMJpGMz4y5YO%2BqXsRLU9L4saVcna09pU9xkcVlJLBMSvrTSGwiLwMNY28D6%2FAet2kMVCP6865gX2DfgEmkl8wpDdqOxhy1BFtyYgApNOhl5RavC3aKQSq50xcIEbGdScj15DngTcj1lQ937KWiNkI9UGnpJH2cfDLG2DAppik0DDbT6VXt560JyPKe%2BBdFRI3vOF5gcryXAQYNeNKgz85Ij%2BUH3hhskAXf0ELDR7sbFiLQISNnyKQvQ8A8oGa3cJoJLvHGd3yMvKOGL3TuDhMJ2r3MIGOqUBrNKU7f2e3aNz4NnyTn9IdN3kWeDkvOzl0iNl%2BJUhfUPLlHl%2B7pFtdMlBi0FGIZbT7dwDXmME2ULwFsimtXBWax4hGIS8vIX9I56mKNATPgj9nhymVvdUMViwag7yvkd4GuYQ58Nex60rjsB%2BaANr9zgKzvjjGFKOE1Jv1yraC6mh9v8LY85mwMpxKM02jfG%2FLlhAw1%2BoHP6qLMgUi6fTV0kFueK3&X-Amz-Signature=c51fc24564faae3adc20f923dd4224a5558512e223eb8eb974faee2ad5380a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMPFAIB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU%2ByBqd1m3AHN1PoleVDMnF55%2BlFTzHQJ33d7pijbHswIgQqYD%2F72uiy5Aa7VlFakH2GHaM4AdKmhjH7hsIuxB75IqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZOgom4wsh6crO09CrcA9jVVlXRPewujlEJOM8jvkM%2BXLC4HX6nmKS0N40SqhR%2BD%2Fi6kLVVPbNM%2FTU9W%2F8REFDk6mU5cM7QuCZM6xjELoorvx5Fy5PFD6y5fIexsAxnsabSepw394XEO69wvwAVTU5uqS8rkjjozGiLnQvABwkBrQDmj8aksDs2nIud68QuQY6VeDg1n2Z0jlrOrzxV39BB09GUxnNwyfZC5DaHfrIPcyZaekpr%2B4EQle5s8m0BRB53ySLD3aCMU8IsoC5HOBDZJ9YOaZ0vs85BkF6m4x7wzv0%2Fv0aN%2BJda41FYBJ29zXCnKadhAPPyY3PqjBm6ouqRwzDEvzZ8Fai6sx1PiAWKxw09RlIQ1uLm5rngTUe6KZx2o43LZ5064NetP4fWIeV40MVxwSx%2BYr2bM4wEtGmZ1cprGXXNytkJtHeeuOksT1eBTb6N%2FB5FZcV2ULRITEkvvRQRt2YJ11EPlZBVLrHmlFNaIm0B97BHl0Yrteq924TSUDvBGKshWfDkG0yOqWKt6yYwCm%2FPnZ%2BZKf5m7rfjh1V1uQgtf3xurOcnyS9o2m2gz7Ov5z39nLCUYMHR5rLfvv2RiZTsLC3B2VHZqiOESFY%2B%2BdTVJOz8C6LYC2EaZaZyTAER26hihrkjMImu3MIGOqUB9vOwZKO4J1Bn0wBo8jpaTyhAHp%2BLFUqlxD2Yya9tYtPtxgFAq%2Fkx9Mgb5OR8SFDQrDBfX%2Fch11MfTupoGFQQlBlaUCHD%2F9sEzgciWqdPuU%2Boc0M65JOhFlCYIUTkNG5Cz%2FCrpg%2BLwiGZ6LpWcw%2FjUqJ7SDpOMdZrAFcZ2SEFeYb99%2BSxgXfYvBFQJEN%2BQtOI6NJ8wBAGQMsqV%2FCfnFu8ovAjCdLG&X-Amz-Signature=c60559ff666c5bc6db6f2f5dce7fe05da2c2b7ae40f256ae593107b46b7ac537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

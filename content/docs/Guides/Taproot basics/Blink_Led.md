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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFTMPK6R%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEGbl%2Bj9hObomdma8U0n8HvRvJqXkb2Y7VOnMtnUmbWhAiApUZ2H6gZkVc8RCMRWAwOYjtxjhN844dME%2BfwFccVIRSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMVvTpf2aGu3ciRDf0KtwD1Llfo%2BncfScIOspQUmLO%2BxLCvN3RY2lFAuxvVDyGkFaBM9gLgNO9jvu%2FCMUxyQ%2BDcaJ4n5QXAawE%2F8a%2BlZ8bnXATkQtql3uYN9AEYd2GtGy18VgqxexF73CtF1Mkrvj0SdNQYd1Li57wLZKeQPdXf1MzEOvQWttdmMS5TAQE%2Fcu1xBL8yJrGyAMTd%2FICwJC4Mmmm%2B4puJCNopW4FdGcp2MfMTGMJFRa3fxlIsE8JmXsAckS6s3J%2Ffk9wbUV9JskX2wk9HN20pIGWcw2HgNCzdzfqrFXb5si6%2F4e9aTzSWJApCf3mEg8uh9G2Yo7rJe0BywF2HpIZb0eCSeIw2NU3OUhWLSTxHgYh3UXIEhOK29DsUjFfNrQiFP1f%2FQKwnnv%2FnwQx4i8gl5Ax7BsrxPkc%2FX9NQ1QBpsyaDIY1evAesHovLV%2Fj7xhgrDT3VMTvdKJ74pgsDvMEo9a7thXyPb5kbBv97KiGLuLxC3BGwTn4%2F5kqQq1q1%2Fepk0FcuQ68i3u5spiotMtB%2FuAd5oRC6zO1W6MRnPGko1AP4BAzB9IMYvJmCi%2FvSZKWkj%2FK8Vwiut6BJ%2FdBG%2BNqNk1QHR4fhrmqCAnqwn6LOPf%2FHqdrLOvxgfcIoOGpDP9UENnWdvww2ozxwgY6pgHuCBG7SF3m1XcB5nxQ1V%2F1ImZcA7BvcEevzBGSEaFVXnWEDxRrNFECH98V2Emc8%2BCDcdr4zR85pT4XDSVn4jK05cSCdLnVbXpsXPvUxr1dc2bQwnaawKVye18Ia3PQMkBoF%2FELsw5Q0JdkivurqxZd3KswXrixF6CqJPXTq4RpGW%2FhkuBuEbKcM0oUXAC1Ptoad7DIC5DdpCTTif2B%2BEz3DtGcig18&X-Amz-Signature=0aaa9239e39d353e8e86c1c9c0726acdb58e420514aaa9a73659316403e06d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V52PYI4B%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDnnpWSDzfOitWYHmQ8pvNyO0vJDQ5tGwIaFQ2ofpmAoAiEA5nDeWrE4i2Wa4neOspxxhugiqRpYEorKh7oNPa8q91Mq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJjcQBDwQUgL%2F%2B%2FGFircAyJcINQMqdkp%2B5c3lezId%2F4SBUFfJxKO74QOLzS7YbCyEpZ8lYLy%2BX%2BF0HSjr29AYQZWzj1qb3gemwN7aDOCX6iy9MYXLBFwcJX6RPjd2%2BYMwdydgE76auyfL5WiQWRtMSqSmdmtCqajzSmn3YGn%2FxxUXpuVVoW7snv0QR0Jymy8DW5Q0n%2F%2BScf8U6n5cOVcKw1BvYWtsJzyNnipsN6WV41P0Lft0zINhG1rGjogDEGoiq25dj%2BvHBuTXhNEcq662nY92476d4%2Fn82fT42pUxq0gxSUQa4qVMdpLyvxCnjQGgcAEcn%2BDB6ss9AJoCu6TMC1YIalvZVpFIzn9VxayJElhhvyUto1G0R1VEWCdFH1nRsyQKsb6HjLL6NrsqEX26IrQ%2FhOt5AFKqxcH6ZhgY9g2XutEd0tNZaLPQkzwJ7keBbTPtalt9Q9u%2FgbPkXuYrSeVxymsS5CdGMymvZ%2BQG5%2FjYd6hS%2B43fUrtO%2BVQ1OeZyZAQZgGJeFSL64AEHYuB%2B6yCnsdZep43RL8iRser%2F9p6E3HHxr%2FyyfDY6sgrznDok6DNZDfLuXbn9aod7FS6izeaaQvr9PNsGEOiHuyRIN75PrvCNgrm38jL%2BqGT%2FYXk%2FxbuA1Jvb3cdDsujMKuN8cIGOqUBQEMz56sUema0gnFQqKFGvhJZveDjbAY9L%2FraO2nAwHwpjKcgrjz58%2FbeZH5UX2kVZrTuTiwiwQxDh1tOoFL45FBi8gri5GPNPUBvQ52ZVctFAUpIHJFf2wm1vU9VRDjQ0ZSuuvaLG6QPx8VRdWxCBr6psfySDl%2FJMOP6sbQuuk4%2F743bKpFajWmdLdSziBQz8cSpJpAB%2F643EvPEDNw%2FHHQj5r2v&X-Amz-Signature=82bcb369a59818700e6f2db0e8393fc79979ba740659cad2d724981b16404de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

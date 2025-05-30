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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63V5DF7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUeII2YVHkLBN279li3RNVa4A9mm5aPGZK2dXtfPOeWAiEAvme9f4sccY3itYpKsIfHiEQ5mSr01sLhmjTdQ4axyF0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcsuei57XVOMtDkcircA5D3ztOp68%2B6wyBcMmtjx6PxE%2BMrnpWisBe9QDRXR5VPGw9V%2BAQRsFEAmlU1EdrKHMb7sOwJCxs0YBupW%2BzGXYEpgnC59AuCMcptLKGfdgKZGAsvo2MNT5kyJkGkqtwe48v8R%2BHGjlgr9pwn6Kc1nYICiRPAIGNIOGt3mRPz6YVujinamkrZhiZlCOpk5XEsozVjjseLHmDNR%2B7rnSUxSoYgBeUYkWzwWJfSdQfTh7w5Flx47A%2BQZhDQP82nYUUcK2DEq78Za6R5WQcmVCpgeRCGeEfPhUHXkz6K%2B0NIzdWrK4c9e9fUQHRtveiLie%2FiOLWcFb394%2BQ1y1Q2uQ1k3eEHa9KEjzUMytBfXAAY69rO%2FRpWaIyMq2%2FNl9IvdfjG8I4OzJrnRkPHG%2FSPR%2BjDLltQFzxuF0LCwuyTRfhRbyyQ%2B5%2FmUoLCQpvDKC1bb2oAaXDH8uU%2Ba790gY3vQjKi6M87zp7MMWqwpaTSVNb1X4OC%2BM3qYfBOn0nUiQMLgES44eoUKimM2oO2qV9W%2B%2F7n2rLGNRbqnWlBeUp63ALb%2FmRKJ66dDl%2FVblHyehv1FzL1%2FKEFL3yEVALEJWkfY2TbeG0NmlF%2BA9J3mEGhsanxzFb5zc%2BRx%2BiYmc%2F43WmjMIbe5MEGOqUBdSSfRjBW0uQwNZF%2FqGpAyp9IJGuxltk1DmfXApmtaro70e1LlgeqlAE4VRCCTPLnaUtZlHuBn0UcR2zLei31y2GQAwApK6xFvzO9GjizesEV1xEjf3%2FqDWnG507NDke8d6GKPpttki2q%2BlRv%2ByA6wLHo14sJYXUuga2bO7jBvJzBNjmdkr9BOG2wlyclF4vHc378WF0RqOoiE8l9VlaKw1nmJ1tE&X-Amz-Signature=b2dc0a14cf9744823387a898b624a9e63aae7b1b3c8b220879d6a80cc7fe16b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QEZDXQC%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRsiYmdMg7C3kwjAJwdz3F3eBhvrjdaTJP9VFmPgi9RQIgOl8XhFjyLkQQjE4BD167nvCVrT3S%2FQynd%2FiDLD9ljAQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLudgQAKh%2BgGreb%2FSrcA3HIs635qimFjYHdlXchUQMrD6LGRG%2BRtejyplEKHjBp9fbC9YfTDXHAxYD%2BeZS%2BdsyBJMx92whI7HaCvlSVONgaGmQr4X9clVJH4gtVw%2F%2BM8XajPH%2B0rTmYFmoA1yrydDTgPSw1af8RogRfbpWbnc3LySWkAaV5qmCrHSftvSd9r5JW70APcEcSDgVHOgrFrHZjSZ9KAdnYoX029OkBUdLhMs0xLnwWZNcQDhuCIo8DMoqBV3sMdZEQejKyRoNQaqnqKqi86CD%2B39q8M8xP7Ye07vnSbbPTXqrPExn5EbGUnP6PfHaCf8UqGTDpM4FZww%2B5VjLRRQ3%2Fmr%2BnCjPB2xq1ZhifursI0qiP6VCw%2BG1J%2FlKIhAYWqF%2Ftx8JLuP%2F8pBaIJfjVLLlIpApVwOIt7eqP7iQSAqokA%2B02dMSPAYe2qt8LX9VJ36et2527fpchhlVyWgsbI6Y4%2BtIEVYldBhgpyDrJCc4gTpTbJ54vpqeArPVDm%2B4bZYCIuu9SIHtD%2FasK7dV8FHslrqx3jTA%2FQk2zF71UNIoibNctn12cnD6GFeU7RMh84h0S9rJKdGnT%2FJdoQdvxf2Yw39bQSrOZje7R1PpNOlQmWL24BdO6jl7xCQz4xuuwBno%2FXrKmMIne5MEGOqUBTIcijEUFUEaxQCHLcSoiJ6rH4S17y2xSGrhy%2BuQKNcq%2BMPINDOY%2B6t2KwGDOfAQ%2B2hSKoXxNhze%2B2Yo18YlGkR7DmryOw1EduaJ1MIWkFNlwuB7qqnpyRpDUjlPOLAKU1miv75%2BH05r0qbLf%2Fb%2FnS61D2ylLFQbu78g8FALyTEVufy90%2BxeHbDeYAw10fE3qBPsCJbuZqL%2FVH%2FHGFs4%2F68411lzB&X-Amz-Signature=239e5d6017a2da461752467e736f53899d14ef416d80404e83569126b38cc17e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

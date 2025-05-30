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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNZSHTRG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv6fzzMC0OvCWuDAtwdDzhYMKNlV31SzOiu6Hp2WHH1AiBLMhAhLp2ycs%2BqGk7YvJYZpBY6R51JzBw9Ay6yBIwbFyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrBz3ckE71EUxfWFwKtwD0iySa1PkIwKtcuNo2arDmlo6T36%2BAmQLyPHWoUvub%2BEsO5Dl2VtHns7TOPjWx%2Fr3f4h60ZkQwiTj28kvVYPCP0rthPZck9dGIoEbXvkcowts%2BGo41hRhsd%2FTRq6ubWpl7kJlKIn5j7R1vr8fmOkUqZD%2BTofBeLTeFSD3HG73z5NRFDWqFtAVGL334J2ET9HwE%2Bp%2FeiEn3A5gCK3tn%2FsGad7QbEt6sLBANszHc4L3lqz6PKfh4WcryS8ZJX1TpK4cGWW2JS%2BNajjQoviLt7A8JHqr12djG47p4bGmaXAePnBN8wLqRUoNb8m3iRmKUT6rVh%2BTkExSDLhHYQmQWXQGuL%2FOWkjhYyCU8SoEkCOujkaxUDVnXoveTiSZNBNtzO5XwOGvR5NWZyBGFaq2Ww%2BL93q8fhD8Sbhy%2Fmc3jh361pES%2BWtUSHwS6loAOSuuTBGQ5m0fjT3sIScIa%2B9IelRdjYdMkS7fNJfM%2Bh0iM55UzWZW6AcDBlFtw6hT2cae8oVo4y4XcjbRhgyuN5Bm74J%2BftOQ4czMjXj7todejuZSAye9aEiOcBevlEDLVcm0omZp2FlVceCetWbS0EzxRUWCxUPGIxHPGWJGyGZIzAXJ74bbP395JZGiNP5Cgn0wxt7jwQY6pgGyO2B1hJ2zh%2BtCQwp9eZ1mn0bnWtCq90zEkAZ2SBDMOAknuBpGb4jA3UiC%2FODrW73dIWwldT30ut2%2FzeUc8hyVYffFhwTJCHUUFhoBNigjETxJd6TZYHCJz1QUN%2B4mLBsrkRbYRykqYDCVPTtH58lWmrm7c2ak5g5%2BsRWDZMXnYZ%2F1Q1n9t5gLqPeYDU7F6F7s7jpfaWcmFh4otFh8vCBYFfsma4Sg&X-Amz-Signature=3240bac070601762ba70657db513ab63d8040a5115b27ca74b7c36932888d35c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WHGCKN3%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhTx9c9NEafn3jLnkYgomjnikFpVD23oRA6LEtb7KnoAiEAhFr4VM9WLGY7MEa6gV4wcdll2iv5l1gIbHlTfoiXLWYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf%2B3xmfrC212%2FErpyrcA2cB45k3Ti3z8zUhu48O8TnR29japLJuqTsGaNqgdFAUqpBgmcRtNcMFXiT2NvKIytB8m9VF1xM3zgOsW3P%2F%2BlZ6VsqknW5WQB%2FSwt2awzMLq3wxmlc0Jyd6hYTFOxoAcAYxzyI0leOV3WtsSxQ52f8mYoMTxiycVdM%2FsEQ%2FTZb9W2gR13KBkiIJOvXOIT2rVxz%2Bbkrf5r1cTi8D%2BnVSOOr1nKDj0cf7QkHa09GSlOOehpng4FmKdVohx2N1%2FQaNqfJpUIOhPxumMMxtBrli51gWPhcMu3m8fpdkJQYlLXJV4Qe8BACn%2FQiUmaHY1lJcN3iOpDMdqIrxv623dEBok4NSC10MOH7uOO6FmlW8T3XEN5tSspWsg%2Bg%2Frbst06b6Uu24YydSXeF%2BTvS3m4PCwSa75oagXg5JlZPJdswB2JLXF2JUGVuCh2IK0x3Frjai0%2BKw2olzy3Vzt8x7p3n3iJtp8kCVfBWI1X8EzpRPOkMtEGSbSWw0lqV3zMp7%2Fok5vhogzKHqdwEYKU3dN2o6Mduh8IFTnwyLhCVO4jUHhgqU01rvb02f4lqlzSHRcRVyGD4j8eKFgQkaI9uVwtLVamljeH5cftQj9bTe6EI%2BrgfKKW0KQfNQyfB%2Bkn%2FlMJne48EGOqUBWUdZ7kPC4sK2RUyrnCSBUu1DRRbjUfDbiguSbWC8yaoH%2FB4acb7cK7Y1nh%2FjUqgJ61XLwX91Bxld0b%2FO1L2rNWiEBxg%2BvtFJFo6rN9%2BWmpg%2FPtEpS4C5%2FYMM1lJaQmk9Qn0dYCLtKnpktRYGizIkBQUrZkOMBKkEoPo9EEUmh9PKaY3NIZH9brTeD9iDXd9YTpyML9Ry6WXiaAKvWakZOwTRTXOz&X-Amz-Signature=626cb41b969882e57100905f6ae27e2ab4c71d9752109273464e01fb6b28dc82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

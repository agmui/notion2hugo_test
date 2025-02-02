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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRCLV7KK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrBgSkFVfIk6Pk3WV1LkAaXW28TW1Gup07OKLchvRYVAIhAO3HwwRzagnxuzoUfmUi%2BDycRQVwO%2FJoTZDUrUciR2AwKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSt04TBZbmwV147f8q3AMMj2u2wBdl6EAEMoUz%2BPHULLVknN1ZXY%2FCTcq2s8Ucn6YOJtJCHSVFR42Ee4JokUp2%2BZZePPlWdQTWavqsGfUVOTBsUni%2FXlTkTkvd4cl31tUd8S%2BxGwY3Ckz7%2FBM9NZfhPl%2FhtM6HW0eBH7%2BoYLJbjXmhhts2jY3VF88hpDexObcMReWqcQnpyFUD%2B3cfp61mi78RiaxH7uD6x2E5Uk%2FZuSxWgGIvEg4XY89NHO0nwD8v4E6kJj4hXxuUBI20jhFGotKHSOnSid%2FBfVncmR3qUb0cu7ESQldhZteOG9wZG9cdrpQrBuduSVOW9CwpFd8%2BYPqCUD8VbdIuOd%2FBIXv7Yosk5DgYEJmbtGwEmF4%2FfXXXnxR7O4mlb4achZBzIwCGXwSzxCGYl1sgKDX5h7s5xf8rm3mw%2BatOSXKlU%2BkvT92a5Fnj5n5Qb4tRtlbGaCS%2F5CX9qUXGOz9MfprGC%2B59Vxc%2BW%2BtIzWZGIyeFi2NRo96RiL9lF3oC7cm16mhsWHy%2FQre9Q6PSr04pICym1pzz3s7myPac7VH%2BuJJUn70OHApM1GmYId2y7VNlbWWcbSHQfWxPAbjefsLXVf9uUxC9zKmKCw9DDrW1qF0ay3BmLO9HD%2BeDQXPW5R%2FkajDQnfy8BjqkAcQvKWijK7mIjjXZjMwJqSO%2FUE04%2Fpu%2F1cgjTh3wR6T6GAOyLsUwDWjE7FtCh7Iwpm6JhVCN%2FAm38BjCc%2Bn%2ByPlFukIpRx63KGUEeiH%2FHh1ecqUcUrbzSC%2Beyxrj191OecHMk3oQ1p7UVKSK4J0yYz57inUnjckBWWkK1amHt%2BrkYt3cCsEoSLhn3LbOMWuX1AnTyQy43FYkSyHqKmfouBEoBROl&X-Amz-Signature=396e8445172d4cd5d8b5cef1bbea79eb2a95d001f20748940fbf37c6c636526d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZTWBH7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVt9mhN4gIx3lREim%2FlAQvAhIgL76LKGnGeA2%2BknhdYAiEAx4f9%2Boh0U8dM4RKNY53Y2xMi864cc3MvVHHwlVQvrEkqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgYCfJPc2DyEL8QaCrcAzUmPfSliewLYyd3V3hH5tGExuXLYMXfZ6u7ZybIjPcI%2FslVQcPX5394kQA0QZvS44eROMmUmDtmQcPewO51SfsI13w2CUfv0UDa%2B1b8oVDWCpQqUSOmsgYad%2FiM7WRmn0Dg9q0vtlsxtAsQIypuGufreKP6VA9qaQtFypxLYX1M7MD3iMnX0UWDILvLcznwoT4mH6xsZG6A13wfWVVISCyrlKS9ABN7kxvIotuoN5gHny5PKmR%2FGcOwLdXfbaU8ECFMcSLDVafVgVKyPcVcfjbiuakoDQoD7G6K4aSALe%2BL1s4g95Du%2FgkCa9iuEAUJGJ7WL91buja74quyiRE6b6EAxHRlrW9%2BAgDfGtrqWQOIYy5WeOvpesGkPrv8nEk%2BdUwRyveVKNMcJtBvXQXog5%2F2pdj%2Bn%2FYaxv5oA0Xg2GYnLCOmZn%2FzrQWTL%2FnmjMvRtaAkBliUAXsuLDncQWTFEeR8qRRATZ0UtPm0OQIZCbW2QoH%2BO6ugkxfbsoj%2FEahKMD7ewwBwEtGMqxXc2nJ8xoNcsOkGXzQsrT4trCEc2P3ijVO9LbxbXXCzNIodYA21qnXwKQb3RDPJnrlt%2F42fqHeKzzZxlOjQRGTJxAI7SJMW54nY8qAfGoAtYeYaMN2d%2FLwGOqUBy1nypuf%2FDRF7AwmnjibNsPlTVMWpBRcMZ6s1xw5ZOBm4asVuYZcFH4WWK2rdGttQ87hti0lQe%2FnbRviZia9%2BBF05c4mAAtQTApbGp7LJU1z15dLRMTChaGECDueolaY6ywgwgY60RkzPlqh3dXoiP4gJwp9OZhwow3x6QFn3SLhPiEiMFBr4aiJoFq0sTycn%2B14O%2FHaIj4dGopY9YmepAFVFbdqP&X-Amz-Signature=3160388df3f0bef174487ac263d2a454d85d9b7b61bb06c883b28a4434f93512&X-Amz-SignedHeaders=host&x-id=GetObject)

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

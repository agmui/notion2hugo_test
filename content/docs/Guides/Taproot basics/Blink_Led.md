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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT4UXUVQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4okufZ3FHiPX8mKBHV3QZEbvE%2FwcKFuih5Ddn6ra7rAIgAfms5cs5QDVwowOUDHylCJiKdMU4yY5vsi0WiCA1Uk4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMM365OgKqzR51MYBSrcA297elP56BGDPtvYeh%2FApbxlW4dBiE0gxA8zRHMI4Goo7G%2FGVlo7JFIkZgl%2BYQ%2BoEZbWoaSNiXPWJa%2Fjg01sQNzQFebVAkHhUeMt6CmiHQTf7jOKFElS5nJiQqMfjeedh2GZlN4jwwdAPX4k9AnkZARwbXWEQ5nZkBFpJzdacCR60dVmpizv3g%2BqzSqg4RwqcnYgAgKz3q2Yhr08soof0%2FSVkglFQ9DaQSb1pJ5UYdf1WOuIMs6AkqYBFtv6WHSPSh2LbNkZ%2FScq%2B6pVqOesip7NOQ8QusLXMoVTAt4Y6QOWXv9uasYM9VLNERbPe47qlZhciS1isQnfK4TzQxCIbHCSn%2BXvB4aSjzcwvwB%2Fkw%2F65Mc0KhyaD5U2rjWxb4LvITDV7CAhnBHAb0pBNfI9K6wYXvcef6fwTz1bxEh74Bylkam3%2FxMgx%2FimJOYFGUKG99iFxlKJDxhVI6EpXjlnE8%2B4QHrJ%2F1F%2BqIPcsv3P1IWjT37MkDfzcohti8QwPLJG1v6W%2BckbEAEUUg3fPWRJzs%2Fa6y5dDWLKK%2F5gFAMC2HlQWnLqihhB1TJ0pSFTl6u8E8WmNVkXOkxyHqLiSu8LVDKI5E0nSg%2BRgq8cyAIA6sBAK%2FSb7Wdkt%2B6G2%2BtdMPy6lr4GOqUBAxcemCZLUB5dkx%2FebK78I3mH52JYiFr9MUpRcUTHgWoYjLCh%2FdAa1XOryQk479sD64V7HfNYGvi26R3bx7XjCJBoZoYhcfD1CpUuEX4j2isiSVzHnPY196dDvpGU%2BQ8IPMyAPWmnJ8b5UFPb1G048NpfgqXxWMLPIbl49rH2TH8od%2Fh7MGjHxlDRBEPP26Xmxw%2FtVTlVAfgDuz0IrkineCVpbOGP&X-Amz-Signature=09b019620dcfec799dbf1d9a3c810638ae83e0e5e42c9b66ae707b774878c18b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCS5Q7VO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsK2kWiaKaP4Mjbl%2BDfW%2FgYkx6rcP2XNpT%2F2PB6xXHqQIhAMHDkelBmYWEJkbOMIrm1WCqwsQ%2BJ78PLcutxajl291MKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRNX8VQQlg7dH%2Fl1Yq3AOB1QlZyjXvjtwbPL1ailddqi6CaPx71wT3tR1qOyrEa%2FNCO4kMmo9QomgvjdM%2Fob1OI4oYqRvUy2Sz2OsoqP37S4PLXnu7gnmIF0wmbrXmJqeZln5xuwkHoHhTxKlQnk%2FU42vlwPYcj49QFIuNdIW5jGCvbnsGvg05Ou4KJTkkk8E%2FcKDSWLaQ0QsoL0w1e4K1z5DLr55bITjQbgCk9iIqpsTDphRe4tM3NL4ntyAhHH0uVqudZN%2BnXnwR9xojyGpTDX5XRBMBQQNygdLGBCoCTGsYof4nOke2vzDSQo%2BO2yDVhoekgHW12%2FuZtol2NJKA%2FZF5hV%2Bj%2B3rBLchLc7LrreE6L20HUNdqmEbL9BnMnK47qsqTas%2F%2Bf5B8r8agBs2rYZaYC99%2BQxhRn5zVMsD2eAHfqXdg%2BI3VkyCWgaeSdj1msPLFh%2FNyipU%2FmQp%2FdhYyoDYN5b0tf7%2FfsJKyzMHSDGIJD47ikCaOrXofLqAVEdKT%2B8dzD5A%2FkAkFenpqwNww3umwv0wj66wrbYtw5A9HODelXM%2FlN%2FRsfGNEgnuOB4zWifDmc1E0LvvbfchpNH8qCuBTsjPBdrz9eoSGuCr2UqxkKaPFtm905u0JaOkLe5mrBK7mc4LnqocibTCSu5a%2BBjqkAShehX8HutpTvjKY4trvdfSqUARkltgNE9VrlYf0tjcSoaPIqZ2hIZObEMcrdY8c8dfBvnYRfUFoqnIG%2BRTGhhbUxdJZ9lx1gKInLEl%2BMEWfOwu5YkqaVnz0o96ahFzbWqK8G9TJUgez0J04EFq9CT71gD%2Fg33MBibROnxgEwYzTrNfDCkCA5kBvU9tFtlV9zYv5rTkdXiZWP8n5Ub%2F%2FcORlnLGS&X-Amz-Signature=a4afa62d77991c6b0b3aaee1d24a2fe14584cce6b3014f01d4a0f8f97aa12391&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFSNXRT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOyjECZz4XlCzoE%2FdMOYAYspknOh%2Bmf3cMyTEgQEPGygIgBLNyu5FWqx0yEpxxrHljGPDEp9tJNLCsIenAiPPBuUsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXpoTy2S2keSSuBTyrcA2wfN0yLuILyaYa6I%2Bzy6y7DceqtJ4nKneFC%2Bcr85Vb3UDllqdfcCeRKpNfWMe7loxFfOjH7szs1CjU3LO7AghVa60HgZElcKbTbDfvl71cNL7W8hLpZBCRAY94Sg1C8NwrUu6XlrCopATrBHTyyvYx9A4CbcwtWfWQL35TfqSD4P7JqU79WH9B8jrEGgAp5apjeAF7nBWwsDJ%2FZTDQP1L5G0ua8gEyTgAajCez4QpqbuoYhT1zw9MshLXDi9jgoZVD0eWGw6DUDBO9h6%2Ft7n7ymYOqBw8XwvoMTk%2BWtacD4jaCN406hYsXpnH2Udx%2Btwwcif95pqReMpSKw2YMI4SR%2B5ySWyOF0TJQqn2GA7pfGk4vPqEWkGIaHARoe3%2B5gewQKqUBfFobfnLZuYgLgty8WqLYLXMuA0gRabAwIEIVElTxAAjJF4EpNE3lG3hnLhpqnB0Cp74cwbxOm7LdhwSJMNvhZI%2B8D0ftQ3UBDMQE4O7o9B%2FUbidfzrQcm%2B9BrKqUxwOG5ZHjloKV%2BqMwaSDG87OR%2B9f9t3y2ushEbDwAwHHkMCkjNVBLER5K1SsffImqXp6UmuF5%2B%2BaJGmQ%2FAtkYEijHPTzrnLgtySxEN7%2FuxKGRKTf1vS2oMUu7yMOzJssEGOqUBZR2Hs%2FKH6tMRyBNP4g5V258HCzsLz2okNFWRmEgBzufn1i5iZOE7jEqc%2FEKULb3Fzesaz%2BP6lmpRVqjhQqfvtyzxRTPf%2B2fHZ%2FVCDB8wPVg57Cdtqgh5T14KI9tn4UuOgQUwrj91K4VlcTKxBO5qHoSwYIVkZsUL1I5VaLDnCchwCCQpHG4y0TyRJjvxqncQJrE1NWkjJoy6jX71vlogzq6pEdRo&X-Amz-Signature=50d57ced0b97cc282b1867cbea4a12052046b38550ff5ee03b5d99bcf44dba27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZUEUVEY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcziQDV68TKA3%2BWeXXuBz4vBzhPjNGOXKfo%2FXLssN4oAiEAgIawszc5W6r6ZnbAiu%2B9u2JulxEbyS3BNorKioyxsVAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEezW0htA%2BU2L%2FNxCrcAwjo0BRLSiexL%2B0YSsXmIEzPAyTKn%2BBOmdAVbE7kEWyk1qrK3gUi1WIvp5wAIBguW7SMxFMCYxZes20%2FpcH48fkqFj7DnhdUIf3sSTPsGIeXDx6jk7kKiUpToUDDSUPuglywcysWhl91%2Fu9RB7i2wSzILqeDSUoQn2NCplb64XKoByEvCT6nVrH%2BL1yCkvx745b7Wb%2BWWpEibmYbXybK1BUTrdzde4MpmnQ3BQPw2aVngGOMJqDQvl3pcr8XtFhcH6rbrGwhPyxa0yk2cSMlT6nrxDvnua2vmSbNVk9mPJArANANR9zqo3PHs94bcfbf%2F7EIfQjvokzA6IuvHJqpwA2tmJmunJY4DL8g3mkRbtOzDFuUQ35nLavScDlXO%2BQ95sDje3y47IcMmuNLy%2FpM32DWcpPB%2F3RF5Ly3NRGnQ2G3yGWmtYGn9iG75TtYYpjvbMSDICvczVdez%2B5%2Bo9DdMe6h3LNIws8Lq1Yx4guSIheP8sJCFMTzaq5SutSG0IdnXBoDODthQhzEUatKAnHHJcCzg3luyQpCg90KWeKsdnofcFutB%2BHPTPP6ljok3f0DgY78gzmd6lXlD2bPGgdn8W%2BB5AEcvOEQdm7TnGhOPbIa1culn0jvG0xA93YNMODJssEGOqUBE%2FNH83nr0gIL%2FLzo7dtqziCRC9kkYzrT1yHWBDU7cAqd3nSKHbE6a%2F%2BJdhAXhDJabUy%2FJrdVqIyEYSjs2xzehuoTDyBOOgvofw6hic13EvQuCU0v9%2FZGPt1Ijo%2B9x56dKp0I4sGZ0QBlJWUas6TId3bSkc13vqXgkk47Yjq3%2FrRIePZhdLgnkKpGPnAFERAFtmvVFpTGM7RM3Z4vOxC01%2BD6doFv&X-Amz-Signature=791f769f01bcc1e239ec227ca28acc41cc4de1195c78263fb52249c53752b2b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

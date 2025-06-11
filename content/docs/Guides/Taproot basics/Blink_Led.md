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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX4XIPPE%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHk3lRjL%2BrSyqjfpMgFYseGeWq7YWeDoL6fWoMX%2B3XbfAiEAs1iwh8VMig4EdxsRMqpXBzZ8Ch%2FT6cN11oIKJLaUVg8qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLboXPTRg23lsp5PoSrcA7MNh13m7jRKR3g%2F80v%2F0wkLsCOQwUkOtNv3YillsiAnL2ispHpO%2FKhOc%2F%2FVmnnlOcNpH6okdyOCYm%2FXOR1BnfSxQC5xylYp%2FubtvZfzpxIKSwyZUQEG%2FIFVaonC0nbkJ6%2FaMnpQ9AePrQNAQioGewBVKABi3EZx3PEMLtb6Aa1rA1kWMaz37JFzOp0K5PIY2mOvtmpKy1pvN4Pk7NWmRDAX6Mn%2FRtn4Ie5%2BxpRK3tn0SRLZGU7utfgyxWbQmH5FvjpHPkSp%2Bho%2BWWk1cX9B4JGVVMiDfCuCKew7HnpclIuMUogcUmfePc8zsIdRdQHQmGwtWG%2FwAsPnGB1ecrQ5eX2Bf%2B3k0FRE7Sez99mROQxtKGsD3gwT%2FiBxpM7kRffx9XNyidVv5KRPweqBp4XG8M27AxMy%2F3har%2B3S%2B4qiDCM5DvQDoJ0w814dH0lR35srwHJkBsm5WXulh%2FZ1VIr2Cky6Gz8nowqZoDU6%2Bl6KEKsUCEKkq4%2BZMF9s4cy609CoEOSclKHZQrscuqHlecJY%2B7Z64CKBKr54vqSRDYVUc7TpwePAwPFPoCNmqplwAraqFAqiLzbTLsE6Y0GwUoaES7RovNzXbLg39O3qdpUEO%2FUKs2tVDx1bFdL74HoHMJGap8IGOqUB5D7bN8StZNH67McJOeFnj4NcrGJMqkui4bOimSGwmwpFr6JqM3EGFja%2BH0JrlaoWrghrkBYPS6Pw%2B1trQ3QWo%2F%2B0NULxmn%2F%2B1YUkmcx0vzeYpwUJBvIPsQbfpV72Xv%2FouB5gqGiJzbmh7%2Fv%2FvtVgqYay7KeojeHkZAHr6Plj%2F8e%2Fp13RhvduomypFc5gnq0VOxwlVZ%2BEtHZ%2FzZOI9nsSGz7Hc5Rg&X-Amz-Signature=4a8f939710173b38794da406363884fdcc1072253672b581ac713f77fe72730e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X45DCKLS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHwlUrhO0QswtTCwp%2B1hYxFNjU7Nkdh4ZpF2yexutPbDAiEAwuD3iUTpTUOL8IWNrVqrpE9LlI50uNuSj8OK3PKn7DsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0okx1Ieg9O9Uih6SrcA2ldifnTvCSNfzqIZV62E5DFiGaNF4fapG%2BS6b5VS2Wx23tVgDFzV26frVwrguJ9SfFfVdHDodfdpOZ2uvaKSrDgTlD2R%2B81HqfM0woISpig7ZWrhRV62vFEVtszedG37X9cGsnn%2BhUgjWH%2BlAXCIYkWNMf7iczU4Ew6MMICPfpTp%2FnphlGm14imP6xUZxqXHGteCBsfMyOeYAbfL1nSUxD8qKxHCgLZDrWYQ5Ndqn0wyp505iDxyaniCSYBgkWd7XHelQcgtTFOGtEVlUz09eCuTmqZqS%2FtjRF0Wb7dECZR%2Ff%2FEy0RQq%2F%2BAQKGoGHlbe1w%2Ff%2BLgRdFSbyBZtaWv61bcyqELQ%2BZuzKhwDbePSRYxmqvDREUd4v%2Fpq2Ylxa6wZsJciXO%2F01QhTH8UV3e3xSXzyZOemc0zXwTSx81b6XoY6UI9AvSfyAp5X4KrPCB6qyXjEtVt9kfHdIfaAPiJU31p%2F6Ti494FFM40MoJvyGBNWxDrN4%2BG20%2Bi4h%2BO7Y2jGsYGILJtZ2C%2Fss9gYrfyFsOLdml43f4RC41Uvww81yElsmqPviSkKw%2B%2BtfcLkqTssd6DM78D7GTZgL%2FZBq8nVVX8pYqdIOn%2F7ZUTZWVCXiL2%2BkXolFVUF1mcyfvFMJyap8IGOqUByrjiSYPEigPr8vt8ueAU1INh5O4zmTH5SSIZfeK4JnSG8QWdLIRHLO86B%2BS1nKklsIxGto0fw3FMAui3r%2BkxsOoSziAujUR0yfljroxQBWQ%2BmDj6qNG92bAAmYWmN%2FtbmQ1dQhhJnI0c%2BirO2Wd249AW%2FPVZ2WehXfSObhpSuWvU5fXdp8Mj4hV521KTIVRFTMYtSUASe70dH4Hw%2FkXYBWus1heM&X-Amz-Signature=cd93146d0d03543034aac14155874529176cabae93da2676b1281bb66167b64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

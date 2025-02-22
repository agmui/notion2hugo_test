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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB5J6XY6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCryLwjQXKD1T0T6ov9mC3RnHFl0c%2BLMjB3XnF9Gd0u9AIgOgEDWLL2RXatICLi5V4jAazwpCATQyo1mBxOMp6%2BwjMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQIfCDBg5biUwrvWSrcA%2FsLll51nf1Z3ZXhhR2C%2Bxaexk3mKWpLZSm%2BJ2oukl6HtBrFCPEokTN3PmVzgkeiPZMMwEzdm1zsGTEaNVBGMOSu8uRSWlIyTCMoVXEocZgpov8jy%2F3ceYskrQz1pu8QW7oFcaii3LEh1o0n%2FhcQ5jEuO88ixPInlSK6S9Kdb5XpKi%2FaxOOmNpxWUEmiC6d7bPlOVF5iGgVNEXf%2BgIa%2BpS4tv8TBBwHgIJSyXE%2FkvkoqfqrKnYJt3qZeownDZffJHXgU5OIS9bv0%2FDCfxU8RaGZy27hsoYiA8kl8SNlCw7vht6VfLnnF%2BGQblk6cmmZ73e8aTAWXiYqL%2BrEoQ1RWbL%2FeJg328gtN3s1KubUG2z4WQDm0qVyHb%2FZ%2FVoeVYeuuDYCt%2FQnoUKIvmcAd6nM4SwowkV%2B1akhwKGF3FKCIzaZQszmGpbZC6dpJJ40%2BQUi%2BgHmvXLOr2dQeiSDa%2FPNsv56clh%2FK9LcSEsaG8Uf2mSNJrIr9%2B%2BXJSXgu1jsD5G8%2BZfk%2B3L7EndrTyln9wsMY5Qb%2Bauf7I53gm%2BTfleeTXrkVcPa%2FnbEQpn9aimqUs54%2BlRaXubGNv9c%2FuUfWFM70LCcDqEmsKfUYWwsd0e%2BpOR3hlByZ6MhwcZ5cRdjEMKSG6L0GOqUBwHm62dHhWNGsa9KTuVJ8UG798K9UgxlXDYpbcxTpBcyfls606YsXAN9RxsfI%2BFlk6Itwyln2v9P81QTZbppHqfYSjXvPnBnsqHLUV5XcdBNNPhMXGyOWay9s7iAmLw%2FEHVfXDGRCYWxqhv7gBGNXfFfcDsq0q%2F7bxZdMDypiPhcatBGAofojNyj519THK8HKMKh4rVKlf4oTifzW0eOng4SXr7%2F0&X-Amz-Signature=0117ad04ce476b2082e25095a7ccf3357c5d4dd71a8d2d8e6ee97a52708724d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7I4Y73%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCadaj9E6sHSPgfepZMkiPLw2b0ScFdTmgYlzQI655gOgIgA3abq4a28aVYsJoR8Aag1%2Bfswzk6PEhX9Lng8Rr0DkMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwAZhD8%2Flh%2B2eJ9oyrcA6c5GyX2RhL3XbR36SfDOPGYgs5upTXKhK1KQdC%2FGuEzudml2cEoAQ81S%2BlW0DwLG0BSeQdtb3rYw7JNTxP2XJLa8BOUWV%2BqDRCv9%2Fcu%2FtH4vUOpBoVnfQRpFKLL9rNMpd8g0EECYHCT0RTKCC4%2FlE%2Bu1cuEQ0o6BuViarahfsIWtWo%2F%2FYmrEf9%2BfI%2BuUs%2FgDwOd0zq1JG3PPkiETp6Qr7SVpFaC9B4rGFNYGlVFfGfflrdZ5sooV7OxmRUVeamZPFAkN3veRlqlEQNJju2GT37AkIRCKVe6TrDamGZhkL%2FRTbtWKF1536E%2BTlC%2FoBzFxLrKSHRPoXhKnOTR7DJddrf3ybG2vRWZJfRBcMhvBqTanxyR3rdcmfI0tSn1IyfBVUMcSEwERSCOZnpaqQnyoPKcznfRLSwhKIXEj2Ng2GRhq%2BsV20d%2B2tXPGAkfj7zlcRkOA8UdCPngj1kqPOq42a12RQkThCGFL%2FRWTYzf5RPoEUq4vbrpnvXOXcOVSyt0VsYmnWrGxBdqa7zM8Srg%2B%2BgIzBIRQjvkTZMrdxEUuYtDoodGSKHSL4BkSYMnwbMqNT0Z2ukzCKBhesaYL4VGcrnnU2mvQqzRPlLrzo44injvtUhXvDgJnlHdMxU1MO2F6L0GOqUB4BB5FyMAcA8OXuaJcelz%2FzmiLqtF3pGmASLGWv8WFlf4FhnW4MlfqLzwnnI2uz%2Bm5alumddYGQBm12e45NxT%2B6fHCbAjYL11hXVSToN8Nxk06AtK2qAs8sDuiRo2bmrwvvxK%2Bs1b3Nu0PpM3hgukEe7CNMyvG8chM32vUAXPGEdpMvT2pRcKCWUIdfR5UgoHro1qRAXuipapklHvuEnHhC1Lkysx&X-Amz-Signature=6011953e3420dc6a33bdf2c92f2afe9f643e7d38c83bab467c27530f9549ce15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

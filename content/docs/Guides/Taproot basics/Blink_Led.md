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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PEXYIFJ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIE1TIgdgSDlR2pCtop592HBjtWv498QzWstbdmKcrv4qAiEAr3%2FNd2bdxO4mIzYiB9PauPeuCneidZ2VS3nrKUvvCeAqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BMfV40%2FaapBUo2hSrcA%2BK09%2BSdDfGAkMgUXt6gMyayWKUiXrLQ9cSd488oHi0010nuLSFnONj5JNDYIPiSc%2Bl6F6VGDteUTpyngR%2Bb9le5%2FL1qhJqu%2Bo7Te9mbK9WqMVswT%2BBlAJbfYF7mcIRzLgJ4k09knhpiEOybxj%2F1%2BeJUW0h5%2BCDQ%2F9PoaiTVWNFUDcDFuhBifFb1RZ0xC0pjo1d17p658iki5szSuJsY9dfJTqvR8jztXTD%2FpFPe2F%2Bozt749yAxjM7lnMhsFnPaQgZ00k74fwksHq7KLWi%2FvpNMeDkj%2B7RrkshWYYzjBtuajZYNpL07TByu%2BIhXiwZ0L8gav5OY9T6tzIFuCvFdFHL5wCR1BRjihd7EabUTxsoH0PcAmoAYxGJV1tYaY%2FqU57Lk9ngSQhfLjHkz%2FI6QNy3x15UAu3WR%2FlM%2FLDHB0bf%2FoW7E8XuhXCxqq%2FROBADXIZDZjJQXpK%2FwtJRlMGNfHdWXvh1CGUQapfS8fzY7%2FdS4h4ym0w%2FH4D9wjVWrIoEISETkCCsR8BVJsKk0B9CfDUgSJQSmyIlpHWNvvpnanLSvUiS4HQCzdALq9%2FMKGDlsRlpiDn8lIYJHp%2FFDmKY2cgYslTk171QOvv0dvppNR6K15d40Y2csF%2BiZ5CKmMMyap8IGOqUBz3%2FZmeQ395hp61DUAjVJW%2BWN7JvdaE%2BMZOTcoTMsZIZZ23Zqk%2Bnq6ksOwb9vXyyEpvqNYb6%2BAHog1uk8qP%2BB%2Fn1P%2FRlQ503v22VeDxsDICYMc529SLhcTrAoc4QZPOhYzoGYR4tEmvvEaVUniPEJbsMEyfiIVYzm9YKLYTzFHZmnmYoGM0uYOb4XWwKTJ2AOxbsUvYK8nlAhkUnMKPsS%2FlcZuKD%2F&X-Amz-Signature=58162d3a3ca2feb3595c136f4dfe356d14f8470e4a2396dff8298b7bb8a68c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRO2KXET%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCtG3c%2BO2ewG2M6I2mr4c6rB4g%2B%2F92%2Bb2vERSC1DNdhZQIhAO6ZYRt8yl%2F47gzYsoR8f%2FuVacvree05MAUwZPXsDyG%2FKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSwv5ds%2BEWLi%2FAqGEq3APFWrl3VB7B3gy%2Bj6LsyCKToiMqG5pj48AVJ%2BCgr%2BZRg08enXmHBPZuJThNC76HtSw6wfA%2BMOnFBZgRjvBPNfRn%2BP5akVhD2%2F%2FOh96RjlvaKGxwsl5d0I72mYgrB9PaN1ZnNavOtdGgg%2FZ4cmlNurSDlduAzB%2B0kSlnbqkCArMRh5E2O%2B8hdKB%2BV09VmD6aGd9urWexTw6nylFCORCjhN2gvFinE1hzPT3YXbKnNUHlN8EMWJioHKHlfHCre70Qlo2sqgCzKBYOwozF7maEzYXX%2FI7YlJJrz%2FqlUKNYVnhNpunhmMim2Cmm7c4E8dAEUFBpyIeEkGrDPF0MX6WGBpe1A8aad9dTUUqR1ER%2F%2Fi4WOAI%2BHAFhqCLAZELJ7%2BYeeXO9T8hyMe6Zxqr9YJmYwqpNB4Bwva7hkdJI%2BzURoekCrCWBmugPNcAA8a6AC0ZE91So%2B67H3jr33ZAdUM%2BMYKyrSogbXeSHYGEAdE9yuEEwQuqh%2FSZ7hR018fVStkLoD%2FoFWl1wOHz%2FL2u%2By0UPIxq6w%2F4QewDTC%2FC3MxGd2K0lMtjFlNbtqctOTovEIx5kn0yZYHFwnBEhgKl3u0fUlsgSUqBDIpPWfn0%2FzqZlDPG9aaawcuBSpn532S6SKTCymqfCBjqkAcL%2BR07JwospVHqyNpkiWo0SohqVvu5TFGZ4W1nR7%2FwE%2B%2FsA9FJs5SM2pIYzLtB8Nnbte4D%2BMwaLwo0GRULZoUoPqqA1rplfckjtmb138pzHKrID1pmXNagVnCHnH%2FD5HsYf2VQhDK7IZsaCUOioqWXBUFSwb9%2BenpFCMpsGYp%2BWPJA%2BP61E91cNqqR3ElcwkBY%2B9rmofeYUCIKwnl%2FUm2CnQC2M&X-Amz-Signature=3a43eb07ad50dd12076228fd937b40c6127c17ec52237b5b00774f504281cb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

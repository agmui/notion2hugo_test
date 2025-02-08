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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXPUVSR5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICznR41eZWcrrXj9hXoTqp5KSZfRHVoNRzPIqB8DquxBAiBCLvDt8Sr%2By%2B3cfw1onVODIIGIix7GJzQkk6g5hOo3NiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdWSuyJpUaA4gqCgtKtwDVIZLZWuJYKXlY41BRl8cI4aVFAOL%2FAszBolfsxp0FYuXZOVfmdn5JANoUbPkW8l8v75tIl5p7oGiiyZpuc9fFwfT4yeYB8hhKppdHC3iHD3NrJOSteNh%2FDLj4lYcyUqtBCKNs43LaBVc2DMUgGDRzy7v058YR7jgcdtb%2FbeNAQzSIQrUzmSwNP5sn%2BaHY2wAQ78grEE1jTNSUX7TVBTSJDoPmWoP6AVJntAR21kIx6Tgb37m8FjcnN4Al%2BPF%2BcpIiGYz2nmvoPEXZZQ8ctTi%2B9wqZz7fsn0qPW9dRMzXCsfopUr21cy2vZvmSoirdh6O3RJCMfTqTvLB0js4fO291HLWxKeimOO5t4kle7YhgYKrSEabLBHEBr0lP2PVHadLMlYemY7WLqGuDVMaqaFFdmRAxtsv6g2fYTWxfqjGUFhJCaet%2BAHzeavN5zr1vnnS5cdosUB64v5a%2Fa7itSwUFWmplTBqkYBulpyfj2evXmIBuYEAvrpT868gVbXl8hQpFg4cWPyzwCY8rhhO8bYwhVR0Mgt2bPqiyeNadTXn6u%2FfBGS7u2uPOLGR%2FbpNNQxzdLNlm89B9bYzt2dPy1VHuM9pmwiRdkLNLYDE%2FfGEjDlzcHAuMiM5dfMaR%2FQwy4advQY6pgGMSmmjl2TuElYMQ6CVygte8OnS%2B7gH5UZGCy0x15i9%2F8zaEToVoKTmNzjf9wuzBLYMFX5LaMusu6vPHkXcGaLPtSy%2FVOR23zxeFP18s9vwmhPTfxSJFefO5Om5BXCNMasMgvlFWs6fwsyJj0hPPljCD%2B8iHuEChePncrDNbbwd2h%2BtfS5ehV6Ay%2Fz6BChohjyrJgGKqX2OjwiOKfcagqDvKQbt%2FoWu&X-Amz-Signature=26e8ea906f513d619ed7bdd11290dbaa3179a2747fe02874c2a2fb127c643e46&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVO62U6Q%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICg5Sb4NMrCdgeHKfnG2wqFnXk3PoI7NG%2BPhjjEy3XklAiEAoxvrBa%2BZ9PLitdAMrwqzFElRDbBwpvk6qbPFF%2BCtpPAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEohVX3uZTnAo%2BLZjCrcA2v4%2FSUXnWwqtw5ZRH2uyxXjm67Le%2FufClXL1oxv9e5AvIiUa7k1wbuMJNMgTe7%2FpkxxnxryiiYieferGwVq6IHApZDRUwVqw%2FrkNlw5tKdmozEaTJH0z2RJ50axAFCmAOA4hHAz6SAbyFtEp7ffYR90TErzBCy4UMdcS7DOhAEKSRptRBw6mtBp1XVvGwH7HiTq%2FhRi6%2BmbMSTWbeL%2FbrtnAaEE9qiZG8TwT1EiEziDdlpyjf%2FNsvmquBxeyEnb%2FSaPDMg%2B9zJU9VAEO5QXY4tMosPPcoSOX3axx0kPFrM3leIErxFUswnhsq%2FBKVPJp4hyJ1pVhBXrt%2BWeUbN9%2F%2F97b2LjCdtf7G%2BIde9VTsxMYJ1aJOLIUlzrEXvM2xzxVeKjNNOkaQKX9T4f1cdsq3zPNkcufeWpHG7zTSxlUHIetgFFfPkh19ZLrPPFvTsFZijUmfa1JkmW8ROKWaQfsr17nl%2BXUwnLEjb2EvNJTnWGR6lxHXY3DvO30su3Tf5TejAoojlMPeZKGXzk8HYwZsdQJA6b6H802SztsSsx%2FGfuHpW2MpQdyQ2dfDwsyjlfFOfEBTxuUStttPrx2unySoggMKCJw1OrpsYQH8%2Bi%2Bn8qEHB6gwBtbdpRhESnMNWHnb0GOqUBmXNWlliMnGdTmErChof5QO%2FdyqAE49mYbNtMZVw%2F%2FDaKpfUD9Txe8ZqTFgvWONZCXDW5tmN48rzgWiLGUo2wKm6Gxv8gsYsU3o%2BT4jZaR6xC7CviRgawns39yXfNK7Djt34IF0RElV1P1%2Fze18RLAIDM79sh%2F7s3Yh0Yo5osE%2FMgpUsvYuUYqh8blzqd54552NntCe21QYK8IFKXLYD%2FNIwIibsN&X-Amz-Signature=a04af9e3b5b7496b007900ec74f6ae3b516d5b0e573c88322ce2fdd5bdd74e72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

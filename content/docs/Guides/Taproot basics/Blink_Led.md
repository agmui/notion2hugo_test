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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FQCGCZB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGD1L1RzpnrPQ2WeuF3UVdfJibIahH7smmV848stKr2CAiB%2BpzRNOIrrvvYoYH83DJrT2p13gf1TvIwtZ970%2BkjsUyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFZDRbia21KC6OObNKtwDK5AfOGFJGQZtenFObTHk%2FlCG4dbEJ8e%2Fsk5as%2BAg77pvJTY86rPZaMQTogNFndm1Q3d%2BrkzTnvmbs8F%2B%2FEszhkPxWuOtw5KBzuHGj%2FT7izrk9qXbliA7DGdcMJ4fvLb7ClDlw5OQZv1okk3xqv9pQkRqd7kyuTC%2BRB6bjwu%2B8xgUhRsoxyouSxD1gMvnnoSLX%2F%2BhrMzANbdzkI7oMMgLFuOXIqSKuZc5ryp2vbOwybwJj0Gzv4ZCJ%2ByTAznajSVfHAm0ql3Z1HvZjqO5qa0sUvexqp8udKCps6nOymp19YmJur9N0gz%2FEamO6asT4y%2BOW7f3hlJuTTptgYJARe5r8s0P9dRXqUToEuNK6ju3JeKPGo%2B1AyfwRjwhKMeN%2F8u5718DAPW3wAUCCmoXdoZqRhbzH2Eusw0Bsk%2FEzJqUb%2BKDPuvBuOZjvLd4TLhQ4oYTE1vf%2BM2l%2B%2BV3c%2F6U6J3%2B5KssIWYKPBZSjf4Ls7JSvg8NIPEdx0fr1dmY1JhS%2F7YyTLs%2Fx9lnPfTVVggGRK4%2BgNktRLNvOEwofQtH7iJXaLzaDpShr1sB6apvvNoXz9Odtcnc%2BJVsjVmgFZP9p0TEQ81zbCXKuv%2FC2P3oXOO2FNDPZU9oTWAVrjQAknYw4PvWvQY6pgHSd4XEWYvncu1TLt0fWGSSuDTv%2FcFFiyrb5U7IHuSVh8%2B0EEkkIpgIk5FBWHR%2FehRlfpj7EoJUO96%2BSWxWmucFDdnlw2KUT8T30h5Z7d89X%2B8a4B6qrZCGnEGt5bprikL17JQcbbVonxmtJCTHvfDOMGcnHaLRTXtpIz6bKcFOIsk54kqcdylqd7c8X9SaNbH7N2Sxjd4v0jeHsiqygfilrvUNZHfU&X-Amz-Signature=8a7fb3d3ceba215288a7dcf8a9cc4404cc0d110bce254ccb6b472d7eed1e1551&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGDUVO7B%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHkJOGhDgB0CPMOdVBj7qoVGRK4aWCj6A7ZwmXwWyC3NAiEAvSAqoGrXwtiTLDge0FiDSHcUYv45HlsVUqGpUYbcZzwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCru5gFZFQbKmYWOESrcA6NSFfUMAH8f2fUbMWh3I5Nhwkv537I%2FAiPiSF64l5OJw96BiMaGNpkCIaPQpm9hARfH9QNORIdqMB1%2BGdCNgkU0QBjcMltznb3CrQzDbokO2KTb0i95P42buLL8813X3R9HMjcVEEVj%2B3nU%2BobHcAWM5zeosQYixOyE6rdJmXohGKZ2UkgurnqzIt%2FBh8cbnegQ7ypCMj6a9vlA7NLsPPUAsdbKMmbEoptdTUinkoRqYmCN5%2BsmubDS1AKXUGb2VzognjdsHl3eh%2B33LJy1dRiQOdiCna9uqWhJ%2FsAiW6JL7bqWxumYjbg0Ij3KRfkwiAe8nia8fKHhhMbk7b2uHC7ZKCkdsJYmq%2BkByOBngtTFWhrjvsqjfOPInofWv6XsBPr%2Bvxv6Fyivm5afU2mNLysv9%2FGAxnQC3kpPAYHorJJ0YSRNirn1o5nSBqNcm51wtoufsFAaqyN7ZbTIIgPjVONDJ2rQoPs%2FiqRS%2BgY4reXsfCyurxvI6M0TK3N%2F04Gjmr48nYLsvZjIbAm6rvHsPRLddh5hZyveb%2FZih%2FIaRYKT5nOrGca6ZWK6xeKxBFncz6sJKlZ9sk3OBJXgbYvFEcbTXRvvvSLCvnv9G%2FvG6JOwhGU842n1lUbIEw11MKuO170GOqUBVXzjkL%2BKcvDmtQw%2Fi1Pc6xZekfTypcezIkIL3uumQ%2Fx7tXG9b4ZT1D%2BTeoa%2F15ZY5oH8yPSSOIRr0GdJXAh0WqXwK7N%2F4UaqSVBiVS3uV%2B0IMBpNVEnPd%2FWVuywAfAPorYqsc319CZXDrQym6y%2BX%2B7Xe5xkXfiOGgTcwrkGBRx1T5qxuTbHfAsHN22xRaLo4YX%2B6sHceN3LxGxKe2hFwfBiVpTCe&X-Amz-Signature=c73e013f2e4933dc03b06431c376c9cde3af8a6fd7686b13971d9ff194d32c46&X-Amz-SignedHeaders=host&x-id=GetObject)

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

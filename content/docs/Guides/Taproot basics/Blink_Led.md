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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HA372K%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4q1hhdCKRNDu0rxcqMrxgyOSwMQccY8DxmxNeuknVRQIgG7TVGdlV4E%2FJWLbkOL4EusfuZZe1ZHzDBmvFPCBWXyEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFiOvZIP%2BYuLbWi13ircAwWn3PoDegQD0L2PG8NUTM7aK6zGBq1%2FHuHjrTMfuwTIOefDRHwtNKhf%2FVijwVfg2VhXTFljLGBAFUIc0%2FJ0aFHPxcKcIIrVd5wOWPsiAR7iOzPdb%2FSbrIzYyafBFyRB5G6PONuonGkPVnTmOn0ixNhDKfyDYDM%2BspaKM6SmI8JveCDKIniYKZZcki6pjyLX320IRL7BnQyIjY%2F5MzvhC28A%2FeFyk70utdPZ3uHDdvl8hd46gdWF%2F%2F9emSaVo3kJ4QVWuvUXuy6WNklnFDjIy8rnNFHyJkJfnIKYxEvohkK%2BJsrQDt2AFfMHHMT2tShCnIcv7u56qXB8ktno4syKkmH5285FmMP7omCEpViH6FBN9SM6yr78z5sNqPEmNOpsadGj77JjlX2RFcjrifPamqXx6NWfhhhOdiH1FhTWYizysbYUdmDSeL6OlteDxunIYB3834xp4o4i%2Bmyzt6VNUU0LMmQF6iIpTXNx%2BVcL9rpuGaKlYBxBRCcihfa8EfAYIv0M82W06tb19qSvZEUSSF%2F2Vpsb%2BIYrWvE4W6%2FzlQjRDnb7ESjr6E6sbb%2B8J4rYWDk%2B%2Fk1n84bdRjvOKSilTugAmcDjXg6yPNZGMcoYgpvODuPyViL0GgR5tmONMJLkw78GOqUBC6Y2hzby%2BwwcwM6ace9Vu%2FluLpIGhHND520lHGqRAObSB99wYKmlgnWRVpcMXNNovIewUZwvGh1UaOP4G1658bZLi6Wz4QSCtj2fQFXm2a2iqlbXPC4%2FPg%2BXSV80ksm2H3oprp%2F3NoECK2UwHhs%2BAwOZ3lnzAz6vnU6MKAqIJcGwlF7Kq5m20kNhyKRPjXwga%2BRJidauozl0USGTz0kMfdxMmgj4&X-Amz-Signature=2af7944148dcd9b1e046f88494e17487f1f09b6bce24d7004ee54031a8bbfae7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J7RDEW5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8oYQ5Fg2R3VC6InPrf4alHSPiiF3xKwIpw%2BfQu0VtQAIgapGqYulShOJ2F%2Bi5RgZwFnUyesDLyLe4M2rPV%2Fvmx3Eq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBv1%2FTPfwUWuwxUk0CrcA%2FMjF4cTS82C9LDmDjAkS0itzzpu7t4EA3sui%2B2dHTI3n8HSZ2JYJfxeCEsRBlogQrR7cH9NxPz%2FQAmHU3sI%2FZs7YWYmbrqX0VmWnouhWNhCOlHiX2nekW2%2FSK57zn92gKA10uecemrVJUlYTcDXDM5LIoKoQfZBcizlszPqn%2BF2jZzYotOomP2sqP2OJxcH1B96Y1wsyLqJnleX37SvpmaBq6KcZ2I6eydkAp8Xm6RPN2SgExJtxCcCdUtsKZPX5thhtUrldSMMhlTtlST9RSA6Gp8WAYspMPhXKeQr2FcHzdsN7TDyMX6dO95l3k2iFYmJZCbEN1Gx1PfOz4S7s1mwjqJ9LCQn8HsjOLBO3nqNDBeylxY%2BURUDmXtv5NTRAxzCyJjxxpjyG2CDSHwXxiN4ZCrLnsNU%2F06nUBcjXlKnCFFAlYcOD%2FH0a4pmUtfTyuEiiYSUN21BJ%2BAVhg02iW3qJWhyc%2FRLbGjn19jJDDu9yvOAtHDNq37qWOF3mBnoU0Bv87A2l0ffNq7sOExKXJY9A5V5ose0IN2pX6KOz2Zzn66z%2BZ3C1qNmNU%2BizXWVckgTehJhLzVEfzNp%2FozsjK3w6xHrzMoNup2DZ4XzK2F546EesgemC1RkA5bOMIDkw78GOqUBZ1O%2BZJ98Gd0NxCoer10RlTapBZPe4kYZeocY9hClR4PSLdiu1bUR0op0JZ4fDMb0OUGoq5gZaTGCjf5iqjgc6g8kVIk5eT517cb9123KcOWh0S%2BvYYaR1ejp2%2BRdlap5uOmX4c1TdhE9K8RRpoBUynqMgxoloxYckx5XfRb03%2FZwtRKxXvx08Wtu89Sa6NFY0TQjaUuNneipKaVsIGiaiL%2BfqrTi&X-Amz-Signature=7e6dc8b5a26b5d8f29dfbfc900d9195a5abd7251855184a047a3682f0a4f4507&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTOERTO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkhLjwvT3cLT179Hc6GxJ4sAnU3eU33Q7Q%2FE7EhlySQAiEA38oa7ZC%2FkA4KSASTUdOi0aGumFlUAkptq6pEt8eCef0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpl5Dz%2BoTRHL798UCrcA1Oo0SFiEN0TupJCGLt82aLt2pMyo4oM16vtVMxrTXUKIqg0Uh0m%2FD8OvnyR1ECT7BLodOK%2FgqwwfvjxzB%2BGLD6VEIfk7pofDOWanBy%2BfUBfee2SRiIUybVeKdMGOLQFSJb4MhY0vhI5qhF532qAKJaTw%2Bptr4VwgtuIbxhJ54jEJCTXdNUZerlPkyWksDZDaKmqmjF%2FiLcAKLdR8G5KJuIeHA9MsWvlnRvDf%2FtExRSamumeD9oWL2z9LpzuY3%2B2I5aUeBhMD0TNYj%2FHPEYTG3D4QJkkMd3GmEiQTnRq1eSa1VaVuPyW4flleXQ%2FN5L2HZDRs%2BvTBUtTRspRIxtTFtJyAPmyQqL6dMSd0tPow9%2FqxdSmSFKo%2FoP65XiOlG3bxQRkijrsZiL7y155KXCMAkywcqFK%2Fv%2BNKCpBLolTCfMhUJZ0sthKT4zEuMuXFsXPGsYWjl08nWjgGYw0i1NqA6MHnxn204Sw0wruER81WWs4nrAg9HVjUwxL%2BTS6mWwXvBtNhnIsTaG2nkKLGbe%2Fm%2BXD8SqgPezY%2BsrvOT%2Bu98bXMHXPJfVOt6lDb8Uk4cKUGoe7TQKAa%2BWPEuNoGcjGNRlL8fZyXXpzwwnUHgmlc%2FABrWOEZMgcsLf87hX1MILkob0GOqUBlgLRcBlHk6kXRqYRKXtk%2F0Gipl%2BrJo0vlhlE0Ccv8snkR5qhW45fTtCGvT4fH9IyQKtmgXS96i97EY23pKxyrbm7NPD03ugfoGirFalrbNiF8xKg3nBGnRAOB26dagW9abXI9o9nGAATlxKeVphX3%2BwvrkAX464GmnLy3HiK7J%2F6e%2F3thi7c8LcJ%2Fx2G9RPyBY6Bu0CiONKs7jF0GO1EPecXn6YP&X-Amz-Signature=b8e128bfd24a7665359723c4ac221fca6d9a50d3c8e8cfa1f6d6bfe35c95c82d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZZBKYGR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmPyrfGMpF7YfphvFMgk%2Bkai1lIWSYiZ9h5IepgiEDXAiBseSYSgVwBps0gh%2BtfJOwxXlXGsk50puaXWoSH3dWEXSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn2XaKRAyc7EPPr2EKtwDCw3ou%2FWyjQ4rteEEWKvtYdyaWbk48Y8YhSZDHiFEDYJ2OhmYz4OarBDY18MEscfNgDCxnbrTreFAIgmQnu3nF40bY%2FGLivpyWNUqqkwPtq8FVsPZ4M8v9aEbDsY%2F4LZVxKa0UgUxpoEqhD0eCMQGSKj6GVtxdrLQpggGcm%2BTxuxV%2BptVhIVrgxyioyDtzw7SLyN8D9cXUetAMS%2BFA%2BCXmrOIJiVGqcEuLGjZ029sHyL07MSH9%2B5xBivAh0A6egzIw4SMahTa1ArDx2FSKodG146eXGlXJOzQWz6LH4%2FVKLhOkWdrjBSQy2T50YysX0GwyhYBgVRUDNzdzcFKtioUWaWRXJ%2FjN9xOwli7THqChselXqsjTxYZoZryfbeRcl5tKcLeAiHTs8WTYkunZAbxU7upNm9i90vGrI0GkKjYli3yUXPBacUGX3cD1N4sFkux04NIlFzqncpJf3ZQmIJ%2BA1E0j2JAgpwRdruI4JOP64xHH%2BMzY%2F%2FLioiTRP8gJ5lsa0of0PoQZPTxNEkWOhyxwB3E%2BiLZAe4idHbWAh2PMFfL0xnFn1dMFRoyz%2BpbXNUEjkZqzNwxcb3LL9cXrmekqKDRxxOaImrMioCkMG65CDtJkL8TxEmgfTrLw%2FowuuShvQY6pgFj%2F25SmppIh654ewLitx6hZZZo5riECyOJPiuykQ0R%2BJ3Ketn9%2B0DjwbbfrJLv5p8ZPe0VpFtcgrs0t8ZVJ9278CMds660rNkIz8HCUAoHuLdcIryoDKD4qy%2F6%2Fhj%2Be6UvAx4ewE7OAGy9a0zut110lMHjfve02C6LIGUgCELUVC7xYeRCIyckIv9WGt1On7UWFzR8HEOCnPTYNothS%2FBRSt5GXrl5&X-Amz-Signature=2dc18c4345f711e66b5385d6106068c4e899cb5de235381d30fd00ab63e935d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

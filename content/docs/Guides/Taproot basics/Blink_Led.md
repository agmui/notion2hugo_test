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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSCPAAO4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGYefHEs8qaXau949FxGbsDFXxRcC0Mtxm7%2BTJzb3vAAiEAjS7WruK7qAQo6LqoNk1bU3%2FGH7d%2FvGuf82djI8S%2Fu7gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXqD5qfe7JIz4Qh3SrcA6VBs5zxoSxixkvqjRghB5bMXyM%2BuFxR8db3SDkeanQaSrN6MYetUCTbUIXdd5ptE%2BYFksgYuPp2U%2FkvWd3VFDr3bi9MsmqMQaf4Rowevb6Rt75xAjW0Bi1W%2BocIHEMn3ZTXfg0yxJ%2BMKgwRFoUSULMMOxXwVhLmqxl3ngcR1HEsjTZTO4heegXr%2B5%2Bxi6OcdQUtUg5v8O9pNaeLywDjRdbGtn26L0S3qSewt%2BzXHIL%2BA6B9Dkhf%2FG0wVojjbvvQ95MczUvekdwp6HLV5M8PFyR%2BSeC86zlTYd34fl1LJEi9Q%2FhGJQ06KiAUHpsrfex5eeEIgXKhhkJ6qeBNAM3qfhVXq12ksrVT4T0nwKHSp7kDd1W5bYGKZe8qu61QnSuXuwL889WVi9vZ5WPRH0dC25HAXFBfV4iNTdbhKiyNMvCTMgZKGiFE3l0UE%2BEdWexZkpgOb4%2BCD42dG%2F6iOFa30p6fcAdQLSOCzACsNdES3e7ya1FNahfr5cBXQ24OhLgofKvSWAjhIKMrwZpM1XWE1fPlNS3TSiZqKKGBjax7VUX4jz2BCt4aleH0pfXZR8izkWbraDH%2B7hchA%2BUm3v7FfzSuth5RG5GQ9p67dElyzjDoptYDogb%2BXwitRld6MLSWpMIGOqUBE2HLAVVxx%2BlcEnT6s1p7%2FG1YfK0V567VixUbK3p9CrpMrfM9PKsKRYOaRgQm64V2Jcv43xGSHyX%2B2FT6IkawXiix%2BO9OpontJVd8Rxi9ZtOLDmsgOI2cgzbTsZtwJUuz00WQnNt%2Bjvwxg4m0nWNKH1yD%2F2rgBBfw54%2Bc7dBH1zFd4aIqnhKEYhFRJX8rygZ7zUfKjEgDErf6JqUtijNB1rbB%2BTvQ&X-Amz-Signature=9202149598e3239f6e6f4e6cc91ab42bff62061748fe7f54647c2d03f5a05a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6W6LDTW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0%2B95ta5Sqt5dbGBkJ%2BWQwyMtbZvtaZ1VxV4FIbyXPEQIgU4KczFmXJo0QYlGiAcMJLN%2BCBUySjLSC5p%2FbTJ8yysEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPNwocYMXVLKxQ1zircAz2OygKsZdTLz6rtO4gjBJ%2B8zLT0a8VuCyC56uCYqUDVKSCHCpR5H8qvOh9RNH7QuZQ3xWJL8pRkInbmZ4WZfrwoFsphjCJX5DW2lmkn%2Bw45B2Tr9cfwaO1LGuOPm4TRj0FzyliLFbfOSVsyUkPlyg8vy1OCh4STEHG60%2FdkupDdAvionnLKLzn5b6tfhgzIFhu%2FtNph905C5AF3jBfRVIyvhuQ%2FSy56jB2JfW7ZvUhuTxqtUZitLvlvm%2F%2BnDtpCK1UpOc3G%2FQLLWorcLzkhIuwyVuNn%2Fs2NWYM13gG%2FglcBe6ef3JQfJZnAXiSnaVMRjz4DK%2F5TkqhVpRL5mnZptmTsfB6m%2FBIJ%2BKDI7q34flCKSPhjc2C74wMLnyI1xqR7ouA02nkZiy0iK7%2Fh9U8tsbiIsjH%2BxQ0XQeKG8%2B%2FHol7Kf7zJ0hZtfMMvFMu88DILLXBpTdEJTWwFjZ%2FOAep5hD22VuoDqQwvpYlsEbsUe4wPx5f%2BiUNOiSdYovppX19Pnz2EHBbmwCa4mhRJau0xDFyregoxSuwJESVsN%2Bj7sau%2FruDh56E28E2dSns2WU2IeXzPMffpJkoaGH06W3KAK5ddywRO7oZaT0fx%2FY7qli6Mf%2Fxi7Lwo46oensnSMICXpMIGOqUBYYwbKa54cAAdY7nPuRLGsy6u0bd%2FhJjW7Vaz5hUUH9OKTD8d%2B7h4%2FtyHVR6D1znOcA5kH0dAk%2FBWuyNmx5lPm9M16pIXC4XejdcdWcO28j%2BNx8oJSzVqweZfAQ82Hlk%2FUuJH5YZ1yQq57arbXdj9CMci2YM4p4mrKei0Hq9x17lhKwXwEVgEYRLfiwQEDzcX6LhOHwTiU40DEo74FC1xJ4WwO4vC&X-Amz-Signature=fc5ec5fa622669b086debff5cfbc36ff76d3024fd22bd3f324753bd2f2cdaa3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

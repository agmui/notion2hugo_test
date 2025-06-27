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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HPSJH5D%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQD4KZ9qZ2rnClb26L3NLY5fjSwdFTsAnp%2BOygmR%2BfAykAIgIICceckYLKAgm9NCIE3dkLjyV77JkP7psBjPIXdsaa8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBbbAX4u%2BEZsN%2BSPgCrcA4AtsGUJt1vBt2WDp0V1aHEJpSk%2F4IUVQuzUtzulGP7lpU3%2BZB8XBINpX32TykxXxQfFbDCn8yHhQpMN12TcEKQ9a7k7BmX0gQKZh8nHrX04FhKsZAwyeCPOWID2SggQrLH9Z69%2B%2FDDSPzyPHA%2B%2BLg9agUbqVknGYbbKfPOGEoDSvyGsCm9k5%2Bmukufx%2FiK%2BP3yuc6uTYbB4NWwevcTMdWIf1XBmGIBOvFRLeO%2BLY7V34uITgFW5x%2FmFOOMpzDHgTyua3j5qbEetrPz6K53aCxeU3ZeUSSnYAXjvCPCcBs5l2MPEXLitQ1IJ9BW08lVPfUJXlCj1oevrw45%2FqL%2BASPvbpKziHlgflZG6%2FRp5xGwQm5x%2FnUij%2B2SDTsMsicpzgpolOvRGxyycgvVRZkg0Iena0k8uAdQdf4NF26xbUk6UITQw2UOsZiXGh1o3ek9IEGTZiWZDIPgbqqHHOiEE5qS8Cw2SiCJxVvGxkRaCoEj6l2WJXDJHKP7oG2W7n2XtuQZ4uK67hwo2v%2F4uS8ygMjDzk7uH%2FsA7d%2BhSW4OEUNpn0RRxN3Z3TAyWDrp1gmtSzvxT7Ol5PZGwg4sRtDGFBqw58tdfbVyMhqMbCTDv3wiCQnfa%2FW4MuOUCydvtMIf%2B%2BcIGOqUBucgk7Xd37u3%2Fh176BI4eDpXnqscPQVN%2F5r0%2BC%2BDLI1gXzOuiYL5dQgQ8I8aYbZDIy2RjeUw8tRSp5lvGbJ5xvqu026QnY8kfXQJb%2FEHbPCmhm6opMMss0hDNo%2B%2F4mvYO0oRj0hTXcqzt2LCWTM0q7PcwctOQQAWH1MQ8q40Si0%2BHOVj1tcj8N79Wl87p6USmEUPh67F0KrbwDX942Su1PUW6Zixw&X-Amz-Signature=7f7e64948f5c0e7f5c5f10da8178f919e9634e6fc7c391831aade67aae2a3cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JW6LTW2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIH5alnz6NJfmj3N%2F1JcOqtVY%2FJyaAn02skjEQUMS7QltAiEA4oEgubRqoCyS8BiDDuo2aSuMOhtMyC4WAXKfESwHTlIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNAtnuSIi5WFMTLoKircA4g10H6qhgDn%2BDfQ1GkQDSmnGLsfH8yUHD52M%2Fj6Ly%2BNY9e%2BmFBDrGaVRB0S3WjpLMzVVbA65VEZw3mcj749WZCY94Gm%2B5pvmsCHi1%2F4QQ6u5xxNOEBaiNMhboh9KZ9VrAOAcTRVJDzq499sZEtX7JAn30op3tesvfMHMkxB71lyn%2BCj7jlm6ifJ3vnMFmOlc2citmvjOVD8cstdmZmuDHFel6tf3yHWWuzk3GKXhjhBm9UBk6poj4WqbWDSUEwm9zEohblugtCvUEaDY3Q8Munc2fMgy7Yjxqu2hGzF6tJXrVdHbbeNcbcXeeXVbwGS7BIVN5vYuhVcmuR7X%2FTRpaml5DsUXD7VI%2BNjeI4sfRiobZljppCTNt6u3xBOYRz3SjRI%2FrD5HiUzaVFdu2P0NuCDFy23yPMh4QuS9STuKK2nIjiMVgMaghIGVvDSxQXGikhfZq2wKfrvNRgfTeAboC8sbnoMBWV5WSSZOHj4J3zrPeeWggnO8TyAA1L87pe7blrLcB9e4KwBfHh%2FDe5Pt9MR0Teo%2FSVDRw7%2FcrfQyPPkkAriZ6l3LSs3gn3fDGWvIMQcDfdUiCKhg2gOmsDyA23L3HzCvoojCZPZpzK3XBWFrqQcgNiBY7GhYI9xMO3%2B%2BcIGOqUBuroHWUJJqZsaj%2FzNw%2FC58FSPX2xQgaS1sOv38OW03pb%2BCVW0fvvV918ORcO1GSgXnfjEpvZGC%2B%2BwAynNmjgMjv6p0XyyqunVq1SbQXHb%2FupYTXQXIAgMJhpZ%2BfAPDmOTjZgRHEm1zo7jlcxA0jJbZ%2FlKGvlQ2HbBVcR9bcCT7VOyyFXuFw%2F5ZRzrRoRr4B3idDNdwWXiOqa3swtRcu7D16LjcIY2&X-Amz-Signature=448685249c90ec24f76eb022dbac2a0057f9df760c12afa1f61df38528492189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

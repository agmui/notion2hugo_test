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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKRQZSP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTkWbXIuD79y0Xc57SXhnKZ16oTuk8gbN8zR1ItgBP7AiA85NdMPjShED1SqfvmoV%2BBJf%2BPJAxTO7cMFw%2BFEmry0Cr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMfj%2Fgxky0p%2BCPgpiNKtwDziM11SDCagh%2BJaNV%2B8PO1vVTcxe%2BlmTfd%2BSChJ5jlm3hlQg%2BgwNXEcTgBU1AepopMFRK0nmIN9yrP7VOCQQWbN4dAPvszoCM7%2FS97ZKA7Yqg9lwD258kxyRy8yxP7IQBlCKhb2bbKqp0DyAcH3rI%2FLIW%2FdvF%2B%2FGwKwMQzUSfnq4HBd%2B%2BA27fxdkMCdX9yADm0pnovaXOUYHgjDDseQMQiPwJA3kfVoNs3p2v3jK6Bza0WeI3UgMsK8bd2%2FY5h4RKbWS9uurHkQQigimkV8Onh63UMMnDW5H2OyECnKdKFcR5CPUzS9cFoIl1U1bmrfE51uI15fZntlpBjqL5kDOaAU1hK%2FetXVTC%2FFiGmolPeTMhy4V7DcOyquEFp2nH3ysBz2RUqspFFU5inDBius8sVZ3whFxoVmZrwasRsE0Vm8y7jCGIVucjzRwREvvra0C0LwtPtzZnmBD8q3HJtt6K6s3klgTDinw7EzJwYoI6%2BOcIAbBhi%2F%2B9EAs8IndK1qSYk%2BeZi1Vnxhh%2FrdFdauW3X3ACixgQWl2vHZuwc5A9ybthceIKB0zTzVUfSN9v0UvjniSawYOwJ%2FjBo4KmHYNmpt8BtHcRh3%2Bxl0go8V3I916YeFGClJf6z0yPxC8wrsOQwgY6pgGvUZ7Kn%2BCFr36OSsnL4DLQy2GSPhH8EO9hBG4OgI0OSjPMS472nqL6We1Fo8Yp%2FA18nowbDOZ46WIQGrwbiKQImDtAu%2BOkXXcQrL9SWKFf09xX6vDMAzhfChil8G7vPUEH0EQ0Kg%2Fq%2FlEbPXmRaJBMTIDNp549W4TzT7yUQyvE%2BSEt2DZ1tnNQaaIotf9GMZKmSPJ7khKAj1Zebxid7KazDVy0YNA7&X-Amz-Signature=1ea87c62d105452b05c40e703813c53aebea7846ad50d5971c90deff31df1266&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GHKQI7V%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Ate2D8h3GNw3TYdR8saNe6vZErfYveKob50iIvahQQIgNnqvzxsXyWdt4th8FerssxpaaoWFPWcXw3y985%2FBzQsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEujX7XijeZM91MK6ircA1isZC2PI%2F24zHV89DxP%2BChIzGaSGIURI3Lrwt1eje9fOXwmTs2CPehPD1P%2FBBwFzR1ylNrclrkcT7VjF8sS%2FDX%2BeiUuM%2F45v4hTmt%2BJ5%2FhjO0sPIAPJpSJ%2BwiqX2liDsg8LSLTvWM0%2F82tzhgPnHXUclRDKdGrPeliwBBb3eOrRYv4SIyxx%2FIkJHV%2FjaeOjhdK%2FXFZN9w6jF6okQKT707xH0yVHfEicd2ttEQE%2FIE9BLl5Qhg9%2B5FxiP0X4nZHGuiI7PzkEJfvyaucQ1WXd7CWi7hnh%2FpsiZ54sRACsUdp2jYPMerWz0bclArXJd8jZ57r%2BalPcGi5uy%2Bt6%2BBSzPNJxyuuxoTLW5cJqtFSOkhfynD8Tx5zQEu9vFLbNFy2aoZltMBZsbvVZIb1doCQFvf9wVcEINhaffdthQiJ3NCr%2FLjFZNaH1kXiuFkZHMCmXbGcRGHVbN8zptIOqlsIc8HV8a%2F8C3LBegMxWzm01rPcJZts73d%2BZOzR8wSV2E65szx7HOCJKZxhhVDYY%2F4ZoDDzpd%2F2si8WLiq%2BtWpjCLb0D7yMC8lwP9v6PiqJ9CEuoy8bmc903IQD%2B93n16jKZj5T%2BPyqUCmf3dupzx%2FLLmo0cAj1L7kQjafP8HNncMNHEkMIGOqUBhaUc5ATJAYSUK%2BD2Mhd%2F5fYLJUVJAN7nHioCgAUzga5YKxOSgYuD3PeEcaZ3NmMXuaPsGhOWakJnDnPQQYsx1eNT5jyrtYqF9YgsAAZtlykTIfd0i5sWSJKHuhEU3wjeoW9liSgIbPRSueSQgNwMbBe%2Fbco0SkE%2F4wsFl2Y%2BFpfDaExuC2Ve%2FWVSs%2B3QlOU8gm13oN1VEKlrFhn3bG9sb2QTngNy&X-Amz-Signature=3fd775d970509f6e0022564e555c6ecb0fc0e3eceb7cefc39f949052e7372b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

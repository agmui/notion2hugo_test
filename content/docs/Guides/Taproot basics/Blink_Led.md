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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXDORYA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDc4aH3v13nseEk%2FVNUg0NsIpOLkl27%2BZD2W8f%2BFIiFAwIhAPVKF7FxVYH%2Fvqrsf6jnYy%2BjrCbh0s%2B2USfHH2bqRo5AKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZSuYPird7upSIJkIq3AO6DoBjOW1H05iaqRDJ04dJNy8mHHUEkguHRR5VbuXh0Qioku54ccxMSPf9f5elVFyjquzdAGhjbpNXKQH2mimgm%2Fll8vleOPO3ILBHxOhyRkdOaHHXlPuQTp7WdN4ksXWoNUxEh2enc4Ahmh1XAyWUwcsDaPew2rHS0j5Jc%2Fe9XYrtThY1pkPAmSpa%2BdldK22z9hthobqnX6astsF2vXXshqvVyc6mzq24ypygVy2PFUMq1iCbGjctSNUJZ6QPudoV5f5ukZuqsTVAdO5Btz5hP2uCOyjrOEarpCwlXkBe7TxRl3ym0FC3exyROzrejMMAzlHsjzaH2xeXyBpgn3kSQ94%2F24AzU8RtuqEGrEdprIpO0vXgkQi%2Bmgn4Gh3uPYgQ7RwkBvAAJCtX9J6yEx%2Fx0C11ck22Ov7FG%2BoTbVnJyALoXUEZka%2Fxzkgp1Ac99lSBRPMBZD%2BkP97qLQb1RK41GNSMu2u2FAj%2FqrE3VDmjMaBZoWYqdR7kW0Ybfhbe%2Fw7qvwKJz02O0V7QiOUxxK51QWS3C9UcRnEHLDN3wL7nn038RA1zEt5ubWVJvjnc8r0kXsTGL4BY9KgPk9JwOzjD6xI18FYnfOCPJy7fel2xESnpnz%2BQc5aF4pbv%2BjD2se7BBjqkASJSXbdWayKjwAeczmrs5k%2BLKIpY%2BWnb7XMDQjKxiUkKLytQsh%2FLdr98%2B0thvetd%2Ft4P6A67fQcb%2FIHrMwtpDZ145i4YmQAMMc11yL21Eeo7X8cQ5VJy6E1N3iVMibF6h%2BE23jkNHE8gEFJxrSSaQSGhyBhpjfA4NZM08sAt8AWrto8bZAoBWHOhoMmgYG%2FeZu3da%2FzZTMpeu6nKeYkBgRe4j2RD&X-Amz-Signature=6417b3374f41f415364dc8fe15c2527bf7d59f2540152a9c2bd27ba587fd99a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ONBZPZH%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwhtkSyq7hlazPWBKw0%2BE7tx3J2HhtfCoDaRU%2BP5ZphAiADavgx%2Bklyo49mVR1SVqrTaIDLyzuhkUVFOigrerhfECqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfEb05cbVVOOcAuXSKtwDT%2B9m2vDY2psR7DpxFlXchZoYsItxxnGNF7hky8UtoGVl5WIb0mVckpTP61oT8UvIxdYVmYBBMcROJUqTnsVzoH%2F7JU8TYcHsngZKFB5w2FfCTpeRRQhYu7owOP2hbzVANOGesqKUXLRSZttIAvT0R2VM5EcLu%2Fz3QJdupczGkVRQMJamDjlrHjn%2B0EhfZMaTtiy%2FkASd02xHrQOIXbFjiI5ahCIwPEdkrcC0FSFxNunB6%2BeGLsJbdcgQCQrk68vtmqpSkP8hmPS92%2BjfPFXilEQocmHSTOCNDmUDWFsRNq4%2BtlHp%2BW0QMmlOx4SEArNUgAaY3K1JqwDgtmf97QZCgvTiRW77bbTvh8vDFusi4qCVHlOUDjsNR%2FvVb0Ir%2F5MBCLm9oPYRenG%2FbF5HqjAfH%2B78Fp4GveKoq23NJ1CColDd6ZirEC%2BYH6StIJdouKuQ0ea5ja9N7jKZ5HzT72QblBTlMKqDoiTugq2mNUeoHmj%2FAj851EuQN0tZtA5y6nmZnXoLNQVKLnzLFr7m1z5UkE%2FcqgPO3ddBJZ8tLC09SSuX5BNeDw3ETwGxMGetXRGnXHQDqn1OwjQ3fo%2FiFeNI4a5QNoYU%2BqJhVy3agFNHPlqxC84ycMrJI2Gb37Ew4I7uwQY6pgEqgp3Yt8YWVGDsUPcB5zIeJuspc4NdIT3uPWUyXDEzHE6BElL9N%2Bk63gju9OJc0kMZyWJXNLRX7qKUWFFzvmUtOk8jBxAln1OXdXoJ%2B03djPMOAA%2BRwbiWHjSlvsNq3YBggGbUi%2B9dPSRZpYK5%2FtWL8vPijpy%2BIC8Pc1zowKdTGlOsSE5%2BWTy3jCp2cRsfCixfu5F0JUrcKL6ZIAvZeaZS4y%2Fpty5%2F&X-Amz-Signature=446994a65ed3914ebb8692446740dccec3b6df3222b127ade663dd57c5c17e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

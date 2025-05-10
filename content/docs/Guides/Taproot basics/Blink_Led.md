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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCS3ZUWD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiKJuLq8Oa4fOJqVzrHZ0VOoY9aR4qlDHjo1gd90vvSAiBKau4d0xOuPj6Y98WT%2FuiU%2Fyn0Tf7ZV8zvA6GBn%2FPeGyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYXjnUZ9JFYdevpdWKtwDt%2BcD45QTNJWMBiRQUlFdD9gVpnw3dCfYDnd3X6PQ%2F%2BrjKH7N5UDEzLW988L5IBOkU4ZaFBwowtX1Hv8l6vcajcKpIqDQL6f3xBna6fFhnWNqvB5u83%2F%2FjVFnuUFp79SubKi2J6HGzaeHffC04CZcq%2BDCov13GbYfiw6px9913qgiTx6rOLZHeWhPIVPkHu1okgJS1Q3DGTPwOdfuE1AkPKL%2BovRkCwGHGamT%2BzY8qdE%2F5SXCjTTBiYRPMpxTryJ6I8SomQH2g%2B28%2FRn8QBY56mpxMaOoNM1kwoik6dEuF8IRVGIVFViXZKfu98mKIuTUEd9Q9UEdKBsdvPGtBo81ZiGXxBW4W6BC3jNkjycqre1X5AKTqznhclwEonbOTs6RdlW0qHpvBGsFWsUg58KTDoWptcqEFIKMtbqUofeXNXB2eRJvLH7rbXjw0ZSR81AYyR7zBBzahQ1XvLd9bOUToPOEhxPGrGl%2BvpNOrUfV5STdTBUNbO3WpUXAkniIVVbDe%2BFy%2BXK0Ujv8OUh1C84feYYBU%2Fc%2Bkb1Iy6CTlhUWCFfUvGA8FwfT3PrqA%2Fm3jk1Aej%2BZnLUdOm%2F9zSxStJp9VFYHso1DFAsaUdkZRmJTFwhp6AF%2Fr%2FBjHA07u0wwxJD9wAY6pgG8Tjswl6IOYw%2BE0cTzRAs%2FmX7W5osW3vHfJIKwILkILOgVlgC3vRGctufg83uuziLeAdNdnAegyVIAZ6F2dYVPsce8GE90vjXOBa3%2FWVrpawKHCTnKuOWo7bBxfEdJivbc9b%2Bg6u8fy7400vWUBbAg74KIOfe%2Fp5kWJOzz9fCcu1bLdFc5DydlFr1e0LmgK%2Bv4WcTlKZuiLF75q%2FUy5E0HTZTEkOO6&X-Amz-Signature=ea64ad883069578ad84ba88a3f51cc8aeb5163e858274cb2f4a17d3c6c08f383&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBSSKMY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH2YDiHmi5wWuLEBi0ZkPIaVer4f04OlAUBQBeiKDpY8CIGy%2BIY%2B4FiG8JPZsibTTRxHVV3MBp%2FqtHtL6rMoAbiPBKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCEJEGys70TWkilyYq3AO%2FluOhNXIOhPSQeHp4%2F%2Bl6ClneOXft3OGgjhDXmNp2lfdU06Mxrv%2BkalGhsRGndEI45oZQuMB6%2BQVHiVTcpMDvW7DAYR%2FrWKoAh%2FbnNdq1ozlTUZtN1IzBCMajyTIhhPjEUZeZY7BrzuYB%2B9aNldfH6Z7btrnfjiUky2bJ2VP3nwwtfr1EZyFpIF7vSsyxNSySCsPqrvgpsENCGsRG7hrEnV44asGKNf3YZBzCZXUtw2DmBPv6KHD9l9MMrHOo5AMtmfhTdC9yESIMn3xjbwL6gIxqmZwj1TYq%2BVQQMUjQza48r0F2oTp58XZQXxk1gVNIKDog%2Bd2PagnFfHCNFKAYNqqoP7LVyBIDkw5mNci%2FDgPsbKHSvqn45Ow0d8aZxKde1gQJBtl6ZDAAcyMUeJttGR9xlHeBP9p%2Frgb4JrkDXNNO7R5OL8Ybi1gQu%2B3OeDkiIUTsUQk7YzTydJcQaVIoxbdZ%2FBhYOJsa4XQrRpK3vddGpeoxFAX8O5uwHqY4db9eGG%2BfNErblUbs3YfYiC%2Fos9yxub9V%2F4%2FUW3h4D5DfRmsnFQzfUSP05PM3lbBMBdm9DzGTWEb9vZ4o%2B%2BsdsNl2g2TBnY6tRGTKMHhughmqUJbKwSFudD%2Bqf7bkgjDHrf3ABjqnATM0aO1LECE44Pk5QlPbBvvxqFr7RQzreNFms04brONG%2Bw9zkLQryKWefuJfoVpoG0UK7JNMgv%2FbPse%2Fa9cnWvpLHUNwnlftmh3hTbXiq7QTQa5esZF7YNW3XUTX2ey9hqaa3hESZcM4%2FoQCnFoncbDCuBsg7S3fjKlCDEV9wwGMa3EuORjzyfpl%2F1wlsycf%2FA%2BmKidjNEHIcJKF%2Bjkx5eei9WRTBtZk&X-Amz-Signature=db02bf238e93c0ce442199c43ce10290753251f5174013a4dee20b8fb9642144&X-Amz-SignedHeaders=host&x-id=GetObject)

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

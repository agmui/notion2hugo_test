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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TOR3DBF%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCvKWm2KjrntZlLg3MhLhFBgUO0adC1o9ls83xpnMSDLwIhAP8yp7TCqPw9KbWfx466y28aNPzxluzTrflVJqitbp0SKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGJcbvj0K6no90TX4q3AMYCvwrfEIg8FZSz0I7JKcYdQFa0vA7dNR8zNSduNAnwto%2FuQDClqhs7oefsN48gs5N7J%2Fb4ufa6W5WJXUuUSBB%2BdM7F5Ac3qAsdSimnQiZqdehrtQ88%2BpfYlr1%2BwpaGatRj9GuXnqmAylxM3zd8Pc%2BgGW3BL83ld9Ot3z0kM%2FXRhk3EXpMKdVRPbp%2BftwVOSxAqLa0KIO61nywUOLHatcA%2FPypgoKx8Y9KF%2BS96xTm8bAxxgK%2BhYT1fijjtthkKCPWGhyD%2F7md4xNKAoMIlnBrYPJo1OMgsuHsIAeam4XMs8cUTVwGQtmWiE%2FqJNZ8%2B%2F8vEY%2BIiql6p%2Bxb40AWxz6Fm5GkV7AOhVHtdyGXH%2F5dzNqU2j2G%2Ffe2crwKJmCLHQEMLhu%2BFtXOXSV%2FzqommXhv0EHL8EH7fX1KmuWu1%2Bp76MLN2jkw5%2BQbytYFjYpNNeXLt%2BukWp6Q9lZzmTLsJXiR5bhYZW55FLXGZsC3Cm3nH0GD7IcKkj%2Feg6mx4ewscbinKm0zum%2FLBjhJ6ntPHf%2FYiCJzTvjC2nkeLRS7lt6CzN%2B5PIv7k2O7E5QCzadoa9IjX7mLIt2RwQOhXwkmnpWDe10o5wlGqGFOW8zmTGwfjyp0X5ieMnbzj8faKDDbxIDTBjqkAdteKMry9I30EMClBY4OjYF%2FLt2BNQ9BCNKUqbUsyNrmbnClWTN9KFX2L6Vs3wreto%2FbBQrxwVSMn81UQ%2Bmx3ozOODgjbnqsAW47wn0MqdB4m1mxGEb5utBiwMtuoriefDcYvBwk3sojF95brftGhybn5v%2FL6OqybTqNgKrCDBM5jIdi%2FbXN91yG2t51OZ35QpWW2hPvoOPipCxc8OSLTPfWS%2F6n&X-Amz-Signature=4dcbc47f570c15ddc96d93640140e787eb8aff259027d137528398d515d0df1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WUD7N4R%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFYjCfgkTcZh5hBSbyjaQXjs0V%2BII3lAuAw62XtqMEHbAiEA51o5Hjuc3%2Fj9cGidxhDmdDGTO9qmD5dGs5PRBfhyGuEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJp2SgBLm7SzByUa5SrcA5ld8d0Tca3E9t04ZeToRPxP8udrfCF039ULiyvObE1ruN3IH9fLyIFg6Ud46VVSoXYOnUyqbt9UmNDxwh%2BwEefFZPXcmaPgfftbXjGnCYirTdeDdEHsU9gRUK1hqCalWnlZolHuDZDOkCl%2F%2B%2BLsnGkccoQc6WbS5kBUs43onH9DBAGRYhOVe5VemQkPf1yHYd9ncXpcIg6Y16IgSIks077lJ6CS%2BuH7g%2BeGIUCEEUYf8397bOVbQybIFnp9uDaHJ3tmpnDBiQ%2FjiqUXbNhSPF3bx75eTKmbo9vdrQUAwYACWCpB5EZDp1yba2phM%2Bv3JdJnzt9noO91Uy%2FM34up4UUgI%2BYWx5uEv8gITTjUeduUZ6mZCaPGdyBHDYFYzyW6xf6GLzEa6EQAW%2F950%2BJ7nFvm8w2uSDZW83d02Bo1SLTxnQbPLA1Pu5E5Kl%2FMvgtnCMw9HA4g9Mw9sYpwoSykgtWckTj4D%2F3hwhFOxMXy4Ne0wonFyvwDnN07%2BT47Z%2F7IUnmO3zNkPGnH2YLOXEJzaU%2FN6L2u7OeyUVNC3JxHb0cusa4NM4dZo52jXMgW6gAMno5cdife3ihw2ULdw0mcNL%2B8Jy1RuhUDKIZi2ImQfqGQlIyXOC18bvHDQQIpMP%2FMgNMGOqUBqZq30ZgsGH3b99X%2BmtiDV1cCwjdVF2Z8fy%2Fc6eERSOLQe76pEVEFGu0XBhaFuDIrv0RfDh6mm7m%2BgpSx1WuHUFSiMpV1TLlIr%2B8EYtwfnu5IE5WspMCFH9WN5Y4Q8QttRqxGpWGd352CJT7GbAobJjm%2FvybF0Gp%2BUNsnqaIeBo6XpUPdzG5XHrakut6na8unTmcH%2FDvBIV5wDqvoiW0xpqnlR68f&X-Amz-Signature=1dc42a2a27599988bfb7e36a95557b925fbf6b8d21f33f4036e1a83f805efe00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

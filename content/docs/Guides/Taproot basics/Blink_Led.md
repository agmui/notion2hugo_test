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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ23SXVY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEFcMBK4PBzMlEwHhPT7I%2BqAFWqW%2B%2FJggkyi14PmUv1TAiEArc15hLWlkt4FBU8EMONXjsV1uIyQuD4%2BqCJyBEKXZNkq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFDuOwTVi48v77W2ryrcAxIXrAKRM7oxojGsVaIohHOHrLHSOQmV1nF2w8H10xLht%2BzKp3HYFVAJoDv1wlfwi2rowtK1f9273KIb%2BpZ2%2BAZTfryyNEis1ev0TszGiPPMr8yCWqExtHM%2FzDvgaJxePxkPw1wjsKGGrEehwcyS91b9QzxL%2FLA9KsHC4YmaUPJUPIW2fzJhJ90FHethAmA15180KShXcNRuZNrN0JmKtKaFf9ARtQW3wY6USObGavJOAUu2IVszhz2p49bffcEQQmvl7qUFEqlYng59k3UcUVE0hwm49hsA5ooWTLT1ZjLyD57ZMi1Wd8adqXN9kmfIcUhZFMsefgMF8HWxHho%2F5R1kDSFanVjIpDz1hUIhZsWYKaqXEu1BSXKwjJLiGa4spTvy%2FN60KqPX%2FuhkAHjNvBuXF%2FDm%2FmeAYd8xSoWGmjiTga3H9rKc9MjkPmGMxBLTS6jioYAIgw9HA0N%2BYlQV7szq%2FF%2B3Uacan4XxFbyx4NBIJbTBArNEY1KYtspQFPnTccRXKneVsWTSrGfHYEJ304fg5m1T0qRGNnQu%2BfFF41ZHw94FwkcWA4V2AP58gEREbiIbCvDV0kgjxzKY3dB7olnpZ8UYuorQMuNJzHS0Gxr1Vd5CzqsAY1TGDfPzML3fnL8GOqUBEI9ycpxJh999UD625wQdXltMSlKGIY3BjZOsml3VR6c5zKbp78kKJMcmXjDM0aaxqD4eoVkdoz%2FFY2cnao9rvtDxH%2B3q6ZkC5N8s4g7bz2n0U%2Bt2djLO4ZAYvNQnVUwnQ5XZBW1E1uncjjiAe7u%2FVBaHSX9u3miAKxl3scT%2Fz9GEMmq5d0BfRbNkvLRoS967W%2F2TPom1PyM0BcIfkQlOTTP0VIra&X-Amz-Signature=c2a25cf2e1ea396ea79b6926d79c18adf27d14b61e5377a7b342c81a467efd64&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6BHHS4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFm5KTTGidfizH7xU8q%2B1arRFRYAhcL6KrzbC6mR9oK6AiEAyM2zcIDcMVtC7hlvTxYzroNm6hECuxBKTABJdotW3Y0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLqSwJYUf99h557b0CrcA0e0cjnyqnbiLjdJhMX2mun5zYpH9nNIaGsiXHHVR6%2F2g3nrjX733ZXK7ADzS9tJwH3qjsg2Z2iEa%2F2MOk6hVewt18es3jbboS2Zwt8UfTOKqSXH2eCUfBOQ5Fn8lHxG0l9SE9riVPP%2BxdX8BCo%2F%2BT%2FHk%2Fl6wXoCOztCgGskG5w2xUadT4zs2%2Bd9tq%2BXJ6exzUggJ9hntxEHAmUDAi2q%2Ft%2BelmRxSiALEgp9jCXSuYdv6guCZDyk%2FcBIbm6kGkwT%2BZpU%2B9LKfnBJbWUX4EiMEPurDZwCP5ksh7MA%2BFo%2F9uX3bXy50OlHyH%2BUVbS9D2Agu2lWEBWpOB41JM8B%2FuCbEKSaJdefHQCo3vQvplthRHI55FTTSMMVpgdhczM3xHw8kF4ZxOWSB2j52Y61Jkdp%2FSHlF6ZQhh0F12ROPy6faYKfexPwd6pZ%2BTGXYh%2FUK2KYO5pn0ER6f8lacIxEQHwBH3hMm3TJ3RnbpAi3c6o2YVNtqA%2BELxIXD5ypsCkGQ4n09clRNdc2H6zU0CT%2B3C3or3XBZR1rXxt6KuEYLHgQeepc%2BO7otdwlNOx0zZLqT0UIOY82QmWHB7KcFsS6meg9NE9mcUX4QRAEBuwfslrDL%2FLK6V1CA4ol4lTsPIa9MIrfnL8GOqUBzhRo6WLQFtBmzkDCtlCwU2qESmEPZ5vc%2ByCAdQet%2B%2B2dymE4oMoGqLVQqp5KiVp5LvPHtc2g1rRQIbV84PIx2KNYMmf%2Bex9cybhrOLdY2ceuGf1kXLyoGqVVk%2FIUSYLnGcAbX0PZof22f5wOcX%2Fv4YV7XtxhFnQhV8asejv%2FaZ0sS3O6xvqGsZT%2FIkvlR5VFVqr1I8MFyo%2FUFQg1C8%2Fx%2FDPjmULI&X-Amz-Signature=7eba11df022ffefa5a57c600ffe2b188a06d68bd531fadca0ae81bcf2abeaf43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

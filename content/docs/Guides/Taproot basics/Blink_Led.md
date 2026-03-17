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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM2NODVY%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDoiIiHC4RCkcFlMmWT9E4K%2BmFXVwJPrFJN%2Fxc7QoiPWgIhAPT9kurmpZ99NkHWx2r8NuES1ID0it%2FlzYF8puCTIOn4KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ65EU1gv2L%2BgCpOAq3AOSCK04lEpHmPy2PiW00D5PiDhmI%2Fei8agNiOrcTUrXzZoFJkYyvO2WwS7xW5UcbM7cGyJz%2Bsst1pwK1sor8R8Mi3EsHBsp5jV1yK5WwEZAOz9t0s3oQWmhPgbSJW7Tz6f%2Fn3P6XtdC%2BF8gLArLypnBiKV9cILwNRP8%2FJ9fnY3zoRT%2FObgao2wJLDcSqDwGfBbmHhZW19o77%2B7P1zx%2FZRjOWOYdB6nkD%2FP3vQP8oQ3NhG0YxCtCeoPIB7Bqmfzo0d%2BNh3EUaz262LgrSFN4IssXjfA3OsaALBOZ%2FObtGIucfyGLIybFa9YWTqs%2BHlNavpSFlvlTefbvVC7hOtmHp3gWFFGXx%2BcBSinuusROS%2FRbdjkw4jksrGiF2lrrEweOo%2BwC8GaEtm%2FvFHOB6uW%2FxKWDYvi42wk8ymaJ5uTniu8R5ODx6uWrXXbv%2FlJ1GVPvVL5NZMnMRFjmIr6KP03DkRYzpeKN8sQvKwJYYAA7a8ta0CaJoYe1fFEJdGYRKxn3VtDzaMiLlzyr%2FFawzra6B7iMB3RRwjxtswabOiRYIFnqoZZhQLdO54BO5DK1dHGahfCZb6hAFyo6BLrejCE7pZ5zfp6xJiLj8KMfMExbxS7sPsSwRwPQ6%2Fln5ckLaDDB6OLNBjqkAa%2FyVAebrLAhgOKQZxTbd3q%2FWi5HBSp3620dg24xWax8%2FyhkOLejUgT7qzGz2%2BsVZcmZJ92BE%2FlhZ65n%2BoigUQvf2cUhoV9%2B0Vy1b0fmBMYGTR9gt8QAtw%2B0CbjSsLpbWd%2FcWow7HN8Ttn8ylqY2nIsSZOz7raYlng%2FF%2B%2B%2F9KFcJraqJ0JWzUnMf7ZHkOo8OZpFQblj0K7cRalX2I7F4W5pN8%2FBq&X-Amz-Signature=56979d792e82c47e609dc67eacb5926b26a5bdaab1e8cc23994701f5b9fdf27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHHR3CWK%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCGnkbrjzW0504LHQl93UJKt0XuKyeNtLMiDN9AiWV5ggIgHGgAAIl9YlSUJUOydVGAt3cIvh2DWYvkpvTJoL6V88UqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiSkRKg4n5b1M%2FpWSrcA0Vxh%2BECdLM6K%2Bs%2FOg98HTq1P3%2FcAbjvvb5B7PAdfC8ohDPhddhnCBXH%2F42gjdcCV6lZnrVqLQ1cHsRkCNkLMQ2PwYGCSg0wpYIoylKVcDu6WjRwdfK%2BO1EZq8emx9jAQ74jOKu8%2BhwCR1voei4AXIogZlFoYRatSC0RI5BmqkuCOYFfErYkgRLbTG6xGHTylIJHmRub2R9Gp8CR6c1oJASxGu5jVolaauU0kYYcSYLZVMShLCQhoKrAY8sYHx3twhreeZrcFPDUYlazL2j9biesbQYJkfFOefbmwVG9MxlFMtM7xUdoMmMxPDLGfqIpflgPO8yo6ViaBSR%2Br%2FJExt3WpTtiJrqyZr%2F8h0KC79gp473l17NX%2FlrMMvAetvQMZ0uA2U%2F9KBAfSA0xWeC9UTsvQ7scSfp3wa6epQ56nKplPmM0ZKrs7rzV6TjtwWi0cA3xQ7gp%2FmQEo3lnZFBpjTAd%2F5dmj%2BPLPS7x9FEK980sB4khwGdgVoF2rUzIrrjn1HHDccAy2YLPGnTajScns5l90yJ2CO2p32aly3E1ggRpCDgawozYctF9XusQ%2Bcp2Hk4RdNVjPRK%2BdzNn1lZ2xsSXJvVD%2BX6KlNkJH9FKtj2UuPl7Fi46OZEXSLf6MM3o4s0GOqUBGLG9zNQZKagqUhzJJrJ3bdM4qTzbYj%2B4sY4%2B9sbb5SIOPhXab%2BWVw%2BQSObM5id41ZTHpPPKuGvFmO8djAtA6MOtDpvX4xCwpC0LVXFH46Wt4TAZ8pKKTm3misTsV96bM9zcftE0KgpN1XF7TX74z2eZAFDX5GdX8MJJzsDhfWZ08K%2B3I6uGnhYYNUfIPYD1Fven4Yv06%2FiQztdfVPZcejI74gmHs&X-Amz-Signature=ae883b896d227dd50d1d4732f5cdf36fbbc0c423c9bddabe2843a09096ce9dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

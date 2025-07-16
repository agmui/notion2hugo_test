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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJSAL3TS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDw3WzL4JvjYN5u4AsdH4%2BAKXsj8LPN6FiuZUztGujLxAIgJrkbtzi%2FvB3AD3JkMcWxe%2BMUVMQdb19JqgvT4RUtnEcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJDBvacD2baWSrP6YCrcA5LER05L7pRrpEFrNQtfFd3wjLmOaR1uCPUsdRsIVxhABFvKICfGWDaGxMQJ6aQXHaN9COs2u5LTYAvmUPkK23kZqlKSAXuLOaE0daYOujFR9psuXjiIpbPP3pLZTjQoIS81ufnk5o08SLTrwUbM7LXJQJHKCx77Sj7IDGuEl3Fz%2BR6wArL6gq9kwlXswP1XLhZUICg%2FUN9g%2Fi3dc2A%2BXFe1%2BlWPV2K0zBIIiwpSyGIuKdGTbkUcSdMffkYECcVKOfDxr%2F5n%2BgemZkN9m3JwCxgsaRnH3DECX2qrGJgOA8nkhX4ITbZTsmQ%2B6iOWTPVWeX63kDKvdGLrTo4B1Ig42K0M%2FOQrdeQYCCA%2ByxQJgqWO39J6nfRlT%2Bpvx9waoxa5pSKHxwjp%2F3OERy0k%2FmGJhQdxbS2W0qTbrljFZVrx88he0tSPbzJvEQSu9BfzerFRO1Ff6x%2B1oLnSSW3aOznAt%2FVLhiMMKv3GLJ%2BFm19vXXHcOEYWdrJ7abdoq9JKyurYDRM7dzzLvGRdJxk4oSaGWHmW6qJBMyPOwAsEzKEGYxOdwPs04lEoDv0bxRQeKtKKMY3OQ9aUfeeUmWIlJO9ZMHq%2BNmy5XkRt%2FH6b54%2BIDLCRSMo9h5YqmeuE%2B9H3MPK93cMGOqUBGvTvIgoWWwwNxIi0jzNm41kPdFu4rhdki8vgzNGCZFQ8WbM0QNGwGCTvgw8r2nGirsRiQe0jTvpVwiqD7auz%2FOixokyluYf7lAYzfHJm0BkpkGf3wXWv3kZiz726d3THizRT1x2rtzZAmhXhAwciUSLmCUUWx4513aWKHkGd%2F8I%2Fwaxfv183SVZF9LjIomSONujoX1xU6ufdh%2F32LyUuQTzxuRke&X-Amz-Signature=9385ee5b255402fcdb5d841941062ca54a84fead29dc631f98916197c45d4572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STM73ZMP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQC0r89PnTqeAtrthJebPS%2BC8BUcE6FGkbXUHo8c4RUtagIgO2TBf5STleTwpzXzus0HQGyAkB7x0Wy2kbDEOKz4B3Eq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDAbfpD8pLRmwa8YY7yrcA8VFFAAIyvntFlkM2H9LcKskz%2F2BrZ08%2FCjZn8lqzKo2BnPHuz0NpMPWbqlVN3u7GWPmkdO30IN20mZs26iDD72HMfdN4u%2Fddeiv9n4Jk37EkSYZ8ZgOvHo560wl3P95g2JvzKHIu2z4SpQz7Zy9EeWQcllcntV%2BuovfmYfkoVe%2Fe2JjSH837Dx%2Fnuc0N%2BU7Dz%2FhtpIXm7GW21OsSS2%2FGh%2B%2FGylYu6pcwEDS%2B1D6WN7ZKXlLnUdL%2FUaSAr3im3RCc36RHlxtSypFMDFqdIabz4%2BrvGSruj%2BIjcoMUEhXTbZDdv0C%2BOOz6LNRu%2FO%2BPSk%2FUwl%2BXZcc6A3HbFqKcjdPMIzViS7JVdgkX%2Bwcgep7xKua5%2FiO5M3RfAnvYtAcGMB76ht9Clv7fXWy4i5WwLHdZWoBn7Zw2fKZC7Cdkg61giKiS1DRXiSuSNp9n6aIVyApeEAheL2izrPX7DjgT01ZXyuIMo5pOS8pzVb4IMvvDhJPnEXBS4QNlMt3OWlJakdp7gRTWdrLNfVAWSVKdIXWmLXz2ZrtkXbaGiQELriob5iqDX1mWI8er9G1vnrE4pgvueAEkPSrCsNJCNFFkCCXRyiS8s5bekoRYWKjN9gv13tkV2UcInBhmye4smNnMJ2%2B3cMGOqUBcwqNzzfSRLfS27BOYWZ2LKTBUs5IhkUXewY1MebaPaKTW42x00cV0THdjBWzheeKwyUf%2Fwh%2BRSBtAghdhvx1d7wCBfjKLVNxEoTghaY5R0ohGhMCWsnNkudvSOaHwbi7Bw6Bt9WCBN2YeTv%2F4%2Fqjk%2BFrCzf7abT3A79JlK8Iag46KVSSx7sMO8w5Y1OWKbbjrVzV9i572VdUGbAf90b9NOY9QExO&X-Amz-Signature=682d81b240bb36866323d723dab36a2b8d2d74516926a214f580d21df762e639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZI7MCZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrR228mGrMSGO8FHiuLBIDa4jay3%2FeJ2ZM5iRjIrwUqAiBTMBR7mx%2BGFR%2Bgi6cLcu5q2pg1cK4mJSNorNlnjWwcjyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwsgGTQHmvaVQbJ6zKtwDbMERVUlTX2TrnC9%2BEv%2FEhTD59NHvdVH27CmPXzDa8leYS%2BEr%2Fhyv4Cn38dvvS014rvVDATESlLEAdzvadYHpH2%2F0UCQxIMsvkJhxtl7ag61PBuIxaLGWBF25tByYLV9KcRZ4Yt%2BWYUbG6Qn1vELoPxVBIjp0V1jNEifyQlGJr%2FT1gmcuf5gxpURyLRP%2F2SXN0RJ7nL3%2BbYL3qSTCT9fezKS58BR97w7oe5gxcBDq%2FcOD4rXKit9Ljm0IN3FjLgkW%2BMyzgL6CHAWB44AlG1Drat4DL2svsSXdkdNt3sJiiquKsfi7km4jSLsfA0NAy5Q%2F%2Fw139PwdAoHSHK7j2nVPVQDLGohMjW%2FOdwaDZ7WtX4Tmxrg%2F6ygmyJdb7%2B6rq6do7oNInQV8UYWkvAzVLGFsbZus5uCTCThS7%2B9Zh389LXDeibbxcsIgXASe4U3WefZEtQp7GIUP%2Fvbq2LG%2F4fSGN97uaIFdVY1p87keziTAcpGlSHqjVf2YbFbGD9Ks3fMhg3pJmhtWWku9d%2FlXX2VYX6EkgH2lgtbLyUq51YWVk7anbaiFBPEo7qTupipo%2BquZUJEnhvF3mKTPRBFqW72Gh%2FP6FPTZDJeo59cV61w2SXI9cxjM0YGYeRfQqKIwqc3AwwY6pgHY%2BJLaDPzBIPo8z9zbbXuKdGLzegmzdUkiBuaXAIz%2BPESP4Nj%2ByDPYeAr%2B0p44w67xAMD53Vky0RVRdXIZVWcxDewm0K1aOkXbi24qcG5jx6XVBc9X4%2BwQENOJK39yBSaiQZnzrNB2Y%2FODR4HQKdtGko4NDrxLvT2x931CMHlaRrotNpyguYYavqB%2BvBbX39FPklQ2qbK1t%2BUm52luVrPbcuefNnvs&X-Amz-Signature=3d4d201be6c2c53dbbb82202f0fbca97d2d0c484a46505b4133f1c06a27c8fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQDQSXS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2noabfelX3KPldVQylbr58q8WiFpGpfHdG8kV%2BeQZQAiABKajlTF3%2F1hvszMpqAgPAsA9wwbPY3ZkJvBi6Cv8XlyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGiru%2FnofTdK%2Fck8%2FKtwDv5DkLfS8vg2ZHNhKl31ZPghL1Zd933E%2BM6kL9RdIerhRg%2Be0v0Cq%2F8k1Gonw3QFAPV6qu5UAqEXQpQ8xAxpZ6JRugIuGgCXVgClrZ9oA8OER1Qvkoc4ATFqo1Juyv3ixhIncowGvAQiOSVmxeB7%2BcpeAnFXRq0iI9HfyNqKoDM3R08CoGtdKGzqux8Ij6xgyT%2Ft5VNuYlxrr%2Fi%2BN3GLtOvAujJ1y7g3ppCIBwP8fgVThqPN8VynyJ653cOGzhwTJRbFBqIdnE6FehqN4oMbfKehGXI6j4Ht2hOuSGQlswrCD7e3ABwmS8eXVyDfGlpbCvUnFK0bKb7g1yg281Ai79DCUCmgS3fJyMXaOGtZfDI%2BOr4uGyw3jcXeEbirCFFFSCfXWnrgo0cDpCRhFqvCef3jtwL1r3XJn7wp8yeVzxt3KA2PFVvaLjagxIYTJHXFkXKD2CrD2s4zCtUQ9Frp7UZPIyMk6dcoNJOwMms80am8idVHTxDry%2Fc4x5NmWLIJveC8Xtj2OxbIAuGFGJQyW%2FPg%2FFpk5%2Bxnswy1Nb4d0OvZ21zm8a5geKnSQUkZbPWUuU4GEG%2FMRBpVj3ie70qHKewZhVjXQfsfMaoQ9gtvDgHuwQ8Ru89w6CIkGUK8wgc7AwwY6pgFjicqIOJN54G48YDZ8GBUnrWLG083icMIcrgJxnkPhVRFRS4KUBpE%2BOOVxzdywSr6qoEPruFcuGkHUiYjiL3AbJwpejqTDD2i%2FtiWMJ8wJxp4gfODj58Z2QoU2XfbCfkp6OdQ1lfIr0O8e71WEGEakmmfbAAVY5rEf1AU5hoE%2BlB%2BOdJgijBv9uY%2FLzf2gSEbaIvCgg9qxfByLkHDHoq4XDZ6%2Fp0q8&X-Amz-Signature=7ee18988508842d1737d41cb8a357d7bc7dc810a0d623799c4ff8590c8bc86f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

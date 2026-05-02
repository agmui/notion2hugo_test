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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6IZAZ7S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC2pGQonHSwx%2FX3RPY3utuxCVEpVS4oC16KdgzlrRI2lwIgK6EXmdAz%2BXt5lwv0BhNCOmAS1encCzR4DP18IOSn9aUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJNKeHTd0qzzZZEyDCrcA0vnqoaNLR%2BYd3%2BBPw%2BbQXkWFLELNXaZDqQVa%2FSRhIxU2zEP91aMmiQfoszcxz7juRhzv5paVJivTI3nwg81dvyp1Pybo6jFzF9rmJkYlc%2FzLGqPvi5%2B8XGW5%2FBtcRBaXUA8EHNX%2BWp2GKNnKg%2FM4v%2B9s6hThnlsWTkPE7TtrLHDak%2BtIXq6w6mIEyS5HBWLDs1jXtbtsEhkANvOe7YpHOeA4MobkvZUIO%2FqPSNdmWGc9gJVHf6%2FJtoMlBYH0v6QQjIcn3slR2x0u%2BJ9V7KUFRE8mtRM%2BCvYy8Hg%2B6vHUohMfxRq8b5vok6Son3HYTHuSIRXcLimwaXJq6qPlpxcm7vemm1XzT8uNv1sj%2FHkstOnvj7kLk6JJG955Ap%2F8kg%2Fw%2B7Pw7BNArK6eu7FCdqTdNe1IgIYjwiF%2F76vl4t9h%2FQCd3XvWAJRpQqPGmOmQ%2BBAboAiwQCAejCHqdkhorOx%2BJ6n%2FYmQoyQSXPEYfuOOrutkLyTh%2FqaUXG3yVJVZq6gwwEwpb7W9ocBJa5ZcgnxBnnsHgxnojnN9L3kTyCocTHc5Az4LHm3B8L2K4dy0kV6VPU4dZXZCN0Xj33Dru3anV9O6iRrXs2%2B57E3K%2BC%2BVcVJrETgnPvxqrqTLSNd4MLLJ1c8GOqUBaiguZT5b8CHd1fSwntpq0qJz%2BxAyFCmoBf3vX7VzU3bLt%2BkgyDomGPAwcEpBqEpipdAVLkCcXoC9IPTrDEphqD5r%2Bw44pk0QbxjQKf7ldSAItW3sZ52668ohLfmhHvsUka%2BM27U94Uao7ZPhcfO9Joi%2FhCwHYGq58TWy%2BkXSPEYrqK%2FmODWZo4JIq4OFcb%2B88yfkAj7X6gJ%2FBC2IOvoNc722LPb1&X-Amz-Signature=fe4b1da99987a13721b7a7c8f9023096fa8baf6a6a62a8dc027c40e21a663681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GHWUZV%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEgQJZstQiHZtJG49kD0rPbjBfee2o0vIdY1cFcUvShbAiEAoI5USviscAkGzfRGRQmdN71i0LdSBsE6G2H7LZylVK0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDH7zywzHF1c1%2FrNS9yrcA8Rut%2B8n6OzpSrv3YH%2BDL3Q47Wt1ArwfUuU4MUrHCEQqt2bG3c%2BQ005SVKUDwwRJAnrTAuuo%2BdPtrFf0ICv9cGfa7%2FUQmrBWPNI7pi8g3nvHNI2uw0s8NCupInPrLqip56uYKM3x0V%2BZetEMHqwFrI6MSaXSzF9MRtJskPFGklcwNIF1%2FvBcNefvhR9EjhwGIyHTeJa3VlcFXCTGqg8%2Fn01IK3hwZfJu2ksn2vvlwOeOTWZ1hZumgtXE8Kr0R5FjzYF5ALCKOsVckAmBvW9a%2BGtu5OfUhEdr5%2BahGQ1Zi5sDGSYLbOY3TTOv5rIlP2TbzqrbIlemvScaylSXRwl7CFLPP2ccf94HXE6N0ZMXL%2BqddQJ%2Bnz0Hr0uJB%2BZrbnk1u9taIZPAAjPGUH0f0FH1X7oFLT0pWG%2BFKAJo7uP6A0iaiZAwpx%2BGo8%2Bap%2FHj04fB28iEUkFcD7rBGNciS7F1RHRP5uQqL5Zr%2Bwp8hPB0AmE1%2FRuOGFH5nQHDRe6qeG7GHi1JlDCCvkZr5unTwtQ8b4FwRzN5x9XiIz43SEjyfkkCrmphCwCabchUXn3OHB0LAsSQOwd4SaO1NAnj4znUujUX2nmCHp2Ew%2FD%2FuxAG86bocb1z3uU7CiK6D2boMIqp1c8GOqUB2t4NdU2abhvY%2F4FD1bk%2FQuQ23T5wY4EheQHeB3HBcOF2cKPq8exJcz5uYQip9ixF6HV6YAvC6XVkBPTuVfV4Y1zdpN%2Bk42bKuIhZMrPFBQlJPmBYx4R%2FRmQ7YlAdvEg9T%2FM3LTKNrONebCWyadmUybKo6TxwthbZdg2nljH3G8vw2dd1ZE0KuNZUbKzEABPkO24Sr%2FZ4NGJDbC5suLNG9Cl9ZYlW&X-Amz-Signature=f84b4cca8994686c3bb8a0ad817ccec74eb4795bb29e58004ad8a521652665a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

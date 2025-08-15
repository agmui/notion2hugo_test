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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BT4VVS5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDbSK8ZKgRIKZeq5nfWpMyHGHiaqQhmtubzatQy6paq6AIgNlxBRtj6J2Iiw7TM6TATsBboRy0C9w4AmS%2F5sfZkV1gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDF1RlsIN85xbwc9EdyrcA2a9f5AwemHdvvL3CKxzSTLGpWSAPKGhEW846cowsturmJSm0JnmqCUAkS39fX0DYWOx%2FUVltrz1jF6ehBXcyiqG4ViF%2BxXJ%2FX9bpGXY%2F2Mzh9%2Fb5mcj1IKm%2FudSwoEr5Ecaw4ITVMU38weI5Q6WmStVn1f79js0wB4STKjE8%2BOOEOZ%2BFgJWhvZzYywE15ZE3zn%2FdZjhzlHW81dhodku%2Fe24yarI%2Ff6xcGyhNVqCXHqvbxDXeVskOccH44iD2gKkBWJWxu6lrapdgdKXqrssdGryxRNS6G1l2n6aS6mv%2B95IMtjj%2BzN9G3sFOFtJvpEKbkaYruQ%2FJa4sPCrXt2wpWBMrPhNMuvL3wQyFEuuhnxyel58UqvWMOmC03vLUX33XLch8loBeLSMVlZQBEZnA2tz9mWSROehcTm%2B6ubbjsJgCu9VjLb%2BPGKYYAnV8URERwPGGD2qrrNajGfkDPwZIAVAsBrVRTDqSRpX8bllXfbQ2wtt4rWohsqBCVWCDGP8g6kFFc%2BGnaI5m4AKeUtcUA9qzBrfd0d2hM0vINbmsS8H%2BdbaoinojkJTsO4bam0pKfQpchKALQvm6P8BIQG4ZK96Vu1yDWbD1wfkaPeQ4iExG%2B%2FisgMiBknn7ScCyMJDu%2B8QGOqUB4ShOnL%2F14zZnsUorpCxtfVEOSXCZKOU80vY2f5h2ehfEfEp0QOcb4gyb7ClC%2BgXAsBH2Wb6APqmYFq1HyJgjG6sgAd0tin%2B4nDCq0brNY10429KNgH5doEzDNuCMsNkYytYEqAupWT26vD7b%2BccA%2FGDSySjpBc4hslKs8EHDQTE4nUjYj09USJBEHVg82LGMR0oNPY8WcLRb3URzgPuIuD9wMMVD&X-Amz-Signature=53fb744ef2aa75b561525f41eb8c80d4a7cfda64b848fb83585e385ed593bd12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN6KEDU7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFn%2FZwkgWri6WekwOjmCwoEi4Utpr4m4iULcfVQgbtYTAiEAs6EasWYU%2FtAHdQIh2%2FGzuUMqWfPE2vvaPOOdu%2BpYB2oq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBmgRwCq52yyyJa8%2BSrcA4V3AXgA1iMcY79ii2u%2FiTWiYS2L5QPb7wgvgR3HMv6fRbz%2FryPYC1Mr3YfmH0ZSGsqjK88NHVIheIDCZ%2F4WoCz%2BDWZMmNh77u%2BmMqWk1gfoYWq%2FMK47kdBIkHmWv9KTp5LsvvgP6DrMOjzProqqDgPvKOtzzPvRDydBPPaXMqPk2Wj1o8h0scDKpR8IPF8K75GecGevJtEuL9UJYOfIxIMyJLjRAbToGXnXJN%2FnKXhTOepxXyM0CibLKCPX0ShM4yOIg7WhX30PGjYcdcs1vbyoXB8Fmr%2FVi%2F0MIMBqaPMe6iq1NsJaLZns4LNcBrKqojP11T7FOk78JV5xnOpb8Gb0sTwlfTbCJxVD5TF0vSpoC6rrEu3xKSUyjcApfelgD4Xwbvq2NC9xVPy%2Bv5x3XjqowGvhAoOiry1c9zF1fxFB9dariwoEVHBgT2D4Q4188ylIwzVXPnek63N66hD1XySkQZ3aQx5iXYX6gmlRhogGZkCX2HKfAKx875Pgjc6aLoxq%2FHn1kImagA6VXiWPVhRZfErGuoNm2U5JqhDV%2BbkP8vZo4bOeCcsfmCSa6daRDflzQF4L7oXBaM5L%2FfNFaQR1WmjM7GBCsLgUYAeC8w9s87n69CDukoXBB8VMMN7u%2B8QGOqUBMUtjuBmLtqzTF%2Bk9apSvwpm%2FigyTSCfuZUfJQtNtfvuMxPYnoGSg7ViXy5TGl3dEKoX1MrGSBeOwrtSPmPStcsJ5j5i0ncAy0p7tdIg0wb%2FPZJvEQiQMPmTAXP0yG6q1ru5voovnCQRmrGY%2BUe8JMmpP3Xh5QVxPUv1FGz2RCexcnofwtOjfxAFZpLbvIw8sz0tO94ZbnPflERzxYgDpjskzzrDv&X-Amz-Signature=4d9d16721467ba84d045b3e7041933c6aea22760466d2c87b9bbcb4d14ba0bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

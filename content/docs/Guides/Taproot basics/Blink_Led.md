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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDI2QLRA%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvvolDwi%2FnySxY2by%2FPHYmue%2BImooP622CHAppuBabaQIgZTGjxJyys66VNcE53YeG4UoaYtXsPmPKa4qs7oPsJqUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDhavpNzfiOAqMwESrcA5%2BMuCd%2FxD5iUYsdXeJGTPXa5toVhNo1N0j210Y72RWUZUQ09gwZOhHkH441VUatTuQkiehbwRq42A86%2FgB3c4eROVhU55kz97x5LZXGzqgAcCqZnOGbqBU%2FmzbFpielYbLq9cZAuDGs9Qd8dWw74qxzB8kFtnHPEd5knEeDnpq1%2BPzXxDbeZnTPEoINthHI77SKGfoI%2FHgIPNRhI5vMVc6J2TvZj9AdVX8EYFOT74eRNoEr4rmyjsnAMkmXr0y%2B8sydj%2BMSmMLzmq7LBI0zc9MyqRic22ax5GHpH5LFLyzup%2BBHWkCT%2FinBDkhYx2olUUAjh6Kc5cEgninO9aQe7SgaR15WWUu6QVVwAqZcphvHdXCaARaN4h4N6C2gEjKy%2BTxrcA5%2BPMAl09j5Kp2sNBQZCmjGH0ThhUW4TBBKfSZ1rCKYEr93Tuo9ZEhFaSrb8HTr1l82Xk4SML0sSxaSeekmBASt3IAyMwr7hoS24NB1P7qXXNa7IrlkA8USxkElt%2B%2BUluc69ZZi8Tm25%2F0Vk6fm2EapaH5hpwUK3TzRS3jTTRrPFcja6wO4rzRPlZJNdTm4YTuNCEEN%2BXKwpVDoOTg3JaL6jCpP4ghowtRWGClPwK3agmvx95%2B41pp8MKXEkMMGOqUBZlDs9vfaeaQE4Bvn9mclOFtoORUJh7Jtkb3dzzkBotVUuHNh1n7l%2FTBf4bqARlIwwTnV3crTdNPZddnFcj2OS3NI%2FhbJipRlzrjrXIXKu5IAoTQMLrhw2SrVBEMTQ1ncEiSaFgHIp%2B19I8uij23JqJaAFcyWag4gVMB4AVBIMnBdQv8d2nZXzjLkjjl0aPHlU%2BH0mokDhsNoCH9n6qbqp%2FiB0jRk&X-Amz-Signature=77441f534a6ce581fb844a69c4e245e9da58e2599b17fd080b09d3b16e6f55c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433YBYSD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwIfTiPTWkp5eWIvsP6CC4NdCOdxbxtEd1cV%2FiPdfA7AiEAucds29eGuBnjIBw7mJeTBBUWapuzySsdpQ0frOICLqgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoj646L6IF%2ByNWL3yrcA3d4eXOe0YGHhZ2Vuo5HaE5mwW3qxc4VohtI4BxfsxvBtjtNuB3eSYWrd8uGRdGJNk%2FpCeSlxaiT07G5A9tnjavy4JgeDJUb5puJ%2B3o9NzTUttpMrvqU4F7QEb3tkoC8i4m3qCR8leRLsRetNyY8hxxKWFtwGCAzjz%2FrZJCRU8RzWXLW%2BqOq3Y9%2BQmZAoO6bYkr96r8dd7cy08si0gBl7cGSIedwHUQYq6ULQSxSzK%2Fa5DhcAqLiJ3ko9NbpG6o%2Fc2YUlzONo7MzSpb8Y%2B1hbk9qFFcxsSz%2Bau3m%2BlUViOKQL%2FNxpImPmk0pteigpcsqcy1H%2FisO9aGKQVX7yc%2BzZnb6lPdc8l9i6skTqYjIe9MrV4ixkGC617ODfiMvOs6JMlEN9PO8GdxSWbbsXd0p9EIaKnzYv4EYJ06uLAeS9gS5wjtkaxj2iHDtmXgqu0cTXgYJuDmjLkSCMl2x3fr9D6el%2FEbDp1%2Bk4KfjawwUxWg%2Fi06bhSK%2BJbDmwCDf3mt1C9eVuOXFvT2iCj7hscWdil%2BiLdH9%2ButaN6KqxPL07osOPoqRlCgKWlkX4dolQnLzu3Jn4seWvoMNR4c1HlYWmtNhgrvI1eBVn3m8KIkoQpSRazYLYZVPMR58iEpsMIbEkMMGOqUBcdSQnG6WKWakxPqpQVz7Cs9iUdiAkPP1PyroE5MBSo2dvYLNYYz7bUH46tcltrttx7QlWQzzi9fGmLBbd1Dc9fTv2isi%2BVp0MAit8M6FbEH0YLQOyGYShwOgl8WIzuAI8%2F2%2BAdZYtUjJDUEtCnFVFA1DYeSFHYIJL4BLaIRerGbiNYojL2YxHiKnokCa1P5XbdoQvRc%2BtQ8BYMYQhjAH7IyIV31G&X-Amz-Signature=04f402b75a5fde40718044ae15c56ee4eb155963eea46fc391e7d22268509ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

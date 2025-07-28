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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JACRT6V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH5PSCYWGLtu9x1nuQatS5vzJYlkoXiajSe83KSHkmkpAiB5cF%2Fzu8Fv6fRlg%2FNHkAUVW%2BYZNg8%2BfWVDBPGIL2wukiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMebxnuz9YN4DcczXTKtwDPPNR1X7%2Bq5JqZjQX%2F1EM6CD5LYGtOr9fzQNhgOsA0KgLYBOc%2F9fxwDCYRcJstOZeNXcA1H%2BEv66JWueUuy5Y82%2FVUObib%2BYOkGGZ9A2DexU4%2B%2FOLaCQ2c1gJhDdgFwOkBoEhnex%2BV29h3WzsSY0X5cCiSlxoQdC0Mb2o2tkafcg%2BbqI3D85BWrvC%2F%2Bm%2F1m%2FbUEKdJxyI9P4eKeQH%2F445MDPZsQudaF%2FsJbvidXQ8UF%2BiOiRO3l5uzgB%2FL6%2BIlcDNIrBy4gJAvqHZbh%2F5kk3JKY0SckyA8bRL2%2FCJLQSPaUDUK59pgg4e2MOPA3pHKRNkpPcrrQ%2BccD5hp1Ntbb4LDeR3NEowFqpy1ie6y9JUGiljRKd%2BDkxCaiMNmDCzmR70%2BGFTB6YuPVvSO9Ubz5Vc7%2FBs7cEtll5fsG8P8pkg1QqiUT92rvP3WqGvebzSql%2FpDoXpDpuIyo4xLeaJMLKKxhpwJNJ2%2ByA8ZE5fW3hVKR0a6GghEzM9e54ddvhOVrohflvjW%2Fk3JPNrJQCYZHm5xLvKJYn8WL3S1pQaOnBwaQG53Yjt2PGFD6svhIiloSf5Oy1stYTD16rD%2FQmeY2ejNMrWW7Ybrh6d7gJsqAD8ehJzMGUzvBYDQj7FoeMw7tadxAY6pgHfORR5PT3KNwcjA1deU2S7LIQBkDBQ4NDY48cLKvn7dK2PI5k8NeoS8F67WMhwDCOtufX6kc5CoIqd%2BjdDTYQ0atlq4VI%2BCqiglQRHA7pbwhSTZckRJ7YFR0eoMAKk3FgipL4NngrmycjP7rtsRQXhVh66MlQTXSYVyOrBRD7BmCalcRAfXcvM71ZRloTxP4fIBReCU%2BmsSdt5UNgYK%2ByrpuCQheLA&X-Amz-Signature=3ee9f57589789647a7126ceb3fea3cdda37f7b3a3541fec290f574b4a39ef5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK2XJOK2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGtCBoT1mfFEDwsNsFXd7wTmwQ9z5GHL8tbe0pSGdvYAAiAMinykTfvEqXu4BfGl38vPtDChI%2Bev%2FrM3lBg4SvZUCSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1kR1nqb9ejkKv7PnKtwDHfzFyfTkdEx33hlxldabsFcT36rwLX%2BI2mN2%2Fhg0EdJhBmueVxY8c19zt1pjnWiFi%2FSfwK%2FMZz7iyoW7pAbRN%2BoOT7ySkwb%2Fd8I6ailnoGV8tvD8QJEO549VrhiNiO9vAwi4eoaGYSBKraWwaKqHGhS6KYTe0hA8Yj5FqA5KNmNCJ9M5XIsTPQMdTgRaYKfgq%2BrxSaDbxrfHiNm0pPUFL6G5c7TC7L9n2HlgN%2FB3dTqcLbkwPgnu3ia4xJLsr1txO4oDpk7nYPCk%2BrZeV%2BzsjatHrX8cwlXNPCfqQXFCTlEdu5uGP3CDRS%2BF5cr22LDvYMlD6FbKw4nw2yybAAUSSHd1TKlFleQZ9tNQMIar8WjkaLVQG%2FseBdkmh1rgwlWb5eQEXnYXWMh29cTYELtErBUIPAuNhbHhqLIFyRQf%2FBrDGJWH2I79ZlgQUDLFg59whbFJa51cvffd9Piln13KluT%2FDqbxReiMjyoQBDvwuJ1XQo04oPijwGI7TkAJ6x5g14LRDWNhLple2eteR3f29hhCuQqQtkOLx5yR4ni%2FIG%2BTE8vMYNAh7AdgHTzyDE%2BqkWro2n9IdUv2GIu2YzuRXNrO%2B44fgd5UXgOTSSTZ%2BQCC%2BAkhy%2BSR0PwaVrowl9edxAY6pgHdNTYDkoalZQgG3ZbS%2FTvTTJJN1XPYTpXPMBoTv59E%2BctqPB9gTEljCFc5%2BTK3MFDd4rEa7WQ2d6k0yMQ8qlQXiFhooc%2BjFDo1cE4JmDxxLsah5vo4kxrEvOXQsApTf%2B%2BXYxI17VOXiNKr%2FDPz8Ot2uJmBeTAc6oPBkmbucGmIrG5%2BP1xwzhMXlo1uYItzHAtDeizxFi3Q3%2BndUMRg0lCMOYg8Qmuj&X-Amz-Signature=37918fd76d70e06ffe451d7d865d5cbfe29e4cf9d086395d926bcb203ed37f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

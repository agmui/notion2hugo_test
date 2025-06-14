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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UH74T5X%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDwzy4XYqUD7n7lanQMagvk78O14lfb3vNE%2BbHH1fKc6gIhAL4F5reRkJ7cZqz1%2FrcD0xxqsHgQDM%2BzjZEt3AW6gJiRKv8DCDgQABoMNjM3NDIzMTgzODA1Igxcr9QhyztjGV6jL8Iq3APSK2iJZhXX%2BHhxlyRFFcUUfx9%2FN6WByOr2eDnMXQ7bJBsDidv7R8NjgmND6DAQLSGZOAAC72TL9qrpeqqx9MsWAv5AU%2BOiMh5SUsU00Ku3ovqrquAn%2Bdqr%2FSTAvLBfOZ%2FXrqlfQkhjpx7cRyzS1470wJW4%2FFij1F9hgW%2FqeRUj7BfCljTSZ%2B5ymUO%2FkcV06ge%2FqKW%2FiNzcOo53SoHinF%2B5jqPFcHT02z8KJfpSnVSFeFbBIp6LCluuh4NsHKuN5Uvdxdvd%2F5t%2BPb9May0Uc4%2Bpg3a5h%2BIvqIPZ%2BN9Qt2bsyuMlVUTtW679evDo9jt30IRuGfElWaT5zEiygIcRpnEoS%2Bf1PDqQXzQ%2FdOOhFdRcScGreeUT0rKCj0zrYtFpETc5BsLJLAFTkRoEkHPcHEGVKmZSVze7pjPhsOibL7%2BSGsJ%2BZtNRX0lJCxXXPp6YVXz6g64u7PjjEX%2BEKdUUj5PcwnxgSuTX0KoDWRvK0yd8CqPC7vAgQ4ieezH%2B%2FlgdgHAkcTZf8wSjdXmuvP9m6ktSTF8oRRYxLPaPVzASfkk9wd%2FyqHlwgPFwvLAVMIzvaajGPHo81WZToaj2S3DO4XfEqi8787tbVT6wiDQ4PSt9dEPnfmlNHb3LSyCR6DCN9rfCBjqkAb6PcT8tRud0hokuTSJq92SJfwQ%2F7nZ9evqEQGYhdEEnC3NhPuCnhRowv8RCd7HmCXH7VQAQj6LIyQr9mW2t2X%2FNv5nYHlpLtkSAFcOu8EH97R%2B6ZogmCRkMf0391lBJ8sTK76CAQrmSBCk%2BKSGYRJMOCGTQA67cXjFZ7FtmnmO7%2BZ84Vnds%2BKLGis%2FH0K2fL8YkqG5x7svVecZMQTsphdC5gM4u&X-Amz-Signature=cc123eabf2e40bdb5ec67378168b4ff429cd8d230c066e61683bd6fe891b7d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SW624YI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGVa0eI4Hx%2BkoIoKvIZjSf6oNpN0S6KyQakkOtqrYOiuAiBQvl%2FVb%2FhibsBtt0NbCV9Y4n7XNB8SKO95lpgNnphGICr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMSw5ifCPxXKcjvtTZKtwDZZDmMprt4GPBITCKdjFq7WSFtsImCJTRZ2sjDk4Z5D9N0if%2BOj1ZmJM55VhE4%2FIyxiCCekOkQuB4tbquQSLNMSJaJ2E15k%2BSP6NFJVKbFhob2kvb1%2Bu3RpCnm17pfpcP8b4%2B8bzDyoD3gdw8A%2Bcz4DbQgKCPBCbbIADrgC2XuegOecEs7n19BvHR5k4TY4ya3S1wU7EYK93PP8%2BUR7NSuOXOhUITpZ4D3tu3CKr4jAIidjrND66TYcCpX%2BjoSAKxiNlp8wEcWDnVXgdFf7kHsH6qXe905xvI%2F21i6XR8n%2FiFO7beS7MSkCDxTjQ5yyCaCV9gPrNGn8KAdQHeNECLHkAeImapkoh33QE6LbozNICDYIqJFai3cqtSfJYgQahQZgLfcxYwnKavsDvqhB0Erd94TU80WyG6OfEx1IpGgBI5eyEtIdketG45FFsKbLpagwX%2B%2BB34JOUGWSHJuWOXt4xgvtA8d3aRNKFk%2B3SpWX%2BU44j2ipiXdVsqxEtdfxDmm2ciYOwPVzK3A2Wo2wjWAqvFCBBgR1BdkK07IU95WvQsjBrDQrtgpIZqXDo8IjRG5FK6s%2BFjDmWtGlpLXXpn9WRT9Q0NGtey963k%2Bv54Y2Ndgb3gSynjGD%2Fh9BMwnva3wgY6pgGiDz2hJbZKdAgsi%2FMEhA9Fd1MaYwVY1hGDzhIHghoF%2BWVYs%2F0wEL4izY5i%2BL7cGpdP7kRBnuDj%2F8pR93Qen0Zm7gCYYs1qVm8AenvOuD3Jgm1K7a0QiGDJXPQytlMCFhQbWEJb22fPCGNaCubPlyXdrAJbnNL%2FKgYpImd0NjnmCr6%2FwOmuNo%2FEX9QpBFKSwww6poOx9NWN0VQ4YIf71qkjgvRXz%2F3Y&X-Amz-Signature=c7ef90546a4fccee9bbdf50944b097fafedd381d1cfe29155efe7cdfec2deffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

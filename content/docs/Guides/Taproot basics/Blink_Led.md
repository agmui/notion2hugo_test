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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY3BIALE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHo1grS8iTzeevsvkgcU3laFxhQA3AXe9h9lxqxsSNUSAiBIgH4xQpsy39EmoRduoLPkXK9%2FH0ESycu4RKeIRtlLDCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM39Pazna0o421p54QKtwD2USLibRj6OArh8MidVgiboHcE5SRlgvDs9RMAe2TX0UziFInZDqTVsOMsdWlVWk76da9Y%2BC8mHX%2FBTDpwemV672j%2F%2BXMKgdW%2BbWwTj72Yfd815UzqGVKUfCDt80fFbN2kC2YKMwlMDbnMp9aSxjmpVkL0ILCD8I69%2FzfeW3fz%2BTLCOXqbu7Q7Ozty%2Fc3NdOgbx8H7QdK7W6BZYwWxLqxSOi4ZjozGVmxgn9hLgGlG5kStHDuwQOJne2Q14YMJAjt69%2Fqkqd1v86cljd9H7sjgsqWLsDwn4bJYI71pAasK2DhBJWyPBkSjB0ClNkGN4aXMgJGbJWQs6JVWCwM%2F%2FmuFvZ2LCTvQiL1uXyxSyWdpO87H7VOKYxEkW%2BgQhU9WregWa4tvP7dEIhb8RTQEAxzy271Mt3tDcJe8aAH1YMvuVug7UTID4KxCLA87YwZZL8a9ifbP931XHt0bZ%2B4z4kJWk5DHEbddtS0E6NGRPJaBTPwo9DkmNntR4kc%2F73ZuAB3GdCtLge8A2v0FOl5kt%2BOuyWwLLdcSXs%2B2iJQ4WpzNIBQlrDz5frEvvP41SzCQG04vjAMHx4m%2BzujyVvJVBuhPEUr0PlupJCXktz2dnNiyiwPJXQ9zBZmG%2F%2BzyJkw2f69wgY6pgEdvm2%2F9grDLxpbQ%2FU1Uw7WaNRGHCwJs3J6UflcycIor6TUaCi99pZpzgt0QZ1tadGyYyHBjqw6WCAvvMfaEHfXcFfMsc2%2BXAcjAkoBXXZe9BIiZ1fgzGTvCtuqFLdJzdLwlisDD4VDVoFEnl%2BsOoCC5maHFU4aieKrxRmaDHrO78pcOU6zf9NdGpb%2BUV7nFo1GM0%2Bu9xrfQhQEtsgadVBRUwRbUuFr&X-Amz-Signature=a8f6dc6d11fec2c8a399f568510d9858217a5c2d584f761511390ed4323be0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJOI3D7P%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCMoRBglVoKYYfYiLIASV8beu7hAP%2BM4rAqi%2F8uK2V%2BdAIgEU8szF2YxO3riyDfWWskZlFjcb4BHs49ovUvPfW9rzsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOfwgSzVKXn7s3uHtyrcA3%2FrwAiawvUYaALK70RgGsq%2BGIYFxqY4qChNOBTINJl4S8txYxtmY7GS4yApMgMMRD2xdvtwleY96tInYxlgCrhF5aHN8R2EUFJ8eAcJw1mXxOAx5pSmuQ80pKExClH0BiiKo%2F1CmD8dQfakX1OVKvgqA%2BFQ7q%2FogTiVQp7FuHAHMlUaGnasHjHL%2FSSUXNkrVLD9eoxeRsEiXWydckIxNb8KoDs5fsiEGSzkBXtWXK75dEBo%2FJGzvcEUcWAJ0g9vCsvlaM1aEmjsZD7tL7Pew9TwVkxsqwptUQvR8uHROgLDGOUEICbJLCeHOWxK6okxZPYW1mLaFHj5cgwzg3VEXhGUkmWgb4uMGSSdQGgYzpX%2Bn92H4jI01L3fXGTJgpfqMfSGo7mJol6D0CLzbb64nfngnZnHXN2nF6cCJJZVh2Fw033S%2BLxcIjukPGuVxD%2Ff8Vm67heOCf8SLC97pTWYd86aoCPBC4LNRsg%2FWp4YvAiBI4L3u0bmWe%2FnA8suUi%2BqwiBlnZB0kdVDIWan2kGOd7rBHcWf3TEkOI86uKqQCXeq0ITbgiHTcNC91ubrnRaC7%2FoDYPXrdySnEf59R2GJauQlrSIMaFlxzLzAzWW5rG8%2BXmiDvJ9jrpOQ%2BaMwMLr%2BvcIGOqUB9aP5d1EPLSFk4QYUY9ZcFZiSUXbTwPfWUbqxI0bpecgdeNcqJYRA905JdIInpmAYtmyXS0AIlj6YmoisdGqPls4Eqw0JRGQR%2B4Ro6nCYRh01Mk6OymZIVSgH0fULyhIxwn5ZzQmswA70DfxMDqi4%2B7jqPs4YfKKDhtAqupxSEpXoceN%2Bp6yF6e1PWRy%2BLVtAYZq5aXdSF%2ByMT4mBnml1ti5gNDkF&X-Amz-Signature=7d59cbe52dd90d6ab70a1bce1e9a32719ad916594299151deffe7e15ee735fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

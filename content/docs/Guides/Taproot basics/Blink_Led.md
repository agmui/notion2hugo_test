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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IDAWPRB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDyRTnemBMNooYLD5pKjV4Hk6URbnMcgp74BzovsDt2PQIhAOjhRvlpZ8THyUxvYvNDzfXZuSjualTcrTfGUPGusGy5Kv8DCDQQABoMNjM3NDIzMTgzODA1IgyanYc11dziNjCRcPIq3AND8XFMV9jaxEssdmsVDDrn8MULMrJYzv4qCzgX6D5vtTbEZOD4nh6j1Ly5t69E%2B%2BWQmMd9VKWNxs3QiRiJ1kk1EbAMUTTDbdNfpfymzsS2sAMya5m6AQwpiJ0qxYq4JTn7GryoHE6bjKYkLCKMsJfKqfOgViCOja%2BDyurO%2FMDjT5UXoZPU33yGzE2FXHY0c652Of87NcjMjBT0TWKlIc10E3wauJHox6MgBk2AXh80ELR3guUiL0wSFXQAX0dY8W9EiPhUqQB8BJucAQx1%2FESs4w2fXR1UAqWJJXkj8nGKWbKnenc5dYAPfbHVY6xjQBjyVvVBQ%2F%2FsTWXCVGi3YasTKhCLpGx7Lv9MljmnhrJJtsFS%2FB5ThqGFrbAQWG6yjbBzvmNFyHLe5sIMh35mANcShfJXsKqhtQU%2BLdEZkT4O45ZlSQu%2FKZvbPx2GokzPdtO83wDgN0GrwJKChtS11EIDL5y9EkNysX6bNdiQbW8AsZwp65DqmAseBz3DNYDRdIlnqq8sSgWmC8tgauzrc2w1bbskhtli7aCSA%2FI57bZThJhUcpBMmOVQ3ztIG%2BxuAFhedqvbG8wmwmSeMZxmgYHnmxfZDxIzFGHOx2mZh71chsys4tTQvq0%2BeXLvuDCYxc3BBjqkASAPAKzWtIgFeZiAzZPGlm4lQt%2B72FykWtMfxYC8XPc97WgacMFKRMYH4q55CNGelce65iNwFe5fWCiwr1S04I2MYXnH1prLzh0tobpmIt0gucJljWS%2FQF1ZvuM%2BwF9rqoXc5ZqKefD%2BHM%2FLzUgJtK9WhWp7CDV0WGiZfdsJzmC%2FbIziewSqtQohOM1JaS0ojaQWWJABKnAeGu6rKZm01GsfIsWj&X-Amz-Signature=ea9438eb8cb66775e6babeb7a270a2c76e7386d52fc5ec8069eca7ea0a0e8d83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ALJGWU3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBu%2F8%2BahJiDA%2BHl0VtL0Qs5JXhNbfn8zaFIc6wFVfKOhAiEAsgTcNfOagp0y0fZCFEAKGrauWtmdIINmM8PG7E91amAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGDDhPJR80dsBPJajyrcA71Kc3QGmPAzQmpWv4EsGB8Vr%2F5ywqHp7JlXWuS6DYxHertBQUWq6eN13DVEV6%2FrFdWjMnXwd2d5Au4foT5G4pEhqwv1CRE8IYe1h67A1CpgFtI2GZXQyiRjNLZNewSxsbvhFp8l4avrIjnzg83T8az%2BXUMrFAofZaRbN0rX43Wp91V5nC0%2FR88qjyrIln1wDZ4fBrDVhrQm%2BjS5ejaqtRCC%2FVvjtdd%2BE87U97Qqwq2qH3JtLduIEjJA7%2BE3WruJ7SQYNbm21ydzDLDRvQdN6FZJ9CsaK2OSTHUtqJtABfF%2BkXFnYxGrR0yWvFvOf4LbTkRXUd3%2BP7Fx%2FrWelMKAWkC%2BUl1gED4%2FkhKxR7MjHRaXbeqNbZRA%2B51IUBMVDv3BdF3%2BOJ7PHb2MDrY%2Fptj9usPIcWXIonYm067Q2dtxjq2dEOYjJHyZbFIPssbCfhTzHESwgMklU9vmQxYMHCcHO%2FhxnLZc6IVOn4BCroFblli5f%2BeswMfVcWrFFM0c1w34iPgMP%2FNCCuGBv5Gv2%2B6ikG3BPB%2F0D7ql6C845IXw%2FoZGM9nyO8huNErwlFc5YybrGgrgr69PwHAlfF5KLHnTR1TXpS4wQ84rVwTyuKk0Mf8A4TO1FLv30rsyBkJmMK%2FFzcEGOqUBnP5TmGZVNCbkHp3QAe%2Fm66d7fLVUM%2BZ%2Fiec6fkI4H3%2BTAPwYzhkD5%2F1YE%2F48varCrCgwG%2BIXlkBnmXSVwhOw5y6yX1XEeyqfm24oA239VM82ajy2BZ%2BOrofu%2B2YAas%2FWrkyUlNAgA3w0MFoKF4Zsm5SzYNtuq0kBguuIpfw%2BAq2ulF6ZKGRsko10pC%2F9KOFZQqs%2BUrzUM8YLtnsu1cGIMKFjuD4c&X-Amz-Signature=e783c06723cef173d57256b017b463608736fb2119a63dee5876cc76b7f34534&X-Amz-SignedHeaders=host&x-id=GetObject)

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

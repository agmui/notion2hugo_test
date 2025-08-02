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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT5H3LRM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeUKJ5wWn66F3SMxLNtVw%2Fm4IVkntVpKc1fDFv36hvmAiEAkLa03mctceITiXdYU%2B98wQITT1kKDKelwS030RpWjFcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLC9kZN13ihuTEPumircA6pdMc7C1SiE9Aag2%2BfC9AKyR%2FC8kYfeygEHsmMu%2BA%2FFU3KA1SqdzzKZR2cHXKVUpsW7vIbCf5n2C1WO3K6OWoG4cZq7SpJe0DiIhUnPng4h5qedxXRK9JcR5JZb1CAH6Am4zVhRn%2FaOsrOAv0%2BJJ4G2xat0U790DnDMjcCZMp04wGsZp%2FDxJGMpHxgL7Hs2deAgljT1nUfginY4BuKHTnWRZbJUAOTdXoLHPQo%2BMGU4Pi%2BFa7yDge2iNgKL9CFvZzgGRa7Y7iIWZtzLcd0AS8XZtujF3wosROhgPvqimYpOaR2xuPxvQfkyYm1xQ7G%2BTiO6WXDg0jTd8VxX%2FUCn1wxLhIBdnr7QyHyXYv2%2BLfhJi8Z237%2BUFsxphihM4C%2FemdUTwLEFz7zwakdU%2BIkZKGslOcMeRMHPeNT4j%2B%2FkZrBNVq0ibpp5HiLBIX9ZbbDeeC%2Fo5138eeiT7OJiOokPaTsgstMYQg95IGoY4rWwVYd5aTLKlP3qRRm3iCsKJ915xZsujBFQWI8KI9Bw90Ps19hNiofeVmLVVuW9%2F5ZjHzGUjEkcP3d%2FME8Ir%2BGPsIOmXQBBet%2FqFjjGo6FLlD1r8xklcWR6lwSbQkz1BdSl2Q%2F7eKIAt8%2BZBidCjzbeMImBusQGOqUBTBabX3GJLP7V%2BD4e0xRma6BWbTm%2Ff96xXD6a24jZwpAjNtGNgK825zs8TBMC4svns0ojhfdMcPSIy1IeYYs4qVVO3iNGgPiNBL%2BHdxl4fE%2BI5EA5d%2B4Ei5q0DWsDDtVzw2gRNrykCCtWoMgXQJwbDSOI1FjUL5xGCNWbkOaqW6aYPETC8qicAlrdUB%2BwZyyYPfPz08IaJfrr3UCBuIdaYCeICykN&X-Amz-Signature=7a38dde50e578609dd4c0613a3cff027ed42f137cf5c0ad7760f0e8d44bd781a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQA2V2L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmyL%2FBtSxAmnYt3OGOzfCE98MWpTEC3TlupRtfZALfIAiEArBxv5f0fz8WCCCXeQiA46ZIdmGbboDavRrGIvaopM%2B0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLUi%2BJxQS0lmO5jULSrcA1S%2FpZH3%2FCuTi%2B3EPaTS16CkQPcHmU556kacfqRoQbVo83thjJN88FIPSbgVlA4mzPOrOywp1Mc2EQgaOmQ8DljkFBplf1uoDxCNhf%2FCvIqTR1v7rzuAQUQIKEUSFtCWCCuflca7M0VrAROC%2FMwvtWsMpVV1A7vUrqOSJTX7ye9uT0F0eCdiC0J%2FI%2BpWNjN6n7NwoNKVZ1Oc%2BSvLbsU5apa3JogUT2LLRa0g3eWLNMOrAIihUhaQ71XNItzEhacyShKLeTRKE1WC0on5srrfWA5lTBekddRHc0ry4kBqtA0PbKmZ%2BgE3lCQA0fm1vWHOIyzQEct%2FENFLjU0TAVFJCDB1eCO7lDmyfOqHY31NRvnAS%2F2dXpVj3v3ADbgjjGAcCog3Dap9NHa1qRzxKyR93hbBkOo2wYRBr30OQ7ePZAD4KPFADxTkk%2BExWfCEX41LfQWpVOKwJXDALBkDhIHJCreyUpoV%2FrIXUqec%2BSvb7AhLp5QEU%2Bm1wHUeSiiIc0mLxVUYSr5YKC3wxN437M5PI33U7Cik6gpg0SNskIdXuBKZA8iZoDbxzh5amrcMHNbBolp6jynBipe5sBzcDHmPLUbnYKL8M8IrCNben5nn986wf6Z9fEqzCbW1XPwdMIqBusQGOqUBhr6fXAbgluW6vAVFc82neu8PhJ1UtNy2AlwsLermuJSEc8%2B05Z0avAdqWL2okL1iivEu%2BOC92%2F7i4R8TscRyBCxwZSeC0TwyTM1irz9dL8aco89x21Ox68ovxf7B8H2fiFRmDr6sCwQ8w8bj%2F6tumPV4M%2FVqo4E%2FcObPPnq2W9qrSjtYY9Llrk6w87iBJtzOYJsTzwg6tEvy7CLTLSthzMu0tT69&X-Amz-Signature=62d2b794f37a77fdbbb81d10144997d962df2c68a4590975638fec2f0063369c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

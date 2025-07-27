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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PT454DU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCuQ7mt3bdWY2ytyTbXg3VlTKBRxAZAdvBVcINO8IaMRAIhAI1DhBjJQV1F%2FQl3eu4sXGj9Uw5oZyH9jAUHt8PTE836Kv8DCHgQABoMNjM3NDIzMTgzODA1IgwOzxLre8mT506lWj0q3ANKIQF3pe5zAED9qIsLrgodk8g10tgmtK2qLzWyMFwRnO03UlpBXI2EwkJlTSL8FHqlO9mP7%2Bk7tGkrDXadJzBGEPDL0PL2MZgurGk%2FI5nxvvgLEFPyxfCv2WnfT6aBbwf9ubQvSxA2SQJDZwoSU11laHw2U6CVxGb6fi%2Fc63pzxq1JgUizLRGBqkFXkt1mDJhSRc6vfxpsH1W9U3LSMAgi%2F%2BYFL5UFVPO%2F0bbQFZMww7wqBQI0JtQ6J2irna%2By9iI2n%2Bax%2FLyJZO1a5F3CQ4ETiz1%2BhlwWcjuRpXKvkWWg0wpAp7SYGV4e9ZGGBeiDPhfe7aDZHtL%2BlF9BtoBcaASfQ7iRWzLH%2Fj%2FpnajK33vVX7YUDU3p7vSMTFfqaTz1eITjLJuYTCk5gVlFhJtdhlVJo6quzDxOXmgOTxp6T9hk215bQoqfTJ5e%2BFDxvtMpjVWX%2F%2FL6wVe89TLBHWcNoLTosAnOYykehs61khqxVPa4of09zt3%2BithN4wcAv2UOooAd5AOfhqwKmX9Qghla6B%2B86sJ305urAtKDuX9qVpUSSgZr1%2Fvif%2Fn8pj%2FWuMamYLMMH2soJonpI2u%2BIGt1JS2qjfV8zSpP9FYaxTSVO7IjHTcQP0Ab7I1koibgDDDC%2BZjEBjqkAXtkbBhBPSOoVL1AfSkbtXuIs91ueGuyqceuAr6I04oEBGA%2BzeeAJgunZckmfYkedObREJcQ%2Bp%2FSJ9nf30IHvPCEXnhHnqtpngXV9x9SefUt%2FXp6%2BfZgrNHyooiDH9FHann%2BxUMvWvvDGe%2Fa%2BqHERxtnwEfdFmDnJF7jLPs23lG42xatMUlU8Bzi2ubbBglQLMF9sHE2eEUlkxUHfKO66f%2F5z%2BlX&X-Amz-Signature=e5e2a4baf0544f5bc8138fe59eef37222bd1c800087b2b957d65dec1b2e4cc5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AP66TXQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCwGMdVx9WIzo6JExM7CWxPkWrQJuababqM35iggvY96wIgc7ynYrJcErIiZ7YEB3iJ4z%2BAT2BGwMJLsCfPfAiUf78q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBcCne6vod7uM35v%2BSrcA7oT0D%2FhOYNQBG5KeTmVQAnnLuOOu17Jx3quousWuf1zUOgzFoZaPXSyIqBfwEQZfOZTRFa9UsfGebrtNpJSk9hrsTOyb%2BFcqw1QJqoxs1GroPpQVVnRq5gW5J5xv4aFe3W4fZYwqg1rEYFjNHXr2MlkMsrCVyZaYtUJ2dxaP9Kv7gQvfsTZxHfcx0RsJKNnJD73OOWRJ7RfYIbOw2AYms6pZGUmbr2UqQB%2FPqic8ZjiVx19ySpXvxESGE1d3ssjpOPgT27zO4HL0UnHDCYID3Rgii6xSB8sUPSjrzNEYvzRlMp%2FQWx2llb8mIoRfz8%2FS4G4FosuIc1yQGJBDwW505SE77lFdr1fD906%2FSgpMbtvZb%2B1xoq0EImo9GwpfOP1PLP3VigN1IGKx4c%2BpfeNJnp24QWcg0%2BoGP73PkKWmH8La%2BrVl8NfxAET9yxoMqXkWS3ZjHXd2JRyqYSBKfBjprmkfKs1FWm4MkOUkOXsestjoRi8HpPZqCJQIeJr0UrCeLvPq1wdPiIumE%2BYHCRHO6jwU20l1zyqz%2F%2FRcIht%2FnO115V1dXK3%2BlofeJaPPiGn7AE0dIsSaNpXX1EWTyNFujxmUlW2PKbkGqk8XzJkoY1mGSpXpyeg0dtc3DPAMJCCmcQGOqUBOV0ettXNQ1jy2rT%2BJ%2FOCW2eGhwd%2BZ6duSXq%2F7358D8D2rgXcQ23wj%2FPosP115OZjfEQx%2BZ3s7fjhQ6W6vlpoM3i0KvmQt1IuK0X4BFUjHiV5iA%2FTZdGq2mb%2FyfC9cUkWm2I5n%2F6OpzCjBja%2Bwmp8%2FppGWrEz8dXbDhrczpNsZFSNoABM%2FQ3tn759U2YyJVGCukivrjjuCsfUYr3tcEtjtGG5xnuT&X-Amz-Signature=b4af1ad40834304d6b95ab90531ece693973ba8d29638cb00f4a11b942b6c7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

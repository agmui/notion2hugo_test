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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQ3YOD4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8BdkVr0y0htN2Z8Ci5R%2Bi2mHukdnAvVdQT0mJ3dh3uAiEAjLxYqs%2B%2Bg22d%2Fezq3%2BOVssOkOxRaRnPh3E8uFonuTsgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFl2AvVWi%2BUoZ4%2BsTCrcAzMuiOQYIT5H8eAebJQBw6Vr4ztz9NVUvplr1b9FIVkn76RYn%2F1R8y%2FSu4KPYx1xA6mLQ%2BZHIvhk0yeSHQ7n3FvMVmWxA32VjpE9azHG1DgB3VmDcX7HSDqPuc3EOkPiiZvnT5S7FZTlbOLZC8VEAHrxPwmboF7NMMNz%2FAwPgnwgMkFacHbZ3oMgJoqqEfTmJo7WylUr6KWtTLnDc1TUyBjSZsazX3%2BTExCsDOUx1YEGZ6VnxW8SDdl%2BUj3aQleZTxdFXFRCwVBqEbvFL9okHaY4cUiMV1zw4T4lWDsHrp4gM82grYC0NLv10p5ajW2EoHzsyFIJogaus0qeMeIhogE7ZSa9msgpdyxqtnN8B%2BnimeAjEccmBEAv4oK3lNsXd8FJ4rNL3u10TFHzxs4X7okjKEDbJO%2BYuNr4DP%2Bwhmvk3v3dkA8ZVib6wAi4K4UWhta5Z5GiBpNpKRYaxpbvW6zpMUWLZoHz6%2FdyAqa5kc9q55nC6ZciUU1rSXpGRdCDtFJoRbStxKX8izSiSxC3%2BSwypqGlM3xJeC7TEFt64xPejtfb5%2FLMhtXx1hr7kwy8ezNkCcDIy2nel9bysBoszFYJ4XPVAx8mMhnskzGNMfvantqbjpjwJ3cIZQ1tMJDs4r4GOqUB1Mz03Udgd0PP6CS32feWMYOf18vL3mdQBwK%2FjSyZP2USfFWzc2no8Iwjwf%2Bwd3NY6xQzmYasvkopGCyuFI2sqCu%2BBpJmhUQ5cgw4BnRldxZMALeBMHIVy6G16kac8HhX%2B8M9XIudWdHYEDi039VwcT%2BjR7%2FFcHOmiEwg8oxYit3g9jA2xJ3HtRZxRps4U8qF4At6sKHT%2F6v3mCug0E5itVlwCxoA&X-Amz-Signature=b03f3b420be208b1c2a6d9518a9573b9295c4fa4d6001e6d9e58fa27bfe8ccd8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUP4LWVU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4xwzCrzbUAxhA0N29cjeN%2FCo8lQzHoQO80E2maPcZagIgYfD6DCc%2B5ruV51cgAd3%2FXBGK36nscfWd0%2BZcCD%2F%2FNeoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHn7am2tyrQpcRzxKCrcA5WKlY%2B4Ioq0Bc%2BYV1Iy%2Fcefhh%2BXsixziTjK8eh9htrovbcMNChnEodir0G746Rxv0zamKCwL6KbaJfHCOE%2BBSR44VPfoBBSb8LBuWl23PtK9KjsPsOWobKYP6GsQwg2XGu7rRZfWjo9ehvttb0ArkvNEQctHt1m%2FnWlgbOxz6jkvI%2BaAPYxdPho5qCt8hZcWBx%2BatPnHoOgV0yrdxe11dHF2QJporzkzoDQmWbastNX%2Bzi%2FTMFwF20G8VoJzqj2aMncG87WTgd54JKczEmAIzPqxaVCSeGH%2FFPMi6zoIuGcz43QVog7REJfjvfEowZxpBdD9%2FgFoGvoqJhujapMClp2xfSP%2FKdwZ9BC9OQR4jb%2FfPfx%2BHPN91YRMw7P3KSwMP1tRFj5tNrUYFIwEe8CY7htBvEUy0ACWMdWTzkugv64UhjcW22CG58eQbayju4yz2N1uOUkV6hwlMJlp%2FymU2nu6Rc3MntbU3ei0H%2BB4CWT2TrfyOu%2BcnSQzIHec14cKxtkK6dPNKiGTTBw70aNHiejZNmfkrjFvznBLwb01Io1XHkks%2BS2yZX2uJ8hvLfl3shunYEMqpMjOhYaFh3t91%2Frh2aBtpsVUdmOsD2TpCuutM7%2FY2QEnmCZAG0EMMjs4r4GOqUBmTaH3Auw6Y8PdXu9QMr%2FCI8eyaWkza%2FIwpSQH%2BGOkMoX22kpOlsDg7I%2BYz0nGtxaJHuPLkTmyXKfQKXarIFNbQq%2BuzH8Lll9NdDNua4DdegjFVsoL8ogGKsx%2FQoJXnMmJigMSLv1PsqSBL6s8DMWloat9bayfK3HBSRG080ylwEa6UnUepOahJsY2p%2BnqFqqv4tEAo2zqEH1l8G6YYTe7xUf506s&X-Amz-Signature=245a4ecf8858279b95d84d322b72fce6de79f458a73cde1f5138551c5292633d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

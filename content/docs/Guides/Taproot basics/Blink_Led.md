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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CCTEUV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD80qLu6TZ4xj82tEpjDUVsPQrGl68bvRaYDIWbwnMLXAIhAI3a7UAa8VyC3HHy7M%2F6xNXcIisEm%2BY8QZTgsRN%2BU%2BgHKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfuvZzqHjeyhMF1b0q3AP9kBYwu0YFKdNthv%2BtZmKl%2BCenVTlV7DUiyupYmaKkEHz1otWOtOMIOyPMnuKSrR5dmIergbo0ar2fc%2BbZ09dEYFlexp51Y2HPM67LGkbQlp8Rj0NIRY1y0Uy%2F4c%2Fn9nr%2BKjnHHTsIcSplasbDV7hqVP5PGA1LuoR4WO4SPxTxfzzOd5Dk3hmsOAgL%2Fn%2Ba2OMT5CYOBWk9K8vNguYXKoxt3tM0QOGpGYiBzcT5GuTRJETMiz2WcYk4xawbFl%2BxImAYCwOsA4UKujTaWwm9YgMBznmE6Uzmtb2AD4JI%2BVpde%2Fckb2EfcWmw1k4BME%2FLCElMymlKYFvOeDX4F6v1xBiUiUI5Ee2xpbmFT2Y%2BCg%2FJyrkaHPJDi7ZpQ35qUfj5vuFtZaV5F%2FFNEimRRL9%2F1JffGUSIMsThvZ44JWGcxAMbvfiWus%2BGaWY1SYeACukqxX5ro8Dsyik%2BOSnFvuyWca%2BO5YSpYldldm08AA7DTUTBpz3SX3OLI0RSqoKzfVZeNq9RNlpjD0H6MyVhZ7z%2FRkh%2FUr%2FBClzYPJWPXNoz3P50tsYltXIuhvWboF9FFiIu3e0oylT%2By%2F7w6u%2FvnsW579H%2F5yAmgMcPk7bWbvaK1dz0OFxg%2FwuGqT6aA9hSmDCH0dDABjqkAc8PcMjdywYRWSPjnaOL%2Fo5TmZ1PiL4o3g1FRKJFOkpqW7vrVSY2wO7%2BHWpoVPa2JGQmoCiBugPemJlZm%2Fxsh879T%2FovgUiUcADLYiHoNZasExfkAgLDNitcsg9JcEzM8FmQpL%2FZ0Q0yD2Ucn0NnmdAPUq7qQfBPP4jgd7FVi2lxINemWdr3c%2B4qXmhiiE7e%2FiF0g1hmTtAdcmGmov8OP1t42uDc&X-Amz-Signature=2b0ef23fbca41550398d920eacf19becbb555da1b45607dedf9cca2bded94baa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645IHWL3J%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEfc38HC7fZnBhu8IihwxU3TQ3cjcRzU97dCH4Tv1GR1AiBtsyOQAwbki1W2YFu1XdBE468cgtE6YFIc7qkeQ0VuuiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiyxOWUvDmdlvKGpKKtwDW54pVIGRi5LdNxIbsfoyCobHcvLTrQpKFyjH%2F20GvYxRrSXdncuN%2F6jj29YBhvViUzj%2B4Of4AqcCfwcgr5WMuOPAm2uD246cFaDThsNsvj7Z9Ftj2j%2Bpj2n%2FpwODhG5i1kBIn5xGFHPxZ35KdKZtrRzcEg77WY7eo0yYhO%2BdnasIA7%2FiS7c%2BfZD%2FV%2B4o0NKgcay0k%2Bsee%2FZy3oD3A1cDxvq3HTNLhIvaM0UPIKKdE%2BcoqcYKNW9TsLRlcMWLlmR2cbY0z4oY2kC3oVLPjZXtnouMfq%2BWvWQvaDbQNeqJU%2BBw6d669Xx0XUiEY2Kh9tmCFLg%2FeSxtUh%2B7GV6osdITvFHFWhXkA40sl5NUNCdeoXnL0bHrJgvLzTHBS4rEnAQ2%2BoRBr7WVHy5MGwaaPXAyNlD9dq2prT8AspB58dBh2LfMH0QvGKbUK7HlnG6c2grHaTfsVCAOsTu9GXKxWRcav%2Fwr6pMDhMYsuzo7W%2FKwORdUbTqgm%2Bt8W2T8MCHCkVlmoQVaCz2EHVaMSCZxr8K306vq13%2FuLqrVnpyB0dGDOBe8aN142eUggYHGH0J2TybOQXQUGfh5YQGF9QUxxxGPJpWPmb9mCnjCdeItzYt2A3lyYKrRxjsacCubiOwwhtHQwAY6pgEiWKWihhfPCQyyfkv%2BQLwAVzRJJSGDwcP%2FFDqP6YE%2F7YHKflheSnI%2FopyfIFGzjsfpRB3SY2SwD%2F3%2FgKO1sa7lHzBkmxhFfDNAdQMdHBjrNdhs3Ajx%2B32vFwnnmhxF%2F6ypkeQ%2BI9TmePRrqdkC09v2F5FgVLtKzlda%2Bn29a8IhpPaf6PBZmRVe2V%2FVapQ5xW2c%2B0FnMfm9Plo1y0N3VY%2B2oVkOXUp7&X-Amz-Signature=dea8cc5e4bcace9dee47d655d6924a1edc1c9dbd66446f58a0b308931cf179b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

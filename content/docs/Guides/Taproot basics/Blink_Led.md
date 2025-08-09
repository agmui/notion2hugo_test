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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRT6EXLD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIF5WEb21STifirosiczVq%2FmLZeXz7ZKzdXuyiOjOqRqsAiByWcsZJLlNIkj2DsIwLEfeCr7MhCPGwNyi3Zty%2B%2FrtOSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgfjoFjTJWiapKinKtwDq8AXGxya5gtfUfC5valrOlZOSrldbqgorspYOEYTtC3Ajx1QoPa1ofXuz7%2BH3rc7VOXoVPkneh5hAlRqx0srb9R9k8RwJQP2SWlU%2BD7KMxCckirzzgugZvUnsMnAlk0tMcdlwUNDqXd1Umg9G77XgHmAMorG66tBBAoLu7vbM1t9q3N3fLxb593NL7nKb5Qv33RPeBDmRy8tvjIcB21i3cUD%2Bsfy9Ylyi%2FOSiNT76dnjK%2BX%2BBo8bCCCEcwuYAKz6QzFwG3cLTZ9V%2Fv8mcjbdGHv8%2BlnyzgFUfIcQGoOxThSuxWKxPxGhCcD07AkYKsPf86Z70i1HP8KghqkcrnbXJdTlACSZ4%2BK%2FthXhHqpXPKOOOWU7KFbz7VlPSJj3l9GvdipBVVTEnib9Ycr5f23Kh3MlUk9ybigC4yHmpcHyuVlm107B1jPRMj7QFiAkuW0AHxg%2FwVj%2Fz7fPJ%2FbsjSFL13NnVsAYV703iGCCT3Wr83L7cRq4PK98jEdQLF442J8luUMa2rMELT73e%2F%2BiDMiI3wHW86WjtVIdPLw0SuS7TKi8nL9GxaUB3IBDhnbcta7rqgvJftj92mgDXQaZpLqmWCoZQVAKQrSdskJrzFDoU%2FOKXVl36oyA%2FI689Vgws8TbxAY6pgFS8F8Go2PlGdAHA9Hl85UsZQIFSdndtfXzTq1CBAwDDaj%2BQN1i3FUIFntEITzv2sEvfoyjl1ZAbDM1xrTzghmA7u9vHvnZpDqb%2Bbp7amp9BHES1m4wqXYpEQLT%2FJlQdedwRUEy%2Bh9%2BuAUoUBn6Bm2u3P7vh0%2BJ%2FWoslqyxeMtfeIETYlFMKRINMo8SdtNN4Tlgj%2BPqmocYmD5DH5fs%2FoUi5ixT6f%2B8&X-Amz-Signature=57669372b5747369020297b0c2b77e2dee87aaef328394fb91afb2bbdfa0b672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNWZV3B%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4%2FrgXZPX1u7ybSpn%2B7LISEhPpK6kN2E2KSITF3fvligIhAJaPI2KKoAPtU63Ry%2BCOBv8EDudbAUVcl%2BcaQadKG%2Bu0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySHtbZH28IT%2FJhgKUq3AOqWhOsyDcJ1LydpW%2FXdplfoQCHN1EHoq2YaFr8isQHwXuFIz8jwfdE90n2DfoHtRMXqQtKNk%2BjoTTsi%2F%2BCfzVsRcY1e0ys6o0No5DaJDyQPar3jnkbB2ULu3jubl1NHQxC%2FVlbxtHmqkEM1QRfzOBrWCOqH6Mho6XxkzD1jQoxnm%2B6TVuFRUYi2Rx1C8c6WOb%2FFT2nx7JqgGG5RcaSvwvuhhZAH40PZvDuLSBvazkG85nX%2BJalbbs9vQojpJ1pTeL5%2FhK6bjUvev7E%2FRasNZg%2FkORnfAI6ae%2BehEGJxvYF9oxel1qQ4vp%2BHCrC6eIsGCISktIVBfClsgyFBMTXOf4nYN4BO56kiVsqf%2FT9nWSU3SnOsAwR%2BOX5H4%2BS6Omf97wSK6JOcg5FO3mgaa4iqUE6qEzVP8%2FM50DPIqSSJeH2ZMpm7ez1%2BjvMHqy2Wajn92RDI%2BFkkgoHUsn8FbQypYGumLWEVRkRKzH0sqO2rNYaD1ag1nsfgf5N648PPwTnMQXybfj0y7L77rKzio00xhxJSgvWt1NVXpe1kGKCe22fU7BfUiaA3mtUGukDc6NT8QXKk47fkTC%2B62eqythYSJLi9bzj9KBMN0SofdYPs0w2U6G8NnU0drc3PPdlOjCUxdvEBjqkAVFnTa1itD%2BGODylJe85DYlyph8BuELKsETJgVgHEXAVAZbwnL6xeueAZzcjXGAqmc3mXybmfuz7iF%2Bfnrbjsw4aA8IDWKzDSKW23Iq7pjma5nQzJRIY1aMT1x531Q4ZN%2BZVKCvdHp3KYgIinq3r0H8tUoNoXNdqe9H3Xo%2BoiKxA6Fe261Ahcnwz%2F%2BWNN8ojSlTgaIR9w2lMDP%2FcvzQfb9kyv5F9&X-Amz-Signature=f774be5701d50f3de176685e8fa275f1ba057a45de414a3bee889b62821189dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

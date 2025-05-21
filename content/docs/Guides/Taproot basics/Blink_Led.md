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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTG4SVP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDNH%2BQ93Lt%2BFL4QseGkJ6ft75LITTZo5uhj1aeBxpJdMAiANbDkPmKsr6m%2FKnHYl%2BMiowaqqjbJqoI6ki3B4RlHJRCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMMvnCvuWBnUiiTYKtwDPgU3tCAaSrGNiY64nbhhXdEsRDsADtRhBu02yvQlQDFUcpHCckw%2BtAEfHY0TcWDaa8briW%2FWdZpWr4U5bxQjnndBy13RQtsFMakHBbrosZhl3fVPpOcL0nxCAUX%2B2iKrDyy2%2F2S2V4Exq1mgfCdDBgvT8Yoc4hmeFaevZp9mBJLI5o93L1KHKe%2FaxYHCZcKBDCwT4SPNqJcHlfV2K87VPAezERtecjcTXMwZMY9vjV2tByn7EO3zht%2FcZXGjow6n0ELZ6kXTbWwddrHNIKXRN%2F3KTm1qY4sKtLvXakrJBXHggYP%2FWMP58aNNUpaxLbjQVTyEIcciVGkElkDPB%2B77LMuPkGXzKHgAdg7G3jn1%2Bj9UzcPt3BPT7tJbuRB5wWRT8NUhohJK5PVIX2zNQ18NJeZIlRWwKkvo3qjKnSeUpLg%2BIyvgkzcrSKLM2IqjW7KfG%2Bz6Quie%2B4Exu7W7qobvvrNbyj%2FjE0KzDVIkAZ%2B1mnvRNXo5E2YraoltOU76fUYIdIJgKCgt3sOYVNw%2BSEIDZQ6UsqXQLreEK6jkT%2FdcrQmJ2pUNhn2%2BewXCWmgGaIRgtYKzxPxDCLJ8b97zBw4wd4E8LSAZN5mCXy3NG9yzySYUOLwAr9EM4dqNQMIwu6G5wQY6pgGM2Sbsh4HsQXa9AdvoJ8WIjIdGI7K7kmZXz4zFkyylhOqNmKaQg6fro4yx4x%2BgqIVs4c0P6pDNonbRJq62sCQBetWLni0g8%2FE96ErUZvpTl6YooTMeNYuL81wy1E1hr%2FZZkqnmtwiuj0f1s0nQJg0p9nKQAw60bV1NB9oyr9%2Bk1wyC3Edv%2B29MWVJR8WDwx8F758S4aqxuTALB%2FqOXK%2BfNEUIjVAPS&X-Amz-Signature=0ac9b557130cade46fdfd7f6786b71b512daabeac58bd19b989ab2499162903e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHAWVFWL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCg96%2FgX4yTKr68IRKOHDu1%2BFTqZ0SUiJ7CgGr%2BJ%2BM8mgIhAO1ZK%2FELv21X67XV3IDT%2FxPdNl3CoEsZZakQF%2FDfWegJKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5lL3NEJamOlygrT0q3AOYS5mzvyyc0ZXwzX%2FY38cPOHdRFqGR6AX7Mk9hsw4SjvV6%2B5UTzMRRIVNRrIWqpGuNiNjp%2Byh6SIFp7l%2BYxhDFLaZiFuHTDwEGGsyccgu7U4Taw4HfuqKnVt17JvvVnIoSM%2Fuqf3nQ3wefjfGC07an6ZzpOea9%2BLYDQl2HEChKKrADYS386ylgNO4VX8C1QdlaY9XQAi%2F%2FEaobk%2FnN1CA%2FSINkOM2bdl2Y00h%2BBWbjrSCyw2eMQi4P83AhrFkfHAYrjarjR0NV7FIaoHzfCq9782MqEi8RemzOqtqZH8zVFIw5fIAro9b3Sr8v5yK8ftyyTjE0Lph%2ByuGvdGfyu5TLCseTJA8rOuOzWya%2BjZ1g6Ga6GL7tYYUXot10ds%2BuyNDTOjQR2cjBFsJch4VD8qlwCgpQ4uUlWyO5TusmMGDCXzWAthpvmKJ%2FhDYXXjcuwBsBKd7wJTnp2Qc2FHtcSO5ZyefOnHNE%2FUQhR7PezRYD7k8n2J7jsUzeAovmUQkmP%2FCoyEBqjAWMeBJt90RX3WdQdAk8lYtXxHEigQ5bn21gJ8VF%2BEXoFFptMWOIROfZzoQj5KzavGZ4EkxGFH%2FKepCwFcauZIlxb2wb%2Bgj43G1eercLGRadX203LEVL0TCNobnBBjqkAaFvWzvaFNUraQEBZ%2BZ0XrV8L%2BTGWw3GFHE%2BriWmLk%2F5zTvsJ45iJVuX8iLA4vtTMnGAngVFQ3OhTu29OW0lT%2FLW%2F3llvaZG5hn2R%2BloqZ6avgR8fEgbbUX%2BFtdj4qYucGxY5QhkRKOKXLZ%2FSHm1x6pCajmBVdRRJWQ7W3l28HbsBSql%2B8TOHet6qiy%2FPqkCEn%2B2EkikY1lxffM3%2BfVsMZPEsUYG&X-Amz-Signature=bdd27697823246260b918740044fb8ad39e78caafafa25eb79ed18db2276c962&X-Amz-SignedHeaders=host&x-id=GetObject)

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

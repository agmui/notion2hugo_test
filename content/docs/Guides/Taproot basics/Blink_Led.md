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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZQLNPHI%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICxkeexSaC2Q4qJnBJpDTj1Hr0tuToJuvD4l6jhbdE48AiEA9b%2BrTNQPIQPzkEU2wBycbZZekA8JQs6KMPQLwJAlbr0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj5BYyKfV8WgmDKpCrcA9r1pMIjEQbCI%2BBIah56ojVgFNbk%2FPv3Gg%2FOMYn5Id5dT0CGuxCdKNBIxyyCwakDLywtoJLZyjkpswQxUB0lT9iyFi%2FSHAECP1WBUwJbEQOYLQ59t18TJr%2Ftwsq165HG6NIDnjiYtDZCc9s%2B7COfZWFZD6e3DxXpHWyRt3Hbx9A3n8YdS8E7dimDUwDz5BypTC28m5UYATBK0AELMvEHzO4SM3ws41CBq%2BxdgRiJGcfRN%2BBZQexoAx6JyLGDnBP2Jc7tE3k%2BEZ1ySCSsmfGEFEd%2FzPl%2Fcjax2Em4Exf%2B7%2F%2BGBLX25uPtzvY9YKl8rSFKicz6W5z6ME1eUfHGzgP1nkMTnFix4cgoL2F243CTeXN%2FFJZD7%2BvLyr5uOmbgTm%2FPJo2JsXXSxcHzvzVAyJ0xyBXBKbr0yFO7JXN8NKraWy0AjTPbv6pk33G5xbHBYSsUOcoIHyibtCpHzNFdBHLC25OMSnppQAUpHwdMEgN9XD5WN38pm%2FCqPOtTUARwI37oZvWtBqQ1S6Wct4t5bFU2E4pkMVecMt3K04EKeqGjMILo0VwvU8rEJrh%2Fnj2kRpbIw9%2BsK4QxNDFw83uvN0FHT4%2FxGkxBiQ7y70L9ZI188EJ1eOuRbkUf3g4kpNi4MMOm7r4GOqUBWVaLT7zkWgB7g5i83YUqX4PtZjAlrb6Pr7wnY2LOdMHQYSBZqB0yUGZbBX0Qb5qGUT7McwwjWsylwj%2BnqGgxb76dG%2FgfKNLG9edcZdR6G1kK7TC8zGTFwYT8dxmO%2FG%2FtReUFIUz%2FLpKRhoMdaZr7CLziEv17%2BaNZAc4N81StR4b%2Ft%2FlITDYY83WdHFjFgLJO%2FRatd0BOWsxJv0ubdZ%2FsTEfM2q%2FJ&X-Amz-Signature=81a527c9205df1fc71bddbe4ef2ac2335c7b2414d797de794d6b0a386205305b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBS3ULAX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFaeXIrJ5GQzki5M1uU4tfJjpHMNEMH7XJB%2FsbVd%2FF1DAiEA3Rw6TYukphdhVtMj%2B%2BaVgt0FPhKbzjNEqPpIponoG84qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKc0SOLtknYDDsI9lyrcA5VqjDy7yXcoXWLvNE%2BOCSCzIP9PzW1VIQgIngvEmbr0IQ3%2B%2B2bFbJ4ZhdseqSzPc73yTM%2FCC832lRaabDUczBbyVWC7RODnxh12TWcCN3KaPoefYKMVE1jQmQ0wEUYYd4AAxQ1aA4cQ8COM%2B3scd2zb%2FjUiWVFFV%2FIuGzaiqgnyILLiacIBX7CDhcCcKiJlt9xKtAEGYplRu1SXr%2FDcgkk4bqF0tOHNbwTZA8vOt3FLMqppSrJ1YoyHOunIBrbt0NU430TKuGlbVW5oIgEbYNNkBu48ez5TzNwVwEb%2BaQnBeqRCRZ42FyV2l5yYSr0ocNIQfMH8ao9gt%2BZ2F3t%2FoPpKgNlhIRfN1jaIrcFEYAEnRXwh1npWc8UlT6fiZgUSQ5pH3SKrEmMOIeaIlpcggUAfe3XeAHbhCtWYAGoOCZkw6nzKBX3yfdiBZwC6zWPCu5T%2Fro535kz1SLfcIJvQVQBcOmpmjNkUWp9g0%2Fc5GkH64FekxrNJY15iEZJynEaLl5QmBQ3bQ5W00ObtMLyYUkclPOCfNyRblF017KRNS1DgjE9P2TCyYZiBPMHqXLOiDubqCw%2BpEFsotu5DiRls3yNDWgX6zN082jPr2jCjsu765Ugs0YhfhrTI55gaMOCm7r4GOqUB0Qq%2BJTV%2BorxxruRCGk%2Bdjp2iV5%2BwVf4YMIlJnI%2BiCO6huBllTLSSLgPrmOD%2BizhgUX9mxc06i%2FiakFUYrPkqagtW9cst%2FftOQjwfECSIdD7yjuZINDz8qyw%2F22H0XE2vsDY0triOrEJ7cxX753gVe3XNrMQz8zJHdJ1a0%2FQ70PZJzVKBmyu4Y3qQsUnbRcMVr3ooqel7OmpLNlVtBZtk4Yr2jokr&X-Amz-Signature=3ee2c9dc0ff63527d94bc388c1991edfd7fc19236d653caad1d61f438c169b51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

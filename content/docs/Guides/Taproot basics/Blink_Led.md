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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKC2KCR6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCXrNpqhuzm4aHC8U1i%2F7xHRnBxt5QBXwJViEbjRlQhFAIgeFNIjnTuDuDKtIaCKyslcQMiNZ2BOgoeYvKHMDYAKIAqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQTMYUqqAJB6BFe5yrcA%2FywjtCUahiUWk2i1AlPbURhQmnPIXiU44qo9aL9ZyueF70Dr0JEtjFYsnixq4x%2FT35W5qdB6DmnriIqv12vMKlz8CBr992YK%2FxktYMVtfbdAvk2vgm2W2uNAYYJqmt%2BtbSbQwuRGfW2VxmKkXUheX2xZe45LW5O93hWx7jcJMba1gmgxEMROb9ntIdVkA8cRAjcr8T9w8YkPD9Bg28fnoCOilzKk5ueIEmOO%2BxYQAGf53AqBUtj%2B%2BWDQ1YN0ABAIkb0LEfxrzZCX3Mam%2FslSfWQLcBjdZjW%2FlRjBUJqPzAiIqKhFK%2FzYyVJ5stOoqtEi%2BivPiL%2B2XsJi6nIph%2BWpxqRZ%2BijJNLtlfTEQjZZSx%2FmpmwiWDVpRbwbMAcTBKM8HMtjwVNcbLBkPTNeB8YdMaCeE2lmcsFxpnpjN%2FKD5mo8cvo%2BfqdN94Me1DRjIhCdtWJxAfyOFWIy3j7ZGq5EaxEI%2BRFjPwsxx8hf6TVDbrqLqF%2BPblZguIXQHn8Fnfyz7TOa%2FLjmv%2FM8%2FQhloPW10WWSRbfYONQj0lj8%2FuU0CJMqFHwxwmjTYVzxJWqPV8s5oKhFEhjS0ahxVlgr4wHsbCC0VB%2BM9EugqC%2FeBU3pPeT7omqOoRDqpJzdXVu0MPLp7r4GOqUBtN9MKRv6Zi7%2F9B4i152nKQhUD4gorv%2F%2BBtlgVCmMI%2FLhRmRJrrIyzBQr7Yqv4VLDl8Prj06Xo5bs3mkG9mrnYfm0NjD%2FQ8gYX%2FlCohjtB6vw99olL%2BKrSnmyOURoXNc%2F9chRNwjob3rGo6m7WuRN6KSRKWXIdn2HWhc6yKpFGdbtSI%2B8As%2FSfpXEA6iiIx8BMDd0aqK3bE7Qva%2BIbSmWkT%2Fz3oJQ&X-Amz-Signature=2dab91c2f0e6c3f0a2f507124a985f3b3428ba4586f925fde2e32a971e9aa7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ZCESZZ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGkLWyD8BqwMuxhRR1MLPAQ6FpCWyCQOK46VeKb3VAT0AiEAwWIRjlPTO8grmpoghPAgWXLylSBCUN53G3fdprbta5oqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJW3J4C6YGvYbn4dtircA2Ad%2BVTbGVWnmgl1CvC3t9Qf4EP1If%2F7pPqAYxgVWI5BDNJTpA5nVL%2BGmqSmzulC7x590CrTCy83RUm0dyN%2BKqoJ4G%2BKnozN2S03RfVA9jyLOZmW%2F2w1QQAU8oZvDACe49WNkTvbNl3gYNzQuUBHJMbSPErNholF4DKT68OYrkqMCvPLEQXhRPZI5qEnqrGbWF%2FoEI13IGSccpc%2BJvXjUCxVxq42PVrTaLueNED7bv5IammMvWoZGdNARS0iMSjXxEIhZtReMm2t0%2BN8V%2FJn9ggEoouyJKxA8R6M5NL%2BSJMaYv0WYaZaoFzuANo%2BKfCHTtGmQddFTQmpp5rfHOUapZSyORhOF9RH0tkZDn884nCA7BMnqOSOwLIirObzj1AknGtc04m9D7mrio8xtkx8ItWr2F%2BN1Y%2BiNA9BzIuJ7H07jzRUDvs9BMWLMeFFCaqSfMdYPCqCc6Q8xq%2BMmG8lwI%2FNtGZOzuBYMq%2FMOXu2%2BpM7YyqMmmzJ4Mm%2Fly%2FB1EDbTQgGZ0gKMg%2Bqo2mnkrjTGsKj67IyEKmqxQdoKohdErMEpDJlDfPRbVH6YOglCrusmvN6WmZYdHGMBZh5QioZToF6W0KpPG%2FUjzTzwFWbmCsAzu4GpKlDGFEgrf0KMLHp7r4GOqUB%2FVvQKvxfVwi1sJ9WMlpBmDUh0%2FZbBe%2Bvm1jSwGGFl562EQYJKcRX3QFonwFuhOq6SgwFXelsm9Y6VNoceKld7Iu9KcbtD3dhnW35TAuitZzTsFtbAbwo5pcoUl4QHU5AuTOusg3eeB01vSvab1xJbvXhEiVz%2BVizDJ2sRexKW5w2me8YHjSgYZOKHC042FwyOdyxUOuCB%2Byd9OTS2oXybiVcuprD&X-Amz-Signature=e605129351a8b014af27acf2911d5465aebce49197625fd1947c64c8401b3cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

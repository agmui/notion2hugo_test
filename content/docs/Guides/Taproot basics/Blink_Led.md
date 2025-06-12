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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQQENOI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD%2BsTHLYCLx2rTOeZHM7ag5exuOutP2WntvGHl%2B2IsygAIhAKndQpwhRkV80lUxx6MaStNliyLaMmm%2Bzs2ilCesU4%2FhKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuTboQTIYB5Rd7U94q3AMrHDY1adauScrAAv8fPZr7ndNtNRsnjVcS7oW2wY0mgU4mnN62fqWTi3r4HgAe4TkBlJc%2Fd63l1iMxtt6MTEUe%2FcwO3UYlpjU2DCjHhWZaXqbt87qAwriwEB0wAKX34jjSSUTrlqCpf0syzFI4uYkPDzRmBSDqCNQQDn%2FweJxCoH0iD176530vktmx3lspvzTNWOfw5AwBM3Sd%2BqkLBKx2z%2BFBnKAHNY4Ege%2B0C5JLVWSdqzWxiyL7IY%2FHK1Xu19CfPoOkbPX7VTgbtQ3VpUaHj2Z9Wks7hX%2BhSE3D0Y7NFfPFA%2BYGjXX17ywGA8MiN45xzMyCgtL6fXyBkfhyJIz8TtMb1zaLAL9xQM9wDXHlN7uiQ7yH3BNhXQ0deL1ZXdmDA3Dev57dkYZnF5M793Lb1mf9kqF8LUn71GupeIltZq4iNh9klhA4kcCbvaOYR5pqaKgv268X%2FNrYN0nsz6L%2BdoRmg0L3CVaQmsyyDvGZWapXUnnvipn8k9KZf0GaW7%2FYtfJ%2FEcOZwDardDkGcZtADARNN9%2Bpl%2BejhXZgDI3mEcxkKvH4oOgCsO3xJyvwCHj7uTu7MokY3XiM6NEQVottR2rGQq%2B5lSdX0XnCQTqDEjOm73uzGPE6e1Q8YDCss6rCBjqkAcdXhH5kMbrB2pVYlW8HKHX2xX%2Ba4Mfrxzot7KLr6HfbmJVVhEX6XmcuO%2FdlP7nfgTDgM9Oxn5DTb79WAylkL%2FBIgB3jFoYnOp%2Br26xFJLblWSdPmkzrK%2FejhLRWI5p5B5Py65T3wG7Oi1iCtraP3KJTVWEU20jX8Q4t%2FCkmnOVY0ELb2qLOjixIRsULf%2FoiHBkBmkFDZZKyRDMoV3NPi19sEK%2F%2B&X-Amz-Signature=4c0f0daa150ae3aaf8eef3a05193605d6f21fe246b2b4001303d22e9b2d1cd57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWT432HG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDxyrBeja%2F9sHdIlQzx8JmhT7tk3%2FeSiOHSaP4Z%2BmpUCAIhAK6AXgJUN8IUvkPS3CYqmKilJs40rZ9Owlcg7BGbJQ87KogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztNW3a8WguOCfo1Dkq3AOczqFc5bdG%2F4oB8BK9o5mdjn%2F4vDUqK8RiMQWghsdRb005H1qJYhnyqigIrvXKzDhey3UkhPEQp659KI4rhrVQYD5vpA%2BXnvYm5jwIx2kCXweyPHZGdOBKvK4cGUq1qsMx0NtygzXmRUJibJQObPOk6mfqZF0t6Bx7gANnF%2FP%2BSQHvuctIzFkaRSGppflWkMftJ8LoF9LaZ2N2mpjleW2s6fIW%2Fu%2F9T8RnWlzdR78w9K9AFdO3Vtbm5ImqmmRS95fijlJQIVLAunrPk4GH6H6vRqbhZisTZ3iPitB88fTNJOlya6E3X8559JyeANwwAF6TCi3WaNrlkpb294GGOPY75a8gvn6Ecu8PW8FJH38pPi5%2B3lofltJag79mV4L9ICo2hv5M2RpXdtDHKuFjPac2upscVIiJyeL%2BEdcHU6qPWruSgcUuP78sLVehn2TkKak6iTO8DpWjUvBPAn2cwrRmX54JsAxEVbVY8T77rM5OmEVONuNK1HSe6aZI%2FLvvJvVUgXvuvkPyfMFVya0eOmGGdSzxVSZJORzyO3%2Bw0EnJyHFtz6S3LHUurP%2BH8VH1Sor9xJsymnkVeTs3TxXPT7zIJQSrIHGQ533x%2FY53xW%2BDQxAOgGAwxaX3B4wy6zDViKrCBjqkAWYMCXG7DifctormoovILJ2h0cAoSMXKLF8DW80a0apnaLpXa6YMXYT091oVlOHJwzaNIHGtkSvyPMQTW6UPI%2Fkgc0GujEEuuqKVW6FnwO2FVzDF0%2FNCyPsJ5PlI6eKUkDv3r203hwT%2BMEOcT288ZOfpfv8IyHYaG0PCixsd8mpjpEIcHJPS%2FWigeb6QMqsgyQ1MzaEzKQ1Bx9sjcwn2TmoNJEqi&X-Amz-Signature=be412ad5bb64c01cbc145675f466c97f47468dd51dc787e95a2d65a0483d3a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

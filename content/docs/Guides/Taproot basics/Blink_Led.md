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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4TPDAC%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDvpExHG8fYEmYlO%2FspW5yebFM8mamTptrqTkD44TxstAIhAMTwBwXMl1TUNCbATd9UCnNxWDdK3aPIhdTGdWJB85dRKv8DCFgQABoMNjM3NDIzMTgzODA1IgwsnVsFdoKOhgGgTe0q3ANKygEMkQPWp3h2Ihczhx0%2Blc3QL4zJX5b6Fi8AAGGEyKNjODQujqVbZAt6KbDkzQAPM1egZJ88ZVxS0QUTXWLf0Oxn1NBtrbBjPxKvDbyyO5zOaxYoKayHLuKynx87ugL%2FFUp8j520DwfRqUaiB6KMyM%2BbM2VbqAdSG%2BrUERrkLz5b31jcAw0YDpvPU2lOQ%2FJ%2BOSUBWy1EAaF4CBwwq2tvmO8XbFraxqh6paVTTQTVD3jMqVkXKAKKYrPVg4gf55Ygq0d9%2BVlvdxnzziAj9v1o63xe26E31Z19pui%2Bnf7MXDeS0j%2BizswR6Tq3KfIg0KWyoi9tk5Y9p0%2Foup34Qdjbe1WUZ5E%2BHpiDHSn6rIjST8fe3g572Viq5ock5cy2ztoM7IDpFP5DGjF%2FRQzg5nojLiBt7Bx1QEtejmSsSSzWCWeIsK7%2Frs4Trfu2BgE94%2F%2B2cVTSggn27szJzhuQCTWnVSskeDrMXov5MbvHEILclquwiuzz896OTIya4Y6pWAjXLUd3hn7bZVw6iS0BSo5XD9e5zoJ8kRrW6pCAHkw81AYwZovxX9Ehrbr0GIjlxV9s1zii92dwRFds3gV%2Bek4ky5qCXi4WZiaanDeNhKnNpyTXw5zMK%2Bmw3REqDzCY6vPCBjqkATynb1Z0V3jMjiR7n2r%2FDnUP%2FvNN%2FETXbp8BKxoEdIBlYr6Kuju0wy6paDR3l4mgx4dS8ILo4PdmPR3pRel5xdCjMsKTVA1fvLG9WQQG%2FSGqysYeV%2FjaQ5lORyOA%2BT26eKY%2Bl7H5gA%2B2PE2mkg91YEhkCso3x%2BPT7vh3bOHaRxzyQu%2FG50Lv2qhx1cy9x%2FGWRpo2hg%2BDmG4rI8vr3ZcbYL0WS6w8&X-Amz-Signature=890438dacf3374715e16aecf3783ee672aa1427e1a315af981a3fb186036276f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEGCGJB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDbbOTzXIJAW93z3PQiCDuawJlbOQacExnKEdi3kr9D0AIgPX179L0IQv5cypacIyP9gPWIWfRw7TlRAyIWLzA0m8wq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOFrCaPUfF0rrR5AzSrcA4nhk5DodFTzsbrFmmBAaB58YaYZ2sUZWNSDp%2FI6Roq6%2FX0f2E9TPgQxTZXgs97HOoDxCl2N18F1n6oBpQYjGcsG9bZaTPvQ3jfsEwJOhU6CiLnyTG2y7PrecSpl0sepzSH%2FVoaaDjpVc633j6mmhBbOlYIlVuPvUyi2hRK9IpgymnCETwqy3FNAVV0bVNyKosLCiQ3kEjuTMfZ5DDXOlkwul%2FTMHJuhfcR1LI1%2BFaoff%2BQK5gamg2gshzUTloPCs38dA0U8H3cW9ma72lReUQA3zEUo%2F1nNSRJgzPYYsdaPC3X9fEiED0KdmvtsL31WYvc5VLZgak02bdRGISAsQqyiFqrC%2FroTrjJ7qyNyHkuPxTxIGte79ANS4hG3FxcWOLulx45qMMKBEhyyO57a9bqCAInHmofL0bMxmNdAvT7ROY7cGH0inu%2BjhZnfeTcOqwQigbZPmNP1sBV%2FUD4%2F5BeoTIWWreYgu6Zl44YJ4q8tcxhj6oy199zLUVaTr4tRzqIaXAi5M5LjZqh7gQIxUa%2BfwQrYmGHozs2f9BjxZyH70mdfT7BynjsSMlUgRI3V7EANeNluw4kUPoJvAixBRmCj7GskqlO68Pyelu%2BoDoIr9alCS8%2FlXYFbjhM2MP3p88IGOqUBB11bcBipmMiwVn%2BljMdMy7Ws%2FbE%2BPkRj%2Fqj29MOqh5rOMYmTBtc1UwhFKFJgZFhQZouFU8gYFUxqwHmpqv8XnjfWPPVP%2BHpcs%2FSN6rnlfIyKvTjuKBIlDuI2YVkp8AmSFXHFm%2F3xCMPNaY9o1eTIz%2B244dVvNrb80%2B0ymEGK8fON2CnXfjhaIKL5bMs9nEPPv69qOv0uA6iYdmHDyS7jYAz1%2Btjv&X-Amz-Signature=04aa0569215a8901499bee6f3db9f73244b8b045f57955e1510a317a450334e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

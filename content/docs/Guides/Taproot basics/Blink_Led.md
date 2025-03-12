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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U246AFBC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCsqoLDNOBC6JUNpgSuDatz6i5QynClkybaa%2BDNneMx3QIgQdIbz9hd8KlYe80C7HYcqMgkqDwW9wsTf%2FEj5LefTKYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKehdVK6CtMBWqQBUCrcAykm2S4OGqf%2FsEzLn2%2FIuD8wNfjtcXfRhD6DqWnr0HlcSPqfNHY3y4%2BugkxhuqTnVpVEANmBym2pUU%2BT4viEiz3PcWIJ3DI9ZgsJFhPLFe2gSn8Z3zCV5A1DnurFmNfe5kQjoeebrW5TQdrE%2FeMX%2F2QUfsruxkKxQCiruh6qlguPxsvURDzML%2BH9Ib3I76iuzI6n1%2Fvli7njn0aRfMK%2Fn2Rew4sqkWkM4AJHe%2FVLqMdkjw0LJpE4C3gtpoA5KqiupL4xjWOWYGQqCkkRxp1ZKcNpIYzc%2BucyStRuG4iYykmxvkAPu8HFnnP78g4yWVYljix9%2F0IonUhj0TB6Ww%2BjKlKvlpX3x6dDG90ysO83TlbzTziGce2SJUd8RgzpWiKi0yVQOEFU7IxNtLoMZeUn9GncvJDnyIg6tPMjWaPhCzTjWvatAKe%2FFqVl4gbH%2Fd2NAUORBJ6vbUY0OFLHEWJMuN6PCc9iFAGqGBrMJzVQ48eXFfyC1ht4ptvjtz5Wdlooq8K2i2DOSiRNDeGzEkUuJtn9UJ2n4vzdJvGf8DbGwXxgO2kRZAgHneCBJuD1LNKu5gaE3NnUpWGGweszroa%2F5rBi4x%2BghcVLHCIQlgSpuwqYDi8WmU7UXWgoLiQpMOraxL4GOqUBMOvLAKLYjv2JtMf8elAPLwOM5Xx7GsRHKe1a3zfDTvQNX2GsYl%2B%2BscYzjWmiUhjX7Q9PUJV1wudKoUo%2FFw98vrCioxs6DvMRhoMb1zC6HT6T4ZCYJAjr4MOOuq9zRBn1YbQQ0gKONrUy3eG0SLfu0BviN%2BjapoB4FynWcNfw6JJfjN9R9f4KUWueL2HFCgB8dmyNrPpNy%2B2jB%2FcK7DuWTFV2lRsc&X-Amz-Signature=cf45637c51baec4e19d7ad76714ac13b2c4c42c2786b7d7552bca9ea8a619960&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4J3NLNA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDE0EvkbN3wFUHwGrPYWAuEYggoVv8I4U%2Bt6zgcgipOVAiEAnpKX97eSzFv%2F1KqjvzscO2nKzHIlarN4G6eOryRGGmsqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxru4Sp0ItuviDIqCrcA7vsa5N282jS1WU8B8vPBkR8b5gJ92jKnv0YIGW38naml6PbLJkBP%2B%2Flor3dLfsXTFaXRFjEmI3gUsecRnNaI8lmAcjnuy3AUMW02mGrfIOBS6NHSyUyyR0u44rMbgO0Ji6QETa%2BkJy4vaXqr1OkWfCK%2BemyJ57HY%2BPPqpzq%2Fm7FSqlb8ynMhoH8L4fM0lkeujrgOwOjNIYb6vjj4dQDgqNrxYuG4yDrjCWoWE1WMxDCFmAGYwdojWvnS5r2S31yoTS0p5y5Qj046z4pQYgwkhZLFwbj3Wi3zECkYD6GlerbPISlGSqG8rm0t0jMSKkuk%2BFZXtoBJ5rKk7KbzHSmzcmvZq3qaxCX%2BvrAWal46k7BW6xnNi08OhXhG2HXQO5Z5kLcGGABEHVBxbyhVHzfVRMPD6A1PtavYjMVWOUJHEAuXYx11jgZDUYgAj8EjQrRAHvXsGUELhCnmQE45PIi1m8EB308Iub3EH6IkyD8LYFPU0j3TGIFJHl5uL5pgtmecoQCdLKQYMMf3pJluroJZSkrnmhQms%2FYdcYInQrNWJR2wazecg%2F4%2FcAX3ufL3ubiZ8w2l4YybSDaupAo1ZOvWQqi8j1n2kAX9iORzTEjoTgAqmbo1a5swHVoDj1lMK7axL4GOqUBDRbel7BkiSVlnTplmuJDiWwdiLyMps70IVnU5mnL8q06%2BMa3Lza3mcTTBZsh%2BwIJpaLe6YItfoF4oXoUsKLsR7RJSj3Vr60qz9Ugtc1LfJHxUDBGRK8yYxDlOEaUiz5kVzlQ7gq%2BTUrDEM8JQS0qqH3v3RLNz6h0VLDKoU2c1h3GF9uzg5dIWNcNr6Fszu10tp5AECyja4ERERFxGws41uZOdPC2&X-Amz-Signature=8289f03585add38ac3304abedd2e94dbff4f991e50e3d01d7a75450018320d58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

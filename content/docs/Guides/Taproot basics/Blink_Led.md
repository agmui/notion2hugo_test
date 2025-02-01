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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSKF7J4I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4L7KV1uW5rZbAsFlS3icuVvuqo1y0fEOyaLLkCWrMCgIgNOOJ4bTwjKvW%2F5KZKV2nupLG6DTz65wUexcS%2BV5x1gUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEMMoRNP%2F4kYYAIWyrcA8ufBK7lHREPa1L6ac1ow0QvValCFR4205eKtIMJE%2BXNBYVB3GpNHkXTlwXDAVoZNsEK2ZsxPyycVs%2Bw6y0U5m3thb7OFodEV%2BqetbAJzYA9PaH3d66Uf2wKLi3MufEmYTwclyuxM%2FURZZGNXjuawJCbWGT4rkx6ccF7mpmQyG0SpR1sax5XkHtvR9%2FqVpg%2FRnlax3FhZHx8jThAnyi%2BBb6uOVVmE9UryZFjuzCjJcERiFsP5ygj9ivnZ3FYsir8x%2BlZifkRA0D0%2BgtOLNfkiceL%2FyR6F1qcGN72Th6p7QC22JYcrJ3hQAXMXWOMbLbih7Fn4AMtAyBENetL7cw3%2Bx2hhZKAQ2f3BoiDXV3fyI5g6CH1IpbnNSeFifvSqg2UQjGdPFGx4q3TWD1dP7jtb5Biduui6eBrOxPYRl8bmbnXqHNjv3WDwhXCkfiNKtz%2BYOTf35e5H1HO3Ya6lp7BGL08MOoHemBAH4z2uFuQo7kc9Et5wolZcwCrb8A%2Bg1guEPpDwG4Euy%2FQ2Z5XITCNVo%2BKLfJCu5atfCUflnUYKjoAWPuS1Pk0x7QRvhh8vXLbNal%2BUz5h39M0APyTRaXk1CzG1wwH32qq1oM%2BnZAiJ%2BSWqDvW%2B3fMe0mUl2nFMJSm97wGOqUBtliG7dwROCifGvLq0FXUy%2F8Tg6DHm%2BTYR6gAwx2SeuIX9pSSi9qmFOz7r%2FNTz1g6VsS07H2Rf0oyaHxrWF6A7DN5ZhvH%2BZA7A%2BO3gL2%2BwPH979807Z644NLXA66Jy30Ji5wjhMxzijxCn3nEZk7suCAGvfYyma9AF0l%2BYgPVaNk7dEKM6qbPFL5P6AGFQPx9Lx6y2%2BWZwyXCY4J4CfRtUovL2LUv&X-Amz-Signature=ebd5a327d6be9fc7d5fc289bac678f37837f55e18eb6826e818cfd9ae7003d68&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3T6HYMR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGR08ab8y12tfRv%2F02nJi7vyYu57Kp5PqlYW92Ls3N9pAiBlIJewHNcW1CfowUF1NelM0irjERKDb7wn6cl5TtNwwyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWmIPkdmoka%2BI3m7qKtwDYrJMYwfOEjHysWoN1RoPhDOVYvR1G05XGL4FcPGA%2BG9vLOQJVsOFX1%2FFM9y143LB5OexINo%2BnK96omUXHN0p62jiQzSuMvYgCJVzy%2Bwxu2V91IN5%2FJm3ywiu6aV%2BHRQbHqGsA5UPJYlIUeLsld9ecVhOU519GAWGHtkXn1A4qL%2Bkbn55KJJCvdfDu60HiuLlpT0Tv0QEChb2kJXAPuqC%2FJ8roY0Sn%2BJGF1I7HkqtlFEXeFJ6wvC6wl0L45hEBZKjpgLtBjh2fTksRY543dvKXMum3FnbL52qbH07b1DighA5BZxqXz4xo4PXDxJDEZofE%2FiyirAfVpfGR7RmtuWxfJYDSHV8bDKsosITyYz%2BWOn%2FN94VAnrO72jU42Vz5Ma%2F68WxJJEzdpeoUIE%2B3wX0XB3kWoTm9MR19gMwAcXriMDe1bg%2FvRm0I996rsCjdl8i9uDN6%2BGFQJT6s6OCaGQHYCoeZlxgYf89%2BXpstd54mj%2F4yahfk8z6WUWT7XPU4%2F0TS14v3gaFiT%2FOTipaGyDUgq0wBc%2BU62QJQDjug8MMHb%2FuF8DaAzvDobJEMipKpUq%2B6KUX%2Fp1h591yjbNJMufhEgLUn%2BCTazZ12dJZKZAGO3js%2BV0kORUwle%2FGu5ow26X3vAY6pgGmZxDclS14dKsKj%2BXiz3BpcHSmiq5qwWSsg8QzlMygUBnwA5jnky4034dwy1z2ahwwlkYE0fB33FWdXG6Fsr3axEahb43TwQ03JVOrrm6oWitHZz6i9FPE0ttKfmFS4vzszjal%2Ftq8aFLofp7ynRkdYeewyj8qp2qAV4ev%2Fwe9ZAWDFOM104KTZSehSr1GDttQ7SsVEbjBXxZ15aRiJJK9K52nGEMZ&X-Amz-Signature=fee5ad4842c7f6569af79c46fb4b39a51621ceb99426bf66bdb2f25fbc2511cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

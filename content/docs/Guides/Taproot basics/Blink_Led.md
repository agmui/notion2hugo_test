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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NNKIEF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDsHQa9OjWzwVIz%2FdvboLEJQN67JQbchb7i2VT9jTHDEQIhAOeCTH5%2F1lMy3PT8wzKaAw7LSoKzvuCnRy53okgE0%2F9rKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUdeZzcf2GI2%2FQinQq3AOdEqcxzebNcMktTxtvse%2FCiYEX5HmjAA5fwmC4%2BQQTF53tKZYRB33STOObyP%2Fxb4oNWsNDbcGPbzDnM4%2Fc33p9oaC019Vgj5wCe88EB7ESUXgiNz9i9fd09oIpDkdKz%2FeTj%2FiN%2F7D6GqBV2EsxP8QplIxe9jBhrZ3lkrXfZIrUxkEMN%2FmmZYB0obSYVh4Rj4wMuBwWOQaANieQGF2BLwAd3J45UA3azfnb4XVUV65zWhw%2Fg16JqWNbFwvqaZJk6HDJ%2BTHVUr2N1l4eNFQ1sNyx%2BWgvurjLn1r9O5vUESL8qAX04r5yxcNmXwxfh%2Fss4STz3Sh3UdiUd4aqQWvdNkSiIlGi%2BYI2UG4QNm8U%2Bo39EOcMOfnHc%2Fr6Th2kRG49tlUQWZz4tq6cs8pW4ZOE8S7VWaEbvstgE7ynCwQ5AeVp9bUHHmYbL65kP2eGjWENatq3RH%2Fs7dWxcL5qle95f6mf2TbA6f3gK4ZH9aUJmyXozME69oZ6IYO10HSCIBzUmVNFGf%2FboFyam12uJYUwO7jhT2pdjdKMdt0Fsx3UlXMaRd1Ej0NGM2WhQmIOSKECa2MjmcFy%2FvYEOhdbHEKxg49edfFRMIhkoFU9veZ7PUlSZ8%2F9sp63HkeQDSJLnjCb1d%2FCBjqkATSqx8KS84QBfxdH9FIc427Jfr6uSFlhYvO7ocOD9DPqhMuMMxl7JjbJ98IvS%2BfS5nfm6pj2oy%2FxvvFmXvLHXlzgqMg12YXh%2F2bKYB7Ivt50xQILHzgur08GyJ%2BCAU2iR8AbSwzWTcwdKm8kBGT4mvVBNEJxfiCV5UUvcxmYqbibiIBqSivkw8YkQwt1pf9tDb0PMqPSxYsRd6zuiQQkec0Lv20%2B&X-Amz-Signature=b6e5aa5408b3f248ea53922a4e36cbe0a8d9ef4cf2ed9686cfa8e5585e3d9bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647OGSUYW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC4dXiXdWB0aZ%2FCqWWERblj0dPoG4K5tN4X57jXRi%2FD3gIhAN4%2Buy5Xq2XJesD2ct6KRUKV7NI43G3XG19hxzsyiuvpKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJMiyR%2Bc5YDVMRITAq3AM%2BDVGwAa%2BneElQIoO9e0U3pqyCU9vLnxZ5jH6moNa%2FCg6wHPzBPdqCZUc5j%2BO8Xeaur%2FLu1%2B9o3tLKEewnp4R0m7vGwl35y9UATPNHVPT5uXd7m4A%2B9nlT0J0IEtA67EwFmZUTzijneUFXpMonRnYcIVgvGQA4MXVICGt%2FJGDkKuxCuvGHsDTEXk499%2BihztBuJp2HbuDEnjhnCwe8boy1ltKvkOJ8Dv8PCNznNvRvA6%2BV0qshL2NftPoa1JJ7y9dYciBhycFdYdIWMudQ5jAlTc%2BtSU1xiidilIkCQKF0Htso9sBlkzkedsCGrCBqR9f6bJ0qzWHc%2F7xRj7WPnNypsNJy%2BSwPGIGnrloqSc84gmrhoo9dSbkPhtdZKI1ix3z9GFM%2BMutL135AMe%2FCMJivGraFs3Xq5H1rzmJkOOBaRZfGJce6N9HuvKqRrdN779BVmOUmKfcvHw6wrXvPwjXPN4TovYPYuH5hpyjYu4PGzCR4ejjmhpTjNDBHMj9AlbKeiCbAHzvqTlz1wgFJ3LZiJRwFiteOoOdzt46ePUKL7%2Fkd8U765TphWSd5ByrjSgMnILtSoOSXj0VycH6hmj%2FQcDoVpjWedy0OUEFA0gGldsiaJd2VhiprqlKAHTC%2Bx9%2FCBjqkAWJ8EMpLhc9RY3i%2BpjAvNLNmJvVYS%2FCBAREGcH3ZIKzqH0ma9myLgkjUt6YZxxYXJ0yFthDGXyJE7UeoeXk8fWk56FrKSBzt1vzKHpw5W3OLkSb%2Fbn2oU%2F37Xc6SqOCXFheKPFqr972RgryAFJ6jORcG2pQqSy6dyHQF6RAraQeddSbmBcioUqEljD2L4bgtWnZBYjkol%2BmcgeF%2FQdZ55ks%2BqIKg&X-Amz-Signature=9b5ebebb22b2096d627283aa2bf0417255aee8b67f3f8cc22ef863ffc20ce97c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

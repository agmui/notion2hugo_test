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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBMKT56%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7crcJh6vvxrhPJgpWT7q5ZDXqonzF3S0br3wK9zpH%2FAiArsCVvDRwuWLpNQjY6aNFe1e%2FFyPNe2JVhNEw5g0Xg1iqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxrBCLbP1VbEsh2SfKtwDTaZuJ%2FibGDDE67f1YChzS7lRz87pkgFji1XSovIuuTEunUA0ru7GZEMjeQuBus9MEyZqxaM0Zh3NnSQcKZNc6TQw6Jo56c7qIKBaz%2FtltBeG%2Bafp3U56xrkztlZMoFUtFDWeoWYoSMqLTEr8pauTVctpA7eOkr27bSxCwW3CliMllxFIF8iM7Q9Zxb0Vv1JS31KvyfHTmHDVHQi%2FGLlz5xeul5znrFVjT928noq%2FnWdvi%2FFA0SXfXmDG37ivqGNjfvlzM9QQeM%2BhLPmL%2FMFGpB1wZQo5XFMUgh2U7HbYUQQ7dmbkevq3H4xQrhBybglQvz0vlChj7GGZ0UL3dBUb4dm0Gfy0ThUrt0pwQ%2BQ0J9%2BQbIG8ts6yf7B7JQ8%2BvOKDtxt%2FY95z5vS6f0Vc0CStS1OLkiyP0M0covvrTRtMtnQQoC4l0fPZkUjPpmVB08YOPr4cNSlroH7%2BSwjU53Gn2GDZcd1%2B4QJLB6lEpf2UuNMX8ol4RTHflX27QGQEv91Vh8tS5oLZpDQsLPLGJVpImjp%2BP6Li1ycbrUlDw9F0G%2FCsnMVtb3%2BnoRL8ru1UfTHgv%2FeKR4SeCUawlCvCvw3bWvkYxVU5Va2oy%2BLThiQtySIYoLUXOAIZ3k%2BTSNUwuKrqvAY6pgEyvbX%2BEVUqzEaXMAk%2FSw9GhFtCW30aMFlQ9qX7Y5HPm1kfygOp1FjOvXbvcVw84oZ5ljdYOgPoG8kDIty5cpPYTqkHQMALZcMvb1sR2%2BEVOsLm6WSHOjJpotdMNaqfGDO2YFe1SnJuMgoyed95v7wYB28YBIsrzwms6GhCgcBa2tpLijAoA9k72nHqRs8DpMZ1PR9wRFCM%2BOIcvL4z3YLH2Xuw88Z9&X-Amz-Signature=aefea79a171375f58eea7279cd2b3bba92f2f1461e04777c7796d5578a9bbd34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662C3P6HF%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOo5K2jkDzu%2FdyFWAYR%2BIT%2BxHKVBVheeViktZyLJ%2FFZAiAFA8yhbrmKzxuUHYCVQaaPQO6izxuz3jDSFadELzv9wiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM71HsDF07bJ6MvCxpKtwDNo7QTQB%2FZiExUCjOF9quWnGVq69May0IMteDktPdH0vrG3wMaYU1cj%2FPBXiyYC4e7OxsFJ7CqIy0rXTEDwq735WfZmN6J5MTaAQxvL4wq6%2Be41iGaL0KgW3Yu75TizI377uqaFFq6YIkd63fXSn1DFNUlZ0W9i%2BQB3Jnf4LorvBsEFWcHEsc5dB6zhSs%2BBjcNN6vupBkmMfe6YeaeFoo3DfJsgRkWrTiiMzJA2MWGdKVw5%2BqhRbeu88qRBoh1hTz3p%2FTJGUdGYdl1LrmGjxm1WzsFiSVUbppkDufD4%2BzkYbzT11YvBC2JlKBlp0EkUzBYndDAx1umjHSjL9pZMqpJvFmFzWrpng7PAWJjx4bUX3VlaaBZY2DoX51rHbOycPzFZ0I68xiAWt9hWYG99BAf2zvOn4Vu4v7ijDTwS5VtXELJ8a99Z9UGW%2FSWURuWKcVdBCGn1z4L%2F1rDEBW%2FPrx9BCfZQFAkPfHIAPXrFp50dpW7UNdxKaQaqGasZWj0TVhEbckwDpFk32P4zK8a%2BRK1QCzGZxKI%2FxcpOEjWU7Hpl3TkzjL5x78vgeGT5Q0ecaLmxuvx1BDTBFwMjVNOr3O%2BPsLUWKu8Ot8w99ra%2FDnYbxcy6OfVQoPB%2BHqsvgw%2BqnqvAY6pgEHrxSeZd2OKbRg7NjhmjbljYdRgDY8zQSabSTSxFr9dzsWT6vIO4w8wQ5hCXfhtTdhL0GnJiMaiUoafm5RlAEZMh%2F7ObmnY5PrF%2F%2BQ7cs0lYMkuXTz7khcCW8sLIC3JZU5ISMOIPnyKux3%2F%2BYr3OcXJ%2Br6tcPJkEGhnr5qmLEKYDzUeUuKa3g%2F4DMv5uf2Pdv8xnRrJC95j3wnDnDygtOqpEsbgAxe&X-Amz-Signature=86d4fa7e22b123c3666042fb9128ba1580bc1121aba11763f21709782079bde9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

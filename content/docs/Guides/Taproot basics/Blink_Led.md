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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMMR7IN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrsLdD28F3dHcxmORQqmYIwUuA0N3YVbR1h4J3aB5uwAIhAIYKw%2FNCFLS9XLSfM12rg0EVz9bU6O%2BMQdC7YMVVKbwPKv8DCGYQABoMNjM3NDIzMTgzODA1IgwAIeKvj00VdgXNyEYq3APZrFQ2vBp0clAlJnk6ihPxSA5egXh3QVfrJW5pfT8xYEki1ADmkFZ6PQD%2FNw1ti2cKUCoaQvpfayKdPm35LIqRgSlAt1ed6Es7VNweMa8oomp2UZSLsFWqAAjqrS8fIO6tHYTJt6M%2BD6WPishHZ2o7gPRqvRyjzWJ7WTaQP8tJnsGGStfxcXc%2Ft2QrNPqd%2BxKEhw5geNsAdo%2FNQ9JKsh20FYI6SqiLzSjUdWQv3dupgD2m%2F4BpLBOu0q6eBzaFNyGt8A%2FzGMAe5QZKOKetfYWpRsLiDsjCndLRH6zhOHeMsngNRN%2BPZHIAD1iJKmLfJK6ow%2B2Ng9ThzfuOPp%2BBO%2BTXamOiWhp3u6I2FRyaG6Qwhy8Pw2L%2FlDYj30xQeGpHYCJ3sl%2BJVtGwG%2BeWublYWkYRv%2FmsAPrJRP9KFiqno6f7S6hJ72lQBLl8nOqDR2Rnj7QpTbdPmBbj9gV3p4eIvD9Ewf5WLQNldAwnktB3baDD%2BqGNYgZRj%2FsN9DWqC2y5VcdS59h6vGXryx1277H1%2B%2BHDw1pSTtFk9nnOU7oJjIJgefm%2FYT4IArCpUi6oA7pzjg%2FDQVcFlC%2BFXJO4%2B6x83ZncAK%2FZvNknOHlHKq7qyLxnFWmDc1fpQ%2BgBZ8HwQTD%2B0IXABjqkAdQx3KTU6GWICQs88ZWm6m2yG7lpQCAHRwQ6PdqCZAYXOuNl76xITTtLKKl0znL49xkd81knhXugZpN1qGxy8%2BQDZEyyFITb%2Fu3pJBkWybBcL%2FvS%2BFVRiHPKnVbJMqN6Qn%2FeVV6i26msCyDluH5uG%2B9Wt7kIFbcavWf%2FQMLC3MIKdE7oVbqOOCc4ryV0EIDy48qhrfs68yRwwQJqH6AmNmD7J6R%2B&X-Amz-Signature=62ea6a5f72048fa1836f3ab81faf0d5bf1b1a86411ed1100c2bbd52fad459abd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLPMMK3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRZ7bQffnPeL%2FeAqD5MKsQyGNDtOcjGIqBoqm3rI4jsAiBgtscWoG742AwElu3pEBBe15HC%2FTDYJe39JZgo5sCcGCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMc%2FNToZ2qJ3UypVFJKtwDmYvrZrcJS7%2FPMBoofOLxBUFS1IPVKRO1BfI1bPKe6xIzZV0CGDPMC84EiiZ%2FA9dHIJ499UFwlyzjsrp3GKR%2BPvHCSJP1ANLkVSdUlzPAU7WV1yd1FrHBvsr1DmIb38j031Eongs7ucLujAWOJtb6hd2Qevfdxpbw0etJ7P0Z7iCPRJVNer0Szxo2xMGI4JTiY0B%2FoyjfksyJoqF3%2BFRjF4LJM5dQB30RNJ3K%2Fy%2BO3OxwtMhLbR3CdoD3ZdTINB1krFTO3%2BeZmGJ6KSkio6HJfiyLaf9iC%2FPWGM2vUn9JuJ5bff56A6KFEd%2BatKTlTWFAAV2Ce08O%2BGqbyhqgM1P5QYEHOP%2FuI9AFZZfdVoFWpy9PM6RCdhRPrsGW%2FuseS6ZbEGFmimG8SIOs34WY2H7TuHGTKGREd5rwFfB%2Fb%2FmhPVXBILSBHC58mr3fEXzxgDsI1rbQlB7U%2FC%2Bw8G6aHE9AhKFOpiyY79QXIA9v0RllxL7CVXVSJp86s8102mIuHNL5ZJd7iyQjM3TySeDwCnpF3pnMKKUrb5H8cBBOXCPjO1k8HnVNsPMV%2BBIWdk%2ByBX34jXV2E3phtuOd6OY5T5dKQiMBuKWSN8ccaA3IEdf1Tadj949Ar2RovmOedaow3NCFwAY6pgEkdOrbOESKY8irAr5jt9z45y5b4nqnZ1X68fv%2FOr4NEMtZVwA6SY4oA5No6pzJuTlg1VgjY3%2FVibDTg09nwE0DTu5uSguDyxABk7RUDlzyGDQ7MkxuSsC%2FWyYCTL0viN2WuD082khZWmVrTcuwuN9wms2SJoiqhvZUEPZaZ35FJCl4I5%2FXQv%2BAIz3pIrWt11n0S5XEvkd89GWCcsw5ToYh2tsHvebe&X-Amz-Signature=a78783adc5d1ccbb32c43be3f7d00e9f5c4c80db9e902f4fdfa758c0f2fed09c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

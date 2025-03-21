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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FT5VCK7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD5NjARY59uOT8TAyUcHRMOEbBsaIQ1Q%2BHE0ZDFW36uNwIhANj0yvAWX3I5jNU8hJ5pez9F74OHjF4txLjfoCknsrEdKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw17waf4BARwPJMvscq3AOZnwRKoiW3vE57S2ODnODqOBy4MvCmJv3lMnluLQWs2PGKN4zPIyqLiuvmA58DaFp17pM05k2LBMZAW4UFrUxn17rPcK7kcETckSTy1bVJc4PmyQAnIIwjKi3DWVgbf7Tgecu0XVz02Yqctbj1KJuiU%2FQrBRRmNXK1vdo2cF9UlKHZ3Fc9Y9%2FmwuHnnWCtOwzrsWXgsTkspdRHdUG1gjsZiZLzsD7dQn9mKhpq3q%2Fta5xlVDPXsD%2Fu2P0MmvUMYxI11w96n%2FwxaKxuZJQ2Y26dZjAG6f3UzFMO7u7Ij8cwrztCwmWZYHqs0H23VIgvbSRw7xzrHJSAv3upalWdpslGygzFuXD4OzRBujlxBkPyEdwZ3S7EOGzVqNXPZWOJ96h%2Bkj8mOIxbomF%2BQctPs%2FKPY89LauB%2BNtkY62kFEqeZmlBGLi9f2KnaxwgP0rR1GTox9ccj6bN2dIkI6NG%2FcjhCzwrvIJR7UmawLqXDsd%2BFFjKN8tDNkS9hIBgXyJgdMYRwsXwcy2y8h3%2FBKl3O3kveCt5WcrIeoIFxpzt%2Bx7nehWASQI6Rd%2FJs3jcDlFCHw3xlKWv1tMoTaKfru6u1YhLBY2arddEsafZ8hQGedwd6xqXpSKgLNzOkMFXS%2BDC%2F3Pa%2BBjqkAU3EB%2FuwgZpa6z56%2FJ%2BRiilSaXOLPwj9FdzalI0WgQuyHQokTw2sE%2BrFSZyDMaZyEm7X7%2BlWPz2oVWyR4opPfTQdcNFGt98U%2BYj%2Bm8r2hGU3jCGhj2cCsv9TV2jn1f89G1raYjkXS0pqYHE7DbGann9W3ErlV1BNq0itae3ZtT%2BANb%2FaFEkfdwVM68e4zdLyk34Ulpb7G3%2FzFZ1sIa6g5RvE2s9W&X-Amz-Signature=3b121f16d2624f7a049d2561aaec5602d12dd819c2da2604d2081b25f62b1d23&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXKSTPGY%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIEUQtznu3D1shfdXBSC49pAZdhPkWjidvJMtqCm3OvxuAiEAsQWsF9xBOyoo6X5UMBlUEQzVF3tMmyK3riNSChws8K0qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmi%2Bd4GsD5I4x0rECrcA4i8wHLql9%2FBHs4y3nNHdRILITPeUDmIRFovvx2BBUK932tTcQmeMTlVJetNBdEqV8O9gjMqdbg8r448W0s8w7n1EDzWvJGCgtQYk4LlFNpj4njMkeGlXRVNfRKanyTJ1PSNd%2B7kleLiscEZZi4E%2FJ7NuECsD7b4EWeFCr%2FmKP3aWiypUknql6VWPkIyPj6guP7SRZ1XfnK3ju2K5PFxw4UNmstq2mh23%2B7juwrXQylfnVj1VWqgArNsF0uStIxs4Ke7zZzSgdtHIvKRNmbgoLBZK5cX0w4wwV9ihHcjp4t5ewLkafcb8hABYMvzvm3lLNQkcQ5Rf%2FHjzPCUbacEslViLl5U%2BsdbeyXmi2EZfi5aLDfLQIazayP2XfBq1n%2FIHfXsB3Yrl5PSnDU0xqlDUydApAgqt6WYsi2LRz2NToCihj0Wyf8%2F%2FSyoWzOljRRPfgUaWSQpkqUPcfVUW8GfNK7ZKaVCjtEjzTd9PtynbLMKIRUWglnXZFGZ%2FSIm3vFMKItVw%2FRapEbqmYe3Of9iLX8aKPhYLOi%2F9vkeVXF7MVQp963K6Wkz3S2J33dNeidi9cMsPluVyF0AZEHNcKx9%2BFLh%2BDAnuep76I832OXecl6KZW5rZ3G3bTnevt5UMN3b9r4GOqUBl5zd1FcCCUzFoiPYTft0jg16EbAxJSZ8Footq%2BejvIig841E9MZuN6W%2BPdqemrB%2FeBObCoK8hI1CgXmvaB2t73Mc7ShLf3tyCSwPcqFREcPPr6eYxBMbLV3A3AeXq%2FzWNXswdx0L2Uj3neXZqon5yyGKU8oloAIJLsI8y2T5FfW6Yt5rIYeywIvOXX5KHnSCmMJn04e1NMs6YNu7ikB%2FJtR5bH4o&X-Amz-Signature=5e5fc81b42b0030fea8ab1271c8d7c14e339fadea5c3fe5e03691b7c5f6f499e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

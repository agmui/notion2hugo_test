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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646QOKZHC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEY4jpftXL4QkM%2FwQ253d6u5P3Ds2UnUikID%2F6fR61AQIgH7EnG9scl9Y5IdKTDJQ7QSkinCCAQlKXNGm0gOvwTG4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwEsZLA9kTu3%2FCQeCrcAw8EehHnxBhQhSXv%2FQ72ZQF70ay6e7h1PIIRTmrAyKPM3D%2FLe9YyUy283h7mJJzUcZSS%2BWnG5OhLSgd801GOhg3Q84PesPhktyqfJy4dKp1qqSoaWiK8MFCpl9YQtU%2BBBkUqz3pVMghMe0Vu5nyMfZTHm3b4%2FgCYXrlUk%2B8Wz02NLIhLIKnFroChYATLonrBTtgnc%2Fc3u3RpIN1qKLKyUai9HiuHBXsot7g1HLomz7ebWdEoNYP5Wufbuu67GVTfOa%2Bgj%2Fghb2yQys80ukZg4m5qN7l5hbHptlhzuEdVTqAb%2FpKFx6PCb04kvQHVl8iz7mUWK%2FooI6O2IYRlpVKSv3R06mmNj0iO%2BWnN%2FjAoJg5Om2Hg4JCdPLSRwJX6%2FWv1NCBVoccO49EXAe1EgnSAHiqn%2FHs53ykxPPfB4mxlwyrvkp19OA13O1h%2FS7L%2FQwx7vHNdukwWKXaU6q2z5rgHm5DqHVN%2FcMitZngrbyjrWQFV4O%2B6j2MbDh%2BMLfPoYlropu3uk7Y%2FPwShOvaervac9R3n22cs7usLEzd67YPP8Iu6yYeIrk6qjXiiDGPZ9WjPRVdcvElR%2FjEzMlr322dx%2B7YenEg9GAqe%2F8xJadidEPpmOylSchQJqnofil1TMIXp074GOqUBiaRGz9ktpgvIc17pSGjKaRpY%2BPZlFdAe73i0VVuFOnSXJYSawm8oaQcOCJFDtQJXD%2BeHEmqI7f8NTANmldyv07M6KZ2a1hrEYPqeg6V8KTRrQQxrELj2Mks2LFTVBGH0aT63NuLtNvWqltK9YTExKNCn8G2l8PvG63cnoqh7XartcH4P6Z3BiawnE0MCELCjIYHbfgnbUCd07jzCyptvkvn3Ogor&X-Amz-Signature=d1eb91049a02da115b0928cd5e1c516595f76fcdec835753ce2d894569670de7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7VR7S5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC7UIC%2FBf5ENXwlGknINrSNouEtXr1apkeOo7R9nrfQIgUAImO2aQF4vbsoUEWhpjvdd2mMyA5%2FuGDK7%2BBiR4Er8qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo3E2kStEyTxvunJircA62slTuPF%2FDxiDtyavZthZUUtZV%2B9S%2B8YUIjz%2FL0ActCEdx6lAyIuM8B7bsy6hHRNTuC1%2FSUHBmesiKleg8tGdqXQSlxjhI7ZvyFdEU3LrC27%2FAknxVAPrMfl180a8Vta8sU7rj1xOb35AUbfWsYpN6mhOX0gfqK2tJGjrDvaIXLc5mfQG84MxLAihnpRvetFFH6o7cQ7kwtmm8GQvGAQ2LJNRiuhPm%2F8S864uTzcf3YF3qI%2BFVeiBKSqDmCdfaT4ZXt7ny%2FtGBY%2BHO9yNWejvH0fT6ALf7WHL%2FuZqInLPpGrflggHwtlK%2FYDM1sNcc89TN4HyUB8z244lQnvkLS6eGQRa2QN5uBMk%2B%2FbDG%2Fb1rYa9S95InR5U8faDSM57RHjMGCByR0Of173fbsunb3JfI5SOcLrcBgd%2FGXRH9OkHeTMC5Qsk0dXGK0yIwC24Wbv419W9NqC7eL6LxMb0uUxwalSGZ156xOxqdz9%2F%2FTBMeu462susWrALhukKnJSv00UAUsNEIMPoXPHLymgqKN%2Bd8p%2BUxozGK2zrrdB0rfC3okt%2FvGmkMW3irQdrUNo0N%2B4CV1SKSrxdcbCyi6m%2Bij4J9NFRsgfbX%2B%2BRinL8UWyMjAkjpDcXRedKdLgS7RMOno074GOqUBUYW3QnJKi7AI08BhW%2BFhS8dxRQB%2BUPlZ%2FV3vPsG3i3OzBTgyfJgXFny5L5NnuWwQxpU43T1cpPcmr7QGcwVzSxuuktP%2BQL60hxtpsXvsDQMHycTR%2BxbBP40Ihx%2F5XQ56BZso53QPBFFDtx76OuUEhxDEkktXiaPQqFj4DQ1M3dzGAkIHT9ONoVfpuO18tIpqg2FzkSZ5YiD8KeouKbSi9bNWiNuy&X-Amz-Signature=2888304b14272802820271e74c49548a5f636dc22493130615653c8efef81970&X-Amz-SignedHeaders=host&x-id=GetObject)

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

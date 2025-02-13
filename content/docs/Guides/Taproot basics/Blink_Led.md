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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJ52BRL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC85yjbN17unylo8a4%2BPDJcVqFVJ6rGHYF6XwxpYBdIKAIgYvFPePa5%2B7GbABr%2Bp00BbGpk%2BUeYnAz1tkARtm%2BjirYqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNv1ih5u%2FsNwJTRrvCrcA558X7nnvUV0Fz4paCPvtkClFUNaewAPjUsrHByel6jXewUECKP%2FWABqCzK16oyhUcIkHiLgu7EUdybi%2B22OrY%2BflBCkpof4GO8ZTfg7JPnMCDDt4%2FHAVO6a0KU1XKDVdbBRGmsLziXByyUoxwmix%2Bh%2BhaEvqkoHHWPX4DmgHWy8lnIq2goYu2UPzj5IhKZesdZPmcEnUW%2FzNpmUN%2F2aUdHpFznI6uLP8gbscJrn5QS81ARqRS3ySe9iEOlAKHpqdcPwAIWJLRkHJE9KG3NL55o1Lf9PJy5FJCX8H9O20DaKjHGqT3TozS2J44GQYHS96an%2BS9IAFFo2wjuikDH%2B2%2F8XOeDXuAHjkFwzHeNMREcZ7XPjxO4UK6UMQO2iynzY47xt1Sq3jc4tLhrgIWhGGxWi9eBYI3gnkwMos9iu0wYnHwhK%2BN6m0YbNUfsCTEEQzJiSzLyGsC51MUpiO3zecY0VlK2kYapCsPB1EGfShyATUewreIhX4xBDMXMjd3A6V6adSFJG1ubJQkoM9xXyTQu0UQvI%2BMOZJ2KN2wyBi0BjLJXuu8B64t%2FsLUCARd9P7E02RYmhZuXlUCVntZwrGzHN%2FRNuVrVggeoXOn3er2hFJDNg1YZ%2BvncrviXeMJ2Qtr0GOqUBT9ApLxchmC%2FKzCFQvCgb87%2BxQVwnsOdtwCzn1NaaPF3WSIzlbTVKQluZMa%2BiNCjMR3vdZT3RbRiCZacgeU4af8UDATPzWwc06%2FHgbAleVsARMeoDzvkEiKSp00ZkPhxuw9OajkyrRH7Ru3jovkhD%2F4sQaE493hbsgXjOwTeAAnRxeYt7aNxW6QRs04e8OKSBCZ%2FoWNQIDwf7nF%2Fon5E6ibKnLG0W&X-Amz-Signature=5daa341651f10794c09e470200a696b92ebe3a8feab623dc8bee3f64ab062363&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRW6F2JF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoxVKfgIhJMAihZhrfMcbegX18VAEIRjXmVz%2FXf4kiQAiEAqFJZ1%2BGum%2BISWxfiETsw%2FPus8QKeh8dHJymQcx4tAM0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7W%2BJzmg7N%2BW1NmeircA%2Fb2LcMOLcWlklneIy9VZHCwgTleDhKsPR5%2FVuEoz1zpW%2BS0XnhRW9Xc3yTufaV9lsEQRY4xBnCL9T%2B7Y5YRMiBNcKzo9vfJpGROoSKWE6vOe%2BiQ8x%2Fq3UAmCG%2BG44agz0I%2BOKaU9TmBnHRRWcJVz1scg%2Bf4uuTht9ubbtMA3gEYqFqjdFerAB10DcyEM%2FTmfx2poFmXpsEta93ADB1Im%2FX412OHlPlYoA7urBt9yPhFAThhdKSkf9GrGxIgfsqdDYSOj%2BskZZRYCimZnSSIS6tH%2BF%2FxCh6yamu87l0iEkS11DRyxfvzteOr%2BMsANal9OGZwVJZkQIRXuPZ2340RW5cOdwhbk7GoqIjskdKDrQVSQdXLGRDcX%2BdC%2Bta%2FXhdFgbGUCaANTS8BzgMnDdfEZQwSffy8qtWTnPDIpFyrFkaULieSD8rVBQNXqCMvM13uPgZstUFQzNomyVVwzXAtxJ4JpjK4uTQMXRh02ZuozH38dLoJNr%2BYVh1xFZDrxnRMu2hPfBTB%2FPts%2FlYUKyNi9zc10aNGwsr5RVHXBW0v2%2FlD%2FmqDCwcC7L07%2Bj1CAJ7LVbGXxaQ8VsOWkjF9iwulQaMucyl8dExqsfDBgOII7Odc%2BaRg7MzffJRbv7YnMPeOtr0GOqUB5L5ZrJwd0Je6qfhOrEZ22Xsb%2BfaDUBy9dp15VU%2FKw6CjCmsLlaBZxEv9VhXO%2F%2BCOsuyGgJr2AG8ftacTxmAi1cLNY5tMu2w1cMp2jARHy78iflgfBPxdYBd7DowQ9%2Bns%2F%2B4Q6Mx5qM%2Bg%2FS6%2BxMhmhu1%2BAH7R3s2gVkM5mzRwjL4B0mYhCmtDb27%2B2YLs2mbMve1fPOWVG4UjfkwtbzQcwIYa0pvu&X-Amz-Signature=1d5d02e363ad8abce028b4ac875a82f5432d91ad423836974dd591cad197f71c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNSDQ7C7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDIMajLaopDvjcW11sVDbJR%2F3kG6qvAbx%2BUTmZRx8s9gwIgdKRLm9kISwPydHatsbzEz3EK%2FxwM9EBEa5L8WriYbTEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFIIsOhlEtTMwUpjbircA7wgTK9UQF6iCeBG2HoGA8BOY9lQCbdsJfmWyZPmpBsah6x%2Br%2FgE4vb0t4zbRaPeRN0gPml8NlQWTpU1Xsbuk4Wzz3eFPrsQJnIHs%2BYSpWHFKjsbqjduOkDYACzXE3QGAHii5g%2FJof%2Fre%2FFPQ6za3JVDq1y86iv%2FzelLlKuLyAcbaupNkUWNaS2GJ1DJ%2BskDjvcfSL9JzTfwyexG6xzKE8z%2B7O5iIIGmPLUSfV0m4ml6Ww5ncM0Fk0so9lDI2aGr%2BgFPaWTwx00%2BRgnr%2B%2BbqhUdQb7jJQm2RYls5EEps88XlmsC2khhzUG6nhFsqS8%2FW9X15p%2Fe7JnDgImG04Wl5gCcK6hmBAo%2B7ZkhggK%2BSyhPpQ%2BSuZW6ukDlUgu%2FLcSBJ5MnriH%2BjE3SbRyG9Z5Se0S3VhfiG5dLotiEyIXc1feZhL8or7rjaD%2FtKLAzw%2FW8jIeqXf6Xy29lKCybsHvz9CDohTho6zcmuuE%2BOARI9fze5D9zhse15%2BJeQibpBuSAASmZFUVujfp8P1wFlNOg9oZehgn9809PO4lrlP8vy3SgXJpzSt1JdgXCYDQHknoOytVBLCEaNooUb%2FbQohdc9og0g%2Bk3YAWQbcMpDD9aHVr2bydumprj3H5pzolXRMNHFkr0GOqUBO8Doaa%2FT%2B3u8sHwdWoKPoTMt0lfUmsuncgT39AA4F6uvhf6LghdhZ9nkqJ8ouLYlt2MEDnYnsq%2Bdl7ogiNvANIpGjUVqEvhOY7LCYUySoUgERhd6mxTKhWRFicuyIjVQ66LNtREjC3itz79JJIqO9OAvt47XHnojIO9lS60gelBcVLRc59Ub%2BQhcGs%2BAoLJVU6Kcx0T6TWsd9Surv7GpN8vHhTQ1&X-Amz-Signature=dd62b11ac91df32d75cf1c20d93c91c068c601bf25d09e9aa9250f00a837479b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBLJWEP%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIH871CcZbGmrLrWFuSAILCnD%2BhFCB%2BG3F1rozV%2BUvTmhAiA6nGBjufV965gjeuBTCCwDtzguyI4x2ufjFjAmKD7HQCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMSPX7TkEysy21EXh2KtwD6L%2BBXo2WwQHawBBkHcdrtPbQRi6%2F10PlMl5xkcdVfe3b288HdFO83XbXzKlNw5ICQ684tqelIVhXXr1vu6O2COLltk6TSqUPln1CLUfoTYLSC8YifeMTnEit4p7hQ5mU%2BW5miYlge1xIpLQg9byJ8%2Fg9CfBlXbmV2GKrjoY2mJnVZlF8M1lpBAWV4JmVdaDSt%2BExlxyFaLQuERqgRiJYB7tRfnRoAPhaYHc340AbiDTENRBclwI5rWoLd15oq5G3Kx7o0ISBJ1ugygVhOYTdEOsXGUJv5QGI6mYEDnFegohQeYcoGG3yjIaicKSrj%2BCHQ%2FLaChbQHCf%2FFcwR6I01%2BZWnyG5xB5ffNUAu1Ljbj4hL4mfg%2FQVzikT4%2BkMt2KGvX%2BlSOi%2FbwfntIZBWprWPhyteLwDfSNU4V8IX%2BUjfdO5yfNyUhFmVcdvbFgV%2B5Oo3qVKdQVvSjRyLKhGULGNu%2F5v2GOo%2FR0zXHstVYRu5mMpsb5bjKp2e2ar6umY3FKnSjpwctXtFJll5A%2BVUL9Pi5steuq%2FUDAky4gM8vjPZR73OndlRrK76ZMTjrsu1GwnMu%2BN7nsq0ml4%2BA%2FcZgIZE0fuWTCNPXodcdns2jXPe2hnnUJk3rH%2BrygwR6wkw7cSSvQY6pgGfElbjP%2FJbq%2BnFtPER7Y0d9S%2B4%2B1RhcNkckXk%2BDzuC8TGEDnOolH3N2VgSXwV0vU0%2BEu76id3xDDoTswU8RIzr14IGfF3TqZKUWmpZn9mo1Xlz71zzkaJPR46Wcx6HCsSe4efEnvdL%2BOBlMWbJxv3CZX7ZhcORWHVDjV4CYYc2tx9p%2FMosPhXc9C3bQuDmlBlEleAuPFXkOw8lNPBDSSp4PiB%2BTNb7&X-Amz-Signature=12434d483cd99feb094262d6202b15379060bb8649cfdfc6bb052e01c486c1c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

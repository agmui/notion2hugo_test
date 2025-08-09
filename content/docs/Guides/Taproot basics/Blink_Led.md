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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXVAGY33%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEEFh9QmFN5F5H%2FJkbgXMJx3LKnnjqlG2%2FKrcrwSu22RAiEAjJ%2BttVSy6aWkRRVZ6m6HtTNrpb8XbPtg4o9ZtXOycwgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5Bn%2BvDFqEslIIK0ircA9Rzyx%2BsspOU%2B7ifV%2BPTI3huKnjMeSdhygqlvgbrtVseXSVjSapU6JYwo4in4ABJE9DEkCOjny8QbFPUn8IUY3wm5O7umoCIc1j9hUgDKyxL98%2FYdUS5%2BJDz2ZHsgPaNxz2XcQYbIeDQhjPQNwbMcTWXN3wMm7K3txsOtYz1ITTnAiZQjVjobOE0TPJzmSTPU9PCEBVD6WtIctDXixzDrgneGd4M999HTd4RySKBfgD7ZlcC8xR55D43fiGfZdUS1a9mZQgCYPfR8JFfsTaG1b0NYvuV%2BZRd3Gv8IXhE0sYokqg%2FxOeupyV%2FRM%2BhcXf3vVW1WNzdaoGLsI23vhmCV%2F%2BAdHrrkuCF%2BTxUifllGazpntrvIhGRh8Xzmq7PjyDOhA852DgBJJunUQt3mtEVnK1W9z6q%2BbA1%2B7V9GCaIqesxjtCDYV8Eqy4pMxuG%2FO6n7YJQwf7XHhFCqdl9Xnojw9ilm9b7ix81QITF0XhEc4Fyj9hs%2B8r0BDwNIeYYmABp1j5X1jUw5bf%2Bbjz9yX2nU3ZSOKNKU9kmmVLrLhI%2F%2BqZo5NmzWhhYMQ1y%2BYKgHNz2yjhmu8RylPWprCmsr8jfcmpy9oHm8ecNmOc0WssgL4N6M78SEuMKmIDuP5pcMM7Q2sQGOqUBRofmO2EtmSOGH1mxZG%2FcYttPY8Q8VFsjGBTMELPb%2FTy%2BwwxuQAC7wLhczIsQci%2BLguw7H0AvwC1IruflEpC5UJ8ZFQ6rg8aAeE6jx6nK2%2F4Ne9%2FfmqOtdfnXr7GtrJwio0%2FelT17RAGzkeMrzcKOm%2B%2BA%2F5DgnS1fPCpj66hPmiqYhsjt6Fic1gSB%2FuGYxSMk8X1jk6rqlSyz%2BNRJFAt4x1FqmQJU&X-Amz-Signature=fb1c653e67d7da02252ca3846998480cf8ef6d4a5dc5838d71739f09e47c237e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I5LLAMG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDRmmcVs40zysruL4C7BeJNKh%2BHTcmBJcVSisbyClBuCQIhAOP%2B7jUiIrHkBoTw%2FP3WauliSlFlAJrHYOsuyHVzFnejKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9x%2F%2Bz46LsHF1I45Yq3AOKYgr2zA%2BgiE47%2BXSHiAQZi%2FPd%2BckqHpwuNrpzMeqvJh3xScA61HhnAcUSoLNhRcLLkju8%2BTdJ0ur2KJxbGuspuPjmeeyfSMx8AmGL%2FzwRm0BilNNgB%2FyHXk5t5O1VQYpaJFYTk7f4ENQMdzhF7NmnBIy6T41grBbF7wyB7aUuX202ye1daS4YILg6BeALk2v%2F2vZokKHQu%2BSm0b52I1C7T2gKIIkegfiOFIvLjZ0K%2BJMsrYyJfwe8ZZuf7ZOQRf3nnJcg5vhrrfzmQrBk%2Fy58b1wkZrL7VLYpdH%2BIIAPJFarlQZBlNwKP0UwO8KD3ojZvAUiKHcZ90y6%2FA4tNYcYQNgzTl5BsqodJqnYK%2BhfcZfvGVH2ctBy1Flnht0bsS35b4Xt1K5iLydO7MYR2Lk41Na54fs2Eu5qk3ICYgfZhiWpCRI7iLcO91le%2BFEsoKubBBlOQFEKsTp5xURHwvTAnR5YY4H9vPFW7vONrh6DJHGCcPcoNc%2FCNeK%2FZzE3qbSL1RXnL6htRi0rjgW4yJWn6cCvWGQfifQDq9Ycly1f3a6vgbU2iemZ%2FhJWpK1Yx4KOv207Wa6tmPBh%2FVk9ojCQ0gs6JBHA911KB%2BYJ%2Bg55Gbop5I3FdBvSYUglQSTCL0drEBjqkAT3PJGSdA%2BnRDXAJMY0YaN3DUepxGDrbh90z0KjNo2hoVgiEOr74448Gy8J93ivolIAVbCtCZ5W0EFBUV2TKGbX3gzzgYfkCXdJYkuKfV8hrVuvfgRQBazglw0Zcy9RggY%2BPHOi2IVRbCmvXUsLuuV0jMwkqGHeqnHIEPVlyoIxdXHcyZm%2B7rTNW8VsuFJfXmsP8fBET9%2FMwJriITTLqVGSBiMht&X-Amz-Signature=719968c14896c12c70d0ea1991aadb5d99a5b3f354bb66ae9c782d605e149cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

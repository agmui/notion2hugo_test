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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZPWSC5%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDxQJj%2BCJqjAg7OTbd3gkC32I4n2FtsBQrDDHDL%2ByBfgIhAJH03SxJSwIe%2BgaTzMoUORXXmZz9O1Mx0rfTFDQHgQ7bKv8DCGMQABoMNjM3NDIzMTgzODA1IgyIzDzy0sPXGvy%2FB40q3AONrKQhlq5WPnQoRV1eIkix9X0TVuHBDjwKWHKb%2F3c65wEduPqv23Nkcrc8SbftlxB%2FFhbYySy9FM9Gu7chxeTk%2FHKPlbRn0jJCiH0zBDmpyuEkXxnH6kuzKvTyAGBFij%2BAmM1OISt3UdhUYh0snbt5CIkOVCd6%2FDcDbzg3eiL%2FlRpDR7NQO3ufHVyib92I5n8VbudyMu0kjbtMCMyEfPaDeDedsIzDc2GfG6M1MaHGNBWYiIcsuPUdEfza4N4vR3b4dvWAIZeKzUvwLrxcYySmq4b96xIH12QVe4WAIkzn6whHu7DimGdVClEfArTUF7Wd6uKV0CWxR3uGKyMut847Fy8qjEKGG%2Fl1u3%2FNOFsLeOLWKy7W0HEn9riOeC1nHmlvaDLbbJMa4o6NQJ1F6c6DDF0JHYSUGwIkVndssC85I4C%2FGqET%2FeOQOaeHwDFgrTluWu6cnqqNQi%2BV1JEYSeIcVjrdvqwvyzo3ggbxsKxiQO23Iuo676kjAYrMumLNzEOb7SF91jlVabDNMBxswX%2F037CDj35NtL%2BzXIE1N6hch7Eue7682TyKfvwviDr%2FtwnCMpjxCPc3oIG8%2BhX0lB4gT3tCD%2FMS%2BaDCALlKxgYBhF1Fd1khvLT5wcUXjzCdgoXABjqkAaaNA3ykLOJEBF2VvTLTvgjTFnieoNm%2BcHwfqikl5h1%2BI%2FJdYkfmXU9tpbQhIMQ3mvEtCfCAgO5BMz4PC7GRItDW9NJdmPmYGLMVvimsNw4Av%2BI2WWV6dq7Q64OYpY3xhk%2F5s%2Bq32VEKemPYYEOW3UrJMkS%2Bk75OtSG%2FHxLW1ov1ulFbsIbszwCtIlD87KqztDGJnHtHqaIJwlMLD%2BVLPeVyGq6U&X-Amz-Signature=cfb88d30997116c17373c85260fc0fae9e9b5cb9ed01d65a3941d974767d0343&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY6Q3LNF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQxZ%2FwC7k4FfqCvZIxusPS5Jhjn3FkLWXXAu9IQ16O9AiEAryETe5xqpH5XWaOtUfm6uEt31iVZuhvaYeXQyOpAR5oq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNzSHM29lcP597S5IircA9In%2FJQs1Je9oIt%2BNGN9N71ve6Rx36vBa8CzpzoT5fi9aE2wLy6CW9Do%2FwSyptmTbgUtdqfksX3vxYtBF2AW6YOhvOSb08KgC%2BLMInRnYoBGUMVJWxgbs3yv0G26%2FJzc9lOr92OaijotAZXav38fBPUScjO1E2F5%2BsQa8PsBAL9pxlonjpHkB4VjRXbRfqXtAHQW6EII3UjSCChHvEnlrWNkSHzJIjQCIuzV0a3WN2d8yl6Ll9cels5%2F4t921Iz1j1IOC7yYE1X8yzF9JQv%2BQrSxFv4UvNq1VQAgpnPY4VYe79J38y6I%2BfPP1L2vVnikWDPej9h1kolrVkMqcjO5KeJozyiegtB2XUpC2P2fOfx5goKUXcEjMJaQ4GDhyBLf9dy7H61xK6%2Bvq3f9swgCclv2MtgpF1XIuEUUgoGEnTmYbxVbEh%2F%2FWwzoPHw%2Fxd1VXyCNBpn55cCaUXwCbu27%2FG918HaNge%2FQakMWXdJrMe9APK%2BIlTGY0Py2d%2F%2BvZevgfPEnippaQVsA%2F6h56xQpQ9c6QPQYe4hr0PH66doNbW0L%2B4ScSvdkECwxQg%2FZu%2BFywtH1fosNP%2FG5y7IuqMnBSqSscDd7jGcIQQqjdd3D4LROpYXKLpGr%2FNVtZajOMIGChcAGOqUB756RGdF7PBH6Ew%2FZPjd1sdqaoktgSfWzbuJYhXzLLRYEGsFiok1J66D7YBZE0jXJoRdiRZtc1cotmjIG5h7LKxpVdR1wx3lt5im%2B4iW7nykCYZJ%2B9PXDZ6FeThfhmMSg%2BhZw%2BnRYOsrjyVFW%2BKGYCoBZYpBWgDobjB3BYNdaclFq95U%2F6rym1ekvqHyMY2VjpBmIKpzWuDG1JPsIgHg8aqaHVxoI&X-Amz-Signature=838e736c059a3ed8b0f726b13e6478f7bdd4f50853bb678cd4ea35db97a83391&X-Amz-SignedHeaders=host&x-id=GetObject)

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

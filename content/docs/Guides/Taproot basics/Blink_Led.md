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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFI5BI5F%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDjnud1n3MOjIQwUlzF%2BPsPTmKuk0hq6GFtcdYfcjCTSAiAOdDEcWC7NoY0eRzpojteAWFd9urDdG9xcIcX1zcqPySr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMDcrGVjNFd8tTMdPTKtwDvKieEoPO09jogFXsureq6Mt69XeEt%2BrSun%2FRb%2BqZKIpICNBWj%2FQlchxV6DuRLa6M545O%2B96GbLVOIb1Pox3aLqXbftBbUR1LBuqeAoEgb%2FAIvs5oLPiw1c8mcXva9WCpKw629p8ekqdY4UoKR7aFsSvDB0c%2FRHTal1Lun7cubJp93bEqnpDpiS1ZxdJHiy4L2T7XeaZRdPWILqxR%2B8A2%2B28inWAAxydpFJAYZ7cORqkrePEF4sFcIkb%2FQvhQTSIonu8QMHdEjoMORiZs3QN2bF5sVW1G2tIilVG4yzMCoRBctQFro6cNnIdzsL0bD4iM4NwCLqerbG7Pupe%2BmOM1NW0a3kAYhADHL0YWZ4eNKeKLTZFJOP%2F%2FVE%2FqIYnVeIuh18eic9WYA6z%2FK5YAKLLqLv9Ht2eSHq7285S29oCJBWBALirDGg7ssuT7L%2FdMGVq%2B6JU7EqwNPvmiyAej7riWYad8%2FJYlYoSqW7ve7UTUq8R7kM%2FhIP46GpsrKeOPLyOnPgZKqZ250xt%2BvBQK6I7FlaHn%2F4bdCst8oInIypsegYaJUJ6aICU3dWCp5iyzb%2FLNi3tjaDe%2BS%2F%2BD7XLWsSLLDjdvX08s9tDT987wpZM4rAmDVdvPG09WOoy6Q%2BAwibS%2FwgY6pgHQIbgVV%2BLTEa8H8UNwVvREKkR%2FJFuiig7ou9qjj1vbRzmJzRUgc7eMiDQGUvTBhPDNXjdFnXmeRdI2bReViooIlLGZwjm%2BanvJUF%2FO0LR%2Bs9Eky6fg5q5o4Eb2WmHKTkeRr2MHrJD2bV8fPCEHnCIrYrOIfMpvZpJBP5dqJErapdvhCZ57naLIj17Ubk8ZkPOTMkDKpnHyl5vLp7VaBurpOPrBQCOh&X-Amz-Signature=d4f9d28d81629becc4b594c7ac2e695fddffb461ce15160eb3430660b22d192e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625E6LUIH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQClB9asQ%2F60ngL7WPp%2F2F1J7NnU1g%2BG4QU2DwKW8ViY%2BQIhANGBSKp92J8mjw5YLcPMFMzaVqNTtj0jCwFcJ8YqYqtSKv8DCFoQABoMNjM3NDIzMTgzODA1IgybO9SNIUU5aNNA9GAq3AN06vstOG2uR2z6RxhWX%2BVoCe5oAx7OgypwAECNvBSU1%2FQ4eRbs8%2FtkehSc0cvm4A1HiPqoNq5xSiqnjIN0FcZBSufZtXEX79e2KiGyVqLOrZ2XSAXIBE6Fx3z0PSjFE8FzbOivK9f%2BSfSg5vSalhFOwuwO6lYnZb74Lm9EcUPqIoQ2Qe3gcxzpgFtmupFzk%2BAtJf4ye2e5BXCbLynJV%2BEYW%2FbMeL7GcGcZOb%2BxZZIPLI5QizZ5J555PeYy59KuXVQM0ihAFPIouYo4KKr%2FzrjGYz4jRnY0VXXT8CmABIgiT2e8%2Bz%2FdjomLp3L4EZEoreDfL%2FkUDAzDS8ChXlm5TFeshQgOvtnGkEFFPRxBoirsCC%2FqPXjsgPYJWvvVKW96dN0%2B%2FgEgHwz9o3m2WRFQVYHrvukPfHKRHVeRZv40EMmVE%2F8MaekE0CPMKILWVnGeZDOmwkA3mVTZIgLmrg8SBBR66%2BHFww%2B9ZkOKHfPU%2F6pr142X5zW0Hq3aj%2FiAi8vEpncZKqFa0UhN5lQolggMVnZmVkXTY54sK03lsaqaYoKb6RX4WpP7KO7fXapXHMjEzrDVyrLsnFLdMfC97y64Rn4KaUkeB%2FLcEeDcNH7Ve04bno%2F6Qd6kKF0Pou8hODD%2Fs7%2FCBjqkATcP3S%2FROyh0a7lgdARiMIai%2FqpQUaCUI6Izt1Y%2F%2FEfcMukS4glKPIKmHNI2DYYZ1askQLfW%2FzIE3EfgGPXJLqaqul9Juvw8%2FTACz3kBaurcY71g90296V7yqL1YjflbJNyxx%2BTEt4mcS0MiUZ2jrFieXSkX0XEmssyq0qP1W4RE9rDHikcGAA9IANT1LA0WSuPOhdP7DzzkYNsoqxYpXkzqOcTH&X-Amz-Signature=7b7c63ac8866cf86183a97b490e97b3419547081d233cc500ca5d88abf9ccf82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

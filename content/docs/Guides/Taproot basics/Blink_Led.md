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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPM3DEF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNyBLTaBwk4uNSVyFtpKvHQbJZKShS87OogfVswVOzCgIhAPzdyeNTLDZQNeaWd7vxR4XHmJZk4vBZ4Fwm%2FVBOpFfjKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyyj3C0cC%2BDqthA6rIq3APgmiD7b3G5%2F0lx5uYvLS10%2BGNXfqY9KaU8xQaComBQ3dPTu%2FoXEqUE4ShykrX%2FNsVAyBDjd2ntHNtyDQ%2BCXsxg%2Fo3ixStv6Xb5fF0atl%2FQdowNZrhVNKnmTxc%2F8mTzXnCejbamAxc%2FAwbTXt5fR18x50bbAQprOBYVEIUyW9XWFkNfozXeuZhRz1P6sMj4JDt1pIQb2oU6wTPPpbKXRpYur%2FsXtnFSc1MtPNMSoOo4lnu8bKzqCaCt2BsFTHxVUf9iWinSUKfHR4jdF%2FnjtL7dcrmc3G2r641O%2FaJ%2B1Zq6fO%2FxkxvqOYkpw4sbZxDCgwM1PUzTQnFFwejGg%2BI3hH3A7K7oTHPh6kg2M4yqaUq0BIb0r1ERHlC7xHsyrN4aflTTm0MjP2e2l2%2FFsFjSs%2BLlQYbO2SX21uYBAbzL8%2B32kVlGqDE80KFH5dA6dk5b4UMip5aMmqVJQAJw7U3nbI8pwn43bmxhbgjYnp5uhP0IMIYgOGROT7k4SiIl%2Bc1jWEYxu54HvGYLoZK8EEvLmtK0kbxpsgX4CAuZN%2Fa66kyEpHy8DU25GqJKWQ3qhb7hQsou5BohmygxwENUbLuYlx9ncRGURChBhC8%2BC0Y4hGMJgIKemYUP4AE%2BNCtuLzCwv4W%2FBjqkARiyv0MhlfHqToTM6Iw2%2FtOwk%2Be6dNKFILwqIrTg4OPZzEwCvt9jgSK4mJi9ZsNx2LKO%2BvBro66zJftesH3otn92hnVn5n7FgvYLeQ7XTTfXhcoyOSG1kpj6TZUIctX24uBRq%2FhvBUh2rIoVMY7CEGSt0eLZi41Qrk%2Br7Zz2KUryqwAzonY0YSKe6dkDgduvx4GDIe6WlK0j%2BNNpDwnMT4CNK4dE&X-Amz-Signature=935213688f840089d85b25b32269eb7747321d7419749d3966019591a0248b5b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ERRGGZN%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCK%2BUHY9JSL3HbD28wWCd%2FV0ihY4sNwLaymHnueTKrXAIhAJW%2FEUJCFiAcMi2SPHTICDyUid7lioHJZzswUM%2BFx3IEKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0oLmf1OU6sqiEMs8q3APVBQGJcLGZJJt4iPIkFB2%2FSQ8dAnywR9MeuQs43h3pnyUXigrFS1H4y68kAqF8lasxvjyzEBSyH%2FwrxDHc4e90Dm2iFrw79j7LxTg5GwJMK28VRSolLRL4vq5KHPkF%2FrFVlMcQ0Nn8xP%2BoPaNDu%2B6oxoz6qsio%2F6kXZe0zaPLbsUJA3QbR5CoPucrX6svs2RdxgrsZbQM25QPWXrGOe%2F8Q0hL%2FPAfdibvwwSBb1JY5EcGDj4bp7kfU6ROf1CIrRFJyFE8pXDk9hGgr1w31v3XzlyAF9itrLc%2BPpnz49vzmulDzEpJCNBl7sgqmqU8BUv1Oi4zEP1BF3V5pyjiC9HwyTSY4MY6MKozwXvr3CBzr4lw1pazt6N37nIsr5bIrraWLJBDm1d9lFn8NCsM5zMhsJFElKmx7cF2JRRV%2F98E9T%2F9iNNtgOiHNCenE4nHm8UM%2FpGDYKIHEuDwj8WeZAqhx%2BZRvxtbOMt3O0X7o90GNOLymw9TC7r9LuUZXDc2npiANdEDDWXKXsclwzvhpAvWWEdeRQabTzu%2BG9DwRH4votCadGsbgPtFr7FMeQEwN22%2B5a0Xhd0xviXOdoGITZZ2bcrlG1RNzf4EcgiVosPhyqFtHbTp5%2BCOuZ9B0RTCwv4W%2FBjqkAfANx8MgbtmnNTAUEZ7Q4RgF3MjPLyp7e6gs4AH3lO33ux%2B9BtPwzo%2FXv2lm69fdwCwVhtzB16eAVIbNRwPyzH0KcMPJgnP5RegAUj9lIXwAb3S9irY1c2Ci02OPy1gKTUip%2Fgp5Dpcbdr8dncxWlMEuvn0cjVFKyPmse51cRc4qoLeOPuD1Pj3TI4FYvycSIVgJEvUpl%2B2%2FfXy2o7C5kmISspmq&X-Amz-Signature=83ce078b9f4314b92d71129aeffbd5773fd751222e67dc777530cc093bfc834a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

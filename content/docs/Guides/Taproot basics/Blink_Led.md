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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3NKDSAL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICS4sRmEERS5MfhOX1wlVjEyVmvOlNc6LqmNbATimZtnAiEAiVffTKHGS3RqsrNV5LI%2Fzoj0ucU%2FCHRizMv05NeCbRkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHdjB6966H%2FZmBImQSrcAwzyuYMNfZCQuniyj9%2B62ZftCItShattHS93OZvKBaS879HBLTgxYE4w7wxjKXmBesTndkagXWzowZq0vGRi8j1ofQ9PiUM1MiQLuo5nN8JKNx1oyDiFUvEZH04WY0NZmCE1YJpkygFPEoMY45cOpvi6HBBcfohYPlDpcp8XmM8DAwLLXbfkoij4zGo%2BT6nkVhyheNdTT%2BqstYVZD8HZeU0hdNq2iFg26N2xJLmfhULCt44fHKNTuFWvtEtbm6rzd%2BAS1mydo9u397tCYPzffonykKx%2BNODsILPM5FgUuTN0%2Bt3sg1SNYuRmYjikIsaeeiqYPKX3o8vjNQedTQnkrxL5utELpYjTuJXEimaZdyV%2FhlQomR%2B0Mwub%2BcV53OzW3oPkCxx4Ce4Gsq6rAmiWWuOMUw%2B3BHozJ1QbYXR7FNtH8UEV6SqatRwGYukxKJeZ91vYWC9xbYF8RIyTYo71gwK97FAnqtnmz%2FY5uZ3RijT1whY%2F%2Fe2jDmrUuN5N0d9A36tspR9FN7aHZkZGuME4%2BU6Ll%2FL9lUVCsRlyM5cgV%2B33497EFJ33c8lWvt7VZh8yxZaP6WpHbP4TuUiEQ5R7BFbt6vXq59DmGSQ6BTZKchI8vzUQUanepO92yDvLMJz%2FvcIGOqUBhpst6fJNbyZ2AYf9Mn%2FMEa9RPkyh5zrQs8TezEyP4xOhsXEUJIoYEl25H%2BxdWqShefqmEhalNZ%2F16tz47rUC0uy2KdH0cIUUO7%2BgtHU%2FqmqIc5H%2Bqs%2FOpvthZnfTqT4hRl81t5vvbKR2DjyYZWb4eIYgOoT9wmXCwvD2ZqNGAunWPRZ2YQiTux0I8nu1n5BSqNreb1VYK6wt8f0X7%2BPkscEo0apV&X-Amz-Signature=0df9e1e444a7d9be0036c0fc186b29f75da01e704507eea3cb04fab1004122a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGYH73B%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBvWVyVsY4Z0pGxpOl35iK%2BhOP2lOg15GZ%2BDQHOt%2FvvnAiBHRPlPrvDhO9grvMBGHxKfOOLjTt%2Bx07po3w2qNdKkYSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMLNEkqVwWrXNoFu9%2FKtwDyj2%2BV4sL1aXfl%2FpxLGjbgjM7CF7z37bLZpTjXbXlqSHgCI4aRjeC7V8bvXgNo%2Brqi%2F%2Fx%2Bo1tdf1eUkgaGoXOck%2BiRSy4C%2Box8A6WBDpdwPlNoCQmsPmLqPwcYa%2FePhbQXxpZl4zT83ZaropYCW8%2FOnpbkwQ8FDON13B47yUX%2B59xHzerFCiGpafdha%2BBIUqEZLRZ5Au%2Fh6k7MwnbhYgUlG0aY42fB08RGHcEQbHd4l7AlU9E23ejF9xNw1sabti7Z%2B2RK5ohr8kPAvUfbaIk%2F2GJibt0oL7lqx9Bft%2Fp7Rp%2F71YnrarxGtWJFoarD0uFsmuLFn66Sl9lnlYrMDh%2BxOmxxcx4dJAxMORSsnNi4DOib41Egmkpkv75%2Bg4pRgOtgy9t6vkkTE%2B5Fq3QxFIQ0qgRYCENWnLOZVAYFEgzwfGRZ7JDjQhc5NEKeWHGRaD9yT5V7UXwVglxeXYRVFYgIav01SaMIaKb4oSMbCLZfvx%2FSge0ih8Oi5nbc%2BnYVsPO3cYt%2BuAcnyk2p%2FnGyRHUsr2GoxHQeCUXjorLm57Haz7M5Tj0IuQbwy8s1BS2B2o8qkyjg1vwp9%2FKHczo0A%2FDGucRal4ezCD8Rv43e2BmXEqsw8nL76Re1fXvojswsv69wgY6pgHtGPutkC%2Fh%2B4nsSeoN96R7UAgdPkeRhLM0EBbkib5jHSSeOGy2xi48eoLRm07JsUD6DgMisawgLxQPG7DSAGaE%2F0Xm1zBodvPTjzWUczojMjYvYWIQDmzSfrlZJFFdpmsNeNJE7K5fGRM8GlfBDRKd4dLswow2Jziv01P9fZMJfeJdnj0X676AI69Skct7UhUrCo0yfSe8TDbd7e1hZOK8JqNBNx9x&X-Amz-Signature=1a006b48fa98c4e4905cb9f68314ddeab69aa94a7278d8cc05cd47ae4f55e272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

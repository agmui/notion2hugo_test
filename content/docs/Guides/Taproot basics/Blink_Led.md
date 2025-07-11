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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STOVJTP3%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOdjUNiy2sPetv9EpfmcidQUqzUHO%2FYfk0ZnXKo2u9AAiAlqFBYulgsv7T0yc9%2BmJ9%2BwpNIU66pm37zvhnWZi9xASqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF3cwtfLId24tcFcPKtwDhbE4xDZ0bk8yXTUUo1zjkDztXGSfK0lY3u4tgqfjG6YGler%2B0N6qs74XYq7i3%2F1CXFDYIAzaYKsqUHnoj%2BS%2BoRQwOGeXaDMdaOXTY72On0xGuOyv%2FKueCzMkgLXCT2ZctA219Ik5aAGa7dXwO9Dbr%2FiNkdvfgn40P%2Bh26nnBFiEz5bqAwF96ZTEaPskjOV0mpKuLMjtHDtJ1p37qJepRVddTaP9XBWIxECOoXJbtDK2qDW2M3FdpU8ex9mOwYC23Guydd2hipmJG%2FfcSJT0%2BNKKQsXsRtVyfL3bkLXHhBcLAj6vd9%2FeQaXm%2FQpuGA8m0rJn8h0FMApU6LgV6gw0BXWayTraYAZZ5OZkx3qv5dEE0C30AHkpXROIfcpcJpOUzzcbc0tzvSD6peqvcq9%2F3sMls8hLCChjIi5mOoYe9hyh6cx7oaX1rTCQZtQ1sLghR1PF7JdsDK0XzOR53SEYUdtpV7MWCAvAJ3bArvAaFhRSZ4gFMkGsKMG7%2F6dJMHkgc95E2QCWSn2EDY2gpL4Sqhy4LUju%2FLnjITPIHFmptEgVQibUceoKoccjEZ8UtKVI8uiIOc2%2FPr4ZxCzsw5HYKV3sGu%2F8FWZ9tEm8w8ZhsMjRfnl6N%2FUtiSR2sUwsw8P7EwwY6pgEQhkwN1em72JUJe%2FSNCRmfWQstxu6K1CNxt%2BYf%2BKNVvumAPZNaMTsBWvnWF3Wm4qTcSWYlqJPyT0EXhJlGs5UOQ0%2FKEtfWKCh%2FFa2LgXH2ghnQ3A%2Bs7V7V3TLx%2F8q1SOWVCuhVrqrBMKRPNN8s0xiOUKY8Z15bmVS98lYdUEylBBK93pGATE72HrIHDITgF54UIa%2FJO3dkokhk9gn8VWIla%2F%2BDiPMv&X-Amz-Signature=062f22d4711fbc544cc73554397e41e73f6eba43ea75fea728c6fdd722419b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBDY4NF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZOJnrM1ysbGyHS10FUmrK5QIf0QVdm4wugJK3%2BLib1AiEA6sQdgASBq3yQhD%2BC4Exwi4t7PdbIRtsumBYAhK9gc7oqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlZ65755d7SuH8zaSrcA2%2FokgPIFaGdJVjgncD1aPYLE5XGiZ76gSQE6vwD1nZFDjkzjcfniwj8HPi1lLrMAHhA67%2F2cNnkVLMFPbg9goCoFbzEWSmLm3UoTq7BbH%2BrPdvuL9%2FfVAzfvXf4yjCbBvdLclGp3lz6meN6jfB8y%2FOVJIVkJYk9WrqiQg%2BIckgE83nUzjiDoRDmoT1berzqM1q38dOp8p2USUNftW9ZOO9aMLbf7VVjr%2BAxpRmj1pPJbIfmdL3YRVaCFx56qgfZWYJ3QIODGW7Dol9lGOcXZ7xwprIN7JjgdDvoGjaNeX50fuvnq3HFjKoUb5V%2F8gAjhkyHd3nvBEsjGUKWiq9eoQX%2Blht%2FNem5i%2FcsRlnjb1Pzj7ul93QlUFUmVNq%2FQxFmA1MbxhP7wp4uGEudt7d0Tr95NAjw8rJs2J0%2FCV9U4HWnPFnzoZE2Zze0dzjbYmx7jIzEunT5jQm4Pj6S9d7mF2dCir2Lyi%2BgRfF1J%2F1lGaTzH5ag12v0xuCXPylvZjwV35HmbJQPyV1kLU4nJVi6Ewo5cSyCcDc4xulAmUdZbXnJSGXkIVsbRVvcgjjnksNholva%2BqDD%2FOMMsB9ldmeLc9Jo7DcUhfWunp9goaHWSPQOP%2Fho4GqGMSN7%2FC%2BLMM3%2BxMMGOqUBlBP5vpFBuyY2bChH3F9MsLd9hnU47P5I%2FOx2yNrcdA2Dl8pR3sVdUcCON4pg65owZwl87E%2BygobUU9JSwXdyNw3lGLzafaxmxy43nWglI%2By%2FWyYATO05Z4NUEl3D%2Bz7WwgzExVsxtZQYNf%2FmQMd12JTbAzOF7V0QdTsg%2FkNo4pjSE7T14A%2FrJLwsch8OkBN5k2eYY2pG6jmvp9s8NHo%2Fx%2B%2FGu%2BR%2B&X-Amz-Signature=196f862f1fa082e839488cf247118415541c513c5819de5cad896bf069254492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

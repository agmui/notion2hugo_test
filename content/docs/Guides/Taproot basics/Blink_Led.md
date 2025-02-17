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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKSTHSIP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCm%2BX23zOY0Yop1cFaUWSZcl6yhYNmM6%2FC2THw7G%2BqTPQIgTiJMG9bjHsX%2F9TxzCOZFa3HuhHDTt9fd0ZuKp4hfpoQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDESJ%2B3QY3DPdJbN48yrcA%2BeAPDqpjdZ6pUd6QWTgsERu6%2BlKjgwFb5YaSCbleaAhWXqPp6dfBR743IivQWEw7dEqQQAkvsgmEkgcgCswH9lSx%2FP4ZuiHosGyu1tkXAhvToMLj9PqsjpFNkolS5fA4iGobFeehLWtMgnYYFc7seDQU2GRRw9PBMxShgKu9Kbji8YEgEU65jlArhl2F9yho46F2Gx6rMzIVcg6uuY2LkfcVK0d%2BDq9XlbhTCuypxaIleMcAlDVW7seMKMc6ggpEDguFJz4J8TOFC48kIcwDR81XNa5s0IExDs2eCMgx8S%2BYE5Fl4CxFB%2FskgU8mnjs2HvlXO1%2BVLOhaeaadom2BRGdyZTGdYe%2Fa5YnaoLgYFrI1F18lOsTHEeBLSY6Syh5JIB6d4biLd7imEQVAqUKOWembfnTET%2B2cgwK%2FTTagHFQqyvawk83Fn%2FfFqiuwNJQ8qszP%2BlbiNjxIHwjDAZw0ESx9zOmGQ%2FYn9XlaNVEjj9v89H8ttFdM1UnFnuvRiuxz%2B8dMRg1cqmS1zGViVjdpl24EDl%2BlCwOqrm39nm4T4tMatFKefBXkCQJXrsWP9JzWKwqEsluRKknbqWLdt0m%2F5QTiadQUXqlJa6To%2FAf1E8u%2FdWdOswoWkWyyqHNMJnOy70GOqUBuKvcCnnMEW4YMmI1qNePijL61LNOQAmaUy3ykXBXlPaU2eLBRejYf1L96RILvET6J5dDqZAqrZAkTbffVeoapBtz1TIZCBdVdZjhunZRqxg797RljkDMdNeAXQwvKwKM2c5Uu0%2FmCaVgiPe62DH5JpGLWDOcqZBztc1fSFJBJp1K9xWC15%2F4pb6pDxLH58i4NN0WGCtxksiAFWuQyMqcqgcj5pZH&X-Amz-Signature=7b259d3456e94b860b0e10d6146e50ff598a456bc68e9a8ccf0338f09731c26e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS4BPEAL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEhi5zHLYsCdc9MDfszcR4bkgIdF0qdbYvqQ6WYIGRyDAiAxSkxsy2RlD6NiK2yzX57Fo5omcjB%2BQ%2BcgV99NjZkLfyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMk9j7CG5zX1qZI6BMKtwD88R3u0KyKNfiF7OYHnYP2f%2Br7%2FahbvKAZYhGnB8kq1plTnX2pWSyaRGisA4FyYqFZ2044PlHVIf%2B3lbxLcQ%2BMIGStRHxHNiT0dDPCXLAJTpIBhZ7CyYpIBi2P2DUtdAgRjtMENvsq1r7r%2BmDZebkjuXLXafWWq8OO%2FbgB%2FctKGS81s7MdZkk144MeUexs9XilLBbyhjhl2G97TFg%2BEWRsEpOyvWSYDpSxnJYlVe7vmCX9mCT3M%2BYOpdowlY%2B2MDcRO%2BSamuyh4X34prOHrK%2FAXzrehHzTWKlaK5KgYo4lwYghv3VE8SjOgd%2F%2FKpVXx0UBi9xrYAAT9OTyCnc6WZMLgrX2ZPsX0IQVgfF0PybGWAh9MecDkZjYNUdP1dcBcr6O%2FTo1gYZAoN50h%2Fpd9rm2cPVrvKNxyTlJGLa3RW6UGxKo4%2BQEWgMao5nrVUFlt3XjuEBYduOKz9vqx1xhA39BwPuD7ZUp22kUzUu7AcJIb6AVFHoz801%2FM9h7omQAnhsDU5QuZ0KnAv4iSgytp%2B5Q1SMrobrrqyP6r524vlxEmdk64JAiIpCbsdXZ18HFm1%2FUJFY6qeH9ckAODj%2BbwG8AJj6zmi90OeZWYmHTGpOsgFx%2BoohELmG7ZLhekMwpM7LvQY6pgFqYVLK0iEledrkmiAcgHQEqXlKOo0s5rZ%2B12LOqNH5Xpkw4Y7ULPzJQrxBS7hAC3kwiHe22kTS%2B49t1bJMTiiS%2BRem8sPSp%2FvmTPIFrWLd%2BBVBTJWAR%2F2mxcMVWGAIpgcITx%2F2r0o5vVnASAyMcp60lNzBCS9M%2BoJ1%2F3ltZNv1jeGtvNTDX65PlXxTxYfxeeb8Zz%2FExniGR6YVWY4Hv8M695HhRA7K&X-Amz-Signature=fbc8e0d91b70c6c1289ec5efebdceff73c3b3a27bf46fdad0afc708a67f8361a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

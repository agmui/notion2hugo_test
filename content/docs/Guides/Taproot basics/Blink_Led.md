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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRG6PXSL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEslNEjWD9Uk%2FMeMcy7AFGVIh6SqBeh1jD6DBXYgsczOAiEAlapez9%2BKyr8nviVqY9iagVXU1sGDxgTCReP9CWNnOFYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0zXpbhuj6GG5D1eircA7iaE09ka6Wtm4Pgwwok55Ezrr7lmvDRtkFHWSuC9pCuFBLhsEZ2B9gsqoJJKo6Gle9gwG7JnInu6w5dECZzF4v3Eq004pA1RQGRRveRea%2B1c8VuDGWgaToJWmZltBOveqrOO7OMWYmkJXLsfuIx51MLDVBjr90uwoYksUF%2F4nBnPsc3Ch1rlfl6VjgR%2F5ZgM56UMXfZvDo584RY9PEGm41yck79T305eJYRFjCzGEvNqbeGMsh3D9jY7R6gjY4Ew%2BxGg%2F1mwTz9MJ9Ro3kCm7jupx4Digb58Wqppf3TnH%2BjY%2BRCHNdg1yQXgnptyPJecng9fkSg2xp4L93TRaWH0m5NKT6u0U3EBNHJc76zcUT3cSKZPvlK8VByYqGfT3peghdEzBNtDR7PUveNpcuVqeTVx%2BKoqVN0ohN0ONsjfoRMcOSlpF4cNG5Hade9W1xLJNBKSlonwLrwDTNUhMZUPDLcqfM90El6M17mtiGZ3gKmaWWPqsCN%2BHZE1pDMNlx1gdfrD4iPZqhbr%2B9j7bWCkjQwKVl5mzmAa5ndoG0OxoXrrI1No1LX8mfK1jnxpVo9M5eDWGoh7KWVti6zFZwfKLBTkVSE9kQPIaybOJGSjzyDXloHbjHhJZ%2F04Zc6MP2UjL4GOqUBE5Pzid6AaTzyW7B1X8ENlEb2wPKyOJSK%2BgAD7KRyRb34QBpJjls5%2FvlCsr6rzF4WSZJIZf2BDxxgbj2ElhD%2BcQF50%2B2EjwbTdbzCjtys5fG0xYfLyisHyhORgU3aVmlaLNkRy0qULRtNejPLAipK%2F8t4on43RJSWWvrj28jmSrHvAdBA8aPeAdZpfYm7PtkK%2FLWCpMJcaB3pS345LL8TCF7ni2Fr&X-Amz-Signature=06e98b28af44b1c7dbb982e8e47b0d3691420619e5bba6bab2193204435f3503&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEVASJJQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIB0%2B8XgOLObKDZWz4ew4RuwqXoslvEGHaQ7gmfM6nSqjAiA8AbR0oCgSk0%2Fy2GenchLGvB%2Bk7wHlYv6gB4tuyKLI5SqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiEekE2VrJppMLMH%2FKtwDARSZ7q7aJtWT7EULgK8koombcuwqPXyJH2FX362Cl1UuIOwbdmH0f%2BOIVMYalm%2FfDtgtguLH0PAOGZDJ4JmI5ydEVu%2FHmvk6yustgydlpSQnArJE7lOj7SBCG7oe%2FAbi47h9GxrJG8y2FKoGABomHMLwyzRmFat9Did31a439%2Ffux6F219FK9l%2F7iCaLTa%2BLFTz8NkajE9yqIHBWg8zkb4kh0E68TtGh6Gw74%2BpnHn5rJtrUr%2FZ2rm1P1s1JbcgHbnve2SFaDnFUZYa7W6ACojHlJHVTfYkjrxlgxvonq4kNmemSJ0I20lb%2F0f5akyv%2Fi9q9u80EOy01izw7XGzduZ8UpOjtdJibDtehvcP%2FcOtF2KPthKj6QxmWlOFnLQ6iIVEPg4kgRBwcgUJsbRyx%2B5Rc0%2Ba15IW4ZOQxHlvErIbVoAlPcl1GVV2%2B5bISJTEuguQmYx5nHm15hNmuIB8Yo2euDTsIUHxINE7Hd6fZgx9XMyBj%2Bbs2Hz93POYuz05jAZ4x4R9NEfTxZm2X85u7mOkzMHfhqmppuEsCplwrsl%2FbmGjh3BXdrz0cyFNQhYmPZHz0XYF8dc2jZnjCQWGswTmU2mFLlzXOnDJVksAcTKPU2T3yT4DoPib89OgwspWMvgY6pgE6S60IAT7xRu%2F9aCjIWJZhUbLxxRo9AGcb4nzB1OIJCYlcVvXs9RCC2wA9xISwzuWOd5CFkP9FqMhAln9AhISR4LUeZPp60t4fngE0zb%2BeR%2F1uCzEWfoDDKqVzMzrG%2Bprd4FZijnwr3VhmugsyEytuTMLvvytg7oCyGjaxO8J18VYZ9NWb4l7jj3Ux0ftfOepxBQiHfRR9uwka2JqbKvjJu200C5aF&X-Amz-Signature=e91e1dd571e03707848e5b859ce22e1fe850a68a2a46a7ff2b02c5a6444cf165&X-Amz-SignedHeaders=host&x-id=GetObject)

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

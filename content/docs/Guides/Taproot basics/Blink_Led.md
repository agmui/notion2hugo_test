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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXWH5YQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCqq1x74o1yYoJphcWDxYqOPpmjYHBHr%2BKIbwPNIL%2BwAIhAP4lmfxqzU6gO6mli%2FgED2kF8S9gbhwN6XaTT3kDvF5PKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyyc8EwtT9hgylSM8Uq3AMKBuIdQhvfb0Ommfaqa%2BFliNQpHdTODO4a8EaYVB11hkBDL6meLuWO22pOHxj5HX66v9cuSHz6Gg6GUv3PwYqzG828xAb2Qgw8zcC9uvF6Y4q3keM2b8L3WY2WR2pYoNt7Q%2F4hibceyI%2BsRUv3vECn9J8maixyIuyLbr2P3hcAEJQziG74MC6xiQWfgrX8QRAWtl6nILIcFdn4m5fmUnrEHpRSKEaGZDr5bmkb%2FSzWt%2BKYWUgRF6WXjRoAcRMRoT%2FLtjelsIZFHTgq8NccpgmIVMEcumtWguTcIeIz5fi1hTKn7hQHHu9U7l%2FSKbAHPn%2Fs86IdgIAggijP1RJ5tQGbCJh%2BD4s163p5l2sft20sBIhKvjl7ZhALVHHjjarpL9CwVQvSVAscnKp786xlt0iUZTgR4SjUpxBQugeSQgbbX7M%2BRtxrvwze99tq7CjFzxua6c8YP4ouZCkHZbwW9m7eOBynJCenVWPQtBIBGtobgLDChvpjY6iIxkIrZyoRKHqjEDZLVrP2K%2BdS%2B5%2BXNMwsCXpzvKkX7GOxNy6g32TgyZUdobjy3A7lQUpkULV6D54TINdvShFYx5qJa8WO0NLbEesXOtlWnypUPZ%2B%2F3Qnb0nEVeaiw%2Fu9GDe2JLDDi2%2BDBBjqkAc8t%2Bg7AR4dkfCU%2BWpSZbsDFWXUNx%2BRpV3dH%2Bkhe9wAUFzhl0vqnm4C3qaQPS9R8KsFo7wZwkmRvBJBjTvnzCFKh3KsK33D6HIi0VtY0kCoiHPBY%2FLiGK%2BeqZsyFS3SkZboARyKTh3hEcuKSV9brbbqWRggXSMDpT6iCSZvNDKrM3z3dZbgGyXbs65Q6XmeIDgv54DeNuHkbGv83xy4884UAvLKJ&X-Amz-Signature=3879d3746a1355e8fdde45a9ccb86d3ede3af84dd887c1fa9b9955c44eea8327&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6D6F2PR%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyKRm4e2bhIkQ%2B4FR%2FACOykMmIQdJaUTL0UqvxZf6%2FoAiADj4APhgucNmmvnTOxq3dL7W2HZHxuWn0bEcJEypRVByqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMaU3vLo19PysNLlNKtwD4Wrcx7CHMXLP31g48ETiT1LzVHM7wbm2hOAKdRCOBn%2FWHDxjb7oDH%2BmV5pL6BigvEND8ILYjOgQ4S0bJBkGMJMPyBOnAKD9fPqq3cHc%2BDxhHiu3OLlQPp8gQvG6%2B4BB0jPKs9CpDxaPDJNwqbDiPlXI3mR2EorIRj63C9kDnDKyL%2BRtC4wKJhWT%2FXl%2BZJf1TKVW2dd9Zdv99zLIFPFDwu8TJoW97sZC%2FCvid70iwBAHa22ZZDkHoXI52wn3equ4ExttjEc9SK7rDLD%2FK6YvDOUCDtgYW0xue%2Fci%2BlasAu%2BXOxbuEY0Yj1dihVrmND%2BS%2BVqdt3MUCInpx7At4Av1GCNX6Qh9Cm6gfvUMB6i0ctQIYWujyAZbeonXx%2F5lOAUEzAoJ3UNRoReHZXjEefvWUxEsUI79DzU88XgscaARjA6tB2cKEsLvkowdTvz%2By8ihqqQy0hQEB4Jff2KD1ynsT1u8KEGAnRMSzWtSnWMQrs%2BYOYjc9VnvhwOjfrMo7ntlh%2Bc2DuPg0KMQYIafrqLgGwPw3ohSighbqNlZlN3gl7q38QaqRV4%2BxaPkEMQEdFNQcymlLhjrdzZUyFC2sn7NrBcipysF%2B8Sd0EvGyN0Ji1ji5m6a3ZHoA5ls3R%2FMwudvgwQY6pgFOealeIusP%2BDjlWblekWmDTL%2Fhx6kUDa1U0ZVtqBwYf1F2PlqgNXY7f6U%2FKq0xjt84RB%2B6NMRIp9UgA4wCGM4YqkmmaqfcNUCe1HoG8qrlEkHEjIgnwn4lSYmDrzJL9J1JyBtZmu8Q6Og7cKzH2LhZrTSTFkNY2s6ITfr9n%2FEotYAHJ%2FwkK3TFT2I1JQpljpX0%2FFuChKBJIFu7%2Fbh0QqEBQEFQ7CDF&X-Amz-Signature=8e191391bc5539be119998665ad4ce8dd32160ec2e5ec6aeeceb297d7fc724d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

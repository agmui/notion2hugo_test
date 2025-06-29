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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654X4LH65%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj81d2Y6a7HDN007ynPQTiTvL8b6QVJvHuUzyovywC4gIhAP4H2Iy%2FMpHPH5i%2BCfTGSqDopJrKprviWxF2oBbyCM5uKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzs3zUYzIc6bx1yGiUq3AM05FwTD1oYIV1ddKbs%2FwW4ULKpxojx3pXUNVpIAkfd0vseMTDDWR7eO7Y%2FAleORIsbuV4USor6mIsGzsnxcUqBBpPqMUiw0oNbAfl73J1Hb6CmyZU6C%2FCw5KM6J3UhtCeF6Vtcuc2jQ50njbB9ndn7ndMV3VoVOf2Wx2vjJdzcLlfaY3cj%2FJHpKOBqj6DoK8FOeDiAM1mvoN1X0QYa264SUz2Q1lOuFY3FRNyS%2FLqQsT9hMrmKS8pZEcoFGGYrfooHaYDDLdmsFaKSwwjjbj9tIdCoO2ZtjFaelQEFm8pvm8edr%2FOXEEM7wQkVn%2F7FOyxMzCyFAj4v1OgjPO3WJ7bRReVr2S2rr4JckKTmXK%2Fm%2FRlO0E49lklyeSAbFjj3Eq9XXpKBXSQBvqfGwJw%2F3Mzj3GS%2BhCO3OgJv3FBJA2yoiz4htWt9aM5e7unFsxHwcA8mjjGDvQ5%2Fk069%2Bh2QItSxZtnzecSAUEzNKV6VqPslBFuSpT6w1TVZ9wcMdEjq2sZuAO73%2BLW0zf8AhpRygt7%2BGr8mnZAgrML2o5vgAet6dwgnJ8x5pd6PpWR6SnWFEcBiUs4zalUFGgjR%2B3Ag0bl%2Bnuk2arskdBvJP58qJvylSlzI1ZaLnlrUKq0c3DCI%2B4XDBjqkAQ8qyqBKhRMn%2F%2BUgiLM9dg8ooJyi3GR4DheB3tzoP66HJyHD6%2BRWt8ByplvlHmQcYPYYso7WtxswBwN7S0aLT28R%2FBDiKMANphvyx7O3A645tHqQQ%2B%2FtCws0tmUA9MLwx2LOLGHUecIC6YkpF%2BVWYJbBSSLPlqUe1rCO5g4WT6aPfnTNU8gRfzBaHqSrfOJEbtkyidYXRu38DTFwEz2%2FJXB6QrM0&X-Amz-Signature=7963f79a44730be1a746317926452164bc5df37a66772d2975908fbb5e72c566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMP44N6W%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGx4CkZLWgT%2BKlTBt4B%2BvNqgjEMoQdmfRv1A1JRxoNr5AiEAn7X%2FiDDHGIK54sIlXwAR%2BCq1vPRZ4vulXfrZ3UsXqDUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLJ9HCbirztlmUlwSrcAwSqz4QQ1I83B1Gadsxg25UeRpjvh9ZPY5QIZQUbi5a%2FPlBg92oEmX8q9K6GjJHE8NIY1yAhvrDs9irzL%2Fxr8y1xOl2SkpktM%2FlmA1bh0DrN%2Bh94a1O%2B%2BKEgD6CdO6lsJ1xiOy3xya%2Bqf3dAL%2BKWXGt7W5NMziyMVwDNq0bfNa4zVa06%2FmqwNNcCkIa%2B6XDi5SWKmPfOSA6xHH1EHMm%2BNY8GFVjk8k3mmwfG8jwXNsorlIJlQPoPTgv5O0fB1sh5ZX1u6c3tElGrD2VrJsPtsGceZWE8ylvgqxc3CQz34MRf0%2FwgsYkpmigr6GLl%2BOvr5%2BJNsmmnn%2B0M7XhHEPXK0rsMxd65FtPG0idkf%2FnXkgGDn4xTON5f%2Fb%2FruG92Q2VZZEqHzoTwpIm5APlTIO82MJaam7mRT5g3JuOvnotYbJNxT4xv4vT%2FpMOOrYInp64OR7h0NU2eYdCnPHrD76Tu6o0QasrokbBsnH4Zk8UqH34KIJABQ1BAGkMdGRVHsruPf7tviMD8zycLczma1mVgX6RHXI0QBaP186YKkXJulYxQ0bbMxD8STRHL6gu%2BE6fqmzSlfbM6d3K%2B8GE8I3NAAAVW%2F8UAgxo5laja6w60NVACFCGYQ2QL5MT%2FUEqfMJ%2F6hcMGOqUBX2JUci2ILLFohxwe7OrdwmsLrUb%2Bu%2FuEIFcX1imT5edYlKSp0FNVClDE7nCbYVZDPsOW5RReN%2FYAPwi4LbYNleMk86Ivlgwvy1kAZYBHfA3jqenXHA5%2BvCZV0%2B1ZV5MG2FEFsZpqZRQ7D9XYTvXbVo2xk9hzCKfWzUe2R%2BMfj7Ehh%2Baf9K891QVT7Na7Ez8%2FcIEYnjwgkkQ9IBE4sh3gFegbxCDD&X-Amz-Signature=0e2f1ef5da4f2efbf0a08ffbf306f9240e5696b2e0c1ea2214e507ab63d61150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

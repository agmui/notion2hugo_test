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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRGPD5J%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmitRIoQYIldappPeRCx7%2FOYDCd17OKyyTjl5ERr2ZgAiBHTpJOWEQFlUfXTtZFj3ecvKpniOYRN%2BLibo0fk9UKNyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMfgmCXJSG4ydFJB%2BfKtwDmTbGSvFlnS3vSZyDK9H4zkz8MfgcJDK8n4E657w5Jl7hGChUzcnrwgmuhB0gBiYCKAu4fPuFH7PcHy5Vo5zH%2FilfTrAbRIRpKW3FDEIITYdKGg24rmyP%2FNjGGAC%2B3Eh90xOmJPwI1TG0GRVHoX%2Be0%2FqdM7YuI6ohp2dquhSGJ9Rj8T7Z8oBQA%2BZ0oQ3U5%2Fy%2Bv0DCSwCQtgOWb%2FmB7T9d8Crq8cfcWSORsTL3%2B%2FLkZpVkQUKwgrQ0u38IY52ulZi%2ByXVeRU82tZrBGJFvRi2kvLyK%2FEL576PBAJMuISuLxO8rsX%2BcBxGtTk6rCsv%2BW1LdavgaHVzlQBYyttlLZOt125LUYNp0cYovap4JgdvjLx5RdQbcxozVcZkJU1FAGuGj%2F%2Brl%2BIqtQJlYvBKieQoEZysw5IDDwxHjNGW4%2BjuXInjjlglQhkvZ1%2FD7W2J%2BQXj7e%2BDIzYY9yBCGZZTPPkDvu2DE0cCre78e0cP14x7sE5HAwqOBFBVqZYO6PPp6NLMSRjaTsImlVjMErxLodDXIy7mot6Cod82uor6qCu1aCuHqbJV2nCijWR1fGRDujm%2BGKU47iLnv7aFz4zqfK5M7za8VoaZ0qaSLtNV4g2MTHBzOle89BKHI7lL%2F63AwrJ3yvQY6pgEqxJi2PvvLnvOPdUcOiVpgu57KOyctXn9S9HLTN9llwTkDvaN0PkoNrAX6RVd%2B3EYyfL%2BAQB8ELPUi4ZOkvaoiJjEhwBr%2FPBBW%2B5O4Oh7FeLOXzPLDELlazeK6uYP7R%2Bf%2BsdoHHDkMRpVRtC2k7Kgs%2F8IfeIs9Q9WozuPJ6Dnx8%2BjlUOI3jGK5%2FYI77LHkgC7sjDDUdZ9XEcMera6bwV%2FPx0Cbs5V8&X-Amz-Signature=667e0d6d64f6753d1d89929f7161f49979dd0f27e1acf7bc915c89f9aa9a1430&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUBXWDK4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdRdC02j8XK9e0e1gqE3PhvOdwLSOUVaOMrOt9JviDKAiEA8Hq8ZnXw8mWKTLjpz%2BTFcBonLG00PdTR9RPf4qlZI9Eq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDKF15jtHas6rSUJ%2BCircA3RrAKh3qgqDlqX3gnu2o3Pbm4fjR5WQKqg6Xu303zsUoVyTNxu530RJWz5mSl1tpAbIWimkNeu6byaADW9hErSzUhX8SKTdlE7RU97PIzxhwOHlEMF6N79iv%2FfLwt62pWCQJKnCuZOPlEEkTA1EXI55Mr%2BqP%2Ff11oFw8p0IeDWEkklYcIBJoNo04QtxChpZUYbL%2Boe6hQBFcv1dy0zXa12Ac05AOLGiCLp8k38jDbAiJryJ5jawKFhk8tNygLqOtFtxTJIYMiD6y9%2FdBGlVZ44m2n8t1pKbyWQIIvqWgksTodSF7o%2FUi3JY%2BGSEA4K4wkQwNoo5PEcLHBPsg%2BUfJzuEM5cLmJwXbHYGScy7nDV%2Bz3jDAQXX2HOEvPeIO6LnHbmYiEcgSdF4%2BNw%2BiISFHANuqWiBJOB%2B%2BIUwaur3ytE9QXwfZ6DTH%2B3VTUnZHXir6Ixt7gkF9vQUyUWjmBQoh3h0LJm29mxJpPzXTnyRiyPYFBiFSqMhrDrCjCiuZJT43ZgAIErRzJgww9mkjgykI6fiUsL5DjUsP%2FKOWq1Mt8TcfALLiOHuZkaJDMC%2BtSIvQJQi98PjJm0ctP2O3VT80117yHP2Nie%2BJBCzI5VuKzEJllMka1tXdEnqEkXsMK%2Bc8r0GOqUB83qWhvD89Q8bcR%2BbxB6lb8%2FX178fMvmNo2L8ZdpPa9BnT6xURC%2F22sej8KLLyLu4rGzZgy%2BakVxSgoR%2FFMENNyBSaLKJOJc9QvJBsbbvGozKnDQ7ZQvk2tTzM3VxwxPROkNQpc1Lyd0nPTqcRdSRU5j5cY5%2Fs%2FVVV5vA7u45%2FLem8QWdtFShsqpyL1ZhsGknFIbI3UJ5576dh0xgbiGThkJ7zi9Z&X-Amz-Signature=06ca1443d4c43dffd7e3ec404ad30f9e63e6883ffa0c6218799ff8d62737e651&X-Amz-SignedHeaders=host&x-id=GetObject)

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

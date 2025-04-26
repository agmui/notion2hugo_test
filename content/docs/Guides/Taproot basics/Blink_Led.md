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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPQCXJJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNRl8QsX70x%2BCtYPAjASNinawtUlKmAU2HGTqqY0%2B3lAiEAowDdV1ActexqLqi68xVQfIvebsWPWGJwVDCUF6h2pmMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJ13pO3SK14FU%2BXMRSrcA3X%2BRZwZnwZNVBLCGu4q51sMSNm%2FJqQz3Yp%2Fw99%2Bwomh9ektvFyUfqtecXPtHHc0DKVSwf8o6arTr4v7tsFT%2BX%2B0Whhdw8LYnnx76DfKAR1QJ21ylWh5HwyH%2FhYyJQUeNkw50CxVz8VpdqHMvrnFj90kf%2BHEIZzjMX%2B%2FwXYGx61FuSIp9w4C17Xx8eS4XCcipVz12VpCUAQ6IhTW%2F07kj5XggWacy9IxI9bw0vs9Hl3WQTTyy1sTmaqXtTywUk3H2cki2mOub15qDvnLX1Baz3e5yBG4ZQzjA6lmAG0rSOCg2MDPagzNz6BxZQIukl3uI%2F3ECuuPOl%2FQB3C4G8YP1f7OGc1eQBcI4oLWnntcklAZCIM0Jfh4XH1TLNHS3tbOihsOVqfCuSlPGCDtIyuOoiguB%2FvXhWyjC0ZpiV5pbl5%2FyRgfNKvDzkc8ImBBajhUeYnLyOk6U4eP8ivqw71rRaamWAtVGiybev1UDuRTtn28QpSp96S4bNPjc9dXXzMlP7RU7qo4BO4a6wf5eD8lLt3jxd%2FD%2BhqLW%2BPKhvqKOkSq47BqF4E6dRHdmHeEnSYOtdWuCdf44YrhQyJ7QdJC5s7UhNAn0z%2F1pRkygRQbIIGhaZ%2BAHKlrglJYBCOpMJndtMAGOqUBdq7aU9UOClTLVHYjHy3PtOB1GYjUDuJIyyhFkrmR7BWpslHHbAcC%2BQWajcMJSj9Nz%2BRauiGV3RXbD9KJgfY7gPJxx9MUr%2FI%2BU5%2FGCojwEF3hdBkCZXIqgxJSQZUGBm7jTUuxjEZ9sOPdavN%2BbmgCUNsMNRoAhkt19wGAgoadHdbi%2BodVe%2BZD3ln%2BGAecvJagkUmjSxvxlEsV5rXPE9qPiXxy4V65&X-Amz-Signature=7c3df2248cb410954ee559396c66041227a7076f321bdd6be90d04549021ca09&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WI7TR3H%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWjFv2h2no%2F7SRwUzF6gJi3XyIXie7PeeyAko%2FuIl6TAiEA5j%2F0sECxGKoCuGx5NpF2KRrqEJXEnMkU%2BDjsUEPqrxQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOwg%2B0q2tkzMkohiXCrcA96woOr%2Bcw9TfkYo%2BHPBKiHSDzfgnTTkiLwKNFX6Y9ZpdL1czJkESJsI%2BH8m5gW%2Fb698TIhVY%2FOnFpaI8h5yFd0ZEPfOTuuxGUckIv%2BkX3i82ZRpE9J8Si%2FdR0wBUHOWU%2B2paZQmLbdTvK%2Fxmjj7d4lAJd1EL0jhjW%2FVx%2Fl5F3WP2qig8BWKOR6BkCHTGZwG2RbRcZRU4Ssm1RRWjKNv5yb3GW9CJ9iv5BByFA9XeX5nPIeUtaXhScPEwmpdtreZg4u0Bawkw5c89MF4TBTBpTOt8Ggvxf%2FzYBW%2BJl%2BWb6XF9rO3PeyxN36J5Xq27RmnbvU7UcIilVGuap5BXHYicm7p8xj14buieaRuYNHYvucUtRPnJVjENyfnAo13z4iQOAyuNrhg0Gk7bRiH%2B%2BBFMDZNrONqmEAGU92tihn%2FN7jGu8zHteIcb3VFi8%2FDzx7ZaWdq2THR62e746HEHXcy7Ua%2FCnOfABh1wdelWnhEHDIpkvWAQUbK1eFRf1%2BIzZFsvNQ7qbEomJCX7CIV3k2pZ6NHo9LueScI9jMFhMPCaZC%2BThJ2IX7RJpMb%2FI%2FM60EjbdXkigThBWRxgjv0GuXNfM4S8VxLDGXGaFq%2FEyrAJ4wS%2BdciEBZx7ngbu0xqML7dtMAGOqUBt%2FC7djWynp4Y%2FG72M2oInLmweIFy8S2ERr%2B2uGVINWG%2FiRy%2BDheLUSYcOZQIutrjRWZMLhKWV9Od0xvWdrM8NFHMvJzk1KDpfUgGRVh41iJuZhVRwp%2FbaVZhiTVkrZF8weL9vryBefUQ5LUX%2FZIv4MWhJ7We4InnZqFF%2FqVSsSRCv2hAQIecdFt92xjenzcSAsQASToFA2PZJGG7H0c0KKYjnBhM&X-Amz-Signature=673f9d9477a4f44e9da99a739c31b1923ab3b8cf8d6e9025bcb239dd05242e76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

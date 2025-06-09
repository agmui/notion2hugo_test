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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT36E65J%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtn59PBIXy2XU3UxCSrfXKE5fznuWIdboeLjuV1cI76AiEAhvd6MRqejJQ4aQ7XsUPPf7WPIs8i74DVZuOtkw3Qq6MqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQ3E6XjU3hTgWd%2FnCrcAy4Nj%2BqOqsGYxJbY9iv31npdJVqixORw54nHuqaVuJuPMpDBF670s4jPxolWcHMvaa%2FnJZ%2FVhx9iSGOLyjVPnqWMnFHQcFVPWJAHyfVWtzSg4JWW3yiS6%2BKcuElNFgIQRHgG82eFSzOrkzy3OOKUOR31vg2DfdOh9NFwHEbyQhW4I5TsrJ0cOJ7n9lW9tG2qxLsv423TmoePsDb2wMpoZfQozPIAGEfRIcFtgQvcwkcnMroXbS8g26f%2BS0h95BnHwgDQDKA%2B9UnDzy2W5euPUM0yykTCN%2B1UoBA7vx2mFFHblj8e3M%2BKuh1a3UfY5byNue1IwSsraqZ1D3mxX0KXtrGExcWnqBg1NRjuaiTKDeRdSvt0TK%2FBKf4YZNyArUQMPu43E9sQbqG%2FdJq6BT1uyFdExuCFjwaDJyvTF6wdKwUzEztM%2B%2Fbnl1bh1RAfniFSl4CxD1cnlP79GwmvGnQy1Ii6tT%2FO74%2BuezNGgw%2BGduZlhO0CAnAw2bXIjjWkWKbLAc7wvwhwVqTkYlpTActP3hK66K8q05s5EwHXFybH0%2BYih3U6yZ%2FaX8sHiqcS8kTENs0NwjeaRKf4ush3tGFMqLU2mimSloc148Szzgln%2FVYuHxCq3ND38sKQSF%2BHMKLWm8IGOqUBKFbyYcakWphgCQ478XDko%2FWzqYiKQEMjRY%2FqV0J%2BP9EBUcHzYjiv0TeSk5gJrqx09jOL5nEO70ctIggkHORIeL707DodDowdQHD0i1%2FCRa8WjkFTeOnMdsFcaJ9GpgXcMvpSlUZ1VAwhObLYBKQBISTGRr6erOhj40SSPsAQ5aAMhWczJ%2FMw%2BW9HN4gmHFDA6ETFeGemeOVAPbi8fVFnNkzCEytw&X-Amz-Signature=14627e5a3191a0900150f80c0f5734b176def8d8a750c91a4615ea7f8d4e2cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DB3JUVJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhCuwEJi1sK5VDgl5Bqq4uu2s%2F3hk%2FmVy8BCy60DY8JAiEAv5J7d9p%2Bfx%2Fd%2FSxPIMkRwQr2KG58QuptW6auAH%2FqRSoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGi3MCtiPvhdDUgPsSrcA3Eot2l%2BWnPQ5LogpmsRJfRTLDcY9x%2FZPyfInwPHMu2QLdTILNm2FkTaJOImW8LauNM9GFUadRAJ9kLG2H%2BTXD%2BjYxvjnSX%2Bp62oon8u7%2BN01UW63d1%2Fv9IYfeansE41trX6EEyvOuj3HPhppa3KPZlLM3UOED32tdD%2FxcI5l0y4I%2BYU99xOwA8YmmUxRNlI3KdsM%2FY8eZu1B8bDiSkprGzNtVyzwtCrJxX94eE%2BydP7vajFhfp4V%2FHUoC41kQbIziSUnWqjmetQmDvzFjeg7lb3%2FmigWqsfgvlNHG%2BvSbqU6sFy3ro3uB0ipjlu8crflfoS4eY6a7qp2zfifUihzUYt59t0HpNC8RTTEaSqa1sDLibPzT%2Bzcm631rKpNBpMRqv%2BhjWY2imRbrfi1NXKrfgI%2F2KeTMrVSd88es%2BqUmCKlklzaws9LXmIm1kkHbjQyvzTAV3UE9UW6dt1odgG0phRhDe%2B7fodO6JgCvWPCz2N32XpPtdwBLLDFfBqkdswfcxFYJnbD3tovdIGxkPhudsImsa6CgGOdZWo3YPpFm6sG7O1loYx0QZD1R%2FeddBKoDYotWRLMOtdLlIST4bOraSl89Kh9ZkA4ZAikl5uMdyPmuuQIJ3PTlTAKCylMMbYm8IGOqUB0pbI3WMNaqUNFBUjOgwIQXnhzeQh%2FLTzESitBKM7DWgU7s9u3yzV%2FXqIXKaBvhRZ%2F%2FroYF%2B1gnwfy2U8aFdvt3P6wITj05ZCqj%2BCTgLgLfml2%2Bh2MAbUk40X%2FDWU8AbUEvKVQXCT566fx%2FKd9tv%2FmD%2Bni7yC%2BWE1t4No4LtU766jnrzKCbEXJQvAujpBfvsooaJbbjyCyIi6fiulcm3pCxduVSTP&X-Amz-Signature=2a51e60293925a6f69c6270a910716e67de1d006613b5f481b3ecaee88f86164&X-Amz-SignedHeaders=host&x-id=GetObject)

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

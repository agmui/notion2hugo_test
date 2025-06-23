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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SDGOKCN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCJHmiCE%2B95%2FSL9CMekKTzHnMiGW39b2KpeOgiSGZ8qRgIgEkFKP%2B5z%2FIlXjWx6DUji8jIZgxojHBGo7QEGMD5656Mq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEZaQt%2FMfmWExQ%2B2BircA8nLLs5dY9K32%2Fv7TkH9oJxMyJwb717Ge5AxqC1t04PSd63jVjX3vKha1pgAWsqD2ss5vzRl%2Bdc3cLRnQOy26o1jktB%2B3kAn1NlPnX8w0unBYySZBpLfleaN2HMzMnlTDRpokoROA%2FZqKhWKmMJsG97D2qvKrDa%2BxoWqqmYs2%2F3xCzW%2FGCNNDDhb7zAMQiHcyQvtiK3r61AFl13q07mvBkchHirssAsA8e1LdcLKU9%2FzAQYt8gnCgGKkuorAb%2FCidFRzg6alLWAHfnyyEzD37dgq0MY7rDCwSu3cbWthophcVzSQe8xjKDhM8rvncQ58EXfeLnrMG2sbIWsjNZlJ5HQtlA8aa5XNKSKmc47PJZZB2c%2Fdvi4rXeHUVmTAMzG%2BbkNdcJsD4bJfpQKeHessTPRv8CB8yuSgc0wwlNjc6cvHoK8VBx5hRlcO4VA7fBx%2BJhffTrEINdEZHoMNxZrCK7tF976NK9J84wbYRPWXLl0DEnKchf6KghbNF5sb%2FFdUx6JRpwfTrzDIIkaqZVaIjSd%2FKRLb4ZAx2YHjvs71LHLAf9n80WsiXmVcFMWqcTSM9iwROz10tGfvVWLzDk0bu3qkQ%2B8tZgHxn%2Fu2XqmX2bLlGmQ2zmWCevwf%2FBkwMPaq5sIGOqUB%2FT1GmEOn7KOISkeauj7iDtM0Ng1q8nQWQEeA3EOm2ow1L9BKmReSnS6q1nPV1ljyAw56RViIRmvYMNJZOYQgs6LROuWIRjPNFNLPSEYWAhyiK28iag%2BZ4cF6gKdoOxwWR9a0Ar3Kht3Jl8ZI9Fv9Qq28eJ5u2eNoMuYVxWLyBLfAUYdQ%2BkkP5J%2FU2w7U4S%2B08cMaFnUnrPx%2FQNxneSlf%2BgiljcVe&X-Amz-Signature=bf3a82bcc1c27c154ca19cecda741b2e6bf923bb5826bf2713842941070874a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAHPYYYW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGaF0LJqQjXisajTYkl9FGshnvQDQev3HRI3UEPKkK5KAiEAzZozQmPpv%2FFFIIBlqEXz8wfQWVkGbZQ7QrsX7nVYqccq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKQkW1bQ0G%2FFSeuuXSrcAwCELviL2O%2Fd%2FLH%2F86TqYfjYY4OxniulRBxoFRkcL%2FYuF5a8YmI18s5uIOWpnRCnQ20kC9rLlUY%2BTUBRRyuS8lwmPjXDplT4k7JDQxpo5pmlDvQY%2BvN%2BQfTdH6LLcAhElX4diEVsYALnkBH1nhIIsiaGSxmczpdPR9Dl%2BmZJUn5qeHMyFr5HItjC8KS%2FCD11hd7elSwEa%2FFZvL4OHBvqzq%2BMEjjlemF7oXTxA2mSSdoXEx0mMGP%2F0427eHMOyxY3UvPtq6kG%2BVUhqLUr%2FDLEL4WvcYY1p1ioUmrW3vUhPVAkW2EOzES%2BDQh4v4AwfExKHZsojmhhkmTx4xfPNyW9J3hIYa83%2BGI161zeVESvioT9nTeku%2BnOivNvB2lk%2BeahXx5i35zCU7HoYj4wdHPs5PDrZ21%2FTQQntdFyj02udy5TkPzTcls1X2M8zbU9VNu%2FFEJISzpNkiK2EOryRIzuk04lftHPiudYoiMaYYKpI%2Fu7FewIt5FJuOU39zHN6g1Sa7dc02sbck%2B9FKXJXoNg9oHhvgVF%2FGqN2jXBMd8McJlTOUccW7R4l3PRHDvyXuUIrmdAGy9wpvtYD4GIdQE1WdRo%2BQsaTb4tvYr1V9ER3rrvee%2BH7pIZU7hBzrMkMJaq5sIGOqUBbIYGBlJ74qJUCq29nMgsmdYTSuEkc3FiC7I%2FuwinbQL1L41fSgQHD%2Ftb50cCNjZPGxRfYcC3j3K3FXC%2BtanaeHzgo6aLkNzm51fR3A4GHj6N3LVe0odX%2BgV3DuTQKKCgJNjZWrbc2cFC8YFAEqgX9agGGuOU4CCHEPAGhGAvGFqeXtheSrBWMN8keDOJP%2FyWedi7A5sdXXzll%2Fi71PCxXkAsnpGq&X-Amz-Signature=a21292a68c9d67172978abf5c6b04cac945be6013164a40aa6ae7cb50a24dfa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

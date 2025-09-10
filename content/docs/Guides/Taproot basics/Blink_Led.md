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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVY3HDK%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDbdvQDMY92%2FEFMHzRXE%2B9B%2BKNOBiAJ6Ml6oUR%2Fzu8lWgIhAMwE3aaTOYocR5cfCuAVmHbo8542UB4hD7zDMgUFf5IOKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwL%2FsJERVbN9DP%2FW8wq3ANevVfkefXUeKRQdFABU4%2Bicgu2QRJ79VIzxqKtiensuVsqudm3HrpwD1yxr2JRwZvusYrmm9FlfnkPxGLfy2jO3SJB1%2F8P%2FYtQguPzrQpfo3gQoitxRPuemCycmDLKJIsGp1BTf%2BgYZVlg3c7%2B3rM3jyfA8X2H9Lx7zmCTGRiJwWa3NUp9tvWOLHg%2BHh2yBgiOK%2FsLanczKmHlv1pT6MQUOne6wjHU5TzbmJToJyfPdxmxYBK21an0sqENyuiWt8U9Q2QWp2AJgkeabLjIc4jR%2FMQj2DtXHhZ2LkRevvHWvjEk%2FZd6dTRBmlcvPaDJOsWq0lVBTou30EU9MolJQ%2Bc4teCiqF2CceJfHb7b2O%2Fu2C6eKCPufeQ8gI5L0iy%2FQwJnTR%2FGBTkKsoGQJ%2FzK5jUdr8bxF2QI5u5JsDf80TMHWCBvgCjSJMFfeGACDBVDcqVjJozaNAjvtULdhw8RJM52KUZdOSU1vzQWgWk8vmpOHXXIkT16h%2FndQvPWY%2BpE2s%2ByIcxec7u8Vj9JxMU%2Bu6uCyOHt8l70EjRK%2BnwlneZiL0Dtptzd030CpFjcJ%2F9fa7m3ZNUkFG4OUskxziBRYHsbwYJpR2NrwCUQf0ZW1eN25bQJ3PTu0eVQPTxVbzCqi4PGBjqkAV9AZg4amhngLPZaKyctTcEZ9ppQMPTYYhp9K0KhHsSQKY6B9jyG8OZ09FjfuBCxZo5zWwILpgQ%2F4nFfpgE3gL7HN5TWiFVZyRwfSZVbls%2B%2Fl2sPSLw5MTuB2ERdCVakfwsz0Rdzy3J3Ir363PGUuSEyqmvamt9E%2BOfLLOtEQUAbECxcP5O1OlMQv2gzs%2B3aNAqpzmFAn0sX8rMeEsaDsXMGlTIR&X-Amz-Signature=b90f8b6746a81870ae356f8e6a070856c36eba68c19a6b12e7ff207006f500e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMFORC4%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD%2BJe3%2BpZnh%2FuvZGBChjIXXofg1WRzLzqBjOXHn9Vcx5wIhANdlsK2%2F3vaPKZV2eUG6C5gbU30352pZw%2BGwQopE4TjkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF5358z8gugKxSL6kq3ANQwN4ymSNoUYDdiJKuNYhsgM6S12iFLt15bq6Dr7sxNND135YfzFyzqmxUT0QidZCjAZLEh19%2BuoXn6NZ1OGaxSzIPwg2mk4DqZo5VuAgalNZx5TBvUlBdQtDxSe48ac2ETaJhdla1vDBreOEZuevaqB9DGbUC3qv9WtIARv8tzXiFkNd4meCkoBtnYPjRwWIDZkVbM4VPFRXcIKsmJwFGkBtai7NGqJHO8qpLMAC3eejA1C8607Q4cZxcWjWTffjpKESpih3rFbV7nhFDpb5%2Be%2Bh%2BlSp%2FT8Pxt0MWZszqgVGm2C2G2AZmnbeLKQ94cg5o816oqclAlj0HQYmtwmKLAxs9ttR2IXefUWYB%2F%2F7l8xdUOB6U4RoDmPM2SrGosa5Ki7zzoDLogi25SfaPhUC7pPvvP3XmulZPlPugXf7hRbWKjyyRaXoK%2FoT%2F6rowor90eMxyTm1ON9jlXD02OL8%2B3pP79WlqwKwy9mZnw%2FI6Tv3w0pKL%2BcOuNRlg%2BmI%2F5ql6wrOxLh%2B4D1Rbpy2VTBn1hlDy9KnsXq1tSPllfbBz9UWjFcTv70aceESyAtan7pRJg6guqZgBN6uuhuyH%2FU6y1mwNtWPJaAKYLpOT2wqGrupZqevqcIkme2lkczDTi4PGBjqkAUTDBO%2BEkyrn8MBSmOVrrnRCN2gDd9mGfcrKMbwXvGXPw%2BE%2FjgDFbJwsQKJl6%2BYN0r3%2Bd3PMMT69pJCvQfRKJqTCXQf1a8VP%2FVclW6RDj%2FXjebB7GyWhKrBPH0v1vOyenq6VWlGP0UI0s%2BZp9BkjSgtJGFD6bp0CgROtf0JAmqtvsa%2FKaYU2L%2BstmGdnFZnZ2uetWipF1A04G7%2FgrD%2B9mlnh8Jgm&X-Amz-Signature=6cdd5b306bb83a103e92fa8d3613c4ff722769b7ea6e29b6b1dc50eac2853fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

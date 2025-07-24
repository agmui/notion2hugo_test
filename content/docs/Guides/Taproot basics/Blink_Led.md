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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RIUWT5N%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCMLFCVn3xySB%2FLAyvMznTc2b1dzj673ajQ6wVeNtce4gIgCKXGX8a8CzgQ9qCtaln7IQYAciVYL%2BQzM9QmpqPqPSEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNpq1NTci2oak9hLVSrcA%2BC2dOPS4zzMXq7dsxKu2g7TvAQIAtGW2GMuhu%2BgxqqLE5blvsFRvBJ9Yl0AKWBb6qBZFDzKGwRqXI3rjvhnZ8DMhfZZ5e8k8jBj2Treyd9SncjAOkudrhPMkgT1zcEUcit5rofRdW%2BSXId75IksNWJW%2BH80IbDCIhIMffsC0P%2B5fUoOiQAo9U27ReqRqTrST0x%2Fgn0fU%2BOv5B3L91Hs3ioS9e5BiRsKHg73CetXYAYyI2nNqD7ov9k5%2BNgDP2rIjipIzySgn7suw7z%2BOZFEtTk7qvw5lChii6H2KOQ%2B8nTFLXQ5HR%2BXUFzKst309vo%2FrcVlO7VMEPMcBxc4Xn9iEIk7kqerRM7LsKUFQIHHZwuBQDZDB8i0X19EG3EQPT86az7Xnhj8siV%2FecF5arEmcZEpauetQ61u%2BVrtu4dzIcA7u27a80qFgpdPMdNoPUHgEgz6RSl5CBbFrazte%2BKkKAbkwQzvhj1b6L9N9hzCQlOcdCOjOqlrtFh0lzgF%2BR8wBdTz9j1OYsvqT9jq1k%2FyNdD%2BvzNbgn4yqAIYD9QtnZQaRrKLvPCKEFRh%2Fx7T2q2%2BPX1%2F6CR%2FXIscTdI9VTie8F5XdodBgIU7b4gFtWww%2BV9EktJ6%2BZwcTXpCmn6FMP2xicQGOqUBEeIRx2X0LyIBLpvAFr0zitXM1pqQoOwMpVP%2BB%2FHD0tYK8dCH1ct7gqElh7T3eIm8UrZEz1snJKoSBkZSkdJqgDo98NedXva6I6WszxL1PeBiGw37K9%2FEBCs9i%2BLWVqKNnRVkbxS2QtWG0zvBy6hPr9DhxsiOsRDkwyCycyKqXwDtTFU4eUP00mR0eK4pNDL7lT9L1nQMvVwUsH286pQVbWQ5iZZn&X-Amz-Signature=9de5f87f27e7f87fd709b7b5a55da8a47f03ce89417decae77c1cf9bbf144de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3ATBVO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFic65DX6Dt1bwRo3R3SHUXawvSkvPE0SoEbzKXCqkfDAiANsJv9u39Aso3BgNBta0HLMekPoCz3Tmm4ojQku9o2Iir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMk2ehwGEa5BMC5eLTKtwDmUe%2FYq8Qrlen%2BCpUjoeOQjAfqlhUOZi3%2FP%2F4hjgIQRTzGSR3tq4A1qIZMpzc9tMNvvTeKXC9xBhbPY5F%2BcT8I2JzMmS2vURRHSjfJX5ffnDbGSnLB30sf781y%2FrgVgiXWmGjV0R2v7AJSj7DYh4ucGNpZkIp1HcYQqcK6WYhNqi0m9X4%2FKe6Wf1F%2BGWiVNdV6oJLQOW%2FpKoeLITwFv7iWdb7pVVtfJEAYy4E%2Fn3hFCLXYwwPbgO211VDgW8L6aXy0VzoP5cagNndruzKC%2B3n0%2BXPqZTV2Up%2F8I0ECzpb54pkAgHP%2FKQUPN7EZ%2FJFdGLu8gf8pTGLZYf3sYSxWDG6IZxQXeoQ0HedMAvunfQQhjaOQq%2BvaNteRUxVC688tP6qhtuMV0%2BwTLskY66kwBRQgENOnEqugHzNY%2BHy65mcCa6RB9lD0SQn7PfuhHGnQ6bCHl9RGiCIwvaS1PRTYpITrfFnIR24dKlwHOLm%2BMPwHtmkpiaUhXxtgAj6TsOjbyruGVBoaXB8KzfvPAY1xQFRb7zclsLSr%2FknpqBxqlllqblI4AbMXwyWNdhnnyMV6fHNn9zPm%2FwOwuUAXs%2BIeXZt%2F6Lu6Se9Bhac3jgQjpxQiEPcUO67HgDJXjr6dXMwsLGJxAY6pgGH7PIn2BF57Wm9r4G6HPnKgA%2FGNcQ9CfxLk3iMVE9ITolue13oL%2FfDLDLrm%2BlFpwjejOAdzYTJ7kOkb7TRe%2BT10jjRDPIccPenRtpdcBzaguYlhHv9gwRnVHRWUnSFzOe921WUBGYcdQ%2BPhw7r98Pl5aT%2BI5FamlosxX%2BOjf15bd34leC4aC0Cb5h%2FVvsAy7bHAOkvHw28E237bukAKT4m%2FTvrJQPS&X-Amz-Signature=61016b728c58b24309a8ccd9fda26b4cc954026d086819e9b36eec666c1a7984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

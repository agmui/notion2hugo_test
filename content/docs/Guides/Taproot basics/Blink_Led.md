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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IDNICPF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdweEOc8O6uTf36sN3kc6OgZDj9P%2FPbg9D3loyrBITZAiEA64w4riahkOXBHUrLjITCtbnvnKPmyEYPTgXweaDWaZ0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2guvRkYgpcDaXXtSrcA7CkuCASJACwnAk5gAtaRazhuzl3jwxlITfDO4ttcitwcfa4uGx3P53jK80lF0qsQQclcbw6N1ERJvr%2BAH0y4kW2Y4trl37E0KPf4ioGONOrc5rfYjBgPbJlxRoSvtirUmbwi5%2BSththn4xLHxw5iEjGRYl%2BfrBwQk5BTCX%2F1d3AxnVQqYEpD%2FYpUW5tCxs3uc4JJ1ccpc6vHUpXyjvYHplMQT%2Bkp7cpG2%2FbYaE%2BO3W8xYeZFLgeQEYygtgWflsMK%2Bdb1BdR9HTSofG6lvF9PWEfL292wN7O4SjR2POXUEeshKKxtaGjTLWkgjAlOhCxIUr8SxvT7sTSSmfscmoH0lBTqSaLJJKw9LHtSXLj6FlEfg3SZ2dM4SXZj%2FFV5OoO2QuWhbpQX6CSRz3QDJV8W66ydoRNb5COiMXmEWYk7Bn2QZNz5lNpiuhcV%2FYenZp8FrWC%2BC9bi5NPDybposwDQDiPFV8zReK7YziVtnL0HRkbZG8afsTsECvGKsxS2UcY6mxey0nQg1j65IhZ5%2BZVApE6smOuqJXGZvSpXFAhxFLtQj0bmzPYkVrXWSgaq5nG4FFlLmatfdeCIIEJGhm06FCetg8%2BO0XG%2Bz9skkj5fbtIqoLUmwdCwGDCxO1uMOeG%2FcAGOqUBDUjZxtbzDc%2B84bepofqUdgEuW36b%2FbM%2FjKmivwkOTnc9qgXqESG3lLZKnX5x4jKFIi5iP3uSloGwTM1dBeix9qZW2st5a7FPVEbo73R3EjrUVcIFibjqSgd7kzHrY9m606p4MA0sUk5oc9PTsecb167Ev2YwmTfXV8e%2FKucsuHUkZuy0npF%2BCbC2w%2F8hEYun%2FBA135uXeAF2sAupzDG4mKbKGI84&X-Amz-Signature=1c3b351ddb565ebbd02fd61e614729d633de60d181c1b7e68336896335b9cc38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBVVAXS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtTGkX6HpSCyAqtXXg1SWLUPkbzByfZVms6cXEIMwHfQIgPAuiMeYeEOrk6Scjy8ajxaz7qB%2FqasHovQyQHgALIRwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUs6RYPtU%2FVSlA5FSrcA7NiYsPfdP0ifDn3ebtjrmiZl7FD3B1ky%2Fh3s%2BAe8FH2kdoOd%2FMBdDjFlbzXFyb%2F%2FcHTq4Cz1klqMfKy%2FRrP3XTDXirun5%2BosVnAW464%2BGSQEIor2GWia8KjLlIC3wZpi0Sx6XvC9eNdo81mHFqJt9TD73FQ84yXYqXD8PDNifEfBB6mqnJjuNdtpJ4LpWfZwos722xKXnR4CiTFcRgHs0DMnvA3p7vkIg1dLAszQSUGJm%2FhXnFSswQHiQxitSWYXTFyne%2Flmqxj5n29p1o6wrMuNUaS5LHujGMpd%2FUNefw0UwCeWwBCXmBraBjWRR0JpjP%2B8pkYEUWY9UYwszTg%2B3%2FVAXkYpTh66V29rUG12FbDzFfL7gMfQGT6sLMd0ihhIDAKlbWB%2Fom4Bmnr3anyXWgsA6B%2FRaIExAXm6OD1nx7YHxtw%2FTfnfkpAQ0iLKl80OWbNFscNKPvBLxLivwG%2B3pGMrjkQBSVaqQs3MtdnJwzgFAIUmmhB4ItlrCSHwgJQkpZEbp7MBESuyL9Wha8iYpr4H9MwwK0PJ3ihRZhap1dZ3bHnfPGfjMqwMMP3VQDecuS3FMrGXEQ7AT%2FyljYs1Lt2ATLrkDrT8co2NKVcN%2BeTDWQbmsqhIXtUUTuZMOaP%2FMAGOqUBufZW4sNbJ1Uf0JeQJiJhJO92ZT%2Fne4SmNMYtrMuOyaN069KCe24V72fMnTzQOiQhWAToclZlFn%2BjILIt4XQmDS3aULPK5aCPKQS2rubLK5aZj1vXQx4AqKNX6WPyS44m3MIAC%2BfEt4dSUBLlhllMaB7MykjNFQPnSngUW5cmUqtAKLVW%2FBGGfA%2BQ4ht42qoQpYOz%2BrOCwv5mHhQ7yZCKQpXMHQmF&X-Amz-Signature=95d7c501cc314365230c7232d70c44bb2a18425343328cb6a69e09a33e3c7f5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

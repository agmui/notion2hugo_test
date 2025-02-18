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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRG7JMW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDzQmnbUi3UsF6d6k5HonomgSJ0%2BQkk0966Pr6%2FgkJsowIgQocRbd4ZRsZIew1RvSv1E8WT1J7%2FjfM7yGgjgShX9xgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcoLMwAxYZr2q6K5SrcA2fF1q59%2BJj8QNbEW3ZrtVtca2l1Gz%2Be3D56rJJwiWtxeMmmyJ3tcikY%2BV%2Br8aIC58Mnu9HnVrN%2Bs4%2BjqXWBp1nPF8As1jc8jWp%2F9ErLL5VOirFy3YUjRZf7jSoo6IZjsRcdRd5u4NPNGaSXcWB%2FvAUj2%2FtKT7vjWj3nwQIRexHZHo7xLWhdYQWED0yclYLlTXf48JFaejfyo5Xt83lJW%2FgaHsOVfBvqKyvdX7%2BhM6TQfSaqUMyA%2BU77E4lgWjNuvCXn3gpa%2FJurYeu69aUDgx0AdPViQ6OliLrOgLHODS10gi%2FKZovPbQYQVKX8%2BdnGfeMSdKtGls4yaA4pcHIX5ziFzjMhfxxoSBOdCzMwrcVtADXXZfhP%2Fta4v75bZEAlmeJMuNXDEjDJXAefNsOXWP3Oo1w2MTIf2kE9BuLmlQNmnf4YUtajA1Zdb9c96Rq4%2Bj6Rd96I8Nc7I91uid3tbXW4uihABtyP1IcSVSmGBdrhWHbzb3Vm7uwFkHehp8j58KOFs915HGbQgiLR0jzYAiTCc2Gi7B%2FjH%2Bgz4Tl0sSrLRWT%2FoIgoQMCS1XlmvJpN%2FgKJreA0z6vcibzpzMXuz87XwqpgVcTRSGR7MU4bPjZCUOdk%2FVXedU3yTRqgMPnDz70GOqUBfKXDJ1g%2F5IfcW5f7i2AFv0qxscVvwEZtG0K1M2Z4bAY7FLU5gRzZihhQGEi4VKHmKtYz2YVCMR4na8tRvxXmzjXsqZKvjbnrBFPF2mwosPy30QWDmlRYYz62Exo5DepsOjwG%2BY1iRVzK29q2SgIn%2Fss0Ff67inar%2BFMLkE9aJVYdeQyf6YWlMsvvnQo%2FqVLkwGqYmTK4FAuyISJXYPitilj0KnmQ&X-Amz-Signature=396fa40d510888f439164fbdd3088b13d20119965d949f98b33be04c1d078b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBXKYST%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEGHbnJ18T%2FQcBtZ1%2F0BeIzglo1pFyJSHCdN9eHc7cx9AiEA8jzO2ak4MSjcqaySxqVHM10F5CIRpxCOGSD%2BaDZXsCEqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPwKN0niV1cwPxX%2FCrcA%2FOR1574Btclb1lx7qZy7WoSjI2faYaAhnae6aBgR5VPCslpBH2Q39oDBGyOWzodfnlqyyurHtz9hJ79qKD9iluV0NP%2FC2oEkSpIROfYfhIPc9S03zf44DuBbthVeacSwXwqJ0Sv5BmKNwY3oki2T4Tx5ocF0rd%2Bqgu%2FRdPGjY%2FfTZqgFeNfOLmsEczE1IqRF2sqk7MlYf65zu4b%2BFrQW3p8GPrZNLKbKPiP0O%2Bwq03CkLkshcJDlDNAkafImg%2F6ezBji8QGmspYPCPb%2FnQoYriYWtIFjcNbWOlAVJtJn0ff%2Ft60kPwE5iF0SVh5g7tFwVjbeq3wrZlwEtTLSI15HB%2BI9EgwDndgyuf9rmcxbGeygEEuuw%2BLqXQP6bQKzrIqTRBHzX4SQ7ZZfRRGEbEATqq1u0an2u%2BWyWsoXFfNnsDKj78nBZUoTcLSOiSXY00oCr92wedjTZVldr%2FPKt1e9GAxGZv%2FLzmEBLtZH222yXlV4aUDftUK%2BSBkuI1Ee6iWtX9F4GtFNgdiWvIuzwqeBuuEI83vDPzsWzikSEv37%2FxhHShRtkULe5aQFuiSQjT7uA7NIWNKlw9o2DADa89%2F5BK9DtfKGz8W9KZxMZX6Nt2KnoeItRLnnGG%2F%2BNAuMPHDz70GOqUBkJO0mCDFrUCGak8Sc87LPZJCSdoDl8SN%2FF9Qou9mg%2FnaQLZ2GbvDyZatCLAaopYT%2BUiDl5dojFOV05d9usm%2B6eyA7BXAWMsEI22HclTU7LMcY%2FFlKNlCXKFxPkOhHw1U5zRESHSTxNTkTcMdIsx20GObwFOa5gJVbMyKKQzJSnitiws%2BOCi0cy8ovgpTj13HqUe5m53CuUgt6Y4UE1B8%2FeL1hnIc&X-Amz-Signature=2a0e81c7cf320680c3ee387590ee944e9dde17370181db631e432fe8435ea9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZN6Q5I3%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDa%2Ffhb%2BTeJQXtAuTNJVA00xxr82hdl18%2BW6nl9LeM2xAiEAhncLqzcc%2BhlvM6tWVo5O4QBFuGUgxK29OYN%2FqAlFi0gq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDM9bWPC0jy3%2BOix1wSrcAyxJR7VApdgCUxoUCh2XrO5KNcBeqLd153fHLkJjJyUe0Yk4BZmgFC%2F62qxTLETJr1Vql09I7Eewxj9%2FbpGEMK07pz%2F3nrhuTSslMzfFbDsV4GXykbgwn%2B9YGFQp4mF3L9SFJB49tqzEwfCgCtd5FaoQtM39ouSaHmEXXAHP19v9oD8lBGg0kDa5tKlwGIiUGSaBRdGKNqOaSPAiJkYz9nuifGqtxL9RmYZS4V0xkq%2BpO4ZNMP1F5IIQH8yVdnQpBIc8BWtkTPAOQC2siDzT6lwBUv2ywj%2FskUu1CfUmRnCMLTKcFRUOhDELxt2Xw9WcdNLnAtFdNKgqxiU1hFcAlpmUc9plZZuxO7fsu1jT0KmxEitNm8lq2huzoK6oKO9jOde%2BXqqp89p99%2BIDcOrWUfbpqgAhM9JH7RIdyWG0zFHgv7xbKS8yIbenPDLJ%2Fpvl%2FWR7dZgeeIDDVWgbQBgDEyEctKpKpsMBhDkhKUX8J8y8ivBdJHsaZvuZsycvMvGza2x%2B8hXt29t5KKQsyyaFVBHth7QpMlM%2FpRQe%2B24hOIYr4x9xo6cl5OhtMmwzCxuDVmaaqLiKPqKb5TbTXdRDd9q2496Q1z3vO4vkOJFXXgX3QqyTY4LAg3qtiIHXMLLg8cAGOqUBriEl35eYb8MmPsaPvSWWIdGoAvfg3lXqDSISMaEY%2BEiH%2Fy3AQZTyk1JL2EU0m61TPUyBY2hEmZREMs6BOVj4pM%2BlPzn5Wa%2FKhFmCQImQV67Wmbhij%2Bhf1%2Fncxz7XxuRdR3WK4XDzL%2B7Zcf1YkkMBsECjnNi1lT4%2BJyClTroq%2FKj7we9yroJxLReMVCLiWscgsorYdAr3%2BFflP7NS%2BYkz28YdL8%2FL&X-Amz-Signature=e2f4763d3e2f0bbf15dcfbbf2895e7b72c2bc0a7e1af92a18c31993f64caf9d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMACNUG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrL%2FFl7eWesA6hdDMlhsBKboocIDhEya9s58qaOAG0YAIgbbUyurN%2Bx6JepjcCAPaw2xUyPE%2FWAzm45iaBs%2BX%2BEAYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGht8fX2WgAuyy%2BVbSrcA34%2BAqPaibRrJqA1eavus%2FmSb%2B%2BsIS4N0sqa850gtLDKxB%2FyCvtfz3gYmmhcuiGDZdgNDAJixijPrMTpYv58WDoKM1Uv%2FUyWSkQDiwn20PDhPNhXC5dNIH8ZjOPqKwyIhPuaFoozNf8SZCAnQl2Zmjp7NnBz8IOrMjPHa%2FjvJlS0dgD4yfHQGq%2FEY%2BgRtf0jbc0RzmBX6dPlA3rdsgx%2BpFbFlvFKkxkG0OGsrMYUW3vllWX1Yu38H5YS14uwY4BwVcBBb3wKeoYXO38FOZ2T1GM4hgqK6MuKlGjdyCx7KPNp6Je59UxQyNqnlKex0nTDi29h9QqGl4u2fny1sBvK7Nm0zlyZk16XTYv9GBoc9xVZHL8bwGPLfgOA4s0F022y6%2BOK78Qxjp8ySyfoa6B8YEDPMs0ykERrxFvCmc8pmIR2Z562Vz2hb%2FulCqI8G18FknvhTcTSmdFMia0qQgf5DSv42EFcSKLtDOBKoaZ7p%2FR0ZHdL9JNpyq9xu4NWcGyAGMQllnaaPnJipbR2o6Od%2FXnyDGNoN1AT9vzNXzDSnxTAPw7oUkh6%2B8CIgO86koyEQuiaRsxzehpEr7CDtrRdTYsxDXaxIxi%2FKOnax6Ywkkv2NsdnIMIRG33lS9GUMIbg8cAGOqUBIJUP9MfvtjXIfaF2CXvyAEwn4SBMdt6OxpsjNZIf%2FCAabAOSGCXX6Q6%2BeKCmnrLq1Xgi1m5%2FP1xbJzjrTTTZNhgpErfjWF0572AH1MRuWeIU%2BdyJmZrE0W4A4mN%2FT%2BpdHCUipNwkhDzVZDRD7a86G9gaA7QqpGHAC2H7UxVcq9Qk%2FtOcetKVm229GZc01zqzVwOVTGQr7uEks3MTrm3nzARU6PYV&X-Amz-Signature=837ce1295940550b8f020f5fc6c463f665b57f2b25205aebefc44a63d86b29ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

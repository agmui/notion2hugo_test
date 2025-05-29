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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYP4CGW2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHw0iGEaQR1CUiU1zDMLaR0gJ%2FsQfmGQoDS3fxjNybOIAiEAurxs%2Fp3O0Kbv%2FF1y5T9ZOorEppjzMJMdUPzuo076NkoqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdCuud86mU%2BU4ibXCrcAyZr8RgYa7zPTaHjiyEUYAuZrZYch1wQoefm2AQ%2Bhc5rnUvGh1A9z2JzMGV%2FKrThXUgsRSx4MwtYkjUpmjd5ncSxBlp6WZqxx%2BzwiB6A0lYk1uqIcKL57xRKMTRL4zZLUBDI7Fx735uV5HmT8DjyDSHENe1aNpYGR77W4vquBWTuCnq6B4Ct0Z5ccDqlBRUoIeIjJSxQDAWyBJEvcw8EKPzYwbiUVXJH7RkLGbjPaRarV%2BO4%2Fl80vTfwYNFPExisp7UEiR7KmJgP8iA2TGPA9Osq6lnF2yF2%2BiY819OIwp9gcI%2FnYlk4AEygnAbpuLb%2BGAUcEUxa5kI2cGCEVkoXLU8iDaOqxGLgaxx5AX1Fg7GjhReo%2Fl4cHRgIYVbniyBs%2BvosS7WEQt%2BiS%2FTBzR7Fzf1nTUbgO8kwu%2BRypdYcUEe7dqsqKvngKjVTeyPy9fAtkvid%2FdO6lk7WRdy9G0GvPjU%2Fhn7VQ2uqL9BeoJBu%2BiAQ1NeLMDQFwYbpKxZEjQ6teCfTn11ahAetPEOD%2Fd00MgRyIPItxsMBfS%2FqNAKF%2F0A%2BVlSWyoPajYGgeKKNU3tlv7AcUAU0%2FvPDKP%2F%2F8vP9IvBzjUu%2BRlV89Oxx7Uv9Bw6XUIuhLYEVl%2BTRW10lMMqz4sEGOqUBotY1St1XWPJiWOTeDIjdVqeLRlLWRVZp4vvjFmz8oHqnLjtxdxHsjf%2BiGXe6o3A0jOP%2Fncq%2FDBKTdTePm3JsDYO%2Bo7faz8%2BtbBK6ulACc4zPvxIi06A02jjUHAkn4gx7mkCAiOe9Mwm%2FtlyBA2S8Ub%2B8R2aP2WBjxAZ9J5j%2BbDEmaYvTPAOd8923xoOQGFL7wV1FDRMx9AwOon7%2FhhqQjufSoPiF&X-Amz-Signature=9d5e10d920845eff65740ebd6cacdf4798a03a53c6e5c1515918ec587ef09a84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQV6YIIK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5q%2FggF1p6WWqsYOMU5cL%2BzjDI5CHUZoY80DIycK5vpAiALUvWUHdwfqDBuR62Dc5eBsVrpQexJB%2FHgim9qQTMezSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5aozqpwXKW9gANSKtwDAy5D1ASuINX4JmL3pLle3MUA5Ca6U%2F%2FqgVnITt7B1hFujT%2FIfveM11pchf5IdhorjFb0tv6Dom8EzXgNpbsUaU8cKEgnO61%2B%2F5YULwghsFoTe%2F%2BvkAVExxLJna9m2aNwGtNrNWvQKQiOiDsI6FNSi%2BeXgBWceuV5HQ%2F%2BEyo%2Bu2sVbBKMNJUNxcjHmFT92N9vL1g9YP0YJfp5UPUDnnciP9M5pReL3eDlqzDwAH61Io4552otws%2FZYhJqUe03tPdULZL4okon%2BjSbursvEpLBueBJ1xGAUB%2BCDuw1bK25Teos7t90Emh19%2B8ZkUSRhXfDXL%2FKXixYmfMnpsFLlqgK8%2B3Rl%2BZ7uuadBrqKvN7AZF4n8gOtJkg9mt1%2BrZSP12stc1n5pZBagIgMqzfwTyAThpcVqSQ1PoZxKXaouIXQwHf%2B2aA6TZm9uWGEKTGAOKtGb9cSaDHXN9BCE2AO4Bm%2Bh50dgnR%2FwNeuysxcyxMoUHwvImiRwhDZo4EFEuyWvGfdUlstYca3X6sAeljAF84jo49ZRLRccbOoImMjZ504oMcRIu4kUuBauGvJ8K%2FpdGJtyTFP2EcNdRcLS5Lqc43mHDYdgWcweLpQQcQonEwoIQA8L69bVRuWi3P8Jcgw37PiwQY6pgFw3V7nXWDfSJzfNpJAnIS77CdRYNhSA3Ub7JwDLW43Ws2qJwyeoD7zYiRTPcngCE%2BBH9lt80sDugc4QvpCZtiy0ppy3IET7Fhdopa070WRwPXAoIQgoECDesiE0qRN5CdlJKRto5YdqsoNp9XS7Di5bh21Uqx2by18Sq5z3Mvx6ibrBMz814P6YXbVaxUsJ%2F9BirGh4IrS9tdWiFvEGP%2FQJfqAP%2BF%2F&X-Amz-Signature=7ff9d35a296a3627118be082deeb512c73154ca4ebe6331bb503cd7bf4553041&X-Amz-SignedHeaders=host&x-id=GetObject)

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

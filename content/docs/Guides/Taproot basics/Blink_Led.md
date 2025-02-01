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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK5WL7OO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJSXY7mtSjj6nE2OZOwuCUp05tjdDQxUtnKnCHBrpBmAiEAmGNaNxjipuXZEoQjJt6m2sVqa0uXYVddN9JYyBGi4zIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh1MHX%2BYvRboWO3wCrcAzinVkjoIlfzQeHX%2B4dypWoAvsGGH7pmqcQXrXKDjYvfDzJZ7VzHABb2vYTZXYEGh39w%2BIg8DxQ4eK%2FWFxA5k%2BEPgMVZkfU8s1M%2FKN0lDfYCp%2Fo%2FlVWsg9S%2BO%2Btj0xz8GvfNtCPi9bhaXWP3SZBa3d18%2F2wkFGqFGUqh6EKBKNJCKqs3RCG7%2BiSYvW%2B0kkEOsjDmEWFlm4HS3qIpJrZpdsa%2F6%2BE3KrYsvusqVCoJiCIhf%2BCbtkYLdGF95%2Fl3XmEbAe6%2Fgf%2B6t8%2FyiIPoCp0MAdFiKweJJc7XJ9wvTxPU7Y%2F2Nskk5AjuXj6u2lm%2Bf4CNISd3wug0TNxzQ0iY71QPkgERZDW7z4O9kWv2gszkT0Zl0hfkvysx45R%2BW47g3ThIugs8IH0x11vBZZ8PwWliZvBdy60eOYACjIBQe0YKrKUkA3Tpir1xiuDC1ff1ak0Pxn1ysSPpaUPscavUyixfsmvtHjxWYKehgMgWS5iD1lT5ReWuZ24nb7AN9mmDRh9AnlX6ex3YvJack846yQYLdNGYSeJ59JfsTsLPlPt6Hstg8ZY1GBW8nSXkO94VPhixRRcs2003WzR6X1dWQADHdt6Fja3DdLfRC6eHXcdMqvf5dHeYCy5cNCQckZJvMJrD%2BLwGOqUBQNc4iVNMBcmPaNwFsCeZRgA7%2BeEitz1vcAmAKZ9EYwdapxVDDm1zQYYAn5Z1kC4HQiYylXVLGSrcz3RXVKl54E6qw%2FxttOGlfD44IV9NsDFQ9gzNAifGThvJmKdl%2F354zIsyJxsYj8nxmc2VXYQ1bJoVhSazldEMYeMg3j5gYidjkdCuyBhRE5fJASMYItsvb2jb5FtB755e2GJgapsCVo8XQN7U&X-Amz-Signature=891129a560d65b20abd09600006ce80781757494c9717900177e406eda0c5007&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLVOIJQ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvM4yLilQLt0ZBpCY9coX1CGFqos4FX3Cl1VnTucG%2FAAIhAMXBhMuad23jECeClUy%2BuctO%2FQWgjZ2DOWNF8gBxRAVvKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfNqM0Z%2BTiCLEheHUq3APgwtqJmctGK5W7evJa273pk%2B7iD%2FFE2zgIsAuyJ7TJIWov%2BNeDfDcRnUGiUTAH2BWz06WJrL8QCKeJoXN2BQDe4IYgieqjeS6reTFodlCO4I0%2Ff8AR%2FrZA8BLPpYl4nh5vZQmWnBSeN8e0Jr9shnrRwv%2FcBjo5cq4EpnzPNH0Sm%2F2Ioy3rj3mdrm9pqWqu73oYlNyRnivpblcz64nk7eXkWH0%2BQdn4CRuIpZhvInB1mP7pmMlGlFyswQ%2Bw5P9Hg058GWU2aFnNT1vYOhZbB2WV7rF8166VsmXtTu8joT3VifP37vNWKR1FJo6o0E2wyNKUC08oG3XG%2B8kIyUcPrgSIRfDDb7zjWk%2F%2F%2BLLPY1RPTM5YG9MSMUH%2BqziMgKUbw4MotH%2BsHSABRzrHDru4%2FRN3g9b9Ld84IdBP839Pgfg4lxYQdSAonvMEzKrSimFvEW%2BMb9ZX22LHT1555lTPCrQwOaVP232f8sj5hiGbA%2B0obWXWyYt5cMwOlDJ0iLh6%2BOehlDNOBMFEWHgSt%2BUfeaoliqSGHCxkR9Xu%2FF4NzWkibxqmaTugTSqXzighzC%2F0rFbz%2Bbub8%2FBowqqmtIjUqqtUzs1UiUwy74B44u%2F%2FIVJcnjB0pAIgZOHCpuCLVjCexfi8BjqkASHBPPOGdjmjJ%2FbxiqLP6h1BnN4ZR5t1vJRDLAXUMC4V50TpE6HYO4ITJd4p%2F1FQMgrchOBqxt72atsBv8hnAejAhPE28b2Sz%2FSf2x3Jnj%2FZYne5IO5Frww25duhDlxn%2Bj0PomUqtorB6P2XFGOvwLeTu8a%2BTo9X%2Fo2vgfviYtLqpKniQCIpk%2FXX226%2BSrfKzSdeBmcW4vOPlOvnUI7PfW75tTfp&X-Amz-Signature=b2b5b35181b8044c11a071c9a6dc5e3217e1ffb66a82d820bb22595c8e83c4a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

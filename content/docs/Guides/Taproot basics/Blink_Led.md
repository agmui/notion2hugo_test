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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEPRKRZN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIH1gae4qs4R5mYC%2FvGnn%2FHbdy4rkU4U0uhg2px818SiFAiEAlHJGzHblNUJ9DLJA%2FFR9vSAqrMXfhOKqnCnopU%2FBtPIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCVWqAsvqNifSpLsdSrcA3NIRtMlXLyMO7wR%2BqrBGjAtRUDkwOLlb5rMp6dqstIEZlJ7Tih7WRNh%2BvYjZ5GsuDnj8AqKG8PkHb5a6i1B8LH7sLKu7sniA1Z%2BEXhDvjA8bfqjGPg9mfx8P5N1Wu5CiLIA6XlSNExPrissiQw8ghUPQHGdznRycpC4bzHYig7zGQA7VvuRZBT0rhCnrGhaIi%2BkPVfa8mey%2B6sQE6%2FUjgdfxUmQv1y8S5W18w4wZQFGxcHOFs2ecCZWcxGv3YshtDpy%2BwauNwwmWEZ2j3MxeRp0JFuRULZlBFi%2BNS77sZsfONl9h1ey5ZGgBWNnntq8V03rY2qGS0Aq1vo7mDbxi4eEj3nIuzTECoBZFfgkh4wApdiOfh26W2z6Sjpkp%2BDYniBOF7AT2wtNbf09Vo1W8naEgDCpHHMQM1XQ8Z5UQLMA6JEHrv3mwuqnSb7tAac4XDJSIoI%2BGsld6rMjtY4XZkbEv6M%2BTGcUqDWMBpZFd2fIOoJ9u%2BYM6QZBBo1bD%2BDzdTiwRQLlzumsXD9Fcv4t8HxBzpGzvtMfO0Tvy2pnQO9VR1bQKMxe0DbJGLFTYJzQtJMLVc4bSxa0e6q7AeZNTs%2F6PQm15IDMJPU5KcduF%2BPqXKhpc3OO0F4SMfXmMOqWsb4GOqUBYykaj17oYW3%2B%2FWT0Gwv%2Bm3AKE5B87VZnEqSJhGZcUHylxz7r7LOj9NZHCOtj%2Bjv1Q36QwTosPSUJilv5ZLO7rIAFJ%2BtiGOqmyFo93fIIKCN4%2FqjnVt9DBlbDnpAh3RwHYXg0HmPUyk3XwMrpb4JIwzf8t9j0FA8YMAMZpc5xgxfS6FRFMeyLAlE9DJXXR2Qk2gubAxWDDWxzRo3ayvvEnE91COf%2F&X-Amz-Signature=4c0230190dbc7b33833e804b3c8b603cd66b33ca9a5b208319817041514908a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCG23QA7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBZdQkc2YaSgXfWJL7VNvx3yfhO7f7amQDkoMX%2BpoFKaAiEA1MOF87r66LVn8gDrk0H9ZakRD%2Fp9kZiKmAXcDfUWeC8q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDS9MfVQy2ZebOT65yrcA9WPGheJjq1WVVs0PT8WhFoLhLOZyznNphxpqfeXPHCzeVd1JwWBHPsfo6QTpZA1Z9t011o4hutg3eyIPgpr%2FwSyapZSjAbIsioGBrPQ72jPbmtI%2Bap216nlNAWCffA2CjxB4eqQBvqbR07dIPR8tRbvymQ8DTQw4FKYwqbHHLlTs388bBNh6rtvEsnHNIpnMrSviT86FziwMQ2nZvYrdPD5B9XtNZvJzSY1ia40XChKmmzUFk8KvkdgtNOhLTLbjrTPd%2BfwcozPfCyRPCAsL9hoFm4c3U953DTQmkVsc6N9%2F8x2UZrAtE282T4JiO8GQsanoSrQP7PEAFZQJ2i3fqJeDz2g42jqikhMVdkvhxkbSydSZd6JVOE8abuyyhluiyESIbZpm7au%2FsgD5iBrV89eOq1URot2zbq9iIgNjSjuy4y7QUBZ7o5M%2FwQQOHi5yANOWG5fIWi3V12j08N1Y%2FRwsFM1GXOzpTRazs3fjFlApcE7XTzfm5RTruoQpEFYtm%2B8h72GrMn3OH27UbklAwReNh5fGiMpM4K8XdwVCDkiSFyi45%2FcWyxNFETwb9y5DJiM1SaiTx99l0Q7lXVfi5fRj9QMgLKb%2FkURWmPJiXBSk99bi%2F8EtBrcXygFMJznsL4GOqUBR3EQLhJMvIu0UYaCDP4hwrTDro%2F3zH5TnY3fNhXxEagiQCKQltQYzK7eX6cHcRaIb5lju%2FcZ%2BXYXeZulhAX9uCsYZuxZHL0%2FJaBhZc6BjQEMrvI9V6Tmtnnjih6Lfp0ymq%2BW7WorVkDNkGykfJJsp%2FrfkL%2Fo46NlYu9Lp6MGq4lnQsGCSWthYcPuaoexOfvaHODJ5fk1iijgUDaiIsMPFvSqo4Wo&X-Amz-Signature=93d39564b70345a28a886b708568f99c75289c994bde0049256312407079a71c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

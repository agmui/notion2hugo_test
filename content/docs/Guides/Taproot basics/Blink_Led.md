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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642CFAIYS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTGfu5zePZfan9WYMOErLKQlNVcWXqlN7AkdG4gqv10wIhAPr9VPXfgRgiqeCiUjkyvXSSg9UzNZWu0y4QszmjKqNmKv8DCGYQABoMNjM3NDIzMTgzODA1Igw9whP24pskQQIL8pkq3APl1DZawcs7HoXXt7kMgs3GgO%2Ftwh1dpKtCCWbwU1SGAKH8J8j801K3Y8b0MtMmYSG7w5wsXF8RwHgh7ujpAqgLfq1aBF3W6jRl9I8kNjGuPSkpLDUrS7L3yVmM9bfpnOerRrcqugL2DmNlJbUQwgfbLhMc25ycm7tKhcc4%2BDn1IzLiWoNfYME9LjtzY6axWD1Hr64VE8jbAhBw58DMec2eVlqfARZMfVvJAomY8mJgeNSHsKIurc1Q5ppS7gtTb6sbN72HLOqpcwZ1BqDhHtUq3%2B76AGezsfYR6DbIrcYx6X2%2BlUO6fvSGFaR4nUgjoevUq4Rs9Ud%2BUiJa0Y4uIdbQRWXVsUFFc41%2BDBnhAn%2FeeU4yk9Edd7kUtuCQq%2BXE9WtFjkHYzeztxbEtTcWQEppFtsJ2DaZu1wMsGMC%2Bst3bfMGbPJF8%2BOSlH3R7S4E1rOW8%2BltG4SS%2FZSr0DUNLXL7cbaqFUd1XU2gp7Nez13Ie%2FDeZSzrauNhZBKwjD7NpkTxk8dwkVszMxE4uFhpOnVoaCQ3Im1YZod7IL4A7%2F1pXt9RTklbd7GZxJMpGwLaN4%2Fl0yAq23IpUyfdFrZzCHn2%2BgELuWjfieMyprVO92MpwJUIHQzrNGOsM%2BczBMDDDhNG%2FBjqkAZVOp%2FWnchQJZy10sUevWWRvB%2FcBVIhgQCUucbXxww29KC%2FChv57TsJmVwvYI8bB8repb8zJp%2FCv3l%2FWwguydGH1RNxOq1sREwkwM7%2FU7w0Ld%2FTsH%2BqR3TM4dy8pIogSfvhrq7vQGC1F%2Bp7G3Qm35Qx%2BSc5REBuDk7EZdvvpHRSfirfgXQtXpjRfOTB5PZ722rG8c6pYkOIH%2FoujReAT4q%2F%2FU4Qk&X-Amz-Signature=d44eddf15600c1dec6f0f286d2008eae5b20f5c8e358975dfe6bcf5bbc67002b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLTEPFDD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbzJMAVTLtk2boKKrXbkVqK%2FHbygNEQmW3uHkd5fbfYQIhAN%2BWZ9FhJPcAamGRyWAjL3wHCN3d5rsbeLMrEzdiHOZQKv8DCGYQABoMNjM3NDIzMTgzODA1IgznuaZtDFl%2FnjeLJeQq3AOAGbYd2gBbCyXWLhlvG9PBivZfnvwVLNNzjub01ksU%2BsY%2BjcT0v4qrt7inxDw3Z7u%2Fc%2FsobaiixTjVEXZTnl6rIAmDghchiptaCd6AmwicCLrZhclhCCi6vjcfj7MCXEcMhQHvxlK5Li%2FTod0htKmGDU9FXgo%2B0MYJZGXow9BJCso35IKZgep1lLKqxiGybLs7hGk6imiGDa5W0h9p%2FFvJIg3l5XRTyoXzAsEB0d%2BUaAMtRG3UXlIKFsXie1WG%2BF6WgH0kzxlQBCGcWFRbgQD4wAOdp0YDMiEkLy6Ga%2F4hHYJBDplT9UQKllQGQZywxrkX%2BEdFPisShqTBx417iU1b4hS%2Fdi8L8CIdyJ6oJD4H83FHYkxLce%2BBIDQ97Beoi6YCeizGITyEx%2FPQHSDDxU4qfP1A0tW7X5uXJneGUgBqQ29YRKyTp1n9eOGtlpJcOSZVQcOJjf8I3J7TZuc2Q8K2X1rXVCoCigaPWkc5guxoHTdXSHF9rxVbebyVoeX%2FfOm3QuEL5qsgw2gTpTBxkOB5DaslaoKjEdSPVniLVq12fuAkdUTslHlVtjMJrZv41NCAxjkOZuM%2BVybb1RCqyQeB9pFItN0EVaRJjySWFnYS0fWVmoUp8NDEOv5XqTCahNG%2FBjqkAV8VVuyR6mVzBzugC1X5GYW974%2FyEhhCd6qC9mMS%2FFsWtbsmxpqye0XkbIUCe7P8MInbpstykZ20kl61yn8KNVQE6L6wGdk2dlvRj76oaGDAss1atTxoRhlSygk16KRUm65dmrKi4TEU07dkFmX80LhiiarFip2b08hJIlbWWKOR2XZNeXyk64Nq5k7GMrwyDDpPRvxXnfbvTtTh0sVYvJe%2F5g9L&X-Amz-Signature=9285994a962d6fdfc3da44e26db38972315e88d15e9701b4256e6e0f1f78ac0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AGHPCK5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBPn7o61uzlLcEoAnWDurxF7E4HDAUZJpwN8hO9zwHWEAiAOuc118u8fuMrCX5HzCmPilfjCC7Py7z3mYC0VwtTpbyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7ANZh%2F1YmeyXDUHKtwDy11dv%2B%2BHWY9opRu4wBya%2BMt9boJqPQJrV2wXUPHISbJWujPkAyCvyWAvfSnkeMtIJtNKTs0VnjJy2IIdLVp3EhaWypLv6niWz5%2FPr4rfziyAHz%2FNY573HxgLLl%2FUYUoz0Nuhcb7eV%2BPCKfJr66NY%2BCymp2OJ53Mzv1iCWagn2ZAsR9diNF2YEUSTLjXT3DenpstPNS3m3tlvosbDAn4I5R5xKuo3F%2FX%2FJXhzeF5Vba%2Bf2We1wt6XWJ8lVkVSDACRCGihbTd6M4i4wZj5yYTW8YyMyo0h3mYTEPQDa34%2Ff44yOC1WBuBeUet%2FeK8OMUfu47AqhBtH8Z47B7pO%2FxDxg%2BrWG6qlhNlTZNXYiUzGp1m6T2LjOzk3R4rW%2BF1IF%2BZ5fPmclOU7nElAuQ2HOUoGuAakCGd6%2BW4oLw3QP7dAPVfQ%2BfaivUqsH5oo%2Fg2yWFvRhmWK%2BiAYK1QUoSHnW3hbNgMrnbCUIY82kCazGadzeQA8LisVabZWI2pGrvz1TtM25wrUoFVcBnoNNT%2BQh8dZN0y%2FlxBWWyGa4dGvfaYwOKsUgzojsBy2ftzvqBSz2LMp07KDISN4oljRZfkEGe0R7Xk3HzEu6gY%2B9vRoxp08msHKvNJBxUkxalsq8w8w7omqvwY6pgF0upOKffN8pmHU2p7mpBxZ3IMXkqE5yRya2JRtqgMCF7AWU4Ys8vUJqIKv0KPA3dlBTQSuYixXD9S4L%2F9ZpGRlkKq6E%2BmXPnzyHAqubkKSv4DstKgjnW9J%2B9AvqLplj8cyUl9s0K4Q%2FF8NDnoBbqeOHJQvcR4KxC9z6afEHzVWVYpumOuNlAnBkbYkUNoIPCgLR1Qmm9YKzNrHvx0z19yb%2BWDhLtBC&X-Amz-Signature=e54107ad639486afc879921e24ae82dc86f87721ae7698a217af021f53850e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEKH7PE%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCdZWps35cx%2BWslqqXcjYLc8VydQdymbSh6xqrgsE4FEwIhAPjlZlXJM6SRs%2FUaZ1ySo05kE%2F4pYd7AXj7gC6jrdbXrKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeEbKKlhUyerNkuxkq3APrLMX4lt%2FwjD1bfwQlJDeU8PlHJWI%2BKrsaYUF%2BMYPtMc2ArFXm0FM0ZHT2GWMwU%2BuyLoTxV%2FkgAfG7zpuIFtXZQf5rIU2EL%2FrKxTJsw%2FPhxQY3Dw4oMdv9ex4SEbfSeRn0i4Gh48KhrGzfMOhJUI4Afi9EaCTrXdXHv2llen2a%2FBiOaQTJluERMbmvmLrHS61nHBhLidQRcD6yq8KFSNY0ESs6vk8%2FB26I24p4AfnD%2FSsMN%2FlMMnCKYxtN1OYNof1qhj1qaZH9aHx1WLJDXh5ahaRzK33dV3x6eRVi03KCcxB3YRj6Bebrr0oJr2oPZlPmf4LAlPrcQLKFvsZjfR9d1pLnGZIuzaBXxKhXiYN%2FAcy4c6Q%2BpaI%2FIq2BEE5t1Dxs27bUX0upAzzNU79lB7Q%2F50b9F19DZjToguw%2B%2B98EvBmb7RTDOFNvxzUxq0VD05H29B%2B5qeWhiQZiUx3H9OaAqO%2BHH5C0cR9%2BRzPeNgJxHvVmpMio1cno2CbINLsXSaPQ3jdCnZ%2FXGuTo3UAjEa4KFWie6wJVQZUfX2XxqodcvCBiQMhHsdDuSmg7fmn1wIioUg0d%2FyBLRsFBtCkXmH44YcTR%2Fybi087LKP%2BehaTCHezHt29VCwS20UafmzC6iKq%2FBjqkASE8mctuhAr5BpuGvAjaozNtxtDVvEKO2VUbYpwuZPOdt0lp5%2BXuaOkYGZlbfnRdbZl38XkaL%2BYZKpDz6cvwZ%2FAaMeBwUewI3WBUiUy8NA1FL8UQIOyXED30yrkec8C6eolk8WABeWU3l42n2MGTYW8S8BJJPgSSh%2FDbODAyOIXJJdMe158vdhx8wGNg9ZSCk6yfxf3wS9D9MNypvmuWV%2BVg6%2BUx&X-Amz-Signature=b78f558b416d5f4b1fa41076c09696f20ca2febd17e776fe4741b461e5ac9206&X-Amz-SignedHeaders=host&x-id=GetObject)

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

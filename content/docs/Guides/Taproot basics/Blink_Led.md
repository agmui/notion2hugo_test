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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZTN2VV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo7eQKejWylLtDjq2tfaDUfm4OPHVQPGaNGJ758YNQ1gIgScqxdv2rIifrMW5AGG8svIMz1oGCHxgJ3BQB8KKgJA4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEBOopjbqF7kZkBljSrcA51rxxHH9yhDHPbLiLsjiCxMcm6U8%2F9YGTV0vDqir3Mpc5gzJSxvNCsTlcIwW27C0QgnTw%2FVxHQ3HtLKdFvDvXi85%2FHaKXzgTqSCniUkbL7oHu3JpUoy4MxPUbb9l55pajAA8uQT1zuZBogh83osUfZkgz4JrcABuA3ciiTRRSgxnSMaMhFRzwLq7kSTNG7061E8m%2F556KYcj%2BKkFcvnA5LycLvLF6XNkmL5YaAVuUETzRIsKbnIJgnhakRcwUxQ4%2FbITkdhlm3wSyDfFKY98GHpe6rNsfWWhKHI8b1Fn8StxgeaU3BQGDGoCPM5I%2BKrN1d2UutMCQKOOJ5ABFHBTNS13riDQTKJFv8RpecJq6RUdHzofpyUs1Eg6JyzZx%2BrdIed%2BnlTjayhCIIYLTtVOrhWm0%2FSQi64ixLTd%2BAFGZVXqyl%2B1rCemR6gjOhtG3Ylq1MYV4OElMz1W%2Bm9yW55palzTsV0X%2B6VxKVBsRUfWgKF6dzDYAkEJZNbhR8uj3TFIbzMQY5nU2QE40uUYcglZg0s%2BuzQh%2BoYnbQSQPovb3%2F93myv91it28cWyORSwF95t0SWvPASJ634BaMMkI05qIMYliAHYgNakEvW0vxxf8%2Fwml7Hm8H9hDZhdlqaMOrV5sAGOqUBzliPzs%2B%2F7vHT7mdSgm%2BQo6hb%2Bq8ZVQBgFqQrzAAwj77jnaKvLlPyFYNd4H%2BAZLuTHklVPgjohLozaxIiR14Q2X2vYh%2BN2aOUZGdE7fBvyb45%2FqKPFSd5wt6R48hYPBHbPohHCuKkGObD7sQVCCMlGoxWTJr6qvvqJC%2B7%2B%2FxU9jb3tMbezZ42Khu3Ru%2BXYDP1%2BTsotS6S1x5iByNZI1RJ0qTzNSts&X-Amz-Signature=25c6b9b8043e77c3cab92c8f650e024cd32a64505040f16e9b19f14e36b3185a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUDWWT2X%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FqytPn8FeZfzEvmHkBLSsjnHL%2FAgbj8wbw6OhAdW4YQIhAMogpVGQJb0KjMssrgTU0EzqgnyfYgALE3Mzelq%2BKWbVKv8DCD8QABoMNjM3NDIzMTgzODA1Igy%2Bpf6J0gatJRFa3CYq3ANBFmVTBEogOi21NMj9YBTuwRh%2FSwP4u68Wx9MD0MOdXLSCm2q1JtdYAlBN4BOZgxp%2FtBCB4p%2BzVvIZ1pwgqBiL07TbI6q7887cLuJxiT3FeL0CsfRbc82T6M0RD%2BkraJKMxh%2FQpjgFw7ad4rj5R7yc%2FpfGy36pCIz700IH5lyKLpcJ%2F7HMkmCX%2FPL9mo48uzuFYUQcwed31cN7joPWsfpt2TkX5HB3CjBt2LEue7uak9MfZVkLKE3iIxh%2BF6ZohDwcwVc8TXhqHjv27BeI358Q94j4e0z%2B605HLXKGSjDw0EEBXt3ouhFC7CwsEX1R3a%2FggO4eDRFU5OL9ZBnpo3T5b7Hmuzl%2BQpNAIN8ZiNWbacqG1c1GH2MLaRdBlZuno1h6%2Ff5HtJ3qnSVQjMqy7xk3MxDqHijeEuR3XqA41x2hNK2uaVi1y%2Bkq4OHPZnApEA7aIfcrttxgv%2Fx4KLcic6cKV3PMoG1CaKk48417n6k7UZw0BK3q7CThhLguE06UmO2vB98vIyvPFAa8U7lIQCNrjDikK0oMz5cypDMB7dKb8IKC%2BHzwqxNT4tzin0s8IV8V09X33fB32G8bJ8FASNZwWt25CIQ8Co4M406wXJgEt6ffSVBaTobOttApFjCe1ebABjqkAcziTT4nkX3yGdoQjhAcfKa2Ivv3HZpOy%2FRQ7kmpW%2BcvZg7sFl0sALQLZK2T9syZKH96zp9lBs0agG%2FZsi9fq4aS9gb4gypOyk6U9CQlqq%2FVFv7c980L9UtNeO6NcxajB%2FwOkTk%2B9sefLbQkn7pmxMAK%2BP2WD%2BOnUThIhvRUvT2AH3UFXv09C%2B1A%2F2hawknO1fbILPQc2WX5tfeaJ36%2B4ZR0%2FzDi&X-Amz-Signature=89982eb7882c8da497475c2147edb6f61fab9cee090a01ede9f0a3f50ad7f08a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

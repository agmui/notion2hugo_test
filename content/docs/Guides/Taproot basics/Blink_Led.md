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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDEKJVV3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByUcugwo5H3a%2BqyJYd%2BPLKe2k9r40tIvq4lDiaMWlJoAiEAmrpT4IpayBkCK5jaR%2FKMbVtGkuu%2FZmIrBfphIYSvYwUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDPfivgqp6xmyUhjVJyrcA%2Bxv1M8IzJtUEBe0f%2Fm4%2B6Q8UQaiMiXaoMM6ZAcWbJ3le5GWi2gC42RagQcyYOUhLLjOZQFmxDrQFLUJidBIH6llZi%2FO4iC3jlBqmdR0GIeeRY11gti7gV%2BvrU4jMUzXBt%2BTlBp3tlqy52B9W87wT5e3Mar%2ByPwQTb7O168WBA5pzyl0XsEfM9gLVv9%2F35bo5Oxy0rpzfo6Dc1GRYsT9swefJFSBvvV608ROQxT8TFPp8ONl5QjfGip53xC0wgyJr58LX1CN5LwiYO6WaRhdYeX%2BLoerXTF0vq9qN%2FePdJi7zf1PeGKwEU1oimYEkkw6ok5Sb6VtKxjxC5s1OhyNVBfuG9ekKuwZFvlelZlaFWwx8O4hagvg1ByiPJfKt%2FfH2MSFEcoWEGnWTAJKOedhRauYb7QRhotdMyn%2BdbZU0Fp19f%2Bv%2FCuQwCpiGFXs0Oz21erxC1Qn7O6MnR0Qv9ZVgQPW78jTWPMPQTIhxsWGYasaiWk087LUvSFEyjlEpecOVytpSty0x8XvRSr7GtcYUrUbQTc3tnszaE6nlPecuOg7prTKRsREJC1MqAu8l4Jw0xy%2FmLq%2BzvhLmV5zEBdJhfYz6gQsYZYalX9nw%2Fep7bwetZdfQogY1VBfwS6ZMMD3n8EGOqUBlzlXYlSSitGIav9gBqpNZ6JnWq3Az1pPVfi3trPdm0DlEkcSaCV3%2BDE3WiYmsk%2BtdJhgUgF%2BJs5alXAADdHITJljXk90Hueo1FzC4pfRJPW%2B2sDr7I6e3ZTXub%2F%2BLcv0eRq%2Flhp0ouul4e43Ka%2BtyK%2Fwp2MAQ5NL1TaSQ0gflrjBcny4czGEBfMWBKBlh9kbA6VHz8%2FwJ7b7U%2BwtiKkHLwnasYaV&X-Amz-Signature=238bab180c7336351338dd290f6b45408003e34a67a7334a8a558a6007b20b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMYL55PN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSRE2DOujRqTxUvntRjYx26gOCha92YQsVrx1h2q9ggIhAKLuYyYjqMgVbsUyu1wkjmM3g7otTJroUd13gvqC9i31Kv8DCFQQABoMNjM3NDIzMTgzODA1IgxT1ro2fYHHIZ061bwq3AOq1F61Sz80Qp6SSLhgWRvpjJk9mxTU6PkHUJ%2FoL8YEZOZKWajjx%2FXCCB9kuRHH%2FJuLWagF7yilptGz9sPVJbKP%2FVwuPrmPWAdp3%2FbzGUrrodVb7tIpvB25q%2FifvWvBYFr5ZmJx7DS7k7ZCl%2B83%2FCvFoPrU9zGyWrNBTqn82W1BIDZIaj3WkX%2FqZb9uzMQFFJWkWtlEUfE5lAi18IxaJHoKyFf8B8P72GU7JkDhbG%2FM5Tln1G92l6Y5zn6CcHDFqcVQxbg%2FH%2FC4wQ3YHDYMl1GgQREOT02GMgpHbFmz1%2BrKV2SCZLEmm%2B7cfo4jO3mP2v%2BwyXw6Z44nzIUTHHg7JcVv70Ak%2BjyXiK7Cp64cKVB8ulGRlnmAalsPV9YACnWoBuPNVv4gedv%2BN5PACNQNPvhvHKqRPwfOwsJF3m4PTX3%2BrjBA%2BpExuvwR3LAvH9o9bCQpHSTjOx4WKz0MP5ToYOgLeQcAaYbsn3352TrlgnUuNZBJ7oXbLvcgRAfgUlociWOhZYRuwnhJIIvjjizatZt5eJzqm5P2V9r8N1iIgFM2K9Cv4xrTD6Onh%2Bm0MmdPeGyhan3OsR6Y6dIQRanhrTE%2BLKFp9j%2F5KbLEBSqbHI67U1iD86HTEpv1SGMD3zDA95%2FBBjqkATUwNK%2BT07E18MZJYODellZzhBd1EUHUV8el99yfwT0pALkSPpD3GOYNNZRMtj%2B5QIyqx1gFSQaLNIIOc2hxj3d3s54Rnaqi0AET2UUpl7N3M%2BZXBWiDtxral9ge3QBKtWWOlm%2BSdz%2FaBm5%2Bx%2BSrhUkC8MCGs856RNJ8nfgSu0ukut%2FO%2B3rY8gXRyNKV2BrhGe7LUtgx2%2BCFixyHWRL%2FKVcqc%2F%2FS&X-Amz-Signature=4d7ee6c94783143aba15066f7a8041103c78c96c6ece6d536c840d9cc802a8c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

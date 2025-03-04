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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THSZM3CZ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEZkxhgLeHl%2FDU3NdoDXmfGWNEywG7HeAF6HJBX60ijAiEA%2BDV8v7Zki24zhKTVmuJHP8o52s5QLqOefrw0nJvyDFYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1dtFdiJhC1oedlUyrcA%2FiEuoKm%2FGClZDzmV0DpCOq3sj957b6GDuu3OcQcpVP1XiESn23AG0Rcu9i1zTzrjEhxI0Rrc5tk2mEg463d469jtFKACCr570V10GQGsQlibwCvodHosLo7sJsFml7w0mJ8I3jFNA88BdQpr5oQCBHJFiN9PmhTSIuqo3BmG21cJr1hqV2gO1SZGzTqR6C2hxvmHxmOmPwsPtPB4GZ68jE3QTkzxKmfQbGxqjF2GwSWaEEXK5s3tNwDjPBTFD8VrwHvbOSEB0kbzjWfX7jxCH3M%2B2vxqOTtVWbIyrVqeTtsV%2BmdrvyzlVYNTMWw7hRTH%2BbmVxsvbMaW8OWhDpYNk8mnioPkb19bjJkSEMuD7PvcUv92ygu4QKwJyuc0rV9vHD06fSmmpYiDij%2BwrStw2UwA9jkkt5ye8nN29%2FhwAy%2BwFn%2B%2F%2F%2BuWB1YuEnCGj5w5R%2FowalBQD2%2FazhfUKpKHXtt4FuL%2FXWtE4mr%2FBz0igyCBf0w85CmWFab1WAo8qRUCDlLKovfbsB7VDEjkmel3f3je3RKUVFPqxjrQz1AQOEOMGB5Aulj2pNy9PQTPFAje0CHcogNoP3FzPkfLZqVshVsxumWpwKTHH0hK7te38xMR7WLkORgwEpDzMTuxMO2Em74GOqUBzKFb%2FZVjXaO%2BlS%2BU8B1Rr63cmaqM%2BOgH%2FfoGZsekntUv%2BaLn8%2BqbZ5zppzlH4bvhvGuA4N4CQWs9XDuanXaWK2VSanVsWyWlEKR8pLLq1EJUdC4ucniBRlvqHqC6Noox2vpPo%2BO3yPxyRoOKPb8lcyK8uMW2DiXqO7nkRol5qlECsqmqfntZ0sSFWBcwdI3ISmlwWV4Ap5O2q0ffrT189lFK0Ezt&X-Amz-Signature=cb8d21c90d667ccbddd644e46468e9459da4be4f4d6b7590fd51d19086c5d3f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP3LHIJE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2LDvk%2F3fmjB3%2FntI3VkPucAh2IVCqspkzWpCTyk85qAiBLndiGq5BAF3hiPBxKpAdokG6bvna9%2FHpk0ko00isoiSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDLVtgFK7Tk91G8VNKtwD0gCO3qBtEh4sDFR4NT4J34LikS%2Bj%2FcEs%2BCrSpcK%2FY2PzYEJc38L1D5SjdjvtPYo6qAqo%2Bm%2B5vinaVJTv7NmUJ5sNf6tusMVaqhwIPb7BpoEk6aHFDBqdeBFGIrOvWqPYQJIEN20SGWpE1a23rutl3BcuWqfg03XW%2BTbTVjTNDvaVneCT5qbxfc4dDsqIvTdqxrC8dwombBJxgUMOuW2onAZLK0az1hDomCKvNfwzjoLNj6uBTu9%2FHiNObCdVLVC%2BwYuBBm9cAwqXXCJaL3WHGAvANSvbg7vUMjUD8x9TmBlGZhBKB%2F0UGl7NrO8Os0IOp%2FeRtCDKDEKSSIm7aPM0pklAJS%2BubW4KGVLNgj7LSI4ScSHV%2Bz2deqcz50VluZmihO20aIZJGIUPF40%2Bdl0OdrdnOzXFaAmZfPVa0z2ruVcgv3BCNuPD7tGb2VwJG7oCFQZh3vGL5Q%2BD47maAwKI4o8WNVYyx6BKKXE18OUztFo4MX4emzIr5BQcp5fn%2BgenHZXBMDhO1LsPYONecf80hN0q30Pf3uGpXgij1RKmIJusuWs79stlWoBZS3MzA6QPjnuVZ4Ei3NAr1n8SDJ%2BsqJfOXtAau5Cfc%2BAVGbgnXo6A5F66%2BOulflhnvxUw74SbvgY6pgEi7sjgvJOMNDt63iRwt3VvBJa3KaDWKesfLTc6ooYNGIIyFfbLDDstXKyUQxb7T25Yv%2BDIO6%2FAhcxxo0M44TRDSQo%2B3k%2BtVdt2bXA6y1mxqmU1n5ry0tncOtvH%2B81Sk4Sno%2Fh%2B4pfxyIHCKx7yh0IGt1szO5GVlKryzwgkw8srzp5MInqkSrxf2myoAp4F5ISPmKRF6Oi6JM%2FoPKPdri9YjGrRIO9Q&X-Amz-Signature=9ec535cafc6c29b96e0050b9ae51d73546154993cb27a1b956212ff3fcb9542a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

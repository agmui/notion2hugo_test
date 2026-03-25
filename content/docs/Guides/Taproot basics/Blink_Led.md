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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCW6QOFW%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmYvFBSyLwnpbwUpKr2H2OjKfkn%2FWvSAf6oaBi%2BOgJ%2FQIgcY12DlVjE2TsE3ADikz7iKiH8ilKA9vAynGpsfFPpl4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWCb1DbgzAGSWi65SrcA0AW9JT8n61QqqESWtRrBvzHhZ0On7eqXQW0oYgem61lkZzdU83de3Qkzz8cwDGhS%2FzDOQnzCqE1tWdbNWJ%2FmDFDMYxKrfyBn%2B%2FxHavAxzWsfDomrX5%2FJ0RIfhTZQ%2BZyB%2Bf%2FDfJKp8MDoPistPM18%2FBeonQAfv4Xa38SRNP3zXO0pG0%2FscLqtt8MTXsBGrEsE%2B7Ow2P0ChVC13PIXtAP5Jwhz7x0277ORtSDBX3CEIQIchBgEEfq7BcHAUR4hBUxrDLgj86G%2FqWwU89hTT2aOk4X%2FE913nb7JIa%2BUYHT%2Bx3lQZeRRVzsFFg8sNaY5pV19mYX3Urv8h26lZvyq8zQDhsNxcSzO0gFHtv%2Fnolkm9e5mMjsJJw7Heg8MhFrXJslZ8ImFMcm8CTp80ktDjpiVn4wV3heLyVETIyFJx590SA2VioC3g10x%2BB4nllJ8SvK%2FEn%2FL6ObwsUmIbntzsG9xflrPSADa2cEYh%2Fa4vDWzgy2WKNvEHgE3GIC9cD2KpAtDpi5fkeEbKt3wonpeluZJCnuLYgzhQrYxDdT%2FKQw2HrNHa9FaedGSl5AT%2BolSYdQoNvTep%2FpB2P%2FkD8I6WnZmUBjEOoNedWYT9GuMj%2Fwx5SihtQb0yzX2YP3YPVfMNP1jM4GOqUBHS%2BJrgqOCxlm%2FjAkhpuqjYeqLoYW5Lw2F5T2%2BKovg1QmQJVyGXcav6ba6hEq0Jn2urLCLJhv1MxWwj6oIc%2Fc5fk3PgGvaIvrKpEn1wVNPYX4DP68ftjIzSbOIrkdj%2FVanIGPwo%2FB6ipb83Vh%2BS051X3dGAz55VBY5SEcnSWL74mjB0jh5iEWbRh6agzlkG8ZV2b8ciYPZeok%2FhWFEr77eehjLZgp&X-Amz-Signature=d64bb2aaaeb05d398fa2c7445e8673294bdbf8fc60448b46bb04c6c93dc29880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RXU5L6Y%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENa7wFQ2YpqyU0d0%2FxX5CBN7enT%2BAEGa6806AtWDE30AiAClmlkxzUyXtV9gpczJlQg8alwSNBDex%2FICPx649c0%2FSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhj%2F2IzEz15rD6uceKtwDq8gWYUyrHUgaa25icD5ouw9qJUcAfkdx1fy1hJWFeM5gD3Rw6%2FXTQlqjSrnif8w8HdhyqjSxjGvyx1i4DsHJPv95WxREEzZU%2Bv1tqIwJ0MtgIxKquXS1DCkE4QESho%2F%2BkdRla22tWl%2BPNolCdbZTSDtRVze7Ee7UlcwdhfRMh4aQIOLdyUn0lSYeVAixi6kzRj8Yfsamu%2F5m5i8mdQi3R3Q%2FnV9AVCefSb550M59z2y2%2FM9B58kc9ckXtD6TUgw9MOKjbAese6ZwvPxOa9bWWMCip4rdzXacbaeGARjRsa1OcEUMRvGTdk9AEtKxwcSSk5DeCD9ruNuEn4bgXsHACRO39z3TBr9F%2BN3w7a2WepFPZ6Rqc%2BkuHLCPmVNVDvxNkm5%2BsAGG9VfgmtPuYDRQDWVybLYAILVSiBTRJjkuFYCkmpQOlQcB%2FQ9jrWd4NccKV5aUGxsQ51AnFGHSl198feHJnLI5diJy1f2zai9U9vO4En9GtVunz9Ilt14ETNrnZvACV2TcfJ%2BIv3ZWIV6WzGWsKvxfgpD9vmDDdXobVHzCp8dOWGg2HD68kjPK6ofJDs41bTXg1ws0FMpb7PQ2BpTHtFs%2FwkLUDhORjBGCRHcUuC6jggAbwNv%2BlZgwgfSMzgY6pgGFr0klU9a60rVY96H%2Fu1PFEPrkf%2B2WwwJ3wkN7n7CB9d7QEWlhuPLlRtKfJU0wQhbgGZ4lMXTrPPQcwkB%2FWQEpBKXTp91DojgJOYq1%2BTUYpzpKU9Y8VunC4Hw3kzPhTtVgjT%2F95rjjso8d4A%2FxutUnCC5HSFP%2BtTqNGUalzwfE9QxohIwHC1w9n4%2B8K1m1rcWVKl5miOiqI7YDM9zLA67vKDEjZr0n&X-Amz-Signature=a2df5acc85950767d0d494a27158587a113d86940986ad098c2e7659a3aba24b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

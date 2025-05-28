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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGWZZQT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWJ32awXS0VYTH68yCuhcGodJj%2BLhlfT%2FlPG5SIst%2F4AiAfvI%2BbTOw93eEzTSRACQSnJuf5Li96oLkUXXJatJFJ%2Fir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMifakQa%2BoJf9OWelAKtwD8%2B2omWi5aHbGjP9P54yuVTRhDympmRjvZwkJZMAErDdNWJ7Jd%2FoQmn8u8DVnN2p56KK6cB1ffBGT%2Fp%2BGVTyxwf2IA1ISA3SghnuQmrla6eQ54jYr3lHcEG5G1o4yNkj%2BHhTm8rAH4esMdwc1AUTHXSdQOZsIp2ZZtfEblSmtysy8mQUfHgQ9EjTtY31B782yI3xrmU7OSwpiE4YoKXajg4AEGpm9Ffdkyd9isr6ettKqAsk%2Fq2wT8ajnB%2FEsprYmmd8GvUVWK3RMeXsLMInYNCxVkBCsMo4x2xbV5U%2B7fjH6TiJ%2FzC47HGaS8D7eUFc%2FRWnRviL5AMv6VCgx7BMow9IictN0NnzFMZYwryuUaPneDnDppaXGZJFuj0PrMe1YmiVRr5oZgGrWVYhOTXjuTy2%2FakUfE%2Ffb3DbbzhLB96vHSHMc6%2FQVU%2BXXWxWNEtf38mt2E%2BfVRVavDKXZT66vuepwZxIdtQeIWCr%2FzIxIEu%2FyWPNN%2FZL1ShIQMwf4oH0YIumlLgvmTT4aKNJ0E97ZjLCKNy%2FjOI2b3Qp%2BHsMe8qr6jYQHpjOPLaI331k1bnsjvTE5VJ2R201cweDvjSTJUKFXUITjz7%2F8iXnacmPtuWSH%2B2lPWHdsYVOLLhsw2JLcwQY6pgFp%2FQqnE6lFJcyCx%2BkkA%2BDA9wI8VIA7kkDZHXeKUgXlQTzPswk9irNRVVPIuKsnQ9JNceuj8H%2BrsigbdHNKvqiaCCn6fzK3xA3EiuAjBq0a5HsEL%2B9FL3Fq1Vaj1k27wTWZkzvU9KHlYuTtYL923RfZ7BS%2BA19HMWEMZBH49BfKLzcV%2BYw5iIaVBQ%2BASWKhzw5SlMRuPEqepa3C9ALqYE%2Bdr9R2Agbo&X-Amz-Signature=9d8579a8f97d18622257644625d8e001804181b6455fd401bd7c11e922b205e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNJZZCSS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0noIuXEVDrg8Knc4nwwuG%2FETenCUBsGwIDtVWM3KzCQIhAPONFiq5HWOYjD7BMQyXq%2FuhF%2BT%2FkoiNXRmgpqRzUdgaKv8DCHYQABoMNjM3NDIzMTgzODA1IgyrC2F7pUaIl2i24Owq3AMmTlK0%2FqQwEjMWt3KS7XQPKSUocx0DT6Lz88Jm4svCoRpxu7QInRfyDnWNLhm6X6BkQ5Vv0DnK41OwfOjwqFhHO6r5Ox2OsQJXGHWvvPT%2B%2BAOQY99Rx9Z0aiYSKmIbZnHEWZzw8y6P80wrlIVs6ge%2FwYq1gy71%2B5TZKQ6WEHVvlxstbgd30mGMJSVYdbnB0OkiMsAMWITGCcRKXyvqBeqW7vwpgtgGcm6J4TvOZixZEm6nKsSM8K6AeGv74Pm%2FxCaKopQW1%2FoXt5r86mqN2Pr4iLo3ZLUfWnM1t5rK8yFbhr4PsFMW7fBujauMtNMyLjUik335vh%2BvhQtrTy4Cr1EbVJyjDs2PnsBJHwfjmK63ckOdTaoJsJ4eLnRmFevvEgxHPR4IlOFa%2BXvPK01zyA6AgrPSYokUXD65f7PZGXxaYaU%2BDxjw3NSWpHSsQn2dA9AjsJxMhZDMo%2FUeoWECBEVaCICYc5VIlJ4sSCbtukRPZ2Vsy0SM14PIywhg%2B6FEqSVjM3JGAcdBa4YGI0gGHEBlZzur8igw%2Bsmt3htx7XwJAVk9CE6ld4AYZ4GP9QcVqIW5nO%2FTQdHZpBBUhWpnT7xm14xbCNnxaGC29O61Y6msj06cmk4mDkELI8UFDDCgk9zBBjqkAeQEP9EUsjhXlAMQr%2FZQSfVfFvT8NgxNLfk%2ByYxAxIU7rz1QcPFNER7fhNkeMFfswumG93vQOgs8nddCV%2FHIErOzm4PrnTh7FbeV7%2FlmFI7zJdVe2cZj728XyY3a4NYe8bIcR6nlJZZAfdLMuWA7a3xHo5uxJ5sU4h4wW%2Fbfu2CPK1wyf8x4GQXKes7OeLbmKQZ22QfAs%2BuNU2UV5TGRXDofmK7F&X-Amz-Signature=5a12b6f1bd0740791f6a6ae9e2b939db9d04542de68b06c0a0e076142d4152e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

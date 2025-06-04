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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIZGCER%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCg3iwePWChQ7DQWIB76uAaEBTRM8xXQ%2BO5diVwMc0vCAIgVCIRCAZCSLTyAEVU0gKxDfw7VLKsLDOCPQ%2BfMddyhskq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDECphPaGPZnC5fVRLyrcA7fOHJsaz0TJSKV7RN5WEzMzp5IEiSUVvs2He88uWLpvBJAC9w0sCydxB2Ja4IZKO8hHuzPYaDLLHVBt7%2BiHgaoRQPljmgDGZD%2Fn%2FqHDswVb%2FI4I7zMzET8QtEF7QOJ%2FTWTrTryEgLZR7SHb7MBiLrdv%2FQi%2FBxnbAu3JjHn1j%2BN7adotx%2FoJTvyqk0Rn98g9YPAyTtXBOnBh0gPp9HZ%2B7L3Tds0ASkpvHm%2Fw%2BM6kLZR0JYmyQzpaVKizHHwTja5xAh7%2FF%2BwJKfHJFOK8YOWaMZh%2BykaSua%2BmSYhjO2kV79UNIseVV2zwgPSmd08%2BbK5bxSFrwzoh3xKWW0v6que%2B8W8nDpN5VDRq4Vm%2FfHKqDFICYWwsbYOorlBrya9bvFEs6dO%2B96mjrNY%2BhsdYSyFB7fre1OnTf7G88u12cLz2amZzvnDJq45jHcP39abSWYgLpfqXYvePbYrnNSTgDVH5%2BcibkGghiiwWl11eKQi6oOyI3e3snjVhZ7M2aRjs764uV%2BWsUF87gB8GgqAFPOAiJBGCNtzY1JTiGRfZ9hwEyaLr5jBBAsVYdyqx8AKGGeVnwUQrt0hC7NBMKK7RsM0%2Bh%2Fkgq5HSOyVYgpThoaGQpj7dL5u2RTY5mH7%2BXIkkML%2Bo%2F8EGOqUBfDCHm5SQvdYRUL6cfHeqQIWYkOi8SAekMlj2dxHP9JVaovdHXKqzipUwIi9zLNDoTAEWRx%2FeLHIbMpf5A20DN6rRGMl0E9kDFbA5vEjaWFEvl4TvBOxn0XP%2FppbbNykX8%2FZIR9%2FPJadQuDuPdNJEjZzpeSVho%2BlIIyLPFy0l2iLshLRa7x5ZjYuuHkR9Vvh6C6R0MaeI4qXnqTwagT60ThegeleM&X-Amz-Signature=f1fdfa533b682cfb013fdc0ea31b11918ea3eeaa6b9502627470100626a68b18&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RH6WOME%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGbpHmT1HP7K%2FOkXLVnRH6BCN%2FPsBWvOF8AP6t3UAfUTAiEAqc%2BNQI1%2BoqvzGZN0ID7bLSaRWcErDVPQ1%2FaSUqbn00Yq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMf2Dnqngi9%2F7xUYUircA%2Bqp5id1mzKrYhvO9iblfRHvHc%2FGj9cCmQViSilGfbJw8%2BEL7ckhKzt2awFdo60a%2F6avqj4YNqCyEXKxoknWTS%2BGEAsSJqGoUzCndwZoxg3uKe3jExMEDBRnMX5oC44zhh%2B515rFi2PaZQDttVKE5sjuYaPCxLBgca85kSOUa2UYlaZTagM%2BoTsfWW1GheFhEH5n353hcZzhPbq1qqNsDX41de8LVG1UpJUOYUV%2FNtPUaDETvRYTYdNnpsyMgmemch538ieaGL0aox5vT3cKpfGCOzYKxgKBlJQJHwVoIXkq0enlo77xEvDw1lZdssmxVjK5LpRF2zpse3KgPU1KFwUgdxH5N0LYO62DAGrebRT5IredRDw7jQhrB2dsA7CdK4AMkJVHbkWl7A9xAUG4NSW0qLlOL%2F1NtOcQxuezRfCbhM06ZpKcbJE%2FxSDSAnEQj%2BAAVGX6DOIISqYVcpyZ3DYvB%2BglFwiueMND8ZEIiCiZ7OcBtO67PHbsge0BUFX71pAaXaAz6cWjhYbOAngOgdUumlRYtYuUzBxXx7KfNwum5HOqQa1aMIyQKzu%2FtE9Ft9eU%2BY96BOjBiDmzAbMZsk%2FPzXS2MrQXS2Y%2BZYVA9q4O1X44xXz9G%2B%2BSdVFeMICJ%2F8EGOqUBi7QgnpW9t5tcwavMHwYjXcDNdpmdDPdPZxHEb5yjoRlM3T7GkY%2BQHhL90J86QRhFHh7PZfSE9d04%2B6EmiWvV3qVTz1OAayWAzT15j61axn3XMhpuG1HgwZfc2p9KdlA3fyi7TUiPBEZM%2BLqTkXakFtT5G26b6Nb53ALjSXKu6qhLw8RcB3DUybGo%2BNh2aMq2TsbTd4NZiGtUtEQIHoo55RVKzBoe&X-Amz-Signature=eacd43f5c4fb0ccaac862e4865fe56d5af068e43a7150cd3c95820754ea1677e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

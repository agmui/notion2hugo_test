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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHIUP5UH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZI85WHJ6seDyg%2BBStGqHaOkpTzdGj0O6BNJ1%2FSm2JAIhAIdwprc2f3NXjbgf%2BZk9xOg%2FZYMmeWb6KP57OG7I8XneKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytgbW4zvXbYv2fdNcq3AMbg%2BmUX5aC4URR80C8%2BITdneAsg9pYEMotBlcmjDIX40rO20tEc6atVaYzzTyuZAnbq%2F4wITQMZx5a1oNEhBAI237ruvnVuOsofXX7ebZblHzuuvPr6VdU65lRP1A8tek4z4PY19SGTROCu2Va5F0l3f0HNGAm7kAg28239srKxwRe4AYRBdkkqwkGYXkr2hwCVlqBNgG%2F1MbSBM3octmK81feRbbdFCD9fjnx4zJK4f4j3cIlD2%2BZ%2BWOoaDmbQ6v2HRzsMCQAgd2blOh6ZWdecsxHkqJbQK0ahteIQ2V9xDiyCVHlAMV0JMOn1Qrf75TKXlcm%2FnbRF1XBm5Z00i1ZHJlPZWtYezdYg8jQwxUrD8fhIdQk8xEDFfLcwzbBHZ696yfPKbSxOwojNfjDUtOZPvy3ECrNPafXqf7u1ceKPpCjlDcXbRAz84etNVM8nc9jF80fea3pRU0BXvh4puREoCnYzqh90uKlRWVIRdY0lAKyxKYpnAh8ndhc7gApvPR4UTjSy7Yk6skQ7eFlxNwnN6Y61CNeHYfjtskWe020KEXD7%2BJfYkNzDAcXbzqzXCEad3%2F4UCMSKJy5PnjFj%2F%2Fq94RUbwWuJh9N4gW2yswMopJ9cUd0LGp1f%2FTRezCCveK9BjqkATG4vj66n8mmdDecgUU9hYii4lOyM78ry%2Fbq9Ajw%2FpCLyPcuG%2B9b02k9nvxmHWz4dLZudXTxM13QnOoPVEeHban6MaMgxSUTBdl9QHsB8hqtD0Y%2FHLXIz5qTatbggjGvMBt3FfKGeHCS3KfOYpc57zNAmBJbQOM7B%2FL%2FD5GqKKPKpuJ6fmOtTKz23%2FG04yxo2WHBgsaNO%2BKngAK%2F7IGTxZLf3zcg&X-Amz-Signature=e6abc736132ce3edb2187ffe790284ba10eeb8505fef150f881cb97e47860eab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXBOZ5E%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG906%2B6fnQIVCu9tdWiM5Zru9aCVFhT2ZsHSl10mdiUxAiAMJTMgZ2Kxa8NpLGlWnxdCAcHnKKYcHB%2FljWmbCYD7iiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZ%2FHAPpLy5MyuyBZKtwDyQowDsWpzd3tLXzq7nCBFspOwfVSeGxP6GyZsaVFA%2FF92kABW7whtAZlG758CdZkq1g6OrCocTzufA1ngm6uxMXtVEk9LJL6pvfm0hJQE4LATJvSnJ8Rue1oTb0atW0YK2wf5OUJVXJV5uS8AxrCiGEJxaWv0T71mCSIW53ejVatG0BdxMUhBqQXpzRV%2FTfByyBR576ZcqG8DrFUl%2F67y2nPdZQUnVqSusuutxHwTxx2Jnb9J77TWGKvGLEIY%2Fw8bBoYnY7RVFtfmc8PV1wh3VFUWcBYYgoBg3Fx9hbUSvgJnJW7uPluSS0u0Mh72tYhcwm1V7U9hICGjTjYkCo%2BEzl2KTegzq8UUWgyNAyQmuvWMGF6kD3MiM0IpO37E2gwagQUUkTw2cozZ2oKNB%2FsQg30%2BGeI86z%2FZiSEm5GHrU1gz59ZShhaxrvu3qRmmKPEqmqwyMc2FoK0eTXlKQAddOR4s5khATlk6Zwk0c5psBGVbA70VfclIkJ7z%2FKksNdd%2BatcZgpBKeEnd0n8tIfVchr1MCffLeibFM3PScfPXrURZ8QCqCp%2FNjbtMzMlj0UsBxzaDy%2FSVwYw4ma6RPz4JDBD4eiRUJxdnZMahpCVWyII%2FBATKjHNIioTUgQwrOPivQY6pgHDgcMy%2BR%2BYOEO5UfaKddRjKPm1At%2BEIr5KdPy2V8RJEGCQNRI5MDMRskXBx%2Fqg80MVBBW%2FOa0O4YgiSgWabGdPCKRcJu6JkmHsRp5VMiCgT2d%2FdyojDJZa0yWql8%2BVo9KPpog%2FpjvLzRtq2rPsfgX6ajKNBED6RLs%2BdtAZX1wqXr9yS8MtWGYpSOXqcYMWe0FCP4lKHXgXQPdd%2BbLqhoc8xgzGwv%2Ft&X-Amz-Signature=ed95f3343d5c9ce48a85cda9f7cd9774207d180bcf64a48b3c8516fb6cf15ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

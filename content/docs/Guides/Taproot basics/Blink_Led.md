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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34XFRNO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgRn5z%2BAc8Qy7%2FDaHJLfZFxMzFEOli2PlTjdITHhuafAiA51hgEYcLHYMJVqJO0qmNimKYypwrFTSzlx1eS6BIGOyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRTSjwz2sSFh2U35uKtwDpHInt3vsTSNuaaCiFn%2FMT%2FNlUXSupFiD9cBPqoIWNyj6cklJa9tYQL5dGxxcFvStCCp3AU7cAULu6EQQi519QbVj6y0q7JP1YJvdFO%2BBlopYBYwCn%2FDWCpSHju3TGxvYxtc5H4U8BUzU1hrnDLtg3LxZggnDzc6Ci2hFfYeS5TuzXLj%2F%2FNewqnBSkCbWfzWVwkaiEg4uCW6uPtTkdudKY%2FbcMf1AfozxfTjnHb3suDy2trbDj6l25TKu2RCE8%2F24hsTfoeLxbQKBnTm2wzEfJ1LrzlP4BcQz7dVZDAFhr4l4h7XJJZnV4RpXxw7izd59%2FEHS5PjGfywsuMpx4Ks3VpFyyr6LxeplkwHYTY8EAcOsuvKxsLfwzhUt0lyv50v1kw6AIisr%2F5Va%2Bc5cucWu0qNNT6nZEi0rTS4%2FARquvpeFYBPGvdmg9b5OLszNSEcNY3pPMkntW9Fwy0ozQfitShqfT5CY6Fr8yxUTUFfdF2vtLtQf4WX832U29WAgHDt%2BAbJQ60KTBPpNi8BdKv6%2F3S0NAH73hU%2FSKnEizTiH%2F4eJ0sTdl7OgGO3XbPtzOpzoflxGxHLsiWGND%2BN9x9rhlXUcNIx4nZa2I%2FcVivGYHVq1RAgB1xt9jtPw%2F%2Bgw1OWZwgY6pgHEfzGyWzxJOTH%2F5ZKZE1HgpJgUBqYi7r1bl6tmotw%2BMN%2FoVXe1mA2EFyQlrXuWc%2FDHY6GjkJRESee0bQj9hXTuyX46%2F6rcYLlBOW5ui%2FQ33sS8NNyhLFc0XpE3eFspeMM5UVnzAdMMk%2BXI4xMp98hKdHUWGCiYLqIoLhzg2C0x1RWlOTSqaRMBnxnVFyy2sVw2MwPLHxH7uSTTi7JroJPlQ7Gfo2aY&X-Amz-Signature=4157adc22c998bbb97e746d1ab8c009cb1d40d20c52672968aac12ac0353a8c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRULXVAI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BmAKMoMYNWOpdy8d7%2FlKg3ccmLdZX8lChoGK7%2FfLD2AIhAIbu%2FBNfrTDQJtqaE2rrqKMwiCBRqyG8pxaygp7ZuncoKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBej7%2FilELjfPln9Yq3ANNu5oNyYwmglqYZEnCgYNGgbwBQlhFWBTJyY9mH35PifxUIsz6Hdj9SrM%2FiStOJxTrEl1%2B5zuoDfqxDSnHUYuLgzcq%2FLsugl7sy9EE85CmuGAVE6CCNi4McPIbFbJbXz9VVet8TWxE8eckoTXjGefsF1xR9julNdPYb%2FABlZ6OfZ%2BwOkwFlp%2BWSHmuZFbvVzpZKh9%2FJ5yClIKwfT930jnssAHxHtGieyCJSQR1w9tQ8pCPJiW3maayE5siqBrGc%2FOaLiLH1QdgNLhzeqiQayBqFsMttGpuJrESl6Z%2FpZBA5d8CpuvHhfCtJbw4P3NeVMWNXcPay84rEmJtxmn3tuZ4PDv2gjxMP0Z0eoi3EHAkpuu3a4Sk%2BQppcl2CIeVPD%2BGlvNYUEOzGKp%2BKPXiG3TBaGHJEoBYpoeCT2Hvb2WZJPPR8nznUWEs5u%2FPPoBwqu1x1cOi5T%2FZLMaBYAmXAX3rNoscIxJCHruoxGnk6ktxmd4z1HeJJjWJoon0g%2ByqXYdQ2jwp4GLzMuF1wlyqzIgmhLMUDDrXAIYjdbveJATg1EqOSDtoJ6lDZ7dAEcXdSyEVxS8ysuNugv%2FDqW2mXnGiAUj%2BROaTgMQ%2BCsU0NGXtV96ilXVLwmMkVXWn0njDf3ZnCBjqkAbM1j%2Fra9vgkkoBssyjTNZJcEOWrxvLnBd4L%2FTT8SeORr%2BrCX%2FVEQZJ0qa%2BEA0x4arAYxUmHJt8rHOr%2BC6%2Bh283f1CQOoXjKXZiVH1%2FFpmCHkMBllgewj%2BaiyUWZ8uA7UEYbducdxKkJ5gk9PznWSP6KEb92CIW8zygLfmK3u2oUVn6et9otMJRvIwzkkhns5GCrUOd4NZXy7rKlsFIkk2igHKf4&X-Amz-Signature=f6d60491c57be27e0d4160f10e7a7eb260b09af82e99f2d9f35078d2b9f02a45&X-Amz-SignedHeaders=host&x-id=GetObject)

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

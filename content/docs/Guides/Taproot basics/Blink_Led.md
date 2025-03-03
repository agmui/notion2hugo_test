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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGO3XMR7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkSU9nSqPtCPHshdyxRL9EzjOyq4k2IV4VzC0O43sY9gIhAP%2FKPcqpElbcgp4F9EPF%2FAtx%2FHkhLrMG%2BkDGPyUMaTlJKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjHnzhsxxkdBiQEd8q3AMTZZnZLyfFu71G6j0vtx%2BtxaXX9b0caPB2fbPthppcifbaFc%2Fq1P300Mst2K61PT8Ea8IX648IL6IUsStOp8yUdh7u%2F7hBO7GOXyAVoNWl8bsyHhifLJvOsJgo9FUpJpar7G4y7WM%2FKPOssY2bNii9bQa20CwKrWZ9R6%2FZaH7CiRCr9elFb6nh%2BfuUP5iLxp25hXauEnmxFS3obPXUW6AnQuR%2Fist4dQGnfqiopGkcJCI5co1grX4PFJjPlVSxAtt08O3LSG8BrwQZ9rpRlXu401pR%2Bw8giUEHDBNdnjPRG54uwh15uhXa5lfpQQ4LAgmWcxufUQqPqhRLhBCFJibfXVf3bhbYrQMRctPXSGBKDFQes7oUe6McF9byF8kkeCEcpmJQrRNcZkjtfkDJ%2B%2BYwqv0R%2FA8HGuwTTp%2FuD9dmvIqKMGFSm9wCTLk6Ug86QVG6TmZzDmGn0vcnzp%2BVf6pp118JnoYlaW0Pz4IWF3wPWijqPgB42cirtgA9QROw0Uzl3fmyXxhEiKL2du1l5LKwN%2F2wsQjEAwN8wuLQAMnBLc8WwuMoW4rt9tfkO9FsvkC3zcA5a9tikLNJB57Cxf9tZQYBeL4QQ9CZ%2B4sglyGBFF7MaqID9xZkrkubxzD4%2B5e%2BBjqkAdRRYeWlKrS4h%2BLWTxYs6Ft6ti78PvkjR%2FB6MTnINd%2FHoelFwexUvoz1ljsTnEoVK71x8R%2F%2FPWJ%2FOzJsCo2gJpvV3GsQWVqsgp7ZyOZtiIJKzpl4fi34h%2FwxFSPT5tmTYj4Pf6TruAA4VlzvQmrRnAnJt%2BrIH6qW87as5yAnNqb7WOtb1a7b2Ifd1wPpgF6bRehFhxi4yr%2FDgOhUl9S5qNKpw2hV&X-Amz-Signature=5e040b91ba861bfb7240491a498b82654fd08dd4a9787f0cebfcc6a9416ce9d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OYIIZHS%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCODxuAHsfr6xp5a5Q6433AWx5yaeXaHtv1%2FPCKZefy8gIgE26LDGyRO7nRT3Yj7g%2BqkBNy3gKzzHeJipgZyHYE%2BmYqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGPgYTwp%2B0JPLNhhircA8v5zzDIcGPNZMzWGbvkYKlRbSnDYpJrw%2FcS79v4cuZ74JBZN%2BExfYPF3BSesmrOVDg0lErc0wzq7EbxfH3UxKLD5fD8%2BMb8w1zWPS1DrMOnPihwJ%2FYRx2RvFywSYbn7gmeh8aopRKd5P3p7KmE8Lw5WNfTpenn26wMxfkHLXxnU5AS%2BJ7xTx7FySWd57XweNjtIn7UvO6q00BGuM3Em233aDQhc5vyIlFa6EVTLVImPgHbCR0ZteeyFO7uF8t1aPaMOQgcKgPPkyi1jnMEwlc5W72o%2FSSBKvjrGoOMu8QnC3od605k7aKW2qLMvVXNUgJ4bECF4VhjyNqc%2BazWpuManVD1%2BvOGzwz26iXS3bhX%2F5STTsQQ4PZ54lvnAE48tvRQZC1w0hg5%2BvJnyfPg%2FxTnsfQu37PxAB%2BBFnMHbnShMOKHQf00Wy0%2Frlgh6%2BOHygEsfS1zNji85mEQj%2B4Br%2BneIFzE3JM0dXU8M3%2F%2BGDDKvqt1ojwniKujN6lyiorkURxZ4xWGXkQZ2N06ffqRRHby4%2F1QlK5Mi5kA%2FSWuFM3iM3DNhZ%2B2SxBNE0T8RribI%2BrtjwB%2BxAKe9MrSHLrNGDzw%2FBwKjJXb14YNllyKJKfZowxOIyVTjb2qje2s6MJL8l74GOqUBUGjktsvJcbyIJbCZHIz4V%2B3uLbUHZn8j%2BHkocxvYUBneDd7ov%2B%2FMc%2F8Y69IMAs%2Byaz%2BdvTDO3daPNeGqmpp59V9ZNOhdzjCbZsxzPIUDfNiHCuD%2BWakTzuBfcFf6Q85LDt3vpMDIIprMDiQMHbfDd%2BmPSUIjaMv7mL%2B0k5iU1eJ0MJDRBTIA%2Bs%2BQ%2B003wiLujE%2BNb84zexa4Ok6N20bzhPSY5SfO&X-Amz-Signature=b3f3335ee010255189e30f85ed1a7d11239c433d373d965d7caf14dae3bb673f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

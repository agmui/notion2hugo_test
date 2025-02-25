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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3F4P35%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDtnFisZfV%2BRvtA3qo6EpsfWV0Vv2PCURwCY9SDld5OVAiA7Z8JShh1KuraNQMGFEXa%2Bw8eZWVbqsjA6NeAjxYaeiir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMVgMZ%2FDpAgd82atMzKtwD24VH%2BsvNzj9pYBSap5QBdILUUEmvqEWvdnrCfCIs28etW4nHH4D8sVxFCEc8HxwZw6z6pCs7e36DIExLNnpkeKpl%2BZl4qhhQ5GBBuEkFtve3kavcesUMaT4QdJlE000awR59cV2AgfNHEsYWT7kI0K7Va0ormFOc6WY3xNZNZVHqeN4kNNhTCd9U%2FfyHwOKMSRkFm8rNaFuODaz3ihx3zYgQW3B9PECXB6AtDvCHILsDhjvKwND98H1Lz4oZRCahajGpqYghcUZxZSbhb7AbWRjNtW9ZSeW2zuSunlUBxClgsaHt2K9VsVVagB5TFuo39BFP%2FTV83QJOwzsn4N5jY0kM%2FEl05hoiURh3S2krDXyLV75z90nWC2uQMX2Gs9WRNFPBdvAvPKHiVYGnfAAHWu4LqYMO%2BxNuqi%2BQ2y1Xig8VWLcrO1PxjUIQ5ISwKziACUdAZq8qYu2jO3LFlphrEJGkKfc1tAyXyYE6e2yXw6vHkx9orpU%2FiNMfVuBFCgquU%2FCZLNEPnqzDtAvelgHhWRWWe%2FFSswKYjNWCKDzmF8aNKtOORmsSgvaPW0j0pnohDksu2y4Uw2RGCFfPvyaBN%2BP5YKbM9FOyu3SoJxR5PGWTMV28xYLELkROuKwwke%2F3vQY6pgFpGCX%2BBqPSkRFTuctAb%2F2ITU9EdZ%2BF8XlHCx62za7ztcExwgKtX4pG8hPDP7SuddpyhfrPkl0zo3d7lSK5KxvwPJKHsEkijShngNbGWWg%2FEuJ7VFGsjURyqULdNE8IWEPlLjhjtEuR6eJLzvd3v%2BAfENnIIobBQv7j3pH5XvXiooa0Q2orzjuoFE6VeEqjpe5nDNflNtz%2FXZOoOk4XXL9LPkeFMlNd&X-Amz-Signature=9839651cc695a87b3e8e7bfdf72f4e310b3ace702ef6c9a7fbf520ff461bc585&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SWCV3P%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBwBjvIHWhzTJQNUlRZorXnAjNH%2FeZQFVyurcc8s4vCoAiEApj5Lffg6US08wo3KhOu0ETE5X8FjF2GNCnqD1AbbSMgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCq08B40OEoK8PGCryrcA8awLg%2FI9tSSZWnY%2BRLzXILgn050CDYi7NiIbXZZvH%2FpqFi6zgYuFJC%2B3JZU3A0jjxTabo2bB1EVHttw28nRDvAgT1AssCX9tyGZ3RljgIDuefYho67UYF1el%2FDjDtTBdXM%2FGea%2FOBCo%2FwLn8jG5VDQn91SV8Raue0RfbR69pO63EZq7%2FZZGTSK1M%2F6d2UjvM7j3mgxQZw%2FETjyueojA0T12hG9%2B%2BbleVwoweAR2M4j2E14hiKV0nDtojlNFQ%2FpRwKHTJFL9%2B2hF7EnH9JyN3MT6Cm0JF4zkpsW077Oyzt06b5YUcOonysigBS6sfe1UzOu6iB7PDvMKfz6ScIE1%2Bg4eHCiaj0LN%2FXna%2F%2FbT9FF3gO262RHi8Ifd7RzxTkF3axmQL619F5cPLPPmFWiZliBuNkRwM2NXZbonXxyrw235Olw%2BpvvZ5IiEMr06gIEnIrg40QOVOst07OHYdGhAwQ2aePItf9pJdEr88EaktaAHq2dNx3yvTbToFB15eLaYtGZnv1AYbp6FqjjgqJmfnponXVB9UVixOLebfBO4UCnP5RR0OGoDUeZcH4kR%2B2bljtLb7DE6GK7TU%2F6dSAp4dFdbsQMy4OPD2mAiX9wN0LOVOwBTlIDORXkY1vJRMIbv970GOqUB6enpyHji%2BlaQHYv1DlljFrbP%2FZrFte%2FWv19sxiJd7oPeUHMnePxBarX4JvX38p6%2BTXQwbv81kyyKK7GweAz3lIk4YlT713SZQdjEF%2FjyvtMotvgrfiIj0NJliqytP0LG8owxWdmIopaWvjCxX3wjYOzWN4s4QJxlS9W3IDDdRvIpUsapPdlwwqkXode0TQYT4uMkNKcSonCxBlCqaYUXfrNDs1A2&X-Amz-Signature=7d3bf39488eb4d62a655302a03a0fe655b8b53828136d458d67ec6fd27a08c93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

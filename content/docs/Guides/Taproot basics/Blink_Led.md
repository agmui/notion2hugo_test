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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5O4TRER%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAia8GEwnM%2BgjjPfRDjYEw3hnkspymnjqX6QsUDby32vAiAMs2W7%2Fols43fkIKoIOXSiabsmNuz5Th8ce2vhhnK2ayr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM6nmCLaycvjaU9PwqKtwDV45JgNB9%2F6ifGhlNJRlSrCU6iwqPblMkooNk0jQDY5BGAwfxgVCO5E9pJNny12Ux%2FfTFu4rnNmxJEcHXk%2FiVrC0C8gFoQArpZ9Cejl9wCSx1iME9Fmw4Ly7qtB6JavOeqVMjkLEbkdnV5p4%2FL31VfmrgCsEq5TZhm%2FNkw3n5GUfmJdM9nSxHp4na33uKmOs6jpCj%2FOpTEmSxkJl8zQ5L99l%2FjU8udchaT1U3jB6kbsvjPoU3Z%2FmXwcf50LKw0cDHC9qTLBZ5VlDdRILAB8ubhSJqWPNlwKvL0rClkZDpa8bwYis0V8PoKGCjj0Mk%2B0tTK%2FZSVfrV4WxVxpmWhXYC7gUMZYfVhwWOBkq4iIFuRCS4zwoH6ooLPyWIQ7C1mfPunCerHQPU0aUM7ME7uQjGaxGZBDddh3UmOdsRAcpiTYEG%2BQnNoYgRiyuYU4vTVjOVi1CzeyxFiayLY78myYm%2BNCNMwT6NEtbHqhHd9pfBFHGUL%2BYRtEPOLgzY4MjFhPiM8gZvmXfk060mWI%2F1lueixwQZWux1iKRFdcwmEXLsXwUgh%2FVlzcPPv5xUnOmtOiXZ8gOTs%2BoW40fN5ux56HGZpfE1jq%2FrHd8BU4NJMUOIIRTF71avUlE4RYktnfYw39%2BrvgY6pgFJIgqDg7qdy6g3gZfmMjpIhzW%2B67C2rGxzrlR%2FmNzYmj8VqXSSdFVxn2qE6nuvuGcuc0I4VabBBFh2S883BMeWr%2BfbUn4mjav3BUZ%2FcpO3cdQwl7Tgt4ffM1glzL1QCHl2NfP3Ff7of8anX7BZNPjR%2F0gzLK7rX4X3TVA%2FDy14GaGiARXs1xDDbpNoanGRFi3wD%2FBQKmrAfV6gWT0wgroQ5CdrXObl&X-Amz-Signature=5382bc2d8f02ebd91a9a6bc8e0402c344c1eb40c7f3d187c6ca527b85cfd7cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S3MI5TA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUX9Bube8Z3DjMBdHUaq5UUWXLp0QNAu9NyRWzOx137QIhANZ2y1Y6AYGqVQxbO%2BiPTF7cdu%2BwenSLLfJmRqhHx8SKKv8DCEYQABoMNjM3NDIzMTgzODA1IgwW7I3i15ktDmnS590q3AMaNbfa%2FZFpugVAy1tnrm1rOHQ7FR6PZXHOSe7DT3y9rxdhGGudfdrtvL8oW3cU%2BKYhOFePnnxYVLRzAAZbZKQTrfTEVi36OUAxPfM1fLX4tp5PssL5Q4TYemhR8u0bcIo5RiTTMF2Hd2%2FdQcQVusbsTl4A%2FtUx612etIM387ICO7vMQ2xxw02w7RVsd2HUpExUkSoxZS%2BcfmtEd7p7z5Nkt468s5pV2JOmiKLs2RsuGnN%2Fpuolbawp4LqRkVYEWEGrAVexN4XsSFLmfrTscGWZ2DnlMOAhO6yCIEghORP2kKyjb6CVQzcLVz1Hv5%2BfDxXnS8aw%2BzT9U09hMhIAIIF4UnkbwH1d7Oo1TLN7ybgsSmF7kK9Q8PVwipOBa5AQuOQ2M2X9TRNOBOAND9fIGIHsYq3se6p1JSvl5BjC9TsYsE3y1%2FU8T5l2Uxqa0nyc4ta%2BZegOwcZEDyDSOuRn78dlotNgcx28vgOxJVgkuxJEkxGm11Cl6JXwpHfPtfQGboCv66qYQoQxPdlfHFxiDJbOHbvVWSudn63IBTQyRoXoTDc457HXsvxyqXsgMY%2BXYRVjFF%2FerpJ4YlsqnkaxHO9itZIAkK0Qu32jJtK4fbTW1BdHyFkpzWU3pbXEATCV36u%2BBjqkAZNfxmqGrz2nWqAlsrbaneQ%2FJ3u8qIFkGNy1JDLm2OI%2BZFYY8I6agO0%2BLhSElGul%2BySt49cd4vnw%2FwxdMUxoK9MGNkT%2FpPxm6SZnCNRa8ddeWOxhVfx6IdVUN8L8q8ajZAXXZjcxkilaMLuTRQiJWPJ9El3OSpTgvHwzBXgGszQnXxqT6RQfGtUBW4WgSh%2FgknDotWYNr93EONT6XFsbS%2F2Dce%2BV&X-Amz-Signature=585b7dcd4809347beb8bb0b4436065f3f426c63677b2fda469488b0226776a33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

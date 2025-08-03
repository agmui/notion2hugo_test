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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG4XJZNZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB2GujUUEr5uswpKMYxezbg7gt5WZfD6aejn0EAq3SoAIgEIiye2jCKm5%2FsK%2Br1CD4sm2gdaTURhe0uCtIYy%2Bs4b8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHT2GRwnJaMOvBYndyrcA8sQmKc9UL3gApmZ0K8hA7axO5XwbtQX1t%2FBmbbtF9d5JkQV5szKfztXm7tV1scr6Y%2FlhOd9NDYWOP26vMe3OlRZYX5IWHanjxPkaC9B%2FvTuzb99FtjIW7ARM5UK8F8JWPE0RXMGGlbnqcSMrEAkYrx0S2i5GS8d%2F9hI4l1X8gNAm%2Fshes5ph2YgL9qxlSxcBHQThA3X%2FzYS1xYxLs0dVuf5hbtHZkrD4bGDxTRHmhg%2FhnpIx7RuQGgyNG50gtYpBxpvH0lAZjw2CL059n2zA9MLzznFMpfCzYB8bBMQXHdohkIj1MehYevR42N4F80XxWeoyA86nq74%2FSbA33Vy3BUvcUYzmG4a1IDVMt59zjhfhLVf9XxonGZqjUxgxo3nn0U3gPp3lZxb7nMgVNrR5KOOyxgU6f5iHHAV8h3z5Cim4mTlm8%2BhxFz7UQda%2Fx9%2Fwmkpxxg6%2BdPF3Tsj2mCV3PARv2VfECfhtdLr3HvG%2FoLVk5cwl45oKIWz9LzvF1Atj8A7JRCJq6XdFzBaCYuZ5b10KOR2yTjhaXlvZJcZZEV5fXvQqn7L5Dvjc9QBnA5euc6xz%2BlqWbCE8o%2B19Oxj%2BazGdF90dqK7vHLQyxka1RrIU09pxgiaqy3eAvGUMKqku8QGOqUBgBlG2E%2FS%2FBPue7dKMgQvrW%2FFgJ7vMGpu4VnP54L781%2BhX1m9vwUNfamUI%2F%2BT5GpP5%2F%2Bg6YBi%2BqmDYf1eAZqfs56nS4YBpoaRCRJIvq%2FD%2FFGUhmSTVGjzWbQWv5bwfXR9oTpSViLroyoIBkzyl5tPGHxgsN0PrhPpnZaVa5IavVBFb3jw%2BrAMpp1UHUydBAMLfSYdfhVF4OzCSIkRQjpjNX7clIIM&X-Amz-Signature=bb997acd8cf51bac721f1acf513576e2bbdc6278c6bfc375e5152b930b55c585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGBG4YD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0p4ATBKoeh2oCWfTxIvf5UsQnNIGtHlAMqLtLkeu1cAIhAL1dn1h4d6CosmjghMZpcWG6RXNiO5N6BsAwow3Nd9q%2BKv8DCCQQABoMNjM3NDIzMTgzODA1Igx9pL41Ig1sj7Fspncq3ANxmIUY%2Fbz95W9uZP3Mn8xTBb%2FqBc%2FaECD3%2FzPumoQl%2BX6V2%2B2R%2BAIybrFd4fQcqIRx1HYcSB6BTslHYD3hoFXkhgSG9R6jQztMOSW658L0xpUOTIUCZsvyMeMTvAwTZkXvA5CjcpzuXWklDv1ul5hBklK93gTzikIt646RfLTmixgiByD6%2Fqigtjwahy29JCcaSfrwLXNJfAAdxqS6Gs57MrutubJYYthlBffpf3eUN49mROh5T5CjJMv5ZWEmb7wwRTLXYF0iZKMEm6Maub9c8QTRlVZdUwRcd1XgHB3a4Ql2QS7KsBHqBAbawO4E%2BIhnQl2C0O37Tr9GPeOT51CPJp8cuYJR4UHqh%2FK5Kih%2FblVnMHtvDTfYFhlIunld0ECd8GPNJRDa5m6ZNyb%2BotW5HvdC0FCv77E09Px%2BpBjbtELNR8tHblGyFWK4Zv9jGgRMyKw3j8yL%2Bq6il%2F1Yki0DJJCGC%2BQL1UGAdw00K9nua%2FQ7VRjjjoQErSf4M%2BTQ68zWftS5YJSDQnwrY0XxKY8Daq1F0G72pYVi3WN3f%2Bt35GXokK6FhTe6AUIZOj6isU7MR%2FGRyAsg0x5s1BFk2tq3TFfHgU9rT2sI8vr1Ns9Zr38Pg46TuxYCaItVQzDVnLvEBjqkASic9J3mMRL%2BsQFGq7kH4y4n4MobpMi9KKAxLubSlnTwFxX7B4ga2mUw2fXBCssys7acEqxxqjZk%2B2cqakrJnzIC75U8wLzKNm4Mks1UjF%2Ba0FJa8xb9YhgXxD8Nph9f5L5N8LGONSndf0OvOfRhLz8OLFr5LucWsHSomQGeiqSYciPreOHZcJl1ZOweU9Rma61rc8N7p58majuerrzI4AJ5LR1s&X-Amz-Signature=5b60b57eb7463f992cdd96195c8113bfcd501faae735285de6d999a41096fe16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

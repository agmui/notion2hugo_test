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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VTXBU4%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIBOoNmteFIpVzKOg0uGKKdyoKv8VbN%2BjdkQhcPyuh5doAiEAtqCh0wWAVYCGK%2FwacNXeb13W8%2BTQeWmoBwSXs1lszjEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJ1AkMgVojZ1poakSrcA4K6%2FdyjWMwEwC%2FFM5YHdbhwQ2meW6RD6Jyo%2FqhU6cqnWvHsWSnz7yrRPyhphO2%2FXwdr%2BzQjYOlhVD8pp6HblookqXCqp6qMyWP4ZqROLJ3rDrBqr%2BWA0kuQgIGWNosLRB0EF5V5ZUOhi8vEv9FM61R%2Bx4%2BQDEcov2G20WAEJGdVX7OJcbdKlLkra1KtYcpt%2BrJHkOyO%2FwFv0EdBQSipGNKc5scoKL3aXU1F27xvkz478DGPnCBSYhSZpd8h5rGWYYjY5swyB5HB%2BYIbMsGC1QSWDrRYumUo6JPlsjqDfSZcDHFmow6Xn5Wov6ok0piIxRqCrQ4oZLGqdBmVMkuhX6HsFRj7qhLQMSCXHIYlmDiwd%2BxgPBkIgmGVCWCnrXIgySWS5rQ3wnF%2Bq8Fg%2FQNJtpQ%2BPSIDNMvA3pTWRvnOhKfY2mBJ6nYXyOrEvSvIoDZKhFKJNr4G6NEfdQLGYOEGBqH3pb0%2F9qfxiaD2nev%2BnJdlI5VJuFlldxhT1RwNeMT62C7Gn8rQJySECpI70mqGf31qjWa05366v5CBY6kKauxG4m3tSJEOMgQ%2FM1BfENPsIlvYakapLICyCoDUrWvT%2FFt8PwwNJo2bj%2B1nr4nnlkaWZSoKFRNf62G4cIf0MNjalcAGOqUBHh3tkyRevPT9W9yEtCFAXox07t19HSKv%2FCi0NMMLrJpQi6Zfz1X0yG7Eznzty3sRgvZw5KK5F2wr8UbSx%2BbGVRzHBd08%2F4Q0QIos9JJaYXdi8EBdKh0zTZHahTaGrqdTtHq33L46asDvRi5BlpZhm4BSHRwiU9u1KCwwzCz2k368mxTxR32Msv5IlCZqyxKM4SF%2FLKJGoXkkLErsSP4cQ%2FJ9eien&X-Amz-Signature=eeebe06f650ddda0d430378e7d22515c2aa6535df2e906cadfb3f5d0a0cf0f47&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMDLIBH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCH3rc71kqcBlbUfKDObOQ4MDJNKjA9gCipXCOrWxedVwIgCpabSVKkfCPq62JeVSoL6CaFJ%2BkAG%2FbQ3iHLnKAIeHcqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNv6eGYVnKB7TU7WCrcA3PBXcMqCBOQKatg6gGqSXDyjgdkIl5aS2QUWBJeEJg0YjjURicysE77j%2BdfUWbHhOt21RH1JFWLXrJ7vl3fIpA2zp5NL8UGcR%2BNtq7AogENcc5IRIgw33QN%2FGV3BTq0LKdet9wlYYciZCm3GYcNytw58aRh7XkLZlX8qgtzTyVCTyTSN%2FgpQ8iCLURLsQHWrxI%2Bt87pK7BFowM63TlSn6OmHo%2FGSIq1OlP%2FfadtSRmpAhhrq01b3hjUXwDvbxM%2FzAXvSqYC8qx7%2BF%2FW1hvEeBFUPzsd85m8bklXGLRs4bH0nKbFOg5EYovHeGOsR0Ieyz1wHNIob%2FQ67N1ZWjs3xGG8jSqDo640wroU881CBEDNS1iv5wWlEFWzVfjQmQGQ1AMNxKE%2FCtYMi7H7nw8nhz5AtGD%2BhpFUkhJ4QefoPu38AEtoEv3LzqLCL1DrxnqHIuERYCa7GeQSQ5v%2BE7v%2BDs53gjUAKYTjhKddr3ABr%2Fz8EZkcOPKRxqaXML%2BSOYmePYRLOIHwwifLT%2BeO7wROf90WJ8h6eDPVUQJg7c2lpE38F3kZ%2BBhOose1%2BgaLQGDRojXc8mygQqjsC5UUFe0wej5AvGKYuT1LfHA5f1iTBwkMLXokoHc8ZMRz9V9zMK7alcAGOqUBrSKLJeab4oEQEpmycwyh%2BBSoa6J%2BJqxWD5u1LV1I2DUUREA08VkpWu9jQqsHX%2Br7WQOEqQPrlE%2F0%2Bb1oi9mDyQ%2ByQBLe9JTaEaOB4aBMfPGWWcPsY7sQfMBmNeqmEmFaS51MS19V609zGV76gNBD%2BqUCCD2NZzKLCRr8vHml3JM85WUQFCLnK2%2FUhrRcJ00nfXdaFIbCUo91nfxBioxlaA%2Fdh0eS&X-Amz-Signature=2c54eea54a59d38b4f3df2ab639346a6e1e756bccdac6625fb6417a0c0c72dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

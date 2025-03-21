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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667POIGXQQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQD6lVfMikEyAnbeENEQawzjjRhcRzyiQPJeTFx7U3IxIAIhAKgOS1GLUxkpsvN5dm0ATNr%2BX1qfGF89Bf3TSZiRUn6rKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDMng%2BMbiVlTxoWCIq3AM4DDiTRQW87xojHE0fLBJqtaLaAvpD9VAnoQ9yyPwPOprw7hGgEHwo5lMPYetN%2BZ8Vu3N48Arwc8Io%2BITnRvHJnxmiet7RbbL8y09dRc4oQJusdcCUTsRQTbxuk8dX2d52PfnkeYunF6OciD9t0iwOLkv0oCsFBHDsNQpy716N%2FlGzMcCzRbH2BHVnSGBlRzja9IK%2F8UsuxDOfoRfxhO4lJiOxlSBD5%2FsKDf6lR%2F24DKeXQNEHrN4CHqtEBhW9xpADbezQSLrB6NRGubykBvandyx6bTFS9Jm7tLr%2BpMG9SOvE5SgIrH9WGisJKiJm7OgKwsu7RG7ZCcX6mKAKSnQRfoyFxgPUXhYyiMlGYIcj2EXUuIPoU3E0DL0NmhErqdIFphxJnPc%2FqVP2ngEHDQWfweuQcXf%2BLDRKS2Inpvm5bjJNx50pIiObOGWGZwJjddn7tmUdwMtXmWmo6thYiaDW9%2B4HnsMVK676pbhJq4Ax4VquF3GHn9xy%2BNq43cZuoUJ9lJgrX3AhG9q4fHBtGsFhZnIGbwqKcSF8bTihuVVWMwTpedrNrwRRCoxfDJ3KgHAsdhWKpD8VE1VyYRmPRGRVj71XHCiuYc6gZu6M47%2FmrfICLF3i31X%2FPelNdjD11%2FS%2BBjqkAfyt67yQUToPwi5BhxpH6QTNmBYBLV6N3QSJJ6ldyT3yJL3o9xfD7pq%2BofQj2QqLBaPd7zUxn8sI97WuOqJexYKX5jrKzXsqn2CK2edcVdi8lAg7Or6DWTCEOVxR86OFKK17pf5OJbvdHeG4ofegoV4lfOveB2fLJA0OeccGD1kHpEI7JEJDjBdU7T3zzG1vXH5R2sTah0PZlDI17zZucYULEGH%2F&X-Amz-Signature=918d135d60820480b257bc4e8bef43e5edbe0fa692b3e9cb2d1b96a1893527bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSXCWTIQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDSRUyno9UPQjYVmdPQy8ktYt4UEPF5JsFvfv5x30Ao5QIgCVzDLuSa9dx%2BH7X6O1%2FzwA8gQjotZHJuXFz8KjCavdcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk8ZlwtfKdhQSLP6ircA%2F4FSWRHOPNmjvjSI%2BIehe1gT0eZfWy7766sbsxdVBCHLuEQrZr3yUwLylTAtdkjjU8XH5niLv%2FwrHJ44W7EiPFFmpvwkFoyrWDAapWitGBuykyFzzZqjL0yjWGbQUSQ0U16l4I1r6gAb0ZR4O8t9Ii5Dr0kKEw%2FUKsIAsUCU3tkVs7Ft30VLMVKJUSP1vg3UwhXvWzEuR9y9g5%2BptmyaEpe2ATtFTF173p5Rq74NS5VCS8XS4kQS1iY%2FzOi4Z7BYQ%2FCKqkROzJf6a9FBR7shlvp5KjwcbN7wArDwZe%2BtQBjiAoKkddlcK2ybkGrFUrNGqbGVWKlS90YovW4V02Wz2pL0Q8UZbqKsi5oPb5M2g5wpDRqtkDGTK1z59zt95wRBsTjBLaKRASl0G2T3LlDLPg6q07YP8IMpg%2Fyp1CzJR7EUTbm4avRmQp%2B28g1I8d1O9R5iLBUNIxH0Pj4EPbxLYibN0dfxA4NTxh5iJfNv6Lfpv7Ug1BdpK0FpJHvq31TIk5q7doyoPv8HXjnk%2BxCBlh6eYk66sx30w9habdYiCWDBDqrX4OA0CsWmnXATsABfbToqekdKjItU%2F8ItxnLzmGEhNwqJBreX90mZEVStK6bjKKYrjfJM5jzewB5MOzX9L4GOqUBTdlYt0wePNKbx9TA42IdjQXPe9aIgEhyncnbMUwZI6fHyduo1%2BycOKyrOun6WhXlRIp%2BKwKqLm24LJgbJMy3ecPSdkX0e6QyI4SIKJk3OXFbRzRcKwRp%2FW%2FROZVe13NzeROxMlszfNlLzCm87ATOWxmYBbcqbeFD0XedLjpdo1MDN4R3DOpfuFa3GHudcT9KMVwLGDkO%2BICf8m50t1FxNP8LOWLG&X-Amz-Signature=b695268d10d301becdf1d461ca6a4d4bc24be26c024175d89db1ee2c93d25c10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

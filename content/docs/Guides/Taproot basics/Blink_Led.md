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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S74VGEOZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSCf2sawXTSShOdqRKxj%2FBXelXfjjKM0RvMC4OTPFfWwIhAKtnyyDR2okUTTz1o9zNhSVvWMd2BWQ2CtfklBSI6pqTKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVCeYPRUJWNTBbpRcq3APbN%2ByZHSJ7RcjSZyEV1gdi%2F6JVVFcv18OO9au2CK0SmLxPPmwIVAtpyEGuFYe4TxaCInRNJ%2B9sxtiSzZUWYRIW8wGljJLgI8Pl5RDbKmYEuE2LeyYZeGJdLWNYuJbc9k2OYsbe6qeWCXuexNxFn%2Fw3Wdu477DEr1kdzFHSbDSTcCEJMRles53phpbmYNjTd89%2Bxq3ANQRyRUv1RJJEjUfkCzYB%2FJgW0nmutAA%2BKQOtvWDySqsF1NTlTPeBKfvbSo8Z0odsct49wsR%2BqNsZnZCw24iw%2BBXGMmkpAQghuoa%2Bgp%2BxZjcNitXB7BDtuyBucWwUKqm6BF%2BlSwe9kxc6YWe0KGJgmiypP1V0pLG6hD8oZV%2F7%2F5LHCLNE2lLX%2BsWxJN%2BexrKCrW4hQvMggG4CREFUFa9U%2BujOfe5xfhlUsXbax8v3q7voOrBlMWSU3rVhXQPCFm87DsThHp2r4za76uCQ4GTl3nDinfUSUCd4i%2BxqVsSYCqLqzW%2FwdFCawKc96aDwKuKOpMGBXHLCcoiDYuSmqejb9F3Wf75jKO%2F43BMaBYxOWKgJnV9TdvHLm5eQ7sopMWemawBsT9Jvts%2FHp7a1oOIHIl067MHnvWsgHTMuY6Hy8DU5ujQy68GVOjDglpDDBjqkAZ5q9GG1tE%2FS4xDODqbsFiFNbyu74COeaAVuKogWBYqalRwzi2RaA3uf0kIQVYSh9POPW1Q%2Fo32ZHkO%2BtYhfKOZ93z6H6Mb5oh1jyVw18sDceb4n7Ea1RWWVUAkkoUVwuzSfaJcDIZVqEgq877oLgwDeSBbUia9sPaO2lsMaiSii8uwr3hsM6x%2BQtjZo9fsKIOH0a7Sx6G3kVGEX6S1XIxfqc1P%2B&X-Amz-Signature=e72a8df679240d87c084c35e3873bf3e9b13d0a2170a1e159c4cc079f0ba0d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UNAAOII%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFtIdyl3FQaasBao%2FA9AIyuQwKzPrLj%2BPtgpa3naF56AiBIslMMJ1A6ZlOjtS61eFgmK6nUG7beRAmymzbuZQL7OCqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmdUqKH%2FD2940bptxKtwD4aknbKM6wDTgv35rVBwXxzJHe0W3rFGrLqUwWduiRQPPsXn%2Fs3FMpqBhSjoT9jEkNteQ2Vl4YTqx8%2BXUcETO2FWI5OIt5hERPIWVopb%2BS59zME5jOnT9p6FtrpJwaiUJLDyhIFQM0yXXfOn6w3vYxH%2Bu0zMZs1UQzAWG3OCpsohLnHT%2BIGOICmkg0jaQjdHnEF4hBa%2BTNJY%2Bqnx9vEcS%2F23JjmWPVrgp%2Fdm%2B%2BGmSr4G1hdOvCWQX%2BOjbe8eqTwfdQf5dmZ3981z6GYOPAH4XW3bcOKtO5qOGXtb6qCyz0LTbbpld%2FxTi%2BpVIL%2BD85DE4iRbvHRnjUpYvLRLbEleqjqWE79oBVXdCmfK6OXfURgUTiFwHg%2BVpHNNu1nGY7lZxzPCdfFqZ1gkLTWPQBFE5UqIaR%2BtQ45gH5rbL920NpUSY0926EBLJ5TyVoA6K65snsj5L2ngyT74LjwU1zaYuqhPDCL2Ei2w5%2F1z%2FNPASNGu2JZlspU1pfb%2B8Z%2Ba%2Fm1Nlq8Gwx9u%2FuMvA7PK9FdTmGiUATQXPu0oYoXU5Q4OXvqJA%2FTw%2FB8q8Utwa85XrOQLk4Sim228PMpfPmZojvr%2F6HLlgDl4IMp1CmQjSDNoHtMwaWI7yqPyqiw1H2QQwmoiQwwY6pgGd5udn%2BJ1MZIPhsoB0n9pqf8rxW7C%2Bdbew4tH5gjz9mxlquu5RM%2Bju8LbNoPd0v%2FtO3sYVIe82Nl%2BiQXfAZTkJxMw9wzFIwjy7FADKZmw6615DEIyYmhIEd9C7UQ0x5ijO9xP36ClZ5j18cmuuq3mtrs7FjQIH7Cgz7C1JdnUEZdcWpViAi2LJuTL6wSyaf95V9rAGGtKEl66jlZcRWKDRqEnP5zAs&X-Amz-Signature=8c8166d6858c32e9e2502df4f7ffb8470fc6a9078fc1160369e07282bd3cf89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

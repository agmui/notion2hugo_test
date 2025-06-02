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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NR4SDL3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHHhM35lOZngxHhYkHFiBL1IcxTj5o3VDb7XnVM7AO8WAiAjo9hBazqdVi%2BMpOzXhL%2FPKmvGr2EzsBQ3gvxN9MjR0iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY5rlLQViYxQeBcAPKtwDHW4LkhaDbaRZdQvv%2FKYifEklgCl%2B94rwCS0ORapzpXASUOixgB7UA2NOBxLq37makyReEHb18EHYd%2BurIayLWjED0w01WesEGCwyTOoU53W%2BC9udAmaRZIQfkdHusS4pTXKNFu%2FotneIHvQNUkA3pVGbhw5%2BzfXeNHHXzYd1utax325Q2rnozON2FhK1tMuUUsyR4oKGhf0pCz5aY%2FK%2F73nuMIn1Cdb2zmS67u73N%2FFS0vn6sJsJs1vjylgKynHS6ZtwoQj7YDJDlZoAhR1N%2F7FG4XVzXjciGy%2FYe7zxoSzJd2AdH2dJIPmhBAP8Oz%2Fq%2By9QJBqDNqITwPfugu4yh847CkF1RGENQcS0j6SrBHTVPAbRc%2F7N5ozegNUQh2dK%2FWqEOWa8PsB6x4xestJthsYjPkX%2F2pqHgvmzr%2BodzkyDlRgIXYf4131MKdxURsh0ceakGS8DX9ecszOsB4rcf6NJxR%2ByfvAHo0jNE7dKJtVepVdSCtWqaCO0E2VAG9mcBsc1G8QUgcvtA%2B%2F4YqLqcXgtf12Ph00otxDv1ktviCCxuHjZA5lotDDuzuejQYAxfwozvZ713JgcasA%2FizgtDpG%2BmBcw5l1ad6JTSYuyU%2FIP5RdrFTsxsAeIRHUw79f0wQY6pgFdXwGBwAkL%2BNtEZK5HiHPjlwmZfFASNWysCidP58MFMlR5DduiXSt%2BEF9AjojHyVhklzF14FfEbV942czOdGrXea6p4gZfmeO5uANeGYNrlDEqY2fzOuqg75x13MHOUO3D2zu6xStl3zmkGPFkD%2BMnPEvjOULwRodstuRMWUsty8qKnBklj3I%2F1vScRQvxu3Ks2nJdznCnDekYJbZB5OabhFf886Ij&X-Amz-Signature=1d687dc047dd3e74634e94322648d3ccc15882522a0a630027c827905886c264&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP3OEIQV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFPWYOXycj99xzIqihkcia1yB3e2%2FsY4x68EJcdjQKULAiEAuEQxcslkOMQoRr%2FJeWpwRML9esubvyP%2Bdex8IS3KmHAqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHynusJYQ7f2VSe9yrcA0hP9AKtruxnM61V1KYk6KRrOfsB7OorhBmSWYr4BsKtbmO8oCzFBW0%2F5CaBiU4KQmXstT9TUUoAn77AAWYuF1ByDqM%2F%2BP%2FcwI2bX817oK4RoP%2B%2FFp4ORjGC%2BacLv4bZLXWA7zg6i92nNkMCl8nano%2FAVWEg8Uymev5OsogcqfHinHkptvkoWIiX1nMeuQhFGuYjSj2vhKTwJlmgv2N%2Ft4WSxG6%2B7c3d4C11qF7n3RPRlw1ZkrzCv3doUUUdCig5TLDqkqbe5gX0locvnbjXcenWtfEeSEO%2BMKIInnrTDx7wiCuXdeHuuiBIEhM0iezazunJsCRz1sc9F18bbr57d%2FZ34P0X3Zq98cvjCVgapHJE0H39CcQBMxlqM4pQImyvLchp4F5gMY1w0Gi%2Bsn%2B%2F9G1%2FeTvNvD8%2FB5KX%2FPiwaZgx1d4OAUrOPGjmmuUE93fL5MP%2FRRYmLn0rkOeMTb%2B3eiyEo32K5jkUod7NFGkKkkx4Yjjr%2Fh%2F%2BWFuhgUhVoP8uFlwkPcTiUOj0TLD3lF%2BLgR66lC5jKerVpiZH9W3zaxjKITG0WUr9F1RQ%2Fp%2FYs2lkaHRTe2JIu37k%2BNDitapn5Ud0%2BQyEcpOX7DcZhXabmNNWEoxBj5nThyRR2eW3MPvX9MEGOqUB7z%2BbKNJddaeVB2Vc8j56k1yU6%2FzQtSS%2FSWm9nnPjM68YKJrqRBK4WomIfXI5g1eVtiArAJijjD%2B9gRjitgJ4y2f%2BdFEp1kfH71NpMnz%2F5k35sarbw9P0BXO0X5SQEJzos4HXMFUQtQRUh2Cuh%2BvLQJj8dl%2B96qtTbGQ%2Fg%2FsCaRuPEzN51AiPDSB8JhcGbsoSzuIk2y690A%2FARkQ5j4ucHmDBjTJR&X-Amz-Signature=c9d40e9ba538e01c91df20d5e4f25aa43dc7f5f8989caa39a9549db5b6336dd7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

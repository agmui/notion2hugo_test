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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXWCVW3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi8yaaHUpf7uiyH1aIJ%2B%2F982y7lh2evfAXppfkCzCV6gIgUXuDNOGWGrd8VD9EH5u8Z9RoxQvY7p3PR70zSOMZDaMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy%2B3r7jrFRu1frqJCrcA%2BWSdhQBiwu%2BBW6Oq7%2FKC5zelU0TzndZWx9MJcYH3%2B8YAnMbuqnDoc72y%2FcEe%2FBoZtmM3zuikyz7JaGIRPyaCihay30kc%2BcuVZQv5UGoUcD0SYy9owVb6fsBuYVLlCL%2BactRcIolp8D7XPUYsn%2Fe4pLVFxIYb0p0%2FoIm77iQbMILvZv9fYFihh18MUr35%2F7odgcOJhMSvFPOya%2FUj2OUilPmI8T8HESmNtwBB3Eq6TKPmfnYzdQGH3pkQht9LQlGO2PI6nANktch%2FenAZP3ltmtFmPC%2B4xdbg9DF7GSX9ahjY9MMYWOWNM4D%2FnSTq6Bc5HOCsQcT6nVg0dZoORwK1thufGgsGz31%2BeMJ6eTj8CInBMSN9mohmIu4FwJWEDOgTPko30ajazogPQ0ustjBOH3OinBVyWKPFxCIMyIyn8hmfWphbHqcMA%2BUfVsyKeI9P9%2BUcFNRyMzpjrORYYIXZBfaWSak%2BlE11cErxYBDm89%2FmfhE3MHYdY%2BHys1yCJLxJ0CrzxGUxiGAKyWsQHG9tzWzr4Rv2X0kEBpH5aAMlD531F8BdIruRTnafuwV4rxP6W981TDC6CJL%2FsEZzdavsQ2a2Wv0o6T7ibuep50lh4%2B0gBGG9oMHFL%2Bw%2FbOFMP7e9rwGOqUBEOqR%2BhU5rDS%2Bm1iDHdxo4Tk3zmMIxFLz3%2BjXD4g0o9qTFvlQXFEl05zwhN80jXLA%2BdTCpjWPcpgbxlODRW9EaAis02wfdveTor4e4Us1XBlne92hmCYVXJCuZECHtgaCXZJC6y7DX8eopbYMLds%2FvvAjcWaN97ppllxRD4ZhUeaK7L6Sy0lXKDZQCsrg%2F1ORjMlBERd%2F8EFVAlOURcwC0OX%2FMlSR&X-Amz-Signature=600b2e9d320f4fceb3367803d262fb05383a8449b60cfa2185d964a09490a5e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V7WOGEK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7eun5z1AyaYbRzbeF2P%2FaU1A%2BOQ13A5mmbpbl9xAxdAiAbZTEYXc%2F9t0Np5oWljUjfJUXzdmxu0137xi7skhVLwyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwudWwwYwzDsVRgfwKtwD92JGuwMMvEiIDAw1NZMx19L9%2FCmvlprj5b2JPRshIG7I6y1ngXq4U9%2Bs%2B9%2Bnt0oQCDDOoIl2XAQNCUzodVC4Vh2JIxkBghBU5%2FycHqvCBes9utG3ThZcJ6hCv9f8iL1Kb5Yfbl%2F989v8iMSS0EjKqZtUPcHXZY%2B85m%2BGFUNuQ66%2FJETyid6VNX0JV8PsmQyujQ5FJ%2B0vGsOAPYgLKyCvrJNVSe2pMaWiQUL2zI6t29flzynJ5v2PBwqgOl%2FpDfDUMqpnSMmi7f8mODquIuP1uaq0VP897ft%2F6FYLmDLtgcclu2mlD9V1HSK0xpA3WCISsmNTJQzXA1B8OKfry4Wl5HlaJ4cC26X6jRUGrXbuG2iXZ4dy7dfQ%2BUVx2ctk%2BHfNR1pExWMLHIWLeslEcV%2BZ75k5AtIVWV9kvphJQA5CSVjEbL%2FT8KiJ2BM6%2FijHodCK3cvcuxnT0XRJ3Iqfie%2FNo4%2Bn06k5mS29H4bZLjR%2BXsRb18oNt8iFL4R8oGyZbMsTJ%2FxqVZJFLDi53MzcE5MBv5DALD6xJB2Ovtk%2FCEXOJNTWx6AZ6wz7zGkbek0VygnsllAXo6mCSwAiLimQOXolKb8Wb2%2B146qoJDyxYIoG7ed7Y8Nndw5ghvkV0ggwpN%2F2vAY6pgHYOMYsIT2IjDYGJYQhmGLjE%2B4D5BP9bQfCvKkTE0QXyU4q27cIYQ02aGWGJscj2cKoJyvn%2FRnpr3s39doXhocEvN%2FL3lG8y3Yi2y2fL%2BYhhs10LcDYFipS42tQswEf88QstDBrvCFnd%2BlYui2d1fOhds%2B%2FmQe6xJ8Qma24531Hep1cS4YEjevsdHj8Uyt7dDi16FYXoeZjHGo45QlCA2UGeSXCpXrR&X-Amz-Signature=149ed173f9d614e459cac3cb25671bd8daae411abdbb709a1442a627d573b722&X-Amz-SignedHeaders=host&x-id=GetObject)

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

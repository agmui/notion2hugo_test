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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIL2JINJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELNgGjv0oja6IptBAYsYB60br0ChXQWdy4%2BGLgNFNipAiEAijlSyWz%2Fr3nvMHGy3uWXwRUKOHxtU14X52COvr74h%2F4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPPcL2d%2Bshm%2FwazqCrcAxqfp1O1agVt2uBqYdX7gi0ohniPF5j8GNu2glDR8AJwNfG7VnDgLQq%2B%2Bc%2B9IIYULzDo6dlSNKb8lGoeJl7tyOK13gUF1y3nqzW8aF8Z2VwVFsn8Xr4LLTaCgQYX%2BkHJJu%2FW9g2LGSeduzbsD%2F4nobM5ebYKJv9Cjk4bh1YRbDZ69Imh0HCcGJPYSBpy2mD0XREsS%2FBPr61nodBZsepoYXuFfF%2Bk5foqgxiRrNUrsABN%2FMrKoTznbUs4PR4WlJ%2B4a5p8w8nsFytHA84DHaxxyUXvEKIBsjrr0pimNUn%2F3fNZefiU1uSwh2ifdZ13hAakEZA5DoudIs1eazGTaZdT4OvReTDGxZ0oREu%2FH4POYON0a5pJL7F6jXrcxWTkxW6f5jbhF7VU6tsWVkM%2BVclgkK5uyLYenqSLoyw58MAqYCtZ3WOiWfqAmLcf8fCYSrwyuha5jIyz9CVkSlVg1mNr8bf9bc4UzAB9OetVUMfg0M%2BZpFVSAwYktn4DPok1DPFmjPGf5bUa%2Bheb2LS4J1dDYB7knIIfAopybdo3uRTeNZgy04o0ZI9IviT7Rgwh722jUu7fnXuCtWBRYNNYvOrJO6QHk4cCag6sIFwtJSos5RoW9NkSBcgJYuLOKad4MIDX%2BsMGOqUBCFCvtoPcDfDeOyO2c%2BhAjOa1TNx1Q%2FhUF9sRf4ZNYOaO9O71JWYRV0Bdv2j%2Fl0qlZF3juEXy2YlgZaUR%2F34wz%2Fc6aC9Dmi7dGhAXIy3O%2Blqt022bm5DSTX2BAy5LTHXDNJ07GTLA07u4tqlZv2llbGOq7EsmHm6euquHxQk7JNTOPPA0KhMltFuRzznQNJPQjoj%2FcZPojVDYIcSU0giX6zLwCsWY&X-Amz-Signature=9c5a15f83bc0eb6c3598197615ea7838e243bdd9c7946aab9273dcaef9a61597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JUKKNQA%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF23VZaGMqd6riXvcfdIHg1AOKiVRN2dTxr8fAd%2F%2FJk7AiEA7yDv4fAe1QGfD3%2BydbHO0%2FN94Z7KDOU3erox9L1HCwcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnNYVdqD%2F2mTJI7PSrcA7%2B3hiy6pOcDHRAaETHDFJNjXgdITS5yWvQPaO5nYrZXXwOLTylUJS8XM9BB8bOwyL5GNWPw8NbyPVR9WKSuQz2P7hDq%2BO6eSG7P%2F%2BZTKLIv5DBC4WHpeUE79uJS866RU57jH0jAWVPoEHyO9UVklBPXJaALHU9d%2BcKhRPZpcr4Ne46AZCAmh1E9iNcjhBPCO%2B1Y43HF2KbzRHtXqWDuI%2FtNUodNIuhbxJd4WrqEZZFxdXpU2fWID5vvC5jkpN6iUqlDl9K28dSM3xUAHJAx63Y63oSBDc9JGg0Pi%2Bx5QlGbTKfkbkw5UVK75sSdVoMidCOnopCzwziYKCdfWSsV5Sb6ILNwlbihUFCdcvlgYKFDpY8Krj64M%2FAS%2Bjy5Ms89tePs%2FWZkQUPK0PeKkqa76hWjyIa4fdhQLdC7mLRtXzrI1qNofwvAmjpwnDShK4x11Zg6CXu%2BJDehkXpgTOYfRUsaZ3R68VeZqGLDKp9MnHByX6BUVyqTv6ohUbpEDJIQNvihGoV7DPk%2FLrj4ZZLz9MLD9am0TO%2Fynn6pJSxUVJ6tcvZiOxt2tn2N24HLJ200JftNlwXqg%2BzrEmrmie%2BNhGrtdigtaLiK3Giik%2BJBEH%2Bj9vc806j%2BOD%2BorrjnMOvW%2BsMGOqUBz1cYimQ8r0qP77jKbIPeYYws8pmkagQNeNmEHYF2SbysdH7f9%2BVAFSqCekXd0n8Jn51r3u0OVIQT60a8DEgEK8KIemeF95pBL8dlr8wiB%2FOboiUy%2BD61tZXCbtNoZ20Pupkgll15zj8sgRcatAxsSTBSHSeTz30%2B8RO1Exl9FQa3EK0yIZwS%2FMPkUVOAze%2BMSiBxCJTwrmle1gRDMs4rxP%2FJNEw%2F&X-Amz-Signature=bc7d598f592e794d9fc4c7e1b762989588eab21cb376803ac1fb8fed0b15cce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

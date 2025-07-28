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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKIVCMM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDuFkmAB0WYwwsopnNuUcloekWLAHYdtgFjGPHNTLK0dwIhAJZm%2BzJDbh6bUIwzby%2FW0PwpyUsRRxoihHtHhUIJfd9jKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjIFpW3IBAp0XudMcq3AO95XiQCSNcko%2BE2FcMZYdHjZkAAJ38GObouW0BX0C4TlSxryk9Ml4Epgh3Zmq0vaouXD2aho34SrkVKD3GmiGYJ2f%2BMm06BD7oiCMT8bR7NdpX1h46XatfA8RYKa8D05wYZZcCXrAgtMt81z41bQjmQ5mQujl2eQHg5%2B40h78QcXotT3ZPVTW8%2FRxbuUVC2FKapN0qBW7udVQekFLrgaAwpqrKIhhOiJv7yUD1%2Bv5SlZ%2FSZGnS%2FCsiklcolNLrBXOdCxT1U94%2BOIxWd6ah6VCHwk3KTkXvLIzAaKQ2%2FWjqTYkFWrnl9o%2FmCaM76ZB9h%2FcPgQcxEgDAk%2BU7%2B8BBC2wxW%2BXXij0izOg2dhWQV9ixy4IHuOaRTf%2BhwE6wqSzRu38TB1hMTbX8fM6lim6qGGQPDlZMCqUTD9ZrTYAv7Bqyddi5osj3%2B%2FY2MqHHDBjs1%2FsVMOLq7vjsr3WT2brQz6ZR6sM1a2dGI7SyUmSFwgbthqmLi5GdCocJNZ7hsd60%2BQAIRhIlhCI2dxNgnwiARlwofJrFUY%2FOmb1WUYH4LL5P1%2FMUyQbGYfJeu0MNGUUnwikeG5kaSXWcgV9RXTAvGjudOdjQBJ3mhVax%2FJSKQ5Bie1RHDdVy2GuNqmLOTjDbjZ3EBjqkARgvFeUmgBEdlqAwM7CwxVF75wlbTZ6rrLF1m9FjIihoum5ICcfcJ1aJNJtvTJg%2FvzrPmmF9T35zJFlLlN1jwbGVLjr8X0HMG5DRCVDoELYHlZYQadEQhM6jMi2%2FI7Sk%2B1unqwApypXsPD5QLIsP5sH9wDlZ%2F4mAGl29DDmvX6c8OVuHVry9XcxXmGr4x4RheVh6Dekh4RiireqCHCrE4dob%2BnJc&X-Amz-Signature=f5b5d72161bf39bebe1adf5e1ba1f80e7325947826f32324d05ff2b43d23786a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGGNLRB2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCc9NeukeAiGJnfN2R%2BfbCDS56qiWNkE9WQ7RXCRUi2QgIhAP%2BgllKb5WDgblBCj2TeShirmURKAQ1VZz2N0vnRHdtXKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygm0vJgHL1LlavVk4q3ANY0CnJPabWNVoCNoY6pXvuo3MMHu3oMVmhge%2BRTNgHnHWIkYulOvCtWuoKJM%2BQxPY%2BgbqIw6BgXzCT7T8O4mprEHNUWsH8XNO%2BhKXMnli3BtCgJznLCVh7%2BysfrE0wXsmsTHvBWnFQ6zTZWtrVS8tilDIjg5XKla0BNi4pH4bo4Ty1%2F98JMe%2B8MbVTo7z6rg73N5gm6URhgo%2BkqK%2FspqYPyuD8avlvkEiCwhEk2YGpb60bY6JKeTBRsY7BaIB0I4rOA7WbCrS45hMO%2FgwASrNRXI71p%2FeqEZxAH6rbS%2B0hBinvBzVq4e6YgDcljTVjcL8n398gd%2FUIFBrSkIa0mYILPqSl3hNckWHndAdwUl5CWgfr6iyFTq01UHU2qGR1q0FktF37jW1jGrvQL6k8GZKTq3TLR%2F6c%2Bo1oL%2Fv7DzcUe4TNUJPJuvc%2F5psz3R3%2B88tLj0Ofh3S1t7%2BvPI89qtRQCRMADKRY2qHUTRqYlvokokcLaIj7gaBA%2FRra42HM19RrUk16bElZR5yHZd81zNfMivORcbKGfoEzhj9uujFTpHnWWDoUw3IGs8ns0csPzBqEVaadnE5YvXeocLlY1v0F5w%2BWDlAUlz3mtjh3xxHJsp%2F3ZzblYxlUzrjYQDDajZ3EBjqkAZS6FyfDMFts0Xp2oWUoxESwt7L62dSVBfrcVovlr%2BVHK3qgNixkh3blNPogjtPoi%2BnzN%2BUr6WPFt2dECxzs2waaKv7WWvmsEGgYvNKQ9s1cSK7%2BcerJuUqei7HHuuKrZszRKUHZqC48Dy%2Fn%2BBp51sPNxCs%2F%2Bqog5D2TqHkL3rLzDk3y6aBFTgyROSt5WTfjGVrE4fmJv%2FERqFDJ3mEME9rjD5Qw&X-Amz-Signature=54ba1ee754828d379c1bad1c1b0c33c375f201c0b35648d7e5970a506b5e4ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

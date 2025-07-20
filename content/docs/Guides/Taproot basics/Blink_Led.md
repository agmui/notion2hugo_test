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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ILG5VW6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRpTjB0s7oDxn5wspR%2B7yLOBThuq3%2Bv7Swv%2BUn94kh9wIhAJPFVTK8k7Zppfld6ZRKKbj7J307sajT5l6PGjgtSMc8KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3c4EfDCd%2FjDEssAEq3AMSnI8lHGYuqHKrkl%2BOVcWRVZINqmuHJI65mDbSJSg1gBfcyV1gaXho%2BTLzyossF2iFypuH%2FN%2BU1lQMtekidwM8Xoch3fTsGXksf3BsxUumTc7KRh9ZjYqojPrDwK6%2FE8zH7ip67lWt1vrxaQMarWvEpoQ6cNvW%2B%2FSMevnkXeR0jbjGvEdTXIzOltwC2ZQpqA0JVybFh2CkNFu8SWtBFjch%2FfcJ8yUo5Ha5rJwN6ut67lbsK%2Bj1I0ryc3Cy9a88t1xr6zE7XG9h7iwPG5XcfrK0bbw525q9D90mmzrVPhP8QulbTINnJzi5v3AbxWQgG9hU2%2BrR8Qn6v0VUDv6Lcwjfd7ZhIwRAXOEz%2FMPj06LzJRPL75%2BjFZ20m1WHNvSL7%2FHVDiRpZExMPbZlofFOjpOp%2B%2Fpvj6uw%2FUgRNq87Zr%2B3f8L0iWpTQcagyfKDE8nzzJsMjs2m%2F4oGDoh0ziGJXdjFo%2BCyMsblVNheQEz8j%2BZES2Kt%2BNNUW8581xsk%2FyCXVecbwYELInJ8zKQC7pvMKxSWfAYRFrHF2wEuDPzD3CSbwxfsA%2Bpv%2BwF2jvyUPppLGBqwbbs3KtRHCebHV6VaRYDYS%2BPBBxjbdV0vFNUXDNe13uR%2FJbM1jmaaXAfV4zCF%2BPTDBjqkAWBa00uHCI1dHfJMelqwJEs%2FNAb6YjtRyQ9XejgzbmJ9U6PGMmrPFZzNG0vJgKw4BNR0HcHzZbWtbpwJHm0tHmu7xKx9XcynnkiBHkmkeSdd%2FyP7dwBqg41k%2But8RQpljgk4D08x%2FhX6rfcaMXMdr8yg7rvRZgiP9BnHR0Lsw%2F7HO2XtxkSHaVOGw0kahSAkwZRdcwyVhYmJWzrzpcrDQqfxYgKV&X-Amz-Signature=5c2ffc3dc7776d030b6f9a8128169eeab512e8981564c804cd49b139b261eaaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E365QMB%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhftQgu9JEuVqpH7WbFxp4vix00heRbVljLoyIvxyupwIhANJsridojeuEYpdmo5IjdZxIpe1s9CUg%2FSSYDNXEf9%2BBKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEKTA4LDypiLYvTJsq3AP3zDmxV2m4nJIrBvBzErJPR7AoOrCuFNanqZvJSCsl9y4PuQ2GDRDuqiA3JuBqQ%2BWG7KMWKQLemTQjgW9nON4nXZCXQFySnxzdY9b81pA0XFk6btaHC9iwccGn5t6HA5OCGlwKQoyPn4gRRS2Ae%2Fpv4s57WG2xp7YSG9hv86wFMMb3NV9zAL6lQlZ0y76dDXE1DpWT9J75nYDCnCCjg9PQHNNzZE3uswcz6y9rFITbu4KLZlnUfgFJF4%2BM%2BH4Cpj%2BtnwfxMqstKD6PPrZTSOXUpr3gsZgMiHheIfuBKBgOOqNdxu7FtQG2ZfNvXlfD6NuXjPv8DgqsJYbAXBalG08eYRVtILiV5Tvr6IuK7lNS%2Fzn%2Bw7sPt8JU8SVfMVfL1qUP%2BpoJL5zpvoz22dooG%2F%2BH9pAPREzIq2sL4UhZI0XdpDIQFr1%2FPe%2FGz0ZBkEnmJTBaiXQh2q9P6wUfbjD%2BpUHPtNZiuPUVy%2FsY%2BeaSV%2B%2Bx1vHUGxmZp8j9u2L6flKkpWf%2BXxcJ%2FzB%2FdvNWQl7zIPrU%2Bzj08gw%2F3PMdAk%2B3secqMiaShNjvQGfO7zkvAIWQgjakEAvVo0HOH0r%2BMiwRq%2FlTKwrqJDh%2F9h%2Bx3P43TBEmKSOxz1oiJvjO8Sd8iDCz%2FvTDBjqkAaIfHTSaNGw2Tv5e6K%2FC%2BzY7seBTzgA%2B7uBw%2BOh93cBugkh%2B7G3iRh01G%2FTcw6CDW1Y0tubvrfoVslmeK2KezFXl6Xtsgsr%2BpW4YIEBBuVMZOw5CEENoHi8hjrvsskYhy7iS8rMz6Ag1y3jbsIQMW8F%2BX57L%2F30camnvcp4JNRuraj4ZV2xb0gFN0RQ3%2BuHmP7v8FiWTlWF8yU%2BTqeyQ0T7zgCM7&X-Amz-Signature=33c154285bb3cd70e31ff3d2e9cc4f98ec871b08187f04d9935217b10d131e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVBLAYPX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDORoCz3nwhGaw0y%2FTxh92kcZMqHddI7elPRnFF%2F%2F02kAIgOz53kq%2Bk9RZIJqEJY%2FrkLjpn25hlDnCOL%2FUW4rvKqAEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPhiPMpujsGPxfYnircA7P9QFHOjsFNIP2xJi1j%2F9utwqV6yBUN3tkDcNVU79GwT92YhBVUhPly90L3lNl0DX9W1w%2Bh9juE1ElfI%2BNm%2Fv44ymYlhg4HrOsM8HFKjiKCoHhWUeq0ZZcX0rgvjg7AJYDThFEKyIMSGHJPQY683KCCvbYiY%2B5jRZ%2B%2BTb%2FT71GcJleJYw%2FgDsp%2F%2FR7p%2BzFJduxsFQgabDJg29rT8i1nnb7QDUyUatAHye6%2Fi9uyeyMx5Omhn6ob%2B1YPuUpR7POaXbfq1iwtPIwn43XQXjM%2BD2%2BqrcNhHmCShpGylG6RJ%2BqOi3NewMWq798kBBNwkAwc1INSqvvmGVQsVHigF5PKdxQa0uHNZebwNrzVvdnRr7ew6rPkuE2RWIsus5I%2F5%2BIGQfqQIT1ehVXdpJN8ZqOvHbp9hY8KtX3hvvY6wRqK8ISORzmixangNdzWcL5KblFuUXe8E%2FNOL3KnJeeQZtcntSX%2FZ1mJq9Jwv%2BlIDzXxcBQokNSwbdgGRSmT71WCaB1wPzX0hjz%2BG%2F0tXg4c3XFM8jLWZ0btYrMwRI1S2PKVM%2FZnoepbRBNTq0abISx1md8iTX9bCAaf3iwh6yMiw4j%2BQv0%2BWugwUXHXVa567tlfdtvIlj6QQrGuJtM85VK8MMuLiL4GOqUBq7Ycwwr7%2Bqu30ISm4U6o71rPcy1ciSBNQMIh7jpvsnEJaxPJpzAMJyYA2nPVrNfZWy2mUY6PVY%2Bc99Dkn6o5mNVZp6t5pIwoDHokVRQeQpbsfQ62y2OYQt%2FkCkElDVS5gXCaJm30GPRwnuGH%2BhIQLnAbjr%2BPMeK2xNyhz8xy9CkjtK7gN%2BsAU9E1CJSizhVdrchVtfkIhiAaS2dFL2gxheAGJRET&X-Amz-Signature=d624b37d70cdc81c51f00ce388f4fc2d0440957f4f91748c91e6f388734b67c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QL6EJ2Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD8zvlZ582l2LdrHaGBT%2Fu3J3v5lBmtmQBYzGbg2DOvXwIhAMQW%2B46MmMtTwpUaYVSb7Oeca7BjPXbou7JC6n5%2FLZ4xKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBj1Y3JdQoZkUaK50q3AOgVqnnSnSOu25R899FWB9J8k0eS4aH%2B0bTAmlQZS40no6zQ2hrVucH9IzK5BORlPEk8SomMBC%2FLK%2FylJSgEMWTH%2BM%2FwJTqiXQUFQ8gYhq9lNV96TmDK7IX%2FfPpcRGCWRghRLuFuZXGMkn%2BXrZGjn65FwIOCFvaZavEXVGVxwpea%2BWbC5rsiHjN40RIvaFexdj15GC%2BeZW%2BZie%2FeGYqSVUkUGJFmppE2X3G6gmLAjoHakENgqeZX%2BUorTLSmYaaE1gjRvZJQe33Ab%2F3Oy1y%2B3xp8OZtxETV184IctI9Les9OtuqrFS2TMJ4tdO7Rz%2Fvr6bt68Wd%2BTiJObp8bHu24AGDrXRwgjPyK83ldyebeKzAKcc0Z%2FG04KsTYNXnQcp7DoabilDtxruCmQuWsI7Yvszex3ZNrW%2Bwe1E01IMkLU6%2FMNYnXU7Ps%2FU3lngNmsE%2Fn1Y9M9csfL3TNHHmmjO0zuDlJz%2FklxHhy7MxYnzGYI9olC4J%2B%2BJEDvatM42AiVftAjjDFUaTzg0xkFdHuk6YfGFWvz%2Bmbo5%2FX5ZOS6HJJUAWFgv9F0FgNsoEDYImkGFiuh6QE0auORSriMPE%2BlWZunJY7Q63sZhozhMfXoztNLJFdbftzJTnJf0R2svlgjDAi4i%2BBjqkAW5VqHaoh2mEVZJ%2FsPtPPzNbjSfJ5eV8TmQwQfsOqQhGNCqonRGzLuKuCW8VSkXVukS0ZJu8bz46M%2FfR%2B9RUx766nkq7M%2Fwtosmn76WLrjc7XFcfCPzlfcuAXVqq%2FRpAqcxo4VnkDBejS5FYwyBnlUwC6TEZV8S%2FrKV4aztvCs%2BJj5LIk1ZcEDg8B0pKMd25WUplRTjn11IjpNCdYLONRgcipgt%2B&X-Amz-Signature=ad9ab3ae7b83be8d28f5ccda87f149767e7ac4c2475a402de198b8ce5d6f8cd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

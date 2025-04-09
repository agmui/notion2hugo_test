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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXGX3IBU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC6UcKOU7W6z7v%2Ba6ga5P86DtQt62QpUDMa1m2GHDktFAIhAPcnBYPh4czBhskepqbGFH%2FB7Rlea54x5LJWV%2FuyJGJWKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMUB0BX9DaDmBIpf8q3ANF%2Folg6wbBnteHc36NJlhRKlwH1%2BK8hOqbDjiGs1xPKjvGS875H4apBPsgdRodM56XV9bPLETp%2BFZ8712d%2FUzAXvNpxERHXrqEyLqdHjVEKqnIJOQ87ftUeKbYaZyvHLh8apqYx9xvZBn3S8yOvb8lfN9WkWexlG86ZKEwuxbhODdiwmZoKbisCsBQ1Xh%2BZcJ4v7FoB6BwmSW2kQyiLIBfF0CmtKSVuoBv%2FswSGwZqw18rD769srKPEz%2FT4oA%2BEbpoi6KxrxHzD7QfLNXNeTB7%2B%2Fd99OjAzxLAsKNzXGAGyy%2BfqPlDaWplkLF0%2BmB%2B3OsKSYJXPNzFsB7fbLc1wk8elLlyvv9fYMIgENQIEU5YF5cdrThKCkG6e8ItrK5SApmuYHcHiBHA83AXu6zluQqeqzre1DEmhqk0UmWxp3VhJsdyLyQH%2BPrWKJ2mVugDPRe%2Bwz%2FwCSksqEbPZY3gJituHAeHuteBOks5z7SI%2BpWYR0tWSAUcUrQvtItFvBEAM7vpAfGDuEz3j4sF6Sf9%2FMsVRXsA6bhF0KN9SIL6v4g2JbVzSRupFrHI32Ya5B8z08JMZ%2Fpr4%2B%2BFPmGrNREHuZWQ9DOREA5dkPNlLj7vLlrzHqpe1QXgaJRJ74qvGTDAo9e%2FBjqkAbyijFaIVubgOANTUAz4OUAaI8MxKemcBX2QPVgUaXPtSEoM4UXqqhtBn7Adm3zCHy%2BJo1F6DNz5D%2Bv01n04t9XFvBUOjTT0DI2hmYBTNd4CcZKuZiWL%2FjSeotv0DBiqLewPBs8Vk7ui8okqgShZqJRGNHFWIN7L9SbY7rmdIjtDJvHuvFr537JdqQXRFNgYe1s%2B4DFc8pZ204qg0H3LFtdH2plV&X-Amz-Signature=a8b640ee3a65eb7c24a540c385470203c4f5fafc4113d41bb7ec294d6c95986c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F4YRVPT%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDl%2Bdcn2fnCMwEnzKAM%2BVlUKMFFXHQogjac2kdWq26d5QIhAJHi12Rw5TVRFYGbk9LOsSrN2EadKcOZRq9hmqLBIFbxKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZTi41eZgYB%2BstWxMq3AO7o04oy4o16bVRIA86J%2BLfpw6sh58AgIECSwbg%2FZ%2FyLUOto8itNbn%2BVGUQEhTBaixD%2FMyQiTYatmjb1uVvLKQt2hM6KtzI7FkPC%2FshOnonteb6Fu1BOxMqQDVbMuybpiidd%2BokrSEVGdYhVAgmWWOmFOZJ0zPOca%2FipOPhHAS0B2QaecPh59xfCEXkEMIQOVnS5jW8XZVNtT3yoU5K9Ipg2%2FSFHHI9RJjEItBB%2BtWXalQB%2BTdEjnoZKnUx7hgPFU0tTBNPXngaDlttIwUvoQa7DYdJhInHNviHWdqehDaZHvtw3HC0kM9HPADSd8jDduhbWoKuzhuDC7UK7kFObfokNcXqxhcVdBKHcASO0%2FidUlnlrYsAvJ%2FbS82Ql0pm6j8o7C0XakuDzT5b6b9xFHaKtoOagySo4Wzp97kOAayw2xwW1aZP5%2F%2FEfZKbS4S8uVoc5VMIfCWiFESt0YtCfNRLskHLCn%2FMonVi0%2BkstL3MHu8%2BCU0LkQfPnpdUqjOBenxFUyz4c2DSvD0O6WnKvHAVYvo3TfIGXuqkVd21VkwTRxYVsrTqVHRpMDWGYUxbpBu6McDFdg70xDQ%2BdQp5eF8ZGHxBCQoco%2Bl9csyNDD83%2FG7EZP6LmH87B6%2FbKzDio9e%2FBjqkAZjHmD0jlQfcnzFcjx5UgimF3VwTmqixBCn7ynmuXgPRa7cxhCHSLZoqKNHh0TyPjNlkQWcD3BeJDyyi84phOSndySIfu0lSDgsux7mb1xw0whd5F9%2FE%2F4%2B2uoDynovkD9lbV2aD7tKqR2oaTkr67Zy%2Biihb%2FM0QS5g64Nc1sxgFqEdO7qGeCyo88EeENMsntqV30BTqz%2F23Nqa7mGhNX2Nt8kL5&X-Amz-Signature=e9769c22520ef0f73ff227382b2c5b102d8c6542bfc091ef33025db3ee20b435&X-Amz-SignedHeaders=host&x-id=GetObject)

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

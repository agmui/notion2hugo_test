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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635VOXM4P%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmicX2MVIwnAo3lQ3cY7KRZyoyVclZNeFrRJEhmzq%2BeAIgAN%2F99YHjhrvR5WbFS6LmkifOOIEnq8Z2VsFryPwCjRcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDI58Ca1Ykd7lC5IkqSrcA7EAvy1A6Hsw5hQAZkuxZ59YfEYjmm50xLYvpy699IfuOdNsWwQZ8mLWWlMqbeYgHS2o1QKy4XCe4BC4j29Ngz5EN0Q0mSYJ3IJbr7Vv9GcPGz6Np3lgHgQq2qkR1pPtLXxgles8VSMKhhWxbPRh9YQIrAoKrmnobz5EQOFfw2GxqlNxmuLw3%2F1xqUzplSmQkI0C4Kzzp7qTpWuSvAM5V5euTpPZl1GOjhzVQ9RMHtF7KIi9dyexdPHIUw79vEx6cWFjld%2BAJCADiPA9tC2CFb3ic6O1WKlSCtCujYNiTv4F1uQR99iLLaaMLAUu7vfNOfNDQn9pXPFStbYPOcHWBJskRiXfr0B0FnWK1UFj6gE4LbUAdOvvf0jx1MwN26fcVz%2FuBufWLhfOD85crN5SvFlrxutu3suB88yYWhivP1jT0CQL6K%2FnxZm9OhYtD3GrG9FIg3KqiNTY3U1mGnPxwD6q9Metw%2F9AqiYiY33x2YcPcudh1wRQ5ePVrxUsDbHmrVo4OTjzPau7hDWbQ1DtsdUjtzAtt1cK4Fqjohn1ZU4CuCV6P%2Bt3sAq6ajYK%2F9SpAkHRdYPqWvMDfXPGlelbLXzM7ZnRd6KcXiXk9O92AGwMerJbVNc8NDZe6DrzMLaHq74GOqUBxeDBKE91OXeVmsHTyu%2FqY8ETOmup0%2FQQ86qo7BGM4Bsc%2FTU7gcghWi%2FawknQtw0lxj4IiNNRDp5TFquQUBvx2QEIu5jq6JW0zp4ufYtAetlRaYeHXIFTlxN6PHWUwgI%2FrRAprS0kYHQDmNutTKmB8krgNAbrJQpmVooe%2B6%2FUodr1kSbFAQS3UvTypVn845kMd%2B14k5sqwwNEodtYe5vt5eaji0V1&X-Amz-Signature=c971be05a74836d971c3fafe36fba2ea64973311e5d4de0dd9f144d30b4c56ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCSWHWTW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhfqhAst6WyPasEVgaFJqykM8EKGeMRTk6rKUVukwa3QIhAKDrJFgighbB4fnNo3jR%2BnV0VSIThwiZcUdfgRWxsetkKv8DCEMQABoMNjM3NDIzMTgzODA1Igx0vkKSL30KFiZcgokq3AOCIqhGH4L%2FcGCPA8TLtGzMx8B6c62e81xHcV2Hr4c%2Bj%2BYlKvVB6IcvzLl1HoMZR1JeaAseexZZnzn6t5JW%2FAlWUrKd%2Fr6Sz4ZeuLVo1NL3uppu%2BIdGRTpHNXLJsnSk%2F4GuzDfOpSUFLkW%2FYMp9LVHtgT2gf6oteWJfgL%2BdgoNDiQOWFHjFR3eXD%2B5YjwCdJDK%2ByGED7KRJPcjrCCeQH7ccTqBZG1NXwQG8UmiFLEG86iWoMRBG3VR6vG02gLfyQgss%2BGhnfnuWaJtqmTEoxJiGURJ8F4Nzdir2VL4QIgNwXLrEcnn%2FyWep%2B3OwOAcjla8GT6mo2f9aG9lxmIayakDiJJGJDrmvXRxjrHRviflK%2BFcx3r5ADxf9K9ACCL6w2oEsQmPWtZvgtl1aFEoNmxG4dMVZjQhS1mzFLUuW5VhRE%2BOzZ6FCiWEOLBfxj5ofnmpVwR7Qo2C5nC2o1rRNzNfjNiiwaXul%2BbWPlxsDm3C8%2BBssQka9MsRyaappEtkKRf8M3iHlri%2BrbrN4HBnQMKJK9VpdPOBl0fD3X5Z6mO0uY%2BZm0J%2BD7DsixZaKA6kEYNKEIoMhEN0t0Rnap2aV15f%2BIl7UQ0rPJpyFpUsDsului7ykyEfDUTMlTInLqTDDh6u%2BBjqkAS1oKUx9wPtQYz8m22YK4IbYGev8Qa7diV6WvVMT9oPlWEqgXCUmJ1pcTL6fOXa%2FSm9gxhURBC%2BWRKRYgASpdS8MJG3NXZC1lB7dVBHo7YKLRGWLxVcBGLhSdRoGzCzu1nbwCpHBPkVQ%2B7ctYNY531Ac6cgi9VEQDuU19gtqz%2Fls5XonfiwDHrus2xAuK1dBm5YUU2Ue7g%2BFiX0QO5XipKLxWgTL&X-Amz-Signature=9efb98129c3833ac6b55c93a9f6947696271268f7a7ded824643b4c2968b83e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJ63RMO%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIDjei0dHHVrHwNyTceLRNPBW1pp5X8HVQhA6uxnWDmAIgN9QigivBU06c87469%2B86S8ytQYHmxKTn09A7QkxNCt0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdAAFB2Xbw%2BHVdJYyrcA3roEfOMBRBSU5XuX%2BENbXovNiWdQvTLiiDwyMcGBhiv0t%2BraoD5jA6Z7JYX2BupsB6NKAoxxoXhd5xwGWS%2FzHo9Rxf6h2imf49vU7M5W%2BCxz06gNqiBl2XZ%2F3dOV0xa2e5n%2BfwsK6JpNgwyRNpc2KqYVmdflT7Ri3WZc3EtY2rQuZbknrpZnfEjNMgzah00o1zZbNtebrhyqCsPysLi34nmiYyFhPeDBb5RQU5eND%2F5uDN0DQgRwcXnWoJnNyihe3rM%2FcmxbsB%2BiQxnJe1O15h9p4fOFBEA%2BHMuRsZmFsWRERUvMp4oaPNAERrhEhkNRm11MqBaFmgetHyKXcsQZxrBt%2Fo4O6AMvvGLR%2BVr8P5MIc%2F%2BpVNMSIxASBPObCQpE0BN8UqjEqy0yQGI5gBqvPWFSjZXVldBUsfeexDKHWI58hn0CmgUZF5aebEVr1s6whf7rYYaehDf440mbbCleMaoLaQb9XTMhFZObMozuM7Eq0tfO%2F1Fgs5vgal0Y4ETc5M%2FBLxzlgu8BIwB4HCTl%2B36bSJWLSynIHzgV8S10yWdYgJDU0bLDBaJXRl7WqDa2Kgxhg8AapSfZY8sZ68ycFGagpfmRcOv3enrOByt6o2UCOhbxlKVAFSO0Wi5MKXHksoGOqUBr35M7Ksv0eGSrfjXaEpj7VNaocJa%2F%2FeBpS6CJSakIjbwpX5zBzYecYTI91zi1ZhatosW64j5bHy5OFd4HZ%2FBu3BGE3Q2MKOJ0qRXCcAUaMvzRVikRVnB6X5KDztZ81H8eogZ2XJihZd3rBkMyA2pJF%2BcMNQJQnbYHMq657vIT4KP4qz9fXJhIHBSbsKE05io93S%2FDYRzMfUA%2BhghzVXFF31djFc0&X-Amz-Signature=b1cf7ae3b1f2eb87a25e52b1a6b988508ad93d6ead214260e7effdd7ee711934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXE2WGY%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcufBZvyhhAOl30DCXwhzT7E11kXNRUiSDvzYMf6Z2lQIgEKBMM4g9LPt1%2B2ucpZPnqf1Nk%2BBby66nNg8Arlbl50EqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FfrzokhSoJBjhuICrcA5mr4u9gg4pDUFT15Zj6zAtdzCn6Vgp0zVLiYMa%2FOOiqJVnYrxxlVKTcNgokT7G71yfZ4jzGhxRennKiN5gxgOSD5ODPXuKBnP3XYEu8YOlSpgKrj%2B25oy3QsQ%2FlMxaVLtyW31Q1jfDXlzMe3QH3lr6TXmDoCYuQX9b19g%2FH0YvQfWrhAi6AzGpvTcfk0FAs7k0LmSeexvfIq6grdPVjh7ANMfz04T82gA%2F53bV1YIzB2zZSt1vS6ZJC5ib4fTvZmmtEpyXKheUQ7b50aSswgNtyTYA2sdvh1clUqo%2BGQjScwar5LehjgtCaAsdu08uaqx3DTCkHQY9nOovrPnYaJwD2Nee%2BQZBlvZ%2BskVp0i7dCk6fCABLh2RrizA5B1zLZ7f0GbcPaWmYAlYXYhl%2Fz3DvHvmi4kB0zWzbYgCvPA%2BOS6lcT23nr5q5DOaxp9WjflYTN4iB%2BfYBuDU2u%2FTZoc6zTW9OyiWyWYFnKaDFyhkn5A75HjtIvYzwCj%2BKdNWGCCZG%2Bhq%2BDWZqZHSktq4s8%2BMP8HEHvWX5%2FijohvKJLYD3JH%2Bg9b8JZ9b3B9K4jfdlKU3TC3MQwx1vSn2b62gfLQWQ1I1qAo8th0MDCKfaX%2BsH%2BY4Xhs4t7Vf8aE%2FlcML7HksoGOqUBMnPg679cQMYs37wiUMeVrcMh24X8WUqs59Wgm0s%2Bk5iOsRYX6vELm1byShHrpd3jAsEvstaZ3Sg5bJvu9K6KG%2FYZEVFkaQ7sYNOTB5pRWKJYZ61Qlflk67Or4bpzWLUUkdZ3ArTUq2pfk6ryRJR3eJ%2B2lTv2MyeqUjMTVOhyO6UnZRsSZGD9A9HZjiUH6YFEwCUGccMOx7HqHmruAxRNxVqKLSHl&X-Amz-Signature=9e7167c508bf633ac4049f27e68c87fed601a5cf25aaabfc3c24c41058dc8ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

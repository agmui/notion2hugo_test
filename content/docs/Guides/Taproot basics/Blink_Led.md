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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HZLWYS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDztTIwo4Dy312dqUvbOmpXavzgkeZhq6t7q4iGvSq1hQIgU%2BBsWFH59G7IdhpFlf2%2BB2bcI7tH6iBjpuZuOmVjl5UqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGHvd9TkydDhryj3SrcA44ykN7W9Znqgifbm%2FfvZXw%2FB1uIB1RQPxOW8w2rxt37GtVVwmh3IxZqmFay7rLdbMSrp5yU7r%2FvYv4EZwZmN0GKttisQEjFwdXAWNl6YTZuyQhuh9EuXa3v69XCFDt7EZD8rPi8QQqgn3iI%2Fg4XkzRCASkfsByNerIYEUB3EVwzQHtolGI1tL37QnindYaqGIdEJaF9E16Pe5Cn6Lh86KsHbso8NV1wjoXVbLx1kxi35cInxesInnrhp4WeBGxjv6RxL60rspaodKuslHo%2FlW8n7KaWRYZbJjUEMTrRXeFYXrHMqd0G5ptSaW03QrLgnk9UFsN2XfCQhZrAEjg7sXlGvpM%2BQ39K8XO8b%2FU0ccK9U8MZoEo3Ve3lrf94TboScaSaf6KdauBJqXHFXTOoOa%2FLgR25nhGHu5TALmuPJxJPypzvrZHHOnTRe%2B%2BFZiFiMdGYn5c8wAuYcVC8f1bAHpoFxNONnsC%2Bf%2BEU1hosPKuQLTrvO42gdceJx19zClMiW30r2hA5tObiRSnnRoYnuBMkr%2BS1HIwDgZk3ycC93GJy6csoF3ao%2B68UV0Zl2d9MlYn%2Bk%2F%2FZ5pScDSJcRehmhoyBqYBWHKskvkTRU4mLbY3zAOl0ULDLldG%2FWE7QMKqinMAGOqUBCHNXfv6qM8OwwtaH8sckAD%2FIvAIuGSwbDiuPfb16NWgv3yjjErQ1nUHdB1%2BWCWbY2DD25rV%2F6ITfCFoK7xIrKHRhaAIfOUZ4LSxS7Foikd5VUJlfwdV0QfC9PjXOuCMMDBbKZ0zsQCWZAH9jkdyK8dgBtbJwHqs0sRI6d0%2Bb4hKAOLw36S11tjwlxY%2Bq5F3RhcAZte9jpXMwiBRg4aRnPImKhBns&X-Amz-Signature=0d03f14bdf09aad3bd1d830162178207083170898faaa735e8ae1622d4099b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVSKSN2H%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIB7snxBks3mXXkTb7kKq76uTsWGDApZ2cY2ARBSGOTo5AiBfN3CJCY8RAxpET2hMEhAy7V7r543PidBJxpZwoCyIUSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjoBv8UPh7wpvU%2FQaKtwDnRTp6B0Dg8ku4nPB0Ol9cxzqpf1cljhNHWGlzMWlnlXnIjLpl0ktQ788y383yrY43MnXLvxwj7bQxyu1Dcq67CaRwol98ptouhvV7troN1d9TeU1UAKo5XrDeNEop4HEZVyKWvW%2BjimgaxG24UylXWVvfupNlatWlIDtSSGujX37naJKafRzYxcHxYPTKkJiOFknLAz6xs%2FuvFgdXq9Xpl%2FE4RPxjZJpz63cYdOqoto43kNOwtln5UdhyJZLsgcLMtFREVlbVXcEGSyh86qFTZue%2F6aQg69k3uomaBBYeVPCSHaapo3Sc%2B5ZHqT6yf2FVkVw5vGPVtVb1ND0k73XQYNTef98gpFj9blkqjnfi7G2kLz7JkBioURmY9KJY8IjgVShBExWw8fqfxnjmF6AjGCbEyrTEjDFmL%2BB2tf4TYekGYFMqZ2CrsRiMSzjhqqFfpUE9lWG35xD58fm50RJtfUCrCilx01K5QSa02uDxAfYXj1A7lvpGje59hs4EV78UsTJ4E6rkbzoyHtyxf3PkPJWPHAINPQ7WZ0%2FbGxdJND%2F7FLVErXjS0LxBKl0r2DwExhXt7epvfYp0NobG%2Fkoq1zFminoYcw6jPAgQKcA%2FJT%2BEUBdT0qMOfrUF1kw0aKcwAY6pgGKbO%2FE8AoYVwb1JuLvYusaxgtIqu2yjpubv87pJBbNx3HHugoCnFe2TaGCX5%2Fhj67ozwWV3hDQieN7%2FL7%2BPSmWqo9OD2o%2FN0SVndDF%2BdoQpVEkklZkEs10Z2vkP5YQ%2FvgGSJJolAgQQ0DlmPbIogaoqwFBGTtXa0wTLOpg3ZEcvKqbkjJKwxwSd5P7a56kVAgbfhEztyR5KrIe2fLQL%2BIMBQHkVVW1&X-Amz-Signature=99d070291453c9f09aa78859da305738148ae741f16e9a1021ca318104244f83&X-Amz-SignedHeaders=host&x-id=GetObject)

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

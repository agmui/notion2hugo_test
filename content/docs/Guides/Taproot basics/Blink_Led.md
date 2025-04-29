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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXPJ6NWC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXKTmd4iGL%2FYvTAoe2d6AhWRhcjPOPwuQOzgerX5%2BNMgIgO7rXHIDzQ%2BDLnInUKR5j33f2qYIsyOyLhDdoKkVEWDUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8uIa%2FI%2BCC5ZP6yYyrcA4crL39q6%2FlelTj0uYOW4ixZejvHhGRUrCmuo%2BLnz89PN2AWBwBpRNv9%2FUiQChpsuywH7cBqnwpFAXOiXIhw2jR%2FR1uHkFhzH1wpLA4qaSUdu60PISy47LWwGpPjc296ZK8Rt39N7RzJDUYq%2FOpo4JkttgQ1gNEym%2FO3Fjz%2FTS0HkQRCJNQjVLNBfJ6AeGD9PjNaBk4go4tLEE0KkG9cAdnDc4y684Np0N%2BkRKHdOTlqHCI9JunLDnWRvpkzOoflKj%2BLJchH%2BKkdZQcAstJPn6%2BEffoJbzOBDLXOKbUDeasgFhqtVDe3kZunkMvxaUALgaBkbJkNnrz9HsC%2B2iOXKMymz6CZieZ523KO%2FCUFKFEcXE6vSlygYBR300%2BGysHQ3clUXYt5da%2FAOB4lsmeswPHk0AlTiNC0RtuHLMZu1a6RC0Bf1k1wNTtHARQlx1d4N5tvZ8yq2w%2BQ5Rv%2FrvKDvDwjQfxEKw%2FHr5WH%2B3JS93HqYfDE81KooVk8Kd%2FD%2BB1eRjFaMvBZoNFVkUNESbpXz2uXt9rZHkbVGytXOfz5fwG2LgyVSlSN6iKTmeMHxpVIImUeQuKmNXmcZeqs0vfQr5%2BjtHCw%2FN14xJW8DR3h%2BVzk9W4FXa82b62%2Bl2ZbMMv3w8AGOqUBhAiRGBb038KpmAo361H2ZGHjFLDpzP8hq4C%2BB07YVpDPrGsLF9YsJlt4VwFvK2rXVGGTrzqiTz2o3npEffxIPsr5qILeaMvRSKA16hFSAX%2B4CSgQEL%2BRLfVH7jmWL22igsOUwTRDl5uHLcc4Tk%2BGzwrHKYHJIZMtjhkUIu%2B%2F8zXYQvsBDbkCY0Je0Yne93BQsShZAKumosI8wGqQhEyFL%2BuGtGnd&X-Amz-Signature=cee85b6941334a1c12e3c2fd1f74bfe422a90421dc4556cbe4101a18f7ba01eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAI4VUT%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx97oOSfpiNwrARyCFueuMjLu5ODlmKBJFMLVPy%2Fj1kAIgPnjuC%2BdI%2B5ohX4zWwpOu2pI0tsnLNKrS1iZC%2FeQzd78qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZfPxCLAnI0n8d1wSrcAwRINdqJ6m40H7U85EMUZjKkCeHTL3T%2Bn8FKyQ69WMOuw5fBtEGEZRGJj77wKVCv3Gr3s6BGUAP7bTY5Z99q9DlqCjs2QlOU%2F6874PABqjsyhKznvSMZJdwSAzzGEI3BBMhgqW5xJjOUHTrCC8hPC3h18C%2Ft%2B7XKUleWwQNEVWOc8xf2foK4U%2B0MXOYwktAqYLKGLb3nLvq%2BbGDLspL5NXsjg75Pe3pD4BosMLdQ8NNqu5Es9Q3l47qQuS0dTBkjqiIiy%2F%2F3ibYk0UARH3UJRF7m2BlvfdDyhOvUYFacYOtfnLRGB4nx0wmtK3uW0RGLvhK%2BnIgCMAJxGsju8ufQg56M8DEyyQPIiG8vmG3dfqWKOC0Zwf19r94luXqEiTmbGEkX7tbV1c5fbJAHwGs033xFBnDPXUK5n2SuXCmILYyu188NUUt2smeLnCd1A6nF1OtYuFt4%2F9M9seJuO9G7M36vsdOjp%2B7rL2GCZyLzqguq2ZNQboFvaziUKiiGXlVqLia2XVh30m1WPdacjra8Mp6zZ1CqWImfo%2BItAQiUB9pXCFfqX9jh1QvnG%2Ft9uA2UfMpJnElu9dqtFE0uE7CVzJSaQkHuh7Fjwpqo1MnNe2Akg1xfjFceSMXZdqNdMKv3w8AGOqUBxuvIqMa1QWJL26%2B8zQJk3O0fzFdYG7b0j78vhHlRtYENZRSttcoLqYYjdmO0azjrp9whUzO5l9nKC679DKC3b7RfMOY%2B3geVgop7D5xuYtcXotvyCzK9DH9%2FKIn4iuoZUlxK%2FLiJ6vrbsflnH2X5mtz9pgegZ2jl9a%2BwWq99%2B9%2FKM5d0%2B6%2B21yaJ%2BTXNdClKIPgBNs6AQI%2BjwM%2FQnaMqd84GY5XT&X-Amz-Signature=13f51f57f665e7a129d38e81710db5c5b1f6be433c7da9deb68334a1c0840d44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

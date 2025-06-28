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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMY7KR4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf1g48%2FCAwa4OGmy0cqcwTgdYDJMlZ3xDnrdMbs%2BdHfgIgZKO6G%2BlDsfba%2FtklYMTLri8UENtbnWtDpzWuS9X2uMcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDGZpoYvdxqf4F5vyrcA8lJxqqFYej2k1IdfqWUNMZIKmMnKxLbafBtO8JsSdFeWev2s1m%2B258GcQ3bq5JSgWWZMEwY7ggfFSWfTOZHi5Dz%2BgrOJGArZ3vP2C44%2Fj77TV0uJ6UEvkzKN2QP2ewOxc4JwO6eryLJlQ77u9SnSefMyD81vD3kInPHEZU5fkuN2OH9C4CB%2FYzfAb2TRcgQFwkuNgKaDEFbVkm8wmwMocghXMbP1R8Oc9rQueGRNstqgIyWzt9P11mEXX7ubKJp2VsJ7tt91W11cfAXOJfBHGbHEBQPHYDgijH3esyL8ONG3fJr32tuLuBJGJmb6TmIsATdBU%2BEPV%2BSZ5cDlbAoQS%2F69Ifvj%2FeF5BqOGp%2BajyzfxZqjLrSeKUcNj12egDrBO5CUhYtVz1wGEodFVp9nhS%2B1QuSoZuRu5%2BPNAI070ptQVB8y%2B9DqfmTOaGERPzMH6scA0ohYmHGf3YOxPubV%2F5INio%2BLX5pg4xL5aqUduEx32sgQuQyw7OlX%2FIWuLIvZJQnaW%2BXEzLMl8RsaALQc1tGieThV4AxGh%2FSKGHy5yjAktGEzHRX%2Fc8HFo1EkKFgKLX7JoxzRqZZ2%2B25udhKLdGa%2FgWlijfnEHAoZWKms%2B%2BP5mi83oNhvRWLg9xD0MKmo%2FcIGOqUBy8SlkyQFHa8MIx3aeofB1kap8EvAj5qhzz1ogtuqeEFJjBTtLCZ6tkx9L3%2B1qkepZjmFkYxSO1Lm5qSEqChSIP0pzR24hvc1H2JMvouG3DhUCVbEiWc0fX5xAYBJcdi%2FLZqgwa%2F0q1tAfqFEiJ9VJTDjf3XxPWq%2BbqRmSDfXAwQ2%2BWmNOVtX9avsNJT9i4N4U5WIMpgSbgPwVnJwIJbZoahuBbBY&X-Amz-Signature=b33c7ab1e4b5fe6e77c3b5dec005f09d9a812051236d61644f87b68337759a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRUQ7VTY%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAVrnTrZl4RApwMZ0UHPAIwGdNx5rJmGuZG%2F5pL%2FUQAAiEA8AefrJ%2FYjVKNM7P0kIKEx8bOckkFohMAKxiQGDh9%2FWAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFabHfzjO6fWv4XFgSrcA%2FKWRlSQQ9JLRgnV5t1Ue%2Fk2jF%2BVuQd%2Fml9Tvyuw3BOdnlXf23SQgkjkGG7ZtfH9ZF4acPSAt9USeg3QA%2BmlA1UwH5DBKdy3M7b3OqzpaDBZsy4c0e9ZR3HgXiv5NeCWuxzfxbNZgK4INeyE5iczVj8wSNrWTPnpPRlsoykM%2BTTixUHA2pYnIvBJeKqhhtyBSkr%2F3P1cpQlVAXpz%2FHJBTLNdtSITUpAGs88ZjB0ASei8eDIntBfc3BALKmFGnZBy68x3KWbftBFKXcgmWb2kDb95%2FvJvu20jIJDrPHI2%2BB%2F9yPtCEewAr3ykcVs2w036jJr3fx0sH1Xr0iW4ejeCRB0ukZRkvImlh6i4Nz4QZLLNV6jo9%2B8%2BUdGmKhiH0E4Lxx7sS5JdZvo1goGU%2BYfIXXYkX6HrabCZ9UlHuLjSKA5pcqzW5%2FBWEbgA4EZA%2FXATvE10jugPtdhQcy9li1kFF3szrstXBzx%2FSZpU%2FcLT65zhZ7XtTOfmf%2BSFcrupbJXPr2IgYIMURbsW4HUxpCHkn9MS4T0nDZKC7isZ7N0T%2FdkZnlhh6wVEcDtL7hYv4sj%2FAF%2Ftiex8XhqJFR7RzX1gOaXVmmpq6L13YiWDxR3jT%2FujkqbQ476Q3s45wQnIMJ%2Bo%2FcIGOqUB6uwBWrLVHHSoQTTHl2BLfr5yWzbYYsdJ5Gb4hGupVi6jklGwqpnDL5QiVcS6i9X%2FuZXN8joFyHsFNKHqnxUgoVP4xBf1Qb4bS3y1A1v5CZKweUqazGM6HqbHCA50EvqEAwGSPxwSYwewow23pulagEDZthB6Ll5pfTL6q7h8V5K1r7xlhx8DFjMBQRskB%2BvFtr3tzsn3kj8kEzUMUJPaWnjfXqwx&X-Amz-Signature=5ce650cdf5f150756d3cb0d20f8361150344f6da86708c878ecdf319d9356019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

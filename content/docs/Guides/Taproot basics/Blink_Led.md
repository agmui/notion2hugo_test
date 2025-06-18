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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673X37V2X%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1QsaYX8fe%2FWkUfuy9zd88eJFeM1Xvwejm3jCRrrUKCAIgEM9GOne8d0VpTN8hKtavJy4IVWK9Byff%2F0Dn7MFF6GkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAqe1iUua0dNm1U9ircAxiJltR2xURfiJ7agBhBNBXcZdPOA%2FYe%2BI2gbbJwc7NNPVy%2BmmtM2EOqxQg5mQuWCC9JzTtWRTqmvV2Ge%2B3AC5OHtY44QawxvttdRM43F2A%2FMzKKMN%2BTIp2iZDN14kUWHt5mq8OIyBJPnUtazMSvQVmhXrg2eU2QeDngnLQyEG9ZQ3PbxgQKyOWamEG6a%2FBHtILn%2B5zVGkFEx8E4%2BXQRsoF1SQ5TIoespZeWWirspGWfxJPrEzf5xxJmYhUGkw4eodJkxU3UVCXB1P9zYfLp0zpw%2BT%2FMNt8Tl%2F3oTQ650oulhJTBU9DvziNRv%2FjdBWdAeCSSHUUURMBunkwSpk69eqUwyeq%2BrZteBKxuvuWMjjKs702g4sWeE1apjJlhMafvva1sve3%2Fn0VGEL5znE%2BBg2J08%2BMmlwu63tmyZdLndWSX8TMCmdc%2BT6UerAw0h3KHvx3Q9TpfkQQxEwfshsfzgZ37A9Wbe%2FhQoC%2FghK2Rw0o6M10DsVLAx4%2BT9efLEgRtnvkpvQs4rKvmzlcc9plsiPwNB%2B0zCn1KK0T57uhBsCtj%2FDYsNqxpqEdYjCH6duXWHtuxhSMTNhMWpznxRLI4OJTASye6AJ9TLlmMgYWQ78Y6zoR3sCMpFV2RbzIPMMX7y8IGOqUBjwM7hHhkhMMfcKqK25M8u9kc68Q5SWvaYlLXM0%2Fk1doZsvKLf%2FtEHc00xyOT%2FVr2xkyANUX7l7gqWqz0gYkNaIduVhhr6Zyat7BWCIozxhxXmam8s8LtJgmesCXRmoehV9OybXuV0dq6zVS5v74xWtNjYoHfDApSDwJuB3HN9yFipc0eD01JwQjARibe61NMgn7gVNauWN1BsjYZ5igXl7JT%2B%2Bl2&X-Amz-Signature=c9d47326ade2e1fd9ae0e288e31e05ebe8e3747551aaf5fa41b2eb0033e9ee3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYQOZLNQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDisG8Cj%2FB6hUQ6oqzHlsKVtz2WG0Hh1xH3tXxNVAupXQIhALQM0JDa5shTvecZ49hfp7KxPalUJNqozhvGcy%2FMy3hNKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaGFV6TijcD23CP9Yq3AMr%2FOet%2FZiENBBlf9evF2OqOiKMYE02lNb4CpFBIUNmbsj42D%2Fi8kgyPlNOgUE10j2xEwSYXinEBVCYMQ%2BN47avepBOYpU%2B7Bpwh35NTJlPuvjw8lCXamfyS3DM5JtbZK%2BPBh7%2Bc4FTU2OViCdCHEvo91o37G1SxW5Ab8%2Bc%2FxaINAn7HO2qfAVm5oVFGWUtR8BGcjX%2FbICerk4Ug7VN0T61CxUPudlwvBMyE2Wd6G3oiAIzb%2Fv7oobqroR9qSgb8Q4kVgDE4foppMtN5A12RvZAsd5pf0tpxBxLE87JFDZ%2BD0RN9%2BqmvGMU9%2BW83nO2AtRdaeHf%2FibtXOSqZdYBawRwM1QCzTBlGK7pLI1T0aNI7A%2BD7TWd52EapDZtmms1MGCtSdt7i0Cx7bojAWErL6zWYU118eRxFfHrDGHK5J%2Bbs5OGYLhIT61Ho1qSyS0Eb9qlG%2F%2BiDuDpIInCv6mGIMcm%2FwTx4VNWS9804beB9vBmf77b8kN7AIi55xljcJWYtP9pk3emEbILl9UbYSDcQVsz1PNwKSrkeZudmJ%2FP%2B99gUr%2FjaimNIU9ykNAO6bVAECgG%2BXg0NrDOFfFZ0YcyaTfto4sOn%2BZG%2FwNRtSd%2FFZXSAZXNd06lNQLjyAylCzDr%2B8vCBjqkAbJryI4kLmE0BRY9ZqrCs5ldL1i0bBWJoStp01eSk7xr8TMUQiAyCi7n%2B5%2F8Vl7fJh1TjpgduraaYsQX%2Bsxie5xGmW8sOgA3icYIEtz7ofk7865TOWu1ysht7zI5W5kycdwozySAQnuxdL3qVKXYQHtV37f7QKHtn0yOMsuuFpzSkuwm%2B1wayWjuGcXq73gtDy8Igs8r%2FDhnCWKx8J%2Fl94XbVeZ4&X-Amz-Signature=9d1dbca61f1d68c5c514feb18077b8f0a4488b091390b8b6eec9ddbaae4b24ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

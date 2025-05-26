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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3EB3CR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwVuTvTop8RDuyK9Wfl7HyGXkcb3bB3ccdg1CCc7gF9AiEA5LPn2wQEGny6YnBxUL59pJUARmmslq4CxGXJm6SdkvUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEHy5d4Mt72gaE8ssyrcA%2BJlxrVhQH48vqNlCR5jzvBAF%2B5iK4a98U9Y9ANH%2BWsjZIeOLMvpqLe%2B8I%2BniKXDufStmxCFKEEJ2lNwm1RXP3R8TLGtpPFS6TYxLUHWaGImpZlgBwbiHylYdn4p%2Buxft8tmrsJN6%2FnlFMw7rB0fZ%2Bwmb90GDYDbR1buoz9ROgRVyBH914OEpYvIAGgCTTuVl%2F81ZnTxUSwvBcGu8GgAj%2FkTo4L5Ruwfq0KpVR6jBK04LhJapAasWjxUQVITzBFVeESLSigjaSl0XJ7IbyK%2BfIUQwGhY1w69%2BjYJnUk1V7QdCVuA2yD%2FUSSAIc7v7%2Fxdu%2Bh0KZjkKSkU1Byy70KTQxTIwOUJTCq%2BXmAMo9PMa85wkl7JRajwqU2u5EbZkz%2BhTgtn0q5dzeRKsH9eJ6cw4f9Jgdjf7hT%2F8zqoGJGzUCxy0NnvU68RT22%2BaAlrOx24qE171WoDGFbIEa8h3fg7DBZUKAxhyWOQuf%2FE8aK1tNeLnNix1ko1NPjUyTClJ%2B55UvlXtSthTPe4EMmrcwR%2Bk6qLqYNqLEmGLNmSSeEdyJ9zy6u0UMbnwBNWTLRpdUMInbqITnzCt8OAoJ37HqGeI1LajqdUysHB2TAPEpKquUgK4SmmJbthH%2BV9I9HoMKPQ0sEGOqUBvc%2BtDDIdNZD%2F%2FJUZCw%2FQxUDDA%2BL7%2FZ16APFb%2FnRC3YFOX3voS5dIFYcHuOCx0ymEwykDxftlyaRv7CDWFShYhqhSGXyLZKxzvu7sk3clEXdfpO7%2FYPs0HDDoBsis862jUlU6YfgAIi65nNNe3Breoe4p5CLDxoqjro9ou2EER7jnw%2BL21NfWHQl%2BZ%2BacWgaBB1G%2FktzKpS22h2rFP73WCX43Pyek&X-Amz-Signature=b40055b420dfa7fdad2e5f01c06f5921202319cec1456534cdc6e91c37965efd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHO3SGPN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfgdJ1sdlfajdqan92SmyZqDJhBVkdK4rK4sO4PZZqnAiEAjzM%2B71o78BslgRwOSt99MkRiZLB%2F6P6W6uoLwCBmaGQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHCRqk%2B3aDOzGhR3%2FSrcA8VOHEvw9o01PDRHLl0GoPOYlumSu1AyiNUiSCNo%2FqMg2%2BY2BOTrP0RxoenqDTJEsl3%2Fibm64Wm3yrMVOI9%2Fm94WcEy%2Biz7EPOkQz9O0j%2FVfwLYifArpJL7bgbODAlEB4VSp5cHRrMUV%2FscdYJ5VlRIlWbTwrMEfNlQl6%2BQeGVOvwy1MxLWpJoNDUhoGB2ZBOLGLkns8eGzLmmlbRuBz6I48uypVJ3wXPt12pKLBcVfxuXRwTv62m4PIWp1zaY378dqqMPuMEWgMqEOPt%2Bluyhr6yCjDbpwVBSbY0Ckr5nqkIj0%2Bb2WqMZwVfRoDIpo8DhaobElCIY869DL%2F%2F9sYorFv2AqL414rWw5vXm%2FfCCDJh2YMQkXNP0oBdwMhUu5hyrwj9zfWS8k0%2Flx2VE4lL1LJWkPAhDjHiZ8km8EB0c8tdwUEQRcJ%2FAp6htJbLtq2DaXXFBjw9ltrkasgzkv8r9Tho40svDbz%2Bpi8Ob2RoSVtwKJ8wUKoq%2B9PRoVyA4BpSosP2gGjJ4kJPvQYyKmma7ARwqJIheoDpZqAi4FfHdWenkI%2Bd%2BdBF6h6b5wxRQxWNvfHoCQxeonqMDH4PLDhhsZY9C1tETsgXDkW1TwM4bgO%2BP3jOLTKAxki0qCQMPrP0sEGOqUBu69u5N4BH1zjHcrZ9X9e5VH4lQ%2FcvEmi9ZH4x4OPvlLoUR7xgiWQxoMH2ThpazMpjS8wqbtVaNKP9fKprerX%2B%2BxxAd7fHpjKPcKfkUgWraVrmvpSbhgJ7z5l1iY%2Fd9yg3UtyGt%2B7AHgZcm6VMyAZrYJbuRTp1dlY393dskR41C2cXE2VVPMqkgnm0c9rcRbEqbE3Xu%2BTQE2knM%2FUN7ajDiDkI2rV&X-Amz-Signature=7b7f9dc5958db24f82e38bd86fcd091dbd01c5fb2add738053678f38f3e9da7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

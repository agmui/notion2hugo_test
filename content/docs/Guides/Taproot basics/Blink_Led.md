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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XU7R2A2%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMdNdSeLuue00QBUTGZJlDcViOXycKMqvx6rjylmwBGAIhAKzW4Ctm%2BWW%2BK5o9oYjv5P7mqCgrd5WVRO91WbLf4DDaKv8DCDsQABoMNjM3NDIzMTgzODA1IgzL7yaRPQnAD53Qz1sq3AO%2F3IoSWORHqIBH9reg8jo9kVBfxNd%2BGuMfr7KzKX0EL5ePajS29%2FwuzJ2wUxdkub8QwFNwQQl9%2FyHhkDWebM01AGmkd55554%2BAF4GlFwhbroOYVSzY8eznS8fiILNFIQhjBCXNrtoHNxQIcVKFCXZYhJxTk5G6osYH6jze%2B3miTzis78KYbf3CVe8MEmIhtJSDCRBoYvtTW4rLlWzVDkC3QQpTEk7QE06jwVU6DabaLSdOJjO5AgxXoh54qG6eAj6kJg1Z51MXKN7kDIDq5c3ehIzDoAWwgpXrzAZkMgGg2hOWDBmpLYRSermNhd%2Bum8x0kt%2B07gRuqJkZTFvPUoFqvEj0HXI3NF1W5%2Fwcvti24SNdIWVE0gbphie9qyljHBXSZor9SOVZSBjbj1rn4yErumS49qT29pSt7VmvdCoDoQjxGlrW%2BkVNJUNS8D6x3UacXcICLnrtLdlYyA13f1CTX7IXIvnHTd%2Fo%2FPqAaMNjoPPzL2pu2gU6Bnq5qITUl7TgYxv0iaD51lkwOEPCUo4DuHwz8gcaw4mPCh0DhIJERulrwZyBd2OjXZArMJN9g0g2RdvtPGz4j84Li%2FNeWD8FliaH%2BgzC0%2FugushGLByP4mMoHmv9Z9qcp0PcNjCosZrBBjqkAWs0laUkETD511QnJkA6pOjLx1WvMr6upafsQm5zv0CIWVs%2FvUqd5FRU60d9g4tm%2Fh6frvF5f2OWntoLu3Tc3vmOeyQXutVamdObLVD5MLUlYEBhgCGI%2BUzKy2PRrI9W2cEojEyVRGEd3khAEZcMp4Gw%2B%2F702ch847OnniunYacpy4guOQzIs6taJ5YBab05jqfppkPP%2FTgrh%2Bi9t4u57ykCgJl%2F&X-Amz-Signature=598caf086e4867179e71900fc22f3580c1b0ee2d48748a93b40e8a75eb734aed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WSBCJOY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIDXJzhPfFVSwiiRj7L%2FzJUX93wb%2BwcZdG6DmbUtRmOAiAplC3YmWsaArYgG7TWE81NtZiITA4mJUUF%2BUBiTCBVLir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM5je6Peafa%2F87V0iuKtwDJYKwJ0f55Ch7PAwE7OFK74C9%2BGTC%2FJgRY6DjSWCfosGPNQhJQ4w09NjjD8G6qzigIOT6APF688mzZJc5UiwAO6H7GGV8BCY13PKYPOL36vLBf8hQmPyiVr5CwXTi3luJmgfNV6ClAcKYpaCQID%2FBFHCqKwT49cGF8g46lnefAUWc%2BE7olGXhHAP%2BCcnhC0SqmNbLOOoIF1y9H7bUbkAwj7Yj8SpbvuS5RyUX4RMywJXwHsSSSK9lcPxTJKION7m3%2BSH3qW18AWdMFtqWZnwZI7Ya34wByyfknTC1LNMWSp6Yn%2FkxfyT8a8UOMlKPiM8jpL9IwCLO4Ot7e3kaGe5gcxi699z8IRr6Bk1wbdAXF01T9hgKJNvIgGhDtLVsHvjQdK9y5eu%2Fm%2FGPPHasnbauPMlxuqTVYARh8sRHg6cqVYip8Wia8LiXktdTaTBQuNfASpnWSYLQCvsoFVFPxBFyuzAdiUXxl6fuvay1aI1kIBgfAtga0zngnt5229Y3HmiRkJh9ZZnjzUa7AKMSVK67b62vasPHG0Cb5JLnyxmSaQbj1gCidlPfRSZFVduJf2K4gF5Xhjm1w0mp9Aw6NqDacuSXVKLnZprHQlFEQsD9KbtnoUV7dassK68DR4Ew%2BP2ZwQY6pgEp9pOFoXkgwLWLywQRTlFsuDtRK1UtqUVZS0tm6hv3Yo91U898crqT6RgCTYdUKHX2ujSNIfV2df5a%2FC2muLWvHIBzGybhr%2FXas5AzZpkqlOonxLuajzDE0YSlWOp%2B6chZQSwvvMAyvSBL%2FR5pGLwghFyYr5ln11NsR%2BhAthaZr12ycBO1wrB%2FARkrSppT4KMkRJSahpiyVJHsGqIUqTlv52CWVxPw&X-Amz-Signature=f921976fa05356906394df5b8e5ac493ea0c23f53bdcff2d003d63d9d210a302&X-Amz-SignedHeaders=host&x-id=GetObject)

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

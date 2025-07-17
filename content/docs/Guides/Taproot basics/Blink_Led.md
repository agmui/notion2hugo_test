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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGHDDUIV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDBeL5VV514eD60YiY2WuBhOleBi1PUpsextma4mYNBpgIhAO3qS1LeOupTcCumm3qVMjA1dLNKCPzENVH%2Ffad0Dm0eKv8DCG0QABoMNjM3NDIzMTgzODA1IgxZ93gcL%2Bhezc7dT%2BAq3AMTZU3cYQZ%2BfA6eBeR8xWVucEtJiPzV9FNryDPhdfaYTAwKUzLXXxKxvyYl2yJdyRPEsje6m1LP5hOyN5nOIJYeymQI7Hhj7HURQML31tJz8y2eWih%2BBXgQ8ZQyQ%2FV5IzbQuVzLTalOJmNUxC9pKjbgOTcZdjaLGq%2BDWlnpbtLvw4B10KewSv8f7LrbSIuQfexFdupaTsVN6p7df13SQXWThtzfGpRDEYCdVi4dSdmn%2FN0%2FzUVM9pCnLyAygrKBiK%2Fi5YHyQo5bEUlmPXzE9vpVzaLtHra3OE6hwUKOUIyEVJS8mshrNRk5J%2BFvVm07LpL%2Bp2683pi3ucUJXiiWeOgkEbM2%2BJWAt2kVJYIGZb83IJJE39u5Iel6HNRqPWz4da0o5xXSAE6MQkIN1fiXYq8xe2CzTdF1Napp8VP4f0M1A%2F3TScQ2HLp0a6cj%2B1ZdINtGpI%2F6M%2B65qODqyvsOUewq1yZ8lU8gsRFbCuAapuwCr6nyeylbT5ObrcEYXY1DcG1mLyOQI%2B0nnbC3lfei%2Ff9IqIRCTmk0Z2vgVx5X93960mXSw5NLOGVR4cvX4VdeRhB4r1xyoKZwKs%2BbrxsSXF8NFwQHa8FFqI5zYmk9COu6uCfjhdxgcZWk3iDRxTDH7uHDBjqkAQs2JT0dmo5uMtlKwUm9wpwkeL7%2BGns8ZqyrO0In8njLDtUeqjTublX2XFBWztukXDuHaSQ8etGrLI%2FfqDnUBfak6B%2BbrkhQml1t2AkhBLVxYBEA42mJlViX%2Fc%2Bt3y%2FzvWQ%2FqS5OWtFpU0jRt3SBZhoMmhMhF%2FCCMyuf5jhTPLhPjeKV2qJpoq24feqXhQKgg7YYLytIqiC4FoYFofQLnbpoV8q0&X-Amz-Signature=bd6170a088f14cbf9af627499d5977a70191500c773656c177a1afc1c1d220f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEL4YIUI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIG%2F2mcTNaHgPWgBhQUyZCw6kUs5yLE7UrQ1uK1deiOnQAiBnOl70dcyGWrj0GNQRJjKmCg%2FRJ8fEMS4RX%2FuEI3HgeSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMZQzKCBlNZnm3ByXXKtwDPsMAkLlGi6wlVbn4oVyUkMlP0Mqo55RMVIuLLg%2F33Ppq5f19gaMDOwJeHjGMQckFH8XTiPsndqPw6DaY09VS7oezr1xBoIilGJjZSEGHaf3JknIKLG6kFeDvXWR9Na9JofHp16MTRxNxltKmdIds29l9ywWWDvhVxTz2QP2lyMgSEnJ5yqsJQ4xH5jRKt41fVoCKoBlcVte8o8tXrDraUbBbcBsAsI8QTnu23qVfdqqI8k2raeX3Wmt3TwqMjaoec1lY5DH4823uxuog5WRj%2BPVxUVnDSGTnhsGkocVhAIFjwBZN9u2Aa79aOAqR%2FTt0gManhR%2BupCfVrO5VGqM77J85Q0LyzaiHYZsUOjW5tKgzu20sKOhZBgmWZJhaW1BT%2FB0ATKEmVb%2FOnWZg4qSwLGUMk2W%2Bc9yWeF3r6fWJlTnye5VN5VrHkdc5FTbWInReAwVZyvaPLJkT%2FRR6BQDCIT7HJSX4ub0kgP32Aj8L%2BpVk8pm1%2FYe25vP6d2P3j%2Fr9Gy9IFP%2B2XST%2FZ2QapPNusrJtpLc7Tk6OqZt3kD1%2B9NkHaBb3CYeltABzmLQA8j8aid5HxtwN9ATOw55h7%2B%2F%2F7f%2F%2BWYk4%2FwCDowD%2B%2FEFQgPxWRzx873SE1nrBoKowyu7hwwY6pgFtG3VP3coYR%2F81Qf02FtmvvXTSOfdePqhN0oxHqvnEreOQrTBBcuL0g4jNnKapymP16q3szw8Vq%2FkM%2Fo3Xpr1spILF6xnJsC5vS6ymHixL4ubavnQVYWYEw2kUC7JlQcusddMvm3y5eIJgkcuNwODyrqdkDXEBNcOFBwUOWb45NNpaG7HBLNEhqGUSvAipasmTFblmGbyfjELnpUPT0V%2F1l9FFzbTR&X-Amz-Signature=d2e824f407b1464ebbe3456a2659251b830e57632a4a67d36daace1c87f517e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

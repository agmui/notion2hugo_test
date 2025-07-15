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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KKSKFNP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIEEvJVWkzAEhfOctb8jyIUqZzhxdW9VNq0nNEFmJSosgAiAuzsWwMxRfspfhnRdow7nYfF4zM0PDb%2FnfeLFBzNzTWSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMJt4s1iURCGWxUSn5KtwDuciivQ88KDxqvmO2bEl7bQC9N%2FsuPcR2E5vTp2xh40Hbi8PE3qnFZZ2a6QuZxBrnZ9f%2FRmJl8dHHpTpedJBl5mCBtLj%2FXwlbW8K9Wm%2Fs2F%2BOiol3foxFO%2B0ciQLBSbzyxrpZBEY58NsPqaPX2uII74dOF1irZZV0lvzOCSrK2PCphIHxliSl%2FoLces76h3%2BR9fQqg%2BTNvZw0hzM7BdjssPbeGdQwqRmSpLGZe%2BHr9LHy6DS%2Bs43XHr8ZfZ7hCkjJTrRcTS4l%2B6DZElC7Or%2F9OYwQcgXsKzEi1RNVcU4XGy0Z%2FVB8vZDjFV2je4qu3Xzq1XKzaFgp2jzMAiBEgn7MP1ja6dVKi4MkZDl0NEyl9%2Fxg11cq3J%2FDEBOt%2BNBPjMikXsL3yYoz29eyWg2Y3cbYw1%2FvuWy80UfkU8LCp2crZYmbomkRXLh4JNLTsrUjyfk%2BV%2FVh1yaYRw7Y4oJohptPCC7clChDqypTyhHZG4HRyJdUBazZn%2F8ZpU40QshDwQoBYWoengpAxfnMPJvzY4QQlKKqQpnq9CIIjn%2FZ89vRjRvlEoi1%2BzampOLJIvgJnKVVr4BM20ZQ5ZbyMiIy88z1L%2F6I%2BaC4KuIVQDP3VJ6%2FBkKTl49A0JX%2BI%2BoowKUwoffawwY6pgEBndPViN2ZApHyno8PQ2K3Y7uV4jaW%2F0IZ8GkIp2ckaNIeCLfpB%2FYFj0xv%2FbmQXOWM%2Fbhb%2Ft9E3a%2FLlFzc%2Bhl6dyDx5ziGPTBQ9LHWUVgmKbtQ%2B6wqhRNnJmQB7esYSvNDf1pMLc5hE9DnkX6XFJ5kjh2ocqJo9cKBk%2FEBUrS9OJCVODOde5dJdv6ixH9gx6t295arFdl3TnPyErCVmiYOmPx4sQzU&X-Amz-Signature=07689047719cd41839675dea02c1552a53fb15017c4c8c197ff99380fb004ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3UU4SR4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDsGxalXGQcIuW9YP5AOdoY7Y1GU78Gztmv06NZHmdO0wIhAISDTlNGrGfOAbA8sxlHUZhsWnbdeeJ3P8RMuVwhch4jKv8DCE4QABoMNjM3NDIzMTgzODA1Igxur3MtTc0eFSIHB%2Foq3AP%2ByMMkhUrqMcSco3DgIBUNm4YnnrqnKFTfGqgGSmcxM%2FEW7a5Hdsanj1DDxS%2BzEGsWHTDTJNWZcsD9sKGMVPMKBcp0c5DRsR6lFXsmnJi47%2BYdhy48h9XVDn6jHB10yGHgXa%2F78J%2FTcRTY4Dwd5wgYKN6cLjnJ42Advge5f5HPUlsEXqQvvAW%2FMb96DGwG0Fog9ub4Ui9jsdzbJPupnhFiyGC%2BOZVp1fOkLTp1U5sSV8Pt%2BeOzDpr2cnkSugLolV4lB5VuTRS3FazEoyYE0Xx6pIDCM8ynR3gAKf7GQtCSZhs3IGrKByjdKtyX%2FcuVeg7nWx9Tv%2FSYNuuZl0ucgpWvF7U73iYKLTwoWPR4qMYbCuEvO8Imxk23yCyokuGyTlM6ec8IlMhXXm32WyuOh%2FGIYqYBPBnQhUtGGQmjKPd6iyKiNk4sqwm2WTiBQL%2BQ7%2FLDVBy5H7zT9cXCsN3s65rUf3OVldl3Et9wjQlpFtc4GiuS13r93eeWVliCbAbsfr2vnlWuKbkLc1XM%2F5jQbcp9l7RF%2BxClshMFnJADjvVZfsCj%2FLsCREbKdNw7%2F%2B1lTZ5VwPP%2B%2FFrOa8BEOF%2Fy2mKa5gfloC9vhC%2B6LKPJ%2FMrliAzPGLpEhzW%2FruqVLzDS9trDBjqkAZojDskVs7keGu810GB9KSk0ZQpVAAIoTlOlo6bPeOUI47rJFeLES0OaFGlJNP8MHm0aMVx7FrQ2xtZo0yjhUf0yTp%2FvD88AVnaU3C6p9w9atnFV6XtE%2BkAVPIBwu1x4PQctrmJeBgSVagIwXL6iFj%2Bx3ecYpROCyZkpMvaymqhk5z6R%2F%2BEfiHxWglUqRJYs0tIxTIbjxJYiu4hThFoSDEWoglH%2B&X-Amz-Signature=360c27b6d158e65dce2437c6e87668bef34a5d5d6cb69203e14bf4097a12e7d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVNOHMYW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrb8X%2FKXQnhXHw%2BGMl05b7KNSUMKJe1lKBMIqnopxpzAiAZnnon7WMnzQqxmN%2BlIOQAD8NduU%2Ft5XeHorJQ1FKPjSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMPvlrtjM3q2HkUDdEKtwDy4F6KzYTiOtZj3Xxl8OrVyNvYrq7CVkFPn9hP81kepXxcdwOHdNDRGPfqNxq2s4iRRwVjevM2NbSdI90iPjxWmtAM6saQipErZ2lSwnwdDFqjFTKO169ACSZmj4X28JDRBnvfJfhjBQtTPQFqMRor6BoV%2Fz3vPRFG67d2W1tYo8sqUBmWjQZSJ1yxvNqg1SPeBxrCDwMWjeksTBKfzjSK0OSR7CB%2F%2FZaWHuchUi%2FJ5huiQIVY8amhBb1XxJMFeI5fPF%2BEP6BGPYYUqTihZoGd5C6UfDblljddx3thCQPi86v1HQAy%2Fw265%2BJg5kU3%2BSHvrTMWUemDgvkgHPBwJGazzSfwY8aEGHonRqeeU6Zh%2BVGcAmh%2BYo4cnye%2BxdwRjVYcXWGPCV6iRZBpaPXUTVR2Dykyh7WASNxg1YALpXBdI%2BLIoiBs4q7QDroGS5odoDdnyW%2FBFc4TC8lynlXSRJaYdFRPbVkNCSeGf33LTahRSORoMpOykrPrLr6ERsCEqb%2BYcO1q%2BN33ewo4ssfYtFu6llf2Pd5lV2h%2FcREs60iRG5JBfuEM9iZNoQ4HjSm%2BlJQ8M%2FyGROSNt4pDjwBnrJLg2CT2Hla1Z5wGOcKdaSWPHq7Dk4de%2B1HsIbg3wEwpvjYwQY6pgHkb7ZbG3DlUcH9tirY8xSihsIylwKtA2iXm4pDoGVt7K6fXQu4%2FSvDOg1r5Qd3J%2Fhi6%2Bny20rgOVfanuWtjvSo9b5m%2FWGrxlrB7VoYh3RMhBoWmMuDGMI02NGXNfq1MzmIniK6enKus0zlOs6UTND27I8fZ19uTeShdJYNFngo1RO4WFX49iLC060MmWfGlwaW05vZQ%2BSbxP6i2FSyhBoLUmctv6q4&X-Amz-Signature=f0d7b77fe254bc7832d6ba9c2743798a7993ca7c6b50330afb6d0515c3433fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3T4SL6O%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvNyKIuYcLxN96bfQdMLPvOB8A9yEtobjjhtNU0SZJyQIhAJjyFVQG9t%2BXdI0OhCT24UeJtxAjqewh20SQUJTbveh%2BKv8DCGcQABoMNjM3NDIzMTgzODA1Igwc%2B6UOLYgj4ewOHcEq3AMh1UzyU7bAb6WbfIELoeVNh2mPhoNqGz%2Fk2YhNOMtwnLa%2FkpKLYqDqixaWiddIKLq1M6kSTssFTaEh6ZiegPo2LxaSQl7fyYbZsrGHRcJvkmPAHpx0OJcmLURWtS9IAAh0SCxmgwWPNVu%2BYegibvqHw6iAxUgLArWtSTjXrEmlS88jcFL6dLqa1XGqvikeocF6Gwyon08Tuu7durL%2BUAIBIt2oSjkdPA5w6XSCBLj5TgqpX0uZp%2BVTOZJO3lDqZ37SlKY2OOD5tBHOPYZ3N9GcMsvJWbowPfYcvb4SiOgYp8wL29PEBOljUoF%2BhH49h3YykR55eYr3aY47qQDWSeJluY7SkJ7s3tPoxIfcw%2FkIfN%2B2BR5HPdzwCA88ev0BTtJ2qDSpkT8l6bTb2E1%2Fo6kjBQ9AAk0yR%2FY6nx6e8udo%2Bwpf1184%2B0M6NvYi1PTCALXUNxdya1zh2k4ErTlPXStKHBqeTRDg0pD%2BLzpLFoLCZiKL5sxZJpRY50miR0h8wGPxYsWjqKXjs%2FonqQQgXoyZjn5H4xkMsaqVbu6lIxXWMdZDJurSjSqZKBDeJnKXZLAJJUQuoVe4w%2FjZ3a%2F7HvsjRa82myEtgtkt%2F4mkbkOQV7DR29TPF4YPvFnkIzD%2F99jBBjqkAS3KwLf%2FgbCkGBn5qagLpnWzYtJDqRxTx6XxgUAn25F6Y0TSWxFdgcMvUrb6AT6tNMFsKMY0J4omKlnYpw7FgNRwaeJu0BQxEw01fFx3jataW%2BcTpkjjjd3xjoR3zXcbiQBBLTTmN9fzIQa9xG2GkRH84mE0laz%2BjhH0lsMZe6naIwKA9R%2BmRcfGQB0EKDTOUVPBlvsAGNw7AewSshh3F9OBuJ5x&X-Amz-Signature=4be1b4a56c4f9e7f92db51730d493ef6f52c53c7bb166353fb80bb85d8616dfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

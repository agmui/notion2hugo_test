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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627Z4YY7B%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJFMEMCIEH%2FgydEzu2EKminppIEpCDsMuc39wZ%2FjTPPt%2FkYDwg6Ah8sG%2BfQB%2B%2F4uSFu2mCGB79HQKMFNTblP0WzVKbYd%2FkpKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQmLlO670fAgst5NQq3AN61mo8iPg9pKrKTpHgkrvgyUHzI5tSGDY2xbEhvT6A1xeHeoBL5Fj0aZb6LlSMiJsCF8o9p1UVSivR9cLCjuoiHVp2VtkfScjlwwAxQ5IQh90vE2ZHb9bTtsqdPs5Cz4KEmdNtZS0PwOMk7IDc5OS%2Fdr9szjL2Z0sSIC5SitNXCv1iVZWyPvrXrn5z6L7iqsfmx%2FkS3d15nd%2BPHJqzlIQ4If%2Bqax17UtSuXFWYAUy%2BFODiqIhRigV1f7kx1t5XX94Q0jbUYqaWwXUBZr8%2BtL6xVdcCtQABKktZ0bKxlJvsTmySBKdQwZHZnR5AkxOWTjNJRzdDTfsiPvOMIdV4wHRkB%2FI192EXqO3HN460ChCoGt3mhuZrSJqTZAj89Uov3GqHybRqOzsoXZoSnqRb0Rbs21viQh92By9ef7Uqom7ChEarZs1dVbfXwaj%2B8d4vYHWJu3Wh57b91fujAzhe7SgtMCRKe3KxStY65poqKfRpo0P8BYB3bj9KDGg1YZRxFGTEaqUJJWuTqDJsJlkLOF48rvpzm5wZcT9INVTdPjF%2BOEBr4d8HUnypNH%2F%2Fi7hg5W8gRRL5YD7TcImVJmYVUS1EOv3prYrhmmnl2n9jak3TnTiWj4U5e%2FQRlAL9DzCVkrHDBjqnATuMyocV1v5upJsJopQGmjgWcHbQo%2FcK%2BwloL6keUHvp4fZTOdllzcB5sQ9uVK552XXc2GpddSf9hpwx%2BhlU7FwSVBI5SOQ%2Bm73B3ykM2Xsn6FYwwnTh%2BPYRwzHwFxBFsnxGSeSFQZYfwmBJ4%2B18h6i6rnvTNYjJIsTtlh2VW1Tc5V9ykH9GXdok1h9JdJKCT45G7YO2MGAXXW1vXfzooIn051tu%2FJTV&X-Amz-Signature=f7b3fbf2d303389a4741b078f87f2d8bbf955d773c74635797c7bdd554029b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T73K6JQU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC8057n2qdbvsF5QWtlbuXWyZB9yG5Y0JsTGYCvxnIE4wIhAKJuSaNvrWEfkZyDyYPJPu6cfALbUCPM%2Fcla8dBjKZHYKv8DCH8QABoMNjM3NDIzMTgzODA1IgyvfTs%2FgtgHe20PTFMq3AOYrhCDdlIs555MvNWZdK1Q0fTdcuoz5m8eUZv4gm01MWQnq%2FZvSNlMCDFkDB0gUkb8By1kdJya12RAHVt9DdUzArH4NrAu9FHZt1A41Q6tDj0xjYfGnn2YK2ARIdgxQDIpkzkhpFOD5HcQgqKV9yGTOKc%2BERZP1%2BJXs%2FUOnpmz4k1zbrAMjcm0SqeohbeHLR6j1MPf6L2tlN4I6WpgziJ2zTdmcxGEgLNfrlpbXolO9WJINA7Ldh%2Be3A1CyBNRSN%2F9Y%2Fcx%2FSgRZCJuKxGe4PcuwoXUNGKry3nSiieLDYhFmV74PsRO%2BaVTTht%2FiyZ5e%2B6rgz0gPYJizAQriEuYEh9eftG5KMKSJ%2BWxux7GycmHX77VTYE6MauiKDxhoPqIfjVTC5hX17ZrACpbe41%2FmIzNHRiFj516ju0pvvxOcgCxPbf4EKt1hnCNIx88V%2F0gUnLxoTQv3AWOCPONBGvihusvzqNn7jYkS6UWjFo5rnU9gwpK5fxfZ1IfyswKM6RgjskbI%2F0nSAWJEMyHOeM%2BA4A3Al7dZfqG%2BTXnAN7rGJabLINFLdRaWZ9%2BdsQQKSLI%2F2VAIb92n5c%2FlJypxIRzzT3sYkYWPMztKIJQZBzm5DZJHl0oFL%2FqavJ5EdEUXzChkrHDBjqkAYUQgjvgY%2BvnB6phtTvK7WNd624IVc4eqyJcL0BNuZ0MvocZ0ph%2Fz8XJh7Tl02rUI97FzxuS5sF0r0XeTpZNdXQjcajMHMEfqohSyKughuhJC%2FUZsNdDOZGX2jyCaV%2FcaG33ZvQPRIyQo%2FEqD360I%2F7fso7GoT85GGHkTyOr1rBxxY0jH9hY2mwAWqx5ztI3gVaQZEOJXMkc0Fw%2BtmBt4WXwUMGc&X-Amz-Signature=b29902347565efd67efd621c7c47ebe60513fff58664823bbb96217bad703261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

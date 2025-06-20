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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETMDZEU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0IAKnGjtD1qkUtbtruScBzM4JX4jyvU2LZm54lwN9TwIhALFhiL9YyqWi%2B9D4MjN2XxbXNxs1c1hGYKJ5rXt5ZtD0KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzemUjOsXt8Ji3lllUq3APs9x8idlPZaP4rQOUBdKylp6dq7%2BDSb0w8XLyBq%2FVFya%2F91xS9P%2BXyjIFeGmGcXyvbHer%2F104I66MiJfGuTWxd8l%2BlpQTOQjohPXe43j8GXnD%2Bvwi0NXLVjUO5Ba4mmz79u5CLKzPWesKXPOwmRhNB8LjszX2g3828dpZk6KuvZG1PIkOTd0Dc587wJMoFU3nWT0hD9Q%2FLIZnnZFJm0iD6iNw%2BJ2lqN2zWl7z1lIyV69l8AqGPG08Im7qpGZ%2BxzkduF%2BH6PttkUAUEoL4tDIgiSfnKXSzDhh3ZNHMysbCR0av%2BZuU0i1vbtrzwbY%2BfshrmDlDFntKyKIIEmiZAyMFCVZKi9m%2B5NepoWfWMHngLeF%2FjnqzlD5bmfE87G%2BJ9WBVjHCVYpK4bSgI8qw2emrTZmRS62pwg9YBaHVgCxzGtzQ7O8ZFW3wW1JvdjrfO0Wb3g38nYfl5HgbXDQIBPiRFRGqFCjGPzEpI8enBanS0nK53mcbLsepg%2FLwDHAOXDneosWuSqwZXikQjm1cI%2FI79%2FSE09SrIkriZYYjAYlYC%2BZU7T3X9EWSTcLlNsnINc4ztPKRw42KSslyWLCuccGaH2JS1qpD87QsNwDy4Pn4iHmxlyyr6hik016B5tfzCRwdTCBjqkAcQb%2BArjR%2BIuvkaCe9B79OLcGzkaNIBuEA4j%2FFUhtz54iE9HCFygeob4dVNfJL1S%2Bm1OqoPQtzzqumET%2BrSxzu7PAh7%2BH7gY%2BKgScaACyx2XKjlJsJMfExwyXZhw8%2F20qS%2FEq0pltwcxi7iSfvAlIhK1DuwuH5Dkmq25I%2FMrF6fFlZR0RY73C9crmMIAfEUZ%2BAfB4Dk0lk8cxe%2FbAIY57RS7CgtW&X-Amz-Signature=d1ae26a05e56344ab7383a02449f0ee13a029c1b70e7777f7b2e219e493d8f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQ7SW6E%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI98PohnaJa1Z6m1cuojsLdtFRHRy5FeqlznYPptCLegIhAN%2BHCBmnF0xcnicBarImrinmmOQcIqyZPsvwARaHExYhKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG%2BxhDiwG%2BvrW81s0q3AMahj8UQinU2KZhuOaIdPE2AU64xKuAnR6IZ9j0rq%2BEE%2FrCksF5%2F%2BvgAioVD9Kxtd14qijO3I%2F2bacgM4f6QxsDQTFBvdu7e2V0Eq%2Fzr10Fy2xQgVOTloQEElJ7UUFoWjdYbZZADGpnfrBuvdxUXyNRSsvvJwX9FKijHrnrAy3eyf7rvJcd1r%2FITtgYJ%2F%2BO%2BwR%2FQxzZns5ohUAaMRbBkB3l5cOyYroybWRXYITKaQaO9YYiWOwmsYne2%2FggbcrtI85sWUkl1PMyuy6Vp2hnpHUQOxhgQBSOBYkAUeLC0nkkNA8gwT9D%2BLYrHL8gwhKadRwLyg5c5PmyX52tsfuM6PD8w1xZ8igwzkaXjgXSi96ICluzaqz8Fiejs2fa31zc05p0RNLcbQsrzsxD2AX7LEqaqxvGyrrFZqlQY0yp3UVlN5N9E0uBarCvMQH6PnNv08%2FZ6ecgfOSmXo805ySFmZe49w9P4kqzQDYn8NDAnlgXM6xZbSDNfuNi229deBDb1W%2FOptElr9QFzxPHfQcoIgy4uazKdHt3u%2FtHBxFWIJb6xzpTjxvQ8BiRgNUIb19mXP50zp0r6LXeyhEN3mh4ZeB2ri49v3%2BbE%2Fm0CMzVsEFDstgYEcIR5dyLd8zZZTCov9TCBjqkAUtxDf27cDAcnymfE%2BWOLhK18HOjwYJOUEsVsxULg0m0xZxsuv6VtxBqNGh9idvZu0WGRx5OHFi2X1atqdZ7Q36DgCF9%2B7C7bnE0xwxn9n9y0TbiaZaDmCbtqsm2ZfH0jCEeI04R0CmR%2FLP3w%2FJlYim8VgD1C7GbILoeKjMHSHy3v25ejMLNEsFd%2FR6uFZ0RUBvwxtP6wvHeYXon8N4RcrVbsCp8&X-Amz-Signature=88e2e66910f38b9b438bd45be6690a95712a8323c328b3c9b3596abb92a74a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

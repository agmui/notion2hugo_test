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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YDPSEHI%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbHrMZ%2FFBDvOizKxVjmxsI%2Boul1zflcBx%2FgX013ldrWAiAsLu3nSeN6vSJCfPqnEkY4oZyWjgSjfHgL5QpI5ZmyzyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4LcHensOZJeT7Z11KtwDu%2FqWlG4jyZovzTGDaUoKpSoL9aub0aGVyrhljCcZW79%2FSN%2FQqNz4gD5NpJ0sr4KyVCY4xsXMzQg%2FQOZgd%2FQ%2BoT8gDy0WZCDjAVDIYyjB09SMcPlhdVxDtcZhGVssgBYgS1D4FDawnzXwkTgvabJUyHxnY4uf3qYuQW6CS%2F6dWJ3lJVsV%2Biku8AmWzmu9d7DC8m58zTPjgC4SKCvsbiWQ3eRuFJPG3RYpCC%2BqkyZuNouzCJKb9gxPY1V68Z2zn4Q4G57xiq1bBK%2Fq5v2Ly%2BstHh1F3Ny8u4L9TzcIUMB5xgJsvaff%2FLsUXIDC5wakR%2BGrnymax2q%2B2meKXHbEK%2BIHA8NgoEFYLAm1eO4astAPMmHSAwHxpWRv7J5N2DgIBxWOkFLpGmllX40s0mTW7Nv5p4YqTmoeo19gthObUH9GqW%2FlFEoTv5rkwE6y9bwc9GrMoGdY5ArCNi7k%2F%2F%2BUqhLetpFqNnG1mwGCWB5rxVNZcV5fBpGUPyqSjU0a7HtEmQRNulv2v5lp7x3ymzzBAyGVxriJhq1A0GeZ03l9O%2FeV%2F5tmOOEXUb%2F3cfZieeZgocL0%2F3VGuca5vxcGzolizZNK8Flr5XCYd5bo%2FNnpbO03RvK3YcOqGY0urKcrVHgwqLjuwwY6pgHFgZwLbbMKRgYVdZPboU0rqTMRkb5w1qzpFjVRH2bHPqDcI8AFUQO1jnsGIYs8dUJVx2reMUfQTob6G7BSTg%2BRFnv%2Fm9lLDi6ketZ8XJAky9RjXSRSPa8NTsAAl6ZtKwPO5hcgdqmaOH7nH%2B%2BCen%2FgYYXBj1HlWzlWWXs9nk6SRIManOBy72OyQcjWkHgcn0TPIx1CW50d7YCJCGq%2F9BdFoPruwPFJ&X-Amz-Signature=e41766f7903f1a98622a0ec237b8579d2bb5ef742f17b4335e70c69700022d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H673VM2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdWJyIKOjcXk0SzxGII7BpU5gYGukKZrKD9ED9XjInmgIhAMxbBaoVHiq0Hml41cKr4SlRS%2Bjm%2FQHBewRzIosNy8YuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3HO5afLY2r%2BH9STIq3AP11DcNcnJ0xAwigBCBRI5AB41wt4e0qmSoy4MXDzaRjHPJjniB9QVUHSWXOlIjriEMTiNXQkgi%2FmotrSaXFtgPTfbOaCyEzOAudk83oy9XClJInRc5Z4BKYxQlB7U6C8SU5wy4Z5%2Biz2LtoGte9BlAFEnHkPRlw9oMUQzaTckuQMGWfAVp%2BN9BV0OdSC7Ebk5VKcxQo9Bl%2FOAA%2FyekoHRydXJbx%2B6IWOQbaqnDUUgKLYK2RsaD%2FP3xN4wouUBdMYRfYOOaMunbmbC8K5f7XMFCF7dk6WB%2FQiIWq%2F6FuhjvAYTe5ief%2F58q%2B7oY2Cj4C5sNWInofBpCDI9iYBb72oCZxARrrAmiAV%2F6ub%2Fim1bSJNrblQQeQueHkPxjUWTRDvy9LEvwpGdmGEjUVPIbm455gmtHU3e32MOOjvVRV9%2FKf9nUkr02aa6SA2fbbj1hCcuWYdjooc8ea1cLw%2FgEhomwPNNsDLCr4a7l7cMebNRioRY5o29awKDmWkaTrzQgfE0EJ0CAtji%2F0qRfTVi5dVEnVyo52SO3JmCsywUuqEnyVoCxrikyxB6UG%2Bs8BO6VegiUllgnhKqUlGPuGJUpQvZ8Pwr8iRfqII5tVnP%2BDiFvaQuKK1HB7OvuGWcqoTDbt%2B7DBjqkAf%2Fr%2FU3K1GRZnuiQZC8yBeDsTQUSL17cW2Puq%2Fg%2By8miYY2iWOkQ9fSQpqMJ8WybC4E4nifiZfHspDarKKpi3X5BA0kpmZ6qhqfIEFTllOr4VGq8BvmXsAOdS6LhlTcKyCQZwxtzDpC4q2BJEjyMKim7ruhEfBtywIGXcTI3EI7lqYHzFCgx0ghTZXm0Rs%2FppdXMhAI2GlKll2zrF3ioLcwwsrUd&X-Amz-Signature=d72fdf354f0a5b173e0ddf5fd46d81aa9603aa062172be22984e9bfdc74832a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

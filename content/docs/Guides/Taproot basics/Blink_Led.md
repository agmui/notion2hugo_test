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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2ALCTW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDrrOHgO8oCL1R2KFij4SM%2BQ1JKBKStCeOlATecImEDHwIhAOjTogmDSu9aXNsm3lTKhBtzVXz7nxx%2FYON7GJ5vZ%2BlwKv8DCDUQABoMNjM3NDIzMTgzODA1Igw4BiKSK%2B56bxx1dlkq3ANRG48aZ3x9aCFeRac5GcdeDBnpvAFNbiG3vpECqLbVDZzCH1KLNjv9hhg7XX%2BBztuBsm%2BrbBi3kyrM4ehdFF1k73TF%2BYyQ7sZxJiprLpGQzaLlgIXLEJmuXKdoV8g086ow%2BlIIRkl2FrGkrqkF%2BtiE7XoOs9ndoO7vjtxf77y4RUfKr1OCjPCUv84tW4WVcZP2cKbW3oW7x9QexSgc6pyIOSwd%2FEs9pezwOc3Q4xl2duWCOU%2BvQ2C%2Fp6kPWR4ROUr%2FCtP8SASst8jtNZQ%2F85QHRdhCinqSJwH2gQcYodv12C%2BxDZ2nzr2aV27%2Bp46bmLdoHjhrHmettdn4F3%2FVFP%2Fjgz%2F1J8ZkxnS%2B%2F95yjCIUe0nQNHWNkVDD9fMZpjstYx1v7TFRV%2B5%2Ft35SZE0NCy9PYLppf3feAcsM6%2FvN70bMsSMVxeIArzwsy%2FovMVKonkOudsel9WN6755LTSEutuN%2Bjb7nj5zPpSfahiWUnv2o34Dy1l7CrJAei6cZb%2FD%2FFWbmJ65BKlJzpCEbp2vbVIF5upGOTvxN7NMY8r%2FCPSaxdTzkZWvJ8QHVF6M0a9sVQmIpc%2BNPPAYBT4Px5czZOoXc3LIV6SH3n1nq7UoIdjzyxCimriWrxBS%2FTj6aJzCf9c3BBjqkAYg4gX3TxIQeAfBQRLpPTxq3UUvDXPzB4Z1pYxRX%2Fv8saNMQS7%2FpAQKsrnvBqfp93zbY1ddkvE8t7vltUN6ZjiQdLuDwepMoa%2Bg1YoWcNiBNStMG8eeNYtVwxUoFQ8f8zIkuARq1HyrOf%2B0YqWTKsYjDKSslKMTAQp3e6NwJTOhP43XdYK%2Bu4Y5VtutfTx5DxbN3CIRITbjhmGrzFiXVF4MbE4la&X-Amz-Signature=cb8d80734f0cc74a0aa22bfb4152084732baeaffba111a6491d3f1c2f97bbf06&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUBNDCZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGS0Uma0NXeaWkumKOqZF5JMvicyEfVm9BrF9OIJ4Mw4AiEA7R7dF0VcZNPUIFix%2Fvn%2BT%2Fv2XkYWqUnvwwT%2BvFnARN4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCTXA8BidAPowH%2FKDircA9k%2FyYk6BYPAE8QlgWvwR5fYJlvXOn77pz2CJmnWjMon2Tg6Dm89jefA2pQk48Y3qTR6AQe%2BP4LUv4zpR4kv9uEErOJNVlJC7DP76lDDMRx%2FZ%2Fi4mUCvC7gCSynJVBsfHhvnUTPD16lqu8rNmJi6n8oO4Ne142NVv1%2BWdKaJORNbIboAo3kvqHYNmXhZNoKhlTUWzkw1ksZPn5bU0LrNW2zk%2Fxj4RPKZSaeHdUI%2F7oXbGyIeU1EtoUA4HxbqYeZs2IoT63AY13%2FnEMC1Ii9BkNFDpg76NmyiHrP9yIBWNkj8Hfs2USfaj72Rm5RuaTk60UmekgTHFMOBGe1K9hy%2Fp%2BcnBbvmpcomK8j%2FMtjOCTtFCmgjVwyxrBspKB8%2BIV9n2d4v3prfo5jXvZRk64yZFNR8SWnE31093F6HIu0VIf5ZqR2nc4q94%2F4jnEBnodFCu82jcSAsGrXnmNpqb9VFhsD5B%2BO9SCRFMorM3C8kvJa%2FUhscr3FsNyhgGaCF3WqSXG7c8QHU4qPaSvK5sBAhRXwNyNvyMAGtivzbIGt6mwW6izvYvS8PkpOE0YiKM88IV9HDIPjyE3ihWpMzaWLQsrkTm%2Fkhx5Q8DzoWcSB8FobvzViDmaxVE%2Bxm4s6uMLn1zcEGOqUBuBMiUvBy%2BJObxTLcguXDZfz1sRhZZgXtgjTZmviEWeALa%2Bmrn6zJdTrsrA8kGO8zFbgZe3eYWFnvCQDGAnVf9iyn8OTp2JlIouuwyFGpgh0s3uhXUvqnRj%2FUG91jqT1aiy%2FzE2EfdfGORE%2FRPopYwAHcUcW0NwwdQJ49vYeBii6p5hgtn40vfQqFNJ7eB4%2F0uXrbQYSu57jZK%2B%2F09fh0wgrkL1fI&X-Amz-Signature=2390c91258bf09f8a274bc8bed497e77ff4812509954d8923ec162f6df00cc21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPIYZJW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDflFUt8wO4FR2ovUh8VRDWp9%2B0WvlGOtz0Y0DkpkeoAQIgUvoej69M7AUvQVFCqQJaePN8GUK22mu9GIjbkR2DCdkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZduODd9GPSWHO%2BUSrcA8FS81CcidA2eB2Ry3YUqOBzzdA3Kx3gqQVtPxoGW2iepHwO5tbQsd0Nd9Ct3eLo%2BJEBMDO4e51J4lu5VTVw9f8RbjpIIZDcUe%2BXto%2FfT31q1NtZ4TCt0z61hZ8F0klTxTUUFKkjAqz1s9OX8f16GvrX11jZLOJVBRXkyK4ybv3%2Bb7hYzWXQKKiF7IlfPvCNGv3J8hBW%2B3WtM1VFnC6erxMewv2YdNymviaFnCBE8%2BLc0je2Ri5ykqfe5JnPguDGzTkH%2BmNzmhqLgShVPI6Wv8at16kYQJk81c02YlAhMEY2NjtZ1twUw8lVGBqCSUgKIq1qGRjP8zEQvE9AGlD5LmwxDoQrQu5%2Fs74O5D49xSuMFC1qVzTzsEARRvDYZ0lmx2izahg9fnWZpHggoyNBIzs9RKAgVa3GtXF%2BBSkKoS4lpl75uquSm7HtnlXhtDXGDbU1rJIQdwwo%2BNcePTQsVMIRSdmUKQYCvOJI%2F387TuFNQUf6FkaQu5jL0WWQAfHXaIGDTeyQQoRqfwpkI%2FKK4P2A3a%2BArrSb54yg2DEEIgFZVRaUh0zlJzueDUd7GaK%2FV4VXwNELjnNpjvmQDz8YjpTtX5utykhwbTgAdeNQInC0AqVQEK%2BmLs7wX7R%2BMPijyr4GOqUBFBkgK1mY%2BMtJHds1dFjXBxQ36DVYW1a3s5hgMXqcBLhx8inZAaXspEEkRwaN2gMtCXrC7MkbVEMhQWUY69s00K8yiIcQ21nNPkwbZjq9Zr7z0xluhfWha4BQtzmMhQYsi3pKyJlJrTGNClXi00teHPeKEpGzc%2ByEH6X5rlaxw8caexyma1bfj0rkDMTsyC5vWcn56AD%2FkX6KhsoUGABHK14VbB%2Fj&X-Amz-Signature=79fbcee2b2071ebec7fceac09853816d1c39db32812be1069b3715d344510a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKXZZ2X6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA2rBInXAyzpnstxXsxnl1OWLlhYlvT7MhD7zFNGzocwIhALlwrhokyipq70RhIG6%2F7wBvaZUjqCAI2uomGbuptgBfKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRcpJXbX%2FAFdKKqPkq3AOg3oJxHJuaF7FGTY6BM2%2FeUQ4C0b0PY5yGEx0yGNKM6ldLE2ghIAj2pT0nH68O%2BD1Sx4MTb7PDis3ntRQi5Z%2B8hLE33%2BwdigMMPZw%2FUOu7VpGzk1ADO7cU5pEZlI8DvfehU8nhdCz4N4ZeRrEzJ5jfy%2FG1JfPIXkGvIdwjP9%2Bbq43xQXRSWwR0G1%2Fomx8cfKP6S0zFzusDe%2Fxpx%2FOsC37fZW0%2BTY7fOw1OHZ7i56U1Dhpvrj8ihd9y1xXkVSZrObfEV6hH1PKc3HNof1CVERUyKx4iB3Ydq4O%2FFu%2FcszS4bSxps8mff2B56c7dOcJ3Gt67DHlsKKzilhXwn2iHH7UCL0srGgDPWYM7g%2BIxweSAtfkw6rHxFHXYAGvpKfnHmolD5Fu7jMyHeW8w%2F1cUCC6sAYalAmhGfZSfbhWHM9Ea78xILFt4x0boSfIqs1%2BZnWQuFDw%2Bqqvwa6eC9nDE3gVOWnDlSaBUioAcsXcFRMkt4VOiEqE2Yqf9Jr5cZUoK2hxWEl81EBjcjsbGD8yJJ7x1AhqdWyIv%2BWp4pv%2FAJBneJzdykIE8Vxv9okfdUD7hSpobNHrGK1JiXxJPwPxTqGpBqPExVoLNQ8w4czBNY4J0iK9SnNZLT9hebGDdlDDvo8q%2BBjqkAXvQ0DUdqcjOfSGyF7lNOz4XOdOannngdAflALjaSA561Df4T5OtpuYO7YSEiGafg8WnWWNOtmrSPNzjykaVfL88Mr2fUC1mAEcBtubrZ2tN26OuVNeGlunyn7iqtYliz46biFDMdYU7a9z68QGT3CMFENv%2F00S750%2BR2yi6QaLCApmb%2FiJxM4ItZpyiUV6QrouHd76oyVmOSpWVz9rJ2zu3CKFq&X-Amz-Signature=3d428ec63fd4e35ccdcde8b9e11241a3c315e911d8519477070241d13712e434&X-Amz-SignedHeaders=host&x-id=GetObject)

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

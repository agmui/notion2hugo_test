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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q7MRSYZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDipOFlCIlbJlbI8AYRtvJ3iUZ3zR0Zc5ZDzuT4DOId4QIgP6PSC14CT8C6tt0zc8tAxkXh6RpSZiOL%2F3zdhhuSfTwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQw0mbmPS%2BLGLmhaCrcA93yUFzI%2BebTrixEKxgFwteOyhlNtBPzzwDHyy%2F4Hhc5DdgxVvzwNU4He8m7ZDMOW3dre0A7fo0XJacf4UQuYNdgodBXsdpcSQO1Pg6loL97aLcNc31BQXXqJumZAsZyWmRDq0Lwlt6F1Qw3gYCWeMNYvCvetHr%2Bk5NHyZiImehQUckYHQwy75lE3ia%2FfO8OYE9%2BhmjKv%2BTxwwbS3h4O99FYl4nX%2FZ28XXo8fem2EeES34Zt4JZZVvoe2NDun8BUv7XaWCYDT7YEhshcNesynPeP8AcnL%2Fet00G98VHkWbY0nVEA%2FjT2n86%2FuZJ6RgPOfmoUtn07wRX2wg1pidkKfDJgc5qz6AwpJmvkopMlwI0NUKGwOwMJ%2FrxFV9miwhtVjzHYzBEGnQqz0LyQFsUp5gVqDyEo1pWCUcUBopV2XSYSF8OxXv9%2BVQhJdGfd5v2cN0AdqfSiGwEC0PmVAocm3czn5zkuFYXAY4AgPtg5p4rwCJ5IioBCso0jlK6sJ1EF8YwnF%2FprPVpRYVUmSyu2zgrsJK4RHxEEkYogaY8GUJLXOAyF%2F8Nni44f3TQH1p6LmIyEg51L0JHHTeRXxwHBSljMyOqQ3occ01u5erARXLHoi8dvAnY%2BjfpG%2Bf5RMO%2FEyMAGOqUB2HseugryG2QjoOELsZfMqEd%2Fn8mx9zQdlmQekX2Vf9caPslkDrx1Yo1YdqNOgMRITCBD86gguEsc0AQhykI8zb5cNmorZJVur8%2B2w9ujqPHpH4MuQs80YU4dQXDFLHWDB6f3xe3t%2B96dmq3Z%2BsPeEndSSL4RoPHZSr4ZV4ekEyemxQgGsov7HWrz8kAnV%2F8XdBAYGCQGAmilPcy6v08Jupe2HzBK&X-Amz-Signature=7c342d925899f17ca935e58e96bbcee9e2f11e82df7cf55a0e7561be7a91e810&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJQSZOLP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCID07Jl47nQ1sHdldGE6M2%2BwXNEzwpkVqCfpvhynNT3CxAiAeoOMtaFHWCQQviSJsKD%2FULBVcvqL8Np1PSBA%2BD%2BshviqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAC5Sqr0ag%2FiwC7xIKtwDDYXg3hYBm%2BlLYWcTEU04LxWEk%2FRU1JMkuHsTqTtqSQm0BlRzEEx6rZ7X9haul8kgifIiwNGwakW2iWjj3y3iLZlvGhtpT%2F2aPZOAufSZ2QuXCZvspdeEkc1Y3ZIKbkXPu3z4vVfP98zzdb5hUgTag4%2BmHNlshcgtSsDXxWIc%2Fpl7DjBsKPVf8YO3rqkKpKxrJRzco%2FyOynrstl4XM94mD%2BcHmY99TY6iMY4vtwBa%2B4hkEQcG6J7uXFoHXMfzrdjwURs6OOH%2Ft1rMT%2FVTAaDcYBQohNqR4CoKnxCW0nWm3K5YnowBz3qiCaRmCMxvsyux0Zs3%2BXsGN2F7i9unrVhl8m7SdrhdaqjhbR0qTrgdV94wwrFWvawmuKpCXfjBsQvDFscC2JxFib%2BYjR%2Fp3T38Q8occDFGmHuxdIlc6vU%2FS6RzleuxreHY5lSAdGpyWNx6HFawbhZTpKCShz4KlBC2bRs4%2BVUD23Fut6eht0q%2BUyNmjrv6uFdUD3FD5DE%2FVdEm1GbB7QGYTJ4b3Cd7OQgLKpG785XdfmO4uw0mWGwzkQeJlRVy%2BNcT3%2Fi7Dmm94jfROlObdw40XT5Rg4kzY6qGQ2p0kMbtwndBpc0MgQmMumxmMW%2F%2B5qxX%2BLwRgpMw%2BcPIwAY6pgFDNWaY8yar5u9cpFepfmSVcfprPCtkiaC%2BkMz%2B%2FblCkno09ofQn%2BIp8ZZeVeY2Z58fb9imuVjyFV2ZhG5UZOTkRMwWaNn21ZDNdAh5yqmhUq2qRO9TuOew%2FDBC8otGRIaJB9YdsqAWcWTjTxsMY5OWxoxJQd7%2BPg3lzXBHJrdc4CbMcmeMpqrADUOqOXfJofsaYiP8%2FN%2Bc3IsNSRag0nKvuda2gZhy&X-Amz-Signature=918d623463a9cecba557228146c56155459b64c7d3085832c7903042a0046582&X-Amz-SignedHeaders=host&x-id=GetObject)

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

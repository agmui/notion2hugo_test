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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXMERXQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFailcVYqYdr7Le4ox71XVWtiOAwoPIPB9VhU%2Fj8HlwzAiEAjUYzwHaDrgoCrDDiNq08wLyC%2FP5XFNDHxBBTHEg0n7UqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsNL9x4rp5OcSrOuircAxhMUyEDHLL6w9uBuwfjHVjlxt4%2B%2F0CQvNE7SQq1hOZT2X0PUZzw2r%2BqI2olGit8yqoy5GLvRFVjYFocBM9xhCzhMz3tAmNksLw4ZPCDt9uFxEV3GB0n%2FBT4nmdhvqXnqsL1TfKeXAqHDwm%2BZhD3Ek3tEtRpI1VogPCIvZMlZn7O5IxGqA9o6Mr2zkPyJVgEymNy84Yn1NJob8T8Tf7NBNohUhaNymcmiwpy5tdX%2BwyghPXp3ZXvpv8p%2Fo8ny%2BjpWwnx3xmVCnnYSJ65IlqKlDvoT6fPHaLMI1VZo%2FqqzGVSlDMhT7Oy5GU1O%2B7u7rQkkOKp%2Fw%2FQCPtggQpGHhGm5dBmZsCoB4wQ%2BAP2lj%2BGPfoSG80XqSJ1pGVNzL%2F3YgXK8FkTvzR3478fRZtW1wNPXVQhMNDWVnkJprQdzsraVE4rnpG6flKSsEB2cM7Bs0Aw0j9lmnRj7mc9nScJp4WaEZyd3kg1lyFbuprL7gZIc5Rv1sHANGP9b%2FNJw9GH9snOOmByVpK25U5mxsVQa5Cr3ZjOJBTStWBXssfhybdAHHnvcW1VSBbSyhv3EneQJawupOfRvDFBCqTbN1CkVWHvcgEp35Sb6S%2Fv1XSWOK32eFlmxkieVqjZtlMkcy60MMyG4L0GOqUBC2u3r1EcGIOe9065RO5Zqh4W7t%2Bq838KLJnB5%2Bfu5cx3rRsGb6R70McSveavG%2Bh9pf468fO3y6s29cjceX8fhOAB6r1TtGnEVhRw3NdTCUPnf33Fvsq6%2FMwMEPU%2FFF1wf9Tal6KQ4lKMerw2nVt9BCfq5ysOqKR0UajU5yb76dhYE%2FziJvFTjyDB5hwDjgiAIBUNn4yF0Ae5yqHY3RjYvt3Q1j%2Bb&X-Amz-Signature=89827498aac0b375a01bf322f8f633221798a6a0e4d9add9c3b3352e1b47af44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5WBW3EX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6sSWYR5%2Fe9RvZuaJ1u8QYvX4izyq9V%2Bh4TbMTwy9zAgIhAIUfysaWDEIGKXENZ0SpIVdY8gh5WgX06I69VdncVjJJKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweV6nNQb2iJLzv2P0q3AMmmcqHC5C2WZM93KvDQ%2Fqdh1x2PxkNEx29IqVXE9qEuiAri3FGB4KZf0hx1zSIe6RmFLhiVdqejZJoSXqF3r9XjSTWnVXzxkrCBRqwHD9xLS%2BpQhqgDzezPVVObXUxHWwLUCDt0K0RA3B3gohPeyVJ5eeEARYpzgK4ceZtawVH%2BtHZJ431P01GG%2Bv0usRjgb6faaoydjpGJHZ9ajo%2F17oTCmfrDXt8UAcSwvGuYrbYGbdQYncladblKeF8BLRVgrrPEiWR%2FyB6GplBIerQr5waYtN8%2Fm0qHsOHOczXYkiIm9ZxNT%2BvGji%2BvvbRpjvdPjqsi6CWD%2FMKq8TDVPYMVi3pKIEaANfEu4sHhi%2FbZMSGSxhhkkYUv5XlyXmGUMwLqto6OF1%2FxHx0xtNquZsATVUulXm51t0LxXLFOsdfX1381Q2MRHnJZSBEeepoLkXU9PumB18DK5GOqQpOCDV8lE4GB5wytWx2Hd5maGMPnMVPOSIj518lqaa%2BHc2ITEh2%2FQTGdz530tEPe8M8%2Ban8ZKpPu3fqsDbZ7NCbUldFzmuyMBFwkwZExCUl679cJTZRYurqIcTPYjoga7FtG5xBhAJNNgAY8BuhyT4IgxLIBzETMEZ%2BVEbwuF9%2BFv9b4jD6heC9BjqkAaxe2%2BhtNSwoN7e%2FICsle7gITKPzH7t1ZnF2h4%2FPONcdctPV4jOUVX%2B3s6gWdnCWkWnqNj2omna8nSXWBG67JwuDwGyp2JyghnCAJ1Y2vX4KjXT2zXQxI7mRtiHc1SPv%2FB9dWtBNyDSKwFpJJ6WpMR9uzTpRnL%2BoEmFXhMTWoLNexVgIpEHsI3wkI0rs81EmjxVK2Am4nT%2BxXd9dArg%2FtS%2B5PZEA&X-Amz-Signature=3495d4ec04402aa667d2f49cd0dd4220f2001103dc9d9912ef62c20fc5f24e82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

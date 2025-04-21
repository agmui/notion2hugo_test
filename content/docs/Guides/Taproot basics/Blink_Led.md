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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3UQBWL%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHK%2BtCgTVOm0ijMdPB%2Bo0jpzLGpj6uuFpoqNKawiuWkRAiEAlEgO1Pxm4ybQquBCuoFbrKtQiv42JzkT6rJWPolA%2FusqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiSrTe845k6n9lbdyrcA2cKiDIIk5U26%2B5Rx14W41WWMg1peu3f%2BWIDPvlXo5rjotFRTwyxNKcmAZcqYerEHwUTBADccu7o9RX4bgHM3nUMaua8X%2BhyNuYvN4j1JuK7oWREuhGV4RgCiZ2jyAn8p8gsRjoZpTCXZrceG2DAo5nCBhAG3daYTaCrLLsGe9Nccm7BQ7FAOUUql1dz8w8YN8XdPFnpnYbSaIwhoZZ2Z6MO0CKuBXjeGyWnAdhR0gFgnSecjT0kJlWoRMabNNCYHJGF0BaDf6xC8Kjj4PEDpaXbmcRdZG3pCnPtDAaYarSJ5OtTKA8mcvigZq%2FF7WzxQnwM%2BDIDfwUeKLzfzLNV4A5SpXwt%2F6i%2F03f2cjE4%2BAAn%2BhoHoM3bNti3PPXfLJ1pCKQYeo%2FWKUxB2ZPF8HDTDhJTyf59%2FzKTeH3%2FwuqMtdOcY%2B%2FwJKcsYFK8TY3L1F7GpWOnE7koNnX4zNUVk%2BfL2ozc%2BFVXFldA%2BQX2DiS%2Flw9qYEqZtlLxIQBCP%2BrLHxqI4yq5OuFQCN7ltR4z5ypDDqJBlBPfdQtaqjNkpkUK6b9AxZZao9Kwk7%2Bt1Pb5FEK%2BrjT%2F0RDXuAnULqrmTjGivI0bNu%2BB%2Fq%2B65R2vFY2F%2Fgo2%2BlzhDXiC5EgPpZG4MMfblcAGOqUBdMPmrY0Qhlz4Euu7S%2FwM0hhDtayjJKbF3SCuUjA1S28XQ8uKkuvKEbEV8gH7ibUn7Rt0dQnih16PNbeOU2WUMHYTA7ATssXo1XAtAbS9cmBOR0%2FrXz1C8JLm5uimB6o8Efc7xj6H92hMf9e4m%2FWkIR12oVn7LU7iXkqaFG4ysdKAyNwHaYJ%2FM1AF9u11na%2BbHcyn5Rmhwd%2B3Q9TO2lEos9fdKthM&X-Amz-Signature=3358c55acf1cd38dc096c460d9d20f99ed6fcb2f67138fd2789a6043b0804abd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VQ6APX%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDfajN27vmdAQVRFHCuMFBRVgDdRdoePYCj2cv9VQX%2FKgIgLKBRN9r63g5WKWl9u5pMbU%2FxCNqFqmI9%2BO%2Bb5Iu%2BD94qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMmx9Sfj4H%2F%2FS39ryrcA8BHpzDUKvd51uvfNO3esdjhUdkh2TUOe%2B5bkc3wTOmTCNFiTDjcUxfTjNhdwYPoSV2OfHGF01etl0o7Y2NE5bLJIR94pwXpStKhpBnTsG7sAMRUFVBUWw8Zb8Ng6C5JzTVfOQysBydEy%2Bfaw4I51SpEw3DOFR2YHLssUtx8p4ScmVT4B7oAr1vr5db3Icq6han8Vp7qD9Xr%2FZfZZhv8gW3XZkAyc2X6itB5kqKD4BbGLEE5ZR384CZsrVkQxUDTgKQLt8ZX0HzJ%2FMDXX9q%2BnfvxpQVs8kGUWasbZolh%2BAcoWdOAM4SWwfPeDJ0WO%2FtgSHsvuwm%2F7Pf%2F3YQfDNrbzuJRPHwKjbpC2zw906J%2BlrvEJg9rQoyQMVXtFwfvr8PVcsPSns7OTTFZIlA7pJlaW4%2Bc8CE8q4zVdyZn2D5a5l1qtu8%2BRwFbWDmAda7CUWYJ8TmwZEFOLtaRI6YC8pYc%2FLGhYVjHeyAVhLX9Ci8TdeGIYsrxFN7u%2Fv3kDS%2FKZsQ2ub0gv71ZIV6I5mLq7f1E1FZkErgbwBQBDfnjZWgGF%2B%2BSMK%2Bxg9XOs4Y%2FsccOm26leFvA6KDailA4tOaFczrYa2hu8HrW4NWZ8OKi6lgtiERH1J273DVS9UqciY9IMLjblcAGOqUBGtiAEdjrIUyHbrRwLY9hCNTrleL%2B5u9g%2Fw%2BkK40JWw9Nr4pZmgDxFkTbUarv%2BVHAwVfDxV6rKdgkY6MZVuDmmwT7toOoAZWVxRJ6al3ijgl5re4U3FiwtHh4iysVHDLGlGIWSrrz5b3LccOI3EevK9Bfkrc4frQmPgJkZav2nk92wPlg8SX48TaxxNPwjwNL5E4ptN%2BvLmZ3Y2Gdk35MbycinXhf&X-Amz-Signature=b18bbfe5b0c482cfb641e3b21f024126656fe6f24d3765a66a0c6bb4e0753b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

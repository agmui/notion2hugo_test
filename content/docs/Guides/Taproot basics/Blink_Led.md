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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6VYHUW%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrHEUIOPnUv0tNa%2BSXHFFX14fi%2FMemmo6xFb391Qb%2FAgIgYuA2x5%2FR9ovJ7JEBvQGmgkPICT3NOlj8DMkvHXAwf58qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5zyj6VeV%2BTRYE9zCrcAxFMTeGdL9p1Gjoc7JPfsp1WdSvSFm82O3xhWd65DVBpaj9IVMFbAZNXj3vRf3rEp%2FQF4HROFN8cX0c%2BFQnOn3FK7KR6HpsCg28JciUw9Tg5Vgt%2F9jHfmRgzywysM080HMgYqf69WPPuvs9LmabszaBUcAlQgIsXON47PauHCTYnw2zKU5%2Bnmx8cPKyGdipF%2BRyhIml4Ch5tFnZTB9t12IxawQhoJ2l4oHBQ5LyqXHVL0MaJlcsKz9VfovMaL3mIkx%2BqxXaxhEgijcJcTc91qGDvEF%2FbBIqDaL3Nz12TGpOnmFJkPlDtpKVzbsBdbsqKyX3EN725k4mDevGDEuGkay7RcNRhwzViU9Q6Plo9kgdTk876493w96qwYWeQLpoAwz%2BfdWoDqjk3zihFt5mDbxlS84yCBX8tnWtN%2FGRbv6GH%2FoHHYGuNkUv0%2Fp8A5%2FtOeNTKHKXBDWlENZ5NaewXKZO1OsrOjBiF4fuHOa3V05b%2FUl%2B7zAWuesH0ETje6IJStHzL%2BIMKHsRJp4chx7tY0WhAIKl6dkZ12q%2BmmXI1kIioVTxT10YMM%2BIIr3NbA95YjBVYUwmD%2Fbv3gCAOkV4kVhRvAw9F6FNtH54kKmXBBbPXhbyJsgBFwUlcmZHdMKr008IGOqUB4elhr96DrVetYN1jxrn1tB4ftTLC3EBsaH%2Fy6kfw97arr0IeyjtXgXgrDHlAXOp8BeMKZ4qtWa3ts5zWFy3iYWNe06CaDA%2FV%2BANw8YinxmReOYvX4uSyPe6%2B2YC6I6FUIme%2BDp8mKvrcHXYU3PDME7HK4d2YN1Gp9tZ%2FlvGKwfDLfCkS2qJ5epmh7vbU1DdFTU5%2FxVMLnnF2VQ14VRWyU92zxpd5&X-Amz-Signature=6bfa63cbb283ac9305ecdacafc1858c5e543b8c4a3bf8261189695652dd642e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUCIQNOC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyeG39xTKG4N90dyS0uWV99hczLEM58fxeMeXehezU0AIgXdy2Gcl7li25I%2B2JXhybQZM7oz63rZL5ZrSeAsGodtIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1gag0G%2Bn2ba32ZDCrcA%2BqA%2BHtZczKrmhS0QGkkVtCCcdCMhAGLglYwBHvwegk0kvHzZUSJ9sAud9a542yJ0dObRWd0932yXGZHoT7%2FoauF2XTmvq7z2pQiQ%2FIU1KAXK9%2FAVNkkdg%2F19NmycD9pA%2B8wK69n6UAWVoOIzaUqBfjrJXcPybF%2Fb1G8nW9YnFQWdrOONAzmiYNW6W2YgIWPo6lSLdBAyQJOpU58u3apmlqhZqHlVQA8O1KKXXfKPQyNBd0kkoP7IfJBg0pddI2uS1jSoeEwy%2FR78aNSONmuzZD%2FyDSdl5qD%2BeJDaAX0%2BtIh7pOJzhoeqtoxKodVi90VWQtK9gyRUS79u1Y8Vb%2B%2Be0dCuFWWZhF0raoKSmBO6TZK1ZgqQe7p7tG%2Bf%2FApyPF8jxyKz9wf%2BcHbNkxvffoZG8kUo6NzkAF3ahMGRVilT9IBExVNE9cinGtX%2Bqh0jnA7rp9fYwzPOTc0wyczmJ7Xzf4Qk7FvPvaWLTmsH4127uPr0KpSmQLpKTsxoDljPIUO0cL9GrPknbdbNmfXbEDCoJReOBEAfQ4r%2BUQ9gkA828%2FwzH0pQejdsEhqmJFpLoAXpk3Q7oXn9T3uVejdG0nym3HmTdzm1LwOHNGctPYO7YVJ504%2BfCWif%2FW9xZPFMPa808IGOqUBlaErFluaCT%2F99VDN4WrSqwEsi5dc8rh08jbFjsQCjZurjuQtU60vdL0%2FHZLYQI%2F%2B%2BoAKDVkVqWW6Bg9G2AppArLdEVNDPvQM7PVXSwzRshgJ8BMhVSjvjoeID%2FyX5%2B3owxYG47R1pVrYvUoTg3QxF6y0pEvrBVdh5aAFgfU%2B3yyGNiGjv2%2BSXkKZMUz2A6bv27%2FMX8jvujTj%2FQ3Al7kNDA58X95y&X-Amz-Signature=92716960c9fb79e5baabc682dae36ece1706b0a19a5057dac213b719040cd946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

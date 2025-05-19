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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GE7NDLR%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4NBrRl%2FEiKjU37%2BV3%2BRU3fImin9IXuVe3OqDz0O1OLAiEA%2FxkY5y5B2OwPF0OXSM9lBBOeqC1B7oBJIz8zaGftzxcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3hNfXd%2BpcSIU69CCrcA5mLEXJPba%2BBonrgSv9reBcxINZNngDfe6PnsUatI07vYS3PuY%2Fqtww%2BdN4f2PbsLo2CehKrY2hkk6q4Kox%2FL8ANyDEjBOJTQR3%2Ffu5UWEflpbdHacZuzjcHoFmp%2Bv%2BaawJt5DyLFfgFkwDgPDUrU2AEkln10Fm6E9DawbSl%2F%2FI%2BRiFXYMCVgHobGqrVt9PISPIHdh8K%2BNSmqe4fd1Fxt15vuBkfjhQk6QcgMejYNSOfDO8im52RKbgAH4DndmEHhjx02J%2B3Rpj1aNu4Q7%2BdNhV8mHbTu%2FouEFkuwYrrRRyFSJvP6s0W6XCSkHsNJXypiCVRKYxUEApn4Svg7ykMDFWemFLj9sdNst2w6zRx%2Fcfkpj%2FjbElU7nqN33Iuc3k5rBfuas0qms3Gv3lRRCNQXTVuIfnHOk4i12jl%2FWzoMYeiygOS6wC59%2BM4FVohFN%2B3GgrUTd5Sdt0%2BCZSIYIO%2Bg%2FjvmHz7V7tUIz3WRHGpA1jydgeYJL5%2FBq2NLQn6Is7KDEdMIgzgVU%2BPhE6i01EkxMU%2BMtXw23CT%2FS5lCG87%2FOCMZhvpMePNgBFs6BDOR7JJwJrrlDakqxBlVq80mscz4Br8vWjprmmasi0Avn8jArxoCE6uLxlNkmrNgWruMIrtqcEGOqUBREoY2hSLABJZYnqF3nxFWkiZeEakbmOYEhCqyT0wTrVDGR60MKhft84fGH7lkgUu3ewQvyrKIQSInQFL8Xn4cSQf5HP4VBw6Kdv2IjWdRmgZqBuVJp8lZ3Gxk9Gew1qWsMZA6cNUBy%2FACt61ZqKaYXEXTl5BIvf8xGpvSlXx%2BSsOdJlxrS3eKIEpHIcJXJufObz88nlbdbahZe9zVEKKLVJzOBVk&X-Amz-Signature=bc3e411a82b41e3aba0f0ab923f164411812350b01c0cacbd3ceb6032c140cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT4NN7RZ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXEyMvOWiqIx7d7SZlCqXPqr4oDSLp0VcRKC12GifVkAiEAz3Y7scFV7KAEp9HMPzwInylrn8NY0uzEUSIR3bcObv8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmClhvc844VK1ptyCrcA6xIjpyRRHVaKMi%2B8dOekl9WwkDWwYSwWULoP%2BGKTvX%2B9bl8FqUBEBcQQkY0%2Bp9PYZj1iseCIirWpmLHRft0RI1iU9eMHfgweLcfJIlWaZ%2FZbnDJRwRdtcL46d16u1EkI%2Bm4ZQsVtH9Bo4j%2FyS2iB1m7W4GvcPAKxolbrxyEXv3ebMcNEGPpW5j89TRpyC4wVrR76Vuto90g%2BAwfAM8xQt%2BVTWlsn0cdy1G1Ii%2FhgxHJFguuaM3h0XHmnBxCBKYun%2FdM4HX08z6BNHbT4dGZL7BgUxlUdLy5xqytMvUkFHfX7RQTzeKL%2BsAdkZL6YycdHxf8MyLpdGX8dHs0hTnuvmujHELKeemhhK2X5PQZDvzoD7N0H9hcdZw6nGNSBOIxoXkUbi4oUcfvUltz5hQjpvnE6j%2BrQUZm1RxgAjORUb%2BGJo1D5fXDj%2FY9U0WSZYogzQcNZMHxLissGLZc3%2F3%2FnPZR5dHI1GUvLIGEx7%2F5SUnqDri1zHR%2Fazix5QS0T4g8nFR%2Fvj9%2BG7ugIGzGKaJi%2BzUeDrch5p%2BsnSglAVr%2Fi7KLMelxmHG5pFnRDneA13ZaGjtxvzYWI88ZVFv%2BFaDbtW2pdTysjTdsIreh2xSCRM0DB9HBakb0a2gWfCbnMJrsqcEGOqUBdtKQR9KrLAnikdlYtAUcIyKP1SieAiiDUw0jwFefiDHXlOCAGviwxl5dwU3SbteaUSE%2FvF3u9fDb56ql5Wi0qAqe0J324sABP4zALdOLhD9A%2B51QVN0ren%2BAV09gkRj7MDv8RxO2ZF7cwU0pXYiOdW9xqgoF9IIyrSjLB3gKxm5gb385WiSZty6bW0XcAax3keYmH2ArFIKQPTNKWI3RrC0mA0Ml&X-Amz-Signature=f71073fff1740fc704b090493b2e398bb2d4a1c5e7d8856c61cb492353635394&X-Amz-SignedHeaders=host&x-id=GetObject)

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

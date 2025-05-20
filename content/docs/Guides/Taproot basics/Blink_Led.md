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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE2BCB7H%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqC52uGn4AUSjaDsu9TBxdFvMfYByzLgua%2FglJ5Odm8AiEAj6ytbUhYGABoGwGwvMRXWzFv3s8vEikrbMT8aXFyIcgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLfnjj2v%2BFyT1s1AircA7ISYAbJM2AXoWZSBt%2BChN0dpQ%2BU3DJAUqrXzh0VXZzMeZNsN%2B9x1kB3rBhkQrWWp7LGdc122zjZQeS5zaa1sOmOK3qXfm7HrJs7L9YO597rZWSF2rdq4Fp8yrES2pbupsw0fpONu33VT7WvsQ46BC8Cj8pBNzHzMtFn9uL5vlRSrJQ0axHgFdTpxGQ5x0nRMHRDi%2FM4Ai5FFg8scoffTLFbEoRWnmGN2lOX%2BvbqoLNYlSHoCjk1du%2FKIM%2FdlSPels0NmXDdSEWE%2FAAYBLSRUWP%2FwnhRTDETUvTATbu6T83Iocxq6LcWXH1bsKYpDOmSdVfLTAKxU37t6fQLkO64XIxc5pFd2QqKcADEa%2F%2FsJA6LkcBrIRuQ%2BTI%2BKJGIlevPJ0PJcq3NRGwqa%2FIzI%2BO3SAT%2F7%2Ft2VNdiBnKNudmaGlEMip8ez%2FlQ%2B9WtjE2lSeUrgGcGyVPvoq2xVH9j%2Bp%2F5QT6l1W1SkdTjdzX19qXUdiEwK2vDmOKEbtLMiV9gn5VtviQzcQ3dD11JpQ8ss%2FahKaZFtP3s%2FDlrnNsCQJrP2RIM5EErCgmT1wsVXTLAvRV0%2BuhEvtGAEkBC3PCtSGkjwlgRP3poo4Ypy13pSsQic58e69c14CslrsWxf4%2FoMOb6r8EGOqUBh3Fuxb2zmccLsSmQXTAAay%2BBHm1cX6wUh%2BVeyFVoSZShv591bqoxBP1Qr7bcY7hLNKabMhnTGe4%2BfimoxiBTXivVt9YUYNUB8yfnH0pE%2Fbymr1UyG9v8SvUIcL05yq9vQfa8Kx2jqr44j1I3xD7vAppmNIoNkb6LaUBeFoWXZfUzxRq63JEYS8kIG8LP6u5tipAC1S%2F374sq1fl4ZYq%2F33rSqFxE&X-Amz-Signature=954f5d2d4cbdb9d7761ae93cf49ae44af1c5cc294200de4530d1ba3085270d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC4Q7KMW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF2asT9hN5mLkd09fotVFZA15Fxl7tYz%2F7JtZJsJId%2FQIhAN%2Bzf0KpozjnSI8DxWhZ1yBgcrIrojqKU7p8eiQU%2FnjZKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc9M8mPIqocQ2PjA8q3ANrRQRv6QTK7AJ0zJzzxYvOlHqf2GtFjRNIzHZl9GR%2FoIyJ22hv48wRjF4O1x0Yz6dw4GC9vYt96IVTgAgf3qcs6%2FMe0ipxZws%2BTuh%2FZQDHL%2FNVE7oIRXuO1e8%2B%2FpT9rpt9xXWqfY3Xck3tsTpAINmdjSqClvuSOyFreeqRWAZRX1OmUdOa7I4sBmqJagAY%2F6pzHJYTUnei3%2F1OWiYeytskAlPguIfLFCdLvs1y1fHdvsVtZ7Z5lWxd6bRcXjJ0mnqOFmvkz3OhcnohQlQ8waAL2uBTtbrlW8HxmpeLeSiKmhan2eCUPMTEN%2BVlxRL7UgVPOLnFBFNgZJj0aArtEeYDyyvrO7SGyFKurxRhgCqehlBNxifGpBgL1yU9V7dTiwcN6IQxRPDVo1cnCy3ZZ%2FQcfci5CBFyi6Md7U4%2BTIJaZ4fDBZ7BwqjfVv1%2Fs2Gy3QkmOPPsFgFFK3w5dTfoG3NAJW%2F0bYdT6lEJePE64MU8GPrrQfMYa5yuN4pE0g6aOfnq403i1BOENcelPsWWLhyg5abD368w5UJ2sx4BE1Hgt%2FiqasU5FFn0l6Ivhfv7UScsgoarehNorKqNyU7ibvDjpU605YX%2FzVDUZYBG15Q7Whwit2Rar7x6SZ4rTjDD%2Bq%2FBBjqkAXornBi4zcSmCPa%2FDWEz%2BK1mXhQSyhfKQeMzUwtKSz3dpkSBIBd2v339dLY031gw4V9SWS79db4een049nRVylCw1ChMDxL7mznZX%2FEakLvld6lGik55YBNfd1fHrq9Dezmzrkp5A%2Fg%2B3Lm9NIMO%2B2aSViDmnbQDNNTx5VyNHaizI151%2BaZGdL4czi8jzkQTs6PX%2F6AMz86FtoAEs9EfjRR7JXcQ&X-Amz-Signature=aaacf5bfb40409a0a3f6c7a0d5c848aee51917a50d42cbb7c363a1a6e487e212&X-Amz-SignedHeaders=host&x-id=GetObject)

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

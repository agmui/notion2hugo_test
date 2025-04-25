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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPTYREHD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzda3kbSwXLszpN97hu9jOuEMBwtvqRAZIVrfZz%2FH5EAiEA8vkd8FLeLY%2BwwG9%2F7Fv7Z%2BZeU%2Bz%2FpQnzmsLu1YTH2bYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFGANm9k9x9J8b9UASrcA6hUpG3dBAIbRaNHrSkyhpuVc6Vm%2B2TnGmeQDAA4UkWciJxNXrNSVQ6qUdic3tKDCNAHYsFiwHLKeg02Ln3cE0VaXNlTMeSLYrIPtWP9lIGWdOvVdMDC9d6kfusXcpysktpJ7EpPA8f9xas6vyPW9kZM5qHzLPncy6rvnnDE%2FRFU%2FsY098k0qq9eISSeamI553kqyYp6Oc5yRI2kUgpZNfrLs1U9ZdR4P5VI5K9N%2BQnS9xswkdbHAVUofzSO1EtVi0Onut9F7ZLnNQD0UNlsVexaNzkKMuxgTL%2BV01OEWfSX6%2BLSCQYhumVGUFBG%2FS6lnSwmL6xdgdeZuiBREidr9NUNQ62nuYVxNG0m9t6hqdtIqAJp5uOVgxiXalzVRJjCM6BqjXabZqAEAKVN7sO30ySitGa2QAEIpJh4wZiKp7EIN5XVlGoyuBBrc61Rdatzb2XIjEoFPeioUN1BWJzorrZKNFl3vGTZXkQ0GeghlEg4SExGio3nBrtqlQQUBGAwNszk6TGrsk%2BrDnlRw%2FZB5P3v0MWr9clV4pUvRC0H%2B%2BfX8p9SygPUAg3%2Bq0NDd%2F7wqd8aBGLcgQuv4Z%2FMxwyvTjGa2lawwktUVhzxE2a%2Btlanj9TJoqWnijylvy6dMOCcrcAGOqUB3WCPHIcpbWkKufRrEfpNZVoyE6ZUj1xc7ImA41n6Kh6jqSyKIj5%2BAFSPILcri%2FbJVFvbJREiR%2BfUQmOSOSUyV%2FCb7M6rfp1sCNUTuwqFrW%2F935eDJpy%2FCvv76BQCg4aSS8c8NFlSOnwWFPoCr2m2JUb%2BWb0wet5uVxQMtApmvMy8Tz92mbl9zSny9H%2B1PXDviuMh5A%2BOWBP1CcVu9hqFE7VN7wQ5&X-Amz-Signature=9f47b6a4a0510230399f8e65442b90e57c7caa47d3619f1e7aa9a5a1378cbdb7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYZ5I4XM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbzoVbGUjVEy2vOPc%2BmQNBIGaKCflSdLfojL2tLsZd1AIgPG2Afj6bJQp0IbsAkYUCLaGH2sbuGqBfvCWrGzHoRf8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIzYU7W8TmUrK3d95yrcA1dec%2F5jZugHrYSiU8kdzp0X0ybThzRQAiJd3ed7s7dW628YKEjLiubUCjSn43dYP0CEfdFEl439d6Qdx%2FH0WTzCp73Bx6dm5GHuJEMFfgcziskCLuww%2F619VVm966%2F2ZMLPGlwT8ocjAFTb%2B64kHkIyb%2BVlhsfAC72T%2F8Abqc4V8%2F5urEpK0HhJjs%2FmTQjbFCXd%2BM6znl9rY66eKLTsZ2Ia4tJaNnV4N%2FUtMLmBaYfy0enNiREipPZtc1fsAl%2Fp9M6M%2F1WoRmVLdDmpaGQpUrTMlB1EA5vnC2D3WKqyTJ9jtqALDBExAelVpi0HKt3G2tqUJ2kf6cbbLrL%2BnuyZEXNFG4%2B28JTt8b%2BIkE8BPlvtxJzZQ8a3AG0WvrtMna%2FpESKfvE0KWtEvR0qm%2F6tP6DAZADEAwwYlVmqoSNBkVlaFfwtcvlNNiqwKeIs1bnjRFPacsHqNnQummdcAYE6PRUo7VcSVGLT4VlklpjqcSArnmcKLh0UY1tgk9I3SFa1bJIFw1L76jBKPWgkO%2FD%2FkXnn8pZLkHvxGA4Y0MCPqzgjuw4WHnusNUSwrBgVHA0xK4DyQeQUP9O1rzCk996QDi2de6bTy7GmbxAUHyC4%2BLZTXP4Ww68xkVMmlZdXYMMqbrcAGOqUBFfEAqGpOnqaOfzUz8XJ7RkTy80mxX0tfRBJKOik4ulUi%2B5Is2oQPqrBtQwnaTq8bQXk0rbAlfnG26vZmXXzTlFiiDFMHVl5dRwLiGzQKYMjuyZhH8lTZFD8wXtxys%2B0vSaRFrVlw0MlZbNGHskptRkRGsuXcfZq2R8jFMR69TH5UYAzz2N6hxesXGH%2B2Ppj5x2WGWNleNSQmeZGyz69f1bxyekY3&X-Amz-Signature=597f21736af0ae9f984ab757aeda29f316e194733cff5c972fe45810c473a68b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

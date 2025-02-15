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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOJ3ISL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIE4RwQsh6aoPJT16ruz4sg51n8UrFKzkjjC37K5c%2BjN8AiEA0MqZIQF0EQegTlHx2uBF4cDTpYdpo43KqMrUXeyA9%2B4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDBgD4CcFMkwSZXRwSrcA8wd4792w%2FJP5P94P%2B0272EdsCKJIKa%2BIlSzAMduNgcg4nMraDzBvV0oWzD8qoyw8NbdCdYcJoYuZj4K07pvd7OXi%2BUQLoqbKZDcnzan82%2FGc%2B4NGwJD3rNdDcq%2BjGHgumEs9asQZeoy%2FW7mXuO4tVn8Rmfs8yQqKJXZoUHXmYGS8wXy98uX62BufWx8id3HRSrXI7yS9mwA8XSdxaH%2FCqlPGD%2FQrPHExnBfNrqBXb4AF0QPA8HlXE7lT5DkQ6VchM3dVFZ8ysl9t0TG3ugdz5a%2B636Q2RO50G2FPqmrrUKgSZ9fBBgQdWTSldqkPtq1zSoqLZk7CUQQAJaBzJkwNxRGs7rApcRZi1dA4LGI3Kzw4%2B1YwqojDiIMzjWNOPcm%2F7f1utCX0KrcpAEOgedJ7TlF7EwlHhfOL0n0sVx1pglD3TYI79gDfLfbh4gDKqOWqATFHc5tpVTfj4zf0rgz2gD27md3ofccNo%2Fyy8mRWYjPXe%2BGtr9kfzRc2WvHB19%2Bu3dZK2QYcQTLHENl%2BzQSxixiFLjyzsBSc2V8uliLrwz0Q%2FsYmzOGQzJkFXf1sglke6Wej9a3iYfbqsQq8djgRhpvXXRVBi%2B43qGoKg3exUWnbmNuaOPslhTpxoU1MOvMwL0GOqUBuzlxc6XO3DaPGWr%2BCM18AFZwYg9giP1TGrgodrJFhhOoFdWffmQROB0BKPylVkMe97IqHFgt%2BQMtCqldfzPcJsFpTegpb9egVmDzk6nW3HrvvSeY0%2FpOaDuSMSYRDgoh94dpFPMvij5fjdB0BMULIRe2SroHDMGW89mV6BwviIZ6%2F%2BM2SG2c6beANogfBRIyEeVYiyL9vP0DIMHNgZ7llDPoSLOJ&X-Amz-Signature=44c742578853bededd9a42773f7d24ff2563cc6db30e2a5431cfcd70130fcb64&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KTKATV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCID8NLY4U0mA4Xze%2FjwrcgH082qjJUZOdeRFyg6cni8yIAiEAt1vhukKoVargKFp8eTiT%2Fcal3xe%2FuHDwit16IuJKBdIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEpqXD47%2FLhdRObvoircA1xvbN6iO724Dcm8v3siz3YPGTqco9jSvAOIlK%2BbYydgm9KkgftATlvgnNgirhWElVHYNM2EgLvl3MDGArZznJyi6SxOYSNB3gZtPxrXl2ABHk0VlI75AwATQI5mYy2h9x0t6SR%2Bq0hHx9E%2Bit9NY71jjGBCmcxQJDQ1r8PU9JBHlmWYoJB87wl15iMj96tk78UIhWB2rlhqpX5vG9Fd8sK7o%2Be%2FxlzlrFNkbtntjPQTAKFdBc%2FzOiBkyHzjgMULNrj7NJ2snAOJgd3XZt5B8RAEBtgpkMSCZ4FmqI5%2FbS745pSlWmadkiuLiByQOb2A7rvmtYOZUjAr56MgFpVZaWuYjCslcEGpjNBZXVj2nn4Au60cdhL82%2FxAyiSHQ12XUmkqLk4I08RRqkfCzh0s%2FxQjweNbuCIKaHx96SnaXOAIR3qitA3lAJtmzZaFIa0Qe9Qmr2629FYHqw0OSOlK1pdcUxSnkAhlKjzL84FcGLE28QWvxmsC%2BHU%2B2rNTUENmouG30H8NngusBejOsVRzIVYf8nQccfuqVNNDxDQ8%2B7qH2pn9G7Lz8Tv8Y41gZ74RBzDsuMKvo%2FhyowVLGYlH4hXXYjAvJY3Xc%2BBwe33V6%2BVHZV8q0xzcYxiJTzKUMOzMwL0GOqUB0Fl2%2BBtqJTbDo4gGyETq0kuNwYT3LKk4%2B51JvLSlFI55w4DX29kQ%2FLu13RIwIR8TKV%2FAeWOwgaQQGXoOzXDoE5Yh5pX0vezraa7hJTN8yuPkapPqf44afMlSxraZa4gXsZ5y108yEgZwdihrQDUM3PUfRbILCLd5ERVw%2B%2FC72YqK7dm68cRnz%2BiF7RPAXBogS%2Fzm5X7UBtUgEFek4dJrB3wa9odH&X-Amz-Signature=ea18d0fac15315a743de6aa832ef73f527b6bdc927e7df5b27537392aedb8527&X-Amz-SignedHeaders=host&x-id=GetObject)

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

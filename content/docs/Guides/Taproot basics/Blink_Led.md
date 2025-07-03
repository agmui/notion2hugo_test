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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HB6P4JN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCzZZGeIJPSlLqWuul3nh%2B7icydDUWCPaikgmVMwnQxnwIhAPDFkLGo8uV%2B35ogFTnOmVnUm1ENFtRoZhytoEpheb4IKv8DCBUQABoMNjM3NDIzMTgzODA1IgwPYrmJaIyPSnL9V9oq3APNdwktZM1yu2IIg49%2B%2B0ZgVDTU9OIv3ekUg7mINxhuCbTX0DRUylI2MbjDGqGG%2FbHZ9QvnSAcqF58dHpUySjSWufOayqd06WKK9JPykNdYTz8oy22fR%2FXwr5Py5YM3QrY8B2JcsCpyznGn7vUL6DLAHF1%2BNa7Twyi8aAZkp22pTBXoKen5BmD%2BPvkU%2FS2oMAjUGLmHfoCcXlyhN%2FlYee%2Fg1KtFv80y%2FPgq2n3nPXkrZ6fDci9kJMt4JJsgHiCbj44FqirOkw0bnXalm2mx%2FrWEF63fClEEN%2F9fCbYhRXIxzchCIB2s4a0vHdlq1akNCKpWqhX%2BxoRw0xl%2ByocgGP3yraUhiDgg107LUwLVUdhFKtmbcri0Hnz9gxgdLuFl1RlJtvumRSWqUg0u28uGmfoVuw%2Bte6dsQwYr%2BTeol0qmnCWDUScelFXLqMWfc5vDwLd5dX8Im6fcztWHAbLjTP9zdhH7zqRGX9wSkocRlAtZAuT%2F4QCZkbXtlzcFKnjZ4FIv49JkgB0GSug5rmDidgRX9QnT01EXKlrwUGZpNY8BX%2F41z%2FSt2ZPBi6CJ8dY49cetVxx%2BBOS%2BPyo83LKLkA%2FXO6LltLOj6ry%2BGYerpALM0hWTEWDO3s3La20RSzCz4pnDBjqkAZRAgLhFNRqvKsG6Sn82Pwydx1blpsVZsTT9WDa9Lxl5hr6nexQUzHooY2yWJNO%2BNlbHGyM8AAyWV%2FnETHCDRataVYReBULyIgIog815595%2F3Rv06MhipVp2z0cXHPGjBkBMDKiJqkju9z0uAZF1mWRn2XHohNMWaCPK8shN%2BQHJUkJB0U9Gc2%2BRlbIDLwhwR7pssYRki2ZlWk6TkWcpRoRBz55H&X-Amz-Signature=ff8c1cbca0180ed6ec11a97c33d38f8f4af3e3507deee5d22b69f79ce8248749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36VXO7M%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFpDEQWWNhQ6MS7wvHK1mY34JvEpnihfdg7yTjbEduFzAiAK9jCg7K95qLkP90IK1dyfzTpfjm%2FteJyslPIEdYZn7Cr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMsK0xo9SIBrgkrtgOKtwD1Vl03aiq3LLwwImyRBv9VsKvZd%2Fz3s7nwFVNG5jQ92lYsu5Lvf0MBm7oLhVbLWj3Cl0xQUGI5liQoNsbssZ62L9Mw9Zv4kNwFN184PHaNcJKC9%2BA1lyS%2Bpa2w0KV2WE5mOwaTnSocSotpnG2cjmLRobymy0u3M18A2D9B4Z57HZhuXfyQeeSmBOf%2FC7SklKb1mY5M1ygpqKqXnV6oyimSlGF%2BxTe3fhfCNA2qSiRTcDOxhIRSGS13gbCjkMmyYsEmENEtL%2BbnhcZXILOGRLEOx4Pk9DYNVyPjFG%2FiZSAD221TJcXOJpjeE1NJ1tLnSHOQoRleHri9O7zGJVsZIRglm6Cq8JOFCVEDieTtbZPw%2F%2FKiuOejM94IO0p41ME3JvlHV6EstSFiLrnTZj%2ForGxg%2FVyuAd1acuZdeaTZ0aEuqVcxYlDnuqLe6A6r9MnrhWMhATaZdbEAX6t2cGOABGZqMIHANIC%2B%2FcdsKmXfuTDKXA%2FDMwZZ7mp9jTiLazcH8QRd%2BFl8o4%2FFVV0idUhQ0B5l16XFkWS%2FSO7IZkY%2B7VrOUYxlwZ%2BzBwg16rKNCH5%2FwPvj7piPUFC5ZDnB2klKMlOhgOEwJ4dHwdfBVJ5OWJvXOo3QxBU1C%2FMMK08yYMw5eGZwwY6pgHIjz9g%2Bki80FWNtJqxsHR3q%2BewMymLmd5x4QMc%2F9Se5WtUwLYoyW6EzubD8F5oKkRJjsTi34zcNRd17eWDOEO3ujJ3wC%2B6E2kaBtFBQr0zChUVVNMl9a47m2XUSbMq2cLj4g%2FHvm%2FYw0Hq7SsT5xs%2B9wGTqm1OwoqAiElYGUgJfGPlLs5%2BLoslsK0DR%2F%2FvQyr3QUqhigRLJlmYZfY7pTnkuwbFDyi6&X-Amz-Signature=ec9fda0a1a9b333fb30a0782468c62255b21b179fe796f34e97828b017a6e578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

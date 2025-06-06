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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y7PI3WZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1Fws6kixb6oBejmxGEkR3M8IXWqhlqAcmsNRGIOqBLAiAXgFU3rUXaZEtOii2eg%2ByODDDvmt20nk3koRkyEg%2BBYCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM9lYzQvtUi6uR076EKtwDqJfPEejhI9mrhDH63TiSq7KReOeiLIvgDqvyt6tTb%2FgVI%2B6Ft0owWwMwM3Qli2Lui%2B8J0XyCcuU3MxOujm3pkJEor%2B58qV9UmBR9r9c8u2r8xmh4%2BOPE6a8s6WnzRBxY8U358k5aCq4g9q1XGO4txYrDQJoXflGWVtMGEiOda09G7d8KY3usW56MFbdt0BrHsUc1Lo8NucllJKEH7gKVTP4EHhtJC4%2BQw3PjZpCMAwhIsYlfeqsvlqaeZ7a3BQed8QSsYpJrizzs56uBIPAe8GIhz91nIAhBVNQ8QtkKCLo%2FGiGHGA1GEDYgf3BE7Mqf0hO1zBMtjbpHrdES1gkc3gSkk7eCmomlNKm1GJkW6ecsy7DET7TU4izgeHdfeuAz295LaVVgNQ5QELW3RIPlNW3lDlcWVDS33a3r0xCJ3uZbU%2BqRqJxxmv6mppVl8tYZEtzXtoQppEv%2FLSEYRfjK4bca2sNIDvA34BnreUYwWCQu7uSl1O0fl5OcuVEafrOlG6wC6oipfuEDzniSM8kkm9IyyHinl2C0qZhrc3Q3%2FGuBZV1NcpjULfAA8fnhJDr%2B4pfmMST6MQRvx7F6MyefAtaAsf%2Buj7nKIQgEx4sSvKpzDcpppR%2BTsJIoQVQw%2B66LwgY6pgGKwj7JHio4KLr8Jp0RY56iBcGI%2FQJq4McwsLGHsSYTfIaW1rj%2F9sXFRKI%2FeCAmp6EzeKvfFpW01jvso0hbJ4loC8gb4Ytckh3Hc8NLEAn2vlTZs74nTc3IlsL47K%2Bk01DUI5ZL9XrPq1VV%2FWaICt5IltDKtxXcJKNkgq6K5jQueE54cRIuzTC6UYOKc1bw44bA3ZI92VmtRhwJsZDjFfjEcDBWi1YE&X-Amz-Signature=f4e606cb2a7e6a5caf2132bae1aafcb791164b321901ee209e7d049cdc3e9d78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMS3NBY7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeUOGoB36pzlSqUErZdXHxrJ1Jyx9joPdeH1fx9SkpwAIhAKIJJp%2FR0WMsq8ji90zWwHvWdgq4UrAOxDeFZkNs85T4Kv8DCFwQABoMNjM3NDIzMTgzODA1Igy5RWmDF0T6lntbt5Iq3AMFAd0loh1XFtriDGqGZL40ZDK8j1OJgsahjGeoI2s7%2Fa2riYPberQBKoAF7zV8k%2FcyWsTV0hUGwjzrKtVdcu0N6LShZ19vq7GhXSWcghp1A6HdwI%2FZQrTGx06aS%2BTyLRf%2BVwQcDz1am%2BPv%2FiNwiU61gKSUV2IkANLS0nrTzapCGPqvQL%2B%2BL0mzcS1jBHw4SBziOHTqDKDGNxBsfmBtSZKpeNET3rNMb4xN45S7mX4rwWTj2CA5rGrvJT1LAnKiPBucgN5yELoXTPPTOGwKrhPhGVD7miHmIcNNnxCsYBHIueDjrsc%2BUqzFRLqoj5EAbY2kRQYhx%2F6NpsGaTyKg0rtJaGX%2BVeiwnrHOAJKpRHg%2FNe4j8hTspR96puHJFUOg0hqSKDcXFjpBcOdhS6PmsVEcViUMmrS95W1BahfpmM9DnM5rOWl595SF%2B3TSmtcbGf6cIIyECvR1JJcJMih6BUnArXP3MCab%2BAyWUgfYqpj5g62mngr8rcq4ZgzApOR5GwR8r3DdN2KHOlRvRqAiexRYNqNt8dDeG5WyrPJ9QxV0Ac6dQmJWXeoh0mQ%2BJTOXvpmsU96lwJYATn7WA%2F%2FumY2eMa9gVghGnMoMTUpUT4o%2FFhn6%2FpblHOJdqTcS7zDLhovCBjqkAeZN%2BCKP6OM1N5YxlnIHLTVKgEuKYM%2FWA31KKs%2BT1Vy%2BgYiIVyTytmQ578XfBYoDRwAY%2Bc2BmrqvrYOlDELpO14QRNV9INoetujr7HIp00u1auRG4qs8dpBYVwC0FiXtdDKblLJHKlHgIqR5M%2FFQNDSbODd7m0EC15b1bCcuIJJ9icF5FZTMmiRu6pLtCHtKhN1NcdlkRrvvOzO2YMu9X56MDFh%2B&X-Amz-Signature=2118e1f8df5738c142881c1e8281b2a1221c67325cf0825246d518163516f3ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

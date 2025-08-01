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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNM7BTDC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhqzuWAImW8jp%2B1N1ah1lQoKOLI6WUFtOoShv3oD9hAAiAvosDgGKfFjAgmutf%2F%2FeJA6ACyU%2BuKXULVvohYpe9CZyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwVoYE0VUjAkejeKZKtwDWUE%2BKQQ4%2B8ANJnQeuu1iwZo%2F%2F4nyCjqAFGe7XPEl4P0M8d0Xyyn7lZk564h6pP9%2Beg1V8wWGLNY6FNk28HWXwLSozWIv%2BnKRoA7FTnFYc8nFoHJez%2BAU%2BVTE9cF%2BWf1OCP1VJ31iBf%2FVkY%2Fuq7ITBYM2aYcjxzlBYrLe3jf0izUgqb9CQPCkBe2apleP1z2PgZhjf5kApc6ezQMicKjQs2kfwoXavbD552pL1WGgg%2FsMnuwnCsy%2BzCjlPVpQU3APleHRawtTea62oX5Q5c7D0kup6h7coFH05TqzglV1RwEckgsLRI0vREbFA%2Fx28dWpAt0cZx8PrPjkQqOMdXiMwedJ%2FopZKytKjVSF0xmzfXD5%2FiK0bapD3J%2BIuFfed9F77KzvLCe27l6gQVwOCEEst%2F8FiOKVSti%2FUURPqyFRLnPmFGaHFLcxIE9j6xsNiDnuMLvLBnf0%2FlClByAkTF1ziTgF4C0xEijLaouGMTfD%2Bu%2BtH4cdLzivffAMJNDj1vdmg9Y2dhsOwrXHL6B65bbUzsG%2Fgi7w08t7Z4xfRSE6k%2BJSGAHzNzw4CoBFVqIqO92iZ8nRQ9Z8ElLMjlDUFkIY4cPM7IF0WU9%2F2cbzvcvTsTXjDrzrd%2FXJtdzLjpowh4qzxAY6pgH0msHzqqa9vOvtym9wf1j1PDavJrGTrwRwPKZcCrKNgKS7uri3gBcCbRcM8ImeobsUdMsW6TiMpgOuT6vXwgS5NhiVwGGzmeAKxagveBUUEDkxoYWa5QkczDmFL2z6Syze78vK9JOEZQcrTT7HRrrw4gTXe%2BcjcxYrDINdxpGcsp7%2B4AZ8Ap1ljDObSrxmSUT4mXj8Y62%2ByvCOfcn0KT%2BvzpgsuU36&X-Amz-Signature=be42eeaf41bd93104bb940d217c18dbd3aa3292e0fe98d054ce8a0cd15a259cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMSMHATD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl4J0U7G307%2FB3Mfn%2BEP%2FMJHI4q2HcTOgI1jwlR9zK7QIhAPxDuuIWExlTiYPIlyGXq0DW4CSUiUyQIFn7qdozJ9cbKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIwxS7lrrcXAdmT1gq3AOOX5zcD4lF0CmjjwVcd8%2BlBUjm24cOFS2JnNqUc2FrLwshw8lmNWvJ8PxRRp3uuEwzK0EhU367Wr0yWWbmzFKaWrU7Rv5RKu%2BrZ1DNM6dbVX0ij7mj7116X8Uq%2BlIGy6gYw%2FKFdLP%2FLsxK77V2EsqPf1ACkbJZEbSNGOvCSLsGjCwo%2FRU7jBbTzj%2FRo6rafMeYnz78tqKyDpbdN0uFmQNieN2wKU5pBtItmCCfrwxwZnD%2FgG3d1DJDLf%2F98YQt32te2%2FRyacM0iAeKaKQa8%2Bmfz8WHohc8tt4r9DkEs%2FgQO8EsOAQ00npnMRYuxevwKY8hlOV621YJmfs09wwbOnW3dAgZDl56x6aaXsERwMJL94gpeUEOGDgy9q6D15ZqFo7JPF92Zs1IDjMBfTLCwDbmISB5fj6deRFaW90NovivSzPD9sg2fhqw2wciOPTKtAXITLUr5%2FP0ftArzyc6xxqsD3AOsh%2BKVuZoesnSQvcysgkYwHOiIhk3FVdo9a3w7hfud6l9oYj7RWkMCZGpb2hRiNAg6hIUkpmSd1WsUmpQepLWcvqn99eIp0%2BNPtIlu9de61G37CRGLcd%2FE0figZQWZEbkc3mg6lB%2BzNIIAV6esRoQWY%2B%2BEs90QCErazDSibPEBjqkAQuSuHuKOX%2BoCmWJeotibwuX2bE1oYsvfPBWyc%2BDwdNfI5mLr20tiBjv7j023yynpOx5c6QJP1y7JHSzesDwImnb%2B2wLFXRN4ZFBHREwN4Dkgomc9l2lCbnXdvbkE%2BVD63H1rpSJwH%2Fiy%2B81Pqv2YYzM22I%2FmdFCmwbfgIFvVJ%2FpDLE2No%2BSlujwv8qlfeOY12AHmwWF9JDKgFFCP7cwRSR0fHzV&X-Amz-Signature=9ee684012437a642fe659d83b624c86eef23b143b80db64cf9c952ab3202488c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

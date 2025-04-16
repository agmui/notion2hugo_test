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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633LU4S4A%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaZ%2Br8h%2BcuOt0AtPJ1pMjuYV9BWYNBVPThZvb%2Fn%2FSO%2BwIgc0mW7Vptvavek9qzBooNwtUrOwIVBkffaIFxJ0u42qQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIuKvoKsFHN9Q3yViSrcA2u12KHSrHXxt6leTzCtxy2KMSNjJVSwoJbjrwv1CR9tPZ0SZpCP7xbiTP6smZzfbThHWUIk22flALl78F%2BrwaivAzOWuApnwQRr6%2FLqVsKq57zUiFs%2FfzXrn8bSY6p%2BgVrhVeaQnb14ZQK9TNZYEENuQ9xxnD66%2F7gPicC08gJECdiIxj08zMzMXcqhiPS12s1XHwV8igsJk62s6zfQv8V%2BKbwosclk91I2O345YmaSOT22iqSmkuQBpVSSQgPMhC3a5sPYsX7TfbAulzKUn3MrzNCemEqL5UVKCaBfNAJeV7PKXT9%2BPNjP28uTx%2FZTE10r3A79y2C3skr58hX5jBbacG9ayOuuXltQurck%2Bi6EBzSXBd%2BDts9iIVx59c23APMwsSI2b3XkAZveWmyR3C4G1Y9gDLitDs39rqPcobs6RuVQbUTWlL%2FWW8ZRlI%2FMn66qYMkkAo5e5pauAyRiFYl6oELzdifPwpTt%2FrAm%2B2vdfnZQFPk27DATVEVwBmFSwgXCEYQ6UENztJazTiNiUGgtVeRvGeaAzwHxJ3GZnAEONJkfdK%2Fu2ZnHnILQ1SXpFxBOjBi5hslXvf7ujZqM6HRxYbHmjwHMBkRqHDhFhLIveS9PNDG3bLz5KLIhMJPg%2Fr8GOqUByHtJF9jn4uIySFrmrjq%2FN2q%2F5KgNCZfA4H1ofHcajAxU0uHY%2BmNAB6Pfgc39FoBe1T%2FLIKrmgpnSFA4TaNPvCezpY2oN1y5MF8neAdq8fuvdQDd7LVWmW855yhx9WhlfmdgCD6GfbmTf8zmJ8SiEqNyFLLWJP1CV0FsCqtOccpNW6xUW1PwQ%2BQFcVFlOL2LNkmiTMuDqYFIffkiOtJpK%2Bus4osZD&X-Amz-Signature=06352a516ea41bcd88040b89c2b978665e2503eea2f6818bae75ccb2b14d0e4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INLMASU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSu9U%2FlAmelSiVokrzl6KNPC%2Bq6JIpn6zvC2Ip310E2wIhAKM6QBlGGuqIYkRVUMR9dXpUNEcY91o2hlbi8fxn%2FR2hKv8DCEcQABoMNjM3NDIzMTgzODA1IgxhWdHY1wkicYi2nDcq3ANJeZiuD2x89svDHLrgvtGQKR7dpWSUunsnumepNfSeVY%2FgjIIpsbzC6o0alBUhpRC5ea%2FRtcF09QsNIygoRvf7%2B2R7M1FBkmYD7wDbc2LgwgUoafHJ7usAW5e%2FMztYuWYkLl0xWFm%2Bu6MyF4shDzqRogC%2BCuhjfVVBSrU2jA6OhDIAC%2Fl78DopYVZV%2FVOF%2F%2FMtyxZAAVM1nSFDCkcwnIBpmAwt8f3Zanz%2Bo3XMYq6W1KFQNAqeTlEgsPWi14TAG0wvKmOYqRBSBZpVgFd4wuTe3JQ0mYd626L%2FNOnoF3AiIU9JT4p2uKCspbiJJDa9XaqK10rEX%2BrV4NlCwodCC%2Fnfe2wCR0CWBEn9DhUazkfpWMKxdPU4XIJM4LFOLB8mJVEbD8mmCCu1KtddjKR4VZnYyx3xEXgc7Hs8Cxlal9qEEzGSfj25DNMKMDbBDms7PscAnO2OeNw3U6kr2nL5Y67X92xHaBT%2FvGr3s5YEsZyII7XfUe%2BpiBFjCf5hnCiGPPvpLjtgVKshJUr7AYDUq3kuhU3lupLFUJ53C5yrpW7ofEPP%2BMm%2BVGKMsEPX71pbsRWNVVOrhVHOFvhUVozQoTqk5ZMaI0zkBE5qT4odPhD70oOmRlLF7yuDojG7LTCY4P6%2FBjqkAVhXz4jrzbpW%2BuGVucBgFUdJIE0QL6mWlwbTHV%2B1LqK1AG0%2FHy8%2BekSqoKzv88MvfJu8iVPiFN%2B8pvzqScfwClyF%2BZj0b0uJLYul%2Bbh3BmNRBFntZq6Te8DVDC68OOno3sd8a8EvtaOm8JBz0YrqDmCF41H2pMap4kPV5gnFElNtZ%2FCjNSnpmyLMW1A%2Bs2muCXAro7s8VVV5ZhkBvBkQAGfmhItV&X-Amz-Signature=8ac695fd5d039cca62e938df67fda78efb094331c1645d6ce88bed2700a44dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

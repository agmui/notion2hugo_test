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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHDDU5G%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPd%2FenpOAwnNrF%2BEXvmd3%2FcllkK%2FI1Q4xDnaqJqhTL8QIgSN9Y2bf%2FLs9WdW7LetsTx%2F9SabTDxfsTJ0LLyCZEh4Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGy9V02MT4UeLqic%2BSrcA5vxCE%2FE%2FRO6Qbb1o35hJZYQYzqj5zYaxAuPmvTcII1jip7hNr4kYf%2FHulWK2Rd2RRnD6v3cdlOM0CCdg2svg5bD1zIfKMZaB9exWkt0PfE3tQiS2Z8LNsI1TMSPuTEbfrRXzzgPgMPpRpIGfLRdY7DvAgCwQskWI5nrmbunAmnAYuxHhz6UQRAu0oMNCJAQodpHkZqdJwDl0NWTqjttNv4RS%2FpjLXdPfnTDE%2BmAipZOpJgHStHB36j%2BosYKOfbsQOYXCTS9vTUHGYfbtE0cOyc7MlwjR5ZADzEwesTJ7KmvqAP1iSmLUnwoI9ZTu6rMCSm1ZqUS%2B507tnwX%2FL%2FnIQT8rX5fNiyxxxXuPOSd68FyodEPTbmwTRd6jcYs8OHf2jcXw%2BNAMirrJ2BbsA%2BzoDJFKCUkZt2WPA2vCHG3tmAX3sL9PAGpWk%2FpoV6qXOk0DPDJbbG%2BS7CIdy6oUKXpuno6hbYuAw2epokY0hzlCY00pIJvcg5PvH4f65XpbffqMw1aOy8aqD4tAxYp70NCzlHTDijBxYQFx0LFlUvLu1bWGUG3Psteu1BOu9Gj%2BTtpeUCITffQ6Fgi5c13yDojvyXCt3GVDArTU0h8qL99187lRP0z5zL0nGpCtH1tMO6eyr8GOqUBzkgu0XFBuk2mMVRLvHLlEZmCwoG%2FNSJ%2FWDk8Sw8aSeGN6YqQ9YS6u02yfvnh14ZMkAV8OqL6YVoFvhBCXy8zKWcginNP84eHXjFf6373eq6X%2FAqi18sAjDy65SLirM13T38jf2Y%2B3o0HxpBogZrfKiOczpYE5%2Bw2TDjABg0JPq%2Bt3oM2KLjGCdKUiyjwsPUou69DLe2EaL9vut3WmrNnRYqAVxFi&X-Amz-Signature=fc9025368248e6e5ff1f5b3a059362241f7f272c0724f89d467ed01d868ec49d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUAUYTDR%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Z0J23X5aLWJVAeGFYl9vMCSTJBK3Gw8baoMdhZJNfwIgOm1dfd1NcpxxqlzDZQhPaFj7lAgkXCMvvo7m60TL%2Fd0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHet%2BpRGzzHpeCGn8SrcA7JBSsJvNROiQvoYG%2Fa1NoozTP%2FXBTVqu4WiV%2BqjeaMS63fsxzmg6igEnZTWGBI%2Fp0Ibyq8GKNk%2FrVzYE4e6B0035N4JWThZADBKAtfOSldNTYVMvTGlqqpf7HfwVhLe2C0IBa5Q75G0N%2BA5rZYe9sDq2KUilv8igxBExSj9OYOO%2B80ju1uu%2FJhfxFMt3NcFOwl2cqiUsIGZOgqQKEJmpCw%2FK%2FRVFo5WFTHcademRUtwjHuuJrDdzF4MEarQeE1hIm8MuXdtWx1%2BcjP9JIcKJjqrucYuclf4TWyP4vqgjofAHEj93t4AIRj9%2FqUm%2FY13J%2B%2BEcu%2F3dlfadMymM5rN5QckamQP4V0%2BRTFLPWjPX1VewB9bCno%2FwGwtAxnVASpUgpip5BnuLlNdpR0PesG8lro1xMDb36pE5rLnYgqBer%2B%2B5g5ltSc9ShLgrNpc%2BS3bz5gfxTCPUFt7cIDNFFkL42b7NsUH3ndVRZE6YNRaOLpZxKH6WEMYQWSFFTXhCeDS9aD91w%2BzS2F1PLkjQNpQijsKpBlq3HT8AWWWYf9b7GyHIrbNd8jGBqido6n8a127m3f7pvrdItjlBTBr5%2FHGUnvkLlqj6N9oj0hFQnASLrpFk3FtRrUyvpZDhs6JMOaiyr8GOqUBvBJGGnVqrvep%2Fp3L%2B1Q6XlV5byMVkG5aqob029G2BcHYZtSdjzwYyRjuaicUzDk%2FnDvPnta66h%2FOKHjCaOvgmq8Wv%2FLJQtb9EVssPwRl2iCn04ZM8C4dy9aE1VAozlc4jF0AYyX1x9T1KJCfCpPGF7ZRmdps7Qas%2Bkna53Q%2FVjGAHkzD8m5nzW8VE0GMQxuyF%2FrNJ0Xsm1fJTb448eYPCeHyDixS&X-Amz-Signature=35e4ce516d8d710710e399da236281253dc1b3ed9f357d27ae3ca56836e9530c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

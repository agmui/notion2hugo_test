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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QAJZJBH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr1JiuKEviLlesYd8Bcl8cmnfcFbGCVVd3e8vE%2BbF%2FXAiEAl9XTgmssz4TdUB7QPX3ike605SqTX%2FbECGW%2FQqsUTbQqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCU5pxugs2KtB5kchircAzq1HCg7zN982z5e%2BTlQl0iQC7iV9wll%2FaZK5QyFRuxXATZMrWRE6M8z7%2FL3%2F3pml8a8dThbYsa73RKFt6tudkjvaa4yg9Ih2Azm5I1VUPNokYsrgkGfNn4QpaX%2Bj%2F42YXi0x9XdtninirGkjYnylVKB%2BOuOUWDoSJoKy91nw%2FxBfYM3GGG2BP76uAJFL%2BXUPp3FqQe39paG1JriGq1V1w9hARdGtG1fYlke5hVea0X4wSUM%2Bcssl5cvjpNdpDR8kEczOQSyuk0%2Bq%2BhGBTqwDFR7H%2Bo8Ou8Wmj5%2BOJrqPvaOSU0xjNAvaU0AX0z%2FPPMFkESuAG7jkqmW2k750dGk0GSyP%2Br0WYb27YCR6a5oTXaEc9Ur5Nrb4mVfT%2Fuq2vWKPUNA9Ubir5rlC5Q7fhhSN9Azk7u3T7ZaWtFDAUDBKrKUUSsFZchPOxfcYpqgIg8oLbkpgfba6uR1XOd%2BCGaZAkHjXSyiHs5vAJ04T3uemO6kUjARlZGGwz0uwaPaGx1NZ05Vtn0JP0NGjKYrajEOz0Yo92wI1bRYYO7wFSIonk2if2E0BjnA1KFhHfjai%2BoL0FM2zylpt37JuhWg4ER1QHQnXebuKwgs783qDAfVGtaUmLZaEpkz2Z5rNIIfMN%2BZ4b0GOqUBYbHHQ6cL%2FGtqAVFx8yOGYmwh%2FmcAcSuKmvVE%2F2xqgcGJmvtcvZ1TKAP546%2B6OYY2pfVwUT3d6kBpFdvAahhIdIEl%2Fma03C3IeyVzZZGsvhhu6W3WviiIt79wX1lrkVipvh5%2FNEb71FL8oPE0x2wWcJjtkIbkvgXWwNbYLFJGyFthfoxJHEGpUVDAgexgId3P6v6nkRYe7jQ6RlcT2k6V%2FoxOlIZa&X-Amz-Signature=fffe45404560398517ae74ca5bb2a45d7ac39a323a7184a041681124f46fe941&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZMRJH4U%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEhHDYh5WMeI%2BBq6c2znh724kHVvEFFkh5tiRwduE1LQIhAPfyNmLIqK2Wu1mex1PvhM6hNF%2BM%2B9Bl9BXFAdNKuf6sKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc32fx0eD4yrZaYqEq3AP0laYVQgZxWGTc%2FT3c2am3TSPkPlJTjPj%2F84MAn3spCQxxQPujlCeKY7CQkMz1Koo1E4HLH5ywueguwP4MBJXuygyB5wUFs7s1OfBIG%2B0G08SLidS2p%2BTkuy%2FkXY2DnIDnBdAqsOmdY6cvyuQbsJJi%2FBQYCuqlVUAah%2Bgs9RRp5rhZrCmQPm%2FoS4PwA3uHfe1UOLjAA%2FdEFktNiOktY1ixQ9Qd%2Flij%2FFVt0kabCirJsWrB8lUYe6O4xirw14RxPmj8Z5bQPkLwBh5otbZ4a3oG0rKYTjRpsaIZGpdAvZBKykrOkYuckiFH1Zb0g%2Fl3ymWV0XIV24CEJ%2FmSrSQ5rSO1HekOpsjYm2KVrhDwSYSJDY5Ic4AOOR%2FwWyT5%2BhoyrP1llH%2FDfqwFIRrvJrNmvmWPRPpLM9%2BKoSSyK7AK8jsRHFtXBvl5L34DcLhG0nnmoZo4c1rwYtObWI12zORD075fGOuMKueIfiDbxSUW1uP3f2Uc1ppWkBTohO8O%2BVgX%2BqOQDVgkTEGWoC8qTPHU2W6gMbbYSSzMD1WkSNKbTLwhMJeeIBmXt4lJ8JPqQE5pqOxBOB7wnYV9yzTTPP05MtzubaMKvPsEFMzt3VrB7HYd7yDbDwmUGbvrxVHHTzCzoOG9BjqkAapwZbh0j6%2Boeen86SiLH1Z07sI3Ork6wFDce9tosNMiSk76sGxzDTVueMkYOl9inRAmdwXjrjsWQJ%2B0KXruSi9tgfumBEFpAya2XfKo5iSUi5ZGUzngwaRrFIqaj7NyKi%2BWujxXaW1Wxtxipi17TypeL%2FVW451%2BNgVMOz%2FGsD6sNrh3T8jamTLJGyaGv%2BkQbJlaVRT%2FBqSoT9NULzGFWMucLwRV&X-Amz-Signature=63681eea5f3ae724ed7b956601ca1e7e0bbbaf076b163829cacc3bd435b5c503&X-Amz-SignedHeaders=host&x-id=GetObject)

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

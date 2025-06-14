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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQ57IUE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHe51QChwYmhIcyQdWY66drDv%2Ff4zt4nTig%2B2ZxdMF8fAiEAvRkhHcNzf09t9iCZPka2Hg7PKLjTHcRmVi5iNHCOSqMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLpNc%2FkoK0jOxSEFdyrcAzbvXtt%2Buw5wEOspvNaEuug%2FeBbQghxpbk1%2Fx1exB9NLzjIaEoSqesbHvBJaukysAAHJ%2F2GPu5PbSvSUakk0Kgat8ca4VPBF%2BE%2BF44hkvHp7STXayPBJJQlOWMmX161F8e23kDwl1TeXAy04UzCdoYTiwOQDrdVFlsfONUZ7X%2Fm8IZTJn4MDZLkzwAgzyw6eA%2FSvGX0r0w2FLVXBDZP4hcaeRarzEqpM%2FabMe%2BnED1a3L9bz366LWv%2F5BmnGQz%2BGvJkdBeblkrmy7UKpvQKq%2BZKwj%2FTH%2FY2rZu9r6Gh4EoyEs5DExSTYQnVAAuZ4qkdm1I0cQppL7nbTlhLm2Ldb2lLLsX36BfJssKH20%2BbGdvRm2tzFltMB8H3c%2BRuGqIHPzL9l4EIHtBHQYfx5NtCN5fVAS7HY7eHgNYF7aQmzQfavvY7DAghOrk15OvosFaTh5jtFfoyDfVtZ1S9caj4NhtarNV9kGk7jZTq5Uj4Ph7gYZtO5ZD3CBlU8eyNG3F2YJ6zJAzCUQRRk2%2F6%2BOtL5ZCWcM0ZXGw%2BhI%2FTnsFa2Sd02%2BhwPG5TdloucPkYnjXGkfZ1BOffAAIXRyoMWADiGmVFPNXFWuOUE0acURm%2FUe1bHMWlKC0hlxgdPNRmFMMOTtcIGOqUB6Gt433aeEd1iCRVVMBWAypMQWQxOeWNIyJAEVC0tJ2DqVnR8auw3%2Btf8DS34xA5WHVSOySCzbpEDJjzIjJj%2FNeyVnTMM8HjSTVhM2CT5c1s1HYWfslsaX%2Bvzxyt67iERhX15NZ%2BqkRlX2D1ZHgiuMhQwrLystgz428vI7t7k7m8D3hz6WIiG%2B8wi4IZcTM82WP3aacMsuhdGDghS9x0XfUGWUzzr&X-Amz-Signature=4cc25c43e840bef69d0237da9cbaf352eb7c66824f67e16201c5923a8c55e05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWUJJSCO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIBZi7muWVRDtwQmG7ag%2BPfFFeETf0Rr639f3nkY9etEJAiEA7s8DC0IkZ3a4Vcci0qdGRRDXyBksl%2F9Y8531XEwRDNMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLfUVHhoCJcNJm6hmSrcAxoOWmkXHbQTZ%2B95WTxcvvtb6smHH8%2BPBCzCP9O3XpdXT3GfCxgYAgE4ZgkQ3lyrdaiosmxm0LG9JYhD03qG7Ynn4z0OnNFHK7akRFwJeJse0OZHRyqSjl4KAepmrWqTypMKnE3YymOzqHQLS0v5UovI%2Fc5vaapo31tlO%2FqTvWZedG4CO2mw8txHqRMkCHsXFjMYhzMFzt345FIfSvcWH92RGCGWdw1dQRMJlE4zQ0sy1HWTnx2Ltet%2Fto8d2ooFwpxmDHwj2kcIeQcFOdASDj7f0qDz6H6%2BaUayVFz2p%2FakkLaVBrSqGzQMcHGf47TDEZMnkDSKLxC9hSp9wAoxT0sjLfXiPDIgUPgortC8aHXkdReJlCGRnk92ZNEPH5Yguh3XTGs40G2AReudw0vOHUzhOgLv%2FSlN7QbPsBEYegL%2FugHj2jynpkCNSXE9MvpzgUcfCZfGWJClZiWeAylBgunEkOWm2FHRjcYxABhaICmDAC569217UApEVthYX7PsgXuTeunDLNL0yUtr1bTfqEV5i%2FNQypfhlyOIjV38woZKkd3qcj%2FybAZ7DPLmaWJxq9nGETqGShotLb8%2F0WbOEhRO1WToeFZRXX9n1BzsoBRU7EXHXHHVzXObmkvpMKn6tMIGOqUBpQt2hjtZMCJuDldWNLxaYQr%2BN0ciKtIjFtI%2FwgjcYwbD2m5BOxLoAepxltJHOvQFhPAWDOenmhHk7PovSCl2RVaAT3%2FA31i5%2F66y5ICOxrqpI1WFk4NgRiJ7H4vOAuPcnMhodkp3WVEE5ngoqqKXgq0%2Fy9VQbf93DI9khU3mEs0QADXVlhD9E44%2BaLQ9%2BFtUI9gLUxovefCC%2Fkg4uiE%2FFzgFokKc&X-Amz-Signature=3edf0117d9fc4057b74291b728b53d2e21fd6500dd02f6da2bdf6e0d81ce0a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

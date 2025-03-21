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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXD4FVST%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIECvzfTqplEj6EX2iDz%2FM3Wb01U%2FoMDwpVGL00tFHVmfAiBBnksY8H3S1O3wzC7lcTBPsEjYtQsnhO27ZP1ILweUqyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZjc2MunyTF2Yz%2B%2BnKtwD4oIY%2Bzqic3BjJFIXLvQpaLXDgug3XGiyTyNYHmofj5viV2T4POYGKGfbsmqu8gL4KBUu9O%2FXO0Uxy9yaA1PyT%2BiqqUu706Drzc6mphRJlxS%2FtCy9Ti05dBeci4SNTPsAb3vWR%2BjNtAnoia5Ku9kCNCoYsOMjkAG67EVCEEkkPRIimQz6GHoHMYU7McQTFUyBH4ExlUnoLRejSxICe4Ka3EfGSpdeUWd04IWHnITOq1IDca4nbSGlRwkIp6uhK5n%2Bk7aCL9mw4emSYvJl9DdDjsIyFL88pvqmnsbV6Nhps6mMgkJnMEKHXFtU5JwHpNRqf1Qp8yfET9XX5pa4ID0JWG2T5FhcKvgXgnkSF9XGWI2p7iKlVB%2FaNP7R8B2AlQhItl28vclK2gejfF5l2Fi1d35VyUz91WtZRO8Ryeax9SKmLtjeqvTdlTeftf7A1R5CJUsMYBTaDK38kOqAU7upsrWrqz2SXdHXL0upDFA16G11Mo2ATkjF3DST9dsmpa5D%2BQppCXtubtgjiMzumJzWbCP7zzVTxEXcoAfeLWrJbVB397UgTvKk5zwC5kv%2Fe%2FX3%2FvuZejpvhricUw3dSwIBQpGhcOpdkgNGbRSh8nv3lHJS377CwNdbWiddLa8w%2FLn0vgY6pgFI%2Fmw4i9yGP0Ze%2FOVcmVMXBXHGq8wfipioxqfE1omXV%2BNivr4rmgkfH02NrUSyuAnfPBPsQojWMU1%2FouKYEb94WRaVjlwTVJtPskHsI81u16fQenrbD0EXxSFuT45aW5nfT2s7k9XuvVse2v3n0x3DtZxs0EuTfaMLjFXe1IbCf9zHrdZP1QERjLUnjMDrum8vESJM2jE9nhrxxX6nMiKoIPiZM57u&X-Amz-Signature=1f160512c882bcec77b4185b38ec5bba22db1dac5c2ef2915844adfcf5224ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJI2TWC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGzy7CUbWALR99CuQgkTWjoOl8WZtosWjpOKU4tsqcO2AiA0GY0RbDu9REKiQqeI%2BQN6jC1ZzvD9hkBQs9h5nEczXSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfm2d9DoMjUfRM2WVKtwD6Kyj7ECicvieEZpA2IlAYuTedE4b7VmCWMJZ1qR45%2FqgDSZ9FOXOJVGstdAQS3c3BoogDkGDyzmtSkoHP1A6598WwhlTZQbRUoaohu3%2BzfC0CkEfPLY8CWGuriL1OoO3CJPSwVLcbcC7qCaQAVunM6m37g3IV24aCMbCD6revgH9xF8yClR3CXN92ME7zDZJyS6ArKxiN3Hg%2F3U44%2B2oaXlkmNp9JTHWOjlks7DKkXATo6Wv9W%2BYrqq0DfkXv2c05pDJ9lrEp7TM30D8G2uzv0oNmaq0P9SLy3ixST8xl%2BHoMkIiMl6GffXk0cjvFsoKCZdoJAxv7YMjo1lTDtLp39tw2DsO4ycKobG%2FzDwfEzy9%2FbeCNcUvE6mvxJT0MVoVzaYMUvBoXFe%2FnFQml0TsBsYJGT9fVKliD%2FcLgVLhzii0Y9ORWdNw39ws%2FPXEeDsWT76VPT4Kgsy3fSP6FcADqQVvpLkf9o%2F7%2Ftr2jooBJBrtx8KxXVtLDH0GgJ4x%2FvureWSdU8OSKUSRWQ64aYg5J3bCHzSUXidxh0XPP98YY8wpQmWWjBrm743%2F1h5H9wD%2B55HXiJCeV7VDvZ1KiNGrSU1EMbdcFKKOjRbe6J%2BHIJ3mhf2L7KItgUBdYrcwyrv0vgY6pgGqZA7Sf50ssFCfq2%2Bd0u8HDWhj8y01ro9PVW%2FtHoWTxyUY0%2FWoRdap18tuH5Y22v64hUW6JAsMWXr%2F9Q2nsd4IzZ0V7U9eyB6YBNTJ5G1Lsi5qdWA5JsAri5WM1zVzzboKQBEfhZUBtZfsipvP06kHTT%2Fj0BOgymbXiDhlLn31P1%2FxLJVD2JrBd%2BPPmPR%2F2MdlYn8mvH%2FnSXlx%2Bhc%2FhqFGU66%2B8or%2B&X-Amz-Signature=0c41b39ded4fa3c5510e532f0cf44c8875956b9e72b0236ad8bf55d331d5d291&X-Amz-SignedHeaders=host&x-id=GetObject)

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

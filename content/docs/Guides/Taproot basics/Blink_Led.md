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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFU2KHI%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIG4v2De35Sbx1xXOg7fXFXiW0ICuHJEA9NKsab0IvcmYAiEAk3um5UO8m6ljBhiemWI8AE%2BYgABZ56OxAZGS%2BRYCgNYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNZCxHGL%2B3S%2FzomSYircA2BDAl7r2VRD8UmKaUIPOmxjZULQOXquCvLQe9Au4uWYV1xcqRjOSsVZOZWdkjtTE4r9SifTc%2FtVBNL1r9JGE1J6vppz0ePKrjrqGssfdT1x%2Be3xvX87wNOjYpiwzPdX6ioxgpUmouMhPcAzy52Kqnjpg38mE9h5rxkd8CCDvCwJqPearLZd897LuBSEZZwDjFYDU5sa3xKEJyhM2NZMb6gwvcUeADS%2Fh51PjlwsYq8wz%2FP94hjSAAgtRigAxkwlWmimcFeHH1C0gZws26WfwV9PfXA6PEGWYVjeNPhCwWloAQouOl0PXpbbamSa%2F%2FOip9BSIvAnGQl%2F2%2F6P%2FBMH0HOThJm0SymINPr8xL7d5bY7FiqMY7uAwd6ms7c2hflxIjhc8Ole%2F1uZhlSSDPOEF1KDU%2F9E4verzj6cfwTUk2JKLID2NxXJ%2BnIaXqOu8xXeZs8AEDb%2FR%2BdUwbUGqUtNYCRyDMgtICsu42lH2740eXr3E7e8441tUBTgp8w59GJnbqkJF3UqwxL%2BlnRr2WkHOsxqcm3QJ5Xjr6q9Ho2xUIYBu3M4ss3QNEbT1SsexVkVpU%2BPGQ7SVWQUKC9qY8Ho4YbA4miR%2BDSHhd92n4H0BJ2VLuOMUE7PJti9%2F5j%2BMKbSgr4GOqUBjTto%2F%2FYcICtTEJ6IDDmty3RsdeErroYfDAadf%2BNjdTRD5S%2Bwza4od0QcvccIaSnai9PkUrvma%2FM53yp53lrRwbx1LEqi0NfqPG0rRz0%2BF3YZ%2B%2BwW9BVDvegb7MDcFVDFh%2FbSnDWbku9KcTcmq27GnoSqX64s9tr3aozI%2BkmudCbzk6jLyGDQXbr2cedE3ieCeRx8f0U4JQumKqQ7SRQMtCR7XCLX&X-Amz-Signature=c56b2f00f5421fef8de1442198e0dd734f7764380227987acf8debe77c558103&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HFQ4YMP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIAG3HPaYidijF7e%2F%2Fgih8SgARQc2bksZ8Xgn45P6crKdAiA1UOK9pINIU7AK9cc9veCYzAmJ91XjIrz3%2Fh6P%2F%2FJSPyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMkbGb8xFx7UYsA2bWKtwDGFj%2F3enZVpFZJ1qHtlX1SKC3DJzNCZMkZYeg7%2BVARHiUI0%2ByvL8yTwPmP5TVE2%2BM1pu8dpHROj43w8V8ptq1cyy1KEfgMMjxHrrXFSMW2wlKAB3UvXExRumdTrPzNI1iaBVtKnOIi6i71iO7k3Wx1ahWFKHG7kg3cOmYLPqlsxrSZtmIEy9VRRzRfiZFn%2BBuGnEh1TPPK%2FiFv8wnTHLeqt26V5LjvX6l1CPPlJ3wzo7CgTMqhWnMMhjEvPCBNScvgXnODdpYXZk39Ea6syPduJlIwBq9kQ3ns9UPQq7IcvpsouZ6h%2BmDXlguMymzOIxtCIG1js0f0wmisO%2FWMWVHk%2FsfvcMQt9ShS%2FopKBg9i%2F4f%2FpJ0u6%2Be9Wvh7DXEJynK8r9Yg7SyoCgb5pB8MqbxVCwWAQnboqximGXvj79izd7vRXikeiYT5CcwDMGkA6ikjFh5IT%2B47yDq5bqXoAgySAlV%2FwcD2dRTUkfNxcm0TRswhGSC6IUi7tKxX22L3fDVAGmI5CxqhSTLk2F0MJ1ve6NT8unnN7GwUDuZQFEhUs1CS3PueKDbUcezZVFb5MmKOmQPI59NVqVJwXwOzMgaBhNbYzCPQmV8zYeLJ6omvsvFrp8GYCBYvIRsXmgwiNKCvgY6pgFcK7MU5D%2BxHPXNh6f5tCb4VS%2BA6WNRnkcQKPlR4wa1ySAcJ0zmBinjfxfnAF2mzwJCtHBNa8k1q3RuXcX%2Fs%2BKXfFTRG8JQ6zuU6t5NXpzAbtotvyAAca4MCV%2BXhYC3vpUiPFVkgfVgNWlc1ryDY1kxVDll4hFG9kvEFxbWAbA8i2JlEPTg%2BfOBSH4zLx%2FUbXOnZmTjx3mOALA%2FZAIF7gGLyLUVBX85&X-Amz-Signature=21cea6f304f2be47b9d237dd38e476f76c8d7c99abb33d236b428f424a76d7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

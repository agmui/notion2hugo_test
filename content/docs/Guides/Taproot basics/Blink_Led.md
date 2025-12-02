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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KM2F5RW%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHUxRHDzY4Usla9raMA0l%2FfTLn94T63uAQqMqzkP8FNBAiEAkZezR6CkQBteEIL3OnyqJSTNzUBWD1gjxE0YO6m6u18q%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDAM85oFip9XBNr4mjCrcAzWFkClmrQMSDHrI6X0cNa8Pt7cr%2BqBvdepoz5KZwMbCNR%2FcFM93dDskcy8tvDwQX9wy8RSzBGfIS75nMhUwNEnXzVXEh63esten2WdVt536CftIR6qPyI89xvSjixCUUSBRSXAM%2FHqOTudV7rYkBvp7M434K2jonhB6COHLM0anzeTEY%2FZAQcrvwJ4oq316XcUfIeuLbhdNAxbiukAjxjiUK91Kl79MitUeMhKLINGLZ5QS9EJ3H1b2b32FY%2BRaCEuKgxber7CVGOfUp8yZFROIMJ4u%2FcS5VFwUuTjJLaOvLRRwjlN%2BHSmyOUA7syCEwvFGxfjbL7FktWiuoI0%2F20wietJ47PmqTY8DOeYOVbM%2BIWouf3zFL292SKdMWz6vRSIVfrWYGfm6aPWOk4cADddW4uIZsggn1kXaOHQzXyW4L%2BxL96n1lDNSlKtShCm4DJnKscKXQk5tOFPGSZsJ8VgwwZwLpfnnr5KcB%2Fq%2F1%2FQIodxIiJEHxU%2FncVrjrSzUqqBO30gbNDmeQo8hW%2F986VZptnsfVpetuQL9vOjZUOSCV8k8WG6CoLdu7wjmUnzCxXbXZtamghrlME5ebdeo8jAMTXXifPTSjio1AHKtfC9Ea1fHav8n%2BQSakYe7MIjfuMkGOqUBLRpwH27TgADbDEMI7bMqACnpn7Gh73mBQ9MjkIlbtUUlVF7j8kzR30Mf3uoPKUuQn8mYJB7sVMzegA6GlKDH5HdiBxqKxlovnSQzu6ylClqPbBb6T%2B%2FR%2BCScmQFQJ1KfFm5LhmMAFeqlLLjBPdKsXpH6%2FOptRDEuMuH4iMk%2Fxp%2BxL8PwcOZ4ADPz5B21hF25CTMWRoRddweeS7owBX7p10f2ihZX&X-Amz-Signature=5a4746e4906103f2a98b7880a24a69a2cd10a47bf80cbdcab8ca5e6a8390180b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627TULLSR%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDkmihi8B1CNDYy3vbPYjbYL95WuGGrP55tpzkM2jaYxwIgMq1nt%2BtmLE2TBES3C6AJ5OxygEQZIvGcduKPZcsBMvgq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDKJ7O35cMCMJTMgoIyrcA1jcjFATxPM1kd%2Fzm3ISty0jpip%2FO3po2aXFqJ8rVGOqvhyPCxg%2FIbeBxDL7Cameq45CDDLYCgLjtdm8JdQR3OVqYhATeNdiv8pw0NCg7h5OEHDXNxnh%2Bf9uL7DW3T%2Fz8J7%2B9TyJbe91t7Wn%2FSszAEEiYlbTapGK884oFsKgckslTEy%2FYjCrRnbNPq0GdK%2Ff2RXwONG2JDJwYxyAJRp%2FI3w3pox%2BDDID8GDHXC%2BQX%2FJU55klVaRD7v8V4jxTv0G5KNzTU28EP2dlCOY6F2AqctA3k9AYAz0j0kd97AC0U7Yw40cWJfUNQI3lvxNbg0Lf586lKthe9J8i866lRU9bXTpaaB8sefIGlTmwLUGAoXrAFjzxQHgYkxS5VY4sHdCJJmYzB3vw3nxusOtEHbQZs2TZNJNjh6tGGdRVC4RvC935xY1g7LuCfvXZ3zE3fjFqWUsJSfgD85esalr7b9TM26oBFHc1VvhsX6V44lKbg1wFG1qcbYAIWkO44vaBVXWBra1WlhLSQDRFhUXPwVrgWE3oXDgUVfn8I1UNeheY4FF8RiD2RH4T%2FFRlTRM1NhLtXl1DcnTEyg89wtIAp4kkHWC3oBXxpL%2BVPcf22gWtkoSvBd9%2B65AlNlf%2BxOHjMOTfuMkGOqUBDWE450cwtU36MbxQU9oMYCg3tiQSgPZoEQkJrfCwJl67SzZMSam0ZP7vUzuoShINU5gA1BA3nMiEntclpXhGt%2BkYvOrZtOStFP5I8BefBXbMUIq0QVnmlkC2CPglTzC2LKvL%2BDHdq2HupCDmPyLt6jUkGr2GJkd4s%2B1dV1LseOZP2iYrEnpzy56kakXJ2EPJqL2iiE6KsPa%2BG%2F0BNHTUkK5GExFs&X-Amz-Signature=8f09c68513cab304cd1c650ad307a81e3cfb04e98304c8ef3e9210d496e622f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

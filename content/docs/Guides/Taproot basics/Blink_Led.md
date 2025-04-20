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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NYVKQI%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFAcJWK4FxMCbuEtY9zki%2BG8dbfc9gw0tv17112IFyNFAiBWl5XRmYm0JRGWCZ5qfQF7qp%2F7hVlfBjFQiLuOK57xgyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0zo1lDg4OPsAUL%2FKtwD6sSZlpP7prRvP9R5l0E3lCCgS86ybTb81xNoO9b9%2BXpbrzK6jl1OCIR5c6w3llSu4j%2FWxYq1IheU2DKvBUOYAoLa8BFpI8Cx918JiXHiadV2f8Pf9Mu9EQJpLhhERavu4%2F7F9OehjBbyihoK5l5gZZKTZaS2gJUzuwiGr0OwsFqh3RFjr12y5fdaS0VRNe3dlmR2EhyapbcvMOv9zLNWY526x86Q8zZcHp%2BD0MprvbD34dn0QAI4bthJOyIyWoxF3MJglIMikBumD1lPJOIak5PjkW2G6WEkrSe6n1L5vVWdYinHba88mHqcIGQHqc8rohDi1CLmfGC91Js9V4MDIux4tdHHjseQXvze3WeCoPdsVmcozes85zQqPDwEQiUD3kOQbkUg3TkienRSCa7dcEPK1UCMxUps8f1GrZxYtqdrqY%2FrUTNLXcFEDNIEtYBiJSI3Z%2B5IiC1tZIDygXfxGy5%2FIKAuqSvPUYbDIKPOOSzsD7hZhGtBn86FnIZ0LUHIdqL1iiE1bwxFEOfs6HqUItagfXd4y7YBm0MnFFOCp%2FMVEQ%2F5Q%2BKQHFm25v7yJgOHOs8NOs2dmnurBJ504LdyhBiAVx%2BVBO8kIP9BZy8CV9faIv4ALRTUSBwMh7kw06OSwAY6pgEchVPk%2FMWDix%2FdkjP9J2Wf6%2FkbQ6HUbupiHEhLTHg3f0ozg18wW1ff7Erl1BLW1iopuwtdjRdXBvCaOCItwkYPoLI1oS0zkpKSm6AoZNGurjSXTYQtr2lUiyilSWDkr4WiV47%2BUM4U2xpX8%2FDe2ff200cql1PVrwz8hVOpfOUtUzxzwsYLJSF1WLGLKQ3kwW%2FM9Jgr%2Bl%2FGtPwOakO1xNpxqs6FVvqE&X-Amz-Signature=b97240f2942d951121a6a223d7c53bfffbb6faab0c9816301a01a7a03f9b2180&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7W6CJZI%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDK3%2B1AVW2x6g2GY%2FuU0EFVRgoFFiPPrQk4i48FxCrm2gIhANklf92LZMh%2BkY%2BIP%2F7MEYUzcIPZey3eu0BborrR5wmHKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq5SSPJTVNOl7pniIq3ANENDZvwAOA58C8b5GF54S8qbtB3FghefsG9XZOj7vjgIeiZobVynb5c722dKQGMai61n3uAVNEbN5QlCW2MhPyYvSI4b%2BLcWB0PTDPBigc7WMZhQ4LlslpoN3KWRZE5Nm7hLIG24RHrCLCgIwh1n3%2F%2FqTFZM7LLMZkZgnSr8RS1LDs8sd3InR2etoL5O3MrMnLekDwFvbbBHUirwGZv1MHwlhwPKl4PAyFqs%2Ftm5Cs6WnOXiMqv6f6Xhsp3C3OVtsOJffvqC1PiZqbWtpfvD7J%2FgjlVirwrYHGntypfFxiySxg3v%2B87uBCweunuZmI5GTpymyh0a98jDYvZZ5743O1bfspPPysPLu7EBSZk56C15QmI9%2BT5tj1BUbVTxcZMIVLuZHRlW7uVCY9ePCOZ1ES7xH0l3V8UzcbTMBgnvnscVwCzdacPUAA4Ma2BL439qD5T8F%2FQh7OPN18Xvqtga9J6iwoGqzaKbG6gdWOlzvW2m%2BFu%2F8ePC1bpKyPD4PJowLLuZ0AxnYuz0pTtBLSH8yQEt24TB2ctad6wAW29RTPc%2BFyM2J6PvLmIYtwJJGLcQkrYo7uk7Nq%2Bl3F1Gd%2FcXBoXLKuSnke1iiV0JLQ6bfmIQO%2B34NNc%2FyLnklaVjD6o5LABjqkAcE%2BV3GeaNf%2BRpTTu4hoty2pFOysIUegqA72cM5LaGcbRQXjpGWt0wVzFx6556PfsGgO3sUKW8xozVSuid1raAM5V7PmmBDvcW7BOC792efn6LwCifLmX%2FXFCcOxXgOsqRQlsivqlFregr0%2BOFOtRNDCennjsWAbK3vIMVrXv2ur7a33O0SR6Z4535%2Bblm%2BpYKGLgyWDjDuJqsxP5dgZ%2BWXfT7HI&X-Amz-Signature=47458d99958681cdad443f1c3f071d4d0b49fdc0b1a50bbd6109b44f3dd27049&X-Amz-SignedHeaders=host&x-id=GetObject)

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

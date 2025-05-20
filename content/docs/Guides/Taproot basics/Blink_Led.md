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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKM3ZXQ6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnMcouwgZQaVHgcvfShBIj9O%2FTb9bZMVLWsT1FhNB59AiEA9JO8VIihayWytBVef%2FzBfhi%2F35zAg4zdYSOvaYVOEPkqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRgsScSmgHHAYeetCrcAxPZnyAPXSzeQYcsBbIwyFDTY%2Bih1CHnnKE3foB1qrv1yjvxWkTpzAz5%2FsPFE12dbVQFhNY0TGOloagbGQUNIH4uzVY4M79JP8cfEW5axSn8MTDzcB8k7WMoMNjvpDoH%2FM6%2Flp%2BmspFj6ELhsH6sc8j41pRD5F4blVrw2HWjub8%2BLKnTSq2E4BZFLM%2BBS76wrwzrLu%2B2OooWgTHmlLbJc6LDOD99USlOsb4CUDEMCLKdm5a%2FuemgLY%2FqRFa%2BfpyDYicPngKdD6S6%2FCe9e9gNC2V5bPWuhKngac6cZKijtdMURh56uhvKTzQhkMxstYIEfO%2FWG5C6XlmPXmeZCt494MlaEqRE%2B1dJDGF73GrIHhPiM5xnGP8D8Vdhb5QRizBa5dqdDJJHY5PKXxKsvln1gC2aqpRlr1MGhAJMs4qfIC6Vm%2F1U7E0ai3Ivrf0GSPYWSqqVaEJTGKtCtT45c4AKLzEUPkzM0iLFABwX3BK4cc15XeTykV2nPlxaGBpmJN7YD0U4%2FPyEfD%2F916Zt5%2FennuG0IROUuWrRNkJ9WT8oztHcP9vTW2k8du2OA6yvi8n9bt5BI%2FhrbOu0%2B8EdnZSWyklHHd7kCuL1Be9DFVnz%2BwUfjJeQebMMwN4vBvi3MLXjssEGOqUBZZaJtG%2FB7oatXICAhWckhWKT%2FPFp%2FrNSdv96QeulaaC2KqV69s8jmdEXhfz0EAEV%2FP60netKHOzs%2BDAyaa4SQen68d28g%2Fr%2Bv%2FCKV3FX2REiTT%2B0d6C3ftumBWEmnELLMfoR0qyhoe0%2B6%2Fke4ILMI%2BKqk9gTf6lOe7%2BWyVG6isGNM7F1OeHfLfZKKEjsglS34uXk2AcsFskOKxRrbLm0iVNk1kJm&X-Amz-Signature=7b4468d17ea4cdfab96e754c8b27192284682613188abc29087012b4a02701e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY72GDQQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqhy2q5USvlTejOmdNWSfNGPn4Qh1jxGLRj40lTdR3iAiAPUUIU163iFgk%2FaA9gguHLvhDfQYRaJMVDQp%2FQHk%2Bm8yqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlMyXCp3d0cn5PoUuKtwDh2o9U3Ig76NffT1uwQJzWR8CGmWgqQ7YJCBoYn4Id9W2r%2FCwo54Vxs1M5cbii64ForsWRXhlpwJXbhjiy1dUN1G6eAlfXkQeUf1xhouEKZG36WsvCP8%2FFITvpP9QLXS%2Fw3c2AZUJSiSuro0TKvhEUCuNpJAYeWAZXlOhq%2B8%2BoIelnq2nCMqEuoi0%2BD3b6GEBbELVbZLk64xJWxxgj68qFgjaNxyCCpRyCzLOcm2czZhDKX05pAEXhJD2qZrd%2B1WV4DiJeKskw84U%2BFdPO3ZrD007qGnBNCEsXZS9w3%2Fh%2FlAlDHFnXhYG57vS08T%2BSA0p96nytncIi4ozBMa%2BDeO2ItHGsSYza%2FGI2Xkl8iUYcewHXzz2oIORA3NlO%2FlMzy5WcJbJkL4ixzP8YyTqWopzU5tManvcVP%2B3skmOM6udiNTefXPSi4KvtscL7GrC9Y6fK4Q4Dn73sW63%2F58qqJJ2IssdoccNFPV1yRlHc4aItgVrwJ3IbN70LPsIkY%2FrzmVxUA5m%2BeV7CCkHw%2FOrWV5VaNUPjmrmDYAGhD6AeMto1%2BhxmxVg7IE0cTrp6dxzH0Kgo8RSzVrt6870%2B5MlACt%2BpMv93FbQ7gU2IPJxlVvUk1uzhjbh7%2BJ4VaXaCO4w6OOywQY6pgGbx5OYBwT%2FkRLvMmDVNWo5U1oMUqsn2ME6uK8TTpR9HqRa%2BfOyQEzdh%2BLWDEwt5%2F%2BWZp44QOEhW8%2BBwLPB8FPqJH%2B8JOPQrgcm1xVw3mVLsqdybsCp0S%2FG4dMB%2BkbeVKFVIZWLXGeC%2Bh2CC8AXc6drm2nLnlck%2Bk0Clg3AY5ou1SrcxSVgHlQl7BaQQKqpgPCkSMIdXC5jfMkjDMzjFY0dGpGWjrS0&X-Amz-Signature=d0f7df2c5a05f0746b951ef1e0c79be51689ff1b84f0223d053379d3c1e417ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

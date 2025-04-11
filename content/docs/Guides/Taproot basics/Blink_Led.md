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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNRCSDO6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIE4ZI9yVgUrYjko7Du86CC6fgtT%2BFoWMplieHZD%2BdwTvAiEApawWNxrQ1cc%2BrSIP%2FkPT5koOvfxyN5jFJ2PoTAZ5RZAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzW8Zu9wYRM0z48hircA91uBAMe%2BylIheURWZ%2F4cWVX2wc67RP1SZMvhGf4RITfN%2BE40WT%2BRx8taNiBA5j%2BVG6Z9EKKlrZ2%2FKjwxgE7b35L7%2FPc6D9OsJgLBmsnEIyXe8CBsZXAZ3cql5dr3f4X8HZHa2TdrWDcs8P3gPOes%2BoY%2FFWVF0dgC%2FM%2BQhgG2IGf4HXMBN0jVI0UmpoBvzLao4L5Ny%2F4i1%2BenzFTruLH1OiBuCaolSjvvEvLo3hbx8NhtXVMTCEr5h7T8R052IKIkFMeJJ%2FmwvKQMT%2FQrEGtpDnY3RHE%2BVHmvj9VA0jLLM7W9NfBuOUc2RrmkHyioSRTUqvRBOkuCnqKXW6LYJPiNG5VSQ%2FQZRwUY%2BeKdALXp9mQD%2BJ%2FJ0GQyHPGgWrchkSQ7d600Oa%2B%2BzzPyMfd%2BdmECbnKpDdHKbOzs9oMHWzoTFGgNXFgs710%2B4I1ukNZgWchuiRgli5Z7bBFWn%2B8pj0Qcg2kbdkZ2YF09DspylmttHdTKkTAbh53npVCrYgDVqwqSPJOOORktzinGAYLKT4BMlsMtRQLr%2FUpQBNkgiHPIvhXp2%2BucrlcC4qJMbfk5InHEBUTM4w294CyOcA2qiplbeqkS45R%2BntvSbTcVwGfudmOx%2Btb4d%2FcrgqxatozMM625L8GOqUBWnWGPuLPBmgftE%2B%2BVrxNCee8HxXR1wyrlPhksxSMAaRXpuPEfTa2XaTaYEomYYGvStFmTv3jdrzbf9%2F%2FwL5%2BPV7rvrPAxmmeQMP1ppC7A78og4QNZR8I966%2BLbLmPU4f%2FjtxulJBzVonuzpw5PA4w2ND0OFK6HYU6pIZRrg8A5LbtRJlcca33kngReKw8KmV4h6PGsGg10CpzSDm3C89Zyj73CGo&X-Amz-Signature=b02814bbced6407e13f0ee1ab350ccf6345f1b7534a3ef7e0bd872a8f1f6ef55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYEPPGWS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIHVlc9U4BDYGuuR0%2BhCjDbzJ0WX%2FKAamoVPWC7hI%2FVrqAiEAtl4kjv0kY5ofLlgMhVfl8jfbGfnu4LoT5ITvSbMoWREqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJph3SurGtR53N1WCrcA7r7LEVAkgiNLVspzkUOqhCHTjMKQy8vKQTZHuBquF40GY1dL2C57C3WCVq4Ael%2FKcZtTMe9ZmAMCxGWlfBMb9kPtAO13jzbEDl1CUDy21wQN%2FawSHbKiuLG1t%2BYrkTlOnuvx%2BHo%2FxwxPG%2BBKmL9eaAxRyPgFpy1A5T95y%2FxDRyJq0QYcCIB9YtEQfSrEzgw7nCcIwIQVps5SX15Jn7B1IihFbmnjhDGixOdnwxJUnIlEUQqoBVT4tLPp95X9MbvTLAfEIaCHaF03qddP10haGiqv2LVzJD%2Fqozx8UtXE6FsJozA%2FAJxNBzYGVekJQLFJqvOcZXgFeaGSUTH5hF7EFCyZgb7hNHyoUXmgWeT%2BFgjBj4z2cYUwdUKqry5yRhZffJYvSCaqIM60uctyTYiO%2FRe%2B0MZiphEqekWiv1F6xkqqoNZsasLfkGhty83XpW6KFrJWgHF31Yei2r865qwk55lOMi00i74IOPjYgx61pFvzVQic9fsG89VkDNhurQ2C66R6OaKDxLRfTErK6900enxyeR3X830ILZiIrAQe1MIe5UtzeJEp%2BnShpcaR8miejmlH4miTRWsyNL8cS9DPDej5SJj1PO7t2Jztf43avJfLG0LHleeymu3mKM%2BMLu25L8GOqUBb8aiT3zIqDLEmytsk7qKhUFP4348q%2BB5vCxWPP2oPDJykDirDXIsg8g5ZqSdagV666jOxce5HVYS%2Bq%2B%2B0By2tey3%2BxYGpgkntYH2rnuSj%2B7Ba0pYF2SeJaheEFsEMoeYVqfIU345%2Fq%2FAtlAcoxM16GXMGjvZr9cvkp7sX4l2eOAK8meFfxfsLbcldhqeUNfkLRDrD60MqGVUQG6pFVNMwWsvnrdN&X-Amz-Signature=77f1eff30ab8abd8bbe59c8d54a32af7f03dfa0c1e1022ce3acc4445e438b250&X-Amz-SignedHeaders=host&x-id=GetObject)

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

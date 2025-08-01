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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHGJDIOE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLsaIaCocEupbSI4REr0lSfQD6X1O8xjeXvg%2B6pZU9dwIhAJJG5XcVVjmgA06IqZHIFBUVdzBphIiLM0MyvzhYDfU1KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgwGuP932SVCNEjvEq3AMHDaPKlJ4IGMcsDamNtJ8LgnMAqaAraIh70KIYb%2B7xFqGa49hLC9yP0ae8lk5u%2FUQzuBVQrL7FOn7Aud9N4PDVLP4oih7DfSO7kBiHiCF%2FAlhE7eUjhnSHwmDfpDHHCKV2Cdf3KBTWFVnDdkCBYscqrZTdgKbP61Eu%2BobjTfqxHuXf1PnVcdCYhO8t4GK65ddQMa7IEUWsfLO%2BIT9x15S5%2BmsZuJynrbqfvuMRa6tEdgvJ%2BHBfnKR5I2ATcgTZNrjKH4yAmDbydr1unn7OToJyVCN4yYlUyHNKmNwDZD6vxQLIAIqraocD6VhTNE%2BDW3mRTsW%2BsPC6RbgV3JLYe87Vlz50SG6F1sYLuGRfr1HR%2FjOtl%2BfbHH0G8kDXjfZU5ZJYnca%2FoU%2B%2F13Xv%2BXYEyFso77q8WhApEPs4Zc%2FI5JbSYPfWVm2bRzVJWms1I7PO6eBZc3nsi0OaRaY3NtMt4rPA8V2UDGK5JDSx%2Bg%2FMaV1DQFr5Dgv8o3BR2A7VrPHd1E6RmzhVPFmWvsDhbmA2dEwqwKraI3PAz8WQn3o6NpJZvT3c8IxyA8QgpYB5NmKIhlObJkVIkG803PtBjMZvoMD2Ldgd661O67oHLTOHpo016o2vkVu4AqZblIO3TDCNwbHEBjqkAQkah3dVKhdyioB3ljUXVR1Jd7%2BWRx5h7w0bIbv18OjAWez%2BqZVvwzvW1kndHyG2l1oSrJyHBtMC4BW723i9DbdmuSTbPzflT0QzD8iZmuXD5xKKJOMfoSQmcCdTQ4rNtd%2FIW84urtu6m5qGlS%2Buc2SiOJPcTrITsZeYlMleFA5l0mN2EI9FIXeDzLeSboOlQWVilzYp27kDv0f4MIh2M87l45DP&X-Amz-Signature=2c81dcc51d5a3c4a8d4d5427714124486c482cf74fc8b6d8aa049c4cdb029c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7LF5UK%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICh9N9dTHFiPfH62KwBy4Z7TkwUq96Dv8ZIwal3xRCgGAiAzxse5KqBD1MhEmvd1jNIqVmTvYN8Ll8d2yqJSuVKwxCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOyJgTQhQ6kDizdwOKtwDoPgPkHj%2BxZAmochYDcpiLBmxo917Gu3%2BipBlf%2BI9ebXtwGNelMPl2gLzk6N4oHny8f0m3SVSJyOG7em846GBQUjZdxdSNH9WXOC1VVxk3IsDCuhY1qTPVyQ2Vxs8lhRJ1LvPuS%2Fapqiu6icuQe6hECZXUSD9vo0oWOSpzQK7Q8mJBGzq%2F2baZxALVMFnMnWqW%2Bea4hrnN1EtmLPW42MJLzvOX5plvMgNLsJEsx3B5ZmoVLWThwnA014HZeoDREWwI7ekFYlbXYEHfCUi685qZH%2BR1r8%2BlrauUrBt7tzP0p4EPAQV%2F8adc6PNyXpGkX9iSSRxxqSfv%2Bgv6EEr12iMW69Als1J9w7970KP34HADhAARYtED9nUWj5Ig5sVRot6pb1Emjx%2FWJ%2B0xd9Ukl1c%2B6I4YNe%2FYa1tDheuaSKxLtXO%2FroMjw2hNwIU%2BtmqNS34Oxr%2FH1ixDLTaG4q5fB5fSRRUw5KueZCGGxZ42CAKV77JycyIivyDEmOkjhrijEAvDkJlKDnYmXCuFONQm163wtDEH6ClbWBIKQEVGnqnU%2B1xLxj2DcA5tWDFyuqG8MfiHfcl1T4FKGdmY2Zfl9mwdvIfoOhCFvlSKMl5lQZTw4vipWsdPvNLpU6HFnow5r%2BxxAY6pgFz3Tf2GOqzw6YxNx3osKtFhkrEvhdnqPuxLJob8XNFwSdI3RweCWsfbY81STKEkUGKJdmqZMmXdideJNSLtWNSMxTaa8fGdbJEZWUrTRO3VU5bH%2Fm74LyMpVGjRCOLsLMfk7LNooU7O3275TWcXf%2B5eVP6sCLlJ%2BCct%2Bb5suKR1L9nrrEMPSot0tnHtj5aIvSDzDq3IWEbPRx%2FjWnV6TdGYNcfrfyB&X-Amz-Signature=d1553128795818378ca0aa4ca2a0c97eaa1d1003023bd1cbc7d5943602d4f98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677LWKKIJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfJGYUQsnH85rEvgoHyjOdGoDkHee1%2FFDiXkRFZqxYTQIhAK1%2BYG4tOZjBBgaNw3xRI8OFOBJnWwaFfkZ3Yanrd3cCKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZNhXIeQDonLi%2BdG4q3AM4Ksgcu9jfUwyxRt%2BCj%2FlTfE62ub2Kq9FAxNtYmpE4kftXuFwccN0wQTnTB2N5Ia%2FSY03GT28m%2BKuyrPCtpkFSwG2obit1xmgf9Yslj%2FXVuSGsty2ZZttNRCHsaoXK3WBuSPjkavVsWN8oD0FR9seCQO8pSlGSusMMbDPbjSqT3lZSOAnh6qu1f4AiBz0M16yv9Xd%2F%2BQDrru3%2BwsWtZrZC7ocw2PaUfLiueXBneyKQ02DsTIrx9yjPmuka9UCTaU62wYWHwKCpOrddX46KBVshmZyZN5OA%2FZhmwzAEZfPa%2FnmNgbo6khbptmrRMl3cmJO4OhOivLAiRayS4WLPSMGPMZCPCpWRMgvs9ZAUdOJueu42HYnMWO9p7KrkGPoH4zvLhpkhHtmztiBdDMEwHzO8KOmFproIG2qpmf%2FWptUzMW10GApvyRk%2BZnMxd2diBahl0R7Xc2juwAF0G3Bt31%2FyGMivuQ266QWVmR3JDWF41mX7e1fdyPLcI1Y%2FrbLY8VuXykZP6odDXAcXWADcdzgoPSEDHm7lk8lDBbYVCyfZqLLiGM61dPWOVVvLgcZLD%2FxFFLan31r2%2BRmvNrsWXpacn9CE9GZnntLSPu8iXX9R%2F3WIAQm6VYdi3nTPeTC0neO9BjqkAdg%2FDxlB3a0fqTIlyQEScS0VMgNrlrfPiRwRiyib5xX15vB%2Bh3hbxTQLJ3Ud%2BtFADdKrpJ23X%2FAySQVp81q0xzMXpkmPaxjN%2FBpzMJrgvDYu6%2FayG21znArpQql1uW9AF1aGHB6xjL4BhA8wie8yICsWA271di0nFT33wMp5gjQy5wbpbiCPtuBTu9ucWnPJM4dsO3KMOJ2aZLaNz8P4SFABHAYj&X-Amz-Signature=47972c86a24ac126cc98eed1485bde3bffb32e5a8d69907ffad5bd8bd47ba4b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNTAYRAW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOVlcoKg9EefaJF30DqDSFfDZviZR%2FFmqQUm%2F9BgyuEgIgANN3GdOg0GGkVwHh289luNRNgMGHiA6tq8HwZWcHPn4qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFojSEsf9ntPvyjDeCrcA3FgXZyOsDfi3dkW%2BpFk5k66DFsDjMBvZRNKtQJvyTPbKpylKQESG8EkZKNuHmVRi0FwjENzNcMJa156%2FjyqCCQXQy5M2pHS5S4hzed6yzCGUDiXh%2FbOJW1l8yp5JMUXITM6JD82lNeemydJM%2FQe5pHEKteh3PyHgoHhM1gNWcWFb0nKt3cYg%2FBj8U1Afr1tj%2BuB6s7PCUNiHhcTHAv1y%2FzuUn9Qd5PWeCpRaUMSSmlstEbxAKUUVgVEm6Jzjtr3UZgISsKd53Y0uB0P8q3tcHn%2BK8tVu%2FkSkknnOjzWD6EBGlV162bW2nUFxMH0u6xjDUazgDUIQV3FeaosT%2Bk%2F%2BUWIRtzb0KMu7pDKEA77czigwvIgvmd%2Br2wF4uN2bjLbGBRniSCgrQqaF5ngxXTrMEDF1u8Z7Wqog3BSxzUrDixc4bNMumdGS%2B%2BMs8LmXOkQxJ0otQLAmF91d1oA5T%2BDuabbQo8stTAGdDyNR1htAaL3RajG5rcoiw4hKkbBqp04XkQqyGekh5%2BQBbppQJGoOm3WgKZd2%2FE%2FN8UR95N3zIaTR3Yil3HjOJWwHy8%2F2ACyXtsc%2FyvWkkjaNvkxSEOTihTcmbXwoHwidSeWaoVQXOvj0jPO64vMWN28OLaPMIqe470GOqUBTNL22%2BxAR5UM1noCw6qSYS82ZGX4OPTFr%2B39QN8eVvHhkNzs%2Fmzc29ynWzoVsgvogdUp%2B4qZDO3iIph6zCC0RbhC2CoLOZ%2Fq1hwGrktlGq9SfdxCS3l%2BOVmkPQ6onBVbwD8yfr4k5F%2FQA7WI6xDOQ4ZZ%2FjMxcULPL5l9K0d8kAs7sEsLajT0mlOuDZydBIQM09cxY3Lx9Trn5MVom5olUcY40aDi&X-Amz-Signature=59aa996a1bae24292b1e181ffbf31801034a7e1d7cdf78cdf259fa710442133f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

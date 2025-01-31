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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626NC6LPX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJUF0WfHmN8xHU5dsHw15AwuvMtC0BI7F6KTSM25ZKSAiEAkBHKHCzEVyfcbOxYXCn8TEXJlv7oFB5S87iq2TvJP%2FgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJN1ebh7A81fG817ZCrcAwBDzGFkMsOFDFdVIS1ikvf5DADfxcuBp9pMeKeAVooMbITGrCpy7ygTu1bqngv5l%2FIKJGq7%2FpOJUaU4Walgr1PTDUTAl%2FXSme7NJLJMpRJrGtoWamHOywAedO0n0m7rrLowz%2FHLXccBiXOF4Hjg%2FDRLTF46o3mumQLt%2BqB9ZBpqnoj1D69761k9utf20cl%2Faac10AHQGaYNvmmZCx1a0ysWNWzvTxSr0BZaFPafK205VepubpllnpEeyBdti6Q3B%2FKisRm%2Fx9K4tTj6pKcOapP%2BfxGUnqW93FjtdwUFwp8oIlkJmWfrTwiDa1C9TcNgKF%2BwRutZuuUtSWyiByUzbrAvWvllyt%2FKMtDR17yzvRE7ZZpxeob1og5br0RJeZiIl7aZi%2B7j6pVaTMC8ghGiQQTLYD2g%2B2UTtds5pDjt%2BJ4cqUmE8n9l4QmIW0EbrKt%2F26u4UxDjWA5PmKJyWXPIJT5FkLg8V9sPiK3maa93m1UKTH241QhMRelSh3V0LrFn%2F56tv2aM4UjeYkzXt8u1w%2BPsrssq2pvdVQK497nu0x0sLDjRMICORkOD%2FmAKBNHn38jx9dY3VjcxCcLja8CuqDxoEkPyH8aMxn8yDo%2FIlUA%2FOXcasKp5CCk186ZnMOXS8LwGOqUBquZdkC%2BmZz44zURGoH27Qh3NC3JDUW5TCCq9Hakflyv1LBk3asQKjk7kd6dmm9MZOzAV%2FxcXEdmBSftsuthiAEQ5MIWNBNoxLU4F3UHoCm%2BCDoq%2FDWAY%2FsLXMK57RgvMglc%2FOC8SsqBXbEWXQUc2z2YALGwuFnTPS%2BnJ%2FhQ8%2F4ba5jXMIIPpyIi%2B2DnMsZJMy6mKq72PnNzVrgaVgrj5jdhPoaKc&X-Amz-Signature=9a101d4d28306af83b297781c355ce261ed5573c619368786120ac5690092976&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AWPCY7B%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4n%2B1i4aoLvC75ZHbrJYfyOxmlI%2Fw%2Byu9rjm80aK2FsAIgAcpYfxYvhaL3ZPRcalMRhdOWR60j27xj4GLEgVCniSUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCaJehC5P03TdKqxCrcA6x0lMExfeXPlKTSG662z0ITSSiPzEzk1h6XVNis0q2SOfAXaYpRISKHgpL%2BpvTufD49IgTTjMCuFJWB5zJ1NE%2FCxW7T3cXQwi5yN%2BpHi%2FMcFqGD6zkMajzDnEDPJbQXFW0zByLYxlEYzMf6Nmfxou0pVWsGdY3s9XMdBmua3OmvLuMmeGsjRKZRgctDA0IJ6raHGmDGY5IaOsPsZ9Yu9rY2lqnUTLGNvBQ98rzbJ3Uo8WK7aSH1V8C9EVXK1j6DQ4xnywyziKpY3gO8lryulT%2B3eab7UP9LH7XBdc4qX4rduy3yAWVLOek4GfOZEVZGU1ETi8ZH%2FFk%2FxpNVOsQERYakxCuN9KQlrY3%2FORYaofVBJKyPgV97giMy110hTm8mDfRbbZunZ8HAUhX13SxMo2fp%2Bkyak%2BJXbQxwS5Me%2F4JVhs%2FleguJI7CzSGsARXqTbDhMOv9hpEe7EIttlGeOJtOiJ38tz341cWqzTQRc7maZXZVTXDwf4K31hIJAv4oTyywhpXw2Cl%2FfNyDTwhh1mETSqItMqJPfxjaKljOmKsDvXHX0JbQjUufJ2EHca24%2Bmy13TIdxavAaRMMWJo280KNlHU9membGfd4%2BtX9JsEomoOhOHrBziZ6cBo9CMOPR8LwGOqUBHfyFrE%2FUuQoPcukKlf1dUH4J6prQ%2F6Ur1GjFi0COxb1VF0vuiMUzvzG2VDlo12%2FvBhPxinCVIg91FR5Dl4KCS%2BSyepMKygPYfnXFhf%2FhbKQA6719Hyd%2BA7alU3CQptcbrgb0veuedZ3O2jTtjg%2Fpr8pXfsIxOP13rTLpWoGvFM33fwWQshQwNvMrmKrZydfh%2Baot1SmU3iEXCMtMGcS8hVUkZm1u&X-Amz-Signature=4382f9f2e7fb07e9d349a1abef3f86ce9c45f1b59dee71698822ee01f93be6f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

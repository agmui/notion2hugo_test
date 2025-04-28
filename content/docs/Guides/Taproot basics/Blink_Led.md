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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UG7AEQN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA36b%2BbgqhkW8puhaij6jBykGIV55OERvRwvy%2BmeHJf1AiEAizgM3JoGQC5IcUrEYeTBto4CfgubySPrfpJFGL1gWIkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNlnIbDuuktZ1R6%2BGCrcAyyrDdVym%2FhrpHkN6F%2B0k8D1DflMXSPDfrC0B9%2FXCu2bZ82VaMV5%2BlSx3Gk0YOIZFTVHul1VVSnOP%2BXkOlKucJqsqb3cW1h3jMhuhiZkG0IjTZHB8kr5szNaJThqw%2FvofhORypTmj3Oi%2FkglI2j%2BQnRI%2B%2BkqauqBGNmV2Y22xp3PlXuZMREYUfiZSaKHgllhR7PzFPbnI6purhqVn%2FyZG9y5wZUa0acpu8a3JojGXO0450YCH%2BEuIpHZ2JXrlOEZQKFkq9q%2BWuZ7KgbjXt5X37o6DbAGNxK9LtXOQB8eor9GJzxvqPw9ht3pL4TFIk5%2FRinkBU8NP%2BywRJCcooqrBvmnTW1n3B%2B4lhGh816c1oaAUStn0cpGWUpk55xfJioFEfcqB1ouRDGAO%2BrGq%2BAXbXPHk7vEA9S7n2%2B7RZtm2dhuV1kWY16lIIKwLBy24PJWiZkQpoTbfX%2FNITy%2FDeOTYSQCX7OiIO%2FC48kRGncLq4g2cpTwN0mstSbEgj%2BZBiosSQxTjA4oKVSzT8OEnwhW6xFiZX2BybA34cts6vgCOlH28lhr6tN3k6ZUN%2Fc5OAqVEYubHTlR1LZcKpEcPc4VWbzI96%2BsYGCTf%2B%2BayiBrYdsL4eatyj8LC6KkIYWvMODmvMAGOqUBLwlFnbSbt0mvhEHqzp%2BWNsdZoBHo7neb9au90oV3GGaRPW969Kh7jt4i%2FmQAjSOwd5lBxt1vChEr2MdNIvgpFQZ4S9HvHyp3sVTVmUKh3Df2qk8u9xPUhn7AewGPU8iFHSMsZDkzGvHSp4VneQW8hePKxG9y8rbt046xgvmL5YSipHnGxmf%2B%2FN%2BR6oX%2Btkk2KPIYxtL9%2FJVeUik4dN8ZHZPAQjws&X-Amz-Signature=3815b369006b508b505d7031500114b00c166c112cef005b2f506cdc045a6f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBAGYCD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPDBaWzhNlsWDTi4fFk2c6i210c4r1Ecfdw39vnJW%2FsAIgYzEI29EbIs3g%2BWYCZKFIbsqhWUJqBWum151BgSm3Dgsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLfwrJg0swlLrzjtgircA7KlCP1%2FWL3iFEgZR0W1QdXxjHg%2BI1EcyD%2FNUcECjz%2FxS%2Bv8vJraygijFGI%2BUUhiZCFzL0ATP6PRPovzIlJjjP%2B%2FodFeIH24cIFl1DsUH7RZJQX9DZtWeWfiAT3yftonyQUmoVMt3Dt%2FJMdSFUQAUgSHrfhJq5vvFjzTMQguQ%2Bk%2BOQY%2BexC8Urho5UE1ZymSycwjIgxaOqWQXAp7W4ArncwJxP5LBy7l9vZijiYNG04FB%2FrufI77NqxOwylLaLjTOxY0GVmv%2BV5%2FiSoDPT3BPqpuEjciJ2S7iRSy%2BmUKQJ%2F80PABsR63ipCFAxBNznZ26upqAizBNMkxsWOAvliU0LBGN%2Fss%2FHKea5lTj9UeLHhYtoT2ubGUHQth4aiP%2BjhHIDZ2KKNRakBsLbmJ6lqPipgZjUjaT46IDxDLAZPdlaBC%2BMRqNHkkXBcinItZ7E5KwPBm%2F%2FywodGtMjeYmPxx9wkRm9%2Fl4RsQ5Y6jMCpxd1T8IrQuqP7KE%2BSZEaaB%2F4w8j09urSHcgz282BcoCR4JfAz5TycWG5wI%2F4i%2Bzst9L3EuuUKPfWDI8h7HRBSiEIxPbmAYazQMLaeDL%2FkmEKHYBKZyuPG5qlP3vXfjMRnvXjjmYCv3k4fCtzAEaKyoMODmvMAGOqUBiA9ei52NiRBM2XpjEBE4GGixQX%2B0y%2B1NwNU5MVkO%2Fm2LZ0mHplkYDPVfe78iGWdBEiRFX%2FCo23FwC%2BSC3R7qZrFqFjHjeKZJ%2F2pjm4Za6upgMt%2FQxmFWyIPxCCpa5ziLbYyGe%2FhJwHX7WvgqYTquWLdUtjKv0MpwyZJWP2MoRZSgd%2BPmZBGKJpMGGdEGDVMHneHFsWnY%2FuFo8o7PNwkM4h23daIp&X-Amz-Signature=182e987adafcae2f200ff2b50f99229e6938c1f93cb7a98772e737bda5aac28e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHBXZJS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCICP%2Fp8uCK7SFQcvwQky3%2Fx48qK4YBepaqhLa8T9bzv3YAiBL1cRq6shkUCz9hOIDZDIDUoj0w%2BnbZJl%2FIGD4T%2FM98yqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Yi9q0oeVU1%2Fg%2B9iKtwDBGheCz%2FWvQfRpbxH0IjoNo63fFcY2J%2BfPJrg7RywYCUdvcspER8am%2BECdaNem1dGdvqqRtJaayXhPe%2B8nwUNMx8lxjs8Rk0mdtL8DCwoh3%2BvsAaknaivMT6bS62xZkxwbuVTJZHWlOPACKoc%2BWFubXWU25ghZeT9bCPTwl9D7BDYWXNiW5ZW4ofkn1EZ0gk%2FlS3dft7WJmQdSC6EChSqLbI93xkHH28WXql9jtA9595yi4tYF0CxVXcHIMDTLmb9uC8JNrlZxFmpuabuvtwkO4VKBZQKXYoZao4a%2B%2BtZjijsxi8V4Ng4WEKE6YCXjytWw90wNviKk7wnzTaoXAd1QETKAxxMTq6MkVM2iDXLt1EDS%2Ft9787OJfCDRBQneRpAbATXMwEKsG359EvqOb5RpdVIN%2B6c2XmpENOpTOWs8XyPRsxAXNEyv2JTRyhaee9vxsjSbMsonyjoKir5lW89PpmUg8i9%2FkfIQau%2Fgz2nJRi7gaj6Jw3Q%2BGCfyavllurTQpjQhgGUvffa0A%2FDiLUQjc2Ui5J0%2BwfEA2JiVXteDJXDvx1DWbwrC0s40%2BSyxwK9DcntTi65P1MH6nv%2FF2JNKOoPjTykkxM5i%2FzEkNWZJTF%2FvrYCAHSZO2uwnNMw1fvEvgY6pgF7DV%2FzZFVB6tNdJGHjjmszXsrREkwFzRAkO8SEOE7WFzy6BFBQenw%2BJjfkw98p4h5jCVWvjinmA4nB0rZkf5H91o445WpQlFlAAVUrkxPTNgjfdgBv8EHPFLXwREDMs3lpXJGXtCg1ioJ%2BTRlpBewSXVpe2vTYuy6%2FZSFnZHGOP9J51EnL1jFTBK2XTuQbPgnbi%2B9BnSDRxzRFtyIl2YeQ%2FnBmRBbJ&X-Amz-Signature=902536cdfabd9f668ee6347a3f584da5a192a8a55adc8d211751b0412237c486&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BTQH33%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIACB5ndiXBR%2FcHc0YFk5IEOA3eMlAwX5NTKW8Bq0IqZ5AiAmcH3qgyniwNXdQZhyTghjx00g3o%2Bb1Gw%2BDMAdsCajkSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYDoLhxb2hsfSOhBXKtwDbIzS5pOeu62fs%2BGS9JH7rKXXVtio74Ea%2F1q%2F02aPqSfVQV9Gd%2FIPrSJ5Xq0%2FaS0Eqm%2FTJQqqGvTxjFxDZyeTdHWxvDpG46IcsMUlcC07qy%2FCIvlxG0O%2FjV79BL9zO7vrrlztncy4j2%2FeWBOuON1mBCd8QRuAOCJnEOWXnTCB9RtMMFnjewJnSTBVMLBfUm%2BRgwkoGt49996863GEObRpTho9zXJ%2BmjebHlsAnFpE%2Fm06ha7lk8aDDt0U4FqqHz77zGScahBA%2FlUMC536Oh8XSEoMDdbEmRY83o1mG1BvRAMCZtdoRCTIgG%2BBlZl1k5c%2FAD64IPyon7%2BFcGZLJ2t9HEghJsDVStx0E3XZT4%2FB3qYIFNk7TP0RrVeXmoDnlv7g8NbWZpeg7JmMbCAC1%2BxqHp%2BaMJE2CjXrxR2T9VgiOgs00Xq6pSrO8fsdNMrzwdop0CYOjtVRcgoNRKlCS%2F8OnoezIBcVOlugYhtFR1qH55%2B5W%2FSm1EuA7YE%2FHuhLw9TR%2BrpQ8YhTOJjmKeXTAWt4UFsCEoYA8EBxWM04jMmeN%2BZB8KuSAuh9MRkrerE2IcprtaEl1AlidvehU4g6aTpW6gg8SWo%2BRDo9YqzzqSS1u8jOVMOsyj1UYAZ89xwwv%2FzEvgY6pgGZi3q4kUiwhZdmcbuK4M3%2B%2BFaSMbUaF7lxZ%2FZKH1ms%2BN6fy7SVqflHMobt6O%2BzW2TqpA3wjN4mG2uFJ0bmFxOo3fh4EvswVwHLFj2QVlJyn%2F4qRqmNH3qPPhzeKQaWExkOp8wByah%2F5Gmv5d4TUwQCIMYc268ntScCPxnxkwx60kwOSdcbR7ktJHU%2BvX4vyPlUK5E%2BMn90uTYRusqc4QPa%2B%2ByTZsOC&X-Amz-Signature=abb8cc62b91f916d85a3d42c9fe814e77dbd465b82a79c4b2f33fa1cff952dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

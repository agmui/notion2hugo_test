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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643A2PAJ6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAvcfkNvmd7eIqWNThjNAs3hkzIw%2FuGHHKnWMvmLv1RnAiEAuHcm2gSY99xKxgHsoMgPOuhZMCQdsnExNj7ZGDu081Iq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDA6UX79%2F7K%2BoFOvf3yrcAyPTqK6rUh0%2BADiJf6JNf4aP6ldQRolIDQngYbenQf5A5hFVSy5LZfpcT%2B4DCt9t7cb97csy36WWVobS%2B1%2BizrfyV7On2DQGnTdfnYhNkhHeUN5qXit%2B%2FlWA03T5pWKe3B3F%2BCHXYcWJ0GRUadOZJ5RTYT%2B21SdD5e560mAkRVHfg2SdSY6oxs3W9%2F1nCosAaqEyPxaGYRoi%2FX8CSj5AlEy6%2FMPMLbEWVzPaVn1Ko6NPaUAjYkZoCRA%2BK2e9%2FSeOf55Q3qrRktbcmtakVBTt3TvX8DRYR37VWIXzvCrEQ2d91wwzdgn4oTo%2BP0eTS0lPbLoAXXt6fdgIOrm6c%2FSgj8ia2aHb67mT2lmKe%2Bxidbeo9sfFLe2803%2BI0NsSg4sNgL%2FsultVcezU3vJ0dF%2BvvfMWVWoldG2kKIKxLE61sW%2BQ7MeQtg7qg7fAsndjPBkuLFsp9IS3bE4kGGE%2BCevZ0Tuh4EyVA1zP6hd3jYPWTjV6VAGFnlCEGepc3YTMvxeh5qWz3QrvrOXcXljoyNejOObeFxF7TOHcvlsqsnl8WZH%2FwBh5dunoqlBYljPPU8Q8AaAX1%2BxQ%2Bdxj0kZO%2FReCPE7QdHCEfVw2nC24DQAQzc7khRZR7mtHHQ%2FrVIkQMPOP68IGOqUBB7lQzWlujBe7lM%2F0AEGfvVkstR1lzz5l4VPUKcQAxw2MkojPuUO6ArkJj3L5n3pcGvZelZLW9oR8iTXrhV8hIlC4jJ0WHqV3%2BV3arWY5IfxZqTjdrtngTyilvF0hobKllY8ydlBvrjMnFB5Oi3U588AGfhlhcAV%2Fp6oFVZhWum4BJFGk3jKYAwDVorO1JD80kq7SXo%2FTgHKXU720ialsKfsi4YnS&X-Amz-Signature=95715a0479acec3fbb4dd96bb32b2b4d36d404f12ca00d0fedbdb904f462f5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7XF4DIZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHPfZiy54cABSObUGxwbVamM%2B41yuEiQnson%2FyjntTgcAiEAxoD1QWQMRRsxdLJ89spTSXBzmWmW9Xz6EOHlh55vArQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFDozO2si%2FS9T1I98SrcA%2FZVN8ksCIfK6ilHJq6Y2UiT5U1wZVmbCFeRPnaTYEjVMd1VSjrvgRupTLRaoDTX42vf74TGwNQoDenxxH77OZnbQwrKXJ9Gf4vbRiMveWdAH9VmqiALEdavWmiSbTaAf15sKP%2FwBKDeRn5ZEqxFrqPX9acPmoLPPeaNNh0vV5aE3PXKT5ABzRhuz2FFvBkaKRKI8DFKKlUx6PCojTgz4ZCnwXJfgZQosPJD8WgEAHP0l7WjJqwHJWMNnRThuq2q832%2FrKelaeTbzwpxXC4%2BXYUviX2YWEBS5im%2BQ%2FeMGPxGoROA4KKBXfH6AQW9nwCjw85zNaUbgWt6VzBknTPYeGFoEufnum%2B%2FG5AVLtoeYnO%2FunpzLi3x%2BjxB44WvEJskI1T3ehCR5JorDUi9zfdZcJ5gcCi0%2FUEazU8P3jTyBJ2YcKr%2FOR6u5ZNAbvjMiy2Uqlc53P3fHnqDwUBvovmSfK945kuCURWzZdBx%2FPzuElzMdtjrt5nkLV15nZCgoIltoD2RhzBrIcYaQHAUYVs1YZsT9W33h66CKLjni8GMPgUC7T9%2F71fkO3KkGN4wX6H0foSRTqnquBfV3%2BpF7u8bEMMlMmdxApeuxESPbxqhzNy8tB3USN8s9GMqNLB3MPeP68IGOqUBHy2wEiMxorBPQS99jLhS%2FSknG7P3v93v%2F9j2E%2F1nIqE7LTywcRBNp%2BqzBfmg9GUWpsHwHOa167ysE4vHK1y%2F6r47lKrUl24VbbVbr%2BaHNIHeDHxyVdWhFfj5Grd%2Bdw%2BGhc1JLNbjkI1pbxY9TEZgQw5n8msxelQyWPf9%2BbAgg463FE6yVJTIMApzl0dvBjPWcsiskxt8hZlKvLBUHx3byf2xJGW2&X-Amz-Signature=43288dc2944caeabfe805264e70f60f1bae81ae242c3e9496fee9e888a9a041e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JOMXQGN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDU8E%2BhWAHYYSrcrHrfqUQ7BHKMRDmIrocohMPd%2Ba%2BmLAiB%2B1PEB72gEEDJMzw18uyVz%2B3DQIc4AV2cyQ%2BgvhsiK9CqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMW5wphZw1rDSEKibKtwDLrdoWZ6lRIFElSZmchT4lNrl%2FPfqs1%2B1UcVRw6otMAWBYhSi%2FVTI6ENnveLcHzLvi7JCBG%2Bri4wLVIC449%2FGqwvz%2Fo3Hjc89SwN3JOu%2FSkGTUV5c8a9LY1b7idyb97WPDre7f4kP%2F8oMavAhsOIPN746gcS57Ljr%2BrgIa1%2BmgMKbcgnt0%2BfloaUzGzoR3wRsKjLyGCmOUTAtHJ%2FOMNA%2FjMSQKXzs1YY6mYzZTM%2BRyIBSpZFcQUgM98GielH5a29TyPaZAnyOhmUarWKR0zrwnqpsja%2F3YPnJjC49d6Xyrc7UBtFaFvDbVDhl1ajp%2FjDXkMaY7OYH9WT1RtTwu3KUvkHPztQ3fVYZDYnyDr%2BpgLnvC9myAjFnCG1nwOcCADQo7PqzZHUVhv9IcOcsXn0jWa4kbXogizHq7Uq72ij9cj1BOVmoRP%2BLlp16WwrKkZCixvlEq4CG7SiOnF95YhVn%2BCmQ1bXWeOah6cvPslwKT8u3daTFtlLJp61Z47KgKRRNwI1S9RugyxNeA4Dl5QcmLfFDsRmE5RDs5UPjmcP8X3xi5Qb39SfOGOmflDKiuoFHJihtqlVo1BfCUGdCZDkHYeszYysWv6ss4teazbcvwmk49oA3nyxzXFA1LVowwZKlwAY6pgEKYXkhfef7cDctVLTVDM8DIjFB6rB04DH2Pq%2FdeJsHViG6QG04NTykXtBpkRsS%2BZR1y0wv7eU%2FO3tYrOmdG2iYwCUjtpiTAs5sdNfp0DYZ1Be7dC2SNW5fTeh4f5dxkYB5kICtjlaQjuKXtYny2FgYZg9qyUQ7QD3qGbJiCcVsOpFuizUzggZUL0EN96v92JExwVG3w8xxhzSG1ukHHw3xK2U8GCHF&X-Amz-Signature=6a0dd825c56c7f7091a6ff4a8344ff2539a4b1104adf2d3e32c80fe597fef162&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKVQOXX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIF9TqWSEm2EQTJT2n7yIJaW0mjEMy5ETjeb4TfyVyPTeAiEAtNdTLvhA9oUHfNo%2BgDfWiWKFoiQjKwsYjZrlOWVQMkkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJELG6M%2BXdZpACANxyrcA53QpsZtyIbaLa3Y1mtoJERvmLTAlL3ifbCPQiaqGjEnNh32mwmOPxH1jqlTWpV5Y%2BQgo2WN3ULkijiCTCLBYZaeajj8q7yXPUvABjo%2B4G3K0xfvGUPN2N70ZLe71VR83WpUFum0hEQ8gY008R3SsGGyomHy3f%2F4moqlEPuW3zRbwlnLPJ06tJs2Qs7ICOkTfwgOnlRnrR3xo82Qf7yPkGc45EdvkXBD0s3MFbOf3Iii3ADpAsV7Q0ZDCFotWCWCSKuzi680MT%2B%2F%2BlUfDPQVzYvWKTU5YhQCEnMIKuY2Ttp3VTktzKJXyQTIifhX6svME%2Brlgcefoki%2FyXvGRDyEOrpaCoEOvy3koYJjrCLJftbudUIHvYJoF7eeF6Z87uUbGItg6otOk9g4ZJPIZ6piwW%2BrC8XqcQRJl7ufrntaiWrbmuYHPNPfChxe4ecDthizerF6PbBqjJMrzGPdz41vzYRZvOIN6kpTquCOzILBR%2B2GEfMI962F8KLQT0x62K0S6B5Vgwu6f2hH844zotIksmTYYl0U3qj5kt77arsKt67JluRuHzF9ZoIbakIDV4rua6iTe23whGg5pMGqKLH0fKSq0KeoG8zBBFbTcv7n8BOPcVC5zHoM1trrYS7fMN6rpcAGOqUBPmfRsCAaLp9xU%2FxjtEKaL2tlH%2F0W9%2Bk%2Bryv9b9e4THkluVB%2F%2FNGWtMk65ZJmsWaFSPmWkJCV4CxbG18Giw3Xd5%2B9ACW%2BF55knbt9mfOm7%2FKwf4bh4l20DmqjLYMgZa5f4cuNOpt0TYvwC3E1mhJ14oEmLd%2BEv848B%2Bue%2FvqSypvM99qCJn5EtssywSURWZvI7HwCk%2FudKo7fic4BKzIuAJXt5aNy&X-Amz-Signature=1e50cc29b85d26f583deee97bb3f3b2b7dd7141e83f5aa8941c6f29c023118b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

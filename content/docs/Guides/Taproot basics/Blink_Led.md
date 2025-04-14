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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7GOYJP3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeUc2D1iREdEpo07MaFpiZ%2FptFEnnx5hECDmeIg79yzAiA2gKOJFr4cRH5m6BHdPEedA3P4wDMJvWrIHBes1PefsSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMZze8d8%2FG31ijIf08KtwDU8obwOOtB3WMjuSMLJIb49jmEDW%2Fm9iNN3fFPLzw3qj2iO%2BIHmjB6OMGD3amUuCcHSbdmc2LZaYd3jXXFmAudSt2vxJQtt9k5Y57oAnZfMrnYMGE7coEoaGh479ABhpG2mGpb4CvihM1SFf1v2FjeVtJsPtocyr%2FipfdvOvhL95PuwBMkcxsl5ekc2bEvBA8FymD4kSLQJR5O%2BFPCh%2B6XQ9sRWX1ppX7Zt9lUSkdJQiI4%2FSFm6S8fW%2B6scVDUIJY0LJpBtNU7lwfx5lQYTaoGBa%2F2Vu5yyfUt%2F72OMZsLMJwUSjWMO%2F2ypn6qA6VvhQ7Cex3NDRc3cGEkqj47Zcyn0PGiHDCAgncD4sCX9K7EbuEbublwfgZ2mgkeeY9j3abHqAOywgqezqTsoekaQ87jRBarOD5VQcUqM3ii3r6ltOnv4rySfH9QFX6867iLmJ3EW08QyxeuykrgtUwpUhz2DpAuNIgttgadC2a8xuxrochprOI4zNvbmOH6RNL1at5ON98ySv85cmIckXb1tjEeveux2mwj6%2Fq6eDo4UQDWg10h%2F86dJYM6B6yQIvtR%2Fn7CnxiA%2Bo9n5TrsupXXyOkhrIfw2K7mXT5K2o1MVhTfwkePXIFFgbO7BZTI00w%2FMDzvwY6pgGvrFe2xrrMouOt9DNNdLszDxLFMkmUHY7Lywm8NYirMMZvGSexpItr5wTo8o0hwC41GK7LBQW%2BpEYmvu%2F27zE8amw9qM4fc4pjb8bWz1CPDkSImINyRNDvVKEJq5MX5R0tj5j%2BQNla7Bf50NNfSGd8e3Bxq64C62iebtHBaazMbDcUK25VPeeDR%2B9xO5VoiG2gwVCLIukd5Auw28VOegLKSfIYsB20&X-Amz-Signature=2079b43067521149e1cb61c31e1def88acf6107c2828dc36e8bf0a0ee1340b52&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH6DOAG6%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxurZ%2BlVlCwIMS3A7LEJHm2Ho7YabhYoPgEEGeQvqLBAiEAijCSU4ngC%2FhFRfr5LQZjYaWU4LYyO9Fgjqd2eBnBU0Yq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDJZqvQgUq7uC4WfRnyrcA9%2BGMFEbDTvtRzoxYUSNMztMa5UH%2FNauP1B3Nw5SU%2B7wWuJkatkbDXsijyKux2Ey8glm9xH8Q8j0jVXs1TeZAvx49teadSmAfE4l98l9O4GzmK3M4T0N%2FhsYXIZwOm2s0V6iU5UGzWWRCy9yjLYD4sv77%2BUV4oZJvWzR6IRizPhZUzh%2BCDTKeaqDhKS8hnYtdcoFmTllFH4%2B%2FZC01JdZADdN46uCLao0CUlB44lnVH0ZeCUYuwwdCr1X3jJSv2we4Rbje1T8V74%2BxbQ0gk319LbTBWwqzvxbkDyz1bRpvs%2FUXTN3ojnPq1gDOMxzlCGSSINbaXDLv5oIzUNep2flL32oz44FkJ9nzwMdmkAKPQTq5RuqA0uK0ReLcNAbOC%2BFMYe1s1aDCm5CmL3%2B5bK7MO%2FkwoSyrR%2FRjLln1wzJ3zHD5cPNFCatoLS2zhR9wbDUvZ9wFFrwY0iGRIx%2BM9%2BpSs5acDwoIcIlhvRoEtYG0eiyN9ZDDnwbBfOM1zezPopRgB4bOw0p%2BcnsZQytyzfide4v8iSBNq6XTDrhi8id7YHDeUoD7q6G2aD9exD2RKor675NlbodOXnxUdv8XgDPJfGwVu%2BmusS3ztq2YqJhpXDNaBw3XQdkSQfhYs6%2BMPzA878GOqUBSxb%2BLIQWCsYBzJKHDKYHjRtOd8r0r8VUcjCjRyF8xbWyRvV8jm88XcW7unUiTo5GYgikY4DTn%2Bj42PnHX5ggv%2B6K%2Bgig97KtpFwDgDA7T6cwJxoBEObsZ%2BJBpZ64uKjlds4OPCsPSJNuflT7oVxMKBiAtN1bDfAFP7FVmTQ5QZ7XymmzkCFDeHhrq8iPkJPqw4Nia0LvUVQQxBEo9qpWKFX3MWg%2B&X-Amz-Signature=b42eb08bfdfe89a4464ad2b671432b5bc51ac856bee35cd2ea87a5598018a359&X-Amz-SignedHeaders=host&x-id=GetObject)

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

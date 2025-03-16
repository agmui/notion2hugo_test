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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQUD32F%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK%2Fx3ZV%2BhJBkNFmsfbJ%2F1%2BG6eE3E743MdhzlW33dfw0AiB7FRQRW6Ajkr74EpS9uOKlmkRwXrwif1e0VwHlvhhBjSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMnd61Bi22bEq4DkqtKtwDVabYnwyGwTLd7ExU9VGNKquxFR6d%2B1kYj5w%2BVFT4Cw4zZNcURczyp0af7bRuY%2BLC%2BeRWWlVzhdnDfwxBMOSf66TCRnuXfYB%2BmX5h7xGH2Rrm5dvlwnnc8AniZokLbnGxr%2FXzuF5n3vQ0gvHi0K0zMKoi22vTHBRM2u2aDR%2FSZEbp12fDc%2BiEGzku11%2F8DeuGIhDEc0A%2BXTEVLzDJOQv2T7VYiSuvvkvg2lqfIz%2F%2B5%2Bw1HRdqOFPXx0YPUr4ypAh7KlsQpqh9L6X4qv5oAugBZSdPa6SQyDdGHzIpk6Zd7OmlvLdCAjYrjxNscmt4waQOaKEk89%2FiD%2Fp2Bt0U6wZEfihtV3XqVz39q%2BHcbWtjArPl0%2BPo1OyreVzKQL7KmPtqmQE05lxhN4jddA%2F3qLdXzk64ehLMj%2B44u7OYZb6OiMlDphlJICfNmceiKCaplgYycqWzh3LDidLAkH0ZSYkUY9sgJ%2B0jEqnE%2FvsJf86iPl5Paf%2FXA1c9XQFBZVQs9G4ZlAxNg%2BJakBwCsGJctsZh3Jt6kprxvR%2BmqG05kc19nBsbTvpOqlsmfTOnJNVtdRQy0h0W7UQbIUB1AsEkg806%2FYc1P7W%2F8gt8AfDohtac0gS2SvodVlO%2FVBWXHu8w2ZPavgY6pgGg8b9wyE1poxP9KV2e40xwqs2UngnzXehKCB4a0fjqTMaX1HQaRhbZGPC6ZGH64sy3a8DL3Y%2BcfpfWITFDgwuBIF%2BrjG8UN6wAuXtxxHW%2F08KyxasLvKrHH5q3c9s7tNLvdi07hlMZ9F%2BLStRzlaeCVz3FHHf1zWXprRMvxebCoi52H3dQQ%2F%2BuviQosB7bjJz4Y%2Fd2mKDkKbkbLKTtetZKsUo%2FhgoF&X-Amz-Signature=1fb50b3a063448ed4d5e3d59f8a0f1eb20dd1a62451f144abce195fd968a87ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKAV4ZFP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5ArZLO%2FMtv6jLJJXUECf7UdA4%2BMEryxuQQ0mf1xrxgwIhAI3MAgWEmP%2BCLp0nxJ9CN2yw2Ib5Te%2Bd%2Fzhqbg0xm4R8Kv8DCCkQABoMNjM3NDIzMTgzODA1IgyOWJLKYZT306pJ%2BF8q3AMw1h60vowUoFPcePfSAsnjvplMjP6Mno6uSRzJ9oYenleYn5WjJu2zCupo3WLJoQ8OHRaMguatzeH8%2FmZfVtHw32Y8WlNhM2SXCZXNjanSnxPWYWMVoBsvpyFhVcsOHKa%2F%2Fgjk7PJ%2F48Zv%2FICdwxWNzCoiGLE1cQIQkzK%2B1iAwytAvhUwqlciJXCdMI2ZpGHhqWoeyyZ31Nq2LliCKa5d%2FIhHn2x66NSlThrZp9l34YG46keyTEuw9ZAy2G72Tuu6hI819VXA6VcQF%2FseXulvGAtnlpVGfL3t5vVPowbW%2FseZoSpjzubwkuK28GaDFzxScL8FTSQoGDJBlL17kOC8NfTJEYBmqNSAed7LFw%2FEIAEhLByH5izkxDRxx4N6GIFrmqSKtnU6ZeRkSrtzJiSHhGkzrw1O26cWbQYP7CzgVOV7FFBB358NXXg7syuYm9RH8LepvSkYyTgJvL7Iu52Xo9pewej%2BD9whR3qD%2FLWVpa%2FBJmWA5Af%2F3Br%2Bh7aIq9Ttrmz8sKX4AiQ8TYUzXTB3m4T0ACsZIKNrf56Yr03KpHZDgZ6Yf9gsHUcSYt5zFIvOyWHm4cmgsWQI33cNRzaxDYMMOX6HKtc7epnF85rfvIuuRq3p1nojfliJrKTDXk9q%2BBjqkAQbEd8hIuYPPNphpOCVNK0rLLO03uBuX%2Bp%2FxC1rKhvM1Zb3S%2FFwaBZ93kTnwgpXTDuVnuWu1qAZdsQndHIaXh3qU4ePLE2jxcy9LcCvlaGMZGeLLk61HJm4sI9usiR3dCyt5YtyUvRpkKTXte2bPcJ71bn8SdCtFt%2FiTe21kMWzCAlmMEpnRv8NmP22AxA5%2BifOkm4lifVf9wDBOr1XVzDDLetmM&X-Amz-Signature=0a11904238996a5309f29163e847ef97f9d7c22979f726323b1cb44738d91d54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KPNHSF3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCL5iCENA%2FPL6%2FDaa9YtWMfnCdhAd95lICytyAndBP1AQIhAI%2Fos4e6oGk2brs6oCj4Sm6FD1Rmw3hczfH6hEKBnKXeKv8DCGwQABoMNjM3NDIzMTgzODA1IgzweNHy8eGdXCJoblAq3AOgGfCGneBpzU1imsZW0NF0X%2FLI58Julmi%2ByIw1L%2F%2FeYjg2kWjYpMQbSpYj1tTlMEOC3u3Qf2iFVX6sf5QIniLRcPcJSPODjAPRmEeGRTZanmaiVaUgUIFAd0AKPNlgLj7oapWvj4rgS7GUH0PsvGKJHnzuM2%2FS8VIx0i44MySla7xqiTHoF%2ByVKQlApL34JZhqi403Glu852VRn%2B%2FbZ7QX9Avh%2FBrq1ekicm6EJX5h7x2Q0KT3BAu97U1KUx0yEa7Y2f8QC4Qs8gZ%2FmQPMYNd48UgZ8InBDun7zvqzt3%2FWtWro7bikZyZ0%2FkY57O7boKHfJo1JeYXG9sr%2BjusWt8LoXSq%2BxBAd1VMMRAr3YAw20fH5Myvf7J3JijbZ4rXKA4v0mWjS69tS4S8GBQenbVIlM5cpZGQzB8yVQHxaz1Li1egixzL%2BC3dfCQrqNaCsJi%2Fx4ZSAfJ%2FEDZchdrXX%2FtIZ1i0uC%2Bff135y8kUqv2fce8KK7qEWfF%2FKM6Q9TpPEAFaSHegM3S8BDwjIv254Bs2Ags%2F6ZnNM4PMe4svK9t6R22H31F4gbiXUBZ%2FEw9Kx2aBxNiBJ0%2BlbNcd440vYnVVGnzHTUvvMErORVe6fu4uYjn65WQg5p51sEnk6KTCQy8q9BjqkAc6nhlBhYZXO5srmV2NSpDZ%2Bhmy4DYHNqPu27PVz7ZZU3lTMi1MRzsk8fzVOaRqrjzQjan8C7I%2BjSK2LK%2Bz7mrVKj%2FoYm3A8dnPr%2BavveEZvPDqwkrf6EkEfTS2OBs6vcIcAiWggCaZRn9YH%2BGBsySzc2X01LEA8hN1BhIDlzuQ8hZGsPzHZRtvmNd5toxq9ni9R8pYarrRa0tcmsV%2Fuvb1RPQwy&X-Amz-Signature=062e292ea443082f8ff19f495e5873fda97675ac23a93513e783199f1b910def&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPTEAXS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCOPS332xrL8zn1K0PcF68zh68X6zlPQ9F5kPmrrxZjWAIgbizrxhwpRBbqpSFUJU1Lwg4qeE%2BqOKBM4etzWHC%2FwQoq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN%2B3bTGfY3WV%2BnWYtircA29obHCcrYKx%2Bch8Kj5vKe8egbfpxQhS%2FRQmAqJi7wDAvRx8jKbacTXcwn%2FvMsdXhS%2FnOveitz6NdkFfwnYyy9m9e8sA7pyYr89Xa8OGh%2FnnqLDMShzCEWiBvbKfdLPwh1sODDgk9yVuyg6eUnAcU8U3w1Xs2sdqN5gl4%2BrfdY71u5dIbIjn7BJmlIYPkzpnIuKv9%2BZpg%2FDCkJ3sQ5oHVrQAiiN3UawGcUjrzd9K6Hrmm6kRI4KQOhi6gPQ25d204vO3OiNTKlW%2BDqAXKujICwSl%2BLwRmv6wZwdoHjtZiHk752Y%2FFTT24RMiOdf32EI%2B6r6Cy5PchuSFUTAu3FWmE9BVdpbo2v%2FHF3h9B%2BPYXE%2BjzGwtA0Cs%2Fs7KIn%2FKuTIWVpqgdRB%2FBffyj%2FzSTUP5o5G86eSNdJMR4lVDtzJXdU1c%2BwbINHSVwQZoqfDZ6osjNfCSKg7WENf4B17Oz8jXgAH3puwqi1E4ZXpuDYUMW%2BcL%2FCBbdum71pp%2BZ1zegWeWAqHhcP9k9AxxrFdar6kc%2BPhg4jqBFeNv9ZkVuTP14eVwMhbwSH%2BKwQEJYZ7vbWFPrc2qKdmpPYMLtDJwC8sSokiDzuT6adLaIgdqoR0a9C3BBrei%2FxxrXIe9EkRoMJjKyr0GOqUBgbXMkxqyvtEN9TwjC0z1a8W8lQQsK%2BbjtJyS1muLKkTtcHUsUrvvJult6CRTgVylx6m5JqiN1G66cfxduYstmmNj1jvczBfVHMWpqtABK3OIiL7%2BOPe4Qul8m2wXfYAvokjOtatBVCqpXY7yMt3kL%2FVopftJDkbHPk0bZKLTU2tYSw%2B%2BjsWbnmvcMTG9wdvYlD0WiGLdQeu11SFwNoI41mHNggl7&X-Amz-Signature=70258bf6ee0f931c7ba839046cdd589724a98a75c61fa219389309d8ade3c6a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

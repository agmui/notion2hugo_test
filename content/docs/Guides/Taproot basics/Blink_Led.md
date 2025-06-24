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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVDQETK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHIxNa3erAVESi1r6YVOvAeQVz3PxIk%2B2PBOVeCRLKI0AiEA1%2FGkLTgZYXjP5XFHug9b%2Bu96lIFdIDoiUh7nJjLlRWcq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDC7FqTvheiXprQGUbyrcA91Fq7EfSkbvjuwqas4yQngS0xKaRlmTaAxLUfMKp2MDrOdHzZPFAOYuFms1H8N9KoeimplfIii%2BhMVY1igiWPpfuZl1BtJ1FA1vReht1CCwA3HS9oTFQ%2FwVe%2FQcR7Lzbl0H4rBpGBPuAv2Jf3z5Uveb1aGI%2Btlh2pJKwO8Bcgqhs7qq62KcwLrZK7Y0YzCFzjPVZb5uL1U5TEXVDfVzOtNXLvOp0su0YnFaeZw%2F0eUPGkb1jScCz7Zg1J%2FiAhBs64El0%2B1f9B1EBBx9%2Fkhxjbctw2ZrR%2BAnkg8OAf1B7dqwMmjHcJNRhC5kKGF%2FFwTzoCW%2BHyRnoeE1s2DrGwEffapn8Plj3RQkEd4ywFRhmlZNbHG%2BFW4bPdfHm4Vrt99ajAnb7rLdt9ofs2RsfWKmywquCb6veje%2FOeFe9Sru8U%2BPpfhEkp89uAY78AsPiEY2IrGCcXRDFITpHbvxtJ5hUM%2BYzfGkk7ru6ptdgmpu2oxfKl%2BoxRbTu9xdjB04GN9KcL8dYcuW%2B%2B71WLu2hO8th5o7I5k0UxcZM0w20G%2FtlDeHhwFprH%2Bny9pmzJsJVO3ZeOTOkVr06PD%2FkM4FbR96GjQ%2F27hl8HtWo0TGtsw5ziHw9FpVSHVmxMTFpAs5MLmI6sIGOqUBJv7MownIX6z5sl0QzB4ZRqyxOyA%2BSyYJAyvgk94Ir9X1HTKBoHmpqi73xyilGSj2Y2jcgjCGTOkTgiaATCiz93HVHeAUKzeFRaDFYmqJ2gvyPxiO8443nHTXKia1xADMy5vEEvwxguGiQZCl0g1qz2jrpURAO4mFIQWcXCB7mT8ZVOktuULnfyS8A5vfF%2FCFyhS2F1RIy2m%2FlAs%2F7WTSbx139mgB&X-Amz-Signature=1004ac67ad9788db8d7571a33822ca49baf25d01762e5b7ab94df05a6dbec4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2TCAQY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIExPlkiwnTzPTK1ASxCZb00MONZ9D2LmsYrJzp8V39AwAiAWDx1Z2qT0C38jQkzyx%2BfsKFbtrzNFY5KjBjqdM6S%2Bhir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMgd2qe57HeSynRiHQKtwD0BBNErFccMaMITCEPVDZ6iNLiBTXLJ4%2FHx1mia9m4OJKADNyYQB4BHf6ho7IxNWdzIMYkAQK0NsK4lpHvO32gzGJppOAjctBvleXV9artJbLHQFzatR8Mmue8Uj7ZuzCR1sZLgMkN3zcEJfDbcdSrLaVTMBZla70bs6Wz9dRs16XH6gp%2FhEX0j78GloYGUo4h5P9VAL9FZVlOw4Rxvpu8fY0%2B9x3absNLAQY56qFm0lYosPZdOUg63hpcpvORycdlvbgksKFRa8Q9zaNn4WDsra0ZdkJ%2BlyDLpY%2FGzbyWtxe5c35NfPjmTSbkJT4JFmvuJaByD6A2dkBTY9oRuuYvU1%2BhVYljdemmkhfq4IP9ssyLthdQINJEHL1CRI7tdpFN6303aHc8s%2BKsGxdjWYtZ6T%2FxGiAAjwZvObMv22Ijpp5RnIi7D85t1hk1xh%2FfBUO4f1%2Fv1ybCWQopKgOSiaznZeRTbbKeuoFNBRN1jgCWgPx2FqJT4Zdng28p2WXlsJFAv2%2FJHXovE7gulABuLg5kwWS73gYK7TmCvW2ZJIP%2FuLuMt5oOScmjRJ1XhhKG2pIt%2B%2Fjoo5N%2FKD3T7uhsYhOPRXc4UWFQi%2BDS2bVqquMi%2F6j0oF%2F3t8MFmuUtL4w4%2FjpwgY6pgFyPgvnK1kPs3iyOZ3gvTaGm6lT%2FK09Zq2ddmLU0LlyGW%2BSlSeldH7972ZadNLxjOtR4XhpAN%2BeSZiBTwXXUN6zY1ZheBeh2%2FAlnyhm7u%2Fxoo49sIPUgX4iX5OdEO%2B5vwa0ak9c1%2FSePFNxbCPpNLx1Bvv4%2FPb5UJpGogIKR60BNSTbQn8H27kqZLk1T6lerdXQz2LXz4f8tyrWZzzdKywkZkQIfo4y&X-Amz-Signature=b1b476e1e55773f8baf0563d6a99bfee4192a068f7c3015c127babbd239bbec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

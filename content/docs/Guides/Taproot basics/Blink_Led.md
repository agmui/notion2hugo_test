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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVPAIJHE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAqZWVJVDtoZk89Etz0QH1kCxN00CWvTGOLuH%2BFO3bvJAiEAmHvYsl0%2BuGZjKpWyB2ntTPdQmkFCgvuHiDZK7KmDdTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4428ok3T7rJy0wSyrcA0Q2qGIe4XHGgWETxoA28qxVip3%2BHrWuv0c0NjLJxBouUVTKqNalyIxaOmRiqNmluVtf5JMYpcC%2FKLalXuWEn%2FlZWKzXukC8bcBhNO1LNwJ1v%2FJHhhcNXSVjtkoIN%2Fnz8gOdXtVk2MD5ouKZ65%2BhI6lkKa1DzDgz5pcj3qqJ%2Bft1rQdgHn5ONzNTnJfCwoUTtVvEXvek8D7vgXBbxbFQTzNoESircc0QIp1P7heFZevLyXWAtC2dsLku7xyTidUxRDhe2M2Vgr8HlswvWtmNJ10pxNnMI9EDeQkVHdPw3Zzaz9JgZHF9N6gTQ3gY8bckRpxH5RkzzM9NWt%2BsM4sKpv6fW9aUx8LYKseMYZYbrDeyh4UEZrp%2FKRmBC%2BCJ233EDq4iE2HL8tjQVVwiUo%2F7N16m1I1%2FNTiAdimtb7RVGbaxdVLkdCd7nyVPiHWcGIRMgWdNAEqbemdLcjEUKDy%2Fwpu0ZF3jJb3g28sGRVSzfBjJ6jdwMfL5azDLXqWIRobhU5YffkfP1ByXtjBUivVAtOJ8HafLpIeqwYp2oZUgWe8X%2F6bOPjlRgCX%2FA4ohjFVjI6jm9G9rdZKddpm%2B4J%2BxUH%2BJdjBB5kc%2FsR17V3sx2U3QFShLLS1Dmr8rl7zlMPCTusEGOqUBy55iAiZ19ow1bBQYvAGGKYo65poZHSOtiu8eM%2BHb2Z4nXgnBdI0Ofo2f%2BKlNvVC4K%2F6Swd97Fn6aQhMcYO23xMidKS1T3MG7U1yEQeNvY3KDMDf3VO3HpOpPx41hM6I5kBOwW9NQK3%2FQ66Byt2RI8ggTlXFVakOXPiS%2FvqH97BeX8c0u8WGEytwqFfrpcWvhQ3p7SnRCyHEGw6V0HgNXir1W5eqo&X-Amz-Signature=5ca2d66e87177f69c1f976a46ea377d05ffeca6136f795616a8d2bbe78caff8f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QAKWEOU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDwUbxJ9kRPn9OLbLKUfhv9mKrMTmIF%2FGTANqZMduu0pAiEA8op4KnjUmaOGH2AuvA2mW4TtZovKFcZSVvj%2BbExaYRQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMvJY5gQcfGY3yfFSrcA3cEbTDO2CQZw908%2F5QZeZVY7pARWkMgASNEFkFUe%2BEa92f3HNeGknMd11woTxBUFSdC3tSBhGQ9NPWf3bTsO%2Bfcgb%2FatGYi55uwjVlcYOjqdyCUZ%2BFzWWuxbnQR7Eb7CcsTrPyWVHRWwMVhmTOdPWtbA5c7M5WIOVtWPsppOroy4o4YpAekg68jeI%2FerrUA6mJhL4EEp2N4fuLz4Z9XejQtd7Y%2Fem4S10oIw7sjNrJAl5GSSaijzF%2FyQTGl6SHwodjjkOHtRrK5tiETZiOT9r4W0ix8MeUEp80NpUKF6OTXrH0jzy9FOVxv%2BPw3oglJoKhLzxd0%2BQufUgQSk%2BbMt5kwb6tQcr%2FnZevVtY8MFgTwGjRE1yXxLYnzruLdoQjgkC0oohZx7c1pkj%2B%2FAFIcfo%2FuBqfhqSI7bWLIVECuY%2FCV9SNVK8jcjZuJRbCwq%2Feonvhy%2BySPNWkGIPW%2FSQbVUj9bI7%2FwODD%2F%2FPa7Myqqdku09ZR7pVU2s2C0ntqYWPNrmHFMtQdVPug7mDnAOrSRAQGFlYko9tA43p%2F90R8Iw4DayX8V4KFaqBChRhwSF1yi%2Fc8XO%2F7EL1Ee%2B4Cc5Mb7EQduIwiYcA%2FfO8RCIyv%2BE49cJeGdQTBffXjmEP6rMJCUusEGOqUBYHLWvMBLv2lsZ8QhgSQT12YWiYMkXZhyhOdw2fdSXFMSI%2BNpsFmszWvy8xIaQZ%2Fcan0%2B%2BISsZ6M6a4j3I2eIpogwRCVFhvfKVp%2BIThcNeoFBwlmkyQ%2FmN2ieKaCHNaZ0uNPYqoZArYOo5jEviwGRkJgFn341jOdX2P%2Fe4fl%2Fr7TkLmzRjOFQnoNv%2Bq69moCGZyKnrrfNwvmAkh%2BSiRpX3ZCYCLZq&X-Amz-Signature=180ea98b1d9fa832fa34b408bd3b878b0b2bab6a7426d500fe94ef2b931cca90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTKXNO7J%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaZzyiHfMMYNwXQKL3XeKNIKpWYKI%2FIeg3%2FYZjhtbrAIgMNlzUAGmhNLGx4mRCILbBVhlr3mn55E7cdEeaFSOS7wqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZyakd%2BzxeRn0EUiyrcA9ZVnqiysb6KBICqeNNmJOXLeWfZn5CradAbQKVzWQW2mE3pv%2Fn5Uxq0fLc38AgA47kCThTP%2BcQ4djYD8X5PxVQbR%2FLET23nU2TT089g%2BVdx8jeVK3Cw5dRIJEg0hpxGRV3rU6HB7byytVkfa4FIiQ5FltAQitr%2BCcWqpQ1GpRN8ot8bcNjNoDFlfB88XIJts3D2uGaqz6VIMzqnkLk5GVwNIpLKu%2FYaXJ5bsSysxH183Lm%2FsXOOCYUCkmcb4KMvrbky6b7AMIrDIeKbwuSEwWWnYa0b4r7bFf5eHQcguVVqS9Pyl9TVaY2wxbsVNI3TNMSJ1qvdvt8D7Gm9vsmMb6z5sZ75Dox0Oc6oa%2F50aZU3%2FDkhv1LlU34sE5HlkoT4%2BwmmrnQDgr2fBuhrGgj6F8b1%2B%2Bdm5I49pSK%2BDd7x5Ya6wHyx8bm8Zzc8w%2FJPwHFKUDgaJFQTt58PudGdqb0X3b0Png%2Flk5nDmSSYur6HcuaAGn6ahxaIjpMKo3FarQQ5lfFU2lr1CYl79Mt5ci8mRyh6LmZ3oDU2SCg5nX19ZTeJPURLSowYGfCjJo8FmhNpJ7ddnin%2F9n3JQBTBDxbAZaaTpl9wQaNDc0VG59tGA73WZ2qLJguzKZ%2BJZKJXMILPi8MGOqUB%2BQSW4A%2B9hiFu%2FzPWcRt8vby8dWLXKPhtgtJVkLBsLnNrwDrwANizmuZlP8SjpVozrTl1Ow8GD%2BwDMsHri5%2Ffm9kL%2BNIrWrWGrBZWuuYK7FHXc03wfwgFJgRPxMW9f9TLkPCPprqzWwTD9BAfnktW7P6z7GT8ldLQgc5W%2FCvBchQrCEWu3wXpce16keLfyRP03pXWVH0PzrWPgduoA5t3hveb943f&X-Amz-Signature=209547d81de53d903f83630745ead0dd4f8824449006fcaa980900182fb63101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654N6P5DQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvlv9SowfYqsHLGdfsP177bPcWCVn4tQ%2FXS1agvW4tQAiAg3fXPP2GUiL%2F3orZRkVg3Vt%2FJSYyg3nYerRiKeZoqxiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXS7G%2FaWEDSGpYEZTKtwDel5cbm4inYbymmDBsTAA%2BkEh0gB%2BoLYAenc30kBNKyxbYkdNzUfHlFBwqoFE4QT8C8M7DmAe5Ozs9YrhXJ5lUfUQI5Ny5j06SzkHdxi8X%2BM5Gu1%2B57GZJbQFKOGl%2FlqyroYFq2srcmr8iBrToMtNNdqowJeSr3Rhbi%2FfINpIINxc10x9%2FDgLGJ6Vg9Cp5fhMT4BeJ%2BrxFKVBUPLEbsSSQFerS04GzLUVA%2FOZnMEQRJ0k%2BTSDPuR9mBRXZfwgF2svKaGGi7lPepgfm6F3bxWVQK8MYseB2sI4U0HQRLOCC3SDmk%2FnwjsEYClK3WzmGFo53hcPf7y2sVtDrI9S2KysiibSnjR%2BMPK%2BmbTCLiidsYOdS5srkGdyz%2F0wia6O9Xg6EUnUh64yQzYo40VSIz9F1RtHURBgOkTdbWcH2jAoHKVCmZ6mDU4AvZwlcP0IbFg7s%2Fs9%2B0CwrNs3bujxSlEHfwouUrh%2BM4WYQpa6jK41ZMGsPlcvFfmiPd5Uzzas%2Br7WqxFuoKtpuIgfarHpFCfKSmiSdv5Pbb1JI7HjKMAz9eZJ4ame8o%2FBXi9j5JITt%2BjJ9IEZCHyf1GwCOD94Hc3UeEU%2B7dOwqtg0xLsZ1jEXxA77x7a89ULRlq8kUjswoM6LwwY6pgHFr3dCFxkQun%2BuVK3bAUtlv2sy3GiDJc9QhgiYqp5a7eJkavNnjVvCwCZLXbjIUKwWML8nY45SPRtPqeT2IYebF2Z0Uq4d3NcwIjKFOhf%2FkXE%2FOQzjRUrKJ5RaCD%2Bfy4RhQfbvGrzY317UlVSRJ74l7F1%2FwNMf56776ZvXKDvI7SLjqPwKfloY6%2Bvr3oLnSeBreA86NmEGtFbmenGEsL76ghdW6%2FQs&X-Amz-Signature=364201d49b8c04039c0c208fb23a4d62bfb9cbd6999505ebd21589103e4436ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

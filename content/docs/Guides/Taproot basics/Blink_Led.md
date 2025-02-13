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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JIL3LI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbmCOOdpVSlsViWOo7j6Mtp4t%2ByYuAx15YeyWYJhDoOAIgDg0B8lqTmVCkeX34iSv4de8W8sT22Rmj8v9C9cJcUOoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFJMCq0GsJd8E4GGCyrcA7S%2FRWwQp4cqPpYVG23zysrM8cf0lKsREDkkg6ptRl63%2BMGivb0eJt8h6PvjKzX%2Bcr7y6pMG%2FB7%2FoCTtX%2BBD11u14QUNLwNQU3IJ2v3aSi7m0jEqhOF5XJXoNL8%2BIva15Gn14V1BN%2BSeGPoY5Z4VM4VQ%2FkRQUJCcVsHbhJk%2BdFgklXmvmsQL0in1A1BEEUJdHAUnqklGteT9yeoeGbPP%2FpwFSO2%2BOP4hiwHVf3Owzq5plFdHv0Vn8ghWWmHrTj7hkS3BvIHtptwHWY76vAXHqueM1luzYPVcAbWEif6q74CzaGpULaDLGs9qvRMTCgj25RcLRIvpgW0xD%2F8tjI9HAd5httFRWk6psvV3SOas%2BM0fCqTbKAYWmch%2FBqHc32xRF0TUz%2BqzyY8to833fO68QqTh4BBiEv90OgpiRbboxUaKNAgfjBnSKpxLbYVXgEmY5LiK4uVwMJeY7gXV7ZtIrYKM4epLApYFPZxQR%2Bln56J19VJMvvKoT7%2FrjvTisz35uPETNqPG8y9E6aI3RqEm0tPHGahTzgckIwKP2vP4J40p7%2BCykYvMuICaNbTCTUaYdDTzZN2kXiC5qJ4TRya7dp63BwD5CUiEvWoJuFk3jdxc3Q5zRWIVVADcoXQ4MOzBt70GOqUBzoGDAJQgsMjh8rdEdrIQ9CUSm9CsqzOS3q7l%2Bj2gjIWW5HLvVoxrrKlYp3WG5ZYOZBVAhVYEsZiZLQLbsrlaeC%2FBTqncSCXYETrDAqiZhZQVdrLQ%2FTKeC6ohTm%2BGLi%2Bf%2BrsSYrC7FwndUnqlR7i4KBBN5hxkOd69YW6N910tU3jqdzBqrl0EHIqAg%2B%2FA90d%2FYEiDtPZBPL9ZT5A9x6XidU%2B4oAqS&X-Amz-Signature=1209f792d0636602c3726aca8a5965cc790cab16d0905c28ee38a1fd69c64b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKE4TPUL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKzE0AITZ%2BnsIykAeS7pMU8joAKHv5xuAuDzkFWe2BgAiEA667IHwsaZ6fc5uGWXUC5njVXdYunEdExK84tCBGUiUQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKFUPMJ9g6gj3YWl%2FircA%2BBshDNomjNmaUi34ptZ6%2F%2F57ha7z2FF%2FJu%2FlA4GV4HBVOy05YldYclJ43ZpD%2FnI2I%2F8vGxGvxyeCVM%2B%2FfZZ6y95fZYH9JP9%2FgpG0HCaNirI3mZbEtJ6LYz91fkg6ToGqxpPN44B7NI5g7sDKyNXfrIIymf%2B%2FYj6nKbinCECfsKRdY6A0hslJCA4ZzW%2BRfZdXg0jvviOd1OfwHTSIgl6zBMeZT9sXBbfWR4qB9Or0c03GPnkVDRg0kPzDGRmDLIe9ghb8E6JG3dFVa2gn%2FzAdq9ZnNo%2BAoNzkwt003gjruiw6aAqCqdScI6vG2gfr3swr9xoNX1FMiVMbk%2F2Fo6BqJP8NjCM1trd2sxi3%2BiZgooUtGi6p5iSBMlMtLhgAo5k%2FGHkaXfKNCZntyfQihBs6uI0j1TeA5MpWF7GPsVpEtNQrdOFpLStuHy%2FffaxcZgtxEH0MpAmAEvutaNhi%2F5%2Bn9KciNYGX%2BpV83Sj5L01UAp%2FOcbERqgWyBcGhGTQ1YLCorS9m3SoP%2F4flkJg5XzgeryHEXrQhqOg0rEqQ0qHWG3liqX4FSTgStTaPUvnTT3yOjGCFggElqJ94eMn%2BnB19wc8z8P41uUeWymkSq%2FXsaIU1NFsLQegfVGEzfh%2FMIfCt70GOqUBRyUKMD0v9crhgK5QoprT%2Fbj3csjUXecPwPId9xMF%2FabzFaGNfiJe9j6zc%2FGUJF6kLYd3yF%2FPSn7BXldk7Lo7PeOAV33rdSRhIp6CqJPbdYRf3eQQQH77cNCvm%2BOaidNtrNJvFb30kyE3J%2BwI5TXyx0bUknm0h6mfLcnmnrBu3L1rmIKhO4QQxbSLt58Kh4IVMHkDX3iewNZRvbQSpjS7s%2FAsNFqP&X-Amz-Signature=7e571c202a7a6b88cc2530dffcc018e5786baa724ffdfba6345b5d08fa5a2c70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

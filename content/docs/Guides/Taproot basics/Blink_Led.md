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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PBD5XDA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6L3ta5543aJdY6NFJNDzh4lBTcD3y1NtelcTKDXICSAiBIqv%2BfGcvWgthEi%2Flu6Yl7YUMfwgk94%2FilE73S3Rd7JiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZR%2F6DyYhZ4ojJKakKtwDyHTuTyyM65VEyMspF1gZ5GbLM6HGN7zSWmDoPUC5Op2dWG13BjJ6RCyBKdwWfVTdwsy41tVRYKNhlBEJpYtaeulcLBeAWOIWWEPm9I%2BsfqzCCiOpqOSwENaMd9o%2FyR8n8Bdjfh%2Bnzt0fJteQnwyE9ww3sDQGPx0bCzh29I%2F4i8HSAQ7TrIkiOdQBRdEN%2F4nMoJNZ%2Bite0tw%2Fc7dTA1thy1l068SZ6htj40H4fBEAVrzLR7PGRLigfexVeQ8nQbrba%2BOoCVqw4SeLG4GtXDaymvK01oQQV0JaQriXJwl81BfEYhmpZbjUOjj60ep%2FysYTzc2Twyvz1BbOeep7zDotU%2FLo1lZ5mDeruBN%2B6aX49JZOb%2B6lSavOWuU5x7%2FfZS8pddTqGHmYau1S9RIqT%2BIMPm4MJI191qEgnb43%2Bu%2F8aQgHdaJistvG3GH59MZB2ivljLhnouX%2BUSFGTn%2F6DmEVNSbu9EKlOT2QRB2z12vtC43qXo6sO1u7DrTZKXtfqaoNWGar7INtgDB90t5M4es3qDuLO7q98QhTJpMjrdpfNKhdSzz6MpsPSMkoI0CgmgAns8wer2D5KYVglu0JKTfda0IeFzXbdg7NbEmkNrmXA1Cph%2F9DmSikfSfTSOUw3dmmvQY6pgGEipsJqcXoTQdy7vWBloAKyKRc%2F6jHTaLJmUs1ojvZTmSj7y5rH80nhNn7HhWJWcX7Ju2F9HYAqaCwa%2BpLzNk8aXIrygU2k09Wo3AC045QAv0Exg3xZ%2FSB4%2BMXEkio%2Fe7w%2FkGcOn%2B%2BaaTVOgO0f4vA1D6nUdYYuxM4f6NfDndceHpkpVCAewtAC%2B6u1TodQ1LoE45B4J51jvQsmpfe%2BdEIq4gBeilb&X-Amz-Signature=b89c7b3f874d421d6a116928b6af219280cf401884e4d1a1107a82e488ca28a1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF6FXYIA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6LWy3BSGU%2BztDQvmKbem%2BxChRtOAENbzkpttkKQP4pAIgNzZGhv3xu%2FrVcLexzfO1gmh2wHrprgTB9WfLH1G9WxAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI79Hwt0nQRF%2Bo6WMCrcA9y0hLzCk5sPFGj5FsnXOIMLhdMglh9K9dT7KKhkJM2yg4stG%2BOd0ri6DuAW1eImj9QKc%2BMNPh2H99%2FgoSYEWxVgPTeyU7F8t62CNPRthisteRKpSfP1s5N9tCx%2FRL7%2Fg2lZkOm3s9dy2dV%2FadjiAmkcZxyC6ZcQqq2IoF1STK6UhN7bmJnPoWmVu3UMicblm8gcLyid4Y%2FjkxVd263%2F%2FLx4NtbabYZgSAv7yrbKq%2FCGZtz5ntRtldMGXfHr7mt3uzf0fF2yXbtSAWbq1PSHOv5TJVBqxS2rLjtC%2BoBLK0T6t96ciRyOwkJAPiH9odyVi6gvEKvg7fMhUxh3DBf7a5NzL6kknDxMYf1O3%2Fkq6vIurITaRPfgNgFDuHB3ZTl%2BhCogRxpwRTL6ax4Zvqh7eE16Ji5NivS1QoXdD8Q%2FDimjCrNEPtAOmxbhos4E7Khsf4XVzYBn5TVQXuxn%2BYGNLIL7qvxY552CYx%2FzIguqO4ooadcyT5ldfc0JC9YerD%2BqkoAXYxmotRjOyV7KbaLGacecj2w2BgP2PfC92emx0DdlXGMOQb3XSCA2B9N8NjHDVTUPym%2B4m1XaNJbX5lOEs2QSOqCJmJoRXM6o6ZBRrOhKE4aFbG8XQIwDl1W3MI3Zpr0GOqUBO9jkewjG45ZB6mTlcVj9BwBpS2lnw6%2BXITp2G5u0Vg3wYOxg0KKXOQWYyyQfI3ZHjzwZlTfHojUipgh%2FYSLEyD99dlQXfMEDU61YgwbsJ1Gbx7DuKPaZiVLU%2FoX1Bs3Dfn%2FFJu0RPegcaVlKWz9uSnWnfYz7bK2802bnMSsKGwt9f%2Fmch4NPEU9dgClPBJ%2BPNd7ivf%2FQkfSlBEKJYX14%2B%2B2myCRZ&X-Amz-Signature=98d0ca8b537ea67c0dff0ac42694bd0e4d9e9785c98bb3d82331502e7fd1510f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

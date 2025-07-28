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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7C6HVP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIATIuO%2BXgFSw2VFs5R7RUH6DDU8TFXxPp8kqF0pEFs0OAiBNIWaAsLt6cn1lo5A1Q0fQLvCqhcU2buBk7SFdvX%2BxTCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIhVqnBsNo%2FwwAZ7xKtwDdnNq2ghxhUo0de2anPWIEfizeGK%2B9zon%2F7codg8ZSbe21gKFnrW9pfoFmn%2FVx8egrmQplGyHKAm9ctggMQzfHczaBsb15CXCqUANbnunHz5Xy9kBBnYjQvpev1Z%2FCU8mEKn1%2FP6HO%2BHngyToMrSc2hM58vWvRux3bLg5RliLyzpojy54bEgEV7YwzxU6IGlwMLBtom%2Bw1aNq1d82c9MI2tcgSl03p4BpZ4%2BkZfWOn51OIcicIc%2Bsw3%2FnHrG%2BbVydBNW8uvwaaABASWnP2rj911el%2FffucYUISAVRNr75QgRjGV9EjjaPkVHL7ZQuCsX2%2B0LNDXfXmbGtMZR1ubcOpOJXsAQj2vXzSn21bC2NNbkgmpeoV%2BtFg5ctElTPgLLjEi9ka%2FBUwcVHx1qHTWMyddEBJD7A1%2BONm09WLQ8SoChc6sXbtyRNeHdh6%2FQB3cr9yDZo65cX6aCJPcUOHSbK7HZ5wU%2FTqj88l8qRgEOK2agZb7Vb2JB1v6rDml0TmHciFnKRNAnh2UUdYkc44DqZcsYtHEKAcK63UHW3KHJlCBodmKU4s3jUo8n%2BZQnHG0ScQLVMGe%2BwjixP2WSNManK3KqUOqgrovqnjiyTawbJCGoHj32ht%2FMi61zQ5h8wyJObxAY6pgHrozm4%2BWD4iSvONkcPtvPXuK%2FGzRWYyIxSSrn8PAx4mylR3zWIwSOoqxCiTSI3pl3KxMvhMhoB%2F%2Bmz%2FF0kr6TDCntbi4OB0RRwG9%2FaHoQLqJAwnXZ5iXQ9miWgG7b0UEm5GZEaJTsqjQkfVpEVnO9BTo0Mz0RthG9V0LUdA1xRFEbWb69QE2mOUnqbtLTjXzysgL%2F2ySL9uEP5hI5ijpH3jd8tqRSX&X-Amz-Signature=5824c5f3c626d18a0a6dca1b811ec670fbd32a220cf85f5b31c15582d743f791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623X4KMXN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDXegKyuFAZybJzamw2%2F5QWDrra8B8uaMage28vXGBE8AIhAIvWVGtabdnQab5c9Q63FMYIcBQx6fAJcSlrZ057ZfsTKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrFdx%2B%2F6H5J2t64Zkq3ANp%2Fa64YoFDQ6vqFlrQLKCKFZ4HIShqF6phRy7lupacIeMlhQ5OuIKrTR3B%2FAerK70ijqJ9c8034szVs3ofojQ7kxrbUrl7KQA3fwKxg2ZduBE8UiWp4eLSUvQ%2FmNAclLyHdAs997CPd%2FzEWdF8liEVlU5aOepTPUUcP9PGZIl7TRkQYBvYh325FLFNILdlYqt9ls8EJXtmTwRLpye9hnUcYilak1FSPty7JBPBGPgZ5sjOjF0T4J4juv%2BdtOAUeY8gABh7O2Y%2BbPVK%2BEnP4o0XC7PLFSDYqJYbhAhKCbIVeSL2Gvt8JcDJ2fw%2BrTV1hX8QIr7Swk0Dojnw5D8TH8Srq3%2FpuRxEZb5svCWQh9anUyvtegeH0SkW9Uh4LkK%2BkRqdLVW8kLZeE%2FNZa5Xsr1AZZsQRcABSo7wWb0I79AAiUacf4saCjPNLrwfD5cqmHADsRFCKC3CxEDIFJkSwLnLDTMMZezDFzNCCVrgYQIjm2tyZHLt9vOEgOT2%2Bl3a3zHyglf%2BDYWYyEBqFJjGlacrrihz3GSgXafsqpod%2B0pQIwUhpgUPf6SbnAeQRWDUo0wRkeNAifEigLN1HPnZKcL%2Fr9WQFNGc4W4qWgSB0VQJR2bPI7%2BJK4JCIiwd%2BezCNk5vEBjqkAdhpvyo82jbWHhraOrx5By0Q%2FgBI7lOxXNa9H0%2Bv21JB3HsJZLkir08f2LZ0D7IR%2BdKpaaZFLgtnPRB5HatRqmAKSd5gdWq4nW2Mp9uB2iu3dZYftyfp72bwaEq6OikJsrcnm5ZY3JVfQosHf2Y0zWaVwj7Moi1hJs%2B6agY3GLOGAESMhm6WbujQz4Lw0ynvHnLIcOXKDwUTQQcaarVs2DItvhdC&X-Amz-Signature=2274b1a46ad49b1f64c7eaf93888bfae663fe99eeea5aef8d875f1bfc80db2fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

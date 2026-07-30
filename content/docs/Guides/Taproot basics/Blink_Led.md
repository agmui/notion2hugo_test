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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXVLSFJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9LuxGOAtzPbCsI5fK0QT%2B3f9Yy7lBiacb4jMHaucS9QIgCxTDz3Tw0RQxRlz7fmVgno%2FdflpNJ5v1QZ9KF0Rg8jMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuYTcAKeTrYztjXRyrcAxe3UN56ll0ySVswihlTIa7VCvhKomO18DZXvx%2Bc%2BwJaMoESbzaKLeNsrpOccNMbUN70Jp%2Fypfe6r8D%2FHqYKwRMY96HIgm0II3JrfkAnV7c2ex0HdmY3xd7Gk2mF1x7Q5vcXMNKPhYHY3vNSlfbbmXNnSrEfdklk8SUUH%2Bl1md1plS5iiE9AH%2F3BxjeJnCPgm44FQDK5SF6Pxw%2F2ZmGAY27%2F0xoDtQzgeu6O4z3AjoaTbMPNBYDOAcDRmBxmPg829oPsVBRg8RQc2WIG9wchMeLhjjEC8Hu2CkDe7gZlI1De0T%2BU4fmyhC13rY6vks3ue4FBGuXYE9igqWgoJ9hlWwOUR%2BUmuCtqz6DOIlK4ESkn1qhyY90gvzY%2BDxCuE6ouTqsMbSX7a%2FPCNH6MHoLYGdyRP6bH%2F7qQnJZ%2BY03s3rfPWbjoPO88KUy%2BINhhXGcIzkX2xfcGIb9YxnkbEt8TQ0Vvh7R5hk6QtnEmWx6jqlocr5V3aGM%2FUo2I6L%2B8t9OR4Et8x0LP0qneNtYmAcJ2h%2BIm85ZNYo2mgPeN2GrD6YO%2FYahYIurPap7XjBx0mLMd4VGP%2F5tMFRQgaIjq0Jf%2FTyniKZXOgXZ1uQNrIxGK7oh4PsWQJn8apfgfiJwiMKnfqtMGOqUBeZsn63XBoeSUKq447cKYOkWY0FUq8eitPDBU39Xkgmr%2Fn9CiOb%2F6Zktw2KYS279M2Ucrh%2BrSYW6xKO6dXFmCoRB%2BC%2BNpDgEqLtNMnW5pIPylE7dvQ7kijjY9pw9TlUc6H3m8up%2FJ1qmbNFJnnoV3lDARx2%2FtUTvlRcjp3EtVvuxv8ufJ8mopM%2FIyNdDHl8QcjHXQEEb9WV8DJxQMwotQfZX6WyhJ&X-Amz-Signature=645256d600d34059c16f926877ed9ae679a82e203218598bb1a9f97358b96af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BKIBFVU%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf1IDUltBMAJPxbO%2FT4ZkLCbD3SSGL4kpu9UTWQYNmtAIhAJ4zTLqlL%2BjioPCfwxf1go7EZ2GSQfdWAay5jpigKKK1KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlLcuvzsZ2%2FAYcu6sq3APMwZI565PVaa26yFu5Yk9hZ%2FRy2hOleGIhyZU2eS9iisvOPiVqOaiY2OWtpXXcx6IY49pn4QtNP%2FtvYwyFYvvpaYvhVyT931O7EN5jh%2BBxOPtYrMUXzxUcIB6XY%2Bfc3ahKl8v3%2FIlgVto5sM88%2F9a5oMAyI%2BOZTLzPKPsr5D4fEZrwxlozIz1j3m4fHKJbxcqai738Nry9zHNQcCeiQZ9nYFTSaoa5ZDikch49rPCC1KdDqk80uuGR7NUHIiTK9YvfOGj887GZ%2BCbn87GMR56mfyIT3oeb%2FsUI9EvtpUPTDk7l3YdM5tVIlXfV%2BuXjjnQ5RAXEi2%2FGqeCZTG9u1wj2nJKX5htyn4xc5fcvhhcca1CrTKkSXP%2BFRcSm5PIaEvmHQOJV0ye715TaidqVCacxGn99xJKsVzX7VKwYKFdQovApDF8J1x49FZoubhoXHQYzzeIGHKhLJQm1Fg1ZaJLKvKfHCVCA7GsM%2FoaC%2FLOa%2BZJg3Er3yG9KJZrrIVmwhaVi0veejYFW9d%2BJpgeSEUv7tjkcdnQUZXLrMmaDFEBdvN56oZYFeYBjFB6TDLSzq813bJztRpVk2djvvm1IMwgHuExHX15acEtEvv5g27iLWAmqdS7ZTcttwFdXxjCk46rTBjqkASe3BL2bkdWojBJ9Tq4DOPhs%2BhEHHYbiiHy4VvBvRclu9FCjdvVlBkExAnhr%2F0QU2wBezYKGg43ZaCF7h8BGO810qbZvDc3xhdT5VUmHsQTCscOV2mQF7TjPIZybf%2FuqRr%2FX%2Bg6Xpu8I8zTXz1LEhtTE4JsVImMpz8eOypdvaOZS3CqHdDIscF5WymBUeAOxD1rBiMfEcQCDLO3EV59Rs7QT8csz&X-Amz-Signature=7f2b0861be5a9f555237254f1e6ca84ed864acce33bff85f721520df6abcd590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

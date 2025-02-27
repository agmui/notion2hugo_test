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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEO4IFIN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBLLUjOqLLKfOiZL4qQ41xaCoAgfLY3jOIWhyKFxN%2BYtAiEA5Ut1ms57HhuzQ12pt3XcigfMisKXDaOH7CvP9%2Bfb%2Bpcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDh3xse1jEWynEFJQSrcAwFCdunS7N3B7I54GwlgqiAUjFmKUEbAN5olDa%2BKWmbzNu%2BWiJ6cZO5KRsmQGWIbLZ8lxwdol8REIdvBH06euKVK5WOZJsHEQG6JWX04OEiV339eaRmeXoeOfy%2BcbExjAfdzKoB6%2FLcTUynq9i607BFE3hQYUModsKilJWzFr%2BpiuS4KdZtVLQpeeEL%2Fut%2FemwBBw4%2B2sUrDODUqdoZWlaP2t9DLfQwlKHoTKEA44zW0WBv7KQ5Rncb6NeUMTg%2BpoKPf7x9wasZMUGZwiq7jlq8HAFNeAeI1vCL%2BxEeDV2tcYYXEsBto%2FF2uC28cEHgcDiicdIqiEJlrN1OQlGihkkxiYi%2F9cGr57gToxY86CcLlyNEPKqSVxFti5v98GhdswF0iqGgPGwlWOtE%2BQ174huj42sF9cX7IG7j7jEZhupxCjqw6YAlL9pobr%2BlogDTqQHKa7T0lDPCSOmt8UV%2FfLYrWBG8tqeVJjbXc4VF2MSnWMbm3yQkPt4Ufp2JG7KOVwns3l0h2DFDSa%2BCbCzf6b2WhWLlb6TMufMJHE1d%2FgjH%2F5B1RlGz9D3tjnmogV1zRp%2Fkflu8fWwH%2FQ0hoRGNHsV2bibgGO%2BDlOg2ss6EU0cJ977eyhJmnX06457bVMO3RgL4GOqUBBC%2Fh4EK7layrMPxYpxcgUYWrKOtw4Y1hXh%2BzF%2BTRW2k9sNH83L84fwfAv%2BDKkV8ia6aYhVoKuFtdhb0dPAuIB0lV9o6clECo6iKtDoVzsTFUF9cB%2FzVt6to12apRyZ7TmnBEZkTrGabdeXy2FxTUPLblieYyKTBH6GpJYHOBFvsX16lly2QTIXZI6DgMmGrftcVxKAGZpZmW1%2BUZaAokQ4zaV9sA&X-Amz-Signature=71ac1aba0805b3cb1bc3792cc6177beb9a28bc45474520319d5ad69d0779ca7e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEOIZHIV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCTtVysMgTyKuDH1%2FGJXS4fLBvUArdPgU3NFPzV2FWT%2FgIhAJ%2B8wV3MJBR%2FWHSG1pU6sJeYFthTm6yYig7tWqvAhqHDKv8DCHIQABoMNjM3NDIzMTgzODA1IgziWxmULdu7khlegzgq3APonKD6D%2FHheLQZthnXDzwLmp40isReDti9aZWDS2tjX%2FtT0t%2FDNdaMck2F84LuOyVi7%2BAL3L80hGVe5ihFYfeg2PIGU1%2Bhdqu9RJy3MebdRbQlhPrCRaBZUqHbZNUmf%2BOWg3GboNljOETOfv30RI1VnzjFf1pxIWbPdZYODvkTAydrOeFDDOhgNr0E8LFHXZwsOVDJmpJXZxMeY7vhqnM27qzGckl9SudaPdTdtBt0a3wf6bXGusxazCAQw5ko9NKP22%2F5C%2B0C9E3t0VHmcg8gdpVq%2BFO%2BN7lJa2idR87dOJXH5RC3%2Ba0NjJLQjC2gnhNnODIQys7zAv2XT85Vp%2FkEVIHC8JiqJOcOZ%2B9fhAPHue2t7qSckz9uOYWTtS29TdyYhOwwd0sILh9UpPKUk%2FZUZK%2FaoPwkmgYh01czKgiUGG7KoVC6imwYwjzulPSU%2F2v9FvMXro3%2B%2FMfAshhkcaF3aRnPMzjCxom1qAu1uLPvBPpyuh22wa4%2BxocYAu47rddo4hgdjIL51UeutokdJzdTN2P6tW0rfbCuYvwHj4UyDjU9CbYHBgINPVLEG2FRCag3Z6jwXp0nDr3o%2FNLoCc19S9LvunlSteEJYmvG3Y%2BDXLc3Ihno%2FMvhRhTNozC20IC%2BBjqkAUulHdi0clT5Cr8R13VSVtIzf9YVOF9Q8RWxeulY7Zf%2BBieAwhNei9fIkDJO8IvoDKrianW%2BE2c7OFi4dPFboDkp29jAgM5447e6psvZmTS6ZnkMB%2FGTuHbMREHYekGLzg3r5AFnHdg%2FUVwGjgw7R99e8iYXQSiJLSlChQ1PPbWCV94ucW%2BtBSw39xaNwDsC51b6vd9xz23OgCZFkw5cLqPZfkOu&X-Amz-Signature=b580b2f3950e3818668930900bb88eb4b7689c5df2621ee5dc91210300c5591a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

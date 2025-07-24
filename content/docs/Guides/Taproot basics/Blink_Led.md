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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOC3RBQJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFfpngxVoCo67vXsqC6zYKmUKZTvalsn6%2BQ%2B%2Fm9PsGZrAiBGTVnR4zC9G3CeU0nnveshX0Hqea1OERiUzJ2tRuoyxyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMI1dHM19JjwG4vYyMKtwDaTxOKGOEmTfgkAMrodaNzj9SGo%2FsifYA41pxMef3yOfXOE4IWwUMbc9cnLcQk1DziAlVC1vBRePGkwa50JSO9m6TZaxMUEaUqQ6h5wKDINgi7VHFz5vA0FMnG5rY%2FmGrmddB32CvphPrt6KBf%2FDRdzM0K4IPtZzsSqxLsMfoNE09B8vWGiax5XH7SLpQTY%2BMIysYYttJ8zR8XoLmIKTWFXupyZL4ItAR%2BXZVYUl8M9Dtt6KDpKkOPb0KLiTNdnzUQaQZ6oZJRkxVT1D0sQqD2dsP5i507ibj6%2Byc%2B9t4hoACRSnajK07ETEiZjWAjxQ8LKbirRec6qkZ6rVd54GuOvfFmcPegg0eu4vbXpHvWsXSUJp%2B1GusR00kKjK89SlGiovJ%2BnAWlTOmPHX9Vxc5HwT%2FB92XelFZhgqBhia9%2Bc%2Fm7tilK6TrhSljEItBWPsT95A0o9kYWt%2FoUlyZghRCeEfaLCRMbMrcSqLocxXioIp8fZik%2FaaYg8%2FYIQzUIL5IWhUdcKVfWmMemLlNNBgaAgwlUX3X3z8hCCljK61S%2FXWbhRNZ%2B99IWxb8pA0kwuFvQDlFonWweQKdIgZsMoC1gnOJjd1noUB2gCp8UZYqJCyTonjLjaUw%2BKdT3k4wkpCKxAY6pgG%2FchbtESdiLhCLPh9Os3RZFpCOmVm%2B2tXCKC77kKSsSC01l486%2BhH1rUkuqfg3Z42R%2FuTfTwBgDCxYZIW6Vmt26dvTCsazpwbtlO0U9xpb58XKUu26V%2BwLPlETdue9yo1HirObHIUVbIjg4slWLC2MwGObmEOKG53yNEeLLyfBOerD4bKhtJM7bgZ1pnRStyWXssudjpUgd3yms%2Fl3w%2FZhsO3ASdtA&X-Amz-Signature=e749e30f025d41e9cf027f63ffa6c42e117539b196f2782d016e055cd8879b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MOLNIH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDNwInQSwcmHMo6iy3N%2BEy5iDYl67P2vNILD3HlyKQUpgIgKP4l6izuc3kmjPETGawrz%2FpqDrhFnzgiwWZMYbPOOvIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHn1k7BuIE0iTDPJyircAwGZ2%2Fp07rLGokxzujkAlVLB3O%2BC68nXOE1KmaXMUUBV%2FIHspLE4VqmXkEWubSg%2BhHgMHXScubIUuBG4z1S%2B6jR9cYoLl45%2BiLq4tM0QU3MbqGNGlr1zcJ%2FZeT6oLHA8ROrLvFvcrSbMvQanIef%2FN0C%2BQL2pXAcutqsrcmJnEQMJ2E98ifyIy7EoNuHfK1R%2BZQ2yVSNS2d%2F35HgPJHMNqk3CuO6MIQ48x5WG4n3PPHkRQGRpYuh4qQHWqdsIyCe%2B%2Ffj2mdMi%2BnHOpAw7FgC414eLcJzpXmdRdvGQWw2AGgjzfdsNRvteypc4XjuLEdfCrusImjNBmJgMvMDGm4MNO4pC7xS3oxgv8Pol6pLe1rEoJdVn0SWYq3voo3s1oTb8mmbZOHOrNil5MyWEaCY7zOd%2BIvJf%2B7Y3oQwf17R4vRTl39sqG49r1rvf0hinObxqcffNnI5em9ieG78rkFrjmuY6ZzGzF2d%2BUVWuC26QSMQ6o3rbYoHJ0M7iaTua4tJ2KvkSEIfzH95SzdRc8LFr%2FuofSWmkYTSQ6BzK4SZzgbW7fmsgBAvzLWgKKCaadG%2BESJl5RuYWsMEwUFX3jNJUqVzPAxPUkXfo3TxLhFsht16DR8lvjzlVLiTywT8JMLSPisQGOqUBMfyE8kCpz1qKmZXIU1O938xNmZkEv1MBzqNagw2p4hrzTTSkjZbLjlycVKo0dDMLCP7b0pqHQUcxh2RXTKx8BVI0jadJmGwvt78aiRMt%2Fe8uVCjvw8LEsX1OF3allAnklbIkmgdeAGsV3jwTw4UsAY3Qt0lYlW%2BTVC65Upn5CGT%2FJ1z9gZIyTd1tQ6f4WninA9GdRD71zdq%2BNM%2FqMO1HPUEKDF74&X-Amz-Signature=d1b006401f8017c39996005aed9c0f961f3b16fb281dec248d3adf9325508bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

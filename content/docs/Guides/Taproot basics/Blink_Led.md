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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BR4VDZV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCRRz9R8gML2rYFamxhPReGmm0v9upFsUeUJ5rhkf%2BcoQIgQc9E%2BV%2FUg%2BJY5Z9oQJTgJmPEFxFC5Mi%2FOvG5vUi%2B1AoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1iYieIEadtYsvJTyrcA8eFy3EhC7ZIts%2BLzKGSez38Y3th4h1Bo0iF%2B0yJIbV7my5%2Fv1%2BwcnLEy1laq9A3i5Ll0haLU3PGGRGZRlTVJV5UWC78so5zNaD7ZP3bjY%2FQ0kBqMYXGMF%2BJjqlabFmZpnr62%2Bjp%2FurnDDvCLvcXY8x2v%2BcmU3jnyj7euTBXMwu475BXtFJ2y9IutRzAB7dMA4bviSRNuvSpJD4a3qpI8xvVFbaEFEKtbQQ2Zy%2BnCAn%2FLHJ%2BA8ypBDEM1eGmhKIdUTZ9eO1xu4kzjsuTD80JovcrSFurbybQdBZ7ewyNCDK%2BxoKoIdgXvawtGJdlVlbWXRocWUkcc6uSUY1YPtVPMd%2B1ed9YgOZaFKpMq78bUbIoSnGTeHXY9F8XNmzr1k8m5LLUFVjgmaB3827H%2B7vZSjfHu%2F3aJI%2FoNeQLUfKnekTyBTjVd91iD9jTEvVyoHtOuHwFhPHk4yWgbeSgEvECT2dpriW1XpN2dNubCHtKZr9R6%2BPDkR3otMdPE89u8UgJHF7ISOoj7Gv1zDs9br%2BPLCDGze4aqRsfmgIvxnG2EsL0ou133tprU1omHwB%2BgA7gB8NhpFzVDKOISk9dfT66M%2FRg%2FMmEGxJbWf08XbGcOBUhl5QuBDzcYreS%2BOOmMLnlqL8GOqUBo%2Fi97oSCekfK1XMJ0tt8ZBED9k6Ar4RTrXbXPKOv9KpAzQMomvrC%2B5cjG7EDXlQvHTBSuKF9IugIgmhyDFxrZcFyLh%2BwROwb8Oq7PAx96xZ9DZdMFwVBRONAZlQLBy1RhznveEP4Urey41glSm97%2FlgPqNNi5Ojcc1%2FvV7Lp26r5e3DW5imjHhpAxaYSrSqhWLn12Rv2ermuRknce%2BdH4YRZmizY&X-Amz-Signature=ad51fa503e7f12694ed0aa4cd0122135579a4202ac746c5db494bcc3fcb41409&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJPJ7WE%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQC%2FIDSRU2fJkHh8VOkZQQMqbiT9A6telZL3F380WGyc8gIgOraGwZUXq8u%2FacqgTI5c4njhFB5x9IfQWHjPZI8emVoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqBhraqNflf9nw74SrcA0q%2F81HCUd7LdApq%2F6zkYqYjxQ4jXRaynvv2MavzNO7gwCQhHX7oGPxsm2jcJ7kg0%2Fgbm5ihlTPOXQqDPs6ASIaKMfgqoPRaPHbrBxT7NFa%2Bz%2FCMLxgv0tNOL5u4uiZhAjJD2tVWpi8sSUNb4ZfHneezib1TJwPI8u%2FZLA6iQlb7wDlsRbB3t387LVCLXKVMATfpBHsSS3Uhgb8lePTydlEWAVVMtc1%2F0uUOLpJD42tR6DLrXLBGUfBglOfsZgmVxAfEcsCr495tcziibjQB8uMdqaSDLbGrG0V6iWwHy5U2tbj13sT24UGac8bJqV2zkAcYI1%2B92bxcm%2FtiRv4xgzhvKTUV8OZcmn7gyPvLQnjWfjKJd%2BvMKg7yt2k5sN4L3h2IzUShPAHqj0H69%2Bij9bPKMyGnmj3WEd8oaXchieMPTCnj%2FJ8FsBR%2F2a9jHCOxlcTcE8AXTVQI84v%2BBEf%2BejAqVL%2FRW3hG%2BDG2Gk3y03E%2FAI90olyYit9b05KRxvGP0BRHi396hJQ8%2Fd%2FTdNzf88g62OohS2jseSJ4%2Fo68LbtgYtzPIRBheYxvj1AYEF%2BNLePxreT2iUFDo%2BVeal2N%2FgOt1neBdMu309XtVUjgBz7rEsbFsE7w3bqYPZoqMP3jqL8GOqUB19khgNyaxUgNjLvK7FhNYcQLDx0SX3kJwzXC1yDOlibvoIYI3n%2BJOiEwvBZxWzfMpBD3T99EyasvD8O4jzOigMVVZyAdJh6p2FNe7COJpWxazopQAo3CArME2ozuQMuf1KCN4PvO1cr4iFqvf%2FqEMcGS8pd4Lgpc6PpyCZwAO5SBAJHpUz7YD9ETohjK9uAw3KpqDHT34yr84dEA8hPpV%2FWxjnOU&X-Amz-Signature=b03de9db7353a0e8f78afce09634c345849828fbe5e478062ecfe974a147c604&X-Amz-SignedHeaders=host&x-id=GetObject)

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

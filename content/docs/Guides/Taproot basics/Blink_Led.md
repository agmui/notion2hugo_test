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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRTXGFAH%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9oaO%2BpmV2EhdnubU%2BNMDhcuDf1hHaaxbVPj76gZqACAiBB6T1qcz1EYap8rRPirR5AnFv6gy6o1ZsVSh95jMSUKCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLYbf9fLOBjUCCd2LKtwDe67kKYLbPzJwj%2FyZTODAYE%2FdJAJ7KPEWT%2BGtD73NPuMnhM3u8sE87Wo4tS6FTgNZMEL%2BH9TODf%2F2O22gqcBdQNCAFYkPvTV0fGWZwG9mY3ZKTinH%2BnpKPn3nsB%2BAzGfcRxbuOH0t%2FpqbTE%2F1iwPKBzLMa9pyU5v%2FUopHzHb4Z%2FKfhZbP0A9Bli7fVST5o5xLz2MLGSvgpRqsvTN2Oayu43wWpH1gH4t99YeNPPF%2BacYet1dOzEjsLi%2Ff0u8aMLXylml7gPbYWKhj2O13uz6rm2yB4l%2FVbTX0gv8yb13TgK8%2FIhJMUCZZvhqFymZKa%2BwINmVuY2zHLmFIYhL1xk6G1NTQcBBfFB4JFTSBH%2FQIk6k0mLW2rGcxXMjI52K15dp9rTt5MRX03G6jJjNIRdra9e5XfdpxtYkbpWkKi9AvB7j7DDqT6K%2BMRpBirAdcujjKqOBguVaADHv1%2FfS1SrfAGcjGvb6EzbgJuqMu2Uam7bm8bf9PfloHZNW218ch0nv9JzT%2B7zOxzsmRF391%2BYDa4Nq8NFY%2F7JxYg2SSiReqdKOTOvg%2BonGRu2JNvAGZIXtssWsSabgqBdN2i%2BCcGLTYbcTTolK9y12f9fBYqfJtIN%2F96vOpmcDr142c6LAwmqjXxgY6pgEsYooA%2BfDPzecv%2FY5oq8v2fkm1PAkx6gjZgEdQJAuPVNo9TNhZAPsM9BS6rht2bZjw2K6bX7g99RFMJoZm1pubZBhDX9voNHHPAhPmOZz9wO6ogn9UrqzZX7cwzjE3GJQRzrJYc325bUDfY3CvD4XLsHy%2BH8Slak1AFipDMlbntf9b%2BItfpdTCIVYNt%2FeX77O8K5E3L93g8TYxLwghJ4WEGCHJ%2FVHt&X-Amz-Signature=1340bfbf16d7dbaf00ecfcf098ac21e0f18f176db1689cf7b3f9fc72d13fd263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4ZMXQK%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBaigFfvMv9XUIwnymfNnhNAzwo6DtfAjexhqUFCFOKwIhAKax7L%2BBNAVUzI9bMAYWy5j6Mn9L%2FsNvMcCF4lSnqvQWKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BDCCVW%2BFg5f%2BwkM0q3AO%2BVjUBaPdKIjoeQoPMnEtyDtzru383A0HR8ccg3sjkS4T0Cb3hpUwOzS41PTHp1mYd0rzspxZxnHQy%2F7BGEGBd0iMWPgpFBBZiElVCvmh7oY89zxwlbKxiM7MdPs6Vwzx9shczyvNBwh97zfLSHLugnTkDhugkmroN3%2BITE0ASnVBjq5IYWqvcmyfW35NmZoUyQr%2FlQXmc8b2c93kIll%2FD%2ByEtGpIscdePgI8XPPMXMb51bY51PWe78Ky7qHJwihw3DSIJCQKFj4cNRgimaOJhbHCQbYAV6OovOfUl6taxXfC%2FqpvWEMnkQ0LzG0sZrwQLHvUTcci0JpS%2BnRTC%2BjFUmKkRKhH3kpKzxD01Bk1S05Hu8ccHAjqtyBk65l0yfHQXC9yMbcM8WJgXO2WrQy1c8EP55VzHsONEVUx2kx7FHZSmRcUFcoKCRysP6Zsobo8gjQmJhxyd6Q0B2b5d2%2BgGQrc2mWUy%2FiMWVu3Ub1TA3Zc41ByECMVClJhuLUUVop%2FjiaBXdQxPmzkYte8SKaJX130YhkxMTnBSqzCLJBIN5vJtuweEBDmDRtA1%2FnoqJYjx8mZiObVIsfXa6YZjp2IgKWytgnXHQtRl3Nftd%2BhVlH74xVgGaTXdzTxt%2BTCMqNfGBjqkAd4fa2eCBa4wsvlvEKhQclIvLFhZCZVQGXCOLQja%2BBJ9QeuXbomKQPCPIVDAOyWvs1Rkdg8HgQChGQL5cnMe3o9mbUoD5yn6a%2BVOgetJQoqppne%2F7dLh53Z1W1GgyNuruLP0VDitn4AbxNb5%2BHq8vwNGxEVNgVvEsLMFhSQukqwzviP7Z1Ibk4sQg93l%2BTl%2BExZEbMqhFJ3syDGSxAblxeMx%2B690&X-Amz-Signature=730b59ff1f3e47febd18a8b40c82e0ad067dcb07741555c67d673de8636881ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

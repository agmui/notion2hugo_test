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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDEMATON%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDRSftICFwHlhPTq2Tq9GTY%2F8ier1xWyWVu3VQFP2uytQIhAL69pi2a%2BSbcFGcLhX2swGHZDweTQw0pxn2FHLKd%2BtZ7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFkadGPFisMIbo0zoq3AMgxnbankerraBlEMRNE5HuSET6nV9Zf6Ryiq%2B5ESWQipICxySelRCqpXIsnxcAZKHbAt0pfwgBOQLGW1u%2BiGwBoS%2BlqxuTzUB6LogQ4G5qCqo3qTAtpu52MmtBDqVTfPD3hf0j1kljEgAjYIqgvZLcyRp1tZXnL%2BXI8qwAf1vUfD3ee1focPCFD07gYgIP%2F%2FSt337XKLHIAqr2F26ghB7N3dJXwjF9fd%2BB4GOB4agPNqQ%2Fj0u5VvydA596kI65NovEBBEy%2B0dhI2wY%2BSNzQBQRhd5bGDjvMAOwQ4UW8RgC%2F2PbLYPWlt1NTB392hwFKbFzhXTGvEk20jxuz0BlheyCK2BgVVPXoAwwnETm5cx%2B8PYOE1yseBDjgRxnMfFOL%2Fh%2FdCFqhuMxyv4K9ui9Q4vAaqonWdNsAXWNuOjp9G%2Fo0BrZ7R3gtQwEei%2BY1qLsjMJehKd2NlnHcW89BPEy2JcOZs7jlux5R9PSvfjSBNVLbqYGLObFk%2Ftz6QkHWAuPIQbu5evqvpgZFoQAv%2FwL0k6Z0TCuDrG8kRfieegoC0rgUwU3UT00h7%2FZn222s72biCnRXTrOXbYJVYAnrwfYnerXrt2Y5ANo8YlhnzuH6ySEgQn9thW1pfN1B1dOYTCHseu%2FBjqkAX4PQftPlKG5GBOPpBey9CCTClZjx%2B2n62rewPoPB9ibpMKa5zul2qqRMh5oDnW6W9%2FS1soowqO0LWIE2p4SgTdAFKO%2FpsWn262GaFhvdyqo5DZMwgvnFs38ACFqB8Tb6gYgxfEwfQnTelGiPQSc2HlLHgBXadu1l2NuqBvhn7FxxE0VY2KSWm%2FdNqbRlI5Ef0YgqamQMM1KHicxAJywMu4VkrUw&X-Amz-Signature=f788c7e80c09db13d2f44a18a5d30666c412744d0953a9edf8b87a0a763a9925&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDNOMI7P%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIAOqnj95gYH70meW5zTEOEcNWZ0bNrs1FRe50wOL5rdIAiBcMDTAoRdJpj1cLOZ7hCtaDvwcCLiCfZx%2Fgp2sL5pARiqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI01mdIDIgX5d7AioKtwDG3xZeBNGXrCUVJN6vKFqIPkEPNTdj31oXNSqZw850ZZPMGeztmL4NV6GFgw7rQSGtWNTcc0dBN3Wi95nUOF048cbDVDkCVZ6W5pFEdtMQNsM%2BDUI4P7TPhxWBnS81afYoUu%2BmriuCzhueQuqf%2Bd1ENaNM%2B1rtZyPqGC8%2BPiRXOfbkdFthnzinUejyPD2r3nv9SdzsAzknYxFooLOBvEfAWQpy%2FeHPwtLHddZ6J9ilEol4f0Fl2Bd5jczVuz9TbXmN5csGZEim5gQlpbEHjMgACYhaVzm6YGO6FLV9n8qbQQcr98tiY8V5r%2FeJntBg9gQb3NHGDATZo6SS2tfYDpJUyGNBrFjB8w3SPN%2FMW9VAMrbkRBEoS0K%2BiLTNBFzGoxlL25RoAh8mxmdrWnwK6cgXlauiC%2BYNr8r3DseTTV2HXrb%2BR9ALT57ht0gEoXHlTPMEWFnq5ZAO58rOys%2Fzyj3Ox4e7dKAa8H2q3xMLLi%2F6Ijs1vBp%2Fep%2B0USbv5TdLLr%2BlKVX%2FSRm3KGzBGM5T6NdOwkDxPUwwzJmx%2FRMCnPYFWDAqR9o0eesfPhtHlsCNU91FloQXen01BgKAfOMqseugnBTK9D8TxJ1jB%2FSHSpKQHhwZc670maXSL5pg4owjLHrvwY6pgG0AV1lrulHjQwpUfcgZHLv0z7taWaRGjDq8WNOaV7GmGTfLQsdAj1As%2BItYL421ZX%2BFVavfTPEH5lTTc55HDaPwO8wcpJUry5qG7iD5N2qgJTMi7vt8JPcRhi3I8MTErFDoizWzBCkuF8Qp%2FIIkSTzGWf%2F6X0fZoitTFgguB4vVLNv6T0TMPMnqpCQzGAFi%2Fg6vKGOX6%2BEdC5pk3gSsufzslJd8Huo&X-Amz-Signature=5e5e895fff7653c97399e129f556b20af931b269609ca48b24df8e91c094c2b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUSWCX5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYt2FYKXpIQ9LIGIjtF6TbPBi3PtAGtDKYIHfoShXzGAiAvzH7r50%2B6lts4uzmzsAVeArJLdpwBGEjkGtACm%2B0sfSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNZq9zdDerZn%2FTVl%2FKtwDEpWv%2Fe4wF5kNWYUNEaMeltKmixkj8Hn6%2Be7aUxbdzOeqXUui0xMgNh7xNy%2FbB9bvYyA%2FNSS6f18PpcCAiSvHjFpBGOcC7iYq9CG%2FiEuZAPuKTL9uRxHFrTt16b2tDdRk1GGFvmZ4jv%2FUjkorNxXq68yRpGokMQPpdqdaODn2QtIh5sigYARzK1EykznLr%2BHGFbdVBs2AajIeSw%2FZSiGC0PrzAt4Xd44SF0IDGt4NNR118k9ZkJnyXJEoHc%2FZexB59RQ2syDcrpxepWxhMVqPjM5VkflH9fWi2giY3EPjlCBo8SE0zoROADl5q2Z%2F9CQ%2BjmoHDVHfXvttMgDvsSNq%2F2wITiL4ISOjIoOQo%2Bk1UXnidtMk29mb47mxM0nb%2Fydg7%2BLxyfQkw13Jm7ZRWYlrLnTIwUw%2B9MWW7P128WxXBo4GZNMbP%2Ff%2B1UquUWEZ012Wdf77I%2B1NL0ih0hKtDJOvI3beroAA6tDd8eirMRbswg57I2l%2FQtkJUd03fqEYX619pqwe%2FMQedq1W8%2FG0tva5GHENn%2FoXTyrV5E%2FvaE7sgO072iy9Tr9vh1ZWVnWGSJYmVPeiW5XGZv5hTi7k8ja6V9r%2FVoEI5sjlTmKtUy%2FoUGGAaOxIGJ2v5w96byEwsrLjwQY6pgH39%2Fe3y%2Fm4Kstelou29aaC2bLDP2lJ18LSbkGDoiy%2FiGuNc1Tbkj4PspuG3MIZ%2Fg1QFtYV9b2WG0DZK6wVS7ERuP7JkpTJu4Sfpww7rHGPDdUb1wIVpb2ZbcdyLbD822JyghVNdLSCIyjj3E87T6JngbovYpXd9%2FeJWem4FHZK2xNU8fDV2ASQWGCuCxEHH5fGALxEVIXDnyiDVfSklydhW%2BQOKJG6&X-Amz-Signature=70fc48c863cd082fd896ef1b8f41e39695da2413f51fffe7a5259b8731ddc624&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTQRZ53%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnrB6ze6nJPB%2FSYJACiT5ZBNPqPXluSuULctza5F2XgIhAOJHpcUXB9a%2F6hLZ53Mfg594yyhifXBC2yP8KP7qyTaAKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuxRRufiaJjnjUHTYq3AMPjPRQcSmqiM1axlENcQVRiUR0anaIQ84EuWLALnh%2F%2BeR3d%2Fq2TtzmC3F9zI3Lyg16vVQ5hR2NglPwVJy0zW3DyqwcxQ7zL8DCzeDDbcoL4ubTwa%2BrfKhCgf82yuqzE7Y5apuSU8lC1XzlB7TInbTbTolv6XS12FTfJnfa6fNooNqa74JnyKfwj8urFey3iL2cI%2BPXODvWURCgxPAvXKDHCip8BaFyvaJE5qKSDIyrcmQAeRAp9iyF%2F816b%2B9JPTouPIVX1hCGVssiyYer2dGCFvQ2P%2BktFwGjo2I969FbfXuGbwXcjO6TyhKRDmYunipphq8gEHERDHpAjxFGBhr75deq7aGyeCchKfa3slC6kWFT8gezsRziqNWi7d%2BEGKRsI5E9Z%2FI6Yl8dSRiz5hr7tY9OcE7NufMSHIJ7ooz8JPSd2PdwTSn4h1mTDevpbmD2dndPH60wgjMPe7y%2BLGUd4v%2B4NRlPYrjC5qZiadZSZ84VKPyhXfmo8O1Gfy5NuW8na05EocXks%2BR5VBKrgrYzKBMnqjoCiL%2FoAzgmMMZMgNTu%2BBL4o3fzj9OtspUKqH9dzTSaHXbu0ZGsLa24acuU07CfQiSioMaAcCWt5YVLhIVn3xT%2Fg%2Ffn3ADBGTCHvuPBBjqkAX%2F9bAM47KksFHzlFMFjG8pkn9PIo0F9tdIkX0w%2FiEcc1Il5ROTONRpNFreotNchsRGw3SfPDMvgQARHenMpjDFe0kzDmsseV9Q9nnFWR%2B9HnYf7Zwty%2Bu8b0Ndq6avhdNMBMA8oFrKrBUCLhR2fC66YtvTJRgXdGrywFghG3WdxV7hjHXkPv7spkv%2FXcXB2IioHd7GLxs8faA4tYqTqPtiWeEkL&X-Amz-Signature=0c0aed8000b5bcd2c65a0c9c2e904c0f5c1950bcbec553a8c91dfbfd486d140c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIS6L2BA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCanGu4UMCTE0MTJATXzzn%2B9vsV23IPcEV2bQVf0IEOjwIhAP4NNhVGIc61%2BDiXvOzFDfVvr0yVXMoNKsd%2FX0B%2FXVHFKv8DCGYQABoMNjM3NDIzMTgzODA1IgzMLbCkbHiookwU%2Fewq3AO%2FFk5Q4A6E7sNd3%2FDs52F7cTmC5DKIpuS06fYDgNZW3GFQwmbS8yTcIEQpZ1f8pr27wR3FApVR10w6ud84Ngqn5FaXBPPtwjXABKjKB0udnKhR%2BiB45%2BBP2jhMNb8BLHm7EiXArsXS21f34F7Lo09CcLwe5p%2BN%2BuGyksB5Q%2BHSf6cPqfpr2ih3GIKzCrbtQJF9QkMQTaxj7rnHNRvjL8DpUAu%2B9pMCRRNMWI1YKDMoYMbfXwGw93CaThZXpBuLGcM2YHKvXq6%2FG8%2FBYCp9EmcsmcXJPIWtKp31d1Rtk8h4Afa7sImJHpJF6E9o4PBmRMTTLz38GVQswso9UqgqeW%2B2dZ01hnofgRCQDjSbXZZugYoP2IU4VPdrbd3XCGz60u6MGxL8D3I5YqX0yQsalPbzpkblFYgLRtjaYjcIQ0u9kflh%2FNZ7XHsanSiNN1fqX66wGCpfydXE9fDiHZkyEMLtTHuQmeR4HIU7x%2FipbSOeZe41WdJNjznURn1vA7ckSLHr%2F%2BOORAfDaye0pXxOGstzgl78w5I6ZRyGzEoDQf3CxCgBtN%2BoC6SmpOWncAsD2%2Fzi4rOC56x9zpSTjhzz8pPd9p%2BfCIgD1uk6KAy%2Fcb8fLhCBaP9ZSkftKPs5mDCd96PBBjqkAXol%2BORGHi1vbbXX%2FG1t%2Fks9OrKT3Dp%2FAaXdJZhgWHdeoCSFsVERvQ6BDjkPAItWfuvmBz6MZfMzR0RzHgqQMs4DJaihSAOzsuPmlxuSVMj7zOOJlPVy7ex9R%2FTsojx0hR4CK7fkKExPIZ8pQBv5QlhynPbhC21tu4porMp%2BGoXGpIJKo5MkkP8Mr%2FAv%2BkG%2FTzla3zArKpn5do8xqkFyx0hOgYFy&X-Amz-Signature=a3ce7dfad566f0ed8a3e5ad367153123c706f435c35d66978678daddba74ea1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AIJUPIS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGInCt0l72y%2FohNreCQmQyjzuvMPWGKIFdG1k2GqAB1xAiEA4u02dNiqYAVc%2FBawP8RvRlgoB80FqeHoWyGn%2Bl6MkNcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNEUBGJ14iSJSYPJqircA9uK%2BNHuqMjH2Sd%2FGC8ufKk9H2d%2FnaDa90BUY7NGvjEzbfaERVqy6OmYES3WX6LtCaMldCfpVuFs6fn0XC0YFYufKrnG%2Fk1W9yunqmMY03E1%2FWTD9d%2FHv%2BH85KVNBTjbWo47LKb2eQiatbB0UtfnLlaHoht%2BzsBRbmT9HB86Zi0MqIOfGRxIv7vS%2BsR6bxkcvut1%2Bxnvo3VRGsQH55XnbAa1STU6BqvC%2B%2BB8BDUrZG48cXpj9cSxm4JUa2HMk55Au%2BxA4WWIFsdx0IaGd2OzZFcvnb8L65kAuvddGUOduEnjf3XLow7iKjtZoFDVr0zZmJpojDLk9Nlb2Lz2CT0uClhrVd5bvUrtpgaWDjvn%2FRdjNpAmFSkCTdyeuFgnlRAwBJJhJHd39tbRa8Et45Xpd1sSp8QwPzqLXNgG4f1tYH6jkcxYTcEWXqyDUn%2FTrx%2FdgABwebgbVZHzhfAfxa%2BXJXTV5TgAGp0BlhKUsq%2FDLHccn5Ab3M0Rblux2nt83vvZcGeDj4Cs5MMwELDsO0FfWtV1uRsCTHV%2F%2BNxDacWh0SJ1WidJZqbFuWtGM%2BeHrktPUPwLlSHA%2BLkaci83IodXLraxOqS4KyhF18BaP%2Fopw0Xtqvg8trfP5xZzEgJhMKP3o8EGOqUBfLso3jaihsnYJ%2BGvVWNZPkkgRkkhkbCy2dN0RANJZr88%2BmFMvkDJ6bVE2skxSiXuPULBW%2BmEeTP8zKf1pppu3vGoR2qCpw5cZfX7L3LudWCMvkI578heiswb%2BVyk9NLn3%2BEOohlgkcvjRcAobALIWd7BKOLvwk5aB9bGtHCXkWsN5vHJTUYtp5KkRqsOxBkEoCDwBEx2y2ryMH0VUC6P%2F9CkCzFH&X-Amz-Signature=4652fef0fc65229de47e9533da8024e26178a36c042fce8930d3e350dfad76e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

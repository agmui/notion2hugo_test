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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YUKXC5%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDwWjyLmLvjNamt5%2BuRd6%2BPf%2Bx2webLEKI4JZ2XXaTozgIgEMcosmYULMo%2BVdo7cap5gltCYYwzn9w2x2lh0s3mJSUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbCgfUn6l49QblXLyrcA%2B%2B3PVSBkrdAbRQPXb2HVzmyx4RArzn3DIAetLq%2FoYV2oKKk%2BlOzI9DHpi86JEeF3ieU9Y%2BdQbZ12VBukAeDPfLGTODddgE57SdAFe3cxwmhkrBwRxjduFe1D7Q3ehISktHdSye8hTRJEs19lf8p9sS4gFJdRGGtMjJlmuDurg95rLSquhJDo4kcm0GNrWzwuQ9l5Gs37xmWifbKw30doDk28Ffq3c%2BLoySo%2B07w0Tp5KGe9MTIBUN0sg%2BJR5j7sUlQsoiTO3L9VSPsYLt9ng3Wyw%2F%2FTNBAvceSEXHuHnDONkHgXHap66f5aycVNte%2FXQhy1H%2Bg1vlcYQFCNFZKMSQKcfJfsTNy8fz7sueoxixMuH3EAJvuZWX5c5QgI%2FU23wN6FZoV8E5tXdubd5WlFd8R4h2f4lJy%2FmH1GaIoIdjeRAHyVZeLmWpKM8PkfeKw%2FcDZVlctRG18%2FcUOwQFdd8lGtDp%2FHeYaagkMUjHn%2FFGcuVeOQ33o8ETqTLWcLm2JJtIL0%2FMBJaba8jnLaP5IEwkifr5D7kUEddAJY0zWL8CW6hJywNrGzFj2lOIuTj6yAgrZX2%2BnSDNTXQF0%2F1FY8rXLSu6q3PyPrXgOOzeIEKg3JuZY0LvveNsESuqdVMJr7uL4GOqUBpJmtlMIEai5p99hy%2FQSDi7HJBcb9G28qFndS2e5l7BcSfGqRoupl99r0uqo89YxewKlLMRTN8ntp5bA5zstPkiZqcInQBLDUV%2Fn0f3TrL8OoVu4nnhm35efv5VedZjmfldpKQYPTU1fyl17y8FMNVF1%2FT79b1uA9Q%2BJ9yUObwmbrG3fWzFTbLYpbOZXnGuU0T%2Fl3RB58QGpGahKmeAOuCX356eR2&X-Amz-Signature=ae99a2e73744e3e556d76714a5912013d1637f23bf145c7829fa010c7104017c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVYPXTQE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD4gn%2FudjbdCkEYXYqaS1lJizIg%2BuRPqEOxZw5IGv3DCgIhANNsgrh9%2BVSudEAjV3TUYlmhW%2FmAJ1MOarIzp5PbpDV%2FKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkhXcpnYMA6qYkehsq3AN3v1ueiNnL4ENCfWI0mzI8PAlIb6%2Bfjs2SELb23LCWbPpmUhGcoQQxDIKLE81CzRxYlAdWVRRcg4%2F0IcMjWABzLJ2WBv%2F6oy4SYOwZk6zzHHbC9t4a3Kb5Vz%2BNai6vZ1eHBtw0Wlz6CMhyJ8A3RB5e9y9n9w7oStGhWvBy%2FBEjZf%2BgMIRdQcswzypNE4c5eO8tTXXnqMkm1vxVjRyKDio6fRqvfcRJZrU9S8sXXJ8OyxUpVlF6gZodB0tnxj69i2raKzG4s4wduU4jzW%2Bu7quy2HjGpSDB2XKrJfNrgFsIZbVmDd9I0ExpGRBM1wqLuRZApkq2g76Bz4jQDAZYQ7BOmr5SwSPQfs1EWjWXsbGp%2BoJjJx%2B%2BEhvzTls79UhHf10BOK6mv7dR%2BVvuUD3OIV9ZIL0%2FDjeQRt9Ov0%2FBRwVxzbrZxzINMdK%2FxE3bbC67TbLuyS%2Ful63j5cYKPboZ6B7EW8HGJ1fPRttC5tx%2BSPTFhPqCRfcIRB5ZT7aofQYpKiJdIAJZ9XwaFcyLyZF%2F2auDN6nkUa%2BHG4s57vPtxKvDLjcHbsjLnbnYD%2BJyV3oHLleumfDIyjrgpBCHcgaCOsPNePXCHRe4N1Lu1PDjCMTJkSQEBKal2zHxP1NLZjCm%2B7i%2BBjqkATSZrIjmmO7gHC%2BsGmvu4t7v6gssrbBIwZc5eSwIo9ldBgpNXP3SxyErY8EUEjW2CmGtKjRkd3YOFW8Daw%2FFZBXqKgbuNMbfubkZ7xFTYa%2FRvHEcOZtwD4GfWVXrsooaoVAVnVOV8pzzH0H%2BOapEeADB0sOo93Vuhi5vetIM3mBf0aAnWdpsfCjNBXX3KiLubO8RUQsJRPHx0ctAPm1MUML1jzPC&X-Amz-Signature=3c31784bee46efd7dc03c32085deafa93debd904ba10f7ee23ec842495103966&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJZ2ZPI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE45IlzgT4Zw6jFK916AZ9oAEx%2BvgeaWRuFrIxzmWUeTAiB6PoYS9CrSOTxE2XjihIrBd9Q%2F1Z2hkzRRP93mwKXqKCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa6ulVtXE7Zesec6cKtwDnFh9lMKo4cytZhjocUUSSeC%2BOb5CftRd7wYIQVDkqQtIixFAU%2FS%2BhbDd3W7toHv7b%2FZkArbM0ZTYXpv9y7mH86oQcp0GbcYMc216SLQ6AafNct5QVw554QCqqJ9viDAklipGm0NnwhJOAsXKx178KdXG8M2KqXR4xD3gyxR18uEukAq7ai7669BS%2BUsQe8q0MYaMNhvyL099ffeKmT%2Bb4JABPMyIx3yCST0%2BBoUmgGD9At4uHb7qUVCkOt%2FlVB11zfLnhruk5JyAvZbtOEtpQmEyT2w5e7SBhiNdFFlA32jEke8nYCoGt67YaWGeDIPTgeGFtukmIOTM1X%2BjmYoZQmC2xXmUHX0GBm%2FK%2FUFssZvv0szAAlpnhhcqcWVVRBuCd9XyX2drLV3KRCfiEPOlpVTk4J9Dutwc0%2BQLoWmFxG3DahHDSLABPWqCffqvd2BpqS%2Bm2%2F164xdQFxoJ5zypizegZQZhoErWeaWjWvkDiApKTw6Z2NC2qAiAzk3DXo6C1rvJQCpx4eZAZZ%2F%2Fbtc2veS3ZdvDiYKNKIFUcNgmWZA%2FZ%2FSAhrtOAjtVmvwhlweFVPNF5u9KEe363T5o1kpv4lqmJPoXUQ7vqfWXmkS7i2HfohKUlFXg3o5V1BkwrpCEwwY6pgEKteG9O%2Fm0UuGyO11Az7I4Oo6JV2%2FHlPrCHrjvJDFGoYgg5VIOopUa7bw2veTI4r7fmH6p5nEgc%2ByEtA3QdQzsA7AM9b0Oz1%2FX48uJy8xL5tccPefS%2BavdIXZXqlglB7SBraqg12kjMeQVgwQYfUlOm3h1iU3Bmy1%2B5YLEnyKTINwoE5q8RJ9xDTuffi1Gv1F5R4c5chYyopJlYep%2B4bgS55o%2Bq6ti&X-Amz-Signature=d897eee7fc526f9ac7e3f7d65e67ee95db0515b7c81247e7adb3d6c697e25ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVNOCPS%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCBjGSjL8h77pZcJGoUPMTDFr9CwfTwlz%2F%2FTKL2fq0oQIgFhmHnqd%2F4IpKjOwSU%2BwGUu3JzbgXcNEBZwY1X7fDSz0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSB9G1gFdAiZaCGpircA5IqDUwlTSOnVy54bFLOt49zVi4Nklz8alO9be2VngjpXCcBa5godMzSLfkPFpvHP2JdJKgNnLH0DcHCKGiv5gFVpmV%2FL3Lgo%2FqlscXYK19V2GiGpBdWtNNEzse7gHN%2FuEyV2kfPh4B%2FUSnm6ElXOXdsY4wpUCScerV67Cp5vaJbsAkI%2FxhFC4F35lS8TuAdOgNHJ5iKoC6nupcEAm0D2WNIF%2BgosgpZ8hG2yXW7QU3HgVouJ0ZBBnlVO%2FNlg%2F9u1hhFnFdZbpUONKrH9eeKUS9bz0PzUu5PYRUhjMvF%2F5HLb8m3ruPsufJ604DyeSDn%2BWzCOiXS%2BVnOgOj%2FnvzkTPyyUj%2Br9uIi9MyZUrgz180n%2F%2Bk260Y8S1y7FxlA%2Bi4l4rrn8j%2BsxDKgOMMz8LR2FJtjH1nOcHu2Av8eHxEXA7gcE1OxVsJAJgeM5KEZL2Un5HXhg7z8oZpXOuP4O96lAM1qgS1n5W%2BmkcNMT7vcn%2BJmhEG3TneKRGi6HZ8WwUExe%2BtS1yLQZuDNfruUnIML1QB4yz802UmgpMEHcaHUhal9WVcRQqRT21TzRsePRo4oQRlqFs6VI8gt620cxXJSZVduCSQOTv0ZugTr5OVxaD%2F4DsjmSCnMxkLxrEKEMM%2BAhMMGOqUBRzgNZ%2BfEAhBa%2Fc9oNQ5xMPIVzHjLuh0ebbLLBXLPbvE3j7qr3rGqv%2FY30uK9rZfh7IUSP1zi8BZ87f44xTe4CkORBNbDm6AP3dhxK%2FzJAoI4mIqauJcL94wt9MWvdB%2BScdtxaQOJh8BGBS3Nu2lxTFHAYAVKO1zZUQjG6w85o%2FDFHXz465QkzzclNYG4YUm%2B2xAxrCnvzszr9pz%2F%2FNNPHJ1uBbHV&X-Amz-Signature=3d0fa5273965923d943a20ec11c8c4d4a9312ca985a882f268d95aa484c4c303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

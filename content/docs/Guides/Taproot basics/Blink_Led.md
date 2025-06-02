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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J42KM5H%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCNKSfgvm%2B8pD12wM289QLGssW%2BluyA6ifwdc%2BBNTWLdgIgbV9oxgXDdYKb5oAslJ8SDPaJlEE%2BSPOGmQRl%2F1V8EUAqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnr7PoUagfiqMIrGCrcAx4U6YmwDALbB37HsQQm7nYAGANr%2FPbSqoBN6A%2BfRgE3%2Fs2JhIolxGmqTXLGTJ80DaOqXJJIbUw5maBe2kCXe%2BkSfT9BatXgR5SuHEeTojXtneSHsDSJUkPjkFbu3X%2FNiWmiSTn5nODyC9mYjTbbjRc0AiprJo7dJZEjYQvnvyrDVCSMNN3bLsrGOQXzCwbBX%2FCVwHH4JzZLyODNIiDba%2Fttw3Q78zqtJoMIm0qHhpeglH1ThR1LyhioSE9qj4G%2BPfAOkToWtOj7bPIGTQdYk%2F222ZW6DSexQ3dfbGymUSNXvo60x1OtI1zzpsavui6fpdJh1dLX7wrrKTjQ8zissk1GL3R57yx95Srgv%2FAqXx27lisTTsuaNqTZMvRVdu89%2BC4mvqn3AAIxY8SWX9LC73C%2Fl7el3MWMDr77yc2prwINHiFXMxcK9rTx8HIhZ2CwJuIikBTIVrJ%2FaOG3RWePrzXAmr%2BZlzv0Dt1M1q9ysF9E82Xma2sIodaHJ9OEni2BhdyW0wd9HnxAgTQAtu0j8AXECv5xT%2BblWk%2BstUEi4s956Pfr4eDUsiJH6ezZs9uRVvUrxkQerqglJhHD50vioys3LYkec1FrRMJNOw3DHP1ySQK7IF0E7TkrtojTMKDB%2BMEGOqUBXxvsD4DUP0BROkZqAgnS0juKwnSe4%2Fnj9x3WlUsh2DSMOt7Piv%2Bl8%2BM1vesWEwCnmnX0cfVTcN4HaMBavwr1G4k98ljfYQ2gvCrkUsj7GxjegnJl%2Fox0rm%2FcbyUeBl0Ts1m7ShJ5WpOpUmWZolbdwZpYoVcf9gVoJyNzUr2%2Fot4m48MXROqBgu0ndbyJshl78IN48IRE8QWHtQ%2BbdwKUqgl%2BLVfn&X-Amz-Signature=54616b70506083eb406c2b51f19e0a351dc7c6529965cd510871c77ccbf97bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQ5OQ74%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC4ilI05p6arrujcJUs%2BG1wIjUow7FHfUDmdKuhaWR10AIgFmShmzl%2FqV2KcP9kIHMhncPtgDQQu7UpWxCyp0PcFHcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6iz8Wfj370tDqJDyrcAxQLI%2F%2FH5hJusj3PHuS6YxyL2MivZd5ry6K82eQlXWSm9f4uIX5Kp07ylkMc7RmFuprer10QZr5x%2BhYxipRgGPS94HRQeLjGzb%2BhKOq9jotrFuSwPHuSpvpFsEkAaj05XM%2BdAJ2SuxtIpacuZrLI%2FlUXkNF3D6hKlgr5RCnS%2FHcJgYclYExCk%2Bx3Wm8XqbCp4BRfO%2FkZK0wBj8CxREVHxltxaB6QZojtpNapZS2riEbYpqqd4XZjiEpoM3poFNA%2F%2BV0m95cVACYFmRh44G%2BYy4m64qdE5xA1e3dZzZ6tzqTHBD7ZxkiDH0%2F1nxyDqzNoKEuK%2FJIRC0rdqF%2FZ1HbeW9W4aS0CxruxNcZaTBHHTFRw3w4ze7Q56j238PhlgxTYvSU8m1pNxW2t4EoKJNJag%2ByDVQYFHqyE7DAmFF9hnXehmP1b3N8Ssme%2BQi%2BmFx8MCZ0w7dO8UhYThPU7KTlVUeuBH3VXAC6ta4Vqcn829SH9WhKaAARGmTyGKc%2BCPixR9en4QDHo%2Bj5U%2BYlLO3OxQIyZ88zlAXtjAsYxHIiM067FLBg3HvTLzOxVcwKBFMQvu9CIheiVTACTPT%2F6K5mb1vk1fIGpYLKi8jQOc1sTxvU9TuGOH3bWZhB8s5QBMP%2FA%2BMEGOqUBBnj4Y2e3IXedwTcaDZah2yvximRTvtXVgcRvhRae2UXpYxOoBKvXUDnmjAdcml%2BOHuMcFZXWZbN8DmCIBrcfnU9hsjbsPb9zwQVf2EetsoVI%2F%2F7PUdbK74xBmazNuUPDk8zPhVptrBfM4D1DI3srqWb6TaZbF%2F5WmwegWV5omNA%2B5vjqFY%2BD0LS8yHpKEPHaskIv6TgL1zkRrKhFeNjzk9Y77FcY&X-Amz-Signature=632b0a5454e4a79d1dc9aef464e2786e9ae573e1dcb5b962d4702b666eae680b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

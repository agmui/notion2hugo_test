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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRLKBUR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD51HTqtHqkKNJy2KdDzHT%2BG0lpkVG9O%2B2OK%2F0aWoLlZQIgdOAQWqKDK4jYGyTBuK57a%2BEzr5SVgnNHDYtrf7DQJ7MqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF01aVMq95mFBLZkPyrcAymE2fCfkAl9v3gWBDMHbkHH9wMaVpxksPAyu%2F%2BbAkikOqfzDodabkwiInlMLZNRi5zM66G%2Fjth381rQG8tWOyjTbIY2DjV6mc3jCsHs2j7fwmPVD8dV9dKXt1AAI0JClMUvggVj9VmFOBekvcFU64FhKkScAvKO3lBLpqC2SQrzYvx6W%2FRPtK2AOP6jqFSmOgnd85jpvEdZOhJk5wndoNCBMePa8jBQuY9pMTJiy98aXhmiy9ez0BVqbKJ46FmilwzPpibk2DjMT1xv7wg0taT9ob1ZjJQEVxmK3PlwKqKufUW0L71sBS%2BItImXxdd4sqU6vbVYkuysYC8q0i49LbTC4xrnPOQqAWWY7M60pYLlKpMEy0tTvF4MbeL8y%2BihhmTkaqneZtf0XDhQKmNHQafSsZx8m%2BzLtGSQk0JVcrW4Ao3%2BythXYuCUY9xMnPsZ2MoWMTe4dcCv%2Fwnz%2Fo6n4qzXVGUmcLr%2B%2F1kWPoj4PUfh%2BT3wjoK0gRyzUaMZLHuFDbNFIUJlP2rZ69CoAPsRrzmoKJzVsa34Opb5dh9jvMFV%2BUSg0ZS3GFiRwMwziC9%2BPQn1GarpJ6W4ooTC31rdf6F0OZHvM5FNRVNXjd5N0hXzp3LV13rfbOaiiuk%2FMLDwo78GOqUB%2Fr57hA%2F1%2FfaaPffvnKCtKMZMXmHOz%2FGNr7g0n6xUFmddnzdwYme4%2Flw0odmzMgSWBrUvxENekJQYjTWX172RiTufjUwV7UcZGXyqZUCHx7rrrOuBdVKcuMyR6ZZU62jdLswriVzq%2BdtjukbRkgENvRVrDDo9WFw4dIEVTTz130%2BFaJvoOjnz7nPD%2BXSVnem4UcWO2%2Bz9I%2Bg82u0TePwjjUkfQCT%2B&X-Amz-Signature=cbbfe5195d11eca5566a18f8541f593117bad9a537f5f6b6ebbe42e6754b1cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYSGG4K2%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAkDemsbKHJ4g0V170YP9awU1xuao8kUhKWi6sqWycW1AiBJc5ZTv9bCr33t%2BFxLii4kCm9hn%2F3lw09KJxfUqPdhWCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbd%2FHOSNOldemm0TzKtwDZpzAC2eDtWFmi8cqBHVQT5N2SH4XGp%2FJnQdwW3XG0399OVfi8fbglGkfWoxE3OcHWQ8qdSd1kYXKaQePYEgmyx4084lb8IUPvtibRX6l0BAuOS07L9vxnUrUqCD5kSyzOMtMdkdBcrUajahm3gsDaMFoJkughQcwq%2FDAllpZWDrnXdhzi55iOEazXSAD2DmPUtlJuaVRA5twXwAiiFUJ9vw5EXAnWbkOAmxv%2BJge92Rfg47T1WHNgySnuIkHv%2B5F8KnOVJYCq0dgToLREXfmkG7Mm74uaKBXq9wQYAIOltXoNLxUz41cZHYATnYdRSrUdhGMJepynOD6aKENnWp0j5n22SL9ElMeP0qkQw%2FO%2FcTsm4RpDr%2BhO%2FqQxMZvARJhCbdyAQQ4G10lJxecjs4Ngb245rtNxjcsmksW%2BD7%2BwQ%2BQ7GEynMpxASf1pwU9d6GjPIu22z9LOr5m%2FOv2rpsmNXYuGWwOxDWnJlv%2BkT%2BzakyjL9F97T68qy7m%2BXIV%2F6b1ZEaAKvcm5zpUbQFq9dBDRTLB4uA%2FzWECQ6X6xfBIZBtZQfyqNa0VgUFOIj58djWAEMcI7VndYbCxxf4SGJ6AQ48L5e9th1APeZm%2BDJ58mFRWhOANQ6P6zQp11ZAw2KWkvwY6pgEzLkWZy1K%2BFPpa8Kuhw1%2FQeCOJaJkEt9CB3EgQ522QvQjYwciJzeOOh%2FLYZfqpxTXzPWr2eU%2FhDRfLI89jhUEAZXfRN3NrPHBrng%2Fwi%2B6bDgxig4HlIRN9RjvfM%2BSvMJfB65WnUyAAJ8Fq6r4CKHdrDZzoscBuPV5r4SFd%2F%2BpA4Pv%2F0vInhEzNm0KlMP%2BJciMgLJLcwQH%2BHu7fx9YvV5YPmiQap6PG&X-Amz-Signature=52589f855b2283197a9cd32368fd7793730e9bebdbc63f1e79a8de6c2006e6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

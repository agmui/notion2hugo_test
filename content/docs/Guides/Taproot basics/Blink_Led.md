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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q472OKQU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC52a%2B%2FCmX82XcH6cmvUenZi9w24A2JhCybw8it7YsVPwIhAJaoA%2FXRCq%2Bguj%2Bt0AbBQimlM8Aa8FCoF6NnYWmTN%2BdhKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUjHpqNVlGZM6LW4q3AO%2B6uo4g5W2ExY5yt2LaNbZcSxtZQpkWGOjq6N2fahoAT5%2FjmNdq5b%2BCmvmCsjod7SVQoDLCPUAUiLb6XhS1puxltwrosEL6grFaKAoxqffz4sDSY35Gvi4ALh%2B%2BcJI3N3BTIgObDaFp1KwOeUsIjDqYEgKcLyrc2uGP39LY9%2FwAjbqXVav8xAHHzOshXUJt3RkiO8SFqYnOHtgu9xprQf%2FzydM8bS89FQxXcSBUF%2BryLaX7%2Blqxs%2F%2BbVtrsAnRI6vN0nj%2FNundZbsu21wgIFQmkWgcEG8EJo9a8rMzCLeUMkyuEak3TbB6phLMDNrsjoSrYViz9GNY7wg2AaSyCQrnD76jDV91rwOJluElEGHeWAYAHUwLZEZQiGVh9vhxTH8bV91En%2FETntBlg%2FiSn0k6ejiRald7UgLzAEe57elyLCo0Ys70nC57QOPQ%2BxjugObi5CrwaN8QmlH5R%2F8Olq6ZucXosuq%2BI4azccJmpfE7mZgpX0nMAw9zQ%2FRsyCohrLp%2FpdAI0G0p4Cu%2FiZ%2Fu43SkIa%2FS%2FMhl%2F4MvMZlLcrgJMELKFSrRHGMbe0FcyvADEXETegRqNeSlqE%2BaOUgNoPzhS8a6AMZMATtV3uKu8dxRUUKvxEENm6JUohHNYDDcmfHDBjqkAaxJu7EKnuG5zz1caVeFSrGUZAT4x4t%2BRPmHPTd%2BdKV29XKWCZFNV89hOyfVBXTj5RHTSb1OoZBwjUe71b%2FDPM1iZt7XIT%2F4EgNBjzfuV254Er6s4U%2FsvVO%2BvIwT4PN5xyaYzWHzO%2FU2KR%2B%2FsPHyAkehCtOhvXxjaYH2wQGEsycGvt%2BwgRdVO3i6Yqr9B6qoXb2XB8PgdemsVvWyrwhAifzY%2F0No&X-Amz-Signature=29ac712955478f8d12680ef949d992ee50a9691ff577ceb124d7a70773527e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZT2VV3F%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAQXBJsc5wLaaNkCf%2BSJUz0LwYNUItBbXwLb5cF1V93AiAF4zXwPNi2gB%2FTvJn%2Bwt%2BhQj2ug4jPoH0r2%2F1Zpfk0HiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAPOqjWNBJgGd7VbPKtwDFBArfd6nRGH4Iy46G%2FBLnZUl%2BOxFlMkCiQl3Q0dyu%2BFu0y54Oz%2FIgl0G%2Bd5xIjETqjBZiF75mxf3buO48F8aKLeBOi%2BfIxKGLXFiAK36J2BmDqua6wGnph5Yw9oHYUKKAllFpUkwfZVYp%2FP5zRiBkenQJAn0quH6XH9uBCCvFt0f%2FcqyeSXsdtewCX0CqpCJaYLp1EsMOEOFsmj7a32LwnYOIAWocLsZB%2BeDSC6W988MoZKYayH0ixddUdI1VSpoafKJMmSend10MTtuxDu7oiIkQPYsu8akwz3icUD9f1nDdPWsVbAvOIDz7GzF00toXmheRnij0kaA3DaHTFLh%2F%2FNPkGNtLkNxPEgLtuPjk81FsPDxKauNdDbtRmMGVk64v%2B0nnRpyUJlklPcbKPVVERFaxukp8P%2BC0RVKDe4TGwi6atVKwAJ%2FkldPR0Ahvb6RdvrF%2BSG5%2BlJj%2F0npxkQ8drTxqj%2B4KOrw0TtbqK3FSp7BXUgpVuXElReEXf0yoNVzlMWR8KwmubNlPSZC9z9jisafMqs85y1WEPN7ICpDuxMtCs9AGZG0Ni%2B2X%2BMsuiZaQSJ7QOHcsPSfbEK9rqmRaavAlVd2JkdQxTR4cLhMctLp460FIoK3rJWnZVkwrZXxwwY6pgFC4e5iMzJXAUPaYStuucJ1R9fgDCyaoSpU%2BBl3G8uPfJ6G5gzHSinud2r5bYQWg%2FxHJU1VF0zBTRyA0X4ULwx3bhZj8ahRfD2T88FFBLJQsqV9pGesui2qBgY6O4xTo%2BluQ6kU7kNxOgqz4m6Zym%2FEdqikeRDi4hlgEyolVJOBU4NPKSHIBKDn5MYQsJhnH0gu3OC52WUAkSNpuwUsUjbsh0dLAKtK&X-Amz-Signature=3b97c2455fbd12beeefb502ec1e46cd996052c458a275af0e0ce5a072fddf438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

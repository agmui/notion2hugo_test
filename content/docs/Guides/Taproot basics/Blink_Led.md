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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7DA5XA%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDHpeYK82gXT9ZyGPvs3tCKfAQwuX0gTGYPyovJwGXkIAiBZI8bsSNwlz2F9%2B%2Bn0a%2Fjs%2F1o4mtq00112M4Fo6tlr5Cr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM0u1s7w4hh%2BGSxO9WKtwDm%2BNYnSpIHD%2BCqckg6Pq3bKQgBwyMRQTmtMjh6ELZeo6nFV7mYnRuL1kH%2FhNQaAbSjoGgumw6M7IsHXGwIs58quNIY0xGWrIfVBuvNg%2FDK8siRH%2BkKWODMJhlnWiRFmq1NXUjp6ZW6ndVfNDfPtdgJcEpHkIBxvWTPBrsR8%2FTGJoLIS%2FswTcfhbHAEt%2BOq%2BlrqI3NpJOKNBteAo%2BAit4RlwLccp2AIi0bhZRdNSr8Bme3RRbQjHilA6pGBxN%2BmitHt1cpGm7bbuAGMcPW2PAYoCNMhjPyNAoDQEFBn5drK4nlXnFYqsTwjm4AVMHEdpHuLFPzLZ5S6FfKhIWWzZgebs92IZVnETTT%2BUJcv1FS722h89ctWI36GoaEhj7lzVUvoYouP%2FoYJbzz4vUVzWVeEISNFxmsyAVQ8RjyIaTC2rlhTYExjGWV60qW%2FQ6gRF27mM3m%2BPBSBg4IlR59c1nOjfTV1pQmDoEYRn7v0HR6lYTITgWs4DusjBQmddt%2FYjCy%2B1XvvTkatj402E0P6amm8aZT5DutB6mS%2BrXv6rLxbulUlLAQk6zylTtZchYsVFEugrJ7X78Yufy6mYY%2FUzNFidyGmz%2BcpT0kAZ78DLPjTXrhhA1TwctZYX6Q53kwrOP6vQY6pgGSpeIVTmxpJXXLJ6T%2BhykJsowG5HX75NDbq0ZDa%2BDK6lg7p3F4sHuWs6Jv1EkEIuyMwBzhEfEEmPvOq1Y9QxVd0KcI%2FCAWS0PJVMcW7w5hCJCHhJv0izJ7ZKs35PzgPqTA7UygvQgZ6%2BLReQFz0YKcDYQnuRs4RjdyPsnwcj%2FXaTdFdNP%2Fk%2BTyG7YNQkeaQlyNFLx5lY9P87QgPBo%2BWmS4YE2npxXI&X-Amz-Signature=1a718f3f0e886f7dc2249d1b7f3cd3f9498d2a0aa211bacd5e3a5827befd9213&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZNRFGFF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDSwRMoloCBdiTjTm7WB%2F2LC4Vx48kCk4Fk8UVh9jDlowIgXqR3bnImw4ZNlF3RuN2J2Ud8wBtoz3lamnXul1vfpBAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCmACHouOF%2BHXyognSrcA5fG2zIJO3lRbMar8jmyzCRvEVxyGHFpR1VR7DjIwbZRBgLgIovC31LQLADcv7BBwbrTNOYsbtq%2BTTdoZ458YiNfw5EgrnWWvy1EHBWE4ag2vyNoD8iEU44h3tG%2F8dRqqnDNIoQN8v916BNT62DkAQeX6tk0RAXGsKYvJfxHDH%2FzT1DAvoumDIv4eJ%2BUon9p4R0s98CnTaHwMREj8zICZFvpz5hmRQ2%2F1Wr02jxfCv2UauoEsEtTsMRRvIPtBeNoLTZD0kdsnnZ2ZS38wTgu1QSPjNhwVjg5S6DnuG0L8VeR%2Bl1xZu7d5ri45LFF3nmYVDANRIwwMIy0UrjlgnPuONahBs6Idrtl%2FXB8LvpSqmPFUrXq2C5svQaoqvZ2AhlseWI9pAS5y1hKN%2FMvWQ7cjkWPAymd1quxx%2F33WDdnC9%2B3qrEIDqQHVXfrUPwVzQ79eY5Mqar3di3xisEF8e1SzeSxbkuwz7bmWxweFhXrx6Qd%2FbiLxfMAdZTX0p8oGL%2Fxm0TDVuV36Qw9Okxa88chFLF%2B7zAJD5BnSf0f0B4%2BBTAyPm8qdbWUv4uu4Shp9kt7Q0f7l9Z2XdUW1P%2BXhLo0N7pXl064GCpZbcPxKigSTTkCY3z1QdqQ6TNjDaTrMOzi%2Br0GOqUB8zM4ubDp5X3tC1PrZZEvALy3K8zAbNtnxhoQAQ6VAaw39m0Ei8Kv6OmwExKldkRfEaik3Vu%2BiUvUbLd0FhDEcj%2FgOrYkvhhl%2FdGZ5HRdWSpTO6eKhlkuW1Zp%2F6wEQt6tjYTOqMnoB%2BI19RestUeHOsVkJ1miNNT%2BWFnWqgdVKIdJwDT57kXLhbneVUmD3Xsrwqocxdfp7PJJmbEQTaw5Hyu%2FyQT2&X-Amz-Signature=56e4c1467005e9362069c3d5d55f271304be3ca144e13ea34b4241c5a0590d25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

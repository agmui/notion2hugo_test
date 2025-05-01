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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO4RG34O%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHVfpMqL1Td4AXbilYAKI92pawXg0XyBEY27Lie2EvksAiEAuNFB%2BoAqpH1OyAyQnhqzOx%2BgVo8%2BvW%2B%2BFoGAPR53TKoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9ETy3FRSVX%2F4aIjCrcA%2FbsGdPRaw78ap9SWlXLvbK%2F3cdFEjGzX%2FBWjGyaLdmO42NK5BUghQQ6Z56llv8dFnMRtZghVXAHFAuOhVl%2BHESz2zx4fSXDQk%2FE%2FVzC7nMDawNkB2c9M%2BugNViwf6F51cY0FXMMJVWiEmfVFUtPb2wPBrCDX39ApGZGrSxCxa8Eg0vkak3ensZMD9QQb%2FSJBreJC8zZAZG1d99kuxXmMxt5vo2aiYKSPi5DrtIuek8OXYE2zxYo%2F928bVvuEy1v0cs%2Fc4o7gXuRNC%2B8zl5fweXvpPkDOtynCjiKX1FjDgzl9vKVxqHP5iB0JjoLMByFppSR7zVNcZ4iyd3f1vKnC5nr5ZqtXZQjtoIewsacCgziI%2BRNkmDIqvkUzpwfCzx%2FsyYkJcOf%2FV%2FNGMUw%2BtQoY%2Bz8pnHISDzQ%2BXEwUw4QIY%2FHah4DoJJ3ICSA4IwJNecN09Yi46BJn3%2FUgYW92guiJxj4Qi6ZOpFVihp611r%2BXJdpZGmPYzyGmQQpXH6cIAM4cKSuujtzt%2ByGCywtHStkPCsagefNbBaX%2FpPzYR5l5ABVu2vMyh1q7iuAxld5av7UFKuwv6AhLwtZ4tP1RKWiOJVTwlux6k9zVoxpHu7%2FTCcr2Cu6VZw%2B8MUus%2FazMJjOzMAGOqUBvAvw0868Q%2BvjPHQoX8ghOf%2BEycKFUkkuSzlU6f9sSIeBNn5Ltqbav0T8bC3Jq3CiNFhHSElOKxFntn4oT0jxoYmqOJdgKVD%2FkVKiczG4F6TnUKKCiohQmDUPntoPi72ho3L6EU7xJJnz8GcY77CEOlYCqzRyWD0VExFK4fQQ73PlAh3EwvOaXmXaFHSJvSAE11nSgKKPuimKh%2F8pV4OKzzBH1ksx&X-Amz-Signature=22f805d77de8eacf5f31cb09b55edc78abad5d940ae6775131b5aa3f09651162&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYFFEESS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFSsLTkv1bwJwVteWb%2FAV%2FQexkjldZKuZyC3DiZ9%2F9mAAiEA%2FBvNUb6clfTvwb993izcJ391w9yB8f4YyJYrFX8vDQAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnXdpd0XhvFzPMiSircA8hWNEhp4iKAT0qpg6wqHZrUiZ2W4QHm8DHdf5UYZP5TDPFMAogYsDHiTveoO2tI3jZKixAnJPyoGa8m%2BFvkscnBvSSwf7fDfUPe4P56M6U%2BBW7RhpSQJ472ff8Rd1IDeBMWTG7gMP1US6eXhvLqgdXj1CtTNqrmxPkzjLtK3bT%2BqGDH7vMEHbLkIDcRMsw57rULzjmCLLpTxaSrFTHd9Bc4lV4dFEwX%2B1NaSa73QPWZqjBX%2F%2FGwdtuFMTgfE4rUPj1Og7QBG5%2BMd9ToQjqbeqnLZ1zGYlftFEu8tkPI%2FdoZIFetxbHbB1rXXVvrYeyTkNIKsOL%2FqW5SJX7tevI4nYeiIgtQ7Sa59uXG1EVhtPOVQrdLDwWU5ksvqLzE9i1pS46FZCNGLN6w1YypjJnQ4XbXO3lLWu5VJ9ei2f7N2S9UUd9V83btS%2BLWpRh42iACjZ39pypD5YZ5cgh6ONyg%2BgYV61leOLNml4eyu2gKhmb24HhXyKZiasg4YOxSV0cLaX7YhYA1PHcnc%2BKWtenPDChzqJZ2Q41GC6qaFbQ9QcIfObdPZZ3cdh7Awu8%2BOOpic9d84dpPrHzb%2F2vLzkqwr52UhcklKPnjLP2z6xKTaG2Od1sfDFjWjxSlvyunMPbNzMAGOqUBqEZNTfAJHLCMJ4ko%2FTOsPMwt297JNrJEcpfS2F9AhzBSnrZ9CeAXWtPtB4mzN%2BSwYnhBFqeUHtLTHoU0fBZVyLHAzqbgCZoveYscO%2B97p%2Fku9lhoIL8hIPUlth4rsu6oPNPIGzQt6X250xNBQrH6Pwtyp55cKrogIy0Cdm1hkO28egtG%2BEfHResaaUz8WTl3Kj3qsC00VuYFJEauIYsemMd0wN0M&X-Amz-Signature=c1cb37f1206f8bd072148196606266710c0bd638bccb1193b619c4bf4c701099&X-Amz-SignedHeaders=host&x-id=GetObject)

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

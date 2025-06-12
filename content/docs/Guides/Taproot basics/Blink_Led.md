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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KMBYIC%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEF0upPTxa4a1ivNLGim6XEWmrvj81jQJlqEwn9bRVIfAiB7RsSFN%2FU12Hk80glLPmedGLaoIfZc2kmBxMA9hqXBQiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHiFo4JsRw2RQeP%2B1KtwDPHoPoL%2BEJ6z%2FBWVceqLtsxqrKqu9DAYPZGKjpF1f6B58RIhINWf8j11WUzVxmKMUZy0CGdtTddG%2FgJ42CAvxFhGDvQ5E5awpjJ6Ciy0ldsgjsv5ryWuBjO0%2BqGH81EzIBf4FLTUyuxwcqMsqwrKmcfau0IRTX3nh0xaGJ0SsVxnRnAY%2FMTJ%2Fm9y2i8scfHGNZ%2FCaOhSHIDqXUef9NJ9Hjj22ehuvUqvJt%2FzbANJJtqQ8jPEfJ3t5JpNpybNH3j9NWI1nk3ipNnWPT5Im%2FInEk%2BTkvnMIGm0Wv42g1y4CqfhFxXzk1LrXVkUQp4sx5AptuDJsWeBtQ7hwptmELGkJCa41PlJfq77XR%2FH2sZkFtYAKv9n3ygwz4nvuSdy1QE930RoAeunRG8ZLEP%2BbQNNBLUOjj8XDv9%2F%2FW1%2FcfaSwXvROaA8tlVh%2Fwt%2F3oKUU2OcPhrPvx%2FRjcs5g20%2BbBWAO%2Bcka0uSf6Ap%2BDec77MyUDnMWdIkCn8lXKAo94TfhQKHdgQlu886jO9DPejsskYkUBK0jAn%2FjtXDXIvrAOEpLMyEca6lNmWiTGwj7tKGe07n6Xnw8PmRs%2B9Qj4ml0IG7m1fTlzWHuKt5wAi4E%2BQAUQdReRPLh5HjMfjh1pBIw8oeqwgY6pgEOAjtmmc%2Bd08G8QElS7XHZrYHzBezvFwbxtrVohIZO9BJDVkUGu%2BMsSYS8HkMwxwJpcknRzkeiRloPaihZ67zStP%2BCgAnZZqQHEUZidaTG03QQb3HA7ahNYNA9VTyWJu6yAeGuzI2Ja%2Fqu5Rg1pF5bVHodoUIonmCFi3gw3eKFMCHCMxSgTZEqz7WS2zBxXop2nK8n9WKaoH0mFZZxCtoOHQTMVFCe&X-Amz-Signature=6982f99c362eb9cfc86f561f43fafcf37581f98ddcd1b3a737dec58550d502ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XP7Y2A6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCtbKtjalq8wsJMjshbJF88KSiCrXgXdrtJPtV%2B5UivtwIhAMBOORES7ibzh%2BcirvSz4CJ3mTWwwFPhSVwaYsVHzT%2F5KogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvS8EalvaTdrbPi4Qq3ANsnMKt2GiMu3IA4ZfmEJRdICT7J%2F2w7WVS%2BjlgMYFBSPzeyav4Lx9pKdmmd0VO%2BoyybJbZ7qHeah8%2FDjFJ%2B0yu%2F98K%2FxzDLWIZS2V0sLZrZuYXL9c43LWU40MsgutfE7G%2B6uzZUFRqr6F9UDOUtawGXSizNvylyG3xvPQyEg%2FP%2FaM3s%2Fk9dESQiM2KJwwOPP%2FJXEGG61F1Le%2Bqxd6vh4Qx%2BcApaGHCmR06TIF1WCzJjRu2SEASuFADA8RzYmjAIubsX%2BrxiZPTDXlCgpv0rRCINkGaN7n%2BqKljLilXHFZSRFDlOb4TynwY4lOc1WT4%2BuCynypwY4KCiQpLdlUGXJsZnDvNDlS4njF0ay6Kq9H4dm31w4VHaWreHS919cpBvKyecq4LUEZaaVJkM9O%2BcIwS3bdUVqugmHsOLc%2BrREpQrIbgCjECZx8hx5MQ7OEOMMgE9yAkazNqcPZKayrV9BnXJiy523VD0yfl2%2Buwkl6SdkdK6bDNYR3aU1X28rO9vS5v1EziXYiFnNDklX95UhdYvEVrPCdUbEAaqpMFdRn%2FSaIS9s3WDS7cNu2xXXCTf6SxkUMSDeXPbTCZ7Rdx0UT6H%2FJqbFeFWP%2FaplPsgk4HClTTHj5l9yaRxAd%2FqTDwhqrCBjqkAStDfq9Amja3ImtYi3cY6ERuLwTazMm6YJhHurccll2E2qVEW5XPbLM4ScrjGIwhgGfKsL%2BPUJNDfXRxJsTxZ1Z11Yqxg7adkRNL7Fs%2FnBAvyYu2UpnI7cyJB60sQ%2B%2B%2F1LoTanr6VkR2vo0lW%2FrtTSI9qnxpRJfBQmMSmq5NZR%2BRooHSy4mzcMyj5UucBy%2FcFTA4sBOcA%2F6jHrnmLBoMWVJ02%2B3u&X-Amz-Signature=44cca562965046b719042991b3e8d2090b80184fe06aea466682a7469e2ec77e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

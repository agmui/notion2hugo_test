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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7YZ6SO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF8Hd5%2ByErSgDZqKRzfyUJI00taiQIHYAJxEgpN5l6omAiA7rI1wbpV5OCFo%2FGoul5OEkZWx0Aa0MoLkDcCNh2d2%2FSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMYZ14Ao%2FBGCZcpMZkKtwDpdRMJKqFFjoztCkD7C1t31uOvymeNKtZIsAdypHvh1hqyGwGuCrx17tqkjL0dV6TxeesYRNCljzz%2FIOz7kw9ucIHMuuAMDbrnovVED8Qp3VwG2sQiyCdjirnYBrfSsX%2BxGEe9FYcHLXJAm2QEtpqh7HeM1jsrxKEB5P5U8erVB3SPq28QZjyPCZ0kqUZgHh3cR8DB%2FAUn5u5HVHI%2FuoglJZCTqQOejFZ88uuLM7RRjhUo3VZRj2Fnkg%2FmSyksClkOaOLrO6p9f2vcY8huqbPsaeEkBvkO3mdukeTGqEjTN2lQshfMFb2PvhLQrygWPsiaGEyMMelLWPkhVXpKfDl%2BhI%2BhiQlszD8Tg4bEfXRSDeSh9Bo647OdQOYDeEroKmaOffWASjjprbFd7YLGzicH2i4gJOTdZv%2FLh%2FG5NhSQkm1gNqW8E9VBGwI1Wxz90hJ7GzQ%2ByaWUyZKr1zBrRCWDY0qVgxrwts4oKJAC9U4Sk8G6IykgPPbmq%2FT%2Fo2nmwIgO2%2BVuFW9UYKIC5vlUmn%2BLRF2FHXiBPJvQcxCH%2B4hQKeFIgN2xD9%2FABFtGpQpRkRXAxJ2niAiYM%2FSWD2%2BsMUJRB8Rs53xUlXysjaszwKGU02E4xxqzIBWu9AAUxcw%2BKm7wgY6pgFsIc4FAZ0K4pvOy3uYHugq896dGX0LGhAVUXq1lie5XLQVY6PxekLw7GEHI%2Fip4rbLtXQrHJdNJ4F%2FivA7MYB83%2BBv9e3D3qBxYyhWLi00oaZ62hbF%2FPBzCZS6EQA0lDsEAhCGXSl7Aw9VNhkcH1DXetgX4gyLdZ35IuVMrpZHpJFkyEtoTCMykWPlMBOWddtEtudSEYVQ9id5gCR6hE%2BRtl8MpPJ2&X-Amz-Signature=611f6446a9eb25470d6bc242991dfc1de026cfa52c9d156b826a1e1eb67731d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRORMWM2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCmelw%2B7d5vPBlZ9Y9zkYzuV8nOAJ6BGZl%2F0m8EtJekWQIgMmdO1lTExU38ppu4by3DHVPZyB0sCxmf0fRmwxCZ568q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNa1zeWBPI6HPvPhTircAy6Ygy6HTqnr56si%2FPCdPYXmDP8LZHRh9%2FeXmaJ0wdY81xMGneHqKNcS12CDA3iA0d7YPbIGHIgEnJsd3LNZ6biJD113tmPG8Lz7GYblcgM10GWWJ0bHOLjFN3T0gLuSb%2FUZkA%2B3DOluILhjuHmZCswORVZ6luuWCq2%2FYFxsnQwHgNzcJsXWeXfTNZmE25Ey9ryhq1KoNn%2B1UwiZPrgrzJdUXPJ0lzSlnsN9D8caAf8HWL5XfW%2B5ZYtoN54MBE7qAJwFcqmoquWSfdvugDtkStLNmrLIudRdcPJh3OF8iFlBTGIvOgw9bS0a5QBwJrSLnrq5tq1AWo5jZO%2FJ9g2B5zp8N8D4YsVuswzb9hUIxtH36d1T2FQGcmDCmcv%2FAfnLzOlFN1fjXrTJbj1PIu9EbRWxuGrbZCLvyjjFK2gg5d%2BBbbPYjIM8Di3QX%2Fez9%2FHuXCYIEXr1uHVQa%2F49O2t%2BAjdqltDmAsTETlIBYLwgl7JpTRxgQevxfdY56xMQmAhduw8YJG%2F7A1aGdzKKHSNK9qUtjRdcc9pnp%2FIgwwSOHsjvAXPTf3KFaMFkLB0twryI1VIbAZSGmGYq1cbOxfxgZy6Uf0OHq4NPL4lMJQR8V4wJXaZwT6nzP2TwS4PcMO7wusIGOqUB1XVDuAzEYry9x%2FAkxmvG%2BlWETBEjmc5lnW5c%2B7SkHVz%2BrmhcyXMCmZv0U00YODv7xliP9bxya%2BjAgm%2FI6a9cwyiew%2FtlA3M%2Byqwc%2BxVMSukV3YXPwSJJdb4UNz%2FKuKkgt0%2BwlBNFl%2BMSbQ5vXJed2HEwMYJFnK8PzMCWREjZvDbApnol1Zi5UXa2StSfxOW4jI9PxajCcL1jNPh39PMzam9vHTWP&X-Amz-Signature=5f5625333be7fd5b086835349c1699b023dc7ff5228da91a063143b3f74bd71a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

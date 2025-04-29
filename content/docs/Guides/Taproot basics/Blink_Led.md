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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMAWLPW6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeOyvMAtCP4UADBwsELY3FWnI9tzNnwkiAvVGrAgWEbAiBbyKyi60CvNOYSa14SBIYgKDcawHl1%2BCg9OOE1rqvvXyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtcFuko6qXlnjdZdTKtwD%2BrjmApuB19%2BDqjivAo9BFzK3Y0GF5C1%2BwHsSFN806W5PuuepAVNBGIytNheZ3LqH8olGUBotKvaHvhBsCvKNHukoIXELv%2F%2BW7sry02ByaRyzsX8TH%2Bi%2B7j10yOcOnMh7VIQXOa9462U%2FmiKKkI5gUd%2BkIFpKYHCCWzVIpMxAVNf8wLFb3o7hpxuo%2B3g9V8M8ckEcTVPHP4LrxdAGmK5n3UzsA8CU04nXa8UV8mPBGdGYWK5cRGlsjt0WsT2dCihG3gVFJqsLW63mWEvvPqgTyJCKKfesqT%2BSl0ahebsGwaE7%2BFayb2qmGI7dCYNxRHP%2BjY%2FqZXfdT7VUEnpcnx3yrFJP%2BmC54YsGC%2BsIwxri4mTdqVzjs1e2dwbISONC2%2BP2s8n887x%2BS1yqyMOqCYQY0wDEY5h300ctBoX2nB0TVgfd%2FUp0%2BnqXeo0oUXsL6paYP91th1oRllQDSsalGDEJCg%2FHI52JhP3VELdFNcO2LjfWXDTtbJ11qxQMlWvMObqDpN0kNBSMvbKIIL9VyZblbkZvmnEpnl67LBt5V3BeE1Gch1nkzLIVjsG1yZ7bml2%2BER3bdwN%2Fu%2B%2FHKr60oYrhujq5WiRXkTRbu6msHa%2FaykorMrHwTikzricXuWAwyd%2FCwAY6pgHeDgWwif0beR9oBJIYH%2Ffy3iItFJdiHaxqk7wzKVjmLJuQ%2BbKdLAf69qYphF5FDlnI%2BLWZDG31TEUUYRRb2gp%2FTQQ6DTItyJ%2Fe0wIxG%2F8ylMeAfp3eHeu6Cn4G6fwCPbbRnQVwgPtzoQAJbaPsUtel09gHB8pkqOklFt77PnGmidm1S53Tx2iwRVL7wTTMIS%2Brw5b7KJ6H6SZC77KYvUEpIjJXs5wV&X-Amz-Signature=f9d26ad56bc762dd9ae193168ec16ac3579a0b9abee9f7c20c17bb28f5e327d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2NCZX5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbfTp%2FGWfVKBfG5SwzLdNw90sRl0g4U6osxViIBUtLTAiEAwr8UrxAERMvpQ9kL382664hZc%2BmGz1UZAJOgyetl3eAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZa5t%2B8TTF3mFUupSrcA87B6BOnXiagta5DwYDNM1fGkUjclwRTkireedLF5JRogYX8hqPi0ttkCTAqo%2BeiPodlt8wn%2FtDFyqOBoiQ8q1qfRQCROJ6js%2BfIVENHwa5p7tBcAyd6BRRucThifA4ySRvQVszn3%2BbGc0Swz265lDnkoUkkBKQwt%2Bmaz6dyBLrUDY74pJf6gg2JpKyFLBzoR0u3XRyVFRM4FVK6CGbEAiwrGRIQh1xtmOI1b6M%2FVMkriWp1rhl1n59XvqrzOwtNbJYJliJWnXclaimqEDk9rRK%2FSxQr04ADxep%2Bkkv3Zz616DIFGYSxiQD2Y7cSmPi7UqBQ6dw%2FEdkx7n%2FQbSf6%2FlhitNFCXT1fuZMhxp6NED%2B1vy7uuKVn334HXqAec9TCWnhjSGZxrle7IAvhcbXEYkKWCk8bnzKGGVCi4OyRMXlv5hyrB5uKT0PQoW71pwfx37AZYsofj5GkYcE3XCnShWqnVeNKzKRlpSmieggkGdOhVw6H6pKe1PA3Y55%2FMUsTo5OAbUSdIhemQaJHiqahWvp9INkz1lH1a6qGXsRh0fBAUQ%2FTWt%2BFvRuyTDpa4qt%2B11mt5ShBMH7%2BOEXyyEJynSSWaxmxwX3CESTOa6XtLMXokaT%2FuCIjsp1XX3NJMKTgwsAGOqUBdlErUmSpnaaylRZy7023n8UoQUD9D%2BATf4A46ufTcxRkpPPRvjp0jzETbRtWKcqFDU%2BsQOKc%2BEBzyADT8YEu%2FUSGHmHu7S9zqQpZgz5r%2BJCD0D85KzRnfQJpWyhKh3JczJ8hnohE3KvvDiessQVL67LFa7d87s00%2FSKxl3IaLDSfQn%2BGqQBfFndss9CKjU79HQK00LDj%2BU3HhWDiPQu5sMxfrvZt&X-Amz-Signature=0a90f8d2cea0ffcc9bc4c2d2d45a19409ed2337e7ed1a84d6c308769e87c6cea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

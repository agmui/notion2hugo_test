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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4AQTJYN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDza2Mpx330S0JV4fqtduMawyysfEYrpv5DbZ2HH3rsXAiEAgnPlfsQLaEoVaUuIFgG%2FfT%2FXtGaTLwPvryK06pranZAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDBA8feIB6lQi6aa33ircA3q278z3FHWMd7byQKd510Kvirn254SW6KstKbCK4giOw56wCvhreTVJcnPJmIUPmt4zMhpTEptidRtcqsrSqXDZ4S6xBc%2F6g4WJ40yc%2FrgiGH1cDjAnfbDfq0Nnmf1aI0FZUOkmTZmcarxUCGfAOP8EIaSMj0vO8dmahjDvUjKFLJJV74k3lpR6%2FTWtSy8UtEaIHB9gBd5koNdmVJ7kwAXsxZ3tpsMzKvADwQq3KWlOJATrftl0t%2FLRktlRZICcLAOxNJV2aI%2B9K1bAbVuWoe%2FAfGtOb3wXP9TAGM%2FxMrXxXFYTN5Px80ir0wNLesz4JPUa61ceYlzIGAYQwRJ7RrpUxwtEqCaaYEupnfp2pniT58C0u1DckCo7aMzZ8nJh3NP8%2FyjITvKj4g%2BUtYcj5oxR12GklepSxB1%2F%2Fm44Yh6Z2h9k9jBpUxlqkuTUpuGuCO24%2Be%2Bcr%2F49Li29KCs2PLGi33FXoVXmtI%2FplFFtT2ac9BsTSPRZMTUTBW4HkBxH9%2FODLQz28E8nJISWHQBb%2FsIyScXaWCk7u4mTKYNFllq1NXWeHGp7ourVPHKsL%2FPWV6xviPydmeQ4fc3I0xBSrkEryH3EDfjMLOpxuXtOmV33msPn0Ogwy6XpEMpXMOyNncMGOqUBc%2F78Mf2WzenOj4ZqNd3K0fHunDc9oijfz70kuQJ6wCbX7zfg66FTMNTtfVf6Re41f%2BxD3S6sl98rUqTIAXdo8lH3DGTZt4ALQg5irT5I1Z2u0Pl6%2ByfFOiUr6ZuXmVIBLDQc5qaaEOuZY4asIu8xZBMn8juD4Gb62K51lL2GeGRdOjHySnvIhtDjHLod%2FNuRR%2FYnhXVk46bzWNYRnu9EmIamw1Al&X-Amz-Signature=21d46c443bd2a3a60b7a8f6a7a7134bc75ed52e4ae2cf254e50edcb387b39e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RET2Q4SL%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAEnpOMnPfniGqOQsuK7w4olnjXfE%2FWyK9VlcO3XmLyQAiEAjcIU%2FJ1W2JP9M5ILJD5rqyygIWBoJkdjPbylx0tM%2Bnkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPfZeZ82A3FqFptLkCrcA%2FumWsaobRCRfcIs3tSsb7I9DL%2FFzPN%2BHxBJ0LcbDi5MoadMPWScgNFTI9mCDNBykyWA%2B6MMKebkFjHyJePjNlPmT0XTncKmWJ49RxUVepSXap6R38lzk37SPiqmF6VxtB30iz%2FyaDwkF%2Fji5uGyY%2FGAcWhMPyGPIT8H%2FYhjKwgiAPtimmSZCkfXLoZ9Fezpl10gNxU8n4LeMOk8XtobP8HAzE71Eh2Mg7XQFWFkb%2B6MMKFE1bi%2B19B0uha7rprF8bmvyZW3YU%2F1dAm0bArf8vW2HUyeDFuLXm3ipt214kxs85uIqniRS4rvP3NtPyoY0nEEV1TmvujZhIsqun7Hcr1uCAbblu2HNLcZFZ074jjCFB9tM5WO7T2J55O1mUcDAIyVkyz28KsZeoU0OkSyUDQoEzTN0iSDIrvrMXJ7TF4h8Xrp59M9kZC1dEWxpmsqR6Ar8qmLEteRrZ%2FRbib%2BZT3%2BK1YtU53Ac%2B0Z9pztOF5e%2FwXk1OzCl3gJmU%2FTQG1XApaKsUTXhDB%2BVyOAzf6M%2BExPWqOGm5l1L8rq%2F2QmaXzdv46pzk7%2F7BeK184Ujc9nqfbu7ia9MH%2BZSe6qPjsj1sBvfNtlMv5mzlli4g6tgETCypAzsX54SQsyH9FLMO6NncMGOqUBBI8Ek6SOW6OgkHmmHDIl%2F6PqYGGT99HQ%2FppwlncjbuKhIZZemuopTz%2FL8tP%2BZ7Bp6Cjs8GijMRUvqqKrsmtdGHKoaWXhxoD6K%2F43oonkVMTfGnxvBHY4OFJw6YAffPPFCC7gbdj9jjFL07RRSmyzQ4gGQlf8bfgy8v%2FGh8skr0zAgmP1GiZXKwpptg4%2FF74G0edr%2F9tO7I3o6M%2FqxWOWhti%2FJNP7&X-Amz-Signature=c41844888fb8d3e00cdc4a72513c8846ba07787ab4c10df3680e664d653b5d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

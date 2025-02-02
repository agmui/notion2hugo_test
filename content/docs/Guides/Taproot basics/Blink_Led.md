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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHATFJ3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC5jD0nfOjYuAd3481YpxBoXZVexUpcMf7fI6oax3k3QIgPDFlRMA%2BZQgOcyDR3xWfAllNPDYQPDtOQjUhOKQ9B3kqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEXikaWEBDtRib55yrcAwMJTXt1987MLS44J45WDbMwUzYpkZmmpiVe6zsn2RxGK4k52eXo11cqS3jsjRyv5pbfuIYv3PDa9Rec1nQ6EWkr%2FdeVqNzJKuyCv2v5PfHPGVVMuRPMrv6rC5GNIiV3EMoVHg33DkfKBS0bl3mdWXtthSbhD7OEfUUBzhvS9RyV1GoCKvWVvsPL0ZL54FR7gOhgWU3ozfVCs8TeUbtYfDZh4yFd1rG5CVIzMc3XFqGwAI5wM3rSFC38l8F2pBKs9tRqRZqrF5%2BzWBWs0N8zw2o0eBdINkmouG76A2169%2BxNnMm4aw1iQr9UW3GPB%2B5NlQ6TxZmG6Nip5Fqn3AnuuWSH0AHnB1EPumm89bprA%2F2UwTf9TcnW%2FNy5Y4SfldihqwXdhIYhBnO2wRoGU%2B7Ba83qQ%2FEPogGqpMeH7Q%2B1C%2F4K1q2dOt9b%2FdDh3lw4szXAfwV%2FK5reIOr8YO60A%2BI8R%2BfCYyib6ABMMFGWYZ4Sc6qdC0bbXF%2BlBIs9LmoMhqCNonOhZEYFeEGwxfpGZkjRyrLq5PFkG%2B%2BClY3CTv4WBc8I%2FlQHCtl7XZJUYMhW3RH8OQM2bSjUH3wOZBbr%2F9MT51%2FcCkFElKDytqCA2W2ez659oPd3Lrnq8mQSZhjwMOrh%2FrwGOqUB%2FbozyPk9WC8UZ%2FTUjIEhQmPsWOkeHpA6pkqGR1IDFCjUEZb5tbLpLkU92ZYaFLcjzfCqtYWvoJBzcjIG7mkz72mYXucdnNBpBLQjLnr6TSjl5tKoymTkbFdx1Iyfm%2Ffo61jHCMvzikhMQEltvGWAc07hAu%2FGPKUM7oqaYTbnZc%2FGj0driFzRN3wq4Z9ONOLRDPn24%2FwtGHyLvxGY1w6EZvz1oV%2Fu&X-Amz-Signature=58b22a143273c4ea7b9fc37146a9ef4fd1b068bb4f7fb7ed64e3165e3e839829&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6WUN5UD%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD82frBkGaoczvKyb4%2BFhyx9Wa3QS0iO0OKwWAJc7ggsAIhALxTUTZeiXV9fg75JPRAqJuTbmEi9UpxjafYhGZW9FgHKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1CHAc3wLNT%2FKDAMkq3ANFqfsAnR7W4bBEv81zQjDv%2FDRiTyOK7UotAzmp1HpRcESsx8rzsAXv44BKl1JWpX3RIjadajuVhtS6JigsWEcbgpeTUJ%2Fu86UtqyjftKq6eBiV8CgfC%2BR3NSYZrjg5pMy%2Fp6yhlUNJ1l49ya%2BqQffopNSmxkFixIYMa1B2knrv1msds2tGw1FI%2BesJq7FKqVd4meLWUy0llBV2mHVHcQ8G9vprq2NzgqmtsEdg0INrebgGrZbwiFV%2BJG7wf73XZbn7Q5viFr8CnDz7AQspBz9ZgUH8aw6J4be9KGEITbxSvw7m3iPPqTIOo2k1BwYQDniosXn%2BJk5DxGznv7djIINoYavoozHFkNwsJX8BPDqNOzIKYcbkQU%2BMZEwcOdRfx%2FVE1k%2FHWEU5fmsTNK69Vat12wM1xMkCWuwcP9Svk%2FwaGChX3H7b1vhbf2YDoHzq6n2ONzYrOto3%2FnIcYSIFV7N0K40lWMvbiRftCnV4Ep1GCno44HhxoQ065y3XjzG3nmUfGny%2BLadizmMfB61ihf9wo%2BwObI5d%2FS9ulXfjoFG30lVWo9o7UzrrnICCD2tuR%2BO2s9D8nKsKckLCcU2XK%2FPgQ7g%2B4EJQVpgFct6Zugvr8DjJbS77L9jioKCMVjCr3f68BjqkAdQl8IN%2Byhhc33YXQEC1ll5H5VGdIQsPSATFYJiXfcgZsiHeImSpnq2n43RQNxxcUU0aGPaDu4fwIkbux6Gak8nk7Re81WrWx9XZmWHO8SGtytpAgcDRS0z%2Fw1DhdUDCrHVNoaKs3TDxKSZExvQleTso1uqIY3mhbIPeK5aXVpJtw8T0li%2BFsRoSvIiuZZEmdVznWVJfwp7gdEgBTv0PAwyogBhf&X-Amz-Signature=d55ef645acdad8a1b74a18d18c6e81c182e3d61951e4ac82bd6cf97f24820c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

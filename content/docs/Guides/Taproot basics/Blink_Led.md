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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFD6VBF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD78SqSv30EEHWnDkxbPSitMunSdxAt011oqQJreoyHAwIhAIA5blNUn6OKcV4s%2FXbnBTsYAGFJA%2FSxaeoHL36AamiPKv8DCGMQABoMNjM3NDIzMTgzODA1Igx%2FjT7zzjftZ3Q89YEq3AOQGO%2FdJ57b%2BD3eCqMQCXZ4ZGtUeDbE7dwwr00Jz2OEel08bT1OlqLtVDVJPCxOruHrEFqjjMAgTFcrHUC1fyYHsj39rnfgub2UQLhn7mK0755OT1IbTY%2FUggJEO3hPDKZ%2BCDKrR0bTcZk4LTX2%2FW%2BORvFougI7rhw5vJDLTDdulAhfNF2cJ%2FpyNl%2BfzH3Qi8CbOERktf8mkwPisxO60ALMVjfVKzjF0y%2BYOPAOU7kQcWCqMINaRF7BJnVPnTM2WZqjpO66imEJqtaATPmPn2ZsfOsjXVRxiSOVm1gBvm5u8Wr15%2Fqoz0FRUpQ11fqANfCfzdIYGKvrY5TJQRIg5SgfwLL5T7s5nq5LRs7R978qQTq5PduAYz9Wn5iCtWReMCKCJ8qzotkazlIyWBKrYJe%2FNCJnqku8oGRvJOuNReEWoZ4XqnbktXYyDtBhx9FTRIPmEnvv7wh6gHR%2FtbJUliwkGvj%2FNLoLN0%2BT2GNrSHxWe3horAjOYeGGWHpNmzXdb%2B25K92s07nCm3RiyHxjPPJp5aI%2FPHm89stEqW%2Fjik5mtX0D8XsG6tRhhsX6xjMtvPnTuo%2FInHrwq3iK9nzZVRE%2FmK%2FOBmyA6FCNqwosTgM4EMxRKOWXxDL%2BkfUMijCSue7ABjqkAUPogZWANWXWKm08F6NrnATIZBQ4DFXv86d7Uk72FCX76y2aQte4ADBMJBUufwlBZBOOup%2FP27XQ2ieS%2BkcY1liEx3ZpfVCxNjLXq52yh2gVmzSbU4wsak5vTP2Vmrtah4H3o1d8WtsOS1l628MI7Rgbgs7tz5iwy3WDCYZ%2F%2BTPVdS6mMTPkC9AnOHCL7Rt2MPyC2OLYppS5lzIslltcKijQ9SFx&X-Amz-Signature=762638268c6156dd4eb1128e0659682cf06103cada7d7f4f6b8feef6dc960216&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SRVN37T%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK5CV53o%2Bwit41LD3X4PBsG6lu67Fxnf40Ws8hSlYGxAiEAruqqJ2lZpCp5yXAOVpleM7YEunMsXaO3fHgzSAnDmCIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCvrX%2FdC8HjmbY1N%2BircA0LLaen8Oz0mqhBkuMQuF8S2KjXBVCK85v2l7UD9BXAEqg9%2B2Mp2bqHB8ShlIT%2B6eKlYRXQfW2f1W9VnwYJJIphi3Ra8UVvNNq3Z8FdiY%2FKnQyZlMaupnjMt3YaLse0Uv5PhttKT7Q5uZfKEO1zSzECTTGpoYb119zhnAHBsIrLkLBI73HOnGNU90gy9gR%2FCjuYA2sl4ZKJ3ldahgvHGD4u%2BAhEctuXz1HbzKt8N3p%2FsAFqv0BOzMXi%2BBOA4ymBqlgcI%2FatTWLUNOiyD8nP4MF9R5ODP1goluvcLuDaUsbUeRuT%2BsCkOSzNE6t8Vep5yQpM9oZgT0e3Xvnvws%2BghbVpd3XcmIVPBic%2FjKQcplLd%2BUJWL%2BxzV0PkO0zWeLq3w%2BWs4O0CEfPH8sXx0TX87ovE5oeyb1SvdMapBAP3OFDeOx1teQDQiZ1pDB7LSF%2FZCB6aSNxcNzOMQ9mzHWzsm05MjVqevmjwNemPO7HgRrHPEwniKdkZJPdYgZaD5niV6Em7l2Py%2BTLX4rf7KtyYi56CH6YimDxeLEErXN0LokfPGWu3Jw0MZYb8iURxRh5bDLTe29evgksbr0VIhwtNdhxn9UrsT5G%2BkDosYIKmUGVDLcYDEQ82oC3qpNq%2FoMLm57sAGOqUBq0%2BH1q%2FC1FJ%2BJ6ewCQ5d9hGv74g3ydef1VjOf23QmFHuv9%2BwRPlkYYOFxAJR4guzu6rLIhXDbWlzj9zOy01NKBWxdLNKlWeJ5ncCVRk7yD8sQkGMkLsRed5BAJjmEOBK5rX%2Fb%2FN8BUyf%2Bv1lcxqe6bOoZaQlkpH9M3VqDZFNb9y%2B4mr4uuxIBu5kb9gIRnRfLbd8AgJgUbNAc4fFLN%2BeLK90tJoI&X-Amz-Signature=68b145cd09ed057e22ccbc7b87115ac42991d6f6d00e79671fc08a952ff8d7c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

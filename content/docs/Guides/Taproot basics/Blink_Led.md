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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ5KTQXL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqF0KNuKZqS3rMTTLTmclLnHoSr3kWUbMbRsfMJYhXFAiAHWivIgwrLbn7y2XE7545ZiqKYS9bJMMei%2BdwkW2GUZSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8OdTfis4QsYs4tRnKtwDkweTuq1tSldXj7Z1gcX4H5yGLub0y95%2FE2B%2BF5pyE4EsJ%2BEdqqdvg9%2BqqyBNvUWSc6LG%2Bw7x5FK0DRfC6kjQbDa3gjqJ4OybeVhco5uK5%2FoHrCsiYag9lpHWcNpv31LMsig9JyOwOSQI7661Gjh295OY3bICb2raJsLzBrBuZbvgO86FVK3hxpGOWeguZHikitrZSvvNScmwP5qN8XmO4AKrQxb3qxW0dYl7lc1sQQfBPnLSlTI0q%2FhZnJNaGDJ2k%2Fx2ux3%2Fo9zXdaeDglYV5I8lJHwXSD2dGB2ApevJL4C1QkwNVFn07uOXprHKMD8nsRX4wv1Fu43hREWnVHOluxsPcKee0LEBVlpc4dheIGTr4%2FGBprLBgSEY%2BvnuYgmYNveRvl0T6OwUtCZp2UTSaWk7EsPib%2BGMfgs9rDq1fnqXr0qx8i3bZ13P81QHQeTzAE9iZAMwvEWTWvYfQMBNguUekZ%2FL1w7vPaftFm9SvSClun3REbNUjjhTygSa4YnB1vuDZq4x03rLjT7gXnnxc0AoxhRbvOOqIESekANflvYSpzlhWAjEq4yIGErs7jKRw11BtOkSjMelP%2Bmsmfp05IRJIdpmz78oe2Ysvv4LCLmrY%2F6QmT37NqGn85QwuJ3KwwY6pgF9Lr9I4WlrgSYhm90d5%2F%2FOqKiHBbM0eyediMckO%2B56jo7g9KxCPpgVsZhVRFak3ZgvL636kRy1saKpzjupJQe5EPVVaMZwVFo8p%2BtJV%2F1Ml%2Bfv6DY92Ax%2FM8bAcveAKWZtZ27VnOpR8OZLMS4muWZQMYlUz224U%2Bue%2B%2FmQ9Ykx0%2BreTDpaz%2B%2Fi%2B5d%2BK5rdC%2Bu7Wc87t9I0gfoHCPjs561J9Ou3XkUN&X-Amz-Signature=d27cd499e2b336cc8dcc974c95e40757b2bc10bfe0928cc873491b3b5dc25ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL7HOSPA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID787NgxC3aQcZ6erMg7V%2B256RTfOV9jg1%2FTIg2nguxcAiBaV64sRdcRdxvqPg5dpqM62%2Bpg5CdVotXmM9ccwwvohCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyyuH2ZbeJA9DtvGlKtwDWXK5AmugZVAqtM5uJnqxtUKBqIhlew%2FHv9%2FkmX6zL%2FOydqcSwZMwLibaEZE5atwfpK7IQVW2m7aICNyyGbOIEK7AnWxB7HJ%2FJFRJqfdimBH80BzETbjxL3L8SZ%2Bmej%2Bzkgkucosr2A3h4I5Y8F5bf%2FxoZtma5m%2F47gntviXHMja2hgjE9fI4nXeFyq3ck66TceR%2BvJLU47p5MpKiWk%2B8n9zii%2FfzzcTWL5vNzpz1hRedmNScF%2BJ6%2BuLnmbGlkMEi%2FqZmppxykUmn%2BpkOEUAwrUjLqstMhvBs5tq%2BZyYlUCe0YBKg0oa4DYd%2B0Q3XfKYhAuF7kp2wRl41WDVCeIHBvjx7gQax5QmPsUO5bfhUemX2Hi3ZK4nGX749Uzj5i8mgZa7Hy2taJQc6Kc%2FeAaCga5vitUkTCJCS4UKiTXXQw6%2BmNEBLHIyyDKb%2BY0ItjqmQbRdD4wP95TpjSHxqxBRaFsjW22Bdb9YRioKQQlHLLlYGDbfC4iPzy9L4dbzzX69AmN9fPymGHIdW2jHC2F6sUdXchWxxYeIbm2gfwmKWJHXGMZ103Unmq1RBN11u4uojpnEbLgNpl%2FoOnqE42Yoan2gjBXz0YMDuEM0Zr4Q%2FkkEBQNSRuQyHPCgn3G8wsZ%2FKwwY6pgHvOV2D%2F%2BQzy40wtm8wviDrMTVLbDwmMHy5TDgXc3oYG4jsXU1RV2%2Bim%2BCPohpIeIXtxWrR15HkfzeJr3AMCDd1gVbTxOClDdjWjBM7e3TvMjfEi7DjjNHHydBBG72LOGC0Sc%2F3Ib33g2Lyld60u4WPaMECS7jAkxnCfP%2FgFGSSfx3z5HHsdzwR5aQkeo1duTK6N3Yh9%2Bm3qqy9Jm2LcbVyan4L50SM&X-Amz-Signature=4aacb6f8bdd46303abdefb4e44c2e42fa87a6fd2198e8a1e78d74857e4aee2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

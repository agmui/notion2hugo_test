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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCEJLCUF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2Cnn%2BC7LVJBqc%2B5qGi8LfZ81JsxBFPcoQVT9BBdBbiAiEAz5CqEvwIfAxPxOiclbOcjv%2BGRn%2BOzVG8e1zY%2Fza7%2FEEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqOwWNQezyMaipcjCrcAyLo4KqpkRocD7TqlzHDtZoROyFDx736gjDoQ9L%2Fg3ScZnffqOiokolvyiWDt5LzWwBa2yYxNa4krh6N5a5cF7EtpWSGPcKYLVCI3gqKhK%2ByjwNOERml%2BRvbY4Nv9MyHGzyxzYrAFF9H1%2BlEsz9qfI7D6CGkgt1yR%2Fk0yxRQ7CCYp7yTd%2Bv6HuHWDCkjAXU%2B1%2FE8NgYzz1TyPMjhklFID97UBcMjkYvqXU%2Fz53DZyEBhApATWcM%2FjheVAovwbHeSwhmSyRpLc8qiPyNHOFoPuCU8bBEqzvlhl13RipYKq7IKAzfL820lMFb%2BNQHgCFidKy3cG0MsOWzx3GrcLFuF%2BUFV0DaJv3%2FV9Ar7b8ay0dtzjZbqkLTSUTiIwC3vi8p38vD5Pn6S4ngIuO%2B7WrRMBcncF2%2FVITqktHD0HVpD9BLdTsfYtcyyOot4rV9rKuOx%2BQfG%2FwThllpRRPj82%2Bq%2Bk858pstsIFEZ%2BY04Frf6BKKVf%2FcZexVCCpmYeE1z85K2M6Bjt93q8lyUGsibUgnbFQ3mtF22K47mcN8qbHaPXnTX5Fl9t2HipKl%2BtScgakl%2Fd8GeCijcN295Knyv%2FY3tgBcK1RXThgzWcoU1FBvOyjJ0ROPTPy7LJHE2cK5rMP6D68EGOqUB7tEXhQM1qcV9Hh6aUG9O5pCoXyfJhgRQaWp8ztDIzMH01ndcuZ7HYDlTQ0P8fR9wZ3DdEdiq7qGnrLesjzQ%2BfcCfzRNIDP%2FO6IGY%2BT0jM51UFt6ZWExpTvTiLp9VE0DltnEwI7vE4o7MJYyk3qV2q2ahSmTsRZuSk01dfuwGHpTDQaLSyWlqyJil1PA43ZU%2Bi3JyhNWI79zzMrwjyhbvDXiqp6hN&X-Amz-Signature=cb9b27673bd1576f3d4518ffc3f3e29e91fd6a091edf0c3e7628981b434204e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LTWYL6B%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRsGuYBZtdVxsOAWu44FdoSeIT36ryjWxA3zu7BThZAAiBCSALuQkXxP1DlBQB5bAokPXBd2D%2FS1B5Wmzcm%2FV42jyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSENN5ECFNPN2TB2mKtwDPJ1i07npC3zyDao3Uh9PmtBGFiXKf%2BrlYi4UFbzcpHCarSxBZ8EElkJzOp%2BzshIDx6t4HbrkWoVvbaDRg5khmXGLPuK5341P1gLGaeGnGe7Lyv%2FlYVleAibco0OoQ4FJes2JSJ3RDU3LYMklZtWAVR2vUJfc66dbNchTJaIZBWB3w1we51kgdL%2FXOF1z8vglaR62puCDEjpZ%2BtLSsJD77%2FlGmZqYJPX2Jj2u%2F5um%2FekbjLNxg49Aqlvj03zdvGFzmyUv3VAr87TdGexb6wP20kXpLO53MmAxPz3w9jzRnMltOiJ1vBg7%2BgQMQWNyUOsZyzm5t%2Bzy4XULoPm2Ae8nmhKsbOmkp9f8IWvq0AAuiSYh4%2FeQbILKEGVWh6aLshy4hc9K1gP072GGSgVN8%2BFmLanUW5y%2BOcr3WF0Zhr8hnxEcapYI3zsfkS4z%2FAE7Lrhf%2BiHglBIoHWs52wO5RpA3Xjmyg%2Fq8fR60qc4swabEVJlqT0bQsebGJwbKGf5HfBQqPgEnwuOm%2FucjKnX5daZM0bjJ6WIuX7hge9eiTpfeNueNSF25W5nALE4fDr%2Fj%2B5lwsNt0lUTS7H3urmhYqpXTY0MXhZ7r61RwL7SWq2Opnu4KSU12v%2B7oPFqQbGkwp4TrwQY6pgGYqBP%2FIMuSja%2BAl%2FeULF8qNYWM%2B4fxYMal1kUvP5Ge0w2FbPW6fGQS8hhU16wt5sSE%2F3Ozyr%2BINXbungo4atXP%2FQmurCgElRp86kwjPhasz6mBcY9HjzkQJcFHFUkUd1P7QatgwdrqyQObcN3ZpRM0HsFQN0jIzco7ErsHpISnvBjSCGg1VX4yFN5OG9hDKD4RDTH6QwbGQ1qPS%2BItuRPO5b7xV8Gk&X-Amz-Signature=c0a65ba445c86a8af38ab069afbe6c47de8c3c8f8d3f35a96d031d50a994b9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

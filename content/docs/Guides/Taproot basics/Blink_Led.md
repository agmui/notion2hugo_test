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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWUIREJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1%2B089lXLqLtM%2F%2BZC2bWWogi6pdpOFutKO1GZJSQ62BAiEAzudRnMEpNbstxlJgOkSG8bo5XQO0nQ48S6UNMLimQvUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdlum5H34r2p8fSdyrcA4lvUL6S4h4SxdpKrNKWcEB0%2BRjrDeYWnjjGg6YBc%2By8b26Yx32u1DqupGDquE7yd5zHtRfgr5w1xYCOcDZwUnL55BhQhsg4NoSrsyvLJzwU90zpCUvbBCT%2Bic%2BFhuv4a0m5dGU6gLLv2Md9KStn7VAf3q%2BgF2KO19FE5m3frKLub3thXFSFY8%2FUTNh7TR1ijQ5RP6%2FFv4R84jPtWaIYD2httDkxq65b4IghXCQ2KvL%2BI7ZyIduTHn0l0sCqxiNYO%2F2rNJJWuD%2BvoBS%2BKttW4CiGGUWKDdXUYXIuR3a4LJAUdm281BcM1sfDvOCnVgg7PIOhXbVNNu9UZ9tGs8lg8Sqvq3Z%2BNcCCPihKeFlnPEj4f7Yhfynh7ubxfoZQ1TEKP6wiLQgVEfxf4xpSqKfm%2B46Xa52y3HqEbwXPs2aUtAAkuTUKh%2FAxekWTjofg2880E5OgDROG040e2uCRo9HPS0FpfwDcksFDnKoOKZ4ONfNqb%2F%2BnTB0hc8q%2BKk%2FzBiLBroeTHfFZPpwXYNHxKJcNP62bNVZdgyHiDgFWRT0fB%2BSOG7t%2Fm%2Bdm6qsDdgBSkQ5gIdXxTe2Srhcbtz1I3mRseOYu4kH0wkL1zq9%2BF%2B57iVglbDaSHSrtDCWmXX3wMIuVncIGOqUBH%2B9Yxc9Dj1DU%2Fn%2Bg8BG1gjzHK3nUbS0PrtQYjUllkHoRrFcNtIFE3aKSixd9RMTID5LMYhb3NUtCEa2x5YOM%2BfhgGSetxem3oC9MzBbOr54Z3tY7Pkaf5HaxW0stf%2FE6QYgEZW8jIgYH%2Bkm8FA6G5iQYO%2FNmJMnGWNzZ3ujCYV7yu1GQvdiWp%2B1joUKo70JBSaQYt1otF%2F4l%2Bh9pjGDNrTOlcJnT&X-Amz-Signature=5fafc4d614915e035df7e250318279061f33ed4b56fc9df42a1834a3357edd33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX46KFYV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZcsguk05T7VSqr6%2FTXjU9cr1zYVdbzHAKmGlDJHgJhAiBzY1qWyCovLOljPR33Rz%2FBUF16CFymSUmozjBZ%2FHDLTCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ5%2B7CTenfznNKsV6KtwDAOS9F2mrNKvCzJBwmyrUS2A5%2Bj1XP5XQQBXIuBG09b6P1i%2B6DDBc8mlM8%2F2niXXvIsWgcZWIAatotTv85%2BegR8B9XnTu4Lr%2FpFRivWPQjklcXkAsST%2Brz0GX6sjIIXCDIbghbYsPaOhrhhEVJJqGxmeYqXr6Hwk7VJE1XCThMZsFf4vAv32uy9Mkr2uHlJMx1692O645seIpwuJLVmDTgBJRV0juvD%2Fkvxg%2FXqJHRta%2FbIGUHHyTK3QSSLkfwVPHyABYNXpwxEzQVr%2BMU4KmEnoSEZVbG3MFAXJMEQIzGZSEcQC%2FIvQeQl%2F6m5uAXjWvxx1xpauZDaYp6htZTGVb9zRc%2FNVxa%2FUcKrbTldWWR1lcMokDDiP82La27hoiYmY8HOh9KmfRmRPJKqj4aBGDUXHiHADNiKA57pDtwu7pXyKS1QnVnY1HSDhDWFXo%2FiyWsqeLmwOLDKzWM8jJE3LsJ85ED7zYJyHHWJpkvittYLzPjurVCGxm7PLxp8260x56Khe9E2FBLv3o2APwGVAd5n986JLc9EM4%2B1Bx0OGl0FFgPgWRud3Hfxf%2BGNOQe6ie0XMTVQulKxGCdnFbDWvVb9MpEzVy1gTfsnxH%2FDCpT7608fEHV5VJ24oYZYIw0pedwgY6pgF4OPN1NA6PtU1cD9KBOneJqmekHdKFq%2Fdj1nwLrpCz8ZWoy8wBp6sC%2BJGbez9BMBFZGkYvDYT1MOYPPm%2FZhvp0A8jVbWW3jNYZze%2B9KDZvsGMGmbbUIbo8W9MkNJzZ6UUWxQHy9PfN5fW2vraQ75p4lIYJJX7keoXih%2B0fGwpJ%2FA9faGV1DJ2R2EutBwmUnU47hX5jreOuhhhYjuIXhF5z3Chok9A1&X-Amz-Signature=c41fa24ddba84dad573c7f449e47653902088bb5d362ca183f8aa9508811a408&X-Amz-SignedHeaders=host&x-id=GetObject)

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

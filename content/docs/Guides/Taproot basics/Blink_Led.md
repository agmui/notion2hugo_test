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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZPA4MW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGD2iMKwm6QhHa1wLKNhDwVJxWHk18h5q4AALcutzQuFAiAsjmhTwJx2yuSH6hFrOrg2vpzI%2Fp59z4Se56gEcimwDSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMjDgG8pgIi4gWRB9QKtwDXOdhJLDfqVmCH0aBawnWXwX2XpuyCMOH%2BFjAajUiwhgktq57szMn2QCKdPuTEItWd8fjYVpKLR6bRxiSxxxd%2F1pD9uwF%2FWI0GVTo2allvcChLZnnJRXieZeRm67QMf2vo7RMwAjyFzqvHv7L8d0JXb9a23yJzMPzculoyJm1RUDgV2WW%2B%2BM9qYvy91nSXHlx%2Bfa%2Fn2MFsDZanI3HjSAhV6%2FlJvD0LVy4LtEe1yoxvdd40p3JGnGCIzrcHtj74Ackm5weARvZFllFjq6ZUOOs171b8fm2kg%2B3UyA%2B9Kv7aG22xVUV7ktsL2XjlYKM5h96jmXo2fYvc50TzZ3ylKymUs%2BuVcNA6FncliiIYcE7STzsx6S0L%2BO5Vnas4Kn3t%2B5XdC608GHH1i9nTz3FwM3AxmKvtBOs7VEAyu1QU%2FGV4%2FfH84b98mCSzm8l4zRpqgIwps4dHiOEcis9xwXFJ3QvlupTs8rP7aponSt7uwCe1Vg2anZvMPgfEs5iikHwJ6VhWFec7ZsISAOUMTRt2HWoFhuTBXq4GPNr4FNj9fPRLHo64nE%2F%2BblRaFt1nzL0svk0%2BNlHtX2D%2Blkp0tPyJgjPcBNeWCphZKz77RugyePYM%2Bi4k9m00hQuG5Hhm1wwhIGRwgY6pgGObZdeIFQqEBauJlbqouGmgFVX2vYSWOTHe7p99zGapeNb5tl3NWD4w%2BP%2FXeHfprCokW1vYy62OGT19EWDYpqjkYynabpWATib0ROByIOHubqgrzuC6ssP98Tr6M9AUJv51MPV0F1NQ%2BKWahaSQFHLrJilKVecTXTAXi5Xa7%2BjZe4qbd8mSSARaVzRRdnfc%2Bk8k6yufyKCXoq5g%2BkBwf26iXwSCOxL&X-Amz-Signature=3240d11f89ecaa65ac3e86bf328165c9ee5cc3d74b2587523801425a62fd4f96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFLFFEPC%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1KCHDNzdY4xkkVDIt4XIJbSn%2F6GgnRe5m4RbSsoz0yAiBW9CzOwfHpEXWAfjBZxJ2iMBD1NNPzXTGBorPKnKpIzyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMRb5LzcflW%2BXY1wryKtwD0OygilLwaBmbekpMvnir4K1hSMptZWcnitTqc2Lpy9FHMa74%2FRlT7WCcTwByKMMYSROWR7%2BGd%2BTgcyv7IVL9dstKwiMTzQQqDU3KgwFKsBEiTXf4sYvdpqA%2B4wESpZR%2BOOnE2X231B9wnExI1zOfLGCVZaEtxb4ooiOd7Xlj7mQuWCP1D8DToml0I9rsIoGnIV3%2BFIF2Mnjbuj95oDmTHxBgSjIWjQ6DqnkY2HP%2FTeh8U8%2B361Z3j%2FmyEkBpYOyY6kHLQDd1CyEMFB%2Bu2DOpyWNp1ZmIsaOFZQFLNY70Qum8oHcIJUamb0liDE8i66q%2BxSeDhSvAYUskCLJEu6b3QNXtC9DasDPbc9CIuR%2FiaE7YBK9vHXLKWSmnF94Nzu1%2Furva2j3l5wkEJS0snC51VGH9zmQdQ6zLo%2BvbYDn0%2BXms4wppWk77wKa0EtNqVV0OmLIDqNHdfBkH5prLhD8sgCFBr1Kmn0S0WFbLEuHv2npG4b2CPDkXmQH%2FI%2BqVWj8mot9jp0nOMHU%2BS%2FPj4ZcWaMKYxW2lE20TSCJL326E29GY0%2FDbeZyW5sRiiDcaz5viBkXNcLqx6N0vHIeLGuKhNYtV17xhA4HkhvEM3TK5cUu0gQPNV%2BYtv9SaadMwrIGRwgY6pgEueImcOsKb%2BWM%2FGK%2Bv%2B9LBOyIN8OzMih82B5GKy8mMLeiFLaIlonWEtLwxvhZwGKCODMS%2BYOaDuhikKnWbeYKPnDg2yYPnhd4p%2FgELATZ8UHekC2nwwbjXLal6xsjuYKP18v17VBIVfgZ65OkicFFjCRaxZg1RmvXHjtpbCCVb4A63B1Xm5HHN70rkKyxTQi4fApSPR%2BXbO3G7Wj3Px6JJhOsHIp4H&X-Amz-Signature=7b49df1f87131986abab70dc14b1efe403e43f6bc875508c7b943f4de5b31784&X-Amz-SignedHeaders=host&x-id=GetObject)

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

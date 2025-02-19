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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJE3GH2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIARHTtGaMWwPv1buy1LpOgQ0DpMwXhMMiP%2FPjWoL3pZUAiAxqX0KsaDSxHNbSZrXDvbhTHr2dqLJstBozxxgPI%2BtqCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYvid80DmeGFbSSOQKtwDx2yqUqr%2B6a71gELlNG8fWaj9QhqviMIcEKv53j23qX3JI7UmxFpaTM8dX2Pf5fJ05htgHsSZkQa%2Bd2OMCAr3ZgzfpJfCzSW54dqHFDU8lebN8hp34DXlKrl65viaJjvzaYvsCkIIewZFnxiXg53fZfl6lqGm7F9xsR4MD0nu6kyjQ66I60hTFM6QPsVoYDk68DwEuqcxNr0h%2FuH%2Fzx0XLFnLDcC1PJPmMVpz5sRE5A1vdDNrx9dAtuyTNQ9GRJbAjHY9BR6lMCZXljHmKT2dIikmDcx0xT1BvGIGb7XgzOH0H4nVH1SLoiYP31ChG6La6Ja%2FBhdqtWsX8xcQxAiOLzIJhkiV%2Ftkbyhop%2Bo%2BqkW7qrvd0ktvDkX4A3kfRAEfywdlUodnjndFDeknyEy1Ey%2F2jGU9Ixt%2BMM0h%2Fy88jJcpdt40spIbBydnAhfNNLcVBX4JVGN3OqiiRNlvpqgQUGA8BlZQzzvu%2FWqZXZN0XPXTnNERkjF76So5dn%2B8V12dmLDO3j2ZcU6VdssOoa%2Fwa%2BPUqZhrOWiZkD0BXVSIvXe%2FkDraKFauBz1Z1NBE4FenqJB2CYX%2FQNzSmo281bSpgB56M7HGMFmguwOIKXUu2qhQiIlA5ccyQEMMhht8w3vrWvQY6pgG4KhlCNzHK0%2BPaX7ZRB%2FClhu0%2BW0jLuLSKUE51trkiVQxYythFnrts12ijrEKMKG3CN%2BcGJZWLHAOIPtK0GKyirQA012FVD%2Bml7W2Syhf24jD0bRPKCx6vvRsR5tvu0JbNcMYPE331AuzpTu81ImtJicBAkVhPpwzTFAp5c1HPdCci4hGcnvKy3FAs5NFo7eapnDypZn6j2k5Vmv6Q6TtIpA5HNjXR&X-Amz-Signature=280a7e52b84709c174699ad08b78ab757c3cee6ad05a1db0e75e570cf400e4e3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D77OBCF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICfr0wKWD17HwnIR4hsrZUxuweZCZJs6JJg1Wa%2FrX8kfAiAOOi6iyQdYyOabSZZOqjcwjryogLeMtj74ZxitQyTpEiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM66%2F2MvRbRTpBdjL8KtwDlqufYMP1RvhRtINkYC7GX7JNzWG0bQXzBxfRsSNOqQ0IBiFFBNzqo4tyLOdFn86T1UT%2Bs2CUi7N5ZOPQGhuVPJ2qZafqYad6Oxiz4wFmKJVYJmEtnqpT2OifdF0NFzi0oeq42G2y1khaq7in5RE%2FYE%2B2kW%2FfXMktKQqxa%2Fy4zC8JXu9eN8aemOsjSErVeBi6HXo9KdsKjhwuZprIdsRAbZOHZaXbexkKBTiBdCn5Ay%2FaX21caDiSFW%2BSfslmf%2BK4SEf70h%2BUZ40SAPa45O8D%2BqD1QD%2F9qWNASjTJTxDVywPXD5iDYqPYxd2tLqe6%2BZ5bJ06gZOneB%2Br0r6j94GSvRJcDXw40t93aDYt7RtyuiMwqJy7hBMRNLCYa%2BuTfbTtAYYsfw0%2FMW8%2Fd2jpngT4dQSOo7i%2FOukHbFFRmDaOpi%2BNMPC3LDz5GjnjQn03r9Tn73NmMeoB30bySYKGn6%2FCyazz%2BIQP3QDpNtt8atShbsFX6BB1XJdaRThYckvVSWhOvtL5ySJILrZ5SLL14USvqsXppjSES%2FCATqfSk6BBtc%2Bbe4Qekv3MdVUTjwBKCywdWwRzrPGIIpyOsXA7CQhdC4mHWqipQBZe6bz9j%2F1LAXMEkq74XqKUv2prMUIkw8enXvQY6pgEK1GZ5i8Ee3Y8%2Fv4PPjTGRv4C4Fm%2BxWxuOLafMqzmZMD0R70eTqPBV49zRVx%2B4bkHokunZ4E9ty%2FwKWAYFLCjhdi2eAme1%2FqVQ223wlZCs1TtLJEnBkk2sB5UVoL793Zd0xk036jXFR9rAROvPuE8CbX%2BnSVN4jjKeAbF55W%2BuJw0GKIkWl85xbfr%2Bm6Wkj8n6PVqhEe%2FFgQZb3ubGY%2FIgJ0vPc3TS&X-Amz-Signature=e95b17065a1460476e2a089a8195b964310b2dfe6233262c4351581e658ef4ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

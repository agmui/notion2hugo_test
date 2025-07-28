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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL4VWFXG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDl7rZHC7x4vaA19djQe%2BbtuGJKW5el9wY%2B1J2EKU9AswIhAKpvqFP4kBTYtMxV7BmRDhmyzN%2BojiVPbQFFbG8LeTKpKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3WS2WjenNnW1b7dAq3ANcKkIhAyDqtE4Fnuezh7kGF6%2BThEteAnsV7sk2%2BcLaonZiAmFoYAfDAEPFdCtnra%2FqRMDV%2BDMu4%2Bv3%2BWvCWWjEdUnz8iMr8d%2FwoQ6SbynmdQ1BpfmqiHIkJyKjZ27vP53OHy%2BHA7QIpHbcThz1k6zCZsN9TDMs10WuFpEIGyKrFQHkYb9Kj3h9EHzUnOJizM020%2BbeP0bSvLCMF7aY%2BblYH2z9pxisOIyxF%2BvE%2B57H%2FCZ32xcsGaegb8c3J7NPjXgleSJN4gnwbdshU4Rl%2FM%2F%2BkmduFjjmHAEHeOBdzliwMOUzHoL6nC%2BNW4ln%2FP7W5iRH%2BSQb6Mny%2FqDgfye%2BehGTdhvUmNyDq%2FbafXIPbOWgnI0eVw9AOwwKVfZ0%2F%2FL2rx7LI6lUkc1lBknrSZ5gAoohWPispIRExLJTsgsU3Nw510M1%2FEcviKG9%2BYOKVg9HcY6rmnqh5tWmPJNOzPigHKxk1FFlEbUGllCWdhWEiminKPt3SqqKlBomZglc4Rp5RB8mBrUGdAiYDUXrSZVaIzu0WQHZxdj31xYtbJubvBTjC%2B3rf60xFXm9n1X0YkF%2FSlZQySj6RI9%2FRowSO7yq3iiWpbotDnXWIBt%2FOmiwUhLr1jNS7WTjheYXCG74NjC3xpzEBjqkAa5wtrZk8IXEKEYMzCab6pyhhjTiVweoS5RVLl3Ol%2FsRKUwIdjr2t%2BZ4CBslbs%2F3klYwPMLYYxxFmooGa5%2BIKI%2BUSwwWcupNoovjzc82SDyAgV67FSIvNrU%2F6CLD%2FZBhRT5B30zPbbamI1Sn2YOvwFqt2RlbzY26QNwQp9mlLuAOlHfDJsNWG%2F58RX%2BLnl7wD0aAZILt%2BZIHXfI91p9hFrVy2Diz&X-Amz-Signature=7181941365f0df00a01458954016a509d28c3e0e3a9f008a4eb4bc9c9bd1aca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HEEBFPC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBCL13L4HGZO%2BSJFDm6h%2FtP%2BQtYQIXtQuBAzPqhbv9AGAiEAoAzqMStlOXdWn4t4pmME8bWi7d%2BnEXIuTxisCk2j39QqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBO3hFT%2BnE5SFfhKxircA1hg%2FrLvrEOm19e6Tf5QULryDIZTg3mjwpU5Rzkkkm5ROlvZJZV0DRsxNg1tavksaOfC3jDTPUn8W30PKE2jdkWFWhYc8ZFNmDl4Bxvd%2BNlKWG4nhuTHqMx0Ls2bgEKxjzIQuxqJ%2B5lA9Ip0lAW7h8IHBve%2BqQTLlwaexs6cs8xO7OQvpdBLUIGt6amWD8EWwLyQNLCtVQ82ERvbZ%2FIYInl0bmNjVTaFzHEYhLcUpeLOiC4dlO6h6J8Hl58YSkAacB%2FCD1%2FNpu4wSThJPUiO3wt3%2BbPubQPuMtY%2F83eWpEVjloS050TbMZ6dMA92vpNV6sASlb48o5DN5iexj0hLoO1uu6fI2si%2FI4CfSf9zZGoYgySUbIkxNHR81Hc5DL2%2FfI%2BB9udTrk7KiKVmZRZSrFqhgwtJDlsXfzITjLTko6%2FWF29X%2FnVh6eet83qkrAgtDpz0fXjcyVUs49Dl%2FdVsdetq519oiRwlSzog%2FTZ7rY2HtKTMM9GJnde9L4Nq6Cy%2BO7VbZK2YswFvFSCl4p28cmQ8OLEb1HJMFjy7TAMH7sHqpjNWNxnioeOngp4pqtx%2B2IAs8l6ra7YM%2BeroF8cft884fkdXCmNOG98NDEKRAHd8K0mH9s3JctMNgj5FMKWPnMQGOqUB7e5miDfLR0BuhQmD33HGi6uvOHmxyX%2BYSlqoR%2FreSergRdD9Bq9xgl96ZMUaBqFsz7HLcKWHY2hC8%2BJruqCWpB4h2IxI5m%2BvdWOmu6uslAwZNS%2B27U5vMOHChVahtYO5DnI3Z3Z6JwJFVUc%2BZd8RSAQY%2BqttwsFWPaUZSo5btE3pI218jv2kxIAJhLYr4o2yfJB8bYhwAto5Qr%2BHCW3KfQyCi%2FAZ&X-Amz-Signature=dbe6717a6be98d5a050f33bb8484bbab1b88ff0b7a21adc91c29b896f4331645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

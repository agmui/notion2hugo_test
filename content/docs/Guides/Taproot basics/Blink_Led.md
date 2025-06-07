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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOPNYSCP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN6n6aiMV6rqcNF%2FRDnNemBOfgRbSjx66QQVDJeDKCLwIhALi%2F5r2hJLe%2BMqoMVBecg5rmuoVwvY%2B%2BbsKcTIzv8Ie9Kv8DCHcQABoMNjM3NDIzMTgzODA1IgydPLVozgvV3%2B0MdYcq3AMvHjXlhPH7Mo4LBhrODCZeqP7Yu8KWxZlPyTKCBPLpAfRwp0WmzLDPVEixG%2Bh8Xz6ji9k2AOFRubuucigUQYyqZxealSyA1574%2B4dHVpnkTwpj%2BGLDhGaQE%2B8Z4o3lduYfOLjwkWdZqrUCjrlYM5EDJ9RzKjiymLAFA8Jn9vRHuBCepWqV7gv3PI0YsQo%2Bhzpw3zDTslnMxec6JgU89lenmZfXV3xb6zSF0WwIljcS9OAjJsz10KIG2YnD7%2FYo1nwzgIpCUULQ%2F%2F1%2F6jXq6F1PgwoLcHszmy533Z6yY21mvFIFZSdctkcGSlqLLCGCa4B1oBvMwvf3gZiNwXJm0zbE6FFFitm6tZ6s2BYwbXgu0pyEg1F4AY9H%2BPiDJtCrIcfkjyEwOF9DZsMJC1aFpjgmD0RXSc58DrzZ74uWbAD368Lru0BviggYeIh3xrnSXItT67xsXKYTBDLrHmGaAPzf7saBjFOIyonxOH2RvzzruvU3YGEWXTTSLR3OViNALquzHi3s5jloRdJ4uRHcWjgoJaR2Ceay4%2FoiM7gcaQ0m1UxBLgZOuyQQGr%2Fp%2F7ghImS3Upa8WulEoSlM7fzYTi3KDemziauUY84KisXnnUtTxPscaus2gUpAE3h%2F5DCUgZHCBjqkAbSorToWIFmKC4zF7ly%2BwbrmXKl1IRjDeH2zcRBNt%2BXuq%2Bozibe%2FX5gUkxqQytSWp4fuzRw0i%2BXT2Zqkz86UxerU1nC%2B4vDUkJXwdwwzk2cVCXw4ssbQkVjbCdiXu4ka9ZQOmI9DOUGp9PGCMCCrORoXNaix7s9qSqFjtF7PpRc%2BpHutDT1y73pvesPpbJjm4Qfq4sl2xWkl7m1Wa4yEzFhb7CWb&X-Amz-Signature=b6f835c4cdb6d748fc3545a135a0a7198e0345357d7a4611079f5746792af4d8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMS6O3LS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0v3jW6HcwKzGCn%2BWj4p5a5AGB6fgRHlOqz8gUveR10AiAmBL5BNS7kZaEvE59H3gCIGDtuYrt5PVw0mLWy3%2FDcVCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM9eRvU%2FCQH5Tt4X7VKtwDHwrUtg9EsJhgHxlFSkrDueeiKMXCyhk9KCg3iKoczpA9gBDamg8XwLFavg%2BYat2hGSE2VmVW9wyITL4X%2FZJyWOzkT2hJbcD8Jr1jilT979Fkphx2CySXWGigHGw41jQicojoa9J%2BLnVOPP40FR%2B2cOQ4sbiUDcol7ZA362Kv1YuTOQ2%2FY6JsaW1FBBhbGPhHor6EQc%2FfOezw4N6T7aGx8yYNbb1s8U0rMH98GoAE%2F8He32KG4ZL%2BjxO55Ed8uzWy%2FlnAiy1gVXHkWJjB9C3LQiELzm4MA1TCfIyDbfcNL2IzLhT1Ib4sTFa0bcmiPnUfusjsrmt1tcpg2%2B7XVyIz9qHK4sdCxwBRuvK2h7UZp7mHqJEJhmwSaDu8aTIZ0dzw1%2FdVi9VVL8pnPAu%2Fdg1UfSp0RpF43vyx66Rah7cAabjRd8knycPbpsV1mDftI9fcDkJltqQL7vgoKZUOES8pdVVA5gXjQX%2FhGxWMQm8HgCw3YMLqUtGs6WJ8%2Fp4TdfRd0Cl9Mcsfi%2FZHhas9WG7aDLekkwcKwKmQwP0o2ypj33nkhcaOhHUriq%2BtVWBJ4ie76AmyJTS2PlyUyNnwAJOp2a0FeLzcllKWApYC1aN%2Bog66Voj3DmVq0WR4dQIw8oCRwgY6pgHn8%2Bw2kAfZEG3rLc0WmMQdD6HIxEbtr6rggPN6CfyhZPA4dusJ9FguHH7qkQs6Rb962sRKkWoUrnsQ%2BXnjSZLADuUTWFbSn77G7JaMFOWriMg19nyr1huTSuaghQNKBd4Jv5SrjF8A1iHTodnzDZBkA6GXXAGttsOv8TWy2VOMazA%2B%2F79dinZikaxLEG%2FUW4l2jt%2BqdljuQ2V%2BVdYcvRr7WcByP2K%2B&X-Amz-Signature=80b6673696af1ba67e6a05b1391119333d2f06dfd3654a25d26092eb49b16728&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXN2L3H3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEizgASbrX9gqWKgPL996yLGwtL1vJfBuaIaXch3vMboAiBHcroL1NahZmwVFuCj30%2BbNa2q4NXyVflVw3YA39if0Cr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM%2Bj7nhRcKvfLoLFb5KtwDXd8ktCfAH167doZQ%2Feh0KUfMIK39f%2FXpyqQVWXyqCJZnA5lpQTyvKJf0%2B4FBGsssqiF7MdW%2FIMOjRoZ%2B2eLxmq6fB5Fe3CaGdoTsaKATsE9NXuM6UE%2F6tU%2BsHOl5V2ghjZzRmQjpf72%2Fzp9h622%2B7dhEFY%2FVQobYn9hkYkoohbxP8QJCZuxa%2FiaFkCJM6hWvnQHFg0xmIE8phGqL0BEmdLI4M%2B4Xsiy8%2Bmhps%2BeKGNUa9hzVjeuxaJrQ79OfCMy%2B%2F%2FCqhwwfoBMX1yvf2Bqh5XM0QItsqDc6gom7wtVxe4h3Quw0%2BBzaawdaDYCoSLARU7CyGlq%2FGmCVCXFMm6ZBCAb5wixL5bXFrZvor9EPM8wSiqi6ZOKKy8VQP2nRsFgl%2F25wz8DDY9rwWOnqC9cyY7HTDMtM2px4YZh3gJdvv%2BZHDTGooRrjuH%2B7uNJJlRp%2BlOw26v3rPY6ZFUHIHkVKDaSJ3KEBnbQiCzcZ4ArXgu82y4u33Vc0EOTA41pUbSQIW5ZFjZwXfGCFFcBNmP3Tdrl3cgt7NBAR6nPEQbeVw4jSIC%2B3aQO1Zt9kgL532gLHTu01GFsEVNR65j%2Bv3XFeofL8l%2B7elp1LAFzCJ9pgLohvG9a%2Bxbvor8J5MB8wr7u%2BwAY6pgE5rrCa7MdjW5vOEGFc3VefXhNeo3CAry%2BQkgXBXPCbtyecprDO3TKKRVftB5KtWEfTK%2Ff6NoRqSxvxwIrLcKohsz1tWQcADrwrzV%2BqltTtGQ2RvxQAXExqTSDE4Gc%2Bq34LnciLaGpeXZqMptDgQAId8LkVXC9A8pflHsvgaB6moFuYno2OCm5ZEBf6ePOqp6lNWfChIDiz45vMorp0iC9FjzVUua9I&X-Amz-Signature=f716aaa2e838a37b3ee492461385dcb36f9a4008e06422347d3f2a699678448b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGE5IOV7%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOW7uw3lP9yUpkjxVqRS0ccwd8ZmEHikZbcbzWLBUzrAIgN%2B6%2BLYE7sZA3WjW0921T9q9EUzA05eDGyy4eDJtODDgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAQPlVSfHpQRO51n5ircAxKjSfUIgN2q8JwaT%2Bf%2FhAquw%2BJCtwvDxhBk%2F%2FLCFY7SlHXDmfgPETQwWQtb3vmtwNXciACPsGfWNSm8G%2FX2gmjOfZ7%2BFGUKlaR5vFpRd4gDnQI9afxyueGRl5sg1xgzFLRN32gz1OI3saatFO2DNsaILjEELkBJBkifYokxWt5auLWQk7F1Gq60hPBS9dFcF0VhYARDo00TDfZU2OkqJ%2BXbQZ%2FX5fXov26XAxsSxGnBJdnb9SJ4YBxYRezqnSml1SWmC8WGpg7azoeH50mq3pVCijUt4pqfIN%2FiOiRqj4VP%2BlXugtFU9jIBo2bawqShBi%2FRaoNDGzFU1mn3cUS0757HARSpSdmr2MNbY3vZ1TbfVKgTXjxMnfkfugFLIrke14IyGWE9ukDHlN%2FrknfR5s2aD5qn2mIQGHvxtMEtCeo0I8K%2BpsgjyJU559IvTciZtfbR3kNWd3TcNghMVfVI3yRWZSj0EKkM%2FPzaD5gKm%2BmdvG7Av6oiHImFb7g5FAj0Z%2FeTGGcdivTA4T8FDm6te%2BRAxrUzg9OT51S5paZHu2%2BXFWKhk6%2Bc8h6k5HTLhtGyABoeLy6m8NQAtASbqONjHRAyr4aZLZ%2FzyppSxZj5qNjLyxMYHLTWPu7APp7pMOK7vsAGOqUBwKarNZefxsmPsOU%2Bd4GDCoQ53Bu8ovaOwZgwMwdAvN7Y3sFCF5ZE4%2F0BbzAjwC8c9QYf9E3zyoRel%2BuQlJnuUcH%2BCZ7Jajb4gp937TEMxNyNECt8eQ3zt%2BdM51NlWlCkh7I9%2B%2Fg%2FkLurgEsAAqIHtcm4rP680J9nWlTPIzm3jkPCFY0mAVt8sVhzYTYdahn1nAe%2BxJCoSxTRbYdyW56OCyFU4%2BBl&X-Amz-Signature=69d9401a9d1aeef24fbf26f0ad38f95ccea85115afb959874ecb6c407593c0e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

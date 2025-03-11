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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OI2KK6T%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDFhmcZAyuskurbLWwWmC8AdrVx5ydTrm7Mv7n6WYRpkAIgP%2BlzuXgd048uQj2SDrVu0jJKeY78Ug5KevsQEfwxNRkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCZKJVCK%2BA2hAl1qSrcA6ICB%2B4nfhxpg0KdleW52c93WSVwH8EuCmPnifknKZD6%2FKVTNb1ptLHpGhdKdAJ1PyZw4Eh7%2Bb57lxhd%2FZOgwkNh7k7pMr%2BssFIW5yf4p0Ld%2BP5vBCEMELjPPBUgNfaXx%2Bt1pFyHzb2%2Fke6NIn9QzIVV9O1DH3WSBB9ZuRgczZLe61G%2BSMjUh3ljF8T31ZYWPt2bCgypKWTUVsjyzPXU4XN43qQkN7MCRCSnLo7rWjPT7leIXE3kgTnqCgnK44ca6JYrU1dMWiZzI197O8%2FNZEbUAY8Uq0O4ojMf4pz27lAfBO00g4FsX0lwmEn0bmIvCI7TIkk9qnsvu3mLDDEtdJeyQ4FlEoy4H62RlbIwfe1tCM%2BvBaZsbIsLT2yElAe1C604xVnm3DWbBaniW3eV2gwv%2FE%2BsytBYDRziCr89Am3N9%2B7Z0wEx6RP%2FiWna8BUoU7zjyxtxgwkfv4nZ70DQrY4li3YuH%2FX%2FC9wRjFi9YB7cv%2FBdwUginHB02BfFcMYuzjliIO%2Bik7%2FOcqErGwoB9NRDAniYx88iIiM%2BmwtBor3DQn%2F9TF0CnqAhiIdPcT%2FwABn5c5x8PDGsUL4uZnY61i7pUbYnlZpQ4ykk7bXz3XWKgyqoJApst0wtAdweMKvzwb4GOqUBhg0vr4j10G%2BzwVVUBi97echSSrr3Da60SJjOwAsbisxxLGXMuRR4Cm3koPbKmQRh9fk2Uq4IcpR1nNmwVIJB7%2FaUBgsmVQZr%2BjGa6cve%2FvI%2FInPH49jHMF6T5DWCkHzVXzAqpAYB2svUSM%2BlGJgUVQdMVc5%2FWGhe4RdWv3v3KfY8fkYMb09%2FDLaJjZE2H8D3LPrmrj%2BkhAd55N3QdyINjVdKDE%2BK&X-Amz-Signature=e13ef46da1fbe6a877d1fca942df79278eeb51f5f73bf575da89631b9c3d759b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VOEUDX2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBeEZ41PNFoEjbYttCuo%2FENezOTbe19dOJc7goq%2FSjLmAiEA%2FCHDMdzwUqNoFY0pnj796hBQIRwuVs%2FptpIM1ZUAJ54qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1CtmtzyZRzfqiVECrcA8pNqTMZhhHWpvjyKMoN8mw9%2FDzADJceSwBcFsG0Y21%2FELoFfBRUzqePXs3AaqetkGcMMbOKzR3jt3blSVMXsEyi8%2FT%2FzlcimvtaEc%2FroR2G9nxwgiXVdUGTuRrSKYR2sZ7kxwMISxpqESZXFMIw1iPKELNojXY%2BQ%2FkBl3ZqZGeBSP%2Bew%2FHmcrPSXdXLSqxTmAn0AFtOSIPzPavER72PrN1KPA83dFt%2F0UGTAY%2FcwQCMmzB9mTLVTh54eQWHzKYkcei0NqYr9kvbYgZX9ZzzVUEZH4l0y%2BDYHvxYL%2BYbG3j2PKkqoZN9AyaD4WoKOZfNt81Z1qHp1TlXcyasnREYz87mmgkCW3GhDZ0c2URdeVYKkyDPR%2FhsvVFUb6h%2BGReszDx6kG5l%2F3ZlNMS1HD0qr7nnXqgb435x4pQ%2BuE2vPTG1YAqR1E6YIdkDq1EgLie2R4zgYu8YDCIyi5qGRxuDNWxw85sdu1bv86HceSY9m2WkepJJ3Ip0LA%2B77iRljvCLPSl6bXKkdM8cDZrGU0smASN3%2FuR1x0Szn84NqEyIVTs0fDOJdbpE3ExbS50fHU4GBEnjGPDmZSc5FsgR9cu7eeFi2IbyDeIVc1Hz3F0KhuwZdlFxeyfRoa9v0RKQMOPywb4GOqUB06rgdKPa3iZqQhkc4mALfc2Z8N4S9CnwpqRnokRGHUgpIBBYdy9MdwIbNYJwSBRXWQaO4QA%2BSVAgVWbPHsiFsCjCnsAJRmkSKnqinwLQBTRcKqbMNKb1JPc8pmDmnbEDJYVgTu6WQ52nAxKTLWNY2SlWBVQUvKE98z%2BwefM%2BmJvElYQYXSfv9jnPBeo7tCDlBXVZYaj8GRvnzZC89IMwWI4rG2Db&X-Amz-Signature=8e2de05c7a7c69e4e8633d68c7afb2cc79a1b5127c363e8ee3cbca9b639cff7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

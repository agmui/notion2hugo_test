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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5IIGU3T%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFURfFsNmnjYuVUIcWx44EZ4VnuQdVGWXkxrEk5CiJzCAiBHMI7oValaKOXjLhziRChM0ADYcdOl5b1%2FS7jBgop73Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMANNes4dCXpIgxFnnKtwDulFZ8%2FHh1edmrN2GnjTAizvF5CgFhMuwUq38BXxGcvhdCmq3JrfweIm8oS6j2NgwVVdU0aPpzyK0Qt6JoIv%2FsDnF8zj3VGwBhyLSgYvpshh2h9wsBn5FLyWlpoBgbyUMPxf%2BuiazgdlFgrh%2Fdg9TcA2kbyCJsg80kWNBLrWJiaXyBW1AVE9FUv7c4CPHa91VxkxbPcJzjhq3FGi9kNKPNJHasSZZjJs6MvnpW87SywsOwbpZBh2mDvEHfVXGmru2e87tZ5rpXTLWx7VEWnEQ50MPcuzYFABXsMNQn0bfwN3JXpsCUr9xFM6xtrSL%2FEqsxFrHcOtudITolfibLACjgEUjJvB3NGjBbwUsIYO7063N3X%2Fc8z26l41pAsfWLLbN1a0vdKc9t9rTmo1e17mYPPtAJQ86BfWWn00yN8vDpUDXaC7nMTtclMpJsndYY7loaZ2SIjR7Cmm2eaD%2FWWM%2B5R3xd5ifs%2F9tO2ES7%2BZhjUecJn0hvK7EL0HamQqeU73eHBgnCNGZvi2gR0hgrI1lBjrSDB44jRDWja%2BsgxSgR%2F89y9BBnMDzKSXu1KQnKp2gGl%2FLjvEeWpmMMF5tcpZ%2F7scWyYOGSBhUZe%2BgFt6gsYDf9Gz7lUPVmLFHLfkw%2FqyjwwY6pgE0Z8tGMFLEvsRILbZvvhMljn1NoSts21aS9jv9CReEloQo3hOPA3bIES%2FLj6vFolr%2F5ZVy1Rq35CexrLGbMrcYaTddKEiIFSsbB3ESmD7baoauXSzTkZ%2FVsYhjoN2bMXL7lugXTli1SPbscsUHatToHfzmOOAXmcukLz9nINaz%2FZh509nIDFCvDzAZyyHj3I06n7Y9ReH6HqMMsyWvDLWmb7XCIk1J&X-Amz-Signature=cd4a713e1eca99ba457d15afc3e34b57546902dfdd5b216b1e3fbf8b69083eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXPFT6BS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDwZHvs7KBdO9tzi6TKEgN4xfEcjIlprKbJ38OH8%2F7ZRAIgOSz3b3ZqIjwOqvJzI5Ph6GqXWtmCdt0ipJ9BBIjptHYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBsvg62x1G0svKhHASrcAylRY8l1XOr8vgP%2FucdUSUCwWQCrHwpIJYBo3a6nhBjQ2Gedz8pw1Do8hFcoftoODeBO%2BPqdPOUBpKCEYE74yhxSOfKgfNlFf3IRJOHlcm5AKfhSvxAlU1kvzuljkSMxL0Ye3FopIte8XgArqUzOYV5tdWWJCun7Yv4TEh0AOxL69JJExcOybM4xIkif56GN9mlPZPeaYGSapCC2%2BkM%2F8c8dExmKsowbIWMnq%2FLZ1OX4sF1Qh3%2BIN9e2ZCSTfktEwBCJCP0X9NsZsncnTbljgDFzkkTqPL3g4eWx6U%2BvCJ7CzJaIBmpaNhssQBPSRpRhGK23NIQnEU2W6C8yWgjvIIF9dinJ2ffsNfVKhp%2FeoVkmmO0URBeDa%2BfN7Lijh9EU7YY57tMy1gFsxdrz%2BJWcpcHKTlx%2Bq5eJvq2D8UGFzPn6VofTDzWhv2by13a0cdzuxui3PCESVs7KYAaYLUuEm7qOmoXKSD1vhJqrFsO7bSyah80DiCykaSdLDyHmu8H0nq2wTe20PY%2F9Ob3CVjaRPU6f4zRzeyABitFdNoqbmyuJKfQohnda%2FATWtFGj25Zl%2F79S36RtlI5dSSW%2FnOK3UZL%2FuPnD1KJqsdi3k3%2FGhZ48Nn0b7OytypogzbVrMMWqo8MGOqUB4AqJKJ2JiV7ejOlLriFK77oy0ugT6gMg2qhaFvB%2B7jLf9h1W1Ip7Xj97QqVuNRt%2BXsEWCEMtsFMzUyvHA5tceUCtHt1yYusWfNLcNkj6nHgc0eqrxBesjNjzw0S0xwLDzJ5kQ32qsO%2BEN0EQCmxeRUhNAKMjt4EHHFRETJvyRFcp6f3rrq6rR9reYYydvMUEkP17XDR391Z4ld2p2aHAAWD3q6TN&X-Amz-Signature=208acf1a007038b9d2211983049c895341e602a5edf407cba2b0e9412afd684d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

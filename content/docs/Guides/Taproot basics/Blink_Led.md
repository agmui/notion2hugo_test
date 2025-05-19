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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMUYNJQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASb0uZdK9wyoS6J%2BktOeU%2B3x9ECM8fOurMx6ry0iLthAiEA2%2B8DJkwJvleASLEzckkG1DL2gSGmkzqQQiz8vA%2FHBHEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLC3k49A0yW8DIEZAircAzoQmmkgBaOujSne9Y6s1DUI6fZktFx1qH89xBuiyglUxfuGPCEIAMr0dvYjUpLsr%2FPungu5LMumlY7KuvN7ERPWapmqTsXgzsjHBOYE0b3bQnZYk%2BSUJVpQBvk7wY2Ab9CLpgOcnCblxWyBnx9fDd7OrF1PliBItmgWxIiQr6KNblhJgXy8jyrnFbM3foQVJlsWe67s3ZVWA6wT8ukNjZNUOOOTTutpmohMr2nk%2FCxy2s6DZvPsvwPMezWXQU1yNfZam%2B4sSpaKWrfEXz9jwtHaDuR0oGMaL5VEeHR3qgEabHPvb1TlIwdokffinbH%2BK94bLkq%2BxCM12aaJ6ONgX1IRV1P1%2F7vtePLCvoYw5Idgsot8Fj1fss3zH%2FRakxc%2FfEd4%2B02PS9HKM3%2FQrGCoXkz%2BbdV6AEIGJW%2FKQMcqiGdKDy6Y%2B5QT%2BpyqkrIyMAlHyzN9yeUjYefxQDKblndN5G3bG8loli%2F8XK%2FAWOVgFOVwAs6iFWNkVCekq1%2BgO%2FuJuUs6z60Vm2t%2FCi55Se%2FzFGarAF8RghJP1O9VNqc8h5wShPk6npcav1VzTtYpcbqsTr3wrqIQWOscyN9sTsiHcSzGFoPoLeABg0Z0qU7QLYyYz9VgW3g30uB1Jxx5MOvdqsEGOqUBSAI7zaaw52zAvnifk833P9pcChyj5%2FHyxXOgJbe49D%2FQXIl%2FfFmpY8B5DjBlkMkg3WgtAvbbZH%2FOkXfD0VWJMG1l3hpMozLM%2FW4MjIrztmzmaPJz2b2CBpwxfyKXOm8OBbvlWRVm7gumuK%2FF0T9Bkfj%2BbbyqQ%2FfwtTp7oE%2BCS%2Bdl%2BiCe3nCKuHJuKr5CqJp%2Bfk26sIQvFEq488cU6rMQk4upjudv&X-Amz-Signature=1b4ac421c5fbee38449507a4cfbb88b5dc58fa1f53a3efe528465057cfcc8996&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CJYSBWA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOfte1ZNjVEMCdZek7GYJtP30luNCihg5bpEZ04UYXDAiB75fcLdTcsqLSqkM56Xx4X%2FL71gkHlrCIQpNuqil5TqSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCKbxweaOlx48xsN5KtwD4pNzgJVEgGZg%2FJKVpdMqFP9ept4ikky0YnUvN%2BzjolnS%2BWDHjXqVgMtmpq%2BBGnX1hQoyfEE28R6RWirOHJuPP1v0P1IcHtCVnhf%2Bhv1wNn7zYaNdA3FfwlWhkQcbykD%2Fwfi%2FOTDqPPTRCNFrQhUIRuJ%2BLCYw8BBM7pEJw4eQnbj5I2MgScnG%2BvEOixqXU3jXedYKaVgXIDnt7Ksx6iBqqUbqLg%2FrH%2FhVmvoCrUhSKDfZnbKh9BQ%2FOIyHHc0g3sPhpfzLAeACOZTKaxTjmfh0NTrGScgAUPZavxHddJyRP%2Fq9lbgbLoH76T6YADDCcpibZvTkvoNSjgX%2BMuyrP74A1fChBzByVOqzGxClC9ngZC8%2BCnoAdErivCdYlIZRRjbrGL4HHQhvxDjpCXm8rMUkxPxg3Fsh8ljA2hUF6JzXDzgvcQcLcbSk5AsipMxYoKr8nHGeiyhSlYUNyQITm7OzNHycJDKyXLcuXX5jFkB%2FEXDt5FIPngJQzNP%2Bc1Jk88TWUUSJwS5WhvMRGlXiaKjOhTjqqgtdL8JQyiU6%2BhLLKPKOn8t%2FhVyTLShMXqpd3o3Ab9xYlRK%2BacUlQrDwr8Rwgi3VL0V%2Fo6SCPxooiUFfi5QwRDOWqp%2BSB9Yg6AMwzt2qwQY6pgGW4qThj0UtfQEtafC7DG2tQ99NWTDBN3Gua6ILli2kdjCWwH7PIcGE9lHT3nqhdwr7dTat75DFjbzVyujJIrI%2FPNXARUYz9ILWdYs4nd%2FRoyxR7I%2FdT2erF%2B3vaPtftUtJL6h%2FjKmhBhKTLfND4ucd2xoV3fBfc8Kl5kmcozwGlsj107%2FF7q1L8vsyecgsHzy3kNXyeACoiT%2FyfZd9a2qdWZ8zFMgb&X-Amz-Signature=5617a600710ae2afe81a4f14e009c48c34abb284e35b3676a541746369677bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

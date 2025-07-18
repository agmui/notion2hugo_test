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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVQIZQZH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBR9hOj8%2BGoHDsgMerg731EX13bbXpsPNXXDnociz3s7AiBwvy0gUrcPEhRnVCufy%2FSDJcGx%2BVqGLjNOasUrHbKN7iqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM35fv2pMHuPge%2Fu76KtwDqJiCNaV2wmofakMEYxH27wQl2Hdz8N4fr8XaSgP1duTt9UZAE5H36dlQYHF0xOrwT5JX6S%2FN5n09RNM22do9R9AKagdoVRmapU78xGYCgx9zGzVykQI7LcAKEpiio0y5qf1pxLft4iEsHweB2Xn1yq8%2Fz%2BNbWVUu2VOZ90HoIhQEsk3trT2Xx9iX%2Fe%2FjIXwCFJ48eCRQFJyc5UU1ZC2fKPza7HAGCS9e5YtFsE91KKwxUiyLnUFGl5G8jVwR90h8QZSGyXQDDp5TdnqZcrRtH4w5dCFRUw3raJH2yGQxymzNDbLiIq%2BPXPB9UJb9pw5hNQSDpWNd4bGZXKisqgTfvOOb7E%2FAVpbr8kUGV2KpJ%2BIp95H7bUYwlMBepEDOwSUYYMpXPgtFcg1Frl7jAgv7%2BASH0m18I4ElF0ppxU3%2BrTI1y%2BU59mtXSHNrT52FCiARNVG9QUeyxOKmexKY%2FwJT3WEygAP6PE3tG7XcdPv5wsL82dd1mYIH9%2FT3kbatiU8S0QZrbWBm1i9i63vTkwXlWH095h9WiwdvVXbNSvEqe%2BlY6lX1%2FElqazzz5DhUA6mKaNGp8XI%2BLlTXeMKrMv5su6QFYUqcfVg9bF02AhNgIj%2FkSFD4VjfuuMJrV5gw49%2FmwwY6pgEIgeyCq%2FtMR27%2FZMWu5T2NQ5QGQyK6yKjrIs9ImO7AbdNVkGJ5YT5XXc1gl9AV5BF46uqM5bdpo9SnyB%2F0kG4zzwqoSqTqDZX4yBcJi2AUgREXJyk25AHvf2CJeaCzTjjLKC5J3RMIEf4WanEkEKJY09ls9%2F3pIZyYZWoLZAICc66%2BNpAhHK8Zcvn24z635QeqbfsD2PFboN%2B5uH6PCLlgdOd4dh5f&X-Amz-Signature=0571c69de1999b6c9fc7b53699df65c4c4ce7a4cad9108256c2e79baacf74845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVX7KYFH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA83jPfKMbOgvqAJ2zvC97y3WdY%2Feae4ZMinyzadEFscAiEAtfSDvKNk%2B3JAeC40i4d7mL1D9To3fsMd5VK11qqETNUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7X49BOoS7zxVD8DSrcAxj0dXLVdYly5DOiACdB49FuluBdjgzOxry%2BQRlf%2B6UN5QB9ULHeVUuOAa1YPrNl3B6bfNypfQ%2BZoYnwCJd2986oyrJl4JSCWK48GQF%2FhdngHAdpeVJjPYZW7uq8FI99hfg%2F91UsWTc3zyG7%2BEptEaronqn5zwT88BiKoAfHwSYO%2F0FK857nruZ2ZDZv%2B%2ByT76DKlcJVyi4a19PSHDJoYYTOjGnZ9vTlaj6pXV0v7OuKs%2FhKDXCByMu3qRsz2wrHUHMAu97LabAg6brt0vQaOu0HDl3Gj2PZtd6jjqUwPUiV95CM9QnCEi9uXC7zXejji0ZoPg3RLjzYnAiusxGgrLleb3b4zMiyMQNdayhsxO%2F3y%2FBwZ8jdFeZxqzqAlmYRcMGB9OFx%2Bip6hqGw%2B4BGq5zhoIl%2F%2FUw97j5cI7VRl%2BCW4CSC5u2OenirDMLB3IMJbquR9JzmKjqml7jaldFnBX%2FuvT0Lw0dTpGbSi0TNkNOW9EjrXfnkemDQ02tbPm1GkZnCuqjFG2jCWsx832WJz%2BtT9mUX4%2B9SBlvGRgqBGfMDBmpReWh4bcazS0Xe2%2FdSvd4soJW58BvHLkBlErd2aLpCWfd2B%2FIqlmkWzpuoYX2XXMezOTmsEAh%2F45%2FOMMXg5sMGOqUB6oySy5dqW1jzo0vU174BpgUGhS52BEeAYO9gN%2Fv3jWhB%2BVi%2BnZuRReOoW1M%2FJPhC357wc5JGBl4DpciJ%2Fm2MzVE3lo5tJVx%2FzZORSnpQvCP1fVTBEFF5Vuw7j7BfHQ8ZySXp53q9fdGjwWdIp6t%2BIHLQ8ciVSBWOl2XRsMOMSnq%2F1CyhrVGW5LCgDG2AbE2KND5w25pYqGR9aUrkZWq%2FbYPAZbEt&X-Amz-Signature=3741d941fbe9c5a052139f4599ae0f4476fbc61cbab3937c1b810777678ec586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

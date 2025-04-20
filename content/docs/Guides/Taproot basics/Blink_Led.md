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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMANJA5X%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIHoIm7v15PEhdKR7YTYG07UH0L09z8tEp6nhk8HdNgLhAiAHZnQjXSPaRnTj8%2BvNLloqucDKL8%2BXa6FKoXPWu1fPlCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrv1fGiHdsxY5A%2BpwKtwDnWI%2F%2BQXfKbIOGdrOG4wt2N7%2FsykpCmVbYwExkZVrZH3gttpKKWISHOxPhreDcrWDAVN7YWuQ7sx%2BxN44u%2Bk%2B%2FIYGlsHTG4NhwPn8K4RjapA5Bq15F6aILW49WICdJAK7Bnz3yxFZ1wh6XyjlQyGj9ncI%2BLgbpXH1B5xRFUd66nRHoOZYtHZdN7nbSAtDpnGTguPLvbfk%2Fy0G4DMtiZ7JCpsqA3u2YWPX2RXkBQxsNZewmdUkDcoj%2F%2F9A1DnadkENe78AdKqmQw5ianeMFNkG2D%2FSuvHlZPbt70wYGEyZxR6spcMOF68a0Mo%2FNWmfSnHXo%2FmjmnoNwo264MPPHgJ2e9NCIikWlq4poAN6rAtlCRgpzze2Vcayd%2FVaesLyM3Ljnn1moT6bN69HN6En8uV%2FfLRQbCR4YU1q909KioFqnARaRJvGkR41TJiqruyhTe7kzdutiLRTnbQzm6sldnrhcEZj5%2FLqGMU59iJZ1bWP4E7fRNPsob14wt4lQRndEjgGIdS3pkJcqcsW2h9N5x7mTnHp%2FZIluGbf4L0zfayb1n2TAP6ewzsD5aZZRxWp5Xo7sZGU%2B%2BCiu5NqntRjIAoBE8FHFJlUM3e2KsLKgDmkpqy5PbgcGKHcSoCzoB0ww6ORwAY6pgFXlc5uk5gib%2B1C%2Br2NfcleSPHxkNAxFpXc%2B3xJaPH8rRuMBzZ%2F4WVJTAFfW%2Fi1%2F0LbTV3zvMydotpIwyW16f1AqOQFcrzxTlB53oiFcvMtWHgwQTsInJTMaDs9OdGfLQwj9os6lYdWn7Xvnbvyuqu6IQQBWtbJ%2BQL8LVwsmPwSFQUGzEoQAdNlTMmPuWGtlhwR8JLlGaS2Ga20h4R6ucvWC%2FJN%2Bbr4&X-Amz-Signature=5e96c95b4f2986e30c276e2388fd61c77e8b14dfdb3ac5845d14720c7c5bea4f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4LJ66XV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAiSvFhpMqxYQz2OI0dell3ileZzI%2F63KZDPMJe6eVc1AiEAtA4%2Fc9TZINCrk0OSCAn74Lss6KcVLFfRd43KHxx82o4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtsZe1Eu7q7KB%2FkVyrcAzLJ4ad7ae9vUmP4O5VrtNH1HgejFCLyCKqUFCaXdlpAKgL2d%2BfhczopJvdHbWf4eLXpRpjc%2BBejdqKNVw4YIP1R5axQOZWGtlByeXjhuv4CQmnuYlYpVtHT9KMG7Yc%2BW6bphhY50zhNWLhW4N1ogzrhyp9PmDE7FJ9Iq8alMk9wddi%2B3DwqIzQRJUe0DoXMUfCUUDVs1%2BRlTLUoPo8aLbWMeziY%2BvD59jcsVI1vpYbujDYaz%2BbSJOtjgNn0cjdx3eSc1y8N2yLFPrfQ5Kdu60w%2Fwd%2BbxBacyt7Xa0DEtkGgB%2BLJdV9XaFksIMIFD3sC4AtZUA8ZN9vJteB8yxX4pVvji8ntD22%2F0QPUys4WhayBI4LUDlMs5c02bBkGXbZf4H0Vpd85X1DzqdPihCe80D1i3fFYVXVtqMQd76XHHwFfz3EbiSz%2FBHf997rwWKmMVYZ%2BKbCsQn%2BeIyztQT%2BVJ2gdUywcYg4tzCyXv8eUMuQ%2BdfYaTI7JAwwcbgLFR9xQ52UdUFP%2BygoGwTQuXtV52B8udbvkj5ZdQgSpl4R34bUrlDbKnyVg8CG%2Ft3gDazwYm5ii762UdFB0t536YK%2FaODA8HBwdbiWE8bTbXhjHqQusq9eSYeScfuAC09ZIMOKBkcAGOqUByqqTtdI3MbsN5BG%2Bt87kLXnpYvQL9VpuXif5g%2Fdvjn1xqz025VHrpSj8WsSOKOoOy%2B4%2Fs27FALoX0hKExlQX1a4U6%2Fl%2Fvz%2BN6ThQUycFOAt2ijAAUPnPawFdkAeiP%2F3p0q20%2FXd0bhq3Z%2B39Ys7tSpmzJ%2BjqUSPlEukqkTzbV0VubfMea%2BakaWrDj2nOCEocFfAKW3Aqu%2Ftq0OYB7Vby2riALvUH&X-Amz-Signature=d7ab0cf0a8e7dbf71a028d16fb5d712eca16d9fd800da7f6d900bdeb32b72dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

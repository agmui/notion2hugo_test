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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIHCEUUW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFk2ckp%2FUL%2BlRGAa%2F0jf7dG9OE01gvXDmEv8BBGbknsQIhAN9jPHIKsn6BgyHmLn3Ijzh9EKMqUuVg0plrHsvALPJpKv8DCEsQABoMNjM3NDIzMTgzODA1IgwNMvpGOXJJFoYTcUoq3AMEsxpb2YSwzqi77IbtRBwAu9uzdBcGaJarNzGwC%2BR3Vj7FpwQZ67tdJ7UcAUuoJfULe2pUTNXqwbmVIV%2BG6np%2BbCvyk67Impy841209GoyyDjscyUY2mXhJwcpmnyORc6fX3L3HBs8Mrpbpl2XccgvKIA%2BEsViyTN5XIsPxYk3uiJC3LB3M1DkCJkFyrPOuaCizrwDSkx297EiolJStUOlOu712yT4Jj7DFy%2BmAVlAG0T8TWsjmybuWcCxmIk2%2F1O50ol5l4atJ%2FuiIWQWQTKjASacJw53ofTxnahxuPSovlJWx5YruT%2FHBQkF3Dc%2BLLssCjGmvcPlTbEjIfjyH9%2F%2B3h%2FyP6y%2B7VNeMalJaelK4PbrhMCraAdI24H7615aMm3BpP7TvGZ2QQ2OwVWe9oZNRmKkSO%2BGh0yCRqYAQ0YNsQ%2BW55svvsnnmafWmK%2BRbZFhRcOte90iFoSfhK92BvM%2FXeO71qxHpiitg18CQs3YEZK3lgYJtsh8toncNnY0Mrtak6xRgSNrz9R96tCxjGheurWfBVdY1yU%2FLJJkfQTMVux3uAPxqfbLsBTBNpdBesrbY1yCKiNE%2BWMPkKh%2B2%2FZBUG6h9oJSH7Q3PCK%2FxoHvpTFbAeLiXQTAPaJCkjDlopa%2FBjqkARkiwov0K2QBRu2Wg7Jg668YrmT6jlTH1iEkD1SJERJHGwVKoAwqBkOd6XDJGXui8tTPwvSIH4hAyuZzp%2F3AuQrsLXdKh%2Fa2zxLBndk0VX0D4bjILPKlns6kmFZNmToMWOA7nu9GxNg%2Btrn88RoiM8a%2BJ6qmUS9S7zXRi%2Fcms2OLgSTG7lH2gnbac3xHKplFYOIlx%2BQ5BhisdCvaezr0069nqUH6&X-Amz-Signature=d5f9bc7d238895aa5ba43ba25d32ef3454efc481b007ba24af0be3cc3704f62e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXU5B5AG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlkn%2B4jcNo8Rj5wkD8%2FaMWTVlzdgWxm95vtpLc4Zmt6AiASn8G0qxHesdfRvMagC2Jh%2B4lLt9XWdoWf%2FvkyeBYzeCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMpwkE2Q42%2FIy9D6yZKtwDb2eZYDVAXHRcKeYXmZSUcmfFJd8%2BSBA%2F%2Bav2htVAKcyuBJUDPrdgwTv3%2Fc04%2F2UK9dLu1IzjemXyVbZDOAiuhi5pwTA%2FE4PvAxZYZZUQZsKrnpeA1OUTsPe4vgcNThS0kpk%2FyyqtbvSVeNuJKcccPw9wZJEfQpTAHWv4a5YkDlIJ8ZM7UhPNYvLk8Pfhpx%2BK6QVqZ4HijtDhlXRFpHY7XL%2B%2BNQ9%2BbRekj1d3MnrMzJM%2BbktweH8u5UwZtoQhfozkI64Jzo6a8oVOue00oiG0fFiHHuL9kz1GyMVh3kGRhoRjjwR9OE6j1IK4nJYR7QTz3ee7ad6r%2BHditRNo%2B%2B2Ci115Uoqa2AlTlmAAFOIiF7i56RwdlNFbuRma3MXmvttOrkmv%2BUi1hsax%2Bn3Nm8huZRtBOjaINc81Jc1D2Svy6hMUuXOt9TXaHR6AoFa5DBbeaQpqyIJvHnbSd7qCra9MwYhyjKHaHMtGpa5SR%2FCd%2FdaXu4inj023MiuYvJk%2BY8wul%2FnD78DniAvdzEDcuTac60qZs8hI36%2BBwi1zbY9jROoJl5aqL4jL6h59dBsPr%2FlRFfcugSNEGgtxXo3DE2kqq%2BIrC4uMUsHsX5Uk1Z9p11S1aw4vCoLq3UonoaUwoKOWvwY6pgE3NXaDYZmYkfZU6qxB0vDIzChsvkcwGkOwPtAVGcMiGPnsv44PsYfvIVJNTD7PFlK8aCaSfCAdv9EH3V2i0bSG8OjV0xAhJz0RqnmmCoL0fMvKyG5asBGbFRfEAiibeaIj8YqmvjBitN%2BJZp6MSwtTyUpB2dPbuOYcBLzepoEDUW5%2B8vE1crRl1Tapw%2B%2FOOkA0qqUkqi5%2BFvJiVtQ6Gy0rfW6RnF7p&X-Amz-Signature=aea80d7d57f31bb40792c2d60e7d945f7c10a986f60ee0887b50b90f325ba6ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

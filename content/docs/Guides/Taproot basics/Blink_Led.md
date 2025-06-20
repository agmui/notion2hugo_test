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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GIBB6GF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD2nQ2bm3Eaea9hbc3j5lskadYEj7E2n5CuUOxmZCGlgIhAJvsk2S82Ovqssd%2Bewn%2Fq3QRwgcOfB%2BA2X7VpCh6mvZbKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpQ6J1n2ATEzCYgG0q3APwsN%2F3eZZ8OyjXhW5bjW6t8lSH2y9hxsvAEQcGZ3i1TEzAlm%2BLzUQxxcjutiFv5T7dNFbl9VrjZuuec%2FJ6tvIt%2FtLudIulwdGipqrJ5QX3AJwzFZ5PBvQ52WOXoxOtfKD39j1Iju6l6wnz%2FO%2FsarzjO3fbGRqiart%2FMyiMuPEOWFUTbk4C5QQrvt7GO%2FOq%2FYMkW3xY0Z3xNNKUwzXt%2BhLVseJ9BbHrHzrMItNi7zssJyWZFdzME6QMabzD4QB8fwpSn0hqIZHzNfcvUARx6iutSizo3L3DhlPYxugb1qn5vAbrBcTheQDiRREXukZOCAUJJ6FvvHv2MTJGsWOry8bKtd2zJz2q%2BlU7r32XJ7axPLbVcfgyUPK5o%2F0Eb5lt7hVyYiG2HutoKJNNLIa5RpaiMc6X1YkwYGvxSIebsQLJkNsSbr%2B6t31IdpWtm7pdE32gAURdUqCmldY7OkzZkj9rUpKmk1upqHYPxomN4d8lTUHEtyPWpPn%2F%2FaZqrAl6ZN%2FADHybOGtHmi%2Fva5oFg7Zld6a5onCQyJghIGRZZgPQYsURFFuZPEUDFLfSbSbmDccoVI8HBNNCeWN%2Bmo4yPZQvcyqNWqoLNr9WUYHpRhd61Xt5tWORylkKNV1jTzDtstbCBjqkAR9I0Gv5vnKv%2BGo8ZUDZw5jewLvBP0jk%2B8v8swRXMkZxssFZaKEtx%2FqQozgBJiAgIODoXzjE%2FzPB8WQslqzfmHxCbnDzmzAfzAD7Ckljp61iOkSrRRPR7legr6BGw7pvS1mF2FKBY4W5sDKyz17YAOK6369BAVvULeDHyxhZMdUPvK0uFKY01I11KIMLt4vE6GnuNX%2F41FTHhhHXZFGejiVMmsAs&X-Amz-Signature=e2b78af42d329f7228be3004f409efd1ac9b69265535f27c23c4e59e17096930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNWXDZU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxZBvplBRYKXDl4%2B6JrlUisbewLXlcSOcxF6xum6xJ6AIhAOmApOIYFq2cs2jpbCzTWpCdzUhLupdr9UNevpPn%2FFl%2BKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwlsFZdyVqCHaWUBEq3AMszfYUwSbLp9GhKQiLTgJxy7DcmCvALMQSK190sS%2FyH34E8KS2DVbjTKACJHRYd7Y%2FHDcznN%2B7x5KGJL0yfHasRa8VBguic3f8IwQOeGZNk95Odsow9Uj39IdwKEP9y%2BN7X5PxKyiBIGneFIlUsx67socupP1LNYrqaCA62delwDzTbKe4Y8%2FVVt%2FwugPIHRq%2B4Xy6V%2FzpIJ9P%2Fd9AM9WHk%2BtW8f55K8R7qiBIwxjCoFST1SgG%2Ba9v0NnSap1Aw15PNEC4E1wznVA2WLP6giKJ7Lwf22R20rFw51ucGpP36Xe9xYDDrgrTwDTB8PtrTBrNdogUVfd1vMo9ejEuHK9l%2FCCtqUGVSmm0nFD8yY8MgbJk0i4CMVXHWbwvJ1tmSrY9HdMQW4X6dd1qZtuUF%2BCB6l1pnNK80HNKLcjcfIICf8U06hjFVFevinCHObz0J94dLaajCTq2rNCBK7kRrdI3dhpg2YOUwrDr8VERy6XUo7wb7RNtKubz39suvBW%2BwIF%2FQp7CdRpUtj%2FwNHwCtLLopOXPaSy7tsCJIqIbyCDiS%2ByQ%2BkCz%2BFgoRV4Arx9M%2B1qQ618Vvmu%2FF%2FYUtTXJ37qsM8BC04LLsCNWxpJ7AGzzLbgZ4z1sXD%2BpM2hSeTDOstbCBjqkAala%2FqruqqhBNKAEniqmCM3rKF0WF3LWvVaY8YtVO213FZQ1oTzH3oVHIcX1xCmyqOkqcZY5vEQAQLsmQBc7%2FzGYNbkz1ihcV6f7Bj%2BdqJhwuWg8oiV09OSq6zFGIXK0J3H8MlYfEnGTyVCkGh%2BrrfwAII2Zgx6BVhaJxIb20im2st6R8RdPkjB7MEjkRh819PDLZOd%2BEmOnOIa%2BfgTBjt9EXhrW&X-Amz-Signature=f8405acdd9ad2dc4cca6b10cf89b5426625417f3e49a0eee8d93f8bc29fdf089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

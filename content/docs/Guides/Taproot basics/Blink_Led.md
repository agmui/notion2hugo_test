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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU3RKY3J%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIATsBfiy1LkYjGIgE%2FRG6Y4zCDzrCTVve6VPuYMPW0VCAiAmRLGNmVMobfdAFWXV3hnpvdADEp1ZCn8FF1XuxMwHxSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM32%2Bzhpwdu%2F5kZfYFKtwD2wNyGnGbzMINzwTAUkuRlkZMuowwftROOO5jr4NW8t0oHIoELccfYhN6Nq1W7963LJ3JtYf%2Bb6k09qgJxJnodibNvNLgUbUIg5om3f5FHzGM5lcfIJ8Toalzee0GNpDhSjbaIxLedd824CzGZZpD0cL%2FQq2s31wDKP2TcP9q5G4cIhVDw213pkzizAWr76uv9BFbF3Do0OTe4uuRL4EAXHsAA5zjcBPhSDkhgNp5xCDlNg%2F3qa6lW3tGOW0re%2BAH46haGPL2m5WM9gACHSJmRgEMOojlw8tDExSIumzacymk93OanhuXvZoeuukkT%2FuRO6fs93Q%2FgIy8HT76S4NGJko%2BP%2F5dppnQkY6UCkNfiWzeTUn90P%2B9ha4OhNqcQtDaibVlo2LJ4CAGD49Ifx8cHNqZlkSC6JWvcp%2BFpLNHjopKhnXmhwH2%2FRzs2ZAjxhdaP9NAvswp23WGehuv3qybtH6mYX0MytPfe3ELtr4EsvlDr9ZjfBcS%2BkwUX6FzDc5FKi9nIgvy5tqn00MBoWSc3nmF6vIPkFa%2FJnT8vv0btdoqGgJjPupS7ZBq%2FhhVg513DP5QCbRbnD3jvXCUuRWGpiEsq5yX9AOLYmyjc5JElfPS0NBy7ijIuHomjbgwotSxvgY6pgF7k3D5HxRCpsmSCg4UnNM7pkPw0VMZ3ruzb3j7dw3wBkj0XxdaYSkv%2F9YAsPx1iZNtufD7XmXsBHrA95tWq0HCt57x%2FYiOUxS%2B4e%2FZkXSKhzg9lp7yc9Bp%2BanrXOvQT1LdklPcovTLX2ZmVObi6RusVpJ%2B%2F%2FQWJ2ZcVPZB3apa4BF1p6m8RJNsVXyYLWvOu%2FBz3DezV%2BRMxYCcdhxzLMDLNWi6KOJ4&X-Amz-Signature=2d5aada280f25be8b17a48d727f7d424bb80108161291a95e8016a9e1cd633a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVPBLBJN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCuIFRl6jTzZbmgOxJjkTPoePZIZxosquW46vH64dZLRwIhAMOecAuHeJdPpv77U%2BY3maxHQvD1dKJQDb1DXZA2eSaVKv8DCGEQABoMNjM3NDIzMTgzODA1IgzpqUiw%2Bvi13qOeGsEq3AMKJJ8GAt7H%2F%2FvjXNYtqfsYENRLDp5%2F%2BBixyb%2FM8j71oFmIDpkNio6rfKGC8HzKAFJAf5yuMuVY84QQL4e48FoV%2Bx2pJqfERWDC0fBMjj1Qos3gLomUQ4wXoueClNcmR1md1IG6hbKdBzCHOilYxMkP1wNlyf0pBPfQt%2BVtMu%2FQhA5MPybXYaoij4%2BDLeYNAQ2Rpjkg%2FkKa3Mn%2FHWi2JGtVupxnZolN7MPr6jjvreSxk2Jc3vUay8s8Gm%2BhyxEIlVHS0zIQWWTMElG4Cf5EsjMSC%2Fm6UBpniLxWrcByebMzwqZ9L%2FbipbVVHfEWY3fDuuWPXgO65VFyDf5EgHZmPhUo0PL%2FqQkpmAXlQ6GLY8eZ%2BJTn%2BAiHdGCwjiTj1AmQscIqKE7UUz%2BaW252Edw2PJ9ZfUKfkzPTf8HQSmgkGnyfKu2fr6p2qwS5d8PYR5KK0nA4X98FQHU1mJQpgBwCwZEBBW7XsK3jzmUTGf8%2BBGmcR6qMHRIWSurJTc%2F9uojME%2FTqYPDeR9MhWNHxE5bbwLHAthxYc6g3Olk2vXJsJETL7p%2Fx9uT%2FkhXJ%2BG%2Bmuo6cw2cCDg2rw1auibqkcocFByx00gcW6aRrNQ4XHa3H9YHI%2BlLaTeqyn0fAXwdz5TDc1LG%2BBjqkAT4uGDUkcxaF38HISXickrQXVep9coaRES9vFzlI6VskbfTBtGVRnL87mf3EVvkHEWly2NLSkJ97mq62q6XohERJ87OPUNUhG5n1ZmLGvwr%2F0HkWNYVK1aHxyw%2FCYpu6b0YQGORJZnrZ5X%2FcfVEjwSjPYKZaZaeal0NxaqQc2t41ZuiE%2BIrpsTFn7rUj%2FkJLTEbtNVxadW%2FpDWcmoHromPywBjKs&X-Amz-Signature=9ec886bfe0d5c4ecbfe54bbd29fc40e16316bc1049793f3d941f71c1264dafdb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

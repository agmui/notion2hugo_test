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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWGW3Q4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FA78LWVe7PWebrm3chpYJ0tFLkucYvpbokNTGBPXaJAiBOZN3J9I5ighesF5etkx0no1a3W0wjosCFNzQcXOixRCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ8sUcLSGcJY%2ByT8%2FKtwDR7JfUZ9XaOpvRNB3hm23ghdCpOT4mNnpQtYgZTtIYSTIaOVZm4DGv7jtngKk2PXEEDgQ%2FC8mJDxToBI3slf%2BkFKQbx5xXCsZSwKBJQacq0gr9J6xrF6vB3J2N64PUrB5xXfFK92gqLA4Vdx%2BT0gLcembZxIPozxS7yAXVY5SpqHxA52eQbXJNmV6UPnO1On2fCkLe3PEv8amolffZt0ifaV%2FebUswBgIAyaDNfSMelA0qCirczuUgFsuhlEAwW7xzpqQVHiANpJlIhj1o%2FQs%2Bc9ccOKcl6NytrXGSow61YygiEzZDhctWNJe36A%2Fb2%2FTnALjboeZ1p5Q2z1acaNN%2Bx3bSgPwAhmESiBS9AAmf9mezlfixpL4Zw8gf9O%2F0cnhp1oGLos%2Fe3afSHtexz4lvOjVxR0aNxHcxCwsVWSfDPeOtLtesvutNbrpWaCDLKUs76Dpqk0ULBG3%2BPxgJJqki13QIKkL7V92l0bDRCtqtBiWeMW7xxGJtBpP0pZxbxPjUcOAaxU1R9ll5qtF6vcD4UL3abk2PEsPjaxK0l%2BabP336O1pUL26eYfEx1Tda1C2%2BUet5iQMHKZXv%2B7X1M9OQqBIKwJKZLia1xtSZ3%2BkociSzPAg4WhbBMNljT0wjZHzvAY6pgFJj2bsCNo5Fslx3Oq1xl%2BbA3qRu4KNhHunHe%2FXHkZ9YoOPYhaLdFPUjogKBwS7Alek2mtrX3haVsDl%2FYHaOy8WdcAPvPGD9CFmCcCraXfDYeZ7rlgaeHzyxqUiRngwupG9OtP%2FBPbmavdKs822tDp4o9KXcxRN2H2dVViiis4H%2BaNIAJnaFTkWGFXD%2BR6AA7CxrS9nSI1gH2xiGa6tTsJU%2Br%2FQsi1N&X-Amz-Signature=e85d93f9b5ed2003eca6ac79d0eb8c9940a3c52671506c1da064d05cb883104e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWM47BS7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ5fBrmayq1NcMpRU%2FaWtR0DiTKVOZeiOLaKYXFIp3YAiA%2Bb%2BcQjk1oddXSw9ptk%2B8HSShr2BECNP%2FLyHiZ9RoaWSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZb%2B7qx2E3%2FecIZjPKtwDpV3H3uO5fVOY%2BtfHFlXynB7CRT9GSQZ9jrmfpgzYAs69N7fBkX8bYTbbojTpkwZsL6bJEJdYHv03kjiX26UByttJGBT1cptxMVf7v2vRW9Me5R74vdBfp9axZ4%2B4%2FANdZ%2FtCOaKUJaCVIwDtcrlBjHKpOX4YzM9nDqFB824bognskdXSH%2FZPKY1njWdaqxldRRmuoj3%2FhXKwdVER%2FY2KBd83h%2FPUc%2BPs8PY%2FzfTCny%2BWQeh%2FbXysDjsMDvWyqbs5TnXH33AhXUPf8R6899B9heHISgUHLwvHazXP7v1dGvYNLAMXABEKJ54ZDrRAw%2FdOiSs6wufgNa3GpXuUL8Z0sfrbTDiExA0hRxg3OZUEv3tiMIPXxo9pwg85wThx9yEsNlwCszECMCIYv8INy%2BVwdSIbYYf2xge39%2F3ECowFLnznDR3CBcKVEL7gRakRpnPh8ttNJom%2Fv%2FYTX95g5eOmze0zNyLWCPDEgTTGvQnG3ENgrXGP9wdkq4Z4zwE1zhvogyVTRaSA3J9Sqwybp99KtYdraTtAX0RTDN1WVQwFmjhJwsUPR1YgslHS5t2Zc%2B01o5azzLFNP0KXBnWmVmXqElLRtu%2BDj3cm%2BfMM9VSDDqJmyTqptY2ojquRRoowvpHzvAY6pgET48hUr4oTRXTcITM7dMuOELyQDc6bYT46ASfJcQl6qXG5ZjlaDjvvYprNXTe2RBq28kdCyYI%2FSTU7mnEF%2BgYVfpxL%2FlwYtqh9s0dV6KWuSTkrB55UZ5%2Fgk6in6fKnsAX923gx5SXqyz3qtG1La0tWZpFpwNPQtLnv1MkbMaqGRuTOV8KiG5%2Frly0l9XqXMr4h9xDbQChIi0Q5aaQVSFu4nLN134EW&X-Amz-Signature=785d320ee665268b8c7e9f126e9f4fdf2cd5fb96f0ab3d3c459cddd05c0dd041&X-Amz-SignedHeaders=host&x-id=GetObject)

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

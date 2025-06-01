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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VAK6WY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC%2BJE43jqpgWud8NbStYipIcuA9fGD5%2FT2uoECU3Io7lQIhAPxOl8MVRcYG3SOi6bJ0%2BJ4rTO6NRRu5%2FNcS5PIp%2BxdVKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjM1HnszIySGu3Id0q3APIX%2FPVmuUSFXp7OXQkxu6NNtBfDWrd8XdHh85GuXr%2BuZltc2R7hv%2BZi2NfQb7uCN71OPEXQtw32dpQrhebRMLnqqsHIY3gB2nVE6SyeaQDxpF8uiO6VWVD07Ek%2F5e5xTpqfvX1EdBZEUen0anUFd454DoiN7TYHM8Hqbq8qsvVN8nyqRKxMqY0gLl1yFVxQ%2FwuwFma9NpnZkBCTkofYC5S8Fe%2B26wSvLMk825D0G%2BfmQYVqI2S6Z0pYAIAlqk%2BX28v5Od6wgXeg26zAN0C1nPbMvYBhr5esGUuIOQXYeHLXKGJqTio2dE5bZnxpZewlvNhdAHAz7bGiu2rFVOJH%2BG3NPjdAfFD12psO14osLKrHTzb9PpdyXHqv24ilI%2BU%2BEA10U0jL9Ci9HQfJpzzcRvtTxK1O5HrkDrzc72N5ng1Dvr%2Fbs0CnyNmwvlDjzJyKuqV%2BA7%2FemntFeaoc9PQ1IkHrJ7ho%2FwoxtAYFjFl6ghN2MQ8NEXWWwJO0Xt5S%2FT5zgmo1rD%2FKuDC6Zf4JlugTMLhfGYZsnqwUhdL0%2Bnmmm%2Fa8sh%2BBQzFpaBeFVX%2B2vmLIAIxrQj4%2Bo40e%2BKP3uc3d%2Bc9ijZ4FmW650Fhd67Wqqegr2MDOF2m9%2FFN0KjNSTDWgPPBBjqkATpB1YMT1dj5u0UqxytGKO35uhNA95TqjywNa08eD02C9aEe8EThrBbZEifOqJWYdY85rfjGg4CXT6555aoZKb8GdG8tcMqOA%2F818aQpZu7CQvjfJ8z8Oe1Ml%2B7VHSlqmSuIxd23UElj3iPsAJpULsvmnyN8BqE%2BQlRb9WcsXhU%2FMxYAqqOmyFrAsMKMOuvX683d0Mrv8ZrxKjnIhFVEazAiIhdG&X-Amz-Signature=67fa783b713b9eef78ce38551f3a4153a768d80d3c817e4cb1d4929a28a1a395&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGGDAKXW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDNqFhVgdOblYVIs7sXt%2FY9M3vmInecfIwgu7lbgowPmgIgHTIy%2FbFYIiN2%2FY36kczJsrxRHe8OwgNPI%2B3%2FV0t3i40qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BkHbmpQth9q4yMbircA%2FiNd9DmN5FO0atlQBIc6RmDOs2wNoXcUdkNnuyE02yy06%2BPDvDjp84hCM3PyQfLKGYiCbOQ%2BSE%2BKObc72xakz1c9D8GnBaM1%2FHBDXtNQdkR1xolofH%2B71ABgMtbilnBzkJW%2Byj62CVg%2BfGsYXCoQvTr6R1TKuRp%2B2BEjgvmQUZlzNavtHOsJ6eDBSIsC3vdPKLmh6Mg5Ebi9RGSxbgho64mNpb1XpQqVc2vq5%2FAUr%2FRljTCM1j6pJm%2FJvcYSJnaGRI6kUZHRIjXcCA%2Fpqp%2FJiW8nmZ1UNUA6h5BK4k2vDKbQNSo5Rzzw2VrLN%2BBIhDWzleExVpXutgvtiLIVG9nP0VjSquKeB2qdfNV1uhqXwoMbrL%2FnO5MCAsnsONafQ9AnRBu%2FkjZTIdSIgQ76N7FFD4N%2F99feuUL1SZgw84Dy6%2BGiAmi8JKEDBoxo7dY0vEIHOeRrZHMA3O9K%2BpIfsegFSUMh75icJcRF1ik1S1sxBg8oDCKvkKEGJASl55MX2rt4mGVARobF5LxqrEIVdWNqLkIIDge0ux3s9cmLvU6WAWelxMFZrwoqWBTdp0SZaNiXhE6LhQY9Y6i%2BPGqPLhUkEmdpf2IBQNw5ZqRGD3EQ6zyf%2B9NUygtKFCJsXbJMKyA88EGOqUBuXQCZ1x9oMdHOnwsCKX1eyCtumX8RAXuVgfa9VfzgEDXCyhMzRrvMUVn%2FJZkNUbVdgP%2BdyLLtCDH%2BLbJkfxwcg7Y6N4gg%2BlOfSb6mpyZRG6nwywi%2FVi8%2FAQrOBmCQ%2BBoPtkKYJM8vzOxNXwPYDJ8vp6btcZ7RzE%2BEH8MBUHEuAfsmlSRaPAZswqIzxow37wT0%2FQjPkRyqWC1psJkQNeX1gfDobNw&X-Amz-Signature=42a3f74e7aee1d5c2d13a4ee419d0c9c5bbefe2d2fedce39864b4d6cf14a09df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

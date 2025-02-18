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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VUSCMX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIE83%2FKDxxoGeuOyhdF%2FIsQ3zrmTVu54aBXvkgL6TP5niAiEAigJGBx%2FQRfGr0ahrZ%2FjSD02Pm9yhMV4P4nGrBM1RLZQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMzPKeKB3L7UGrfsCrcAyhwKjxQ1P%2BPdkykuDW7pFCUHazPOur9pKFW9kWbKHZpwbQDlabZKofgQiUKCDYjrM59Wi2asZk5NlCRHWtNSXB4091OI50Z8YyFNc1X%2FZfIF3J7eSt43nlhRV4FLmiyIt4N8t1uDWJWIrEsACNjmWLSZjc0e89rzIYmSqBSILWlTklUmiJ8hZUdDH5yHc5vIySl3QwApnhL%2Fe7vLb6qbySD9ogXwKnan3udG8mwZVXj3QiKWnwTVSrnuwl0e%2Bh1789mIc%2B0hjC1zccMjgQiEQUMmYuxRUPT8URDWKBAHnmyX6YKXybpP9odmI%2BO7lj6VAirh%2FuBp1zC%2BLpCqkXa2oabuunaySaTsUB7%2Ba6AaRVctioBMDR0M%2B0hz1NiOj5qBXhTGYUf9G3my1DMreiInHX8PPmlY0i1JrhHNojr6nzAGdhbfuZPmI2EbdvRANxyk19cCROOA7CIAI8Eqg7K6ou1pOtOIzjzQdjysZ7BRgaZld9MDRKWxiLPLfWUqqKlmXL2z2oJnOvfDf8lIAEhymwLHD3SHt3KtjYvCqhhoXhGWzc845dgJu8I2a0eAtT5WCs2%2FbK1aUdn2rlnOmmlJuqXD3qEWymU%2FbsGiGLNXX7j6oQ5hnCGv99VNXdbMJynz70GOqUBACnhhhMHSakhDDkSS9RGj1YPtBMTME6iBiwr59ZBWa9cmdZWh8U9CFElrHf197fM4yH56Avd5YUS4JQ3Zdze77lCJt09%2FsrUBT1sDS1BW6Y5h5%2Bvbf1q6CgOCXMuUgebtIBQDriw5Eis1yGOuC%2Bzjs%2Bb%2Ftc9hk4fKV11PDB2HqOO%2B5NPubFIvQYUBGFsIBwZhgaCo8QbAszsQUVgzrEnLZk1Nf1B&X-Amz-Signature=16f719046758cc592364660a5398a26a9a6da25b50a18086e540ee384b0dbe02&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKMHBYW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEwe%2BZLU1mtmtgm8SQ9To%2BOugF859cULWlZ71rN4Nix7AiEA6AZO23aofSz728XMO62ahNaNeZgfnTZ21Qxy%2B66oeRgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFL8%2FD06%2FTaEK%2BNYEyrcA0lQXOystfAovaHJFEj8TnW6B80qafVv5Uln20oKWrLhCFZUR1umkuX0s4oROUNkv04KMfytmiegB20E3NZPLIiGLcZaNDvdKI%2BoaVMdPk2eTQ6YKF7uNrh0DYY%2BAsNY0B37d8vDziTLPtjLNb32u%2BNQg2Kcdfda9S7pPi9onY%2BdnQnR2pZ0Bc8RjjBAVbG2RzMKnNS6yRdhLiioN%2Bh%2BjTbszf4Nt5pH9TlxiR%2Brp%2B55Lm6Dwstn7hKfjEvSezpJclz6ID%2B%2FrFq9AwB9QHPulY39eY2RMiyM2DoPwnegGMZOe8oBUQJUoGkny3L9ZUeggX%2B3vipbpYXfrl8dKUfnEyUZQWAqfNfLEttia%2Bvwpik6dUxOEZ1LDaYCEi1oCOCzrknU0GyW9ZQVRnAc33Mzn7GLcHU036iw%2Fw8IA2by1MjKEuxRCME3DROpdVZDnlq3feW6oCsuQ8tauf8aJvt12s1E5or%2ByIiTC1jgN2Aw8d2TzHQdbfSlzffFhUcIxOv2i%2FRzZAi8NwH35JHDNWL%2F2HcemqxM4D3Tulj3tsbZXmXDKq%2FlmnYlrmzUPyhjdDBWek0oCL3tZwaxh2A9jwJoM%2BP6I5K1C%2BOwBZykhnbf%2BKa%2BRYIw0DcnGncJB2rHMKKmz70GOqUB3Skl%2FSZOyWAp3zwvmrxY54YpOcN1YnAmAkzCmJ6XOSsIrycB1fNG0cIa9M4emlyqYyZK8M5Kw2YhRzQbkGiLW79%2FbIFrJWCuLgmn8gYnJlNJn9IVWaLYfpByokKVB8gD09SViNigNq3oOrJAt41kmeIwey9zGrvvldYYDPhNke85FusoV%2BIKRy7B027nkyh4fEZ2acP1%2BwkVNe8lX0DMEF60JKyq&X-Amz-Signature=1f725d1e690de3044ae4105442a0699190769fcc3edc18bb58661cc61a7553aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

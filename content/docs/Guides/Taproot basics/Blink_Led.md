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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZKL4ZSS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDDlbndFPkFzIlX2Vqb3jPFnvkVx9Z1IJjaY4GURIthlQIgUZ8Qea9zecp0vlxg99aEvAhjMAOY7zGlSkmPYvgr5UYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBMHvCuxPJ7YpcqbyrcAwbwDspeIjTkXK5ftkhBgIJ3ApvPTt1PKhtkaX6sqkkIkWMnELANazcqzlU%2BfT%2B3BRLEvGLwIJw3Oi0tlD9L7FGMi8bxBW1VNj88lkT0ZyBueEQJBdCEzcAMIOPpP1KrJdOfRf7TL5DoXAaquNQmN0ev2UH4vWjXYiHNJOyEJ6cDof%2F7w8noZ00kmZah%2F2NLdv7gyoBGyhxfT30TVgQst%2F4Z3TJ1nV9glTf0d65MJ5qehE9k9rkaaMmgWiCLgVBKdchQbWHiNhLeekh3A1n0xhQ0jsb0E5yG3xCCnKTofacazfkMc%2BoqHjZSY3aBAMKssk5pFXieFHMEZIg39lE4vTPxNks3P20dP9pifeQGZxnv3WFYv3ntKGZsibOYyAEekJB5%2FHw7rkWkxXawMc48dWLUGpBxE266OjZ%2BOvSGT%2FanKmicVNCJCp9m7ZANfn4w2gi52gMfsAPrGnTOrIPz6%2FrQ6tl1pbZoqqcf1RZd7oT1Rrj5PERkypFZdnQYCv5hhVT1bnruCjQ2055bHQmcrlgR1c4eKcaUXQ%2B9lymXPj8p60XUMmcIDVzC%2Fhet3%2BYjMZv7LlB8MS3paGUcVW8A6eL4OsMPQNRvEmzVI634TZWB5jYnwYTX1uONQQk8MJLY%2FL4GOqUB2USCjXXwMVJO%2F6oRxVGtzF483BukNuAbWcUOLk7DV1cgR%2BUlX1kKw6aalcU2HKbRoWbZ4UjEIqx4zyBPCKxzaiVHXAQvX9LmZpr2pvB9dFsOdeFbU6wuBS8RHOdq0kNvjOX%2FjbzUj63JBNKVvPsTnKUCsAYUHtvxlWRrXzn8Zs8aEdD5y6w3Wr0sV%2BrKClEKeVp1vTlJB4RXE%2FZFOcVZj%2B4P7LZv&X-Amz-Signature=50d281474cd4db35517abd5fdac913960897dd20404f6e4d68b90ab6c91f91c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466676Z4XLU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICFubMKIRkeADV2WNZCxA8y2Au0uVCyylZ%2BAdXoOsz5ZAiEAy5SkZHohz4Uk6Heuz%2F2taqZVXS5S1f2t66VqcczDVFkqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnTBesFy3uJlrjR7yrcAxLPjtJ19KPVymamsg3hxThJwexj9p%2FaPur62iLeJQgyMD3%2B93VyR90fMiXlBlNavmSMEvHPgVBFg4Odf01SXrZn%2FjxhsEqx9vEvNIZRJNuV6eVcFWfHu7CtrJoThZStPUfqNa5j81iTKw0K47DYhuv0SBpJVgMMUXIj2bBvOwWQFNDkYox0ecQSYiNz7bBda%2BnUOAqk7tzsZsARIj2xGjHdYNRL6tvBv26G9oYzUxrBLWpsQFFkl40gLgX%2BOJ%2FSQYmK%2B5EGvxsecL5%2FajHg897Dzh6jZ3X0zRrlXeVkjJ8%2B9%2BTPpGxzvVhfn1kMfIVx%2FK8MCT3yBSvcsF7n1U0d7bV4MYxR8oyU5fFBLPVZEN5Whz7MsLDwvhxIQViHU39HfwYFRh5uBiYGe5%2FaRHoRhc4P98QuZjDdSCtU7uyx5CJqMsRObjCdU9%2B3sLN7eRFZRNgZDWi5hpCokI%2FQ9k58ahRfMUlYfvvykt24qfwojQGfiqu82xAEnI%2FXaP%2Fq3%2F%2FsXT2H%2FhL2L9GDibgroJ6Hz7My0Rkjma5VLfgqEJ0V7cfWuXbdOvOtmkAYL7J5e1xQ9vXV92aUCGljv6h6WIK%2BGRbvXOJ79QN%2F8gt2ncBiBubzfwPDbfZicQCRTV6uMIO2%2FL4GOqUBd64lU6Fkb7pqX9pNdCTFHrP92mDPuszOKKj4vJ6Lx379NXmr0cJ8e%2BthrHvhi9nPwvKytU4iA75Of9Au6SXhMv%2BusMjCb7YPszC8IOdn%2BmqcEzcn05kCNfUrfu6pGEicCTly8cPN%2B2XLAucQ6iYooVmgQ9IcSir0TyN2Zo4uoAdv2J4oa5D7ye2Rt1n1dVLcT6e3pJ44%2BY4WHoBvyhwI4ey1OoyR&X-Amz-Signature=34fb3a81312829ba8b1fa5ee7962599729b0fd38ca5dfa4dd3d0b2e17c7b98b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

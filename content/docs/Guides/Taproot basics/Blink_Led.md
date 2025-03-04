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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJVAQ5IK%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHW56InFGtrSc3Hqa5wwb9gxB%2FqbQJvyuLCrlcu9S9owIhANpCcvQ06DlmYn2u2k2oOi%2BhL36a5CNwfohd6RL0BjhTKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVQMMYn4AAyKyoYR4q3AN3QVlBuOX2iCgMPVFeYXyNEqwAEbolZlQLLfnTQ2b6lDeo6jBoniqfuTI7QMCKSIPnbRVrsscJqUkuhwSCy6s5cygCiclVAUEIcwP1hCXDlO96aQAnuwfk1XUeoumrnGLBnopQNC9KP%2B4RhsEfmVVhHBjAQagt41J6HCm7RAzpfo3zDHlZYkb8VxvIdsTwWkjECOpnU92NwoTtf3%2FyJqBV6IeUcWpqD7OAH5q5oV7nWZn0ib%2FfFlDG0I8qiUey1oXGoMHixkPtXkQruKnuQxkI0OWV9pp8uczqMc%2FDawjXR3EMiFLvAFcjfl4pze1Ook%2BV8mQNSsJvsQsZsEKpqWsMPcjLaLuAC37iAkw6VHwZ47x%2FEPFkGiUK5n8VcwoMd6WKAJWvrzCz5gk3ukWhNVNsaQTe9gYMkefi0CGdh5eTN7DjgYSh9NnRyNxlRdGDPH8yTRKg3A6aTI0aSNm%2FO3ssJF5F6SpLukUTBty3v%2FVBaHM5PW9BtVelDSBYvPb8UybfBfhsJJQU%2F70s5Wk6WzZXkGpsZDDEvbSkbSopTn1pB0%2FjQmhQOb7yMWo%2FJvjkWkVKvqve7iM3A1Dp7oo6ainAjk86YfyCtVWARNReWBFHLggcCuFkmQQe8QXHLjDt%2BJi%2BBjqkAVxKU5oja1B%2BxlyFuXuPQ3T%2BSnTW5dbN1p7wt%2BAD7wnpM791yjebCaSqNQUslkOODBds2VAMcqKFJtrWrVqCONxq3d79YZi14E6PxGQSWlu6p1N6Q83%2FvLsr1qS6zinBelgbPWW4yv%2FSwjkDjs%2FfGetjGj8TFxdN67axWS1jbPMs5E7%2BjnGATn0PdYX3HZCBj%2BzwCHPjrz2jluEBYhXhIqcZ2DtB&X-Amz-Signature=705b66426a59f7601f728f90896bd91a08d7bfc37b5bc27da260484bdbd334c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TNFITL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEqzJzZx0M87Y64qpeBPGwxWCym7Shr45W5Mu7pee9TAiEA6yKEvAxQSU5sUT%2FIrrqpTwdv2wAiOnYfEjQVA3CE8gMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPFBnRPIz7UMXmCzSrcA87qSALiQEYz8XWZ1kPSO2bTqKoP7UwiVYO6KM4nONQYoPjNOEkYbJK9znSuHwsKkDUibbLCHzpE%2F5LJgmlr4HzwMc%2FjJtCMrIOlrPsOfcaeWKCR3zC4eDRXI%2Ff4FBfHBndEKvZ0LI4IAZaLw%2F1tF%2FIhrScs351n%2B9KQjaGEnBWcBIcT7%2BVIS%2Fs6QFl3jyLeWR4uR3DjvppgxlBxqEOt1jbsqZkJUiJyaKzIOH6e%2BRPmoHU%2FTl8zEO4oegG7kN3YU9cxKIrfdcsf%2BIsN6adQxNZzcVF0pFa8Y0NXWbuCjzu%2FUnZGT4c6pdbImX9KOS9BqKWDzTxjrBTn9SEbGqAoCxtQVLCuiXd45mUtSU31zCwuJDajv5E%2FH%2B%2FwCnrwrcF1ggiKhQCWeFoM6iVRWEk42t58S2cI4IjM0vpUupJ3O3DKYZAi5l6RTE3ojrkrn42TmNO1PBxnmLyQKh8Rb5UoTMu0m88TDj9ZyYHDN3S49JHGMehSEImE5PKVgxJgrtXLIb6WtEB2GGrMqs0ztUKyqiFaJt76OIk5kozw5E8O7XKjUbnugfNMuIsByr7rBLt%2BIrz2janXgIwdWWXWPz9c59f%2FiJG%2F3x813jC%2BtImq%2Fv%2BsV2H7BJfHFwVX9mS3MJf4mL4GOqUB4ULlt1PghEOH9ahfzfJLl5lDQl59cU%2FkQ7RNY%2FqshaSwaknEKSm74GLaEW04To1p1RJTMhZDXY5axWuuRDwUATWcJS4ZYm7iL3g2g3RXgQEkxgcRwQL3byojsevNekojPgXjnROk8P5ZGfyfb5ozDH2FgXNoL8eWMPlovs%2B9gVBfo9scywJLwktqtlOOZ9R5G3APLNmpmiXtwYs%2B0i2GtpxNaIX8&X-Amz-Signature=8ceefe135cb38e2252dd79a62b7775c91fa6e313561bda97d75734ad421605cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

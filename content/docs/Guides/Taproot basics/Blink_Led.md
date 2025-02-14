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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673XNOFNT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIB9itKMJM3MBGTwZA%2FXs9HyKJKIwwd%2F0hQb46wFTW%2FThAiEAkHaZWkup6ym5iKIBXz%2BYeRSNTc4YOu9JQPLkSHns6UIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOhKtPlGb2vOXaLnASrcA4d66LfKjYkS6s%2FtzBeo2HqUqlH3y2fN2tIcZndmJFuOMaYFermrKSNaB81pJ9aasmB%2BwL06y6Ypa7KZI2UE8EiNK5iURrUhksvkDL9PcqbopKsC0GWy%2BsCNLvf%2FXm51%2F6KbC7OoTcXemtWVK%2FeljRdksOacDq2t%2FoNIuI%2Fahmeqf%2Fz8Vjg%2BWmoE%2FbDiDSfpNVFn5qrbZUBd2o73Sz2I1znQUZ3cEn%2BXN0%2F5T6pyaVLdBh4f7IHlLAB6du3NT94chOUvIiNJ1unxbe02k4iQz03AhW1oDBSO70wOedBMrPHqIywTukECp736PntrfMtf1us7zLjVvZbPnfKUvkVkMVQLl0P7YVvN5mjCZSo7JlM4W8mlb9awsNluw5gsXmHq5kHN%2BU4LFOMnqApZtqoGUr4lA8yb5oUtkqPCaPsBrB%2Bw4PMvt%2BIl2isBekIqmK7GKPRvgtvJjINbnPxM%2FztMf2MiqWP%2B2CTDvWFuBIANwDVhij49pHR%2FbzKam4pI5%2BAyh6S%2FC%2BuzDkQdKhP9JMgPKm%2Fq1TyDV7m7YXhajeuLs22YJyjkkFsyVzOwElJlaT5zAZ0%2FwgLVorCl6Oo1Ic5Ly7rf2fHhAZWBo26a4U1V9puL64z97r%2B0NgF01m6RMIPqvL0GOqUBhjwDp5c%2B6yxasA3mL9st2ahkjTb3n3UBAnborfry2m8bBU%2FuiDYKQpMhq64fRnMNIGqg3g7%2Fvg8W8dYCytZx7kXa7MQg8C3z%2FIJIwtNrn%2FWMcG7MUd9zqfM8aqRgeq10RMYecjC1RrRFsaqW%2B9fIEJJkCyj0gWbvV4miBVw8Kx4jaxn0A%2Fc9Yw%2BkxZCEwx%2BOn0GdzO%2Bl3aPGafjhQIOj%2F9nB3CSa&X-Amz-Signature=51ce5b296e985065b88df2f15e885d89d72b1225b49a5bb81d0bacccc190ed5a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466477L6DGR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCRpAIBiwneKuhqrQHWdulaNiGQaJ9qIjMdru9h93r5zgIhAL5Ud9jAQ77OfL8NIfi9MqjULtjpZP1%2BHEr2EKgEywffKv8DCC0QABoMNjM3NDIzMTgzODA1IgyTTeNwABpZCTl5Racq3ANOhlUUJ7grjd2bLQdzjawz9RSsNNyE2AJ36g3VMnpJIwp%2BwzF9YjS3Ni1b3Tk9gzNq05TYOiko8pdCKHT76fkmSThmpKRNbJ1qP4Dj5H58nhC3T%2FnmeEmuyAb9jOwVQzUQAvvk%2F7kI3GHEB9R7atCT7efZVMPrsGKKH4p22A3dep1661TxgbnkxmFYL7vCKWRu3EDFKcGBLWCS4YIarRRVKSCypghjOZIR885oEh8AW0e9ZvK1Cr90Kt6L8cBMJaGkS1s9XZH021cqzpu5gLTO%2Fb3%2FAb5LByOivPZ91UVEpml7iVL%2BA%2B2KxjV%2B5zlAFM6GBtrGk8RGywwItyLQbr4I5o0850nYqatE4fGqS%2BmHZ88k4R8dedSOgwRammEt2f7NtGme7J3wooPobasHURFoWkNSvSboP0WPgoLJULi6mm%2BsGhIZb3EplM3gY9iyJEnylTY370507KyxKYJfzSkGy1mV%2FUl7ZEG68I%2BVTFU%2FamvDSI3KMKbdRM21FzBsCMizy5QxlXLaq7LEV4ZO1RXXiptUjyNw5SHTCA1pqlHWFI6enO3ybT1cr8gGqXVUJ%2FO9KQgLt3kg4Kcheb%2BdZUfT5LYDDi24Lnc8d%2B4UjlfU95lA6ldJnv9l3ndfETDn6ry9BjqkASS7lj9pCKmNpu2MlvQpu%2B9xjobA1xMk2vJUgqexzmPCX2lXqplHozhzpXFKkmj%2Ft8iuelIhrJXmMLzqnEO25LhAuDWEhZQ2ca7gZppj7LfCbXU9%2FWyjM30QyJy%2Fa3KfpOCSN1E4oQjUsyeIciHzK0ehrFClkByGOzWldrmE9ytV5hG%2BKzgLuB6qiyJk%2FKIAhejohUlmIrIOzWvSiXbIRuulU%2B4K&X-Amz-Signature=3e908616c38d5c34aeae7d1b1e7d1fa83aee3e12a9cdb8cce9a7dca2b1668d89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

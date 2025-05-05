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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYKU2Z4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGW5LEVh4%2B8iPMXPUIaJR5kjWGbEVqIGI46koyssQwaFAiAEi4JmBhLkjJlMJvdQ1oPeb6XS6YpsP%2FaLpBn3bif88Sr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMWbD5ZEDZtFVM7zfBKtwDUtnZ1CV0B4%2FvD6jgHeCXFlNCeMbGHRVfMszMnG34KXwkkmx2l%2BU7nxfcwtHEySrVmi42K2bfA2dLuS0NWC6C%2FiJp0XedupEHMAGEnVGMjkETJbDZyopgBwO7eIsVNY%2B6r3aoj%2BpsGh8F8mdyYC4EHa62zYH2GIyiEGp6nfotAzmKG4YaYBhJipO5Hm5te6Oa4yuS666mMFjBRHN0zvljfxxzosxklH%2BZiCZS3U9WTThEtoIfe7Tu5dFt4j9jyoHo0wKPfoJvjC4d6Tq2SJXKc%2F9N57VmEam3fxHYZqfLDi7ZckGtCTnj1L%2FJSbXc42dANfHBxTp50elA1AIv2MI6xn6Cnf8Hl8S%2BsH1jifsXiCnHqZ3xp4y%2FOllzqKLkvRR7YgszsWlTV8Gk3jpFAWxDxO%2BL8jdByH3UQghNFcLCikYYOQKk6s424cvWemKVgt3WToMnQJ0xSLrXcf2YUddbh3jNcK%2FIs8JU404ddBXU%2BDalYs0c%2BnK4OsNnon7nvlwyRnB3LHeIPkLOYFCmePMlXnBIpjf3BgWrLs06xw51QvrUVfk5Bd3M9%2FICf%2BjnWFvte2k7Hh9q62qAbThChp%2Bh2whaE3jB1z53Ag1U8XXmyw14Y226cT470%2FhzfoQwkMnjwAY6pgE3gYTtOhM6FVm1kVJBd%2B1B8u8A%2B%2FJyzQxnXxNfR7zw9S7pZy5STpo4eU2mUTYbG3Day7UCV8UDG5C1KS%2F4%2B97rrq8dEADFAbgDxBOrjA2jC02w7VGV9B4NtshqkDyXRrZieeB5QpUN56nQkNw0xITXCyJAasBx2FiErMChIQipfVAFMOIzomzpkDP2SBjFxhofmCzwWhmsiDDSV%2BYF9WEezep42CWQ&X-Amz-Signature=223258164eaa83528bc457966413d72a80bbf602ddef66d925a21405a39c2dee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V55SLD6P%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFS6J0bqF4lpxwUXNh8ViDCPS0Xx5kFg8x6RLb20oZriAiA8rxGtGvD0zGt%2BbkBDMQaJ16tHZ2UjMDY%2B2JSA9ZI1LSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMqfZ%2FiVcaQQn9VCl2KtwDKI6bNTBYBX8CnPhH5MLf0yDIqvFCJPVnedA60LLBonPKWQt25jQ530U%2FzOid01xeV6Q4CwOBGN3Su2FNf4%2F%2Bq5lpEshZ3oJ7CpLdq4cJP7UtoNApIqli6mfkqiyt17wJSd7o2F4oBREJy9u91edddMi915wNeCUG0riTIZL6wFZZWVNGPx2sw%2BuzSB2IqsMqPy9fUqFVY7HI38AI99krkSZYN2%2FsGg0tJu6rqz8bdf9i1SkQR1EKI0JUn2NtGSok8jj7UjVglRIQQqWtqAimY56DjA8sT18YxPmkPXKWF9hHiD61EbX%2BKi3VWVOdZkpAHRBNpNb6MdBolRiCrSfw973ambBu8O6h82sRGihSZ%2FwhZy%2BTUuEndSMv5JT53D5HBxUczzAWznIn%2FEvK4SYKGB4xkJUVOfgwdaqJ7V5Ejm1JMrNjgBsTi02aOu59MONmHLzrO2GT%2B6AC026Yfc0E%2BtwWseO9nAWBZmu3Cwanr1Ecyljq3z80XP%2Fk5vKedHeJ8UqQ4%2F%2BE%2FFGqr3pI4fkOO8coNcIn98Q%2FY54VWW3ZTN1%2BvK1qH7VBK0W6qhdHlucdXF%2B6Bfa3VhqzsxlmyxQDe1%2FtsJVIPH3AVc%2FHo%2BVwQsbTfPdUWhPfalok4rIw38jjwAY6pgEHc66oDWzV5mEKmN2LJcsmwMz3vnrN%2FaxqTvVhwmBaHPe0t7hzeH%2BkAyJq61SLwveuuQX5lvqLvL%2F%2F0IE%2FPQEKFxKri8QkxqfEW3FitXbCs1%2BlOWcBNOvAyHLm8apWmqL44bwt%2FLnUXQYyI2cmh7MeyJIVXdLRLcOfanxvZj6b%2BxxzT6Ae0MUO2q2MJUju7HjQv1pSgiIK4nL4CjdxZiP0vqcgnBmO&X-Amz-Signature=b66f00b4f4d247ef3bf8eef127865d9731fc0154cd0fb24167f01d838c0b5d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

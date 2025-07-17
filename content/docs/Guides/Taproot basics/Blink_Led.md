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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627M7GRBP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGn1jJYBUBD99g55i7oWwfzIZWliWdpg4kIMaQGoDV8oAiEAimvA6Oa3ApXhrUu%2FppdUoIJ4ShIZo4bwV86HpkWviSkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIwwvlKg99zZVCcwxyrcA0VFoxC14n2IEEXf06pkbQCZiuaSm%2FhXa5XUEEREXmlSrvr%2Fj%2BcqDabukySt%2Bwe8axsyY%2FEUtQ%2BOfpaFIeH5R8DC0LsDLX6Jv%2BaRQv4whQCBRkC8NfNlvIs1t4gwbuI2QQCZNbhduyhPOAcP51g%2FsuB4zQytc%2FVd76J1O4v89FiIcdA7D6IlH93qRiZqOt7M408ssmHJ0q3C6JGE3vdvK4wf4r7GNDpF%2BUPlLgcJ3uc2qDMW44GmaeK%2FNLFCwlcYz9E8r1OXS9ZNKq6b7YwIO1TBqMGMA8J%2BIomiPTIABLHhi0LsxngevTi02PPuo6NiJw3lMgHTKQvW83hp%2F%2BPNOqwNM5Za3F73G2Kd6xFV%2B26clz7x2%2BgYDVPrKkGFsGgN1bRF%2FWh7q0Q3%2BzCsteJxZ0ZcCHRKjcnXr6LCJ%2Bj89A4J8sO0falUHB%2BNFwoL%2FmDIPa%2BtM9VUHrxOE9Kr1vAjHkCA9W7m3ug%2F9NZcn5qXU%2Fcjkb%2B8Ar5vPuB8O0tPP6qoMxle%2FvQQYshW2lgsSgvt0BTD5CpPr8SWIFQjaQmoaNTf5boySpQ3PfM9uQJMEp93vjdKlN1cGT27q5EdAxk5lTnimRMGx6TbBi6e0yoKQmZjLCy8CQZXX%2FqSWumzMNWN5cMGOqUBxhzAh9VE2HVD2%2FRFhm4EeZvDP49aJ%2BAdO0thdKmJ9Pf4ablzG2i5wt1oEBtDoQQPyYdxrKybJoZcJbK0q%2BuohcvK9I%2F1is5p7tuF2uSqt%2BpVSXuCMu60LPZjrhoXM0%2Fp6iJ47ns0HmtME6A%2FvE0BlMSXM3fENAZ7bUaVC7zwRlgM5XiMnER%2FmPrH2xObStD%2BdVoCkgSvrT%2BV1LbrHNsoHJtDsSaX&X-Amz-Signature=f2881c9755aed8c53e96ab13afad045f6b02f82ef547c1f610696ce44dad90d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQGYIRE%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD6gNRyKBS0fdtGIADNSPCI%2Fsrzc9YS05oGREoIgWmvwgIhAOJAJBq4lHIPlTcWz0T%2BbGvfBcQnTBFSLUiL9N28D%2FLPKv8DCHwQABoMNjM3NDIzMTgzODA1IgwrQDe1qJLfQZuiVqgq3ANvwDhKpw92a35r5WqucnDpcCv7Y9VSnNvPjy2lLI8%2BT80KNIlLr6w6qSoqUvxt%2Bt42W71Cc2A3m6wTOQScvlomgA2A62a3kgJ%2FHcDg2nIwfNMOwUHJWwxgzbQTRgBwfkICaJjahWJ4Gj79KTQip9pkd%2FoDRy5g51H6Z%2FNQ25FZfvovsIr%2B0SiTUK3znEocgEoV5bAYZTwoxg0YP5u%2FeJAYpyo0z%2F4OfEp9sQJv4Y2ZWbAm%2BDVNHwZPpLijvmrrF6qXtF4FoM1nLUVVa6GAIhCA%2B4X%2FNPTKUy1SKKJabCxreI6N56hAurEKv46fJRwDtAPsl%2FZxKHDdZSdIZR63MmergWCsKRz9fD0mvPg36rM5JzxDiFl80%2BTOcnYAz6GwACUU7p42WFO%2BUaWYMtyFljsNZC5OXZhpRgqe9jvZA5SfJemUXoYuvMt06hDTs9SzCX0hSedotBVuYIqiY%2FBulIPlv8tLbUd%2Flc6gNUikkFUvAKCxDag9knBrMIHfT9MXdMM5ezaVKfk%2Bnwfe4lwAc2o9LazoH%2FczxFKZcPhqTMLaP%2FpdIe2cvCF0%2Fu6Dcpl4G96KEvqNyf2Fd42fEcGCvBc%2FAUWI78FlmSLpQdM0U5gJ3rc0i36YZjdAVlJjRjDTjeXDBjqkAWCddUXRb7rT1E1dWON1p5oxXqd7GU9qOiJr6WwkkiaHuBuxB%2FnbrA%2Fu5Ii4yerrgElY4mX19Z4R1GLFMV35GvuzaE6yqsez5eQ58rdoE4i6u2POUT4E3%2BFd1fMzCEDPLy2h%2FwFTUt2pMVoRZK01gARsyh5QoM%2Br509igrMvgvd2rm6%2BjiMJPXPlS1PDoYayh%2B93HV8Gu%2FHrvhWXp6TDzQw9ZmEK&X-Amz-Signature=1912d1d23516ea1da294ff89e6cef5cb5f3459b6560ec19834dfd79daf7e98fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

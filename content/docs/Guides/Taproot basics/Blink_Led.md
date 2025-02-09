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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D63HNRY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVIlUazYBLPNropZ%2F1WVgc4GCNRiWbBdVVBn%2B397hTkAIhAPtWGXko1SskaL3t72112UdgyCbGvWR3zpdjaTqT440BKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG3QQ%2FPm%2B4ZL%2BcaQ8q3AOtKdw729Mf%2FGqdSjWCpD2TAqt246uV2vQ3xExFtmY3q8PZ1enIMsVNi8uyDxnZqTAd%2Bepcf5FoE%2FgNiTs0OV4z1x%2BvFOvCd%2Fl1aVpMDA2wH2U%2BQ5eD9URjhkloUDFKU39BH228jAdCgfxLVltMorqIQkKhXZIjiNcWO%2Bx9qD9yBt1pC16ef69iIRwot1PkhM645xkwCEaeP%2BQQlFI9Us8lABBLGsx6R6N1%2FrBITdszQlnPFXfVuvvgGm6rqJ7xGmrqpcDvlp2iWUhGy7maMxBmX4r%2FR8Ly55SqVl0PGPOTb%2BRLblWn3l%2BJVL1y7xO3eaUumKaO6brZ9V339xme7mHRivDN91xfjiOHKhPrwwXRBtDzoueATDBtQpzAvv0sy7btac2N4Qi1oquJDf8R0bpUVZI6Z4Rh3H6XlJt32%2B0%2BhOkzqJ3OJt2ZLh5LzW7RCNwjklkkvd5PlXc0VvK8p%2B9qaaW2aaZbj1eWHY%2BWSBBpL9oqeSoYQ3imAZr9TzAme7FFe9WPIbhJ%2BJE5VIfzW05zyf3JcoJFmWp8a3bvKaHfVaSOUPx8PCgSZyDU7L2aQvz4ynohCjFUSBV9HHGnocyXl0FtZplhirndn%2Btvcg5vinSM7VkMXUDWVhFfOTDHv6C9BjqkAarE0DAHWoCc7LQWQtnEfySNxzg8F5Dz0S7YK68oyiPiVFmXaz8mBzZ5L2%2BtHbCvS2c%2Fe6bJ7HEsnVbPYyMk60UZc1PbG8c7LLkWpvjfAlRe5rWLbOQoHSdLiuY%2BqisWn77QklbMDU8Ut7X%2BXDPjxiz%2FtYWuG%2Fcx7m9M67z1h4v3xiaVf71u2e3D04%2B%2FA4hdkKLzjSaGqBk9RSvr6v7kvDT2EoGP&X-Amz-Signature=112e0f0ef1f526cb962d0f39fb866ff963a1aba75de81bfae3cc6aaf3ededfbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIQDGMC%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEI1M89PGE6NnEn8rcqnXMKfV7zWnQo0HmAjRcO966owIhAJvrlDxHHZSuf5uFs21Cs9XaNxIJNxQ2nLzY7Ytj0DeQKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEjhKMShx0RR0mbsAq3APwdnO6pJbkPBQ3V5MBMUhDTxm1ZfkJTBhnz8QUo8P05bn5pmRntkJan7TAvnxS7RQe%2F5plZlcF%2B7%2FvmKA8IHRLBFpmdeY0IAtXNfzfJXzV5cAgYBB83BE5ztzqBvGpwYIX%2F3E1zmUgwG6sfAz%2FmWMkfSlFWv2VSnQHZ0A2YvdkO%2BXcnMegl0IGx%2BCYyOoRMt3LARk4zTTl0NNj1UD1snlM4NkAPxG1YGCGu58KKZnJcHel2ltakhfI2FzOPBJz0Xp9SbYw4VUQlFnfzM7f1f3YwBLNjorVjQKDnf3OHmXkvn%2Fl780L%2FlkYwHH1GrPa%2F%2FXny6njHgyb4qN%2BNCCSd911eeRqyyGrksdENWEHqWHgrzmU8Xkg329gUB5LCdsB9mA6xwrcecYg7x2cn6aEW%2Fq8lGxg9ItrEpSWMhzYnVQN2IzZR%2BggYlTx4sLvpmLZjjn%2Fc9Eq9xWtAOwJX4sx3MCXfa32qSL0DBwTQm3biytZp6MdUho00fwFuqZ3TVFr2%2FF70U4R1uIBikzNri%2FmLwLHBf%2FEq8kU37CC5%2F31sksmVGNpOzogBt06i7MwNdEyhqoWz1cDhq50fzQ98V%2BVmM0ITndAKy0bAdhB1hX8f110gE05oz%2Fqjdzy2EWiyTD2vqC9BjqkAQlyS%2BqpLtf1bBCXftClTd33qKabzOCNUfzgSkFN6RbN2RuHV9jf0K1ESVRn3F6EizF4VJ4YqglrxHoyjPh4WA0Z%2FB9p3OMio9F7kcvwS%2BfFMdZn5EGvhCXCrVjAk57qahQKkCkKyHFtV3%2ByIkSGditWwNpPXy4yOENfX%2BOHhCcDXheOMHCNNITNuKjZMHjCi6bJeF%2Ftx7Bq8pnr8ueriKM9bjD%2B&X-Amz-Signature=ef108a04e50a0306c48b796bb6f759cb418d0beadadff11c812cd21774e96b93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

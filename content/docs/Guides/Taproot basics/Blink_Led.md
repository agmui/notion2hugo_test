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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSS4ICGD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn6ujvQS%2FGuuPYE6AqkCt87UmLNAy2zcV%2BaAtrLNm5zwIhAJ3Zy%2B5TeKKMxLFbY8cM6NN7Mxf%2BFtE58%2B0%2BcAYtKkJGKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1p4GJkDnqSNL4e6Uq3AOgM8UUQJQqwg5bh1XB4oQr%2B0bl53%2FBWLLEhjDDc2kstrBgPDH79C6I095h6RYkZIGG3k%2Fl80cqgn0SXdmK7xQT66Y4h7TqgIoVQK0y34lvVgLL1%2BgFuZ04KZrSeSEUSbZ2dKYt9NlXAvokvrc6%2Baws%2BxT1fZ21X5R1xiiMX%2BTUK9oaRk006ff15k0VGeMAe362m5kStcmkL3xmpMfRJKxQFoAcmtAlBtEF0vEO4aSTBHcfv4AqaXKyJxGFMbfDja%2Fe1LwhbdmFAuYCyECLTDpg5kKG8B6cIPsZSuejyJIVkL5FnBEg6zMkmJOI%2FHO%2Blf35YruIjs0oDzOxT%2B%2BHQFhZjNE2v2O6Uw25bscV6tb5PozMYGAjQF3Q%2F5meg8OzOTpOob%2Bd%2FQK2ejFRbZK1H8iSIMACypQhc7VX%2B4fWCxNBWzSlJZ%2BeyZ6vxoT7qRkSP9mnQ6zalfcmTCgYphGMwCbvGl%2BAzqnGxbHU9tlzUd9lrYWFkJbkvPFVRZmJ1dsoOxf0b%2BEHPpGhREMR8yiNpP3uYXqf0N6GmnMsPNRfEyG45205wGAhwPjRVhjIG9unDT5dXD%2B6V74KHT9j5ueJwZbPU%2BV6ag0XsbAHQo1Wl0ExNKw%2BTj14XWsFoIUgkjDu9IDDBjqkAZyJflYIYp7IyJ5dVgZo%2F7da1EVrLbjxSl%2FZSabhnvyY%2FXsnpFAAaqCSWMFQjd07XZBEyScivY%2BwbsgJuG0knEpMnrplBSJxURXK3sfkTtJak9tHVeeM%2Fw5MaldbVEqJaEx4X5f06d%2BIyb645Sj9RokPUk%2BvToixKeOuLygyPj1dUygJW5jvryYF5%2BllzOiFgXOkd2p1n%2FSQc81luHvXP9iXs%2FxW&X-Amz-Signature=584e9e873a12311711e8f1733b1107fd76f9b64e45f1351214cbfc1e531f3959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U6N5Z3J%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOfhmWXUsbvquIvM%2FQAZE73%2FSD1X4EsOvsSTfxwElMywIgQecPCr71pozxBnlE82KJfTMRCBNxqg6yBV13q6gHGzQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZMQCNBDKZkssGSbircA9GMyWREkrecUKUSLvwymPbmYgvWD8NczAf%2BR5Ck998GviFl9B8xJe6yf5SPSN9nLKz6NdXf0Ya4w2DVfyx1pEaicHqGE5szX%2BDYHU0e4YooAY0Bce7tSwyRJri81yxsyMtQeC9Ro1RUb4qrD4gGqFXiX7qn3LxUH8R5SIRVipFY6G7jIGbPUY%2Fd2KKdj8kwM2K8%2BBeaoYPz%2BxxEWtihsh3pd%2Fh5ubVIvVARAe9kCnWffSicXpYqnuPV2XxZ9gCnYlQyMFrPwxEy2GKXV2cCKR1R5OJ2KnF30evXmdEBGvdFO4sMOOAF3s6FqwuvjZJQCZWjg9MxlckXF6BlXCKFpQDYhGh3juXlYgZ3Tyt0EPdc0hXFclLQgVSR8xzO9F4bbDsdzPupCiOaEltq7amdnyKR4tr7h0aeikQYbensirjniPwZyoeAfg8s3vaTPQq4Ix87mIfn%2BvBLNayzjGlopKtG1gyHqe3TSbhJGgSqeP%2Fg3ixR6SosMV1AeIy50LDvLuz90KGOJMu%2FT7yXkuQrg2A2MdcMUqz1lI4ohPwIJZQ%2FlLG7VagJnpKfM0zgTZesP1ONz2ij0oPH7uJxwZ6XoPGUJy3UrPKKztoUmy0eMaxNo7E807kcKNyrlTxLMKr0gMMGOqUBRld8b3kk1E8LNCv5iEO1kpt6jF0QcONTEBlviLeIf7%2FJxhL0qMo9N%2BhzZPs5aPW5%2B5DedQrM%2FFGRcR2y7C99d4OZGRNlDwe6Mr1W%2FYjerlW3ZCUjKSIZ0zpnyBC7r04WI74IZ4zRwmL2xy8jWPZjGBT59N86bvm%2BJqVwRxQn1fOqDXnTDgELuTmUhPQ7vods72aGgB04TlTW4GboMTa1DDWBYmst&X-Amz-Signature=665ce82d4f0a0fae41c99c03c723f05635c2841288a117e4323073f94bccc544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

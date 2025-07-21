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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324SVBTX%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBD2UWQFGYOYiCIlfaRbAWIHoxQlAk2nVIlTFWgj42khAiEAtAhi5msPHd79QleEMDlgn0sbRr2i8XLF1Q0wBz%2BPIn4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5GCO1iPPq2nFoAEircA2R4wQiXvvLUtInyvN7rV8Kyk%2B8OQuOmtbjXZvDd1uu8qVwCHfYvAGJKwUKWVyFC860j9r%2BNLZTDmAofVEYaTTxRs2LJfO7EfOeKmFcyZ%2FCl23jkJUO0QRErRRwR%2FioBemh%2Faoro4goXoXCV6VU072pseoLJ7MmaRlDtujkGKfU3wGbzjl%2BOrySrFqY140qzsQJbPMyNrAOslLnEUMUoqWn13OPTz318lB9X2yhQSZo5MxUbpw5vmoOsqVCxPu%2BDl6jV1jKMlh%2BAHkmuclEp94DlBSw9o0vcw5UhgOdVQbpV2k9IydxbtvADdIb0chClW16rMVDN9qVNS%2FamqFJEEcYNKAkzYTK6xhsvZfcOv09Q5FM5ZsTOtNElclRxAOLH8LAaZtGTJmEuh3tLDllR0BTjZi%2Ba3HirJ6PwhP0q7Rk7FWESmQ6Ea3ulVpIPrkBvro7WS31Ktl3%2FCECfxrwkMQWKzCyFgkmX9MV0zCYTII%2Fp06uBnzHrS%2F315hSgbFbebzS2mH2iNq3nDizIZOzT7RsVty1AuYLYi8Oyjxf%2ByB2n7sw07rhxAixFEiQ6QuPmsPDJaKzKYd5GryzkD6XGbddZiRrXMPmFUE6tpcPV4DcaYSe%2F5mEnO6e08T53MPyS98MGOqUBF1o9kngJaovOi%2FFnSfxamReAZMbBMSugdiFSup19QpR8inlvW1evu5MI3m944qbUcvRt3eKf88ps48ve92%2BNm0EiBp%2B4Qmf8pVERBny5ZNFr2oakXiyRz0SFHmeZ79zTyElA5ZHVnAw3jrRWrADXLgSjdRjS6JazNxu3lVUSYM6ZMUGpTVA5oWtEP2U86mWcTs9PJZeMazvl3yT8xORcIsHktpi%2F&X-Amz-Signature=1bfadf2718410f22b69923063a3c930083058fb69013c4608c6083c26fc4b232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROW5WQMH%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuABgfZyMrCeQynllUXw5ZPknX9pfbMWUJAMunfFd6fAiEA6IlRt79whN8ZAVl3J%2F4ROKOucPXf2azGX1dicnpA9yYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4hrBSeeh7r1zbUzircA46yp9o6YkgH2gFNdm1eJV4oRiE%2FKrtt35Q7GvYtkZbeDuAXnwMd54N5GgxDvWaUeLoDuDYRo9npWuWDck%2FOH7N9NVA1y3BNWvyKvOxA3%2B1Wkf1m4otjZMR5o6A58AKz3mVKLC3%2BXD5Nz28GMzzSAezWieoUV8X65wXdOkZgXlJiZg2Dmn1h627Z5ikkZfFviI4yy8Gg9fZP3bzoAvE58xLdLl%2BevYoPAzwc9TtsQ8%2BBEH2p5pTm1xCsUWH%2FG%2BtWnroXaOAN%2FKuzxq%2FRaut7Vv754ZiTbfy4QIZ240LxrfzLVuJIaOhyneK2zz0mehXOPdHkXl244wPEMtQyxBJASMBHZJWhmFOt5r9HttPI7lXmylhrYHB0i0tIAibbr4huE3Q0bF9ZKWppf6dSN3mel0uPY1JxRn6p0jNizwW6LsVojJsnTSMwvUVyRBNxu6oN33jR4KN8zI3iKZB21OE00o2%2FET%2FVdkgHJ1PWtlFrJiDRg%2FzUtijbWfQsmNd1VFw%2B0YDPEYYDBDPuOzzjtTom%2F7IhYKzddGCzOqDGujzREHerrIEkBsNJ%2FIDGsTelFpZRJI2JTpNAcG23uOakgeCox%2FnBUjNRC1PY7WkKW6zauK7Ccl04bclEfQRz%2BlCsMNiT98MGOqUBAm5Un9aO3RIdMXXszXhhnVlLLJ07Wnhq3gy4ti63MRtdPYxILQMlBrk%2FHZu38q%2BXmlouHFlyO9j8FIYoQt%2FNaITD30Xglv9xA0%2Bki7QDrwan05LxBx7NxJs1vRfzGLPOKwoRC%2FZvEPqUWPmdg46V%2FuCkQtg%2FHcdCHjAmWftNWIPaFenpbiWZcNQ99ZbtRITPluf0ISiE9iI1lGZva%2BOSqTIbqR0T&X-Amz-Signature=ba378be65d7fbafb99488ad506f23c5352f7adfd2859f55671588bfa65307e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

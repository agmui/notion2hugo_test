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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ7JP3OF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHb4aCAfawu46V3Lvd1SQa4AqfTN0IdkTgprHWpquv6cAiEApTUfX0mgZ8poeik7gUuAAtbkixM3IXbwvqwptb51hgcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnWQ5RhXd01yRhs1SrcA9z5Km8Zm0ILGnvGcs0zRzuV03pVTqMziMV5Lb2po4crRKkGMEIZk3T9zd5w8PLhzb1RR0cmbNntw3n5s2dbNrXMlsPhII2FHADRaSlzGRaJUR3%2BoXDSRoSR1Ee2MGdZe4cUQip9xeLWgQjAsIfp06m%2Fg8G420XGBZbor%2FwT1e3Kml92PV3wDN%2FavN%2F7hvdnDxGbCKoZpH9MhCp%2BYoGLmKaUcrATQbESm9WSuG0yO%2Fup9wt33qHvpaKcm%2BlvImaAcDVMigtmy%2Fyy4NVYHnhxz53fYoyFRbvu1q5OW3IH2wnVc0CAVQ1QL1dG8XSg5pQZkfryQmLP6s3iv8owiLcl8WjFgajLZFTpkzIC7pNClhBFGlmKYaZcu16%2BoatMvwGfvat%2F%2BS13F%2FLiDdQReQrzsenjVMpGOIIufLTDSYxCbOxGqWRWdWcaFSGrM2O2%2FDgqo9%2BuFj43yvtLjhqwf52N1sRKofd4OERcwiNfk%2BUjZND4AhFtc7SBfqzJwHbMyGyR9x6BfrxO7dtK4oTzJeaJG70YSYg%2BeyFQbQeI5doeZbZfD46JGnkjvvrWx1xCZwiCbsEWzmnYmEeGAaHWCSKkW%2FmLwwjdRPs9RM6IEvSzRm0lCDYpGDH3USI092UlMOnkosIGOqUBQPV1CT3qzEaiYZZ3vMKsEqaXlcVtSe0gmpv%2B9gx4dcPCS12CKhpjDzUYjSMFRQC7Oz7K%2BG0ehW9QqevaqxuQFZ6JR6jhSao2QWPctWOyePOU9o2wm8tTN%2BlmiXlw3ec44WQPhEP14z7V6w9KXVspXAcFNqeyuzRefAYWZ7CmkCW5Du7%2F%2FuERAPCrAMeeDIFogs8hnrkGlUjfic7uyW%2Fj5C07ZTJF&X-Amz-Signature=e5dab0162703c5da6f6a70b79c4c6e9d9b16363a1b33a7c968bcb7c9a3fc5c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GFUAWJC%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbEJOg8QA9CEpqgWPuteASb1ca%2Bqz6woct3CPvIkusmQIhANxzBuaf3S%2B6w32L9HSBmgTn763gazeCtW8PKNwzHT30KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7KGfCBPUl%2FNfQAt0q3ANbozkiRnjpNYcFtEl8AjtKiSa2ViJYlDfhWiDti0SEIpS2i9EM2Dpd%2BUuJaGB4RclbVLLzxjcBH1hnAIIg0afXmS5jPS4EXs5f9kYPaKOfA2Pa8oKUGG1SfVIqMZdzEAJPKFQM69z%2F1GpMsIJrNq5dVbcBnFdLPDvTttze4ae6ywFtn8SKOV39qKNdNB%2F5HKgs8rK5i%2BZIHc87WWeytvfToj4NP1Czepum%2BhgDWT1aW3bxcQMSJOTEVcVsEFbPEof%2B6jUh06rM4COdLH%2B2fo2yHtundqGWHrn8RYDa8PGeLYyzRspZjpMruTwtPyU%2BcBGrUqzaz6R%2BMPeh7ZbHRfg62As%2FYNaYEtf05pDPWjoX%2F4yQ%2FeTy1X1%2BtOCRQgwpF4EAeim42xNm0QldkdM7a0dodKHHM48f4%2FoKQ3LBFDDdzYpjNeTn2dfWZCW9p7QfJROHwxuwbY5MKMD4Wf1QLTN%2BsbJ1EDEr2cjdqjqaNsk%2B%2FAFHLTyfglIkFQ%2F1859kgb%2FVv5xG8vA5uNIGr%2BL%2Bmt%2FO6HVwb2KdvUBlaFtbSVVWoQnRNyePNP0f89zRt%2BzCgVmsReer%2F4wCV%2FJ7bR%2BWTFgHwAAPvorDoVmeVfJ8R9uoQ7ICAF26eJRy6MQtYzD55KLCBjqkASGIh0Ce7ypk8X%2BX3n9rRazJwUnKoHz6FtAdyw58NQvEC%2BRTOEHM%2FTx%2F7TABYZfSKS1lP9A2j0boyJCyBSt8Go2CAMcGoL%2FK4MPEl4CqLFbfq0sGQmUOwaLzBjV23PtsvxACCOBHL5egPywz3bnSMpUWHSOUZWts5yYBqyG9ukS3uDKh6hpx6G8TbEft8hLUpObaIy01WM5XdRan8M0gIfdv4qeu&X-Amz-Signature=a13877f5537fe79d66c1a30d94b9ce5fef412a516acf9dfbc2cdeaa4453b5500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH47APPH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2cZl1V4Y6Z99aLLsfUJnAGPVyjvF7zyOWoAt%2BrspbVAiEA25VXNAAJ1FKFA872ofy8GoDvsC0A6dX4XvD5NZzEYiQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGbXAdmsAcTdlCCOBCrcA2UlxE8y6Sehf1uOGhBGzqIQbAkFDQtNZd1r92XypneC6ubwzUdri3L1qNZ6EftLpg%2BkCvb4Vkodd8OG%2FFvK6tFF%2B5hakrK9QFYS3ZafTRaM3H%2BjvfwmohtegV5HkH%2F4ujuicbxRphSMHLNR3gW%2Bjcd95Iq1bjqqJx91Kg%2BrUqcAZvso5HRWkrQR3bvURhbwxX4Hb77P64luB7uZbkP2R2SVpEVz5U4HRylLnWudyhBu7WPGxV%2Bxnu81hFp%2Bush%2FZ2Iic58nRIXPCUaQOAkGvrHE%2FF060dAqzYckV7HmLvBxYSZfdsGaCPe58Gk90zZdjH1567rwtBac0taqGszmMndLVT96mq9GvwCn8k8vg2tzCuhmqhEBUTvNwYeOw%2FUA%2F0Xgxo7qT1pfDS0U3s%2BHSdJsqPWX373bTYWZEUaH%2BhQS8mmbE7ubs1rK47DkSSdYhILOW1P966rmoMxxy4ZqhKxiRD5FemFIVpmut1UX20UhYC%2BaH%2Bg2Itsnz41x4HQQwhCUEDANVIkgri526XdWG3oOuSoqM13NhiHvzvIpGFXFvfMppuU0uPDegE8NkEbyfRid5bDJV1KbmjFlppqD%2Fh18mDsMcnS%2F5JLEzsPT56cINFtV1bElDNNHq25hMKXt374GOqUB3eKYjdAEkSBngvBTnNWm4Q9U%2BL8Lzxqne04JM87f81SQwespMeHbJ6H5fZlsvlKFdfarfuuLQFaK9K2S%2BwBatAkCO94bANcu%2FNQCI%2FjHEDG7FtKycIGxT4f7wTYF3hZU6mk5qqwyswQXvS79f9buMzyjL3tkFZ2Thl46iHeWW25YdA9UIGxICHptp%2BONnu%2BlcqGCzyGSDzxS0bqcfhXZi4jPe2E7&X-Amz-Signature=aab996ea1fb1c2f2f820c7ba9395e17ab5f1e9cc99b55ab7c9e01add43dd903b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REF2DUCP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPi6PG8Nl47wKbcXklDhSkvCe1QF2LOFif42B9pLj6PAiAP%2BTmMEM4mZsoaTNj18X%2BQsapfcQuntbBw%2FFXlcTTfeir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMYIHVw9uIf7ZGlqFJKtwD53dqyNefQRWJEijLNEdEJYO3rriSs5M9wLTiw5D2Nzbe8YMMuTJlaevgDlXYJnd8%2Bu20FOoc77EEaudYIWwQ%2B8WjrrukEZrBcPGGv8%2B4yWXjJUkP%2FuToxXSwx98qLAlllY95KtqRCs5rbcyrnnPxuike1cqUufmTqMiC8DFtY7wSulrF2mpwnnvkrW1%2B4R21zZ%2FdqI3mfpvt4kbiDFtXMKZ79MuUWzzRgGyYkpD77kUqmj1A%2FLVkNPcHGxs7E6ly0UShJ9iT9hAOZy%2BHgYfGppYlDS1e19hn39c7D2CTK8%2BT%2FgVRK5p5G9j9axLmAMn6r%2BNb9S1ZHUQFk68%2BBEiD44WVKaePcZj8VE0pB%2BtaAgiGnTWhNsf2xg9qbrmvzNy%2B5fbAXX0cb1YYll9h3ndpheEx7MCw6XqyGOrCrfv6DiB9ycJOOxnj7euHYQgjxW%2FsLf1Q5Nt%2FQvahO6MvCd%2BUls%2BmKiDlkM2z9AlYLwVk8RniFBs96t%2BR76cjN%2Bb8S7P9b4f72tWWgNJ%2BmVNnb0sbEzbQO1edwBSqySV9ABD2F%2F1AWEq0GHRZw0BILvjPKwQiTw9SH4azkOR%2F55bb%2B5BWaPzso5PDv2ZRhv3qVBjTzl6ZE%2FX7PHXNsQ9IMs8woe3fvgY6pgGDfrw%2F0aIwzDjRlr74nCUCx0JdD8VYccHORjIl09gdFYuD9nD7NUZPlcYxj4LRJek1Vgi%2BZA4wtCXhBJP%2Fz2bB0ACUq86OMJonWgzwWqdlKCk06mkJYSzZPUjokOLpqG3z4Gfl%2FaLdjFGtJET1nb19I4%2FgJ%2BYaH2wNUn1GwvCVdbC1HoPP7RRWhX%2FjZyeKh0uH4nia0sDQALGH2o%2ByBUO3Xk57M88i&X-Amz-Signature=bd7104e7edf463e1ce087fc15649e4fd9aa416b6cbfd06741218e69e0a5b0919&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FH43CF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDVlj2nvj7yfU3EWdJRlc8rlnl%2FO7ViRGntiMyOeKhlfAiBcAsdWAh8UOlXZYNU8b6V6%2Bd8GeEGKPR3K4pWMQRhq%2FSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMnXTgB%2BMGXDsarOtDKtwDPD9MvXKY7cSD5rj619isihvGBmZw8iM%2FNlSUW1L0qy2etGX1Gv3fcxhZ%2FFQEkSmlu332vvUKOTAadkcFhV%2FOTIWmaWU3WKR8h6%2Fb5TbMjYPhtZNJnGkBMdpgyXQwydAi1R7YN61rq3hgvtxXK97HoU4Hvq%2F2Tjm5Mb6M1fdRD%2FNlgUXwM3Xl8L0Dme7lupKyH%2FXP7Mm0B6PGJjeLXFd2fg5A19xekDW7jLXzinNCxYCsfBZi8mRgxSuSJHAtMrqJxg%2Bss5rSGZNAcfo5zPKg6dHmjt1q0Mni%2BJM2kFOaz7613oetUqpHGh1CfDt%2BVrh1vitf1V56fz0VPZYHhRT9sP5TVvy6U0%2Bx8EruKHuD%2FSFZ3zF6SW5mPnN3%2FWUHz1YuMbyXFoUHeWh%2FJB9FyRM01ItBVFe1ua0yaVgFEQ%2FlnBEHN1iokpAil6uBL9sullBnNoHUdKNK7mfo15FvKvzEXkejFKR41nDzfBVPICISBNzxX5U5fbgjcUz0a082Xs8dh2rv857B6egRzCsAb8IoqsJocxxDgOor6Tr34aZ%2FMF24X60JGQnf%2BXtXj1Hd85BICg4fk2hN26DxnHFxvuZRyIL3qfF9il%2BPiYqiXc7BBgaAReW4lGzqRJuYj0wwqp2WwQY6pgFPDJ4N%2BAjYu7RZFrlOigrpBy9JQfuw3h5OdAmgkwMs9LadPgkUBSXnAdZ1tE8ferdTYZazeyykdbdAlNAV9uWaRuu2u%2BgEA7TFxIQmasA%2FPj4%2F%2FqePqwAcA6XjWddnxAyZ4gieVlODAetBvqrMV0yIhM7pZ%2FE673E0lY0xSlgzhjy%2Fi6WUHb8VO6eSBIqynPsjd7FTGuB3V8kqtICQ%2FgwYSR2yRy8k&X-Amz-Signature=589654a0721c3eacd8fde6244c45a5415256de6f40dfddc3659d9c725c401b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EDYX742%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIHZlaJmoCbbbJCvdDWzgFDoBtR6V4sXkvZEJURx4OEhLAiEAsGmEEpZmbabFaKvklEnA%2FBv%2BdqvtIEDcXHrcq5HGlDcq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDK6h7SC2TDB6Nr%2FB3yrcA8oG4ozh0cc9%2BkgzqTMwDpYUjZmvaPMHLrtqwYJYmQLoPmbzrATO9CLoEFIFKweQetVCm4augYoMvJaSoqlXUPTzjmm%2BZEpi8VoJUaeOpHCw%2FPM2%2BitEMr3%2FJLnsNwr6FcspE3C7qNvB6OhaIFWpV7fvsCJH%2BPx49YwkQ%2Fgk6KaMnhzh4rbTBw4CCn1UX1fdtSbDEV4mtLCOp17k%2BVox0GaZsatUQnlI6v782NpuZIGg5yr4CbQMBHBdWyQAt759gSutQg9JRPwfUTHnex8R18zFp%2BwkgAIqGzdIGP%2Fv8Lm05q7w3peQDB28JPtiLtXnG3U9KDN%2BtI4S7pzpSEmumyyt867QENIV3Txz6zDp1go8i0RkiGbmCxh75bRwEm4O21tq8HfkjkjwCAajpWv33tGjmXkK28O5zBzdIR9puW7iDreS%2FIdooPPr2n%2FhQLqTO5aG4Q9IUqMVa0XwGkGplxPEQxl3S9%2Fq5s5w%2B7p0hH5Czpg8UYRdO8gdT8UHIP1BnTk7mFUdXyx78%2BUdNCrr7ce%2BFYS3Lx9uTTf5ulf9cqn6VpcI6OA600cfLrMBRav0sgekO8LCiB4HF8aOKV7QMN4%2FkZaipbG%2BVnKFxQrhA8l8s5T3YVO8bBphFc9qMPydlsEGOqUBwSyBHEDwITsmJEWjGldYM1mv2pV9acl8SDpxghceDeT6E5gYMGFC0n9WBHkM61mH4gdeICSK0W7UhQOHblUiDx5wVYHGZ4rtz%2FZl%2BdZwL7n5SErPH%2FiFmAEvwWRa%2FZPcaJs8JR545Xy1B56cloNmWCidN73QAl8%2BmjhhjKeaZ2M5GVOG9PafDlFfgWFwYULPtMgjb5JXKIndR%2F2sKSqrk0zXoiTp&X-Amz-Signature=f2c462badd1f69f9268c4b8ba7d9aff08c75458c480d49ac0596ce6dfb41b2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

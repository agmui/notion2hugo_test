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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMTI4QJD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIF9ZTh6qtGwbQ0XETTN%2Fn6giaQ1051JWKgUN2XGscV5lAiEAj5%2FGdeJcWQTW%2B1U0gMhnC2Z4AB7ingdAs5w%2BJS7TxLcqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJWAk%2BnLGNQTSJ%2BXircAy2Va%2FlnafSlBD2%2FrpLRTQnxXoLXRTb9CwgQQfvIN7n%2FRTi0458ThZaFr7GI7mdXkuAiRTAvHyPupxUNAvQr1xRGaILrnyQ1K1LNKejpOb4NcCmNWL4mVFhM0ZweIw7Pe3mCZyZW2ZrzHuG%2FtLWbcALhJUaUyMdHYZbKLh7Xk24yE3XiEd%2B2JzriqCONo0tERDuKgucC%2Bks%2BCRcwMAsqVJPSKOhehT2GCtHhR0fCFYaXp%2BPcYEhCxZjzTP28RP%2FApHxQpFYvsY4dqGBabkPUf%2BUuGEtbifstDBgz1QxYDih%2BOaeM1uzVdJnI3G0kdvKJ6i6zmB9Wn5rz0pCKW1y5epSY3Hq8z7DLic4VHUoDtyujZMa2ivLR%2FqxsActIOom88Cue0cjenaXUDOr%2BlGB16ZjJa%2Bhwa0MNTMEwMTos%2Fcq6gA%2FpuIxhg%2F2Ew%2BwxJS5EgvtyUC9p5ro8cAiiDKPmEnB4Xp9LV9nu3VujtzVSGelyoQVxE7DCKv019%2BBO5UKd0xV7UxpZ2dZNKx%2B7JO64J3BWdoDQ%2Bpl9s0mvbh4ZL5ydNPn%2BVbn2R0F93SGEWrRB81fuA7RuiaKeUg%2B9u8eVd72G%2FLo7cl3D79qkVPtV5pjnwvlane4oQ0ZN67g7MLDEt8EGOqUB4Z0tLyE7qBBjvsK%2FLTDreliKFm1Fjqm9Dk9O78DvsMyE9wFmNdlnzX%2BTZJlZQLmHNvRjLZdKAhxTwGg2oiQb9jZi6LXvjRRI9zxsOaARkQkPHr2soXBIXZHhabgiJnZwo42S5hkHItVb9uCXbbkQ%2Fm9NlzaHV4U7aOq5yEuK6vebF%2FZyCK1lLeX%2FeHtogi6piSCDPOny1neXvkEIqU%2BXhxkOzmXu&X-Amz-Signature=8d9bc518bf01680f4ec5ed510e76e88b71a1ba4ef5e6f22a66a1c34f7bd8083a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635R2ZUOF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDwnzW%2BDQEc%2FVyVqKOF1e47UND3XzIQfIbjSZKUfXs8PAIgBi2sVITL3tot%2B3uq6g28yVZGPTUA4VV9VzhDIZMu5fIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4GsnNa5C388K5OxCrcA61y%2BCKH5um9Lo5bRKqBJhRHYpt18S5%2BQw4CcTbwqrqMPB5qg1z7g3rVoTmWazjblnIIEoqmHy5UrWZrPEhfQFn2A4%2BynQ1pEnXQRmMvqnPjEhf6nMTLItVgUrQxHMLrlpXGkI99vDh1xU3UT99atcjoqW6hH8um76HoBoDSkSsIHMJlm6K0q2Db5ODOQAOmtc2X00nzFFXpInPiqnccCx1Cx1NI7ebyoKI1Jf8WlzevDdy5vq7fHI4I35cOjOciw%2Bv8IQYW4tR0G5LilgqPTE%2Be3iYRNMSUZzfqaSOUyaIL5tZnKZPdWIWMKbCeLALDjvwovYrkm43zkPHjRzRDkumdSUM45qyV90A8GRsJwQL3KZMSNohc7mzajWqNbunPN%2B%2BeWi1R5aaPUHO%2ByCCdceXhkqQ61AHIAi%2BQN4%2Bwsq%2BIEltRNNiTfY3unj0MD%2BgcuuBFkeqHWFiDowgQBdZROVWwR4DTkU8UIYfI5HZyO0A%2B9ipxUXCtEZpxKZZHjUvWF0VjfFGCQOZmwR6YPLzcw7QA%2BcVgr7yf1Q526Vtpgms6Vq%2Fa7%2B4PauAuzLxFdsaDqMobHzINdAF6qCxQmYfcskwhU%2FYPe4zcmE%2F74wmJXsI4qgD0F%2F%2BTjeqHvS6bMOrDt8EGOqUBAK6rn6YKGiBNcmJ%2BCG9Q8ZnFEQd7Fr0Ru7mi0T9ygIj2HzI9LhzzfmkQXbesegdwR6wYGThrpCJZehKmprnaL%2Fs1WicMyd1IA6Zsa8LpiwFYRBJMqm36AycW4H8SfirTt0ciOMZCHT6Gf4R89QIjpvXfshKRUI3JCK9rVqc55oo0%2B3jGN2hqtrgqPnKAbWH4BjXngmdlOw0fixGStxBrwHSPjohx&X-Amz-Signature=348758a4160681fc7823cd2b686e98e971e7d4839c5cb61950ef8278dd5786ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

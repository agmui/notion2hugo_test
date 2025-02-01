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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABXFDLE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8OAn0w%2ByvlM6jbz%2BowGSyak%2BiH3TMnU75rxmGrYT%2BpwIgU4arjvoEJ1ZK0fZWGMUMqPqhrVEexTZbxul8GP1g%2BIYqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKh3H%2BWdI9%2BKf9GfpSrcA38q14BoOjL5NaqL%2BBDfzUWkhnu2FW%2BgnVnnvS4MOxvdY%2F64B5IgEAcRGffv74dxmb8NLoDDFT4yjw9qpqeJBduCe7Jbnjl6p9H1lxb8LcEEf2mTWe7u4C3WiBKYrhdhaYsqNWd%2B%2Ba9dfHy%2BW%2FOWhafl0QSaJb%2BANH3bEjeVGP8bOaZocbOYQhdW6bNFJiGlZYztNbbHoTh8cmxKrVMNq872s4JU8yj0bnq8ZgWU0N%2Blyd5OUcnxaSfvzzuc%2B2YBaKYnSfdXjoM0L5kF21bGTaJYZ2fE97sMu705P1e5%2BkmTz9jMRyhtTr0qyEWad5vJEIT%2FnDDoAiJxTDYoBhg4QuJZ9F8Wq%2FZm9pNrVk3h3ChaoqdQzTpojrVXNTSEB7XcoismArUOH4G6OPglhw1SR6cD6WHdmXdB%2BWvPQNuJFP%2BMxCNIG8paFoPU7FXbEOjMoftz2FikGQUyEgT%2FXSjx6jQrzTASTQ84xPmpVoi165E%2FmWy%2FielrNhKthvci62H1ikyE17YruumNResnVcLpSQgHEgmn2no184udcVKVe%2BkaKfGJt%2FG3fkD7GKmm%2F8tBd7VmtPb0GRrxkUGBzqBMgdyShWXsUyv7CqkZANIus%2Br1LNojbhUnd3xH1JhBMJru9bwGOqUB4m01XHxIVINeEF0myk9zaVgtWarhKfyyvZqevWLW0qlFkZp8mxXDG0FbwvguUpdpwxKtGCCdtxqYI%2FbUIgABwPJ4VsMrC13RE0Gi04Nof%2FTJo%2B8xK5J%2BtRy0CP%2BTS7xHrWkLWgqESVxH%2BryYivtz%2FCPWHB1fPhPi9zDsAE9Iy9xFGb%2FeV488uLREfC2uvUVGwLzGeBgjVVE8lyBaVycrUB3ZARt5&X-Amz-Signature=15fe9d5505fceb1d911a213ee8c5fab040fad01e72d34b0cda672b574007b8af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TACLOAL2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1%2FaR5jUKNWiGbII2jb54AX002jnzA9EMSgn%2FFLcsG8AiEAqMDnA9FHnPX4sADxKKA97ZpYjbRdLWuxg7J8mhY8IVwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4E%2FRgMIJstAiH%2FnyrcA1ol6uNjKqvh72Vy%2FHhGLygcQc6UyLMzCtEbrnjhx%2BktoeRpm6R5y2NCi5xxRdBXjuj%2Fp%2FdSorqkv1J5wUOETrTkWrMoxOgG408zHU0IqowsD5CSIMPNdal6OzMbectNCKVUzaqo%2Bz7HyCkzDJsr3b7%2BPf%2BwlhFF3jnwOmAii%2BdIaBBGwDDLiXKRg7xsCXMnMrgjb1r1uMWNqHUd70%2FrrE2c6ruXkgge4ktbttIz6l9034aDTQkuoSwakqTltmHMYoJtLwCLDixFW4z8GMnkL7cO0MstWQ1eYYgeNgtx2npItCEM2cUbxwy28FUkWdx8Yz9V43jNdl446N5pDmBwfAx%2FK1R0gFLkY3%2FTFzZyz1Op61gbCnb066Fj9OZ7590Wh35ptpuWMDqZH5XR2O7CUbQNGVvpwB4bCgpTjClmC2IAtDh4%2BDHxLUg0nvsXHwDGBAb%2FXALssfKV7R%2FjAxSPZn3ieTZY%2Bq5bzHICJShA%2FZm77dCkMOtxC8Z4UmBr9PnKNpUbm31SZXS8mW7ljPEgqOTBWDWg45fHJEy47%2BlHwUXsVvI8QmwWAIMgu1X%2BFjmyf550AGMRD0fdva%2FT5%2BJuz7zVOin4x5YNpCCX7DIul1MvDCqzS8KpGtitCQJqMLPv9bwGOqUBfm1hCW%2BpHHF50g3fdo8y0My287qOv0pSu8SO%2Fl0dnA%2Fzrkjo%2Fjx0xtTwUYGnmPRIdnq9338lStv3d%2BHJP2Hg3jVrm7l3A1HBPBAiwGZ2g1Kzk1tdN%2BehsSspC9XKQPKyOUjk5c65eVwG%2FnY2eF%2Bh%2BtLUdYwh31%2F2Dap8czzrYS057%2FMKHo0lEjmS3PP5yAJyy3iQKpG9QUOPlYCmGBTDuKm6BQ3C&X-Amz-Signature=1ab9ce87a05b3e34d1bc2b1c6bb69d732cba4e1d59349fe8df0586a3020e21b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

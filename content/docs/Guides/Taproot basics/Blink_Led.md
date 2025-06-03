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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZL6EHU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCp7mRthN%2B7PQ3EzXS6v%2F7z0Leo9ZrShuGkig8FgIwQ%2BgIgKsC7bdSjwwMaZtpKRc8W2pdx6oSZbcnLYcWkVLWppi4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGj59dAkMuXggbkBISrcA98nerQL%2FIKzsn7e8TOit%2FAgfmPaarpYR2%2FYXyTSHfTUE3ysnvloCigyAW1xdugmiF59jgS%2BDcLVa8rkQcypntE55yvs3ySN89C4kkjcuF6Iu4KVVD21UoZzgnaseQvhQlIQ%2BsYoeB5m%2BBR1u7CjOn8nh3Wf8wWqKxjEPGhfAv%2BXmRUsFZ3qaqkUkTso%2BoNRY%2FmeCYbYxIfhs5vhZR4o6ujagiBFn4Abeoi0xDj%2FMSzPKdwLwqCf5Nk877PIhaYyKwJKBJDmrBzO5cf6PQD%2BMWWn%2BZYYy%2BYPjtJf7W0mBkLsO3LBJQNK0axWXHAXSkDIMpILJvD9ImwBs%2Bc7fIRUKJ8v0hz4Wv8KoTJEpDkmFyZKJUJ7fiBrICj4VGU8Hdx3%2BTsQXh2TszLGoAi%2BvfNIDN0vRzRidu5SsJwTPW%2B1WE5Kswww2hCWd2oxPt1rre2iYLnTZVSVoXSzU374ce2SAWIrrYlvjM9A68MTftlghuDi0ZavOO3T4dUX7A2mzgVK43v2V%2BORVXtW0lf2nPW58f03MGPNNiL1xvPWw21zT%2BAWzFi8uJoMq%2B0i%2Bvnw7OJDrkzEgFEg646pDXCx4%2Br89DGhcFFrzI4gB%2FwrxzRjiHvKnk421Nj7e6ut2p0UMOqB%2BsEGOqUBY0dPuqmw32e3xRgWGnpWpEX%2FfHrHsP11u4mrhaj6SvCry%2Fg983gN863kyfTbRwIEGH21gTJmhS0o2oMaADV8WyGRFyUnrjQiAywcVZjAhTKHYO8suJVL8hdyHJvOUFpDg%2BsNTNFJUj9tL5AnBWmIT7XmqZXQ5eKeZt9t%2FqA8cP1HKOOFpzRYTmvAhDkBpY1zayItrAfnOCPZwv4F9FVaqdtK16n8&X-Amz-Signature=34e82d4e9c6d2bfe527e81f9f2884ee741799abc82bcae0e3aa64f94b2b59714&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SJVXWP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDtGdISlmYY%2B8RQlaqjArMFbx5grwzc936zuxe0vuaTXgIhAMHcfZVegNXhqZEzRjCRGYH6VMeRVHtXWETboHYV6%2BN%2FKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgUFfKHI%2Fe9tSgDPkq3ANiAyIvfmiDiw6gqKY8cf630AUfXFGC0jQzKwJXbnH0CKjGAs%2Bo33HSlWnomRPqBjn2Mcb2Bpqhma0xBl%2BOukofIkBscjKnVaq5PuelsF77qKUnVu4EVtnjuZMZVg5%2FtBlnA8Vc1zt2FWuBAiJebNSWtECyWBw6kYcrNo57Xk1ujg%2FS4gaD4YdNRCNqiTpma9LgdCmU4R1OVR6Kwwu5Q7uzB%2FqboNZtbh6FGMFU1EP50m2meqdPoioKxk3K36SxxUbIyrguRPeCN8bWZWjnI6cTe2zTl3yDZ9piSDvy1rfGnsFivk53tbE%2FqzRAJPVlM3B7Ll4NqG2rJ15ZSOQgoGqhWfkUIahjYrut%2FnOkUg12GF2%2B71gnZNPgm5MZjnIMnpZO2xbga0boNvBfahMeoiHIotk6jxferp6R9Fy9Tlbe%2BMzCSLYsnTaTab9CIa1YePdH%2FhpAT3L6GjtzQncFtu4JFIEjnPQzd2UO8x%2FhK017mTokHjB0YOVA5SQYIZp7CDuhTO5ipukqT32NDkGL3IOU6r1TSyX5%2FoH8DoNDvjOdpXM%2Fsft%2BU6in8KBwXQ8P3%2FsiVFLhC4FBVOQdCW6NFJaeNIOYBPuIZbL92GCxrRx3PmGHy4Ji0JywBdyEwTDJgvrBBjqkAdq1rR2W9T7FVBldA0x74tCcH7cUpBPSspzXD%2FYHTH%2Ffegbfqze8mScDRZVOrFRyAIMfxVMLRWgxsPqIZJUrbbLbOyZMJmgVm8nrT9M%2BAZ4LB0zQW4SKXQJ92%2BGQW3x%2B3N8UudcR3wNHacVR2dZc8RD6LBsqiD5mM3iCRaWBbMMkh65CaqcKLRFn8kDfqVXBH%2FNSONKSgDUCOPiWtHAGQgAuvd3b&X-Amz-Signature=2ce17dbe45a5c36b45a64a7a9642f2b1f4b7ca56c22f4bb4467e7f6613589d87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

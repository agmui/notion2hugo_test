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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCTPEJU4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F0%2Fa0SYueihgL9H6AYr0ct8VA5922xVC4bfsCJGVo3wIhAOvVxg06V0TLasvPtS%2BPRYABwQw%2B8yABKlaQMrb2OfKeKv8DCGQQABoMNjM3NDIzMTgzODA1Igyen5V1YxZBHQbeBT8q3AMfWArlSONZ%2F0nwGfPHhv1tfX7gX0ZA%2BYeo50WEgK%2FQ8DG%2BCXSNG8hjLXK5IvlOsdqdgQCGsk%2B0vYFkztZPL7uSq3SCfXRGfZJK5ZYsrK%2FglG3W4WkfVWDzQ59yZc%2BMzYXg6r2aTJafxIGuJ7C33RasqZ4i970dk9K22qzSF8vlDw4Ry6LiScJZ7vjCdJ9gMr5DYkmpHOcpOolBI8Ib%2F8DkURa1qV27ULxS771VBPNUeOvOrUe24PwtiWcCulqm2Vcqgf9wjokvvnDAXq4eySktqhSfW4jsI0nX4M2JZ7J%2F6uBv%2BvBRPbR4f1UGjW5zNgppyRDBF5%2BBMqopEdtmpLpEbOrilnnSASLQoBkLWQyQf88HhZdb76gf%2BufrIlBL5OGtiZPKodEHP8y1n2vlSgpFeNdAaDO%2BpdQykY7LeSvNXctDMe6rJAYeeYMtHsj%2BQ%2Fv5P%2BH1nM5JSkIAGkNcXK6iVcSrRMLeVyEIntFnMFFBP6RVT0rZUi4Eyjqm%2FSNr2kFhmxYMkrPcWrYIBNm19%2BVS4uQ3S2VLoQUYhbhsps0fO7F8nCnSXnQ4pbggJDhOvrZr1hoLGjSu0NcJce8i2%2FJCsH%2BLfLzBPtQde6O86iDJq%2Bij%2F4lOEAkBgclHijCy8bnABjqkAfAxVo6Mrr2buk4zcgT8%2FJFAkfQnD5jOutLrFnKRa%2Fa47TmvhXbk%2F9EYEEx1niVhGeRJbe52GrAjizBFpCwEAq6Adn1aLlamy7yRbCiL%2Fd7kVxTW%2FjbUye8bcpwVVAGYjUXJxBicZpvyzfPCCjf2deU5bcDoy8E1lYd62C%2FHBzuxFHnlm%2FhOEMldFptgtIJsnlMmNGMB1xi97TGIJoAFtl7AEriw&X-Amz-Signature=76ce4593d616201c072ce70352d891f6ddfbc6b9b08bf8edc81da3385751ea77&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJJXPIJD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWTsrsNp0A%2FP4NN3sp0BeUf7Xo4O5HFD1vxVvKUjF0TwIhAKpZJQL9QfewvIw10dRz6zabaoD%2F4leyJI%2FJq9I9Cs0LKv8DCGQQABoMNjM3NDIzMTgzODA1Igy%2Bmn6xo71jDR3ZyqUq3ANTNk798OxeDRHsrvHZDIDhLfO26jK6JFdOxglgaAUJsRDUuOcTqAR2itNnMvR9MemUkD31BCau3KO7WlpXdwRjSRnbdIcpr1tudnpViMt%2Bs3LHKlZN3hZWAoHDzLXCd0oG8q9149c722zVrOG0CLuLQn56yGbDQ%2Blc2VSyM9J%2FNgro%2FhTp4XY7peZoXFRL%2FQYyI%2B0jIfx0jFjtF8ZarY7MizvkjjsPKMDEfTyooF6qXTtfBTb56b3tVRz%2FzCy1okTtJSAn4qwGKUezNq%2F2d0DLim4G6XuxnjtLuN3QkzEZPuKQXFvlf2Ox8la2ln39D9EuYWHCGceoM1Pv6pMzjMGvZYy1TW4AEI5yoIGDPqwXVySF8zjB2XfxRdOMlo9sfQnp75qlUVd9qaaqjnYoAfhjEGhm6%2FGG57wczz%2BuW1VmAmZfL6pEnz6CMGKoiko6LvLvcLjRzMdq4D7k5zPuOqadqgz9m95lssGE8ljMgJJ0XzaISpBVjA86AFHg3ItBKKyYecj8MEyUVisf0hIjn50EA%2B6MlDI6i1oCa1RFQD0oNFbCwqHYIJNryMVpi5sfte0zP7Mwbgx6b0wNFItCq3UziKg7NKtFyr5VOL4CUM9a2A1ldENNeCslKQ5cDDCP8bnABjqkAZ5k9k4RHQtMJxzWvONpBC2aybpP2izvcnwMvkbJEb5D0YMV0qkB0DuFltJeFOHA%2B%2BXgbm%2F6LtCEuJBrrzS1XkXsebIjpYKOe2PLDKx8d4rY8WCQmvdQonBtTw9fRQlEM5xtHamst1jw3bIYNXVKB0jp2kbZv2dPsW2db9pk%2FOFeda9zuGWOQnEvlZVETyWQNx89Y%2FeiarTHvBpmf3NcniDi44s3&X-Amz-Signature=ac59b140592d3529be27dcc9f76821ee2e1dd0629df2ad2c512f60f4dff99787&X-Amz-SignedHeaders=host&x-id=GetObject)

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

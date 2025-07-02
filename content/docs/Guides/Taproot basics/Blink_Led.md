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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPITZP2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQdp%2FPT96gnlY20bMV8GLHKfNo8h4s8aJeM%2FKAkumbiAiB7PUQMHcrLmQcVstOzyE8KuwUK23kTrcS0Bk7%2FwkDMhyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBlUZ8AYISLO9l%2FPxKtwDNj4U%2BxhwE6g66UTOuGnKYzbeDd1p1unDodbkgF7VH2PZxFBesGVl3pYSqydjHzrq5%2B7JNu67sSb%2FwMoaRyEyKAs5wF0g3XfFmxo4xKnyICElEJ2cWuXQKU%2FcM6RymghueFT7h4W0Sg%2FwUykKchFPefrUuh%2BTLzwmfNqv9ceR9kSUXzr3pyjW%2FCt5icWAKeLbKvJbSgbGwDSUjAVCNkw2jsEt6TbXY3QoSrLLzHnUJflIMb2YZqUjBCvv38UbY7IeTCr3dkJ04pNZtRLG%2Bo25NqjmoiukZHvixDl6UWCqvQoYMRFn%2FJ2zIS%2Bg%2BhPHGD66kW90U8xx6OOR6LBFpK7sDrVfKusHptEi%2FmH00zV79gn5m4ovx9jSwmudzTr%2BEE0VS84rIcyENS4hAgeHucpL%2F%2B7JhU6ZgSnwzlTdR1931qSNcsjFs1%2FWJL5H8B6N7zOmUSlhq8SUilDV2jn1PEJOt4emwF9ctkDqUDIxHBh0U83N60Y03Qh4p6oGv9seJFU6tbiYCKwTEQis6wArdcgkErS3UfJ3URlE%2Fm8an%2FrXgtROGs5JsoiRqNjfuL%2F%2FEexzjgsM96LhQSvkMwPT1URQ5HIpivsyXJ7BJ%2BAEVd5uZugIXfp2rO%2FWujMdPvcw6dqSwwY6pgH%2B%2BN%2FhT5X5Hyuzx0uTQX5M20h9xlCImeOx6nn3YiXgYE%2Ba83bQAdgY3vjOf2%2BYm8EJ%2FRUcMuzRf7BxK2RVu7zuhdz9f1G3v5dp%2FeofJ0LHgsuA1I2mSZ9ZUta7Legz1oF9dfhjp0u%2FKY47uAPc6r2uLLLhyCovH%2BYg%2FESv6%2FT%2BFWoQtDA%2B5ppRYb2OJ6bluuL8p3DKblNyP4poIaHb3tt%2BFAhh1Z4P&X-Amz-Signature=f896b696ba92c03cec705dc62e2ae6a8350162d5a8e64a5563a76cd3f3b7036a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTYPYNJE%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAx%2FkR%2Ff4zs%2FZeH%2F4686fqFOsE2vNFHHLpTIUzUTT%2FbaAiEAmA%2BaoD7BMMdym86fLI30S9U2zZvjMZ2VWkZofRvWNT8qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOGVO65Gf0IECgO9CrcA0I6iJWYZpoi2lnXrt9UypcL1GdaVEcqsbWSrLfVNndE0RjzbVpDK%2BqYgy7a9SKh64uC%2BLAX9hwy5GX0%2F9fdAT%2FC4p29ocen5g0PvOyVl0%2FTtCqXxzf%2BZM4f4KFy1tbQMQ%2BZzA7sOaJMqXKXvWsaItvfYusKiOQmEzfTRo3xK%2FFBI6cUw9Ng0gMm8VtcpZlg76cYa7nsLKPmDwCQYJJ9kuiQsOMsQcaLfWlSWjRDEsVPXdCl2g%2FJTglbG1eTTavKJ3xnCJWNVNKPc2GJ0hJyBcbbNOmcWn8LWgE8hcb2eCrOtFvMHT6Uk3EP2VaEhbA5W%2BhTDW44pMfkh1GLjTbaKleDLWEJetJwHUefjA3Gq6lCNyVmvygbI1ak5YEksl7QLA00VqI5QJjMEgHN1m8y8W5ptYeasIq03n7nVLrOTGJcyO6vA76drXJ%2Bw9glukGmJQlSLQoyTAYMJ37uu37C4k%2FNQZ0mkeEiBYsSS%2BtD2QSA2HyMkG78x9SFwx4X8M0qFOQS6ktuI7%2F%2BiZpneXlFxy8WMKm%2FK0WbPXTkH5RKhb59vkZYL9pFIVtgsAIvb3qBUjgs5%2B%2FLfh48qzFlnr33Uwfdq3yrR9tTywAPNluWRoAh2SvijXvTgzhJfbfIMPvZksMGOqUBkC7mufXsYJ5St7m2E%2FlhIFS%2BmFmruqvzrjNo2xGcfENTwnK311OGyxiCuGi5YqA2JAk0CgFaP%2FU7LRcWA%2FBmzDDnIwfRe%2FwbAfNccpUQhPdl4jHiEBBUT%2BrlqmKqeZ1U7%2BpWLFxb1KTF5w1%2F11Nk3H7cuDDQTK3yQbe4v%2Fp2prSZf4Ks8oG8Rl18qEEek07osAWuU%2FjYzfL4h4gWxUM9LbyYUZnO&X-Amz-Signature=3b8af78e117e3ed93e4c48a9f260c7831650ee50c182eba92615e4eddbe1dd2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

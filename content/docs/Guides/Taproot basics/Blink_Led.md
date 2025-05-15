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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOERFYKO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBusns%2ByV6O%2Fig9iETwPzBzTgX8jVNZBOz6x4xK53KAiAiEArLu4fx%2F18g%2F1cw2Pa4BXIf0bOSSshA1fMET6JTSayyIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDKTwV3wQS3CIn%2BF3iSrcAw9%2FDUICt61rHW%2FY9Zuo3j1K8OKBQH4Y8RwmvWae2Ixhfja5gUORlzf8s1j83U9SdOp4XM%2BN18BqwhYpqcucb%2FS2u2vhK3uN7mMdJFp6WTqgJUo0NuT5UVQRLiQalZ5kMOl3wBsBWL9eMB1zZGj2K5%2FBQx0z5DBNaJmz8Rci9hDGiYtFoB%2Ftm5E9Bq7W6XZ5A0SsNylW8evxgaiIE5BC71IIU38fWfMGD%2BMNuc0w79dgsROucGAPIz2ThmblDY3hgU6U5ux7igde5SjpUwzo1ZurJzKzJNF3yjoYU7JrDg%2FHQjZSO%2BGMsD3VPVZUk5gdMi1JKe0JVQi7kH0WOnD7665ECZpaXMzFx3kil%2BFcz4Ofdy%2Fq8OskhPJPlhXPlAqrlymf2iEiGGTAXgNR20800SXQpx%2FfL%2FEvS51NFspvmzIzSzX2IAufPMnUAP45yTWHCYZq%2FSw68uXJOHbS5hpa6RDE2KZYf1r8WI0zMgf77Jz3WWJ5CABkRWfAkyb4zlnqNmLjLKoDEF2K0TzXrxUtzSOd%2Brx9yTIfgG%2Bwpw%2BTIICcJcMfqL1No3N3pbg4h2KLYYekiZz7oLB%2FXnNHpm9slgAQU1ImYhUZLrRn28WrwMdRIgMBHXL09zmpq%2FptMJ6elcEGOqUBlSm5412EilHajsvnFadB5N3I%2BfH6AwP%2BBAONuM4%2Boz%2Bix%2Be87MEiNh%2BzbwdSWlpi9hDQjOXi0u6QJHs4gy%2BiqvzMYHs9ajNH87Jqai2Cskc7b%2FvzFX3HG%2Fm13Y4LeREWBkS%2FqLT1UP%2FvS%2FhwIKPpdEtDsptRVO7Qxn8DcUS%2B0oQ0nctmLVS%2BTtmEh7AjDEERqm5QZO5L4ZKUhi8XuAGW9YSN6ZvB&X-Amz-Signature=211d70652711b36544ea606b6984caadf15937a47d52212fa3ba96c92bd6c0eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOAWZ7M%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCICO2Hm4ZyoGRljaF3QKEgqbBuxGW0I2SegCshOJe5l1vAiBi9rl%2BlhHsjI%2FWq1b4Dzm4GOkxuCkVk%2FQxMMdeydnygCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMSDvsRlVRm6uSR04rKtwD7cQiaesfym7vxr1nEoufP2Uod3SULFeosfHH411lWYnpejinLu2xAl31OVb%2BDz5VZK0XfPajcdXSGgGuo%2BJvyizM6yU1Q%2FgMmyell1jVfTHCJSL%2BNHvmnduQ7NlrVGcqaahhZW%2FK3nBnMdoBlQWDXrZOSZjxIdg2edYUb4OPgExO1YRF6YMOYTJhxZVUDBvCogcAJOj7eLEfX4%2BUJ7DlKa%2BPWCSrEmZ8DIlCaJE%2Fl7tWQmlPAm%2BsMM6lpPze9ykKzo6nC3p6ETgDq9gxEOidKwS9hEN451dyae2EzZ06cxalPhhdA1Z1iSfXDXt5pxQoVIk8aX5Q%2FBIEzxMzxrNaCOOEVYFxI52xO7DHpITPQvKRQVL7GzPCg94T%2Buqun%2BZgjYZaYDwoTFzb1JHqq%2FRiYy0FLHnTNGddqb6hw8kUH8Dq0yjEFQNmfpEXPNXC%2BRQM38OXe5P2QSeFz9AokcC2IcViiH5OUUYwQyyiUgZdOVEQVuiIEahbQsAaTeDuT0x8hGl7jUSNxSbp9d1OYv%2FAgkR%2BLlCVeM6YJpKuv%2FkcdMgNKFQNcVt6aQ5IkW2zgL6T6dyX0%2FRdUQKQpRDNqECJoC%2FnqMXje3yPqk1idKu%2BlyGS4KcX3Kc2%2FFJN1Lswup2VwQY6pgEZt148wPt8yBrJlzVimFQTrLgUwua%2FcyRqVbevnwHW45ZSyPnqNcG4w9U%2BC0M2LvQHo8tNN6VwlsHSYFyXF1%2FFRfeFJ8Jmoe4%2B2%2Fw7Wtkh%2FaT7vzSZNEB40OkGEOzPrwsW3nz%2BlNIJ00A%2B93FoMw%2FXbPdqcWB56%2BzaXBNzOXWKf4r5stnnuPlHqVPqUF199laRhFLKjbARKc9HUkpkmAx9QiK3We1s&X-Amz-Signature=8cdadb2fc3016b9b035c7fac430d75c4b12eb135b39858a59fd37decb743edda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYC26AB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe9kBKxqeHxh5Pr7vMfCw8TkMiy8L0dUggSpCFvpvy2wIgMcsP1doyhBjDlzyfj8IyNgx%2F8WSAoey19%2FbM6rPznokqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7toOZlmlBYUSl%2BuyrcA%2FscZHAgwnO0uXHM4gtDZKhAsiMfyqzJvH1EB0uL8%2FKwBC1VFyBoBWUd%2F%2FToiBuuRMucm7sYFQLBPvBJaNntAYywouZdZzOqdQIU%2F8N2wGnudcGk8DehZ589dMCx8iR2vtNxvDwuRuOviysxKhEIkvKeaxWp7ofRIt4sD5syBSoXWFAmBLWEN%2B%2B8sHO0WBxYB%2BZrm24EKHm649t7XnqX3Qr1QJNoyEFippW6FsVk8dMenA3X9rjyf5AMLBha4NcBszvjDDoelJYK8AEWJ78B0aV6NvaEO6ad1Nu2tFs65je%2BOKYe9zsJbf3vx%2FWNEcRBhRg1IkgVNEAWumm1HrJmkJHymYEw3U1rsq2Bbbs6NIhBZPQDar2yE7jCfDB5%2B0i6hgS2CbXxTErI52nlf5lkxNd3GvF%2Fv%2BMdbHLW95Aov8KYsb5pZjY%2BAyqSLtw%2FgZljUmFhJexe5mog3qHQUI%2Fdb1dOpSyCaUIcq9PTPDbS%2Fsnfg0OETpn10qOwG6NBt5bO7kwpUIZLwQ3%2BdPZCt04q%2FoAVYwInhajpqvbEOSb4GI6x%2BG61Anh69id%2FRs%2BpfhBph3Oci8e4938wYrJZcdOp9%2F7F3SmYADq0awclNM1Xgstlj8C068bxp6BPe3rcMO6iqMQGOqUBtpRgZYsDH%2BRJNWsHQv3MLo95aCwaH4VslDwp11RGFZrWVj4iCRLgHWLa%2Bk4JmIMnJv0kYDEMyHGRoddYJU1yf7MR9ncpUOGmWgzE58V9r0HYr%2BMD2VL0Sxv75go0PveptVYHpvdfEFfGJgOk%2BgAO8zM1LFkAbGjKIMMwkvdTde6HCzhsyKzGuCl8ybxh8jW9fB8ohbVoGmSYsoj5Ap0Dsh%2Br%2BmFV&X-Amz-Signature=3143018be1e3c21b17c410a802637ae601188069afe967eb814da65d80a984fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAMJTZ3X%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYThsp%2Bssn9TpeAibV7inlARSWFZyEQRwACSqpsOlnlAiEAl2oYonua72yMzbMTQJGUHQ%2FhunQWIZZyJbVY96SKe10qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjwGkVE7IPBX73YZSrcA1fCzXNe97Sif7LKoU%2FYKPxOGEW27%2B%2BfXc3MW6Zf8XAXFE3TZC6lKZnppEmFeWwOmE%2FjlLbksSkAijtMQJ0j2FoW2QdFPS479D74Jpd2ngmXIEjZO6n0a4A3tCTH5%2Ffh%2BlVj9yFQ%2BOlgxN6ShtzsnjC5%2FOzTkQXlhgD8E%2BfHAddtX8tgRNEV%2FCRN0CA7YV70CRg5uOjLOrnShJODY1jY0aWo3guSW2WQZMy3889tVpawEeF61MIn2e1Q7nKzwzNLkQZjKaOr5iauAZjQAgxKTUX24rzCm4crjluhq4gCTOgxr1AVbHiEdD09FMyXUw8W%2FCaLoJj%2B2GIEpyyjetosg2mxoVrx2FxupDXbd3Zma%2BLAcKHBz9MucCm1cljJR3UDnhX%2BujQOIb8Neeyn1QYkcPpYOtmRhifG2ab5t6xTXS%2BSoBDKQQKkasW3pJd8aKgCidvT01MHVdJDuVrxeyRsANfIrnZzFiaNSwdP34eZ%2B8A8R6%2FDU0swBLBmAgBkZLZPuezxxt8BfoxKC%2Bs3GRjrtyXmBtjQMbp1CcPk9upvOwRyOCJrawhbiVxch7i8T8%2FN%2BZI0VGiXz%2FCdXuwPJ8F%2Baz%2FPbuczKRZFS1RX9wfe2qJXggUVkJdsuFF4ymZcMPmhqMQGOqUBf9gDecZ3jpm8akUarmoQ5oh64VnRgjJTOneGoy2tmXh3GcryKE3nVEs3qDmnm6lUhFL2QWFdN7IvHCJh09q1bDIVpYSy1JJE6KWJgcYjZn9HTeQ8b9nqP4IPZNQdLfCNiPiM2HRwrinTn6VjUpjIbZRNOReTjsrJaONvKo2PL%2BY9GB8ubFbv4D0rBnHHUQugO%2FLoM9KK5epM4NeJAmX9ABM3FsR3&X-Amz-Signature=fa5aef3fb0dd763253e0dd05bed629df0307cb8127ce8c2a987c3f16c792fe11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

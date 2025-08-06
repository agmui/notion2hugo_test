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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4QTPUMO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCLn6rw971BtpbOj%2BYFGsESvqmMTArXNHpcDZ0akhxzUgIhAMqh5sQMdCwict1vKOHtfKLkPH11tQrhjQbg%2FRdnSh73Kv8DCHEQABoMNjM3NDIzMTgzODA1IgxIxK4wM0WdH1xSVBAq3AMfku0%2BUvG9AdimVVwxytpxDg%2FM0QypW6K9aLPcZzYsVG0eV8l4sUeU7wUHdEcK11HZKajtO4pp3EhuKNhB6S9PPXbUCZeoXMzMhNiI3AlRh5O7pQmDx2NsdRA3rBrY6jMI1jvWtdq9rTC6T6iOwy0t%2BZ3tEkY70EFPHA%2FI%2BQn0yfYJ3mQREHZuOKpx14r0n0EGLy68JRJwHQoshpLijaYo2PEh%2BKmKCs%2BkbUclFh3yKYEjFWBDal81AX9mZWEy9wixF9t6FJwfs0gX9FiNwnip6Kp2xGZ5noE8q4IPadrWLkka0st%2BEY16EDCz3N4V%2FADBzBWU4Uyzhdp%2Bp1WYfypJY%2FJDiSOkytQGmyPphttRZiQfVyO4w6L5vldPF239OTYwqyJPY%2FBxUWNPinqLfWO2yrwv0jflxk%2Fq2N1ckSjepB4nViZ2HXWZWjfr1RayaZumkL6K3EFPVtzA4TlmXHlYGXx4tjSovNe3%2FfnuIMPCfpnulaGsBh8E7S6VAECKHGUPCid%2B5iIj8%2BRFv7l6a5YrGxvQ4PwBR8G1DPqDaieUEuJCV9REY%2BZYMa0pc7CkaRHYJctgGAOT8xMnI6FFFIbSVhGjcigIFZinapPta1e3GL4ojo%2BaKyYzfvCPZjCflszEBjqkAap2%2FP1sa%2BqOhkTwaJxuOe3PFo5fuFDbsYsSiqEDrIEUNc%2B4psGZaxWcak7UClBx6PUs8nGJxhfboy%2B5LR9QEOMywA%2FEPyZy7P76%2FZF5ZIdXhPHLM76%2F%2BPWWhTTd4rkZ2II79FLvVCPUU3RSQ%2F6F6t9lLRY0iVmHyVY2r%2FeszP5msgNm0ufm7gbZ5cIj26xg%2BITJMDcSCqt%2F7StIcfa8oU%2Fzgjwh&X-Amz-Signature=b203741aa5e199b654b224ad1bcb0529aa6a331a2e411ccee1e4f61431b49b46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OK4FDPY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBDYxDY64MB4PZQHynuwx8iZY%2BrX1FxeoZPWFipXiFTrAiEAx%2Fy0rNNRma5rHDe7hRJLshueIvlZyG%2FEs6upRaxH318q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAfsinu05SguU%2BCNqSrcA1I4XlhFLGYNCXpmRSoG7uNMixkW5H0%2BS9lQpLMlckmvrjIAYxLGewRi4t6TOmqLSHBIf%2FBapa9m2bsLU5eWCLtl0V11fd1w8ofhssbXlXSWgeImnH5bwk5GKNPTs6U9ZQLLP6j3glVd2W%2BOkYtyl4xzmjrp5geq0LDFFPDPF3GvLJChNVzy2hrPs%2BzoxXcWoXAKXKctPhlYNGbuB2EF0H8EJtVr9cLR0TVmZvHqPNk8S5e6T759b4YQQBSwIWKp1jilrlMdaMFlgdfpUoo8JzKAsjXbEl4pLyJWmL5QbNWi8V%2BfknKYXuAfKu%2FWr93pbGlWWRY%2FV%2BrUSpjWfFe32CswKSAgvGbBPLj8BluToyU76KXDWxtG6lBSUu1MgELj7E053C0zZKx%2FwfDdkfkHFR7XtCEwdhg2S3EKGuyNXzX2xVnF9Ia4oXvQcJWr99182BzmCmf5eZitaJ2Fq9x%2BwTv%2BIcLXT5CfTF8wQ9zjTu1d5%2FvVqIY8g7%2BrMkwgpoi2RsaxIuQ74gdOMc8CwQ%2FIImonEzN98Uwejpe5hMtbOHk9nxJb8xxEHjTyqvrZ%2Bx2PcIJkpV%2Fd22sDXFlFqAOBWlcjhfTfgswLzXTVjbB2WhchJaLyekv9w%2FCzLOz7MJ6XzMQGOqUBg6ip2Ma2L%2F8PVc8F9tw5z9ufs9UE6ikymJ8s0fpwpmAUrEZFIlMYhn5UPuJ4knIMADVA5eCqkaLLAk95GBi9wFKGWWHps4ctkdCLF2zqHKg%2BogLmspk0jfE2TFtg5tNqptJOGXuNowhXk6nlNyRtiMLcVlAbuFeNKeHN8zAMxmpJ7DB%2FmBtUtY%2BAmkC35xqMNZbMzJAeMq5kY4%2BWfjVd3j2eu3Co&X-Amz-Signature=95b41084c4271f3da48a8158c5202b4d3eb8553a81b4a8db909949fe8211dcd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

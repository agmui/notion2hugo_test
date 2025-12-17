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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642MHY7UW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpNCmj6aKHlEUUqIHHNVsc45H0MLNueKrXYg5vzjJB9AIgBuyF4m2LSEUXaL5QUdrm85hvMuGwfuYR0%2F8rdKPTCRoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHapiePw0AjdvCduVircA6NAkQgB8yZzTmc%2FbELGsBD%2Fdj8%2FsrKpie3VWt6f%2BGKFI70ilLgdZmp3lKhxtz0DXBdkdZHzrmyi9NiZH2WPaLHqDm4mpWbUUFdwkXtBJauzXemdcJRy9J6eSFgPVMDLiFbSFnu%2FZM4sJR810JFJl5jfrS3kmqCVSDWqFuYroAPBDBJ6Y0IY0mQlY%2FWTAjh4Tir02QWaY7Jw7eaLqk%2FIuzR99MdPbzHygsk8xAcW8Nvahd0RaRnq8TVrgUtMeFWqWbWC9FUnhnPjfKdOmN1LdDgaf0iehWSQuutMce9R0VvHsfFhdpJ%2BUxoYLC1h0bpHA3VNSgwFCcxGaJjCSETyQ3ZKn7pfkLRW0BbPEpFMxzhzYrW9h4VoO%2BQlwaJavaaUX7ix3%2FrjPPDlDwWJ7VqT3RMBNHTP8Vb3EZ66lXEVaLOgtlD5SZFgzaLdyEUSHJ96OEwqmMVb9z%2F0eM%2FkfPh6i0f%2Bqxm0uYSQo8ghS05jvAu%2BL7LWQ6thAqoRkIac%2FClK7F10Fv4pXfmv98%2BSSdcLVAKc6etHxmr3CJsEugL7zDQXFIYnonxR3di6F9tREEKO1e%2F72gNEPDAxwS2jbmhk%2B58vq5fSBO1nn1%2FMyPeJyXqrrDkmEG6BGkUbocliMLb6h8oGOqUBHFZ%2F5XsCDXTeIkESBEWCzoUaSMJNiVfTCHckB0qLwmXc1cUfzQQ2Hk2FLCAOmG4iAk5bqTI71IGXnJDyXV%2BLou8cgA%2BwvZL4VAwI0B5nz4bm8t3Sv19lIG%2BsBIWX716Cq1bR1uMN6nzxTepyuG%2BYg91w1HJ3rLvnOry9RV7SwQUeWvwjltoCA82ENuommJkbAfxT1AYJIJNwcFR3vdq8WkdvXArc&X-Amz-Signature=4629e9a09bf3d93bac6ec394c062d4442e91b9cdb2aaf24ab1db8d8e1e6975b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HXJSY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe3nZ200iPcRm1zDALCAqpI7XigFLt4wxOZ03DCtBYIgIhAOPOf9MZhbqUXeEZ6sKMfA5VM8xp0lxLrtuUEkdiDIoPKv8DCHIQABoMNjM3NDIzMTgzODA1IgwQh%2FEjMnDn9Z5qsxsq3AMH0sHO0OFYGrviMKMgjBtHOErYI1bVh0ZrhAe0hmUsoXYpMmnzi2Rd1zyGQJUPLapoyDYFunMT6l9Xkv%2BgU87sUMeNRhAtyix74tGgte1EUdwmnX8sF0kWDgPozIZ%2FpTNKQEnnPiICA4v%2BdflkpXEFib9MG%2B%2FzX9VRT9GwwT4Ri8njDL2SEPosAFWcaXGs7EzWa3Ew8q3PER6v8mP0hzJjYgIKcqUNXlJZbDlHW4%2FaWIUoh8pZMZPqOfD0x%2BhpcXEMYrMHaGvT7U4MMhbwu2bSQpgxKVOaN6PmwW7tcSyOaBIND9LzvWbLIrtWpeEnOfifl13j02OBvTBOwlrMCxeUJb4nqqwYy4XJovfxtiRt20IqBCUlK19k7spAseIGIiojy3PMF7p%2BOJaogaU1vbIVmk3tK3QKUABAvRE8T%2FF6YejCxXFAd26hl53OwkS%2Fd0h9XFL0OQhruShCEt3DizRx2LUYFM1tBvILBwVy8TgcjlZEYdcbkizGDSRHDnKvu02Fiye5nLLAD9mUir2hrF%2FF8i1z17BuFsxIC8aiwF0ca2NsYjZZGCojN2YkfNreqndo4%2BNqZ2hFJpZtXd2U0i5oh%2BVHF8Ga7f5b%2Fry1NtwsJhH4zkBKNVZLJGY%2BKjDF%2B4fKBjqkAarGX6xyAkWyUAbxphprRjsfaBcmpj11tfrNOTGGd%2BIv0XQKqiy1Ulcv0rkXDruNiscoKW%2BpdzBLYuWRlEmVN2pVGPjxuYnrlL46nPnWA646DXxNa6%2BfzDAEHMKXLENLgM9gJz9xVzc8jipGt1prVHQ3c%2FEegZqV5WA%2Br%2BsK8sqPAt5GYVu00bT4eUuqMdWjTcjqrukFyaJQjJQM4GYzU%2FY%2BWrc6&X-Amz-Signature=7214876ed22ee4038776cce24fd57b4b2f0ead582bf75c154d933a6ac4a329d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

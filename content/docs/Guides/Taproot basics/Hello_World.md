---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667EDMW2T%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5UrxGFfGSB7CvXcE6pWcWgbQNOeVgwPabACdpSMoxtwIgfW%2B7ULVnJD13lFk1dcV9PLtT57nTpJjxPJUM9TV5r2wqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGBKCgS2k9U9s0XoSrcA771k7yI3AcsXDU471uoA6p%2B7IdtdX4s59ZLTdq0p6c8Tc5MAOvMT2cWTLRIoapxzfV2cHTT9gt2c6dbTk81eSy3oB4tzlTlwXI40xsCuhXUlqgZ3j40olmDEgH3%2BS3dfnBc82lTife%2FXbU%2BzKqnAwr4aam8do5IIA0pP5ScCrDzZ965f5kV37lwXsu29WWaE7eLHzTWkqw8RwjfzVXQdzRze60NtltISGaddgPYOwXplBU5Z7K2biU5bvWqnqRNY7hzO5Fl478NFpoxVh%2BdNPhieVu4EAeVZxoHWxd6J5tdmG5%2BBXgLEv4Csdf00RgF1EngewNMO2IcyqAruBe3GjDnKvtEnVtHJADXjwSa6yqNcH9T10UIQ5VfjiwzvSfQNaeO%2BiuM6A%2BbrSKkOvPzeMiPYJCxV9xUmCE7VcRfSsGG6k6xgD7FXuX9nYPyuVpPVv0x8rICTLAJiHbXaX%2BKFokyIJKVKXIh0QrtpdLs5AaENEmh1EGqB4dpq%2FhhTzTlH3l7thbDdFqFpjfwXRYopuRD1eAu7sObFeBKcjbmTCDTllx6RNeCCXsrX6zOPmGX4NSF8qipXZzxX5OEzVNBsnF%2FGH6E5sfWgU5D0yG0g2rprxLgylpgJ3jl2nJUMJmglL4GOqUBWmgAXpVvqYudULJ353P1fsEbU5RxniDNEV3UMU%2BVNRa2%2FHGDT2iBnVrcAeIq7L%2F4Z%2BkudAOOafx6zkHbZMkAgHlc6VRRGeAyoYl8PHeWW%2FVe1jTyuNdEzPHDEzrOFuKO7cbaecscknz2JNvIiYMkzDGG%2F8hUQeXg9aUUSsxYJgQHJQ0cTOo%2BPflYZacCYjjhP0Hfrvzghl7u49H0JqBURWOnD73Y&X-Amz-Signature=7eb5b5039da910f8f758c66b9fe9a142fce9960510758fd8377092b7ad9d4c5c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667EDMW2T%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5UrxGFfGSB7CvXcE6pWcWgbQNOeVgwPabACdpSMoxtwIgfW%2B7ULVnJD13lFk1dcV9PLtT57nTpJjxPJUM9TV5r2wqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGBKCgS2k9U9s0XoSrcA771k7yI3AcsXDU471uoA6p%2B7IdtdX4s59ZLTdq0p6c8Tc5MAOvMT2cWTLRIoapxzfV2cHTT9gt2c6dbTk81eSy3oB4tzlTlwXI40xsCuhXUlqgZ3j40olmDEgH3%2BS3dfnBc82lTife%2FXbU%2BzKqnAwr4aam8do5IIA0pP5ScCrDzZ965f5kV37lwXsu29WWaE7eLHzTWkqw8RwjfzVXQdzRze60NtltISGaddgPYOwXplBU5Z7K2biU5bvWqnqRNY7hzO5Fl478NFpoxVh%2BdNPhieVu4EAeVZxoHWxd6J5tdmG5%2BBXgLEv4Csdf00RgF1EngewNMO2IcyqAruBe3GjDnKvtEnVtHJADXjwSa6yqNcH9T10UIQ5VfjiwzvSfQNaeO%2BiuM6A%2BbrSKkOvPzeMiPYJCxV9xUmCE7VcRfSsGG6k6xgD7FXuX9nYPyuVpPVv0x8rICTLAJiHbXaX%2BKFokyIJKVKXIh0QrtpdLs5AaENEmh1EGqB4dpq%2FhhTzTlH3l7thbDdFqFpjfwXRYopuRD1eAu7sObFeBKcjbmTCDTllx6RNeCCXsrX6zOPmGX4NSF8qipXZzxX5OEzVNBsnF%2FGH6E5sfWgU5D0yG0g2rprxLgylpgJ3jl2nJUMJmglL4GOqUBWmgAXpVvqYudULJ353P1fsEbU5RxniDNEV3UMU%2BVNRa2%2FHGDT2iBnVrcAeIq7L%2F4Z%2BkudAOOafx6zkHbZMkAgHlc6VRRGeAyoYl8PHeWW%2FVe1jTyuNdEzPHDEzrOFuKO7cbaecscknz2JNvIiYMkzDGG%2F8hUQeXg9aUUSsxYJgQHJQ0cTOo%2BPflYZacCYjjhP0Hfrvzghl7u49H0JqBURWOnD73Y&X-Amz-Signature=4336985c3d1b6da79fbe25c17d4ef70531563c58ae8148875928d307a22d41bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

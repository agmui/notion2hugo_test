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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2EY6PV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDK8SHazsYtqKYCz8ecb9wQXySkKwbtBZpnWjuJzNN%2FhwIhALv80goZlFsgsFvq7YAOmF2h%2Bjs2qfXrtryEFUam7kzoKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK5Xp5D6wsR95AGnIq3AOO1VwYuaXzjRaJmV1g4De4wlvhSMTms1bRRMc1PJrq1ztQ49mz4sUkHqpp9Uv0q3%2FJbnq0BM2e3%2BnYiCcTYHFeWv2rGfrp3arFFKh4DwelsVxA0Rl%2FwbK3G7Km8Eutw%2FgDpzmXFK0jysm59BDL%2BBRE1FpCzrzRKLl0q3xAxI15xDBO96a2%2Bv6TMlnP37sb5hkGtE25LjAdUu3pxvRTzLg4BD5YiHZP2CgDLG3p%2FqLhOhogs5f4MsMKUPlIhtPkCLdRc057Bvg8CQVaCCu%2BKRXHkXkJ7kFTYWV9b3vNCN%2BU7u9nm1Cwbnktqkgj5F%2B2lqJu56scZeMDCEN%2BSKpwFWw9pmUoC%2FssWV2cd0lzAHAX7p9gwr4V%2Fhvc3g3GV2xTyuGze9asy5fksdBjPKJlpfMPX0V5%2B1g7JD7hqQ7tLdJAFhYAY%2FulG84FvIpPsrw%2Fu4lIOo3Uwu1wK6LvV3auZ4U8F3t2B2LLw0g4pNHjytwSoScAYB7fC%2FY7netyqbgOWCsoSwi%2FCspQbDz3Q5FT%2BS3%2FznJUZtmKuS9mOlg6HwPLZNaf%2FX6giM%2BU3iSyHvwDW7FEW4WW4LIn0Rm0WYrk0lnr7XPp%2FYd%2BA9fGtTPksyk%2F24JPK2tqErfTF9CmQjDHu7nBBjqkAXrmAp4lj6I6pxYIqbADGV5Jg4BFYHQmy0lptKF3CgEDjF0cVimZie9EVr8u%2BAzc2KF6RfXb5NckLVGSzE2ZdeAm0C32QDTyqWgdIRtKULgbJ5Owb%2BmgB9%2Bhdz7A5XnQMGX4X3fkPjs4WKzg69DK0L0QGc3lwoww8FM7Fs6VJPKnAdUfPsoQeUd6DznvHRCfOgLhbywIeNZInNQjKOE2rFI%2Flk7C&X-Amz-Signature=0583ed4f4e272fc9dce9b8b88102c7ccc5fa984e1084cfe1a7e56bb359c6c941&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2EY6PV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDK8SHazsYtqKYCz8ecb9wQXySkKwbtBZpnWjuJzNN%2FhwIhALv80goZlFsgsFvq7YAOmF2h%2Bjs2qfXrtryEFUam7kzoKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK5Xp5D6wsR95AGnIq3AOO1VwYuaXzjRaJmV1g4De4wlvhSMTms1bRRMc1PJrq1ztQ49mz4sUkHqpp9Uv0q3%2FJbnq0BM2e3%2BnYiCcTYHFeWv2rGfrp3arFFKh4DwelsVxA0Rl%2FwbK3G7Km8Eutw%2FgDpzmXFK0jysm59BDL%2BBRE1FpCzrzRKLl0q3xAxI15xDBO96a2%2Bv6TMlnP37sb5hkGtE25LjAdUu3pxvRTzLg4BD5YiHZP2CgDLG3p%2FqLhOhogs5f4MsMKUPlIhtPkCLdRc057Bvg8CQVaCCu%2BKRXHkXkJ7kFTYWV9b3vNCN%2BU7u9nm1Cwbnktqkgj5F%2B2lqJu56scZeMDCEN%2BSKpwFWw9pmUoC%2FssWV2cd0lzAHAX7p9gwr4V%2Fhvc3g3GV2xTyuGze9asy5fksdBjPKJlpfMPX0V5%2B1g7JD7hqQ7tLdJAFhYAY%2FulG84FvIpPsrw%2Fu4lIOo3Uwu1wK6LvV3auZ4U8F3t2B2LLw0g4pNHjytwSoScAYB7fC%2FY7netyqbgOWCsoSwi%2FCspQbDz3Q5FT%2BS3%2FznJUZtmKuS9mOlg6HwPLZNaf%2FX6giM%2BU3iSyHvwDW7FEW4WW4LIn0Rm0WYrk0lnr7XPp%2FYd%2BA9fGtTPksyk%2F24JPK2tqErfTF9CmQjDHu7nBBjqkAXrmAp4lj6I6pxYIqbADGV5Jg4BFYHQmy0lptKF3CgEDjF0cVimZie9EVr8u%2BAzc2KF6RfXb5NckLVGSzE2ZdeAm0C32QDTyqWgdIRtKULgbJ5Owb%2BmgB9%2Bhdz7A5XnQMGX4X3fkPjs4WKzg69DK0L0QGc3lwoww8FM7Fs6VJPKnAdUfPsoQeUd6DznvHRCfOgLhbywIeNZInNQjKOE2rFI%2Flk7C&X-Amz-Signature=e1f590f87fc322dfa39972ac8a417c53eb3ff2566ce0579a024c2a4c335e5c64&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

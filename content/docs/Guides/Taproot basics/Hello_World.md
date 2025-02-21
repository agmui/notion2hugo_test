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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIGHGPD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIYi2sU8VXDPwodVaH51LGQvni4juibs%2FrTP9%2Ft2g6UAiB0WWmKvTg4AisGYUqXm%2FoR11jnwhBWbSyebJ6t1jsOyCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BsE03E8jD8qQN3LKtwDb0jZFcaLegxUhkNK4QbYgluP2M3wtbo5wNq94K8UMsFdievPrggTfMCpOAYnL8%2FPdwsfZusWYIIt4plV6CuXKUL19Gi%2FY7fVMGQN7gZn6tgu%2FJ0oEi8IAMhqzJJDMREyrZ1NU%2FGg28%2BkUgtOEaypxbpK%2F%2B5j%2BYsdAa3cB5UN0Dn18OQZNiAEM4EkG7bWZYzEuhFJuHRNeWFb%2FKjDsMt2bq35yxhGq44RzAC1zSgYI%2BK5MUjVMdkvzdvel0fRUQBvHmBIAPVQ9%2BA%2FZjun7wwJCe594z1fjcYxa9%2FB4m6bYOz2SgpvymkzcS69h%2FDuTkmjsyWy0bfe4TnQ0cQ%2BL8ljZPdGVeQzsFJy1LMACMJkH0xQtp70cTZeIvK%2BIwYtVfuwoNh7am2ikxBw86NSMGsYMYpdr8cFYdnq6q4%2FTwHxD9yus9euTKS5kpKTqdzKuPpBSeXL9oK0hx%2FSvPU8%2FCPr6H6eOUZsvQEisu2hbzSsg%2BKqDwSAbrDFJr23UD9o4mInMN3DsOGImDHrzHisvpFPhpMQE256xghC8qRhgCcPZ02cfGonpRNTaikFTOArOag5kkFsZz7U1FVuvAnhLDKMH9egid%2B5qNjHCIt2qaG51WPZ%2BsQnfXLTmPnUpYsw14TfvQY6pgEqjEZpActhfrOstNX0mwxDwBTkxGQoGB%2FzigsYUaHk9WnPmZ8myWPB8EHiok%2BHJvtcShex%2B2B3566JHJJTad%2F95nLpj3RjcpvIJarMKns1ZQ7b2GJzjQfH5odC%2FItfW%2F6DYA%2F%2Bogl9064t3fk3IQBWt1NNx6bgE6wfiDLTOkGOI%2Fwnmwo88lBSDyxnIMM2k%2Boy8m%2BtirwCMjDvXvfiTAn6sfBQI7Q1&X-Amz-Signature=f7d03b860b87e78bef0c61527b2c6139f155bde1fefe269058392cad6dfd6aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIGHGPD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIYi2sU8VXDPwodVaH51LGQvni4juibs%2FrTP9%2Ft2g6UAiB0WWmKvTg4AisGYUqXm%2FoR11jnwhBWbSyebJ6t1jsOyCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BsE03E8jD8qQN3LKtwDb0jZFcaLegxUhkNK4QbYgluP2M3wtbo5wNq94K8UMsFdievPrggTfMCpOAYnL8%2FPdwsfZusWYIIt4plV6CuXKUL19Gi%2FY7fVMGQN7gZn6tgu%2FJ0oEi8IAMhqzJJDMREyrZ1NU%2FGg28%2BkUgtOEaypxbpK%2F%2B5j%2BYsdAa3cB5UN0Dn18OQZNiAEM4EkG7bWZYzEuhFJuHRNeWFb%2FKjDsMt2bq35yxhGq44RzAC1zSgYI%2BK5MUjVMdkvzdvel0fRUQBvHmBIAPVQ9%2BA%2FZjun7wwJCe594z1fjcYxa9%2FB4m6bYOz2SgpvymkzcS69h%2FDuTkmjsyWy0bfe4TnQ0cQ%2BL8ljZPdGVeQzsFJy1LMACMJkH0xQtp70cTZeIvK%2BIwYtVfuwoNh7am2ikxBw86NSMGsYMYpdr8cFYdnq6q4%2FTwHxD9yus9euTKS5kpKTqdzKuPpBSeXL9oK0hx%2FSvPU8%2FCPr6H6eOUZsvQEisu2hbzSsg%2BKqDwSAbrDFJr23UD9o4mInMN3DsOGImDHrzHisvpFPhpMQE256xghC8qRhgCcPZ02cfGonpRNTaikFTOArOag5kkFsZz7U1FVuvAnhLDKMH9egid%2B5qNjHCIt2qaG51WPZ%2BsQnfXLTmPnUpYsw14TfvQY6pgEqjEZpActhfrOstNX0mwxDwBTkxGQoGB%2FzigsYUaHk9WnPmZ8myWPB8EHiok%2BHJvtcShex%2B2B3566JHJJTad%2F95nLpj3RjcpvIJarMKns1ZQ7b2GJzjQfH5odC%2FItfW%2F6DYA%2F%2Bogl9064t3fk3IQBWt1NNx6bgE6wfiDLTOkGOI%2Fwnmwo88lBSDyxnIMM2k%2Boy8m%2BtirwCMjDvXvfiTAn6sfBQI7Q1&X-Amz-Signature=8bb22a6d2de01264e3e422f09576d50cbba4728c1c54cb124a3336b747fd2225&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

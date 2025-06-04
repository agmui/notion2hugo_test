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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZIE4H5R%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIBJgNQV2Qz6Z4jGpqFGuh6b%2F99m6b8ROKhwK2FtLv00UAiAay3IVm%2FpuuMwiqz2F52Pjpt5uwjTQYrKNyk8IVxTzZSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2B2h4pIJfMhETsg8yKtwDsj8liqf75d33ulNS08Jnkxeh%2FL10Y%2BF630of2fTOJRf6383FWLvXzvnVU1KO2zhXHdqXuLsqXBVCWdqMGvkL3Bm1oJShcdSe88HhojPbR5YDkaa8TfX1XxvwNlVnueHlM0Aa6d1DvXcJbC%2BZOKwzf%2FjssqNbKNM1dy9Iz%2FpBJl%2FWInuVSfhClIjJQUrO6Y%2Fw2UmfkWI2F7dXH5Coy6oKV6miYCOLryXPiyyqNOQpD%2BmqzB9JSap3s4n1oKlQRjVYYJ9uDpVe1JjzJCenxpfsmDUQrsVVBx5ofRdSU27rUcDnHmYXUAf6ffG9dLyP2o52v6uzVJIeKV4Ypya5oW7Cjo0WKz5MHDiZVVIe3wTuWJSEbnpa6Zppg8D3H3vSOjOXtGq0YQVX2LMJrjy7vbF07lmbcPMKcwK9ysAjjMnRQn41KGneP0%2FUSEzpQrZJvaOFmQMeFxmm%2FcNDgZ6Tp0IEBvKfwsDKAsq9X25mrhg9GWQOCRnwGzzhtgHQPdLlXAytBG5bhJq13UO5XRpIKFlIv6zCBBNjpPII8EZmpVC0lqt8H4T6UhXW8Deb%2FQkxpEPjuAHwQACgIWZs%2FwajswcTttwYUZdrMXw%2Fhhqa8B5uexq4%2BrlGcM%2BJwDnElIYwuICBwgY6pgGseZD1U3qIq1A9DU2fP01YghZNl%2Fm7FnZZkeWF6KPjmgEecOrQTgswG25UfbG8wNfaaN8ZsGTBF9PXYKzWuGycFj0Y%2FtU%2F16EeNsstlEcYzHtQ7NqzXKXobqg8zB1q7mYBAJ5umRwGKXuoyPC%2FlX%2F3X6MWDlob22hy0fFowNp3RMksF3taEMjwqueB%2FG1idiVflkSA1aigZTwBb8aILF2AoJlaK7ax&X-Amz-Signature=60d9f76cdddf5af1a37fae23411e9435c3de4be5dbbb17df91cb2e9a8a743925&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZIE4H5R%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIBJgNQV2Qz6Z4jGpqFGuh6b%2F99m6b8ROKhwK2FtLv00UAiAay3IVm%2FpuuMwiqz2F52Pjpt5uwjTQYrKNyk8IVxTzZSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2B2h4pIJfMhETsg8yKtwDsj8liqf75d33ulNS08Jnkxeh%2FL10Y%2BF630of2fTOJRf6383FWLvXzvnVU1KO2zhXHdqXuLsqXBVCWdqMGvkL3Bm1oJShcdSe88HhojPbR5YDkaa8TfX1XxvwNlVnueHlM0Aa6d1DvXcJbC%2BZOKwzf%2FjssqNbKNM1dy9Iz%2FpBJl%2FWInuVSfhClIjJQUrO6Y%2Fw2UmfkWI2F7dXH5Coy6oKV6miYCOLryXPiyyqNOQpD%2BmqzB9JSap3s4n1oKlQRjVYYJ9uDpVe1JjzJCenxpfsmDUQrsVVBx5ofRdSU27rUcDnHmYXUAf6ffG9dLyP2o52v6uzVJIeKV4Ypya5oW7Cjo0WKz5MHDiZVVIe3wTuWJSEbnpa6Zppg8D3H3vSOjOXtGq0YQVX2LMJrjy7vbF07lmbcPMKcwK9ysAjjMnRQn41KGneP0%2FUSEzpQrZJvaOFmQMeFxmm%2FcNDgZ6Tp0IEBvKfwsDKAsq9X25mrhg9GWQOCRnwGzzhtgHQPdLlXAytBG5bhJq13UO5XRpIKFlIv6zCBBNjpPII8EZmpVC0lqt8H4T6UhXW8Deb%2FQkxpEPjuAHwQACgIWZs%2FwajswcTttwYUZdrMXw%2Fhhqa8B5uexq4%2BrlGcM%2BJwDnElIYwuICBwgY6pgGseZD1U3qIq1A9DU2fP01YghZNl%2Fm7FnZZkeWF6KPjmgEecOrQTgswG25UfbG8wNfaaN8ZsGTBF9PXYKzWuGycFj0Y%2FtU%2F16EeNsstlEcYzHtQ7NqzXKXobqg8zB1q7mYBAJ5umRwGKXuoyPC%2FlX%2F3X6MWDlob22hy0fFowNp3RMksF3taEMjwqueB%2FG1idiVflkSA1aigZTwBb8aILF2AoJlaK7ax&X-Amz-Signature=697058218ab389c979820a5c128a91b07d6430949c5d425a6885266a56962aa6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

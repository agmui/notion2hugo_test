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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZD6F7C6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7t0tRD2E0jV%2BIySw7WXeIL7JjadgKOEMIyQlgSrn0rQIhAMvivjXWMmekHXq1ziEp69bBo9OLgIOVhCQoNjdfLCTxKv8DCD0QABoMNjM3NDIzMTgzODA1IgxoxowmYLAAjAu1ByAq3AP8h0lzRF3yAIrJkuWIy28Vzqb0mrlqGaKQsK1I0YtiWxrR9wjQ22RKBgnL9xsoiiHmIyagtmOD%2Bou401Qt%2Fmm0bfRAXSCj7PEFIY7RSUWyiD5KoL%2BR2nDiqO%2F03CkHDG6JEz1LdX8f3jLZZbmKr8IAAfRhd%2FdI%2F%2FeigSWYb%2BXY%2B7PUuXIFuCccgrv2UQQ5Rtc9uirYDIvv1%2Fl246RaeBy4KUx8wadVGjjAwJG%2FY2RCVIFOXe56DRoNuuI4GnDXwjwBw2FC4nfw8zzn%2BppRDpf2fP4HyMCSc4NEohO9c7UHssf%2FXKABe%2BaaZQcczFm552dtV%2FVHjL7mFaB2NuPbCExmsU94t6dEp9FwotyUmj6NTisPouNA%2FZ7bph4TdjGoHn1HGmzq5elx8yPbAlPY4lRDMbJslOUM0AY5fV8fWFOUzajO0%2FqJg5dSFk4LrdZy44UTnEtq1h3OCxCG2PnkhlaWcJ0CT9ntaNiTI%2B%2FrNHSD8mEeSnIO2q%2BNIVM0fY8vuS1Bom7tOLh9CNeqQcN%2BN7J4bVllFnxJaAQWhlNS9drpFxnKxXL1z0%2BQnsxb5uazeKve0gOSTex4q9IBeCgxy7SCXi6wfvLfYaT7VmkZEtDlttEYsKZieAzQYPrk7zCbpZO%2FBjqkAUBalTPFjlzZB1vEd4Ty0138Ek43UOfVdMQcqhSyJ%2B4Bde3Bl20u%2Fk%2F4rLWiPCL2f5Ko2DOziW4R42vu6ihJ192w%2FJqOO9Sens0K96gSO7rucLh%2BSoBjxcqNWQjE2WlzkqG0GQbvGhTlx8MvKA9bV79bJntokAK3EUSdRzMzz3ZzN8q2NRfJb%2FzfmImMwzVuaHSQxeKvtKBJ46yB0e9VSmCDK3OH&X-Amz-Signature=d6530410acb22c3aff1f717a6421f4d2ba3dcd79a3f95d7c6a776b79499df6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZD6F7C6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7t0tRD2E0jV%2BIySw7WXeIL7JjadgKOEMIyQlgSrn0rQIhAMvivjXWMmekHXq1ziEp69bBo9OLgIOVhCQoNjdfLCTxKv8DCD0QABoMNjM3NDIzMTgzODA1IgxoxowmYLAAjAu1ByAq3AP8h0lzRF3yAIrJkuWIy28Vzqb0mrlqGaKQsK1I0YtiWxrR9wjQ22RKBgnL9xsoiiHmIyagtmOD%2Bou401Qt%2Fmm0bfRAXSCj7PEFIY7RSUWyiD5KoL%2BR2nDiqO%2F03CkHDG6JEz1LdX8f3jLZZbmKr8IAAfRhd%2FdI%2F%2FeigSWYb%2BXY%2B7PUuXIFuCccgrv2UQQ5Rtc9uirYDIvv1%2Fl246RaeBy4KUx8wadVGjjAwJG%2FY2RCVIFOXe56DRoNuuI4GnDXwjwBw2FC4nfw8zzn%2BppRDpf2fP4HyMCSc4NEohO9c7UHssf%2FXKABe%2BaaZQcczFm552dtV%2FVHjL7mFaB2NuPbCExmsU94t6dEp9FwotyUmj6NTisPouNA%2FZ7bph4TdjGoHn1HGmzq5elx8yPbAlPY4lRDMbJslOUM0AY5fV8fWFOUzajO0%2FqJg5dSFk4LrdZy44UTnEtq1h3OCxCG2PnkhlaWcJ0CT9ntaNiTI%2B%2FrNHSD8mEeSnIO2q%2BNIVM0fY8vuS1Bom7tOLh9CNeqQcN%2BN7J4bVllFnxJaAQWhlNS9drpFxnKxXL1z0%2BQnsxb5uazeKve0gOSTex4q9IBeCgxy7SCXi6wfvLfYaT7VmkZEtDlttEYsKZieAzQYPrk7zCbpZO%2FBjqkAUBalTPFjlzZB1vEd4Ty0138Ek43UOfVdMQcqhSyJ%2B4Bde3Bl20u%2Fk%2F4rLWiPCL2f5Ko2DOziW4R42vu6ihJ192w%2FJqOO9Sens0K96gSO7rucLh%2BSoBjxcqNWQjE2WlzkqG0GQbvGhTlx8MvKA9bV79bJntokAK3EUSdRzMzz3ZzN8q2NRfJb%2FzfmImMwzVuaHSQxeKvtKBJ46yB0e9VSmCDK3OH&X-Amz-Signature=13ec36c623e89d56deb321dc452d11beed4e8c43f9b168c7fb9056c0e57d6899&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

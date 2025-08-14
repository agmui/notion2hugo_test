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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JCWOQD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD00U1lfiWdWcuBzn4JykUtOpH07IrSuI%2Bj07r8JXHtwwIgDVy%2F%2B8QgYcDJ5A15fTe5yzfyhd4PO1ppof5o0be%2Bg1kq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNhj%2BhPuce%2BWHcxnRSrcA990bgnsZ%2BI%2BsHgsoWetnmLAUeiyDyHVnGxKWc6nYwf%2BtKjNeV9GNrtAqUbCCOVVKF1ckgmfoWPQcWA5PKMtjTrOjmBL59finMYJHiDeky1kDH%2FbMXZkK6sSBMWSnV5C%2BdDTQnMjViJT22IO6wxKX867gSaIuhu50CENtlIv6Les0DDRPRqvQSgpjb2Sni4q4ONVsUMj3NBO9WDYkPxXfbisiB7p%2BhhboViPPFrwQLZiaGUx2zuGKgCA42WSAWkFnY1S3RTqbQ9OwhqntVs4es4yZW%2Bop3ybJ3sewlu89LBgGNJ3va%2B0pYug3bspjrsMJzQdhb%2BCxhokcNgOyf7Qg%2Bvhc%2Fe4otYuCN4or%2FSn3qg7%2FnqGO0pPfIpg34eFhSyeTJI5Pa%2F5OJaKOZa8fv4GcfRIiFzdrJhN5QSjEuwX7Dmh%2FvTd2nj4v7R56FJfme8iVojRK%2BoDo7tKj53BkcyXKR%2F10GPTWrv8aIzQLjivnp1syOQcuaWCAevvaoVr2Pq0gm7XAi9TjSBrcN%2FCSJx7j66TDYNFi176cy59eRGioo0HSxeTaIxr2ifggRTrg3BrMiePBK1cFuRjA%2BsJhJ2BB3MxQGYEmJhWK8d%2BoYM8%2F%2Fwrifh1eQsqgoGAOPgjMImN%2BcQGOqUBSE4Z64WGp8mXnGip2GraxsW9zOKyeGNH8SF8z90pJ9wuuqjama7l4rsfKPCs86K2euWpfCar8VpU%2FxKM9FDUTxDiY6yTGR9vk5ebLeLucLlOL4LUQDp7Po7zwx6mrEIulSKodOPNAwJ1wOzsGd62EeW6knjXnW7JD1k7qPaKbVtO8Pz6xYeEc9%2BlWHt15o7d72flVNQLIA%2F6XXPyfbGg3XlTA0DV&X-Amz-Signature=ecfc9d58dd1de64fc2ac9691af9e3eae6699c81fa5e37663c84ba78b1e0b281b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JCWOQD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD00U1lfiWdWcuBzn4JykUtOpH07IrSuI%2Bj07r8JXHtwwIgDVy%2F%2B8QgYcDJ5A15fTe5yzfyhd4PO1ppof5o0be%2Bg1kq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNhj%2BhPuce%2BWHcxnRSrcA990bgnsZ%2BI%2BsHgsoWetnmLAUeiyDyHVnGxKWc6nYwf%2BtKjNeV9GNrtAqUbCCOVVKF1ckgmfoWPQcWA5PKMtjTrOjmBL59finMYJHiDeky1kDH%2FbMXZkK6sSBMWSnV5C%2BdDTQnMjViJT22IO6wxKX867gSaIuhu50CENtlIv6Les0DDRPRqvQSgpjb2Sni4q4ONVsUMj3NBO9WDYkPxXfbisiB7p%2BhhboViPPFrwQLZiaGUx2zuGKgCA42WSAWkFnY1S3RTqbQ9OwhqntVs4es4yZW%2Bop3ybJ3sewlu89LBgGNJ3va%2B0pYug3bspjrsMJzQdhb%2BCxhokcNgOyf7Qg%2Bvhc%2Fe4otYuCN4or%2FSn3qg7%2FnqGO0pPfIpg34eFhSyeTJI5Pa%2F5OJaKOZa8fv4GcfRIiFzdrJhN5QSjEuwX7Dmh%2FvTd2nj4v7R56FJfme8iVojRK%2BoDo7tKj53BkcyXKR%2F10GPTWrv8aIzQLjivnp1syOQcuaWCAevvaoVr2Pq0gm7XAi9TjSBrcN%2FCSJx7j66TDYNFi176cy59eRGioo0HSxeTaIxr2ifggRTrg3BrMiePBK1cFuRjA%2BsJhJ2BB3MxQGYEmJhWK8d%2BoYM8%2F%2Fwrifh1eQsqgoGAOPgjMImN%2BcQGOqUBSE4Z64WGp8mXnGip2GraxsW9zOKyeGNH8SF8z90pJ9wuuqjama7l4rsfKPCs86K2euWpfCar8VpU%2FxKM9FDUTxDiY6yTGR9vk5ebLeLucLlOL4LUQDp7Po7zwx6mrEIulSKodOPNAwJ1wOzsGd62EeW6knjXnW7JD1k7qPaKbVtO8Pz6xYeEc9%2BlWHt15o7d72flVNQLIA%2F6XXPyfbGg3XlTA0DV&X-Amz-Signature=ddc54c1bff4da4c993ad52a23451f0e78e352dba5e17af20636b212d0d955ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

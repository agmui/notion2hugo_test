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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7EUDXZK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9Ic9YWeGHSNLfUJGFYsUqEKI5pcXTItzA7Pp4X9YOFAiASYh00QxkrXFVn%2F5wXNAcgj%2BNHLoWk%2FY5yR2cK5o1IsiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHR3%2Bir1GqEOhtRIKtwDU%2FISOvTokgUrruX71Nd%2BSE1VdK8bT4jcixMsdsa5JhagAoslkBOP2vBRTTk%2Bc7AiEcRguLLcAGbU4zxY9h5IkGdVouk8rSFYL9rqe%2FZ1f50ih7lSTWIVQJLqPcX9tD7mPDq5T0PfwRKiz3%2F%2FwfFxkmfZj6g2%2FQAo31mf7MSu2Jma4SXm3YioYDBI6IL%2F4ZT5dlHxuGzwBQj4rfIXIwRq2RCb7iDOyC9p3IlfoeU%2FNFU7bzhy0gyASvuW9pOcT1DQH25kUkjwYECmkPPO4MUeXgWbwc8jnF9AwL3y%2FZJe2z0cfI6xt39YI6nlm91oVijf0UPaSDDDp1vKtENxxgHr1gX7UunI8LMCiDFtjhSm23Tp8AjVV5qCCSu2lIYZotjDwviDyS%2FbT3fFLJgsrUHbLa%2B6NgZHQLMxLi75ggwN656hdeeyHTsn3IYatuHOsiwfxEw5BNbZN1NsSIEDxKb6CseAb49utnCFwhPtczIK8IQXTN2NFWgcxNthtZ9ryuC%2FaYqMTVpx6vz0MLGcphAI57RKDzLWwRQZMuk2RZ9ePjw3%2FKi6Njn1JhFKS6O0joDTfUPMrnxhRpGYHwDafQ2e%2FIC3C6mOK0Tyy89k%2Bj6wmyMhKvlTWuL3ncLj%2FdEw08%2FHwwY6pgFTbXiTUThA7XMl1R%2FWuigzHhIoWjb%2FNe8oPYfGfvVauEcTIZKtf8QFtfGXI%2BqumyIZhtAm0K0hdSGP2nbBnmQRFAp6%2FIl00Ms0aL7lLNHQ21YUpNONGlPnStmUoaCX%2FO8fHI%2BUTNbAOwtbE8o4JZTrk81nkeCyY0pXM6FZPXgXbPY%2BAaL9xw4u0rr4NGwyDYfZ4uMk65%2BZB8uo3mxLAS3Xt%2FtxbY5a&X-Amz-Signature=f314000c46fc17b3f1020ff1331c3494612117193bae4f41486cb80ccacbc5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7EUDXZK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9Ic9YWeGHSNLfUJGFYsUqEKI5pcXTItzA7Pp4X9YOFAiASYh00QxkrXFVn%2F5wXNAcgj%2BNHLoWk%2FY5yR2cK5o1IsiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHR3%2Bir1GqEOhtRIKtwDU%2FISOvTokgUrruX71Nd%2BSE1VdK8bT4jcixMsdsa5JhagAoslkBOP2vBRTTk%2Bc7AiEcRguLLcAGbU4zxY9h5IkGdVouk8rSFYL9rqe%2FZ1f50ih7lSTWIVQJLqPcX9tD7mPDq5T0PfwRKiz3%2F%2FwfFxkmfZj6g2%2FQAo31mf7MSu2Jma4SXm3YioYDBI6IL%2F4ZT5dlHxuGzwBQj4rfIXIwRq2RCb7iDOyC9p3IlfoeU%2FNFU7bzhy0gyASvuW9pOcT1DQH25kUkjwYECmkPPO4MUeXgWbwc8jnF9AwL3y%2FZJe2z0cfI6xt39YI6nlm91oVijf0UPaSDDDp1vKtENxxgHr1gX7UunI8LMCiDFtjhSm23Tp8AjVV5qCCSu2lIYZotjDwviDyS%2FbT3fFLJgsrUHbLa%2B6NgZHQLMxLi75ggwN656hdeeyHTsn3IYatuHOsiwfxEw5BNbZN1NsSIEDxKb6CseAb49utnCFwhPtczIK8IQXTN2NFWgcxNthtZ9ryuC%2FaYqMTVpx6vz0MLGcphAI57RKDzLWwRQZMuk2RZ9ePjw3%2FKi6Njn1JhFKS6O0joDTfUPMrnxhRpGYHwDafQ2e%2FIC3C6mOK0Tyy89k%2Bj6wmyMhKvlTWuL3ncLj%2FdEw08%2FHwwY6pgFTbXiTUThA7XMl1R%2FWuigzHhIoWjb%2FNe8oPYfGfvVauEcTIZKtf8QFtfGXI%2BqumyIZhtAm0K0hdSGP2nbBnmQRFAp6%2FIl00Ms0aL7lLNHQ21YUpNONGlPnStmUoaCX%2FO8fHI%2BUTNbAOwtbE8o4JZTrk81nkeCyY0pXM6FZPXgXbPY%2BAaL9xw4u0rr4NGwyDYfZ4uMk65%2BZB8uo3mxLAS3Xt%2FtxbY5a&X-Amz-Signature=21376813ea6ed31fd4ef1390ee909638100173f0a3bfe10406a2abedfa88f4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

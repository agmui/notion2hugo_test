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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AA5I7GD%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGg0CDAIeMmpkXfvda2CeJcmv8avczv5oBRWMqhsJJJAIhAPQ5HwjW3Yt2lNq472FNa7zSvR0PCKNlcm1a97BkR5M3KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlVHDPTnr32VqTNdUq3AP3TJfSpkohtwoMIy%2BhmrZZXr%2B0JhU0mahC9GRUuZ1fgHnlrwFCQAtWxFXLBE7Z803x0z5I%2BHSQ2rErd1LoMdL%2Fj%2Fx15COz4r9blVDOoaOwdd42RSsoGgzRYPBCJUCw6NG6Y1D4mCve%2BvfXLrknFNoqRlo72rsKZIjK76F8%2FspyhMHBlOvCavGautVWuJ64DKkSeh0YcX6bx5u1N9XxegVCTVZdEHYKIrdEPX3gIw0TeodF09hK2BMrEBDUgsmG1vPpYQFcN0llnMVBmRiTYxszDEVAY%2F1T%2B0e9X7nOZGmxfxct9%2B9O9E6qpwjmkJMjs%2Bat12G6B%2FB47NyOyvHI71Sx5YDqV34cKhAWzw7emzWPHThtJ9rJov2cdLrRzgdZDGU0eMsCqVjsriiKBKWB4%2FsJ6HnQLtePEon8PW8ZNqmCFU5eOcZopDhJvH6t%2BZshLC9kluqI2KdsfIq8wJdNAVhJnRiyHEPQIsZHULP1N3E9nCQodxXyIx4HstdCl7CG8Gy1FnWf%2B6sgYEHCcnt2I9oyPzK4vB13JzqR4yl%2FbLuSzWl7djsQuRaMe%2BbIsuNZNIuM%2FAUjQGMFYHjIbSi5%2BvdeFf2kEtdSUI5zm6%2Bhh9YaRWbQOisNr6vwAmNJrDCDjubBBjqkAe45SFK%2BYpsSBZo3jpbcLGE%2F2NjN6Ug0DlrzsU6ZYWdsKAUaxPMUzS7vCqw85Qt%2BpKR1e3QCNbr9EpgmofQfTEATvl8jWiB2wkmn992EQSWVcUSyypBIJMv9KjcthLd%2BHsCxiL%2BptRLftfF%2F%2FwqHv6Obpnu1GwA0cSFcaHZNh%2Fsb1IN858spMQSuAITM0q7HEQeOE%2FtJWIiVki6F%2FsTaqXByUtpr&X-Amz-Signature=79467eb04859871fffdf681e68f27e1f04cf8fa7daa705a8ab93c07f657e9559&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AA5I7GD%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGg0CDAIeMmpkXfvda2CeJcmv8avczv5oBRWMqhsJJJAIhAPQ5HwjW3Yt2lNq472FNa7zSvR0PCKNlcm1a97BkR5M3KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlVHDPTnr32VqTNdUq3AP3TJfSpkohtwoMIy%2BhmrZZXr%2B0JhU0mahC9GRUuZ1fgHnlrwFCQAtWxFXLBE7Z803x0z5I%2BHSQ2rErd1LoMdL%2Fj%2Fx15COz4r9blVDOoaOwdd42RSsoGgzRYPBCJUCw6NG6Y1D4mCve%2BvfXLrknFNoqRlo72rsKZIjK76F8%2FspyhMHBlOvCavGautVWuJ64DKkSeh0YcX6bx5u1N9XxegVCTVZdEHYKIrdEPX3gIw0TeodF09hK2BMrEBDUgsmG1vPpYQFcN0llnMVBmRiTYxszDEVAY%2F1T%2B0e9X7nOZGmxfxct9%2B9O9E6qpwjmkJMjs%2Bat12G6B%2FB47NyOyvHI71Sx5YDqV34cKhAWzw7emzWPHThtJ9rJov2cdLrRzgdZDGU0eMsCqVjsriiKBKWB4%2FsJ6HnQLtePEon8PW8ZNqmCFU5eOcZopDhJvH6t%2BZshLC9kluqI2KdsfIq8wJdNAVhJnRiyHEPQIsZHULP1N3E9nCQodxXyIx4HstdCl7CG8Gy1FnWf%2B6sgYEHCcnt2I9oyPzK4vB13JzqR4yl%2FbLuSzWl7djsQuRaMe%2BbIsuNZNIuM%2FAUjQGMFYHjIbSi5%2BvdeFf2kEtdSUI5zm6%2Bhh9YaRWbQOisNr6vwAmNJrDCDjubBBjqkAe45SFK%2BYpsSBZo3jpbcLGE%2F2NjN6Ug0DlrzsU6ZYWdsKAUaxPMUzS7vCqw85Qt%2BpKR1e3QCNbr9EpgmofQfTEATvl8jWiB2wkmn992EQSWVcUSyypBIJMv9KjcthLd%2BHsCxiL%2BptRLftfF%2F%2FwqHv6Obpnu1GwA0cSFcaHZNh%2Fsb1IN858spMQSuAITM0q7HEQeOE%2FtJWIiVki6F%2FsTaqXByUtpr&X-Amz-Signature=22067da56693acf24fe90fe3671736e0e1381e0032da451ab8e15c460f2b9205&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

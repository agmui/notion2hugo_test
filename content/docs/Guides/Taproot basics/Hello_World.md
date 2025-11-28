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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC33J4IH%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwOrPw2JSt6T3Vcmc8bPaO1Mo6YLeL3QTTwP8Dd%2FEBTAiEAy4JLNZMBPg8KeZXxRTMGjUJmFVUn69qJvAOMItGUZoEqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BQRI3lFuseUQqz%2BSrcA9Sy7C78qzqf%2BgeuCWHHsukVJBzzmBsZzrqgEpYXtKvSx57YUfULmj29QIWz1iFNNw81AnpIWhGnKAzWRsgc923RhOhGd0yx7lg113K8wPx1Ct9ld6Qz%2FjeU3I7Nj0LGnq17H0q7GF7mLM%2BZvmVlUpPu5G%2FbkC3eIQ0dpiECWaYyG2AhcRAxpmMw%2BiJiwf688wFqCI4JdINUUU33RoLheZUMqf35CPlVEo5CUpMRhiD7DBdPnTgcHP3ZzUNUSNPo89hINBKFcwbdvdHZz54FPBN4dU4OduTLxuRP17heEfvqPG4H1CDAVi9Pb7rsOOsarYv418LAj1nmpSYmE9KoL2zRPFkcc7b0VNO5fTKYOMPfSOmOiXjz7kjN5QjV0JhGPhycr2TG9x0oLc7obV0p1JGGOVmMYxjW2JMbVFRO7ZEAbRih6sA4z%2BqjoM5PUqwuaX2ST%2Flo8vyPoUmxJ9yi6AkrriEyBswnqZ5N3Jca8vitnyYdBVg9d1UpwHJuXqviet1Q122Jf9wKTRuj2u3fjtrfiYqT8RSHDYbt0ejeN%2BvXKWYkPVKArUvHYYTWUzwip%2FRDkZKwSarAyo%2FqwNjAOa5RiSFVHvOqZoaQnGt%2BILqg7P25eC1ltHuitC2QMM%2FOo8kGOqUB8Q6NcRv2pD0f7xwZjek3b2qR4nAkeku1KLn9u7Wz4VIuqlqP5x0G9By2cXx4FMkwRKIYMKXX4bApWV1stVSKdcJ9kFnr0higNRSG1wjmsK8%2BPF7MZA8X0DxpjYYCP5%2B8%2Fqnd9QlnB3eP5oFoid4BGmJ%2FxsoBG4Zf3eYxVrwieIMk8ew0wyUlFMsgxK2xAHvYTj5HPFufZPYPdZDbcqIZlsRrOgy%2F&X-Amz-Signature=bf189b4a395461f643c05970dba9a68aaa03ee841d8dd516a613938bd30d85c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC33J4IH%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwOrPw2JSt6T3Vcmc8bPaO1Mo6YLeL3QTTwP8Dd%2FEBTAiEAy4JLNZMBPg8KeZXxRTMGjUJmFVUn69qJvAOMItGUZoEqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BQRI3lFuseUQqz%2BSrcA9Sy7C78qzqf%2BgeuCWHHsukVJBzzmBsZzrqgEpYXtKvSx57YUfULmj29QIWz1iFNNw81AnpIWhGnKAzWRsgc923RhOhGd0yx7lg113K8wPx1Ct9ld6Qz%2FjeU3I7Nj0LGnq17H0q7GF7mLM%2BZvmVlUpPu5G%2FbkC3eIQ0dpiECWaYyG2AhcRAxpmMw%2BiJiwf688wFqCI4JdINUUU33RoLheZUMqf35CPlVEo5CUpMRhiD7DBdPnTgcHP3ZzUNUSNPo89hINBKFcwbdvdHZz54FPBN4dU4OduTLxuRP17heEfvqPG4H1CDAVi9Pb7rsOOsarYv418LAj1nmpSYmE9KoL2zRPFkcc7b0VNO5fTKYOMPfSOmOiXjz7kjN5QjV0JhGPhycr2TG9x0oLc7obV0p1JGGOVmMYxjW2JMbVFRO7ZEAbRih6sA4z%2BqjoM5PUqwuaX2ST%2Flo8vyPoUmxJ9yi6AkrriEyBswnqZ5N3Jca8vitnyYdBVg9d1UpwHJuXqviet1Q122Jf9wKTRuj2u3fjtrfiYqT8RSHDYbt0ejeN%2BvXKWYkPVKArUvHYYTWUzwip%2FRDkZKwSarAyo%2FqwNjAOa5RiSFVHvOqZoaQnGt%2BILqg7P25eC1ltHuitC2QMM%2FOo8kGOqUB8Q6NcRv2pD0f7xwZjek3b2qR4nAkeku1KLn9u7Wz4VIuqlqP5x0G9By2cXx4FMkwRKIYMKXX4bApWV1stVSKdcJ9kFnr0higNRSG1wjmsK8%2BPF7MZA8X0DxpjYYCP5%2B8%2Fqnd9QlnB3eP5oFoid4BGmJ%2FxsoBG4Zf3eYxVrwieIMk8ew0wyUlFMsgxK2xAHvYTj5HPFufZPYPdZDbcqIZlsRrOgy%2F&X-Amz-Signature=e7f20d0c61e6d5494854d05bd4dfd979e1270539d795854e3471df0f0d3c4151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

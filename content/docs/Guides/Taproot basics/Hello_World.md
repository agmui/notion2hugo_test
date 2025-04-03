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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSTFP53Y%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDelzTM6%2BwQ8H8mvXd8dVSGRDgDbrrnxIa0fy1ra%2FWOsgIgWZN5ruJ%2FmoBF8jTDd7MeuN4qNrnsW8hPeh0MydXg7JUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3P7TDAZXq%2FPyy4ESrcA89ZUcC1yqJsmBUS%2FTt8RLMPnUP9cYDULXfRY0%2FKdKUfPMxBxna5zdZRwRLZkDD5O4v7leI4ZvGNIzO2BdgnHdjshpcLsk5%2BixQifxQ2LalsJzU60BCMp7Ioz0Hn2eJtOUaSN5cSyN8ImYC1%2FVBDws4lEFPUWeDf6glyfUWZA3ejfkhbf6ezFQSaA2Pm36Cs1hpRqgC5AtuZzPV4c95xF3wjVm%2BkZME67gjyIF8zlPgWHRIVlhtx8Pjh37H3aUwlHgJuhbtgOz2IcKUUFA8VWIQh7GZTTbiPqqreO8wxlE11aWALXyBEepdaurMBZf8586BNymkDpD%2F0T4zqwXjlYButDJpAPxxZ1HaRbvO6PicK2qIyc1KMUBs7wPfKOxV8AkPAG1g5THYATxN0Gvumn%2Flyk5HXfgwPouCD0LrPlnllwhjbgOahqMhPrKvaGxZ9RJW2tSpb%2BT%2F6cmy4kkWipr99vXgPyN5kjzOiLKkaATmDwAsf%2FeYnxF1jirGHuRIfsX%2BFNBodq0V5hi3c9wmkT7k1oeKBDN%2FApVG1Z3aMF3DENnXk6Zx6XAX98VRu91y7Pe3pVHA7NMXjvzk0yLekoRyuvY%2FC1qLlPnkgv5io0ekRO%2FQ0ctE8SBP%2FvWDMMIOut78GOqUB1zDhxo5ngvJBweV6Up1DZufv0GAjE6hSZs9%2FXim5i5tUz6NpypWipB16JdFyYzBMTEU%2BmK5NMq9GBIH9J28ThEjxvuxm8Ad2jPqNT79vhFdlg4FDs6i2e%2BgxS3K6sIafgZb9AvdQA%2B%2B%2FOi5ttyMJT5sHaSHJFTR9nkTVarOk1Qi3O%2BGE4%2Ba2lHibzxUZKnldufrPkqQ973DMVWq0A0N70JT8PwPo&X-Amz-Signature=5ad3d54a62e614b457094a76c0f57adfac9b2db7616aaa2d2f7cbd6670f8b1c3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSTFP53Y%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDelzTM6%2BwQ8H8mvXd8dVSGRDgDbrrnxIa0fy1ra%2FWOsgIgWZN5ruJ%2FmoBF8jTDd7MeuN4qNrnsW8hPeh0MydXg7JUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3P7TDAZXq%2FPyy4ESrcA89ZUcC1yqJsmBUS%2FTt8RLMPnUP9cYDULXfRY0%2FKdKUfPMxBxna5zdZRwRLZkDD5O4v7leI4ZvGNIzO2BdgnHdjshpcLsk5%2BixQifxQ2LalsJzU60BCMp7Ioz0Hn2eJtOUaSN5cSyN8ImYC1%2FVBDws4lEFPUWeDf6glyfUWZA3ejfkhbf6ezFQSaA2Pm36Cs1hpRqgC5AtuZzPV4c95xF3wjVm%2BkZME67gjyIF8zlPgWHRIVlhtx8Pjh37H3aUwlHgJuhbtgOz2IcKUUFA8VWIQh7GZTTbiPqqreO8wxlE11aWALXyBEepdaurMBZf8586BNymkDpD%2F0T4zqwXjlYButDJpAPxxZ1HaRbvO6PicK2qIyc1KMUBs7wPfKOxV8AkPAG1g5THYATxN0Gvumn%2Flyk5HXfgwPouCD0LrPlnllwhjbgOahqMhPrKvaGxZ9RJW2tSpb%2BT%2F6cmy4kkWipr99vXgPyN5kjzOiLKkaATmDwAsf%2FeYnxF1jirGHuRIfsX%2BFNBodq0V5hi3c9wmkT7k1oeKBDN%2FApVG1Z3aMF3DENnXk6Zx6XAX98VRu91y7Pe3pVHA7NMXjvzk0yLekoRyuvY%2FC1qLlPnkgv5io0ekRO%2FQ0ctE8SBP%2FvWDMMIOut78GOqUB1zDhxo5ngvJBweV6Up1DZufv0GAjE6hSZs9%2FXim5i5tUz6NpypWipB16JdFyYzBMTEU%2BmK5NMq9GBIH9J28ThEjxvuxm8Ad2jPqNT79vhFdlg4FDs6i2e%2BgxS3K6sIafgZb9AvdQA%2B%2B%2FOi5ttyMJT5sHaSHJFTR9nkTVarOk1Qi3O%2BGE4%2Ba2lHibzxUZKnldufrPkqQ973DMVWq0A0N70JT8PwPo&X-Amz-Signature=be746fd433c15fd883782232fc9bf4b1879cff6312848bc73225f66382a77508&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

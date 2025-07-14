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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYGBI2WB%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIDAQCT37IuhETnfF5MosM7Ia%2B49DS8SznViP4snXglPKAiEAjyNLpYdc4x%2FpW7FZEJ4E9DHYQYj4zNnZOsnb%2FipZsRUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKxm0IdeHX7X0r9AxCrcA8fzWk%2Fouo1ugK%2BWSlaPcT7gOzjCsNfxJRoVsgMEms%2FtBbLAgyYmdjjL1SPWSuBDOL63xYOol9oVl1%2B5GSsPDLpmXwkkdkCdom4NO41L4CSkeJQJ4E4cU1vra6%2BrXf%2FCTZUwnRASOpPrbwUeaTBkld4vwGtXmnctYUxt0aQk%2FWhNqwBsoN9JdWKk1OVpGpML%2FPjVruV0KCW7854vzzOjWQG40p4jzgGYfXC9%2FxnfjMGV4hvZMwZV4%2BjFWSGAVzKSXGaryHCqp%2BFi7rz7RJNf7RYPQOibOwI1aHI5TtNjQ7T6qCD8JDmaowOdVpnw9t13hlcMoNikh3nqZIky3lfs0ILHrYk7k2Z0F36UvE%2Fdp0rpDtUzgs2HMbVQHdNVdygmae8CMCLjtfGqRsyR3lBEVu%2FkndFzEUeVrFqjHyV9yRhwdItyVBzbPaiK03GP2RNKTvuzKBG3Z8%2FhCPqiUR2yWrzltm7n2xKg7FMxLGvl1UR9tzCbs1JGVWKwkO%2FviEjc88j3UoaYpo19cNeNxTSXwrhAu%2Bo8tpaWHmGZMF%2FFx3Vd5%2FuXElJLYL64yFSfWLMDk%2FigAb2D5azzaJo7yZJyygs%2FEFBxs2jQAyoyYIBXeByQ8qWT5H6nr1oNShJ7MLWx0sMGOqUB5CHIFrTOkFRK142H0JvLe7GqTpDm8OL4to5EeWaZuvuBH3WcjrG7Pl34jHFkYbn%2Bn0u7gAAlxvTP2BeHApz9uJ9KCNJ4QP%2BmVbIDcTltjsL%2F2W0CUwmxqmeAqjyIU3apTiezySlBA24aB5ZOAd0wta05FjY1D%2FZb9xRD7mnX85Hbe20OpcxE%2BxEkPKi9vg8dcfLAEoC0eektbVAI43FQ3tqEMLZv&X-Amz-Signature=64ab115fc20e9e8530c7c2e704b303e508608f3db1134d962e4dcb028772afb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYGBI2WB%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIDAQCT37IuhETnfF5MosM7Ia%2B49DS8SznViP4snXglPKAiEAjyNLpYdc4x%2FpW7FZEJ4E9DHYQYj4zNnZOsnb%2FipZsRUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKxm0IdeHX7X0r9AxCrcA8fzWk%2Fouo1ugK%2BWSlaPcT7gOzjCsNfxJRoVsgMEms%2FtBbLAgyYmdjjL1SPWSuBDOL63xYOol9oVl1%2B5GSsPDLpmXwkkdkCdom4NO41L4CSkeJQJ4E4cU1vra6%2BrXf%2FCTZUwnRASOpPrbwUeaTBkld4vwGtXmnctYUxt0aQk%2FWhNqwBsoN9JdWKk1OVpGpML%2FPjVruV0KCW7854vzzOjWQG40p4jzgGYfXC9%2FxnfjMGV4hvZMwZV4%2BjFWSGAVzKSXGaryHCqp%2BFi7rz7RJNf7RYPQOibOwI1aHI5TtNjQ7T6qCD8JDmaowOdVpnw9t13hlcMoNikh3nqZIky3lfs0ILHrYk7k2Z0F36UvE%2Fdp0rpDtUzgs2HMbVQHdNVdygmae8CMCLjtfGqRsyR3lBEVu%2FkndFzEUeVrFqjHyV9yRhwdItyVBzbPaiK03GP2RNKTvuzKBG3Z8%2FhCPqiUR2yWrzltm7n2xKg7FMxLGvl1UR9tzCbs1JGVWKwkO%2FviEjc88j3UoaYpo19cNeNxTSXwrhAu%2Bo8tpaWHmGZMF%2FFx3Vd5%2FuXElJLYL64yFSfWLMDk%2FigAb2D5azzaJo7yZJyygs%2FEFBxs2jQAyoyYIBXeByQ8qWT5H6nr1oNShJ7MLWx0sMGOqUB5CHIFrTOkFRK142H0JvLe7GqTpDm8OL4to5EeWaZuvuBH3WcjrG7Pl34jHFkYbn%2Bn0u7gAAlxvTP2BeHApz9uJ9KCNJ4QP%2BmVbIDcTltjsL%2F2W0CUwmxqmeAqjyIU3apTiezySlBA24aB5ZOAd0wta05FjY1D%2FZb9xRD7mnX85Hbe20OpcxE%2BxEkPKi9vg8dcfLAEoC0eektbVAI43FQ3tqEMLZv&X-Amz-Signature=88c7b4b9099f742ed59f69e4e76d4d18d5fdc47c2fb359d130a0f2e2e3a5d8ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

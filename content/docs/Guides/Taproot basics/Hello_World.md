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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNGSQGEU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXixO4d69qKfxSAe6jWBrPPgC0QPX0WeBQZ63M28UEmAiEAmbe02Oz983neNcWSwUAo9FafHk8Wt3w2VqG%2FWDJM5yoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJD4zBziISmq3whyOSrcA19Eyrw8DITB%2Bq1c%2BJ%2FwRYtBsOADdGz6iVKzbCoOqXt%2FY%2FyYRAmNwD%2FtT1x5atyyeNMSjZNpmEbWs2YBe47X%2B7%2F9TCeF0PZ2W3RQlnUFkgJ3we0f40doav7HuMX6Nn3F4NBUvX3Z8Pc9Arpg3Dh6FhMEJMMkW9lRTcuIO18uDmoI4cLrMb39kDcl9e9jy2HPaLZQYG0BRbX8PdGZHO1URx5qDpilbqPTvSP%2BUtJoTeBpNBYua5H0r17Z4PJmj4d6Detseggp22AYixyFGapIxmpXFpXBhHbN78UF0KvHbwTFGwwEVJ4Rz2WPHZNXXZP1EtnlbjlDvpA8IhjpySX6rkzbOUTgTbALLfZbh8wozNYqyXLneoM6K8hIyAI6WvIA%2BcFtxwqhVWIF9aRzZWcEzH08eOHSRNQu%2BhSnA%2BZSmDXPZwLvK0IPJ6sQOInPzjx%2BCfnjVx5bqgDGdJhnSAOz6EUiA1USt5xADg25dJvDuGHg8vLhVQcM2rJvWzrZosIPbQ1u1rF9n7EZ82Gm9bZNLGJc4xzFSCJ%2B7r2EaW0VupDEDnDtzipL8E234uJp0tN5Vhniyo8ny%2B2eRmAEk4nXTfUXg18w3JrKZcWeAC%2F0n2sK7vrvvPaLspiaaaaqMOHx%2FL8GOqUB23X9FfdoR%2BQLUahlJZ%2Bqjq%2Fk3mgSyWQczGtRJq%2B45l4vtyK66UMKDdzEVVD0KzbbVv479mTmKn2uLNBKD67N%2FVerIV8S%2FF1PkWcUxc20wa38UIM5lXfaZkdCq2gKgZRvp4Dr2bxDwCCyNTbcCO3HJUYh7XY9b3JCfecQOvTw9z4IkYwxGM%2B0JNVF0hVAHlmL1jK%2BvcsuEBXjlc1uU%2BViZzUYoJVS&X-Amz-Signature=c4b5c8bc70eed7871838416558d196904fe7596cb45f26d0f974ed331d8dfba0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNGSQGEU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXixO4d69qKfxSAe6jWBrPPgC0QPX0WeBQZ63M28UEmAiEAmbe02Oz983neNcWSwUAo9FafHk8Wt3w2VqG%2FWDJM5yoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJD4zBziISmq3whyOSrcA19Eyrw8DITB%2Bq1c%2BJ%2FwRYtBsOADdGz6iVKzbCoOqXt%2FY%2FyYRAmNwD%2FtT1x5atyyeNMSjZNpmEbWs2YBe47X%2B7%2F9TCeF0PZ2W3RQlnUFkgJ3we0f40doav7HuMX6Nn3F4NBUvX3Z8Pc9Arpg3Dh6FhMEJMMkW9lRTcuIO18uDmoI4cLrMb39kDcl9e9jy2HPaLZQYG0BRbX8PdGZHO1URx5qDpilbqPTvSP%2BUtJoTeBpNBYua5H0r17Z4PJmj4d6Detseggp22AYixyFGapIxmpXFpXBhHbN78UF0KvHbwTFGwwEVJ4Rz2WPHZNXXZP1EtnlbjlDvpA8IhjpySX6rkzbOUTgTbALLfZbh8wozNYqyXLneoM6K8hIyAI6WvIA%2BcFtxwqhVWIF9aRzZWcEzH08eOHSRNQu%2BhSnA%2BZSmDXPZwLvK0IPJ6sQOInPzjx%2BCfnjVx5bqgDGdJhnSAOz6EUiA1USt5xADg25dJvDuGHg8vLhVQcM2rJvWzrZosIPbQ1u1rF9n7EZ82Gm9bZNLGJc4xzFSCJ%2B7r2EaW0VupDEDnDtzipL8E234uJp0tN5Vhniyo8ny%2B2eRmAEk4nXTfUXg18w3JrKZcWeAC%2F0n2sK7vrvvPaLspiaaaaqMOHx%2FL8GOqUB23X9FfdoR%2BQLUahlJZ%2Bqjq%2Fk3mgSyWQczGtRJq%2B45l4vtyK66UMKDdzEVVD0KzbbVv479mTmKn2uLNBKD67N%2FVerIV8S%2FF1PkWcUxc20wa38UIM5lXfaZkdCq2gKgZRvp4Dr2bxDwCCyNTbcCO3HJUYh7XY9b3JCfecQOvTw9z4IkYwxGM%2B0JNVF0hVAHlmL1jK%2BvcsuEBXjlc1uU%2BViZzUYoJVS&X-Amz-Signature=2c847c303799707e47adfe39c81aab52d1cf1e3a8516f95649be500b23f81159&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

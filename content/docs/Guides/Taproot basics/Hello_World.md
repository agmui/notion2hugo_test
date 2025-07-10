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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RDARDHW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4FVXw9sy1lIK6hyPCB6d0meN74T2WBwcPK8IIn5FGqwIhAOsIv5SsJlHRBbRssy8U6LBJ3z%2BFgD7d1ZU7DWBsLWH6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrY%2BXxpvmgfIOi5oYq3AMefmkFlW2q131Wm78ZpEIQqiXEB1vIBFp3PAVv2WdRwihm74IUAglWWUWgc9PJy2GSaQvkZNHWsHQZn51NBtM9QN5zN0uVgbNHUfJw3ArYZlQaDeI9z1I%2BVBbWM51brlue3mCSXQDM3OHDT9bBjZvi95qggdDTvZ7VNnJI3OuXNuIu4TlW9OdOn%2FXcGqPi4zOeRf1PoK%2BdPpRyWIIAKubhtwd1h%2Bno67RfjeNP1KfJskCHdIYMxFKqCtSwpUxyqtj9%2BUIN4TjLEe2%2BNjtM9JHR1IUvZh%2FHUWfizEMo5lIpdeC%2BKjtgcKgH97HE3Y8nu4ufC30PNYnmruS10Zl8urCeVyNGHuR6R23WWKag4DNW9ATMwRWebCDMZ7PhdUJOGBb%2F8QrCe67%2Fl10oIBNG1ixOX8UtSA4yXZjM7kqN7c6QfzWFLlycBJQVEUI%2BbwiEyGL9z%2B1J9Wxb7wk2IcuJkkRf%2FxW2WuZgG2FGvl%2Bf2IQj3ehFM9hwRg%2Bn%2BrVloJpV47piUhFAd%2BwZzYf6t%2F4oqxR7ej3GxENd92ZoKIvJvceaZl0te73yFctIrR7q2HxNTJxIsg2zo7Y%2BAdRQOfg1F7PXFf%2BiYuanizG1ItN5CVdqV%2BqpRGgGeD08RYIJUjCmosDDBjqkAbiEUZj1P22PFuvPlxWZTCnuoVdKdNcA581Smy2CvhMalhjOXObbjAnezmS9KLG13rMZB%2FqyynTdd%2FxJzvoMaIKQz5vQL8hxZWg06W8jxBvr9Zfaf1CwO6UV69UEGa6%2BPdmhr7EvOoxxq%2FGAsn9VhNZd%2BUyP7VxRinG0qFcibW2%2ByHbwfiVbHs9Q39qybqI13gMQjG0pwR9O6g4WobWi8IuS3Itb&X-Amz-Signature=7e4570b49f99938d15e7c11991b95bdd6748ecac19adff073075ef33af493428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RDARDHW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4FVXw9sy1lIK6hyPCB6d0meN74T2WBwcPK8IIn5FGqwIhAOsIv5SsJlHRBbRssy8U6LBJ3z%2BFgD7d1ZU7DWBsLWH6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrY%2BXxpvmgfIOi5oYq3AMefmkFlW2q131Wm78ZpEIQqiXEB1vIBFp3PAVv2WdRwihm74IUAglWWUWgc9PJy2GSaQvkZNHWsHQZn51NBtM9QN5zN0uVgbNHUfJw3ArYZlQaDeI9z1I%2BVBbWM51brlue3mCSXQDM3OHDT9bBjZvi95qggdDTvZ7VNnJI3OuXNuIu4TlW9OdOn%2FXcGqPi4zOeRf1PoK%2BdPpRyWIIAKubhtwd1h%2Bno67RfjeNP1KfJskCHdIYMxFKqCtSwpUxyqtj9%2BUIN4TjLEe2%2BNjtM9JHR1IUvZh%2FHUWfizEMo5lIpdeC%2BKjtgcKgH97HE3Y8nu4ufC30PNYnmruS10Zl8urCeVyNGHuR6R23WWKag4DNW9ATMwRWebCDMZ7PhdUJOGBb%2F8QrCe67%2Fl10oIBNG1ixOX8UtSA4yXZjM7kqN7c6QfzWFLlycBJQVEUI%2BbwiEyGL9z%2B1J9Wxb7wk2IcuJkkRf%2FxW2WuZgG2FGvl%2Bf2IQj3ehFM9hwRg%2Bn%2BrVloJpV47piUhFAd%2BwZzYf6t%2F4oqxR7ej3GxENd92ZoKIvJvceaZl0te73yFctIrR7q2HxNTJxIsg2zo7Y%2BAdRQOfg1F7PXFf%2BiYuanizG1ItN5CVdqV%2BqpRGgGeD08RYIJUjCmosDDBjqkAbiEUZj1P22PFuvPlxWZTCnuoVdKdNcA581Smy2CvhMalhjOXObbjAnezmS9KLG13rMZB%2FqyynTdd%2FxJzvoMaIKQz5vQL8hxZWg06W8jxBvr9Zfaf1CwO6UV69UEGa6%2BPdmhr7EvOoxxq%2FGAsn9VhNZd%2BUyP7VxRinG0qFcibW2%2ByHbwfiVbHs9Q39qybqI13gMQjG0pwR9O6g4WobWi8IuS3Itb&X-Amz-Signature=24f1dcb678fc69975675e1a42629547103991b6c4448fdbd7f7588fc383c92cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

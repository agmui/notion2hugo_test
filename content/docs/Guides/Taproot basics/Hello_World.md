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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQPSQTSF%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1CE49ZiEeb5Ch2qq8pKMozhjjjufrz%2BbFa%2FBHCLgLMAiA%2Fv1DTiZeTOO2DQc6vzkDro8fisbRwFOMWiineNC0Huyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM%2FtZt%2FJtDG88SS%2BpdKtwDQUwiNoh%2BYbrghswqF%2BDDY8FfvtJxrxZy5kBTbttPfij8H%2Bj0ohQurK%2Bg0f7kfRZpNUjz6XhMxIq3z6Tu5pQBLNSCN%2BmMRwskKggy%2BOSWYmyNgj2ubqY%2FF5KCFcXe8vDjksvsgMZyg8vtZ4gYxnQj6JJJcRNVfMlIaVwSlF2UneuiPETqUaMd5BMBRq7zIbbZ9qXpyKUX6Zsn5ac7iq62SV6WbUZj%2F%2F832eKs59Hwsd%2B1CtZXLN1UwW3uKq1qzLsNiL1MNXR1mSComB7O8c2i0P6AyEyC1rYY%2Bw7HC7BNoV6i7OgoPsqaHQgdGqFfgawS84zqZU8wTfQCN%2FYNfRFum6jt%2BOjjVEe8scaJvuxvqCYp6vcPdD1OTa%2B1c%2B1g%2FWCPXEDdYTU6NbWj8uF42ShsuBuiYFZBsYVO5SV%2BQlKOVUfBefif9pggqwQ9JLXcMdHNFz2aFtyoMPakH3jzmusdkwC80JRc6RV6GO3HP94oPvu%2BIQDH4i0WwWkiO9IOj6KRxpOVaEXUXFVuZ0u%2FIOaTaCuu3jJ3NzQNCvLrX8lGHeo17T4xhyIvxm8PKV3DIHztXvPlCNcNaNl6Etqx3h5sfuTpi189gfa%2B70fm3U4TeE5ieaEFoaa48D9jxHEw9LzDvwY6pgGlag71Fp5mn1BWPbb3vUH3lrTF%2B5%2B1dOq8yL2XaM2qrYCYOyxDfLoRE1r36F5U6wcshlpRPGA9UqIKrX2zhF3jcD2M4a4xXcWYlwjwqYTe3mC6YJDylPaUuUewjW80r3wQ2%2BweDunPY4lPjsciQDCY7m2ozlDWGEm0bArXwhZtbnhFD%2B2qo30E5ukLbMLOILl%2Bmh6y7SUlHEhxn7hsIZp%2FFfeD%2FPsT&X-Amz-Signature=241f27f9bd74105fe5a9366af38c6b87a0800bf48b724979336f3464d500242f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQPSQTSF%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1CE49ZiEeb5Ch2qq8pKMozhjjjufrz%2BbFa%2FBHCLgLMAiA%2Fv1DTiZeTOO2DQc6vzkDro8fisbRwFOMWiineNC0Huyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM%2FtZt%2FJtDG88SS%2BpdKtwDQUwiNoh%2BYbrghswqF%2BDDY8FfvtJxrxZy5kBTbttPfij8H%2Bj0ohQurK%2Bg0f7kfRZpNUjz6XhMxIq3z6Tu5pQBLNSCN%2BmMRwskKggy%2BOSWYmyNgj2ubqY%2FF5KCFcXe8vDjksvsgMZyg8vtZ4gYxnQj6JJJcRNVfMlIaVwSlF2UneuiPETqUaMd5BMBRq7zIbbZ9qXpyKUX6Zsn5ac7iq62SV6WbUZj%2F%2F832eKs59Hwsd%2B1CtZXLN1UwW3uKq1qzLsNiL1MNXR1mSComB7O8c2i0P6AyEyC1rYY%2Bw7HC7BNoV6i7OgoPsqaHQgdGqFfgawS84zqZU8wTfQCN%2FYNfRFum6jt%2BOjjVEe8scaJvuxvqCYp6vcPdD1OTa%2B1c%2B1g%2FWCPXEDdYTU6NbWj8uF42ShsuBuiYFZBsYVO5SV%2BQlKOVUfBefif9pggqwQ9JLXcMdHNFz2aFtyoMPakH3jzmusdkwC80JRc6RV6GO3HP94oPvu%2BIQDH4i0WwWkiO9IOj6KRxpOVaEXUXFVuZ0u%2FIOaTaCuu3jJ3NzQNCvLrX8lGHeo17T4xhyIvxm8PKV3DIHztXvPlCNcNaNl6Etqx3h5sfuTpi189gfa%2B70fm3U4TeE5ieaEFoaa48D9jxHEw9LzDvwY6pgGlag71Fp5mn1BWPbb3vUH3lrTF%2B5%2B1dOq8yL2XaM2qrYCYOyxDfLoRE1r36F5U6wcshlpRPGA9UqIKrX2zhF3jcD2M4a4xXcWYlwjwqYTe3mC6YJDylPaUuUewjW80r3wQ2%2BweDunPY4lPjsciQDCY7m2ozlDWGEm0bArXwhZtbnhFD%2B2qo30E5ukLbMLOILl%2Bmh6y7SUlHEhxn7hsIZp%2FFfeD%2FPsT&X-Amz-Signature=a62d74ede962997a16d2de73aa7d38408ae0f9e3e8a94e7b3f779049d1a7cbec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

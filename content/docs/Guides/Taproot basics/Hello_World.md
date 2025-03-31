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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STD5GFJY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGhiEeeoKQ1nAcs13rvgl7ZyAvfZ4wdN00TpNWJeu2tNAiEAhTIdG3awNiZKzLYev1t9Sx9XWUTYekjN%2FuCa6cm2sxMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp7a6CNbZanCoqqNSrcAx3WJHrheyBHwmssL8j9FUC77qHGga8G8NKrN9NjNMrLWwQilN3ZZS%2BDCXHtdf6BcE5hy%2FDpi2fvSiQN33OGvPSWyWh%2Bj2arvFIzLm%2BR7KBSnkHLlVRn1My5zPSjC5qbGO2gSWyTHPOxOnCnFFnYHncGLYLTX0TWVxiRAX3rHIKobCRi16hE1RhA1Tzyurex6fLRoWaqqsw29g4bbXSj41H4PKGfaqg%2F7fRrMxKK11Z7dSfEdk3s47b45h6xizfZqlsafT2A9rGbgmiMAM%2Bf368ZacgBZJ5xKu66Hms8DhEN%2BHqZLK4qeZAgPqupJTv4ZvvDvVYtPXf%2Fjtw50s743OsZlAJhPMeH5d6CCdXmWP%2BdMPT0M5E8uyAgrG69ea7mZYyBLtHbidmcQlzI1kJ5C3zcyy0v0dagZI%2F9Exl4el75rrmNrwjVkfsMk7im6yJxPKzhdy5d1esCBH9Qvtq%2B0z4zIsRlxTcqcMZk4ZUOkk25picIDuNRWaOllg6PRrI926BaJHfH8yM3AAu7xNRB10a0AjyS10%2BwTfCdRBP7mrhFGCiV9lQIKWe7uifVoJcX7nmGevZqZOoGefs6m51N6f7iBiEaCtSCKHYTGy5j4ZvbKwqLVW04MIBIr12YMPLjqL8GOqUBO%2Bz%2FGskeUS7XH%2B9waG1lliKXXGzIW%2F%2FZT1yqLnHHYrVcNn8NL1A8WNsBJ4rOJ1v2Y5Z%2B1QpLTjVz6CFr7mIRW2PKaS3uMbDM68NI%2BokkP7riiwtSV4pGlBikN3ggOtzIlqMZ90qAFEBKEj2Bqx26uAQZ44MbUkDbdoFxN7XqS4hSktywbAzwR1%2ByhobpLMjj79sMusNp904d5wYYXnWx4I9LncJZ&X-Amz-Signature=9c35be4f5b6e6e6791e227bbf5709db5d766af88aca83bd2f3a6c7e1d91edf54&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STD5GFJY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGhiEeeoKQ1nAcs13rvgl7ZyAvfZ4wdN00TpNWJeu2tNAiEAhTIdG3awNiZKzLYev1t9Sx9XWUTYekjN%2FuCa6cm2sxMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp7a6CNbZanCoqqNSrcAx3WJHrheyBHwmssL8j9FUC77qHGga8G8NKrN9NjNMrLWwQilN3ZZS%2BDCXHtdf6BcE5hy%2FDpi2fvSiQN33OGvPSWyWh%2Bj2arvFIzLm%2BR7KBSnkHLlVRn1My5zPSjC5qbGO2gSWyTHPOxOnCnFFnYHncGLYLTX0TWVxiRAX3rHIKobCRi16hE1RhA1Tzyurex6fLRoWaqqsw29g4bbXSj41H4PKGfaqg%2F7fRrMxKK11Z7dSfEdk3s47b45h6xizfZqlsafT2A9rGbgmiMAM%2Bf368ZacgBZJ5xKu66Hms8DhEN%2BHqZLK4qeZAgPqupJTv4ZvvDvVYtPXf%2Fjtw50s743OsZlAJhPMeH5d6CCdXmWP%2BdMPT0M5E8uyAgrG69ea7mZYyBLtHbidmcQlzI1kJ5C3zcyy0v0dagZI%2F9Exl4el75rrmNrwjVkfsMk7im6yJxPKzhdy5d1esCBH9Qvtq%2B0z4zIsRlxTcqcMZk4ZUOkk25picIDuNRWaOllg6PRrI926BaJHfH8yM3AAu7xNRB10a0AjyS10%2BwTfCdRBP7mrhFGCiV9lQIKWe7uifVoJcX7nmGevZqZOoGefs6m51N6f7iBiEaCtSCKHYTGy5j4ZvbKwqLVW04MIBIr12YMPLjqL8GOqUBO%2Bz%2FGskeUS7XH%2B9waG1lliKXXGzIW%2F%2FZT1yqLnHHYrVcNn8NL1A8WNsBJ4rOJ1v2Y5Z%2B1QpLTjVz6CFr7mIRW2PKaS3uMbDM68NI%2BokkP7riiwtSV4pGlBikN3ggOtzIlqMZ90qAFEBKEj2Bqx26uAQZ44MbUkDbdoFxN7XqS4hSktywbAzwR1%2ByhobpLMjj79sMusNp904d5wYYXnWx4I9LncJZ&X-Amz-Signature=d8e1239c65f2651e32b09921096fc9310333d6c050900b240635c9d3971c2155&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

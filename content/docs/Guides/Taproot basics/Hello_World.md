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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3O4G56Y%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGt%2B883Uh4FwMVHGQMYX9bImv3ezf2r%2Fe5gV5WWZQbo9AiEAxIlSjE4n4HnGhRsbbj3p5QYRhEGhN1hS9%2BvRGzoKpKoqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgmLvs4fexxKiVDcyrcA%2Bm4rqKqxAVWvvZLQwPxykV%2FUsK61Fkw879OuGS0lr%2BdHDRjoHyumSNgDU47baUDwVRJmlwr2wYloJPYmNL%2FJLaxRFr4W3L%2FiCPrroQ%2FuFj%2BPonplyr%2BlqMPCQBahuvpBJF5%2FB8e%2FcCzLVY2YPScKa4BSBcdUeGMwY5MC%2BgxIeabjiyKARYDNLsTtCm6HDnG8o%2B0NWkPd8BfkpAcEBwSEx5kkSEuoeviEMZiUKgmtuSXP7NsIrGnOZGevCptIthnodcdAD28%2B7hTykQNu1mkzO%2BcEECBOkf17byJ2NODxZL0AVDaK%2BYzWIFRCbbcu6I8Cd%2F1t9Rqqq5egochnd40fWXCiyPXjI0vPliQTKEuvVAom%2F6VzhLmc7X0YRYt%2FLg20o4TjhCceoYN7dVeZGS7j0BoFTWP5REQnpRNwMfDePd2okB%2FZ29LOWUWBsV3sf2cWbSKngeCsMYxv%2BYju1vtzkeetU6L3M9FuwkONsKyjyarRHsr5t%2B4Nmn%2FkSXmpDCp%2BKs7gZBAmyiGvltKUbM4Ftumh%2BDy%2FVDw4MsNovgMmpJMjUHOyWEkyu9AqSZ0WJ4JHr3IzUm5S0kVikSyv4VTWUkI3Ev6ScWu5ohBx%2Fjd7Beg6BhPjA%2Bijngz9lU5MLan88EGOqUB2weUh8qeb6xKLa8kVVxSFt3d9Vqd5W1xXE%2BpW5ZGsTaj9A%2Fyv2WqUJv4m7WZaPrj7C9ddi%2BMHf27gOYBwzqGM4wePTpKZaFzOYHG94JmxtLZ4I12t3HscnqlRclmmE5tS%2F8rJI1iFAErSJDiaEeHsTSjmhtgV2zoPiDgDCEXRL7qOI8iTx6rsAUrk2BJ8tKEkR6rgIIXY2tp8N4EZOfFbIi%2FtCeR&X-Amz-Signature=d288ee51aa73f6a030e95e9a58da70a05abf964daef163e559c7aa294645f7f7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3O4G56Y%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGt%2B883Uh4FwMVHGQMYX9bImv3ezf2r%2Fe5gV5WWZQbo9AiEAxIlSjE4n4HnGhRsbbj3p5QYRhEGhN1hS9%2BvRGzoKpKoqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgmLvs4fexxKiVDcyrcA%2Bm4rqKqxAVWvvZLQwPxykV%2FUsK61Fkw879OuGS0lr%2BdHDRjoHyumSNgDU47baUDwVRJmlwr2wYloJPYmNL%2FJLaxRFr4W3L%2FiCPrroQ%2FuFj%2BPonplyr%2BlqMPCQBahuvpBJF5%2FB8e%2FcCzLVY2YPScKa4BSBcdUeGMwY5MC%2BgxIeabjiyKARYDNLsTtCm6HDnG8o%2B0NWkPd8BfkpAcEBwSEx5kkSEuoeviEMZiUKgmtuSXP7NsIrGnOZGevCptIthnodcdAD28%2B7hTykQNu1mkzO%2BcEECBOkf17byJ2NODxZL0AVDaK%2BYzWIFRCbbcu6I8Cd%2F1t9Rqqq5egochnd40fWXCiyPXjI0vPliQTKEuvVAom%2F6VzhLmc7X0YRYt%2FLg20o4TjhCceoYN7dVeZGS7j0BoFTWP5REQnpRNwMfDePd2okB%2FZ29LOWUWBsV3sf2cWbSKngeCsMYxv%2BYju1vtzkeetU6L3M9FuwkONsKyjyarRHsr5t%2B4Nmn%2FkSXmpDCp%2BKs7gZBAmyiGvltKUbM4Ftumh%2BDy%2FVDw4MsNovgMmpJMjUHOyWEkyu9AqSZ0WJ4JHr3IzUm5S0kVikSyv4VTWUkI3Ev6ScWu5ohBx%2Fjd7Beg6BhPjA%2Bijngz9lU5MLan88EGOqUB2weUh8qeb6xKLa8kVVxSFt3d9Vqd5W1xXE%2BpW5ZGsTaj9A%2Fyv2WqUJv4m7WZaPrj7C9ddi%2BMHf27gOYBwzqGM4wePTpKZaFzOYHG94JmxtLZ4I12t3HscnqlRclmmE5tS%2F8rJI1iFAErSJDiaEeHsTSjmhtgV2zoPiDgDCEXRL7qOI8iTx6rsAUrk2BJ8tKEkR6rgIIXY2tp8N4EZOfFbIi%2FtCeR&X-Amz-Signature=78dd0874a33d7facad71c6e1c583eef23fd1927c9cdbc02c119d8cf430f9a050&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

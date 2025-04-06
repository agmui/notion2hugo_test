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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAC4NCKL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOUyVwWek7JDarOygWqdoaF0I3QdeMFIsoFYIlKXPqVgIhAN1Ds5AYLgBa1rsiBX0QW5waizlywgHxOM9J1hjEp2dDKv8DCEAQABoMNjM3NDIzMTgzODA1IgyBdatmQyJUuz0ewlcq3AMPHkII3dXECW3HHF%2BoOs%2BzCIEl2XL7ksdq5YyE%2F7hHtH1U6zRzdp9EOkZEBYDXVbUdd%2FnyxI%2Bdp8u9lqlH6ao3r7ouLZbQAykydz1%2FiaWzwPUE56VXqC38RF1ySsQNKXCsH77b1CxRnAGVMkixdF2NKAsE%2BWV%2BxpYT0DQxSERM2DYPOtt0mfhpH7mITcNbCRZwXUZPpL1OQGJLk%2FShZqvfZUs0eHJc%2FfEm38PBaaY0phoDIg66V2JhrVoaIn19wcMSB6%2F9ydfdq2gKr81C57huwXQMMDBpoTRvGCd85FfO54PCff2bZKOFg8BcAKn07yFiZkjF2BGiMQ7XnhOmNjRcsYv3maHYi2rgJlU2sim1V%2FDal5FgrXgHdS7Qy4ohHcaGK5VywFzp%2B5sG0%2F%2FMOx7ALN%2FuqZwQSdFC2H6HCdT1qu7QzOtADZtTOkRpDUcH2xH8bLcnFO1jLnEeeY0W%2FCV6fyzJwK9BbUUQsuPKYxbiBP3ifh8c016CyIwyNerG%2FDXakbPUREs682aXieGVLNBOmNzR6bg6NDII4I0upbxaoibdwkBCv7DhAnJc7tsq61SNTez9HRd5RDJyI1h9VzLSTs3wig1tXoo6CPTFw1vhjZRcxwnI6S083UEjxjC6wMi%2FBjqkAarpJu5I5dNlKrfM2Jpiuse26286DO75s37OzfDm6wSlRUg7rq9u4OIU2i7sfbgWlkYMWjtMlWDMOvQI2gVC5B8eiCsSIT7S%2FACkkJ3buxbqpKWjRrDGdFilKADwFIXoC96O04%2BLc%2BLXkEt630LMAlYxExK1o9bt9hKr0Ti%2FsNxrqoP%2Fzkf182XJ7G3bs1EmidAlDm0im8J4PBHLJ%2BvyZQU7xT6Y&X-Amz-Signature=5cf64a69714e855acb2a6b50a86f6994dddd4694bf46b72959452bff44547102&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAC4NCKL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOUyVwWek7JDarOygWqdoaF0I3QdeMFIsoFYIlKXPqVgIhAN1Ds5AYLgBa1rsiBX0QW5waizlywgHxOM9J1hjEp2dDKv8DCEAQABoMNjM3NDIzMTgzODA1IgyBdatmQyJUuz0ewlcq3AMPHkII3dXECW3HHF%2BoOs%2BzCIEl2XL7ksdq5YyE%2F7hHtH1U6zRzdp9EOkZEBYDXVbUdd%2FnyxI%2Bdp8u9lqlH6ao3r7ouLZbQAykydz1%2FiaWzwPUE56VXqC38RF1ySsQNKXCsH77b1CxRnAGVMkixdF2NKAsE%2BWV%2BxpYT0DQxSERM2DYPOtt0mfhpH7mITcNbCRZwXUZPpL1OQGJLk%2FShZqvfZUs0eHJc%2FfEm38PBaaY0phoDIg66V2JhrVoaIn19wcMSB6%2F9ydfdq2gKr81C57huwXQMMDBpoTRvGCd85FfO54PCff2bZKOFg8BcAKn07yFiZkjF2BGiMQ7XnhOmNjRcsYv3maHYi2rgJlU2sim1V%2FDal5FgrXgHdS7Qy4ohHcaGK5VywFzp%2B5sG0%2F%2FMOx7ALN%2FuqZwQSdFC2H6HCdT1qu7QzOtADZtTOkRpDUcH2xH8bLcnFO1jLnEeeY0W%2FCV6fyzJwK9BbUUQsuPKYxbiBP3ifh8c016CyIwyNerG%2FDXakbPUREs682aXieGVLNBOmNzR6bg6NDII4I0upbxaoibdwkBCv7DhAnJc7tsq61SNTez9HRd5RDJyI1h9VzLSTs3wig1tXoo6CPTFw1vhjZRcxwnI6S083UEjxjC6wMi%2FBjqkAarpJu5I5dNlKrfM2Jpiuse26286DO75s37OzfDm6wSlRUg7rq9u4OIU2i7sfbgWlkYMWjtMlWDMOvQI2gVC5B8eiCsSIT7S%2FACkkJ3buxbqpKWjRrDGdFilKADwFIXoC96O04%2BLc%2BLXkEt630LMAlYxExK1o9bt9hKr0Ti%2FsNxrqoP%2Fzkf182XJ7G3bs1EmidAlDm0im8J4PBHLJ%2BvyZQU7xT6Y&X-Amz-Signature=755c5b482ca431daf264b1d0c772943116d7ee25737380a98699242db9d8ae26&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

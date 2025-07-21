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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7APQS5K%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcoYP%2FWH%2Bw7p%2BhP4JxrHb7fDy%2FIy201rbdiVZXqBblCAIhAJBmDl16YMuKqe20sSeQSqGbemxHDxr3DIafcuXwtvujKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgGnkrKmDcYGhO1cq3ANLPHZsHzY%2BPx35gnGkdNFsjDtfLSOKN1NTLHhx5DHkRAl69z6idLEwvcoMhMuioLF4BLbakINoS278zUg3m381OZF0ncJS63uPIZ7bc%2BG9UJHHQC5TLj%2BJWr36kQAD3%2Fv60zDktu0bCiXJW9Mu3jCiZhWbPALZWOI1GrHv9rfLSYEa%2F60vdkIucxH04quM4A6fiM%2Bj%2BrcBSV9qEwUbllyGOC4KfJkWv6Q%2FIZsvd9KVQtxAMmGX%2ByPekrdfZ4agHe44OirtJTsA0HSZ2pPfbW61KGOpVwySzRF%2FfvHwqp7pJUKabL%2BzVhc77su8%2FqCre0YIb6jBKlGZEJCDnT0v%2BuCsM04z9OlPD2w%2FZVkajKY4CSUejn5%2Fl8zQ6kRfIJRODEf4JJDdJ7ECoqjcCS%2BfAEQNtdaIZGvwIvsQHge2jcEwWCTK2VbmPqNYQqVeYRbMbcJGcORIs%2FDz2%2BZYahQmMv8Fk7ZMEi%2BF2KvD%2Fb8T8alv7o80bq3Oh6Q9fAklWbriMdD%2BjVWQRxalN8X6EGSbK4ryDswvuu1B0nf0%2BtdYzl%2BAEpxoIslftoJIrRbNC30f2pOYkPTcaWahSsFMj40bzQgjPJMVeGyQWxTKhIvzJP%2F0YPZX3ktlb%2BztGuVwxTDdxfnDBjqkAfsnAEGO%2Fqx9e1mChqxi0tqswbGFYKec0GLD4InPChD5klGycZ6BZAL13Bb9RcOMVO4JMgbVLpMh1AmfLnRL%2FclXu7B8lObb5gToeCYUrpHpj1NY18tZwww5vSRC0xuud2IcspQsf079LlKm5hMhRXLayzn4JXvDFI8Ve1egZOlwZ3Te1yQG9AuH0cW2Ul%2FqppcfkqTSudAw997Rb1bUtThZ29Y4&X-Amz-Signature=03769451108dc5d407e68e2ec009834add3b517960cde48b22078c4efa3dc87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7APQS5K%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcoYP%2FWH%2Bw7p%2BhP4JxrHb7fDy%2FIy201rbdiVZXqBblCAIhAJBmDl16YMuKqe20sSeQSqGbemxHDxr3DIafcuXwtvujKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgGnkrKmDcYGhO1cq3ANLPHZsHzY%2BPx35gnGkdNFsjDtfLSOKN1NTLHhx5DHkRAl69z6idLEwvcoMhMuioLF4BLbakINoS278zUg3m381OZF0ncJS63uPIZ7bc%2BG9UJHHQC5TLj%2BJWr36kQAD3%2Fv60zDktu0bCiXJW9Mu3jCiZhWbPALZWOI1GrHv9rfLSYEa%2F60vdkIucxH04quM4A6fiM%2Bj%2BrcBSV9qEwUbllyGOC4KfJkWv6Q%2FIZsvd9KVQtxAMmGX%2ByPekrdfZ4agHe44OirtJTsA0HSZ2pPfbW61KGOpVwySzRF%2FfvHwqp7pJUKabL%2BzVhc77su8%2FqCre0YIb6jBKlGZEJCDnT0v%2BuCsM04z9OlPD2w%2FZVkajKY4CSUejn5%2Fl8zQ6kRfIJRODEf4JJDdJ7ECoqjcCS%2BfAEQNtdaIZGvwIvsQHge2jcEwWCTK2VbmPqNYQqVeYRbMbcJGcORIs%2FDz2%2BZYahQmMv8Fk7ZMEi%2BF2KvD%2Fb8T8alv7o80bq3Oh6Q9fAklWbriMdD%2BjVWQRxalN8X6EGSbK4ryDswvuu1B0nf0%2BtdYzl%2BAEpxoIslftoJIrRbNC30f2pOYkPTcaWahSsFMj40bzQgjPJMVeGyQWxTKhIvzJP%2F0YPZX3ktlb%2BztGuVwxTDdxfnDBjqkAfsnAEGO%2Fqx9e1mChqxi0tqswbGFYKec0GLD4InPChD5klGycZ6BZAL13Bb9RcOMVO4JMgbVLpMh1AmfLnRL%2FclXu7B8lObb5gToeCYUrpHpj1NY18tZwww5vSRC0xuud2IcspQsf079LlKm5hMhRXLayzn4JXvDFI8Ve1egZOlwZ3Te1yQG9AuH0cW2Ul%2FqppcfkqTSudAw997Rb1bUtThZ29Y4&X-Amz-Signature=8a8d970f6ac0b4c0fdc9135e787653e84196580cae918cbd4be60bfecd65fd99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

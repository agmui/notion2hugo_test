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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDRHMS6Z%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCPIWoPxGxkEAuY1Ra1%2Fsc%2BKRc%2F057nh4a83Axkcx%2B6qgIhAJvNReHae9N%2B9gn2HqZeBQqgZ8eQS9mQ3EbW4zqdxLJ%2FKv8DCDEQABoMNjM3NDIzMTgzODA1Igw6FCVHR181YO5Ea%2Bkq3AMOgGekT%2Fqb1dIRq%2B0ySRPh0m%2BvHZ8Vtq6UcB3BMl%2FkWguj3m6GLPj7936EnNcSbAJNfxoZ3flwfJrYDjePUSK8OryiaDElh9hulUejS7Lz5W%2Be3V5JD4GVlgTp41MgwapQIjjFRrDVBKQabjprPBWlmkLTDKH11uCbSY9BcHTp7rKaRjNjzyb3as3RGH%2FC35rVVUCYKYkUxnviiPLmiWqWFwhOUggUROZunPNJX4n8RUHXDQXWQEHSnkASm%2FxpSQTS%2FL9GMyQ22RTkGug2Gjt848L0kMWUtTEjGWkbUf8xHERlbJ3oEyfoE5NU86cH0qGfoOEyFKs6KFV5ChIfQX8QCm1eOjha8P23L4IyHXwgGoPVmbwWR7wrDI8kGAnaaigZ4Y2m3O0FfzRSJM9N1q5l1xFRuwK3YNWSUwWjD4vnE81IDkLk1U3VZGluHde2OYH7VU8BW7acRGHon2yDGfWq22lD9VTla8DgUvPrq29MxsoTU4RTXKWJlbX91vxD57Ka%2BPaaYO7KDa9iu7kQE%2FSd2wTrXtazkzDLTFlZmCo7Wgzq%2F95yfTGbihl3jLmfBiJq7pzSU1CSBlA1E5bN%2FFFmxN609zrlmXASu8Ldu4EEc75osOrCc2NaxkdrVDCc7J%2FDBjqkASRzTybdaDfjouo7B4dpgfpMIQxX7uKt8vAk40JEEZ2z888IadJdPtA6xt9Ryi2hWNXlPmOLORp8Hylgqp7koAtPk%2BL5kh4wLYjd2uydo0XASBd9sYYterksHtnmG84EXJJRCTAfAiRVhdG7hR8Py5%2BBI58fAdTpKXhRtqe0NLp27gu%2BVYKEVUZmhURoIGJU1lzdtpkJrkCAutbjUPoi4pVlnobc&X-Amz-Signature=0401733cac40152c829075183fe9b042837ece7ad4b491d4e08099ce514c6fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDRHMS6Z%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCPIWoPxGxkEAuY1Ra1%2Fsc%2BKRc%2F057nh4a83Axkcx%2B6qgIhAJvNReHae9N%2B9gn2HqZeBQqgZ8eQS9mQ3EbW4zqdxLJ%2FKv8DCDEQABoMNjM3NDIzMTgzODA1Igw6FCVHR181YO5Ea%2Bkq3AMOgGekT%2Fqb1dIRq%2B0ySRPh0m%2BvHZ8Vtq6UcB3BMl%2FkWguj3m6GLPj7936EnNcSbAJNfxoZ3flwfJrYDjePUSK8OryiaDElh9hulUejS7Lz5W%2Be3V5JD4GVlgTp41MgwapQIjjFRrDVBKQabjprPBWlmkLTDKH11uCbSY9BcHTp7rKaRjNjzyb3as3RGH%2FC35rVVUCYKYkUxnviiPLmiWqWFwhOUggUROZunPNJX4n8RUHXDQXWQEHSnkASm%2FxpSQTS%2FL9GMyQ22RTkGug2Gjt848L0kMWUtTEjGWkbUf8xHERlbJ3oEyfoE5NU86cH0qGfoOEyFKs6KFV5ChIfQX8QCm1eOjha8P23L4IyHXwgGoPVmbwWR7wrDI8kGAnaaigZ4Y2m3O0FfzRSJM9N1q5l1xFRuwK3YNWSUwWjD4vnE81IDkLk1U3VZGluHde2OYH7VU8BW7acRGHon2yDGfWq22lD9VTla8DgUvPrq29MxsoTU4RTXKWJlbX91vxD57Ka%2BPaaYO7KDa9iu7kQE%2FSd2wTrXtazkzDLTFlZmCo7Wgzq%2F95yfTGbihl3jLmfBiJq7pzSU1CSBlA1E5bN%2FFFmxN609zrlmXASu8Ldu4EEc75osOrCc2NaxkdrVDCc7J%2FDBjqkASRzTybdaDfjouo7B4dpgfpMIQxX7uKt8vAk40JEEZ2z888IadJdPtA6xt9Ryi2hWNXlPmOLORp8Hylgqp7koAtPk%2BL5kh4wLYjd2uydo0XASBd9sYYterksHtnmG84EXJJRCTAfAiRVhdG7hR8Py5%2BBI58fAdTpKXhRtqe0NLp27gu%2BVYKEVUZmhURoIGJU1lzdtpkJrkCAutbjUPoi4pVlnobc&X-Amz-Signature=a94297cfc8f2db6d4e7e9d039153c705472d46a8f02bb140a506cc1a45cecb6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

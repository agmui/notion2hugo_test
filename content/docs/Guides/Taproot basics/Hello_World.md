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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXLPAU5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFVoeoKnTJm2pTdllTGNL3L8QvuznPZuQ5MgBIaaZK38AiAnqOiJnGNJmRUhpxHjYUpsueY6%2BszUdL4DfgD1AJG6PSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMEtcHfU9Jvn672kMfKtwD1ExDCGIDC14CCHdvsNW1zeugum%2FB6HErE8RHB1mioUW5rRRkKVTBH0Xc4GSWBXdKLX%2Fiv3qx428p4NxRsjAmS%2BVbuDILzXUM6UfLFjMa7CUxkGccS4Q7DWQWkCocNymLz9VlGvyx9XJ5QZW5mVmPScNwKDk%2FOw93jz4TMBSbayVOL73%2FbjmeFLEoQkQWFaUah1UGPVYeH0dF7XiXOQspqFNcePybgenw31S6pymKVuFEv0SmgnIqWtEFs9HM8lC6zJEjJmTO6xtr6kya5bIp3KqVmXrVCrGVhS5FWf%2Bbtv5QaSAA%2BgcUcqSPJOdkiDg3UPoegGDIXuAgnFvxrujpVnk1PG3XGgt45cc%2Bw29N4TPyn02Lq%2BfDJwrKNercpLEM%2F0yD7AThp0YSgZsgBZr3d7cs1jvpUzILOmzZ5JNsJl3UlnUYaX9ejL25kEeYCUBZFosdpHeIPT7kT3ZpyNPB1QgsfJ%2BOzhtWL%2BRKvGhnazO5ttNNsWmo2%2B3%2BcHuHVfFhPW0fxEfizYzXIzcD0tdRoXQKOjT1zUc3AYOO57lAMbqnPvT55mAxT7I1yN6fgDOKyrajCUguI8vjXQW5W%2F0MVASVdPlzQYTN4fzycXcTYtORX%2F2K2Xg%2FVbKabcIw1s7owgY6pgEhfaLjih%2FJtAFTa91skZcCOZM65j%2FSnBH5N8nLdygyg9JSMH7yOPDBOB81TEEDbn6mkIEjkex4YD9vab%2B1vz6lkzWqVnAx8sCNvVGU5EU3T4G1RonOzUiZHsBP3%2FEkp2UyAcy6zs1%2FMMKUgFLsBkZ79y2HxXwuON5NHvGZzWRjm4ORwd4LnDlrb33MbgLYS4rMA886kbFu2eVAhFmnBIzrhJiJUd0J&X-Amz-Signature=15fe867a45e2bd748fd37760d49a5619b84687240475294c4400436973b7da4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXLPAU5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFVoeoKnTJm2pTdllTGNL3L8QvuznPZuQ5MgBIaaZK38AiAnqOiJnGNJmRUhpxHjYUpsueY6%2BszUdL4DfgD1AJG6PSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMEtcHfU9Jvn672kMfKtwD1ExDCGIDC14CCHdvsNW1zeugum%2FB6HErE8RHB1mioUW5rRRkKVTBH0Xc4GSWBXdKLX%2Fiv3qx428p4NxRsjAmS%2BVbuDILzXUM6UfLFjMa7CUxkGccS4Q7DWQWkCocNymLz9VlGvyx9XJ5QZW5mVmPScNwKDk%2FOw93jz4TMBSbayVOL73%2FbjmeFLEoQkQWFaUah1UGPVYeH0dF7XiXOQspqFNcePybgenw31S6pymKVuFEv0SmgnIqWtEFs9HM8lC6zJEjJmTO6xtr6kya5bIp3KqVmXrVCrGVhS5FWf%2Bbtv5QaSAA%2BgcUcqSPJOdkiDg3UPoegGDIXuAgnFvxrujpVnk1PG3XGgt45cc%2Bw29N4TPyn02Lq%2BfDJwrKNercpLEM%2F0yD7AThp0YSgZsgBZr3d7cs1jvpUzILOmzZ5JNsJl3UlnUYaX9ejL25kEeYCUBZFosdpHeIPT7kT3ZpyNPB1QgsfJ%2BOzhtWL%2BRKvGhnazO5ttNNsWmo2%2B3%2BcHuHVfFhPW0fxEfizYzXIzcD0tdRoXQKOjT1zUc3AYOO57lAMbqnPvT55mAxT7I1yN6fgDOKyrajCUguI8vjXQW5W%2F0MVASVdPlzQYTN4fzycXcTYtORX%2F2K2Xg%2FVbKabcIw1s7owgY6pgEhfaLjih%2FJtAFTa91skZcCOZM65j%2FSnBH5N8nLdygyg9JSMH7yOPDBOB81TEEDbn6mkIEjkex4YD9vab%2B1vz6lkzWqVnAx8sCNvVGU5EU3T4G1RonOzUiZHsBP3%2FEkp2UyAcy6zs1%2FMMKUgFLsBkZ79y2HxXwuON5NHvGZzWRjm4ORwd4LnDlrb33MbgLYS4rMA886kbFu2eVAhFmnBIzrhJiJUd0J&X-Amz-Signature=b20114835fc68b641a2f536712b6eccebff4cdc7f14762cf7621a09163b8aed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

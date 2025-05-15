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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKO4S4J%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2F5AfW9n7W3U1WYFLi10fsW9lRK16CU%2BDWYWB5qw6p3AIgUwM686F6oyG90zBv9SG%2FJtedjaagpTJ6T9IwYKP1b48q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJUBAC1Ux9hBjvhONyrcA%2BTApLMiNy9FUDGq3yxtA5ixXtaEEiE9T6vXugJQK18Rghy4ETxKNZDQOdhnOuma4lKPCrZTQr%2Bf4qMDq25dwQYQ6gehsud93v%2F%2Fs08RJL%2BoW6pmoY7xRU%2F7YVn%2BbmwnI%2BzRmIz7C%2F8KhD7%2FzUsGoKjKnCk7rPyWjGd2yFr8PuwsUoNSQge%2Fy2ONE%2BDYkNrjKAHARkarPpSaFAEdOpfo%2FQ7N5NMBfyfUYcIlE4pTTCh%2F6lIGUsDpXZRhRyx9lXLDOALJ9PyVo6J0f8o%2FT9uxXX9CSMy8E2qkj7yZ1nZBpf6lTFo1nwImISOM8EMGbnCjuX5iE2yAiUWbKClhECOy1BrBl%2Fi8gH9ZCXRyZ%2BRhY6E566HBv9Uwcdt10TwvaY5v7cIQdq7A0gC9S5DeCF9fnXz42OP7IoNXfjkI4myZ6cMSnN9qL%2F8mx3ie2D8v6PpRXMwBD5zZv%2FZPSYvvizbTpnh%2Fn5ECE2W6ocSHVpjIRkiQh5BuOtOX7If1aE0ebcco6vYez%2FdcKV%2FxEV6O1TNV51hWcAVSQyDnkuv6eouZgjQZxWuPGMjt81cOQRW7C3OC3TwA%2FeOEk%2FxOTfCUT29WZcIsGHJmT3qr2fjSNke9Brq8IszTiGZt5%2BERshnjMOrImcEGOqUB%2BprVV0WeQm5A1IKVXDfGdvUkx1mcY2E82QcrJlERab2XpnFzuxMOvflzvtMnBeH05O6OCSlhAwM0et%2F2aPX%2BNlWqObQIGMAcNSH0a7hIQkLfNVcu4H5TCJZrONThSWh9lx1Abd8vlfc7JR31Fr3Z2Mz8x9mTuc%2F7j%2F%2BdYf7xOdRqZIg3KPPvseB3iwi7kMpMbVKdnD00o85%2ByhpTgQY3IuSJ6Xid&X-Amz-Signature=233fad7a72bedfa19bce5c4e217e4b8e59dc082410eeaab432eec0713ed79a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKO4S4J%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2F5AfW9n7W3U1WYFLi10fsW9lRK16CU%2BDWYWB5qw6p3AIgUwM686F6oyG90zBv9SG%2FJtedjaagpTJ6T9IwYKP1b48q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJUBAC1Ux9hBjvhONyrcA%2BTApLMiNy9FUDGq3yxtA5ixXtaEEiE9T6vXugJQK18Rghy4ETxKNZDQOdhnOuma4lKPCrZTQr%2Bf4qMDq25dwQYQ6gehsud93v%2F%2Fs08RJL%2BoW6pmoY7xRU%2F7YVn%2BbmwnI%2BzRmIz7C%2F8KhD7%2FzUsGoKjKnCk7rPyWjGd2yFr8PuwsUoNSQge%2Fy2ONE%2BDYkNrjKAHARkarPpSaFAEdOpfo%2FQ7N5NMBfyfUYcIlE4pTTCh%2F6lIGUsDpXZRhRyx9lXLDOALJ9PyVo6J0f8o%2FT9uxXX9CSMy8E2qkj7yZ1nZBpf6lTFo1nwImISOM8EMGbnCjuX5iE2yAiUWbKClhECOy1BrBl%2Fi8gH9ZCXRyZ%2BRhY6E566HBv9Uwcdt10TwvaY5v7cIQdq7A0gC9S5DeCF9fnXz42OP7IoNXfjkI4myZ6cMSnN9qL%2F8mx3ie2D8v6PpRXMwBD5zZv%2FZPSYvvizbTpnh%2Fn5ECE2W6ocSHVpjIRkiQh5BuOtOX7If1aE0ebcco6vYez%2FdcKV%2FxEV6O1TNV51hWcAVSQyDnkuv6eouZgjQZxWuPGMjt81cOQRW7C3OC3TwA%2FeOEk%2FxOTfCUT29WZcIsGHJmT3qr2fjSNke9Brq8IszTiGZt5%2BERshnjMOrImcEGOqUB%2BprVV0WeQm5A1IKVXDfGdvUkx1mcY2E82QcrJlERab2XpnFzuxMOvflzvtMnBeH05O6OCSlhAwM0et%2F2aPX%2BNlWqObQIGMAcNSH0a7hIQkLfNVcu4H5TCJZrONThSWh9lx1Abd8vlfc7JR31Fr3Z2Mz8x9mTuc%2F7j%2F%2BdYf7xOdRqZIg3KPPvseB3iwi7kMpMbVKdnD00o85%2ByhpTgQY3IuSJ6Xid&X-Amz-Signature=3a20fa799ec67634ea49758453b179ef4c16263998065acd73f61e57c3d3aca8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

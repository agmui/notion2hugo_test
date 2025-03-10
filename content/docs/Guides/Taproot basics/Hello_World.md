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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHKNEM2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCQIu3gKUy9mFXSQ%2B1%2Blvxn5bglDnUsdNPNtBqWi8W5eAIgGouOfFUOijf4j6iVxAv2A0BAl4DS%2BbJ8EF%2FPCMFtZUkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmT1WZ3bIH4tjD5vircA4FWNg%2F0Xzc9JfyVu4BiMlFM38FCa7xjCMoGXNStjDC8NIw3qtRo%2BYik6twdxXnqdxyQTUVxR9QcbueGJqvxnWpN%2FYG1UQdjRqC4gd1tW4A98CxOS3L7OmdnTvRboWplwi%2F52QTe7Mi6fzMyhUfeSbadEwT%2BjsUQAbhptbbYkI5wJSp6qKEWuJZ75dJljlbuazcAzoYPlFd1jnnUks3YJtj4Q%2Bf%2FDfV%2BZgUgMPnOnxh%2B%2FvGz8KrToGz%2BGYuDfh4ObuG45UnABVYIOqyBnDGNmHvFRa0jtkwZVT7UalNKJXYC%2FkXiw3TFIGSl%2FHQbgae9RB%2FB4iepwIk3iKMaEY7EIyxzvMD8BWz%2FmIElQbz%2FZDO8IP6NGEhfXk%2BO12xjRgMI6yrMg3tYL3QU1MSqbFSmGbI3DkKO4ZckJFX7dEuyOpV3LZfz9%2BkD%2FrFbT29pEswOjaab5cNERxcziE1A4kVQGrXeLmO4mmOUnqnNrPGIM5LutKHgv%2F1G0DxSGp3vVYHMa6hAj9Ebnje7f67PdLJcfg%2FoKi4ZcMtfhB%2F7W2X3JzglKPZqBLPUlFM%2FT8J9nbdsty1mZD%2F2Gs4nE8u7pcTmO%2BgQdztAaDOsnrUTqckv9AvVtY30SFKGRSJGVk%2F6MJf7uL4GOqUBxE41RofyljL%2BDFANvzxLVU3MMbI2hzVwe8aDetabH0iBKTL6uyUqf5FC6BuqWQR%2FaqEY1HC3flaUzPLpC3uogUILAKvUgn67qLDninfYPoGa7%2FC61MvLtXSEMNCMA%2FfPyHZ2Du%2FNSjwjH2Kcxz%2Fe%2B6CPxkEYEfHLANB0MyNItIubDdIzZ59OQ3KolRYxoZrKeO0zEjG1S2u3fLMy8npEEThY61YI&X-Amz-Signature=a960dbeb054bb6143ebb5829f5b5ae8ca2ff2772340ed284f1f49f5c86cd6dbf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHKNEM2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCQIu3gKUy9mFXSQ%2B1%2Blvxn5bglDnUsdNPNtBqWi8W5eAIgGouOfFUOijf4j6iVxAv2A0BAl4DS%2BbJ8EF%2FPCMFtZUkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmT1WZ3bIH4tjD5vircA4FWNg%2F0Xzc9JfyVu4BiMlFM38FCa7xjCMoGXNStjDC8NIw3qtRo%2BYik6twdxXnqdxyQTUVxR9QcbueGJqvxnWpN%2FYG1UQdjRqC4gd1tW4A98CxOS3L7OmdnTvRboWplwi%2F52QTe7Mi6fzMyhUfeSbadEwT%2BjsUQAbhptbbYkI5wJSp6qKEWuJZ75dJljlbuazcAzoYPlFd1jnnUks3YJtj4Q%2Bf%2FDfV%2BZgUgMPnOnxh%2B%2FvGz8KrToGz%2BGYuDfh4ObuG45UnABVYIOqyBnDGNmHvFRa0jtkwZVT7UalNKJXYC%2FkXiw3TFIGSl%2FHQbgae9RB%2FB4iepwIk3iKMaEY7EIyxzvMD8BWz%2FmIElQbz%2FZDO8IP6NGEhfXk%2BO12xjRgMI6yrMg3tYL3QU1MSqbFSmGbI3DkKO4ZckJFX7dEuyOpV3LZfz9%2BkD%2FrFbT29pEswOjaab5cNERxcziE1A4kVQGrXeLmO4mmOUnqnNrPGIM5LutKHgv%2F1G0DxSGp3vVYHMa6hAj9Ebnje7f67PdLJcfg%2FoKi4ZcMtfhB%2F7W2X3JzglKPZqBLPUlFM%2FT8J9nbdsty1mZD%2F2Gs4nE8u7pcTmO%2BgQdztAaDOsnrUTqckv9AvVtY30SFKGRSJGVk%2F6MJf7uL4GOqUBxE41RofyljL%2BDFANvzxLVU3MMbI2hzVwe8aDetabH0iBKTL6uyUqf5FC6BuqWQR%2FaqEY1HC3flaUzPLpC3uogUILAKvUgn67qLDninfYPoGa7%2FC61MvLtXSEMNCMA%2FfPyHZ2Du%2FNSjwjH2Kcxz%2Fe%2B6CPxkEYEfHLANB0MyNItIubDdIzZ59OQ3KolRYxoZrKeO0zEjG1S2u3fLMy8npEEThY61YI&X-Amz-Signature=ecc8ba5445a03bee368743b8fbf0ef8d32a0af1853e2aadbd72725ed84e46ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

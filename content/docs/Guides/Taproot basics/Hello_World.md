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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3JQ3GBN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDkJ%2F3%2Fbx2te2UK%2FA6oxqs95uD3bRShX6VRi%2FrmFB9%2BRAIhAMVfdvDrwS9y5HZiZxzwARYaB6Ah2i2gQO%2Fu1pe3SdipKv8DCBAQABoMNjM3NDIzMTgzODA1IgxypnmZWbs3TKiN98cq3AND4RefnquerwobZuc6c80ijAR99OLzXQLEX6UMQsOdk%2BBE5NTkwDjjPhYyl23rt10s25%2BZ%2BvBgqoml0uRw1YcLBdGnms2dpzXt7xFYiA0b%2FomUmBgE1VRAuV8drsuFOfqwqVlZPXGZx3HSP1sG%2BIilYWMpsACnIFpex4KVDEhzpN8A3un%2BSCF0b2b3iCS0F8Ajo8X5kt5wQdd1cPCyyGTKfBiYj%2Bjsa5iCBNVMJ48F36GnzOaM2FHEJy90%2Fkavc2e%2Bh%2BOt2ZHFq4bZkRT4LPXhu47tHBMYM0fGZqOBYcJr4Rbbr7m1JYcdw0rdch%2F3FR6Ir0T8eauq9OmzD4XSYD7uMxblNfLkZRWj0uwTbepiZaw%2BFYRvbCHeLDdsHHAGjw8KEaehcz5Sa7eyHsisvl36R%2F%2F9OjZF13j3vvgbxVSB6YGjhtomBESqsody%2FjGLLFav9WlZoIh5k7BDfTvx%2FBPd8%2FSfBbjhtM1QSo5JHcgPC8zMox1g4l7XDyzy5YMaI7A8CRZIChljbpjmDDQ5kgW8YNiBgdRH9LIhYLUTk8ZFZaxj7FS1naf6mqFawav7abXk2zQ%2FcwXRbmhZ23WLdPHMa7%2FTHM5Lm7QgTWXSp0mYtgo%2BHhed%2Fzk49i8KpzD5tKfABjqkAZACi%2BCbUO36c5LQaJKa%2F4%2BXYZ9Xc5bVVdhXALkwxZ3wNzGzdfuQzs%2BJ7rNIoQ53IT8XXp3SZVkTxI8MJH4H07g9wKBa3OU9yKCNWWJf3jen6anrOmdW47ylOfe25Q90dMy3miouKPoEvPe1SE173lKstOkO1AUfO9se%2By7HRtz9Xm5wLM79ghvvPQ51FoNqtsALYdoIP3gtotSiVPjWwb3mquBH&X-Amz-Signature=357590ba37aeadcce9f1285ec0961381f068c0b6a64a3ae53091f654d4c650d8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3JQ3GBN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDkJ%2F3%2Fbx2te2UK%2FA6oxqs95uD3bRShX6VRi%2FrmFB9%2BRAIhAMVfdvDrwS9y5HZiZxzwARYaB6Ah2i2gQO%2Fu1pe3SdipKv8DCBAQABoMNjM3NDIzMTgzODA1IgxypnmZWbs3TKiN98cq3AND4RefnquerwobZuc6c80ijAR99OLzXQLEX6UMQsOdk%2BBE5NTkwDjjPhYyl23rt10s25%2BZ%2BvBgqoml0uRw1YcLBdGnms2dpzXt7xFYiA0b%2FomUmBgE1VRAuV8drsuFOfqwqVlZPXGZx3HSP1sG%2BIilYWMpsACnIFpex4KVDEhzpN8A3un%2BSCF0b2b3iCS0F8Ajo8X5kt5wQdd1cPCyyGTKfBiYj%2Bjsa5iCBNVMJ48F36GnzOaM2FHEJy90%2Fkavc2e%2Bh%2BOt2ZHFq4bZkRT4LPXhu47tHBMYM0fGZqOBYcJr4Rbbr7m1JYcdw0rdch%2F3FR6Ir0T8eauq9OmzD4XSYD7uMxblNfLkZRWj0uwTbepiZaw%2BFYRvbCHeLDdsHHAGjw8KEaehcz5Sa7eyHsisvl36R%2F%2F9OjZF13j3vvgbxVSB6YGjhtomBESqsody%2FjGLLFav9WlZoIh5k7BDfTvx%2FBPd8%2FSfBbjhtM1QSo5JHcgPC8zMox1g4l7XDyzy5YMaI7A8CRZIChljbpjmDDQ5kgW8YNiBgdRH9LIhYLUTk8ZFZaxj7FS1naf6mqFawav7abXk2zQ%2FcwXRbmhZ23WLdPHMa7%2FTHM5Lm7QgTWXSp0mYtgo%2BHhed%2Fzk49i8KpzD5tKfABjqkAZACi%2BCbUO36c5LQaJKa%2F4%2BXYZ9Xc5bVVdhXALkwxZ3wNzGzdfuQzs%2BJ7rNIoQ53IT8XXp3SZVkTxI8MJH4H07g9wKBa3OU9yKCNWWJf3jen6anrOmdW47ylOfe25Q90dMy3miouKPoEvPe1SE173lKstOkO1AUfO9se%2By7HRtz9Xm5wLM79ghvvPQ51FoNqtsALYdoIP3gtotSiVPjWwb3mquBH&X-Amz-Signature=cb2a72aa240ff388b34c25161f730ae5b664ad322f73603152c47a1039950864&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

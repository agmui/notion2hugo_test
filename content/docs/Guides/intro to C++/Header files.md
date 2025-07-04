---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y66D2TVF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGcFf40S1ztt7%2By8ybxnqYXKbr4URgT01LNPH2dm1hS%2FAiEA%2BYmFq5QOXEeimHtdX1VOzfRF%2BlNe0WYe%2BB4aaaFqQzMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPflq0brHOEjJMcxqircA2araBRprhPrhmWtkNY0tQfiuZphZsGZtmelkT%2B0K6yjjq6J6WxGvNEG8bnRzR0chp0hAP9%2F2G9ZZTHcLtyKy1UQS9xMIYGjZs9fZx6N%2FCW%2F9MAy15AEhGvBRkLxqX0r44SM1qjD2Bn%2FcI3zuwAcH1BpCwQbsl8vMQeV2Vzqu2Gkiolse14t7XsGJ7WKYiJa5knT2QuKjL5DPlq5yv1D4dpy9OKZE90iTaTLNfJ1Axeo43P8vbGOZzYrekmBWKZHsbg7HHx2KlD0REQDmnOTxgfyD%2Fn4ROlNf2oX5Dcd6vVrPK0Y2ODajAp3gz%2F75QPeD7FOP5fUMLjxIU7vD7oHhKOSu0WcpDylEvevVFQJUsbEoCAOLUQEJHIaSlcdM9T6vJAs82GKXlOa7akwk8QiSJlJ7ArYH4lYihy2WtV8nCoKK6bTDmRvBBTDjRyw0RthjdV%2BtTx11BYI4XCg3PMEf%2F30VTD146tHIiypQoFd0NTwGAsnvz7j9CmUZoy4u%2BzKDtI70UEJ2I8Y2EM3TpMMRxItHj64quTxpFsqPUEcFUG7x1f9rHV4qTjNfwgEguOJphE5Nq%2FTFraWc48vx7ksb31NqUkLGABI6EV2XJCwUXt4%2Bey79BCMHD7oGcsrML%2Bbn8MGOqUBEVAKhoxNtrgZbEZje55x6LJsdCfThXqjbfXnI9WlzrTzfPuor2F92o%2FeqQm7rnedaqq6x3kZ6GKYGmXIE%2FdH4RqepUU1zSJV92dcdvs7LKr2qgq6odbVWgfU2HDN%2FSQMD2693FScZT8G%2FDTSDvrAHWTkJfJen6yIjuvaRWjh%2ByoYtdHg0WMO5u6sBLmj2bVfe9U3wgCeNyJAUN2dTIjmeEKt5qnn&X-Amz-Signature=c3a3770d929b148a09d54b7edefe9f0dabea3658549f25d3781188e1ab3ac6f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTQKEJNX%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDZ6AKq18cOTzNA9T9UHuG6fYDkvtJ1u6tTvvL3xxcIdAiEAktvgaSo4QDj7%2BNOD0vjj3uTAOMQpQlvPTi%2B%2BGrD9YCIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXYSBhO0%2BWXi5umjircA%2FNlVGlYAj9pWgFbiKrfBc5rbwbq8bbv3o6NK3d6osG2zjNU2ZIl4sqaHpVsSC4rSiUkB579%2Fnjwpazm89eSGsZcFMhYPXfxwGTUNtKw2iHiA2rJ%2FNsKMMjGBBpNbp3LvmCwuIv4ZfPuMe0IbpRwaW93GFFT5QarN5B8LNdAHtziziPIFZ1byljP5ZoTlm9gXvX4iMh25BH%2BNz49WdXBHMqCMulz2p4oE50HQnCIbe0BdHBrGtfeylPWhUv4QWV7BaK6LS4gMYKWqMfm1jAzb5K%2FOx4EMfup3QMog5Q41p8m5BsQA1DuAzShIbPzIbWIm%2F9Q%2F9Sh3jJsgSLqCcmrT70yDNWwTxJjkaMfaO8fceK06LzevqGIaJfdGw7nIglfl2%2Fiq%2Bts4J7G%2Bav03AQyooSglKfUDPn993rO7VrVuTO%2BGFg4I6ydDdai2VkJ1%2BTutm%2FDO2ONq5rsMQnDztK7gZmluNaZx6l%2B4dtG2rvkCwuBhmEK25m2gsHpf%2Bo6LKpI63sh%2FfTyXvxb4upXjlGqiNJcDbShFH2TanB9apg7YeFLE8xlDbMiAacQKbNebSlQVw8SLuvaVWePg%2BzSuY79y7lFi1naAzqUVuiktYFOzQ4UqtF6IFEWE7e9Jp3MMP7e8MEGOqUBN0qm9k5BRNAns0dY7PRBpNYYpF9SB4xGZOHNbpWX6W4tsrP205M2TdcDSZxYqsP%2BLRUCkJk6pt9xRWh3Lanjk2IjxRIKkZ%2FHzvNujKfGD4WeeA67X96aTWlB7rKadSTnQBiBQyQoXGnVlmD3lWNT%2Fe8nAArQ0NGFA78n4hN0zVwpDsQDHZ1bNlRPnz3I3f7M6hjLAkGdSYxOIXo2SfYdutMXMEzX&X-Amz-Signature=a3c7442639d1fc41219326f8e2865913d3f8f1b825926e4e86b5cdf7a421f2dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

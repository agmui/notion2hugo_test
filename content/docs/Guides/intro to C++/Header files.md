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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT7HFVOZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FR5zDRGo0Vnvl0fZ8%2BCWtCrQizOxs2rE56vJ0DTMCCAiEAm6mAD9hFdd1q2thPtJQeB6R4FzpBPxxOktYY5N%2FCj74q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDPakcMg72XUnRmuvLCrcAyThLTzQLZ8Xv%2F6cS4vGSbmQfWW%2Fj%2FLNHK77JLlpRw6PyU10jrTyoXtRF%2F8Rc031JmOTnWDujQPDLFWucbKX%2BgT%2BIQ4%2F2fWf8Kkv%2BrHq0u3QNYmXWDELgVGz0t3FekqsovaaYaFCuOTiGJL9LQ2o7xjWqlxfXZzXPCLS6r3aLKIJ%2BAe7aCtcm3SPA3Mc%2Fa2sdbuKBmu62YQ9Fo2cFmVkjdH7XCbdPtqYHR8%2FYBhli6O%2Fc8hX0K3%2FMC25v1q3Fev4nNato4FX7ceLGccf4yRu%2FIHMEr4FQcoq2UX0etNC6y3ai7DPN49ZBxzj8f5veEQ9MqNg91Od1oklKVkISvRzWb0qvQrqeVD77%2FiwMlEDA%2FIaAQkZ%2FVyQJNLqE9VeJ291xDkUTk2kM7r7XfZ5i4qFECAIfkypD5pIChf64Y%2ByeW46QZ0G7DZOC1Tgcs2tskfBEo5xM6WMq4Rmbwld2NsbG6yIpFqk9ncofO%2BK5f5c2BonyTWQWi8YzUwu3N2M3T5tOjJ8DTRsv9ggFgU1SC3MGYx%2Bdg4zKhUm3pqAcAgw6Las9F3jbScQEjbBHt5yHs%2BU1YCnSa5RmaYfrXIBctRKZQ3rdq6h1i8ENfOUJO%2F4z%2BSjnLebIGGBCuq7YjXAMMKb9r8GOqUBFy%2BwrAG%2BzYgzijK8Nc%2FoRkJjVUcjCREeZbti5E4dSyQTx2VCARJLgI2QpjkbnOuJCX9php%2B03pdoZeUPNefkVWVrYbmONkHSjowH82k8DFJ9LcRWMW1Bdc3osXecsVAwcLgYNfL00JrfGNzEk054y3tp9qmJ1CBAe0%2BVWZ100xMxWeauxtBuQqNpF91K0gJOF%2FrYiTkirQO3RH7eEfEYA5WME9MN&X-Amz-Signature=744a9a87d1169d443d4f6119aca56d9fb9b7beb9b54662d6b39ec56e76d929b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

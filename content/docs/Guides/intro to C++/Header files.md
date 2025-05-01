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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637S5YGTN%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBT2LWpvCsrsID1q8MxqjGxot1ott6ScWfCzqKE9KO7JAiEA%2BX%2BR9hszuYOa5it1MSSYlNI7m6WekPqHdFw9G4J5Y1YqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNf7SDIgCcfWoUUNqCrcA3M7Tc7Yja2NM2Ucyry%2B85l%2B%2F4WByEBWiJ9U2Fqdn%2BhCLCtVUzEMhlnDTcehJ7Fi%2FjEQYYCuBlCYtoTOkynWlArB4bzE0mLQe71OtSc80uQDWivbfJuSIWBAGgQxDmYowqyBOJq24mNYUu3KY%2BvbXu7bv3xllvtOTfChQc1clTfNyKRpNsNx59VwG4jFd8oOVBZqthst2KSQ647mHgCOF5gt%2BZJVCildkoSOR0i1Qxnb7dbFbp2BQgZx5NNBYtc0KMdn6JmtSOZyiVUPQFyAnNwxlY8g9RwPo9LFwbWeJeZ1pTo4THPmY8gj6uXYpDyePR6Xagvtrz%2FbhP7OGVXVdIwuHfZVhjAOmLDxl5wh3%2Bpmexl4rA1Ek4brubLSrUlXlh98JIR7j%2FHleWcZV2taBBdm%2F7fGMPcyHEwiAetoU%2F%2FwpSuYe%2FsoZCtqqYvc0bkekxdz8JHqMWgb%2BjfT74FpaR1Gtf%2BrTPUbRnur79%2B2d4UF%2FqbCjMh0jaSpiUeM0QH4VkMx7Gnt%2Fz8QSN2VNdafYiQG%2Flq3ILmy97ttKsWbbrDBOCSyjt8TBSukQe9apQLw0WVE5ErhkKOu4D8ZVe%2FLjbYqC8YyFjy86QJRRATIT1U4kfl02T312PpBSop3MLCFzsAGOqUBDLaVDUTUYX8WO1QKweJuSb7MZChNTHAuOn5vLfPaJQowFGM8bR6KDgQXD5XdxalU%2FQedd3M4%2FChj9JSPTPQh4zWMlW9sRkokLH0URrTnrYs2mjirlbUiKtZM%2FsKPkmVlKaZ4XLEaGhKjIaold14Sex%2B%2FuzYDTb6B4nxLEtT2Zpm2OjZRnBbJS3WIieJbbB4R43WZdtYRfBmtb8F8w13p22dcGV0L&X-Amz-Signature=9befd48df0f2741e9f5aa4171ac4a4e79458313f029f35fe2b1b26dbf26e886f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AXC3Z26%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjHnwxrulGX4sg0vBs3MbpQExW09PAOz%2BQiQqZ48CS%2BgIgCen61TXyOTpzV49heTorFBFTLJyOS6UxpEi3oNk3ntkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6jj0rgq6fjV8yPTyrcAz6DjeO0YMyIw5KGbxBhAYB%2FkWPnmVlp8JNbZPwkQhTDo6sA1FSgSG5YlfdanURSY148KasLMfhtgW7n3dLrvSCT%2FelKopB7NTl9Ete4LoNIx11MwuCVH1Tnmi6Ylm8q8uF8vRM5yW%2FBEHsZyfrWMuIvKrybWUcdiPGsSDyR8OraSKPxnDVEuBOXSIQuFc8f9Fp2wBrK1DSZ61jiPPzIb2QJKG1Y%2Bqb%2B5wuHnk7tFtO6fZ%2FHaR%2BrTThN%2BSiMQCznzVbef3%2FowLvUgLY94kPvTaM4S5yTDzFhpjuAOz92IDn1iS8uaG9vte5IiQPWEWjdEdBpf37%2BktkgrBqZZwCPRgxoP4vi6jWWaOZsFQT6fNu%2F9cX87AneQH8fWGfVTVmgFaTtq%2FTZ3Kh1pTUwayEidlXUC%2BlaVgUGpZ%2FirAz2JrlbW7szifAab0qBIlKL62wrKVzRlUFSAlZfyb4xwooyJwiQK4clvUEQ0Ez4ZHNNUZ4VOJBUC%2F%2BxbzUCmGUwofrWIdGeTH345m5At3%2Bt48p6kmhfqXhRu5uOW60R9dIn7pa%2Bx0DiiU2yROMS5nltz2OsN6zlsEZZ5hFpvjhE5kaLZWWUrvJaZLDIN%2F8bjgI86iJn37e8oIfjLbJBkxtzMJb3w8AGOqUBL%2FBhjnEtMylCn%2FQc8rPHL3bEJTUSP65csllvVvcXRnDVoCL6IXSLu3%2F4tR%2FMS3ka45oBDJgDmwhkPy97q%2FduenbQrjRe169M0%2FdW89fhqsqrs3B5v9kNSg0fadmxksQ1gWtEPOQC4FOclaKHCNTFtq3nSf2jNAMiVCCE7K%2BHdUvKsk5DPQZKHDIUmVOKcvu7IKbU3uMN2WcymY8QyZ%2FMa7iu6%2FnN&X-Amz-Signature=7ab5a7c716d16701c640d1703ba8e01fd13d15e65a9f563c519a3b1608f91f9e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

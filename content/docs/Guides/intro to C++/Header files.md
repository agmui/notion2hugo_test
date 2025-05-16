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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6QDCEY5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqgRpUK2ws1cIuc%2BbUgmQijTAJUhD64lexh%2F5LGcUEbQIgUa%2F80HXQLKHpiawf7ahpXi2RmGo4QuymOfNLaAu%2FvVoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLg2Vt8JgxTGVb0%2BGCrcAz8n0H38wzPAP2GI3VIpOKdrnirSE2JNzDHMUQpvXK1ZQiLhslNySisOQcm%2F9hDpA4qBFA3Iz%2FgJN%2BxXh1dKZaJQPS3OaerSJyq0ltvMSDGVfE74xBYVS0xulLfkwVlY5psSR3hFPrSH0UJ9VQ5MZz1WKfWe%2FIfMzQRMi93orPxYQaZftgYXahgUMe3cvdmzXPnflPNuyyhBIxUYHNs7jYiFchj162SWtAfIVqoUGydA6UfMIrfnLabcy6opg3rlmmEJx6mHCXMCg%2BI7MBm7HZ%2BgM4Iiy6mKr34rj0uEBtuFG146oHcBYQcQ5Fgsod1QiD5945X6ZFkCdRvQBtKhKBzNobTwe87hBpBdM0oQXfxMOhP0LZcupdtyghngOjoxcz6sCka2iG1GhoyRR%2BnNyDTgp4U88Hgi%2BHkv%2Fia2tBY%2FIZD6Q2ZCKKb9qS%2BgqogHLTXZWagfPNbBSxKpJ8YOpi0cnPmazgEn2QXLR93Z%2FdSrH8muRzXdduPPznnaA0b%2BiMaytL58HzYt4V2WJSanlH6UoixS4ExjohvMNMOe5Nbhu%2Ftvp6ZN%2B%2Be7p3P5Hp0gKb5SUq8YXXBzxvaeBU1BYPCDiHe2XoIEz8V0btmI6uLKPtoJ1mSOFRLD2UgpMNHvmsEGOqUBKrbjptt9W%2BlO%2BEzKojayBHfCYhnhDd58132KZltehnkq6iEc09ArUKhMTDbkchaqzgJO270BLTvTOF8LE%2Bo1BfIMH5yMa8tBWmJWGevYGdqqQkPRC2Qq572lju8EfOQd0KE%2BVHsm0UXgUINwfH2xfabM70ZII%2BtjfHl2f8ZT%2FagcVdH0IuqNuc5bQUHzfLG5ilREC8TYKAjHwX5ka1aULtZ9e2YN&X-Amz-Signature=cf59378e5dc630431fab1dc24983b1290b5aa7165e664e5d0b39c3227fef45c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

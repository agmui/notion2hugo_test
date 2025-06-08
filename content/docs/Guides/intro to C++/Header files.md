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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXERUSH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhe6pN7DHTemnSL1vBxAef%2F3Edtaaz22Lv%2F9wpeiVNngIgH5zFRkO9PMqrEUT6UDAQ%2FccbgFCNUdzURsgYA0bB2OMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACElrcCWiBhD8eh3yrcAwIz8c8scVbiFVmZFgMhODACY3CyDzYM6nuFqt5rgVYBFq%2BZyCz8kJf5GmKRXuWeo8HhcgOu8oxFvMpdJlvGUDC%2BYRkhuNkCN9ldQxsc4SqC%2Fu1a0kpxB4Zj7zL43CoI8%2FquxEROmzjNXngNjjlidyKjGY0O2lX2ZuzaxbAXhITmV3KtUNrhuKhoVwB%2BgjiKGUKb8ILvc0MxsK5CINbAldT%2FMlNLquISxas%2BfzF64vm8lNje756ORt%2BDICnytykI%2BipIDL00pqKGSXCKdhhIF1i%2BKZYhGanNZsFyF7T5d%2FVCk2UBz0v45fgk9hEMmKJOJ%2FCxudalvRk6PNh5VQfeCywvHA%2BK9DM3rNACF%2BjFGvSqeHdxxdnZJgbCHUHVTCTJWHUHSKuMmexlv5MaDtquFLazEVxDlpp2y83JEQmWTNgw8VRraY5hjlkCUoLAG5d3xh2xWNuvyhUZbtzsp6ZhQwDXlT8QDPHDvD%2F2y%2FBa5hFBl8k2i6Lk2m5zH%2BcC70g9a9ei2dw2vMymVIGlwJhrRRW1bEiYRiLprTNrqXJlOy9eBpL8kes1J0tri79Nvu%2F46AUSbwXmlO8UJ3DLi6cZFLHDA6kpIL%2BCt%2Bv%2FyE8stvqxMqysIdZ4Ahae%2BPK%2BMKCmlcIGOqUBM9PI0sDCe7Nb6Hjfp4SXzp4P22eVEI6YYicChK8sUoFFv8hjinUMYmr%2Ba%2BF%2F7kVbOIv2%2Br%2Fjo2GC97Kf0dF5OZ6CJgeBbgSuL9GnFqKZ1yzqs1ygaeue8YOKL4N8%2Fx4om8%2BCklJV0tu7FDLJ8MkhuLz4PbhExU7lXcwq%2Fxp6DkhKdsbLLAE6D%2BBJmJHg16CZZCyHD6S5RFS%2BS%2F7GaCP1qAyEeO4E&X-Amz-Signature=db549a727810143452403996c6afc03bd338cfac23042fdcd7b7f2a8a3ae6bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

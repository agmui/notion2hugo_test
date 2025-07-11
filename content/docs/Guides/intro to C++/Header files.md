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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632OE5LAI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcbGihlGrndOGIFPaOhblaetVGzbmO30E1Ac8sNHZrkwIhAIh4A7Xr%2FrgDbTX5AtnnlTe5CgRvlRC9507L%2Fuyh5rQ2KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FVpDubN6T2NvBK%2Fsq3APNx4bshxBxN10HIqEzPiKg94ZHI5BcTT2zFrL%2BhkiEj7dzsIxo1BQvyF9cwSDW%2B6tWaHlBQxfZdJERR1bu38bdRP2stxnwXTkVfX%2Fb%2BfLaqVXnNwwVDrmF5srmBkFgrJKZ1lDxaDpFN%2Bv1wSvlpRKUabqYahuEagWiImAX%2B0BZQKVQgUm4B0%2F%2Fkb9zhy0MR2Gpil5d%2BVTjOnEHfAeTCiTHMqmfxDlnZtyP6q%2F5z%2FwagGDAW3cmaY4Z34i9gyEMPWYtRQEM5EKQcpUMXOq6MlfU14DzZK3vu8UIui%2FZQLJlX%2FkVk3pcCMdUC3WtD%2B%2F4QW56UkYaKbzvL2SKeAAxPsnTa70Y71zBFFpWuaOSHXHWDzVJ2E1jxhQ0izhGOTleqR1vTytJc0ECnNBjPgDfmPEilKmAx8QPGP4kxp3ZOGyc%2FKCBdI7qKWwGet%2FgN7CjzatIL4xz3bnRNY%2F7Pyb%2BLHRtsHtRW61fnN5XQZX0GJibrPXjEm3o2znWq5M6aENlkMnQKiXRKKiisaOND7nHQY5MnSCHO1%2FqqI6SQdRwqsJHzkoyXmTxLxlDwkVbf6m0AtJArJ2FYzd5EOOeRT%2BPcdI2XUe5UOk1mTp%2F%2FHUte%2Fl77sMTphsI2WwXQnwRhTDQ1MPDBjqkAQmfFiCvHYVpdnu0hdvCEUkvYfo8IXLxFbGHOOSD0N1611Lh0rJIN2VqpJJcYYeHHdSSyy5EEATZUZ%2BmV321NeThvWsJ7TMpnbuTHb4EpZGy85Ka%2FtZG9ympJaVk226r458UVabG23o%2Ff74p4I6LRedLxJ%2FKo0PAEUIJRqnkBqdiGiGL6jzW1ewxuFIzpawOVeihXK3xfmu6CIR1dhPul55HjKC5&X-Amz-Signature=cdfbc9d4ba61e6a5246f7d7a0f74862dc9bb21077585f9f94f617e1421020e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

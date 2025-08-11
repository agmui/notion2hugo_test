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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEQKEVXE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJpOKynfKm4pAFO5CC9m6tfUhifYp4E4uexD6jr%2FfJogIgBR7X5sLw0qeKvy2L%2BKjEr2bFJLJswXbhO3CECpWLBDcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnkFKhzzyMldNkyCCrcA1dew8bh%2Fw%2B8vrt6f4fk8KhLZ4dySaqOJNoNipxL52bXF5A8R8uCuy1PqSoRP0y%2BZKFCBmmqk61H6FD44XsO35ieu2mkl9teAL15PMafyZSVImQtU%2BSwdj4MBQYdIHy%2FW3h4thParZk0Osqo0PtZe%2FP3f%2BVLBhHyCAEcs4%2BcNZW8XN2p9%2FfeZM5zlUpKJ0x%2FuDLVTOlK0ahTQhg2DxQKpSZRo8MSxxe6NJI%2Bbss9PFv1ezXCpvhQX%2BzZasfR686JC3%2Ft4ZX2dX7lTGiPfaRjOclPXQx1IF9By61MAS%2F5nU9E6wzy8xp6tRjs6o5K0aXh7TAWbbXm%2B7885%2Bt0DkHItry6E7TfLxchl%2FIbduYVN%2BC%2FkvKVi4lCMWYwzBwrPG7dwRxeRoZOVIEwdWhxmGRwLPU0Htq4RFOzeXUOdmojuNoXraXUQ9J4tzmaRgjZeuNrfSeXw%2F2ArdiD5YMX8WQ2PzVgQySMZ54BgYjZy2v31s94O1aJjb3hKxYvVRArWB5T1BQo1JFC0hM1I6GeL0tCzNYA30xvIitmp8KZGzKDoFy2f6wKQ5l0LRqpFBg5aR%2FPV4GCKLubdhJaFYmhi7kIou6jgyhKDeIxFvEfgKDs9XGuZ6o%2BZBIw7WR4iYqZMKur5sQGOqUBx8pom6PMvF7sjFRUoRJrTZX%2BF0hQ26Wum9jpNMt%2BcmYD6ZGHSAQgXGXw8TXnUulTm%2F3%2FPYQeWYATNxuryqsTfWHNNwgnt0WNR6mRpcE2ravf13KZ4xxKkHDtWniX5hTmjwiFH%2B7iG2kTCvPkDRo1ji1OX1YreQfNe0FJzwnoy7GNNIfWT4HcB3lKEuFsVhSg6pPBO0XTSlYxnQ2J2N33MZJJZJ4C&X-Amz-Signature=3ca2e9aa7c8a1f0cb524965e09b4cb2c91eebfa93014848ef7d11c34cb8acf4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R7ITQI6%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHUGm7zSqVhBpN6GxEbOTmPs14VFic9r4Zze0m02bEbUAiEAnbm0rhn7l%2FyZ7kGmVPMnX8e47KrNwetbRTSKeUrp%2BvsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb3zQhGTpmzZapm1ircA1PZMFXPay%2B4GQ2WRL9iOfXQImsuuFkh5qB63THVsKQCLZdI9rixsijB62MoMJnF6F681AWLdb6gigmWuzX0DX5gAvEq95gXBF05JkPncn8eQNMPH9L%2Fp1El8gml6Qrpu%2FPCbP1WzDckwelSMknadjHWLwW4DRlPqcmmNnFEsMk8y821OhfLLXQJ0soBBBHmLgFlzBkt90gNaY%2FfZC8lciI4hHjpKiMoJQZHHYtDbVgs1tgfwdpMgLC8z%2BCvVoHSZ9ryPaReDTltf4HwJic1h8oLaY1KfW4jonF5UupXLeApniHGeDFkWDL6NNFsZhxvRDEgzPEIZC0yQEnCtTg7x2LZNczxmHnqVFG4Kf%2FkAfdGO%2Fn3yRhl%2B9PgRMF1231U0iYa%2FhSy65VcktCInNApPIcmiX%2BaWuuI1pXxWqlkixYqGAM3B%2B6ZXcApEJy5linQzYcm0e3NbEKkjRqZLfl0%2FInvWdm%2BGVKxfDpz7k1WoQLSjq2dx4jehErWNc4o66qFSlZ8m84QgDlGGZGfEmneLeFFd%2FVCvCr%2FZLEVVe0feABtG%2BRPj5IkfIcg7igKhyz%2FJLLy7tVCq6Kfo%2Bk3zyzyDCJ9PbhDVNNO9lvoaDQRNJHGFL9T0gT9axFDSj85MJat28cGOqUByUbzGG5rk59bKjtgcCVnrgXot%2Bwojx5HU19a%2BjyJaL%2BK0uElvtE60WMWDZwPU%2FKxtQvT3SWIjorEsQszukyP3aWcGJoQUBdR3JJBWIvQCbqE1XutnUsPLwaDP%2FwofSBSCPOUsd63SfYy7il1ZaNntjbhYae%2FtwqJesHRdvpVTLQLDFzz8St%2FEFlm8kkEPdmzPTjo6Axj8dyJXCqWe6igxzqzx43r&X-Amz-Signature=0aa08d27fb5aa0e8324295a54873f02d131df24421365c372d83c36318d556ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

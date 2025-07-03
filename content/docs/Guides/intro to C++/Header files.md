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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644JIORMB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD0DrQFOQWA7hlwl%2BL%2FmIySmhu1qZjpeMp31naOanFASQIhANoyWeNlzS5LP6%2Bcn0X3rc8pEREmvnKsMgjetU5HLJsPKv8DCBcQABoMNjM3NDIzMTgzODA1IgzytLYd0osh%2FRN0zXIq3AOSGvO8BhxqC0dshHG0U%2BZL5r45HGiP6RIVTLVJ%2FVL1cEVwDF3SJ749PbXEKNQ%2F8YHH0EujQYEdhWgH8JRTsbWV8CQ%2FwWe15D9c%2B4zgMy1N7Xjn977iWrvv7YeVsL1dNPlwY0LbiI%2F%2BkpfWwL8eMoubZXUeSHYcnXdpqQOB42u8MyZ5ORCAy%2Fwx4q0zgRDBknJVCXSBne5ihB4b8HcJ8x8sNna%2FSlZ%2FQK7EOwEEKNn441zp2Fc80FFCcxHDFIqNdZhZkx4Ye5D9V%2BOyv8V%2B4SvyAxIatweTtyRUY4WQ1ah6IqrgH73oEpCr%2Fb64HTrOFpvzN3bAAbs2nhk%2BxSlnd468YXuTyCM39tWT4rGI%2FRDg5TYd1VL%2BppJgAsmkVKDAuBMnHi4XAUQkKTosK3y91vNiNTH%2Fo2AyXV562KAJ5SwNM6L4cdoA9cBINzegMwHqpGbiPopsn2OFgaGZEocn0uDLh4Jpx8iuggofWlujtbi8SVIyr2FbRYDoNF60r11FrBdFSVrUICbXbjLDFL240kswyjB1GgpOIw1LGIKmoKDH0Ohzu7tZY9VR9mQb93iI1RoKMRkc61BGKI2wNvKwcyQMx4K2gLD%2FV6rqonxI4ktzGm19YTrxPe1nzcAv3zDwjZrDBjqkATZq6hGm0zBwtID4uyoTYukzZNNfTNRHYzJTUIrPuUjEjPAPZhDVjlIyIs7V3hjQlqy15RBRRSGX3CzdrxmRR1hgJ71rqxM8ACxvvdduoOn0HeoUwn29iTShSPu7QKs2oDD7kP%2Bg%2BMBykymKwlDtMuXAj645rYh4qbyc4WkNb8wslTosMiGfgvEJn19pulQGKR5UKgXtn%2BUTVVK8mj3MYyjh2nvn&X-Amz-Signature=f04d3a47d27d3590900efef65ee468577d3b819026ecec5455ec8bffc4404047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

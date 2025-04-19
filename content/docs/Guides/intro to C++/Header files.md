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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAMUEGJP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmmVb%2FebohhxP%2FKH0akCDC4212QWKRJdEf8gi0gVb%2B9QIgBnFBvKC1vlnSgk2FLlKg8jIE0uTRSBJ9DFbn4rPSyBQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCI1v%2BRGjQxXXL0SeircA2OOmxWwxckPpiZQVTjNrvIFKfo1ZWqy8O6iRJIO0p7sLIwY3ec2IeFKBJEL2G%2FEZc46d4Kfhc3e781u0QUcVT4I3UZIOxrOwcf6Y0RIBU1MGYf9CPoMcJpLziIfZvh3LCLzQaJ0xY0BzOX%2FMxBkyXHKz2jBBj%2FmI9oW8qYE1LdhPsoFbpaB5owFLh0romH7M%2FFwKYmxp5ifPNKSMKa6pP78NSZ02D92LSObtPZgLyzPcnmwRrYO8%2FbBXsE1LfulnqNsXp%2Fv4bAjl96ZZdqaj%2Fqaj2rMUN3On5RCcE9Cgl2zfyyVJg1BmcGMWGnqgT0xWV13FGLSouqz9CiWif2Bc%2B8Wf1o7ZlQ8zAhZ4%2FK9XbgbcHb4F3za6izZ%2F%2F8Bo78UVC2%2Fo6w5LU7HJYCAwRA%2F3TRvw1AnU34x0dFdrUOV%2BznYtUSOJrHCC7%2B42j1c%2BtRPR7qtct1uCuwSCH%2F8ZiS2GWo%2Bzgugg9p4Bx8Mhaoyatz6ukaFbTTeCDob3sQxM5l3ouR3ndmLd%2BwMh2axNfn19QCShTmct%2BrvdD%2Br7nlPw3SApoPx%2Fv1QBoBP71Dmmo1z3SIEXKL0cYNUz%2FfFTr%2Bh5yJ%2FeP7oUZ%2FD%2B25yBaILt0541oz6%2FVb8kmT3ebkWMO3Ni8AGOqUB5tYZhY9%2FCeRB02Z5gRwhSYwYL4ekOqoIcdvhMSxFparvwbix5RgE0EKwjVSbvoFmwF5z5dCs6aIWDIJVKuRzDQHpF6CG8CUUv3Iqezbc%2FAsJRap3djZQD3vdXZ%2Bkqsu2cix9uBAv7bPxudnm4d9QEXdRum5adjCEWq6JFZdPpRk3Dh5YFddA9m4XGEI82L7QMi7raNp8LRu%2BM8A3uJg7d6mwjxTC&X-Amz-Signature=0bda936876ca8401add8846da5dea1f8c4eccd099b716cc5f1eb5f18c37824ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

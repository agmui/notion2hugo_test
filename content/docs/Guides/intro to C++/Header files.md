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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VHHN7TH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXND3LV%2BTZGOdeQpINzC0tktO66VgrgC2R85K51g9TGwIgaF86sxs8Ixp25GX72FjVRHEJrwpWPpkncvSWAzclfaoqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFFq2NhuSLGhXqfTSrcA1uWkIkSg7sU0K6fX2GJCZpsUOb8iq6uwKIEwSCBM2bGy7I4sKsU7k4AXLQLZpoivnm1IQSdkDgj9rHJF0D7W3Z%2BM0j7vDwTZNoPNv3pMHbKLDtyYY%2Brg%2BbW4AkCrFJfQ4uEcEGzAAvQfz6TyIgaFBPW%2BOkthngyuYOZ8CUeG6k9k%2BX8mRuDWzy%2F7PX0mLLNJbQVQKgC8XvUwwrMD5g1%2BvbTWeUtrcYxsWH1dzq8RS9NpPfXDhYP3g%2FUlvkCh67Xuo0AeAUW2KhBeMad69EXVW63CZjRp2PwNPVvxIZghQwO%2BQvgeWLE8pMpL9hnaZest0BiyDnQ1CxwxxfSBql5Diu09ijQt2hugpUuyj9OCPDPsSND1fCQIiyxT3ivgZxNkMoCicDFbsB0jldvCR%2BasPODMc81H8Czc1AYKK0leIc84GSP%2F78AEnNNasr5kMAzLd9ozaZTbA8I2nJi17iS75ZHTtFO6sD%2FpoqHp7URZghvmxrn%2BCRS5yCsIxletyOMmmIMH6AvWk6yZTlUCdzq69dx1Bm4ht4hqrZWOofCvczip%2Bbnm%2FKw9LWo%2BArgjrJmXQAbl7Xjy2N0YBDm%2BIi6LIz6PpK%2Bg9i7bSIOiBye0qhUKw8hEAs8g%2FICFDSMMJmdkr4GOqUBSYbvQnARwd4q%2BJ9mCHE23S4spztyS8lCVF1BUsV6XvKlyTfME4doPgbSz%2B6XUcGZ%2BmQsyc8RyPLuN1X%2BSI2DVqL%2BZWnr%2BDE0SLN24gcC3dE3hhUT%2BdK4g5UWLamdUYa5VDAI8tLaV4l4kH3U%2B%2FpujH1H3nrarLejWtDTLUVMmvfdY%2F1wl3QtqhGn5onmWlvSm4JbEoOco50i4g9bCuPqbBJUIeZ9&X-Amz-Signature=9e86ee1440d5cc1240415b0366f1fb245113c8d3335fe311a23c069206dd0993&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

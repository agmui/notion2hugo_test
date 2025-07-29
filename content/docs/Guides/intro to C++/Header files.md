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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCKKYIKQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIAiN8mxLnMThiQfqfvkiI7uTq0NNiJ1n4M7PFYvZrmiSAiAbQmsH9lNwpeVtkGEl0bq8qvX3cZduu0%2FaKBK8kGytKCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD8eV7tNMKyXR29ZFKtwDo%2BdCBTC5ZhUf70a6BpVjqZNgyJo1wj%2BIQEgx5JbzHsgukndcYSd1A0rFcTp3MNPaRMSZifB6rhcpiASfiueGp%2FUnCw1%2B71TVCMQ0CX9rfIlvOAcXiF6C1uo4zlGW2%2Fv9o8ZIjmnpWTkoZBoi1YxSRz%2FRij3ZUOHZNHFDW01EUGCT0uzpf1qANCAzhzCWsEwIqC28dwpeI3tNVbXWvRNh2cNm%2FaxSLX0sucuA%2Bfu3GwvrIcNJ2wXE%2FDScy34eThQXCukpqbDNuuqXYqi0dbGymuvHEacnWaAD5dc80W8WWYh8IupjKdxJsXfMctM10MdRWTKRoKhh7IjskRoy8jgduR0%2FiahLRUfOPt%2F752wQ%2Bf3Wwu4jDfJ7h%2Bm1TSuQ4TRVOzGcFphgJ7MTTfE0p18hRpD6TxcuzKTvXIO6qO2ErmqtEjDC1kpxGiaLoz2eemfrc9mk3WvGsb%2BqdayzTUKAphi5T8%2FBw%2FOakCfAkMIf2kWz%2FcniqYKKcmbKhM2F1Q1m6aSXa2%2BzJkSDJKmsTFxqeeOlVXrWZcuWYYuHR287nokux8srORnMElQpF0FDDe3kRDsYp9%2F%2FUDImqzxeju3tF%2FQ%2FuW9P6cp2kHM9lljdObBcqk6zFKH1UIPjUx4wxIKixAY6pgF2KNaulDq4%2FJdX4y1p9YqCKFdONQ0l7RGfAHZYxX%2FF1stFVKrKeWya8GGGZHRt99N7S7liAo9tWJ8H5wod%2BBWIhV3QM5t4RLlQJpJsS8A%2ByUv2MvCb4j%2BBsGMQUlnUTQFa3BWyKxgi7eqDCKgZ58Q0vlbgXDqaSRsJ6%2Bqez1N3mGLa5nc2s%2FtQUSKYqprou927WGUs3XfOQP%2FxXmetKUs%2BfC5YKjiI&X-Amz-Signature=72ddbce84d22f9072966b114cb76d302a73e3c93082257a80bbfb869087faf4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7DQYR4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQD97kUJrbU6AD12AQ9w1V408%2FbR8n7YgE3cl3I%2BpOykFgIhAN92enPTDH6FCtyM6l0mAFTR%2Fe3Vm69MSUtrgm9Hrw2sKv8DCHAQABoMNjM3NDIzMTgzODA1IgzGEgpGiZICXFp6ykUq3AOGjztWWPwhH4plGnulZ8So8FXUVMDzaqrItASF1zUeh0qQI6yPyx0kpy4ain1kkYgLzI5B5%2F3IabYLvTzkKXI2IJMjKg4y%2B7dm%2BB0otE%2FGvqQ3f7x97Bix5%2Bo8NvP5a1R%2B7e0JfyXtTjwn8OttT3zjWPHMqJ2GqIci56fpE8JwoUED8%2BxJURes6SYg2MXevYJv7y8U5sVIvhdqY9hFgy3MTEW%2F2ohw%2F7Wk3oQZJvDDFJNKAgxTpyUFUMbw1dv5E0pFMLbfYtmN9pdBTbWJRi0I4zbXdfAB80iTB7oFCYv42T0B1Ow%2BrLOOMryDX8eHMAGkzwuFNGmp47AJhBpO7V6W95Z3FsnuQO94fVRXhRgmFLvFPbBKDPr0ug%2BfYxQ8WQBrEp1EzJTDDKRgRTZtdsTJcj5Ft52kmFfYDbMygeKKtru4hF9azYMUbyciSCcM3PLgG1OLSjhY2WVkFtxuK3ke66nSiXNRH%2FuoXPIlDHAQBtHvtOThRnVGbX7B%2F8q1ofXa141uXLOzdy9GpuEw%2Byt2US%2Fdo2vBH%2FttIqAdj7erLmD0bdBz769kHttCGfkup9jgsHwpT87Ou86LHNv7UMvDnf1%2F4OlvSWXrl2WY5ukITOjvm2UyPqLCMvsGWjDF67S%2BBjqkAdm6t6JNb2tnbegMxihIRdvwX%2BVOGG0%2F09GfwgJq21zLDtwm4wMQkNBhJETO6lCVxck4xLRKos5IzyYP8LgeRcm4LwkCu9Qj8LZq5R10ytIVMdBHdXhiXWnSOvSB%2FT1k8GN2v0jMtcNSc50p7aOc6i7ih4k5oMflzWAw9U1HuMBNNMFXx3ERb8eySIqCJGlC75EWM2Ucja3pPHXeFHj3B6kDSznC&X-Amz-Signature=8ce42a136d31e1f3a2839418c396cb813f5b0c656283a6a6a6d94143282f70a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

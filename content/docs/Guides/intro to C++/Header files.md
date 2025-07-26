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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JM7UYTS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDqVM%2B6le1JxMSVoLYRRUa%2BliuJFIbMm7QkAN4YXY7wwAiAMFcpzcVK75kyO7NdXT7RMG1xH%2FuajdmPL6Ru8gEsh3Cr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMhpSB4QeOLQ6ob6h9KtwDNBUw2dhfO1kqkoMyaNCpynZiGktJkYdbHWMJ83HWM921JuN0Bjz51n8KiKMpqAmvMjtaAoL%2BItXrL5cP3dXWTNqJhFA9spinCmM3mvT43k3hkA9IW0X3IIaOYiIlvY%2BsJxeqV7cwZisnxWZoZXIrIe3XqIuVaq5c8Apz0BdozqgziZMfg3R1JLkVC2uY2qsFjPVPDkO%2FhRFfPGzetGejrQtC8rWGDRUsq9YVZ5v5zGNbGRQe4TWjXg5PldFJrBDrVesEXloy12g1MTxAeeLT69yNQwNcXPl3LbhtrqhHYSbh%2BLhsEJx8rcFquKzflvqmOP0sDFo0cXaJ3IyC0bqjYpVfvnWkqpX4dlGEH5Bw2iDLI4Pqln5gri5tKGYWdVq03y7qDlhI2KX5vSz7i07OnKSFrfpVu5p%2F21Gl0id410eALH1sReFv9mqTUkCbH6YmOp4J16jrjcovRBLIRzpyu8vc7WfqrM4XzmixJW%2BnyXkCqEL495Pho2qxNR%2FqwzuZpKGu3hwjwGZc87%2BtxxIH37F85j3LPVK47dIV%2BvyFiL2kLk9hxD0TWFiB3dfAW8ITUtHYdJHetEJDNYfK8M367TYl5vMo63I6fEfBbNJmm%2F7p9mDIxVlGDZvI2bkw2e2QxAY6pgEU2V%2BpIRmcrsNxptbvYI8b3MAIQhRmCIZA7F%2FP8IcaAIHDSOfvv8RvbkyFx22Bt5qK8bY6ntsVnv8xnhtJcZJMyaTj5LR2Pr6MdYVFgP5EUi4TqTwsgatScQZElLkqmmSs8u1b%2FYjftBBJEQ7uuRiAkWHglxGwKQBTVIjZCmriIlqxc2pldfKTxALNNJvVLJuMUlGMoHcOFX9VGCt4fK%2B9U55xBaoZ&X-Amz-Signature=386851f9c0a4539b9a95950f785f0f6a5b74f7dbca6801f693ce4bb31b103f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

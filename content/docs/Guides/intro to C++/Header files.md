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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXFTHXL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlPdavbJySpYIxWvM2%2ByxkOmxBbvFDzTfA1LDuQ2VG%2FwIgVO3uvdVmpOpVvFPHN%2F7042K0KhGfL6gEk7eKzv4Lbt0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDH0K%2FzTIQvKM4wKHEyrcA1y0dRgTPx0g4DwVL3tRpXBfaPVTCJc0Kq4tvBr6gdBADePsRBW9aya8nw3xhyBe%2B2%2FtoB6ONrFboEsdhB31lpWJ1A4UbVTIFVaO7obV6iCndrMjCXkeG4f2OWinkWeyZdYxZjjTN8gLy1yE8MAuSY%2F5EKRhN%2Fzz5DmUfn4CmyEyk9uv8KqFd1QZdUyS1YDd7wyd%2FFfOoYHIc9E3tpfxA1%2FtbS07fJW6VVwDuH5HikJu6o6Croey3OsS8S3Z88HWIuW5CgfBAwPy95rRagi4VtVrAcHNzK%2BtqVlmbfbmv%2F6pLfeXNrsrqZfJUO20cy121I7iUKsnmqpJIwBxLo9n7FzJjGCE2PbvrlS0RG4txP%2F67z5k8x2f1nX3J0cziesxHzoUC3b5b4tqkqSEaRumL5gRy%2FYOqhaVo6AVZN5I78ASw3ZZwRA%2FhZiL2SnAwY%2BR8jKHHLLkOAB75%2B0KgofqFO7ywEFqb68pvKiNFJH0OVRF4uN0Gj3XvCH826f5h6tdrhoFyeP1muocqd5RrbtieLBLHWHpeLu%2FamoL2JKfcsto6VF7U5ijlknvLStxGsdDZcyWJ0u58ErEtbuCCPE3FGV57%2BFOFZbz%2BGtKTXoowz7VVV8JQpiTo6B9rBmWMKOVp8EGOqUB7gKCz4VLVWz5PSECxsT4HKCaCo7FtJrCCqa7IDvT4ZJWiblPcI5pOzirXfmN7J%2BiMXw8OEkX%2Bywo8jo9vS%2B55%2FsiA%2F%2FwbBKEjrSAVSS5LxsW6FVQ4gO%2BiVF5qqxZPOAhk8U9J%2F7VRTDwZfW2OeRDJd5Bv2ZLBeS55YGZdy2dEN3dTL0G9S9VAuHPz8CQKkYf3z%2B0To4ZFXRVb1btS9jWfO4PmLSK&X-Amz-Signature=9255b8c4cade1b85e9f2f00dd4cb79975ff7ff232911ba74f099222db202f6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

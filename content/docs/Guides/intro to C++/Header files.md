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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNSNX7YA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQD0CLQjdf5sS7bUh7FRswsGXHdLvax6SRP89CBC7g4VVQIhAL9nQvkuZUxMdgLuIvd%2BGiLWTK2FZOVJRexDZkhH%2FuhsKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbZoqiZWO6pLCpM6Yq3AMUtE30uFQja%2BRHwZJ2W3ZxQQhA8%2Fl%2BFqYHJDdnFbA79qaymPute%2FY6xd06ylU%2BOVveJ%2BhjDsVOgxzKmNQhtnMmQOOzZ3j75uIJadWUxE2Um6Gx2PJltf6JNymUp2syAAZrwhw1oZ9EiTzWUoiMUBgu1kd2k6YOBjqtP5uOYsvvcwjBF7YUgyEdSs92rCZ4CJSlqvMDX5NZYidXG12UQhG4WIbwBbsRLF1oT9RaV8KO2a9QFE7EugVNxsCTmEyyeJIMw5eVaTVdIFH8DtiFHC3R%2FTQ1rktAKc2kIfcFq4FcrXGfhrPt%2BfOGbDnFbk9e6AwxJbqVfgrb0g19JEBAw4zTGnW3dyeIon0152vfs5zYMqw4nR3glt0XRMJKKnWRtRdnwoVYWPPKm2%2FLjwu6cdyZTx%2BPMzbDeJP97RVMhPWpeP3Tsb1YTkwwDOpg2sRSfaoKZlRZ3hXj5Ix0bfoaDcwmpnuOGkQ5Obe86BgT4NxdKAkwVPT08zgeo2c0Uq%2FVLjZrNpa26gdzM7qgMxMapb6Oe%2BKRbWhzfT5CLbJ0qdk7nT4HZp6V6LHFu3WfkFCi8owdbCIFOZRhO2DpWE7kWF5dm5GfokFam517TuRTPJPc8q17U%2B2YCLY2jngIiTDj18PBBjqkAfcCNICVlm8VW5CkQWNrH7P15sIGcX099D7Quubh50hcaS6B3hiAyiAJQwOc6qZE3QhMaoiKpRfiJr147OZh%2FyjD3zOYSwnHaRb6m27%2Fj0M6EWStJDzBKwq4P0gMOc57B%2FlwVKfEEFhoLOCrBNxoGPAvt%2FXl7ytp0inovJN%2FfjaFVEyrhRCyDKFjt2KxbMc1a%2FPEc8ZaghhqVCx9sLRMzzj04YhX&X-Amz-Signature=e19255dd960e5f824b5b5f21626a2eadc3f33ebdc8e83dded3a7cb5db9dcd2d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

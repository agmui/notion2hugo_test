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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TO3HICZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9e6euxcqvW3ngIeT2oKCDurrL9lGLKNTRzbgbd8LKoAIhAIUwSqeEppYYf%2Bqwf7qNSeUgALVV5XYN7Ji3KtvGRgCBKv8DCC0QABoMNjM3NDIzMTgzODA1IgxYLuQdFbJyX6FyLBIq3AMzdd75cD%2Bvc6VPhSciFsWauRdwDOcEGtXfx9uVTQBsmQ870zrqBzuKdkGATuPjqKdMeVcJRRLC%2FAkrBDQSJheCkuhJpAhHDkBUozto0WPprlUqj6hLplItUbD%2BHroFuqYdmHVGCD0Tzs%2BtTIclrsuVnXhXpBof7aEpE4fEkh8hFnWI9pZvsh9TF7MJ0MBimTmLorW9yZqxg5j9d5SD2vRJH3ovIbGLXRKqYSoNV%2FT86UzQwWE%2Bw5IDw2PhZTrOpLLXqa9b00R1qq3cv5780jyCwVL0pl5y5Sain%2BFkZnFTM0xe3UIkyiaxdrfKnlbqVqxvZcxShPSGLOraS0YZo0fk9xUbViucB1DMM0Jg3KRRh8akzflnUZaByUB0QN6a1%2FFEOOJ3CuB%2B%2Fp1GeUD5EvpJ2UGQI44to%2FvSq1DjE%2F9qtGwvrIqMgREDUQdOFibl6NwI2Lh6uObXG3Tzj6qQ452mjCMskeOr3YhELuc6HW96qZKwu%2B%2B1R6OXUtzF1iB96uN2cUMF4cAuoO01SAlsh3fftBHi8qbMv19N7VuXBNQbMMjhBMISb%2BJGejVYd%2BCXOTS8UV9Bpuq%2FWL0DNirHzduVC1m9G47jfHzG4vpuc%2BZX9IUdENeCwYlbkfhgvjCR%2Fq3ABjqkAQAb0to6Tan7RSDypHtxXYSwxsnFyzj4f9Xwo46sgUXMbXa29rCXlc%2BH7UoWktjq5iaLqZntQ9rvY8HxtOHtKU02XWgH1KELDOuHMFQmmEctU492n7sWLrzX92Wle9ktiDX0u0%2FlG5T6c19sBuqrkqYJfQyE0toomR4r7xSfpsPxa4%2FMR4cbimkjUaAMFoVGziBlpweCt0lOjk37KCgRt7RiutAm&X-Amz-Signature=96770b9c00c43334cfe5ffa93de8e7bc5b6ddf5cb5a83a7ee24065f120dcab67&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

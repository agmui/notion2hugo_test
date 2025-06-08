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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67LZNUR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3TfbFOPyzb9bu5JnfinFZg8lhEMcY0FG%2FwJ2zImI%2BOAIhAPteDd3P36kfd7Vxq4Uw1nAP1GQBGi6%2FCwU1rNhJkekqKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTn99Q3T644HY4hs0q3AM8F472eq7qFCl2zB8BxSv00eH2nr0QFokRW7BEbyPYu%2F4KH161StCq3%2BJZe0GdgyGDMVyAwDoSLVLaiJyJ8lfEQfGwQralZk4RmvMAjNO3I9xBPZA3jTNGfx%2B2vGfwBBZ%2FISOMQBD6u7PeivX7Qt1Q2%2BISjND8Z1943dzJa%2B0SHpxji2stuFWf2qte9PXOOJVfBfKBHwDxmES4xy%2BqpGcUjncGCfu192XknSQzg7pyldzo5VDmk%2Bgq%2BWZ7vcrFGlgBS2Z0tPisjlT7lry80ly3JHNARwUCv72A3GKc59JdNUpJpsXSnXTzEj2aHwn03lAq%2BAEq2oxvr5w8ZBXORhn5uPYRIzAtwuRezU%2ByQDUpZjQSc2vLYh3yraLos23dFcNZccGFs8qxYn5uhC3i7xbghkYdt0mClUw7Lr6LIpaF0uBSe%2F%2FLfv60iu3O6olwfCMCg7o9wBSsAehjQqfphqIyKNbRtgffmcCxazo9IKjgdrQIaX93GHEIrKs3aR8pTQpOIXGkifsF3Tl7dQvWW3vZTHnLx8oIxqtsC1TJYpg%2BwH8EsjEfyYELBuDuSevLz6JjbW13njVV%2FQcC8zyiHgUPhCIX03MoALmWD%2FKXI%2B1HV%2Flo5RSU3gA9xnfwIjDFspbCBjqkAXwV1vLRcAC%2Fi8%2FcqcXYfx%2Bs6j4wVCj8VhOGcbDM90tdvV8zMfYj3EkKpVPGvdWgKTaul2oDJdYTYLBekB%2FvnajG0d5BigMU2uRUPGN2frY3CpXu6USBe1WQxh5YQyNWdLtGBjUGBCrImPeb9e4gBiHyncMAZ8EDRTXkUdJBY1p4BUvAC35Yw5dmECdu0vqZk5WBBPe4aq8GJ0u9Zj8e4lEUVOHm&X-Amz-Signature=34fcefb63f7d8b17413592c7d1defa085a9c80eed70fd9a1ccd05d6be02e459b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQIC754F%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIDS5S6vdDr0XGiXoFvqlCIqB87uQeBzALYX33L37Hr%2B5AiAp7mymSOGDNBdVgNpSo%2F%2FOQwnQulMWCJys3jCxGkhODyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFCJLUacow7LMl593KtwDmsyi5899ivRNu5UWIIQnDKIxY0y8hOKAoI75cp8lNCG0bF4%2B5trvaD0GinjNO4bNHEDk2BZXp6bWqWSk%2B96FtK5Opk6Je7qxkUk3B1zVMGPCmEig%2BQS0ARowaBsVQ9I3k1MwvjnR2BGLNPPOeQUpn3bOoUHqLatNUUYi4CvifqAa6QXnP5TPxPOE8MsSqydgvVrW7qIWlkPhllOLf6ZzOSRdDDjdtIvG8iBHSSRlgTtZXYqiLH92ZHABzuONMhYzGx9%2Bayjx98tAnt3yM60iYziV5FvlbB7OUkZsw5JfPRefEsWALD2ajlXtao9RZrDZfY1efKiZ2i%2F3O0EFvtE%2BeuWOedzyHpaSSl9zxewxvUCyQ5ZN2uWe6RXgVTqh1ikZLAVtSy4IgG0Iy%2F4mQbu24Mi%2FERzfkB9uHQmAVgcUnDgVjbBkj1qP63RKAOYAqcoCWQ11esHmhWwz6SkgilBRIVkgSWPFWImyRXwEl1PxlVLgrSuRhUcpzjCB60vKHRi3kZoVmZ3x4tbRzXIYA4TgdgaOJlkew%2F3fYJkik7FArGyQYGYJklqK3fk6MdKoNovNCWGIxkZwWrlVYiz%2FuifS0oZsn5%2BQ5KROBWeWiP%2BVH9pza2cWKv8BDcXA%2Bn0wh9nRwAY6pgGRzkVFaz3hVC5QiOZlbAk1M5Aw0WlLWnSmoIPaUOumVOHH53iaqG6dH%2BOTAftt%2Bv1NN5gensfXskXaa0WTc8tU6H5Xji7AbPAepRQfQPQ1FI6G76Xff%2BHoExcHf8utl7Gxyvm7%2FCA9CMg%2BLaRE8k4IMWiCDmpOLGBwpOxRpcdUjCYYeJYQlXV4aGgTJVc1YRZ0%2F%2FWtUHMKVXziMIv3qu5IsgL5Cgjs&X-Amz-Signature=1bdab3971e9c84f5c60f734c73678ab2cdb853694ecc5b2797a500e8cafd9f74&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

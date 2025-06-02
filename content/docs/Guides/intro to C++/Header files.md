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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBL7QWO3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCxCAQSd4CzZCeozT5k%2BjX9LVtwdPVAWYsBfMkuDeCKqQIgNyMxIZ0qPeB3FFc2S6uZze8OhjoXn85GarpdKFkEMeQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKSYtKRSfIus%2Bc%2FcSrcA8IxzHjbCtK1v8ghKZYDyqSJusqAYpDHh4f2KVa0dtmvKwwr9Dw%2FIgIv9chCwRdlSGa2YFmc5HEr4%2BZXccOFnumjzwDoXgVJ9NiSQ2ncxzs7fsOipCIinN4Todnf5ORTDWSv1G7bvYv6SCOwSARv20iRsASgdMMye%2BURtoziyEgdJfYjZ2uZK6WK5QDhuCGRzPlJrWQV0pTD5SigiXrr2bxBLtrACmb4le25BQC2aHu5RTHDl1fl1tv6VJdGQESP0CzploEU%2B48DuO9ktViGuDSKzcT70v9z4VjUcBlD9Sws7qIdFvMD4Tp%2B1YhxvGR7R%2FI9ngYYIAeTk0E7MpP4yvvc5Ci7fnAeRklMnyw%2FI3%2BiEbMRemVJbOXGu9uwLWg%2Fjl2ZjkwN3WYgmyLfeg4dPzR%2FyFLyr78aXvc6Z0mfClbF%2BMsaCHXR1gmo%2FRsXcw%2F5fJypdbNijufkYbWGT8OPZoX4kK8nVEvBWykAh%2FwD%2FO1Z12Jc8itzNq%2BbcSsvyfZ0Ay7w%2FuYiBYeMpHoF96NhkTqBZq8aEhhUC2XCJnHikW4seJH1VEkSibWUQ8kvCj3Nebn8fWjHs4wHUoo5Qe08CTWSuS%2B8pI28F6Kd98gYJgD1bvZjLd9ti0XCqQCOMMqv9MEGOqUB51I4VmqQU8s7VuJFQz5L6uvZbbPeeAry6B9r%2F3EP%2BPgcdXAIW4tHfC9urD%2F6LD2d0FeNdkrKx%2B%2BB%2FQ8HgOEFDNTc7BN8aWdt3V69NG%2BhivgUGfFAAQZiI7%2BP8BRUfH4kVu2MWIkp2sQeNJ%2FuLOV7pOrwASbXr7vtK8Md%2FDq4az7EL33%2FoouLWCPmS60qkm29ffafKDRO5yDZwL8OBZH4OcWHwLUv&X-Amz-Signature=3b7c287ea5f96621ffd5addc29162dae8a7b75a2a4f9b01a4e84cc4aa48b9597&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

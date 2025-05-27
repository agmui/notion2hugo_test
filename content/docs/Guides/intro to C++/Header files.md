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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636F4F33I%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBb3oVZ9BaXrvYiH16YGwZk40xMi1By2f55o9eA4DtKaAiBjrdRMQ4ql%2FHlCu3bBYwAzJR%2BLQL3RzY0p5hke9V3%2Bryr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMiN7W%2FMXCR1rlPdaBKtwDsCkKoSqNzSHAvnj4Del5Yy4Ck6%2FhxnefwNj1E9AZC%2B5Fjhw%2BHxTMojuPXr%2FVddCl7XY4p65NBHHO8tQCb4kLN7WOc83jMv3o7663YFbrUrYalNbFN2TMtAC%2B2Zm7okj2jwKm%2F7nNHv2DCmWeIfS2oB6J5Ms7auXN2HP4f4TdysXG3HYWWvxvvAxte2HjVvjcOvSOg0FIpJDOddW0YjxlsenL90mJc5kED3%2B7kXBI0ZE1vFBeE0iDwvJZ3MUjZWUHOXG%2FroLgTIwJWX7qSF7WIPUF9Az8o9202oB3ITGfa5zRZSrBuH8RT6Ac516Z8XtMOn9Unn1bwi%2BuMjKk4Vvxl7Vnl7MQY4QJTFJ3WTnsyMYhTXpU25pEKsj09qBuV77UvY8VSiHR4%2BztxO94Od8o%2FJA4xs0x73TRHcEApeoY%2FBxGa5IwBzCEIpWfE88b2yQnQJPpf6gEXpiQW7a3Ycqx%2FwOKvg4ef3V3Wlyg%2B0EUqCuZmQaOqkmS5y185HEd2FdLxT%2FMc8fBWBafk9JTn%2B4i%2FpHYpKYf3d%2BX1kjJi1XwhYT%2B%2Bfx0L%2FwEPZh3KVn9GOMGTz%2BIoo40VV%2B2tV24hgZoZhhwIKosynbUs%2FJS4M65L7xbV%2BxJUPIZw%2Fio66gwp%2BTXwQY6pgE0HRYWuT7sZz7VQy%2Bue15dB122AEJZvakx0%2Bt3YUuPpEJ%2B2mMm0iYsYXsv%2BpBcoEdfrCYRv9rXQ7KaCJEBOAyUHXQp71maOgi34EB6bigi3%2B8RQXZ7KLoa0bNnmyoTWhFnm7GEg26BAkxoL3Pr1EpnajkPc62dfQxrt62rSQzw7TtdxBPD9wivh9KrmT%2B1BjRgF4hKYd6bZCT6n7Fp8kIA7nTIj7kv&X-Amz-Signature=5112b4b7cdfb413f52e966dcb55bedcfc5d7e135fca58ddf35658a48bd83181f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

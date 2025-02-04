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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLAZ25TY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDBLJmYyG9%2FCI40aWMIQghI8ZH%2FMHyEQW5jYO87dCneLQIgZWrc2QENYNhTZoZl0LCr%2B%2F30wZZisBc2gT5q3zhq7%2Bkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHep3V8QPGjyc71VxCrcA4qYvi0Gaq0FjBO%2FoM7kSZV0UEwxiN8dXrHmhgn8YEf1bAAnELj%2Ff9bR5ekMvyJk66aWNponwzKT66RTSLf3J5qIKr7z8ST8VIxi9%2B1XT9Is8BCC4wJMPCa7ScFTnrHLoESpnL9MSttjdTp6lrr8T7LuFqKM1BbcJGNtODx3%2B6D8YWLorhsDmLBsTlzO6d4rncanp4xYggQXxrKmLXlF0we7arorLSHlqpLWNq0LErsk43POIPjAxFGfZfSBlV%2F06DhCfJRO2q3UyzT55EO0qYOQ9GqoMmFTQBAYYJ7dZl3IwmVWWP4TMTzsst1scBU5pcYH31yyst67nMW9RhVUJRXXqZY9GYhAduo0f2F0pfa8jCILquE75FqUPIbdODYarAN%2F9YD1UV77w9d89oqI4OBP4MrigrXkvNDfVh4%2FwAj8AmuTGc3JT8f5Wc4SukG%2FdxysDzIiZB6Crxc%2BAmiyJxXsCJ7wYwW2N7v1kR6e8s%2FVh3%2FfVqLJKaWIJM9MCLj68Tb1GSbVD604X8T%2BVAbzd0WVuRzta2rT%2BEqsPl9iuKVRoEf5NbJ9udiS%2F0bheeyAHSvTnS0gOfCR%2BTIrrdvafyu4GSCS7%2Fb0%2BA7PPzeImyyG4BRGN1F8Ni7woVQfMPWDiL0GOqUBOaeRDbErHUCAhIl9xdQIQmUlNaLAdeU06tcmpGRHMLi%2BsNJzIRWY3HjlA9mtdYrZeLbVJeeAHWVsBc2aL6Gb%2FzzvGM5R4qQB1BIPamvDbf43K%2Bof3F0XJP2inL6QOvGyqholGHvqIMZ4iSwVtxkvHo0tYVBbxEyRHdikC5z2eJJSSxadN4f3YxxAHxr1HGOF1XayRGvj1IMHJdFpziqKUDzbizoL&X-Amz-Signature=3d0a6fcc5cb119d6df39a274c215f43ef0e206c375c15adb8a4bd17eeb499286&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGABMIKB%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHwIV8R0g%2FyxxKoIM7NdracRZq3NCt%2BW73QPzPaxHK8AiBmtl8gGJI5rZAyRiXBrLK28gKENlEJVsDXBo6sXZ8yGSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhRvnKE%2FosJ9fsfF7KtwDkJ62JuORDNTCbqu6JCsFvWQkI%2FyQCgLAYTj1agYwpXz8FGm3i1qLHtk%2Bo5zrQgrOHtxbtgbjreLg8f3rq8ehQ0SqTY6a%2B3Zo%2FHaPK9Hj1WdWPPPe01bbuPlSVddkE4PUIeHjxepMOqqQrJqt5KtJY7%2FMlxElY%2FMo3oXqwQTambbO%2FENy9Y7kkq71pESUVGNry6aGhmnLi0vOMw75PybKxxEwQHH45%2BphSpaPKnAZqq7z8ZqIDtMJPaEw9WebMBFrRT6HafQQIx0ajjwqV8X2vIhfMC1xx80VeYwREYW37gcrQtd9ms%2FmHld9fnHznPqUebnkoE%2BQ6f6ZbPagTjIx1NRjIxc9RE6bwSog%2BgdlMRd3z8%2B%2BXZws2tNucO0cbomeJLPBcWsZek22ZXjpPUyo6COVk0iLZtwa%2F2x%2BffuC18MLUj8GRc6P2u5YO4kzedQQdus0jYG189cl5CmhptWDlXZpfs4q5N%2FcSmf2%2B7UgsfNOehIYIsGiHRYBbr2U10P1x9muykuk%2BJil5km9bxKVJ0eRpDcftAqCz4K3pHueOCULot%2FhRf018VbFlZFBK501r9laC915hgKBN5o0wleHrXn3Q4WefX2%2F8cqZ3Om33%2Frs7Ii4ZC6MTBo74gQwrK%2FpvQY6pgFzDUw1oOXD5LKcnReTt2QQt7gkuYu%2FF%2B2MjZ9j3xgdLIv%2B57b0UAW4uRSEG2dEew6MvRTbUYFPO%2FK4eIfRNI4JNSF31RycK%2F9oJrSwgqrVJ9nxFGl%2BQPQU6HuGsA2Oe%2FZUeyz7Sgrfg4IodsFZddgsWZ9vvt5KESALedDIuOu%2FyKeIN19s5r1GeH0Hdl8KyZhgZtnLZGT8GWWKySo%2Btx645jI7Oep2&X-Amz-Signature=e615042958d4e516901da6f13b05d1c85e87c72e73fc95c0b1321627df49c68e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

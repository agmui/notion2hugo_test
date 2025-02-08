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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMIVYX65%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDShJ5kRxwVTyOxMHtB5EY7%2FwyA47%2B0dT0R3VtFnK%2FoRgIhALVfXqWkiAYrv6U2H2LCijrWxrL%2Fuii6AlKDqKAtHN9IKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMS36w1zDcrzd6mKAq3AMEEMPC0BUPUoumg9cjejfZWoMk0AxBdykhQD3ZRxFB2RrvJt6xhGWOQFzxVCgqELQ%2BgmwvMHRUs6O%2Fa5PlAmmjpuwgmx3RdZJ1ayxSygbBB%2BPhsNCAMHxbXLi9DiORq63VLjujaEKACWZCfVHKV2VaiP8P%2BXbbzlCzKMCjTouKMNpuCH3lUNhHw8xzFUiSMyaMWUAkVJ1y7hvyKw7dDrTiAFyk2bApk4U5Agji9onUYm%2F9OGR7AQK0YHGNT9HGl8JkZIoK5bT%2F%2BSmah2GUPlPKSx1v97sDmViKm%2FT4ZmGstlAucwQMQvlqTs7gYK%2FWgoM6kYExY7pM%2BzDKAN9NbiQ0moo7FE91DxwUkdSdwDzB8g79aQvdy5WjJ%2BMoaiasqZlg8dj67kRnTrPCC%2FMl2QqeERq4oMmwEHGYP%2B%2F20BALF7mvRFD37oZfJsFZVUySpTr5%2FH3akugCG1uFwOx%2BUSi5g07qqJ0wGAAFishXFFInqELhxwWk%2FuHC5Q%2BacR8JpJEdYjv%2FJ%2F0bSL9mRywB9VjEfLz7km9%2FQXvkC4fLqZ1y0Yqgr2Z1pKZkNM7IY0554rQyTK6McUHCUs%2ByZs2HdZ70klvqp0tI%2FnQDSOBxhw9UUJtGb73RspadUKKHijDxj5y9BjqkAS5AhQts5syPE4tp2bXq9AnyDNAmsShBRTHJZMwgq1VRJguaAGWiQoP1deth78r0P1MOlwbbkMjhVP3mvfuxB34yH7S9C7eio2n%2Fwib2U9Qq13oyr6ABkz7eZC2juGQYbSWjVIZRaX7tE9tPbn358i4tx9ihDmCNrEb%2FwtULjF%2BzElW9Vq1AJj%2FBv5BfW2s1ZffPHZ3Odn6egRu%2B31a1dYxbnRhm&X-Amz-Signature=8dd54a943009aa6d904987bd17c5112cf1b28bac9319801955f9e1edeb65a305&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

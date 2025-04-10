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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSB3K7RD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCJNRIn%2FwTBo%2FYTyV%2BlrLRJm4lldzbgj38WBPJf%2BuPMpQIhALtGEhmINx4Rju%2FS%2BkvylOV8G7%2F9qWCJZj1L5RnphwGGKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4VaHT%2B9KHJsiBckkq3ANw%2BHy9lPvOjxh9weMKJAUWRfzZYh%2FOw4doOC9Nt0uonZxQBoMR5lglmV3yZ0uFufMxZdlT2CnEVOXvrOB9TAK%2FwesXUC8Cr%2F%2FXSQhVCn39WfQyjqT2HMwW5LpwQA%2F1F%2FoN4DbchDCz1DBws3ZmZku%2FlrbRdoyxiYi0J43m6pmLRtA6chT2uyYbMhIxkYVzNvM7X9P9vjyi%2BjwWD2hDOZYTjx%2FFVqSlG2oHq7%2BoZoPgdL0WpPZuFXLLKmxep03tflWw3N%2BZ9xI%2FBJ2DKPc4217yM8OKKe06sjPlXb07LmPf8tmkZJQw%2FClx8TEhZibIJV2rIml5rW3wNy5Ly9h04SpUB89yHnw8NsX2mBClh3S6OJMnAHFnMHNpsI1d0bf%2FABInLrSY4Co106pKOpUdxWdk9yxiAGqsWZaAttmFaUefYb9ExsrOuHskeBxDrl9GDKKoGmrcit4KzetA0ZEUUKc1lsK3WoiTeUyc98rHcAg0Rf405v9FPxjqkZaD3uAZ1webAt85dc2g5fYBiETw8Uk0UURSCaioyKv%2BgCWhLFtKi9Lyhz5cRJrXNMJOLCARutf2uhWbO70ZTE7jqBswso5zZDqPkJL0qRnysOlk84Q5ddb5Rr%2BTT9ATf%2F8o2jDmvd6%2FBjqkAe9D0mvR%2FyGMjBfJ6Ooe3%2FM%2FuGLBxkfFkoNWUsJ4SadbZKVhA4dxiMUXbGSwTIc2CIrBpmTi%2BNYQAcdvzniAgFXzbViJ91rP%2BxWEyVejOfUjEXXdH9Io53Gk245ycTE26UbDlU8iHXBEJL1PnUgKn9%2Fdy18N4f5yHQqIZiVA6mMmH%2BrSOz4lEgcR4nL3HDrRE8v62TbdQGWMF0MsZuxf%2BDow%2BC9m&X-Amz-Signature=a563b88a74cb95ebcb3d449d36431770f86cfce0f14b22e27e68e4f4a3714ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

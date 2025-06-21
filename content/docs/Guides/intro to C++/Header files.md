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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGPF6URM%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMiptVguLNYlesmLWzdhJ56kxUKwyQPTdrbmmtbj%2B4ewIgH9euw060cKzaxvfhUBuHFbXBmMCySdMFStbqKArnpl8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACROqi%2FbutlvNCQ8CrcA2TGvNOTBfgXslAyh5uVE6qwT%2FJvSqiV%2BMt5ycYRU6nQOjfKMvkl6Hsgh88FyzAKB2A%2BsKoW3iph9LIyG0jDiDKNilr7aQbTqA%2FEkR8Q7Mc%2B603YUzfyJuJ2Nx5PvT1PqYjG0SlRGKK1NS6BiSux8PkyoOyGlLZEpdr%2FQOW0M2bXyUlVvBDbzY1ZeMj3ks7Zd6FiLMtM5XG7%2Fr0JVf17X5FvNfJatxHEHkwrbUmyGxw0cWQ3KzCzPzvGcTDL8thB3smLQ7U1JWpOXiiNKt5vxZW08cIyjBWlfpITwcUuJQxWXSyYZQXXlo%2FBtz1fbI2VQ8R0trfuuSo9OTnrqViBfs8Nil6xDPqrx04SLIwWDw4TOjAx%2FxAC%2BMIm5USvMeYtA0y4c0g6lYAZ46qLg9JFN4OXk%2BIkHHvD65GxKD5p54U%2BG9GqsNBNarvQkRaAdGyq2PwsZQ7%2B30nvoU4TGYhICeGoCJR8k2Twr8lzPvbjIWlfKd9qXQuAsLesRemWxae8C27dRduJYbYNBL6zEGY4k7DemN9pbqTUA4SNCy4N%2B2M0eke5jeKA8n%2FtsIbt9piCX1uwJCd3dmghUhmuuQMWdzb8voK4Q6EMmwiq2EgFtakQWV7C9e6zyAJY7nd9MJbR2cIGOqUBsrQU0to2pL7nIQrYvMIQH8hAurQPfFoSlaGtZ%2BTDaYQHlNltsXVC3Lak65mUgd7%2FRu%2BqXdX6xDJC%2FZhYw7CCxV0gIQ0AmjJ8DNIf76HYmRzK2Ehu3IRYyZ6s0tjU0pCkvU5J5o%2FijGgXgnFYCFaGm1vFx6xxI0FinNcCt4lAhIEoj%2B7yPWDk0TB6bhcIdd3T%2F1GDa56bgmipWRcZK4B0%2F5dRcHse&X-Amz-Signature=903c40882c91872c898030bd067ae8378e723116504cb2790f107c04602556f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

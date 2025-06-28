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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZC7S5HV%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaYE%2Fhpt9hMfZBC9vL%2Bdr8BRIaQXoJTcXiNefeT4tyVAiArnHpcL%2FcZJMrqbewXgVLfH1cCzGZhup9eEHsKd3XrNyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlO%2Fn9gioCeUppWBfKtwDgkUzMawzM%2F%2B%2FZqLgjv7eU3sSQ7%2BpBTjE8X3ws7nXka%2FBNPRUZ6IqN0yve3pBW6amC83TskvDD7W9nMW4%2BrWC4UHTCbtGdhhzr%2Bt8qRdpXcVJFTzP47bG04frOs084puInpY5T6f3Pi8l7rQCx9k%2BDVMZay9P0VBrFJb%2FL68vu5KrVzsuJ1VKE%2BSzYf5qF8vW9%2BzK3WBku8TcMoJ46Y45Y0GSUCCDCRv52ZunCs1TdBVRWteKETbySWxV%2BAaxJ2Qmh2dN3gDFtRouwA2D%2Fn575W8BM7E3BGchYGh6Ukq8knFsA6EbwnbJwKswrhRWrDycUg%2B4bk%2FeXeZ52JjtKWWg7RxL%2BTsW02Ycvz9%2FLsQcNGnVd1K0r5HES%2FINUpPqEWZX6KYdR0yvhP5eFts1Cwu%2BUHU%2FtnxCkG4fIhYgUU7mcGtHmZnJlHDiMMMwK7DAJlFqmesW6%2Bs3HT2IOZvJvQ2DCKL1OcMblRWT5Mp28JSVtNwVUcT3C4BBJeNCt5CCy5hUeWzKitQp21lOvWf8njviDXUl8tV77CzzphPec48vHLczyZP0kQOCgUhGV3BnUUICmeJPPd4v6jlog7pcm36F3hRW7nDSbWHBm%2B5ircVEC5J1hs0v%2FQNOQf1wFGow0%2Fz%2BwgY6pgHDpkidW2oN5A%2B8Sf%2BaiGA08Wy6Yubolud%2B7octyWxIvK%2B1F7skP9VG6RLhDL5AzWN5niWm%2FMaxru8%2FZHtUQCeB0zNPLqlWs2YbKbuiUphK1eQK6rqiCZSnu4F9JvXUoybawj%2B8dUKlxMvHpzYsWauMDGMKiWGCWd5KQvwHw0f1naNhFr%2FnEy8kCSstYhzX3tjr2F0maX4NX%2FJ2zPhTqxNyRbnQ3VNu&X-Amz-Signature=8e176fb20b8dba3560f691c2b9060a955e51d9af05b2aa39d6cf23ed00748629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

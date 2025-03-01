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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJKMMGQF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIH3MQWMadidkELT6v9aCAPJ0p%2FH59YXM9m4LrqSDQeaWAiBeddht5k8z4ivmrpUzMJbrgQg1LTAGSfDtfW3WDnmH8CqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHjfcjPvE2%2Fbp8uvPKtwDrv2BdIiqcipfb6qcZcO1fzHGPtrOFG0CZqOTrALiUqnpCgtqVhwrtsJ5T3YvubWZMunHd2iG6aj5gcOEC0gGYiyZkdIUCF1lVtU1rqOpQV2RPte7g128t31c%2FKDbKsJSC%2BUD9VyFF0sC0znc1UCYTCP3HGBIrGrehMBTjGJ%2FhRFlFilbJvhX2bXbu8gmowLIUVlkB3rW2X13VIxZixLOYRVUUJ5THt%2Fsyh5RInZFbWxXDbIQDV2L6XZUEALyP8bsWa%2Bg0HUnUeiFSiXJIhcbdr1f5stBckfvbhGHuRWgQqxrOb4153zgGkBTrmSeUgAlngyJdB1tlqeDLU4MzLxsIAvzv%2FUez2ZziOYGO1T%2BE84nF2b8mzgvQ9L8I5QLVx1hRtDs4%2FkPF8vGX2r4TJplnPhimSv%2FuaiOfbkVBkoAMZcCEk%2FXhaWg%2BC3zeYOY3bV6q%2Be8ZFxjlu4GM2PQuoyEkLPrNXtI1eQCr9R0fQYosC8rVibwfCu4wYmoREiRlEvi1KFuYvlHsZGmoMaru%2FqUyZrQkXeghkeWiU24fs%2BMD0CbtbiR%2FdkJUU9AdRh6s3D%2F4ifBaxM6PoIApnG6DSijzxD6kvHd99H5t93bX%2BWZsUG3Ax7Dks4JLanwxt8wnYWJvgY6pgFBpwqA%2FLijL%2Fh5CpPJrHzqysloueW4jr7YnawGHOUv5MrfatV2Sb8U6Env7Xp%2Brc9Ff9sVdxJ9Q4rHtOmOgmcM2qq6t%2FUpo%2FVyxshvYnwNLC4J%2BfuaANQifYgdnmmJuxDd4Czr7WivLqOgBi0bNA5GoeHgTXvEuRQOgBLYGDLjPa%2Fw7A7cuh9G9kWLASsKPZafMi2c8TAIA7eUaFY9xbk8T6R65cjg&X-Amz-Signature=327a6d1218839e6d1c06db78acd518d73f54379d1a32c857877d885623c90800&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

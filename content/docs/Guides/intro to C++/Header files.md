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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNCSGDSM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDUATx6Ix4o0aXBeJPXJ5zGHU7pFx3yFzwUmJMUerFcQQIgel87Z%2Fr837vZ%2BYiiWsYncIDxalGAZX1UI5KeYmiWZqAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDC36kf3Hz5IseGo9YCrcAwisk5zUd9lW4a8y8eaaOZzWj7OHG2uLgNVVOc4UD5je%2B0Q76xypDTnipDJIdTYqSaxLLZcclO97ykbefU0pjtMTU9H858Bzz2XR5F8WnXHjmpIfqxOESHF7MTdGFwQN%2Fa8CewAKEOBu1wqNixZ5enwHfN27Jv%2FGVtC%2FJzEWPECJ1PsaxxZNy%2BFlBPqNjtf%2BOQzfcRsbQ5CjwIbrXnMmj25SLF843SG%2FVzXNGA3M7hrCpd0PvdqnI3V2pvac7K9QoFBDIiSNS2BYjGSs4BbYCECrbjAJRXjw0GoJk%2F1CMh55uPGtMj4H4n0VGSeyzPH26I6sYUfZVsYASb8QYzdV4vrwaViFHX%2FURzyYdRFtxGvld8OUAi6%2F3hozIwLJNTgHM9n94Z9CamjM69WtW6h2U7gMVQKy6iiUW8Za52LA71kGFM7KhEpCMnkA1PLVHCoitElhEOUC1%2FvTL1SX%2BJtLsGOqFQhPHo4esoKPT94G0MzriEuYZomS4nMSmXs5ahXzhnP3Kf8c9SsNyLmDcrsl6OzvpwlVL98tjsXnwpoicuMd8PA%2FtTM9XdJrfgYOF5H3bw8h7Uz1LxoBJ84J3pG8zagKuCUW4CmWsbG%2FoU0x00gR%2BaeOJTkg0u0ExDw0MMTc58IGOqUBA4fv9E%2F6Y2hDbcYRpSgzN4hfDjQqxU1m7YbuyQHkkcgLjRgrNy1wFiSwX%2FMUEup8aX6a3xX1EVp7DmnMss99EwnQB7N45U6EJVpHDuf0jUc1nNRdTkN%2Bi03kEFpu8FSj%2BOzRW5Gc0uMDYsscFPuGOS92SFQATlk0drICZ4tQCg3oabFHX%2BucIu27ytBqdwy4846%2Bm2g5dR8nNw4z0ObA3f2m0LWS&X-Amz-Signature=f7128e577f5bcf9886abbd9db03ffb6face35831d77c8a1d5d27366bf6c159bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

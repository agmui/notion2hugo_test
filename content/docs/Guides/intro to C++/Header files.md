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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRG6PXSL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEslNEjWD9Uk%2FMeMcy7AFGVIh6SqBeh1jD6DBXYgsczOAiEAlapez9%2BKyr8nviVqY9iagVXU1sGDxgTCReP9CWNnOFYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0zXpbhuj6GG5D1eircA7iaE09ka6Wtm4Pgwwok55Ezrr7lmvDRtkFHWSuC9pCuFBLhsEZ2B9gsqoJJKo6Gle9gwG7JnInu6w5dECZzF4v3Eq004pA1RQGRRveRea%2B1c8VuDGWgaToJWmZltBOveqrOO7OMWYmkJXLsfuIx51MLDVBjr90uwoYksUF%2F4nBnPsc3Ch1rlfl6VjgR%2F5ZgM56UMXfZvDo584RY9PEGm41yck79T305eJYRFjCzGEvNqbeGMsh3D9jY7R6gjY4Ew%2BxGg%2F1mwTz9MJ9Ro3kCm7jupx4Digb58Wqppf3TnH%2BjY%2BRCHNdg1yQXgnptyPJecng9fkSg2xp4L93TRaWH0m5NKT6u0U3EBNHJc76zcUT3cSKZPvlK8VByYqGfT3peghdEzBNtDR7PUveNpcuVqeTVx%2BKoqVN0ohN0ONsjfoRMcOSlpF4cNG5Hade9W1xLJNBKSlonwLrwDTNUhMZUPDLcqfM90El6M17mtiGZ3gKmaWWPqsCN%2BHZE1pDMNlx1gdfrD4iPZqhbr%2B9j7bWCkjQwKVl5mzmAa5ndoG0OxoXrrI1No1LX8mfK1jnxpVo9M5eDWGoh7KWVti6zFZwfKLBTkVSE9kQPIaybOJGSjzyDXloHbjHhJZ%2F04Zc6MP2UjL4GOqUBE5Pzid6AaTzyW7B1X8ENlEb2wPKyOJSK%2BgAD7KRyRb34QBpJjls5%2FvlCsr6rzF4WSZJIZf2BDxxgbj2ElhD%2BcQF50%2B2EjwbTdbzCjtys5fG0xYfLyisHyhORgU3aVmlaLNkRy0qULRtNejPLAipK%2F8t4on43RJSWWvrj28jmSrHvAdBA8aPeAdZpfYm7PtkK%2FLWCpMJcaB3pS345LL8TCF7ni2Fr&X-Amz-Signature=a4a1dd20c82f62714033ff999cafaaf24e55850cf14be92fd59f4d93bf8136d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

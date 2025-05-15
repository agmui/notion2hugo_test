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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXSKH4Y%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCe%2BAiN5PS9s1ixEhJbnPe1%2FnKKRZmq3IS5M1RPx93hAwIhAJOOpGXd5R7hFuIZhuvcF4h80B0wLimYgTzDcx7UI8UgKv8DCCkQABoMNjM3NDIzMTgzODA1IgwFzr0oiHDkNBF68Skq3AMIPDP7xKEwKRIjzSX7mjjC1YfuqPORNle2DTQrOShLbuye8j0jp%2BS63rsjqMUTtIlengn9N53O%2BUvqBOmJitiTWIxzrBPyZgK98DfarnKRRYsWkVScqeimtVznZdOSTcqSk2zxeEWG0W1wNaSL%2FViIYwogvw5EgN8hyxLKHFwRqxcimpOqHDRAVrdQIoXLqLvkYYmkmmYxQ20U8OzlyqjvAIVQjLM7LrFYXLNEGA81OWRuUJz99MUp9tr5XwQCCFpgR6DpYm0Vk2VyW0qQq3U2Dyw3r6i3Y%2B2ma%2B%2BI3347v4JgKmXtYSlR%2BlSWa1s9lIkbFFtHM%2FNpWQgYpTPhofa9IkghX1s0iEsUevJyL8zDIz2159lcn%2Bfv3%2FfvDG5AmqqDucH%2FYWR%2FnfRLquoWyZ5EMS1%2BIx90%2B1ZLRk8ViVgs9bNVcUdjMQ6mamgszDdFyx%2BszM1K%2FbuMWqrzaGmnRUlRmG8qPBgzqyfvEKpKG4PyDp8Ug1bnOcrCcpjrTezd0HqPJOAKSLLDLD66o1uoUqsDBRsF6iaYrSakoQ4A5Lz0MfupJXSId82mhDhKjHg9AorEQaYN18140CK9nyPfiQ0Mvcvcdz%2BY%2FWEtIhfXsRUv67ElIC24YpQfpqhpbjDQtZbBBjqkASzkIevpo9DNv96IEA9eHDnPMI3otFmK%2BuMMSjeIkIXg2PyQAVi6STqdr8Rw2%2BZ8snGD%2B6VkBMzUS2q5%2BiAcR9nq7CmkY9p5LTyLsRFvKnR7zOty9Pr6vB2jLf9iYW0SMbpNw5grzWPkSQIOo9orHCRdIirGoCaheqLi4DIsUN5vTikoYG08GLjr1n74ZUAZXCTWhzCe1ZA3Fbx7TY%2F9tKqoV3v1&X-Amz-Signature=8963b5ea2ee8f08b34ca2492a002318c865a69446b1b5e829a27c35dbf7bbe39&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

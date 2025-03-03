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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHINZWN7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFprvNV6LM3qW3cWMYOqtTAQF7KRpQpNz0dPcBSOMUvAiEAtn%2BCYYcFaYQhFL4K1o1zVfqZNCyjo7VMAdrKo5O8jW8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcN2iLPoDABijQ1NyrcA4IH0qsMPZZZSqBvhLP4yNG6tDkj0tqhD5H9%2FTmUY1IYFSyB66nmkZYqPX5I7hRUXfe4Rhszdz%2FHcmhWvNZcgXs9nfJIZpZQ11KZ4uMCpS6lBbKnPpVlqsJkCSXp%2BXsEWB%2FYKzjLXgp6GIkeCuthATAPvU6LhcDgivtqmfIqOZin%2FVNQf4aiy%2B7wqPVVQhKT1HiBWSol9XZQnMYjq3Tip2UYCyDFSDQljkL42b4fMrLK3%2BwKrY2K8WAH3aTtBoGgavzJTQ97emETejgp5CxT0yrQyuQJOzswie140lX%2BPjeM0%2FoVAC5oPGQZrLAv7CrEnOWRGkCJzBj78%2BZW7gWe1V7QBTaU54CYMrRsBxStPVeIMZXex5y2RRGWEkAFBNI0KFkTTYDo2mgvJL5BiopNu3fSmk5YooEx%2B0f1AuyfsZZMfcPdIUU%2FtTsLIW%2FCAoIEzTvReFJ3MGzEIiBto0S%2ByoNT5by43oKnIcdt7A45CM1l1c%2FiTZs8LdUe5zHu%2BlQWjUu6kaaC89LE%2FGxx84qBVg7G12t%2FHnAfKDh9ouv7qqaM%2BZQOnV1wSU%2Fva1Ij4BPjoTXKlavK4wbADS8AVOwd63b2KfJxf%2BMREh9AnpePZ5lxb%2FN3E%2FzB870qUY%2FoMKHalr4GOqUBCxgBFhtzy7U6P3wr65T7rg6F0yzelxTPK8LHzi9Fu3UiHe%2FBEZxBzQiTqGJkHwHLoj3cdTerRWx0%2FMfAPCXBEMCDRFTfVru4UuP5MUmlDT%2BNyNH6XuUdvF346kboKXDB1fqTuxVvU17jQD9Z4xoEtzapcBlESvew5BDnzGvk29eQvCLWEtbSHxJOsLMRC2HXyphErRHkpIgIzacYESuuPijaChZ0&X-Amz-Signature=c39543e6f40025e0a5d129d54bd98653691a98553d65d8f26adb2b8f05e16ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

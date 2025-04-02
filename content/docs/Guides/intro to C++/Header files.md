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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATBLXPT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIATO73Ih41WvXkZAl3d7PpLREx8y8lHZ6Y3bNrahy5ktAiAvACsMv8Wck%2BzLB%2Bl11DGXk7iD61Wx1fGt4ifIsTKdIyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGlbFgX3nCMWgagQZKtwDAuquGaBShSejL6RFgwTJ1UYJKrKWih3tGL%2Bp7EvEfF6EIGLW6PeAmLxoNdT3qyb%2FwSoIuf7mQQusTc%2B7CHMaKrW7%2FtrwUfu4%2F9EM6TF4XsMa5sqrZ76Ny1euhM2qUBSLrB3HbODNuvbTwNTXV1yHtzo5s7o%2B67Bc8IHhU%2FRbg7I1WHSSnxpMzsAJlTbrUxtmDw%2Bjx4xUPAY7T56RM%2BMBDtM5wNrYvxbZe2z8VnAaVH5a0JiaueLT%2FtJDSbu1px53guTyhdo9aPTGt0jYWDSK4O43Q%2FGxtYdHsgfzw0eJiNq12fuMQsYTXCQmuyGNqRWSE8%2BnHXnCyDKiZFGA9OzEBndSeBjQ7ONGWafhSAWYGz8r%2F1zGDLGfYYupByIHUvTspgJ3NoROY8wPsvKljglVhQeX6QVjELhLhOksBUgfIHUAOJQrU0UxILYAdgtfHXDHSz1eaox4LOKltsplJJWNawiOeNvaZzaeremQjbLtkn3HMjMeaOTS%2Fm%2BVU4hqsuzgTtbi8z2AMUu4KvWuiJu5upqJA6s15gVyUIDyTzHPlznuArt8pMbKiVxh4nuyPpw%2F8DWDMZwDjWkR1YyuX%2FUeEaK4YNK%2BsKPJEpKj5a%2BXGvrOxTvVXMBz3BaYMyEwvOm1vwY6pgFjgHYOvptJ1TCPvuYAB%2FV6qzYFX3cU1%2BNi2GC0VZM1EfMaZrIZBlUenbS7cIGsyLfOqbkTPP1C%2F6KAptnkO91THoP78ueTPaXEZvjftrcpr5a9FfXA4AkcOlMq4O%2BemUpPL8xZDvMsnawh%2Bvbs%2FpRvGgmqCQxkjw4N%2BvXxVRiKWmEb3JXqDxSdq2XMeMC9m4AaDpgQFsiwJ959EEfiaCHgpK%2F5wlCC&X-Amz-Signature=992fc0ebc092e742635950acd9fd8e3c34a661841551a469f999b67e576a8a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

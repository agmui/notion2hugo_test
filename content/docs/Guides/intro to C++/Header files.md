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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4FLMGT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICPpLorTd8gmcJ9bjb93oKMGhPVRdMRFXOWSPPCxtAegAiEA7Sz2TGEJTwZxa85Baf2yXa7LITts6wQAiVF2fcF9cQ8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDI8khYm6HzmwlAbQ9yrcA2tl18DR%2B6n7wvXU6Bzco%2FXuC2bJAkZjwjeOUAJW%2Fh%2FyA6CuU0NvZ2yEhHKL2h5kGP8GKVycBBxVHyp5DEvYZZE7tu0IkVUm3r58uUTmjpHF9WJA5GoSy2A721jYak%2BAc9uAfGnsfdmWykbh6kBlLmzKXoaQdZnoxx2QB7POzq0RANLAc3IY9nM9vkuzBnqHpIlQSzrJK8dtGE6hOS1Jf%2BtfnJ1rp61d7dCeqvcmQwERneM6P%2Bu8E9of2ff2J0gF3dx%2BlQS43KfuZwbHx5AW2C8kRx2Pb9kla31hpRSi4qV4NSIbccT0smyYEqEwr%2BwYD%2FLH7VIamMA2jrmRsUG8wa2KU0eOiPTW09A3d%2F20I7hlQsFUA0hR4%2F1aIY%2BaaSV%2BubXur386RtcMk7k%2FQeKsLu669ngnr2AWiK5NE%2Bh0WgHHTMQDHiDP%2FyE5ivl1koT%2BrJTgGMm6EXkJrApufeb9qrvpIP7bLlMcKNz7en2Lkx6XK55o7cxYUz4aDMnzcNDzOOPOIgcqR%2FgejDVeteeUc%2BJ6o9UZ5PkDEU4CVaAr6RLIw4QTkEvL0bpMgXN%2BnPR2vmu03koWz2cR9YozB7FctNSzmjnlnEoB%2F7sZIArjfHPUYz4fp6g54tm%2Fyjs6MNqvwcIGOqUB9%2F9zXQFJ4KioYtaFL9LEg9yXvT%2B8mLZLVOLzCCiBwdZKAhLvNGFN9TRafKrWe9y0cNkmhQ9BXj7G7itwHMX0Vw1BN%2Bi624eBwwKxQkkBfm8lSk3WrEbmuIGi6A7Mr4ZhxcO62aRqVPwpSPtNFvsv0Tz7GpFyOigaGjuexxVfahw3lZxHoytbA2o7xso6gZ6VoeLOuCIDcCTHx82CB5NHTsgL1YOI&X-Amz-Signature=4a5dfa4103d163bfd6c24af038814f081eaed9e2738b1ec8a00b6087d635b734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

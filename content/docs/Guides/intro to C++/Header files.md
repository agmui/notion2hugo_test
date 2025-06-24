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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GEJ5KZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCID3JeJtwTvKsvgS3%2F1Hr7oVNGN%2FLypIb54asz7%2BzUlFGAiAOYBUK%2BJi3gTOQ3ClOC2xjCp53o%2F20q%2FrSZQINPtq%2FCSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMak6rQ6qlcnTLye9kKtwDZuEzQZEe61ZFbxBU87CmQL24arnPwZGwqf19WYAIZWf4BKFdLAL8YlgGZIHGB%2F1KYKYkwXCupfLhFFuC9y2AeT4w3WX0O5CpmmBEEbQlIvsSCb%2F%2F%2BtUiK%2Bj4csjdqjGpaLuEA%2B0j%2FaW7MXMhZvboUZORzHqoWqEK%2FSryWv1bgW04tbjv5%2FR6YhDurdSyFg%2BRY74dkd%2Fmtydhc5vYsXxl2AM%2FSouW0aA%2FsQbno%2FFcYxx6PqyArB%2BFOB4rze82sBHKQNUrPkSK4kdWGOGgtOM32DipYv1TewAwhmV2bNVTfiKgktI7ACirHNJYggmTx4vrkjmNqSZlAw4oDiyuaqVZ3W%2BJxRbEqK%2FPzaSjQ4HjQ0CjQ2ppZx6eKbVVxn9284g03pZMqGQBXgWYaA3qkomKyF46JPyjjOtJKxgvSTAVEb9%2FBW0LRaX2N8qs2svt7MHgV1EQN0C3TCVjNP0EvjwM8Uc5lEnjnNBEDztTY3GnfNt1dNEIMa1n7fOfXzcnlQWH%2B0qefrLiLQR08N58wZFNkgUXss%2BFir7FEoLEirBoHSZ3uHeJPQd8D2QfeEmibquWPfuXy8asBabbgsfDBDy2%2FRWSbuOVDt5UL29k03u2TvjOS93%2BOrQX%2BhfP6z4wj%2FjowgY6pgEjhvKuUaoWggXMusVLg8P%2F1P3LilCKliq0WUs6Ab8iExNNK3hbLNaOaofc5dlquO8F%2BeI8MkrjwLHbocV3Q2mLR9vMrX0X6ZGsU06W0AtX3cjLSNDX9aKYqZS7Rrk0WAzDzOnsgD%2B63g72YUiK2rbR0EKQk8yPAKBi1TGtpW1T7BWBWPf0C8uwM%2BtUHbFDSblofYRhQNLvavc4CqVkV88dYbbxCF7A&X-Amz-Signature=56ec581ab1a51a567c804fc018dffe7320e91dd83a3c46c2d61ff2849b65b0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

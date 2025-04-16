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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJN5EMY6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERQV%2FwLbLcBAMk5o0rnRxV1RLkfFm06Vh0tFsVqGtJGAiAChovqeL2gpgKQf6QOkO3SViNB33JDbLHeHHfR4fOt2Sr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMLz29Nw5kilbXdHUxKtwD9RtJlpJDZO2vyGTLe6%2Bm67u6XjLGQqrXVcDRNCg71ERYxuQ9a3B5WIRRnni4gNVeqMnmaSfL3S8AGiS2r6RHyqrHtlPOr%2BiJqpYL5HOTDdhdNSfmhpbJheT%2FhDZsNTEFOt%2BT2o5dduB1Ysx9dKyy9JYKgwjWYqz5o5jYvUmWarSwjkK8%2FZ6NbggqX2hQSmEWDYteWCRsPYo%2Fjzz5ODjJ0F3lpdqC4RzsqOT4rPT4MdEJzNjj4FhOrHWuXFE%2FHvZYj1XhKFWgszctX6WlyPD5UGv7Vyn2IK8LSsaUe7jkzB1u8HiMr2briry0UKWqLRk0guE%2FmSq2eyQpBCPiiUCk%2FKLjJ3tDZRggN9Xp%2FtI3CKUFihhp%2BQvYB1KIFo7OV9Y7l9QWrIX8thzf3tBH3E3CXqy2ALIzZFZ%2BKAJa3bp34Zz%2Bwe4UFFf%2BjEGtyTzLuXJgXR%2Fbka%2F5YXFj56ysTcKp%2BfTRumkhg%2F0QWABcmQu3h%2Bqe0Pqc1dqEazstSsiNSAdiws2jnJcqR63jtzhfqMzIh4rs92R69IgVvG08mfPpBCTrDGTDsIiA9h6aNjpYSyydwKGj%2BAcLuGosHq0CzaIjr2Vw1PnCyLqzpQjwCByBRgPjrW0O6pOVdP2VWbgwmqT8vwY6pgE1i2IyokLoeL2zLbcZl8CXmY%2BMmgux326C%2FiuqYK%2FOcOCTo60TaijfSGT%2FcBlknK86gRhxl%2FM78cAxrjego7IFzcGE740d%2B4tkJIi2sz4xPR%2FrGay5P06hACchuRdKwPA5cXSpSgykI1sc45yNVIaF4hG0Y7vsQ8cylsLO6G3bi0n1qoFfT%2BRxIzqvuVIpFVfzpZDuIjEw1uFryshG6aPgDbkZTu%2Fu&X-Amz-Signature=851fa2c7c31609b7747d238e79c67f7a58bbbe22f0484e03a6945aee48387345&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVFYLCQJ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD%2BVP2m9AkwcDfgONVkjLWHn%2BP8BdD2j7eWacQs41NeowIhAO1C1ZbFISfQPWKKmO9vwgUCF79aIzjAwoYC87gGHTgmKv8DCHUQABoMNjM3NDIzMTgzODA1IgzqXLMosg60MeVEBvUq3AOwwjvKD3b%2FwBpbs5IkphxhqE2zko3il6CJRevxoPrPGzGxkHPYHBLgW9QLq5tTR%2B7mWttKALjWFmzZKOjGOzJDHW4AKJOsYPbaPUButSTR6iuroP%2B8QE%2FTcj%2BAcB%2B%2FBsAp6YXT9EKfHqN5coTzgBzcFmVSoXiLWm6FH2uLKepXp%2BEkNb89YO%2Fu9oi9N6DObbBMLoSXqGq4rvvkOzpNoysm1Lm%2FlhCCljQWsJs1DozGdv7Zv80Ds1vnuK8T6qQX0%2FEg91dNmM2QcyFxczprAUEI%2FUa6dZrR3W65H7OkpD8OznRDtyXcZUIARMXcjtaD%2FUCAmf6PwAuD9vQgPkpjREfhDY5IdcPWOVrPoh0Mf9Gaols%2FC4btgMSYQ4c6r%2BKjflygOCJRwXo7azVenQHMcAOnQAo0NNGkFqai86wKoOIJNnP6mt7SFJd5lyGNeBpqxeDSepRWa5bJcRtzHmXPetPzuIlFdvHw7c6GzlIKNZOFDoYrqaNxs0ufbBlmhtWuBEczsE2F2X%2FyFNzcmCYdADbEMlR%2BZ2LP4TDSgEJUVz1QIwGeDnXwmlyM0lzubaIK3PGTrVv1e85Ih5GAt9l4E2nf9d%2F3RFgL0aL%2BdsreAUuZsoeuMEGkoewC6uu4ezDztJ%2B%2FBjqkAVPS5xrdwRWKU6SpRxoPee4yaIV8t8tIFvQOVRnIHUFVFdmPfcHrgr4v6oDb%2B7h%2FHYSGFvxlpRWDsCw6u8IKcR39EPOGy5%2FYCwzpkssMq2vg%2BYvCObAWWHQW8d7t6DCgxAJZj1nm8RPi%2BmQXvVPYR2JCeVNQEHeHHqNDrrf7jozlDBxdegLLkyubC0QwlmBnV4DJnXFp6J7wb91CHBmZpIygUJCt&X-Amz-Signature=43379a0af35839f28b7034ca46a62bad098ae08b2654ecad91f215e7dc997a88&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX5WZCHM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC8Rs7kZO%2BY%2FJStpO0VGwjFgUy1Vvf1zkRBEk2LmyypIwIhALYcSEiqJ2AakE7NQvV9sN2KExJb0MezzPdjqWlqbLIKKv8DCDUQABoMNjM3NDIzMTgzODA1IgydiS1U8I5h5FNvgZgq3ANVxiSuaNwtvMhPDM2sn86f7Rdn0ZeYZdava%2F8l905W6oi9O4USb5jgg%2B8XkwK4nEh%2FMT6OpmN4kMDu2RzehlmPitUmKC%2F8oPnJWcYQoDqWcFEjssaSeRXKIJEe%2FC3byOBM5LQCPOtvUE9VOELRLk7TcbWdZD6SDwCelJiTCZMP74Gx33uapG%2FlFOqbjj1yWZ5kRsCCBJqZpGP5imCj5vfo7emWGFJlOHxDaepyPbp%2BxSC5CMVyzT1OhkVnr%2B0eOa5UCm4KFMbSObqdz8HmUYxqzaTDF6iNb976H2DX3cHCc6V9HAIVNJ5x%2F589GSWTEzMcza8smL6VMKZrhW6qpksHN6eJu1DBxDHRzmOaMqnT9jo7%2F9v%2Ff7tA0dMkfnUnJjPTtUNoBIBOIQ2bE6Ji8MmzuR5n49qep7fPukD%2BbGgBvUGerFgeWX3UYSjgPa6QKE2hQuB0T39E7VDIwiyU%2FK6Lc3hUGZl3PvtNPnc9T%2FLi4kvpmQWxPqjnaM0I0kFbY6DjPVuavj9XsuakoWTBsyeBF6RDnfY3CFgCiR%2B%2FX6IXlk5wdHbGb54p9xtbk6N4gkW2B4XE6fivCNWUrfUIYbPlBaXpNLGh1s%2Bk1C0CFgAinf0MMJ%2BSPlYiLzE8HzDn6KDDBjqkAcnNP6VWXIui6yErSACev5st0EOUqYCJuPEbxPDQWEDcblf80hvO9EjYonu%2BlCgzDJI0QugsDZMpq1Kd%2FqNpJthDXN516vezFB1oxfY4EReViDjkIsF2%2FN9njj96fpEs0gZUUrnRZqZ%2BIPWc0ONUGhh16d%2BD8Q6JFVAz88MmPeEO17NjUKXDFuwvyMC6vpSFtao7X5l7Yz5gokKt3ArB4IE8SI8z&X-Amz-Signature=d9c98f610dab7076cace7b2cb65bad020cc0cf3b71aa2505c46fea83cb3cbc68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHZ53WOD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoFvxDP1k2jaEpAByQh8359FKYniNxdrpN8QHU6SIx9AIhALEVbva6mluWHLu82jYSfz6%2FDuz2Sf4vhiNn9yad1d9qKv8DCCYQABoMNjM3NDIzMTgzODA1IgwUWafGOz9nd0MXbekq3AOKbm%2BhUtynEYbMIe%2FKaApij1oNOQuojVh7RT%2BV38sqPmOJIb9ggFBe62amCiBiIGbsbPLql8Oe3bvUuZmDP4Wrec%2BNUZbkEo7Rd2JgzVWTgZHwUuMoJHVZnD8ZZ2wOfvGQcoQmTdDvJxz74SoZRwmBAF7HuQCwClueYHokLkbt7WyC1uItArlODFpXgACw49UaXIueQI%2F4syTqUcrqhXAglV%2FsC0td8tsVLh5woC4efc28aZRdNLMEmgHUVEBKwWvcirHt3fyoqFTwZNdt8giZ%2B2mvXWVVTf0DyTQtXfI4eVmtEutXuarktfeuYCA0zTYQIG044J3wgOiek2DUnAS5uoyNZcje4NB832NxCH4b0fxWWF1gKTaRpKjm2va9%2BbPk9%2FFHP%2B7WW1945%2FesrrxkjDTOvEHTYy9Hu%2FAiqbSrerj1atov8Bt1IKfdcU1A8TFLxxdqGDTO8lvFfksbt40EZICH815iP6ZA37lERClGPJTY5eFzD7FdhzxzHpIRVqM5fKIOFNZpGwNnJSEQu4%2BtZVeL0YULmq7glZCJLsQNDYSAMnLnSz54tW2D52mdGZygDAYAEmU4O0KCr5WQ3IBaIxMzxTil3ZmOmWRI6KyuRSorBFRv%2F%2B9jyklI%2BzDA8MK%2FBjqkAelErkisTGMyl%2ByJ%2FT8s%2FWENnztxh3wGiVOITW9RoeQMJ%2FcnP3Dpfk8oas2HykRYGFloQ8A21q3pYr8XOvw%2FEORjxAz8Y9%2F4BjSKrdh3tfHjW4C9oAYhTPV6Gd4uoNk43RZn2a3Vhh6kYgnXnPb63VChW8UUIx5jZAjoHMJnAiwH%2FdCoPMZrPGm82EvD3u0c2YnCevlqxnsx9IL3cmTmQ%2BQ7oxcj&X-Amz-Signature=167ed28c0144995299a313eb1ce5583325f10781c5b7ecee9427ef0bd7d90a04&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

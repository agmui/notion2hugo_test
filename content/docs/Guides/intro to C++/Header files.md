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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJK2DGDF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAEzvjVHlRjCHtey9fNfg3LKh5dFykfbXuELaS7OG0UYAiEAhSUJm8TYOPs6UGjhpFN53B2FR7Pe5im5O%2BylP%2BZZ67AqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVVPYfXe4xp0Zh5%2ByrcA%2BCHwJJoIkTo6QduXUa1cZcaL18t%2Be3XpluQk%2F1d1pXJ0oyGfAwjA1Lqfraa1JGyNrN0KcuYLeUvmURJGSBZemrDWfFgwKzvFhgH2JMKWHtHfZEzWqOM1YvlD9fTtxTzGa0GZJQYoqfuqhNoUfnq%2Fkigil9yVZSWtMZ4GYywkGnnYB4OfC4fPbMHQ94ql8LhTdyrQmrk0DH7vL3kTqUKZvCHzw%2FBfKfVOca%2BRXbY8y8INqoWqkQ2BjbN5ihoUUqk87cEFl7XO3ziqaUOXulpvog%2BwpBJZFX%2BGm%2FDwZKsnBDiDoWqm43UOVMrNPZYnt9EolnvKwfm5gCJtIO6XvMpIcXUTWUEjjThB0wqQnA97EJX%2FCpZauabB3RL%2BzkUqQUGEvWhPjpnXHQDCDkUH%2BfQUtiTb6eOjQ3wufnvzWYiQ5ELwTFQtSojiXpoIcDh4ue7tjrRUKkC8QMaEAucRbIXq5%2Foy%2BWDwdYYISCEL9O%2FVZxahhEB8JPQ8ji%2Bw%2FjpegXoF5c6nw0v8n5uCpWVrXNAqn7NoNT9ewHtYb155i%2BPzJNYHFOoXdAZTOUwSQisxjq2TRBWHyiUWXBP%2BS23%2B1SyQfgwJ%2BUZ1ggrIUGBN9DIKZN0k3b9BdRdmsBlYxIgMPfP6MMGOqUBHT6ddWGS7npY0Hlg%2BU3%2BmlEMzG3lHId2lBhywsJOE8xcLL%2BFwBbDiQ6W8M07emCKGpgeiLTsubn5iMfPSm%2BOUYlGPNTNLqzAnEWf3O9fkA8VXGPM8HZ5bzl5bwJxcAbFUJJsbTWm4JdAruO30%2FEh%2Fjnnwsjm6BdXbsqEtp%2FsrFNGvvpSlP4kZGndGGCSLq9%2BFtvIjuWLvnfXkCzzlUATVn77FAl%2F&X-Amz-Signature=a8cbac7e3c69ba3879e06646a05a4b038f3592663545367c6fc0c87f46bbb03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

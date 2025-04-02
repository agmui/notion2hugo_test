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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GZEGGGQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T021955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCDuf6PlGV8Ydhe90L6xpjq8a%2BIlRElVl%2FJmvkn75OKNAIhAO7WEkHxtPiMPk%2FVSQvsLTS75NDG9kglY6v3tEpzYeb7KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWlC5Upm2cIhbsjHkq3AMo6a44bmRpFjqSq8CPFTdCjEQ%2BRS8Ahe6iRs0wYSQCpLNsIrgtGES54AleMqTLCSfn%2Bpvt7BDlkFtcFBRdfetIuAC0%2Fltr60EmLTAwMZflnUjju6fg5xSHrcYkfWg4lmu4wyMxqwAdhAaOltJl4ws6rq22FJSJjOOVcgXfQkZWQliyA4P3tsY7IGp6FiYyX54UOD8HosLAWMnkV2nUc8or23nmjB7nXe5nLokPzYe2%2Bvnl5eM5ntjWI6ZihBvbQLg9f5Rip%2FZHie0bS0r%2FRJoI5ZM7KPh2MOQwE99tl2FtBhwqGnWP3MLbfZlIsTMdr9dh0qOY%2B95qrmQteLYa6XXqwDD2FM%2BaBQn1VWwmom2kXuVBcbx5aqf6l%2BhHOLliOiOY4QDLqJilY00VSDdWPi5C87uDXXgxwLMQlD4i%2B%2BXdpoVX1ae1dh8JTOGfuVhzRwJ3UPlS312NxzQJwIiVG4BAemOfeyP%2BCpJV8byrnTeDMngigoVzcCtQRzYaRvnV3Vx%2BV0hqvF1B%2BTsXyABnYjysFac8xLlTysRrmRypQfpPwR8r%2FmjBdXFP9KDot%2FZRPqm6TIwQ2U%2FgVx%2FUXMCAzujvGm8CnjjmK2ROX%2Bu%2FLzQCd535VNorHgRmfp1NDzCeubK%2FBjqkAefsh3bB7ulRHN1pTZ7HRAEYtrl%2BoDNgZmY96Lb7fZP1nrlkzIbsXxpuqkgUdNdWT%2FHA2csgO5fFYabajSbP2uuQJ4qmM8pVb30it66t6kGOe98Zm37xnn9cFMsH1KbQOvy%2F%2FZAbx6XKxOQvdas2i4pLqEymZU4VP7hv8soxTFoYpavYjUQ4WXLR3L49hImTBCxSyk%2BQmVN%2F5fW8%2FNw6x9Bf7Nfk&X-Amz-Signature=529a9aed1508001ee4e18313192b0e9f3e58a1e977012da8e836726d1ed23a49&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

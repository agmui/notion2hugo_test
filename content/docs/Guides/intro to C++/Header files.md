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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USIEZT2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCEoKPCm8JkvgYAx3go3AzNKxUknMpl4zAhLCkZ4l4zOAIhALSHtPoY4DW2JUf4a66Dpdn1MvqZRe1%2FRPcZ87K3cCN0KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfBUjr6YdGrwl%2FEEIq3AMkJYmr455XY9F7zxV%2B0Cp%2BfT%2F8mi1Fv0VbFoFng7ubQ%2BoPNc5%2Feu0PabrfTPzI5kfHsWg0tMuk2tUco63rGDLEXKNbEal0zXC%2FrYw3CPnvu8Wkgb2yEiyNT3eAyTnsnknJv2xHJ7iFO8lcnadKeQBSGaf0LrIl4C68wg0tSuGWG7%2Fm61mux24mpMbfuwNhzArnufaF%2FZeIgA1QBwMbg5D6W7L3CQ%2BPO%2BA1w3fdcx2gZ8xXs0VdhwwdUPEqxogZE6kMPPwSjSA5nai6vv6dgTtDNHuvdlBJZl9a77OVbiQVpjlFMqy7kQcIHtH1g9N%2BPY%2FG0jchoyoWtVPa2D9oD%2BMSc9jFZP06cfK68MlIubaPwmZ3LOtmHtxbIgEO9Tz%2B97LUnWv9ScdbUCh4CXqYWy4ddAeVdXvhg9GLarl5l2gLq9xMuYR3wSrwhjcY5TWTeo4UDaItf%2BU7O5%2FmGtml11Jod4d0hwHP8CddI5khhA8J0kgpjGxuXegJbLCmsghHs%2B6cMJfhHvQOpvITri%2B%2FCl94Vtku05UfYBziuwopkLMM32ZpC1ppiH39WP18sOFYsTruczGamBblWaP1sYuHCVcKP0%2FjxLZAgCKrZK%2B%2B7HOowti1Z2xoY5BBNoIl1zC%2F3tfABjqkAYFvecbh3vNQciP4R39SuBM3retgBvinWjxZ7IgfJvQATH8rr3h4A642MxVKG8h3WVZUUk6SV%2Fw5xuNMRXYY%2FdRA8ZNnh8laEqwUA09fcnVsKPy1Er9kRXtlaxoCLFodGByqDcQyQ0JeM19cQHe%2FItHSlbH0tSwgNxSAHwJudgrgOV41MvAZdXrYrAHQUjsGXfvsBOgbY9uD6qFAbkvqm9QK1cJT&X-Amz-Signature=80b3925ef4037a97bb25c9f067b0985492443a6804dae865aab1fa94cb7c790d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

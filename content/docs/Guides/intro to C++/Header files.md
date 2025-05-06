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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DGLCME6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfZemvoyCVttcRgRdymwOV0obKf6WJAQhXdCRGVjbMuAiEAn5VYJzUp%2B8GhPicyevEgT3HvoYwFuPdctxIH3atME7Qq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJpAp7fwjYFCgR7wMircA48Hn5Urzj%2FP9UZ1nKv2982gt0pR3V1mC%2BF0iCJHA3U9Cd5dM%2F4nHXUUyWF0ynK%2FOnASbaGy2R1pqG%2B82skLm9T1dgc3oCWv8iXNTLblNcz5JFoj%2BYyfYhjOCenY1TzrSxZ%2Ff2Uozrc4Kc3f8sGYF0nAiPMGcCUA0onAstUYk2AYdZGF3X6yF2eyHZBcn5TlgEpQPa9RGr6g%2BmuWY7w2efawCvLgQW4cY3pfxBl0b1jOj%2B7LUojw0dQzOB2Juzc%2BGftq8ZZWYHTV17%2FFw%2BLhP5zo2%2FbsMThLWT8sG8FQb%2F37BmCLCFhYkVot2NWlluOU2ZjeET0ZLAs%2B992S9o%2BdvRTryAPYpMHlcNy958CtLEobhNcr%2B3th%2BegxqI9%2FWTgu%2Bt4xy7QezfhidNOnIM45MaYlE%2FzVNEadFA914x2TrTtogqV95rw2GtdWe44cu9ntqEzygBfXjh0j4q1PnRFjVQD7wg9olQ0qvlWBuhlgMwxyY0XjjYUHxHj7x8ImEaDOYObtwgH4QXKXrYjdZ2BCAM76FgCk83D%2FSpyitx0U5Iz2q2k%2FpbU6pTKspevaJAy3mM65wgQW9E6wk%2FZAfm1tdLB3db9yv4Te4wNALeA7DoW4ifAzi3uehoxBacYtMKD%2B5cAGOqUBz2xsn%2FqDgyklkf9cJXVTv8pUtTFBQGovkBB2VQLWWdKx6N4bOtmYwM8eS0bpeEc4Ku3Hq2lRXYYBzrVB2%2B6in8K3Rily0L5PS9D4vBHc8m3GdUWbH9lWzEYAa8qIeh6t8H8z5awPNmniGKn9WGQoNrl0ZbnWa3E9ejZmaPDbAi5tUEFx0kI5%2F%2BTws3dapdWQ%2Bm%2Bc0T7seanGZPMQWnFrwttP9HzI&X-Amz-Signature=fa841010896a4586e68005436f8361e084a10ae159cb45c8347a2dfd45ea7381&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

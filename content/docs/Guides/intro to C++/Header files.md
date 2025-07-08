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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5KR5XMD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T041959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCBmO1wyAW7a29MLeJH9QjX04q%2B6Q1yQZzofEhZ9XCW8wIgQlo7ASvvluEY04W73S441ddQX%2FNmQcfleCt66476btgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIrP7A5VVl1Qa6hnircA7Mll%2Bao8zVKissJQPx9%2BUTB12y15%2F4Z3hfcFA%2B9YWFqOC2swqGYhf%2BCGSabnVApHevERqUEKN4jbdvyDZV4KOHEH9stlfjBjY6AakzpRliYsdVZ1OLutLBkYNNONHlFxSo2ETVdKnZtUAxjQpZzSASV8QAgziiFXjlkPYR1D%2BW8Y0DCzOt3atuedA9zzMk4UGYbljNkPnfZeA494hjj8JLGfZwKWKzsl40IMfxQLn3LGEW8ZKyZSQczvSk%2FvnUCKm68k%2B%2FZ7Zl0%2BxMETP9fnpozW0wRyUK%2FBi14gjXtgZLTNEwobgM9sVD6GJeEgZ1DSOEoC6tk7JlZT3%2Fv9zF4UTkgINycpooHgX3vjEnYHM4FLaZS7L8VDZyvew2K9wpSQfLwtYj0jjWxEIsq5ne9y%2FgQt4%2FDk2XrPKXU%2B%2BU4c3%2BlOug9%2BYVZKa0dPHUIjC%2BW%2BiIa587hZz17jLz%2BLVr0s3xF6LdreLwbcBMAaR7wGiyWO%2Bex9eRnwcGZKEqGQpM2yNQP4rZIbtJSGVvUbX7VvA5xU5naQlOyH%2FYoibxC0SWEnD7K9MCEqeGfwK3Es3sviu%2FMzS%2BC5rSTQcDpHV3nICV3pGfyNKPRKv34Mtfeutx7FSGC5XqWaXee0CHiMKSEssMGOqUB3gHMwKjPAkMgUb7liwSpPK%2BuTuXiZoOw%2B7aXsMOYn1vlzU7cO%2FMQNUy4pnnVrnPikxxfy8LIs8qLImGYIdetWDIcHoNoaBsz%2Bi0LWtflhLsuu8xXctBzWhgAx4Dz%2FwQmGK7emLUzZxaiN8GQnp52z9DZQUwn36uBEG3HD1tmUo7JJt8W%2FVGIlsCsX4NlWjL1Zg9sheH3RJHNXXBrBEsggBEddxpp&X-Amz-Signature=a402917f2406a39d3aebce55a0445b3d1879ca46c8a73111c78c77da6ec4e134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

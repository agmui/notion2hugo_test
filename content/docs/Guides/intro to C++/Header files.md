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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FVQCDE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDyBXFfAv5Co7K4IV0yfAkuAikQtQa9ialgDmlmxad3IAIgHbAQm9IHU9ga%2F1fPtiIN4pLYHjIgjBqqN%2Fvtti8MD2Aq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDAHRYKbfycV8sZdMxircA5JgMTut6w1M2rJfm9NMeOAyF4macSeF20VWKmnvISoXsOZGrlKzfSCsXY9GkzQTXN12CiIyQvIamRFrCECLRpPgyaWegwO3%2BV2GImQtM6VxCk53GNy14M%2BHu12gPC9ZCv3W1SkIkGDa5N3YXYMfsRcEf%2FquL8JSS7XrKx%2BnUWrVUrkKI%2F4qncisC%2BdpmgCr9bihv98Xfy1Ae7B%2F9%2F9NEk0uBJWmBjYxn3r34IZ01CEi%2BO3htFDKuhhKHYtqnY%2F4xHs0XLn1DUJZLP9LKe2WhGZ3NV3o1nCpyFVDr0fS1R6lvAxBkSq8BpzFOewJGjOJ3fOTy8XyqDkUlfS0EIAKZZ0YA%2BCYZVOkK6JENsDZWf81HIsrfvtPb74V4gd9tAmIuHQi%2Bu2%2F44WfRkDz732MLKr5Np5BVCIqqINUmhum6YO9mTgDfl4KH4kZHCnMcuYjT3Es4ayFHyIbRkGJsHhgn5dmnJFDFN0Lb1%2FSpqH%2FKHhNFDNHw21yN9oymyV%2F3dm%2FQWj5wqBnTlBxpK1L4SGjIZn0SetiZkxpzJtYYcnCP2PlZRs8BVm2Ei1nwcLG4PWZjzqPJdF5fYpds3x8oBxTnYzyDMGdajsFrN5jOp1fbwp%2Fto3tQky4%2FOR2aUjMMOPysr4GOqUBWfjAfo28buD66Gll60Tbn86FQFKJF8pE%2FmxFuWKtZXV5zL7KnZw%2BhZKdlEUndlAl%2FhgsfKsWk%2BG8qEGimR3GLKWHFdfZU0IjVjx%2BKzkO6VllYxzfYRJwq9m2CXlruAs679ReYri7cm%2BQxweYo7OZRP1HVjB3uiWIeh6JY0%2FJxesMqxZ4wl77hof3F%2FwodgPW8pQ4l5bR4%2BjS8yYgK5hXHm7t1utw&X-Amz-Signature=a7465c3dac5e810a10f6a0172d22cb959c7da77b04a842f2a8d4e46f39538e76&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

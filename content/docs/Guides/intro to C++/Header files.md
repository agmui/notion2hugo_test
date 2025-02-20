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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFV7DG6X%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Biz7vGlEtkcgmDOcXsiR4%2F1doQsoBXHBTn2o1LHdJCQIhALpszJJQ6rR1w0URj2DDKubVZd6%2FCkz%2FyCDh5PGC7PbyKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJQRLfyrC%2BlJfTXj8q3ANaL03XlS8armyKuUiVCrjIOsT7ssc2BA8kqYzSIkbLz6cc38GJ7cyhBXhRCIHD5MuX5QuZvZdum0IL449BoLb7rgL4WSbRcfpzVaqnnhSEGQeILCM5VSQvwQQMnDG0v3UBt3%2FrPGdOJooMVQPGL1489ZpinjDKFKTTQtrS8vi1ZkTtKPtGlwm3VJZ7ziDSioU9zkH8woRjq1U5TA096ClF4L8CxfRcMdBGACYDXEC1v2ktHSjZNE%2FN7VODZHqTd5vixXW5ZtTA%2F8eqs9diwoUwxIQQiR056dH6lvT8zwZoCOqcxl3pvMS3FypqdUnReS%2FcERS9Q59SyBT%2Fq%2FHmPEicXVqbBHHoOqcgKbXdAn8YKg6dBUmpiG8PA2QaQw3IupEWwjjLtLR0ulDa0UcZmw1ileA6%2B2aR83XemuBjIXe5e%2FbjLRS2qtuNKAAx0oef68DWmaKnY7lXp5%2B6v53qXXYhuaX0wt0nRIW5qeM1NUPVkGPf0YdoJJwmt%2FpnZH8nL9Yvrcj7apU0W411S1zq3M7NLAdroFHENwJrocH8zEPIkjpX1YDywOs15vkQP%2BufV86ydrzsgRPmLwajizw0s6Z0vKIAHrMq2vVx0YEW0tYoez6IHAsqP43h0QGD8jCHjt69BjqkAf%2FodAuNYCBl0lOsUPSpXA78mW0O9sbWEsLhoXUaKAG6iRCfnWagUKuOhSIgogcfi2ZRPCewX0Y2n9FJSLu3x9G%2BtHcQI%2FkO3SIK1OEvax3kINZbo43VaDX9TmJXqEGNeUdY%2BGTwjrYJGS%2BJe29KQGawvYEZMoQyKS8YPunmsNdRbcoyLfgWhC3yBIcMuO6F%2FHx%2Fiq4kQ7DgLhkkN%2B3sRFEjTBCw&X-Amz-Signature=38a8459190694963dc00cbdc408bb4a7391ff07efa46559abf819045a40e7f5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

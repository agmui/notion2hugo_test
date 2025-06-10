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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622Y2VWT3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9q8muk%2B0puMmXbS%2FOgvoLfex9XF9PfzdfeMQRLuBlkAiEAmzZVzKx9KBMtPAhErKjtsph7jhq%2Bb5CwEexYgSiyHPsqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh4YHvZ%2FBKcdtooPCrcAzzaMAa%2BgomvZsnjHXjN3f%2BWgLHHGFlk79%2BN3IqZbgY%2FB9V2IMbee8eOpc8xSHTA%2B4EWb9L9O0MSj3nXRXinzjJOhaYn1ueVbBeqarlYkUUriaSt8vob%2FPle9Z439IejiDdlu%2BpVzzZSUxQ%2BX%2F5I3Zqvl5tesZJ2Ks6TZ3%2FzQ%2FK5piQcY2jnMKbT8LWY5mGdf4zTL2FJ2yOJJo0mhc7YLgrvKUB%2F1E6dYN%2Fy9IwwdRu8UE5hVLr2bp8cMlYwSAuwPl%2FXRH583Cv93gZGbcjid46b%2Bsxws7i6Yh23YE6ul1SNy2LGFq7EoNRy7Ns6x3lSV3A6n6yuWReIw4iQ8txZwAWOQPgohfRUO7h4TDT2MTip4px3zP6fF0K1GINE09o9kpmOEtiGgzH0fBFLK0gRaZ9CzZ4lh0bh1%2BsMwFXJGRkSLjqneY0%2B5MIjCyrYzjFfrq9UlIgLJfUbXq9oW4RuY%2B1O9lG6ljztL%2FLu%2BgglaaDHjB%2BAI7mRAzUdUJh2HDj7jCiZ9qCM68pkLdNrgxwfSvNO4w6kCevIWksLeZoobJyzNWZ5NycFG9eXEqqqMQM9aUw6hDC5PJX88qKFAY7f9BYrLINqBrJ0pPdqEeiMAdUGxsFUyOiawvdJ4idXMNCyn8IGOqUBH31wzOd%2BKFBalqlL5%2BQaRC9VjYyN%2FScC8NFzxA9YFn0%2BodP1hvcyaZJDEiq7I7mJxXYyqMwcIWVBWwAoPNaNjgeXZnwY27SUnCHmHY4%2FsdIe9hNLywzRm84OY%2B3%2FVFqXouFkY5jj87c730pLKKk8kzed11yLSDEN4EGo7Sz7PWCGV5gAguGBK2U0KNdCj%2BY5TsWZP3kTQspAx%2BvKdxPnDNnCwJ8F&X-Amz-Signature=16aa29dca2e4cf04ac659ed601cfae11bf9be02a0a1bb9db7229f2051ff5795d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

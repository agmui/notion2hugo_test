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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNXPWF4V%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC3QOuoIOMJSXUv5NFY16kNKnSlwI9WhBu9NUPHxAXS7wIhAO2OP746pja7QXq%2FI3SIBG7F%2BoOWMeoqmmNHqu9riW5xKv8DCCcQABoMNjM3NDIzMTgzODA1IgwN%2BK40P5qEudWVHTEq3ANbkle52pD0NG%2BQNvfcbDPwbb3q6iNli3QK7ih2UJDHXv9GJYJhuxO07k7nRyiZvyNQoGx%2B1ywq7V%2FpdhU8%2B7YNvQY2E1DiZpWHiiPzpE6MuYJpvb2FXU4xtxmfCRUkADDaHvJaTg%2FMQFpN43FED2XSShdy3lYpTpEvrJ6XlfzR4tHTPbrDSMq2xXGEt22Ya5HqVt%2Bua1Z%2FWxy5F2d%2FqBTjf2QYzcHHfsx9jt3TgQcbfGYThj7PgDO9BMkbg%2FkJtv0NkDWkBa711yKNiHTN5OjuleK1LO09BCgvH8RADQiIdFKXb%2FxgRbdrj%2FXW1KFdYY0AfRqheCOh0kHv5g0Z3yVuiZk564bc4AY9cB9sR%2BLMYSXd%2FfyvI30dV%2F18PVNPmGF0CrNVkP%2FU2G6tamqsh95kIqcxF2O4HxpqoT%2BMSnMeqNhrUygxs59VKqoTIG0%2BxzNt1DSLduOSt7g83uO2i7pZNH6QKN3HgB9oOzxWa4gLwZQZXMr%2BSNhZVc1BdCqjBjIEsdSSJC8sibsTEVwY3RbVn54fuL0mkZtxP%2BjT%2FgETamvACwABgXIWBFBwUun2B53xIZtIvVBreKEuWBbrRNolL93P%2FTGoMtoUvklX%2BXUtpWcfCy04ARzN1N%2BOJDDjsNLDBjqkAdKRB66D8BsWUwUByDHR5fVmOmlBCL%2BrkpQMtT%2FdeRhlMMVzOs95W4qn4PNjJK75PukfsG3HrkIclLZmP1oTXKuSyVJ%2BZqkgMwg58XdLScFHUb6Lf%2BLLFpgUcjq7BGxLcXj4SuW%2BcW%2FWAfIFOjvJXMwMDvv58dPSRTUrcJGlZtnPVkyRfgfJ8allP4plJVqXNXigzOz9s5paa6yZQUdoxCiXJQWZ&X-Amz-Signature=546f4b69cb89ad9065fac8dedeaf668c2a0d0d38b2bf82e01ba17494793d97a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

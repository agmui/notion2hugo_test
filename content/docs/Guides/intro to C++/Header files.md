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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HVN73E%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIDYE5yJwoSkfrWJWCWFMS095yOjuW%2FAY7pL0fIy%2BGRoNAiEArSbDwfQp%2FRuOQB6LVVj4s0EoAeRdNCvuPOpFnQmA0tQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDPh6%2FF50NkuegGC9JCrcA%2FE8szrroB8bye3a%2BS8RCdkLygSr1K5dXmfJ70JsrNy5zZdgse2KLN1BbtJk3AqrXV6GuMqKnd88GlzkWy9NkOUkZbBhL6y1DYtLgnlMEVIoJrp52pa6AxSV01%2FudWceJKQS%2FzYrJ2wHSqw88rLT3th45whjeGuxBgkMo0LWAwIznen9xTJ9L6DpXnn8XRLCoKplWsOBUIixACQzZWBLlcByqvSJFHVprInOmd5jHD0Gx7u2STdLeXZmMAhvQWd3MRz6%2BQiOp%2BCY4P8AHAkDppNfaKP1l9BPw797mJnOr26vEqbp3HxqHZEViXkcr%2BCxw5x6I30PyNuAZUa8ic436ksz8Um3rQRG%2F4CTv7JMCsH0ZbRerDmKnVN%2B4EHs8VfvyY%2BzuEbFH9FGx%2BIPZTBus26jgymjufVpjHXwz34lKhL1TDPkLI0JwtW32bG920FqZ5UkHhgYOviU5JF7Alw70kUmN6ngDHLKwhsYhJkJZKfh8LHDrheBB8hem6eCSE1WgY14fUlwSoWHr5PHhrnZiv4RTL9ugyhhuVt6Jhtn8YCQwuxMkppzkQ6Cb1ll8L97BSTXgXtdZb0LZrcxj6IuuEz4TsghaoUDQuz0WxIebr5lW6rO16nUfGMm2HRbMOjSscIGOqUBm2ioGuq%2FHECoydyJK8ftWm4OlDHK5eRtto66W1K6M%2BooZfsa%2Bl%2Fhgl5fy7IrQetlNfvGU%2BpZglsFOvT7XinFbu2Kf532Pw2jzklz%2BWt4wm9ap%2FtQ%2BaA1A7OB6a8IforN7F%2F7bTbbw%2BjuE3SGiV2nTrmDJCP69ioIpvgz2dY0pH4YUzH9RiTJoXuNMrYjAgu0KUtrjQyRENlP3WPF1c%2FqQvkpXqCz&X-Amz-Signature=fa757bba955842b2de71346cdf469663f0887052731e48b2b73ab54c0c9fa75b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

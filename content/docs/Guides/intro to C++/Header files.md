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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYG2HQB%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHTFRW%2B3KYLiDhEB%2BB4NKvg8Cii8eX8kYnylEOFh8AOJAiAQNRwashb3e5o%2FK%2Bspx%2Bn9mXPsdf%2Fj8DGMFKKRyTvMsSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2BANrPUpn%2B%2Fs4RCyKtwDqjMuloj3h0HKud%2BPDLbJrxCUEyAqw36K2v3gxr%2FeFQ7ZsRi1WhstcjUQXWla3%2F8THdSiydxiVfnQzOtX4nLu1WPUsoEkr6xDxTHHeNpgxOaQW4w2q0jYGNUnB%2F1mB6Vw4kNYn5DKlDtXxL5sEcy6XoPJ1sL4imu8ecv%2BmXLw%2Bk8wXQmba0m66nl4qFO4iAejrfzmL3YvP9SHJiD2TfONJ3%2Bq5AHlxduK8IhgowIHI5ER0Ra3D41zO1zMrn0a641z1G1WKV%2BlEKctRb6If84EdxfBPVHR4MbZYJa%2BTAPHyAIx8Rl2KsPWMQryzoGS7eGEAOKfa1Tx97CEQvBHr5GlRRipQ7WY%2BBEj8p7rdG022qk6Lax9OkSP0nzzH4SB%2BFNcOhG6zO1vEsSlqQMvMoi4P3XBNnKkw0nnySv%2FEbq4zE2dXoh4nb3CBh6A954Ch4yoh0OJ7eyKrlfzPWdwL%2BApAGbVjaLpeEPvt%2BHzW0VlNBFHAaHOqV%2BpSzQWTj4oJsNG5oVkpsWpV67HEbB%2BDUaF35ObgkkC%2BVjfII62u8QTonRt4cfkxEXzXye4ej%2FsI6WEctzJ%2BbQv9H40AsOCpwfJLtRdFKMuZAftiFZlPu%2F5EH%2F6N6FF0fx21bs%2B6Vkw19f0vgY6pgEf2hqN7giNcAHXw9YkPRNcsZ7h5TDSg1juDQ%2FnxkrkMIoHfGEUhDxXLqMgrhcEMVNkWxeL4JkjQW39ZRZrVkjOyFrUt302%2F%2FRt7%2FvwytJDEzM%2BuIpkZpiSgjZMQa6MuXNTP%2FoSv%2FGwJCgn2G3Kq3iwJjaoxXDfS1lxG2jYga%2BS%2BN0i0o1yhuoDE%2BsDo%2B3UwfDi%2FYGmOyPY8KpM5%2F2mu1MXtG6q845r&X-Amz-Signature=1c701dd237ebcc5219b42d376073ca5db62aa564f6de8e63ea4514d149fd4461&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

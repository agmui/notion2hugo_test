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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MRQWJAE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDcEw2Qg19OG6qRwb4Y%2FlEmmbfQyNnrWkrhBssT3mOnMAiEAk59WW2BhDoraWJH1Zrne1VkqsbSUUJoLmiDuKBvKD44qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNcqgpmH5RKV%2BBr1yrcAwycwmubGAilSVWDepUq9x3j1NYVSrc6ZLoBHefs2Al80N4Jd90UQw9%2FTF3rFxCvd5pjflH1QtJUmcTo8XivJp7HeAsI8tAvmrPJpk%2BEDiW6D1fbrCuEVir%2BvC78oylmyFzEChOsXxRR%2F2R8aKqlcoaoSJCZUWIMuCJYuIb7hsy1Hk8EOLG3SoY%2B9YZWLGHAvfs1fV9IPkVufzn5wkLl7iwpHuF2Gj318PX1U4f9zSj4gRX4I6pYCQEJxfMQCHI%2FyAZIlQ1XNiI7ZFCagxittlYyvCCC8UKQZf%2Bsa7M00k%2BHfjGQEvWfw6BKvCMt%2BRnzMK2D7bx3a1NCCzhkocWvKXZsx8%2F8Rmqo7U3vvVfm5Yz8oG%2BvvFS96NjHRkWXVB8aLCcuMRGyLyqQP1%2B6arflkV2F50yH6qogeKS34zvhpVXBcak%2Bhfa8nSvzpUe%2BWtN7sQEvD7zf2hMh35mquNIEnMpttCy2XwwiWdfIWMHFnTfdd6GRyl6RAFuin7WKvY92L2cSVTaiDguZPRtHXG9Uz73aU9dlbP2Oevk50stZ9mINxf7Dgp6A2OmEwqIdn1bQHQ3hi3kfzmFsKdLAXfggjMVbIa%2Fnr%2B2JMazy0XUbGnLl%2FJLnzKT%2FB5J90ZNcMKCHxsAGOqUBq9aP8kP3oTvzFwPcHGNdoxhSxymfwQaOKd2q0VAK%2FnKLhhEm38t9CV6YBRij6kChJV9Vd1LSXUScDwkpmPqvJM7MOYi71Zu7WugakW75lGRQoFniAHcZLtPv7RxBVgB3CFcO7vqcQxVwrqL8bbtmybanQTjmZ73leAk73pzkEkQSSdsLMpeGMU%2FxjQeRy32PdBFofgPnEkR1mlXysqqGoUJfurQZ&X-Amz-Signature=42981fbac0ea973bb9fd2e8b79ec050427e230df2b7c8a56420718101c177512&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

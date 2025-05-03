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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QX65F6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDg6yzPhsfuYzG106bfj74mX2wLxQBXU8mFA3MHEM4xWAIgbKitvzNBgr5xBNrtAI2C6XDqudE3uLqBVH0HHa9%2B%2F%2B4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeK%2BxvnqwP6QiwBsyrcA4kAPL7FMHAfEwJz4osueeJOeFsPFPReAzbXgQ45ZtlP4%2FkyFz0%2FPd1k4HCyrp9wyBBxfA%2F7UGt6j6ojzhSHXLe1%2FCJGk41ap4XH3B20P5Iov%2Bx2mELPx2GzSNaREEyMZN%2FDJr86DOnkVc0N4I4nte8TNFYWQaEznevDIKz66rXEBKHI4pWLw%2BqQ9J0SJRM14q5jd1vZbVEZZO3%2FMN9lJPz5bb%2BewV53bd17wpFixWCkuJTqVsdSwGc0V2XZQOGDS7OEkJkg0012JuwA8O1BsbZvR0WQeQ3jiIi%2F1yCZ9w4t0K3r%2FXCfBXSROBA7NBsWFnUjOGIx8MviOHt1HEMTqR%2Fpevj4KNwSFU7%2Fs4ra4HC341IMsAmDRcpbwwnRZKHA6YI1ixrAM0SKRN21OxtnO%2FyQbtOo6BKXeDVShxbZG2ZDfIMEIZ%2B6oUtL%2F2yVGK7JZd40%2FvJs9wv8xL%2BzeneJitI2r7wA%2FjO1zN300f6SIae116O55LgIKeqpvuTHFjGNxRHyT%2BYlVcmwC0T4mZXiluH4uQM5%2F%2B768oEgm7fQSzZ72E08RnkUHE0anXRsNexS50uxDIdYHYkHMrun7HGenNr5DrdwbpCoawF%2BlCDj5IlKQS0JDVjw1rpV8lr1MIqP18AGOqUB19gSG%2B0zc4wktCCUKBMe3JxPfRJDLcescmr7IwwT6maWZDeTKVp6C2YragNq1LD7qi%2B6Ms0HKv6lLFrQlSTYoVA6F0KJVnAB3vy8B9af%2F7oH%2B2B%2F%2BAA9LC42Ehe9neYal1peq8kbw7%2F5vuyN1mV2uFDLGXKiwRiZwOzkc266Ak1vTbAl0cE5yN9I%2B7cxHTMcnnMYRTISIKxb%2BnEcInQ9tHmMilWC&X-Amz-Signature=3b5c1080ccf1f1a7fd0dc51a71c0069448a2713861124ea303ebc1327bd60d31&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DIGVCZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCJ3dippTYaZabzeGAu9eJTTmmNkKKROYv%2BPDd7DysrJgIhANTli2uX6mC8IUb9swaa90HQVQpjkfn4V%2BdoDTcHClgYKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQUsLLmbm6b8YGqWMq3AMjmdXjI6e%2BLuZiIjam%2F%2BFsNGwxoqEFupwE7PmonkvBBIuEjVNbtfr08JgPD2P9bJM%2BHG28KcYk%2FobltQIlo%2BxnodC3axcq3%2BVtRFEK%2BZbWQNugts9eGQBzib8opFu0OdQMie8bTnu8U9ISroWOVdLUzs2EupSAquN1o517Biga9Zgph5t4sVW6vHImzw%2FLsbyNgEk%2Fn6zrVz0TTo4a56l5IvE3x3Zts8rwe9ZY3fDWUA%2FBnlTR8jh7rpipDdd5NAzKY3aUK6CfXKgGnusdlgeHKbQLqWAatZkTYe2K6Xbz0EFNYO0D6wMLAXR1Yms%2F0O%2BkEPBsOqIMIRkXail%2FcKqjK2dvrZXegckg8GlgRAPO11US5fAIG4e6atpaP6zW69m76W8WJy0PypJIvcGkwu8tnRSZeHAoSz3Pup8NBcD61bMre11J%2BqS%2FeVDfwcbgLuNic%2B629xuD2A0vXoy8jyIHSZC9KPWyAO2uJL4ZqgRKS3qXd3HllNjNAi8r7uN1AHnAWtpyZSZEXRxMksYoTTY3T%2FiYNGqM2mhKF6YeWgAFcBKMVgnlGXwIBp0DGgzmAp5EVQW3BvwYyxw40VvlqsvR9Ih7GdAr3Y7e2demdJxOrhi0HYsF5rnk%2FmmZyTDW7aW%2FBjqkASEKJmCyYpAiz4Yi7Yj6JRnf0h7uwiteew7LJnixZQfTW8GzL8Kv12blJX%2F7HcxvYE3dktH3JFWd52unJbWncSuSdmFss8Pw%2BSWiGXCgKjbETGlzhbs%2BUIQVz%2FTavVrgvSd8iQrcfDNjC553lXb%2FqolcKPVXrIKhFcAcB0QhShGD764OvfQQHygMqFwY8V76E1tgvttRzEsmJiaNiNTY%2FX%2FKve1N&X-Amz-Signature=2d2d83279511a9acfd1893951a76c22866444c5260302dd6bb860ccbe5413746&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

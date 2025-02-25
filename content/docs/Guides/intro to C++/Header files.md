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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZECLZKO%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDHf5xc9%2FbD7aXVLZwa00k6W1Xx6u7dCyP2sE8dxPMkcgIhAMDeuV7EQ6yVaOPoM5pthQKCBB89rWhHAfkRtzO85jjTKv8DCEwQABoMNjM3NDIzMTgzODA1IgwDdMCjUFueRzkh%2B%2BUq3APOn%2BBl6Mvwh6dJrzCOOOz%2Fn8YZ34h4smVY9KlkjWLgt1AWlpeXslaX%2FBVEZpSBTshfLadrbP9rFw05MIg0I0twlDRNnSDRLZWDwhX4c55GYmoJblZAu6oqI%2F6IiMdYN5%2Bwh55VmU8CYQlAX2NiYtEO4c3ZW%2FuY0Sb0xH6QnXMvHeepDWLTSRuZf5vhBHz%2FCWlzBVG6%2BcZqwUTx9ECd%2FgBEkQg4zTD4aKNhAoHX%2BgKt3Xa7gQN27XaJigTIL%2FT1ghD5mxjBWx2xhwoM8bC2hSwlYwKwH1%2B2Ec05WCZLaVTHSCozwchtRu1%2F4HUYUwo8hyp8KH9qRXo5tO4rZf21UbYLpzO7VABMpuRtqvb5aJTwG3NmRAOp61bUR%2BmKUY6pzQCSXtIkN8Ld1yO7K%2BC2pPCFFWr1ZFD5jvJll0TsR3sEwBPMq3atpqnucOLVxA%2F0L4HNPz%2FL8Xgz5z27YKDayxzbulGzorJtPgoGS3RnH2uTg0v%2Bzk6cHmWJmvk0gIOGRM7WzN4OWDHsSGeoslpjIP127l2hCrVhpVVw4NISvr6s%2FvJjytGCbh4RdKHu8VO7tQkUaXWq4R40xYQCfh%2FjmmHhDfG5nDfUP8XDqqmXsyCCa99m8JPnPRG0sjAuYDDjqfi9BjqkAdcgCndd%2FZ7dCD%2BezI5DMFUO7UXKWGlSMRkHbpwfUyNwvffk82Mp%2FmldWIZvXE8WSm689jnmm32hx%2BwZXwl1UQXWLU%2Fr2%2Bmh7l9txpNtTEOtfLe99pO6pAlbeyQsycakbRYiVnAHtr1PlPtN0lDeX0kRiJPvrt1wR6uOAS8uLrc%2F9iLRbFvPpH7xF1CXhFRFaA7ycZUl7DJgJYuLDEC5h4s7%2Fq87&X-Amz-Signature=6b69ed73c830400ee35206f58410ec40a7a90f12b3f00cf1c1c0d7ae7c47d103&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

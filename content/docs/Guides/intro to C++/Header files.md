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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OX5NOKW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDjg6wGG4jdZXPEd1dmOk7dTiGARyzcdzkYJwZFokInZAIgQGbxuhLbCM%2Bj%2BVTSzHkuZ%2BEWiwTyzWutXUz9JZOebtMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfjvZMRnu2jvSsZkCrcAyUR%2F5xllsS5BO1qlKJYuVCMl2LJBVsXougQ8lq3w39M0aDvHwEEF5Zk3ODEZPQwIWLNJY0r4STMxrS83QuAulKtZBSMSQf%2B1vcFkFoPa6PiQF%2Blz6HfR0tD5wyJ%2BxIJk4G9Tv%2FFblU16n9%2ByKNPxlf9sUDbL3XizRZSmuUsB084CkOSylf1S73YMBXkYDtc3McOIh6AJv2iAf%2B5xLMC0XefrXF3e0RiNJuvsbYnXBUHIO2wCpBGulHgqJT0gAr%2BtPNxq6ehXUGgn1%2FLH9vquH5e%2FUk%2BQUccrWtdnC%2F9Y9LFLKO2FK2oyDkK0XUjlzzYUu4okNLfUXM0w93sfYB%2BaYsLxmNtcwHsmjn%2FC7qkHgQMal8P5RyxQtAbglCLJoawN5vB5o018g1Fl%2B2H6xNq9hSxeNIxgQBogvcxbWhV0KvU%2BTyjjMSj6cUbm%2BXUEfOSSXa6SqDFKY6CUZzZ%2FIg%2FT82KvdqopE7LhXarGy9rMHhGQUxmLxkweEvVg%2BJRbHPcLj960ijwLUh0iZi1c945%2BKooOs3QV51f88Mlqtnf9Cj9Tq3OFzEM98OhVK3xh8vjOsn%2FHyBxkWCBYdQAgBmAQtsJdxEXrnH1CiKfF5W9sdf2Wai%2BGvk1GYybSDvjMK3Ip8IGOqUB1dQxLI3cjE4wpMuWzHztbmvH7A8XqLS2qh70nIhDnWpxP0z3gy5UawIWcv7g9fzt%2FdrwLoxcdWlF6vbVdysOQJLw0OG4%2FGk8p%2F%2BpQQ51S%2FY8ySgmUV3HHk4bZ33af1yJx%2BtYqoQwPaaC1sJA2yXCxtV8jqylluIh50NjQKukWSD0ZNpPgNHjpiN7F0shpMDfpAfUS2ZJlPWoEynaD89eWpJoS6DU&X-Amz-Signature=0c96f234b29cad8e919fe56b4d00b713204fe1eda83e334bb291cc6c0c86df7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

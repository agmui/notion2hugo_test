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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOCETHQE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5lGb3u5oY8qY%2BVWvd8w7XEGOjGFptMMyhkzIaqDc%2F8gIgGB2TegPr2c0wg2LL1mKtmtdvQCU6beNzKkFz6nWmjd4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKB1h36jwr3reFgXircA9q3ArPA%2BBVaLUYN8qgkbaO0LgBa4DWXjdHlfeR63d%2FaHIPD9ThJLuFFSTwDWvbemRFf12otiTxzdrfJ56%2FX5N3ui9GlW2w34Z4eOvAB40G%2Bbcpr7kgWqNy5%2Flw6pN3xGHzXgRR0O4vC3jbicWE74e7pWgt5JlrzzsY%2BoL%2FiEHr7wCRT%2BKQ9B%2F%2BZ5z3wQtBwaxQkSn0keQIGHSF%2FdYSfnkxUyNIV1CvIj7MBGhO70WfjYnH3LBB8Pr8Ea7lX9NkiTm8Z0ottt3yCz%2FpImF4X4cZcCjJyF%2FZItlsmIpaxA7DVOeFqfAs5HyzUhs8%2B0HJCPTOigke5s4O1p3dCrCbyHWBOuB7Cy0uzV%2FdIhsWheDFWkFIyKAi9dviHqBAvXRuMm1ZHDhvK9wiUiKgpoynT%2B%2Bh0Z7iBGwL4Nl%2FXc%2F4krb8kcvqps1a%2BPQSd70Mez%2FYl1d3sbvS%2B0b9wZzYi%2BUxYMLzVoq46uo04K8PEmSJtkc34eOuyoapHts7ddFS2UAn5nu3%2BjDfCt72ubm%2F%2BQx9C8tIQYIy%2Fs0MeYhYNryiDbeUGkHCZQoECod6qLaMH9JZ85%2F1%2FBJbEYLF3slwkW%2B4LBrpa6oJYe6hd%2BUkA%2FUOfSXmC7cRwp2Ck6%2BbUaF%2BYMLfByr4GOqUBLnzzbTTs5YCpcqq5q8Wymzht9UKGj2SPjUx6y00FJhRnkxtnofYR8tNWpOW%2FR65v%2F5L4IXTCsZnh1TJgo1BvcHJTEXkRQOTyL57I68ja%2BvSweteMCS174NNhlu4iFwMOoBritJv4NnAg%2BzYOUrQtjmbLfW4owrW7w5%2BuVIzOfrB9B68xtRcI7jSUKM4A3Ier4WzLNWFEyEOrKJdXNyIiZsJ0tuwW&X-Amz-Signature=669bb1f700dbd23b093afa317203bd436d47d8989c91c1b32db927349a4d3a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

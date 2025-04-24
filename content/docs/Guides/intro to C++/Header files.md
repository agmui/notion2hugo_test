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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WBXHXE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAvOVz6xpAd3%2B4zc4zimOLNBp3XHAFaeQsJfLCAS4lMcAiAkpAPHvURb2aV8rerMmWkvPbFRjJbznUDGE2IxQaQIxSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFx%2FP%2FCqS4%2FHTpOIvKtwDyeQzbET5BhgAqensbP1hqLQZ4WTazIUOecjJT0n81DTMclcO10kNthSAldfglaXidBkmLAU6emst1mUndSh7dGULcAw9TLtFxhcpF2X8%2BUBnFQT%2BEg1ar%2FuXZGzrJCgSNDKEwgAIMymBqipVNMKD6s1s%2BMVni60VmyR5r22zbhwRfGxae%2BfJfJHgya0KX53hVcOns%2BTVAX%2B%2FzxCPm3Sx%2BY7dVwovfoOHBWqh8s8L1IrvAC7NajKXc7qEGsL5mag3IzkX7%2BXTiQMsYUymUyHJsbjdwBbe8Gz5c%2F9no51GswlX1QTem6M4OA9lQUDEJeWwdPCSILNQ2rJpGIWud36PF633Wxgr8znKBlsA21zib0tIMgQjDftuO2r%2FnWRjdcA5uy7uVvEGIFIdqcdLIHoryHgJDCwLT%2BKXqnmTPYof6XROi9nw0JwhSnHzOjLqJcyLJBspzTl6vNRMlz%2FT48U9aNd6sly2F6x8%2BJCHCkjXcT7cSjESzHOIe390Oolscmb7omIVkUVBHBmRX%2FVOL5d0r%2BBHXkiOXch5zON3wI9Ihptrl2ouQaQtrdvTq5sId9AhEjeRK8mpTS8OSZUjryoDzxaMoRc28rqun5KqiOZsp8v2Xa9txD6CalENx5wwqLCmwAY6pgHleAxixSa8qbxPwhDh2NwL%2FA2dhgMQToJomMZal2b6qAY9mzPhimImdr3p1QFwEDV7AB%2FbR8zz5Zqnmt0C41JqoFBwAWtSqciPArP05Wsbb3Hx8JITyAgbKjZDVoU0XFD8%2BMHRJTHmt2ABxTM5HWY4ZAFCLwKdyhDl0Wmeg6giXtSZOfckcXatu3k1efcioCTh8dB66pqUWxXRGceZFynSML9gp%2Bgk&X-Amz-Signature=584ad79eda82974ac5c47228e661d0e5fbaa3687ee7395d91ad1c394bcb3d601&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

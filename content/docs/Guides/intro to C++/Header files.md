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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQGGVEN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFklixBM0ifIuOlpov%2BYEQmknr%2BZ9gfnkAphOr7qzSpUAiEAx2NJeyM4q0ejJdVYmatyuWY1PlBeG46upGxZOUvn5UIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSprie28PY3uTSymSrcA8totPBshF7tC4%2Bc2XFenecQ%2FU3vaU7dw5sqsB4ah9FbXL1kF9THb73mjuYDJuIL021OmPEzhQEmNt%2BeamVwL1t85ARzey8FRbOLH6EuNQtApF8fDRHLB%2FBQ4iOpxgkKd9fVrPK37fT6D3lh42PkRAkvYRoT%2B%2BWwvcNU2pfP3GqomgQJRLuIyaefZyr1bGTBpED5JF%2Bca%2BLyxAfXk1MF3HN8EluB2enQreiZYZDJyH3Eeb8pdjtOpfwTTzGz8Gw%2BP%2BQxpk6qWgxd%2FBOxp%2FbHz7CJ62IWMjnRJQPM4tApsb78%2BZKpN2h1ORtKV84vYN%2BUfv7xia3GtfgoUcPhGHxnOw%2BDOzHYqE19IOKF%2BBZ%2Fv7okJBVAdCpa05SbtbLMjVPd%2FnsCyg3W8fP5K8m3Ifrjf8%2FiWOr3Da%2Bmq4Yo5NSpq8uHiLvCrNxrQzuRejssFg9Buo%2FygdK5N57QZvaGwmykezmja8Uq69mGVskH1XdXRgkts1RT7v%2BgxDmQNVk2yc3zHq6I4%2F02eQX7K8fcoTSVoDM9OtQuwxgMeU4Mw1BvkChUY95n0iddQRz9CEABxK2GPtEX0rnA6QQicqq2A6VNXmNs7Bs614rE5y3RWZz9geUzeWxPNJttxuk8iVJ2MN7plcMGOqUB7CJaLbwUFUoy3p3KzKy%2F9oiDZK6%2Fv9tDOoRhvenkgXdb074cQ530AGlxOP1Cz%2Bq8uhpp1pEKXnhpZL9goTLkdgE6YL0gSE3JUYxwURBoTyn%2FP%2BfJcdw7rnQDONbnCOPCLNde7pJIo0kfSfy2K8sMsV24iXOyg3V7mMYb3cDLPzD%2BSzfUySE0wlRY3zaLo2SHrhFoj%2BZzcZBlDzHvIMeeNgz96bYn&X-Amz-Signature=f3bb31c1b632e69b31de7db13c13246c9e902cc6a3088f483bcc57f44703a13e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

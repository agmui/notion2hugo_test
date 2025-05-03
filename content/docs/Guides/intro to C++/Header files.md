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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5CUPZV%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDAXxrXgEf9cOooYf3H%2B4I8glrZ9WkUWJdAHXzDwT4f2QIgOkRApVFr16pe%2Be68wGa%2Bhu367QJ69V7O6ZW0j%2F2dLIoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiBgCtGHdJOuZS%2B8CrcAx%2FfZn6clbUJVm1XRSEAKRW86WfmkH7qryOBlGpzvBvamg3KiJCpbDHLNNlmYPUUQcrYKjaRsGJVrr8iDWiwXJzRx%2Bas6L8KZnzQ5ZmeU6RBHyrfd%2BfZsNZDdLr%2BTjykggT6mDiZ%2BLlKQY534Q582XxN99ZOgyx3wIGz84Ijf14D9lL7KEqVK%2B6hiwuw22O44wLZ1dSQgqH6Fcu7JHtePOyPd6wY7UJwkXKlY5OamI2a%2Bmr5GCi3xUcQjRfm%2F5Tcrd8Sb017DLNK%2B0prjsYMzxiITV5NMg0DRMUr5rM5MY%2FRP9foMJHD8MwlUMgLGJiayn%2F1D%2FWOAuhjCXPylk%2BKpn6ISJOi9OH9bUSWBAEZiEZRS0AmvmMmvmTzX7hg7nGGibJyhedmziJtDSn2D5k2cAu5rfGIOZP2S52KGggbTUln1mjodo2OwDjduO7v%2BeyJx2u1Pdl2%2BBdk2PPPn74zZMDlJm7A10xZdNpH89BC9D6N2PiS6Zgwg%2FAOzgQNBZbYKwW0C9r4BRhl3KmKgZoCGYmUVGIKl0fWmQXvpvVsS4j4FqkAT58%2BK4CyGnMM6YZBXjrffHKP0Xb2zTZE7ryKzAAYLG1KPZ9AuwXPscFzKQT3C79ZNT3QtFZpvGPFMIq618AGOqUBeGFQdN0Tr7VoHh8MZtc3N9jLWOp9LJICEAr2BE0Tb0tT5dm3TF%2Bkbi5mrUA547n5IUjGdHmIE%2F%2F4WqtZsiRoLJ54liddVvxL61NIuGu6VH50GfMcApPGlZCInFdCXF2okNRL4PYB3HAoCp9uIWxrgFyJKevm7HuQyZsn8ELKxql3ITq2rKHdoRqp6LDy0TJZPIcEcgxBd070rMelr%2FTud%2F%2BizIxy&X-Amz-Signature=e91cd1835e00d5dfbec7c72b7f66f7d016cb68967918343f265903a7e290864f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

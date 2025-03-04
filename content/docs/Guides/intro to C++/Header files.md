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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6L7MHZJ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLXkeL20JckJ7Lhs%2Bq%2BNgCBTfbHpxeFlhF5lvJzJZXcQIhAKfs3bzdCJVoynWRG1w6F33YAA%2BGzOTTXIJKz7dMmS3%2FKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYqgUZgaCRkJHO5wcq3AMrC2anKyX0F2DEZC%2FnFr4GBQYrMzrd2ZZaDPDQ0xsceGw0CFJhZkreZMqQ%2FFqNNmdynlb%2BzDxqYA4NsIPxYLF624Q2SucStiMhkNiLgRqozlkVoQsCjpzOvffRlosBAorhXUMyXk4WMPb2AvZlrjwqof1Z842%2B9s7k2OGhFCgEaxhX4%2BMFD1kBMEKrz8VyeUaFwTuRBRNHgG1VGMAeer6YxVca%2Bs5SzrlSX5nQ92mBBU7qcs6NcxD4d%2BYuj7kuVz16hxha%2BdQ5ZLMffSlesC1wM07ah5XMsdftqvY6Vcn62I0uLnMtWmmAODMKszKPkPgE2zssarvBAprW2BZ%2BQjRxeFMOQ0Fm9L7rfathQPscNsWRHGYXd%2FNfI9m%2Fm2fA6HfRsJonr6fx6cc%2BBA13hfmJtrYLuEp%2BhyJFDB2fc8DS1w9VesnI7KsnUPPWfHSfDyZIAe9OwBWQyNr26tBA6Z5dVkPxZS0pvBiJWM%2F1iMdYvYQ5kNrhbx5jnXRzu6OXw3JurgufSJ%2BGni%2BXqmO1l74wQxrmlUDJ%2FxRy35CD0DtUH4Rwt7tqXJJHMPHgAqKrOM6ygHYaCKHmVBkbQfG0H9saVuKxt8Q3MRk%2FP4rRu7DBqB7lSk1Quc%2Bj1Yih8DDGpJu%2BBjqkAQKkC5YsFUI6cbURDQlilN282slImvp0BqgYYVPZoBYsZmuBcs4x1GYU7BSswMucbg%2F9CjVO1l0%2FV4qDzH9etojAOJKmnXfyNDGwwqevrJPfmQIh658wVmhMbeM%2FJ3pQsyOYRaHp5VbNr2l2HVsMzLTO%2FOvJmkcHoCQ7n1cCsCGRNIgeOZo19GM9OiIW1xothjh0mzJaxovz92SQKUmlQE5xi1gP&X-Amz-Signature=e26e11cbc14e457480c7fb142f0d52f12dfa3f2351e2e28903713cc7301f20d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

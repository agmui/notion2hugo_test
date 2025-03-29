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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ZDWM2S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJFMEMCH0zShf4DmRQSd%2BjZZZgnqjWTMJOGHoQlUdSyWYVUzKQCIBErblOa6%2B8OHHcmsbCo%2B1asUwRK0210nN3ALuoAC9JiKv8DCHgQABoMNjM3NDIzMTgzODA1Igz%2BLv2ZSML0iqwrD90q3AOLYbkNFrZOTcrSjFZPRwSyXzQlyG%2FogEJQmj2FhBbEIFpZGUNZtCMK2ZIKUah12vkH9RHD8SsEWkjCWzlr91YyYi2toaXgUoJlMX20NxeTT8ck0deod24RzEqztWibZR9T8XE9cLD1xXS5AHdYhs%2FzFZNoaa8SpLPwcNGT%2FSxGr4oSjKAkaPg1AKcQLO%2F05M6DvcBJSCNPd6pLjBpnvt39RLTmRlqkrRqHikyQIVlo8bmlnWylz9yE2ngbb93z%2BnUOX5tP0%2B4pf9eDSirHrg5czSDb8zaJmTbjZ1MMk2w7kLymHWJLqDZrZJ8JqHIYYxDFAzFPB9v6wqhf4YW0q1aidMWT2BNk4Sxx7Mf7hioGRhW6Yyon0a8%2FeGAxB%2Fl7COK1n%2F2W%2FxfXwaCFSXpTg3ILoXdI%2FcyMV5N2Dq56RTX63p8fgKhluZTxLd4kWzdg%2FnwVZoSbiZG3vkOfdUWe5Hx4VzQH1NXweM5snN4TtBXbngjrR4T8GQvSUstoF2dmHVLv82VuF6VxHoI%2F%2BUWeBpOqB7uWOoS3AigQGo9OdsbLmsHKNAHYbLCCbg4OaJVaegvTkrbqq7UUS5h2v9ezAnbijp4iadVOMoX9Y7%2BkuNwzknwfgf4ME1giTTIi3DDDn6C%2FBjqnAdFNe0sEib9VcHdwH7bv9It7L2Z6TTvoZQ8wZgSmbreSBS6PpbG0MtUh1aV4qPoisPs4COB0RdVPw7ILeUv1pmFJjorUwyBlnOchcoMnbrZzW33lIG%2FK1pdoP75mXDcS%2BAmeYa%2B3gvZ7ikfnCsIu6oDqAOsXT3qO49kjHJpa7Z9CgtdhpV%2BFWEnOyRWFlqYB6cWCv3ApHVMpOe0kkBhVuDnzLKvY4saC&X-Amz-Signature=697df2d7d6468fb14d69158209c0b8f66b8262bf7d2043ad1bdc5ba68620d211&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

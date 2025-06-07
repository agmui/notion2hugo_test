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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTVOHIDE%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuWm7IPL5x0Lug1GEWkQaWHY4NOwjYe60qrZwfD60J7AiEAlsO%2FoKexcdlRMZ4epLDSKq5oDAVyf3cUIobyrUlLEVYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDD%2FBysTMCaENemQ%2B5SrcAzXxwBzNO1kJMrdSltOmEi1MnnsNB4FYKu5m433%2BhaMY80q7f8y%2F%2BrVzUoA20520NuX7HtU7unWand1LBXOzYkx6X3qNTPDsrwbreCdPfhmqa0xpUHmXbxI30vIFdRlKZK5NIKNGhL2ZaA8PHwId%2B7s%2FAa7Qyo5zViz7CXgFxinELveRp0TxZF6FeReGR53Va4ZrVr%2B8q1jCyIZHymFkIjPwKTuvAclAk6Zqq9RZRnpRUTK2oFSCQa9Kjw63zJEI7lXKbdp6MAOkKby%2FrWngWr77X201VWrIGzJsvWNOlCQZax6ldPmWzc%2B3ra3MIdJcz%2Bw9GSwl8QTZMn%2Bj57R4eJa0qH1sZvIhEUBStZGICvAz2oodzX4uLdk%2FdbKZxk4SQWhVLZnKhQvkTqfkHE8sF0Dcz8%2BQfcCB1pfDk28c6rX%2B51PVC50s4m5ELJBwfx6kYHf1lm83F%2F0XI3maUHYoecyK5SIqzD5hcBpb6MQJzdxAsHV0EFbU8P3CmS6V4sKMdHQtAxi5UiYiIxFXJC6aMFweFqe4OnDu4i%2F8laPTFLE8uobjtnHBmJHbvhOxXMGLbZkIeDKtUi9sA6%2Br%2FafNj8k4h9bUpVsYJJeCKSunQXWedB6kckgyniV60ynkMNy3j8IGOqUBEzjXKgksd5soPiC4izUnvSRyefRbrZ%2BvtbsIHNOLMo0L6e%2BGmqXFCbkGynCtz7JEc08mUBlcEEfmU%2BgQp7G3BlXEZQGa3gX40H7NHsFDsmITfit65NUW2FcgsUwCpqPp0Ke%2FKu0JiBadjfYJnsrdRVYeit1x7gMni7I1RICgkD%2BJBIsUPk%2FWGLd499qiVWXZSWrUBViogMJsLp231sRQ5NxepbHM&X-Amz-Signature=1112325b01effab5130f545d5a0aae04cb26fac47d9c80bc88a6792a842c1e27&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

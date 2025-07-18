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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHOHUBNU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDUyef5n7IqKLbq2XwyZPs3vkObNlBFzszZk%2FHuXlCf8AiEAv9%2FowNM1%2BjEt3ZpBZFMZ722Lz%2BzTnRyp0A9DeFIoPIUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKl7Vk60VS%2Fiy7S%2BwyrcA7veFjl90R5j8VM55cdQcaJUpt4Tb5eFPw2U0%2FY%2FWbsvKjHzXkkmaZXmAilHU3o58j9ZdptLbvfgy32M1n1Vy9h9kZLDZhRxEzcfVmrNCL0DOllSSGVxZF6o8jC6iwe0WQGOHn%2FH1dT0xeGJREDlPc4CBBDCZNYwwCoK6A%2BNL6lt3iqDJVcx2DuZXGOVih1MG%2BBhDw%2BEsMNngOq2C3XoPTMKGzSgCRE4k%2BqoEiBotHNe5Uwn%2BRMlyI6k29%2BvwRzKGEkyUWMPg5DErK6UY4SJxpK2YeQeC2MSj%2B8qT8rPVm%2BLsHMaFB%2BGDpmcr7YrFpY%2FhroyKw3tQFkcg7lGw3gIAKS2H8ljO0wR7SGFRTb2kSWxUYgCnOuwb9clWuHMUn8GNSUOB7R2KrLo7OK5OmBg4X8JDtukXFW2ej7LpWlCfX%2B9QjMH9GC1m87XByU8bN%2FfW6UTtWVb3fWD%2Bz9IorYJ8c52OxbGbffdWNiYFL8VTPddlt3weGDp1ZfHfTgqtQmQs0B1ugelsyGQworY0v5xcaxgYV9o7gpyKiwrL2nVytWxYe%2Fpw7gi1ri6p7gbdMljDRu29VJ%2FmOiHP3ebV1lJqTQwokZaHncUojvqb692kAuFnlWCirgow40%2FtMeaMPL65cMGOqUBQI1Xewg921F848JoDlw3c93Y9mQmT1PDIsZ6QRc9taURl7vXbD7oZa77PaHJUGy%2BxJRnVJ0ONc27lPTmBHi9RsHXa4AVlMgie%2BDEE2P2ccnJnwqJkJTIFI9XXqB3ut71aD8cPVcseHwwEm90wtgko3KQVEmZFxi5%2B9%2BlB2GWW34KotIaQyKhiOUNnLGzx%2F9CPtXc5FDew7Zj%2FcErFumAuq0I5%2Bay&X-Amz-Signature=ce3fb2ab9bf3bdfc4581a9f73e30bd929845d5f6c91b8666eca8dbee6e01b928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

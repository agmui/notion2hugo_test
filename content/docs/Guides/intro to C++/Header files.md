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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7VWMC2N%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEV%2FKLAvHDyluf5XgLIxGpJJAr8ZVepMNSJy4e0kUsinAiEA%2FJHeO5vepQKSL9Po5w%2Bnfaq8HvmLHxpStakM%2BKofbikq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAyt7nexUeXgXMgrWCrcA3FHN7aX6d4koFzd3qc%2F7FyCNGkxF4RKiIFW%2BKJxrQ7%2FpjB7K4PZSBB7zkNe%2BfxZ%2Ffi1A5exBC4w4E%2FDFI7br4V5qHLx%2F1VirBlN19i4cjyiqTLdIHffqk6Wu2dMtCiq4jtS4%2BnNvwrjJf7gIcvI72Q7qtVm983pghUMZquewjM6qlH0jVPa8w8Re1d%2Fe6sujw0RisuWaYVdDJQeQaZadGz%2F4sivts7Won4gmYEWohZYX5fclHdO%2BEsk3jV4NlCUmSIHRR63QDDw2QWVc3b4ggiXOKUGdBExZXj%2BDPeIh9G0ph4PnBkywQb3oqEdW3R%2FDaZ207HSzI5Gy0wY2oS2N9uMz%2Fn1FHIDDyulBsJBxc%2FZMdLPbqsC3Xgjs5CL2fvz5tmwC%2B%2BSYBcQmEFEuucNxnNd89zTCjmRtTqpodMBabttgaD2%2BpvmKT2V3V37Es%2F1JwfnXdHtoA4kExt8r0qSfCJ1jDnnHNaQ%2FTv2vdtE2WWep0tYGaBV9LzyzFnFk%2FZv80IDYW5wqMJcqT0nJUWaqvcZkaxOV%2BppTOJ3Z%2BV1VwIzlQMbIXDz1RpIDZRXgk0c4AhPfLgo4jQPUfiTI%2FcPBtMxyk9R3HiLCko5sHvaO0KbD%2F8YGnk1ouJ8XJXGMOKAusQGOqUB2Ra7IIict1ktRHzHuaKBNU%2F%2F8Kd7x7yyla%2BH47JkVwD8qesoypYOIPMUedslRvegGdBqDn5tqtgIaLOR3S3hLVA25ic6vEL9Zw%2FLWf6BWqBJ6g75k72q8JUmoX%2FL4gvxIWgpUbKrrYHsIpMGO0BEy06ZZwEpQBsLYcdJ64Crhfz2DwIqnuewEugtdQfAi%2F4oTToZgLLJd9UP5lHWBCzVDrWoOFXt&X-Amz-Signature=29a0f68335429565ce958c03f923bc1987bc698653b8f18242b93dd87daeb4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

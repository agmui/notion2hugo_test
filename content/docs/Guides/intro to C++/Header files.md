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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636QWDJGV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ4X%2FXD41PGCY1XZ%2FiDeC06tsleX8uTBDHuXCjQpy0LwIgMb5lyvk62iNFl6WqjPobaV836jrRtkLPIXIRw4nwmPAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGovD2MVWc0hhR9TircA490%2FwBuEWjYNIoO2GupOuNyYSnxkA2l7VbxT%2FtbN5IGnqcoT6n4vWZH%2BTgYfUoW8GVYMrrUr61hFLUP4fXwPcmz%2FrbF10r%2B%2Ft8t9nDEGFbdEosfvnIb8SdwBpHr5e6QQW5XX7dYgDjjckKAkm20RDdFREwoJFbILlHMUBLULx3NXjmLwUU8yvy%2FV4U2sfU9irO1%2F9P5nhKrT5bafNTpef6xsi%2BEcrlTPycfzOhfekGwVzyGSB%2FP2gZFT%2FPnFTOrzwPeozEgvZQs%2FGy7SYp9cR8wc7eMtnV%2FUdKhVwlERFaNQw9IboajMOfSDg5cqqkkPSw5WKeysJS%2Fl10w%2FPszteIzH9n9TNcxb2dOB0SjKJjetZXwK62geRcBDCJbmVaREQgsOHheED9VzgxZUMTZ5dXs1r9DsErR8huwA8xDOJTNw6clW2Wr3QWXpdnPQQlI%2FfpMHJxz01hFibnV2l43s5qMg5BqKIB74k0w4%2Bysx3%2FHdFY%2FWwE7d5Sh1soqQLgq8sbIQ7Rj%2F5pF4%2Fv60mWMPCtPtN5Rk5EAyErLoNMCEH5DCzYJPkXcUcWBdCiqNncbrNFB2BrWmEgv7bhua3R3cjqS4SKrRqmJd%2F2Dw9uMK96q20LbhzNMU7uAdfA8MM2KisMGOqUBvqDl3prwRhcMAmqfn7c3zFQex1u4e683LGD%2BWtc6DAY0MhjSAAMYtiD8YUIGtRaZLPuuixpHYYwKxcpmLbFDpY%2FazytE4LRCypv6VptKHcCDWrwCdD5mvQgo8VO9DPgtEmoviZzFjLEwchLu0B6QgTy5GPlbqfGuXZ4Se2hk4OJZ%2BMIHBTRVzNA1DguL8obNEAMCdyiy4Q%2FvTn4lqgEtOZO7y%2Fyf&X-Amz-Signature=99124bfa4761133cdfaf5fe8f4d86a026478b9a22f59121a2ac0f1490c129cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

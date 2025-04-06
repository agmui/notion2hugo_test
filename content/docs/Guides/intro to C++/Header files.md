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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YJDTYM%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZcJbGbC7UAFJa%2BeNHPf381OT6%2FfIuGMKy1Qu%2BJntBjAiEAuV4%2BDP5XCXMEbrnEpHgYwEfo5X2mtHXkj30XZRwfENIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGqAtcncrW2hIKvGUyrcA0zpfsnEdhAw4ilMdbtvD4Zt8DVQDKwEHddBMvrnQmLF8jJKBRrwjh%2FrQPALiI48zCtpNNs5Oez6wAMqLXcVdnn3BxDBjuP54f%2FtRVOs%2F7wCURrWNal0N4SFYDq7%2F8HBYfoJZ%2FKMjbRdYOT9f9Yd189boHdyEKAwSDzPexluwEBrHNZ%2FWJCkjrr3j2XNrfjFS4leCMI7384JnrJe%2FQTADXmVXRw0Bej815WI8pMWvFnl1js0xRMVi7%2BQLRSVdWSY559SGUOqeKkP2d%2Ft1lEMFfMZZzzQjm6XIFvumGF3A%2F0xYKjDpWlhYU0oZBg8zO2TaNsyDkEySIAjfy04YaBlNRtDkLjQJN0e54zHFJDLEbG3XwcCPLXSylHr91bx3SLmzo9Glg5b6qf3tMzvqk9bzDW0TodDp9aWMhihDoC2m1K1XMqnWWF1Rcvo02aub82%2F8uddNpkRGzfT2iELdI1d8AJbfdG9k%2Fh%2FZPnRj3n27rLV2z7umIGXqRI7wQLCKPYxYjVO5ka6GikHPEgLMVhPO431A6wIl4rzithSk%2Fj9a%2BxwRY08kbH91UNr4LqwQ5T4k1qtNF6VmqinHnhy3OZnik%2FHoihiGs7PzvEj0xXyQhyF%2B0t6UvtC0jwL8yHWMOXwxr8GOqUBKt%2BOpLnbvCBcSTkN4JSQ%2B64Ocp1SgOI5xRHWnKaQMgNJ%2B%2F%2BhQrjX%2FhPJ04zDmTRcjBGjnAJCL5QFOQziMM1SRSdlT8PqfdocZ%2FJgS%2FesOtRmRRV%2FE0KGIB0eQmyd1bbE%2FEbBkpqQnA3Ck9y8MK%2Fyk5JGf2f4Z%2FaZ1OhoiTcRSTBOl4YvWznHJIL5vg%2Bs%2BeOx5RL1ds2W%2BmTCPOVbXJnvKzSEiO73&X-Amz-Signature=c294acd07d3306e6aa1a785dd862b443d3831b6f133f9e688c117516f9021d71&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

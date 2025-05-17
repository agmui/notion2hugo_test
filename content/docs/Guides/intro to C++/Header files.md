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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NJXJGWY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBi9by4BxfNrZfCHD%2BUCGeLa4vuVTElOfV5ZQonMvtUDAiBQ3Yu7izYUiMRuBJakn4xT3YmeZ027nZRWhawL8tLoLyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMQFeg9FLelPkRUpBeKtwDh2tlHJJMZatojDfJBb9%2BtXNyzAIjM2tEgtNTBN%2BkXrj9Rr777dbADLBJ%2B2%2ByMYO8ZCOKjVaM2qPvUtlK%2FY3YLBYpBypn3LOxHwbLr5VNPRZJw3VQEaMoX1YMSrJLtxJJIjZk3CaOiEUk%2Bpa8drHAG29gOcnGg%2FzpDEq2l4hBP%2FRxWpvoZTBPrd8xppLY7klLP%2BJlkBM%2Fk6KvuZtVLHfOcpwpPXCPheHulM5ydejtUWfBUMe99S%2FNnDnbM5gjGi2xPYnKaMVcyDLN%2B8HT1LxGvTEcruA6f2CYnxuwLochGB%2B3Qn0FOoLH4r2oui5%2BuBxhQJL1FYoL%2B3%2FpvjtsC67CaaCNELBfVgf2BIlqkG6lRvEmKexDINRsAq%2BRVmofKNV3%2Fb6mCg9H98rYRbV%2BLiTAede%2BBpj4EItr%2BLAwG27XpIxhlzooFjQBtJMy9%2FC8lQ1r%2FQDDYvweEVI1%2FiWzWmduPbLyaBkqmxwtAHH0%2Fk1%2FLr232TFTeDIoYLpC3zOujPs7AX13YjXpo0sfEpTRRVu06H%2BpUObo5o5%2FIcR32aqFPBc%2FD16C8IUD3%2Bx8Yo7Mc%2FVD1v4AwOV5YAjJyVUMKhQEwjgruJA5gc5l6xu0YvbPmuRo4a75kk0qbv%2B1nzcw%2F%2BCgwQY6pgFyTt71jj0T8hxDSxRldIIIk7zwY%2B%2BKnFr%2BKGoPukfZzZ7eXiBqQ2l3vdIyGrd%2BjtGR0Fum%2Bg2A9EGoSLWuUE5MsQQztZQ7qqnosvhlOYLi%2BMIZHeZGeE7d7%2BoZVMjl8U%2BPAmcLN7ggRWl1KUD68KgeaiAQjYJxKjQ47yXLUoy%2FU2zuEJFFRV1Q4jc9CGn1lFUglJYUPlLDYX3fHn%2BjJc0hrtZmz0t4&X-Amz-Signature=dc46eae4391107cf26c823163a1a5e0cfa41a06f9e4c3849203f5bd23659f886&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPEQEYK3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDF6zu3kp8fjLoqVSMZjg0VlNvWeT0Kgm6da7FKqF9MCAIgeAitJrhJ9Gvrl9x1MWpKgaCj9%2B%2BBSrwoIU%2FJQpKW6I8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsrxuglHAZl7CjYNyrcAwGVNgpGFTHIJb5hfpmz3aOSEQ9auVs%2FNlaxKyVu9jHb3atsmzp1kpgvp2Tl8PbkFoKjbZ9Xe9jNRRAEoOVZlq2jo%2BGqc2LifQHYR3YYbgRNrv4hutkKr0%2BNOi5mtAMut15P2IAkkICpn5iXAxb8%2B5l5J%2BmSYuvkdBZEQ0ghsnTiqfO0gJ8V69hOq92oJzD3jH0AFejr9Kdr0MVaTF9HDGboZYj0BGftabAEvmcBvPAdQ9JAyLzMQOwZFidEuot2pQiPMKIguW4LSLpgvPzH5KRva8XgOpAlgr6lruxYzoTwRio669DDcgoLSuRYGduN9bGqMnqB5E1qEmQQPFNKu62hWYu4uAju3o%2FshZ5Fof%2Bdtnwv%2BAnR4vLMxQC4qvay2Jc8KvNPIfbL%2B9bFff4iUDFjC08qqP6T36nFBV1%2F5SXMwZ%2FfeOdQ0w3g9hHusntyinqEh%2B2%2Fpjbv0hWKHyTMzqmMpXZCQtQ7nwDwbc2K6hbLeLm9%2FXLcS5Thx5ER2VnZWOUxrMJUHytgYqQZYRTbK8HMIr%2B%2B9Bu0tYFwPNCqqtfYmnIQggrQ3Mo8cUIOdnlYoId6eMBpc1rm%2BYA93Jh9AskjoPKfGB5um1H%2BpXZ2bqHmCbu1twN8y%2Bw7rkH6MNS97r8GOqUB%2FiOjTyCdPyEYB%2BSSnTSbDFcEYFmTO8v4VVLj8w86MrK94H1cb3ZuplNjAn15bvb%2FYd8VCHdvNvmEToKI0aWu%2FVFdwL2j135Nd%2FIjR1HCs0TIrqnLIsmTimYZbq0Fw6UH28chlBTy1BKrDf%2BU3Ba01lA%2FJ9F47iyRbDj0Id69GTxbcMiHRyNw%2BVd7Ki0ylcPTpH4hOHen4%2BMDiXR6sVC4jJ0iQumn&X-Amz-Signature=17151e0801bb977730479797c9ae6c22b7bbfca9166bccda26ea9f72185547c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

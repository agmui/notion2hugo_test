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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCJKEEK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCzMzCWbrc0qLYDBx%2BvSRxV2MZJyR51N%2FRrGXHd52Ql6gIgYnoO27z91SHFEqlSB%2FKqp43x%2BZemkNdTkXmSqSaEEgoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU3tb8LyLGDLcVtYSrcAxOqGKs1Z8lI2e7nAkbZO9Dci7kv%2Ba%2FcCJfj98rgGgc6FjCdHqfkdQEIoxYLqTh4oLtvVYWdP%2Bxd7Ktf3wqLQanR224mBtSCRHZCM9VCZX8oJWpc2%2B4U3gMjorHLiqnlZdmkwmhUhY9U98h34G%2FxSH6YsVnJ1a67QjmWoJsc3AJI%2By0tMdcWQz7kzzY1Qy8voyJEwpnLIXpuQgxbG7eBi5RiOP3qM9z8GdyOjlby%2FtL6satiNY%2F8scZbm2jyIypLzZ8RXKTi5QUWNy7y6rTEt4M01VYtZnirmst6xFo5xp6%2Bx0qEs1Fffij6ktqd6WCZCf5PZpZMFcE5LveJ9D8WNF6XoNJo%2BYxdb%2F93gpJmfF2jmuj60wjTJR4H%2B5inruSlposYKCsuUKrl2EwsCbFHd9Qx6P72ciW90VPKlEM9pEKhc9vAJXZl42pkHdJyvY%2FzoTs39eNLu80PFym4ecwHgqOSZ3b6x5kNmE7AvHi1zWwglCb%2BCxtzst4WPSpNGg%2BsaagIlbnaZH4A1%2B%2FEksI8HaIr9aC3UBwzXhrb9HNmZ1V1ikHMeTdTKhCa%2FxVJ8jLdLrxF9lRS8g547duELXyFc8Ysx%2BWGQvFuTFopIEYza3GwkoV%2By%2FI651manPAMMPmJur4GOqUBZ%2BACLqpG5EclOmv7J02izNT90c3tAFXkuKDk045KUTOlmH9i3yjNeXVWwaj0tTxk7YHzOyp1Dltnz90posYsDvmjrTloSrA%2FVvWVblhN5GU%2B4G2aAkJ0YdPslRLxwcfxQPrnvjuPqjdptXHGQxkSqcKeBoizYUqKJw2mfMuoT%2BjOkURvUJFrrvkqqIoStMLgYnS9JvDa1sIBfrbI21Fkd4wbNqls&X-Amz-Signature=a62c492d572bc9c819af3add584b8918e3466c44daf8412f80b45412b471d711&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

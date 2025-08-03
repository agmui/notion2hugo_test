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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEVBVB24%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4aKdhFUUq5PnKTI8KqbWqi%2FmeNhFH155zhSId6J%2B26AiB7bBdNkh%2B3SdZ6%2BmtINRl1sCD%2F%2BSqc2TYeT404t9sZrir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMiSfuLwiNAJaZ%2F%2BQSKtwDq0J5URLg3hNCtfhqDm1Q%2BoTzJ3ziLUjU10G4nb5BnkHwbOZ4B6LWLTz1FSioVwFmaCbCK%2Bk3G8mxrJRJs0zCZWNF7MHhROs1Oh5vJf8nj3qAbrpafvZXaGRqKnibmn3p%2Br1aUVOovKhbtQAFyYo7WBOVbiTm6PQSl61C0CwUrtVH372sjxQFda5bGPaxWI0k%2FXXcbNy7Sc1Z7DBux6b40LylhfJbxM8NJkZKUkyPW0upIyLkoKCOFTVQwyVZfIUEeZI1FsTK6aVMw3EacTioCXuiUEh0ISphlDW7NqBbLlCpqIAg4GEug1P1dyglPdBTDdiY3lz8SK9J8tkEMMUQXshMZNLIXisrZELXijqqGe4FB5UoS9k%2BnS29wEwI4YoW8W1FX6e04ui20wiLuKJdFNfYeBwwgK1RSE1lQsSPhIACv%2Fino5g9MukQRmaQZ9h79Q5ttXyMQyU3cMDBw14OBM941y8AWHvC5ENMRObkheiLJnnku8v2e4dc%2BL5ugkWoOJimJviC0uRFzUfOeCP9zZI5ntS%2BZlvC6FuCSO3PF9laYSRbrVl2eEkGroIIMEWhmt8LYyfBp%2B1eVgIod5ZmmbgCahdAq%2FH4PT9omup8dwz0PImpu03z%2BrQqm9swtJ67xAY6pgHJmh3n%2Ft9plQFcigRSnAQHEh3UkzAZ2Oco5MbLpADh3LOph0Ith9xLVISWy7B7hRve1hQYgWEMA0VhmIlRuh7N7%2FDwrMiem%2FXrGCh2L6NBwpZtGLhjlMeX8JEeHc%2FK829r9HgU0gOCnuOSE87dl3cB4Qy3K4SA9orLYu%2BE6XoRDkZ5J8Ry8GIONjI2AcihxQF5tejHA08MW55kSB%2BOAbvHWlvQUb3n&X-Amz-Signature=7d44a9e1653518c231d4baae7a5a08453904c1b6d59ec3298196ed08c68566c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

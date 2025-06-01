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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HQVFPO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGYdFvmTgoLA6B52F0Htn%2ByLWyR0eQ5K4BmflFDI8JKxAiEAxIsDgtA2rV5uO3D1VYWHlxLlGeEQYh4HGnw0KsRgn9UqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWP5Lq0M468YGV%2FFyrcA39fY2vc5NpL%2FrIsjTp%2Bj6adt9B8UE46pD5eMvPOfEeA%2BaUNhLi%2FK29rg34sC0xEWCOwvg1S8hUmkBKwHQX9cOSb8crSc577igBZeOGmmfU6JdTRdZBg%2FyS6iKPfePTVS3eFNNno2ufqlz82wFuUsnKGgmCtwvh2wfDJLzP2ECIa%2FnUdmoqOhs4bIoqjd93ll0vxgIO5CU18Qqbl5OKtvi%2BEAk2MQGmUVP2kX7XujswXs8gu%2FdweMfzJdLurXQryr4oz23f6tPlY9pED%2FeVxeCy8ekOLVfac53AHCUHg7L2bTLphULgEF6ZYEYqFEkXY7mk7YbD2PIEtFNjtVMlcLnNzeGTTFowIpIxS%2Bf1VcY7SesPITE7JeczmXgY49Ykb2kID7EYKL25HEhwqy6bMktHZKm1FZqnurq0kNXqNWVYhXDcn8gEA9j0jjz4IO3OKY2gd1SKPMOYGAyNaZz62U%2BfTWZAeXvH2AKzdVR%2FVal5%2FvxPs6Rnlrbtdqp6pJkDhPRkV08lwjNmq%2Fhw3r%2FofSni7LlxP%2BQvBpmWDcCY5teTCdggjoesjD1sOEQf6t4MQlLk2TyCZlKpUyAAysRwrPa3lPwTPo42j6pjsGnk2pzHFAKx%2FG1Vr1PZEkHyfMPCg7sEGOqUBr7TNGU56gFG%2FjjJ2b2huXtQcnyKfrle3uo1k4XNW28tQBoLUoSFWrk4JXtjk%2Bl1RLIuJZi1mTHZXnqgZTFGUvr8FkutYTa0dwC6DLO5JssozJZOaB9U%2BGPJbToA7tVQGRCA43hkFIYnxgtbJgpLUgUjqjueKlLRJEY7heYOiEoXwq3HTGsRC0D5td8ub%2FeVv%2BH4d2fyFYeG3evjOjXSLk7UtnjLl&X-Amz-Signature=744ce02ab9c5a9de3297da7f7af8ec7ab2bc9cc46509fcd0475ed48a171b34c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

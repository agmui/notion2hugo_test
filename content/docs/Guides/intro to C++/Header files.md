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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMIA6KHJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2%2FJJx28XET74uVGVaBIZycLn8i8DZRbAAd84om6%2Ft0AiEAnwFPAexgf2ZBpFhpzAYAwIswZphJPsm1SSDMXCjoJDMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5jPCZ%2FucsTn92o5SrcA4xgCTiuYmQsNxYlmj%2FCJPBfubKBuu5cjOEp6KMOJdItIGm3PZJrg9bDchNHz4bxC94J4EuxZF6MYvh4oX8OuFocwlZti96pp%2Ftslq5rj7ikZfci%2B3zmxc5DwrE1EmMPzOts6jjaxu5v241gaRHGOfYDOCH8J7TMFUw8VkIbfY2ScYiVytOfeeLULDtVcLwJhEeq9zaQn4TpZP1w09YIIc5DAbEJxs%2BcLIRRDbnn03opwvbqglTv%2BirkhZJKxwB88f3HzniLofx7dq9NjOURlTtufM8466zmvaTsOagQzerM%2BXsgdssqxJCTBJOhBh5HkjY2XWcsyjdZkI62AOdysxXcH%2Bl57vBqgk7FrNhlzI5OcjccHhcv4HUqnI2N%2BBQFtxjgMlWmPKOmtmr5K6cd4THwaV9MT8sT86v9%2Fe%2BikHBui%2B2Q%2Bx63C1%2Bo4z4PaYku7dR%2B4Jrft6NmDwM04GY6IBuDAfuCBR4i8ZGdglI8YaHt9NBdzHPMck1xwVE%2BSh2ry28dJBUi7CpMdWxLMHFTJ8t1rKWHr93324V2%2FB2kqHhW26ieg8iTLiHH3fQT3jM4yMArGgFLnpxxeIPUT6rk2FlgjygHob1CmBngicRFW4jxCvqSjHPgqCUBa0ecMM%2BhjsMGOqUBUY6mbzCS7Kq%2FaMOOQ1wOdtkxXkXm28IQtYrS6BpEKcsD%2FQQr2qGRA5I4JLGxPcjvrbiOxL%2Fi2GGNy27ybJ9YdrdVsGFZupLKBWqhQHZX5b37tvRhd2MvUtP9Fi5mzSW9FkDoL6E5XLLMLZa43h76evyUjHm0AGDlEaaW4omDTDcs5I3bcEk%2FxEzN6OMgzNlM9cklp65qLyw6jXPVPTYF%2BRP7DglY&X-Amz-Signature=07379a4000460741b0d39b16053767fb6fde13b3c6d99cb5180dc35b6e9bf1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

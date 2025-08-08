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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HTB2IPD%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFj69bnEgU9nRUwOSbOkE6OErR8wBJGNf0qtphonjJXXAiEA0ZoYjI56K9cyNyGQMuqplOChZOMb%2BxQdjuVofY76Ka8qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDi1mGBmx5vootG2xircA6Mi%2BYJU7aBVa3LPRqrInAb%2B25vH%2B6rMpK87Agf3WtnX8xBB82K4KqoneCTcyj%2BM3RqpC6E68dUGqM4Z2ZE0X8mTf0vOQ6JeYnzLYq7GmsguRg7PqGRoMtJiMI13Xej%2FeYSvpM%2BhMcvxKzJ0Qgdn%2BU%2BP4hgjSO54QpmsmRUr%2BqQt%2Bvj2ufdST%2BHN%2FO9sJfN3cCbcBdB0WK5Puqu690WzYz41ljayD8kX5MTOAEu7e4U%2Bw7eIgfGkwRk6XotKE9cLPp9OyHFcnAKTv0KGsoztD5xFGXuFOISJfCZPXehHsBKrlnPySNsHYSghmy20SncofQ5s4tYZkWLOm6dyyk%2F9rBn6AUJ8FfMHUl8m7D4gi0GHQLEh54HOja7TtVhNYp8ML7QEBnJKI%2BqZZhbcAjbRyI8gAQfL9LinitHgBgQtvmGOVFN%2F%2B34u5zHa5MTbd%2Fd7glNUrSIlp0EkIdAY3hrU1T8%2FixH%2FZgaaSLw4nGuaBoV0bgWAlWIahsD615%2BkaQCLf%2Bnz4ojSY79qnOrYRGDsEc4bnPJGTL5%2FpGBLMihGp%2BrmVeNyBucpp97eph1zixSAkWtheoPvpzoPKeBy8a71Er99ThtflPpZVkouXGhhUnKfYbbaHeH2ra%2B40e95MLu72cQGOqUBcWoigbT8E9gdzQPlU95DI%2FBP%2B0tsP8G%2Bc7iknBMJF%2Flts%2BZhDpMmW2YpqrQf6lBq4rpMVsJ65nH8zYzi76OjRzf5RqMJ%2FmgoP1C7q3hu6aIWF3iHTks%2Bquatk2a0uyZnbiJCV5Ywhy7jp4bndYey2mwA2wG01keFTkEERigpLRekMHkzAgUySTNSVIeqkZHe1JQVuhVo1Ptd0YgCyf3fnf8GfxGg&X-Amz-Signature=6e34ada60729aeef41bfae0e5462b3a9e8592141036d23c97e4ceaa622109073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

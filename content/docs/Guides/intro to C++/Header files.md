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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G7RF2NF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSY31W2IRuorkBrMmacSfMqV%2B6RdXLDGgKe6o5DiA62AiA1Ie2p6jh%2BuNlVKwKHZ9BnxkYn5A44bmYCQjatGfOr4yr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM1EVLn%2FkvfadsKmhvKtwDvyWBfcFgDPpK242LSFpEVxIXxkeGlS%2FJeqgFnAy%2FcGgnptfu7m7rlwy43I8%2B0WEniFI79jHB6o8Sx3zHcM3n7FIuprJmyK0N6kBbVOpxQVZLTp1u9f%2BvUZ4mTXgX6gxKTWuoH3azaR0HUp%2BVBfuk%2F3zL3vP2wnqjbhQupJeLb3vpRvAFKmqcy3Gk5%2FzU1QJ5BVWXXFyg%2F3scu1v4yjZOtpIQ4cokkSvpJtwZDdfJlz4r47HYfCOGQOGLmQBQSVrB8qmcB7YdH2%2BXDQ330AOE7ET168qinqzCxz0fg3NCgdj8f5tA%2BIzf06dBjTaPf%2Fh1sz87%2F8pvOmDg4yCPEW8YytEnxLnAorxmOM6Xjahvii4dN0Kl3WpFz3I0Ka0Za%2B3%2F%2B%2BPBelLG8OrZwH5M29rFJv%2FyM3B9VW%2BpLhbPKf37LYqdkrnncIqQOFkYAHgYNFgclz%2Fq%2FUcynOxNBc4q3raJ5RZ8%2BDfeuPfRR9V6WBNgCEcIri4kam%2BXx8kE5LceQQ7u9daD2lUL8lVT4d4ZcGX6QIbhyVcIjRl4O0Z9YU6UYDPJGeXZwfNQwuMP08d%2BXC7HXeVqCNFTcyXNjR%2Bh8HcsmX4Fv7n%2FVnw7tYZ7KT4QQxghqu3xtIfxdoKBkVcwxcXOwwY6pgG56uvKfUXBYualPoEY3rYwgStC4hTXVMM8YitaOyfCqRiXuc3ZgogaphV3awI%2FgONg8Qpi4SBTVMJTJCJpmsKQ2lysUXyaYKU3oPhbqM6zXjl0X%2BZdz43XyhykRU19CMCFHZVW32lllcW%2FDLnTe8Thm%2FuIC28KZM7mPe0iGRnSwF9PAL0YMeu8FiMW4RWJKZpmDNUyCtgtG7aM%2B5M7PA8XUM71gCvh&X-Amz-Signature=30e41f22d7c3d480a096b0bf4fb8c50aca17d9f0e2bd2de81655656a7924eec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

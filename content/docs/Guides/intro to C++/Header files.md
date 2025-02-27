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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVOLLSIL%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDjagWW38u4%2F5vdml5q9X4Q4DV1SJdWjKYXycdWqYGvJwIgCf1d4OKqSuKcn0iJpqeE4wR07i9aakXY3Nb4FrZ5Qpsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBOZ1xQxfZVu8MPqsSrcA0J0%2FTQUIXsUJGYROYvwTjdPrhVyaAE3f469pkARiB%2FBse%2BqQMj8Aat%2B0XECoo2mN0Gp8qDDEITQ4CtG9Os6QBlLovD7YRDxzSM3ZdQtY%2F77OmXd7U1USNgunZVzU7gUd%2B3nZt%2Bv4HqN6Ezcx6%2BeTu2mYoW7F17kBKmfM5aSfnus3Z8BZB0Q4s3GYa46R%2BCrJq6N545Ab9rE27S8t5SjfE3OmlqcuvQ2Vxn6M6Jnfvpp0OUDGt%2FR%2BBTXkRHUfJ2LPPZyTGEQoXrh3SITExmxHdwq8Blj4EH5t%2F7KnUQvU4OrRFgChZ8bK2j8LnpdydvYK7DoXzFz400gFkCK6VOFzPaCXO%2BARNzONxTBtJPLGgMXCJIFP6RhN0ooTfyRpWTqt7mHWdWaj8Xnl7OeH06lLVGAvgqCiJspchLHqEFJ9DBOnOXqLTXIhQJXajCc1UIPK9RZEIJwueE2sVSmp%2Ff%2FIV24BM6rO7FNAfKvi3D7ghHUgXwji3DZh6di%2FyKgCn1UpjAU9MvWq3Mmkyph0NdSLHzf2vPh89JcGxfkh3WFy0amdtkdVNvRuZwE0x0xd3QW3rqU1gk6CawirB%2FSr9jQLlcE1mUf9COu93QF6EbGCEuhfjBtO5WhfpInfRnjMNnwgr4GOqUBhDQXmlu7JRXKfElOrMD8NeTHxnS2Uu2wggj7q%2BB%2BgmerqkgHC4GrRy5RuAd5%2F%2FHiOPNZpE6UBAFXgyCOjEFNi8LR5i241DS5qWTa5QDhbRA7iBGArFD6pk9Xo9F0B%2FlR7rHQXtgRGOG3bMEJMfyUz2hJ8hzM6Hf8YDjliTu8Kh2z82U7x%2FxPLMcUiurnU2YmH7C6fJp2fxeqfxVhH0Ju%2BHA0SIkq&X-Amz-Signature=c0f05f966609e18a7ff435690d85ff421a144870244171938fe5101edc7c1c73&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NG7WXZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDfkY7QaQkqjFd1hclh2gvQiTEhnkNAdFV%2Bps3L%2BihwegIgDR6EGRUm7APVCeiwJVrDe34xy%2BBEMWild8SjB7z6GFQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9E6jP1NE1lElGAPircAzPoQMOcS5kxiqIpPbsa3SRclEWBKFOxlOyM10AN3FZQ2GX20bGNUohY0y7Fwm19pvA2eapqsK9HDDZlm3iWIQGJh%2FLMAdORs3rSFi%2Fw6dU4%2B7Kj9fe%2FaHUbzyVcayJ5mCy1b9bdyvtk6vl8U1mLnGKD6FzKVwtf3oboTq1k5tqW1%2BE75PZMAM85afUcVCHhszeymdXoWQni0Ff667Fk7cSoN8cjQMvC94mb4W4548vgmTBvHKh%2B4woLWIv1RqKstNFZ6YSuvi1MAqSLd09aasmhvMBTrFdWPJNWypVOo0YkURNtmh%2F67X23etfwKz1kAjGmQy%2F73WNs4PKhwk%2FHv8cy9RdUNXyvPq%2B%2F7jearcxtHdrZNS7hECvfhUcnWH0m2sBndOKe0y8S46DNlXLGwCjHBDvxeLmzyjXOHkQFdihnx0AOkNl%2FRIc9Btu%2F2D8a%2Fke8ydKYLn9hxYIp5WLk9B%2Fy33lzJC6uOowvcSy2YbsUGo%2Fzf6AwOoOQ79qo3R5sFep4k5AfzO%2B0YXnZ17ItLGeNdFooVRAAf6%2BMObY37lXLVyiKiDV6lSSnDGr7tcFCoAEWtf0%2Fdous8xXcFdq4zc8KY%2FvUNhwPbt466jzs1ZywXLW2UlQYwrY%2FOl3zMI6CkcAGOqUBgjJqpMgmqeBORmfSvTsCE8L9iG1DALgMA1vzgeSuRX8TZsYRPC8h4FV97pjuSJAPcY4PbJD4Qi8i4TVRZ8TwY9o2iIq7GFiF3aEgbDZGXeeh4RBdfKl%2BrKwWwkJ%2FLpK7udxppGHfahEyGbtYuzjJSIgrSC1XwT%2F%2BQdCKkLg8nOdHwkM2QC9Ds4pq40Ec%2F1hYA2Zc3CFLZyo%2BusNopSwiFyOx7q9A&X-Amz-Signature=abb24bfce5c5ce5fc7b94e216e8b8dbad92ad7ee5a7cddb7ed9fceaa8dd494e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

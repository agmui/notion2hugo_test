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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIMZFVE%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUvzz37E5zwLMtji9qQmRompAh3H9MIFBWeAKMZN7uwAiEAyr%2BggjtUvvUn2jV2UpkBqpkU3H6ULK%2Bbp%2BoaJ6I7mHwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMAUkQ7Hu%2FrzOOxlICrcAz0uh%2FKiWyR15FYhCx0%2FVkw9367JU7H7VwKD7FzR7UJy6WmTYdG%2BDu2JsT8s48TzCz27C%2FNkpSrZqHn3B7%2FPmd8yU7blthj6jlnNfTM9B0c%2BJ4GvjNPfiZNQBnHR%2B5w3UwgFZP4xgH8LuKPDWn9Cca9vpdfx99vd5SEmuZCtOTbTasL%2Bnc86XaR4qBxg3aupIfbm3eWZSGklgFJd%2FiKl30orW9ewniLWdJuyOGNC76FogVTXQZswm4uHVe4UVSgo2nliQhBHfGO9M8P%2BYTZ6VnPRiN2AbRr7pBZa%2FZxwzv5YntklSQzwk5h0ImAEcJ%2FBObAlqaZfAEre7QvtnDHoTbcgD04DvxfYBZA6aQlmMRRxlVRMma7%2BUntZH%2BLsG%2BVe00vofZScvn4zHCgZ7%2FAZH8W1xoaApEkuxvRt97keou8Nl8ksvS%2BN4wBNwK%2FP3L1yqfVN%2BB353rCFj%2F4rBgRXQqbesXNGw7vNaK9Gcm1dcy7v8bs%2F%2FyngAVGR3%2BDYeTCkPwjm%2FlPWDvR%2BD2f1m3sBymD2Z1p%2FYSBOlB1nrbY6RJcSh1bRbIiZuOy4b%2FL3tWzzEU5yEI2eOkGh4gvIjARQp3njyNGl7SaI%2B7CXpHSPm4SjXOFw%2BEw1XHTtLMZ2MOqhjMIGOqUB5Elm1r5MV%2FZDZ%2BsGBNWBi7zD5DeUgBsK4MZLsr2Q3B6K2GehVLb4IUhFb%2BC7Zz%2F1NhoNIG6OxDfs6SBSSAjjy8JR%2BNQQmWnIwwPm0iSP8b0DLE9GR013yrSNK7ugtQQ4j%2BARO4q57aYlJiebpcdRY%2Fu7WpZfoOB%2BwDuCdOJPrwNNSK5R8K4YVOcxRJL9wOex5oEuy1cyXCDVYheMG0rOg8Azsqtt&X-Amz-Signature=05cba4a7e41863ca11b8b1c04f980c646868678f45f672527c4ff4b6391afb08&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

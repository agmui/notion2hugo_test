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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676M2W5MR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC09JAJS7uLgasxWZOrFihbcGXWBAV6uVGCu41N6DjhnQIgah1kA5m%2BGv7R8ibrx7c8CrRwscKyghNo8z74lwAYJQkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMFoOSSKeHtnVuUzircAyMyWMc3w%2BjH6%2FARgcYfrPxMOfejlQBRbd6oXg1J9OBHVvWwLOkajTbqtqBtRnvsYIFiVM50PnpV3m%2Fqklax1jx2M7%2FXVHGvpunHzJ5YMswBeBbLeqHISdMM55uh%2BQuHeJhbgT0PWZx1Ug8VmLl6yLf%2FNz1oh13J%2BgTbmKRvPJYL%2B5QCyhRA%2FSmrgHux3VLV7exW3kGUuT55ziLG2AYQrveI7%2BSnSvVJiReAPtNXqGIZI7EcGv9ZsWSfj7GjsAkgt%2B%2BhjY%2Fv2hdj56JNWHPts1IjVVZKhshoNRA1HTJElBgyeKnIuS80jATi1MLHcOp4stlzCRae43sL0oXwasp%2FzSdrmnA9vNllurHq%2F%2Be6%2F2aS82h%2F4qvX46QlsVPBFgxX3%2Fpd7QORk7M1%2Fye73ShMuktKNeUKT05KcSdLqiUIFH93RHQxLHkKk7dmusywraeTm85VSS1XEJsPjwIVSeeN0WNOe6DurjpgVZ50lyoJngN2UUUM%2FjzscpqJtQ2nL1dSS8FAfakwIDrRPgdaHYO1p2Xwqrs%2B31YTNf8u9HgoK15aZDLU%2FpmzK2Jyo7U1bRZm9NBMeHuXMwFFmXPoNrawDVxXKqxAoQhlxxvVcS29gzd94jwYLNHBVcnRUr05MLTYzMMGOqUBeiQzxz6tZrlR7L5UVFs%2B40KEFhl4vMMbbop399FKxNQiqLfdVDqlgrMuqeKHSXrrCVZ9GFa0TQZ7mHHIaAhlhDkuDiOsBNuR5mWunwOLvW2TjD0GQCboIlkMey4zZdw2i1sbjEtOwdWzwDokh58BF5Sny%2B3oxSLRaiPJ5h8hjDo5EpvjbQdFMuvpIWIgDjX7E0MNV8h4F%2Bg3wgbuiFCDsiO6q5qO&X-Amz-Signature=f9ceb6e34971ad28f94d263930e7698ff64742c4f5b4561e449cb785836e8a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

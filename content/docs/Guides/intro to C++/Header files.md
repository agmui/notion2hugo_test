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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z3KDS6C%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboBTVjT1Iry1VXaPRyT2%2FiVbac4LA%2BQSv0i9XxE8ZXAiEA1uT4KB0TUx54FIZTye6s8bdRUefO3ePIyb4FwvBND%2FgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyctVTjD0%2FvvntqhSrcA4xpCipglBkvLH63xVgpklJPpfxRzFZoneCuOmIdzY94gvvNvJfCO5sRdmr4%2Fuafkx4QIei0AC%2FAOMP6g5CBf27zNdmSkM93u2BG90vjb3WJc%2FlBtS01hdDXUjxWkvRlFpr08%2BCajEUKcnOuXWzxshLVHTCuqs%2BLZOIL1nlGiQAsBp4yQVQhD94%2BjbsGJzmaTOKcAx3iJp1ZhWCyeq1rWRQzTTSYREcG%2B9CTETt3S4OIDuMJmO2dADQT%2Bz0gpkcWmErRGKV3zIEg%2BF1%2B2Sy%2FMhLjtm2sRok57oAu6nWuZK4mf8b8%2F72D2%2BGU7m3OTmBaCebPQSrQsKwZpeXvcb91FW5YrOImXn4WjnbyYYvUjormf%2B5%2BOYVUQntLnzf8WvwLYuJFx9RHq7V1mgp25ELvczpfBs780THGZ533awfMvkX1X%2B8hmzn8CEIJMr1xE3N8kMrvL7Fx0Ep2Rks9jCiiD3C%2Fa8uhaBn%2BoHDdT0Jcu11M8pipBed6xyNdefw%2FG78UN5%2FKzdrg%2Bgd36ttVJFKJwevmc5uU8mZpj%2BbNXcWDdXLEDEupz00K%2Fllg4UcSxdXeKCvX4Y0u%2FDcYeBSh4XrOzEQp%2Bx6zZj1lBJeOznw7fstqY%2BwZ4xfgVF4uznogMK6au8MGOqUB08snwUq8udHL4IlapItlGFTrY5ffIqLPf23uGHlHB93FnrzqY4ehllHaLQ1%2F6arq7YQvzSr7LQOFhJpXSPZSOJpU05R9IkmqEDX2vDSfsOOuE9OKEsy0cc2aDvX%2Bi6NSXR6BxBB7ouhZ0WXjUqxu%2BFZKcwqkm%2FU0zGcQuIwTWv8kbXKage6tewAiw690ui4b%2BsMMy3MnfXQn9BZg2AyTvWsS83OV&X-Amz-Signature=c5e003a161b20b5d92be66fc6fbcddb258600a62eb406d43720efe1bcc55a634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7AOOLLH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbqn8ypR9Cg%2FF0izpwV6DuxC0XLRvfJvwGrYsY8g9z6AiEA%2BB9YOyCV940MmGafKg%2BDiubjBP7V1qWAq23SKi1hbE0qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8jKzpXRSTHJRLOfSrcA%2BqrPjWEtP6awMokJPTvOmGinWzdEZMd4sqx%2F4KtTh4mQmQOdLaEgLktKsfdLdZZvPVO3nfzrfxG%2B%2Fls6rx0qWZ2GL7JLEGwuQi3S6yciwP2x2gFwfAyaPtCGd%2BLZh1XqQxCU8cjSEgyAakaa4r3bCDbdYJlLXK4GjzDuz9QnI604IOd%2BvnfkWvllNlcFCyCMJNs2We%2BTLfX%2FpR9WZXBoTEe6kvZCvvFDUtF30doXZInUwXj9%2FBIqVusbNpN5Rq8jrmHxu2AuiufiTqpbXFhPgyLTkZtO7QqGOSqonjaC5SNFB7oETpbzH4R3Hf%2BgvSXjEoK2KnQJZqL%2F0HJOg2YIx8%2BM0vtYjeTmOPdn3ArxUxUaKf5%2BBgcBlYjEkDMs44NVsTbheMRpaVHdPMtRLLW35Vza8EL5n2v5RY%2BNQP3FyVvSwbIwOuD5Nzkt7GO%2FmgMapOWTB5UJnrrl7odOXO4lFY0%2F4QxDpPhYdzRVxmug5m3obL%2F%2BIOXS6UbzzQYcXpmw6THX6Rxaqzd9x4x7KS2Wnpa3OD4Wp599E08eMyV4BgkvKK6swF0N%2FDKuxqpSPoFhq7mhxOFpqXfAzsOfw0T%2FykLBZVgsxN%2B5F1PcYzYILfbQGqkD8Y56L2QAB1JMMiarMQGOqUB6z0nuINGU000YDBTmlRYViTE3coxaxKk3%2FU%2B4lFNsq0X%2Frz77Mb%2BzSTOLg5DfEcGkervRhZOaJ8uoGDpdddUKillQ55oTicpyRsDq3sz%2FFT1Xt3B3rPf6DOFYSN68MfepI7MoHKbQTbCdTWpRiL9B%2F%2Fn848HmLrqUjTS1puYOlAlOZ%2BZG2ckIV75%2B5GpAEyYoy6UwwCIa%2Fok%2BNLoJC1gP2%2BJtTRc&X-Amz-Signature=42bbb4a0b1c9c4c3ab97f0c11cc3606d98051d38fd67d8838b23daa0f272ecf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

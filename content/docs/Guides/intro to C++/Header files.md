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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHUWBM7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCwVUkp6OAmNhmw0zOihvdXsBLLKB7tg0NeWNYIQ5G0tgIgIerjUkpqqXqlDBPcO%2FCjBbnZt3OQ1YRdOvPMtuBan6Qq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJJoNDFhCEwAa3wgfircA6wQ9IriB4L3nQXQSS61LI1JDd%2BmWYazvimr7sTr58m%2FmnduLivE8mVkbCA0dYWo1cnZ48ZG0adb01ht7mfNeFDhYHmUd5sWCcsOvY9FPMLXobDcDF4ZcKXa7%2FlaQpnhlJPBK1HDs4E7%2F%2F4sHrwTv1mVnjI3KgtOk11Ee%2Fqi2xC2bSIboyhnnttYNzbFsk2iYrgV05tz3uDwbvZMoxRUTmPl9nWc78oWI8qWTRBvYDSYkDBPV%2FtPMMMOWOF9702%2FfLEu5t8aG7arK%2FQi9SZsvqVHTLlLL3HoMLYZLleSMQxDb%2FQtWVPrCj5XkVNLeJj8VkG2uyXsItP2iCZam8nNLdBXTh7PL8yX2chIw9Mo4cqa%2FZd6nIBIN2hSagniGZGz1y4CGJCQQ3M0fEWC%2FsIcVKKNcNV9%2BR5PBYmY%2FP39EhveBGM%2BEAHgaJWHQ4X34w1r0xPk3pGG9Ir9eSG1N71VleRNmGtsZzPujMR8i72M%2Fn7CdZshFY5KV0pBb8LYXrc%2FZSkOOPWH0qFvvamLTtCIPo4yxd9MiJO7njviZhjlmJFPuPOV49OHQJp3HiV8d9f4CeuaQZ8EPw6tUFKDEVbrxSgEdXfRChLPMXY7XYqNrqUs%2Fhz0p2cv8l9Q3p7BMK7bssIGOqUBm5heqfpDc1JLNZpi4kjFbfdKRkwcMXnsH%2Bk96W3IW2YMgJ4EWVRMMWQtdWPCf%2FvIl8U35GysLUebNmNdnww9PCoBnwFkpuNKvRwqvQzw%2FHI5TUjqaayAmHOD01g6XZQBj02NCw1hqZ8Jar%2BxrBUPfqjZdhe7xBKm%2BayEVAZWIbICj%2Beu5CsA8nuMupDmw3WQmExo06UAbN%2F0zc2XZbrKQL3WB3wE&X-Amz-Signature=100fcccda227e26c025c697c7e45b3e1a09b1666172dd1188253648b5171b343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

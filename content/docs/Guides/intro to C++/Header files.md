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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY7DSO4M%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAxRmz%2Bz0LvYbylAwUWKysA2B4u5049wXAQaAZ3fJyvSAiEAnNJsPsrrkuuPJQNtZKBswYORX60AwYeCpEuHimQ%2BeJkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDYpQRP2AUkXSBkQGircA2gdSZOeO%2B%2FFpZ2bXHc%2FzS4ScS6bismFtRuXxzmtTjPkVCDnqjDAnpDJl63hYY5wOinGkg%2Bm78vDpEjrKr%2BRmR%2BQzJwY7ATLvPGg6VIp85%2BP5TyLdDfHeMp99hNRC2kuZS4hSrrNqDMcuMY%2FA2RrQWC2iLt3B%2FzKedWjL73fu4v%2BfS2GivjYeXkcDcVGIt2ZG4EpIOi5l%2B3f1lRhhDkqOfesCW0Flv93IOhK%2Fv145R1T%2FrAnXc%2FJRagAx5iDdq%2FRltoAAtxM%2BjwD4uC%2BW0IIoQAMaHgZhFpy%2FRSwxCe7et8GTvTAwr4F1ZDYH08szySNAbYprdbLdOYt65wmUUbZgbYRK91%2FBMFt28s71X0qtHRUBTsGcHY3xZ8YZrIh1UMen6jr72gQ0sm8HoUeNpXDt3NcRAFRLiaToR%2Ft4Y6sT1VgsP6xkO86Svc08YmB2zAMy9F9P4QlFpYdd6%2BX%2BczwvbsZ%2FwADA%2FM%2FwwcE%2BGl7BxXbYh4wo0B52Rv7rSfz%2FkEra%2F9e8xdBy9ejXwiT26u0Lf8RfjHaiX8Uvsbq5PMgHI0C5Cvyx3xNzkq%2B44XwRD3o6H0mG%2BkOCyhuOc%2BtBsswo%2Fjd4utQ%2F4A4iF8%2BLBBMR%2F0qf9dLC6Zw2T21cckcMLKHp8MGOqUB6wfTu2XIf4HVJJZN9KOteqKUKdkFKGFXv7rS5AR7P60PoDcW5HERc%2Bti%2BVufWJWn8W4T%2F%2F6a7fA%2FOius6LMVjqJpKh6i2oQbMpfiS5SHD9ZEGMdUl1dERczOfcZH1l0UHAUROrVaFCO8FCd82KzJZLcHhLYDsTnTkeaDu%2BGpndLyYe6BwDY6V7akLRZUiq231c%2BEuA%2FN%2BFZJ6VCJQJnPsAzAy3Zw&X-Amz-Signature=214d9e17bd46efac114084c8dae51e7fcacc1b0ca46b663f95a7ebbe14e3d9ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AGOKM4R%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6DkynyKKcrnGKnYCe2G0OfMmWLMLr8iJJySQOaQn8IAiEA5nt0BWvXUuRYnw9j9Fs%2BhNMjiPzUo%2B3P1WgLg6ndC0UqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqw%2FgbmiDsXB3BkBircA9%2B6dzAZ7%2BQM6JSJ29ex6acBLgOjBQ9FtvhDKoKyWT5nH30ye2Mx0OGN0u2w%2BdkwubACS1q7WxpF67OtfBTmJs4lrSCyFI%2FxoMJMpu2g%2Fr0F1YmU4ro5ad6Z1%2FQcHfGwwpUGRthytSDWXWy5oCYjWJAIC76j4zmjyUaieLFh6XcoMGO9DYu29tPvOmSQVrn5MEsP2pCuS9bmNFodnwBldrh3xaQD962NTc3FIXFDOWgmlk0mMa3K%2F%2BIIonwa9ePcDKhxp7ySyuwoTzVS%2F9iNVXZC0yr9FoeRovwB27e%2FirDbQ0OZYI5O6ZvF8gvODrVffuqnmeoF%2BQsMZSd9GoBDxNcNmYPR%2FqJJ38Z%2FqnawjIr1sdCQn%2Bwl7SR%2F9yThXqgXyCnDn2uekoqwIUI%2BR5zZsJP%2F0IXONvbSITq9%2BWN7DpsWNwth%2BqKf1%2Bl7NuuVDsVkyFJwh1y3m9F%2FXIATMaZn79VODo5OFJAu%2FC2QEFDZq0EGM8gKgNME4Z7g2%2Fwd7Bn08FU3L5GgP8mTmukIfhqy1fkP7IHanhNaPA1DIUzLgTYPUqif8ew%2BBdO5YzvdEbd0RubUYDp1zW88NbmaAEXbxwF1cQ5dBpBEECzjfSPJNsNeJ9m8AN6WgATrwOgVMK2y38QGOqUBS%2F15s6RyKvsPVA%2FocBedbxE8fZkjLG4SdUEGYpGFORlNFaOzxkdsa%2B4mAaceIdo5KnM4MeT4UmbyeSsFKm2Q5OaCMl22l4qjrah4LkSCkU1poARdU1d8dC15cZOew7tGUkO%2FZo4m9n5aNf1Z72R%2FBzvWKkDhAtD0l83OT1vIrhha7xGWtsbYdu9zS1cBZ6bW0ncxaLTNwL6VvhMVWF76vh3y%2BDgx&X-Amz-Signature=5bc82b0d016f03c0c076252b4ee690dc89629d5ff0404c83b441c5130a244dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

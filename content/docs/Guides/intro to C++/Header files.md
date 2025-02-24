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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVRWYMNA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BqjkNpG5wiaQ5el6Cl6MnG6oIDosuFo%2BVKfyRj86%2BGwIhAKI7tm8Znux0thvzA2rUvk6Z9%2FumbeNiSrh6gAVn6aBXKv8DCDAQABoMNjM3NDIzMTgzODA1IgzAtuPASKd5vtz4aYMq3AMINtLrTrdoGuBUR3fTPej%2BMlbt1lMXF4Vt7JiaIOUzQ1SoGU4u7k%2BwBHAAK0df83nNa4u8StEaDY0bp%2FGszXNwMeFDpBhLyhCjuKRTGoLlNtfhrLe11bemCC8i9u87M7RdPjJpJhRORItKAGWusk99%2FXWegw1PtqqUBWf60P69mfOFngd%2BeFQvZ83YlV3OQxLoUb4E4qobKAKEwNMh7aAqLjF6VM%2BXql3CE%2B32Q4%2BOLLLh%2FOKjudyr73AH%2Bj7ZDsvtuSBb5LUMZQXSQDJRWWnZJfwbfMAHGqo6l27BhYkCjfN3DwsaOv8AgF0EUfp8Dt0E%2BjOcSJTw18%2Bhd6lkOO5xbtEpfxo32MchVFL8vkpdM36UQ57kDQWBTK3hz%2B%2BDO77%2BGxfv5QcASHiR%2FPWORWNO2W2e%2Ffr26cW4LO%2BqCjSPqwkyv3Sq%2BlAVjxwrErQO%2FqGyZUVpRSqFYjNZcy22YeavMTfgWt8jp4XvuuuMqXWGdxdKYvNXXc9Q8UKjxuEWkpeO3zbUmcD7kL3AnQw9x6ML9Q4Qx2U9AtEvrOnHaC1KUAiR8%2BOnPtrkzHp%2Bd%2BeSCZMJKPRYEkS2cfrZgJWCsxndnR3Tj9KwrmWn3fb8%2BcOSNimKwYVcS8B4TMmbSDCInPK9BjqkATYgKRPdk2cOK48cYgowQ9cfKlXZvKCtTNd9%2BgOyotOHiOPUskmhk8j0JoP8NgORvabd%2FjLrJu6KeTUbqvaiurk0K8wz8Tk5Wmaaxs6wVOsMLRI2AgY%2Bdq2oazo8So5ctrFtd6Bb2%2BMKkMIa0wIqn8yZAzq%2Fk%2Bw9PqxevkZjhuAADsWn43F6g6m0zolRsaEdW2AovVCkPDBi9d7sMfMNA8FLP75O&X-Amz-Signature=dfa7bf9ba60c2d2b383d32bd53eca3c9076ebe58dbdb7a3fb7cf3276fd47d646&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

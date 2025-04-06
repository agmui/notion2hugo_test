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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IIG4DIL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5lK79VbnF9cqn1V6ZRcdPbIvNwW0Pv8XV5xQo1pQBkAiACpcaHXB3LM9lSScfGxP%2BDyQYPu%2FN6qnnKwyVEgmYsgSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMJjQDXfOfVXKQ7gB9KtwDh1GEyIv63EX8wqVt80e%2FE3Q7gP68g%2BjxcpdZ9Mle9UQQULaKxUTbgfy9iwkAoNdFHzvCoRPFOnME2f3jIB4euXT1tTyDHopy1hETLDpcWeSieFZDrU6P2Rs%2BOSXTH8L10epOdG0AyvRa2UVkiN%2BETPwlWpADXi46GLVyTlAMTxxa1IpeCKs57%2BoWw83I%2Fa%2BKi%2F3hJzLDZ0PckCwecKBkH6fEI5EnXk5lhlbA1nT3UVbWtd9B%2BFEHtn9vJvwMfxnFYXgh6F1J9rOtBX1hNLQcdr9y%2BrOCj8HUlBuIQIbpAIpDMeDFWAKDyK1EcnTl3tBhifeYYTmaouRVCuR3WLXxz%2BN70FxN0tL0i5RurZGVOyqIQ0jOosoQm0lkkyLhJPEN64lkogx8nSn7p6%2FJC6KF823En%2FmfEYJRelzyw74maWrR6cDQUDsVNpvb7viOtRGdeLOn8AJibTH%2FvUcp5c0NvQs4Y%2FUj0DAmX6bM8aih%2BwpuZhKuuWgD%2Bo%2Fh%2FJiKk3%2F4dNJyjKl6gQheJorFSdoPjGp3wkQC7fZ3jyFbfLI5%2BL29%2BY96Uiih4Jq3T8LtRX9Bc7LmDI2tNMHqmREZtNH6N5mWGttXGaBVAHOAyesBR6SJzGx8iGjwa4gB%2FcswhPXLvwY6pgFSHpa33GLOyze7LjTETl%2B9V6cZW3juYfoAfGPnfN4VpjqzNsjuj6lVjZk1AFZxRT4WxYymdam3zbptg4IsxWkcbVCM%2BQmDbqTr9zCd%2Bmz3zP%2B7%2BhgS7x5Ajhq67ovxpJh1WifEIj7hu6ouc5IIshdAUW4mcRMgFVnvlDTjyGb8j3Z9%2FUdPYyjCk6gdieYqZnI9xlzWBziclqMNehCcZjhc3WfWj%2FIa&X-Amz-Signature=bc86fda40d8a04578412dfcd25594fc8faf829aa3b4283a87ab81db63ab70e84&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

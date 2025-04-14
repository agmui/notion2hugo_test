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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKRYES4%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFHRPjreRPueCrHC90ut5qs4mW21dCYS%2Fwekrl8Gq84AiEAgD3sIj9txmWUUna08rmm4hpsAeVNDmqQbXdRLJV1XDwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKE04lmaD8wwk%2F3pJCrcA2kFiXmptlFoVU%2FHbu2QxUulss38tAJHUSqLRpUv7q%2FK8P34jzieCKWAe3fNwe%2BgfAFp3%2BeXGlZM7MuQhKYeuYTqnlXP80rlXp%2FgNYoPqsdNexprX6iujhpmIvFIJ%2FgpJFNKclQdXviDiKfHCIWso5T5%2F99EKhVtDWohWRJIzJ5WFLyPZeFXjWzofIsRbdH448JuPH8VrXKEXm8BjQqW%2BFUbVM9RN8nUFKJ%2B8dt9fDDWUQDYvxQScPU6yEoG9VUhY0CqzVgQ28xC8%2Bl9ZMMpVNWG5C5LvcKrYcj9uGDMfOKmZkNWCMXd60Edhf6PIrgO%2BRVXWWV6H74P8eF8odcZzHYMc3ENjLxx6tWMN0i5VR50XbL1gpmVsvv9HR92g%2FsztN6bFqLMTVD7q9LaiDKP0jENQkJkt914b%2BM6sxilWlSZ66jBabDVJhA10ZjFGBR5dQ8K7yuoD%2F7J%2FpJzVZOB5K83uJYv9SM9kpZT0h4k2%2FAX1v7%2FT%2F0jU9WGYq035B%2BjXX9hpaEovOAHkOfSLEcvCNBLeuKq%2BhT5xFAgrj8DUbItCmTfOwKOQXuNruO%2FHrQXTD4VNhUwaMvlLJwASFiRX4tIvY1tUvIcOe%2FjeKKhFrmPVmVyp9FpvZGaHfM5MK%2B58b8GOqUBvSXGtUhyDX7d1oqFdpqAPoZvCUWFubQZDlG5fNKnXptlyu%2BQEtK%2FUckie46qovraCrEypzEhmJXye7EzPwWkZ7vfTHu9cyw4Z6qjfDHejG6X0oV1Z0x4R4wSy3Bj4bAm%2FEoa2s26zWlF%2BxLFYx01TSqafG4hHsTv9f8OkXlt2cMsqUCNmyZddblP9yLcg0J%2F8e2%2FEw9o%2FVONGyEBohRpH9rYJOBA&X-Amz-Signature=3eabef78b85e6a6b9eb43199b14c1ea07d2060126a40ac90219e840e961866ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUYLZXD%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCh7KHVdghlV1WOtT9e7fT1VF9kt8mwnaf6zPBt7xi4ogIhAM5VOpTnrJKMTprfiAbS6xsxPyX2UJXtmF8UCXpYpTW8Kv8DCBoQABoMNjM3NDIzMTgzODA1IgxIJajqW8OqeaYHMFYq3ANILkauSyG9ENdoLxdmAoV%2B5PMYDd9%2BGAOIJi4LiXtCMIQZuF0iCwuyw9PlFcWEHp7ttLO7KkJ%2BpuFIHxesqZwO3yEGh1ubGqKSxKqiZn2CdHRDKoVFm9exxVId5BkHzOs%2FrVLCtXlyBgh%2By7W6C6My%2FD1pGQV8ViVFAuV3%2Be0hR9nym4MDLwbhSTcGEM8cz%2F1ID5MXdq5yvf6%2FHts%2BNKy4loI6c4OVQYTxINlG06KhfaybCrMhyT5VXJmojEiQ%2FAw6ECL899azbHRFHcp8eBfQUiN6jMJLDeruLVF2YL1ymOZXl7fJNhgaZokISb5tv3%2BSqj0jBzc9DxSSwjZEb0FodH2tX0j9REBocwTrfvrgTvO8o6uQ5enjhYP4vU3C6AcsWc7%2Bb7PRoeCjWwmgBCHEwUMmTzHwkjv1FN64bk84IVadPjZtyjfp0T%2B2%2B%2B73Mj1ZD7EQ8tG8skslojf0lRr5dNLO094PgfYeoCl1dh9UkNsL2PGoJmCzvIgQGRjxJ4ovbswL5Uu4bD7ooDnBGGbF1lq3JaHsws8HJcZMmX%2B8zHD3T0bdjweNufDjswb7ErGFrU%2FB7trIVP8cyzHGYotXA050AaM83V8UXJQS5IQUvseGi2AwIwgidgfK6TCq0vzBBjqkAfX8G8qfm%2FD6Sj7XbqwlSysH7X7MmLiaKhiik4h8OjUwHbjnw1qksWVfdXeXdGiCh1EIGdI4BIKkd0UE7IS3hML%2BfpI5bZDOnowYaczfI6cLFjNRfYLRmgqPIov7uDgHmCE5Ga96p3KSmey%2B6BexA0kyLuooNq2vQnEL1JQoJFBOBgJ1sq2Fhh%2BEbydixkpj6rcf2rDvk6IlWatyPUgsk7HAxu9Z&X-Amz-Signature=bf3716e6ca8cac30f8a628b0bb64b452e5923a716ae45de5183fbdf11d068349&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

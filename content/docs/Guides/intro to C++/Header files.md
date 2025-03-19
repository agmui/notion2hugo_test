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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646YY6ZQK%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDBNMyYSBo4WMmOiFmQt3Z6%2Bx6zVOCAUYlRZF%2F4p%2FPxIwIhAPDOOa4vYNbBip98XLKyfS2ymmv19X7zQOvDVma2MaCxKv8DCHgQABoMNjM3NDIzMTgzODA1IgzY%2FuzvJqg6eP4kVrkq3AMM%2FnTHsALHbTmVqs08D0Hoo5%2BkgyqzXw7mbavJOOr203ECohg2F0oV2NVT4EwnneytDNbpKosLvcHGP8SNd1rO4n%2BCLhvH9rPYu%2BRm0d3sBc%2BfEb5m2B%2BXu0g0Am15VxlNRzqNqGbpIk7J6iuNTLPy%2BjEZRnuiID1JFKdbuN6FGcDyWU3zrstaD%2Fq72hZeAKzfev23gW72y26kEbBUGYiLhcvjyMsvjegAS%2BvafoQUjE1XU%2BK8HUABLsENmkHcF7Z8f3LQWpBK5Eza2EYQaX7l9cjWWwTMCj8aZExYIsO6BDV614VKE8rgP9ZqJcpN2fe0HD%2Bgh8YkrtZVPgMvwCX8Ey8ZO9m6Vo2kYsyDAmMtAVkEyt%2BIeYScJIzdAyOQKJJwLDR2to%2Fc1YFeO5OLajATdgh6I%2FXDoVt%2BBo6Kvlfp2ccWzLvpFEE4nDdnV2hU6T80MDbi1CXL1%2FvHHF8P3TJplWZWn7gMBg89fFOiOfXGzhq3zX91e5dgr%2F4VZS5FfrpZsav64wba7htyVXMmo3BSsa%2FuAj%2BSK%2FWftWXt3zs6%2B%2FXDLHQXROsWx%2BgcrruMxCIUlaLNaKEWoakaiavjLLiEN3dJoNGmvWhc0Z1D3XdiKpNtbLwM09JEb6Xb6DDHvOu%2BBjqkAape6rkapglWmjQ0L1sbyoJ7KUzvpwyMgQp4hsva0inioMgVmNg4MyldQPNtsMrOE10aGMme6hopDTzF5swhZ7rxs1WSJaWfKoZprtsFioV5J8C5R19Skc7lc2NZoFTreEdkefURGmcb0zOqsVx6xkfUvTTIKlzZffimOKshdh0Zodu1LuXk6P0w0G%2FxEhiBsGzVDOGmH5yeQuwhlQdmTnhTC28Q&X-Amz-Signature=f70870399e4bea586393482f32db972c1eee1f63bb3f13631d7ee1c93352d055&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFTFJZRA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaJuL7VQTKBMi4rI2dCcCJYi7vxUGLpyKOGdt%2F7YYQxwIgcnuxsFYn1bxRO%2FIeKGWz5EMPP1ldBeAzeISQpZZCCoMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKHVmo%2BvMoSrpYeQhSrcAwM427mhcc7DOdFCVYqHscf2WrS1mJCqyPL6WTPcCITkQEs4cycuBWNmd%2F4c4tP1EjYy3Vf6EZLBUpX12MzrC9w0dvvW6fJWCypQMepm5O%2FAAOFf4MN538NfLHjakWGZYTETWLnbvbKkyFpY0ZmwUXk76O8w1MGnIVWH%2Fn1k%2F4vjr8%2BjFErSJgX0kZ3ywkht8ARzLi%2FVtCM%2Fx0zrbMqjbvDFb%2BowdbnM0jFK8L1wc2d6JmsX8JHh%2B2%2B2O0QcLT4BqxUXBcrC6k4lhTKLkZnPa1%2BjMkUteezOQB%2FBbR%2FGxbMF8IIThDiCa6OwrEBOiKahqv%2Bj7V7n3ZfBsbsSx41m7seCDBJwoCURjKGJ3zIHi7bXB4UsWO8NbJ380ZTqUK0ZA8Q0Uy8hrXcY5hcdqNi36scsgaMkjzbjGOT0M%2B78Y6O76tfqkpFjeFXOFhF9plWX5YrplyyZTOCx9rV8zePsw4mm1e6aOdRtnFpHskYaCTVkdLtZBaCCHByZ1a%2FrSpbKML9sUJnLWrpce%2BE%2BdfSjfmrMcyBIp0h6Xek9BpXbtMUhd8zuNbumPh5MbFOllIo3U2WSWa76n1y8wWtVDIoAxInCJs0a6GC9NaI4NKDzqFAhBYV7Yw%2Bx1DYVTT1cMPyx8sQGOqUBZwtvF4tR6aBH9USvh7yp%2Fek%2Fwv0eXupQ1U%2Bw8E8AzF%2FADmFcL8eWyJEtVPlsEET6sxZaCXIZkNHjH9ZrU9zaBdV2Q8KxNxjMt00bONbKsGxDfackIi%2FuIxQ8RR2pEjtaMqRvHxitD3GEd9nTuPbsQfn6fwVt%2FxnarCzv6BYHhOHmRgPXd7lkHaue4DTKSYX6t24cYHOjeB46a9APMH%2BDhXVkLwzN&X-Amz-Signature=0e5082b3d24537638da909f21d098bf549ac9e4da00df069794f897dd4bdd9b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7QS6M4H%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAM%2FGPaXUxH6U6tOXTVWl5V2EYtWnmZ7iU91X0ywT051AiAX0zZVw1Knp%2FAEofT2EHzNmonK4mDYZHY2u%2FQGkaUNYyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMUS6OyPocxz4XUYmJKtwDGPE83SmrBJrVPIMQ6i%2FrRW8oH9%2FzJjkQsuyAQxvV4vwHphnKqLSaUrmB0zRWOFpGxAVo2BACuPwSCqCll7Ht%2FdME%2BVwaLpJPNXDrpt2%2FlJrqRuKGhMkqOEXevlRB2hBGC4vmoJiK%2FvjgAbt37PtEUrwmVSqutwsKMfJQTf7QuXM74g4MGJCK2Dkxhto0OY8rHTapt3SQrHg4MfberuWb1aHEu%2Fn1DScqYYThevo1WlkV3kKiraRdNB34blSqiaLV0Da41dVJuufgPx4vTBIYMw%2BjHcqTaQtJiVSud9Ap6QlLyjIiK3fKPW9Ecl2Bt3uE2Qa5X7KZnEQihDmKPl7C58FyeZiDRd%2FkbAkWWystR5%2FIK6%2Bnv3EQt6pbMVQ0dwRVm%2BEQi99QVxJE1b%2BZ8uRyVnzS4D4SjKWbn7VoT9j7AVG1TJRg8gJyt4XDtvoeUE%2BbX4kvsZOT%2Fgc2sx8dKT%2F7UZzbYvfjTA5aGr57klqAfex%2FG%2BbqpHhRA0VaDOGKMZj2Yg1uwJoMbHFikkSEotm4wgJrhs9j9bzqe68i33CO%2Bfnupo%2Bn1DCTiMYtHwKPXeAQHNIAbEAX2O9RRIYTCTyXo7ou3HWCYC%2FWQRYfc4MD1%2F4ie4Wh%2FJoSgiOpE0Qw54f8vQY6pgHc011U0pTsqddpPVyHvFza6IubbxImgxK5s%2FObyDof6JgYq4FA1UUy2f9Xi6EGCQw7XJTL3DEhn%2BIZt6W%2BfaUZJSNOJXdANP51g2jpfC6CJhfu%2F03GXArpX0yjLEL2QBXGmeD0OwigUjjFhX%2BMK67dUTkSxS7Hv%2BwdN84gNl%2Bc3L1MUytIjj2z5zz6rnTIe6r9hnAp24vXYQnUgt%2Fi4zSlQpx0536I&X-Amz-Signature=64f879fbfe50312e211dac8f7426757c4705fef5f0936929dfc94ff61b8bf519&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

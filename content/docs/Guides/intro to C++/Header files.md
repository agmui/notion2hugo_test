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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBKX4IG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBIKe0PHzt083a7I%2FHr4Vi%2FRKc25iU6k4JEjfel56g1WAiAMVWMUx7b2vEWZUerzx2s1RflK%2BeCme0TnttPDzLdM6yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM6xHKjV5gO%2Fd38H6pKtwD9jK%2Bj8qXHFCGQFBV1SBXktTjJZ5OHJ0CL%2B90icZpUbyzQqhkUw1SySkJukncHN1JiGQB1Qin1gkgWlOkzcl6QJ2nY3vtzlwdp5aXHIdxlQgMl8q58aCahLea%2Bx1F7IBfc%2BveskbOM9SpoOnWMycymY%2F66IYZponQrVnV%2FH84g%2F3%2Bqd7mNGqX5M8Z64hbF7Gl3Sfk5X8awfggfJDjgEhrKoLP3vERs00big5xE50zJNQvZ15Od65rl1vx2wr5LCC2MR9zl%2B9mMR7Hy%2Fw%2F9JYv3ulPjSPOvcfa%2BaFocj00p6lJqcCnTp2b4YD63Z8t4DksSkTfCa0TpJivBFtWjlzaKognmS25jjssBxT78z%2BGG9s9YDK9MzAY9LsksdDdk%2FxutPSYUU1%2FmDN3Ao1acSYb%2FqzjRHCF2Mp%2BdbfPCBfKUDbkFMcCH9PeOqYCtYVYMVk%2FphFhbG4UJtq5b0cqgR14PxUAJ7OWXQYzAE%2BQdETuYGmyVEVj60b3jocAomxNSWB6jTUSCHYr8Xzwrh1YJ1rp%2FyIn6I8HByug2wh7c2Ka9rLqqCtVYJMje9xJgPrTWjCDO0sRzcva4Kjcofd%2BYLRILY8lSTWjLvguBR177bI1I6VzSmWd4q2rtp%2FA9vUw7IL0vQY6pgHdK%2F8MOVC6diyqvMu3Nq2Q9kj4tneiz1%2Fb5QyWWYECuz46ppTrhA4lM4wYjlMBL4lCQC3NQAvbIp3pZvfRnEVBqQFIxIVYLnKKh4SzpqAg4oYjYQajiwD6ErfWfV2gLS9bQWPxp%2FWkcv0hijRpcAnwacLsOJPtnIK2wfFDUSwnuz0k6x7HNlPaiTWlbDFFH%2FNFkaJGiiUoctYEIR8baUTECNgjxiOs&X-Amz-Signature=dee87b159d6983b3da56cc35197784eff9f06f4443ce6df54aa267b0f8765cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

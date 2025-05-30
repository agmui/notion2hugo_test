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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNEYUXK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZId8GHDTweRvrlCLiurvZXoUFdHgIi0xh26lS8UPcpgIhAJcsP3ga%2BrtLRb%2Bhnc5HQH4k30oSh8Vk5NRHiAof767gKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhFt0OOVzGCTKu%2B2oq3AMK%2BEPGlttDg1THe8tz%2BSNvmg0mj%2FkLmxuowTvsmpt7s7jzOuclJ8FiCHUjmtbhjs7jsXTwECqyaUuN%2F9wCTRRqwTqfSFngyGwdCVbQdaJIVDbmdI6wMpRcB54KP87qQ7YcDs%2BXLBu%2FqZ1sq8xVn9iLYYsDb9E75W%2B0c34euSqxNzXwBwO9Vu0FgDK3Pr8OBpWu9L58sjd%2FNxW48akj1BZik%2FKIEwMKPCzTlRKX0iQoHrt5G5B71LPS48AZxC9rHzk45UJxZwzPTsA3zlxwyu0xqrAsev7MBmpZrmZO0yEwJqoAmujqvyLAXsDBrYftXQrjReXf26jNDNyRA8qFQmNGjDIasL%2Fh4iCPgw6BCPBJoS2sNn1FLzp6mjdWhtLw0maMyEkfS5qevID%2Fj050c2F%2BwXvnGqx%2Bp1WTlTGZvqN%2F7M3ILb%2Blqdn7MH3zndNG6wQf8wTkzMQixOvE9ZKUMD2xdKtpeoQaMjNHmzrVqbTAQkwLBB4TTlPXxgAUB8Gq9gPd5AAgghNW32r2F%2BvdL4wWLhJMH0eDwTO7qHEL0SloLMjOBs%2FU9zjYvLFX2EkChswUvga%2BRhq4LlaWFC8u%2Bge2NHDkzIy6Th%2Bij%2FtYS6DNkUb8X1F9ZA4ms7XY7jDk8ejBBjqkAfNl6OEkHxzGsdgWmBvGSz4uulFImUFlz20bo3wb0UiQ44jvi2qrSC62aCtmkbBgdYFGv%2BO3%2BZbni%2FqEl%2BO0Wj%2B0D2Hg%2Bs7MlQFC9tCjY9VWKCQVyzw8gm7nGYlKp1NIiYH8dq2YtWWDqS%2BmJ3LvzoG8z2cxrQ5aWZEhU0ddf5taL4w5PZHEqOPnlAkQoQ6F4rk1NHSRggjHqKIjN32FMJEquDXs&X-Amz-Signature=925759252c37fb05bc3cbe70c20e50c5b24e326dcb8f9bb2c7b113daafaebae1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOXQWSP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIAJEIvcgakX8w3Bl2eC584dM19c9%2FP7pBn0P1KTqkWJMAiBruQwDSxuIQZUvgPQWHZVFWvl1FmEalb2vcTdE7xV5vir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM8IV3Ptg3M3eFsE3HKtwDyzgmOcMQUdoymxEcuOXUcgbYUCL16ro2UmNZ0t5jfXzndH0Al4YmmWKRdhm0%2FhU0Rpkz2BGYkH6X9sqraWDDJlmqt9yhfGBHDdX8Ed0hOM4uOx9pX31ZqhkfdkDQlTuZY8MJ8MrVWWygJ4LB7MdZItHsAwVGRolIFOCz2Afry9C03C9M12aTJsOr4n9zZwySkMoHulUBGtuKrYvDZvEQ5do53CGg3paL3SZGNRlZDhFS1YIcE8Xiqtr27REaN2Sv%2FE476qUiIipqIJCfE9wUWcChg2aE8BJPEokxV2%2F8VkDndRy9WJuungK5f9ntZhQAAdCJEU7X2j7LXXUsMQEjw0%2Bb8OTtNzdVuvBLCxaKq3A8XDtMcjmBXh7dNHJ8%2F%2F5KlxlZ16hMgJ2co1erqH6UNe%2BeOlYNvm4M3y4QDy0i6o1GNqP95%2FJObp27qhK91wdQC30kh6RJr70tbDYTvDwD4aAtHZyC%2BPapAmG0yp%2FEsxd8TgWY%2BCc97NGNUi6eY6fcGm3BR2qr3C3%2Be5sDOXfKvo4CiVvmZkB0CisD2Mlwa6kGASDcrI7sHXCE4LG2AMhBYKfjPGBcHLhgEJtxigDbGMfTWQI4RblYL5Y%2B0sQ9yFLRZI4kqX%2BvpaCMJ5Iwna31vQY6pgHwXsOQyXlPkjK62zRRJyVwt989Vz7uX0yb9FI59P0g9d0iFNU0GTGg6E%2FObHmGpuv%2BHCpgyhFUS7pXvMH7WE%2BE0183qi%2BtWKfniH1B2Yh6Ypm2dsKl0lJR5RxX8JA4nFt2gR3NZ97UuB9fG5fI%2FuKqgsvOwtMbtSD%2F1eMwdXdIv2BBceeqkOrdAn1vstNusm9Fx1Uz2RzkWZjvgygx6e7zOYR2Wwui&X-Amz-Signature=3c64387b2cb8e103c3fdcd15ae1a9430328a5e6631edd66d8d63be16c21857c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJFFRGY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAW8k7iQO7oVIMuaeYTDbhjJk6O2AvbnR5xcjHYvYdcJAiEA4ejUJn3bDG4OjmryIRH7TkvCOOhYDKt%2FEGgdWTXjnlIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIh%2Fa%2BQX91sdHQMoBSrcA7IUv4MhvUEDegCYaFVhblKZhs9zUr7Ruj6gI0WGUPcRmceXP57yHWcjaZJUGJQjahkw1MGqUTHZ%2BkS4lfSds1KcD1%2BNgNZKtIsm3TYOQeShKLoclF%2FoJIpxvjyTvjYuenKwux1%2Bedkn8c24zb72w0WxSiopnmf%2B9nTfqpUO%2Fu9r69qf7sT1P%2FG0BMChNJN6rWDfK3LzkSoRAoswdt7Nl9LmhRmcv0lEk68sE6gxh1EeudoEKUi2FqzVz0Q5y210goS1Sa%2BJjO%2BoKRZaTb%2BZTqTtKaIRLA4eFobno49Jn6V1GsiMbiqkQ7biox5z7F2RCdn4yj9OzgeU%2Fd%2B0H%2BCA5IrMkMPoXHWCtCYKB8DxrOs1f8p6RNJTIZYNkfl84yLqPxd8SJgE%2F0w9kB1O%2F0WsR3IYd4yRcv0lmrZ4K0YXmytjPIRTUne%2F9QjmOcnr3IbugvgKBC67fOyHsgbylsoKMcLHCY1%2FQzm2qEBkoUYNUKqed%2Fy6yISnOAtfqBKjmGe6sb%2BaPlHBACeuT7lQwZSdEw4B8%2F9Dt9g5%2Bs7utPBCGwZenYeKKh8wcAIezpWjXWKD3HbMjBAIlhH3qrClN3EjRuR7qP75J3jMSpaxwe7ZsotMYD42Qr8shm%2BtW8DnMJPwp8QGOqUBZj1qZCDgTiulRmfcaJY1ClI%2FIaPAu6euX3BH0ihEdAo1mA4fzz7slACOvxBDoYlpKIQ4gxQtw5uRP1EIK6fp824VjXJDfTX7q3IhJqgidVK2hpB3cRU1eFWMj3gZS9n%2FnEpcGMDtpi%2BjQUIXoO88q6x9KRzBzh9j7pbbPbKPgW05v8rVDTIhh%2F6jA9rhsiiQoj8ZK4Pr7CaMhLWihZEX8tQF7vvd&X-Amz-Signature=94f8c5be0e125ff9b8a5a0c2aed6160bba3f6669fac5d9addbc3b1ebfec40992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW4MMSHR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFLp1AO%2FI7GpM0vQnecukSJX1w7TEFP0eTNzWSA%2ByAwmAiAUKH%2FQd2JslM93pxmKk6YaEW7hnKUgXqgun5ON%2FOkB6ir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM5NUu%2FY5wIm1tJFz8KtwDS5gTKuCjKZSwZiYke1QwW1pPWA%2F%2B0xJOZPx%2BEHXyk9WF4X5NuwoulNCeekjq8Mv1zo719XKAUfq4AZaamA%2F1rgj6RGh4CKKDRBVGOW8y5KcvLBdW1u4qdWNv8Ay4GqUKGrhgf8m3YJj64lQr3P9S9ZkYXL6HKKRh3gx1HfJHlzM4R6gHg4E0z0%2BRcepgkk4EogFB6c8h5701%2Fs900V2RXS4jDaInpX6wz87shF%2FQ9zCGTmiVz6zzhxXYPczEjIDnuTajUg4Es%2FtJ%2B%2B9g34QAtFFVlbAzJVWbSJh%2Fzmwb3igyNP%2B8XHzh%2F1IUg7YCSIupoFB%2Bh9rWrkSIliUTtX7BqgZPyCRk%2B7uILG6EGG4XRii0O6IcKXIYHGtjv9Rt4KO6U%2FpSR5hKcEtrw42lpyBxfDvg8ltbXcspAQ41orIio69fLQ8EDSC3GRxEUM8b5J8FS5Rp7xwGn7OTNQ02zNan6lGXmu4IsxMV8QXADaLtq9iZhtLBcQplCPY0tLo7W6zgBAlpJyoY7Y8X9tHRrghH4yWR840x%2FNaxPiYVvLnJXDc54A6S4%2BUZg0NUPgiWf3ut6%2BoYUR3y3QC9gOtSn4svS3oFN7JfoByY%2F7z2d9LjKf1PTCo9iIIGuwVDm50w%2FOfdwwY6pgFTILrhMvZhhKrlBHM6ZG3g1MyBdbfmcqHAqX5wTK3PMD5iVlSO6KaO7Mtw4lxjIJozASVaqAiV24l5Vpl9VI8fUgg1a0RyqI5dJdmUe49YBH9Ni4UU%2FgNTUK8Xz2vsf%2BE%2F2VKUge9FONSXc3OR18dUL0a8EJ5zJgHj1aMbvPte%2BDtUaMWC3RW7qJmiRvYI1oJLacI1T8k3O1MjMEtjWz9%2BstKK25B%2B&X-Amz-Signature=ceaef38f6d5dc761093bf5a42dfc823c312767499d04436565d381fd301c9f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTFX6D4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGd%2Brl7xuH%2FALfWWsHmXfNOgKgX0uspoTbLXaYnIWeRyAiBIdKK4j743KudzqGJ6MzsJLomqQE0e%2BjVZJ7Gzb3gyASqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F62%2BcE5C9TfRbJmxKtwDE3dQxE8XbPlKdfeeq%2Byl5h%2FzUdG%2Bn5rM%2BBdj3l91gO5Wg%2FuSqkK3loG1yQhWJ6FuiGPqNp%2FDPkwsvEftbbUIkvJg5zh17uYKkx%2Bt%2FhU%2F0djCLSSLo7IlhNYPyXl6gAlZ0ZkkO6vBCGeuM3wnkA3BhbJmGeVoNPRaQYDL%2BS%2BmKkOJIdjWFuuTqgxkRiXxCo67WkwLE%2FKRlqXOPauh0VLLf5Cy7fqQA6Zds8%2FMr0%2B9aOAmMdGth917AMO4kjZ0mh1oMRydObckPC5%2FgwBT%2Ba5cvPO%2BjL5BQhsUHDHae%2F3AZWc1VbnNu9qtxCSQuZHMW33%2BShVmH7DpxbPGpun2bbw%2FDsanDY0eAf0SADEASonWBNgZ6TDm1rxme2%2BYgePmlIAqBsqUt9hW5w%2BIVqxg64T1RivsXtureQ0d%2BtCJlTgueQs7w1oaKTGrKke8PZWg2SNmG1sFecC1MW6r0OswwsLWesPZdOfryDgiE9tBxdRfjS8zRwPN%2Bpix54Hoj10Dw5ejfYxBhAmaaAn6nQQ1BrHVYN8aPJpQM5jZWzhW0PpxjdWQBo5k9rTVw0gg8N5XXgf%2FXEhqSYLWmm%2F9qO8txjC2kMmvMearib%2BGwYl3KIJWQ66m2VOm2x1MPIFbs%2Fkw%2F871vAY6pgFVUj546e2PD0lWztH%2BY1hWfLIuIYkZxRQ5Gf2ON29TMSXtdoE71e9X2la4EJ9S0OQxrCq2ZHIq4%2FQ%2F5F634U7%2F7kSa8sYeMrs1knySeOte7RConVE2KvqpyuC3urT1QMU2ffC%2BVhwhoGP0rLNShn2KiVmZC0mNDXmJFtfqCoDpbNANhg3XshQmmcJ75nKxuqfWEvonb0JQuDLNjyDE8QhU1UnjdnBd&X-Amz-Signature=090b966a812c28c83bb3c5c9fd997badad67242e9d75965bc00225e10aceca8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

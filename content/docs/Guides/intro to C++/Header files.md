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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QXCJ3JT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDiYKMo1viPov7m3ap%2FUokbXxIJVIk1mbHScJH%2BcIqu1wIgQSuuZK8agQqYPusJHeZn9F%2BsmZr4T8UF27XjJhxQsw8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPQLWkY9YQsz3%2F%2FiSyrcA4WoiiHaJW1fAW0AZaMsSY8N%2FqK2pQUvdqXoO1FnS3k%2F5ZgMOghm7%2FU6Jq9Pd%2F0mwusjH6ldZxbBA8BSvU%2BsMlMTZb3TRD6JqU0asKjUQAMzvpjG729jZSNIQV65uOMAaV8zcUnVJKs4EQOSeF59om%2Fqc1XYQu5xMOBRRWCvyeIxuwECN5thPUkA14rGfJwbRjnTIVcoemYEbyhG%2FIQe4AsN1FjGCRi20hahbw%2B4%2FG8xevJfyk98vCbg1YYHj9MdbawcMX%2Fu2fL3SCYe%2B8PbN2anDLzFQehsXpILlQBlAkwK4yIVb4O2SfHbZaLZno5z8GZxQVmov%2FGrikpQQyBUWgyKa2iToJbMfx%2FZ530s7hpXE99SkzIteLd9hCyNq9pZGCKh0Q302z5dOh2ZTmbTBAusplEMPBpkhaAB3N1T9dh8uZ5j2rCw%2B41Vk3cx6jRfGDX7MX4Uzgb1YmSSMAB1BCpkTLX8OCL8LsMHhwc0qRguN8HClheFmX1WR0YKt5C75aJxpNyJvcMopj87T%2FipNCjzhYYG6gA90CtD9B%2B%2FZHXplq5gyp%2FlZLFRVCBrChP5iF7vOokWUfLwxsZTBF4OxYdapVyASl%2F2mI%2FywWKS8pTo02ABUB3psey0ikBBMMK0v8IGOqUBcN1m2F6VgnaPVZXiHNKSrZdZkQmPlOnaR9e6NJlA6u9hj0q5f2u%2FaYQh9E2S3Xsxy2fwhjxz4Syujm%2Bz2V53IazN7yPKvbGHhxGxd7sF3e04jHYy1BoHMCrxHdOVE%2FPr7GN5%2F4VDTo3sy2Vy%2Fmp4%2BNpzlNCk1PinkakHlPdEZbiRJu%2FInPU95LlExaqYZS9czabcSV1kauutflcGUi9MsI9%2Bm1nS&X-Amz-Signature=f892f4af19d147d41752a5611e5f75690b6830b510fb24bf7d5099645a827bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

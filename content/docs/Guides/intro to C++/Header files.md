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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHT3U5K%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE3GeJ4LvmfuRcAKEpldCcAl6UW5xGXk1efnppYuNjtAiA6No6E5mfAmKfOkRbaueLXED8HliNkyFciOZSuvtBSTiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXdoXNwRxnnMe0iBGKtwDNqMnuHE48Fsp6lKi07b6XK2iRmQ7YjuFvZWHpN%2FVlOuS6MU%2BfKBZHX1HdiPdEMGxpSxB1rLOUk9VLCdFGF5Suly2o3y8hnj8TobwhOeBk6CHvYrpuCNbtBc3ar6sW9YMwBkBQRQj6Yivww3Tn5Nc8d9G%2FUulRDdcvcGUHX6hG57s1yRikx2tksWoinUnNsRVnsPcwQoJuPlJRT4vuJ6j%2BLwYosnsWZw0PkOYvXVv5fSzoV3ZKy5%2BKbsbbRH53WL1LC0CkRFobH3AyhIchMkS9yN9zP6jZASr8esyzlSLSH%2FoYGahG2iRJqRynTzzsCfBdemL4U8By1ezR5t9Vsi8XSaDkN9rSrIFXAE044t4B6JHzm%2BSKYkrT5OXumuA41Rt1ja0okx%2FfZ92ZranEgG9i69cCLorhVkNEq%2BJ%2BjEzUQJLqt0ZbsNZboua4aIGsHWl3lYWPCd3NMHm6T6DiGglBaNswRnijoEvfi7lHfay%2B%2BCtvU%2BHtIrm4%2FDTSAc9cN%2B8r%2F2LyT2BK9lziU74hDQ%2B4nI9iRwTomBZIOyAmLLHGLchFN%2FNRBnZTcZfaMYd0aUai97Zt6hHKdcE%2Fyzb7BDUmfE40ky7r3v6OMvl8i0HMoGa8icAm0ofSxx%2FiPEw94y0vQY6pgEu3CZulpKJdRp3LBwjS1qzuKp1zyDbU48wTisJgdH8YZjsEGjnQezF8Hf1ntFUo74TM8MH158pJQLtlXJHQnb1N3eWLOZuSczvuJtXGklVU5OVy2bXQdqXkDMGt4JEZkw%2FKxLWJCWw3VGD%2Ba3BxpCiCpxvXbx0RJwK9GVVt%2Fw5jdNZ5zJ6o2wQT8%2B9WxrYh0VOSKkZph%2BfqGxPn%2Ff2denzV1yFbmln&X-Amz-Signature=dd285c61cc88e6cd789e77541928cd1bdfc7e613d3fda5572add01e1165e5de5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

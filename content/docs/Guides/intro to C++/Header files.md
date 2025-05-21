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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSYGEYGF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCfEdz0LUBmxe7c1lO0hjYXIViaRFFxz8g3NwfRihHxvAIhAKKzv90bBO%2BaPRjzFKEdgo31I%2FZ1Yte8Dba49pVcHqR%2BKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkDOUfc0M3TmdTB4Qq3AOYZaLc0pPFIVqkWYSsnXFeqT7YmSSlyKTUtKN8Km30dl6FYOfPlkINeaD%2BQeJGSaum4hv7S%2BOETL5gkvv1UIjqRqWatjc30CJE722k4nDdT59MUErW4AgBcoCCZCPh9Oki2l9IZQALmA22d8g6MSoR%2FmfYEHb%2FlgAHy3jVqC%2BFc5j3ZPkl4ZXMWLI8zsIHkDtrRkOVOIp6u9Y89aOwR%2FJrqp5UtqNE1cxdrg8AmCchSIY4b96JoPdnN8CvhJhRukc9A%2BstdSOyUQ4JToKNXlwCf%2BAJ%2B9I9TqNq%2FWQmS5sn4JWCS9Zt7ryRyEb0tYE5svErjVoPdlSaxbg8BdZPiUHvSdEw27PSTeqdkQ%2FHFnJuiEGsmtIlkNaTVHT%2B%2FnvSP3JPrgi%2BkyCnbP2om1aznJ2WFcNsbZIf9VSfkTxa5uBx8qAyKH3Y77PiCp1Ayy%2BH6ZmAS33wFmWtL5jSPxaz5LAxigppFBQfrpV1esZNtDhYfBZ30qhsu17b8Hhhk5JEeHUY%2Bm2uCortnMQ2LSnlX8E7tDydBAMCHnm11k7Ao6nhMs8HVQLzAVX0Yb%2FaCjRp4U7De4omP4kG8LlrcQYkRC%2BNvYc7nL4nmjEe7O2WijfQzGKQa5POFDYqJnUj6TCRobnBBjqkAZMqh8cCeeGMFc6LXTzh%2FBK%2FRUbVMVSxazGxlJOdjCWeZxeDzAA2fah%2BsrBIVh3h5CBleTGzLfqysIHiGkVCpNFkqCRy%2BigvmnbSgsB4ChY8WbP1WlZHz4DIy35iUFzpS5lspW0iQeklAKtQCCIUD9WxX2UJr%2ButdLBhoMVQvEUvwylzitzEyfzMrg6Bi1tnGwVnBZVcuJMMICiui5TOGP8WuDAs&X-Amz-Signature=b250d67b05b1b91a17c84b9a44b4a7794ef9e26fce4aa0d2e1ced85c05d967a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

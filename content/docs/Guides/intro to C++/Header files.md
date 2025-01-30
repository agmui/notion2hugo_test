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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NKWNBD4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3cygMvxA7%2FUzocuzuVpE8yayS0RXmDkaJ2KaXXDsW6AiAsglBCb6V5jUxoevQxo7xuPpF%2FMjSap2jI6nkY7rE5gCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNluB9WcrORWRA2gPKtwDhdLNxK7KQU63%2FFNa%2FEjDzmJ93huRusG6xdtsD9XcNz8pS1g112Q64kaLe%2Bg%2FaMzaIBddRwBgGHlZ0y3VXMJ1iympKosGJQdJFpUPnwRUkJu%2BLJXR5bxujy1VJRGaaHBQ%2FdtQw%2BSBeq2ozaDBZC83ZQYS9IkmQUxzc7tMlcpg264zzNmqJFcjgXlrHA3kPnftp%2BhBbTdLCYLUtIhd350LHVvgBp5%2FPIXpAWj76roHoIYLsy%2Fn%2B6jlMLhjaJBhci%2BcJklfTJlDgKMCm3JYtWekcGZtebRWKbkaR3MCwtq0SZCtAweaAq4St0o69ePqdhz6HCWpN8i62tC69KA5T5%2FuwI73fzRQ34Br7fuPXZR6g56IWDgAOrQqMhiSVe6ti47Jyx%2B5eGZDeqIwlT4yJFXQYwchVAEv2GNmIVx6HLxvPfCgupMR77f1ESy4QwgIl4yr7Z8xJ1F5ofAK%2ByaHVMlueBajktoVHHzQOGN5USCq1e0q8TorcblWSIBjxsTKQqiqU2DHkjo8sFVAOrxXfywVHzebTWj0ktcZAUSW1X8NHvPI8M%2BplCNnYWFxEKoErQmzdlXEbX1xa6yzLlTzSVCtud3hI5SLaj6DkS8Rv8MEgvjAtzAzzaZL5dykny4wiu7svAY6pgFHewkSnifXLvDHTElNEh2VafE58HbvWAM8KXyPDFd6QK1FWRGM35WhQ%2F9RHmQRrs730l9FPcTO8TZi6bsE3rgaQ7S3sdBfdb7n7gJV1HJH%2BpDd8aEaOqYS%2Fa4QSNFQXUF33GyC5bob%2BZNegbPrPBwj4rNmAy4ttyyLUrFTq1hx%2FdqUlUWkmHJR1aCgMQqLYF0dTsyowHtmN46JRzpU2VNs3GkSV2VL&X-Amz-Signature=9e0082a559b26a0b96f193dc1b370b1421887ae4785158d70b166cd946c7ffee&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

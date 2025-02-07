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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SGAW5T%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIETkAnJbdQWsgboUagVcDp%2Flefwv7li%2BLzGmEifIiTGFAiEAoXOoPFzMuVCAXswzF9OdBZd6MwRy0zWxVpM%2FOJg9pqAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDA8q%2BgxmVUFd2UphWircA4pW64KBxclpOf6qx1H4H0XIyfH1QD2DJ%2FYC4cXTUHrKGLDpzYNoGeIQxuQYIT3sqWDlDVXhHNqnuwHk7BFVe2kLmh69s6Bq2u%2BNkA6LG0n3KwUsNFn8CIVLd0JUgD%2BBqeYItAjd%2FNNTWnRBFxesDYuH7CnjYwTKIN%2BhOvGHQBY9oFgQFS6v7sYxHPYsSKk2UfXQPrTwnSiPI8%2FL0a4HUHJpwY0l48%2Fn7LEURNyeINh3Um4HMcGMVQXWBvlmSYvuLmCHowa%2F8dD4N7Drk2NQG5rQ5VJJR00%2BekS6fNfAux9K%2FE5xY60YcLYPkuUSqoM%2Fq0Fpmsvh81hwWmaYjzG43wx6P7BnLYKb2%2FHvOI3StkHFl27o9CCIO2uCsTlhWNgIsdWykoeRU2q6VvqMdgKUVxp0pXeNtJd%2FtKveupry0%2FSfUTcvwaXf88qT%2FJ70TdOa6LuzM6wQz4bzo79tYkKXaew9NcITZWIrpOHJ0F5xTXUU3NGOUDprDApoHyVhtVC5CHLo%2BUGa6rzsHMqAMHDja9ogcrK14zFroyQ4tWwbyHbQy3a7GG%2Bzy%2ByMnqHrlaN0v0kmRwyC1UEONWnMOg%2BtjCz4PyvD5pN5sl04fI4BSS3Hr7jO%2BWJwpsWpyJPyMIibmb0GOqUBxAwTy5t1sPrKOjydtkrfqejrQaXTjOfGXqKywPqdi59Afe7uuyVpZ3TF6cPblz8P6mPV9ySHvLEPcG2zWA%2FlvGbcpLxQQqTr4nWlFWWX%2B6OdAM881w44WZrbP42A4nNca3A2rZmj3Pjcn%2FTcdu0Xiud8zPhso4RDYAWVdzF1r4JDM8ud4F8NdICE%2BqKO%2FeH%2BaMwwFdV50sTmnX1mzI%2B45szjypPH&X-Amz-Signature=614abb5ab282c32b48377ea5d56befe64c6b893aaf52cf37fec293142a9e75d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

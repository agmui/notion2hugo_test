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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQXIXLSR%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIENaTmgxiVPZhIs2hbV1V%2BIy9mrscgE%2Fn1F9H683C9iwAiBoPErB5f2ih%2BbXWAReHYuT01voBiBui0sylrVfeUgwQiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgpJKUIn0kZ0DWDcKtwDpXFm6QpCJXsuSpkiVcub6QBN4g9DYkJk08yWC%2BxnuRzqQdbXCjkGAOL47n9nrf%2BODfIzYBHsz7snLJte5VKqYqu38u1Vnmy2IQsXgioKV1o5yppoq7V3bCk2JqwioHKD5olXRX2zdTWC9YUdj9NjSgY3N%2FbcxnTWJg8iBuXnHylWj4EpvNFFoCHPJFDrWA1Aw6BKyaeaA5ApwEwt%2FqXtRgwcGR5KsSoA7yOU31ikn6wMQr4%2Fj%2B3TbxilJRCyxVQk2ZNI7pUmXT0toTOa%2BdOyHnF7ZfaI4RwKMYuIydh4Fd5UktTS2CiWHdr%2BI42U57Q5ZWDUzkYOwaDDkuk7yQMRXnk9EmsmE14ag0sKZ3whHNAktiA5TH6UjhCZjmsz4i5EBmeTBQ3oOFsaeGiAYI52G7f%2Bcsjv%2FlZfJjfyIh67OoD7dsuDe%2BRwy0KyilKv3XCFs5s3FP4%2FNj43S2Gx3b%2BKU6pzjGbAYnfD8uShtMLjdkaj9M3un8IKOghV%2Fqsh8Cx2Jw52VExlxsSwDkIrR5fEARNqPhQGdk7LU2JGN0XTfIAr%2FfWligxtJmcz8Ues4ACVP4BqRMTFgiA7Zl1ygytOoiGa1uEa3Bkvzc4dHv2A%2Bg7XXNpMDCK4cizN1JIw%2B8uuvwY6pgGNKWxOKBay0AeNayf2PXph%2Bmcz%2B4vIg77UyJPBVazmBf4XOW1RB6cELWigT2KmsHmvOVKy7ceBaHwednefkHKJzGMgynb5Jkq4ZR%2F%2BcwPoFAdR%2BXTH4xVf%2FRSuPVP4WCN9NbYDKzjWXuR5OzJV5zrN4glGZJbMo5Un%2Fynzus7OYYTAKQ9lisp6fS7zXavf1bUTmZi3VpKXTIYUXrqIQbOz4V9Py3Yx&X-Amz-Signature=3e9d7774258959215ba85fa0cbf49861a781504a7960c02c3ea744e38ff6f6ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

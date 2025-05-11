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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ECKQAV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEhnmbig%2B4rNf9CTpMwVUpDGXSuGvWrECkMP%2B9gXWyanAiBosfQCbgOkONu2b%2FneGrfpBtlKC5xicROupeFXM%2FEC9yqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B2zco9Zc0wXbaIIpKtwD0rxLXg65DTQOX3uK1EGW80lS9Z68%2FNrvsoE6SQu6mJW1BCW213QRQExFkmDDvz2XkVXhXPoAolm%2F0Ro92SEoaziTyMgc%2F3eJv4ZReXchNklmCvIf7NnBpejW2wua9cVKGGcPwaIpiYhXVR3ZJPRmN8oo2rkMS%2Fjc4QXnb9Q43KlBNXwVP270o08Jwe%2FQdy7VBlNY43lve5GUyOBBirD1aqBmX1mcmwa%2BPJWpaHYX6cOG9iUf0Od8KdRSxRA6HiYgNQd8KlUl6Cc8pTb306UR0BpLrFf3Q%2BIYt%2BItrM3CsMViOg5c4rvy27Wo2aXVA7%2FM1DBoWbR4%2BUT6HZEZRgC76zFm%2FJcHsfkbqFd1zzJRhaHwy%2BzryRuuEECILbmbmeG6Fq68hQZUX9xKKcBb2gSH1Cg9VNY4iXrLlBuToK1AgttCibW6F82cKtEozym4shCbimeB54pHH6NnvN5r7trt7KC644Uku7FepyWmbWB6z8P88KbLrJbJNhnrC18Jq4SmDtfhYnPqQdvkOAktnBHPZjHUBL5j0PP9wMWfGsuVTcCMYauyKPnWIKjHT%2BpaN9nPf6hXDtdW9biC%2BV%2Bw1nup%2B5ZMtQrdnLDLaHR70w0gRCXEIcYM91YozE3b%2B98w67iBwQY6pgHTH%2FaTlikgZnQ8JRlpcGjglJsPZ%2Bfk7H%2BZ66HirUeGVcjCeUAHX4W%2BjBIukqjMHwIFSFIsGSk6sfAiOF5%2F4tjstzMmImW3xZumnYKYX8yF254YuuZSTQ%2B9Mv8xh2rv43UsAI7IU10QyOzohItg7VhAK9fa16cBVE4mOvxRlpH7fUFN6Ext46hqU1lNf3cConuKZq2ryTN%2F%2FDlKULgtqVNeUGg7nPZx&X-Amz-Signature=df937bc5c09b4fd7ad4b5fb6c75a1a3fa5452f0bbbf9bca3da11666b77f22c38&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

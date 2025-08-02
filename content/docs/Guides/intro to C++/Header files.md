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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLXK2UY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChj0Zh1nAVCntOnXkLTDf49VPy6JIySDU1eEqjr9H9PAiEApF3bkKTfq634BDDLaE8mXBVSU7etaKh2X8E2DE2X%2BoQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPqYgEJ5oTK9czrIVCrcA0kOOvQISgZWfD%2BYvZwjMpqX5%2Fi6dC%2BfZMOh7fi78S47VV3yEMSAE2oGqgIeblk1flovP8xR7XMn6Fr1ran6UwyAvF8eQnpdNEgNTb7Rp7JY7D9Xx2q7KQsOLRGGBBX3Ed09Cfqau8c7cEj4NZUAgJFy5wywBwcgVHrtUUMKNH38tcGbj53YyrGE3RDn0m9ddAbtxnzqD8y9ulFa1l4PTZZqKjn%2BSwmPmA13oK0S3s9glI6DbdE2Jnw9f2eMV5ima954EE29Z1qhdFxzxMqAOM6eubLnR%2BrmLX3U5JgfJRFF24%2BfNc0gndHJL3cCnlRS3JRIz28plO1PhLBwLuIdIt6h0D%2BRCmS3FSxp9PSGlkC1K7Ok5U91YDJ8S91gh6bg6gXmzOtWUIzlOe8BM0ymS5DBxvZQ1UYmqUljnlcI6dqPyGhRzqnydobn61EdPHaTndPVn8O57KNIQ90rg1MtXpLAb2hM0pBHJmBx8iiJo4%2BuvFhykFbPY%2FElpDBDzFGveFWLrM4HS0I%2BdqI8UmJBxQYsf1Sif8T0GdCof79WDKK3Olt5daUBNx8b0988JiTmkmjaBFCdI%2BwIIQZP69tSwvztZhCWh4aKfvgTenz66fDneQBgbPspfjHlgyYZMLnwtsQGOqUB8kvXXj5XW0FeOEV1Vul19ea8owxtBD%2BJFdvC%2BATVydWUJ3Y0ILLnIqDVGimLrtXYrLg3nXAeHojxFXo4qWfMRaNvdQRYTHJaswqRX9weMIqG5sGuNej8T6z7kbJfrJudFCVXL6%2FktIxKEMU1Q%2BeiGhC5sc5DWut3TOMrbrUTmh5ArzTs%2BvpxLdrz0UZ%2F0tnB6nCJs%2BzrB88g9QLn1Re5uZD2Wch4&X-Amz-Signature=8e5ecca1b66de5ebb15dfbdc0d262bc841f4587dc2177b8b1cee23d3bac1b8cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
